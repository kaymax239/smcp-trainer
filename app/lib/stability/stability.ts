// Motor de estabilidad y esfuerzos longitudinales - SMCP Trainer
// Funcion pura, determinista, sin dependencias ni llamadas de red.
// SIMULADOR DE ENTRENAMIENTO. No apto para uso operacional.

import type {
  VesselData, LoadItem, StabilityResult, CriterionResult, HydroRow,
} from './types.js';

// ---------------------------------------------------------------- utilidades

/** Interpolacion lineal con extremos fijados. */
export function interp(x: number, xs: number[], ys: number[]): number {
  const n = xs.length;
  if (x <= xs[0]) return ys[0];
  if (x >= xs[n - 1]) return ys[n - 1];
  let lo = 0, hi = n - 1;
  while (hi - lo > 1) {
    const mid = (lo + hi) >> 1;
    if (xs[mid] <= x) lo = mid; else hi = mid;
  }
  const t = (x - xs[lo]) / (xs[hi] - xs[lo]);
  return ys[lo] + t * (ys[hi] - ys[lo]);
}

/** Interpolacion cuadratica de 3 puntos: captura la curvatura de KM(T). */
export function interpQuad(x: number, xs: number[], ys: number[]): number {
  const n = xs.length;
  if (n < 3) return interp(x, xs, ys);
  if (x <= xs[0]) return ys[0];
  if (x >= xs[n - 1]) return ys[n - 1];
  let i = 0;
  while (i < n - 2 && xs[i + 1] < x) i++;
  const j = Math.min(Math.max(i - (i > 0 && i === n - 2 ? 1 : 0), 0), n - 3);
  const [x0, x1, x2] = [xs[j], xs[j + 1], xs[j + 2]];
  const [y0, y1, y2] = [ys[j], ys[j + 1], ys[j + 2]];
  return y0 * ((x - x1) * (x - x2)) / ((x0 - x1) * (x0 - x2))
       + y1 * ((x - x0) * (x - x2)) / ((x1 - x0) * (x1 - x2))
       + y2 * ((x - x0) * (x - x1)) / ((x2 - x0) * (x2 - x1));
}

/** Regla de Simpson sobre malla uniforme; cae a trapecio si n es par. */
export function simpson(y: number[], x: number[]): number {
  const n = y.length;
  if (n < 2) return 0;
  if (n % 2 === 0) {
    let s = 0;
    for (let i = 0; i < n - 1; i++) s += 0.5 * (y[i] + y[i + 1]) * (x[i + 1] - x[i]);
    return s;
  }
  const h = (x[n - 1] - x[0]) / (n - 1);
  let s = y[0] + y[n - 1];
  for (let i = 1; i < n - 1; i++) s += (i % 2 === 1 ? 4 : 2) * y[i];
  return (h / 3) * s;
}

function trapz(y: number[], x: number[]): number {
  let s = 0;
  for (let i = 0; i < y.length - 1; i++) s += 0.5 * (y[i] + y[i + 1]) * (x[i + 1] - x[i]);
  return s;
}

const deg = (d: number) => (d * Math.PI) / 180;

// ------------------------------------------------------- acceso a las tablas

/** Area seccional inmersa de la estacion i con el agua al nivel z (Bonjean). */
function sectionArea(v: VesselData, i: number, z: number): number {
  return interp(z, v.bonjean.drafts, v.bonjean.areas[i]);
}

/** Momento vertical de esa area respecto de la linea base. */
function sectionMoment(v: VesselData, i: number, z: number): number {
  return interp(z, v.bonjean.drafts, v.bonjean.vertical_moments[i]);
}

/** Semimanga en la flotacion. */
function halfBreadth(v: VesselData, i: number, z: number): number {
  return interp(z, v.bonjean.drafts, v.bonjean.half_breadths[i]);
}

/** Fila hidrostatica interpolada por desplazamiento (arranque del solver). */
function hydroByDisplacement(v: VesselData, disp: number): HydroRow {
  const rows = v.hydrostatics;
  const ds = rows.map((r) => r.displacement);
  const pick = (f: (r: HydroRow) => number) => interp(disp, ds, rows.map(f));
  return {
    draft: pick((r) => r.draft), volume: pick((r) => r.volume),
    displacement: disp, LCB: pick((r) => r.LCB), VCB: pick((r) => r.VCB),
    LCF: pick((r) => r.LCF), Awp: pick((r) => r.Awp), KMt: pick((r) => r.KMt),
    KMl: pick((r) => r.KMl), TPC: pick((r) => r.TPC), MCTC: pick((r) => r.MCTC),
    Cb: pick((r) => r.Cb), Cwp: pick((r) => r.Cwp),
  };
}

/**
 * Fila hidrostatica entrando por el calado en el centro de flotacion.
 * Es la forma correcta de leer una tabla de quilla a nivel cuando el buque
 * tiene asiento: a ese calado el area de flotacion es equivalente.
 * Interpolacion cuadratica porque KM(T) tiene curvatura fuerte con poco calado.
 */
function hydroByDraft(v: VesselData, draftAtLCF: number): HydroRow {
  const rows = v.hydrostatics;
  const ts = rows.map((r) => r.draft);
  const pick = (f: (r: HydroRow) => number) => interpQuad(draftAtLCF, ts, rows.map(f));
  return {
    draft: draftAtLCF, volume: pick((r) => r.volume),
    displacement: pick((r) => r.displacement),
    LCB: pick((r) => r.LCB), VCB: pick((r) => r.VCB), LCF: pick((r) => r.LCF),
    Awp: pick((r) => r.Awp), KMt: pick((r) => r.KMt), KMl: pick((r) => r.KMl),
    TPC: pick((r) => r.TPC), MCTC: pick((r) => r.MCTC),
    Cb: pick((r) => r.Cb), Cwp: pick((r) => r.Cwp),
  };
}

/**
 * Hidrostaticas exactas para una flotacion cualquiera, con asiento.
 * Todo se integra en la flotacion real: no se aproxima leyendo una tabla
 * de quilla a nivel, asi que el asiento queda correctamente representado.
 */
function immersion(v: VesselData, zAP: number, zFP: number) {
  const { stations } = v.bonjean;
  const Lpp = v.particulars.Lpp;
  const zw = stations.map((x) => zAP + (x / Lpp) * (zFP - zAP));
  const areas = stations.map((_, i) => sectionArea(v, i, zw[i]));
  const moms = stations.map((_, i) => sectionMoment(v, i, zw[i]));
  const ys = stations.map((_, i) => halfBreadth(v, i, zw[i]));

  const volume = simpson(areas, stations);
  if (volume <= 1e-9) {
    return { volume: 0, lcb: 0, vcb: 0, Awp: 0, LCF: 0, IT: 0, IL: 0, areas };
  }
  const lcb = simpson(areas.map((a, i) => a * stations[i]), stations) / volume;
  const vcb = simpson(moms, stations) / volume;

  const Awp = simpson(ys.map((y) => 2 * y), stations);
  const LCF = Awp > 1e-9
    ? simpson(ys.map((y, i) => 2 * y * stations[i]), stations) / Awp : 0;
  const IT = simpson(ys.map((y) => (2 / 3) * y ** 3), stations);
  const IL = simpson(ys.map((y, i) => 2 * y * (stations[i] - LCF) ** 2), stations);
  return { volume, lcb, vcb, Awp, LCF, IT, IL, areas };
}

// ------------------------------------------------------------- construccion

/** Arma la lista de pesos base: rosca + constante. */
export function baseItems(v: VesselData): LoadItem[] {
  const p = v.particulars;
  const c = v.constants;
  return [
    { id: 'LIGHTSHIP', name: 'Lightship', weight: p.lightship,
      lcg: p.lightship_lcg, vcg: p.lightship_vcg, tcg: 0, fsm: 0,
      x0: null, x1: null, segments: v.lightship_distribution },
    { id: 'CONST', name: c.name, weight: c.weight, lcg: c.lcg,
      vcg: c.vcg, tcg: c.tcg, fsm: 0, x0: 25, x1: 35 },
  ];
}

/** Carga una bodega. stowageFactor en m3/t; si se omite se asume lleno al 100%. */
export function loadHold(
  v: VesselData, holdId: string, tonnes: number, stowageFactor?: number,
): LoadItem {
  const h = v.holds.find((x) => x.id === holdId);
  if (!h) throw new Error(`Bodega desconocida: ${holdId}`);
  const volUsed = stowageFactor ? tonnes * stowageFactor : h.volume;
  if (volUsed > h.volume * 1.001) {
    throw new Error(
      `${holdId}: ${volUsed.toFixed(0)} m3 excede la capacidad de ${h.volume.toFixed(0)} m3`);
  }
  const fill = volUsed / h.volume;
  const vcg = h.vcg_empty + (h.vcg_full - h.vcg_empty) * fill;
  return { id: h.id, name: `${h.name} (${(fill * 100).toFixed(0)}%)`,
    weight: tonnes, lcg: h.lcg, vcg, tcg: 0, fsm: 0, x0: h.x0, x1: h.x1 };
}

/** Llena un tanque a un porcentaje dado. */
export function fillTank(v: VesselData, tankId: string, pct: number): LoadItem {
  const t = v.tanks.find((x) => x.id === tankId);
  if (!t) throw new Error(`Tanque desconocido: ${tankId}`);
  if (pct < 0 || pct > 100) throw new Error(`${tankId}: porcentaje fuera de rango`);
  const weight = (t.capacity * t.rho * pct) / 100;
  const slack = pct > 2 && pct < 98;         // superficie libre solo si esta slack
  const vcg = pct > 0 ? t.vcg * (0.35 + 0.65 * (pct / 100)) : t.vcg;
  return { id: t.id, name: `${t.name} ${pct.toFixed(0)}%`, weight,
    lcg: t.lcg, vcg, tcg: t.tcg, fsm: slack ? t.fsm : 0, x0: t.x0, x1: t.x1 };
}

// ------------------------------------------------------- reparto de pesos

/**
 * Reparte un peso sobre [a,b] con densidad lineal cuyo centroide es c.
 * Devuelve toneladas por celda. Conserva peso y momento exactamente.
 */
function spreadOverCells(
  edges: number[], a: number, b: number, w: number, c: number,
): number[] {
  const out = new Array(edges.length - 1).fill(0);
  const L = b - a;
  if (w === 0 || L <= 0) return out;
  const cp = Math.min(Math.max(c - a, L / 3 + 1e-9), (2 * L) / 3 - 1e-9);
  const q1 = (12 * w * (cp - L / 2)) / (L * L * L);
  const q0 = w / L - (q1 * L) / 2;
  for (let i = 0; i < out.length; i++) {
    const lo = Math.min(Math.max(edges[i], a), b) - a;
    const hi = Math.min(Math.max(edges[i + 1], a), b) - a;
    out[i] = q0 * (hi - lo) + (q1 * (hi * hi - lo * lo)) / 2;
  }
  return out;
}

/** Primer momento (t*m) del reparto lineal dentro de cada celda. */
function spreadMomentOverCells(
  edges: number[], a: number, b: number, w: number, c: number,
): number[] {
  const out = new Array(edges.length - 1).fill(0);
  const L = b - a;
  if (w === 0 || L <= 0) return out;
  const cp = Math.min(Math.max(c - a, L / 3 + 1e-9), (2 * L) / 3 - 1e-9);
  const q1 = (12 * w * (cp - L / 2)) / (L * L * L);
  const q0 = w / L - (q1 * L) / 2;
  for (let i = 0; i < out.length; i++) {
    const lo = Math.min(Math.max(edges[i], a), b) - a;
    const hi = Math.min(Math.max(edges[i + 1], a), b) - a;
    // integral de (q0 + q1*xi)*(a + xi) d xi
    out[i] = a * (q0 * (hi - lo) + (q1 * (hi ** 2 - lo ** 2)) / 2)
           + q0 * (hi ** 2 - lo ** 2) / 2 + q1 * (hi ** 3 - lo ** 3) / 3;
  }
  return out;
}

function weightPerCell(items: LoadItem[], edges: number[]): number[] {
  const Wc = new Array(edges.length - 1).fill(0);
  for (const it of items) {
    const spans = it.segments
      ? it.segments.map((s) => ({ a: s.x0, b: s.x1, w: it.weight * s.fraction,
                                  c: 0.5 * (s.x0 + s.x1) }))
      : it.x0 !== null && it.x1 !== null
        ? [{ a: it.x0, b: it.x1, w: it.weight, c: it.lcg }]
        : [];
    for (const s of spans) {
      const part = spreadOverCells(edges, s.a, s.b, s.w, s.c);
      for (let i = 0; i < Wc.length; i++) Wc[i] += part[i];
    }
  }
  return Wc;
}

// ------------------------------------------------------------------ analisis

export interface AnalyseOptions { seagoing?: boolean; maxIterations?: number }

export function analyse(
  v: VesselData, items: LoadItem[], opts: AnalyseOptions = {},
): StabilityResult {
  const seagoing = opts.seagoing ?? true;
  const itMax = opts.maxIterations ?? 120;
  const { Lpp, D, rho_sw: rho } = v.particulars;
  const warnings: string[] = [];

  // --- totales ---
  const W = items.reduce((s, i) => s + i.weight, 0);
  if (W <= 0) throw new Error('La condicion no tiene peso');
  const LCG = items.reduce((s, i) => s + i.weight * i.lcg, 0) / W;
  const VCG = items.reduce((s, i) => s + i.weight * i.vcg, 0) / W;
  const TCG = items.reduce((s, i) => s + i.weight * i.tcg, 0) / W;
  const FSM = items.reduce((s, i) => s + i.fsm, 0);

  // --- equilibrio: resuelve calados en AP y FP ---
  let z = W / (rho * Lpp * v.particulars.B * 0.8);
  let zAP = Math.min(Math.max(z, 0.5), D - 0.5);
  let zFP = zAP;
  let hs = immersion(v, zAP, zFP);
  let converged = false;
  for (let k = 0; k < itMax; k++) {
    hs = immersion(v, zAP, zFP);
    const disp = hs.volume * rho;
    const dW = disp - W;
    const dX = hs.lcb - LCG;
    if (Math.abs(dW) < 0.3 && Math.abs(dX) < 0.002) { converged = true; break; }
    const Awp = Math.max(hs.Awp, 1);
    const MCTC = (disp * (hs.IL / Math.max(hs.volume, 1e-9))) / (100 * Lpp);
    const dT = Math.min(Math.max(-dW / (Awp * rho), -0.6), 0.6);
    const trimCm = (disp * (LCG - hs.lcb)) / Math.max(MCTC, 1e-6);
    const dTrim = Math.min(Math.max(-trimCm / 100, -1.5), 1.5);
    zAP = Math.min(Math.max(zAP + dT + dTrim * (hs.LCF / Lpp), 0.3), D + 2);
    zFP = Math.min(Math.max(zFP + dT - dTrim * (1 - hs.LCF / Lpp), 0.3), D + 2);
  }
  hs = immersion(v, zAP, zFP);
  const vol = hs.volume;
  const lcb = hs.lcb;
  const areas = hs.areas;
  const displacement = vol * rho;
  if (!converged) warnings.push('El equilibrio no convergio dentro del limite de iteraciones');

  const trim = zAP - zFP;
  const KMtExact = hs.vcb + hs.IT / vol;
  const TPCExact = (hs.Awp * rho) / 100;
  const MCTCExact = (displacement * (hs.IL / vol)) / (100 * Lpp);
  const draftMid = 0.5 * (zAP + zFP);
  if (zAP > D || zFP > D) warnings.push('Calado por encima del puntal: condicion no valida');

  // --- estabilidad inicial ---
  const KMt = KMtExact;
  const GMsolid = KMt - VCG;
  const fsc = FSM / W;
  const GM = GMsolid - fsc;
  const kgEff = VCG + fsc;

  // --- curva GZ desde las curvas cruzadas KN ---
  const heels = v.kn_curves.heels;
  const dispKeys = Object.keys(v.kn_curves.table)
    .map(Number).sort((a, b) => a - b);
  if (displacement < dispKeys[0] || displacement > dispKeys[dispKeys.length - 1]) {
    warnings.push('Desplazamiento fuera del rango tabulado de curvas KN: KN extrapolado por extremo');
  }
  const kn = heels.map((_, j) =>
    interp(displacement, dispKeys, dispKeys.map((d) => v.kn_curves.table[String(d)][j])));
  const gz = kn.map((k, j) => k - kgEff * Math.sin(deg(heels[j])));

  // --- criterios IS Code ---
  const N = 601;
  const fine = Array.from({ length: N }, (_, i) => (60 * i) / (N - 1));
  const gzf = fine.map((t) => interp(t, heels, gz));
  const rads = fine.map(deg);
  const areaBetween = (a: number, b: number) => {
    const idx = fine.map((t, i) => (t >= a && t <= b ? i : -1)).filter((i) => i >= 0);
    return trapz(idx.map((i) => gzf[i]), idx.map((i) => rads[i]));
  };
  const a30 = areaBetween(0, 30), a40 = areaBetween(0, 40), a3040 = areaBetween(30, 40);
  const gz30 = interp(30, fine, gzf);
  let iMax = 0;
  for (let i = 1; i < N; i++) if (gzf[i] > gzf[iMax]) iMax = i;
  const gzMax = gzf[iMax], heelAtGzMax = fine[iMax];

  const values: Record<string, number> = {
    area_0_30: a30, area_0_40: a40, area_30_40: a3040,
    gz_30: gz30, theta_max: heelAtGzMax, gm_0: GM,
  };
  const criteria: CriterionResult[] = v.criteria.checks.map((c) => ({
    id: c.id, label: c.label, value: values[c.id],
    required: c.min, unit: c.unit, passed: values[c.id] >= c.min,
  }));
  const allCriteriaPassed = criteria.every((c) => c.passed);

  // --- esfuerzos cortantes y momentos flectores ---
  const st = v.bonjean.stations;
  const edges = [st[0],
    ...st.slice(1).map((x, i) => 0.5 * (x + st[i])),
    st[st.length - 1]];
  const hCell = edges.slice(1).map((e, i) => e - edges[i]);
  const Wc = weightPerCell(items, edges);
  const wSum = Wc.reduce((a, b) => a + b, 0);
  // primer momento exacto del reparto, para el diagnostico de balance
  const Mc = new Array(edges.length - 1).fill(0);
  for (const it of items) {
    const spans = it.segments
      ? it.segments.map((s2) => ({ a: s2.x0, b: s2.x1, w: it.weight * s2.fraction,
                                   c: 0.5 * (s2.x0 + s2.x1) }))
      : it.x0 !== null && it.x1 !== null
        ? [{ a: it.x0, b: it.x1, w: it.weight, c: it.lcg }]
        : [];
    for (const s2 of spans) {
      const part = spreadMomentOverCells(edges, s2.a, s2.b, s2.w, s2.c);
      for (let i = 0; i < Mc.length; i++) Mc[i] += part[i];
    }
  }
  const mSum = Mc.reduce((a, b) => a + b, 0);

  // empuje por celda: area seccional interpolada al centro de celda
  const Bc = hCell.map((hc, i) => {
    const xc = 0.5 * (edges[i] + edges[i + 1]);
    const a = interp(xc, st, areas);
    return a * rho * hc;
  });
  const bSum = Bc.reduce((a, b) => a + b, 0);
  const scale = wSum / bSum;
  const Bcs = Bc.map((b) => b * scale);

  const dq = Wc.map((w, i) => w - Bcs[i]);
  const sf = [0];
  for (let i = 0; i < dq.length; i++) sf.push(sf[i] + dq[i]);
  const bmRaw = [0];
  for (let i = 0; i < dq.length; i++) {
    bmRaw.push(bmRaw[i] + sf[i] * hCell[i] + (dq[i] * hCell[i]) / 2);
  }
  const bmClosure = bmRaw[bmRaw.length - 1];
  const span = edges[edges.length - 1] - edges[0];
  const bm = bmRaw.map((b, i) => b - bmClosure * ((edges[i] - edges[0]) / span));

  const L = v.strength_limits;
  const sfLimit = seagoing ? L.sf_seagoing : L.sf_harbour;
  const bmLimit = seagoing ? L.bm_seagoing : L.bm_harbour;
  const sfMax = Math.max(...sf.map(Math.abs));
  const bmMax = Math.max(...bm.map(Math.abs));

  return {
    vesselId: v.meta.id,
    weight: W, lcg: LCG, vcg: VCG, tcg: TCG, fsm: FSM, fsc, kgEff,
    displacement, volume: vol,
    draftAP: zAP, draftFP: zFP, draftMid, trim,
    LCB: lcb, LCF: hs.LCF, KMt, GMsolid, GM, TPC: TPCExact, MCTC: MCTCExact,
    heels, kn, gz, gzMax, heelAtGzMax, criteria, allCriteriaPassed,
    stations: edges,
    weightCurve: Wc.map((w, i) => w / hCell[i]),
    buoyancyCurve: Bcs.map((b, i) => b / hCell[i]),
    shearForce: sf, bendingMoment: bm,
    sfMax, bmMax, sfLimit, bmLimit,
    sfWithinLimit: sfMax <= sfLimit, bmWithinLimit: bmMax <= bmLimit,
    seagoing,
    residuals: {
      weightBalance: wSum - W,
      buoyancyBalance: bSum - displacement,
      momentBalance: mSum / wSum - LCG,
      bmClosure,
    },
    warnings,
  };
}

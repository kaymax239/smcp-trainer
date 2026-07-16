"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useSession } from "next-auth/react";

/* Rol derivado del dominio del email de sesión (NO hay sistema de roles).
   Mismo patrón que ALLOWED_DOMAINS de auth.ts: split por "@" y comparación
   estricta del dominio COMPLETO — un endsWith("@fidena.edu.mx") clasificaría
   MAL a "es.fidena.edu.mx". Default restrictivo: sin email legible = alumno. */
export function isDocente(email: string | null | undefined): boolean {
  if (!email) return false;
  const parts = email.toLowerCase().split("@");
  if (parts.length !== 2) return false;
  return parts[1] === "fidena.edu.mx";
}

/* ============================================================
   SMCP TRAINER — SIMULADOR DE GUARDIA DE MÁQUINAS (PROTOTIPO)
   VERSIÓN CANÓNICA VALIDADA — marcadores: ARRANCAR / SLOWDOWN /
   startDiagnostico / 5 fallas / anunciador flash-ACK
   Motor diésel lento 2T, 6 cilindros (tipo MAN B&W 6S50)
   Modelo físico de primer orden, direccionalmente verificado:
   - Ley de hélice: n = n_MCR · (carga)^(1/3)
   - T° escape sube con carga; T/C rpm ~ energía de escape
   - P barrido ~ (rpm T/C)²  ·  Fallas desplazan cada variable
   ============================================================ */

const MCR_RPM = 105;
const TC_MAX = 14200;
const CYLS = 6;
const TICK_MS = 120;

const FAULTS = {
  none:     { label: "Sin falla", desc: "" },
  tcFoul:   { label: "Turbosoplador ensuciado", desc: "P. barrido baja, T° escape sube en TODOS los cilindros, rpm T/C caen." },
  airCool:  { label: "Enfriador de aire de barrido sucio", desc: "T° aire barrido sube → T° escape sube pareja; P. barrido cae poco." },
  injector: { label: "Inyector defectuoso (1 cilindro)", desc: "Postcombustión: T° escape de UN cilindro se desvía muy por encima." },
  loFilter: { label: "Filtro de aceite obstruido", desc: "P. aceite cae progresivamente → alarma y SLOWDOWN." },
  jwCool:   { label: "Enfriador de agua de camisas sucio", desc: "T° agua camisas sube con la carga → alarma alta." },
};
type FaultKey = keyof typeof FAULTS;
const FAULT_KEYS = (Object.keys(FAULTS) as FaultKey[]).filter((k) => k !== "none");

/* ---------- Gauge SVG (semicircular) ---------- */
interface GaugeProps {
  label: string;
  value: number;
  min: number;
  max: number;
  unit: string;
  warnAt?: number;
  dangerAt?: number;
  size?: number;
  fmt?: (v: number) => number | string;
}
function Gauge({ label, value, min, max, unit, warnAt, dangerAt, size = 128, fmt = (v) => Math.round(v) }: GaugeProps) {
  const frac = Math.max(0, Math.min(1, (value - min) / (max - min)));
  const ang = -120 + frac * 240;
  const inDanger = dangerAt !== undefined && value >= dangerAt;
  const inWarn = !inDanger && warnAt !== undefined && value >= warnAt;
  const color = inDanger ? "#FF5A52" : inWarn ? "#FFC24B" : "#46E29B";
  const arc = (a0: number, a1: number, r: number, w: number, stroke: string) => {
    const p = (a: number): [number, number] => [size/2 + r * Math.cos((a - 90) * Math.PI/180), size/2 + r * Math.sin((a - 90) * Math.PI/180)];
    const [x0,y0] = p(a0), [x1,y1] = p(a1);
    return <path d={`M ${x0} ${y0} A ${r} ${r} 0 ${a1-a0>180?1:0} 1 ${x1} ${y1}`} fill="none" stroke={stroke} strokeWidth={w} strokeLinecap="round"/>;
  };
  const warnFrac = warnAt !== undefined ? (warnAt - min)/(max - min) : 1;
  return (
    <div style={{ textAlign:"center", padding:"6px 2px" }}>
      <svg width={size} height={size*0.72} viewBox={`0 0 ${size} ${size*0.78}`}>
        {arc(-120, 120, size*0.38, 7, "#2E3942")}
        {warnAt !== undefined && arc(-120 + warnFrac*240, 120, size*0.38, 7, "rgba(255,90,82,0.35)")}
        {arc(-120, ang, size*0.38, 7, color)}
        <line x1={size/2} y1={size/2} x2={size/2 + size*0.30*Math.cos((ang-90)*Math.PI/180)} y2={size/2 + size*0.30*Math.sin((ang-90)*Math.PI/180)} stroke="#D9E2EA" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx={size/2} cy={size/2} r="4" fill="#D9E2EA"/>
      </svg>
      <div style={{ fontFamily:"ui-monospace, Consolas, monospace", fontSize:18, fontWeight:700, color, marginTop:-14 }}>
        {fmt(value)}<span style={{ fontSize:11, color:"#8A97A3", marginLeft:3 }}>{unit}</span>
      </div>
      <div style={{ fontSize:10, letterSpacing:"0.12em", color:"#8A97A3", textTransform:"uppercase", marginTop:2 }}>{label}</div>
    </div>
  );
}

/* ---------- Banco de pirómetros (firma visual) ---------- */
interface PyroBankProps {
  temps: number[];
  avg: number;
}
function PyroBank({ temps, avg }: PyroBankProps) {
  return (
    <div style={{ background:"#0D1114", border:"1px solid #2E3942", borderRadius:10, padding:"14px 16px 10px" }}>
      <div style={{ fontSize:10, letterSpacing:"0.14em", color:"#8A97A3", textTransform:"uppercase", marginBottom:10 }}>
        T° gases de escape por cilindro — media {Math.round(avg)}°C · desviación alarma ±40°C
      </div>
      <div style={{ display:"flex", gap:10, alignItems:"flex-end", height:150 }}>
        {temps.map((t, i) => {
          const dev = t - avg;
          const isDev = Math.abs(dev) > 40;
          const isHigh = t > 400;
          const color = isHigh ? "#FF5A52" : isDev ? "#FFC24B" : "#46E29B";
          const hFrac = Math.max(0.04, Math.min(1, (t - 100) / 350));
          return (
            <div key={i} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:4 }}>
              <div style={{ fontFamily:"ui-monospace, Consolas, monospace", fontSize:13, fontWeight:700, color }}>{Math.round(t)}</div>
              <div style={{ width:"100%", height:100, background:"#161C22", borderRadius:4, display:"flex", alignItems:"flex-end", overflow:"hidden" }}>
                <div style={{ width:"100%", height:`${hFrac*100}%`, background:color, opacity:0.85, transition:"height .3s" }}/>
              </div>
              <div style={{ fontSize:10, color:"#8A97A3" }}>CIL {i+1}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Tile del anunciador ---------- */
type AlarmLevel = "warn" | "danger";
interface AlarmTile {
  id: string;
  label: string;
  level: AlarmLevel;
  active: boolean;
  acked: boolean;
}
interface AnnunciatorProps {
  tiles: AlarmTile[];
  onAck: () => void;
}
function Annunciator({ tiles, onAck }: AnnunciatorProps) {
  const anyUnacked = tiles.some(t => t.active && !t.acked);
  return (
    <div style={{ background:"#0D1114", border:"1px solid #2E3942", borderRadius:10, padding:14 }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
        <div style={{ fontSize:10, letterSpacing:"0.14em", color:"#8A97A3", textTransform:"uppercase" }}>Panel anunciador de alarmas</div>
        <button onClick={onAck} disabled={!anyUnacked}
          style={{ padding:"6px 18px", borderRadius:6, border:"1px solid #2E3942", cursor:anyUnacked?"pointer":"default",
                   background:anyUnacked?"#FFC24B":"#1B222A", color:anyUnacked?"#10151A":"#5A6771",
                   fontWeight:700, fontSize:12, letterSpacing:"0.08em" }}>
          ACK
        </button>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:8 }}>
        {tiles.map(t => (
          <div key={t.id} className={t.active && !t.acked ? "ann-flash" : ""}
            style={{ padding:"10px 8px", borderRadius:6, textAlign:"center", fontSize:10.5, fontWeight:700,
                     letterSpacing:"0.06em", lineHeight:1.35, textTransform:"uppercase",
                     border:`1px solid ${t.active ? (t.level==="danger"?"#FF5A52":"#FFC24B") : "#242D35"}`,
                     background:t.active ? (t.level==="danger" ? "rgba(255,90,82,0.18)" : "rgba(255,194,75,0.15)") : "#141A20",
                     color:t.active ? (t.level==="danger"?"#FF8B85":"#FFD98A") : "#3D4954" }}>
            {t.label}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Estado físico ---------- */
interface PhysState {
  rpm: number;
  tc: number;
  scav: number;
  lo: number;
  jw: number;
  exh: number[];
  loFilterDrop: number;
  jwFoulRise: number;
}

/* ============================================================ */
export default function EngineRoomSim() {
  const [running, setRunning] = useState(false);
  const [rack, setRack] = useState(0);            // palanca de combustible %
  const [fault, setFault] = useState<FaultKey>("none");
  const [faultCyl, setFaultCyl] = useState(2);
  const [mode, setMode] = useState<"instructor" | "diagnostico">("instructor"); // instructor | diagnostico
  const [hiddenFault, setHiddenFault] = useState<FaultKey | null>(null);
  const [guessResult, setGuessResult] = useState<{ ok: boolean; truth: FaultKey } | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const [acked, setAcked] = useState<Record<string, boolean>>({});
  const [slowdown, setSlowdown] = useState(false);

  // Rol derivado de la sesión. En "loading" o sin email → alumno (restrictivo).
  const { data: session, status } = useSession();
  const esDocente = isDocente(session?.user?.email);
  // CANDADO REAL sobre el estado: el alumno nunca puede fijar mode="instructor".
  const setModeSafe = useCallback((m: "instructor" | "diagnostico") => {
    if (m === "instructor" && !esDocente) return;
    setMode(m);
  }, [esDocente]);
  // Modo efectivo para render/física: el alumno queda fijo en diagnóstico
  // aunque manipule la UI o mientras la sesión aún carga.
  const effectiveMode = esDocente ? mode : "diagnostico";

  // Estado físico (refs para el loop, espejo en state para render)
  const S = useRef<PhysState>({ rpm:0, tc:0, scav:0.0, lo:2.9, jw:68, exh:Array<number>(CYLS).fill(95), loFilterDrop:0, jwFoulRise:0 });
  const [snap, setSnap] = useState<PhysState>({ ...S.current, exh:[...S.current.exh] });

  const activeFault: FaultKey = effectiveMode === "diagnostico" ? (hiddenFault ?? "none") : fault;

  const reset = useCallback(() => {
    S.current = { rpm:0, tc:0, scav:0.0, lo:2.9, jw:68, exh:Array<number>(CYLS).fill(95), loFilterDrop:0, jwFoulRise:0 };
    setSnap({ ...S.current, exh:[...S.current.exh] });
    setAcked({}); setSlowdown(false); setGuessResult(null); setElapsed(0);
  }, []);

  const startDiagnostico = useCallback(() => {
    reset();
    setMode("diagnostico");
    setRunning(true);
    setRack(75);
    const f = FAULT_KEYS[Math.floor(Math.random() * FAULT_KEYS.length)];
    setHiddenFault(f);
    setFaultCyl(1 + Math.floor(Math.random() * CYLS));
  }, [reset]);

  // El alumno arranca directo en diagnóstico: flujo jugable sin modo instructor.
  // Se espera a que la sesión resuelva para no adelantar al docente (que hoy
  // arranca en instructor). Transición instructor→diagnóstico de una sola vía.
  useEffect(() => {
    if (status === "loading") return;
    if (!esDocente && mode === "instructor") startDiagnostico();
  }, [status, esDocente, mode, startDiagnostico]);

  /* ---------- Loop de simulación ---------- */
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      const st = S.current;
      const dt = TICK_MS / 1000;
      const lag = (v: number, target: number, tau: number) => v + (target - v) * (1 - Math.exp(-dt / tau));

      // Falla LO: caída progresiva; falla JW: sube con el tiempo bajo carga
      if (activeFault === "loFilter") st.loFilterDrop = Math.min(1.3, st.loFilterDrop + 0.010 * dt * 10);
      if (activeFault === "jwCool")  st.jwFoulRise  = Math.min(18, st.jwFoulRise + 0.05 * dt * 10 * (rack/100 + 0.2));

      // SLOWDOWN automático (sistema de seguridad): limita el rack efectivo
      const loNow = 2.9 - st.loFilterDrop - 0.15 * (rack/100);
      const jwTarget = 68 + 12 * (rack/100) + st.jwFoulRise;
      const slow = loNow < 1.8 || st.jw > 92;
      setSlowdown(slow);
      const effRack = slow ? Math.min(rack, 35) : rack;
      const load = effRack / 100;

      // Ley de hélice: n = MCR · load^(1/3)
      const rpmT = load <= 0 ? 0 : MCR_RPM * Math.cbrt(load);
      st.rpm = lag(st.rpm, rpmT, 7);

      // Turbo: ~ energía de escape; ensuciado pierde eficiencia
      const tcEff = activeFault === "tcFoul" ? 0.74 : 1;
      st.tc = lag(st.tc, TC_MAX * Math.pow(load, 0.8) * tcEff, 4);

      // Presión de barrido ~ (rpmTC)²; cooler sucio resta un poco
      const scavCool = activeFault === "airCool" ? 0.92 : 1;
      st.scav = lag(st.scav, (0.25 + 2.3 * Math.pow(st.tc / TC_MAX, 2)) * scavCool * (load>0?1:0), 2);

      // T° escape por cilindro
      const baseExh = load <= 0 ? 90 : 170 + 195 * load
        + (activeFault === "tcFoul" ? 38 : 0)
        + (activeFault === "airCool" ? 26 : 0);
      st.exh = st.exh.map((t, i) => {
        const inj = activeFault === "injector" && i === (faultCyl - 1) ? 58 : 0;
        const noise = (Math.random() - 0.5) * 4;
        return lag(t, baseExh + inj + noise + (i - 2.5) * 1.2, 18);
      });

      st.lo = lag(st.lo, load > 0 ? loNow : 2.9 - st.loFilterDrop, 2.5);
      st.jw = lag(st.jw, load > 0 ? jwTarget : 68, 15);

      setSnap({ ...st, exh:[...st.exh] });
      setElapsed(e => e + dt);
    }, TICK_MS);
    return () => clearInterval(id);
  }, [running, rack, activeFault, faultCyl]);

  /* ---------- Alarmas ---------- */
  const avgExh = snap.exh.reduce((a, b) => a + b, 0) / CYLS;
  const baseAlarms: Omit<AlarmTile, "acked">[] = [
    { id:"exhHigh", label:"Exh. temp alta", level:"danger", active: snap.exh.some(t => t > 400) },
    { id:"exhDev",  label:"Exh. temp desviación", level:"warn", active: running && snap.rpm > 30 && snap.exh.some(t => Math.abs(t - avgExh) > 40) },
    { id:"loLow",   label:"P. aceite baja", level:"warn", active: running && snap.rpm > 10 && snap.lo < 2.2 },
    { id:"loSlow",  label:"Slowdown P. aceite", level:"danger", active: running && snap.lo < 1.8 },
    { id:"jwHigh",  label:"T° camisas alta", level:"warn", active: snap.jw > 88 },
    { id:"scavLow", label:"P. barrido baja", level:"warn", active: running && rack > 55 && snap.scav < 1.15 },
  ];
  const alarms: AlarmTile[] = baseAlarms.map(a => ({ ...a, acked: !!acked[a.id] }));

  const ackAll = () => setAcked(Object.fromEntries(alarms.filter(a => a.active).map(a => [a.id, true] as const)));

  const guess = (key: FaultKey) => {
    if (guessResult) return;
    if (!hiddenFault) return;
    const ok = key === hiddenFault;
    setGuessResult({ ok, truth: hiddenFault });
  };

  /* ---------- UI ---------- */
  return (
    <div style={{ minHeight:"100vh", background:"#10151A", color:"#D9E2EA", fontFamily:"'Segoe UI', system-ui, sans-serif", padding:"18px 16px 40px" }}>
      <style>{`
        .ann-flash { animation: annflash 0.8s step-end infinite; }
        @keyframes annflash { 50% { opacity: 0.25; } }
        @media (prefers-reduced-motion: reduce) { .ann-flash { animation: none; } }
        input[type=range] { accent-color: #4FA3FF; }
      `}</style>

      <div style={{ maxWidth:960, margin:"0 auto" }}>
        {/* Header */}
        <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-between", alignItems:"center", gap:12, marginBottom:16 }}>
          <div>
            <div style={{ fontSize:10, letterSpacing:"0.22em", color:"#4FA3FF", textTransform:"uppercase" }}>SMCP Trainer · Máquinas Navales</div>
            <h1 style={{ margin:"2px 0 0", fontSize:22, fontWeight:800, letterSpacing:"-0.01em" }}>Guardia de Máquinas — M/E 6 cil. 2T</h1>
          </div>
          <div style={{ display:"flex", gap:8, alignItems:"center" }}>
            {slowdown && <span style={{ padding:"6px 12px", borderRadius:6, background:"rgba(255,90,82,0.2)", border:"1px solid #FF5A52", color:"#FF8B85", fontSize:11, fontWeight:800, letterSpacing:"0.1em" }}>SLOWDOWN ACTIVO</span>}
            <button onClick={() => { if (running) { setRunning(false); reset(); setRack(0); setHiddenFault(null); } else { setRunning(true); } }}
              style={{ padding:"10px 22px", borderRadius:8, border:"none", cursor:"pointer", fontWeight:800, fontSize:13, letterSpacing:"0.08em",
                       background: running ? "#FF5A52" : "#46E29B", color:"#10151A" }}>
              {running ? "PARAR MÁQUINA" : "ARRANCAR"}
            </button>
          </div>
        </div>

        {/* Telégrafo / palanca */}
        <div style={{ background:"#1B222A", border:"1px solid #2E3942", borderRadius:10, padding:"12px 16px", marginBottom:14, display:"flex", alignItems:"center", gap:14 }}>
          <div style={{ fontSize:10, letterSpacing:"0.12em", color:"#8A97A3", textTransform:"uppercase", minWidth:120 }}>Palanca combustible</div>
          <input type="range" min="0" max="100" value={rack} disabled={!running}
            onChange={e => setRack(Number(e.target.value))} style={{ flex:1 }}/>
          <div style={{ fontFamily:"ui-monospace, Consolas, monospace", fontSize:16, fontWeight:700, color:"#4FA3FF", minWidth:52, textAlign:"right" }}>{rack}%</div>
        </div>

        {/* Instrumentos */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(120px, 1fr))", gap:6, background:"#1B222A", border:"1px solid #2E3942", borderRadius:10, padding:"8px 6px", marginBottom:14 }}>
          <Gauge label="RPM máquina" value={snap.rpm} min={0} max={120} unit="rpm" warnAt={108} dangerAt={113}/>
          <Gauge label="RPM turbo" value={snap.tc} min={0} max={16000} unit="rpm" fmt={v => (v/1000).toFixed(1) + "k"}/>
          <Gauge label="P. barrido" value={snap.scav} min={0} max={3} unit="bar" fmt={v => v.toFixed(2)}/>
          <Gauge label="P. aceite" value={snap.lo} min={0} max={4} unit="bar" fmt={v => v.toFixed(2)}/>
          <Gauge label="T° camisas" value={snap.jw} min={40} max={100} unit="°C" warnAt={88} dangerAt={92}/>
        </div>

        {/* Pirómetros + anunciador */}
        <div style={{ display:"grid", gridTemplateColumns:"minmax(300px, 1.4fr) minmax(260px, 1fr)", gap:14, marginBottom:14 }}>
          <PyroBank temps={snap.exh} avg={avgExh}/>
          <Annunciator tiles={alarms} onAck={ackAll}/>
        </div>

        {/* Modos */}
        <div style={{ background:"#1B222A", border:"1px solid #2E3942", borderRadius:10, padding:16 }}>
          <div style={{ display:"flex", gap:8, marginBottom:14 }}>
            {(esDocente ? ["instructor","diagnostico"] : ["diagnostico"]).map(m => (
              <button key={m} onClick={() => { if (m === "diagnostico") startDiagnostico(); else { setModeSafe("instructor"); setHiddenFault(null); setGuessResult(null); } }}
                style={{ padding:"8px 16px", borderRadius:7, border:"1px solid #2E3942", cursor:"pointer", fontSize:12, fontWeight:700,
                         background: effectiveMode===m ? "#4FA3FF" : "#141A20", color: effectiveMode===m ? "#10151A" : "#8A97A3" }}>
                {m === "instructor" ? "Modo instructor" : "Modo diagnóstico (falla oculta)"}
              </button>
            ))}
            <div style={{ marginLeft:"auto", fontFamily:"ui-monospace, Consolas, monospace", fontSize:12, color:"#8A97A3", alignSelf:"center" }}>
              t = {Math.floor(elapsed/60)}:{String(Math.floor(elapsed%60)).padStart(2,"0")}
            </div>
          </div>

          {effectiveMode === "instructor" ? (
            <div>
              <div style={{ fontSize:11, color:"#8A97A3", marginBottom:8 }}>Inyecta una falla y observa la respuesta de los instrumentos:</div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                {Object.entries(FAULTS).map(([k, f]) => (
                  <button key={k} onClick={() => setFault(k as FaultKey)}
                    style={{ padding:"8px 14px", borderRadius:7, cursor:"pointer", fontSize:12,
                             border:`1px solid ${fault===k ? "#FFC24B" : "#2E3942"}`,
                             background: fault===k ? "rgba(255,194,75,0.15)" : "#141A20",
                             color: fault===k ? "#FFD98A" : "#B9C4CE" }}>
                    {f.label}
                  </button>
                ))}
                {fault === "injector" && (
                  <select value={faultCyl} onChange={e => setFaultCyl(Number(e.target.value))}
                    style={{ background:"#141A20", color:"#D9E2EA", border:"1px solid #2E3942", borderRadius:7, padding:"6px 10px", fontSize:12 }}>
                    {Array.from({length:CYLS}, (_,i) => <option key={i+1} value={i+1}>Cilindro {i+1}</option>)}
                  </select>
                )}
              </div>
              {fault !== "none" && <div style={{ marginTop:10, fontSize:12, color:"#FFD98A" }}>→ {FAULTS[fault].desc}</div>}
            </div>
          ) : (
            <div>
              <div style={{ fontSize:12, color:"#B9C4CE", marginBottom:10 }}>
                La máquina corre al 75% con <strong>una falla oculta</strong>. Lee los instrumentos y diagnostica:
              </div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                {FAULT_KEYS.map(k => (
                  <button key={k} onClick={() => guess(k)} disabled={!!guessResult}
                    style={{ padding:"8px 14px", borderRadius:7, cursor:guessResult?"default":"pointer", fontSize:12,
                             border:`1px solid ${guessResult && k===guessResult.truth ? "#46E29B" : "#2E3942"}`,
                             background: guessResult && k===guessResult.truth ? "rgba(70,226,155,0.15)" : "#141A20",
                             color:"#B9C4CE" }}>
                    {FAULTS[k].label}
                  </button>
                ))}
              </div>
              {guessResult && (
                <div style={{ marginTop:12, padding:"10px 14px", borderRadius:8, fontSize:13,
                              background: guessResult.ok ? "rgba(70,226,155,0.12)" : "rgba(255,90,82,0.12)",
                              border:`1px solid ${guessResult.ok ? "#46E29B" : "#FF5A52"}` }}>
                  {guessResult.ok
                    ? <span style={{ color:"#7FEDBB" }}>✓ Diagnóstico correcto: <strong>{FAULTS[guessResult.truth].label}</strong>. {FAULTS[guessResult.truth].desc}</span>
                    : <span style={{ color:"#FF8B85" }}>✗ Incorrecto. La falla era: <strong>{FAULTS[guessResult.truth].label}</strong>. {FAULTS[guessResult.truth].desc}</span>}
                  <button onClick={startDiagnostico}
                    style={{ marginLeft:12, padding:"5px 12px", borderRadius:6, border:"1px solid #4FA3FF", background:"transparent", color:"#4FA3FF", cursor:"pointer", fontSize:12, fontWeight:700 }}>
                    Nueva falla
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <div style={{ marginTop:14, fontSize:10.5, color:"#5A6771", lineHeight:1.6 }}>
          Prototipo — modelo físico de primer orden con verificación direccional (ley de hélice n∝P^⅓, P. barrido ∝ rpm²_TC).
          Valores de referencia tipo motor lento 2T: MCR {MCR_RPM} rpm · T° escape alarma 400°C · desviación ±40°C · P. aceite slowdown &lt;1.8 bar · T° camisas alarma 88°C.
        </div>
      </div>
    </div>
  );
}

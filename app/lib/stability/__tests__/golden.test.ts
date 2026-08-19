// Prueba dorada: el motor TypeScript contra el prototipo Python verificado.
// Ejecutar: npm test
// (solo se ajustaron las rutas al reubicar el motor dentro del repo;
//  ningun valor ni tolerancia fue modificado)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { analyse, baseItems, loadHold, fillTank } from '../stability.ts';
import type { VesselData, LoadItem } from '../types.ts';

const v: VesselData = JSON.parse(readFileSync(new URL('../../../../public/vessels/ENMT-1.json', import.meta.url), 'utf8'));
const golden = JSON.parse(readFileSync(new URL('./golden-python.json', import.meta.url), 'utf8'));

function cond1(): LoadItem[] {
  const it = baseItems(v);
  for (const [id, t] of [['CH1', 5061], ['CH2', 5938], ['CH3', 5938], ['CH4', 5938], ['CH5', 6124]] as [string, number][])
    it.push(loadHold(v, id, t, 1.30));
  for (const [id, p] of [['FO1', 70], ['FO2', 70], ['DO', 60], ['FW', 60]] as [string, number][])
    it.push(fillTank(v, id, p));
  return it;
}
function cond2(): LoadItem[] {
  const it = baseItems(v);
  for (const id of ['FPT','APT','DB1','DB2','DB3','DB4','DB5','TST1','TST2','TST3','TST4','TST5'])
    it.push(fillTank(v, id, 100));
  for (const [id, p] of [['FO1', 85], ['FO2', 85], ['DO', 80], ['FW', 80]] as [string, number][])
    it.push(fillTank(v, id, p));
  return it;
}
function cond3(): LoadItem[] {
  const it = baseItems(v);
  for (const [id, t] of [['CH1', 6000], ['CH3', 6400], ['CH5', 6100]] as [string, number][])
    it.push(loadHold(v, id, t, 1.30));
  for (const [id, p] of [['FO1', 50], ['FW', 50], ['DB3', 55]] as [string, number][])
    it.push(fillTank(v, id, p));
  return it;
}

const CONDS: Record<string, () => LoadItem[]> = { COND1: cond1, COND2: cond2, COND3: cond3 };

// Tolerancias. Las de esfuerzos son mas holgadas porque el motor TS usa
// 41 estaciones Bonjean donde el Python integra el casco con 101.
const TOL = {
  weight: 0.01, lcg: 0.005, vcg: 0.005, displacement: 5.0,
  draft: 0.01, trim: 0.01, GM: 0.02, gz: 0.03,
  // Los esfuerzos se comparan contra la ENVOLVENTE PERMISIBLE, no contra el
  // valor: en una condicion homogenea el BM real es ~5 % del limite, asi que
  // un error absoluto minusculo da un error relativo enorme y enganoso.
  // Lo que importa es que el motor situe el resultado en el mismo punto de la
  // envolvente, que es lo que decide si la condicion pasa o no.
  sfVsLimit: 0.02, bmVsLimit: 0.02,
};

for (const [name, build] of Object.entries(CONDS)) {
  const g = golden[name];

  test(`${name} - pesos y centros de gravedad`, () => {
    const r = analyse(v, build());
    assert.ok(Math.abs(r.weight - g.W) < TOL.weight, `W ${r.weight} vs ${g.W}`);
    assert.ok(Math.abs(r.lcg - g.LCG) < TOL.lcg, `LCG ${r.lcg} vs ${g.LCG}`);
    assert.ok(Math.abs(r.vcg - g.VCG) < TOL.vcg, `VCG ${r.vcg} vs ${g.VCG}`);
    assert.ok(Math.abs(r.fsc - g.FSC) < 0.002, `FSC ${r.fsc} vs ${g.FSC}`);
  });

  test(`${name} - equilibrio y calados`, () => {
    const r = analyse(v, build());
    assert.ok(Math.abs(r.displacement - g.displacement) < TOL.displacement,
      `displacement ${r.displacement} vs ${g.displacement}`);
    assert.ok(Math.abs(r.draftAP - g.draftAP) < TOL.draft, `draftAP ${r.draftAP} vs ${g.draftAP}`);
    assert.ok(Math.abs(r.draftFP - g.draftFP) < TOL.draft, `draftFP ${r.draftFP} vs ${g.draftFP}`);
    assert.ok(Math.abs(r.trim - g.trim) < TOL.trim, `trim ${r.trim} vs ${g.trim}`);
    // el propio solver debe cerrar
    assert.ok(Math.abs(r.displacement - r.weight) < 0.5, 'desplazamiento != peso');
    assert.ok(Math.abs(r.LCB - r.lcg) < 0.005, 'LCB != LCG');
  });

  test(`${name} - estabilidad inicial y curva GZ`, () => {
    const r = analyse(v, build());
    assert.ok(Math.abs(r.GM - g.GM) < TOL.GM, `GM ${r.GM} vs ${g.GM}`);
    assert.ok(Math.abs(r.GMsolid - g.GMsolid) < TOL.GM, `GMsolid ${r.GMsolid} vs ${g.GMsolid}`);
    for (let i = 0; i < r.gz.length; i++) {
      assert.ok(Math.abs(r.gz[i] - g.gz[i]) < TOL.gz,
        `GZ(${r.heels[i]}) ${r.gz[i].toFixed(4)} vs ${g.gz[i].toFixed(4)}`);
    }
    assert.ok(Math.abs(r.gzMax - g.gzMax) < TOL.gz, `GZmax ${r.gzMax} vs ${g.gzMax}`);
  });

  test(`${name} - criterios IS Code`, () => {
    const r = analyse(v, build());
    const map: Record<string, string> = {
      area_0_30: 'Area 0-30 deg', area_0_40: 'Area 0-40 deg',
      area_30_40: 'Area 30-40 deg', gz_30: 'GZ a 30 deg',
      theta_max: 'Angulo de GZ max', gm_0: 'GM inicial (corregido)',
    };
    for (const c of r.criteria) {
      const gv = g.criteria[map[c.id]];
      const tol = c.unit === 'deg' ? 0.2 : 0.02;
      assert.ok(Math.abs(c.value - gv) < tol, `${c.id} ${c.value} vs ${gv}`);
    }
    assert.equal(r.allCriteriaPassed, true);
  });

  test(`${name} - esfuerzos cortantes y momentos flectores`, () => {
    const r = analyse(v, build());
    const eSF = Math.abs(r.sfMax - g.sfMax) / r.sfLimit;
    const eBM = Math.abs(r.bmMax - g.bmMax) / r.bmLimit;
    assert.ok(eSF < TOL.sfVsLimit,
      `SFmax ${r.sfMax.toFixed(1)} vs ${g.sfMax.toFixed(1)} t = ${(eSF*100).toFixed(2)} % de la envolvente`);
    assert.ok(eBM < TOL.bmVsLimit,
      `BMmax ${r.bmMax.toFixed(0)} vs ${g.bmMax.toFixed(0)} t.m = ${(eBM*100).toFixed(2)} % de la envolvente`);
    // el veredicto debe coincidir, que es lo que ve el cadete
    assert.equal(r.sfWithinLimit, g.sfMax <= r.sfLimit, 'veredicto SF distinto');
    assert.equal(r.bmWithinLimit, g.bmMax <= r.bmLimit, 'veredicto BM distinto');
    // los esfuerzos deben cerrar en ambos extremos
    assert.ok(Math.abs(r.shearForce[0]) < 1e-9);
    assert.ok(Math.abs(r.shearForce[r.shearForce.length - 1]) < 1e-6);
    assert.ok(Math.abs(r.bendingMoment[0]) < 1e-9);
    assert.ok(Math.abs(r.bendingMoment[r.bendingMoment.length - 1]) < 1e-6);
  });

  test(`${name} - residuos internos`, () => {
    const r = analyse(v, build());
    assert.ok(Math.abs(r.residuals.weightBalance) / r.weight < 1e-9, 'balance de pesos');
    assert.ok(Math.abs(r.residuals.buoyancyBalance) / r.displacement < 0.002, 'balance de empuje');
    assert.ok(Math.abs(r.residuals.momentBalance) < 0.005, 'balance de momentos');
    assert.equal(r.warnings.length, 0, `avisos: ${r.warnings.join('; ')}`);
  });
}

test('validaciones de entrada', () => {
  assert.throws(() => loadHold(v, 'CH1', 9000, 1.30), /excede la capacidad/);
  assert.throws(() => loadHold(v, 'CH9', 100), /Bodega desconocida/);
  assert.throws(() => fillTank(v, 'DB1', 130), /fuera de rango/);
  assert.throws(() => analyse(v, []), /no tiene peso/);
});

test('determinismo', () => {
  const a = analyse(v, cond1());
  const b = analyse(v, cond1());
  assert.equal(JSON.stringify(a), JSON.stringify(b));
});

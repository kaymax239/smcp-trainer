// Tipos del motor de estabilidad y esfuerzos - SMCP Trainer
// SIMULADOR DE ENTRENAMIENTO. No apto para uso operacional.

export interface HydroRow {
  draft: number; volume: number; displacement: number;
  LCB: number; VCB: number; LCF: number; Awp: number;
  KMt: number; KMl: number; TPC: number; MCTC: number;
  Cb: number; Cwp: number;
}

export interface Hold {
  id: string; name: string; x0: number; x1: number; lcg: number;
  volume: number; vcg_empty: number; vcg_full: number; fsm: number;
}

export interface Tank {
  id: string; name: string; x0: number; x1: number; lcg: number;
  capacity: number; rho: number; vcg: number; tcg: number;
  fsm: number; kind: 'ballast' | 'fuel' | 'fresh';
}

export interface VesselData {
  meta: { id: string; name: string; type: string; schema_version: number;
          approved_by?: string; disclaimer_es: string; disclaimer_en: string };
  particulars: { Lpp: number; B: number; D: number; design_draft: number;
                 rho_sw: number; lightship: number; lightship_lcg: number;
                 lightship_vcg: number };
  lightship_distribution: { x0: number; x1: number; fraction: number }[];
  hydrostatics: HydroRow[];
  bonjean: { stations: number[]; drafts: number[];
             areas: number[][];            // area seccional inmersa, m2
             vertical_moments: number[][]; // momento vertical de esa area, m3
             half_breadths: number[][];    // semimanga en la flotacion, m
             note?: string };
  kn_curves: { heels: number[]; table: Record<string, number[]> };
  holds: Hold[];
  tanks: Tank[];
  constants: { weight: number; lcg: number; vcg: number; tcg: number; name: string };
  strength_limits: { sf_seagoing: number; sf_harbour: number;
                     bm_seagoing: number; bm_harbour: number; note: string };
  criteria: { standard: string;
              checks: { id: string; label: string; min: number; unit: string }[] };
  not_implemented: string[];
}

/** Un peso a bordo: carga, tanque, rosca o constante. */
export interface LoadItem {
  id: string; name: string;
  weight: number;          // t
  lcg: number; vcg: number; tcg: number;   // m
  fsm: number;             // t*m, momento de superficie libre
  x0: number | null; x1: number | null;    // extension longitudinal
  /** reparto multi-tramo (solo la rosca) */
  segments?: { x0: number; x1: number; fraction: number }[];
}

export interface CriterionResult {
  id: string; label: string; value: number; required: number;
  unit: string; passed: boolean;
}

export interface StabilityResult {
  vesselId: string;
  weight: number; lcg: number; vcg: number; tcg: number;
  fsm: number; fsc: number; kgEff: number;

  displacement: number; volume: number;
  draftAP: number; draftFP: number; draftMid: number; trim: number;
  LCB: number; LCF: number; KMt: number;
  GMsolid: number; GM: number; TPC: number; MCTC: number;

  heels: number[]; kn: number[]; gz: number[];
  gzMax: number; heelAtGzMax: number;
  criteria: CriterionResult[];
  allCriteriaPassed: boolean;

  stations: number[];             // bordes de celda
  weightCurve: number[];          // t/m por celda
  buoyancyCurve: number[];        // t/m por celda
  shearForce: number[];           // t, en los bordes
  bendingMoment: number[];        // t*m, en los bordes
  sfMax: number; bmMax: number;
  sfLimit: number; bmLimit: number;
  sfWithinLimit: boolean; bmWithinLimit: boolean;
  seagoing: boolean;

  /** residuos numericos, para diagnostico */
  residuals: { weightBalance: number; buoyancyBalance: number;
               momentBalance: number; bmClosure: number };
  warnings: string[];
}

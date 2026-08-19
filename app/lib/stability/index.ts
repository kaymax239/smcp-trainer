// Motor de estabilidad y esfuerzos - SMCP Trainer, Fase 4.5
// Punto de entrada publico. Importa siempre desde aqui:
//   import { analyse, baseItems, loadHold, fillTank } from '@/app/lib/stability'
//
// TRAINING SIMULATOR - Synthetic vessel ENMT-1. Not approved by any
// classification society. Not a substitute for the vessel's approved
// loading instrument.
//
// REGLA DURA: stability.ts no se reescribe ni se refactoriza. Ver README.md.

export { analyse, baseItems, loadHold, fillTank } from './stability.ts';
export type { AnalyseOptions } from './stability.ts';

export type {
  HydroRow,
  Hold,
  Tank,
  VesselData,
  LoadItem,
  CriterionResult,
  StabilityResult,
} from './types.ts';

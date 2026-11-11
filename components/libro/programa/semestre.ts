// Utilidades puras para los segmentos de ruta del semestre ("s1" → 1).
import { SEMESTRES, type SemestreNum } from "@/lib/content/schema";

const ROMANOS: Record<SemestreNum, string> = { 1: "I", 3: "III", 5: "V", 7: "VII" };

/** "I" a partir de 1. */
export function semestreRomano(n: SemestreNum): string {
  return ROMANOS[n];
}

/** 1 a partir de "s1"; null si el segmento no es un semestre válido. */
export function semestreDeSegmento(segmento: string): SemestreNum | null {
  const m = /^s(\d)$/.exec(segmento);
  if (!m) return null;
  const n = Number(m[1]);
  return (SEMESTRES as readonly number[]).includes(n) ? (n as SemestreNum) : null;
}

// ============================================================
// Libro interactivo — reglas de desbloqueo (funciones puras)
// ------------------------------------------------------------
// La semana 1 siempre está abierta si tiene contenido. La semana
// N+1 se abre cuando todas las lecciones de la semana N están
// aprobadas. Una semana sin contenido nunca se abre.
// ============================================================

import type { ProgresoSemana } from "./types";

export interface SemanaParaDesbloqueo {
  numero: number;
  tieneContenido: boolean;
}

export type EstadoAcceso =
  | { abierta: true }
  | { abierta: false; motivo: "falta_contenido" }
  | { abierta: false; motivo: "anterior_pendiente"; semanaAnterior: number };

/**
 * Calcula el acceso de cada semana. `progreso` va en el mismo orden que
 * `semanas` (puede faltar: se toma como no completa).
 */
export function calcularAcceso(
  semanas: SemanaParaDesbloqueo[],
  progreso: (ProgresoSemana | undefined)[],
): EstadoAcceso[] {
  return semanas.map((s, i) => {
    if (!s.tieneContenido) return { abierta: false, motivo: "falta_contenido" };
    if (i === 0) return { abierta: true };
    const anterior = progreso[i - 1];
    if (anterior?.completa) return { abierta: true };
    return { abierta: false, motivo: "anterior_pendiente", semanaAnterior: semanas[i - 1].numero };
  });
}

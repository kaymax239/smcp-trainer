// ============================================================
// Libro interactivo — almacén de progreso (Fase 3: localStorage)
// ------------------------------------------------------------
// Implementa la interfaz ProgressStore de ./types con una sola
// clave de localStorage. En la Fase 4 este archivo se cambia por
// una implementación contra la base de datos con la MISMA interfaz
// (todos los métodos ya son asíncronos), así que los componentes
// no se tocan: siguen usando `progressStore` y `useProgressVersion`.
//
// Seguro para "use client" y para el render en servidor:
//   - nada toca window/localStorage al cargar el módulo;
//   - en el servidor los métodos devuelven valores vacíos;
//   - toda lectura/escritura de localStorage va en try/catch; si
//     falla (modo privado, cuota, JSON corrupto) se trata como vacío.
// ============================================================

import { useSyncExternalStore } from "react";
import type {
  IntentoQuiz,
  ProgresoLeccion,
  ProgresoSemana,
  ProgressStore,
  ResultadoIntento,
} from "./types";

export type {
  IntentoQuiz,
  ProgresoLeccion,
  ProgresoSemana,
  ProgressStore,
  ResultadoIntento,
} from "./types";

const STORAGE_KEY = "smcp.libro.progreso.v1";

interface LeccionGuardada {
  mejorCalificacion: number | null;
  intentos: number;
  aprobada: boolean;
  xp: number;
}

interface DatosProgreso {
  version: 1;
  lecciones: Record<string, LeccionGuardada>;
  xp: number;
  insignias: string[];
}

function vacio(): DatosProgreso {
  return { version: 1, lecciones: {}, xp: 0, insignias: [] };
}

function enNavegador(): boolean {
  return typeof window !== "undefined";
}

/* ------------------------------------------------------------------ */
/* Lectura y normalización                                             */
/* ------------------------------------------------------------------ */

function numeroNoNegativo(v: unknown): number {
  return typeof v === "number" && Number.isFinite(v) && v >= 0 ? v : 0;
}

function normalizarLeccion(v: unknown): LeccionGuardada | null {
  if (!v || typeof v !== "object") return null;
  const o = v as Record<string, unknown>;
  const mejor =
    typeof o.mejorCalificacion === "number" && Number.isFinite(o.mejorCalificacion)
      ? Math.min(100, Math.max(0, o.mejorCalificacion))
      : null;
  return {
    mejorCalificacion: mejor,
    intentos: Math.floor(numeroNoNegativo(o.intentos)),
    aprobada: o.aprobada === true,
    xp: numeroNoNegativo(o.xp),
  };
}

function normalizar(v: unknown): DatosProgreso {
  if (!v || typeof v !== "object") return vacio();
  const o = v as Record<string, unknown>;
  if (o.version !== 1) return vacio();

  const lecciones: Record<string, LeccionGuardada> = {};
  if (o.lecciones && typeof o.lecciones === "object" && !Array.isArray(o.lecciones)) {
    for (const [key, val] of Object.entries(o.lecciones as Record<string, unknown>)) {
      const l = normalizarLeccion(val);
      if (l) lecciones[key] = l;
    }
  }

  const insignias = Array.isArray(o.insignias)
    ? [...new Set(o.insignias.filter((i): i is string => typeof i === "string" && i.length > 0))]
    : [];

  return { version: 1, lecciones, xp: numeroNoNegativo(o.xp), insignias };
}

function leer(): DatosProgreso {
  if (!enNavegador()) return vacio();
  try {
    const crudo = window.localStorage.getItem(STORAGE_KEY);
    if (!crudo) return vacio();
    return normalizar(JSON.parse(crudo));
  } catch {
    return vacio();
  }
}

function escribir(datos: DatosProgreso): void {
  if (!enNavegador()) return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(datos));
  } catch {
    // Sin espacio o almacenamiento bloqueado: el progreso no se guarda, pero no truena.
  }
}

function aProgreso(key: string, l: LeccionGuardada | undefined): ProgresoLeccion {
  return {
    key,
    mejorCalificacion: l?.mejorCalificacion ?? null,
    intentos: l?.intentos ?? 0,
    aprobada: l?.aprobada ?? false,
    xp: l?.xp ?? 0,
  };
}

/* ------------------------------------------------------------------ */
/* Suscripción                                                         */
/* ------------------------------------------------------------------ */

const oyentes = new Set<() => void>();
let escuchandoStorage = false;

/** Versión para useProgressVersion. En el cliente empieza en 1 (el servidor da 0),
 *  así el primer render tras hidratar ya es distinto y fuerza la lectura. */
let versionActual = 1;

function notificar(): void {
  versionActual++;
  for (const o of [...oyentes]) {
    try {
      o();
    } catch {
      // Un oyente que falla no debe impedir avisar a los demás.
    }
  }
}

function alCambiarStorage(e: StorageEvent): void {
  // e.key === null: otra pestaña hizo localStorage.clear().
  if (e.key === null || e.key === STORAGE_KEY) notificar();
}

function subscribe(listener: () => void): () => void {
  oyentes.add(listener);
  if (enNavegador() && !escuchandoStorage) {
    try {
      window.addEventListener("storage", alCambiarStorage);
      escuchandoStorage = true;
    } catch {
      // ignorar
    }
  }
  return () => {
    oyentes.delete(listener);
    if (oyentes.size === 0 && escuchandoStorage && enNavegador()) {
      try {
        window.removeEventListener("storage", alCambiarStorage);
      } catch {
        // ignorar
      }
      escuchandoStorage = false;
    }
  };
}

/* ------------------------------------------------------------------ */
/* Implementación                                                      */
/* ------------------------------------------------------------------ */

export const progressStore: ProgressStore = {
  async getLeccion(key) {
    return aProgreso(key, leer().lecciones[key]);
  },

  async guardarIntento(intento: IntentoQuiz): Promise<ResultadoIntento> {
    const calificacion = Number.isFinite(intento.calificacion)
      ? Math.min(100, Math.max(0, intento.calificacion))
      : 0;

    if (!enNavegador()) {
      return {
        progreso: aProgreso(intento.key, undefined),
        primeraAprobacion: false,
        xpGanado: 0,
        insigniaGanada: null,
        nuevaMejor: false,
      };
    }

    const datos = leer();
    const previa = datos.lecciones[intento.key] ?? {
      mejorCalificacion: null,
      intentos: 0,
      aprobada: false,
      xp: 0,
    };

    const nuevaMejor = previa.mejorCalificacion === null || calificacion > previa.mejorCalificacion;
    const mejorCalificacion = nuevaMejor ? calificacion : previa.mejorCalificacion;
    const apruebaAhora = calificacion >= intento.aprobatorio;
    const primeraAprobacion = apruebaAhora && !previa.aprobada;
    const xpGanado = primeraAprobacion ? numeroNoNegativo(intento.xp) : 0;

    const actual: LeccionGuardada = {
      mejorCalificacion,
      intentos: previa.intentos + 1,
      aprobada: previa.aprobada || apruebaAhora,
      xp: previa.xp + xpGanado,
    };
    datos.lecciones[intento.key] = actual;
    datos.xp += xpGanado;

    let insigniaGanada: string | null = null;
    const { leccionKeys, insigniaId } = intento.semana;
    if (
      insigniaId &&
      leccionKeys.length > 0 &&
      !datos.insignias.includes(insigniaId) &&
      leccionKeys.every((k) => datos.lecciones[k]?.aprobada === true)
    ) {
      datos.insignias.push(insigniaId);
      insigniaGanada = insigniaId;
    }

    escribir(datos);
    notificar();

    return {
      progreso: aProgreso(intento.key, actual),
      primeraAprobacion,
      xpGanado,
      insigniaGanada,
      nuevaMejor,
    };
  },

  async getSemana(key, leccionKeys): Promise<ProgresoSemana> {
    const datos = leer();
    const total = leccionKeys.length;
    const aprobadas = leccionKeys.filter((k) => datos.lecciones[k]?.aprobada === true).length;
    return {
      key,
      aprobadas,
      total,
      porcentaje: total > 0 ? Math.round((aprobadas / total) * 100) : 0,
      completa: total > 0 && aprobadas === total,
    };
  },

  async getXP() {
    return leer().xp;
  },

  async getInsignias() {
    return [...leer().insignias];
  },

  subscribe,
};

/* ------------------------------------------------------------------ */
/* Hook                                                                */
/* ------------------------------------------------------------------ */

function versionCliente(): number {
  return versionActual;
}

function versionServidor(): number {
  return 0;
}

/**
 * Número que cambia cada vez que cambia el progreso (en esta pestaña o en otra).
 * Vale 0 en el servidor y durante la hidratación; justo después pasa a ≥ 1, lo
 * que dispara la primera lectura. Uso:
 *   const version = useProgressVersion();
 *   useEffect(() => { progressStore.getXP().then(setXp); }, [version]);
 */
export function useProgressVersion(): number {
  return useSyncExternalStore(subscribe, versionCliente, versionServidor);
}

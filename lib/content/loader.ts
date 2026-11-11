// ============================================================
// Libro interactivo — cargador de contenido (solo servidor)
// ------------------------------------------------------------
// Lee /content en el servidor (en build time para las páginas
// estáticas) y valida cada archivo con lib/content/schema.ts.
// Los componentes NUNCA leen el JSON directo: siempre pasan por
// estas funciones y reciben los tipos exportados aquí.
// No importar desde un componente "use client".
// ============================================================

import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { cache } from "react";
import type { z } from "zod";
import {
  BancoFrasesSchema,
  LeccionSchema,
  ProgramasSchema,
  SemanaSchema,
  SEMANAS_POR_SEMESTRE,
  type BancoFrases,
  type CarreraId,
  type Ejercicio,
  type Frase,
  type Insignia,
  type Leccion,
  type Programas,
  type Semana,
  type SemestreNum,
} from "./schema";

const CONTENT_DIR = path.join(process.cwd(), "content");

/* ------------------------------------------------------------------ */
/* Tipos que consumen las páginas                                      */
/* ------------------------------------------------------------------ */

export type { CarreraId, SemestreNum, Ejercicio, Frase, Insignia, Leccion, Semana };

/** Lección vista desde la lista de su semana (sin el contenido completo). */
export interface LeccionResumen {
  slug: string;
  titulo: string;
  xp: number;
  aprobatorio: number;
  /** Clave de progreso: "pn/s1/semana-01/01-slug". */
  key: string;
  /** Ruta de la lección: "/pn/s1/semana-01/01-slug". */
  href: string;
}

/** Semana con sus lecciones resumidas. */
export interface SemanaInfo {
  carrera: CarreraId;
  semestre: SemestreNum;
  numero: number;
  /** Segmento de ruta: "semana-01". */
  segmento: string;
  titulo: string;
  estado: Semana["estado"];
  /** true si la semana tiene contenido utilizable (LISTO y con lecciones). */
  tieneContenido: boolean;
  insignia: Insignia;
  lecciones: LeccionResumen[];
  /** Clave de progreso: "pn/s1/semana-01". */
  key: string;
  /** Ruta de la semana: "/pn/s1/semana-01". */
  href: string;
}

/** Lección completa con todo lo que la página necesita ya resuelto. */
export interface LeccionCompleta {
  carrera: CarreraId;
  semestre: SemestreNum;
  semana: SemanaInfo;
  leccion: Leccion;
  resumen: LeccionResumen;
  /** Frases SMCP de la lección (campo `frases`), en orden. */
  frases: Frase[];
  /** Frases citadas por los ejercicios y el quiz `escuchar_elegir`, por id. */
  frasesPorId: Record<string, Frase>;
  /** Lección siguiente dentro de la misma semana; null si es la última. */
  siguiente: LeccionResumen | null;
  /** Posición 1-based de la lección dentro de la semana. */
  posicion: number;
}

/* ------------------------------------------------------------------ */
/* Utilidades                                                          */
/* ------------------------------------------------------------------ */

/** "semana-01" a partir de 1. */
export function segmentoSemana(numero: number): string {
  return `semana-${String(numero).padStart(2, "0")}`;
}

/** 1 a partir de "semana-01"; null si el segmento no tiene ese formato. */
export function numeroDeSegmento(segmento: string): number | null {
  const m = /^semana-(\d{2})$/.exec(segmento);
  if (!m) return null;
  const n = Number(m[1]);
  return n >= 1 && n <= SEMANAS_POR_SEMESTRE ? n : null;
}

/** "s1" a partir de 1. */
export function segmentoSemestre(semestre: SemestreNum): string {
  return `s${semestre}`;
}

function leerJson<S extends z.ZodType>(rutaRelativa: string, schema: S): z.output<S> {
  const ruta = path.join(CONTENT_DIR, rutaRelativa);
  const crudo: unknown = JSON.parse(readFileSync(ruta, "utf8"));
  const res = schema.safeParse(crudo);
  if (!res.success) {
    throw new Error(`Contenido inválido en content/${rutaRelativa}: ${res.error.message}`);
  }
  return res.data;
}

/* ------------------------------------------------------------------ */
/* Lecturas (memoizadas por request/build)                             */
/* ------------------------------------------------------------------ */

export const getProgramas = cache((): Programas => leerJson("programas.json", ProgramasSchema));

export const getBancoFrases = cache(
  (): BancoFrases => leerJson("frases/smcp-100.json", BancoFrasesSchema),
);

/** Todas las frases del banco, en el orden del archivo. */
export function getFrases(): Frase[] {
  return getBancoFrases().frases;
}

/** Categorías del banco de frases, sin repetir, en orden de aparición. */
export function getCategoriasFrases(): string[] {
  return [...new Set(getFrases().map((f) => f.categoria))];
}

function frasesPorIdMap(): Map<string, Frase> {
  return new Map(getFrases().map((f) => [f.id, f]));
}

const leerLeccionCruda = cache(
  (carrera: CarreraId, semestre: SemestreNum, numero: number, slug: string): Leccion =>
    leerJson(
      `${carrera}/${segmentoSemestre(semestre)}/${segmentoSemana(numero)}/${slug}.json`,
      LeccionSchema,
    ),
);

/** Una semana (null si no existe su _semana.json). */
export const getSemana = cache(
  (carrera: CarreraId, semestre: SemestreNum, numero: number): SemanaInfo | null => {
    const base = `${carrera}/${segmentoSemestre(semestre)}/${segmentoSemana(numero)}`;
    if (!existsSync(path.join(CONTENT_DIR, base, "_semana.json"))) return null;
    const semana = leerJson(`${base}/_semana.json`, SemanaSchema);

    const lecciones: LeccionResumen[] = [];
    if (semana.estado === "LISTO") {
      for (const slug of semana.lecciones) {
        if (!existsSync(path.join(CONTENT_DIR, base, `${slug}.json`))) continue;
        const l = leerLeccionCruda(carrera, semestre, numero, slug);
        lecciones.push({
          slug,
          titulo: l.titulo,
          xp: l.xp,
          aprobatorio: l.aprobatorio,
          key: `${base}/${slug}`,
          href: `/${base}/${slug}`,
        });
      }
    }

    return {
      carrera,
      semestre,
      numero,
      segmento: segmentoSemana(numero),
      titulo: semana.titulo,
      estado: semana.estado,
      tieneContenido: semana.estado === "LISTO" && lecciones.length > 0,
      insignia: semana.insignia,
      lecciones,
      key: base,
      href: `/${base}`,
    };
  },
);

/** Las 16 semanas del semestre (las que existan), en orden. */
export const getSemanas = cache((carrera: CarreraId, semestre: SemestreNum): SemanaInfo[] => {
  const semanas: SemanaInfo[] = [];
  for (let n = 1; n <= SEMANAS_POR_SEMESTRE; n++) {
    const s = getSemana(carrera, semestre, n);
    if (s) semanas.push(s);
  }
  return semanas;
});

/** Lección completa; null si la semana o la lección no existen. */
export const getLeccion = cache(
  (carrera: CarreraId, semestre: SemestreNum, numero: number, slug: string): LeccionCompleta | null => {
    const semana = getSemana(carrera, semestre, numero);
    if (!semana) return null;
    const idx = semana.lecciones.findIndex((l) => l.slug === slug);
    if (idx === -1) return null;

    const leccion = leerLeccionCruda(carrera, semestre, numero, slug);
    const mapa = frasesPorIdMap();

    const frases = leccion.frases
      .map((id) => mapa.get(id))
      .filter((f): f is Frase => Boolean(f));

    const frasesPorId: Record<string, Frase> = {};
    for (const e of [...leccion.ejercicios, ...leccion.quiz.preguntas]) {
      if (e.tipo === "escuchar_elegir") {
        const f = mapa.get(e.fraseId);
        if (f) frasesPorId[f.id] = f;
      }
    }
    for (const f of frases) frasesPorId[f.id] = f;

    return {
      carrera,
      semestre,
      semana,
      leccion,
      resumen: semana.lecciones[idx],
      frases,
      frasesPorId,
      siguiente: semana.lecciones[idx + 1] ?? null,
      posicion: idx + 1,
    };
  },
);

/* ------------------------------------------------------------------ */
/* Parámetros estáticos                                                */
/* ------------------------------------------------------------------ */

/** Para generateStaticParams de /pn/[semestre]/[semana]. */
export function paramsSemanas(carrera: CarreraId, semestre: SemestreNum) {
  return getSemanas(carrera, semestre).map((s) => ({
    semestre: segmentoSemestre(semestre),
    semana: s.segmento,
  }));
}

/** Para generateStaticParams de /pn/[semestre]/[semana]/[leccion]. */
export function paramsLecciones(carrera: CarreraId, semestre: SemestreNum) {
  return getSemanas(carrera, semestre).flatMap((s) =>
    s.lecciones.map((l) => ({
      semestre: segmentoSemestre(semestre),
      semana: s.segmento,
      leccion: l.slug,
    })),
  );
}

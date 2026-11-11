// ============================================================
// Lecturas de capítulo (Fase 3B)
// ------------------------------------------------------------
// content/lecturas/<carrera>/<sN>/<materia>/<taskId>.md
//
//   ---
//   estado: borrador | validada
//   fuente: "Programa ... Unidad N ..."
//   terminos:
//     - en: freeboard
//       es: francobordo
//   preguntas:            (exactamente 3)
//     - pregunta: "..."
//       opciones: ["...", "...", "..."]
//       correcta: 1        (índice desde 0)
//   ---
//   Párrafos en inglés separados por línea en blanco; términos como {{freeboard}}.
//
//   This chapter prepares you for: <taskTitle>
//
// Sin imports relativos: lo usan la app (Next) y el validador
// (Node con type stripping, que exige extensiones explícitas).
// ============================================================

import { parse as parseYaml } from "yaml";
import { z } from "zod";

export const ESTADOS_LECTURA = ["borrador", "validada"] as const;
export const PALABRAS_MIN = 300;
export const PALABRAS_MAX = 600;
export const PREFIJO_CIERRE = "This chapter prepares you for: ";

const RE_TERMINO = /\{\{\s*([^{}]+?)\s*\}\}/g;

export const TerminoLecturaSchema = z.object({
  en: z.string().trim().min(1),
  es: z.string().trim().min(1),
});
export type TerminoLectura = z.infer<typeof TerminoLecturaSchema>;

export const PreguntaLecturaSchema = z
  .object({
    pregunta: z.string().trim().min(1),
    opciones: z.array(z.string().trim().min(1)).min(2).max(4),
    correcta: z.number().int().min(0),
  })
  .strict()
  .refine((p) => p.correcta < p.opciones.length, {
    message: "`correcta` debe ser el índice de una de las opciones",
    path: ["correcta"],
  })
  .refine((p) => new Set(p.opciones.map((o) => o.toLowerCase())).size === p.opciones.length, {
    message: "opciones repetidas",
    path: ["opciones"],
  });
export type PreguntaLectura = z.infer<typeof PreguntaLecturaSchema>;

export const FrontmatterLecturaSchema = z
  .object({
    estado: z.enum(ESTADOS_LECTURA),
    fuente: z.string().trim().min(1),
    terminos: z.array(TerminoLecturaSchema).min(1),
    preguntas: z.array(PreguntaLecturaSchema).length(3, { message: "deben ser exactamente 3 preguntas" }),
  })
  .strict();

/** Lectura ya analizada y lista para mostrarse. */
export interface LecturaCapitulo {
  estado: (typeof ESTADOS_LECTURA)[number];
  fuente: string;
  terminos: TerminoLectura[];
  preguntas: PreguntaLectura[];
  /** Párrafos del cuerpo (con marcas {{término}}), SIN la línea de cierre. */
  parrafos: string[];
  /** Título que aparece en "This chapter prepares you for: …". */
  preparaPara: string;
  palabras: number;
}

export type ResultadoLectura =
  | { ok: true; lectura: LecturaCapitulo }
  | { ok: false; errores: string[] };

/** Palabras del cuerpo sin las llaves de los términos. */
export function contarPalabras(texto: string): number {
  const limpio = texto.replace(RE_TERMINO, "$1");
  return limpio.split(/\s+/).filter((w) => /[A-Za-z0-9]/.test(w)).length;
}

/** Analiza y valida un archivo .md de lectura. No conoce la tarea: el título lo compara quien llama. */
export function parseLecturaMd(texto: string): ResultadoLectura {
  const errores: string[] = [];
  const normal = texto.replace(/^﻿/, "").replace(/\r\n?/g, "\n");
  const m = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(normal);
  if (!m) return { ok: false, errores: ["falta el frontmatter (--- … ---) al inicio del archivo"] };

  let crudo: unknown;
  try {
    crudo = parseYaml(m[1]);
  } catch (e) {
    return { ok: false, errores: [`frontmatter YAML inválido (${(e as Error).message.split("\n")[0]})`] };
  }
  const fm = FrontmatterLecturaSchema.safeParse(crudo);
  if (!fm.success) {
    for (const issue of fm.error.issues) {
      errores.push(`frontmatter ${issue.path.map(String).join(".") || "(raíz)"} — ${issue.message}`);
    }
  }

  const bloques = m[2]
    .split(/\n\s*\n/)
    .map((b) => b.replace(/\s*\n\s*/g, " ").trim())
    .filter((b) => b.length > 0);

  const ultimo = bloques.at(-1) ?? "";
  let preparaPara = "";
  if (!ultimo.startsWith(PREFIJO_CIERRE)) {
    errores.push(`la última línea debe ser "${PREFIJO_CIERRE}<taskTitle>"`);
  } else {
    preparaPara = ultimo.slice(PREFIJO_CIERRE.length).trim();
    if (!preparaPara) errores.push("la línea de cierre no trae el título de la tarea");
  }
  const parrafos = ultimo.startsWith(PREFIJO_CIERRE) ? bloques.slice(0, -1) : bloques;
  if (parrafos.length === 0) errores.push("el cuerpo no tiene párrafos");

  for (const p of parrafos) {
    if (/^(#|[-*+] |\d+\. |>|<)/.test(p)) errores.push(`solo se admiten párrafos de texto (sin títulos, listas ni HTML): "${p.slice(0, 40)}…"`);
    if (/\*\*|__|\[[^\]]*\]\(/.test(p)) errores.push(`sin negritas ni enlaces markdown: "${p.slice(0, 40)}…"`);
  }

  const palabras = contarPalabras(bloques.join(" "));
  if (palabras < PALABRAS_MIN || palabras > PALABRAS_MAX) {
    errores.push(`la lectura tiene ${palabras} palabras; deben ser entre ${PALABRAS_MIN} y ${PALABRAS_MAX}`);
  }

  if (fm.success) {
    const terminos = fm.data.terminos;
    const claves = terminos.map((t) => t.en.toLowerCase());
    const repetidos = claves.filter((c, i) => claves.indexOf(c) !== i);
    for (const r of new Set(repetidos)) errores.push(`término repetido en "terminos": "${r}"`);

    const marcados = new Set<string>();
    for (const p of parrafos) for (const t of p.matchAll(RE_TERMINO)) marcados.add(t[1].trim().toLowerCase());
    for (const mk of marcados) {
      if (!claves.includes(mk)) errores.push(`{{${mk}}} está marcado en el texto pero no está en "terminos"`);
    }
    for (const c of claves) {
      if (!marcados.has(c)) errores.push(`el término "${c}" no aparece marcado como {{${c}}} en el texto`);
    }
  }

  if (errores.length > 0 || !fm.success) return { ok: false, errores };
  return {
    ok: true,
    lectura: { ...fm.data, parrafos, preparaPara, palabras },
  };
}

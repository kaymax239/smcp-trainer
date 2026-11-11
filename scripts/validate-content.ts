/**
 * Validador del contenido del libro interactivo (Fase 1).
 *
 * Uso: npm run validate:content   (también corre en "prebuild").
 * Sale con código 1 si hay errores; las advertencias no detienen el build.
 *
 * Se ejecuta con Node >= 22.18 / 24, que corre TypeScript nativo (type stripping).
 * El esquema se importa de forma dinámica con su extensión .ts para que Node lo
 * resuelva sin herramientas extra; los tipos llegan por `typeof import(...)`, que
 * se borra al ejecutar.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import type { z } from "zod";

type SchemaModule = typeof import("../lib/content/schema");

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CONTENT = path.join(ROOT, "content");

const S: SchemaModule = await import(
  pathToFileURL(path.join(ROOT, "lib", "content", "schema.ts")).href
);

const errores: string[] = [];
const advertencias: string[] = [];
const rel = (p: string) => path.relative(ROOT, p).split(path.sep).join("/");
const error = (archivo: string, msg: string) => errores.push(`${rel(archivo)}: ${msg}`);
const aviso = (archivo: string, msg: string) => advertencias.push(`${rel(archivo)}: ${msg}`);

function leerJson(archivo: string): unknown | undefined {
  let texto: string;
  try {
    texto = fs.readFileSync(archivo, "utf8");
  } catch {
    error(archivo, "no existe o no se puede leer");
    return undefined;
  }
  try {
    return JSON.parse(texto);
  } catch (e) {
    error(archivo, `JSON inválido (${(e as Error).message})`);
    return undefined;
  }
}

function validar<T>(archivo: string, schema: z.ZodType<T>): T | undefined {
  const crudo = leerJson(archivo);
  if (crudo === undefined) return undefined;
  const r = schema.safeParse(crudo);
  if (!r.success) {
    for (const issue of r.error.issues) {
      const ruta = issue.path.map(String).join(".") || "(raíz)";
      error(archivo, `${ruta} — ${issue.message}`);
    }
    return undefined;
  }
  return r.data;
}

const esDirectorio = (p: string) => fs.existsSync(p) && fs.statSync(p).isDirectory();

// 1) Programas
const archivoProgramas = path.join(CONTENT, "programas.json");
const programas = validar(archivoProgramas, S.ProgramasSchema);

// 2) Banco de frases
const archivoFrases = path.join(CONTENT, "frases", "smcp-100.json");
const banco = validar(archivoFrases, S.BancoFrasesSchema);
const idsFrases = new Set((banco?.frases ?? []).map((f) => f.id));

// 3) Carreras / semestres / semanas / lecciones
let semanasRevisadas = 0;
let leccionesRevisadas = 0;

for (const carrera of S.CARRERAS) {
  const dirCarrera = path.join(CONTENT, carrera);
  const enPrograma = programas?.carreras.find((c) => c.id === carrera);
  if (programas && !enPrograma) error(archivoProgramas, `falta la carrera "${carrera}"`);
  if (!esDirectorio(dirCarrera)) {
    error(dirCarrera, "falta el directorio de la carrera");
    continue;
  }

  for (const semestre of S.SEMESTRES) {
    const dirSemestre = path.join(dirCarrera, `s${semestre}`);
    if (enPrograma && !enPrograma.semestres.some((s) => s.numero === semestre)) {
      error(archivoProgramas, `la carrera "${carrera}" no declara el semestre ${semestre}`);
    }
    if (!esDirectorio(dirSemestre)) {
      error(dirSemestre, "falta el directorio del semestre");
      continue;
    }

    const esperadas = new Set(
      Array.from({ length: S.SEMANAS_POR_SEMESTRE }, (_, i) => `semana-${String(i + 1).padStart(2, "0")}`),
    );
    for (const nombre of fs.readdirSync(dirSemestre)) {
      const p = path.join(dirSemestre, nombre);
      if (esDirectorio(p) && !esperadas.has(nombre)) error(p, "directorio de semana inesperado (se esperan semana-01 … semana-16)");
    }

    for (const nombreSemana of esperadas) {
      const dirSemana = path.join(dirSemestre, nombreSemana);
      if (!esDirectorio(dirSemana)) {
        error(dirSemana, "falta la semana");
        continue;
      }
      const archivoSemana = path.join(dirSemana, "_semana.json");
      const semana = validar(archivoSemana, S.SemanaSchema);
      if (!semana) continue;
      semanasRevisadas++;

      const numeroCarpeta = Number(nombreSemana.slice("semana-".length));
      if (semana.semana !== numeroCarpeta) {
        error(archivoSemana, `"semana" es ${semana.semana} pero la carpeta es ${nombreSemana}`);
      }

      // Cada slug listado debe existir como archivo (solo aviso si FALTA_CONTENIDO).
      for (const slug of semana.lecciones) {
        const archivoLeccion = path.join(dirSemana, `${slug}.json`);
        if (!fs.existsSync(archivoLeccion)) {
          const msg = `la lección "${slug}" está listada pero no existe ${slug}.json`;
          if (semana.estado === "FALTA_CONTENIDO") aviso(archivoSemana, msg);
          else error(archivoSemana, msg);
        }
      }

      // Lecciones presentes en la carpeta.
      for (const nombre of fs.readdirSync(dirSemana)) {
        if (!nombre.endsWith(".json") || nombre === "_semana.json") continue;
        const archivoLeccion = path.join(dirSemana, nombre);
        const slug = nombre.slice(0, -".json".length);
        if (!semana.lecciones.includes(slug)) {
          const msg = "la lección no está listada en _semana.json";
          if (semana.estado === "LISTO") error(archivoLeccion, msg);
          else aviso(archivoLeccion, msg);
        }
        const leccion = validar(archivoLeccion, S.LeccionSchema);
        if (!leccion) continue;
        leccionesRevisadas++;

        if (leccion.id !== slug) error(archivoLeccion, `"id" es "${leccion.id}" pero el archivo es ${nombre}`);

        // Frases del banco.
        leccion.frases.forEach((id, i) => {
          if (!idsFrases.has(id)) error(archivoLeccion, `frases.${i} — "${id}" no existe en smcp-100.json`);
        });
        const revisarEscuchar = (lista: typeof leccion.ejercicios, donde: string) =>
          lista.forEach((ej, i) => {
            if (ej.tipo === "escuchar_elegir" && !idsFrases.has(ej.fraseId)) {
              error(archivoLeccion, `${donde}.${i}.fraseId — "${ej.fraseId}" no existe en smcp-100.json`);
            }
          });
        revisarEscuchar(leccion.ejercicios, "ejercicios");
        revisarEscuchar(leccion.quiz.preguntas, "quiz.preguntas");

        // Marcas vacías: {{}} o {{   }}.
        leccion.lectura.parrafos.forEach((p, i) => {
          if (/\{\{\s*\}\}/.test(p)) error(archivoLeccion, `lectura.parrafos.${i} — marca vacía "{{}}"`);
        });

        // {{termino}} ↔ vocabulario, en ambos sentidos.
        const marcados = new Set(leccion.lectura.parrafos.flatMap((p) => S.extraerTerminos(p)).filter((t) => t !== ""));
        const definidos = new Set(Object.keys(leccion.lectura.vocabulario));
        for (const t of marcados) {
          if (!definidos.has(t)) error(archivoLeccion, `lectura — "{{${t}}}" no tiene entrada en vocabulario`);
        }
        for (const t of definidos) {
          if (!marcados.has(t)) error(archivoLeccion, `lectura.vocabulario — "${t}" no aparece marcado como {{${t}}} en la lectura`);
        }

        // Quiz de exactamente 5 (el esquema ya lo exige; se repite por claridad).
        if (leccion.quiz.preguntas.length !== 5) {
          error(archivoLeccion, `quiz.preguntas — tiene ${leccion.quiz.preguntas.length}, deben ser exactamente 5`);
        }
      }
    }
  }
}

// 4) Reporte
console.log("validate:content");
console.log(`  frases en el banco: ${idsFrases.size}`);
console.log(`  semanas revisadas: ${semanasRevisadas}`);
console.log(`  lecciones revisadas: ${leccionesRevisadas}`);
if (advertencias.length) {
  console.log(`\n  ${advertencias.length} advertencia(s):`);
  for (const a of advertencias) console.log(`    ⚠ ${a}`);
}
if (errores.length) {
  console.error(`\n  ${errores.length} error(es):`);
  for (const e of errores) console.error(`    ✗ ${e}`);
  process.exit(1);
}
console.log("\n  ✓ contenido válido");

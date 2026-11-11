// ============================================================
// Lecturas de capítulo — lectura de archivos (SOLO servidor)
// ------------------------------------------------------------
// content/lecturas/<carrera>/s<N>/<materia>/<taskId>.md
// Quien llama debe pasar un capítulo que exista (getCapitulo): la ruta
// se arma con datos del adaptador, nunca con texto del usuario.
// ============================================================

import fs from "node:fs";
import path from "node:path";
import { parseLecturaMd, type LecturaCapitulo } from "@/lib/content/lectura-capitulo";
import type { CapituloCompleto } from "./tareas";

const DIR = path.join(process.cwd(), "content", "lecturas");

/**
 * Lectura del capítulo, o null si no hay archivo. Si el archivo existe pero es
 * inválido o no corresponde a la tarea, lanza (el validador ya lo habría
 * detenido en el build).
 */
export function getLecturaCapitulo(datos: CapituloCompleto): LecturaCapitulo | null {
  const { libro, capitulo, tarea } = datos;
  const archivo = path.join(DIR, libro.carrera, `s${libro.semestre}`, libro.slug, `${capitulo.taskId}.md`);
  let texto: string;
  try {
    texto = fs.readFileSync(archivo, "utf8");
  } catch {
    return null;
  }
  const r = parseLecturaMd(texto);
  if (!r.ok) throw new Error(`Lectura inválida ${archivo}: ${r.errores.join("; ")}`);
  if (r.lectura.preparaPara !== tarea.taskTitle) {
    throw new Error(`Lectura ${archivo}: la línea de cierre no coincide con el taskTitle`);
  }
  return r.lectura;
}

/** Lo que el capítulo sabe de su lectura en el HTML estático (sin el texto de un borrador). */
export type EstadoLecturaPublica =
  | { tipo: "ninguna" }
  | { tipo: "borrador" }
  | { tipo: "validada"; lectura: LecturaCapitulo };

export function estadoLecturaPublica(datos: CapituloCompleto): EstadoLecturaPublica {
  const l = getLecturaCapitulo(datos);
  if (!l) return { tipo: "ninguna" };
  if (l.estado === "validada") return { tipo: "validada", lectura: l };
  return { tipo: "borrador" };
}

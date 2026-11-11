/**
 * Adivina si un texto corto del contenido está en español o en inglés, para
 * marcar `lang` correctamente (los enunciados de los ejercicios mezclan ambos:
 * "Relaciona cada término…" vs. "Why do ships need…").
 * Heurística: acentos/ñ/¿¡ o un verbo de instrucción típico en español.
 */
const INSTRUCCIONES_ES =
  /^(relaciona|escucha|ordena|elige|completa|selecciona|escribe|traduce|une|marca|lee|indica)\b/i;

export function idiomaDe(texto: string): "es" | "en" {
  if (/[áéíóúñ¿¡]/i.test(texto)) return "es";
  if (INSTRUCCIONES_ES.test(texto.trim())) return "es";
  return "en";
}

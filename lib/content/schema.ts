import { z } from "zod";

/* ------------------------------------------------------------------ */
/* Constantes                                                          */
/* ------------------------------------------------------------------ */

/** Calificación mínima aprobatoria (0–100) cuando la lección no la define. */
export const APROBATORIO_DEFAULT = 70;
/** Semestres que maneja el libro interactivo. */
export const SEMESTRES = [1, 3, 5, 7] as const;
/** Carreras: pn = Piloto Naval, mn = Maquinista Naval. */
export const CARRERAS = ["pn", "mn"] as const;
/** Número de semanas que tiene cada semestre. */
export const SEMANAS_POR_SEMESTRE = 16;
/** Título de relleno para semanas sin contenido todavía. */
export const TITULO_FALTA_CONTENIDO = "[FALTA CONTENIDO]";
/** Tipos de ejercicio soportados, en orden canónico. */
export const TIPOS_EJERCICIO = [
  "opcion_multiple",
  "completar",
  "relacionar",
  "escuchar_elegir",
  "ordenar_dialogo",
] as const;

/* ------------------------------------------------------------------ */
/* Utilidades                                                          */
/* ------------------------------------------------------------------ */

/** Devuelve los valores repetidos de una lista (cada uno una sola vez). */
function duplicados<T>(valores: readonly T[]): T[] {
  const vistos = new Set<T>();
  const repetidos = new Set<T>();
  for (const v of valores) {
    if (vistos.has(v)) repetidos.add(v);
    vistos.add(v);
  }
  return [...repetidos];
}

/**
 * Extrae los términos marcados como `{{termino}}` en un párrafo de lectura
 * (sin espacios alrededor), en el orden en que aparecen.
 */
export function extraerTerminos(parrafo: string): string[] {
  const re = /\{\{\s*([^{}]+?)\s*\}\}/g;
  const terminos: string[] = [];
  for (const m of parrafo.matchAll(re)) {
    terminos.push(m[1].trim());
  }
  return terminos;
}

/* ------------------------------------------------------------------ */
/* Tipos compartidos                                                   */
/* ------------------------------------------------------------------ */

/** Identificador de carrera: "pn" o "mn". */
export const CarreraIdSchema = z.enum(CARRERAS);
export type CarreraId = z.infer<typeof CarreraIdSchema>;

/** Número de semestre: 1, 3, 5 o 7. */
export const SemestreNumSchema = z.union([
  z.literal(1),
  z.literal(3),
  z.literal(5),
  z.literal(7),
]);
export type SemestreNum = z.infer<typeof SemestreNumSchema>;

/** Slug de lección: dos dígitos, guion y palabras en kebab-case (p. ej. "01-what-is-maritime-english"). */
export const SlugLeccionSchema = z
  .string()
  .regex(/^\d{2}-[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: 'Slug de lección inválido; formato esperado "01-palabras-en-kebab-case"',
  });
export type SlugLeccion = z.infer<typeof SlugLeccionSchema>;

/** Identificador de frase del banco SMCP (p. ej. "smcp-001"). */
export const FraseIdSchema = z.string().regex(/^smcp-\d{3}$/, {
  message: 'Id de frase inválido; formato esperado "smcp-000"',
});
export type FraseId = z.infer<typeof FraseIdSchema>;

/** Estado de publicación de una carrera o semestre. */
export const EstadoProgramaSchema = z.enum(["activo", "proximamente"]);
export type EstadoPrograma = z.infer<typeof EstadoProgramaSchema>;

/* ------------------------------------------------------------------ */
/* content/programas.json                                              */
/* ------------------------------------------------------------------ */

/** Semestre dentro de una carrera y su estado de publicación. */
export const SemestreProgramaSchema = z.object({
  numero: SemestreNumSchema,
  estado: EstadoProgramaSchema,
});
export type SemestrePrograma = z.infer<typeof SemestreProgramaSchema>;

/** Carrera con sus semestres; los números de semestre no se repiten. */
export const CarreraSchema = z
  .object({
    id: CarreraIdSchema,
    nombre: z.string().min(1),
    estado: EstadoProgramaSchema,
    semestres: z.array(SemestreProgramaSchema),
  })
  .superRefine((carrera, ctx) => {
    for (const n of duplicados(carrera.semestres.map((s) => s.numero))) {
      ctx.addIssue({
        code: "custom",
        message: `Semestre ${n} repetido en la carrera "${carrera.id}"`,
        path: ["semestres"],
      });
    }
  });
export type Carrera = z.infer<typeof CarreraSchema>;

/** Archivo content/programas.json: catálogo de carreras (ids únicos). */
export const ProgramasSchema = z
  .object({
    carreras: z.array(CarreraSchema),
  })
  .superRefine((programas, ctx) => {
    for (const id of duplicados(programas.carreras.map((c) => c.id))) {
      ctx.addIssue({
        code: "custom",
        message: `Carrera "${id}" repetida`,
        path: ["carreras"],
      });
    }
  });
export type Programas = z.infer<typeof ProgramasSchema>;

/* ------------------------------------------------------------------ */
/* _semana.json                                                        */
/* ------------------------------------------------------------------ */

/** Insignia que se gana al completar una semana. */
export const InsigniaSchema = z.object({
  id: z.string().min(1),
  nombre: z.string().min(1),
  icono: z.string().min(1),
});
export type Insignia = z.infer<typeof InsigniaSchema>;

/** Estado de contenido de una semana. */
export const EstadoSemanaSchema = z.enum(["LISTO", "FALTA_CONTENIDO"]);
export type EstadoSemana = z.infer<typeof EstadoSemanaSchema>;

/**
 * Archivo _semana.json: metadatos de una semana y sus lecciones en orden.
 * Los slugs no se repiten; si el estado es "LISTO" debe haber al menos una lección.
 */
export const SemanaSchema = z
  .object({
    semana: z.number().int().min(1).max(SEMANAS_POR_SEMESTRE),
    titulo: z.string().min(1),
    estado: EstadoSemanaSchema,
    insignia: InsigniaSchema,
    lecciones: z.array(SlugLeccionSchema),
  })
  .superRefine((semana, ctx) => {
    for (const slug of duplicados(semana.lecciones)) {
      ctx.addIssue({
        code: "custom",
        message: `Lección "${slug}" repetida en la semana ${semana.semana}`,
        path: ["lecciones"],
      });
    }
    if (semana.estado === "LISTO" && semana.lecciones.length === 0) {
      ctx.addIssue({
        code: "custom",
        message: 'Una semana con estado "LISTO" debe tener al menos una lección',
        path: ["lecciones"],
      });
    }
  });
export type Semana = z.infer<typeof SemanaSchema>;

/* ------------------------------------------------------------------ */
/* Lectura                                                             */
/* ------------------------------------------------------------------ */

/** Entrada del glosario de una lectura: traducción al español y audio por TTS. */
export const VocabularioEntradaSchema = z.object({
  es: z.string().min(1),
  audio: z.literal("tts"),
});
export type VocabularioEntrada = z.infer<typeof VocabularioEntradaSchema>;

/**
 * Lectura de la lección: párrafos (pueden marcar términos con `{{termino}}`)
 * y vocabulario indexado por término.
 */
export const LecturaSchema = z.object({
  parrafos: z.array(z.string().min(1)).min(1),
  vocabulario: z.record(z.string(), VocabularioEntradaSchema),
});
export type Lectura = z.infer<typeof LecturaSchema>;

/* ------------------------------------------------------------------ */
/* Ejercicios                                                          */
/* ------------------------------------------------------------------ */

const ejercicioBase = {
  id: z.string().min(1),
  enunciado: z.string().min(1),
};

/** Ejercicio de opción múltiple; `correcta` es el índice de la opción correcta. */
export const EjercicioOpcionMultipleSchema = z
  .object({
    ...ejercicioBase,
    tipo: z.literal("opcion_multiple"),
    opciones: z.array(z.string().min(1)).min(2),
    correcta: z.number().int().min(0),
  })
  .refine((e) => e.correcta < e.opciones.length, {
    message: "El índice de `correcta` está fuera del rango de `opciones`",
    path: ["correcta"],
  });
export type EjercicioOpcionMultiple = z.infer<typeof EjercicioOpcionMultipleSchema>;

/** Ejercicio de completar: el enunciado marca el hueco con `___`; `respuestas` son las aceptadas. */
export const EjercicioCompletarSchema = z
  .object({
    ...ejercicioBase,
    tipo: z.literal("completar"),
    respuestas: z.array(z.string().min(1)).min(1),
  })
  .refine((e) => e.enunciado.includes("___"), {
    message: "El enunciado de un ejercicio `completar` debe contener `___` para marcar el hueco",
    path: ["enunciado"],
  });
export type EjercicioCompletar = z.infer<typeof EjercicioCompletarSchema>;

/** Par izquierda/derecha de un ejercicio de relacionar. */
export const ParRelacionarSchema = z.object({
  izquierda: z.string().min(1),
  derecha: z.string().min(1),
});
export type ParRelacionar = z.infer<typeof ParRelacionarSchema>;

/** Ejercicio de relacionar columnas; los pares se guardan ya emparejados. */
export const EjercicioRelacionarSchema = z.object({
  ...ejercicioBase,
  tipo: z.literal("relacionar"),
  pares: z.array(ParRelacionarSchema).min(2),
});
export type EjercicioRelacionar = z.infer<typeof EjercicioRelacionarSchema>;

/** Ejercicio de escuchar una frase SMCP y elegir la opción correcta. */
export const EjercicioEscucharElegirSchema = z
  .object({
    ...ejercicioBase,
    tipo: z.literal("escuchar_elegir"),
    fraseId: FraseIdSchema,
    opciones: z.array(z.string().min(1)).min(2),
    correcta: z.number().int().min(0),
  })
  .refine((e) => e.correcta < e.opciones.length, {
    message: "El índice de `correcta` está fuera del rango de `opciones`",
    path: ["correcta"],
  });
export type EjercicioEscucharElegir = z.infer<typeof EjercicioEscucharElegirSchema>;

/** Línea de un diálogo: quién habla y qué dice. */
export const LineaDialogoSchema = z.object({
  hablante: z.string().min(1),
  texto: z.string().min(1),
});
export type LineaDialogo = z.infer<typeof LineaDialogoSchema>;

/** Ejercicio de ordenar un diálogo; `lineas` se guardan en el orden correcto. */
export const EjercicioOrdenarDialogoSchema = z.object({
  ...ejercicioBase,
  tipo: z.literal("ordenar_dialogo"),
  lineas: z.array(LineaDialogoSchema).min(2),
});
export type EjercicioOrdenarDialogo = z.infer<typeof EjercicioOrdenarDialogoSchema>;

/** Cualquier ejercicio, discriminado por `tipo`. */
export const EjercicioSchema = z.discriminatedUnion("tipo", [
  EjercicioOpcionMultipleSchema,
  EjercicioCompletarSchema,
  EjercicioRelacionarSchema,
  EjercicioEscucharElegirSchema,
  EjercicioOrdenarDialogoSchema,
]);
export type Ejercicio = z.infer<typeof EjercicioSchema>;
export type TipoEjercicio = Ejercicio["tipo"];

/** Quiz final de la lección: exactamente 5 preguntas. */
export const QuizSchema = z.object({
  preguntas: z.array(EjercicioSchema).length(5),
});
export type Quiz = z.infer<typeof QuizSchema>;

/* ------------------------------------------------------------------ */
/* <slug>.json                                                         */
/* ------------------------------------------------------------------ */

/**
 * Archivo <slug>.json: una lección completa (lectura, frases, ejercicios y quiz).
 * Los ids de ejercicio son únicos entre `ejercicios` y `quiz.preguntas`.
 * Las verificaciones entre archivos (términos vs vocabulario, frases en el banco)
 * las hace el validador.
 */
export const LeccionSchema = z
  .object({
    id: SlugLeccionSchema,
    titulo: z.string().min(1),
    objetivo: z.string().min(1),
    fuentes: z.array(z.string().min(1)).min(1),
    xp: z.number().int().positive(),
    aprobatorio: z.number().int().min(0).max(100).default(APROBATORIO_DEFAULT),
    lectura: LecturaSchema,
    frases: z.array(FraseIdSchema),
    ejercicios: z.array(EjercicioSchema).min(1),
    quiz: QuizSchema,
  })
  .superRefine((leccion, ctx) => {
    const ids = [
      ...leccion.ejercicios.map((e) => e.id),
      ...leccion.quiz.preguntas.map((e) => e.id),
    ];
    for (const id of duplicados(ids)) {
      ctx.addIssue({
        code: "custom",
        message: `Id de ejercicio "${id}" repetido entre ejercicios y quiz`,
        path: ["ejercicios"],
      });
    }
  });
export type Leccion = z.infer<typeof LeccionSchema>;
export type LeccionInput = z.input<typeof LeccionSchema>;

/* ------------------------------------------------------------------ */
/* content/frases/smcp-100.json                                        */
/* ------------------------------------------------------------------ */

/** Frase del banco SMCP: inglés, español, categoría y audio ("tts" o ruta pública que empieza con "/"). */
export const FraseSchema = z.object({
  id: FraseIdSchema,
  en: z.string().min(1),
  es: z.string().min(1),
  categoria: z.string().min(1),
  audio: z.union([
    z.literal("tts"),
    z.string().startsWith("/", { message: 'La ruta de audio debe empezar con "/"' }),
  ]),
});
export type Frase = z.infer<typeof FraseSchema>;

/** Archivo content/frases/smcp-100.json: banco de frases (ids únicos). */
export const BancoFrasesSchema = z
  .object({
    fuente: z.string().min(1),
    frases: z.array(FraseSchema).min(1),
  })
  .superRefine((banco, ctx) => {
    for (const id of duplicados(banco.frases.map((f) => f.id))) {
      ctx.addIssue({
        code: "custom",
        message: `Frase "${id}" repetida en el banco`,
        path: ["frases"],
      });
    }
  });
export type BancoFrases = z.infer<typeof BancoFrasesSchema>;

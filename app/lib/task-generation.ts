// Lógica compartida por /api/generate-task y /api/save-task.
// Server-only: construye el prompt, valida contra AcademicMissionTask y arma
// la tarea final a partir del catálogo real de asignaturas.
import { z } from "zod";
import { academicSubjects } from "@/data/academic/subjects";
import { academicSemesters } from "@/data/academic/semesters";
import type { AcademicMissionTask } from "@/data/academic/mission-tasks";
import {
  DIFFICULTY_PRESETS,
  MARITIME_CONTEXTS,
  MAX_WEEK,
  MIN_WEEK,
  type Difficulty,
} from "@/data/academic/generation-options";

// --- Entrada del formulario ---------------------------------------------------

export const generateRequestSchema = z.object({
  subjectId: z.string().min(1),
  unit: z.string().min(1),
  topic: z.string().min(1),
  week: z.number().int().min(MIN_WEEK).max(MAX_WEEK),
  difficulty: z.enum(["Foundation", "Standard", "Advanced"]),
  maritimeContext: z
    .string()
    .refine((v) => (MARITIME_CONTEXTS as readonly string[]).includes(v), {
      message: "Contexto marítimo no reconocido.",
    }),
  cadetAction: z.string().min(10).max(2000),
});

export type GenerateRequest = z.infer<typeof generateRequestSchema>;

// --- Lo que devuelve el modelo -------------------------------------------------
// Solo la parte creativa. Todo lo estructural (carrera, semestre, asignatura,
// XP, duración) lo pone el servidor desde el catálogo, no el modelo.

export const generatedDraftSchema = z.object({
  taskTitle: z.string().min(5).max(120),
  scenario: z.string().min(20),
  instructions: z.array(z.string().min(3)).min(3).max(10),
  deliverable: z.string().min(10),
  assessmentCriteria: z.array(z.string().min(3)).min(3).max(8),
  vocabulary: z.array(z.string().min(1)).min(1),
  smcpPhrases: z.array(z.string().min(1)).min(1),
});

export type GeneratedDraft = z.infer<typeof generatedDraftSchema>;

/** Campos del borrador que deben ser arrays. Los repara normalizeStringArrays. */
export const DRAFT_ARRAY_FIELDS = [
  "instructions",
  "assessmentCriteria",
  "vocabulary",
  "smcpPhrases",
] as const;

/**
 * JSON Schema que se le pasa a la herramienta del modelo.
 *
 * A propósito SIN minItems/maxItems/minLength: los límites viven en zod, que
 * valida después. Al modelo se le dan los rangos en `description`, que respeta
 * igual de bien y deja la validación dura de nuestro lado.
 */
export const DRAFT_JSON_SCHEMA: Record<string, unknown> = {
  type: "object",
  properties: {
    taskTitle: { type: "string", description: "Short imperative English title." },
    scenario: {
      type: "string",
      description: "Narrative: setting, the officer's order, and the objective. 2-4 sentences.",
    },
    instructions: {
      type: "array",
      items: { type: "string" },
      description: "Between 3 and 10 verifiable steps the cadet performs.",
    },
    deliverable: {
      type: "string",
      description: "The concrete artefact the cadet hands in.",
    },
    assessmentCriteria: {
      type: "array",
      items: { type: "string" },
      description: "Between 3 and 8 observable, instructor-verifiable criteria.",
    },
    vocabulary: {
      type: "array",
      items: { type: "string" },
      description: "At least 15 technical terms used in this task.",
    },
    smcpPhrases: {
      type: "array",
      items: { type: "string" },
      description: "At least 8 SMCP phrases embedded in the action.",
    },
  },
  required: [
    "taskTitle",
    "scenario",
    "instructions",
    "deliverable",
    "assessmentCriteria",
    "vocabulary",
    "smcpPhrases",
  ],
};

// --- La tarea completa, validada contra AcademicMissionTask -------------------

export const academicMissionTaskSchema = z.object({
  career: z.enum(["PN", "MN"]),
  semester: z.string().min(1),
  subjectCode: z.string().min(1),
  subjectName: z.string().min(1),
  subjectId: z.string().min(1),
  unit: z.string().min(1),
  topic: z.string().min(1),
  week: z.number().int().min(MIN_WEEK).max(MAX_WEEK).optional(),
  taskId: z
    .string()
    .regex(/^[a-z0-9-]+$/, "taskId solo admite minúsculas, dígitos y guiones."),
  taskTitle: z.string().min(1),
  scenario: z.string().min(1),
  instructions: z.array(z.string().min(1)).min(1),
  deliverable: z.string().min(1),
  assessmentCriteria: z.array(z.string().min(1)).min(1),
  // Techo alto a propósito: el generador usa 100/150/300 (ver DIFFICULTY_PRESETS)
  // mientras que las tareas escritas a mano van de 10 a 30.
  xp: z.number().int().min(5).max(500),
  estimatedTime: z.string().min(1),
  difficulty: z.enum(["Foundation", "Standard", "Advanced"]),
  vocabulary: z.array(z.string()).optional(),
  smcpPhrases: z.array(z.string()).optional(),
}) satisfies z.ZodType<AcademicMissionTask, any, any>;

// --- Utilidades ---------------------------------------------------------------

/** "Álgebra Elemental" -> "algebra-elemental". Quita acentos y signos. */
export function slugify(input: string): string {
  return input
    .normalize("NFD")
    // Rango de diacríticos combinantes: "Á" (NFD) -> "A" + acento -> "A".
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

export function findSubject(subjectId: string) {
  return academicSubjects.find((s) => s.id === subjectId);
}

/** "TMO101 / Transporte Marítimo" -> "TMO101". */
function subjectCodeOf(officialArea: string): string {
  return officialArea.split("/")[0].trim();
}

function semesterLabelOf(semesterId: string): string {
  return academicSemesters.find((s) => s.id === semesterId)?.label ?? "";
}

/**
 * Combina el borrador del modelo con los datos reales del catálogo para
 * producir una AcademicMissionTask completa. Devuelve null si el subjectId no
 * existe en el catálogo.
 */
export function assembleTask(
  input: GenerateRequest,
  draft: GeneratedDraft,
): AcademicMissionTask | null {
  const subject = findSubject(input.subjectId);
  if (!subject) return null;

  const preset = DIFFICULTY_PRESETS[input.difficulty as Difficulty];
  const subjectCode = subjectCodeOf(subject.officialArea);

  return {
    career: subject.program,
    semester: semesterLabelOf(subject.semesterId),
    subjectCode,
    subjectName: subject.title,
    subjectId: subject.id,
    unit: input.unit,
    topic: input.topic,
    week: input.week,
    taskId: `${subject.program.toLowerCase()}-${subjectCode.toLowerCase()}-${slugify(draft.taskTitle)}`,
    taskTitle: draft.taskTitle,
    scenario: draft.scenario,
    instructions: draft.instructions,
    deliverable: draft.deliverable,
    assessmentCriteria: draft.assessmentCriteria,
    xp: preset.xp,
    estimatedTime: preset.estimatedTime,
    difficulty: input.difficulty,
    vocabulary: draft.vocabulary,
    smcpPhrases: draft.smcpPhrases,
  };
}

// --- Prompt -------------------------------------------------------------------

export const SYSTEM_PROMPT = `You are the SMCP Content Generator for FIDENA / Escuela Náutica Mercante de Tampico.

You write OPERATIONAL maritime tasks for merchant marine cadets (deck = PN, engine = MN).

Hard rules:
- The cadet DOES maritime work. Never write grammar drills or academic quiz questions.
- Anchor every task in a specific physical location: bridge, forecastle, engine room, radio room, mooring deck, cargo hold.
- Use realistic shipboard hierarchy: Master, Chief Officer, Second Officer, Chief Engineer, Bosun, Radio Officer.
- Embed SMCP phrases naturally inside the action, never as a vocabulary list to memorise.
- Every assessment criterion must be observable and verifiable by an instructor.
- Task titles are in English. Scenario and instructions are in English.
- Submit the finished task by calling the submit_task tool.`;

export function buildUserPrompt(input: GenerateRequest): string {
  const subject = findSubject(input.subjectId);
  if (!subject) throw new Error(`Asignatura desconocida: ${input.subjectId}`);

  const program = subject.program === "MN" ? "Marine Engineering (MN)" : "Deck / Navigation (PN)";

  return `Create one operational maritime task.

CONTEXT
- Programme: ${program}
- Semester: ${semesterLabelOf(subject.semesterId)}
- Subject: ${subject.title} (${subjectCodeOf(subject.officialArea)})
- STCW alignment: ${subject.stcwAlignment}
- Unit: ${input.unit}
- Topic: ${input.topic}
- Week: ${input.week}
- Difficulty: ${input.difficulty}
- Maritime context: ${input.maritimeContext}
- Cadet action requested by the instructor: ${input.cadetAction}

REQUIREMENTS
- 3 to 10 instructions, each a verifiable step.
- 3 to 8 assessment criteria, each observable by an instructor.
- At least 15 technical vocabulary terms.
- At least 8 SMCP phrases.
- The whole task must fit ${DIFFICULTY_PRESETS[input.difficulty as Difficulty].estimatedTime} of cadet work.

Call the submit_task tool with the finished task. Every array field must be a
real JSON array of separate strings, never one string with the items joined.`;
}

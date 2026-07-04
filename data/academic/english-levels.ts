import { academicMissionTasks, type AcademicMissionTask } from "./mission-tasks";

// General-English levels, shared across ALL careers (PN and MN).
// These are NOT the maritime-English subject (ING102); they are general
// English proficiency levels. A level groups one or more tasks BY REFERENCE
// (taskId), so the task objects keep living in academicMissionTasks and the
// existing /tasks/[taskId] route + XP/progress system stay untouched.
export type EnglishLevel = {
  level: number;
  label: string;
  title: string;
  cefr: string;
  description: string;
  /** taskIds resolved against academicMissionTasks. Add vocabulary/reading/
   *  speaking tasks here later without changing this module's shape. */
  taskIds: string[];
};

export const englishLevels: EnglishLevel[] = [
  {
    level: 3,
    label: "Nivel 3",
    title: "Sentence Builder — Fundamentos",
    cefr: "A1–A2",
    description: "Orden de palabras en oraciones básicas: artículos, some/any, much/many, too/enough, futuros, modales de posibilidad, pasado simple y preguntas.",
    taskIds: ["pn-ing102-w05-sentence-builder-game"]
  },
  {
    level: 4,
    label: "Nivel 4",
    title: "Sentence Builder — Tiempos y modo",
    cefr: "A2–B1",
    description: "Presente simple vs continuo, verbos estativos, adverbios de modo, pasado simple vs continuo, used to, phrasal verbs y present perfect (have been / have gone).",
    taskIds: ["pn-ing102-w06-sentence-builder-l4-game"]
  },
  {
    level: 5,
    label: "Nivel 5",
    title: "Sentence Builder — Condicionales y modales",
    cefr: "B1",
    description: "Futuros, condicional cero y primero, modales de obligación, consejo, habilidad, posibilidad y deducción, present perfect vs pasado simple y present perfect continuo.",
    taskIds: ["pn-ing102-w07-sentence-builder-l5-game"]
  },
  {
    level: 6,
    label: "Nivel 6",
    title: "Sentence Builder — Estructuras complejas",
    cefr: "B1+",
    description: "Past perfect, preguntas indirectas, gerundio vs infinitivo, comparativos, conectores temporales y adverbios de modo.",
    taskIds: ["pn-ing102-w08-sentence-builder-l6-game"]
  }
];

// Every taskId that belongs to a level. Used to EXCLUDE these tasks from the
// ING102 subject listing on the career dashboard (they now live under the
// "Inglés por Niveles" section instead).
export const englishLevelTaskIds = new Set(englishLevels.flatMap((level) => level.taskIds));

export function getEnglishLevel(level: number): EnglishLevel | undefined {
  return englishLevels.find((entry) => entry.level === level);
}

// Resolve a level's taskIds to the real task objects (order preserved,
// missing ids dropped).
export function getLevelTasks(level: EnglishLevel): AcademicMissionTask[] {
  return level.taskIds
    .map((taskId) => academicMissionTasks.find((task) => task.taskId === taskId))
    .filter((task): task is AcademicMissionTask => Boolean(task));
}

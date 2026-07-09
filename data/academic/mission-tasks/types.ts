import type { AcademicProgramCode } from "../semesters";

// --- Mini-game support -------------------------------------------------------
// A task may optionally declare that it is a "game". When present, the task
// player mounts the matching game component instead of the standard Cadet
// Action panel. The union is keyed by `type` so more games (vocabulary,
// reading, listening) can be added later without touching existing tasks.

export type GrammarSentence = {
  /** Words in the CORRECT order. The game shuffles them for display. */
  words: string[];
  /** Grammar point being practised, e.g. "verb to be". */
  grammarPoint: string;
};

export type TaskGame =
  | { type: "grammar-sentence-builder"; sentences: GrammarSentence[] };
// Future: | { type: "vocabulary-match"; pairs: ... }
//         | { type: "reading-comprehension"; ... }

export type AcademicMissionTask = {
  career: AcademicProgramCode;
  semester: string;
  subjectCode: string;
  subjectName: string;
  subjectId: string;
  unit: string;
  topic: string;
  week?: number;
  taskId: string;
  taskTitle: string;
  scenario: string;
  instructions: string[];
  deliverable: string;
  assessmentCriteria: string[];
  xp: number;
  estimatedTime: string;
  difficulty: "Foundation" | "Standard" | "Advanced";
  /** Optional: marks this task as an interactive mini-game (see TaskGame). */
  game?: TaskGame;
};

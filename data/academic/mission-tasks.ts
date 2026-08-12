// Task type definitions live in ./mission-tasks/types and are re-exported
// here so existing consumers keep importing them from
// "@/data/academic/mission-tasks" unchanged.
export type { GrammarSentence, VocabularyPair, TaskGame, AcademicMissionTask } from "./mission-tasks/types";
import type { AcademicMissionTask } from "./mission-tasks/types";
import { pnSemesterITasks } from "./mission-tasks/pn-semester-i";
import { mnSemesterITasks } from "./mission-tasks/mn-semester-i";
import { pnSemesterIiiTasks } from "./mission-tasks/pn-semester-iii";
import { mnSemesterIiiTasks } from "./mission-tasks/mn-semester-iii";
import { pnSemesterVTasks } from "./mission-tasks/pn-semester-v";
import { mnSemesterVTasks } from "./mission-tasks/mn-semester-v";
import { pnSemesterViiTasks } from "./mission-tasks/pn-semester-vii";
import { mnSemesterViiTasks } from "./mission-tasks/mn-semester-vii";
// Tareas creadas desde /admin/generate-tasks. Import estático (no fs) para que
// este módulo siga siendo client-safe: app/page.tsx es "use client".
import generatedTasks from "./generated-tasks.json";

export const academicMissionTasks: AcademicMissionTask[] = [
  ...pnSemesterITasks,
  ...mnSemesterITasks,
  ...pnSemesterIiiTasks,
  ...mnSemesterIiiTasks,
  ...pnSemesterVTasks,
  ...mnSemesterVTasks,
  ...pnSemesterViiTasks,
  ...mnSemesterViiTasks,
  ...(generatedTasks as AcademicMissionTask[]),
];

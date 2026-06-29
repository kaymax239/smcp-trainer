import type { AcademicProgramCode } from "./semesters";

/**
 * Una tarea del Simulador de Guardia (Watchkeeping Simulator).
 *
 * A diferencia de AcademicMissionTask (tareas estáticas de texto),
 * una WatchSimTask está anclada a un escenario de datos AIS real
 * (scenarioFile) y a una competencia STCW específica. Forma parte
 * de la progresión de 18 semanas descrita en
 * academy/reference/watchkeeping-18-week-progression.md
 */
export type WatchSimTask = {
  career: AcademicProgramCode;        // "PN"
  semester: string;                   // "Semester VII"
  week: number;                       // 1–18 (posición en la progresión)
  phase: string;                      // "Reading the Watch Picture"
  stcwCompetency: string;             // "Competency 2"
  stcwSkill: string;                  // skill(s) STCW que ejercita
  taskId: string;
  taskTitle: string;
  scenarioFile: string;               // archivo de datos en data/scenarios/
  briefing: string;                   // contexto narrativo del puente
  instructions: string[];
  deliverable: string;                // qué entrega el cadete, en inglés
  assessmentCriteria: string[];
  xp: number;
  estimatedTime: string;
  difficulty: "Foundation" | "Standard" | "Advanced";
};

export const watchSimTasks: WatchSimTask[] = [
  {
    career: "PN",
    semester: "Semester VII",
    week: 1,
    phase: "Reading the Watch Picture",
    stcwCompetency: "Competency 2",
    stcwSkill: "Look-out duties; situational awareness",
    taskId: "pn-s7-w01-contact-identification",
    taskTitle: "Identify And Classify The Watch Picture",
    scenarioFile: "tampico-watch-01.json",
    briefing:
      "You are taking over the navigational watch on a vessel in the Tampico / Altamira approaches. " +
      "Before you can keep a safe watch, you must understand the traffic picture in front of you. " +
      "The AIS display shows every vessel currently in the area. Read it like an officer, not a list.",
    instructions: [
      "Review every AIS contact in the scenario.",
      "Classify each vessel by navigational status: under way using engine, at anchor, moored, or restricted in ability to manoeuvre.",
      "For each contact, state its name, type (where identifiable), and status.",
      "Identify which vessels are in the outer anchorage and which are inside or approaching the port.",
      "Flag any contact whose data looks inconsistent (for example, a vessel reporting 'moored' but showing speed over ground)."
    ],
    deliverable:
      "A written contact list in maritime English. Each entry must state the vessel name, type if known, and navigational status, " +
      "using correct terminology (e.g. 'MV CHAMPION CORNELIA, container vessel, at anchor in the outer anchorage').",
    assessmentCriteria: [
      "Every contact in the scenario is accounted for.",
      "Navigational status is read correctly from the AIS data.",
      "Maritime terminology is precise and professional.",
      "At least one data inconsistency is identified and questioned, not accepted blindly."
    ],
    xp: 15,
    estimatedTime: "30 min",
    difficulty: "Foundation"
  }
];

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { useEffect, useMemo, useState } from "react";
import { academicPrograms, academicSemesters, type AcademicProgramCode } from "@/data/academic/semesters";
import { academicMissionTasks } from "@/data/academic/mission-tasks";
import { academicSubjects } from "@/data/academic/subjects";
import { academicTasks, type AcademicTask } from "@/data/academic/tasks";
import { englishLevelTaskIds } from "@/data/academic/english-levels";
import { deckLevelOneMissions, type DeckLevelOneMission } from "@/data/deck-level-1-missions";

type Academy = "deck" | "engine" | "ocean";
type ActiveView = "home" | "program" | "engineMission" | "deckMission" | "academicTask";
type SystemId = "main-engine" | "auxiliary-engine" | "fuel-separator" | "purifier" | "fresh-water-generator" | "bilge-system";

const defaultAcademy: Academy = "engine";
const passingScore = 8;
const missionXp = 100;
const cadetXp = 100;
const cadetLevel = "Cadet Recruit";
const completedAcademicTaskStorageKey = "smcp.academic.completedTaskIds";
const missionOneOneTaskId = "report-to-chief-engineer";
const taskOrderRouteByTaskId: Record<string, string> = {
  [missionOneOneTaskId]: "/mission-1-1",
  "introduce-yourself-onboard": "/mission-1-2",
  "complete-cadet-personal-information": "/mission-1-3",
  "identify-your-department": "/mission-1-4"
};
const taskOrderDashboardTitles: Record<string, string> = {
  [missionOneOneTaskId]: "Mission 1.1: Report To The Chief Engineer",
  "introduce-yourself-onboard": "Mission 1.2: Report To The Watch Officer",
  "complete-cadet-personal-information": "Mission 1.3: Verify Engine Room Familiarization Points",
  "identify-your-department": "Mission 1.4: Transmit Crew Identity By Radio"
};

const academies: {
  id: Academy;
  title: string;
  deck: string;
  description: string;
  metric: string;
}[] = [
  {
    id: "deck",
    title: "Deck Academy",
    deck: "Bridge Operations",
    description: "Bridge watchkeeping, navigation, VHF reporting, COLREGS decisions, safety and cargo communication.",
    metric: "3 Level 1 missions"
  },
  {
    id: "engine",
    title: "Engine Academy",
    deck: "Machinery Operations",
    description: "Engine-room familiarization, machinery watch support, bridge-engine orders, alarms and emergency reports.",
    metric: "First mission playable"
  },
  {
    id: "ocean",
    title: "Ocean Intelligence Center",
    deck: "Readiness Intelligence",
    description: "Competency maps, mission intelligence, weather board, incident archive and final checkride readiness.",
    metric: "Prototype workspace"
  }
];

const deckPath = [
  "Officer Cadet Foundation",
  "Bridge Watchkeeping",
  "Navigation Officer",
  "Chief Officer Preparation",
  "Master Mariner Leadership"
];

const enginePath = [
  "Engine Room Orientation",
  "Engine Watch Support",
  "Bridge-Engine Communication",
  "Engine Room Emergency Response",
  "Pollution & Security",
  "Final Checkride"
];

const intelligenceModules = [
  {
    title: "STCW Competency Map",
    detail: "Maps missions to deck, engine, safety, emergency, pollution and watchkeeping competencies."
  },
  {
    title: "SMCP Function Map",
    detail: "Organizes communication by operational use: reporting, confirmation, distress, VTS and bridge-engine."
  },
  {
    title: "Mission Intelligence",
    detail: "Briefs the cadet on vessel, department, location, risk factors and required performance standard."
  },
  {
    title: "Weather Board",
    detail: "Supports visibility, wind, sea-state and heavy-weather decision scenarios."
  },
  {
    title: "Incident Archive",
    detail: "Stores fire, pollution, security, injury and abnormal machinery reports for debrief and remediation."
  }
];

const missionSystems: {
  id: SystemId;
  label: string;
  station: string;
  cue: string;
  description: string;
}[] = [
  {
    id: "main-engine",
    label: "Main Engine",
    station: "Centerline Deck 1",
    cue: "Largest propulsion unit coupled to the shaft line.",
    description: "Primary propulsion machinery that drives the propeller shaft."
  },
  {
    id: "auxiliary-engine",
    label: "Auxiliary Engine",
    station: "Generator Flat",
    cue: "Diesel generator set supplying electrical power.",
    description: "Engine used to run an alternator for ship service electrical load."
  },
  {
    id: "fuel-separator",
    label: "Fuel Separator",
    station: "Fuel Treatment Skid",
    cue: "Centrifugal unit cleaning fuel before service tanks.",
    description: "Removes water and solids from fuel oil before it reaches service use."
  },
  {
    id: "purifier",
    label: "Purifier",
    station: "Lube Oil Treatment",
    cue: "Centrifugal cleaner for lubricating oil service.",
    description: "Cleans oil by separating contaminants and water from the oil system."
  },
  {
    id: "fresh-water-generator",
    label: "Fresh Water Generator",
    station: "Evaporator Bay",
    cue: "Produces fresh water from seawater using heat and vacuum.",
    description: "Shipboard plant that converts seawater into usable fresh water."
  },
  {
    id: "bilge-system",
    label: "Bilge System",
    station: "Bilge Well / Pump Bay",
    cue: "Collects and transfers oily water from low engine-room spaces.",
    description: "Piping, wells, alarms, and pumps used to manage bilge water."
  }
];

const briefing = [
  ["Rank", cadetLevel],
  ["Mission", "Engine Room Familiarization"],
  ["Vessel", "MV Kaymax Explorer"],
  ["Location", "Engine Room - Lower Platform"],
  ["Standard", "STCW A-III/1 Foundation"],
  ["Pass Mark", "80 percent / 100 XP"]
];

const questions: {
  id: number;
  prompt: string;
  answer: SystemId;
}[] = [
  { id: 1, prompt: "Identify the largest propulsion unit connected to the shaft line.", answer: "main-engine" },
  { id: 2, prompt: "Which system supplies ship service electrical power through a diesel generator set?", answer: "auxiliary-engine" },
  { id: 3, prompt: "Which unit cleans fuel oil before it is sent to service use?", answer: "fuel-separator" },
  { id: 4, prompt: "Which machine removes contaminants from lubricating oil?", answer: "purifier" },
  { id: 5, prompt: "Which plant produces usable fresh water from seawater?", answer: "fresh-water-generator" },
  { id: 6, prompt: "Which system collects liquid from the lowest engine-room spaces?", answer: "bilge-system" },
  { id: 7, prompt: "The Second Engineer points to the fuel treatment skid. What should the cadet identify?", answer: "fuel-separator" },
  { id: 8, prompt: "The diagram shows a pump bay connected to wells and alarms. Which system is this?", answer: "bilge-system" },
  { id: 9, prompt: "Which item should a cadet associate with evaporation, vacuum, and seawater conversion?", answer: "fresh-water-generator" },
  { id: 10, prompt: "Which item is the primary propulsion machinery of the vessel?", answer: "main-engine" }
];

export default function Home() {
  const router = useRouter();
  const [selectedAcademy, setSelectedAcademy] = useState<Academy>(defaultAcademy);
  const [activeView, setActiveView] = useState<ActiveView>("home");
  const [selectedDeckMission, setSelectedDeckMission] = useState<DeckLevelOneMission>(deckLevelOneMissions[0]);
  const [selectedProgram, setSelectedProgram] = useState<AcademicProgramCode>("MN");
  const [selectedSemesterId, setSelectedSemesterId] = useState("mn-semester-i");
  const [selectedSubjectId, setSelectedSubjectId] = useState("mn-s1-maritime-english-i");
  const [selectedAcademicTask, setSelectedAcademicTask] = useState<AcademicTask>(academicTasks[0]);
  const [completedAcademicTaskIds, setCompletedAcademicTaskIds] = useState<string[]>([]);

  useEffect(() => {
    const loadCompletedAcademicTasks = () => {
      try {
        const savedTaskIds = window.localStorage.getItem(completedAcademicTaskStorageKey);
        const parsedTaskIds = savedTaskIds ? JSON.parse(savedTaskIds) : [];
        setCompletedAcademicTaskIds(Array.isArray(parsedTaskIds) ? parsedTaskIds.filter((taskId) => typeof taskId === "string") : []);
      } catch {
        setCompletedAcademicTaskIds([]);
      }
    };

    loadCompletedAcademicTasks();
    window.addEventListener("focus", loadCompletedAcademicTasks);
    window.addEventListener("storage", loadCompletedAcademicTasks);

    return () => {
      window.removeEventListener("focus", loadCompletedAcademicTasks);
      window.removeEventListener("storage", loadCompletedAcademicTasks);
    };
  }, []);

  const selectCareer = (program: AcademicProgramCode) => {
    const firstSemester = academicSemesters.find((semester) => semester.program === program) ?? academicSemesters[0];
    const firstSubject = academicSubjects.find((subject) => subject.semesterId === firstSemester.id);

    setSelectedProgram(program);
    setSelectedSemesterId(firstSemester.id);
    if (firstSubject) {
      setSelectedSubjectId(firstSubject.id);
    }
    setActiveView("program");
  };

  const openDeckMission = (mission: DeckLevelOneMission) => {
    setSelectedDeckMission(mission);
    setSelectedAcademy("deck");
    setActiveView("deckMission");
  };

  const backToDeckAcademy = () => {
    setSelectedAcademy("deck");
    setActiveView("program");
  };

  const openAcademicTask = (task: AcademicTask) => {
    const taskOrderRoute = taskOrderRouteByTaskId[task.id];

    if (taskOrderRoute) {
      router.push(taskOrderRoute);
      return;
    }

    setSelectedAcademicTask(task);
    setSelectedSubjectId(task.subjectId);
    setActiveView("academicTask");
  };

  if (activeView === "academicTask") {
    return (
      <main className="academyShell">
        <section className="academySection" aria-label={`${selectedAcademicTask.title} academic task`}>
          <AcademicTaskPlayer task={selectedAcademicTask} onBack={() => setActiveView("program")} />
        </section>
      </main>
    );
  }

  if (activeView === "engineMission") {
    return (
      <main className="academyShell">
        <section className="academySection" aria-label="Engine Room Familiarization mission">
          <button className="secondaryAction" onClick={() => setActiveView("program")} type="button">
            Back to Program
          </button>
          <EngineRoomFamiliarizationMission />
        </section>
      </main>
    );
  }

  if (activeView === "deckMission") {
    return (
      <main className="academyShell">
        <section className="academySection" aria-label={`${selectedDeckMission.title} mission`}>
          <DeckMissionPlayer mission={selectedDeckMission} onBack={backToDeckAcademy} />
        </section>
      </main>
    );
  }

  if (activeView === "program") {
    return (
      <main className="academyShell">
        <AcademicProgramDashboard
          onBackToCareers={() => setActiveView("home")}
          onOpenTask={openAcademicTask}
          selectedProgram={selectedProgram}
          selectedSemesterId={selectedSemesterId}
          selectedSubjectId={selectedSubjectId}
          completedAcademicTaskIds={completedAcademicTaskIds}
          setSelectedSemesterId={setSelectedSemesterId}
          setSelectedSubjectId={setSelectedSubjectId}
        />
      </main>
    );
  }

  return (
    <main className="academyShell careerHomeShell">
      <section className="careerHome" aria-labelledby="career-home-title">
        <nav className="topBar" aria-label="SMCP Digital Academy header">
          <div className="brandMark">SMCP</div>
          <div>
            <p>Digital Maritime Academy</p>
            <strong>Career Selection</strong>
          </div>
        </nav>

        <div className="careerHomeHero">
          <p className="eyebrow">HOME</p>
          <h1 id="career-home-title">SMCP Digital Academy</h1>
          <p className="subtitle">Train Like You Sail</p>
        </div>

        <div className="careerChoiceGrid" aria-label="Career selection">
          <button className="careerChoiceCard" onClick={() => selectCareer("PN")} type="button">
            <span>Deck Officer Program</span>
            <strong>Pilotin Naval</strong>
            <small>PN</small>
            <em>Bridge, navigation, cargo, safety and deck operations.</em>
          </button>

          <button className="careerChoiceCard" onClick={() => selectCareer("MN")} type="button">
            <span>Marine Engineering Program</span>
            <strong>Maquinas Navales</strong>
            <small>MN</small>
            <em>Engine room, machinery watch, technical operations and safety.</em>
          </button>

          <Link className="careerChoiceCard" href="/generated-tasks">
            <span>AI Content Studio</span>
            <strong>Generated Tasks</strong>
            <small>AI</small>
            <em>AI-generated operational tasks</em>
          </Link>
        </div>
      </section>
    </main>
  );
}

function AcademicProgramDashboard({
  onBackToCareers,
  selectedProgram,
  selectedSemesterId,
  completedAcademicTaskIds,
  setSelectedSemesterId,
  setSelectedSubjectId
}: {
  onBackToCareers: () => void;
  onOpenTask: (task: AcademicTask) => void;
  selectedProgram: AcademicProgramCode;
  selectedSemesterId: string;
  selectedSubjectId: string;
  completedAcademicTaskIds: string[];
  setSelectedSemesterId: (semesterId: string) => void;
  setSelectedSubjectId: (subjectId: string) => void;
}) {
  const selectedProgramDetails = academicPrograms.find((program) => program.code === selectedProgram) ?? academicPrograms[0];
  const programSemesters = academicSemesters.filter((semester) => semester.program === selectedProgram);
  const selectedSemester = programSemesters.find((semester) => semester.id === selectedSemesterId) ?? programSemesters[0];
  const semesterSubjects = academicSubjects.filter((subject) => subject.semesterId === selectedSemester?.id);
  const completedAcademicTaskIdSet = useMemo(() => new Set(completedAcademicTaskIds), [completedAcademicTaskIds]);

  // Ordinal position of each subject (data order) — used to order the weekly
  // list "by subject" and to scan for the first pending task.
  const semesterSubjectOrder = useMemo(() => {
    const order = new Map<string, number>();
    semesterSubjects.forEach((subject, index) => order.set(subject.id, index));
    return order;
  }, [semesterSubjects]);

  // All curricular tasks of the semester, excluding the English-levels games
  // (same exclusion the previous view used).
  const semesterTasks = useMemo(() => {
    const subjectIds = new Set(semesterSubjects.map((subject) => subject.id));
    return academicMissionTasks.filter(
      (task) => subjectIds.has(task.subjectId) && !englishLevelTaskIds.has(task.taskId)
    );
  }, [semesterSubjects]);

  // Per-subject roll-up (order = data order). Feeds the accordion and the
  // "Continue" resolver.
  const perSubject = useMemo(() => {
    return semesterSubjects.map((subject) => {
      const tasks = semesterTasks
        .filter((task) => task.subjectId === subject.id)
        .sort((a, b) => (a.week ?? 0) - (b.week ?? 0));
      const done = tasks.filter((task) => completedAcademicTaskIdSet.has(task.taskId));
      const pending = tasks.filter((task) => !completedAcademicTaskIdSet.has(task.taskId));
      return {
        subject,
        tasks,
        pending,
        doneCount: done.length,
        total: tasks.length,
        earnedXp: done.reduce((sum, task) => sum + task.xp, 0)
      };
    });
  }, [semesterSubjects, semesterTasks, completedAcademicTaskIdSet]);

  // Week chips: contiguous range from the LOWEST week present among the
  // non-excluded tasks, stopping at the first gap. Out-of-range tasks (e.g. the
  // vocabulary-match games in weeks 9-10, already excluded) never create chips.
  const weekChips = useMemo(() => {
    const present = new Set<number>();
    semesterTasks.forEach((task) => {
      if (typeof task.week === "number") present.add(task.week);
    });
    if (present.size === 0) return [] as number[];
    const chips: number[] = [];
    let week = Math.min(...Array.from(present));
    while (present.has(week)) {
      chips.push(week);
      week += 1;
    }
    return chips;
  }, [semesterTasks]);

  // Status per week (complete / partial / pending) derived from completedTaskIds.
  const weekStatus = useMemo(() => {
    const status = new Map<number, "complete" | "partial" | "pending">();
    weekChips.forEach((week) => {
      const tasks = semesterTasks.filter((task) => task.week === week);
      const done = tasks.filter((task) => completedAcademicTaskIdSet.has(task.taskId)).length;
      status.set(week, done === 0 ? "pending" : done === tasks.length ? "complete" : "partial");
    });
    return status;
  }, [weekChips, semesterTasks, completedAcademicTaskIdSet]);

  // Default active week = first with a pending task; if all complete, the last.
  const defaultWeek = useMemo(() => {
    if (weekChips.length === 0) return null;
    return weekChips.find((week) => weekStatus.get(week) !== "complete") ?? weekChips[weekChips.length - 1];
  }, [weekChips, weekStatus]);

  const [viewMode, setViewMode] = useState<"week" | "subject">("week");
  const [manualWeek, setManualWeek] = useState<number | null>(null);
  const [openSubjectId, setOpenSubjectId] = useState<string | null>(null);

  // Reset per-semester UI state when the semester changes. Only stable setters
  // are referenced, so no extra dependencies are needed.
  useEffect(() => {
    setManualWeek(null);
    setOpenSubjectId(null);
  }, [selectedSemesterId]);

  const activeWeek = manualWeek != null && weekChips.includes(manualWeek) ? manualWeek : defaultWeek;

  const activeWeekTasks = useMemo(() => {
    if (activeWeek == null) return [];
    return semesterTasks
      .filter((task) => task.week === activeWeek)
      .sort((a, b) => (semesterSubjectOrder.get(a.subjectId) ?? 0) - (semesterSubjectOrder.get(b.subjectId) ?? 0));
  }, [activeWeek, semesterTasks, semesterSubjectOrder]);

  // "Continue where you left off": subject with the highest partial progress
  // (completed > 0 and < total), its first pending task by week; else the first
  // pending task of the semester; else celebrate + suggest the next semester.
  const continueTarget = useMemo(() => {
    const withTasks = perSubject.filter((entry) => entry.total > 0);
    const partial = withTasks.filter((entry) => entry.doneCount > 0 && entry.doneCount < entry.total);
    if (partial.length > 0) {
      const best = partial.reduce((leader, entry) =>
        entry.doneCount / entry.total > leader.doneCount / leader.total ? entry : leader
      );
      return { status: "task" as const, subject: best.subject, task: best.pending[0], resume: true };
    }
    const firstPending = withTasks.find((entry) => entry.pending.length > 0);
    if (firstPending) {
      return { status: "task" as const, subject: firstPending.subject, task: firstPending.pending[0], resume: false };
    }
    const index = programSemesters.findIndex((semester) => semester.id === selectedSemester?.id);
    const nextSemester = index >= 0 && index < programSemesters.length - 1 ? programSemesters[index + 1] : null;
    return { status: "complete" as const, nextSemester };
  }, [perSubject, programSemesters, selectedSemester?.id]);

  const selectSemester = (semesterId: string) => {
    const firstSubject = academicSubjects.find((subject) => subject.semesterId === semesterId);
    setSelectedSemesterId(semesterId);
    if (firstSubject) {
      setSelectedSubjectId(firstSubject.id);
    }
  };

  return (
    <section className="academicDashboard programDashboard" aria-labelledby="academic-title">
      <div className="programTopBar">
        <button className="secondaryAction" onClick={onBackToCareers} type="button">
          Back to Careers
        </button>
        <div className="missionBadge">
          <span>Selected Career</span>
          <strong>{selectedProgram}</strong>
        </div>
        <button className="secondaryAction" onClick={() => signOut({ redirectTo: "/login" })} type="button">
          Cerrar sesión
        </button>
      </div>

      {continueTarget.status === "task" ? (
        <Link className="semflow-continue" href={`/tasks/${continueTarget.task.taskId}`}>
          <span className="semflow-continue-eyebrow">{continueTarget.resume ? "Continúa donde ibas" : "Empieza el semestre"}</span>
          <strong className="semflow-continue-title">{continueTarget.task.taskTitle}</strong>
          <span className="semflow-continue-meta">
            {continueTarget.subject.title}
            {typeof continueTarget.task.week === "number" ? ` · Semana ${continueTarget.task.week}` : ""}
            {` · ${continueTarget.task.difficulty}`}
          </span>
          <span className="semflow-continue-cta">{continueTarget.resume ? "Continuar" : "Empezar"} →</span>
        </Link>
      ) : (
        <div className="semflow-continue is-complete">
          <span className="semflow-continue-eyebrow">¡Semestre completo!</span>
          <strong className="semflow-continue-title">
            Completaste todas las tasks de {selectedSemester?.title}
          </strong>
          {continueTarget.nextSemester ? (
            <button className="semflow-continue-cta" onClick={() => selectSemester(continueTarget.nextSemester!.id)} type="button">
              Ir a {continueTarget.nextSemester.label} →
            </button>
          ) : (
            <span className="semflow-continue-meta">No hay más semestres en este programa.</span>
          )}
        </div>
      )}

      <div className="sectionHeader programHeader">
        <div>
          <p className="eyebrow">{selectedProgram === "PN" ? "Deck Officer Program" : "Marine Engineering Program"}</p>
          <h2 id="academic-title">{selectedProgramDetails.title} Dashboard</h2>
        </div>
        <p className="sectionNote">{selectedProgramDetails.description}</p>
      </div>

      <Link className="careerChoiceCard liveTrafficCard" href="/english-levels">
        <span>Inglés General</span>
        <strong>Inglés por Niveles</strong>
        <small>A1–B1+</small>
        <em>Niveles de inglés general (juego Sentence Builder y más). Sección compartida entre carreras, independiente de las materias.</em>
      </Link>

      {selectedProgram === "PN" ? (
        <Link className="careerChoiceCard liveTrafficCard" href="/traffic">
          <span>Simulador de guardia</span>
          <strong>Tráfico marítimo en vivo — Tampico / Altamira</strong>
          <small>AIS</small>
          <em>Mapa de buques en tiempo real (AIS) del puerto y fondeadero. Datos en vivo o escenario capturado.</em>
        </Link>
      ) : (
        <Link className="careerChoiceCard liveTrafficCard" href="/engine-room">
          <span>Simulador de guardia</span>
          <strong>Sala de Máquinas — Motor Principal</strong>
          <small>MOT</small>
          <em>Guardia de máquinas: diagnostica fallas del motor diésel 2T leyendo temperaturas de escape, presiones y alarmas en tiempo real.</em>
        </Link>
      )}

      <Link className="careerChoiceCard liveTrafficCard" href="/vhf">
        <span>Simulador de radio</span>
        <strong>VHF Radio — Comunicaciones SMCP</strong>
        <small>VHF</small>
        <em>Practica por voz llamadas de radio (radio check, MAYDAY, PAN-PAN, SÉCURITÉ) con una estación costera simulada y recibe evaluación del procedimiento. Sección compartida entre carreras.</em>
      </Link>

      <section className="flowPanel" aria-label={`${selectedProgram} semesters`}>
        <div className="panelTitle">
          <span>Semesters</span>
          <strong>{programSemesters.length} available</strong>
        </div>
        <div className="semesterGrid singleProgramSemesterGrid">
          {programSemesters.map((semester) => (
            <button
              className={`semesterCard ${selectedSemester?.id === semester.id ? "selected" : ""}`}
              key={semester.id}
              onClick={() => selectSemester(semester.id)}
              type="button"
            >
              <span>{semester.label}</span>
              <strong>{semester.title}</strong>
              <p>{semester.focus}</p>
              <em>{semester.xp} XP / {semester.progress}% progress</em>
            </button>
          ))}
        </div>
      </section>

      <div className="semflow-modeToggle" role="group" aria-label="Modo de vista">
        <button
          className={`semflow-modeButton ${viewMode === "week" ? "is-active" : ""}`}
          onClick={() => setViewMode("week")}
          type="button"
          aria-pressed={viewMode === "week"}
        >
          Por semana
        </button>
        <button
          className={`semflow-modeButton ${viewMode === "subject" ? "is-active" : ""}`}
          onClick={() => setViewMode("subject")}
          type="button"
          aria-pressed={viewMode === "subject"}
        >
          Por materia
        </button>
      </div>

      {viewMode === "week" ? (
        <section className="semflow-weekView" aria-label={`${selectedSemester?.label ?? ""} por semana`}>
          {weekChips.length > 0 ? (
            <>
              <div className="semflow-weekbar" role="group" aria-label="Semanas">
                {weekChips.map((week) => {
                  const status = weekStatus.get(week) ?? "pending";
                  return (
                    <button
                      className={`semflow-weekChip is-${status} ${activeWeek === week ? "is-active" : ""}`}
                      key={week}
                      onClick={() => setManualWeek(week)}
                      type="button"
                      aria-pressed={activeWeek === week}
                    >
                      <span className="semflow-weekChip-num">S{week}</span>
                      <span className="semflow-weekChip-dot" aria-hidden="true" />
                      <span className="semflow-sronly">
                        {status === "complete" ? "completa" : status === "partial" ? "parcial" : "pendiente"}
                      </span>
                    </button>
                  );
                })}
              </div>
              <div className="semflow-taskList" aria-live="polite">
                {activeWeekTasks.map((task) => (
                  <SemflowTaskRow key={task.taskId} task={task} completed={completedAcademicTaskIdSet.has(task.taskId)} showSubject />
                ))}
              </div>
            </>
          ) : (
            <div className="plannedNotice">
              <span>No hay tasks curriculares en este semestre todavía.</span>
            </div>
          )}
        </section>
      ) : (
        <section className="semflow-accordion" aria-label={`${selectedSemester?.label ?? ""} por materia`}>
          {perSubject.map((entry) => {
            const open = openSubjectId === entry.subject.id;
            const pct = entry.total > 0 ? Math.round((entry.doneCount / entry.total) * 100) : 0;
            return (
              <div className={`semflow-subjectRow ${open ? "is-open" : ""}`} key={entry.subject.id}>
                <button
                  className="semflow-subjectRow-head"
                  onClick={() => setOpenSubjectId(open ? null : entry.subject.id)}
                  type="button"
                  aria-expanded={open}
                >
                  <span className="semflow-subjectRow-info">
                    <span className="semflow-subjectRow-name">{entry.subject.title}</span>
                    <span className="semflow-subjectRow-area">{entry.subject.officialArea}</span>
                  </span>
                  <span className="semflow-subjectRow-progress">
                    <span className="semflow-progressTrack" aria-hidden="true">
                      <span style={{ width: `${pct}%` }} />
                    </span>
                    <em>{entry.doneCount}/{entry.total} · {entry.earnedXp} XP</em>
                  </span>
                  <span className="semflow-chevron" aria-hidden="true">{open ? "▾" : "▸"}</span>
                </button>
                {open ? (
                  <div className="semflow-subjectRow-body">
                    {entry.tasks.length > 0 ? (
                      <div className="semflow-taskList">
                        {entry.tasks.map((task) => (
                          <SemflowTaskRow key={task.taskId} task={task} completed={completedAcademicTaskIdSet.has(task.taskId)} />
                        ))}
                      </div>
                    ) : (
                      <div className="plannedNotice">
                        <span>No missions generated yet for this subject.</span>
                      </div>
                    )}
                    <details className="semflow-syllabus">
                      <summary>Programa de la materia</summary>
                      <div className="semflow-syllabusGrid">
                        <AcademicInfoBlock title="Units" items={entry.subject.units} />
                        <AcademicInfoBlock title="Topics" items={entry.subject.topics} />
                        <AcademicInfoBlock title="Assessments" items={entry.subject.assessments} />
                      </div>
                    </details>
                  </div>
                ) : null}
              </div>
            );
          })}
        </section>
      )}
    </section>
  );
}

function SemflowTaskRow({
  task,
  completed,
  showSubject = false
}: {
  task: (typeof academicMissionTasks)[number];
  completed: boolean;
  showSubject?: boolean;
}) {
  return (
    <article className={`semflow-taskRow ${completed ? "is-complete" : ""}`}>
      <div className="semflow-taskRow-main">
        {showSubject ? <span className="semflow-taskRow-subject">{task.subjectName}</span> : null}
        <strong className="semflow-taskRow-title">{task.taskTitle}</strong>
        <div className="semflow-taskRow-meta">
          {typeof task.week === "number" ? <em>Semana {task.week}</em> : null}
          <em>{task.difficulty}</em>
          <em>{task.estimatedTime}</em>
        </div>
      </div>
      <Link className={`semflow-taskRow-cta ${completed ? "is-complete" : ""}`} href={`/tasks/${task.taskId}`}>
        {completed ? "Completada ✓" : "Empezar"}
      </Link>
    </article>
  );
}
function AcademicInfoBlock({ items, title }: { items: string[]; title: string }) {
  return (
    <div className="academicInfoBlock">
      <span>{title}</span>
      <ul>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

function AcademicTaskPlayer({ task, onBack }: { task: AcademicTask; onBack: () => void }) {
  const [writing, setWriting] = useState("");
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const wordCount = writing.trim().split(/\s+/).filter(Boolean).length;
  const score = task.assessment.reduce((total, question, index) => total + (answers[index] === question.answer ? 1 : 0), 0);
  const assessmentComplete = Object.keys(answers).length === task.assessment.length;
  const writingComplete = wordCount >= task.writingExercise.minimumWords;
  const passed = submitted && score === task.assessment.length && writingComplete;

  const resetTask = () => {
    setWriting("");
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <section className="missionShell academicTaskShell" aria-labelledby="academic-task-title">
      <button className="secondaryAction" onClick={onBack} type="button">Back to Academic Programs</button>
      <div className="missionLead missionLeadWithAction">
        <div>
          <p className="eyebrow">MN Semester I / Maritime English I</p>
          <h2 id="academic-task-title">{task.title}</h2>
        </div>
        <div className={`missionBadge ${passed ? "passed" : ""}`}>
          <span>XP Awarded</span>
          <strong>{passed ? task.xp : 0} / {task.xp} XP</strong>
        </div>
      </div>

      <div className="academicTaskGrid">
        <aside className="briefingPanel">
          <div className="panelTitle">
            <span>Mission Briefing</span>
            <strong>{task.officialTopic}</strong>
          </div>
          <p className="briefingText">{task.missionBriefing}</p>
          <div className="videoPlaceholder" aria-label="Instructional video placeholder">
            <span>Video Placeholder</span>
            <strong>{task.video.title}</strong>
            <small>{task.video.duration}</small>
            <p>{task.video.description}</p>
            <em>{task.video.futureUrl || "Future video URL field"}</em>
          </div>
        </aside>

        <section className="taskLearningPanel">
          <div className="learningBlock">
            <span>Vocabulary in context</span>
            {task.vocabularyInContext.map((item) => (
              <p key={item.term}><strong>{item.term}:</strong> {item.context}</p>
            ))}
          </div>
          <div className="learningBlock">
            <span>Writing exercise</span>
            <p>{task.writingExercise.prompt}</p>
            <textarea value={writing} onChange={(event) => setWriting(event.target.value)} placeholder="Write your onboard response here." />
            <div className="writingMeta">Minimum {task.writingExercise.minimumWords} words / Current {wordCount}</div>
            <details>
              <summary>Example answer</summary>
              <p>{task.writingExercise.exampleAnswer}</p>
            </details>
          </div>
          <div className="learningBlock">
            <span>Operational scenario</span>
            <p>{task.operationalScenario}</p>
          </div>
          <div className="learningBlock">
            <span>Practice questions</span>
            <ul>{task.practiceQuestions.map((question) => <li key={question}>{question}</li>)}</ul>
          </div>
        </section>

        <section className="quizPanel academicAssessment" aria-live="polite">
          <div className="questionHeader">
            <span>Assessment</span>
            <strong>{score} / {task.assessment.length}</strong>
          </div>
          {task.assessment.map((question, index) => (
            <div className="miniQuestion" key={question.prompt}>
              <h3>{question.prompt}</h3>
              <div className="answerGrid compactAnswers">
                {question.options.map((option) => (
                  <button
                    aria-pressed={answers[index] === option}
                    className={`answerButton ${answers[index] === option ? "selected" : ""}`}
                    key={option}
                    onClick={() => setAnswers((current) => ({ ...current, [index]: option }))}
                    type="button"
                  >
                    <strong>{option}</strong>
                  </button>
                ))}
              </div>
            </div>
          ))}
          {submitted ? (
            <div className="assessmentPanel">
              <h3>{passed ? "Task Passed" : "Task Not Passed"}</h3>
              <p className="assessmentNote">{passed ? `${task.xp} XP awarded. Progress status: ${task.progressStatus}.` : "Complete the writing minimum and answer all assessment questions correctly."}</p>
            </div>
          ) : null}
          <div className="quizActions">
            <button className="secondaryAction" onClick={resetTask} type="button">Repeat Task</button>
            <button className="primaryAction" disabled={!assessmentComplete || !writingComplete} onClick={() => setSubmitted(true)} type="button">Submit Assessment</button>
          </div>
        </section>
      </div>
    </section>
  );
}
function CadetStatus() {
  return (
    <aside className="cadetPanel" aria-label="Cadet progress summary">
      <div className="panelHeader">
        <span>Cadet Record</span>
        <strong>Active</strong>
      </div>
      <div className="cadetRank">
        <span>Current Level</span>
        <strong>{cadetLevel}</strong>
      </div>
      <div className="xpMeter" aria-label="Cadet XP progress">
        <div style={{ width: `${Math.min(100, cadetXp / 2.5)}%` }} />
      </div>
      <div className="scopeGrid">
        <div>
          <span>XP</span>
          <strong>{cadetXp} / 250</strong>
        </div>
        <div>
          <span>Next Gate</span>
          <strong>Junior Cadet</strong>
        </div>
        <div>
          <span>Standard</span>
          <strong>STCW</strong>
        </div>
        <div>
          <span>Language</span>
          <strong>IMO SMCP</strong>
        </div>
      </div>
    </aside>
  );
}

function CareerPathDashboard() {
  return (
    <section className="careerDashboard" aria-labelledby="career-title">
      <div className="dashboardHeader">
        <div>
          <p className="eyebrow">Career Path Dashboard</p>
          <h2 id="career-title">Cadet progression map</h2>
        </div>
        <div className="dashboardSeal">MVP</div>
      </div>
      <div className="pathGrid">
        <PathColumn title="Deck Academy" items={deckPath} activeIndex={0} />
        <PathColumn title="Engine Academy" items={enginePath} activeIndex={0} />
      </div>
    </section>
  );
}

function PathColumn({ activeIndex, items, title }: { activeIndex: number; items: string[]; title: string }) {
  return (
    <div className="pathColumn">
      <h3>{title}</h3>
      <ol>
        {items.map((item, index) => (
          <li className={index === activeIndex ? "active" : ""} key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item}</strong>
          </li>
        ))}
      </ol>
    </div>
  );
}

function DeckInstitutionalPreview({ onStartMission }: { onStartMission: (mission: DeckLevelOneMission) => void }) {
  return (
    <section className="missionShell prototypePanel" aria-label="Deck Academy Level 1 missions">
      <div className="missionLead">
        <div>
          <p className="eyebrow">Deck Academy Level 1</p>
          <h2>Officer Cadet Foundation</h2>
        </div>
        <div className="missionBadge">
          <span>Status</span>
          <strong>3 playable missions</strong>
        </div>
      </div>
      <div className="prototypeGrid">
        {deckLevelOneMissions.map((mission) => (
          <button className="prototypeTile missionCardButton" key={mission.id} onClick={() => onStartMission(mission)} type="button">
            <span>{mission.code}</span>
            <strong>{mission.title}</strong>
            <p>{mission.missionBriefing}</p>
            <em>{mission.xp} XP</em>
          </button>
        ))}
      </div>
    </section>
  );
}

function DeckMissionPlayer({ mission, onBack }: { mission: DeckLevelOneMission; onBack: () => void }) {
  const [briefingAccepted, setBriefingAccepted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const activeQuestion = mission.questions[currentQuestion];
  const selectedAnswer = answers[currentQuestion];
  const score = useMemo(
    () => mission.questions.reduce((total, question, index) => total + (answers[index] === question.answer ? 1 : 0), 0),
    [answers, mission.questions]
  );
  const isComplete = Object.keys(answers).length === mission.questions.length;
  const passed = submitted && score >= passingScore;
  const earnedXp = passed ? mission.xp : 0;

  const resetMission = () => {
    setBriefingAccepted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <section className="missionShell simulatorMission" aria-labelledby="deck-mission-title">
      <button className="secondaryAction" onClick={onBack} type="button">
        Back to Deck Academy
      </button>
      <div className="missionLead missionLeadWithAction">
        <div>
          <p className="eyebrow">{mission.code}</p>
          <h2 id="deck-mission-title">{mission.title}</h2>
        </div>
        <div className={`missionBadge ${passed ? "passed" : ""}`}>
          <span>XP Reward</span>
          <strong>{earnedXp} / {mission.xp} XP</strong>
        </div>
      </div>

      <div className="missionLayout deckMissionLayout">
        <aside className="briefingPanel" aria-label="Deck mission briefing">
          <div className="panelTitle">
            <span>Mission Briefing</span>
            <strong>Deck Academy</strong>
          </div>
          <div className="briefingList">
            <div className="briefingRow">
              <span>STCW Competency</span>
              <strong>{mission.stcwCompetency}</strong>
            </div>
            <div className="briefingRow">
              <span>SMCP Function</span>
              <strong>{mission.smcpFunction}</strong>
            </div>
            <div className="briefingRow">
              <span>XP</span>
              <strong>{mission.xp} XP</strong>
            </div>
            <div className="briefingRow">
              <span>Pass Mark</span>
              <strong>8 / 10</strong>
            </div>
          </div>
          <p className="briefingText">{mission.missionBriefing}</p>
          <button className="primaryAction" onClick={() => setBriefingAccepted(true)} type="button">
            Start Mission
          </button>
        </aside>

        <article className="quizPanel" aria-live="polite">
          {!briefingAccepted ? (
            <div className="standbyPanel">
              <p className="eyebrow">Scenario</p>
              <h3>{mission.scenario}</h3>
              <p>Review the briefing, then answer 10 operational questions.</p>
            </div>
          ) : null}

          {briefingAccepted && !submitted ? (
            <div className="questionPanel">
              <div className="questionHeader">
                <span>Question {currentQuestion + 1} of {mission.questions.length}</span>
                <strong>{score} correct so far</strong>
              </div>
              <h3>{activeQuestion.prompt}</h3>
              <div className="answerGrid">
                {activeQuestion.options.map((option) => (
                  <button
                    aria-pressed={selectedAnswer === option}
                    className={`answerButton ${selectedAnswer === option ? "selected" : ""}`}
                    key={option}
                    onClick={() => setAnswers((currentAnswers) => ({ ...currentAnswers, [currentQuestion]: option }))}
                    type="button"
                  >
                    <strong>{option}</strong>
                  </button>
                ))}
              </div>
              <div className="quizActions">
                <button className="secondaryAction" disabled={currentQuestion === 0} onClick={() => setCurrentQuestion((question) => Math.max(0, question - 1))} type="button">
                  Previous
                </button>
                {currentQuestion < mission.questions.length - 1 ? (
                  <button className="primaryAction" disabled={!selectedAnswer} onClick={() => setCurrentQuestion((question) => question + 1)} type="button">
                    Next Question
                  </button>
                ) : (
                  <button className="primaryAction" disabled={!isComplete} onClick={() => setSubmitted(true)} type="button">
                    Submit Mission
                  </button>
                )}
              </div>
            </div>
          ) : null}

          {submitted ? (
            <div className="assessmentPanel">
              <p className="eyebrow">Assessment</p>
              <h3>{passed ? "Mission Passed" : "Mission Not Passed"}</h3>
              <div className="assessmentGrid">
                <span>Score: {score} / {mission.questions.length}</span>
                <span>Pass Mark: {passingScore} / {mission.questions.length}</span>
                <span>{passed ? `${mission.xp} XP Awarded` : "0 XP Awarded"}</span>
                <span>Rank: {cadetLevel}</span>
              </div>
              <p className="assessmentNote">{passed ? "Deck Academy progress recorded for Level 1 readiness." : "Try Again"}</p>
              <button className="primaryAction" onClick={resetMission} type="button">
                Repeat Mission
              </button>
            </div>
          ) : null}
        </article>
      </div>
    </section>
  );
}

function OceanIntelligenceCenter() {
  return (
    <section className="missionShell intelligencePanel" aria-labelledby="ocean-title">
      <div className="missionLead">
        <div>
          <p className="eyebrow">Ocean Intelligence Center</p>
          <h2 id="ocean-title">Operational readiness workspace</h2>
        </div>
        <div className="missionBadge">
          <span>Prototype</span>
          <strong>Competency intelligence</strong>
        </div>
      </div>
      <div className="intelligenceGrid">
        {intelligenceModules.map((module) => (
          <article className="intelligenceCard" key={module.title}>
            <span>{module.title}</span>
            <p>{module.detail}</p>
          </article>
        ))}
      </div>
      <div className="readinessStrip">
        <span>Readiness Signal</span>
        <strong>Cadet can enter mission brief, view STCW/SMCP targets, complete simulator task and receive debrief.</strong>
      </div>
    </section>
  );
}

function EngineRoomFamiliarizationMission() {
  const [briefingAccepted, setBriefingAccepted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, SystemId>>({});
  const [submitted, setSubmitted] = useState(false);

  const selectedAnswer = answers[currentQuestion];
  const score = useMemo(
    () => questions.reduce((total, question, index) => total + (answers[index] === question.answer ? 1 : 0), 0),
    [answers]
  );
  const isComplete = Object.keys(answers).length === questions.length;
  const passed = submitted && score >= passingScore;
  const earnedXp = passed ? missionXp : 0;
  const activeQuestion = questions[currentQuestion];

  const selectAnswer = (systemId: SystemId) => {
    setAnswers((currentAnswers) => ({ ...currentAnswers, [currentQuestion]: systemId }));
  };

  const resetMission = () => {
    setBriefingAccepted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <section className="missionShell simulatorMission" aria-labelledby="engine-room-mission-title">
      <div className="missionLead">
        <div>
          <p className="eyebrow">Playable Mission</p>
          <h2 id="engine-room-mission-title">Engine Room Familiarization</h2>
        </div>
        <div className={`missionBadge ${passed ? "passed" : ""}`}>
          <span>XP Reward</span>
          <strong>{earnedXp} / {missionXp} XP</strong>
        </div>
      </div>

      <div className="missionLayout">
        <aside className="briefingPanel" aria-label="Professional mission briefing">
          <div className="panelTitle">
            <span>Mission Briefing</span>
            <strong>Engine Academy</strong>
          </div>
          <div className="briefingList">
            {briefing.map(([label, value]) => (
              <div className="briefingRow" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <p className="briefingText">
            Inspect the engine-room diagram and identify the six foundation systems used in daily engineering rounds. Complete all 10 prompts. A score of 80 percent or higher passes the mission.
          </p>
          <button className="primaryAction" onClick={() => setBriefingAccepted(true)} type="button">
            Start Familiarization
          </button>
        </aside>

        <EngineRoomDiagram selectedAnswer={selectedAnswer} />

        <article className="quizPanel" aria-live="polite">
          {!briefingAccepted ? (
            <div className="standbyPanel">
              <p className="eyebrow">Awaiting Orders</p>
              <h3>Read the briefing before entering the machinery space.</h3>
              <p>The diagram is available now so the cadet can review stations before the assessment begins.</p>
            </div>
          ) : null}

          {briefingAccepted && !submitted ? (
            <div className="questionPanel">
              <div className="questionHeader">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <strong>{score} correct so far</strong>
              </div>
              <h3>{activeQuestion.prompt}</h3>
              <div className="answerGrid">
                {missionSystems.map((system) => (
                  <button
                    aria-pressed={selectedAnswer === system.id}
                    className={`answerButton ${selectedAnswer === system.id ? "selected" : ""}`}
                    key={system.id}
                    onClick={() => selectAnswer(system.id)}
                    type="button"
                  >
                    <span>{system.station}</span>
                    <strong>{system.label}</strong>
                    <small>{system.cue}</small>
                  </button>
                ))}
              </div>
              <div className="quizActions">
                <button className="secondaryAction" disabled={currentQuestion === 0} onClick={() => setCurrentQuestion((question) => Math.max(0, question - 1))} type="button">
                  Previous
                </button>
                {currentQuestion < questions.length - 1 ? (
                  <button className="primaryAction" disabled={!selectedAnswer} onClick={() => setCurrentQuestion((question) => question + 1)} type="button">
                    Next Question
                  </button>
                ) : (
                  <button className="primaryAction" disabled={!isComplete} onClick={() => setSubmitted(true)} type="button">
                    Submit Mission
                  </button>
                )}
              </div>
            </div>
          ) : null}

          {submitted ? <AssessmentPanel earnedXp={earnedXp} onReset={resetMission} passed={passed} score={score} /> : null}
        </article>
      </div>
    </section>
  );
}

function EngineRoomDiagram({ selectedAnswer }: { selectedAnswer?: SystemId }) {
  return (
    <section className="engineRoomDiagram" aria-label="Simple engine room diagram">
      <div className="diagramHeader">
        <span>Engine Room Diagram</span>
        <strong>Lower Platform</strong>
      </div>
      <div className="diagramGrid">
        {missionSystems.map((system) => (
          <div className={`diagramZone ${selectedAnswer === system.id ? "selected" : ""}`} key={system.id}>
            <span>{system.station}</span>
            <strong>{system.label}</strong>
            <small>{system.description}</small>
          </div>
        ))}
      </div>
      <div className="shaftLine">
        <span>Propeller shaft line</span>
      </div>
    </section>
  );
}

function AssessmentPanel({ earnedXp, onReset, passed, score }: { earnedXp: number; onReset: () => void; passed: boolean; score: number }) {
  return (
    <div className="assessmentPanel">
      <p className="eyebrow">Assessment</p>
      <h3>{passed ? "Mission Passed" : "Mission Not Passed"}</h3>
      <div className="assessmentGrid">
        <span>Score: {score} / {questions.length}</span>
        <span>Pass Mark: {passingScore} / {questions.length}</span>
        <span>{passed ? "100 XP Awarded" : "0 XP Awarded"}</span>
        <span>Rank: {cadetLevel}</span>
      </div>
      <p className="assessmentNote">
        {passed
          ? "Cadet has identified the core machinery spaces and may continue to the next Engine Academy task."
          : "Try Again"}
      </p>
      <button className="primaryAction" onClick={onReset} type="button">
        Repeat Mission
      </button>
    </div>
  );
}


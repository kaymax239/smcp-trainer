"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { getEnglishLevel, getLevelTasks } from "@/data/academic/english-levels";

const completedAcademicTaskStorageKey = "smcp.academic.completedTaskIds";

export default function EnglishLevelPage() {
  const params = useParams<{ level: string }>();
  const rawLevel = Array.isArray(params.level) ? params.level[0] : params.level;
  const levelNumber = Number(rawLevel);
  const level = useMemo(() => (Number.isFinite(levelNumber) ? getEnglishLevel(levelNumber) : undefined), [levelNumber]);

  const [completedTaskIds, setCompletedTaskIds] = useState<string[]>([]);

  useEffect(() => {
    const loadCompleted = () => {
      try {
        const saved = window.localStorage.getItem(completedAcademicTaskStorageKey);
        const parsed = saved ? JSON.parse(saved) : [];
        setCompletedTaskIds(Array.isArray(parsed) ? parsed.filter((id) => typeof id === "string") : []);
      } catch {
        setCompletedTaskIds([]);
      }
    };

    loadCompleted();
    window.addEventListener("focus", loadCompleted);
    window.addEventListener("storage", loadCompleted);
    return () => {
      window.removeEventListener("focus", loadCompleted);
      window.removeEventListener("storage", loadCompleted);
    };
  }, []);

  const completedSet = useMemo(() => new Set(completedTaskIds), [completedTaskIds]);

  if (!level) {
    return (
      <main className="academyShell">
        <section className="missionShell navalTaskShell" aria-labelledby="english-level-not-found-title">
          <div className="navalTaskHeader">
            <div>
              <p className="eyebrow">Inglés por Niveles</p>
              <h1 id="english-level-not-found-title">Nivel no encontrado</h1>
              <p>Ese nivel no existe en la sección de Inglés por Niveles.</p>
            </div>
            <Link className="secondaryAction taskOrderBackLink" href="/english-levels">
              Back to Levels
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const tasks = getLevelTasks(level);
  const completed = tasks.filter((task) => completedSet.has(task.taskId)).length;

  return (
    <main className="academyShell">
      <section className="academicDashboard programDashboard" aria-labelledby="english-level-title">
        <div className="programTopBar">
          <Link className="secondaryAction" href="/english-levels">
            Back to Levels
          </Link>
          <div className="missionBadge">
            <span>Nivel</span>
            <strong>{level.label}</strong>
          </div>
        </div>

        <div className="sectionHeader programHeader">
          <div>
            <p className="eyebrow">Inglés por Niveles / {level.cefr}</p>
            <h2 id="english-level-title">{level.label} — {level.title}</h2>
          </div>
          <p className="sectionNote">{level.description}</p>
        </div>

        <section className="missionTaskSection" aria-label={`Tareas de ${level.label}`}>
          <div className="panelTitle">
            <span>Tareas</span>
            <strong>{completed}/{tasks.length} completadas</strong>
          </div>
          {tasks.length > 0 ? (
            <div className="taskGrid missionTaskGrid">
              {tasks.map((task) => {
                const taskCompleted = completedSet.has(task.taskId);

                return (
                  <article className={`taskCard missionTaskCard ${taskCompleted ? "completed" : ""}`} key={task.taskId}>
                    <span>{taskCompleted ? "Completed" : task.topic}</span>
                    <strong>{task.taskTitle}</strong>
                    <p>{task.scenario}</p>
                    <div className="missionTaskMeta" aria-label={`${task.taskTitle} detalles`}>
                      <em>{task.xp} XP</em>
                      <em>{task.estimatedTime}</em>
                      <em>{task.difficulty}</em>
                    </div>
                    <Link
                      className={`secondaryAction missionTaskStartLink ${taskCompleted ? "completed" : ""}`}
                      href={`/tasks/${task.taskId}`}
                    >
                      {taskCompleted ? "Completed" : "Start"}
                    </Link>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="plannedNotice">
              <span>Aún no hay tareas para este nivel.</span>
            </div>
          )}
        </section>
      </section>
    </main>
  );
}

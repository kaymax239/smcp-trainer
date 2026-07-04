"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { englishLevels, getLevelTasks } from "@/data/academic/english-levels";

const completedAcademicTaskStorageKey = "smcp.academic.completedTaskIds";

export default function EnglishLevelsPage() {
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

  return (
    <main className="academyShell">
      <section className="academicDashboard programDashboard" aria-labelledby="english-levels-title">
        <div className="programTopBar">
          <Link className="secondaryAction" href="/">
            Back to Academy
          </Link>
          <div className="missionBadge">
            <span>Sección</span>
            <strong>Inglés por Niveles</strong>
          </div>
        </div>

        <div className="sectionHeader programHeader">
          <div>
            <p className="eyebrow">Inglés General</p>
            <h2 id="english-levels-title">Inglés por Niveles</h2>
          </div>
          <p className="sectionNote">
            Niveles de inglés general, compartidos entre todas las carreras. Cada nivel reúne sus tareas
            (por ahora el juego Sentence Builder; más adelante vocabulary, reading y speaking).
          </p>
        </div>

        <section className="missionTaskSection" aria-label="Lista de niveles de inglés">
          <div className="panelTitle">
            <span>Niveles</span>
            <strong>{englishLevels.length} disponibles</strong>
          </div>
          <div className="taskGrid missionTaskGrid">
            {englishLevels.map((level) => {
              const tasks = getLevelTasks(level);
              const completed = tasks.filter((task) => completedSet.has(task.taskId)).length;
              const allDone = tasks.length > 0 && completed === tasks.length;

              return (
                <Link
                  className={`taskCard missionTaskCard ${allDone ? "completed" : ""}`}
                  key={level.level}
                  href={`/english-levels/${level.level}`}
                >
                  <span>{allDone ? "Completado" : level.label}</span>
                  <strong>{level.title}</strong>
                  <p>{level.description}</p>
                  <div className="missionTaskMeta" aria-label={`${level.label} detalles`}>
                    <em>{level.cefr}</em>
                    <em>{tasks.length} {tasks.length === 1 ? "tarea" : "tareas"}</em>
                    <em>{completed}/{tasks.length} completadas</em>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </section>
    </main>
  );
}

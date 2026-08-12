"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { AcademicMissionTask } from "@/data/academic/mission-tasks";
// Solo las tareas generadas con IA, no el catálogo completo: esta sección
// existe precisamente para revisar lo que ha salido de /admin/generate-tasks.
import generatedTasksJson from "@/data/academic/generated-tasks.json";

const generatedTasks = generatedTasksJson as AcademicMissionTask[];

const completedAcademicTaskStorageKey = "smcp.academic.completedTaskIds";

export default function GeneratedTasksPage() {
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
      <section className="academicDashboard programDashboard" aria-labelledby="generated-tasks-title">
        <div className="programTopBar">
          <Link className="secondaryAction" href="/">
            Back to Academy
          </Link>
          <div className="missionBadge">
            <span>Sección</span>
            <strong>Generated Tasks</strong>
          </div>
        </div>

        <div className="sectionHeader programHeader">
          <div>
            <p className="eyebrow">AI Content Studio</p>
            <h2 id="generated-tasks-title">Generated Tasks</h2>
          </div>
          <p className="sectionNote">
            Tareas operativas creadas con IA desde el panel de administración. Se revisan aquí antes de
            integrarse al recorrido normal de cada carrera.
          </p>
        </div>

        <section className="missionTaskSection" aria-label="Lista de tareas generadas">
          <div className="panelTitle">
            <span>Tareas</span>
            <strong>
              {generatedTasks.length} {generatedTasks.length === 1 ? "generada" : "generadas"}
            </strong>
          </div>

          {generatedTasks.length === 0 ? (
            <div className="plannedNotice">
              <span>Sin contenido</span>
              <strong>Todavía no hay tareas generadas</strong>
              <p>
                Crea la primera desde <Link href="/admin/generate-tasks">/admin/generate-tasks</Link>. Al
                guardarla aparecerá en esta lista.
              </p>
            </div>
          ) : (
            <div className="taskGrid missionTaskGrid">
              {generatedTasks.map((task) => {
                const done = completedSet.has(task.taskId);

                return (
                  <Link
                    className={`taskCard missionTaskCard ${done ? "completed" : ""}`}
                    key={task.taskId}
                    href={`/tasks/${encodeURIComponent(task.taskId)}`}
                  >
                    <span>{done ? "Completada" : `${task.career} · ${task.semester}`}</span>
                    <strong>{task.taskTitle}</strong>
                    <p>
                      {task.subjectCode} — {task.subjectName}
                    </p>
                    <div className="missionTaskMeta" aria-label={`${task.taskTitle} detalles`}>
                      <em>{task.difficulty}</em>
                      <em>{task.xp} XP</em>
                      <em>{task.estimatedTime}</em>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </section>
      </section>
    </main>
  );
}

"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { academicMissionTasks } from "@/data/academic/mission-tasks";

const completedAcademicTaskStorageKey = "smcp.academic.completedTaskIds";
const taskAttemptsStorageKey = "smcp.academic.taskAttempts";

export default function AcademicTaskOrderPage() {
  const params = useParams<{ taskId: string }>();
  const taskId = Array.isArray(params.taskId) ? params.taskId[0] : params.taskId;
  const decodedTaskId = decodeURIComponent(taskId ?? "");
  const task = useMemo(() => academicMissionTasks.find((missionTask) => missionTask.taskId === decodedTaskId), [decodedTaskId]);
  const [completedTaskIds, setCompletedTaskIds] = useState<string[]>([]);
  const [taskStatus, setTaskStatus] = useState<"not started" | "in progress">("not started");
  const [studentResponse, setStudentResponse] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isLoadingFeedback, setIsLoadingFeedback] = useState(false);
  const [feedbackError, setFeedbackError] = useState("");
  const [attempts, setAttempts] = useState<Record<string, { passed: boolean }>>({});
  const [passed, setPassed] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const savedTaskIds = window.localStorage.getItem(completedAcademicTaskStorageKey);
      const parsedTaskIds = savedTaskIds ? JSON.parse(savedTaskIds) : [];
      setCompletedTaskIds(Array.isArray(parsedTaskIds) ? parsedTaskIds.filter((savedTaskId) => typeof savedTaskId === "string") : []);
    } catch {
      setCompletedTaskIds([]);
    }

    try {
      const savedAttempts = window.localStorage.getItem(taskAttemptsStorageKey);
      const parsedAttempts = savedAttempts ? JSON.parse(savedAttempts) : {};
      setAttempts(parsedAttempts && typeof parsedAttempts === "object" ? parsedAttempts : {});
    } catch {
      setAttempts({});
    }
  }, []);

  const taskCompleted = task ? completedTaskIds.includes(task.taskId) : false;
  const taskInProgress = !taskCompleted && taskStatus === "in progress";
  const cadetRole = task?.career === "PN" ? "Deck Cadet" : "Engineering Cadet";
  const department = task?.career === "PN" ? "Deck Department" : "Engine Department";
  const vessel = "MV Kaymax Explorer";
  const priority = task?.difficulty === "Advanced" ? "High" : task?.difficulty === "Standard" ? "Normal" : "Foundation";

  const attempt = attempts[task?.taskId ?? ""];
  const alreadyAttempted = !!attempt;
  const showActionPanel = taskInProgress || alreadyAttempted;

  const subjectTasks = task
    ? academicMissionTasks
        .filter((missionTask) => missionTask.subjectId === task.subjectId)
        .sort((a, b) => (a.week ?? 0) - (b.week ?? 0))
    : [];
  const currentIndex = task ? subjectTasks.findIndex((missionTask) => missionTask.taskId === task.taskId) : -1;
  const nextTask = currentIndex >= 0 && currentIndex < subjectTasks.length - 1 ? subjectTasks[currentIndex + 1] : null;

  const markTaskComplete = (idToComplete?: string) => {
    const id = idToComplete ?? task?.taskId;
    if (!id || completedTaskIds.includes(id)) {
      return;
    }

    const updatedTaskIds = [...completedTaskIds, id];
    setCompletedTaskIds(updatedTaskIds);
    window.localStorage.setItem(completedAcademicTaskStorageKey, JSON.stringify(updatedTaskIds));
  };

  async function handleSubmitFinal() {
    if (!task || !studentResponse.trim() || alreadyAttempted) return;
    setIsLoadingFeedback(true);
    setFeedback("");
    setFeedbackError("");
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          taskTitle: task.taskTitle,
          scenario: task.scenario,
          instructions: task.instructions,
          deliverable: task.deliverable,
          assessmentCriteria: task.assessmentCriteria,
          studentResponse,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setFeedbackError(data.error || "No se pudo obtener retroalimentación.");
      } else {
        const didPass = data.passed === true;
        setFeedback(data.feedback || "");
        setPassed(didPass);

        // Registrar el intento (único) y persistirlo.
        const updatedAttempts = { ...attempts, [task.taskId]: { passed: didPass } };
        setAttempts(updatedAttempts);
        window.localStorage.setItem(taskAttemptsStorageKey, JSON.stringify(updatedAttempts));

        // Si pasó, otorgar XP completando la tarea.
        if (didPass) {
          markTaskComplete(task.taskId);
        }
      }
    } catch {
      setFeedbackError("Error de conexión. Intenta de nuevo.");
    } finally {
      setIsLoadingFeedback(false);
    }
  }

  if (!task) {
    return (
      <main className="academyShell">
        <section className="missionShell navalTaskShell" aria-labelledby="task-not-found-title">
          <div className="navalTaskHeader">
            <div>
              <p className="eyebrow">Task Order</p>
              <h1 id="task-not-found-title">Task not found</h1>
              <p>The requested operational task is not available in the current mission inventory.</p>
            </div>
            <Link className="secondaryAction taskOrderBackLink" href="/">
              Back to Academy
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="academyShell">
      <section className="missionShell navalTaskShell" aria-labelledby="task-order-title">
        <div className="navalTaskHeader">
          <div>
            <p className="eyebrow">Task Order</p>
            <h1 id="task-order-title">TASK ORDER</h1>
            <p>{task.taskTitle}</p>
          </div>
          <div className={`missionBadge ${taskCompleted ? "passed" : ""}`} aria-label="Task status">
            <span>Status</span>
            <strong>{taskCompleted ? "MISSION COMPLETE" : taskInProgress ? "Task Active" : "Awaiting Start"}</strong>
          </div>
        </div>

        <section className="navalTaskCommandCard" aria-label="Operational command card">
          <div className="navalTaskMetaGrid">
            <CommandItem label="Vessel" value={vessel} />
            <CommandItem label="Cadet Role" value={cadetRole} />
            <CommandItem label="Department" value={department} />
            <CommandItem label="Task Number" value={task.taskId} />
            <CommandItem label="Priority" value={priority} />
            <CommandItem label="Estimated Time" value={task.estimatedTime} />
          </div>

          <div className="navalMissionBlock">
            <span>Mission</span>
            <h2>{task.taskTitle}</h2>
            <p>{task.deliverable}</p>
          </div>
        </section>

        <div className="navalTaskLayout">
          <section className="navalOrderPanel situationPanel">
            <span>Operational Situation</span>
            <p>{task.scenario}</p>
            <small>{task.subjectCode} / {task.subjectName} / {task.topic}</small>
          </section>

          <section className="navalOrderPanel">
            <span>Your Orders</span>
            <ol>
              {task.instructions.map((instruction) => (
                <li key={instruction}>{instruction}</li>
              ))}
            </ol>
          </section>

          <section className="navalOrderPanel">
            <span>Success Criteria</span>
            <ul>
              {task.assessmentCriteria.map((criterion) => (
                <li key={criterion}>{criterion}</li>
              ))}
            </ul>
          </section>

          {showActionPanel ? (
            <section className="navalOrderPanel cadetActionPanel" aria-label="Cadet action execution steps">
              <span>Cadet Action</span>
              <p>Execute the task order using the following operational steps.</p>
              <ol>
                {task.instructions.map((instruction, index) => (
                  <li key={`action-${instruction}`}>
                    <strong>Step {index + 1}</strong>
                    {instruction}
                  </li>
                ))}
              </ol>

              <div className="learningBlock">
                <span>Your Response</span>
                <textarea
                  value={studentResponse}
                  onChange={(event) => setStudentResponse(event.target.value)}
                  placeholder="Write your response here in English..."
                  disabled={alreadyAttempted}
                />

                {alreadyAttempted ? (
                  <div
                    className="missionBadge"
                    aria-label="Evaluation verdict"
                    style={{ borderLeftColor: attempt?.passed ? "#22c55e" : "var(--alert)" }}
                  >
                    <span>Verdict</span>
                    <strong style={{ color: attempt?.passed ? "#22c55e" : "var(--alert)" }}>
                      {attempt?.passed ? "PASSED ✓" : "NOT PASSED ✗"}
                    </strong>
                  </div>
                ) : (
                  <>
                    <button
                      className="primaryAction"
                      type="button"
                      disabled={isLoadingFeedback || !studentResponse.trim() || alreadyAttempted}
                      onClick={handleSubmitFinal}
                    >
                      Submit Final Answer
                    </button>
                    <small style={{ display: "block", marginTop: 6 }}>One attempt only — make it count.</small>
                  </>
                )}

                {isLoadingFeedback ? (
                  <p className="briefingText" aria-live="polite">Analyzing your response...</p>
                ) : null}

                {feedback ? (
                  <div className="navalOrderPanel" aria-live="polite" style={{ marginTop: 12 }}>
                    <span>Instructor Feedback{passed === null ? "" : passed ? " — Passed" : " — Not passed"}</span>
                    <p style={{ whiteSpace: "pre-wrap" }}>{feedback}</p>
                  </div>
                ) : null}

                {feedbackError ? (
                  <p className="briefingText" aria-live="polite" style={{ color: "var(--alert)" }}>
                    {feedbackError}
                  </p>
                ) : null}

                {alreadyAttempted ? (
                  nextTask ? (
                    <Link className="primaryAction" href={`/tasks/${nextTask.taskId}`} style={{ marginTop: 12 }}>
                      Next Task →
                    </Link>
                  ) : (
                    <div className="missionCompletePanel" style={{ marginTop: 12 }}>
                      <p className="eyebrow">Subject Complete</p>
                      <h2>Subject Complete — ¡Materia completada!</h2>
                    </div>
                  )
                ) : null}
              </div>
            </section>
          ) : null}

          <aside className="navalRewardPanel" aria-label="XP reward and task controls">
            <div className="xpRewardBlock">
              <span>XP Reward</span>
              <strong>{task.xp} XP</strong>
            </div>
            <div className="badgeEarnedPlaceholder" aria-label="Badge earned placeholder">
              <span>Badge Earned</span>
              <strong>{taskCompleted ? "Task Order Qualified" : "Pending"}</strong>
            </div>

            {!alreadyAttempted && !taskInProgress ? (
              <button className="beginTaskButton" onClick={() => setTaskStatus("in progress")} type="button">
                BEGIN TASK
              </button>
            ) : null}

            {!alreadyAttempted && taskInProgress ? (
              <p className="briefingText">Submit your answer to complete this task.</p>
            ) : null}

            {alreadyAttempted && attempt?.passed ? (
              <p className="briefingText" style={{ color: "#22c55e" }}>MISSION COMPLETE — XP awarded.</p>
            ) : null}

            {alreadyAttempted && !attempt?.passed ? (
              <p className="briefingText" style={{ color: "var(--alert)" }}>
                NOT PASSED — no XP awarded. You may continue to the next task.
              </p>
            ) : null}

            <Link className="secondaryAction" href="/">
              Back to Academy
            </Link>
          </aside>
        </div>

        {taskCompleted ? (
          <section className="missionCompletePanel" aria-live="polite">
            <p className="eyebrow">Mission Complete</p>
            <h2>MISSION COMPLETE</h2>
            <p>Task completion recorded locally. XP earned is counted once for this task.</p>
            <strong>+{task.xp} XP earned</strong>
          </section>
        ) : null}
      </section>
    </main>
  );
}

function CommandItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="commandItem">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
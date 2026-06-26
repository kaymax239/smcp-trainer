"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { academicMissionTasks } from "@/data/academic/mission-tasks";

const completedAcademicTaskStorageKey = "smcp.academic.completedTaskIds";

export default function AcademicTaskOrderPage() {
  const params = useParams<{ taskId: string }>();
  const taskId = Array.isArray(params.taskId) ? params.taskId[0] : params.taskId;
  const decodedTaskId = decodeURIComponent(taskId ?? "");
  const task = useMemo(() => academicMissionTasks.find((missionTask) => missionTask.taskId === decodedTaskId), [decodedTaskId]);
  const [completedTaskIds, setCompletedTaskIds] = useState<string[]>([]);
  const [taskStatus, setTaskStatus] = useState<"not started" | "in progress">("not started");

  useEffect(() => {
    try {
      const savedTaskIds = window.localStorage.getItem(completedAcademicTaskStorageKey);
      const parsedTaskIds = savedTaskIds ? JSON.parse(savedTaskIds) : [];
      setCompletedTaskIds(Array.isArray(parsedTaskIds) ? parsedTaskIds.filter((savedTaskId) => typeof savedTaskId === "string") : []);
    } catch {
      setCompletedTaskIds([]);
    }
  }, []);

  const taskCompleted = task ? completedTaskIds.includes(task.taskId) : false;
  const taskInProgress = !taskCompleted && taskStatus === "in progress";
  const cadetRole = task?.career === "PN" ? "Deck Cadet" : "Engineering Cadet";
  const department = task?.career === "PN" ? "Deck Department" : "Engine Department";
  const vessel = "MV Kaymax Explorer";
  const priority = task?.difficulty === "Advanced" ? "High" : task?.difficulty === "Standard" ? "Normal" : "Foundation";

  const markTaskComplete = () => {
    if (!task || taskCompleted) {
      return;
    }

    const updatedTaskIds = [...completedTaskIds, task.taskId];
    setCompletedTaskIds(updatedTaskIds);
    window.localStorage.setItem(completedAcademicTaskStorageKey, JSON.stringify(updatedTaskIds));
  };

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

          {taskInProgress ? (
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

            {!taskInProgress && !taskCompleted ? (
              <button className="beginTaskButton" onClick={() => setTaskStatus("in progress")} type="button">
                BEGIN TASK
              </button>
            ) : (
              <button className="primaryAction completeTaskButton" disabled={taskCompleted} onClick={markTaskComplete} type="button">
                {taskCompleted ? "Completed" : "Mark as Complete"}
              </button>
            )}

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
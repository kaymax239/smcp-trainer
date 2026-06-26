import Link from "next/link";
import { academicMissionTasks } from "@/data/academic/mission-tasks";

type TaskPageProps = {
  params: Promise<{
    taskId: string;
  }>;
};

export default async function AcademicTaskOrderPage({ params }: TaskPageProps) {
  const { taskId } = await params;
  const task = academicMissionTasks.find((missionTask) => missionTask.taskId === decodeURIComponent(taskId));

  if (!task) {
    return (
      <main className="academyShell">
        <section className="missionShell taskOrderPageShell" aria-labelledby="task-not-found-title">
          <div className="missionLead missionPlayerHeader">
            <div>
              <p className="eyebrow">Task Order</p>
              <h1 id="task-not-found-title">Task not found</h1>
              <p className="briefingText">The requested academic task is not available in the current mission inventory.</p>
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
      <section className="missionShell taskOrderPageShell" aria-labelledby="task-order-title">
        <div className="missionLead missionPlayerHeader">
          <div>
            <p className="eyebrow">Academic Task Order</p>
            <h1 id="task-order-title">{task.taskTitle}</h1>
            <p className="briefingText">{task.scenario}</p>
          </div>
          <div className="missionBadge" aria-label="Task reward and difficulty">
            <span>{task.difficulty}</span>
            <strong>{task.xp} XP</strong>
          </div>
        </div>

        <section className="briefingPanel sourceTracePanel" aria-label="Official academic source traceability">
          <div className="briefingList taskOrderMetaGrid">
            <InfoRow label="Career" value={task.career} />
            <InfoRow label="Semester" value={task.semester} />
            <InfoRow label="Subject" value={`${task.subjectCode} / ${task.subjectName}`} />
            <InfoRow label="Unit" value={task.unit} />
            <InfoRow label="Topic" value={task.topic} />
            <InfoRow label="Task ID" value={task.taskId} />
            <InfoRow label="Task Title" value={task.taskTitle} />
          </div>
        </section>

        <div className="taskOrderLayout academicTaskOrderLayout">
          <section className="taskOrderPanel taskSummaryPanel">
            <span>Scenario</span>
            <p>{task.scenario}</p>
          </section>

          <section className="taskOrderPanel">
            <span>Instructions</span>
            <ol>
              {task.instructions.map((instruction) => (
                <li key={instruction}>{instruction}</li>
              ))}
            </ol>
          </section>

          <section className="taskOrderPanel">
            <span>Deliverable</span>
            <p>{task.deliverable}</p>
          </section>

          <section className="taskOrderPanel taskActionPanel">
            <span>Assessment Criteria</span>
            <ul>
              {task.assessmentCriteria.map((criterion) => (
                <li key={criterion}>{criterion}</li>
              ))}
            </ul>
          </section>

          <section className="logbookPanel taskCompletionPanel" aria-labelledby="task-completion-title">
            <div className="panelTitle">
              <span id="task-completion-title">Performance Check</span>
              <strong>{task.estimatedTime}</strong>
            </div>
            <div className="taskCompletionSummary">
              <InfoRow label="XP" value={`${task.xp} XP`} />
              <InfoRow label="Estimated Time" value={task.estimatedTime} />
              <InfoRow label="Difficulty" value={task.difficulty} />
            </div>
            <div className="missionPlayerActions" aria-label="Task order controls">
              <Link className="secondaryAction" href="/">
                Back to Academy
              </Link>
              <button className="primaryAction" type="button">
                Mark as Complete
              </button>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="briefingRow">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
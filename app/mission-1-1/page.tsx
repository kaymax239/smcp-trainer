"use client";

import { useState } from "react";

const taskOrder = {
  title: "Engine Room Initial Check-In",
  sourceProgram: "MN",
  sourceUnit: "Unidad 1: Uso del verbo to be",
  sourceTopic: "1.1 Presentarse a sí mismo",
  operationalContext: "You have reported onboard for your first familiarization watch.",
  orders: [
    "Proceed to Engine Control Room.",
    "Locate the Chief Engineer.",
    "Sign Engine Room Logbook.",
    "State your name and role.",
    "Confirm assigned duty.",
    "Confirm readiness to follow safety instructions."
  ],
  requiredInformation: ["Cadet name", "Cadet role", "Assigned duty", "Readiness status"],
  action: "Complete check-in report.",
  performanceCheck: "Can the cadet successfully complete the reporting procedure?",
  taskComplete: "Chief Engineer accepts report.",
  xp: 10
};

const defaultReport = {
  name: "",
  role: "",
  duty: "",
  readiness: ""
};

export default function MissionOneOnePage() {
  const [submitted, setSubmitted] = useState(false);
  const [report, setReport] = useState(defaultReport);

  const checklist = [
    { label: "Name provided", complete: report.name.trim().length > 0 },
    { label: "Role provided", complete: report.role.trim().length > 0 },
    { label: "Duty provided", complete: report.duty.trim().length > 0 },
    { label: "Readiness provided", complete: report.readiness.trim().length > 0 }
  ];
  const reportComplete = checklist.every((item) => item.complete);

  const updateReport = (field: keyof typeof defaultReport, value: string) => {
    setReport((currentReport) => ({ ...currentReport, [field]: value }));
    setSubmitted(false);
  };

  const resetReport = () => {
    setReport(defaultReport);
    setSubmitted(false);
  };

  return (
    <main className="academyShell">
      <section className="missionShell" aria-labelledby="mission-player-title">
        <div className="missionLead missionPlayerHeader">
          <div>
            <p className="eyebrow">Task Order</p>
            <h1 id="mission-player-title">{taskOrder.title}</h1>
            <p className="briefingText">Operational task order for cadet duty assignment and onboard familiarization.</p>
          </div>
          <div className={`missionBadge ${submitted && reportComplete ? "passed" : ""}`} aria-live="polite">
            <span>Task Status</span>
            <strong>{submitted && reportComplete ? "Accepted" : "Awaiting Report"}</strong>
          </div>
        </div>

        <section className="briefingPanel sourceTracePanel" aria-label="Official source traceability">
          <div className="briefingList">
            <InfoRow label="Source Program" value={taskOrder.sourceProgram} />
            <InfoRow label="Source Unit" value={taskOrder.sourceUnit} />
            <InfoRow label="Source Topic" value={taskOrder.sourceTopic} />
          </div>
        </section>

        <div className="taskOrderLayout">
          <section className="taskOrderPanel">
            <span>Operational Context</span>
            <p>{taskOrder.operationalContext}</p>
          </section>

          <section className="taskOrderPanel">
            <span>Cadet Orders</span>
            <ol>
              {taskOrder.orders.map((order) => (
                <li key={order}>{order}</li>
              ))}
            </ol>
          </section>

          <section className="taskOrderPanel">
            <span>Required Information</span>
            <ul>
              {taskOrder.requiredInformation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="taskOrderPanel taskActionPanel">
            <span>Cadet Action</span>
            <p>{taskOrder.action}</p>
            <span>Performance Check</span>
            <p>{taskOrder.performanceCheck}</p>
            <span>Task Complete</span>
            <p>{taskOrder.taskComplete}</p>
          </section>

          <section className="logbookPanel" aria-labelledby="logbook-title">
            <div className="panelTitle">
              <span id="logbook-title">Engine Room Logbook Entry</span>
              <strong>{taskOrder.xp} XP</strong>
            </div>
            <div className="logbookGrid">
              <ReportField label="Name" value={report.name} onChange={(value) => updateReport("name", value)} />
              <ReportField label="Role" value={report.role} onChange={(value) => updateReport("role", value)} />
              <ReportField label="Assigned Duty" value={report.duty} onChange={(value) => updateReport("duty", value)} />
              <ReportField label="Readiness Status" value={report.readiness} onChange={(value) => updateReport("readiness", value)} />
            </div>
            <div className="missionPlayerActions" aria-label="Task report controls">
              <button className="secondaryAction" onClick={resetReport} type="button">
                Reset Entry
              </button>
              <button className="primaryAction" disabled={!reportComplete} onClick={() => setSubmitted(true)} type="button">
                Submit Report
              </button>
            </div>
          </section>

          {submitted ? (
            <section className="assessmentPanel taskAssessmentPanel" aria-live="polite">
              <p className="eyebrow">Assessment</p>
              <div className="taskChecklist">
                {checklist.map((item) => (
                  <span className={item.complete ? "complete" : ""} key={item.label}>
                    {item.complete ? "✓" : "-"} {item.label}
                  </span>
                ))}
              </div>
              <h2>Mission Accepted</h2>
              <p className="assessmentNote">Chief Engineer accepted your report.</p>
              <strong className="xpAward">+{taskOrder.xp} XP</strong>
            </section>
          ) : null}
        </div>
      </section>
    </main>
  );
}

function ReportField({ label, onChange, value }: { label: string; onChange: (value: string) => void; value: string }) {
  const id = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <label className="logbookField" htmlFor={id}>
      <span>{label}</span>
      <input id={id} onChange={(event) => onChange(event.target.value)} value={value} />
    </label>
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

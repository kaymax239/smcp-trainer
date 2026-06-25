"use client";

import { useState } from "react";

export type TaskOrderField = {
  id: string;
  label: string;
};

export type TaskOrderMission = {
  title: string;
  briefing: string;
  sourceProgram: string;
  sourceUnit: string;
  sourceTopic: string;
  operationalContext: string;
  orders: string[];
  requiredInformation: string[];
  action: string;
  formTitle: string;
  fields: TaskOrderField[];
  performanceCheck: string;
  taskComplete: string;
  xp: number;
  acceptedMessage: string;
};

type Report = Record<string, string>;

export function TaskOrderMissionPage({ mission }: { mission: TaskOrderMission }) {
  const defaultReport = mission.fields.reduce<Report>((report, field) => ({ ...report, [field.id]: "" }), {});
  const [submitted, setSubmitted] = useState(false);
  const [report, setReport] = useState<Report>(defaultReport);

  const checklist = mission.fields.map((field) => ({
    label: `${field.label} provided`,
    complete: report[field.id].trim().length > 0
  }));
  const reportComplete = checklist.every((item) => item.complete);

  const updateReport = (fieldId: string, value: string) => {
    setReport((currentReport) => ({ ...currentReport, [fieldId]: value }));
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
            <h1 id="mission-player-title">{mission.title}</h1>
            <p className="briefingText">{mission.briefing}</p>
          </div>
          <div className={`missionBadge ${submitted && reportComplete ? "passed" : ""}`} aria-live="polite">
            <span>Task Status</span>
            <strong>{submitted && reportComplete ? "Accepted" : "Awaiting Report"}</strong>
          </div>
        </div>

        <section className="briefingPanel sourceTracePanel" aria-label="Official source traceability">
          <div className="briefingList">
            <InfoRow label="Source Program" value={mission.sourceProgram} />
            <InfoRow label="Source Unit" value={mission.sourceUnit} />
            <InfoRow label="Source Topic" value={mission.sourceTopic} />
          </div>
        </section>

        <div className="taskOrderLayout">
          <section className="taskOrderPanel">
            <span>Operational Context</span>
            <p>{mission.operationalContext}</p>
          </section>

          <section className="taskOrderPanel">
            <span>Cadet Orders</span>
            <ol>
              {mission.orders.map((order) => (
                <li key={order}>{order}</li>
              ))}
            </ol>
          </section>

          <section className="taskOrderPanel">
            <span>Required Information</span>
            <ul>
              {mission.requiredInformation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="taskOrderPanel taskActionPanel">
            <span>Cadet Action</span>
            <p>{mission.action}</p>
            <span>Performance Check</span>
            <p>{mission.performanceCheck}</p>
            <span>Task Complete</span>
            <p>{mission.taskComplete}</p>
            <span>XP Award</span>
            <p>{mission.xp} XP</p>
          </section>

          <section className="logbookPanel" aria-labelledby="logbook-title">
            <div className="panelTitle">
              <span id="logbook-title">{mission.formTitle}</span>
              <strong>{mission.xp} XP</strong>
            </div>
            <div className="logbookGrid">
              {mission.fields.map((field) => (
                <ReportField
                  key={field.id}
                  label={field.label}
                  onChange={(value) => updateReport(field.id, value)}
                  value={report[field.id]}
                />
              ))}
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
                    {item.complete ? "OK" : "-"} {item.label}
                  </span>
                ))}
              </div>
              <h2>Mission Accepted</h2>
              <p className="assessmentNote">{mission.acceptedMessage}</p>
              <strong className="xpAward">+{mission.xp} XP</strong>
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

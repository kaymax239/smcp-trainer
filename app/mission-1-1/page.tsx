"use client";

import type { ReactNode } from "react";
import { useState } from "react";

const mission = {
  title: "Report To The Chief Engineer",
  sourceProgram: "MN",
  sourceUnit: "Unidad 1: Uso del verbo to be",
  sourceTopic: "1.1. Presentarse a sí mismo.",
  order: "Cadet, complete your initial engine room reporting procedure.",
  operationalContext:
    "You arrive at the engine control room for your first supervised watch. The chief engineer asks for your name, role, academy program, and assigned duty before allowing you to enter the work area.",
  orders: [
    "Report to the Chief Engineer.",
    "State your name and role.",
    "Confirm your assigned engine room duty.",
    "Confirm readiness to follow safety instructions.",
    "Submit your report."
  ],
  tools: ["Assigned duty", "Cadet role", "Engine room safety instructions", "Professional reporting tone"],
  action: "Prepare and submit a short operational status report to the Chief Engineer.",
  reportPrompt: "Chief Engineer, I am...",
  assessment: [
    "Identity confirmed",
    "Role confirmed",
    "Duty confirmed",
    "Readiness confirmed",
    "Professional tone used"
  ],
  xp: 10
};

export default function MissionOneOnePage() {
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [report, setReport] = useState("");
  const reportSubmitted = report.trim().length > 0;

  const startMission = () => {
    setStarted(true);
    setCompleted(false);
    setReport("");
  };

  const completeMission = () => {
    if (!started || !reportSubmitted) return;
    setCompleted(true);
  };

  return (
    <main className="academyShell">
      <section className="missionShell" aria-labelledby="mission-player-title">
        <div className="missionLead missionPlayerHeader">
          <div>
            <p className="eyebrow">Mission Order</p>
            <h1 id="mission-player-title">Mission Order: {mission.title}</h1>
            <p className="briefingText">Chief Engineer: &quot;{mission.order}&quot;</p>
          </div>
          <div className={`missionBadge ${completed ? "passed" : ""}`} aria-live="polite">
            <span>Mission Status</span>
            <strong>{completed ? "Mission Complete" : started ? "Mission Started" : "Ready"}</strong>
          </div>
        </div>

        <section className="briefingPanel" aria-label="Official source traceability">
          <div className="briefingList">
            <InfoRow label="Source Program" value={mission.sourceProgram} />
            <InfoRow label="Source Unit" value={mission.sourceUnit} />
            <InfoRow label="Source Topic" value={mission.sourceTopic} />
          </div>
        </section>

        <div className="missionPlayerActions" aria-label="Mission controls">
          <button className="primaryAction" onClick={startMission} type="button">
            Start Mission
          </button>
          <button className="secondaryAction" disabled={!started || completed || !reportSubmitted} onClick={completeMission} type="button">
            Complete Mission
          </button>
        </div>

        {completed ? (
          <section className="assessmentPanel" aria-live="polite">
            <h2>Mission Complete</h2>
            <p className="assessmentNote">+{mission.xp} XP Awarded</p>
          </section>
        ) : null}

        <div className="missionPlayerGrid">
          <MissionSection title="Operational Context">{mission.operationalContext}</MissionSection>

          <section className="missionPlayerPanel">
            <h2>Cadet Orders</h2>
            <ol>
              {mission.orders.map((order) => (
                <li key={order}>{order}</li>
              ))}
            </ol>
          </section>

          <section className="missionPlayerPanel">
            <h2>Required Tools or Knowledge</h2>
            <ul>
              {mission.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </section>

          <MissionSection title="Cadet Action">{mission.action}</MissionSection>

          <section className="missionPlayerPanel">
            <h2>Cadet Report</h2>
            <label className="reportLabel" htmlFor="cadet-report">
              Submit your operational response.
            </label>
            <textarea
              className="reportBox"
              disabled={!started || completed}
              id="cadet-report"
              onChange={(event) => setReport(event.target.value)}
              placeholder={mission.reportPrompt}
              rows={6}
              value={report}
            />
          </section>

          <section className="missionPlayerPanel">
            <h2>Performance Assessment</h2>
            <ul>
              {mission.assessment.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <MissionSection title="XP Award">
            {completed ? `+${mission.xp} XP Awarded` : `${mission.xp} XP available after report submission.`}
          </MissionSection>
        </div>
      </section>
    </main>
  );
}

function MissionSection({ children, title }: { children: ReactNode; title: string }) {
  return (
    <section className="missionPlayerPanel">
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
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


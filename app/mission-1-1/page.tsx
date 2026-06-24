"use client";

import type { ReactNode } from "react";
import { useState } from "react";

const mission = {
  title: "Mission 1.1: Report To The Chief Engineer",
  brief:
    "A new engine cadet must introduce themself clearly before joining the engine room familiarization watch.",
  scenario:
    "You arrive at the engine control room for your first supervised watch. The chief engineer asks for your name, role, academy program, and assigned duty before allowing you to enter the work area.",
  vocabulary: ["chief engineer", "engine cadet", "watch", "duty", "assigned", "ready"],
  writingExercise: "Write the self-report you would give before entering the engine room.",
  practicalActivity:
    "Choose the complete report from three options, then improve it with your name, role, duty, and readiness statement.",
  assessment:
    "Successful performance identifies the cadet, states the assigned duty, uses a respectful tone, and gives enough information for the chief engineer to approve the watch assignment."
};

export default function MissionOneOnePage() {
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);

  const startMission = () => {
    setStarted(true);
    setCompleted(false);
  };

  const completeMission = () => {
    if (!started) return;
    setCompleted(true);
  };

  return (
    <main className="academyShell">
      <section className="missionShell missionPlayerMvp" aria-labelledby="mission-player-title">
        <div className="missionPlayerHeader">
          <div>
            <p className="eyebrow">Maritime English I</p>
            <h1 id="mission-player-title">{mission.title}</h1>
          </div>
          <div className={`missionBadge ${completed ? "passed" : ""}`} aria-live="polite">
            <span>Mission Status</span>
            <strong>{completed ? "Mission Complete" : started ? "Mission Started" : "Ready"}</strong>
          </div>
        </div>

        <div className="missionPlayerActions" aria-label="Mission controls">
          <button className="primaryAction" onClick={startMission} type="button">
            Start Mission
          </button>
          <button className="secondaryAction" disabled={!started || completed} onClick={completeMission} type="button">
            Complete Mission
          </button>
        </div>

        {completed ? (
          <section className="missionCompletePanel" aria-live="polite">
            <h2>Mission Complete</h2>
            <p>+10 XP Awarded</p>
          </section>
        ) : null}

        <div className="missionPlayerGrid">
          <MissionSection title="Mission Brief">{mission.brief}</MissionSection>
          <MissionSection title="Operational Scenario">{mission.scenario}</MissionSection>

          <section className="missionPlayerPanel">
            <h2>Key Vocabulary</h2>
            <ul className="missionVocabularyList">
              {mission.vocabulary.map((term) => (
                <li key={term}>{term}</li>
              ))}
            </ul>
          </section>

          <MissionSection title="Writing Exercise">{mission.writingExercise}</MissionSection>
          <MissionSection title="Practical Activity">{mission.practicalActivity}</MissionSection>
          <MissionSection title="Assessment">{mission.assessment}</MissionSection>
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



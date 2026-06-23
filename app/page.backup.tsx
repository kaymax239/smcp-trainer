"use client";

import { useState } from "react";

type Academy = "deck" | "engine" | "ocean";

const academies: {
  id: Academy;
  title: string;
  deck: string;
  description: string;
}[] = [
  {
    id: "deck",
    title: "Deck Academy",
    deck: "Bridge Operations",
    description: "Navigation watch, pilotage coordination, bridge resource management, and ship handling procedure simulation."
  },
  {
    id: "engine",
    title: "Engine Academy",
    deck: "Machinery Operations",
    description: "Engineering watchkeeping, machinery recognition, alarm response, and technical reporting under STCW standards."
  },
  {
    id: "ocean",
    title: "Ocean Intelligence Center",
    deck: "Operational Awareness",
    description: "Weather, traffic, routing, voyage risk, and decision support for maritime training scenarios."
  }
];

const briefing = [
  ["Vessel", "MV Kaymax Explorer"],
  ["Location", "Engine Control Room"],
  ["Reporting Officer", "Second Engineer"],
  ["Assignment", "Complete Engineering Familiarization Round"]
];

const tasks = [
  "Identify Main Engine",
  "Identify Diesel Generator No.1",
  "Report Jacket Water Temperature",
  "Report Lubricating Oil Pressure",
  "Acknowledge High Temperature Alarm",
  "Notify Duty Engineer"
];

const assessmentAreas = [
  "Engineering Watchkeeping",
  "Machinery Recognition",
  "Alarm Response",
  "Technical Reporting",
  "SMCP Communication"
];

export default function Home() {
  const [selectedAcademy, setSelectedAcademy] = useState<Academy>("engine");

  return (
    <main className="academyShell">
      <section className="heroSection" aria-labelledby="hero-title">
        <nav className="topBar" aria-label="Training simulator header">
          <div className="brandMark">SMCP</div>
          <div>
            <p>Maritime Academy Simulator</p>
            <strong>Training Console</strong>
          </div>
        </nav>

        <div className="heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">SMCP Trainer</p>
            <h1 id="hero-title">SMCP Trainer</h1>
            <p className="subtitle">Professional Maritime Training Simulator</p>
            <p className="heroText">
              A mission-based academy environment for bridge, engine-room, and maritime operations training.
              Select an academy to enter the first operational simulator demo.
            </p>
          </div>

          <div className="commandPanel" aria-label="Simulator status">
            <div className="panelHeader">
              <span>Live Training Environment</span>
              <strong>Ready</strong>
            </div>
            <div className="scopeGrid">
              <div>
                <span>Standard</span>
                <strong>STCW</strong>
              </div>
              <div>
                <span>Mode</span>
                <strong>Mission</strong>
              </div>
              <div>
                <span>Vessel</span>
                <strong>MV Kaymax Explorer</strong>
              </div>
              <div>
                <span>Station</span>
                <strong>Engine Control Room</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="academySection" aria-label="Academy selection">
        <div className="sectionHeader">
          <p className="eyebrow">Academies</p>
          <h2>Select Training Division</h2>
        </div>

        <div className="academyGrid">
          {academies.map((academy) => (
            <button
              className={`academyCard ${selectedAcademy === academy.id ? "selected" : ""}`}
              key={academy.id}
              onClick={() => setSelectedAcademy(academy.id)}
              type="button"
            >
              <span>{academy.deck}</span>
              <strong>{academy.title}</strong>
              <small>{academy.description}</small>
            </button>
          ))}
        </div>
      </section>

      {selectedAcademy === "engine" ? <EngineMission /> : <AcademyPlaceholder academy={selectedAcademy} />}
    </main>
  );
}

function AcademyPlaceholder({ academy }: { academy: Exclude<Academy, "engine"> }) {
  const title = academy === "deck" ? "Deck Academy" : "Ocean Intelligence Center";
  const focus = academy === "deck" ? "Bridge simulator modules are queued for the next demo build." : "Operations intelligence modules are queued for the next demo build.";

  return (
    <section className="missionShell placeholderPanel" aria-label={`${title} preview`}>
      <p className="eyebrow">Selected Academy</p>
      <h2>{title}</h2>
      <p>{focus}</p>
    </section>
  );
}

function EngineMission() {
  return (
    <section className="missionShell" aria-labelledby="engine-mission-title">
      <div className="missionLead">
        <div>
          <p className="eyebrow">STCW A-III/1</p>
          <h2 id="engine-mission-title">Maintain a Safe Engineering Watch</h2>
        </div>
        <div className="missionBadge">
          <span>Mission 001</span>
          <strong>INITIAL ENGINEERING WATCH</strong>
        </div>
      </div>

      <div className="missionLayout">
        <article className="briefingPanel">
          <div className="panelTitle">
            <span>Briefing</span>
            <strong>Engineering Familiarization Round</strong>
          </div>
          <div className="briefingList">
            {briefing.map(([label, value]) => (
              <div className="briefingRow" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </article>

        <div className="engineVisual" aria-label="Engine control room simulator graphic">
          <div className="consoleTop">
            <span />
            <span />
            <span />
          </div>
          <div className="gaugeCluster">
            <div className="gauge high"><span>JW</span><strong>88 C</strong></div>
            <div className="gauge"><span>LO</span><strong>4.6 bar</strong></div>
            <div className="gauge"><span>RPM</span><strong>720</strong></div>
          </div>
          <div className="alarmStrip">High Temperature Alarm</div>
        </div>

        <article className="checklistPanel">
          <h3>Tasks</h3>
          <ul>
            {tasks.map((task) => <li key={task}>{task}</li>)}
          </ul>
        </article>

        <article className="assessmentPanel">
          <h3>Assessment Areas</h3>
          <div className="assessmentGrid">
            {assessmentAreas.map((area) => <span key={area}>{area}</span>)}
          </div>
        </article>
      </div>
    </section>
  );
}


"use client";

import { useState } from "react";

type Academy = "deck" | "engine" | "ocean";
type TaskStep = 0 | 1 | 2 | 3 | 4;

const defaultAcademy: Academy = "engine";

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

const taskSteps = ["Briefing", "Watch Round", "Situation Report", "Confirm", "Assessment"];

const briefing = [
  ["Vessel", "MV Kaymax Explorer"],
  ["Location", "Engine Control Room / Machinery Spaces"],
  ["Role", "Engine Cadet - Watch Assistant"],
  ["Reporting Officer", "Second Engineer"],
  ["Condition", "Coastal transit, machinery at steady sea speed"],
  ["Risk", "Main engine jacket water temperature trending high"]
];

const machineryChecks = [
  {
    id: "jacket-water",
    name: "Main Engine Jacket Water Temperature",
    value: "88°C",
    status: "HIGH TREND",
    abnormal: true
  },
  {
    id: "lubricating-oil",
    name: "Lubricating Oil Pressure",
    value: "4.6 bar",
    status: "NORMAL",
    abnormal: false
  },
  {
    id: "diesel-generator",
    name: "Diesel Generator No. 1 Load",
    value: "62%",
    status: "NORMAL",
    abnormal: false
  },
  {
    id: "bilge-level",
    name: "Bilge Level",
    value: "LOW",
    status: "NORMAL",
    abnormal: false
  }
];

const situationReports = [
  {
    id: "complete-report",
    text: "Second Engineer, engine cadet reporting. Main engine jacket water temperature is 88 degrees Celsius and rising. Lubricating oil pressure is 4.6 bar. Diesel generator load is 62 percent. Bilge level is normal.",
    correct: true
  },
  {
    id: "hot-engine",
    text: "The engine is hot.",
    correct: false
  },
  {
    id: "everything-okay",
    text: "Everything is okay.",
    correct: false
  },
  {
    id: "saw-temperature",
    text: "I saw temperature.",
    correct: false
  }
];

const bridgeResponses = [
  {
    id: "bridge-confirmation",
    text: "Bridge, Engine Control Room. Main engine is available at present speed. Jacket water temperature is high and under monitoring. I will keep you informed.",
    correct: true
  },
  {
    id: "engine-hot",
    text: "Bridge, the engine is hot now.",
    correct: false
  },
  {
    id: "not-sure",
    text: "I am not sure. Maybe it is okay.",
    correct: false
  },
  {
    id: "available-only",
    text: "Main engine available.",
    correct: false
  }
];

const assessmentItems = [
  ["STCW Competency", "A-III/1 Maintain a Safe Engineering Watch"],
  ["SMCP Function", "Onboard communication / Situation reporting / Bridge-engine communication"],
  ["Real Shipboard Task", "Engine-room watch round and machinery status report"],
  ["Result", "Mission Complete"],
  ["XP Awarded", "150 XP"],
  ["Rank Progress", "Cadet Recruit → Junior Engineer Cadet progress"]
];

export default function Home() {
  const [selectedAcademy, setSelectedAcademy] = useState<Academy>(defaultAcademy);
  const [selectionCount, setSelectionCount] = useState(0);

  const selectedAcademyDetails = academies.find((academy) => academy.id === selectedAcademy) ?? academies[1];

  const handleAcademySelect = (academy: Academy) => {
    setSelectedAcademy(academy);
    setSelectionCount((currentCount) => currentCount + 1);
  };

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
          {academies.map((academy) => {
            const isSelected = selectedAcademy === academy.id;

            return (
              <button
                aria-pressed={isSelected}
                className={`academyCard ${isSelected ? "selected" : ""}`}
                key={academy.id}
                onClick={() => handleAcademySelect(academy.id)}
                type="button"
              >
                <span>{academy.deck}</span>
                <strong>{academy.title}</strong>
                <small>{academy.description}</small>
              </button>
            );
          })}
        </div>

        <div className="missionBadge academyStatus" aria-live="polite" key={`${selectedAcademy}-${selectionCount}`}>
          <span>Selected Academy</span>
          <strong>{selectedAcademyDetails.title} Active</strong>
        </div>

        {selectedAcademy === "engine" ? <EngineMission /> : <AcademyPlaceholder academy={selectedAcademy} />}
      </section>
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
  const [step, setStep] = useState<TaskStep>(0);
  const [machinerySelection, setMachinerySelection] = useState("");
  const [reportSelection, setReportSelection] = useState("");
  const [bridgeSelection, setBridgeSelection] = useState("");
  const [feedback, setFeedback] = useState("Awaiting cadet action.");

  const selectedMachinery = machineryChecks.find((item) => item.id === machinerySelection);
  const selectedReport = situationReports.find((item) => item.id === reportSelection);
  const selectedBridgeResponse = bridgeResponses.find((item) => item.id === bridgeSelection);

  const advanceStep = (nextStep: TaskStep, nextFeedback: string) => {
    setStep(nextStep);
    setFeedback(nextFeedback);
  };

  const resetMission = () => {
    setStep(0);
    setMachinerySelection("");
    setReportSelection("");
    setBridgeSelection("");
    setFeedback("Awaiting cadet action.");
  };

  return (
    <section className="missionShell taskShell" aria-labelledby="engine-mission-title">
      <div className="missionLead">
        <div>
          <p className="eyebrow">STCW A-III/1</p>
          <h2 id="engine-mission-title">Mission 001: Initial Engineering Watch</h2>
        </div>
        <div className="missionBadge">
          <span>Task 001</span>
          <strong>ENGINE CADET WATCH ROUND</strong>
        </div>
      </div>

      <div className="taskProgress" aria-label="Mission progress">
        {taskSteps.map((label, index) => (
          <span className={index <= step ? "active" : ""} key={label}>{label}</span>
        ))}
      </div>

      <div className="taskConsole">
        <aside className="briefingPanel taskSidePanel" aria-label="Mission details">
          <div className="panelTitle">
            <span>Mission Data</span>
            <strong>Engine Academy</strong>
          </div>
          <div className="briefingList">
            {briefing.map(([label, value]) => (
              <div className="briefingRow" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </aside>

        <article className="taskMainPanel" aria-live="polite">
          {step === 0 ? (
            <BriefingStep onConfirm={() => advanceStep(1, "Instruction confirmed. Begin Watch Round and identify the abnormal machinery condition.")} />
          ) : null}

          {step === 1 ? (
            <MachineryCheckStep
              selectedId={machinerySelection}
              selectedMachinery={selectedMachinery}
              onSelect={(id) => {
                const item = machineryChecks.find((check) => check.id === id);
                setMachinerySelection(id);
                setFeedback(item?.abnormal ? "Abnormal trend identified. Report jacket water temperature immediately." : "Parameter checked. Continue scanning for the abnormal trend requiring report.");
              }}
              onContinue={() => advanceStep(2, "Prepare Situation Report for the Second Engineer.")}
            />
          ) : null}

          {step === 2 ? (
            <SituationReportStep
              selectedId={reportSelection}
              selectedReport={selectedReport}
              onSelect={(id) => {
                const report = situationReports.find((option) => option.id === id);
                setReportSelection(id);
                setFeedback(report?.correct ? "Situation Report accepted. Maintain clear reporting chain." : "Report not accepted. Select a complete professional machinery status report.");
              }}
              onContinue={() => advanceStep(3, "Bridge is requesting confirmation of main engine status.")}
            />
          ) : null}

          {step === 3 ? (
            <BridgeCommunicationStep
              selectedId={bridgeSelection}
              selectedResponse={selectedBridgeResponse}
              onSelect={(id) => {
                const response = bridgeResponses.find((option) => option.id === id);
                setBridgeSelection(id);
                setFeedback(response?.correct ? "Bridge-engine communication confirmed. Mission assessment ready." : "Confirmation not accepted. Include engine availability, present speed, monitoring status, and follow-up.");
              }}
              onContinue={() => advanceStep(4, "Mission Complete. Assessment recorded.")}
            />
          ) : null}

          {step === 4 ? <AssessmentStep onReset={resetMission} /> : null}
        </article>
      </div>

      <div className="taskFeedback" role="status">
        <span>Watch Console</span>
        <strong>{feedback}</strong>
      </div>
    </section>
  );
}

function BriefingStep({ onConfirm }: { onConfirm: () => void }) {
  return (
    <div className="taskStepPanel">
      <p className="eyebrow">Briefing</p>
      <h3>Second Engineer Order</h3>
      <blockquote>
        Cadet, complete your initial engine-room round. Check main engine jacket water temperature, lubricating oil pressure, diesel generator load, and bilge level. Report any abnormal condition immediately.
      </blockquote>
      <button className="primaryAction" onClick={onConfirm} type="button">
        Instruction received. I will complete the engine-room round and report any abnormal condition.
      </button>
    </div>
  );
}

function MachineryCheckStep({
  selectedId,
  selectedMachinery,
  onSelect,
  onContinue
}: {
  selectedId: string;
  selectedMachinery?: (typeof machineryChecks)[number];
  onSelect: (id: string) => void;
  onContinue: () => void;
}) {
  return (
    <div className="taskStepPanel">
      <p className="eyebrow">Watch Round</p>
      <h3>Machinery Check</h3>
      <p className="stepInstruction">Identify the parameter requiring immediate report.</p>
      <div className="parameterGrid">
        {machineryChecks.map((item) => {
          const isSelected = selectedId === item.id;
          return (
            <button
              className={`parameterButton ${isSelected ? "selected" : ""} ${item.abnormal ? "warning" : ""}`}
              key={item.id}
              onClick={() => onSelect(item.id)}
              type="button"
            >
              <span>{item.name}</span>
              <strong>{item.value}</strong>
              <small>{item.status}</small>
            </button>
          );
        })}
      </div>
      <button className="primaryAction" disabled={!selectedMachinery?.abnormal} onClick={onContinue} type="button">
        Report Abnormal Condition
      </button>
    </div>
  );
}

function SituationReportStep({
  selectedId,
  selectedReport,
  onSelect,
  onContinue
}: {
  selectedId: string;
  selectedReport?: (typeof situationReports)[number];
  onSelect: (id: string) => void;
  onContinue: () => void;
}) {
  return (
    <div className="taskStepPanel">
      <p className="eyebrow">Situation Report</p>
      <h3>Report to Second Engineer</h3>
      <p className="stepInstruction">Select the professional report that gives status, values, and the abnormal trend.</p>
      <div className="responseStack">
        {situationReports.map((option) => (
          <button
            className={`responseButton ${selectedId === option.id ? "selected" : ""}`}
            key={option.id}
            onClick={() => onSelect(option.id)}
            type="button"
          >
            {option.text}
          </button>
        ))}
      </div>
      <button className="primaryAction" disabled={!selectedReport?.correct} onClick={onContinue} type="button">
        Confirm Situation Report
      </button>
    </div>
  );
}

function BridgeCommunicationStep({
  selectedId,
  selectedResponse,
  onSelect,
  onContinue
}: {
  selectedId: string;
  selectedResponse?: (typeof bridgeResponses)[number];
  onSelect: (id: string) => void;
  onContinue: () => void;
}) {
  return (
    <div className="taskStepPanel">
      <p className="eyebrow">Bridge-Engine Communication</p>
      <h3>Confirm Main Engine Status</h3>
      <div className="bridgeCall">
        <span>Bridge asks</span>
        <strong>Engine Control Room, Bridge. Confirm main engine status.</strong>
      </div>
      <div className="responseStack">
        {bridgeResponses.map((option) => (
          <button
            className={`responseButton ${selectedId === option.id ? "selected" : ""}`}
            key={option.id}
            onClick={() => onSelect(option.id)}
            type="button"
          >
            {option.text}
          </button>
        ))}
      </div>
      <button className="primaryAction" disabled={!selectedResponse?.correct} onClick={onContinue} type="button">
        Confirm to Bridge
      </button>
    </div>
  );
}

function AssessmentStep({ onReset }: { onReset: () => void }) {
  return (
    <div className="taskStepPanel">
      <p className="eyebrow">Assessment</p>
      <h3>Mission Assessment</h3>
      <div className="assessmentTable">
        {assessmentItems.map(([label, value]) => (
          <div className="assessmentRow" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
      <button className="primaryAction" onClick={onReset} type="button">
        Repeat Watch Round
      </button>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";

type Academy = "deck" | "engine" | "ocean";
type SystemId = "main-engine" | "auxiliary-engine" | "fuel-separator" | "purifier" | "fresh-water-generator" | "bilge-system";

const defaultAcademy: Academy = "engine";
const passingScore = 8;
const missionXp = 100;

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

const missionSystems: {
  id: SystemId;
  label: string;
  station: string;
  cue: string;
  description: string;
}[] = [
  {
    id: "main-engine",
    label: "Main Engine",
    station: "Centerline Deck 1",
    cue: "Largest propulsion unit coupled to the shaft line.",
    description: "Primary propulsion machinery that drives the propeller shaft."
  },
  {
    id: "auxiliary-engine",
    label: "Auxiliary Engine",
    station: "Generator Flat",
    cue: "Diesel generator set supplying electrical power.",
    description: "Engine used to run an alternator for ship service electrical load."
  },
  {
    id: "fuel-separator",
    label: "Fuel Separator",
    station: "Fuel Treatment Skid",
    cue: "Centrifugal unit cleaning fuel before service tanks.",
    description: "Removes water and solids from fuel oil before it reaches service use."
  },
  {
    id: "purifier",
    label: "Purifier",
    station: "Lube Oil Treatment",
    cue: "Centrifugal cleaner for lubricating oil service.",
    description: "Cleans oil by separating contaminants and water from the oil system."
  },
  {
    id: "fresh-water-generator",
    label: "Fresh Water Generator",
    station: "Evaporator Bay",
    cue: "Produces fresh water from seawater using heat and vacuum.",
    description: "Shipboard plant that converts seawater into usable fresh water."
  },
  {
    id: "bilge-system",
    label: "Bilge System",
    station: "Bilge Well / Pump Bay",
    cue: "Collects and transfers oily water from low engine-room spaces.",
    description: "Piping, wells, alarms, and pumps used to manage bilge water."
  }
];

const briefing = [
  ["Rank", "Cadet Recruit"],
  ["Mission", "Engine Room Familiarization"],
  ["Vessel", "MV Kaymax Explorer"],
  ["Location", "Engine Room - Lower Platform"],
  ["Standard", "STCW A-III/1 Foundation"],
  ["Pass Mark", "80 percent / 100 XP"]
];

const questions: {
  id: number;
  prompt: string;
  answer: SystemId;
}[] = [
  {
    id: 1,
    prompt: "Identify the largest propulsion unit connected to the shaft line.",
    answer: "main-engine"
  },
  {
    id: 2,
    prompt: "Which system supplies ship service electrical power through a diesel generator set?",
    answer: "auxiliary-engine"
  },
  {
    id: 3,
    prompt: "Which unit cleans fuel oil before it is sent to service use?",
    answer: "fuel-separator"
  },
  {
    id: 4,
    prompt: "Which machine removes contaminants from lubricating oil?",
    answer: "purifier"
  },
  {
    id: 5,
    prompt: "Which plant produces usable fresh water from seawater?",
    answer: "fresh-water-generator"
  },
  {
    id: 6,
    prompt: "Which system collects liquid from the lowest engine-room spaces?",
    answer: "bilge-system"
  },
  {
    id: 7,
    prompt: "The Second Engineer points to the fuel treatment skid. What should the cadet identify?",
    answer: "fuel-separator"
  },
  {
    id: 8,
    prompt: "The diagram shows a pump bay connected to wells and alarms. Which system is this?",
    answer: "bilge-system"
  },
  {
    id: 9,
    prompt: "Which item should a cadet associate with evaporation, vacuum, and seawater conversion?",
    answer: "fresh-water-generator"
  },
  {
    id: 10,
    prompt: "Which item is the primary propulsion machinery of the vessel?",
    answer: "main-engine"
  }
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
                <strong>Engine Room</strong>
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

        {selectedAcademy === "engine" ? <EngineRoomFamiliarizationMission /> : <AcademyPlaceholder academy={selectedAcademy} />}
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

function EngineRoomFamiliarizationMission() {
  const [briefingAccepted, setBriefingAccepted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, SystemId>>({});
  const [submitted, setSubmitted] = useState(false);

  const selectedAnswer = answers[currentQuestion];
  const score = useMemo(
    () => questions.reduce((total, question, index) => total + (answers[index] === question.answer ? 1 : 0), 0),
    [answers]
  );
  const isComplete = Object.keys(answers).length === questions.length;
  const passed = submitted && score >= passingScore;
  const earnedXp = passed ? missionXp : 0;
  const activeQuestion = questions[currentQuestion];

  const selectAnswer = (systemId: SystemId) => {
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [currentQuestion]: systemId
    }));
  };

  const resetMission = () => {
    setBriefingAccepted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <section className="missionShell simulatorMission" aria-labelledby="engine-room-mission-title">
      <div className="missionLead">
        <div>
          <p className="eyebrow">Cadet Recruit Mission 001</p>
          <h2 id="engine-room-mission-title">Engine Room Familiarization</h2>
        </div>
        <div className={`missionBadge ${passed ? "passed" : ""}`}>
          <span>XP Reward</span>
          <strong>{earnedXp} / {missionXp} XP</strong>
        </div>
      </div>

      <div className="missionLayout">
        <aside className="briefingPanel" aria-label="Professional mission briefing">
          <div className="panelTitle">
            <span>Mission Briefing</span>
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
          <p className="briefingText">
            Inspect the engine-room diagram and identify the six foundation systems used in daily engineering rounds.
            Complete all 10 prompts. A score of 80 percent or higher passes the mission.
          </p>
          <button className="primaryAction" onClick={() => setBriefingAccepted(true)} type="button">
            Start Familiarization
          </button>
        </aside>

        <EngineRoomDiagram selectedAnswer={selectedAnswer} />

        <article className="quizPanel" aria-live="polite">
          {!briefingAccepted ? (
            <div className="standbyPanel">
              <p className="eyebrow">Awaiting Orders</p>
              <h3>Read the briefing before entering the machinery space.</h3>
              <p>The diagram is available now so the cadet can review stations before the assessment begins.</p>
            </div>
          ) : null}

          {briefingAccepted && !submitted ? (
            <div className="questionPanel">
              <div className="questionHeader">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <strong>{score} correct so far</strong>
              </div>
              <h3>{activeQuestion.prompt}</h3>
              <div className="answerGrid">
                {missionSystems.map((system) => (
                  <button
                    aria-pressed={selectedAnswer === system.id}
                    className={`answerButton ${selectedAnswer === system.id ? "selected" : ""}`}
                    key={system.id}
                    onClick={() => selectAnswer(system.id)}
                    type="button"
                  >
                    <span>{system.station}</span>
                    <strong>{system.label}</strong>
                    <small>{system.cue}</small>
                  </button>
                ))}
              </div>
              <div className="quizActions">
                <button
                  className="secondaryAction"
                  disabled={currentQuestion === 0}
                  onClick={() => setCurrentQuestion((question) => Math.max(0, question - 1))}
                  type="button"
                >
                  Previous
                </button>
                {currentQuestion < questions.length - 1 ? (
                  <button
                    className="primaryAction"
                    disabled={!selectedAnswer}
                    onClick={() => setCurrentQuestion((question) => question + 1)}
                    type="button"
                  >
                    Next Question
                  </button>
                ) : (
                  <button className="primaryAction" disabled={!isComplete} onClick={() => setSubmitted(true)} type="button">
                    Submit Mission
                  </button>
                )}
              </div>
            </div>
          ) : null}

          {submitted ? (
            <AssessmentPanel earnedXp={earnedXp} onReset={resetMission} passed={passed} score={score} />
          ) : null}
        </article>
      </div>
    </section>
  );
}

function EngineRoomDiagram({ selectedAnswer }: { selectedAnswer?: SystemId }) {
  return (
    <section className="engineRoomDiagram" aria-label="Simple engine room diagram">
      <div className="diagramHeader">
        <span>Engine Room Diagram</span>
        <strong>Lower Platform</strong>
      </div>
      <div className="diagramGrid">
        {missionSystems.map((system) => (
          <div className={`diagramZone ${selectedAnswer === system.id ? "selected" : ""}`} key={system.id}>
            <span>{system.station}</span>
            <strong>{system.label}</strong>
            <small>{system.description}</small>
          </div>
        ))}
      </div>
      <div className="shaftLine">
        <span>Propeller shaft line</span>
      </div>
    </section>
  );
}

function AssessmentPanel({
  earnedXp,
  onReset,
  passed,
  score
}: {
  earnedXp: number;
  onReset: () => void;
  passed: boolean;
  score: number;
}) {
  return (
    <div className="assessmentPanel">
      <p className="eyebrow">Assessment</p>
      <h3>{passed ? "Mission Passed" : "Mission Not Passed"}</h3>
      <div className="assessmentGrid">
        <span>Score: {score} / {questions.length}</span>
        <span>Pass Mark: {passingScore} / {questions.length}</span>
        <span>XP Awarded: {earnedXp} XP</span>
        <span>Rank: Cadet Recruit</span>
      </div>
      <p className="assessmentNote">
        {passed
          ? "Cadet has identified the core machinery spaces and may continue to the next Engine Academy task."
          : "Review the diagram and repeat the familiarization round until all core systems are recognized confidently."}
      </p>
      <button className="primaryAction" onClick={onReset} type="button">
        Repeat Mission
      </button>
    </div>
  );
}

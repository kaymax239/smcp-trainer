"use client";

import { useMemo, useState } from "react";
import { deckLevelOneMissions, type DeckLevelOneMission } from "@/data/deck-level-1-missions";

type Academy = "deck" | "engine" | "ocean";
type ActiveView = "home" | "engineMission" | "deckMission";
type SystemId = "main-engine" | "auxiliary-engine" | "fuel-separator" | "purifier" | "fresh-water-generator" | "bilge-system";

const defaultAcademy: Academy = "engine";
const passingScore = 8;
const missionXp = 100;
const cadetXp = 100;
const cadetLevel = "Cadet Recruit";

const academies: {
  id: Academy;
  title: string;
  deck: string;
  description: string;
  metric: string;
}[] = [
  {
    id: "deck",
    title: "Deck Academy",
    deck: "Bridge Operations",
    description: "Bridge watchkeeping, navigation, VHF reporting, COLREGS decisions, safety and cargo communication.",
    metric: "3 Level 1 missions"
  },
  {
    id: "engine",
    title: "Engine Academy",
    deck: "Machinery Operations",
    description: "Engine-room familiarization, machinery watch support, bridge-engine orders, alarms and emergency reports.",
    metric: "First mission playable"
  },
  {
    id: "ocean",
    title: "Ocean Intelligence Center",
    deck: "Readiness Intelligence",
    description: "Competency maps, mission intelligence, weather board, incident archive and final checkride readiness.",
    metric: "Prototype workspace"
  }
];

const deckPath = [
  "Officer Cadet Foundation",
  "Bridge Watchkeeping",
  "Navigation Officer",
  "Chief Officer Preparation",
  "Master Mariner Leadership"
];

const enginePath = [
  "Engine Room Orientation",
  "Engine Watch Support",
  "Bridge-Engine Communication",
  "Engine Room Emergency Response",
  "Pollution & Security",
  "Final Checkride"
];

const intelligenceModules = [
  {
    title: "STCW Competency Map",
    detail: "Maps missions to deck, engine, safety, emergency, pollution and watchkeeping competencies."
  },
  {
    title: "SMCP Function Map",
    detail: "Organizes communication by operational use: reporting, confirmation, distress, VTS and bridge-engine."
  },
  {
    title: "Mission Intelligence",
    detail: "Briefs the cadet on vessel, department, location, risk factors and required performance standard."
  },
  {
    title: "Weather Board",
    detail: "Supports visibility, wind, sea-state and heavy-weather decision scenarios."
  },
  {
    title: "Incident Archive",
    detail: "Stores fire, pollution, security, injury and abnormal machinery reports for debrief and remediation."
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
  ["Rank", cadetLevel],
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
  { id: 1, prompt: "Identify the largest propulsion unit connected to the shaft line.", answer: "main-engine" },
  { id: 2, prompt: "Which system supplies ship service electrical power through a diesel generator set?", answer: "auxiliary-engine" },
  { id: 3, prompt: "Which unit cleans fuel oil before it is sent to service use?", answer: "fuel-separator" },
  { id: 4, prompt: "Which machine removes contaminants from lubricating oil?", answer: "purifier" },
  { id: 5, prompt: "Which plant produces usable fresh water from seawater?", answer: "fresh-water-generator" },
  { id: 6, prompt: "Which system collects liquid from the lowest engine-room spaces?", answer: "bilge-system" },
  { id: 7, prompt: "The Second Engineer points to the fuel treatment skid. What should the cadet identify?", answer: "fuel-separator" },
  { id: 8, prompt: "The diagram shows a pump bay connected to wells and alarms. Which system is this?", answer: "bilge-system" },
  { id: 9, prompt: "Which item should a cadet associate with evaporation, vacuum, and seawater conversion?", answer: "fresh-water-generator" },
  { id: 10, prompt: "Which item is the primary propulsion machinery of the vessel?", answer: "main-engine" }
];

export default function Home() {
  const [selectedAcademy, setSelectedAcademy] = useState<Academy>(defaultAcademy);
  const [activeView, setActiveView] = useState<ActiveView>("home");
  const [selectedDeckMission, setSelectedDeckMission] = useState<DeckLevelOneMission>(deckLevelOneMissions[0]);
  const selectedAcademyDetails = academies.find((academy) => academy.id === selectedAcademy) ?? academies[1];

  const openDeckMission = (mission: DeckLevelOneMission) => {
    setSelectedDeckMission(mission);
    setSelectedAcademy("deck");
    setActiveView("deckMission");
  };

  const backToDeckAcademy = () => {
    setSelectedAcademy("deck");
    setActiveView("home");
  };

  if (activeView === "engineMission") {
    return (
      <main className="academyShell">
        <section className="academySection" aria-label="Engine Room Familiarization mission">
          <button className="secondaryAction" onClick={() => setActiveView("home")} type="button">
            Back to Academy Home
          </button>
          <EngineRoomFamiliarizationMission />
        </section>
      </main>
    );
  }

  if (activeView === "deckMission") {
    return (
      <main className="academyShell">
        <section className="academySection" aria-label={`${selectedDeckMission.title} mission`}>
          <DeckMissionPlayer mission={selectedDeckMission} onBack={backToDeckAcademy} />
        </section>
      </main>
    );
  }

  return (
    <main className="academyShell">
      <section className="heroSection" aria-labelledby="hero-title">
        <nav className="topBar" aria-label="Training simulator header">
          <div className="brandMark">SMCP</div>
          <div>
            <p>Institutional Demo</p>
            <strong>Digital Maritime Academy MVP</strong>
          </div>
        </nav>

        <div className="heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">STCW + IMO SMCP Readiness Platform</p>
            <h1 id="hero-title">SMCP Trainer</h1>
            <p className="subtitle">Mission-based maritime academy simulator</p>
            <p className="heroText">
              A dark maritime training console where cadets progress through Deck, Engine and Ocean Intelligence workflows by completing operational missions tied to STCW competencies and IMO SMCP functions.
            </p>
            <button className="primaryAction" onClick={() => setActiveView("engineMission")} type="button">
              Start Engine Room Familiarization
            </button>
          </div>

          <CadetStatus />
        </div>
      </section>

      <section className="academySection" aria-label="Institutional academy overview">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">Academy System</p>
            <h2>Three training environments</h2>
          </div>
          <p className="sectionNote">Built for a 3-minute executive walkthrough: vision, pathways, intelligence layer and one playable mission.</p>
        </div>

        <div className="academyGrid">
          {academies.map((academy) => {
            const isSelected = selectedAcademy === academy.id;

            return (
              <button
                aria-pressed={isSelected}
                className={`academyCard ${isSelected ? "selected" : ""}`}
                key={academy.id}
                onClick={() => setSelectedAcademy(academy.id)}
                type="button"
              >
                <span>{academy.deck}</span>
                <strong>{academy.title}</strong>
                <small>{academy.description}</small>
                <em>{academy.metric}</em>
              </button>
            );
          })}
        </div>

        <CareerPathDashboard />

        <div className="missionBadge academyStatus" aria-live="polite">
          <span>Active View</span>
          <strong>{selectedAcademyDetails.title}</strong>
        </div>

        {selectedAcademy === "engine" ? <EngineRoomFamiliarizationMission /> : null}
        {selectedAcademy === "ocean" ? <OceanIntelligenceCenter /> : null}
        {selectedAcademy === "deck" ? <DeckInstitutionalPreview onStartMission={openDeckMission} /> : null}
      </section>
    </main>
  );
}

function CadetStatus() {
  return (
    <aside className="cadetPanel" aria-label="Cadet progress summary">
      <div className="panelHeader">
        <span>Cadet Record</span>
        <strong>Active</strong>
      </div>
      <div className="cadetRank">
        <span>Current Level</span>
        <strong>{cadetLevel}</strong>
      </div>
      <div className="xpMeter" aria-label="Cadet XP progress">
        <div style={{ width: `${Math.min(100, cadetXp / 2.5)}%` }} />
      </div>
      <div className="scopeGrid">
        <div>
          <span>XP</span>
          <strong>{cadetXp} / 250</strong>
        </div>
        <div>
          <span>Next Gate</span>
          <strong>Junior Cadet</strong>
        </div>
        <div>
          <span>Standard</span>
          <strong>STCW</strong>
        </div>
        <div>
          <span>Language</span>
          <strong>IMO SMCP</strong>
        </div>
      </div>
    </aside>
  );
}

function CareerPathDashboard() {
  return (
    <section className="careerDashboard" aria-labelledby="career-title">
      <div className="dashboardHeader">
        <div>
          <p className="eyebrow">Career Path Dashboard</p>
          <h2 id="career-title">Cadet progression map</h2>
        </div>
        <div className="dashboardSeal">MVP</div>
      </div>
      <div className="pathGrid">
        <PathColumn title="Deck Academy" items={deckPath} activeIndex={0} />
        <PathColumn title="Engine Academy" items={enginePath} activeIndex={0} />
      </div>
    </section>
  );
}

function PathColumn({ activeIndex, items, title }: { activeIndex: number; items: string[]; title: string }) {
  return (
    <div className="pathColumn">
      <h3>{title}</h3>
      <ol>
        {items.map((item, index) => (
          <li className={index === activeIndex ? "active" : ""} key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item}</strong>
          </li>
        ))}
      </ol>
    </div>
  );
}

function DeckInstitutionalPreview({ onStartMission }: { onStartMission: (mission: DeckLevelOneMission) => void }) {
  return (
    <section className="missionShell prototypePanel" aria-label="Deck Academy Level 1 missions">
      <div className="missionLead">
        <div>
          <p className="eyebrow">Deck Academy Level 1</p>
          <h2>Officer Cadet Foundation</h2>
        </div>
        <div className="missionBadge">
          <span>Status</span>
          <strong>3 playable missions</strong>
        </div>
      </div>
      <div className="prototypeGrid">
        {deckLevelOneMissions.map((mission) => (
          <button className="prototypeTile missionCardButton" key={mission.id} onClick={() => onStartMission(mission)} type="button">
            <span>{mission.code}</span>
            <strong>{mission.title}</strong>
            <p>{mission.missionBriefing}</p>
            <em>{mission.xp} XP</em>
          </button>
        ))}
      </div>
    </section>
  );
}

function DeckMissionPlayer({ mission, onBack }: { mission: DeckLevelOneMission; onBack: () => void }) {
  const [briefingAccepted, setBriefingAccepted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const activeQuestion = mission.questions[currentQuestion];
  const selectedAnswer = answers[currentQuestion];
  const score = useMemo(
    () => mission.questions.reduce((total, question, index) => total + (answers[index] === question.answer ? 1 : 0), 0),
    [answers, mission.questions]
  );
  const isComplete = Object.keys(answers).length === mission.questions.length;
  const passed = submitted && score >= passingScore;
  const earnedXp = passed ? mission.xp : 0;

  const resetMission = () => {
    setBriefingAccepted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <section className="missionShell simulatorMission" aria-labelledby="deck-mission-title">
      <button className="secondaryAction" onClick={onBack} type="button">
        Back to Deck Academy
      </button>
      <div className="missionLead missionLeadWithAction">
        <div>
          <p className="eyebrow">{mission.code}</p>
          <h2 id="deck-mission-title">{mission.title}</h2>
        </div>
        <div className={`missionBadge ${passed ? "passed" : ""}`}>
          <span>XP Reward</span>
          <strong>{earnedXp} / {mission.xp} XP</strong>
        </div>
      </div>

      <div className="missionLayout deckMissionLayout">
        <aside className="briefingPanel" aria-label="Deck mission briefing">
          <div className="panelTitle">
            <span>Mission Briefing</span>
            <strong>Deck Academy</strong>
          </div>
          <div className="briefingList">
            <div className="briefingRow">
              <span>STCW Competency</span>
              <strong>{mission.stcwCompetency}</strong>
            </div>
            <div className="briefingRow">
              <span>SMCP Function</span>
              <strong>{mission.smcpFunction}</strong>
            </div>
            <div className="briefingRow">
              <span>XP</span>
              <strong>{mission.xp} XP</strong>
            </div>
            <div className="briefingRow">
              <span>Pass Mark</span>
              <strong>8 / 10</strong>
            </div>
          </div>
          <p className="briefingText">{mission.missionBriefing}</p>
          <button className="primaryAction" onClick={() => setBriefingAccepted(true)} type="button">
            Start Mission
          </button>
        </aside>

        <article className="quizPanel" aria-live="polite">
          {!briefingAccepted ? (
            <div className="standbyPanel">
              <p className="eyebrow">Scenario</p>
              <h3>{mission.scenario}</h3>
              <p>Review the briefing, then answer 10 operational questions.</p>
            </div>
          ) : null}

          {briefingAccepted && !submitted ? (
            <div className="questionPanel">
              <div className="questionHeader">
                <span>Question {currentQuestion + 1} of {mission.questions.length}</span>
                <strong>{score} correct so far</strong>
              </div>
              <h3>{activeQuestion.prompt}</h3>
              <div className="answerGrid">
                {activeQuestion.options.map((option) => (
                  <button
                    aria-pressed={selectedAnswer === option}
                    className={`answerButton ${selectedAnswer === option ? "selected" : ""}`}
                    key={option}
                    onClick={() => setAnswers((currentAnswers) => ({ ...currentAnswers, [currentQuestion]: option }))}
                    type="button"
                  >
                    <strong>{option}</strong>
                  </button>
                ))}
              </div>
              <div className="quizActions">
                <button className="secondaryAction" disabled={currentQuestion === 0} onClick={() => setCurrentQuestion((question) => Math.max(0, question - 1))} type="button">
                  Previous
                </button>
                {currentQuestion < mission.questions.length - 1 ? (
                  <button className="primaryAction" disabled={!selectedAnswer} onClick={() => setCurrentQuestion((question) => question + 1)} type="button">
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
            <div className="assessmentPanel">
              <p className="eyebrow">Assessment</p>
              <h3>{passed ? "Mission Passed" : "Mission Not Passed"}</h3>
              <div className="assessmentGrid">
                <span>Score: {score} / {mission.questions.length}</span>
                <span>Pass Mark: {passingScore} / {mission.questions.length}</span>
                <span>{passed ? `${mission.xp} XP Awarded` : "0 XP Awarded"}</span>
                <span>Rank: {cadetLevel}</span>
              </div>
              <p className="assessmentNote">{passed ? "Deck Academy progress recorded for Level 1 readiness." : "Try Again"}</p>
              <button className="primaryAction" onClick={resetMission} type="button">
                Repeat Mission
              </button>
            </div>
          ) : null}
        </article>
      </div>
    </section>
  );
}

function OceanIntelligenceCenter() {
  return (
    <section className="missionShell intelligencePanel" aria-labelledby="ocean-title">
      <div className="missionLead">
        <div>
          <p className="eyebrow">Ocean Intelligence Center</p>
          <h2 id="ocean-title">Operational readiness workspace</h2>
        </div>
        <div className="missionBadge">
          <span>Prototype</span>
          <strong>Competency intelligence</strong>
        </div>
      </div>
      <div className="intelligenceGrid">
        {intelligenceModules.map((module) => (
          <article className="intelligenceCard" key={module.title}>
            <span>{module.title}</span>
            <p>{module.detail}</p>
          </article>
        ))}
      </div>
      <div className="readinessStrip">
        <span>Readiness Signal</span>
        <strong>Cadet can enter mission brief, view STCW/SMCP targets, complete simulator task and receive debrief.</strong>
      </div>
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
    setAnswers((currentAnswers) => ({ ...currentAnswers, [currentQuestion]: systemId }));
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
          <p className="eyebrow">Playable Mission</p>
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
            Inspect the engine-room diagram and identify the six foundation systems used in daily engineering rounds. Complete all 10 prompts. A score of 80 percent or higher passes the mission.
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
                <button className="secondaryAction" disabled={currentQuestion === 0} onClick={() => setCurrentQuestion((question) => Math.max(0, question - 1))} type="button">
                  Previous
                </button>
                {currentQuestion < questions.length - 1 ? (
                  <button className="primaryAction" disabled={!selectedAnswer} onClick={() => setCurrentQuestion((question) => question + 1)} type="button">
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

          {submitted ? <AssessmentPanel earnedXp={earnedXp} onReset={resetMission} passed={passed} score={score} /> : null}
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

function AssessmentPanel({ earnedXp, onReset, passed, score }: { earnedXp: number; onReset: () => void; passed: boolean; score: number }) {
  return (
    <div className="assessmentPanel">
      <p className="eyebrow">Assessment</p>
      <h3>{passed ? "Mission Passed" : "Mission Not Passed"}</h3>
      <div className="assessmentGrid">
        <span>Score: {score} / {questions.length}</span>
        <span>Pass Mark: {passingScore} / {questions.length}</span>
        <span>{passed ? "100 XP Awarded" : "0 XP Awarded"}</span>
        <span>Rank: {cadetLevel}</span>
      </div>
      <p className="assessmentNote">
        {passed
          ? "Cadet has identified the core machinery spaces and may continue to the next Engine Academy task."
          : "Try Again"}
      </p>
      <button className="primaryAction" onClick={onReset} type="button">
        Repeat Mission
      </button>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { deckRanks, engineRanks } from "@/data/ranks";

type Track = "deck" | "engine" | null;
type Step = "home" | "dashboard" | "mission";
type MissionStage = "briefing" | "questions" | "workshop" | "equipment" | "complete";

const universityName = "Universidad Maritima y Portuaria de Mexico";
const missionRewardXp = 50;

const questions = [
  {
    prompt: "What is the vessel's departure status?",
    options: ["Departing today", "Departing in seven days", "Arriving tomorrow"],
    answer: "Departing in seven days"
  },
  {
    prompt: "Who is conducting the safety briefing?",
    options: ["Robert Hayes", "Captain David Jones", "Chief Engineer"],
    answer: "Captain David Jones"
  },
  {
    prompt: "What is the main priority before departure?",
    options: ["Cargo speed", "Safety", "Shore leave"],
    answer: "Safety"
  }
];

const equipment = ["Hard Hat", "Safety Shoes", "Gloves", "Radio", "Life Jacket"];

export default function Home() {
  const [track, setTrack] = useState<Track>(null);
  const [step, setStep] = useState<Step>("home");
  const [xp, setXp] = useState(0);
  const [missionsCompleted, setMissionsCompleted] = useState(0);

  useEffect(() => {
    const savedXp = Number(localStorage.getItem("smcp_xp") || "0");
    const savedMissions = Number(localStorage.getItem("smcp_missions_completed") || "0");
    setXp(savedXp);
    setMissionsCompleted(savedMissions);
  }, []);

  function completeMission() {
    const newXp = Math.max(xp, missionRewardXp);
    const newMissions = Math.max(missionsCompleted, 1);
    setXp(newXp);
    setMissionsCompleted(newMissions);
    localStorage.setItem("smcp_xp", String(newXp));
    localStorage.setItem("smcp_missions_completed", String(newMissions));
  }

  const ranks = track === "engine" ? engineRanks : deckRanks;
  const rank = ranks[0];
  const department = track === "engine" ? "Engine Department" : "Deck Department";
  const cadetTitle = track === "engine" ? "Engine Cadet" : "Officer Cadet";

  function selectTrack(nextTrack: Exclude<Track, null>) {
    setTrack(nextTrack);
    setStep("dashboard");
  }

  return (
    <main className="appShell">
      <section className="heroPanel">
        <header className="universityBanner">
          <div className="crest">SMCP</div>
          <div>
            <p className="bannerSmall">Maritime English Training Platform</p>
            <h1>{universityName}</h1>
          </div>
        </header>

        {step === "home" && <HomeScreen onSelect={selectTrack} />}

        {step === "dashboard" && track && (
          <DashboardScreen
            department={department}
            cadetTitle={cadetTitle}
            rank={rank.name}
            ranks={ranks}
            xp={xp}
            missionsCompleted={missionsCompleted}
            onStart={() => setStep("mission")}
            onBack={() => {
              setTrack(null);
              setStep("home");
            }}
          />
        )}

        {step === "mission" && track && (
          <MissionScreen
            department={department}
            cadetTitle={cadetTitle}
            onMissionComplete={completeMission}
            onBack={() => setStep("dashboard")}
          />
        )}
      </section>
    </main>
  );
}

function HomeScreen({ onSelect }: { onSelect: (track: "deck" | "engine") => void }) {
  return (
    <section className="homeGrid">
      <div className="introBlock">
        <p className="eyebrow">SMCP Trainer</p>
        <h2>Train like a cadet. Communicate like an officer.</h2>
        <p>
          Start your Maritime English simulator. Choose your department, enter the Cadet Dashboard, and begin your first bridge or engine-room mission.
        </p>
      </div>

      <div className="rankBoard">
        <h3>Rank Path</h3>
        <div className="rankColumns">
          <div>
            <h4>Deck</h4>
            {deckRanks.map((rank) => <span key={rank.name}>{rank.insignia} {rank.name}</span>)}
          </div>
          <div>
            <h4>Engine</h4>
            {engineRanks.map((rank) => <span key={rank.name}>{rank.insignia} {rank.name}</span>)}
          </div>
        </div>
      </div>

      <div className="careerButtons">
        <button className="careerCard deck" onClick={() => onSelect("deck")}>
          <span className="careerIcon">Deck</span>
          <strong>Deck Cadet</strong>
          <small>Pilot / Bridge Training</small>
        </button>
        <button className="careerCard engine" onClick={() => onSelect("engine")}>
          <span className="careerIcon">Engine</span>
          <strong>Engine Cadet</strong>
          <small>Mechanic / Engine-Room Training</small>
        </button>
      </div>
    </section>
  );
}

function DashboardScreen({
  department,
  cadetTitle,
  rank,
  ranks,
  xp,
  missionsCompleted,
  onStart,
  onBack
}: {
  department: string;
  cadetTitle: string;
  rank: string;
  ranks: { name: string; minXp: number; insignia: string }[];
  xp: number;
  missionsCompleted: number;
  onStart: () => void;
  onBack: () => void;
}) {
  return (
    <section className="dashboardGrid">
      <div className="dashboardMain">
        <button className="backButton" onClick={onBack}>Change Department</button>
        <p className="eyebrow">Cadet Dashboard</p>
        <h2>You are now a {cadetTitle}.</h2>
        <p>Welcome to the {department}. Continue your training or start your first SMCP mission.</p>
        <div className="actions">
          <button className="primaryButton" onClick={onStart}>Start Your Training</button>
          <button className="secondaryButton" onClick={onStart}>Continue Your Training</button>
        </div>
      </div>

      <aside className="statusCard">
        <h3>Cadet Status</h3>
        <div className="statusRow"><span>Current Rank</span><strong>{rank}</strong></div>
        <div className="statusRow"><span>XP</span><strong>{xp}</strong></div>
        <div className="statusRow"><span>Completed Missions</span><strong>{missionsCompleted}</strong></div>
        <div className="statusRow"><span>Certificates</span><strong>0</strong></div>
      </aside>

      <div className="rankWide">
        <h3>{department} Rank Progression</h3>
        <div className="rankTimeline">
          {ranks.map((rankItem) => (
            <div className="rankStep" key={rankItem.name}>
              <div className="rankInsignia">{rankItem.insignia}</div>
              <strong>{rankItem.name}</strong>
              <small>{rankItem.minXp} XP</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MissionScreen({
  department,
  cadetTitle,
  onBack,
  onMissionComplete
}: {
  department: string;
  cadetTitle: string;
  onBack: () => void;
  onMissionComplete: () => void;
}) {
  const [stage, setStage] = useState<MissionStage>("briefing");
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [collected, setCollected] = useState<string[]>([]);

  const allAnswersCorrect = questions.every((question, index) => selectedAnswers[index] === question.answer);
  const allEquipmentCollected = equipment.every((item) => collected.includes(item));

  function finishMission() {
    onMissionComplete();
    setStage("complete");
  }

  return (
    <section className="missionScreen">
      <button className="backButton" onClick={onBack}>Back to Dashboard</button>
      <p className="eyebrow">Mission 01 - {department} - STCW Training Simulation</p>
      <h2>One Week Before Departure</h2>
      <p className="missionIntro">
        MV Ocean Pioneer is in port and scheduled to depart in seven days. Captain David Jones begins the Pre-Departure Safety Briefing.
      </p>

      {stage === "briefing" && (
        <>
          <div className="simulatorFrame">
            <div className="videoStage">
              <div className="captainAvatar">Captain</div>
              <div>
                <p className="videoLabel">Captain Briefing</p>
                <h3>Captain David Jones - MV Ocean Pioneer</h3>
                <p className="captainLine">
                  Good morning, {cadetTitle}. Before departure, every department must complete inspections, safety checks, and readiness reports. Safety is our highest priority.
                </p>
              </div>
            </div>
            <div className="orderBox">
              <h4>Mission Objective</h4>
              <p>Complete the captain's safety briefing and prepare for your first pre-departure inspection assignment.</p>
              <button className="primaryButton" onClick={() => setStage("questions")}>Begin Comprehension Check</button>
            </div>
          </div>

          <div className="simulatorFrame">
            <div className="orderBox">
              <h4>STCW Alignment</h4>
              <p>This mission introduces STCW-style Training and Assessment and Use of Simulators.</p>
              <ul>
                <li>Training and Assessment</li>
                <li>Use of Simulators</li>
                <li>Deck Department pathway awareness</li>
              </ul>
            </div>
            <div className="orderBox">
              <h4>Deck Career Path Reference</h4>
              <p>Future missions will connect SMCP practice to OICNW, Chief Mate, Master, and Able Seafarer-Deck.</p>
              <div className="statusRow"><span>Reward</span><strong>+50 XP</strong></div>
            </div>
          </div>
        </>
      )}

      {stage === "questions" && (
        <div className="simulatorFrame">
          <div className="orderBox">
            <h4>Comprehension Questions</h4>
            {questions.map((question, index) => (
              <div key={question.prompt} className="statusCard">
                <p><strong>{index + 1}. {question.prompt}</strong></p>
                {question.options.map((option) => (
                  <button
                    key={option}
                    className={selectedAnswers[index] === option ? "primaryButton" : "secondaryButton"}
                    onClick={() => setSelectedAnswers({ ...selectedAnswers, [index]: option })}
                  >
                    {option}
                  </button>
                ))}
              </div>
            ))}
            <button className="primaryButton" disabled={!allAnswersCorrect} onClick={() => setStage("workshop")}>
              Continue to Bosun Workshop
            </button>
          </div>
        </div>
      )}

      {stage === "workshop" && (
        <div className="simulatorFrame">
          <div className="videoStage">
            <div className="captainAvatar">Bosun</div>
            <div>
              <p className="videoLabel">Bosun Workshop</p>
              <h3>Robert Hayes - Safety Equipment Brief</h3>
              <p className="captainLine">
                Cadet, before departure we inspect PPE, mooring lines, radios, life-saving appliances, and emergency equipment.
              </p>
            </div>
          </div>
          <div className="orderBox">
            <h4>Vocabulary Focus</h4>
            <ul>
              <li>Personal Protective Equipment</li>
              <li>Mooring lines</li>
              <li>Life jacket</li>
              <li>Portable radio</li>
              <li>Emergency muster station</li>
            </ul>
            <button className="primaryButton" onClick={() => setStage("equipment")}>Go to Equipment Collection</button>
          </div>
        </div>
      )}

      {stage === "equipment" && (
        <div className="simulatorFrame">
          <div className="orderBox">
            <h4>Equipment Collection</h4>
            <p>Collect all required equipment before reporting back to Captain David Jones.</p>
            {equipment.map((item) => (
              <button
                key={item}
                className={collected.includes(item) ? "primaryButton" : "secondaryButton"}
                onClick={() => setCollected((current) => current.includes(item) ? current : [...current, item])}
              >
                {collected.includes(item) ? "Collected: " : "Collect: "}{item}
              </button>
            ))}
          </div>
          <div className="orderBox">
            <h4>Readiness Report</h4>
            <p>When all equipment is collected, complete the mission and update the training record.</p>
            <button className="primaryButton" disabled={!allEquipmentCollected} onClick={finishMission}>Complete Mission</button>
          </div>
        </div>
      )}

      {stage === "complete" && (
        <div className="simulatorFrame">
          <div className="orderBox">
            <h4>Mission Complete</h4>
            <p>MV Ocean Pioneer pre-departure safety briefing completed.</p>
            <div className="statusRow"><span>Captain</span><strong>Captain David Jones</strong></div>
            <div className="statusRow"><span>Bosun</span><strong>Robert Hayes</strong></div>
            <div className="statusRow"><span>Reward</span><strong>+50 XP</strong></div>
            <div className="statusRow"><span>Training Record</span><strong>Updated</strong></div>
            <button className="primaryButton" onClick={onBack}>Return to Dashboard</button>
          </div>
        </div>
      )}
    </section>
  );
}

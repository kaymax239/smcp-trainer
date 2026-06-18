"use client";

import { useState } from "react";
import { deckRanks, engineRanks } from "@/data/ranks";

type Track = "deck" | "engine" | null;
type Step = "home" | "dashboard" | "mission";

const universityName = "Universidad Marítima y Portuaria de México";

export default function Home() {
  const [track, setTrack] = useState<Track>(null);
  const [step, setStep] = useState<Step>("home");

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
          <div className="crest">⚓</div>
          <div>
            <p className="bannerSmall">Maritime English Training Platform</p>
            <h1>{universityName}</h1>
          </div>
        </header>

        {step === "home" && (
          <HomeScreen onSelect={selectTrack} />
        )}

        {step === "dashboard" && track && (
          <DashboardScreen
            department={department}
            cadetTitle={cadetTitle}
            rank={rank.name}
            ranks={ranks}
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
          <span className="careerIcon">⚓</span>
          <strong>Deck Cadet</strong>
          <small>Pilot / Bridge Training</small>
        </button>
        <button className="careerCard engine" onClick={() => onSelect("engine")}>
          <span className="careerIcon">🔧</span>
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
  onStart,
  onBack
}: {
  department: string;
  cadetTitle: string;
  rank: string;
  ranks: { name: string; minXp: number; insignia: string }[];
  onStart: () => void;
  onBack: () => void;
}) {
  return (
    <section className="dashboardGrid">
      <div className="dashboardMain">
        <button className="backButton" onClick={onBack}>← Change Department</button>
        <p className="eyebrow">Cadet Dashboard</p>
        <h2>You are now a {cadetTitle}.</h2>
        <p>
          Welcome to the {department}. Continue your training or start your first SMCP mission.
        </p>
        <div className="actions">
          <button className="primaryButton" onClick={onStart}>Start Your Training</button>
          <button className="secondaryButton" onClick={onStart}>Continue Your Training</button>
        </div>
      </div>

      <aside className="statusCard">
        <h3>Cadet Status</h3>
        <div className="statusRow"><span>Current Rank</span><strong>{rank}</strong></div>
        <div className="statusRow"><span>XP</span><strong>0</strong></div>
        <div className="statusRow"><span>Completed Missions</span><strong>0</strong></div>
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

function MissionScreen({ department, cadetTitle, onBack }: { department: string; cadetTitle: string; onBack: () => void }) {
  return (
    <section className="missionScreen">
      <button className="backButton" onClick={onBack}>← Back to Dashboard</button>
      <p className="eyebrow">Mission 01 • {department}</p>
      <h2>One Week Before Departure</h2>
      <p className="missionIntro">
        MV Ocean Pioneer is in port and scheduled to depart in seven days. Captain David Jones begins the Pre-Departure Safety Briefing.
      </p>

      <div className="simulatorFrame">
        <div className="videoStage">
          <div className="captainAvatar">👨‍✈️</div>
          <div>
            <p className="videoLabel">Captain Briefing</p>
            <h3>Captain David Jones - MV Ocean Pioneer</h3>
            <p className="captainLine">
              Good morning, {cadetTitle}. Before departure, every department must complete inspections and readiness reports.
            </p>
          </div>
        </div>
        <div className="orderBox">
          <h4>Mission Objective</h4>
          <p>Complete the captain&apos;s safety briefing and prepare for your first pre-departure inspection assignment.</p>
          <button className="primaryButton">Begin Comprehension Check</button>
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
    </section>
  );
}

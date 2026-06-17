import { missions } from "@/data/missions";
import { deckRanks, engineRanks, type Rank } from "@/data/ranks";

const currentXp = 0;
const currentRank = deckRanks[0];
const deckMissions = missions.filter((mission) => mission.career === "deck");
const engineMissions = missions.filter((mission) => mission.career === "engine");

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#041527] text-white">
      <section className="relative min-h-screen px-6 py-8 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0ea5e9_0%,transparent_35%),linear-gradient(135deg,#041527_0%,#073b5f_55%,#020617_100%)] opacity-95" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-cyan-950/70 to-transparent" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10">
          <header className="flex items-center justify-between rounded-3xl border border-cyan-300/20 bg-white/10 px-5 py-4 shadow-2xl backdrop-blur">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">Maritime Academy</p>
              <h1 className="text-2xl font-black tracking-tight sm:text-3xl">SMCP Trainer</h1>
            </div>
            <div className="rounded-full border border-yellow-300/40 bg-yellow-300/10 px-4 py-2 text-sm font-semibold text-yellow-100">
              {currentRank.insignia} {currentRank.name}
            </div>
          </header>

          <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-7">
              <div className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
                🚢 Maritime English Simulator
              </div>

              <div className="space-y-4">
                <h2 className="max-w-3xl text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
                  Train like a cadet. Communicate like an officer.
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-slate-200">
                  Master Standard Marine Communication Phrases through deck and engine-room missions, XP, ranks, and realistic maritime scenarios.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <a href="#deck" className="group rounded-3xl border border-cyan-300/30 bg-cyan-400/15 p-6 shadow-2xl transition hover:-translate-y-1 hover:bg-cyan-300/25">
                  <div className="mb-4 text-5xl">⚓</div>
                  <h3 className="text-2xl font-black">Deck Department</h3>
                  <p className="mt-2 text-sm text-cyan-100">Bridge, navigation, pilot boarding, watchkeeping, and emergency communication.</p>
                </a>
                <a href="#engine" className="group rounded-3xl border border-orange-300/30 bg-orange-400/15 p-6 shadow-2xl transition hover:-translate-y-1 hover:bg-orange-300/25">
                  <div className="mb-4 text-5xl">🔧</div>
                  <h3 className="text-2xl font-black">Engine Department</h3>
                  <p className="mt-2 text-sm text-orange-100">Engine room, machinery safety, failures, shutdowns, and emergency reports.</p>
                </a>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-100">Cadet Dashboard</p>
              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl bg-slate-950/50 p-5">
                  <p className="text-sm text-slate-300">Current Rank</p>
                  <p className="mt-1 text-3xl font-black">{currentRank.insignia} {currentRank.name}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-slate-950/50 p-5">
                    <p className="text-sm text-slate-300">Experience Points</p>
                    <p className="mt-1 text-3xl font-black text-cyan-200">{currentXp}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-950/50 p-5">
                    <p className="text-sm text-slate-300">Level</p>
                    <p className="mt-1 text-3xl font-black text-yellow-200">1</p>
                  </div>
                </div>
              </div>
            </aside>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <RankPath title="⚓ Deck Career Path" ranks={deckRanks} />
            <RankPath title="🔧 Engine Career Path" ranks={engineRanks} />
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <MissionList id="deck" title="⚓ Deck Training Missions" items={deckMissions} />
            <MissionList id="engine" title="🔧 Engine Training Missions" items={engineMissions} />
          </section>
        </div>
      </section>
    </main>
  );
}

function RankPath({ title, ranks }: { title: string; ranks: Rank[] }) {
  return (
    <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur">
      <h3 className="text-2xl font-black">{title}</h3>
      <div className="mt-5 grid gap-3">
        {ranks.map((rank) => (
          <div key={rank.name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/40 p-4">
            <div>
              <p className="text-lg font-black">{rank.name}</p>
              <p className="text-sm text-slate-300">Unlocked at {rank.minXp} XP</p>
            </div>
            <div className="rounded-xl bg-yellow-300/10 px-4 py-2 text-xl font-black text-yellow-200">
              {rank.insignia}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MissionList({ id, title, items }: { id: string; title: string; items: typeof missions }) {
  return (
    <div id={id} className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur">
      <h3 className="text-2xl font-black">{title}</h3>
      <div className="mt-5 space-y-3">
        {items.map((mission, index) => (
          <div key={mission.id} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-bold text-cyan-200">Mission {index + 1}</p>
                <h4 className="mt-1 text-lg font-black">{mission.title}</h4>
                <p className="mt-1 text-sm text-slate-300">{mission.description}</p>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-yellow-100">
                {mission.requiredXp} XP
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

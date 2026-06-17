export type Rank = {
  name: string;
  minXp: number;
  badge: string;
};

export const ranks: Rank[] = [
  { name: "Cadet Recruit", minXp: 0, badge: "⚪" },
  { name: "Cadet Seaman", minXp: 100, badge: "🟦" },
  { name: "Junior Cadet", minXp: 250, badge: "🟩" },
  { name: "Senior Cadet", minXp: 500, badge: "🟨" },
  { name: "Officer Candidate", minXp: 1000, badge: "🟧" },
  { name: "Junior Officer", minXp: 2000, badge: "🟥" },
  { name: "Watch Officer", minXp: 5000, badge: "🟪" },
  { name: "Chief Officer Candidate", minXp: 10000, badge: "⭐" },
  { name: "Master Mariner Candidate", minXp: 20000, badge: "🏆" }
];

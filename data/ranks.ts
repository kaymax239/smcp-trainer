export type CareerTrack = "deck" | "engine";

export type Rank = {
  name: string;
  minXp: number;
  stripes: number;
  insignia: string;
  track: CareerTrack;
};

export const deckRanks: Rank[] = [
  { name: "Officer Cadet", minXp: 0, stripes: 0, insignia: "◇", track: "deck" },
  { name: "Third Officer", minXp: 250, stripes: 1, insignia: "▰", track: "deck" },
  { name: "Second Officer", minXp: 750, stripes: 2, insignia: "▰▰", track: "deck" },
  { name: "Chief Officer", minXp: 1500, stripes: 3, insignia: "▰▰▰", track: "deck" },
  { name: "Master Mariner", minXp: 3000, stripes: 4, insignia: "★ ▰▰▰▰", track: "deck" }
];

export const engineRanks: Rank[] = [
  { name: "Engine Cadet", minXp: 0, stripes: 0, insignia: "◇", track: "engine" },
  { name: "Fourth Engineer", minXp: 250, stripes: 1, insignia: "▰", track: "engine" },
  { name: "Third Engineer", minXp: 750, stripes: 2, insignia: "▰▰", track: "engine" },
  { name: "Second Engineer", minXp: 1500, stripes: 3, insignia: "▰▰▰", track: "engine" },
  { name: "Chief Engineer", minXp: 3000, stripes: 4, insignia: "★ ▰▰▰▰", track: "engine" }
];

export const ranks = deckRanks;

export type Career = "pilot" | "engineer";

export type Mission = {
  id: string;
  career: Career;
  title: string;
  description: string;
  requiredXp: number;
};

export const missions: Mission[] = [
  {
    id: "pilot-basic-commands",
    career: "pilot",
    title: "Basic Bridge Commands",
    description: "Practice essential SMCP bridge orders and responses.",
    requiredXp: 0
  },
  {
    id: "pilot-boarding",
    career: "pilot",
    title: "Pilot Boarding",
    description: "Communicate with the pilot during boarding operations.",
    requiredXp: 100
  },
  {
    id: "pilot-man-overboard",
    career: "pilot",
    title: "Man Overboard",
    description: "React using emergency SMCP phrases during MOB procedures.",
    requiredXp: 250
  },
  {
    id: "engine-room-familiarization",
    career: "engineer",
    title: "Engine Room Familiarization",
    description: "Learn key engine room vocabulary and safety commands.",
    requiredXp: 0
  },
  {
    id: "engine-fire",
    career: "engineer",
    title: "Fire in the Engine Room",
    description: "Practice reporting and responding to an engine room fire.",
    requiredXp: 100
  },
  {
    id: "engine-failure",
    career: "engineer",
    title: "Main Engine Failure",
    description: "Use SMCP to report machinery failure and corrective actions.",
    requiredXp: 250
  }
];

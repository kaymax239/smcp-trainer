export type Career = "deck" | "engine";

export type Mission = {
  id: string;
  career: Career;
  title: string;
  description: string;
  requiredXp: number;
};

export const missions: Mission[] = [
  {
    id: "deck-basic-bridge-commands",
    career: "deck",
    title: "Basic Bridge Commands",
    description: "Practice essential SMCP bridge orders, standard responses, and closed-loop communication.",
    requiredXp: 0
  },
  {
    id: "deck-pilot-boarding",
    career: "deck",
    title: "Pilot Boarding Operations",
    description: "Communicate with the pilot during boarding, approach, and handover procedures.",
    requiredXp: 250
  },
  {
    id: "deck-man-overboard",
    career: "deck",
    title: "Man Overboard Emergency",
    description: "Use SMCP emergency phrases during a man overboard situation.",
    requiredXp: 750
  },
  {
    id: "deck-heavy-weather",
    career: "deck",
    title: "Heavy Weather Navigation",
    description: "Report weather, visibility, vessel motion, and navigational restrictions.",
    requiredXp: 1500
  },
  {
    id: "engine-room-familiarization",
    career: "engine",
    title: "Engine Room Familiarization",
    description: "Learn key machinery vocabulary, watch routines, and safety communication.",
    requiredXp: 0
  },
  {
    id: "engine-fire-response",
    career: "engine",
    title: "Fire in the Engine Room",
    description: "Report, confirm, and respond to an engine room fire using standard maritime English.",
    requiredXp: 250
  },
  {
    id: "engine-main-engine-failure",
    career: "engine",
    title: "Main Engine Failure",
    description: "Communicate loss of propulsion, corrective actions, and status updates to the bridge.",
    requiredXp: 750
  },
  {
    id: "engine-emergency-shutdown",
    career: "engine",
    title: "Emergency Shutdown",
    description: "Practice critical commands for machinery shutdown and damage control.",
    requiredXp: 1500
  }
];

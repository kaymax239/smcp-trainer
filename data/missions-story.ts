export const storyMissions = [
  {
    id: "mission-01",

    title: "One Week Before Departure",

    vessel: "MV Ocean Pioneer",

    captain: "Captain David Jones",

    bosun: "Robert Hayes",

    playerRole: "Officer Cadet",

    xpReward: 100,

    description:
      "The vessel will depart in seven days. Captain David Jones conducts the Pre-Departure Safety Briefing for all cadets and crew members.",

    objectives: [
      "Attend the Captain's Briefing",
      "Answer comprehension questions",
      "Participate in the Bosun Workshop",
      "Collect required safety equipment",
    ],

    captainBriefing: `
Good morning, Cadets.

Welcome aboard MV Ocean Pioneer.

Our vessel is scheduled to depart in seven days. Before departure, every crew member must review safety procedures, emergency stations, and communication protocols.

As Officer Cadets, you are expected to demonstrate professionalism, discipline, and proper use of Standard Marine Communication Phrases.

Safety is our highest priority.

You will now begin your pre-departure training.
`,

    questions: [
      "When will the vessel depart?",
      "What is the highest priority on board?",
      "What communication standard will be used?",
      "What is expected from Officer Cadets?",
    ],

    bosunWorkshop: `
Today we will inspect personal protective equipment.

Check your helmet.
Check your gloves.
Check your safety shoes.
Check your lifejacket.

Report any defective equipment immediately.
`,

    equipment: [
      "Safety Helmet",
      "Safety Gloves",
      "Safety Shoes",
      "Lifejacket",
      "Coveralls",
    ],
  },
];

export type DeckMissionQuestion = {
  prompt: string;
  options: string[];
  answer: string;
};

export type DeckLevelOneMission = {
  id: string;
  code: string;
  title: string;
  xp: number;
  missionBriefing: string;
  stcwCompetency: string;
  smcpFunction: string;
  scenario: string;
  questions: DeckMissionQuestion[];
};

export const deckLevelOneMissions: DeckLevelOneMission[] = [
  {
    id: "one-week-before-departure",
    code: "Mission 001",
    title: "One Week Before Departure",
    xp: 100,
    missionBriefing:
      "MV Ocean Pioneer departs in seven days. The Officer Cadet attends the pre-departure safety briefing and prepares to assist the deck department with readiness checks.",
    stcwCompetency: "STCW A-II/1: Maintain a safe navigational watch / Use English in written and oral form",
    smcpFunction: "Onboard communication: confirming orders, reporting status, requesting clarification",
    scenario:
      "Captain David Jones briefs the crew. Bosun Robert Hayes assigns the cadet to verify PPE and report any defective equipment before departure.",
    questions: [
      { prompt: "When is MV Ocean Pioneer scheduled to depart?", options: ["In seven days", "Tonight", "In one month", "After dry dock"], answer: "In seven days" },
      { prompt: "What is the highest priority during the pre-departure briefing?", options: ["Safety", "Speed", "Cargo profit", "Crew recreation"], answer: "Safety" },
      { prompt: "Who gives the main pre-departure briefing?", options: ["Captain David Jones", "Bosun Robert Hayes", "The pilot", "The cook"], answer: "Captain David Jones" },
      { prompt: "Which department does the cadet assist first?", options: ["Deck department", "Catering department", "Shore office", "Passenger services"], answer: "Deck department" },
      { prompt: "What should the cadet do with defective PPE?", options: ["Report it immediately", "Hide it", "Use it anyway", "Throw it overboard"], answer: "Report it immediately" },
      { prompt: "Which item is part of PPE for deck readiness?", options: ["Safety helmet", "Coffee mug", "Chart table", "Cabin key"], answer: "Safety helmet" },
      { prompt: "What phrase best confirms an instruction?", options: ["Order confirmed", "Maybe later", "I guess so", "No comment"], answer: "Order confirmed" },
      { prompt: "Why are inspections completed before departure?", options: ["To verify operational readiness", "To delay sailing", "To replace navigation", "To avoid all reports"], answer: "To verify operational readiness" },
      { prompt: "Who assigns the cadet to inspect PPE?", options: ["Bosun Robert Hayes", "Second Officer Sarah Mitchell", "Port control", "A passenger"], answer: "Bosun Robert Hayes" },
      { prompt: "Which report is professionally useful?", options: ["Safety gloves checked. Status is normal.", "Everything okay maybe.", "I saw things.", "No idea."], answer: "Safety gloves checked. Status is normal." }
    ]
  },
  {
    id: "meet-the-bridge-team",
    code: "Mission 002",
    title: "Meet the Bridge Team",
    xp: 100,
    missionBriefing:
      "The cadet reports to the bridge and is introduced to the officers responsible for navigation, safety equipment, cargo operations and deck supervision.",
    stcwCompetency: "STCW A-II/1: Maintain a safe navigational watch / Apply leadership and teamwork awareness",
    smcpFunction: "Onboard communication: professional greetings, role identification, chain-of-command awareness",
    scenario:
      "Chief Officer Michael Turner introduces the Second Officer, Third Officer and Bosun. The cadet must identify each role and respond professionally.",
    questions: [
      { prompt: "Who introduces the cadet to the bridge team?", options: ["Chief Officer Michael Turner", "The cook", "A passenger", "Port security"], answer: "Chief Officer Michael Turner" },
      { prompt: "What is the Chief Officer responsible for?", options: ["Cargo operations and deck crew management", "Cooking meals", "Selling tickets", "Harbor tourism"], answer: "Cargo operations and deck crew management" },
      { prompt: "Who prepares voyage plans and navigation charts?", options: ["Second Officer Sarah Mitchell", "Bosun Robert Hayes", "Chief Engineer", "Able Seaman"], answer: "Second Officer Sarah Mitchell" },
      { prompt: "Which equipment is linked to the Second Officer's navigation role?", options: ["ECDIS", "Galley oven", "Laundry machine", "Mooring winch only"], answer: "ECDIS" },
      { prompt: "Who is responsible for safety equipment?", options: ["Third Officer Daniel Brooks", "A visitor", "The agent", "The pilot only"], answer: "Third Officer Daniel Brooks" },
      { prompt: "Which item belongs to safety equipment responsibility?", options: ["Lifejackets", "Office printer", "Fuel invoice", "Cabin television"], answer: "Lifejackets" },
      { prompt: "Who is the senior deck rating onboard?", options: ["Bosun Robert Hayes", "Captain David Jones", "Second Officer Sarah Mitchell", "Port agent"], answer: "Bosun Robert Hayes" },
      { prompt: "What is a professional greeting to the Chief Officer?", options: ["Good morning, Chief Officer.", "Hey.", "What's up?", "Hello Captain."], answer: "Good morning, Chief Officer." },
      { prompt: "Why must the cadet understand chain of command?", options: ["To report to the correct officer", "To avoid all duties", "To change rank immediately", "To ignore orders"], answer: "To report to the correct officer" },
      { prompt: "What should a good cadet do first onboard?", options: ["Observe, learn and ask professional questions", "Give orders", "Leave the bridge", "Use informal slang"], answer: "Observe, learn and ask professional questions" }
    ]
  },
  {
    id: "first-day-on-the-bridge",
    code: "Mission 003",
    title: "First Day on the Bridge",
    xp: 100,
    missionBriefing:
      "The cadet joins the morning bridge watch at 0555 and observes navigation equipment, lookout duties and basic bridge reporting.",
    stcwCompetency: "STCW A-II/1: Maintain a safe navigational watch / Use English in written and oral form",
    smcpFunction: "Bridge communication: contact reports, port/starboard language, watchkeeping confirmation",
    scenario:
      "The Second Officer conducts the morning watch. A contact appears on radar and the cadet must use correct bridge language to report observations.",
    questions: [
      { prompt: "What time does the cadet arrive on the bridge?", options: ["0555", "1200", "1800", "2359"], answer: "0555" },
      { prompt: "Who is conducting the morning watch?", options: ["The Second Officer", "The cook", "The passenger manager", "The port agent"], answer: "The Second Officer" },
      { prompt: "What is the most important lookout equipment?", options: ["Your eyes", "A phone", "A coffee cup", "A chair"], answer: "Your eyes" },
      { prompt: "Which equipment is observed on the bridge?", options: ["Radar", "Fuel separator", "Bilge pump", "Fresh water generator"], answer: "Radar" },
      { prompt: "Which phrase correctly reports a contact on the right side of the vessel?", options: ["Contact on starboard side.", "Ship right side.", "Boat there.", "Thing ahead maybe."], answer: "Contact on starboard side." },
      { prompt: "What does a lookout do?", options: ["Observes surrounding traffic and hazards", "Sleeps during watch", "Repairs the engine", "Serves lunch"], answer: "Observes surrounding traffic and hazards" },
      { prompt: "What is a watch?", options: ["A period of duty on the bridge", "A wrist clock only", "A holiday", "A cargo document"], answer: "A period of duty on the bridge" },
      { prompt: "What does course mean?", options: ["The direction the vessel is steering", "The color of the hull", "The food menu", "The crew list"], answer: "The direction the vessel is steering" },
      { prompt: "What is the cadet's primary duty during bridge watch?", options: ["Maintain lookout", "Use a phone", "Sit quietly", "Leave the bridge"], answer: "Maintain lookout" },
      { prompt: "Which phrase is standard bridge language?", options: ["Maintain lookout.", "Look around maybe.", "Boat thing there.", "No problem always."], answer: "Maintain lookout." }
    ]
  }
];

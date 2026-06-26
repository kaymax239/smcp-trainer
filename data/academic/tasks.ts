export type AcademicAssessmentQuestion = {
  prompt: string;
  options: string[];
  answer: string;
};

export type AcademicTask = {
  id: string;
  subjectId: string;
  title: string;
  officialTopic: string;
  missionBriefing: string;
  video: {
    title: string;
    duration: string;
    description: string;
    thumbnailLabel: string;
    futureUrl: string;
  };
  vocabularyInContext: { term: string; context: string }[];
  writingExercise: {
    prompt: string;
    minimumWords: number;
    exampleAnswer: string;
  };
  operationalScenario: string;
  practiceQuestions: string[];
  assessment: AcademicAssessmentQuestion[];
  xp: number;
  progressStatus: "Not started" | "In progress" | "Prototype ready";
};

export const academicTasks: AcademicTask[] = [
  {
    id: "report-to-chief-engineer",
    subjectId: "mn-s1-maritime-english-i",
    title: "Report to the Chief Engineer",
    officialTopic: "Verb To Be / Introductions",
    missionBriefing:
      "You are a first-semester engine cadet joining your first vessel. Report to the Chief Engineer, introduce yourself, state your rank and department, and confirm your assigned duty.",
    video: {
      title: "How to introduce yourself onboard",
      duration: "3 min",
      description: "Short instructor video showing a cadet reporting to the Chief Engineer using clear onboard English.",
      thumbnailLabel: "Chief Engineer briefing",
      futureUrl: ""
    },
    vocabularyInContext: [
      { term: "Chief Engineer", context: "Good morning, Chief Engineer. I am the engine cadet." },
      { term: "Engine Department", context: "I am assigned to the Engine Department." },
      { term: "Assigned duty", context: "My assigned duty is engine-room familiarization." }
    ],
    writingExercise: {
      prompt: "Write a 40-word introduction to your Chief Engineer on your first day onboard.",
      minimumWords: 40,
      exampleAnswer:
        "Good morning, Chief Engineer. My name is Carlos Rivera. I am an engine cadet assigned to the Engine Department. This is my first day onboard. I confirm my assigned duty is engine-room familiarization and I am ready to follow your instructions."
    },
    operationalScenario:
      "The Chief Engineer is in the engine control room. You must report before starting your familiarization round.",
    practiceQuestions: [
      "What is your rank onboard?",
      "Which department are you assigned to?",
      "How do you confirm your first duty?"
    ],
    assessment: [
      { prompt: "Which sentence is a professional opening?", options: ["Good morning, Chief Engineer.", "Hey boss.", "I am here maybe.", "What is up?"], answer: "Good morning, Chief Engineer." },
      { prompt: "Which sentence states department correctly?", options: ["I am assigned to the Engine Department.", "I am engine place.", "I work somewhere.", "I am deck engine."], answer: "I am assigned to the Engine Department." },
      { prompt: "Which phrase confirms duty?", options: ["I confirm my assigned duty.", "Maybe I do it.", "I think yes.", "No duty."], answer: "I confirm my assigned duty." }
    ],
    xp: 50,
    progressStatus: "Prototype ready"
  },
  {
    id: "introduce-yourself-onboard",
    subjectId: "mn-s1-maritime-english-i",
    title: "Report To The Watch Officer",
    officialTopic: "Watch reporting / Professional courtesy",
    missionBriefing:
      "Report to the watch officer at the start of a supervised duty period, state your cadet identity and assigned purpose, then confirm release when dismissed.",
    video: {
      title: "Onboard introductions for engine cadets",
      duration: "4 min",
      description: "A model exchange for introducing yourself to officers and ratings in the engine department.",
      thumbnailLabel: "Engine team introduction",
      futureUrl: ""
    },
    vocabularyInContext: [
      { term: "Cadet", context: "I am a cadet in training." },
      { term: "Motorman", context: "Good afternoon, Motorman. I am the new engine cadet." },
      { term: "Training", context: "I am onboard for supervised training." }
    ],
    writingExercise: {
      prompt: "Write a 35-word introduction to a motorman during your first engine-room round.",
      minimumWords: 35,
      exampleAnswer:
        "Good afternoon. My name is Ana Lopez. I am the new engine cadet assigned to the Engine Department. I am onboard for supervised training and I am ready to observe the engine-room routine safely."
    },
    operationalScenario:
      "The watch officer must know who is entering the duty area, why the cadet is present, and when the cadet has been released.",
    practiceQuestions: ["State your name.", "State your rank.", "State your training purpose."],
    assessment: [
      { prompt: "Which word describes your training role?", options: ["Cadet", "Passenger", "Pilot", "Agent"], answer: "Cadet" },
      { prompt: "Which phrase is clear?", options: ["I am onboard for supervised training.", "I am here for things.", "I maybe work.", "I am no department."], answer: "I am onboard for supervised training." },
      { prompt: "Which introduction is professional?", options: ["My name is Ana Lopez.", "Me Ana.", "Name maybe Ana.", "Call me whatever."], answer: "My name is Ana Lopez." }
    ],
    xp: 50,
    progressStatus: "Prototype ready"
  },
  {
    id: "complete-cadet-personal-information",
    subjectId: "mn-s1-maritime-english-i",
    title: "Verify Engine Room Familiarization Points",
    officialTopic: "Engine-room locations / Familiarization record",
    missionBriefing:
      "Verify assigned engine-room equipment, location, reporting point and station before a supervised safety walkthrough.",
    video: {
      title: "Completing onboard personal information",
      duration: "3 min",
      description: "Shows how a cadet reads and completes basic onboard identity and department fields.",
      thumbnailLabel: "Cadet record form",
      futureUrl: ""
    },
    vocabularyInContext: [
      { term: "Surname", context: "My surname is Rivera." },
      { term: "Rank", context: "My rank is engine cadet." },
      { term: "Nationality", context: "My nationality is Mexican." }
    ],
    writingExercise: {
      prompt: "Write a 30-word paragraph with your name, surname, nationality, rank and department.",
      minimumWords: 30,
      exampleAnswer:
        "My name is Carlos Rivera. I am Mexican. My rank is engine cadet and I am assigned to the Engine Department. I am joining the vessel for supervised onboard training."
    },
    operationalScenario:
      "The supervisor checks whether the cadet can locate assigned machinery areas before authorizing the familiarization walkthrough.",
    practiceQuestions: ["What is your surname?", "What is your rank?", "What is your department?"],
    assessment: [
      { prompt: "Which field asks for family name?", options: ["Surname", "Rank", "Duty", "Watch"], answer: "Surname" },
      { prompt: "Which field identifies your shipboard role?", options: ["Rank", "Weather", "Port", "Course"], answer: "Rank" },
      { prompt: "Which sentence is complete?", options: ["I am assigned to the Engine Department.", "Engine yes.", "Department maybe.", "No assigned."], answer: "I am assigned to the Engine Department." }
    ],
    xp: 50,
    progressStatus: "Prototype ready"
  },
  {
    id: "identify-your-department",
    subjectId: "mn-s1-maritime-english-i",
    title: "Transmit Crew Identity By Radio",
    officialTopic: "Radio identity confirmation / Phonetic spelling",
    missionBriefing:
      "Transmit a crew member title and full name to the bridge using clear phonetic spelling and confirm the bridge readback.",
    video: {
      title: "Shipboard departments for new cadets",
      duration: "5 min",
      description: "Explains how departments are organized onboard and how cadets report to the correct area.",
      thumbnailLabel: "Ship department map",
      futureUrl: ""
    },
    vocabularyInContext: [
      { term: "Engine Department", context: "The Engine Department operates and monitors machinery." },
      { term: "Deck Department", context: "The Deck Department manages navigation, cargo and deck operations." },
      { term: "Report to", context: "Report to the Engine Control Room at 0800." }
    ],
    writingExercise: {
      prompt: "Write a 35-word explanation of your department and one responsibility you will observe.",
      minimumWords: 35,
      exampleAnswer:
        "I am assigned to the Engine Department. This department operates and monitors ship machinery. As an engine cadet, I will observe engine-room rounds, safety procedures and basic machinery status reports."
    },
    operationalScenario:
      "The bridge needs a crew identity for the log during a noisy watch period and must copy the name without a repeat transmission.",
    practiceQuestions: ["What department operates machinery?", "Where should an engine cadet report?", "Which department handles bridge watchkeeping?"],
    assessment: [
      { prompt: "Which department operates machinery?", options: ["Engine Department", "Deck Department", "Catering Department", "Passenger Department"], answer: "Engine Department" },
      { prompt: "Which station fits an engine cadet?", options: ["Engine Control Room", "Bridge wing only", "Galley", "Passenger lounge"], answer: "Engine Control Room" },
      { prompt: "Which phrase is correct?", options: ["I am assigned to the Engine Department.", "I am assigned to every department.", "I am no department.", "I am deck engine bridge."], answer: "I am assigned to the Engine Department." }
    ],
    xp: 50,
    progressStatus: "Prototype ready"
  },
  {
    id: "confirm-your-first-duty",
    subjectId: "mn-s1-maritime-english-i",
    title: "Confirm Your First Duty",
    officialTopic: "Duty confirmation / Simple orders",
    missionBriefing:
      "Receive your first duty from the Second Engineer and confirm the task using a complete, professional phrase.",
    video: {
      title: "Confirming your first engine-room duty",
      duration: "4 min",
      description: "Demonstrates how to repeat and confirm a simple assigned duty before starting work.",
      thumbnailLabel: "Duty confirmation",
      futureUrl: ""
    },
    vocabularyInContext: [
      { term: "Confirm", context: "I confirm my duty is to observe the engine-room round." },
      { term: "Assigned", context: "I am assigned to assist the Second Engineer." },
      { term: "Duty", context: "My first duty is to observe and report." }
    ],
    writingExercise: {
      prompt: "Write a 40-word confirmation to the Second Engineer after receiving your first duty.",
      minimumWords: 40,
      exampleAnswer:
        "Second Engineer, I confirm my first duty is to observe the engine-room round and follow your instructions. I will stay with the assigned officer, use PPE correctly and report if I see any unsafe condition."
    },
    operationalScenario:
      "The Second Engineer assigns you to observe the engine-room round. You must confirm before entering the machinery space.",
    practiceQuestions: ["Who assigns the duty?", "What must you confirm?", "What safety item should you mention?"],
    assessment: [
      { prompt: "Which phrase confirms the task?", options: ["I confirm my first duty.", "Maybe I do.", "Task maybe.", "No confirm."], answer: "I confirm my first duty." },
      { prompt: "Who gives the instruction in this task?", options: ["Second Engineer", "Passenger", "Port agent", "Cook"], answer: "Second Engineer" },
      { prompt: "Which safety phrase is useful?", options: ["I will use PPE correctly.", "I ignore PPE.", "PPE is optional.", "No safety today."], answer: "I will use PPE correctly." }
    ],
    xp: 50,
    progressStatus: "Prototype ready"
  }
];


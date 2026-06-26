import type { AcademicProgramCode } from "./semesters";

export type AcademicMissionTask = {
  career: AcademicProgramCode;
  semester: string;
  subjectCode: string;
  subjectName: string;
  subjectId: string;
  unit: string;
  topic: string;
  taskId: string;
  taskTitle: string;
  scenario: string;
  instructions: string[];
  deliverable: string;
  assessmentCriteria: string[];
  xp: number;
  estimatedTime: string;
  difficulty: "Foundation" | "Standard" | "Advanced";
};

export const academicMissionTasks: AcademicMissionTask[] = [
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Maritimo",
    subjectId: "pn-s1-transporte-maritimo",
    unit: "Antecedentes del Transporte Maritimo",
    topic: "Historia antigua y moderna de la navegacion",
    taskId: "pn-tmo101-history-navigation-timeline",
    taskTitle: "Build A Navigation History Watch Brief",
    scenario: "The deck officer asks the cadet to brief the watch team on how navigation evolved into modern maritime transport.",
    instructions: [
      "Identify two ancient navigation developments.",
      "Identify two modern navigation developments.",
      "Connect each development to a current shipboard practice."
    ],
    deliverable: "A short watch brief timeline with ancient, modern, and current shipboard references.",
    assessmentCriteria: [
      "Timeline separates ancient and modern navigation clearly.",
      "Each item is connected to maritime transport operations.",
      "Brief can be understood by a deck watch team."
    ],
    xp: 10,
    estimatedTime: "20 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Maritimo",
    subjectId: "pn-s1-transporte-maritimo",
    unit: "Transporte Maritimo",
    topic: "Tipos de buque y sus particularidades",
    taskId: "pn-tmo101-vessel-type-identification",
    taskTitle: "Identify Vessel Type And Operational Purpose",
    scenario: "A port operations board lists arriving vessels. The cadet must identify the vessel type and its likely operational purpose.",
    instructions: [
      "Select three merchant vessel types.",
      "Describe one defining feature for each vessel.",
      "State the cargo or service normally associated with each vessel."
    ],
    deliverable: "A vessel identification card for three merchant vessel types.",
    assessmentCriteria: [
      "Vessel types are named correctly.",
      "Operational purpose matches vessel characteristics.",
      "Descriptions use maritime terminology."
    ],
    xp: 10,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Maritimo",
    subjectId: "pn-s1-transporte-maritimo",
    unit: "Transporte Maritimo",
    topic: "Fundamentos basicos del transporte maritimo",
    taskId: "pn-tmo101-maritime-transport-flow",
    taskTitle: "Map A Maritime Transport Operation",
    scenario: "The chief officer asks the cadet to explain how cargo moves through a basic maritime transport operation.",
    instructions: [
      "List the main stages from cargo acceptance to discharge.",
      "Identify the shipboard role involved in each stage.",
      "Mark one risk or control point for each stage."
    ],
    deliverable: "A simple maritime transport flow map.",
    assessmentCriteria: [
      "Stages follow a logical operational sequence.",
      "Shipboard roles are connected to the correct stage.",
      "Risk or control points are observable."
    ],
    xp: 10,
    estimatedTime: "25 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Maritimo",
    subjectId: "pn-s1-transporte-maritimo",
    unit: "Organismos Internacionales que regulan la Marina Mercante",
    topic: "OMI, OIT, UIT y OMM",
    taskId: "pn-tmo101-maritime-organization-match",
    taskTitle: "Match Maritime Organization To Shipboard Function",
    scenario: "Before a safety meeting, the cadet must match international maritime organizations to their operational impact onboard.",
    instructions: [
      "Identify OMI, OIT, UIT, and OMM.",
      "State one maritime function influenced by each organization.",
      "Describe how the function appears during ship operations."
    ],
    deliverable: "An organization-function matching table.",
    assessmentCriteria: [
      "Each organization is identified correctly.",
      "Functions are relevant to maritime operations.",
      "Examples connect regulation to shipboard practice."
    ],
    xp: 10,
    estimatedTime: "20 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Maritimo",
    subjectId: "pn-s1-transporte-maritimo",
    unit: "Desarrollo de la propulsion Naval",
    topic: "Propulsion naval",
    taskId: "pn-tmo101-propulsion-development-report",
    taskTitle: "Report Propulsion Development Milestones",
    scenario: "The training officer asks the cadet to connect propulsion history with the machinery seen on modern merchant vessels.",
    instructions: [
      "Identify major propulsion development stages.",
      "Describe the operational change produced by each stage.",
      "Connect one stage to a modern shipboard propulsion system."
    ],
    deliverable: "A propulsion development report for cadet familiarization.",
    assessmentCriteria: [
      "Development stages are in a logical sequence.",
      "Operational changes are described clearly.",
      "Modern propulsion connection is technically plausible."
    ],
    xp: 10,
    estimatedTime: "25 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Maritimo",
    subjectId: "pn-s1-transporte-maritimo",
    unit: "Dimensiones y elementos del Buque",
    topic: "Dimensiones principales y nomenclatura del buque",
    taskId: "pn-tmo101-ship-dimensions-labeling",
    taskTitle: "Label Principal Ship Dimensions",
    scenario: "During vessel familiarization, the cadet must identify principal dimensions and basic ship nomenclature on a deck diagram.",
    instructions: [
      "Identify length, beam, draft, and freeboard.",
      "Label bow, stern, port, starboard, deck, and hull.",
      "State why each dimension matters for ship operations."
    ],
    deliverable: "A labeled ship dimension and nomenclature sheet.",
    assessmentCriteria: [
      "Principal dimensions are labeled correctly.",
      "Ship parts use accepted nautical terms.",
      "Operational importance is stated for each dimension."
    ],
    xp: 10,
    estimatedTime: "30 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Maritimo",
    subjectId: "pn-s1-transporte-maritimo",
    unit: "Equipo de carga/descarga",
    topic: "Equipo de carga, descarga, amarre y fondeo",
    taskId: "pn-tmo101-cargo-mooring-equipment-check",
    taskTitle: "Identify Cargo And Mooring Equipment",
    scenario: "The boatswain points to deck equipment before cargo operations and asks the cadet to identify its purpose.",
    instructions: [
      "Identify cargo handling equipment from the deck area.",
      "Identify mooring or anchoring equipment from the forecastle area.",
      "State one safety consideration for each equipment group."
    ],
    deliverable: "A deck equipment identification and safety note.",
    assessmentCriteria: [
      "Equipment names match their operational use.",
      "Cargo, mooring, and anchoring functions are not confused.",
      "Safety notes are practical and observable."
    ],
    xp: 10,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Maritimo",
    subjectId: "pn-s1-transporte-maritimo",
    unit: "Tanques de lastre, agua dulce y combustible",
    topic: "Tanques, tubos sonda y respiraderos",
    taskId: "pn-tmo101-tank-sounding-layout",
    taskTitle: "Trace Tank Sounding And Vent Arrangement",
    scenario: "Before a ballast discussion, the cadet must identify tank distribution and related sounding and vent arrangements.",
    instructions: [
      "List ballast, fresh water, and fuel tank categories.",
      "Identify the role of sounding pipes.",
      "Identify the role of tank vents."
    ],
    deliverable: "A tank arrangement note with sounding and vent functions.",
    assessmentCriteria: [
      "Tank categories are distinguished correctly.",
      "Sounding pipe purpose is accurate.",
      "Vent purpose is accurate and connected to safe operations."
    ],
    xp: 10,
    estimatedTime: "25 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Maritimo",
    subjectId: "pn-s1-transporte-maritimo",
    unit: "Lineas de Carga y Marca de calados",
    topic: "Lineas de carga, francobordo, desplazamiento y lectura de calados",
    taskId: "pn-tmo101-draft-mark-reading",
    taskTitle: "Read Draft Marks And Load Line Information",
    scenario: "At the quay, the officer asks the cadet to observe draft marks and explain the load line information visible on the hull.",
    instructions: [
      "Identify where draft marks are read.",
      "State the meaning of freeboard and load line.",
      "Record an example draft reading format."
    ],
    deliverable: "A draft mark and load line observation record.",
    assessmentCriteria: [
      "Draft mark location is identified correctly.",
      "Freeboard and load line are described accurately.",
      "Reading format is usable for a deck report."
    ],
    xp: 10,
    estimatedTime: "25 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Maritimo",
    subjectId: "pn-s1-transporte-maritimo",
    unit: "Esfuerzos en el buque",
    topic: "Quebranto, arrufo y esfuerzos del buque",
    taskId: "pn-tmo101-hull-stress-brief",
    taskTitle: "Brief Hull Stress Conditions",
    scenario: "During basic ship construction familiarization, the cadet must explain hogging and sagging risks in simple operational terms.",
    instructions: [
      "Define quebranto and arrufo in relation to hull stress.",
      "Identify one loading or sea condition that may contribute to each stress condition.",
      "State why deck officers monitor hull stress indicators."
    ],
    deliverable: "A hull stress familiarization brief.",
    assessmentCriteria: [
      "Quebranto and arrufo are distinguished correctly.",
      "Causes are connected to loading or sea conditions.",
      "Operational monitoring reason is clear."
    ],
    xp: 10,
    estimatedTime: "25 min",
    difficulty: "Standard"
  }
];

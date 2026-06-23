import type { AcademicProgramCode } from "./semesters";

export type AcademicSubject = {
  id: string;
  program: AcademicProgramCode;
  semesterId: string;
  title: string;
  officialArea: string;
  stcwAlignment: string;
  units: string[];
  topics: string[];
  tasks: string[];
  assessments: string[];
  xp: number;
  progress: number;
  status: "prototype" | "planned";
};

export const academicSubjects: AcademicSubject[] = [
  {
    id: "mn-s1-maritime-english-i",
    program: "MN",
    semesterId: "mn-semester-i",
    title: "Maritime English I",
    officialArea: "English / Maritime English",
    stcwAlignment: "STCW: Use English in written and oral form; engineering watch communication foundation.",
    units: ["Unit 1: Onboard introductions", "Unit 2: Personal information", "Unit 3: Departments and first duties"],
    topics: ["Verb To Be / Introductions", "Personal data onboard", "Ranks and departments", "Duty confirmation"],
    tasks: [
      "Report to the Chief Engineer",
      "Introduce Yourself Onboard",
      "Complete Cadet Personal Information",
      "Identify Your Department",
      "Confirm Your First Duty"
    ],
    assessments: ["Multiple choice", "Short writing", "Correct confirmation phrase"],
    xp: 250,
    progress: 20,
    status: "prototype"
  },
  {
    id: "mn-s1-mathematics-i",
    program: "MN",
    semesterId: "mn-semester-i",
    title: "Mathematics I",
    officialArea: "Basic sciences",
    stcwAlignment: "Supports engineering calculations, readings and technical problem solving.",
    units: ["Arithmetic review", "Algebraic operations", "Measurement systems"],
    topics: ["Fractions", "Equations", "Units and conversions"],
    tasks: [],
    assessments: ["Problem set", "Applied calculation quiz"],
    xp: 0,
    progress: 0,
    status: "planned"
  },
  {
    id: "mn-s1-technical-drawing",
    program: "MN",
    semesterId: "mn-semester-i",
    title: "Technical Drawing",
    officialArea: "Engineering fundamentals",
    stcwAlignment: "Supports interpretation of machinery diagrams and technical documentation.",
    units: ["Drawing standards", "Views and projections", "Basic symbols"],
    topics: ["Lines", "Scales", "Mechanical components"],
    tasks: [],
    assessments: ["Drawing interpretation", "Diagram labeling"],
    xp: 0,
    progress: 0,
    status: "planned"
  },
  {
    id: "mn-s1-basic-safety",
    program: "MN",
    semesterId: "mn-semester-i",
    title: "Basic Safety and Shipboard Life",
    officialArea: "Safety and induction",
    stcwAlignment: "STCW basic safety awareness, emergency response and personal safety foundation.",
    units: ["Shipboard organization", "PPE", "Emergency signals"],
    topics: ["Muster list", "Personal safety", "Reporting hazards"],
    tasks: [],
    assessments: ["Safety checklist", "Emergency signal quiz"],
    xp: 0,
    progress: 0,
    status: "planned"
  },
  {
    id: "pn-s1-maritime-english-i",
    program: "PN",
    semesterId: "pn-semester-i",
    title: "Maritime English I",
    officialArea: "English / Maritime English",
    stcwAlignment: "STCW: Use English in written and oral form; bridge communication foundation.",
    units: ["Introductions", "Shipboard roles", "Basic bridge phrases"],
    topics: ["Verb To Be / Introductions", "Ranks", "Simple confirmations"],
    tasks: [],
    assessments: ["Oral introduction", "Vocabulary quiz"],
    xp: 0,
    progress: 0,
    status: "planned"
  },
  {
    id: "pn-s1-nautical-science-i",
    program: "PN",
    semesterId: "pn-semester-i",
    title: "Nautical Science I",
    officialArea: "Deck operations",
    stcwAlignment: "STCW A-II/1 foundation for safe watchkeeping and shipboard orientation.",
    units: ["Ship parts", "Deck equipment", "Watch organization"],
    topics: ["Vessel layout", "Bridge team", "Lookout duties"],
    tasks: [],
    assessments: ["Equipment identification", "Watch routine quiz"],
    xp: 0,
    progress: 0,
    status: "planned"
  }
];

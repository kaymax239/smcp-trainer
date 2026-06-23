export type AcademicProgramCode = "PN" | "MN";

export type AcademicSemester = {
  id: string;
  program: AcademicProgramCode;
  label: string;
  title: string;
  focus: string;
  progress: number;
  xp: number;
};

export const academicPrograms: { code: AcademicProgramCode; title: string; description: string }[] = [
  {
    code: "PN",
    title: "PN",
    description: "Deck officer academic pathway for bridge, navigation, cargo, safety and maritime communication."
  },
  {
    code: "MN",
    title: "MN",
    description: "Engineering cadet academic pathway for machinery spaces, technical watch support and onboard communication."
  }
];

export const academicSemesters: AcademicSemester[] = [
  { id: "pn-semester-i", program: "PN", label: "Semester I", title: "Deck Cadet Foundation", focus: "Shipboard induction, safety, English and basic nautical science.", progress: 12, xp: 120 },
  { id: "pn-semester-iii", program: "PN", label: "Semester III", title: "Bridge Watchkeeping Foundation", focus: "Navigation, bridge equipment, COLREGS and watch routines.", progress: 0, xp: 0 },
  { id: "pn-semester-v", program: "PN", label: "Semester V", title: "Navigation Officer Development", focus: "Voyage planning, cargo communication and operational reporting.", progress: 0, xp: 0 },
  { id: "pn-semester-vii", program: "PN", label: "Semester VII", title: "Chief Officer Preparation", focus: "Leadership, emergencies, cargo operations and final simulator readiness.", progress: 0, xp: 0 },
  { id: "mn-semester-i", program: "MN", label: "Semester I", title: "Engine Cadet Foundation", focus: "Maritime English, machinery orientation, safety and cadet duties.", progress: 20, xp: 250 },
  { id: "mn-semester-iii", program: "MN", label: "Semester III", title: "Engine Watch Support", focus: "Machinery readings, maintenance language and supervised watch routines.", progress: 0, xp: 0 },
  { id: "mn-semester-v", program: "MN", label: "Semester V", title: "Operational Engineering", focus: "Auxiliary systems, pollution prevention and bridge-engine communication.", progress: 0, xp: 0 },
  { id: "mn-semester-vii", program: "MN", label: "Semester VII", title: "Engineering Officer Readiness", focus: "Emergency response, leadership and final engineering checkride.", progress: 0, xp: 0 }
];

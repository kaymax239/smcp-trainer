import { TaskOrderMissionPage, type TaskOrderMission } from "@/app/components/TaskOrderMissionPage";

const mission: TaskOrderMission = {
  title: "Report To The Watch Officer",
  briefing: "Operational task order for reporting to the watch officer at the start and end of a supervised engine-room duty period.",
  sourceProgram: "MN",
  sourceUnit: "Unidad 1: Uso del verbo to be",
  sourceTopic: "1.2. Formas de saludarse y despedirse de una persona.",
  operationalContext:
    "You arrive at the Engine Control Room for a supervised duty period. The watch officer must know who you are, why you are there, and when you have been released.",
  orders: [
    "Approach the watch officer before entering the duty area.",
    "State your name, rank, and assigned training purpose.",
    "Confirm that you are ready to follow the watch officer's instructions.",
    "Record the officer's dismissal at the end of the duty period.",
    "Close the interaction using professional watch courtesy."
  ],
  requiredInformation: ["Watch officer name or title", "Cadet name and rank", "Assigned training purpose", "Readiness confirmation", "Dismissal confirmation"],
  action: "Submit a watch reporting entry that proves the officer received your arrival report and released you from the duty area.",
  formTitle: "Watch Reporting Entry",
  fields: [
    { id: "officer", label: "Watch Officer Name Or Title" },
    { id: "cadetIdentity", label: "Cadet Name And Rank" },
    { id: "purpose", label: "Assigned Training Purpose" },
    { id: "readiness", label: "Readiness Confirmation" },
    { id: "dismissal", label: "Dismissal Confirmation" }
  ],
  performanceCheck:
    "Accepted only if the entry shows who received the report, why the cadet entered the duty area, that instructions were acknowledged, and that dismissal was confirmed.",
  taskComplete: "Watch officer accepts the reporting entry and the cadet is cleared from the duty area.",
  xp: 10,
  acceptedMessage: "Watch officer accepted your reporting entry. XP awarded for professional watch reporting and release confirmation."
};

export default function MissionOneTwoPage() {
  return <TaskOrderMissionPage mission={mission} />;
}

import { TaskOrderMissionPage, type TaskOrderMission } from "@/app/components/TaskOrderMissionPage";

const mission: TaskOrderMission = {
  title: "Watch Handover Courtesy Procedure",
  briefing: "Operational task order for greeting and farewell procedure during supervised watch handover.",
  sourceProgram: "MN",
  sourceUnit: "Unidad 1: Uso del verbo to be",
  sourceTopic: "1.2. Formas de saludarse y despedirse de una persona.",
  operationalContext:
    "You meet the officer on duty at the start of a training period and later leave the control room when dismissed.",
  orders: [
    "Report to the watch officer.",
    "Use appropriate greeting.",
    "Confirm purpose of arrival.",
    "Receive dismissal.",
    "Use appropriate farewell."
  ],
  requiredInformation: ["Watch officer addressed", "Arrival greeting", "Purpose of arrival", "Dismissal received", "Farewell used"],
  action: "Complete watch handover courtesy record.",
  formTitle: "Watch Courtesy Checklist",
  fields: [
    { id: "officer", label: "Watch Officer" },
    { id: "greeting", label: "Arrival Greeting" },
    { id: "purpose", label: "Purpose Of Arrival" },
    { id: "dismissal", label: "Dismissal Received" },
    { id: "farewell", label: "Farewell Used" }
  ],
  performanceCheck:
    "Can the cadet open and close the watch interaction with suitable maritime courtesy and clear professional language?",
  taskComplete: "Watch officer accepts the courtesy procedure.",
  xp: 10,
  acceptedMessage: "Watch officer accepted your greeting and farewell procedure."
};

export default function MissionOneTwoPage() {
  return <TaskOrderMissionPage mission={mission} />;
}

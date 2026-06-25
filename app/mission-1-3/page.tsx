import { TaskOrderMissionPage, type TaskOrderMission } from "@/app/components/TaskOrderMissionPage";

const mission: TaskOrderMission = {
  title: "Engine Room Familiarization Identification",
  briefing: "Operational task order for identifying basic engine room people, places, and objects before safety walkthrough.",
  sourceProgram: "MN",
  sourceUnit: "Unidad 1: Uso del verbo to be",
  sourceTopic: "1.3. Vocabulario relativo a la unidad.",
  operationalContext:
    "A supervisor points to basic engine room items and asks you to name them before a safety walkthrough begins.",
  orders: [
    "Enter familiarization area.",
    "Identify assigned basic equipment.",
    "Identify control room location.",
    "Confirm assigned station.",
    "Submit identification checklist."
  ],
  requiredInformation: ["Assigned equipment", "Equipment location", "Control room location", "Assigned station", "Supervisor confirmation"],
  action: "Complete engine room identification checklist.",
  formTitle: "Familiarization Identification Checklist",
  fields: [
    { id: "equipment", label: "Assigned Equipment" },
    { id: "equipmentLocation", label: "Equipment Location" },
    { id: "controlRoom", label: "Control Room Location" },
    { id: "station", label: "Assigned Station" },
    { id: "supervisor", label: "Supervisor Confirmation" }
  ],
  performanceCheck:
    "Can the cadet identify basic people, places, and objects accurately enough for the supervisor to continue the safety briefing?",
  taskComplete: "Supervisor accepts the identification checklist.",
  xp: 10,
  acceptedMessage: "Supervisor accepted your engine room identification checklist."
};

export default function MissionOneThreePage() {
  return <TaskOrderMissionPage mission={mission} />;
}

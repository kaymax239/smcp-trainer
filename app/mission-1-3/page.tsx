import { TaskOrderMissionPage, type TaskOrderMission } from "@/app/components/TaskOrderMissionPage";

const mission: TaskOrderMission = {
  title: "Verify Engine Room Familiarization Points",
  briefing: "Operational task order for confirming assigned engine-room locations and equipment before a supervised safety walkthrough.",
  sourceProgram: "MN",
  sourceUnit: "Unidad 1: Uso del verbo to be",
  sourceTopic: "1.3. Vocabulario relativo a la unidad.",
  operationalContext:
    "Before entering the machinery space, the supervisor checks whether you can identify the assigned station, equipment, and control-room location for the familiarization round.",
  orders: [
    "Report to the supervisor at the familiarization muster point.",
    "Identify the assigned equipment by name and location.",
    "Identify the Engine Control Room as the reporting point.",
    "Confirm the station where you must remain during the walkthrough.",
    "Submit the familiarization verification record."
  ],
  requiredInformation: ["Supervisor name or title", "Assigned equipment", "Equipment location", "Reporting point", "Assigned station"],
  action: "Complete a familiarization verification record that allows the supervisor to confirm you can locate the assigned machinery area before the walkthrough starts.",
  formTitle: "Familiarization Verification Record",
  fields: [
    { id: "supervisor", label: "Supervisor Name Or Title" },
    { id: "equipment", label: "Assigned Equipment Name" },
    { id: "equipmentLocation", label: "Equipment Location" },
    { id: "reportingPoint", label: "Reporting Point" },
    { id: "station", label: "Assigned Station" }
  ],
  performanceCheck:
    "Accepted only if the cadet identifies the assigned equipment, its location, the reporting point, and the station clearly enough for the supervisor to begin the safety walkthrough.",
  taskComplete: "Supervisor accepts the verification record and authorizes the cadet to begin the familiarization walkthrough.",
  xp: 10,
  acceptedMessage: "Supervisor accepted your familiarization verification record. XP awarded for accurate machinery-area identification."
};

export default function MissionOneThreePage() {
  return <TaskOrderMissionPage mission={mission} />;
}

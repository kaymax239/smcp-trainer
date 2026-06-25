import { TaskOrderMissionPage, type TaskOrderMission } from "@/app/components/TaskOrderMissionPage";

const mission: TaskOrderMission = {
  title: "Radio Name Confirmation Procedure",
  briefing: "Operational task order for confirming a crew member title and name by radio using phonetic spelling.",
  sourceProgram: "MN",
  sourceUnit: "Unidad 1: Uso del verbo to be",
  sourceTopic: "1.4. Usa el nombre y el titulo correctamente, aprende y practica el alfabeto convencional, fonetico y a deletrear.",
  operationalContext:
    "The bridge requests confirmation of a technician's full name and title over radio during a noisy watch period.",
  orders: [
    "Receive crew name request from bridge.",
    "State crew member title.",
    "Spell name using phonetic alphabet.",
    "Confirm message.",
    "Submit radio log entry."
  ],
  requiredInformation: ["Bridge request", "Crew member title", "Crew member name", "Phonetic spelling", "Message confirmation"],
  action: "Complete radio name confirmation log.",
  formTitle: "Radio Confirmation Log",
  fields: [
    { id: "request", label: "Bridge Request" },
    { id: "title", label: "Crew Member Title" },
    { id: "name", label: "Crew Member Name" },
    { id: "spelling", label: "Phonetic Spelling" },
    { id: "confirmation", label: "Message Confirmation" }
  ],
  performanceCheck:
    "Can the cadet state the correct title, spell the name with phonetic alphabet terms, and provide a message the bridge can record without confusion?",
  taskComplete: "Bridge confirms the radio log entry.",
  xp: 10,
  acceptedMessage: "Bridge accepted your radio name confirmation log."
};

export default function MissionOneFourPage() {
  return <TaskOrderMissionPage mission={mission} />;
}

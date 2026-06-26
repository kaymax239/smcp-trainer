import { TaskOrderMissionPage, type TaskOrderMission } from "@/app/components/TaskOrderMissionPage";

const mission: TaskOrderMission = {
  title: "Transmit Crew Identity By Radio",
  briefing: "Operational task order for transmitting a crew member title and name to the bridge using a clear phonetic spelling record.",
  sourceProgram: "MN",
  sourceUnit: "Unidad 1: Uso del verbo to be",
  sourceTopic: "1.4. Usa el nombre y el titulo correctamente, aprende y practica el alfabeto convencional, fonetico y a deletrear.",
  operationalContext:
    "During a noisy watch period, the bridge requests a crew member's title and full name for a log entry. The message must be clear enough to record without a repeat request.",
  orders: [
    "Receive the identity request from the bridge.",
    "State the crew member's title before the name.",
    "Transmit the full name using phonetic spelling for each letter that may be misunderstood.",
    "Confirm that the bridge copied the message correctly.",
    "Submit the radio identity log entry."
  ],
  requiredInformation: ["Bridge request", "Crew member title", "Crew member full name", "Phonetic spelling record", "Bridge readback confirmation"],
  action: "Complete a radio identity log proving the bridge received the correct title, name, spelling, and readback confirmation.",
  formTitle: "Radio Identity Log",
  fields: [
    { id: "request", label: "Bridge Identity Request" },
    { id: "title", label: "Crew Member Title" },
    { id: "name", label: "Crew Member Full Name" },
    { id: "spelling", label: "Phonetic Spelling Record" },
    { id: "confirmation", label: "Bridge Readback Confirmation" }
  ],
  performanceCheck:
    "Accepted only if the title, full name, phonetic spelling, and bridge readback are complete enough for the bridge to enter the identity without confusion.",
  taskComplete: "Bridge confirms the radio identity log entry and no repeat transmission is required.",
  xp: 10,
  acceptedMessage: "Bridge accepted your radio identity log. XP awarded for clear radio transmission and readback confirmation."
};

export default function MissionOneFourPage() {
  return <TaskOrderMissionPage mission={mission} />;
}

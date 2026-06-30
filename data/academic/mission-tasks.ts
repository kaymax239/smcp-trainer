import type { AcademicProgramCode } from "./semesters";

export type AcademicMissionTask = {
  career: AcademicProgramCode;
  semester: string;
  subjectCode: string;
  subjectName: string;
  subjectId: string;
  unit: string;
  topic: string;
  week?: number;
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
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ALG103",
    subjectName: "Álgebra",
    subjectId: "mn-s1-algebra",
    unit: "Álgebra Elemental",
    topic: "Expresiones algebraicas",
    week: 1,
    taskId: "mn-math101-fraction-lube-oil-calculation",
    taskTitle: "Calculate Lube Oil Top-Up Fraction",
    scenario: "During an engine-room round, the duty engineer asks the cadet to calculate the fraction of a lube oil tank that must be topped up before the next watch.",
    instructions: [
      "Read the reported tank capacity and current remaining quantity.",
      "Express the missing quantity as a fraction of total capacity.",
      "State whether the top-up request should be reported as less than half, half, or more than half of the tank."
    ],
    deliverable: "A short engine-room calculation note showing the fraction of lube oil required for top-up.",
    assessmentCriteria: [
      "Fraction is calculated from the correct total capacity.",
      "Result is simplified or explained clearly enough for an engineer to verify.",
      "Operational recommendation matches the calculated fraction."
    ],
    xp: 15,
    estimatedTime: "20 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ALG103",
    subjectName: "Álgebra",
    subjectId: "mn-s1-algebra",
    unit: "Ecuaciones, desigualdades y números complejos",
    topic: "Ecuaciones lineales y cuadráticas",
    week: 2,
    taskId: "mn-math101-equation-generator-load",
    taskTitle: "Solve Generator Load Equation",
    scenario: "The second engineer gives the cadet a simple load balance problem to estimate remaining generator capacity during engine-room watchkeeping.",
    instructions: [
      "Identify the known generator capacity and current load values.",
      "Set up an equation for remaining available load.",
      "Solve the equation and report whether an additional auxiliary load can be accepted."
    ],
    deliverable: "A generator load calculation with equation, result, and operational conclusion.",
    assessmentCriteria: [
      "Equation represents the engine-room load problem correctly.",
      "Calculation result is accurate.",
      "Conclusion connects the result to generator operation."
    ],
    xp: 20,
    estimatedTime: "25 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ALG103",
    subjectName: "Álgebra",
    subjectId: "mn-s1-algebra",
    unit: "Sistemas de Ecuaciones y desigualdades",
    topic: "Sistemas de ecuaciones lineales",
    week: 3,
    taskId: "mn-math101-unit-conversion-engine-room",
    taskTitle: "Convert Engine-Room Measurement Units",
    scenario: "A machinery log contains measurements in different units. The cadet must convert them before the watch engineer enters the technical report.",
    instructions: [
      "Select three engine-room measurements that require unit conversion.",
      "Apply the correct conversion factor for each measurement.",
      "Record the converted values with units and explain where each value is used onboard."
    ],
    deliverable: "A converted measurement log for engine-room technical reporting.",
    assessmentCriteria: [
      "Conversion factors are applied correctly.",
      "Converted values include the correct units.",
      "Each measurement is connected to a practical engine-room use."
    ],
    xp: 25,
    estimatedTime: "25 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ALG103",
    subjectName: "Álgebra",
    subjectId: "mn-s1-algebra",
    unit: "Álgebra Vectorial",
    topic: "Vectores y resolución de problemas con fuerza, velocidad y aceleración",
    week: 4,
    taskId: "mn-alg103-w04-pump-flow-balance",
    taskTitle: "Balance Two Pump Flow Rates",
    scenario: "In the engine room, two pumps feed a common service tank at different rates. The engineer asks the cadet to set up the relation between both flow rates and determine the combined fill time.",
    instructions: [
      "List the flow rate of each pump.",
      "Set up an algebraic relation for the combined flow into the tank.",
      "Solve for the time to fill a given tank volume with both pumps running.",
      "State the result with the correct unit for the engine-room log."
    ],
    deliverable: "A flow-balance calculation in English giving the combined fill time of the service tank, with the relation and working shown.",
    assessmentCriteria: [
      "Both flow rates are correctly represented.",
      "The combined-flow relation is set up correctly.",
      "The fill time is solved accurately with the correct unit.",
      "The result is clearly written for the engine-room log in English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "FIS104",
    subjectName: "Física",
    subjectId: "mn-s1-fisica",
    unit: "Mecánica",
    topic: "Sistemas Internacional e Inglés",
    week: 1,
    taskId: "mn-fis104-w01-pressure-unit-conversion",
    taskTitle: "Convert An Engine Oil Pressure Reading",
    scenario: "An engine-room gauge shows lube oil pressure in psi, but the technical report and the manual specify bar. The cadet must convert the reading correctly before logging it.",
    instructions: [
      "Identify the pressure value given in psi (Imperial).",
      "Apply the correct conversion factor to express it in bar (SI).",
      "State the converted value with the correct unit and sensible precision.",
      "Explain why using the manual's unit system matters for engine monitoring."
    ],
    deliverable: "A conversion note in English giving the lube oil pressure in bar, with the working shown and the reason the correct unit system matters.",
    assessmentCriteria: [
      "The psi-to-bar conversion is calculated correctly.",
      "The result carries the correct unit and sensible precision.",
      "The note is written in clear engine-room English.",
      "The explanation connects unit accuracy to safe engine monitoring."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "FIS104",
    subjectName: "Física",
    subjectId: "mn-s1-fisica",
    unit: "Trabajo",
    topic: "Trabajo, energía y potencia",
    week: 2,
    taskId: "mn-fis104-w02-pump-power",
    taskTitle: "Relate Work, Energy And Pump Power",
    scenario: "The engineer asks the cadet to explain how work, energy, and power relate in a pump that lifts fuel to a day tank, and what the power rating tells the crew.",
    instructions: [
      "Define work, energy, and power in the context of the pump's operation.",
      "Explain how the power rating relates to how fast the pump does its work.",
      "State what would happen to the time required if the pump's power were lower.",
      "Write the explanation in clear engine-room English."
    ],
    deliverable: "An explanation in English relating work, energy, and power for a fuel pump, and what its power rating means for the crew.",
    assessmentCriteria: [
      "Work, energy, and power are defined correctly.",
      "The relationship between power and rate of work is correct.",
      "The effect of lower power is correctly stated.",
      "The explanation is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "FIS104",
    subjectName: "Física",
    subjectId: "mn-s1-fisica",
    unit: "Estado físico de los cuerpos",
    topic: "Propiedades de la materia",
    week: 3,
    taskId: "mn-fis104-w03-thermal-expansion",
    taskTitle: "Explain Thermal Expansion In A Pipe System",
    scenario: "A hot fluid passes through an engine-room pipe system. The engineer asks the cadet to explain, using properties of matter, why the pipes expand and what is fitted to allow for it.",
    instructions: [
      "Explain what happens to the pipe material as its temperature rises.",
      "State why thermal expansion must be allowed for in a pipe system.",
      "Identify one fitting or design feature that absorbs the expansion.",
      "Report the explanation in clear engine-room English."
    ],
    deliverable: "An explanation in English of thermal expansion in an engine-room pipe system, why it must be allowed for, and one feature that absorbs it.",
    assessmentCriteria: [
      "The effect of temperature on the material is explained correctly.",
      "The need to allow for expansion is justified.",
      "The fitting/feature identified is relevant and correct.",
      "The explanation is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "FIS104",
    subjectName: "Física",
    subjectId: "mn-s1-fisica",
    unit: "Mecánica",
    topic: "Leyes de Newton",
    week: 4,
    taskId: "mn-fis104-w04-rotating-shaft-force",
    taskTitle: "Apply Newton's Laws To A Rotating Shaft",
    scenario: "The cadet observes a rotating propeller shaft. The engineer asks how Newton's laws explain the forces involved and why a sudden load change must be managed carefully.",
    instructions: [
      "Identify the forces acting on the rotating shaft.",
      "Apply Newton's laws to explain why the shaft resists sudden changes in motion.",
      "Explain why an abrupt load change stresses the machinery.",
      "Report your explanation in clear engine-room English."
    ],
    deliverable: "An explanation in English applying Newton's laws to a rotating shaft, why it resists sudden change, and why abrupt load changes stress the machinery.",
    assessmentCriteria: [
      "Forces on the shaft are correctly identified.",
      "Newton's laws are applied correctly.",
      "The reasoning about sudden load change is sound.",
      "The explanation is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ELE106",
    subjectName: "Electricidad",
    subjectId: "mn-s1-electricidad",
    unit: "Circuito eléctrico",
    topic: "Diferencia de potencial, corriente y resistencia",
    week: 1,
    taskId: "mn-ele106-w01-switchboard-circuit",
    taskTitle: "Read An Engine-Room Switchboard Circuit",
    scenario: "During an electrical round, the engineer points to a circuit on the engine-room switchboard and asks the cadet to identify the voltage, current, and resistance values and explain how they relate.",
    instructions: [
      "Identify which value is voltage, which is current, and which is resistance.",
      "State the unit of each quantity (volt, ampere, ohm).",
      "Explain how the three quantities relate in the circuit.",
      "State what happens to the current if the resistance increases."
    ],
    deliverable: "A circuit note in English identifying voltage, current, and resistance with correct units, and explaining their relationship in the switchboard circuit.",
    assessmentCriteria: [
      "Each quantity is correctly identified with its unit.",
      "The relationship between them is explained correctly.",
      "The effect of changing resistance is correct.",
      "Terminology is precise and in clear English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ELE106",
    subjectName: "Electricidad",
    subjectId: "mn-s1-electricidad",
    unit: "Redes eléctricas",
    topic: "Ley de Ohm y Leyes de Kirchhoff",
    week: 2,
    taskId: "mn-ele106-w02-ohm-law-motor",
    taskTitle: "Apply Ohm's Law To An Auxiliary Motor",
    scenario: "An auxiliary motor in the engine room has a known voltage and resistance. Before energizing it, the engineer asks the cadet to calculate the current it will draw using Ohm's law.",
    instructions: [
      "Identify the voltage and resistance of the auxiliary motor.",
      "Apply Ohm's law (I = V / R) to calculate the current drawn.",
      "State the result with the correct unit (ampere).",
      "State whether the current is within the circuit's rated limit and the safety reason this matters."
    ],
    deliverable: "An Ohm's law calculation note in English giving the motor's current draw, with working shown and a statement on whether it is within the rated limit.",
    assessmentCriteria: [
      "Ohm's law is applied correctly with the right values.",
      "The current is calculated accurately with the correct unit.",
      "The comparison against the rated limit is correct.",
      "The safety reasoning is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ELE106",
    subjectName: "Electricidad",
    subjectId: "mn-s1-electricidad",
    unit: "Conexiones eléctricas",
    topic: "Circuitos en serie, paralelo y serie/paralelo",
    week: 3,
    taskId: "mn-ele106-w03-series-parallel-engine",
    taskTitle: "Compare Series And Parallel In Engine Systems",
    scenario: "Engine-room equipment can be wired in series or parallel. The engineer asks the cadet to explain why critical systems are wired so that one failure does not shut down the rest.",
    instructions: [
      "Describe how current flows in series versus parallel circuits.",
      "Explain what happens to the other devices if one device fails, in each arrangement.",
      "State which arrangement is used for critical engine-room systems and why.",
      "Connect the choice to a safety or reliability reason on board."
    ],
    deliverable: "A comparison note in English explaining series versus parallel wiring in engine systems, the effect of one failure in each, and why the chosen arrangement is safer.",
    assessmentCriteria: [
      "Current behaviour in series and parallel is described correctly.",
      "The effect of a single failure in each is correct.",
      "The preferred arrangement is correctly identified and justified.",
      "The safety/reliability link is sound and in clear English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ELE106",
    subjectName: "Electricidad",
    subjectId: "mn-s1-electricidad",
    unit: "Redes eléctricas",
    topic: "Resistencia e intensidad de corriente en redes eléctricas",
    week: 4,
    taskId: "mn-ele106-w04-load-on-generator",
    taskTitle: "Analyse Electrical Load On The Generator",
    scenario: "Several devices draw power from the ship's generator. The engineer asks the cadet to work out the total current drawn and whether starting one more device would overload the generator.",
    instructions: [
      "Identify the current draw of each device on the generator.",
      "Determine the total current drawn by the combined load.",
      "Compare the total against the generator's rated capacity.",
      "State whether one more device can be safely started, and the consequence of overloading."
    ],
    deliverable: "A load analysis note in English giving the total current drawn from the generator, the comparison against rated capacity, and a clear conclusion on adding another device.",
    assessmentCriteria: [
      "Individual device currents are handled correctly.",
      "The total load current is determined correctly.",
      "The comparison against generator capacity is accurate.",
      "The overload conclusion and consequence are correct and in clear English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ING102",
    subjectName: "Inglés Marítimo I",
    subjectId: "mn-s1-maritime-english-i",
    unit: "Uso del verbo to be",
    topic: "Presentarse a sí mismo",
    week: 1,
    taskId: "mn-ing102-w01-report-to-chief",
    taskTitle: "Report Yourself To The Chief Engineer",
    scenario: "You arrive in the engine room for the first time and must report to the chief engineer. Using the verb 'to be', state who you are, your rank, and your assignment, clearly and professionally.",
    instructions: [
      "State your name, rank, and role using the verb 'to be'.",
      "Confirm you are assigned to the engine department.",
      "Keep the report short, clear, and professional for the chief engineer.",
      "Use the form expected in an engine-room watch handover."
    ],
    deliverable: "A short self-report in English, as if joining the engine department, correctly using 'to be' to state identity, rank, and assignment.",
    assessmentCriteria: [
      "The verb 'to be' is used correctly throughout.",
      "Identity, rank, and assignment are stated clearly.",
      "The register is professional and appropriate for the engine room.",
      "The report is concise and would be understood by the chief engineer."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ING102",
    subjectName: "Inglés Marítimo I",
    subjectId: "mn-s1-maritime-english-i",
    unit: "Uso del verbo to be",
    topic: "Alfabeto convencional y fonético",
    week: 2,
    taskId: "mn-ing102-w02-phonetic-equipment-code",
    taskTitle: "Pass An Equipment Code Using The Phonetic Alphabet",
    scenario: "You must pass an engine-room equipment reference code over the internal communication system. To avoid mistakes, you spell it using the standard phonetic alphabet.",
    instructions: [
      "Take the given equipment code and spell it using the phonetic alphabet.",
      "Write each letter with its correct phonetic word (e.g. P = Papa).",
      "Include any numbers in the correct spoken form.",
      "State why phonetic spelling prevents errors in engine-room communication."
    ],
    deliverable: "The equipment code spelled out in the phonetic alphabet in correct communication format, with a one-line reason phonetic spelling is used.",
    assessmentCriteria: [
      "Every letter is matched to the correct phonetic word.",
      "Numbers are handled correctly.",
      "The format is clear and usable over comms.",
      "The reason for phonetic spelling is correct and relevant."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ING102",
    subjectName: "Inglés Marítimo I",
    subjectId: "mn-s1-maritime-english-i",
    unit: "Presente Continuo",
    topic: "Hora cotidiana y marítima",
    week: 3,
    taskId: "mn-ing102-w03-engine-status-report",
    taskTitle: "Give An Engine Status Report In Present Continuous",
    scenario: "The chief engineer asks for a routine report of what the machinery is doing now. Using the present continuous, state the current status of the main engine and auxiliaries, with the time in 24-hour format.",
    instructions: [
      "Describe what the machinery is doing now using the present continuous (e.g. 'The main engine is running...').",
      "State the current status of one auxiliary system.",
      "Give the time using the 24-hour maritime format (e.g. 0815).",
      "Keep the report in the form expected during an engine-room watch."
    ],
    deliverable: "A routine engine status report in English using the present continuous, the status of main and auxiliary machinery, and the correct 24-hour time.",
    assessmentCriteria: [
      "The present continuous is formed and used correctly.",
      "Machinery status is stated clearly.",
      "The 24-hour time format is used correctly.",
      "The report reads as a real watch report, not a grammar exercise."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ING102",
    subjectName: "Inglés Marítimo I",
    subjectId: "mn-s1-maritime-english-i",
    unit: "Auxiliar de modo can y can't",
    topic: "Necesidad, obligación y preferencias",
    week: 4,
    taskId: "mn-ing102-w04-can-cannot-machinery",
    taskTitle: "Report Machinery Readiness Using Can / Cannot",
    scenario: "Before departure, the chief engineer asks you to report which machinery is ready and which is not. Using 'can' and 'cannot', state clearly what the engine room is and is not able to do.",
    instructions: [
      "List the machinery or system you are reporting on.",
      "Use 'can' to state what is ready or able to operate.",
      "Use 'cannot' to state what is not ready, and briefly why.",
      "Keep the report clear enough for the chief engineer to act on before departure."
    ],
    deliverable: "A readiness report in English using 'can' and 'cannot' to state clearly what machinery is and is not ready before departure, with brief reasons.",
    assessmentCriteria: [
      "'Can' and 'cannot' are used correctly to express ability.",
      "Ready and not-ready items are clearly distinguished.",
      "Reasons for unavailability are brief and relevant.",
      "The report is actionable and in clear professional English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "DII105",
    subjectName: "Dibujo de Ingeniería",
    subjectId: "mn-s1-dibujo-ingenieria",
    unit: "Introducción",
    topic: "Tipos de líneas",
    week: 1,
    taskId: "mn-dii105-w01-line-types-machinery-plan",
    taskTitle: "Read The Line Types On A Machinery Plan",
    scenario: "The engineer hands the cadet a section of a machinery arrangement drawing and asks what the different line types mean before the cadet can interpret it correctly.",
    instructions: [
      "Identify three different line types used on the machinery drawing.",
      "State what each line type represents on a technical drawing.",
      "Explain why distinguishing line types matters when reading a machinery plan.",
      "Write your answer in clear English using correct drawing terminology."
    ],
    deliverable: "A short note in English identifying three line types on a machinery plan, what each represents, and why distinguishing them matters.",
    assessmentCriteria: [
      "Line types are correctly identified.",
      "The meaning of each is accurate.",
      "The reasoning about reading plans is sound.",
      "Drawing terminology is correct and in clear English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "DII105",
    subjectName: "Dibujo de Ingeniería",
    subjectId: "mn-s1-dibujo-ingenieria",
    unit: "Escalas y acotaciones",
    topic: "Escalas y acotaciones",
    week: 2,
    taskId: "mn-dii105-w02-scale-component",
    taskTitle: "Use Scale To Find A Component Dimension",
    scenario: "A machinery component drawing is drawn to a stated scale. The engineer asks the cadet to use the scale to work out the real size of a part from the measurement on the drawing.",
    instructions: [
      "Identify the scale stated on the drawing.",
      "Read the dimension given on the drawing.",
      "Apply the scale to calculate the real dimension of the component.",
      "State the result with the correct unit and explain why scale accuracy matters for spares."
    ],
    deliverable: "A scale calculation note in English giving the real component dimension from the drawing, with the working shown and the correct unit.",
    assessmentCriteria: [
      "The scale is read and applied correctly.",
      "The real dimension is calculated accurately.",
      "The result carries the correct unit.",
      "The importance of scale accuracy is explained in clear English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "DII105",
    subjectName: "Dibujo de Ingeniería",
    subjectId: "mn-s1-dibujo-ingenieria",
    unit: "Simbología",
    topic: "Simbología marítima, topográfica y eléctrica",
    week: 3,
    taskId: "mn-dii105-w03-symbols-piping-diagram",
    taskTitle: "Interpret Symbols On A Piping Diagram",
    scenario: "Before working on a system, the cadet must interpret the standard symbols on its piping or electrical diagram. The engineer asks the cadet to identify a set of symbols and explain what each represents.",
    instructions: [
      "Identify three standard symbols on a piping or electrical diagram.",
      "State what each symbol represents (e.g. valve, pump, motor).",
      "Explain why standardized symbols matter for crews of different nationalities.",
      "Report your interpretation in clear English."
    ],
    deliverable: "A symbol interpretation note in English identifying three diagram symbols, what each represents, and why standard symbols matter on board.",
    assessmentCriteria: [
      "Symbols are correctly identified.",
      "The meaning of each is accurate.",
      "The reasoning about standardization is sound.",
      "Terminology is correct and clearly written in English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "DII105",
    subjectName: "Dibujo de Ingeniería",
    subjectId: "mn-s1-dibujo-ingenieria",
    unit: "Tipos de plano",
    topic: "Planos cartográficos, cartas terrestres y cartas marinas",
    week: 4,
    taskId: "mn-dii105-w04-system-schematic-reading",
    taskTitle: "Distinguish A System Schematic From A Layout Plan",
    scenario: "The engineer shows the cadet several drawings and asks how a system schematic differs from a physical layout plan, and what each is used for in the engine room.",
    instructions: [
      "State two features that distinguish a system schematic from a physical layout drawing.",
      "Identify what information a schematic gives that a layout does not.",
      "Explain why correct interpretation of each is essential for maintenance.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English distinguishing a system schematic from a layout plan, what each provides, and why correct reading matters for maintenance.",
    assessmentCriteria: [
      "The distinguishing features are correct.",
      "The information each drawing provides is accurate.",
      "The maintenance reasoning is sound.",
      "The answer is clear and uses correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "PMR107",
    subjectName: "Prácticas Marineras I",
    subjectId: "mn-s1-practicas-marineras-i",
    unit: "Bote salvavidas",
    topic: "Uso correcto del chaleco salvavidas y aro salvavidas",
    week: 1,
    taskId: "mn-pmr107-w01-lifesaving-appliances",
    taskTitle: "Identify And Explain Personal Life-Saving Appliances",
    scenario: "During a safety familiarization, the officer points to a lifejacket and a lifebuoy and asks the cadet to identify each, explain its correct use, and state when it is used. Survival applies to all crew, engine and deck alike.",
    instructions: [
      "Identify the lifejacket and the lifebuoy by their correct English names.",
      "Explain the correct way to don and secure a lifejacket.",
      "Explain how and when a lifebuoy is used in a man-overboard situation.",
      "State one check that confirms each appliance is ready for use."
    ],
    deliverable: "A short report in English identifying the lifejacket and lifebuoy, their correct use, and a readiness check for each.",
    assessmentCriteria: [
      "Both appliances are correctly named in English.",
      "Correct use of each is accurately described.",
      "The man-overboard use of the lifebuoy is correct.",
      "Readiness checks are relevant and clearly stated."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "PMR107",
    subjectName: "Prácticas Marineras I",
    subjectId: "mn-s1-practicas-marineras-i",
    unit: "Bote salvavidas",
    topic: "Tipos, nomenclatura y accesorios de botes salvavidas",
    week: 2,
    taskId: "mn-pmr107-w02-lifeboat-nomenclature",
    taskTitle: "Label Lifeboat Parts And Equipment",
    scenario: "Before a survival craft drill, the officer asks the cadet to identify the main parts of the lifeboat and its required equipment using correct maritime English nomenclature.",
    instructions: [
      "Identify three main structural parts of a lifeboat by their correct English names.",
      "List three items of equipment that a lifeboat must carry.",
      "State the purpose of each item you listed.",
      "Write the identification clearly, as it would appear on a survival craft inventory."
    ],
    deliverable: "A lifeboat identification list in English naming three structural parts and three equipment items with their purpose.",
    assessmentCriteria: [
      "Structural parts are named correctly in English.",
      "Equipment items are valid and correctly named.",
      "The purpose of each item is accurate.",
      "Nomenclature is precise and professional."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "PMR107",
    subjectName: "Prácticas Marineras I",
    subjectId: "mn-s1-practicas-marineras-i",
    unit: "Cabuyería",
    topic: "Conceptos, materiales y tipos de cabos",
    week: 3,
    taskId: "mn-pmr107-w03-ropes-and-knots",
    taskTitle: "Select The Right Rope And Knot For A Task",
    scenario: "The bosun gives the cadet a deck task and asks which type of rope and which knot are appropriate, explaining the choice using correct seamanship terminology. Engine cadets also stand by for mooring stations.",
    instructions: [
      "Describe two types of rope (by material or construction) used on board.",
      "State one advantage of each rope type for a specific use.",
      "Name a knot or hitch appropriate for a given securing task and explain why.",
      "Report your selection in clear maritime English."
    ],
    deliverable: "A seamanship note in English describing two rope types, an advantage of each, and an appropriate knot for a securing task with justification.",
    assessmentCriteria: [
      "Rope types and their properties are correct.",
      "The advantage stated matches the use.",
      "The knot chosen is appropriate for the task.",
      "Seamanship terminology is correct and in clear English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "PMR107",
    subjectName: "Prácticas Marineras I",
    subjectId: "mn-s1-practicas-marineras-i",
    unit: "Cabos de amarre",
    topic: "Distribución de cabos de amarre y boza",
    week: 4,
    taskId: "mn-pmr107-w04-mooring-line-layout",
    taskTitle: "Explain A Standard Mooring Line Layout",
    scenario: "The vessel is coming alongside. The officer asks the cadet to explain the standard arrangement of mooring lines (head lines, breast lines, springs, stern lines) and what each one controls.",
    instructions: [
      "Name the main mooring lines used to secure a vessel alongside.",
      "State what movement each line controls (fore-aft, off-berth).",
      "Explain the role of the spring lines specifically.",
      "Report the layout clearly, as you would brief the mooring team in English."
    ],
    deliverable: "A mooring layout brief in English naming the main mooring lines, what each controls, and the specific role of the springs.",
    assessmentCriteria: [
      "Mooring lines are correctly named.",
      "The movement each line controls is correct.",
      "The role of the spring lines is accurately explained.",
      "The brief is clear and usable by a mooring team, in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Marítimo",
    subjectId: "mn-s1-transporte-maritimo",
    unit: "Transporte Marítimo",
    topic: "Tipos de buque y sus particularidades",
    week: 1,
    taskId: "mn-tmo101-w01-ship-types-machinery",
    taskTitle: "Match Ship Types To Their Machinery Needs",
    scenario: "The chief engineer explains that different ship types carry different machinery. The cadet is asked to connect three ship types to the kind of propulsion or auxiliary plant they typically need.",
    instructions: [
      "Name three different ship types (e.g. tanker, container, bulk carrier).",
      "For each, state one machinery or propulsion characteristic it typically requires.",
      "Explain briefly why the cargo or service drives that machinery choice.",
      "Write the answer in clear engine-room English."
    ],
    deliverable: "A note in English matching three ship types to a machinery characteristic each requires, with brief reasoning.",
    assessmentCriteria: [
      "Ship types are valid and correctly named.",
      "The machinery characteristic for each is accurate.",
      "The reasoning linking service to machinery is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Marítimo",
    subjectId: "mn-s1-transporte-maritimo",
    unit: "Desarrollo de la propulsión Naval",
    topic: "Propulsión naval",
    week: 2,
    taskId: "mn-tmo101-w02-propulsion-development",
    taskTitle: "Trace The Development Of Naval Propulsion",
    scenario: "The chief engineer asks the cadet to outline how ship propulsion developed, and why the modern diesel engine became dominant in merchant shipping.",
    instructions: [
      "Outline the main stages of propulsion development (sail, steam, diesel).",
      "State one advantage that made the diesel engine dominant in merchant ships.",
      "Identify one role the engine department plays in maintaining propulsion.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A short account in English of how naval propulsion developed, why diesel became dominant, and the engine department's role in propulsion.",
    assessmentCriteria: [
      "The propulsion stages are correct and in order.",
      "The advantage of diesel is accurately stated.",
      "The engine department role is relevant.",
      "The account is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Marítimo",
    subjectId: "mn-s1-transporte-maritimo",
    unit: "Tanques de lastre, agua dulce y combustible",
    topic: "Tanques, tubos sonda y respiraderos",
    week: 3,
    taskId: "mn-tmo101-w03-tanks-sounding",
    taskTitle: "Explain Tanks, Sounding Pipes And Vents",
    scenario: "The engineer asks the cadet to explain the purpose of fuel and ballast tanks and how sounding pipes and air vents allow them to be monitored safely.",
    instructions: [
      "State the purpose of a fuel tank and a ballast tank.",
      "Explain what a sounding pipe is used for.",
      "Explain why air vents are required on tanks.",
      "Report your explanation in clear engine-room English."
    ],
    deliverable: "An explanation in English of the purpose of fuel and ballast tanks, the function of sounding pipes, and why air vents are required.",
    assessmentCriteria: [
      "Tank purposes are correctly stated.",
      "The function of sounding pipes is accurate.",
      "The reason for air vents is correct.",
      "The explanation is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Marítimo",
    subjectId: "mn-s1-transporte-maritimo",
    unit: "Esfuerzos en el buque",
    topic: "Quebranto, arrufo y esfuerzos del buque",
    week: 4,
    taskId: "mn-tmo101-w04-hull-stresses",
    taskTitle: "Explain Hogging And Sagging Stresses",
    scenario: "The engineer explains that the hull experiences stresses that affect machinery alignment. The cadet is asked to explain hogging and sagging and why they matter to the engine department.",
    instructions: [
      "Define hogging and sagging in a ship's hull.",
      "State what loading or wave condition causes each.",
      "Explain why hull stresses can affect shaft alignment and machinery.",
      "Report your explanation in clear engine-room English."
    ],
    deliverable: "An explanation in English of hogging and sagging, their causes, and why hull stresses matter for machinery and shaft alignment.",
    assessmentCriteria: [
      "Hogging and sagging are correctly defined.",
      "The cause of each is accurate.",
      "The link to shaft alignment/machinery is sound.",
      "The explanation is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0011",
    subjectName: "Educación Física I",
    subjectId: "mn-s1-educacion-fisica-i",
    unit: "Condición física",
    topic: "Fuerza muscular, resistencia cardiorrespiratoria y flexibilidad",
    week: 1,
    taskId: "mn-c0011-w01-physical-demands-engine",
    taskTitle: "Identify The Physical Demands Of Shipboard Duties",
    scenario: "A new cadet must understand why physical fitness is an operational requirement at sea, not just a sport. The training officer asks you to connect specific shipboard tasks to the physical capacities they demand.",
    instructions: [
      "List three physical shipboard duties (e.g. climbing ladders, lifting stores, working in the engine room).",
      "For each duty, state which physical capacity it requires: muscular strength, cardiorespiratory endurance, or flexibility.",
      "Explain why a lack of that capacity would be an operational and safety risk.",
      "Write the report in clear English using correct fitness and shipboard terminology."
    ],
    deliverable: "A short report in English linking three shipboard duties to the physical capacities they require, and the safety risk if the crew member lacks them.",
    assessmentCriteria: [
      "Each duty is matched to the correct physical capacity.",
      "The operational/safety reasoning is sound.",
      "Fitness terminology is used correctly.",
      "The report is clear and professional in English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0011",
    subjectName: "Educación Física I",
    subjectId: "mn-s1-educacion-fisica-i",
    unit: "Percepción y coordinación motriz",
    topic: "Coordinación motriz, equilibrio y lateralidad",
    week: 2,
    taskId: "mn-c0011-w02-balance-moving-deck",
    taskTitle: "Explain Balance And Coordination On A Moving Deck",
    scenario: "A vessel at sea is constantly moving. The officer asks you to explain why balance and coordination are critical when working on a moving deck or in the engine room, and how a crew member maintains safe footing.",
    instructions: [
      "Explain how a vessel's motion (rolling, pitching) affects balance on board.",
      "Describe two techniques a crew member uses to keep balance and coordination while working.",
      "Identify one task where poor balance would create a fall or injury risk.",
      "Report your explanation in clear maritime English."
    ],
    deliverable: "An explanation in English of why balance and coordination matter on a moving vessel, two techniques to maintain footing, and one task where poor balance is dangerous.",
    assessmentCriteria: [
      "The effect of vessel motion on balance is explained correctly.",
      "The two techniques are practical and relevant.",
      "The risk task is appropriate and clearly justified.",
      "The explanation is clear and uses correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0011",
    subjectName: "Educación Física I",
    subjectId: "mn-s1-educacion-fisica-i",
    unit: "Natación",
    topic: "Técnica, flotación, nado libre, nado en grupo y sobrevivencia",
    week: 3,
    taskId: "mn-c0011-w03-sea-survival-floating",
    taskTitle: "Describe Sea Survival Floating Technique",
    scenario: "Survival in the water is a core seafarer competency for all crew. After a man-overboard or abandon-ship situation, staying afloat and conserving energy can save a life. The instructor asks you to describe the correct survival approach.",
    instructions: [
      "Describe a technique used to stay afloat while conserving energy in the water.",
      "Explain why conserving energy and body heat matters during survival at sea.",
      "State why staying in a group improves survival chances.",
      "Report the procedure in clear English suitable for a safety briefing."
    ],
    deliverable: "A survival floating brief in English describing how to stay afloat and conserve energy, why energy/heat conservation matters, and the benefit of staying in a group.",
    assessmentCriteria: [
      "The floating/survival technique is described correctly.",
      "Energy and heat conservation reasoning is sound.",
      "The group-survival benefit is correctly explained.",
      "The brief is clear and appropriate for safety use, in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0011",
    subjectName: "Educación Física I",
    subjectId: "mn-s1-educacion-fisica-i",
    unit: "Concentración",
    topic: "Juegos de concentración",
    week: 4,
    taskId: "mn-c0011-w04-focus-on-watch",
    taskTitle: "Connect Concentration To Engine Watch Safety",
    scenario: "An engine-room watch can last hours and demands sustained attention to gauges and alarms. The officer asks you to explain why concentration is a trainable capacity and how fatigue affects it on watch.",
    instructions: [
      "Explain why sustained concentration is essential during an engine watch.",
      "Describe how fatigue degrades concentration and reaction time.",
      "State one habit or technique that helps maintain focus during a long watch.",
      "Report your explanation in clear maritime English."
    ],
    deliverable: "An explanation in English of why concentration matters on an engine watch, how fatigue affects it, and one technique to sustain focus during a long watch.",
    assessmentCriteria: [
      "The importance of concentration on watch is correctly explained.",
      "The effect of fatigue is accurately described.",
      "The focus technique is practical and relevant.",
      "The explanation is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0099",
    subjectName: "Estrategias de Aprendizaje",
    subjectId: "mn-s1-estrategias-aprendizaje",
    unit: "Manejo de información",
    topic: "Resumen, síntesis y la pregunta",
    week: 1,
    taskId: "mn-c0099-w01-summarise-procedure",
    taskTitle: "Summarise A Shipboard Procedure",
    scenario: "A seafarer must absorb large amounts of technical information quickly. The training officer gives the cadet a shipboard procedure and asks for a clear, accurate summary that keeps only what matters for safe action.",
    instructions: [
      "Read the given shipboard procedure.",
      "Produce a concise summary that keeps the essential steps and removes filler.",
      "Ensure no safety-critical step is lost in the summary.",
      "Write the summary in clear English a watch team could follow."
    ],
    deliverable: "A concise summary in English of a shipboard procedure that preserves every safety-critical step while removing non-essential detail.",
    assessmentCriteria: [
      "The summary keeps all essential and safety-critical steps.",
      "Non-essential detail is correctly removed.",
      "The meaning of the original procedure is preserved.",
      "The summary is clear and usable in English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0099",
    subjectName: "Estrategias de Aprendizaje",
    subjectId: "mn-s1-estrategias-aprendizaje",
    unit: "Presentación gráfica de la información",
    topic: "Organizadores gráficos, diagramas, mapas y esquemas",
    week: 2,
    taskId: "mn-c0099-w02-graphic-organiser-system",
    taskTitle: "Map A Shipboard System With A Graphic Organiser",
    scenario: "Complex shipboard systems are easier to learn as a diagram than as text. The officer asks the cadet to turn a written description of a system into a graphic organiser.",
    instructions: [
      "Take a written description of a simple shipboard system or process.",
      "Choose a suitable graphic organiser (flowchart, mind map, or diagram).",
      "Represent the system's parts and their relationships clearly.",
      "Explain in English how the organiser makes the system easier to learn."
    ],
    deliverable: "A described graphic organiser (in text/sketch form) of a shipboard system, plus an explanation in English of how it aids learning.",
    assessmentCriteria: [
      "The organiser represents the system accurately.",
      "Relationships between parts are clear.",
      "The choice of organiser fits the content.",
      "The explanation is sound and in clear English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0099",
    subjectName: "Estrategias de Aprendizaje",
    subjectId: "mn-s1-estrategias-aprendizaje",
    unit: "Técnicas de estudio",
    topic: "Técnica de los seis pasos",
    week: 3,
    taskId: "mn-c0099-w03-six-step-study",
    taskTitle: "Apply A Study Technique To Learn A Convention",
    scenario: "An officer must master new regulations throughout their career. The cadet is asked to apply a structured study technique to learn a piece of maritime regulation effectively.",
    instructions: [
      "Choose a short piece of maritime regulation or safety content to study.",
      "Apply a structured study technique (such as a six-step method) to learn it.",
      "Describe each step you took and what it produced.",
      "Explain in English why a structured method beats simple re-reading."
    ],
    deliverable: "A description in English of how a structured study technique was applied to learn a maritime regulation, step by step, with the reasoning for using it.",
    assessmentCriteria: [
      "The study technique is applied correctly step by step.",
      "Each step produces a meaningful result.",
      "The content chosen is appropriate and maritime-relevant.",
      "The reasoning is sound and clearly written in English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0099",
    subjectName: "Estrategias de Aprendizaje",
    subjectId: "mn-s1-estrategias-aprendizaje",
    unit: "Condiciones básicas para el estudio",
    topic: "Atribuciones, motivación, atención y área de estudio",
    week: 4,
    taskId: "mn-c0099-w04-study-conditions-ship",
    taskTitle: "Plan Effective Study Conditions On Board",
    scenario: "Studying at sea is hard: noise, fatigue, watch schedules. The officer asks the cadet to plan realistic conditions and habits that make study effective despite shipboard life.",
    instructions: [
      "Identify two obstacles to studying effectively on board.",
      "Propose a practical habit or condition to overcome each obstacle.",
      "Explain how attention and motivation are protected by these choices.",
      "Write the plan in clear English."
    ],
    deliverable: "A short study plan in English identifying two shipboard study obstacles and a practical solution for each, with reasoning about attention and motivation.",
    assessmentCriteria: [
      "The obstacles are realistic for shipboard life.",
      "The solutions are practical and relevant.",
      "The reasoning about attention/motivation is sound.",
      "The plan is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0100",
    subjectName: "Expresión Oral y Escrita",
    subjectId: "mn-s1-expresion-oral-escrita",
    unit: "Proceso de comunicación",
    topic: "Proceso de la comunicación",
    week: 1,
    taskId: "mn-c0100-w01-communication-breakdown",
    taskTitle: "Analyse A Communication Breakdown On Board",
    scenario: "Many accidents at sea begin with a message that was sent but not understood. The officer asks the cadet to analyse a shipboard communication using the basic communication process and find where it could fail.",
    instructions: [
      "Identify the sender, message, channel, and receiver in a given shipboard communication.",
      "Point out one stage where the message could be misunderstood.",
      "Explain the consequence if that breakdown happened during an operation.",
      "Suggest how to prevent the breakdown, written in clear English."
    ],
    deliverable: "An analysis in English of a shipboard communication identifying its parts, a possible breakdown point, the operational consequence, and a prevention measure.",
    assessmentCriteria: [
      "The communication parts are correctly identified.",
      "The breakdown point is plausible and well explained.",
      "The consequence is operationally realistic.",
      "The prevention measure is sound and clearly written in English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0100",
    subjectName: "Expresión Oral y Escrita",
    subjectId: "mn-s1-expresion-oral-escrita",
    unit: "Comunicación Escrita",
    topic: "Ideas principales y secundarias en textos",
    week: 2,
    taskId: "mn-c0100-w02-clear-written-report",
    taskTitle: "Write A Clear Incident Report",
    scenario: "After a minor incident in the engine room, the cadet must write a report. The officer stresses that a good report puts the main facts first and keeps secondary detail in its place.",
    instructions: [
      "Write a short report of a simple engine-room or deck incident.",
      "State the main fact (what happened) clearly at the start.",
      "Place supporting/secondary details after the main fact, in order.",
      "Keep the language precise and unambiguous, in clear English."
    ],
    deliverable: "A short incident report in English that leads with the main fact and orders secondary details clearly, with precise and unambiguous language.",
    assessmentCriteria: [
      "The main fact is stated clearly and first.",
      "Secondary details are correctly subordinated and ordered.",
      "The language is precise and unambiguous.",
      "The report is professional and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0100",
    subjectName: "Expresión Oral y Escrita",
    subjectId: "mn-s1-expresion-oral-escrita",
    unit: "Comunicación Oral",
    topic: "Comunicación verbal y no verbal",
    week: 3,
    taskId: "mn-c0100-w03-verbal-nonverbal-order",
    taskTitle: "Give A Clear Verbal Order With Confirmation",
    scenario: "In the engine room, an order must be given, heard, and confirmed over machinery noise. The officer asks the cadet to deliver a verbal order and explain how clarity and readback prevent mistakes.",
    instructions: [
      "Give a clear verbal order for a simple shipboard action.",
      "Explain how tone and delivery affect whether it is understood over noise.",
      "Describe the readback/confirmation that closes the communication loop.",
      "Report the exchange in clear English."
    ],
    deliverable: "A scripted verbal order in English with the confirmation/readback, plus an explanation of how delivery and confirmation prevent mistakes.",
    assessmentCriteria: [
      "The order is clear and unambiguous.",
      "The role of tone/delivery is explained correctly.",
      "The readback closes the communication loop properly.",
      "The exchange is realistic and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0100",
    subjectName: "Expresión Oral y Escrita",
    subjectId: "mn-s1-expresion-oral-escrita",
    unit: "Comunicación Oral",
    topic: "Dicción, fluidez y exposición oral",
    week: 4,
    taskId: "mn-c0100-w04-safety-briefing-delivery",
    taskTitle: "Deliver A Short Safety Briefing",
    scenario: "The cadet must deliver a short safety briefing to the crew. Clear diction and fluent, ordered delivery determine whether the crew actually retains the safety message.",
    instructions: [
      "Prepare a short safety briefing on a single topic.",
      "Organise it with a clear opening, key points, and a close.",
      "Note where diction and pace matter most for the message to land.",
      "Write the briefing as it would be delivered, in clear English."
    ],
    deliverable: "A short safety briefing in English with a clear structure (opening, key points, close), noting where diction and pace are critical for the crew to retain it.",
    assessmentCriteria: [
      "The briefing has a clear, logical structure.",
      "The key safety points are well chosen.",
      "The notes on diction/pace are relevant.",
      "The briefing is clear, professional, and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "ALG103",
    subjectName: "Algebra",
    subjectId: "pn-s1-algebra",
    unit: "Algebra Elemental",
    topic: "Expresiones algebraicas",
    taskId: "pn-alg-stowage-expression-check",
    taskTitle: "Build A Cargo Stowage Expression",
    scenario: "The chief officer asks the cadet to express available cargo hold space after planned stowage allowances are deducted.",
    instructions: [
      "Identify the total cargo hold capacity and the reserved safety allowance.",
      "Write an algebraic expression for remaining usable stowage capacity.",
      "Explain how the expression supports cargo planning before loading."
    ],
    deliverable: "A cargo stowage expression with the variables defined and the operational meaning stated.",
    assessmentCriteria: [
      "Expression uses the correct capacity and allowance variables.",
      "Variables are defined in cargo-operation terms.",
      "Operational explanation connects the expression to safe stowage planning."
    ],
    xp: 10,
    estimatedTime: "20 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "ALG103",
    subjectName: "Algebra",
    subjectId: "pn-s1-algebra",
    unit: "Ecuaciones, desigualdades y numeros complejos",
    topic: "Ecuaciones lineales y cuadraticas",
    taskId: "pn-alg-cargo-unit-equation",
    taskTitle: "Solve A Cargo Unit Conversion Equation",
    scenario: "A cargo manifest gives weight in mixed units. The cadet must solve the conversion equation before reporting the loading figure to the deck officer.",
    instructions: [
      "Identify the manifest value and the required reporting unit.",
      "Set up a linear equation for the unit conversion.",
      "Solve the equation and state the converted cargo weight for the loading report."
    ],
    deliverable: "A solved cargo conversion equation with the final loading value and unit.",
    assessmentCriteria: [
      "Equation represents the cargo unit conversion correctly.",
      "Converted value is calculated accurately.",
      "Final answer includes the correct unit for deck reporting."
    ],
    xp: 10,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "ALG103",
    subjectName: "Algebra",
    subjectId: "pn-s1-algebra",
    unit: "Sistemas de Ecuaciones y desigualdades",
    topic: "Sistemas de ecuaciones lineales",
    taskId: "pn-alg-fuel-stability-ratio",
    taskTitle: "Calculate Fuel Distribution Ratio",
    scenario: "Before departure, the officer asks the cadet to compare fuel distribution between tanks and identify whether the planned ratio supports basic vessel balance.",
    instructions: [
      "List the planned fuel quantities for two tanks.",
      "Set up a simple ratio or two-variable relation between the tanks.",
      "Report whether the distribution is balanced enough for the officer to review."
    ],
    deliverable: "A fuel distribution ratio note with the calculation and a basic stability observation.",
    assessmentCriteria: [
      "Fuel quantities are placed in the correct ratio or relation.",
      "Calculation is clear and verifiable.",
      "Observation connects fuel distribution to basic vessel balance."
    ],
    xp: 10,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "FIS104",
    subjectName: "Física",
    subjectId: "pn-s1-fisica",
    unit: "Mecánica",
    topic: "Sistemas Internacional e Inglés",
    week: 1,
    taskId: "pn-fis104-w01-unit-conversion-draft",
    taskTitle: "Convert And Report A Ship's Draught Reading",
    scenario: "The chief officer hands the cadet a draught reading taken in feet and inches at the quay, but the loading computer and the port report both require the value in metres. The cadet must convert it correctly before the figure is logged.",
    instructions: [
      "Identify the draught value given in the Imperial system (feet and inches).",
      "Apply the correct conversion factor to express the draught in the SI system (metres).",
      "State the converted value with the correct unit and an appropriate number of decimals for a draught reading.",
      "Explain in one sentence why using the correct unit system matters for safe loading."
    ],
    deliverable: "A short conversion note in English stating the original Imperial draught, the converted SI value, and the reason the correct unit system matters for the loading report.",
    assessmentCriteria: [
      "The conversion between Imperial and SI units is calculated correctly.",
      "The final value carries the correct unit (metres) and sensible precision.",
      "The note is written in clear maritime English.",
      "The explanation connects unit accuracy to safe cargo/loading operations."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "FIS104",
    subjectName: "Física",
    subjectId: "pn-s1-fisica",
    unit: "Mecánica",
    topic: "Magnitudes escalares y vectoriales",
    week: 2,
    taskId: "pn-fis104-w02-vector-current-set",
    taskTitle: "Resolve A Set And Drift Vector Problem",
    scenario: "While approaching the anchorage, the officer notes the vessel is being pushed off track by a current. The cadet must combine the ship's heading and the current as vectors to report the resulting course made good.",
    instructions: [
      "Represent the ship's intended course and speed as a vector.",
      "Represent the current (set and drift) as a second vector.",
      "Combine both vectors to find the resultant course and speed made good.",
      "State the result clearly for the officer's plotting."
    ],
    deliverable: "A vector resolution note in English giving the resultant course and speed made good, with the two component vectors clearly identified.",
    assessmentCriteria: [
      "Both vectors are represented with correct magnitude and direction.",
      "The vector addition is performed correctly.",
      "The resultant is expressed as a usable course and speed.",
      "The note uses correct navigational and physical terminology in English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "FIS104",
    subjectName: "Física",
    subjectId: "pn-s1-fisica",
    unit: "Mecánica",
    topic: "Leyes de Newton",
    week: 3,
    taskId: "pn-fis104-w03-mooring-force",
    taskTitle: "Estimate The Force On A Mooring Line",
    scenario: "Wind is pushing the berthed vessel away from the quay. The bosun asks the cadet to estimate the force the mooring line must resist, applying Newton's laws to a simplified static situation.",
    instructions: [
      "Identify the forces acting on the vessel at the berth (wind force, line tension).",
      "Apply Newton's first law: for the vessel to stay in place, the forces must balance.",
      "Estimate the mooring line tension required to hold the vessel against the given wind force.",
      "State the result and one safety implication if the line cannot hold that force."
    ],
    deliverable: "A short force-balance note in English stating the estimated mooring line tension and a safety implication, showing the forces considered.",
    assessmentCriteria: [
      "Forces acting on the vessel are correctly identified.",
      "Newton's first law (equilibrium) is applied correctly.",
      "The tension estimate is consistent with the stated forces.",
      "The safety implication connects the physics to a real mooring risk, in clear English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "FIS104",
    subjectName: "Física",
    subjectId: "pn-s1-fisica",
    unit: "Estado físico de los cuerpos",
    topic: "Propiedades de la materia",
    week: 4,
    taskId: "pn-fis104-w04-buoyancy-draft-change",
    taskTitle: "Explain A Draught Change By Water Density",
    scenario: "A vessel moves from a river (fresh water) out to sea (salt water). The officer asks the cadet to explain, using density and buoyancy, why the vessel's draught changes and what to watch for.",
    instructions: [
      "Compare the density of fresh water and salt water.",
      "Apply the principle of buoyancy (Archimedes) to explain how density affects how the vessel floats.",
      "State whether the draught increases or decreases when moving from fresh to salt water, and why.",
      "Identify one operational precaution related to this change (e.g. load line / freshwater allowance)."
    ],
    deliverable: "A clear explanation in English of the draught change between fresh and salt water using density and buoyancy, plus one operational precaution.",
    assessmentCriteria: [
      "The density difference between fresh and salt water is stated correctly.",
      "Buoyancy is applied correctly to explain the draught change.",
      "The direction of the draught change is correct and justified.",
      "The precaution is operationally relevant and expressed in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "ELE106",
    subjectName: "Electricidad",
    subjectId: "pn-s1-electricidad",
    unit: "Circuito eléctrico",
    topic: "Diferencia de potencial, corriente y resistencia",
    week: 1,
    taskId: "pn-ele106-w01-nav-light-circuit",
    taskTitle: "Read A Navigation Light Circuit",
    scenario: "During an electrical familiarization round, the electro-technical officer points to a navigation light circuit and asks the cadet to identify the voltage, current, and resistance values and explain how they relate.",
    instructions: [
      "Identify which quantity is voltage, which is current, and which is resistance in the given circuit values.",
      "State the unit of each quantity (volt, ampere, ohm).",
      "Explain how potential difference, current, and resistance relate in a simple circuit.",
      "State what would happen to the current if the resistance increased."
    ],
    deliverable: "A short circuit note in English identifying voltage, current, and resistance with correct units, and explaining their relationship in the navigation light circuit.",
    assessmentCriteria: [
      "Each quantity is correctly identified with its unit.",
      "The relationship between the three quantities is explained correctly.",
      "The effect of changing resistance on current is stated correctly.",
      "Terminology is precise and written in clear English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "ELE106",
    subjectName: "Electricidad",
    subjectId: "pn-s1-electricidad",
    unit: "Redes eléctricas",
    topic: "Ley de Ohm y Leyes de Kirchhoff",
    week: 2,
    taskId: "pn-ele106-w02-ohm-law-load",
    taskTitle: "Apply Ohm's Law To A Bridge Load",
    scenario: "A piece of bridge equipment is rated for a known voltage and resistance. Before connecting it, the officer asks the cadet to calculate the current it will draw using Ohm's law, to check it is within the circuit's limit.",
    instructions: [
      "Identify the voltage and resistance of the bridge equipment.",
      "Apply Ohm's law (I = V / R) to calculate the current drawn.",
      "State the result with the correct unit (ampere).",
      "State whether the current is within a given circuit limit and the safety reason this check matters."
    ],
    deliverable: "An Ohm's law calculation note in English giving the current drawn by the equipment, with the working shown and a statement on whether it is within the circuit limit.",
    assessmentCriteria: [
      "Ohm's law is applied correctly with the right values.",
      "The current is calculated accurately with the correct unit.",
      "The comparison against the circuit limit is correct.",
      "The safety reasoning is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "ELE106",
    subjectName: "Electricidad",
    subjectId: "pn-s1-electricidad",
    unit: "Conexiones eléctricas",
    topic: "Circuitos en serie, paralelo y serie/paralelo",
    week: 3,
    taskId: "pn-ele106-w03-series-parallel-lighting",
    taskTitle: "Compare Series And Parallel Lighting",
    scenario: "The accommodation lighting can be wired in series or in parallel. The officer asks the cadet to explain which arrangement is used on board and why one failed lamp should not darken the whole space.",
    instructions: [
      "Describe how current flows in a series circuit versus a parallel circuit.",
      "Explain what happens to the other lamps if one lamp fails, in each arrangement.",
      "State which arrangement is preferred for accommodation lighting and why.",
      "Connect the choice to a safety or operational reason on board."
    ],
    deliverable: "A comparison note in English explaining series versus parallel lighting, the effect of a failed lamp in each, and why the chosen arrangement is safer on board.",
    assessmentCriteria: [
      "Current behaviour in series and parallel circuits is described correctly.",
      "The effect of a failed lamp in each arrangement is correct.",
      "The preferred arrangement is correctly identified and justified.",
      "The safety/operational link is sound and clearly written in English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "ELE106",
    subjectName: "Electricidad",
    subjectId: "pn-s1-electricidad",
    unit: "Redes eléctricas",
    topic: "Resistencia e intensidad de corriente en redes eléctricas",
    week: 4,
    taskId: "pn-ele106-w04-network-fault-current",
    taskTitle: "Analyse Current In A Small Power Network",
    scenario: "Several pieces of equipment share a small distribution network on the bridge. The officer asks the cadet to work out the total current the network draws and identify whether adding one more device would overload it.",
    instructions: [
      "Identify the resistance or current draw of each device on the network.",
      "Determine the total current drawn by the combined network.",
      "Compare the total against the network's rated capacity.",
      "State whether one additional device can be safely added, and the consequence of overloading."
    ],
    deliverable: "A network analysis note in English giving the total current drawn, the comparison against rated capacity, and a clear conclusion on whether another device can be safely added.",
    assessmentCriteria: [
      "Individual device currents/resistances are handled correctly.",
      "The total network current is determined correctly.",
      "The comparison against rated capacity is accurate.",
      "The overload conclusion and its consequence are correct and clearly written in English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "ING102",
    subjectName: "Inglés Marítimo I",
    subjectId: "pn-s1-maritime-english-i",
    unit: "Uso del verbo to be",
    topic: "Presentarse a sí mismo",
    week: 1,
    taskId: "pn-ing102-w01-report-aboard",
    taskTitle: "Report Yourself On Joining The Vessel",
    scenario: "You arrive on board for the first time and must report to the officer on watch. Using the verb 'to be', state who you are, your rank, and your assignment — clearly and professionally, as a real crew member would on joining.",
    instructions: [
      "State your name, rank, and role on board using the verb 'to be'.",
      "Confirm which department you are assigned to.",
      "Keep the report short, clear, and professional — as spoken to the officer on watch.",
      "Avoid casual phrasing; use the form expected on a working bridge."
    ],
    deliverable: "A short self-report in English, as if joining the vessel, correctly using 'to be' to state identity, rank, and assignment.",
    assessmentCriteria: [
      "The verb 'to be' is used correctly throughout.",
      "Identity, rank, and assignment are all stated clearly.",
      "The register is professional and appropriate for reporting on board.",
      "The report is concise and would be understood by an officer on watch."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "ING102",
    subjectName: "Inglés Marítimo I",
    subjectId: "pn-s1-maritime-english-i",
    unit: "Uso del verbo to be",
    topic: "Alfabeto convencional y fonético",
    week: 2,
    taskId: "pn-ing102-w02-phonetic-spelling",
    taskTitle: "Spell A Vessel Name Using The Phonetic Alphabet",
    scenario: "The bridge asks you to pass a vessel's name over the radio. To avoid mistakes, you must spell it using the standard phonetic alphabet (Alpha, Bravo, Charlie...), exactly as required in maritime communication.",
    instructions: [
      "Take the given vessel name and spell it letter by letter using the phonetic alphabet.",
      "Write each letter with its correct phonetic word (e.g. M = Mike).",
      "Include the correct format you would use to introduce the spelling over the radio.",
      "State why phonetic spelling is required instead of normal letters."
    ],
    deliverable: "The vessel name spelled out in the phonetic alphabet, in correct radio format, with a one-line reason phonetic spelling is used at sea.",
    assessmentCriteria: [
      "Every letter is matched to the correct phonetic word.",
      "The radio format is appropriate and clear.",
      "The reason for phonetic spelling is correct and relevant.",
      "The work would prevent a name being misheard over VHF."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "ING102",
    subjectName: "Inglés Marítimo I",
    subjectId: "pn-s1-maritime-english-i",
    unit: "Presente Continuo",
    topic: "Hora cotidiana y marítima",
    week: 3,
    taskId: "pn-ing102-w03-position-report",
    taskTitle: "Give A Position Report In Present Continuous",
    scenario: "The officer asks for a routine report of what the vessel is doing now. Using the present continuous, state the vessel's current activity, course, and the time using the 24-hour maritime clock.",
    instructions: [
      "Describe what the vessel is doing now using the present continuous (e.g. 'The vessel is proceeding...').",
      "State the current course and speed.",
      "Give the time using the 24-hour maritime format (e.g. 0815).",
      "Keep the report in the form an officer would expect during a watch."
    ],
    deliverable: "A routine position report in English using the present continuous, the vessel's course and speed, and the correct 24-hour maritime time.",
    assessmentCriteria: [
      "The present continuous is formed and used correctly.",
      "Course and speed are stated clearly.",
      "The maritime 24-hour time format is used correctly.",
      "The report reads as a real watch report, not a grammar exercise."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "ING102",
    subjectName: "Inglés Marítimo I",
    subjectId: "pn-s1-maritime-english-i",
    unit: "Auxiliar de modo can y can't",
    topic: "Necesidad, obligación y preferencias",
    week: 4,
    taskId: "pn-ing102-w04-can-cannot-readiness",
    taskTitle: "Report Equipment Readiness Using Can / Cannot",
    scenario: "Before departure, the officer asks you to report which equipment is ready for use and which is not. Using 'can' and 'cannot', state clearly what the vessel is and is not able to do.",
    instructions: [
      "List the equipment or capability you are reporting on.",
      "Use 'can' to state what is ready or able to operate.",
      "Use 'cannot' to state what is not ready, and briefly why.",
      "Keep the report clear enough for the officer to act on before departure."
    ],
    deliverable: "A readiness report in English using 'can' and 'cannot' to state clearly what equipment is and is not ready before departure, with brief reasons.",
    assessmentCriteria: [
      "'Can' and 'cannot' are used correctly to express ability.",
      "Ready and not-ready items are clearly distinguished.",
      "Reasons for unavailability are brief and relevant.",
      "The report is actionable and written in clear professional English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "C0011",
    subjectName: "Educación Física I",
    subjectId: "pn-s1-educacion-fisica-i",
    unit: "Condición física",
    topic: "Fuerza muscular, resistencia cardiorrespiratoria y flexibilidad",
    week: 1,
    taskId: "pn-c0011-w01-physical-demands-watch",
    taskTitle: "Identify The Physical Demands Of Shipboard Duties",
    scenario: "A new cadet must understand why physical fitness is an operational requirement at sea, not just a sport. The training officer asks you to connect specific shipboard tasks to the physical capacities they demand.",
    instructions: [
      "List three physical shipboard duties (e.g. climbing ladders, handling mooring lines, carrying stores).",
      "For each duty, state which physical capacity it requires: muscular strength, cardiorespiratory endurance, or flexibility.",
      "Explain why a lack of that capacity would be an operational and safety risk.",
      "Write the report in clear English using correct fitness and shipboard terminology."
    ],
    deliverable: "A short report in English linking three shipboard duties to the physical capacities they require, and the safety risk if the crew member lacks them.",
    assessmentCriteria: [
      "Each duty is matched to the correct physical capacity.",
      "The operational/safety reasoning is sound.",
      "Fitness terminology is used correctly.",
      "The report is clear and professional in English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "C0011",
    subjectName: "Educación Física I",
    subjectId: "pn-s1-educacion-fisica-i",
    unit: "Percepción y coordinación motriz",
    topic: "Coordinación motriz, equilibrio y lateralidad",
    week: 2,
    taskId: "pn-c0011-w02-balance-moving-deck",
    taskTitle: "Explain Balance And Coordination On A Moving Deck",
    scenario: "A vessel at sea is constantly moving. The officer asks you to explain why balance and coordination are critical when working on a moving deck, and how a crew member maintains safe footing.",
    instructions: [
      "Explain how a vessel's motion (rolling, pitching) affects balance on deck.",
      "Describe two techniques a crew member uses to keep balance and coordination while working.",
      "Identify one task where poor balance would create a fall or injury risk.",
      "Report your explanation in clear maritime English."
    ],
    deliverable: "An explanation in English of why balance and coordination matter on a moving deck, two techniques to maintain footing, and one task where poor balance is dangerous.",
    assessmentCriteria: [
      "The effect of vessel motion on balance is explained correctly.",
      "The two techniques are practical and relevant.",
      "The risk task is appropriate and clearly justified.",
      "The explanation is clear and uses correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "C0011",
    subjectName: "Educación Física I",
    subjectId: "pn-s1-educacion-fisica-i",
    unit: "Natación",
    topic: "Técnica, flotación, nado libre, nado en grupo y sobrevivencia",
    week: 3,
    taskId: "pn-c0011-w03-sea-survival-floating",
    taskTitle: "Describe Sea Survival Floating Technique",
    scenario: "Survival in the water is a core seafarer competency. After a man-overboard or abandon-ship situation, staying afloat and conserving energy can save a life. The instructor asks you to describe the correct survival approach.",
    instructions: [
      "Describe a technique used to stay afloat while conserving energy in the water.",
      "Explain why conserving energy and body heat matters during survival at sea.",
      "State why staying in a group improves survival chances.",
      "Report the procedure in clear English suitable for a safety briefing."
    ],
    deliverable: "A survival floating brief in English describing how to stay afloat and conserve energy, why energy/heat conservation matters, and the benefit of staying in a group.",
    assessmentCriteria: [
      "The floating/survival technique is described correctly.",
      "Energy and heat conservation reasoning is sound.",
      "The group-survival benefit is correctly explained.",
      "The brief is clear and appropriate for safety use, in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "C0011",
    subjectName: "Educación Física I",
    subjectId: "pn-s1-educacion-fisica-i",
    unit: "Concentración",
    topic: "Juegos de concentración",
    week: 4,
    taskId: "pn-c0011-w04-focus-on-watch",
    taskTitle: "Connect Concentration To Watchkeeping Safety",
    scenario: "A navigational watch can last hours and demands sustained attention. The officer asks you to explain why concentration is a trainable physical-mental capacity and how fatigue affects it on watch.",
    instructions: [
      "Explain why sustained concentration is essential during a navigational watch.",
      "Describe how fatigue degrades concentration and reaction time.",
      "State one habit or technique that helps maintain focus during a long watch.",
      "Report your explanation in clear maritime English."
    ],
    deliverable: "An explanation in English of why concentration matters on watch, how fatigue affects it, and one technique to sustain focus during a long watch.",
    assessmentCriteria: [
      "The importance of concentration on watch is correctly explained.",
      "The effect of fatigue is accurately described.",
      "The focus technique is practical and relevant.",
      "The explanation is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "PMR107",
    subjectName: "Prácticas Marineras I",
    subjectId: "pn-s1-practicas-marineras-i",
    unit: "Bote salvavidas",
    topic: "Uso correcto del chaleco salvavidas y aro salvavidas",
    week: 1,
    taskId: "pn-pmr107-w01-lifesaving-appliances",
    taskTitle: "Identify And Explain Personal Life-Saving Appliances",
    scenario: "During a safety familiarization, the bosun points to a lifejacket and a lifebuoy and asks the cadet to identify each, explain its correct use, and state when it is used.",
    instructions: [
      "Identify the lifejacket and the lifebuoy by their correct English names.",
      "Explain the correct way to don and secure a lifejacket.",
      "Explain how and when a lifebuoy is used in a man-overboard situation.",
      "State one check that confirms each appliance is ready for use."
    ],
    deliverable: "A short report in English identifying the lifejacket and lifebuoy, their correct use, and a readiness check for each.",
    assessmentCriteria: [
      "Both appliances are correctly named in English.",
      "Correct use of each is accurately described.",
      "The man-overboard use of the lifebuoy is correct.",
      "Readiness checks are relevant and clearly stated."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "PMR107",
    subjectName: "Prácticas Marineras I",
    subjectId: "pn-s1-practicas-marineras-i",
    unit: "Bote salvavidas",
    topic: "Tipos, nomenclatura y accesorios de botes salvavidas",
    week: 2,
    taskId: "pn-pmr107-w02-lifeboat-nomenclature",
    taskTitle: "Label Lifeboat Parts And Equipment",
    scenario: "Before a survival craft drill, the officer asks the cadet to identify the main parts of the lifeboat and its required equipment using correct maritime English nomenclature.",
    instructions: [
      "Identify three main structural parts of a lifeboat by their correct English names.",
      "List three items of equipment that a lifeboat must carry.",
      "State the purpose of each item you listed.",
      "Write the identification clearly, as it would appear on a survival craft inventory."
    ],
    deliverable: "A lifeboat identification list in English naming three structural parts and three equipment items with their purpose.",
    assessmentCriteria: [
      "Structural parts are named correctly in English.",
      "Equipment items are valid and correctly named.",
      "The purpose of each item is accurate.",
      "Nomenclature is precise and professional."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "PMR107",
    subjectName: "Prácticas Marineras I",
    subjectId: "pn-s1-practicas-marineras-i",
    unit: "Cabuyería",
    topic: "Conceptos, materiales y tipos de cabos",
    week: 3,
    taskId: "pn-pmr107-w03-ropes-and-knots",
    taskTitle: "Select The Right Rope And Knot For A Task",
    scenario: "The bosun gives the cadet a deck task and asks which type of rope and which knot are appropriate, explaining the choice using correct seamanship terminology.",
    instructions: [
      "Describe two types of rope (by material or construction) used on deck.",
      "State one advantage of each rope type for a specific use.",
      "Name a knot or hitch appropriate for a given securing task and explain why.",
      "Report your selection in clear maritime English."
    ],
    deliverable: "A seamanship note in English describing two rope types, an advantage of each, and an appropriate knot for a securing task with justification.",
    assessmentCriteria: [
      "Rope types and their properties are correct.",
      "The advantage stated matches the use.",
      "The knot chosen is appropriate for the task.",
      "Seamanship terminology is correct and in clear English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "PMR107",
    subjectName: "Prácticas Marineras I",
    subjectId: "pn-s1-practicas-marineras-i",
    unit: "Cabos de amarre",
    topic: "Distribución de cabos de amarre y boza",
    week: 4,
    taskId: "pn-pmr107-w04-mooring-line-layout",
    taskTitle: "Explain A Standard Mooring Line Layout",
    scenario: "The vessel is coming alongside. The officer asks the cadet to explain the standard arrangement of mooring lines (head lines, breast lines, springs, stern lines) and what each one controls.",
    instructions: [
      "Name the main mooring lines used to secure a vessel alongside.",
      "State what movement each line controls (fore-aft, off-berth).",
      "Explain the role of the spring lines specifically.",
      "Report the layout clearly, as you would brief the mooring team in English."
    ],
    deliverable: "A mooring layout brief in English naming the main mooring lines, what each controls, and the specific role of the springs.",
    assessmentCriteria: [
      "Mooring lines are correctly named.",
      "The movement each line controls is correct.",
      "The role of the spring lines is accurately explained.",
      "The brief is clear and usable by a mooring team, in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "DII105",
    subjectName: "Dibujo de Ingeniería",
    subjectId: "pn-s1-dibujo-ingenieria",
    unit: "Introducción",
    topic: "Tipos de líneas",
    week: 1,
    taskId: "pn-dii105-w01-line-types-plan",
    taskTitle: "Read The Line Types On A Ship Plan",
    scenario: "The officer hands the cadet a section of a ship's general arrangement plan and asks what the different line types mean before the cadet can interpret the drawing correctly.",
    instructions: [
      "Identify three different line types used on the plan (e.g. visible outline, hidden, centre line).",
      "State what each line type represents on a technical drawing.",
      "Explain why distinguishing line types matters when reading a ship's plan.",
      "Write your answer in clear English using correct drawing terminology."
    ],
    deliverable: "A short note in English identifying three line types on a ship plan, what each represents, and why distinguishing them matters.",
    assessmentCriteria: [
      "Line types are correctly identified.",
      "The meaning of each is accurate.",
      "The reasoning about reading plans is sound.",
      "Drawing terminology is correct and in clear English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "DII105",
    subjectName: "Dibujo de Ingeniería",
    subjectId: "pn-s1-dibujo-ingenieria",
    unit: "Escalas y acotaciones",
    topic: "Escalas y acotaciones",
    week: 2,
    taskId: "pn-dii105-w02-scale-dimension",
    taskTitle: "Use Scale To Find A Real Dimension",
    scenario: "A ship plan is drawn to a stated scale. The officer asks the cadet to use the scale to work out a real dimension on the vessel from the measurement on the drawing.",
    instructions: [
      "Identify the scale stated on the drawing.",
      "Measure or read the dimension given on the plan.",
      "Apply the scale to calculate the real dimension on the vessel.",
      "State the result with the correct unit and explain why scale accuracy matters."
    ],
    deliverable: "A scale calculation note in English giving the real dimension from the drawing, with the working shown and the correct unit.",
    assessmentCriteria: [
      "The scale is read and applied correctly.",
      "The real dimension is calculated accurately.",
      "The result carries the correct unit.",
      "The importance of scale accuracy is explained in clear English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "DII105",
    subjectName: "Dibujo de Ingeniería",
    subjectId: "pn-s1-dibujo-ingenieria",
    unit: "Simbología",
    topic: "Simbología marítima, topográfica y eléctrica",
    week: 3,
    taskId: "pn-dii105-w03-symbols-reading",
    taskTitle: "Interpret Symbols On A Shipboard Diagram",
    scenario: "Before working with a shipboard system, the cadet must interpret the standard symbols on its diagram. The officer asks the cadet to identify a set of symbols and explain what each represents.",
    instructions: [
      "Identify three standard symbols on a maritime or electrical diagram.",
      "State what each symbol represents.",
      "Explain why standardized symbols are important for crews of different nationalities.",
      "Report your interpretation in clear English."
    ],
    deliverable: "A symbol interpretation note in English identifying three diagram symbols, what each represents, and why standard symbols matter on board.",
    assessmentCriteria: [
      "Symbols are correctly identified.",
      "The meaning of each is accurate.",
      "The reasoning about standardization is sound.",
      "Terminology is correct and clearly written in English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "DII105",
    subjectName: "Dibujo de Ingeniería",
    subjectId: "pn-s1-dibujo-ingenieria",
    unit: "Tipos de plano",
    topic: "Planos cartográficos, cartas terrestres y cartas marinas",
    week: 4,
    taskId: "pn-dii105-w04-nautical-chart-reading",
    taskTitle: "Distinguish A Nautical Chart From Other Plans",
    scenario: "The officer shows the cadet several drawings and asks how a nautical chart differs from other plans, and what key information a nautical chart provides for safe navigation.",
    instructions: [
      "State two features that distinguish a nautical chart from a land map or structural plan.",
      "Identify three pieces of information a nautical chart provides for navigation (e.g. depths, hazards, aids).",
      "Explain why correct interpretation of a chart is essential for safe navigation.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English distinguishing a nautical chart from other plans, three pieces of navigational information it provides, and why correct chart reading matters.",
    assessmentCriteria: [
      "The distinguishing features of a nautical chart are correct.",
      "The navigational information listed is accurate and relevant.",
      "The safety reasoning is sound.",
      "The answer is clear and uses correct maritime English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "C0099",
    subjectName: "Estrategias de Aprendizaje",
    subjectId: "pn-s1-estrategias-aprendizaje",
    unit: "Manejo de información",
    topic: "Resumen, síntesis y la pregunta",
    week: 1,
    taskId: "pn-c0099-w01-summarise-procedure",
    taskTitle: "Summarise A Shipboard Procedure",
    scenario: "A seafarer must absorb large amounts of technical information quickly. The training officer gives the cadet a shipboard procedure and asks for a clear, accurate summary that keeps only what matters for safe action.",
    instructions: [
      "Read the given shipboard procedure.",
      "Produce a concise summary that keeps the essential steps and removes filler.",
      "Ensure no safety-critical step is lost in the summary.",
      "Write the summary in clear English a watch team could follow."
    ],
    deliverable: "A concise summary in English of a shipboard procedure that preserves every safety-critical step while removing non-essential detail.",
    assessmentCriteria: [
      "The summary keeps all essential and safety-critical steps.",
      "Non-essential detail is correctly removed.",
      "The meaning of the original procedure is preserved.",
      "The summary is clear and usable in English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "C0099",
    subjectName: "Estrategias de Aprendizaje",
    subjectId: "pn-s1-estrategias-aprendizaje",
    unit: "Presentación gráfica de la información",
    topic: "Organizadores gráficos, diagramas, mapas y esquemas",
    week: 2,
    taskId: "pn-c0099-w02-graphic-organiser-system",
    taskTitle: "Map A Shipboard System With A Graphic Organiser",
    scenario: "Complex shipboard systems are easier to learn as a diagram than as text. The officer asks the cadet to turn a written description of a system into a graphic organiser.",
    instructions: [
      "Take a written description of a simple shipboard system or process.",
      "Choose a suitable graphic organiser (flowchart, mind map, or diagram).",
      "Represent the system's parts and their relationships clearly.",
      "Explain in English how the organiser makes the system easier to learn."
    ],
    deliverable: "A described graphic organiser (in text/sketch form) of a shipboard system, plus an explanation in English of how it aids learning.",
    assessmentCriteria: [
      "The organiser represents the system accurately.",
      "Relationships between parts are clear.",
      "The choice of organiser fits the content.",
      "The explanation is sound and in clear English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "C0099",
    subjectName: "Estrategias de Aprendizaje",
    subjectId: "pn-s1-estrategias-aprendizaje",
    unit: "Técnicas de estudio",
    topic: "Técnica de los seis pasos",
    week: 3,
    taskId: "pn-c0099-w03-six-step-study",
    taskTitle: "Apply A Study Technique To Learn A Convention",
    scenario: "An officer must master new regulations throughout their career. The cadet is asked to apply a structured study technique to learn a piece of maritime regulation effectively.",
    instructions: [
      "Choose a short piece of maritime regulation or safety content to study.",
      "Apply a structured study technique (such as a six-step method) to learn it.",
      "Describe each step you took and what it produced.",
      "Explain in English why a structured method beats simple re-reading."
    ],
    deliverable: "A description in English of how a structured study technique was applied to learn a maritime regulation, step by step, with the reasoning for using it.",
    assessmentCriteria: [
      "The study technique is applied correctly step by step.",
      "Each step produces a meaningful result.",
      "The content chosen is appropriate and maritime-relevant.",
      "The reasoning is sound and clearly written in English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "C0099",
    subjectName: "Estrategias de Aprendizaje",
    subjectId: "pn-s1-estrategias-aprendizaje",
    unit: "Condiciones básicas para el estudio",
    topic: "Atribuciones, motivación, atención y área de estudio",
    week: 4,
    taskId: "pn-c0099-w04-study-conditions-ship",
    taskTitle: "Plan Effective Study Conditions On Board",
    scenario: "Studying at sea is hard: noise, fatigue, watch schedules. The officer asks the cadet to plan realistic conditions and habits that make study effective despite shipboard life.",
    instructions: [
      "Identify two obstacles to studying effectively on board.",
      "Propose a practical habit or condition to overcome each obstacle.",
      "Explain how attention and motivation are protected by these choices.",
      "Write the plan in clear English."
    ],
    deliverable: "A short study plan in English identifying two shipboard study obstacles and a practical solution for each, with reasoning about attention and motivation.",
    assessmentCriteria: [
      "The obstacles are realistic for shipboard life.",
      "The solutions are practical and relevant.",
      "The reasoning about attention/motivation is sound.",
      "The plan is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "C0100",
    subjectName: "Expresión Oral y Escrita",
    subjectId: "pn-s1-expresion-oral-escrita",
    unit: "Proceso de comunicación",
    topic: "Proceso de la comunicación",
    week: 1,
    taskId: "pn-c0100-w01-communication-breakdown",
    taskTitle: "Analyse A Communication Breakdown On Board",
    scenario: "Many accidents at sea begin with a message that was sent but not understood. The officer asks the cadet to analyse a shipboard communication using the basic communication process and find where it could fail.",
    instructions: [
      "Identify the sender, message, channel, and receiver in a given shipboard communication.",
      "Point out one stage where the message could be misunderstood.",
      "Explain the consequence if that breakdown happened during an operation.",
      "Suggest how to prevent the breakdown, written in clear English."
    ],
    deliverable: "An analysis in English of a shipboard communication identifying its parts, a possible breakdown point, the operational consequence, and a prevention measure.",
    assessmentCriteria: [
      "The communication parts are correctly identified.",
      "The breakdown point is plausible and well explained.",
      "The consequence is operationally realistic.",
      "The prevention measure is sound and clearly written in English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "C0100",
    subjectName: "Expresión Oral y Escrita",
    subjectId: "pn-s1-expresion-oral-escrita",
    unit: "Comunicación Escrita",
    topic: "Ideas principales y secundarias en textos",
    week: 2,
    taskId: "pn-c0100-w02-clear-written-report",
    taskTitle: "Write A Clear Incident Report",
    scenario: "After a minor incident on deck, the cadet must write a report. The officer stresses that a good report puts the main facts first and keeps secondary detail in its place.",
    instructions: [
      "Write a short report of a simple deck incident.",
      "State the main fact (what happened) clearly at the start.",
      "Place supporting/secondary details after the main fact, in order.",
      "Keep the language precise and unambiguous, in clear English."
    ],
    deliverable: "A short incident report in English that leads with the main fact and orders secondary details clearly, with precise and unambiguous language.",
    assessmentCriteria: [
      "The main fact is stated clearly and first.",
      "Secondary details are correctly subordinated and ordered.",
      "The language is precise and unambiguous.",
      "The report is professional and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "C0100",
    subjectName: "Expresión Oral y Escrita",
    subjectId: "pn-s1-expresion-oral-escrita",
    unit: "Comunicación Oral",
    topic: "Comunicación verbal y no verbal",
    week: 3,
    taskId: "pn-c0100-w03-verbal-nonverbal-order",
    taskTitle: "Give A Clear Verbal Order With Confirmation",
    scenario: "On the bridge, an order must be given, heard, and confirmed. The officer asks the cadet to deliver a verbal order and explain how tone, clarity, and readback prevent mistakes.",
    instructions: [
      "Give a clear verbal order for a simple shipboard action.",
      "Explain how tone and delivery affect whether it is understood.",
      "Describe the readback/confirmation that closes the communication loop.",
      "Report the exchange in clear English."
    ],
    deliverable: "A scripted verbal order in English with the confirmation/readback, plus an explanation of how delivery and confirmation prevent mistakes.",
    assessmentCriteria: [
      "The order is clear and unambiguous.",
      "The role of tone/delivery is explained correctly.",
      "The readback closes the communication loop properly.",
      "The exchange is realistic and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "C0100",
    subjectName: "Expresión Oral y Escrita",
    subjectId: "pn-s1-expresion-oral-escrita",
    unit: "Comunicación Oral",
    topic: "Dicción, fluidez y exposición oral",
    week: 4,
    taskId: "pn-c0100-w04-safety-briefing-delivery",
    taskTitle: "Deliver A Short Safety Briefing",
    scenario: "The cadet must deliver a short safety briefing to the crew. Clear diction and fluent, ordered delivery determine whether the crew actually retains the safety message.",
    instructions: [
      "Prepare a short safety briefing on a single topic.",
      "Organise it with a clear opening, key points, and a close.",
      "Note where diction and pace matter most for the message to land.",
      "Write the briefing as it would be delivered, in clear English."
    ],
    deliverable: "A short safety briefing in English with a clear structure (opening, key points, close), noting where diction and pace are critical for the crew to retain it.",
    assessmentCriteria: [
      "The briefing has a clear, logical structure.",
      "The key safety points are well chosen.",
      "The notes on diction/pace are relevant.",
      "The briefing is clear, professional, and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "NAV316",
    subjectName: "Navegación I",
    subjectId: "pn-s3-navegacion-i",
    unit: "Dirección en la navegación",
    topic: "Tipos de rumbo",
    week: 1,
    taskId: "pn-nav316-w01-course-types",
    taskTitle: "Distinguish True, Magnetic And Compass Course",
    scenario: "The officer of the watch asks the cadet to explain the difference between true, magnetic, and compass course before plotting, since confusing them leads to navigation errors.",
    instructions: [
      "Define true course, magnetic course, and compass course.",
      "Explain what is applied to convert between them (variation and deviation).",
      "State the correct order in which the corrections are applied.",
      "Report your explanation in clear maritime English."
    ],
    deliverable: "A short note in English defining true, magnetic, and compass course and explaining how variation and deviation relate them.",
    assessmentCriteria: [
      "The three course types are correctly defined.",
      "Variation and deviation are correctly applied between them.",
      "The order of correction is correct.",
      "The explanation is clear and uses correct navigational English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "NAV316",
    subjectName: "Navegación I",
    subjectId: "pn-s3-navegacion-i",
    unit: "Marcaciones y demoras",
    topic: "Relación entre marcaciones",
    week: 2,
    taskId: "pn-nav316-w02-bearings",
    taskTitle: "Convert Between Relative And True Bearings",
    scenario: "The lookout reports a contact by relative bearing. The officer asks the cadet to convert it to a true bearing using the ship's heading, so it can be plotted.",
    instructions: [
      "State the relative bearing reported and the ship's heading.",
      "Explain the relationship between relative bearing, heading, and true bearing.",
      "Convert the relative bearing to a true bearing.",
      "State the result clearly for plotting."
    ],
    deliverable: "A bearing conversion note in English giving the true bearing of the contact, with the relationship and working shown.",
    assessmentCriteria: [
      "The relationship between relative, heading, and true bearing is correct.",
      "The conversion is calculated correctly.",
      "The result is expressed clearly for plotting.",
      "Correct navigational terminology is used in English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "NAV316",
    subjectName: "Navegación I",
    subjectId: "pn-s3-navegacion-i",
    unit: "Compás magnético",
    topic: "La variación magnética y el desvío en la carta magnética",
    week: 3,
    taskId: "pn-nav316-w03-variation-deviation",
    taskTitle: "Apply Variation And Deviation To A Heading",
    scenario: "Before steering a planned course, the cadet must correct the compass reading. The officer asks the cadet to apply variation and deviation to find the compass heading to steer.",
    instructions: [
      "State the true course to be steered.",
      "Apply variation to obtain the magnetic course.",
      "Apply deviation (from the deviation card) to obtain the compass course.",
      "State the compass heading to steer and note why deviation changes with heading."
    ],
    deliverable: "A correction note in English giving the compass heading to steer, showing the application of variation and deviation in order.",
    assessmentCriteria: [
      "Variation is applied correctly.",
      "Deviation is applied correctly from the card.",
      "The final compass heading is correct.",
      "The note explains why deviation changes, in clear English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "NAV316",
    subjectName: "Navegación I",
    subjectId: "pn-s3-navegacion-i",
    unit: "Navegación de estima",
    topic: "Corrección de la estima por efectos de viento, corriente y error de giro",
    week: 4,
    taskId: "pn-nav316-w04-dead-reckoning",
    taskTitle: "Correct A Dead Reckoning Position For Current",
    scenario: "The vessel is navigating by dead reckoning. The officer asks the cadet to correct the estimated position for the effect of a known current, to improve the estimated position.",
    instructions: [
      "State the dead reckoning course and speed.",
      "State the set and drift of the current.",
      "Apply the current to correct the estimated position (estimated position vs DR).",
      "Report the corrected estimated position and why this correction matters."
    ],
    deliverable: "A dead reckoning correction note in English giving the estimated position adjusted for current, with the working and reasoning shown.",
    assessmentCriteria: [
      "The DR course and speed are handled correctly.",
      "The current set and drift are applied correctly.",
      "The corrected estimated position is reasonable.",
      "The reasoning is clear and in correct navigational English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "HID318",
    subjectName: "Hidrografía",
    subjectId: "pn-s3-hidrografia",
    unit: "Concepto de hidrografía",
    topic: "Definiciones e interrelación con otras ciencias",
    week: 1,
    taskId: "pn-hid318-w01-hydrography-concept",
    taskTitle: "Explain What Hydrography Provides To Navigation",
    scenario: "The officer asks the cadet to explain what hydrography is and why its products are essential for safe navigation, before the cadet starts using charts seriously.",
    instructions: [
      "Define hydrography in your own words.",
      "State two products of hydrography that a navigator relies on.",
      "Explain how hydrographic data keeps navigation safe.",
      "Report your explanation in clear maritime English."
    ],
    deliverable: "A short note in English defining hydrography, two of its products used in navigation, and how it supports safe navigation.",
    assessmentCriteria: [
      "Hydrography is correctly defined.",
      "The products listed are valid and relevant.",
      "The link to safe navigation is sound.",
      "The note is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "HID318",
    subjectName: "Hidrografía",
    subjectId: "pn-s3-hidrografia",
    unit: "Batimetría",
    topic: "Sondeos. - Sistema de sondeos. - Intervalos de sondas. - Unidades de profundidad. - Aparatos de sondeo. - Sondeo en costado de muelles",
    week: 2,
    taskId: "pn-hid318-w02-soundings",
    taskTitle: "Interpret Depth Soundings",
    scenario: "The cadet is given a set of depth soundings. The officer asks the cadet to explain how soundings are taken, what the depth unit means, and why the readings matter for safe under-keel clearance.",
    instructions: [
      "Explain how a depth sounding is taken (e.g. echo sounder).",
      "State the unit of depth used and what the reading refers to (datum).",
      "Explain how soundings relate to under-keel clearance.",
      "Report your explanation in clear maritime English."
    ],
    deliverable: "A note in English explaining how soundings are taken, the depth unit and its datum, and how soundings relate to under-keel clearance.",
    assessmentCriteria: [
      "The sounding method is correctly explained.",
      "The depth unit and datum are correct.",
      "The under-keel clearance link is sound.",
      "The explanation is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "HID318",
    subjectName: "Hidrografía",
    subjectId: "pn-s3-hidrografia",
    unit: "Corrientes marinas",
    topic: "Aplicación de las corrientes marinas en la navegación",
    week: 3,
    taskId: "pn-hid318-w03-currents-navigation",
    taskTitle: "Account For Sea Currents In A Passage",
    scenario: "A known current affects the planned passage. The officer asks the cadet to explain how the current will affect the vessel and what to do about it when planning.",
    instructions: [
      "State the set and drift of the current affecting the passage.",
      "Explain how the current will affect the vessel's track and speed made good.",
      "State what adjustment the navigator makes to stay on the intended track.",
      "Report your explanation in clear maritime English."
    ],
    deliverable: "A note in English explaining how a sea current affects the vessel's track and speed made good, and the adjustment made to stay on track.",
    assessmentCriteria: [
      "The effect of the current on track and speed is correct.",
      "The adjustment to stay on track is appropriate.",
      "The reasoning is sound.",
      "The note is clear and in correct navigational English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "HID318",
    subjectName: "Hidrografía",
    subjectId: "pn-s3-hidrografia",
    unit: "Levantamientos hidrográficos",
    topic: "Tipos de levantamientos hidrográficos",
    week: 4,
    taskId: "pn-hid318-w04-hydrographic-survey",
    taskTitle: "Describe A Hydrographic Survey Type",
    scenario: "The officer asks the cadet to describe one type of hydrographic survey and explain how its results end up improving the charts the ship uses.",
    instructions: [
      "Name one type of hydrographic survey.",
      "Describe briefly how that survey is carried out.",
      "Explain how the survey results improve nautical charts.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English naming a hydrographic survey type, how it is carried out, and how its results improve nautical charts.",
    assessmentCriteria: [
      "The survey type is valid and correctly named.",
      "The description of the method is accurate.",
      "The link to chart improvement is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "CAR319",
    subjectName: "Cartografía",
    subjectId: "pn-s3-cartografia",
    unit: "Sistema de Coordenadas Terrestres",
    topic: "Coordenadas geográficas",
    week: 1,
    taskId: "pn-car319-w01-geographic-coordinates",
    taskTitle: "Read A Position In Geographic Coordinates",
    scenario: "The officer gives the cadet a position and asks them to read and state it correctly in geographic coordinates (latitude and longitude), as it would be logged or reported.",
    instructions: [
      "Identify the latitude and longitude of the given position.",
      "State each with the correct hemisphere (N/S, E/W) and format.",
      "Explain what latitude and longitude each measure.",
      "Report the position in clear maritime English."
    ],
    deliverable: "A note in English stating a position in correct geographic coordinates with hemispheres, and explaining what latitude and longitude measure.",
    assessmentCriteria: [
      "Latitude and longitude are correctly identified.",
      "Hemispheres and format are correct.",
      "The explanation of each is accurate.",
      "The position is clearly reported in English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "CAR319",
    subjectName: "Cartografía",
    subjectId: "pn-s3-cartografia",
    unit: "Proyecciones",
    topic: "Mercator",
    week: 2,
    taskId: "pn-car319-w02-mercator-projection",
    taskTitle: "Explain Why Charts Use The Mercator Projection",
    scenario: "The officer asks the cadet why most nautical charts use the Mercator projection, and what useful property it gives the navigator when plotting a course.",
    instructions: [
      "Explain what the Mercator projection does to lines of constant course (rhumb lines).",
      "State the main advantage this gives the navigator.",
      "State one limitation of the Mercator projection (e.g. distortion at high latitudes).",
      "Report your explanation in clear maritime English."
    ],
    deliverable: "A note in English explaining the navigational advantage of the Mercator projection and one of its limitations.",
    assessmentCriteria: [
      "The behaviour of rhumb lines on Mercator is correct.",
      "The navigational advantage is correctly stated.",
      "The limitation is valid.",
      "The explanation is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "CAR319",
    subjectName: "Cartografía",
    subjectId: "pn-s3-cartografia",
    unit: "Cartas Náuticas",
    topic: "Escalas",
    week: 3,
    taskId: "pn-car319-w03-chart-scale",
    taskTitle: "Choose The Right Chart Scale For A Passage",
    scenario: "The cadet must select charts for a passage from open sea into a port. The officer asks which chart scale is appropriate for each phase and why.",
    instructions: [
      "Explain the difference between a small-scale and a large-scale chart.",
      "State which scale is used for open-sea passage and which for port approach.",
      "Explain why using the wrong scale is a safety risk.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining small vs large scale charts, which to use for each passage phase, and the safety risk of the wrong scale.",
    assessmentCriteria: [
      "Small vs large scale is correctly explained.",
      "The right scale is matched to each phase.",
      "The safety reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "CAR319",
    subjectName: "Cartografía",
    subjectId: "pn-s3-cartografia",
    unit: "Cartas Electrónicas",
    topic: "Cartas vectoriales",
    week: 4,
    taskId: "pn-car319-w04-vector-charts",
    taskTitle: "Compare Raster And Vector Electronic Charts",
    scenario: "The bridge uses electronic charts. The officer asks the cadet to explain the difference between raster and vector charts and one advantage of vector charts for modern navigation.",
    instructions: [
      "Explain what a raster chart is.",
      "Explain what a vector chart is and how it differs.",
      "State one advantage of vector charts (e.g. layers, alarms, scalability).",
      "Report your explanation in clear maritime English."
    ],
    deliverable: "A note in English explaining the difference between raster and vector electronic charts and one advantage of vector charts.",
    assessmentCriteria: [
      "Raster charts are correctly described.",
      "Vector charts are correctly described and differentiated.",
      "The advantage stated is valid.",
      "The explanation is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "GEA320",
    subjectName: "Geometría Analítica",
    subjectId: "pn-s3-geometria-analitica",
    unit: "Línea recta",
    topic: "Distancia entre dos puntos",
    week: 1,
    taskId: "pn-gea320-w01-distance-two-points",
    taskTitle: "Calculate Distance Between Two Positions",
    scenario: "Two waypoints are given as coordinates on a plotting sheet. The officer asks the cadet to calculate the straight-line distance between them using the distance formula.",
    instructions: [
      "Identify the coordinates of the two waypoints.",
      "Apply the distance formula between two points.",
      "Calculate the distance with the correct unit.",
      "State the result clearly for the passage plan."
    ],
    deliverable: "A distance calculation note in English giving the straight-line distance between two waypoints, with the formula and working shown.",
    assessmentCriteria: [
      "The distance formula is applied correctly.",
      "The calculation is accurate.",
      "The result carries the correct unit.",
      "The note is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "GEA320",
    subjectName: "Geometría Analítica",
    subjectId: "pn-s3-geometria-analitica",
    unit: "Línea recta",
    topic: "Pendiente",
    week: 2,
    taskId: "pn-gea320-w02-slope-course",
    taskTitle: "Use Slope To Describe A Track Line",
    scenario: "A track line is drawn between two points on a plotting sheet. The officer asks the cadet to find its slope and explain how slope relates to the direction of the track.",
    instructions: [
      "Identify the two points defining the track line.",
      "Calculate the slope of the line between them.",
      "Explain how slope relates to the steepness/direction of the track.",
      "Report the result in clear English."
    ],
    deliverable: "A slope calculation note in English giving the slope of a track line and explaining how it relates to direction.",
    assessmentCriteria: [
      "The slope is calculated correctly.",
      "The relationship to direction is explained correctly.",
      "The result is clearly stated.",
      "The note is in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "GEA320",
    subjectName: "Geometría Analítica",
    subjectId: "pn-s3-geometria-analitica",
    unit: "Circunferencia",
    topic: "Ecuación general de la circunferencia",
    week: 3,
    taskId: "pn-gea320-w03-circle-turning",
    taskTitle: "Model A Turning Circle With A Circle Equation",
    scenario: "A vessel's turning circle can be modelled geometrically. The officer asks the cadet to use the equation of a circle to describe a turning circle of a given radius centred at a point.",
    instructions: [
      "State the centre and radius of the turning circle.",
      "Write the equation of the circle for that centre and radius.",
      "Explain what the radius represents for the vessel's manoeuvre.",
      "Report the result in clear English."
    ],
    deliverable: "A note in English giving the equation of a circle modelling a turning circle, with an explanation of what the radius represents.",
    assessmentCriteria: [
      "The circle equation is written correctly.",
      "The centre and radius are used correctly.",
      "The link to the vessel's manoeuvre is sound.",
      "The note is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "GEA320",
    subjectName: "Geometría Analítica",
    subjectId: "pn-s3-geometria-analitica",
    unit: "Geometría Analítica del Espacio",
    topic: "Ecuación de la superficie esférica con centro en el origen",
    week: 4,
    taskId: "pn-gea320-w04-sphere-earth",
    taskTitle: "Relate The Sphere Equation To Position On Earth",
    scenario: "The Earth is approximated as a sphere in navigation. The officer asks the cadet to explain how the equation of a sphere relates to describing a position on the Earth's surface.",
    instructions: [
      "Write the equation of a sphere centred at the origin.",
      "Explain what the radius represents for the Earth model.",
      "Explain how a point on the sphere relates to a position on Earth.",
      "Report your explanation in clear English."
    ],
    deliverable: "A note in English giving the equation of a sphere and explaining how it relates to describing a position on the Earth's surface.",
    assessmentCriteria: [
      "The sphere equation is written correctly.",
      "The meaning of the radius is correct.",
      "The link to position on Earth is sound.",
      "The explanation is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "DIN321",
    subjectName: "Dinámica",
    subjectId: "pn-s3-dinamica",
    unit: "Cinemática de Partículas y Cuerpos Rígidos",
    topic: "Movimiento rectilíneo de partículas",
    week: 1,
    taskId: "pn-din321-w01-rectilinear-motion",
    taskTitle: "Describe A Vessel's Rectilinear Motion",
    scenario: "A vessel accelerates along a straight channel. The officer asks the cadet to describe its rectilinear motion using displacement, velocity, and acceleration.",
    instructions: [
      "Define displacement, velocity, and acceleration for the vessel.",
      "State the relationship between them in straight-line motion.",
      "Given a simple case, describe how the vessel's velocity changes under constant acceleration.",
      "Report your answer in clear English."
    ],
    deliverable: "A note in English describing a vessel's rectilinear motion in terms of displacement, velocity, and acceleration, with their relationship.",
    assessmentCriteria: [
      "The three quantities are defined correctly.",
      "Their relationship is stated correctly.",
      "The description of changing velocity is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "DIN321",
    subjectName: "Dinámica",
    subjectId: "pn-s3-dinamica",
    unit: "Leyes del Movimiento de Newton",
    topic: "Segunda ley de Newton",
    week: 2,
    taskId: "pn-din321-w02-newton-second-law",
    taskTitle: "Apply Newton's Second Law To A Vessel",
    scenario: "A tug applies a known force to a vessel of known mass. The officer asks the cadet to use Newton's second law to find the resulting acceleration.",
    instructions: [
      "State the force applied and the mass of the vessel.",
      "Apply Newton's second law (F = m·a) to find the acceleration.",
      "State the result with the correct unit.",
      "Explain why a larger vessel accelerates more slowly under the same force."
    ],
    deliverable: "A calculation note in English giving the vessel's acceleration using Newton's second law, with working shown and a short explanation.",
    assessmentCriteria: [
      "Newton's second law is applied correctly.",
      "The acceleration is calculated accurately with the correct unit.",
      "The explanation about mass is correct.",
      "The note is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "DIN321",
    subjectName: "Dinámica",
    subjectId: "pn-s3-dinamica",
    unit: "Cinética de Sistemas de Partículas",
    topic: "Trabajo y energía",
    week: 3,
    taskId: "pn-din321-w03-work-energy-vessel",
    taskTitle: "Apply Work And Energy To A Vessel",
    scenario: "The officer asks the cadet to explain, using work and energy, why a moving vessel needs a long distance to stop and what this means for safe navigation.",
    instructions: [
      "Define kinetic energy for the moving vessel.",
      "Explain how the vessel's kinetic energy must be removed to stop it.",
      "Explain why greater speed means a much greater stopping distance.",
      "Report your answer in clear English."
    ],
    deliverable: "A note in English using work and energy to explain why a moving vessel needs a long stopping distance, and the safe-navigation implication.",
    assessmentCriteria: [
      "Kinetic energy is correctly defined.",
      "The stopping reasoning is sound.",
      "The speed-distance relationship is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "DIN321",
    subjectName: "Dinámica",
    subjectId: "pn-s3-dinamica",
    unit: "Cinética de Sistemas de Partículas",
    topic: "Impulso y cantidad de movimiento de una partícula y un sistema de partículas",
    week: 4,
    taskId: "pn-din321-w04-momentum-berthing",
    taskTitle: "Apply Momentum To A Berthing Manoeuvre",
    scenario: "During berthing, a vessel makes contact with the fenders. The officer asks the cadet to explain, using impulse and momentum, why a slow approach speed is critical.",
    instructions: [
      "Define momentum for the approaching vessel.",
      "Explain how impulse relates the contact force to the change in momentum.",
      "Explain why a small increase in approach speed greatly increases the impact.",
      "Report your answer in clear English."
    ],
    deliverable: "A note in English using impulse and momentum to explain why a slow berthing approach is critical, with the reasoning shown.",
    assessmentCriteria: [
      "Momentum is correctly defined.",
      "The impulse-momentum relationship is correct.",
      "The reasoning about approach speed is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "ING317",
    subjectName: "Inglés Marítimo III",
    subjectId: "pn-s3-ingles-maritimo-iii",
    unit: "Presente perfecto",
    topic: "Aprende a construir el present perfect, usando have como auxiliar + verbos regulares e irregulares en pasado participio en afirmativo, negativo e interrogativo",
    week: 1,
    taskId: "pn-ing317-w01-present-perfect-handover",
    taskTitle: "Report Completed Work At Watch Handover",
    scenario: "At watch handover, you must report what has already been done during your watch. Using the present perfect, report the completed tasks to the relieving officer.",
    instructions: [
      "List two or three tasks completed during the watch.",
      "Report each using the present perfect (e.g. 'I have checked...').",
      "Distinguish what has been completed from what is still pending.",
      "Keep the handover clear and professional in English."
    ],
    deliverable: "A watch handover report in English using the present perfect to state completed tasks, distinguished from pending ones.",
    assessmentCriteria: [
      "The present perfect is formed and used correctly.",
      "Completed tasks are clearly reported.",
      "Completed vs pending is clearly distinguished.",
      "The handover reads professionally, not as a grammar exercise."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "ING317",
    subjectName: "Inglés Marítimo III",
    subjectId: "pn-s3-ingles-maritimo-iii",
    unit: "Superlativos",
    topic: "Usa el superlativo de adjetivos para calificar sustantivos",
    week: 2,
    taskId: "pn-ing317-w02-superlatives-description",
    taskTitle: "Describe Vessel Features Using Superlatives",
    scenario: "You are comparing vessels in a fleet. The officer asks you to describe key features using superlatives (largest, deepest, fastest) so the comparison is clear.",
    instructions: [
      "Choose three features to compare across vessels (e.g. length, draught, speed).",
      "Describe each using the correct superlative form.",
      "Make sure the description is accurate and unambiguous.",
      "Report the comparison in clear maritime English."
    ],
    deliverable: "A short comparison in English describing vessel features using correct superlative forms.",
    assessmentCriteria: [
      "Superlative forms are correct.",
      "The features compared are relevant.",
      "The description is accurate and unambiguous.",
      "The English is clear and professional."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "ING317",
    subjectName: "Inglés Marítimo III",
    subjectId: "pn-s3-ingles-maritimo-iii",
    unit: "Futuro",
    topic: "Empleó de will,going to, el presente continuo y el presente simple, para hablar acerca del futuro",
    week: 3,
    taskId: "pn-ing317-w03-future-passage-plan",
    taskTitle: "State A Passage Plan Using Future Forms",
    scenario: "You must brief the next watch on the planned movements of the vessel. Using future forms (will, going to), state what the vessel is going to do over the coming hours.",
    instructions: [
      "State two or three planned movements or actions for the coming hours.",
      "Use future forms (will / going to) correctly for plans and intentions.",
      "Include an approximate time for each planned action.",
      "Keep the brief clear and professional in English."
    ],
    deliverable: "A short passage brief in English using future forms to state the vessel's planned actions over the coming hours, with times.",
    assessmentCriteria: [
      "Future forms are used correctly for plans.",
      "The planned actions are clear and realistic.",
      "Times are included appropriately.",
      "The brief reads professionally in English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "ING317",
    subjectName: "Inglés Marítimo III",
    subjectId: "pn-s3-ingles-maritimo-iii",
    unit: "Introducción: Inglés Marítimo",
    topic: "Comandos en situaciones de emergencia a bordo",
    week: 4,
    taskId: "pn-ing317-w04-emergency-commands",
    taskTitle: "Give Standard Emergency Commands On Board",
    scenario: "In an emergency, commands must be given clearly and in standard form so any crew member understands instantly. The officer asks you to give a set of standard emergency commands in English.",
    instructions: [
      "Choose an emergency scenario (e.g. fire, man overboard, abandon ship).",
      "Give the standard commands a crew member would shout or hear, in correct English.",
      "Keep each command short, clear, and unambiguous.",
      "Explain why standard wording matters in an emergency."
    ],
    deliverable: "A set of standard emergency commands in English for a chosen scenario, with a note on why standard wording matters.",
    assessmentCriteria: [
      "The commands are appropriate to the emergency.",
      "Each command is short, clear, and standard.",
      "The English is correct and unambiguous.",
      "The reasoning about standard wording is sound."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "PMR322",
    subjectName: "Prácticas Marineras III",
    subjectId: "pn-s3-practicas-marineras-iii",
    unit: "Mantenimiento y Operación de Botes Salvavidas",
    topic: "Arranque y mantenimiento del motor del bote",
    week: 1,
    taskId: "pn-pmr322-w01-lifeboat-engine",
    taskTitle: "Describe Lifeboat Engine Start And Checks",
    scenario: "Before a survival craft drill, the bosun asks the cadet to describe how the lifeboat engine is started and what routine checks keep it ready for an emergency.",
    instructions: [
      "Describe the basic steps to start a lifeboat engine.",
      "List two routine maintenance checks that keep it ready.",
      "Explain why a lifeboat engine must always start reliably.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English describing how a lifeboat engine is started, two readiness checks, and why reliability is critical.",
    assessmentCriteria: [
      "The start procedure is described correctly.",
      "The maintenance checks are relevant.",
      "The reliability reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "PMR322",
    subjectName: "Prácticas Marineras III",
    subjectId: "pn-s3-practicas-marineras-iii",
    unit: "Procedimientos para controlar vías de agua",
    topic: "Tipos de vías",
    week: 2,
    taskId: "pn-pmr322-w02-water-ingress",
    taskTitle: "Respond To A Hull Water Ingress",
    scenario: "Water is entering through a small hull breach. The officer asks the cadet to identify the type of ingress and the immediate steps to control it.",
    instructions: [
      "Identify the type of water ingress (e.g. crack, failed seal, damaged plate).",
      "State the immediate actions to limit the flooding.",
      "Name a material or method used to control the ingress.",
      "Report the response in clear maritime English."
    ],
    deliverable: "A note in English identifying a type of water ingress, the immediate control actions, and a method/material used to control it.",
    assessmentCriteria: [
      "The ingress type is correctly identified.",
      "The immediate actions are appropriate.",
      "The control method is valid.",
      "The response is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "PMR322",
    subjectName: "Prácticas Marineras III",
    subjectId: "pn-s3-practicas-marineras-iii",
    unit: "Seguridad en áreas de trabajo",
    topic: "Utilización de equipo y herramientas adecuados",
    week: 3,
    taskId: "pn-pmr322-w03-work-area-safety",
    taskTitle: "Plan Safe Use Of Tools On Deck",
    scenario: "The cadet is assigned a deck maintenance task. The officer asks them to plan the safe use of tools and protective equipment for the job.",
    instructions: [
      "Describe the deck task and the tools required.",
      "State the personal protective equipment needed.",
      "Identify one hazard of the task and how to control it.",
      "Report the safety plan in clear maritime English."
    ],
    deliverable: "A short safety plan in English for a deck task, listing tools, protective equipment, and one hazard with its control.",
    assessmentCriteria: [
      "Tools and PPE are appropriate to the task.",
      "The hazard identified is realistic.",
      "The control measure is sound.",
      "The plan is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "PMR322",
    subjectName: "Prácticas Marineras III",
    subjectId: "pn-s3-practicas-marineras-iii",
    unit: "Manejo de pañoles",
    topic: "Elaboración de inventarios",
    week: 4,
    taskId: "pn-pmr322-w04-store-inventory",
    taskTitle: "Keep A Deck Store Inventory",
    scenario: "The cadet is responsible for a deck store. The officer asks them to explain how to keep an accurate inventory and why it matters for operations and safety.",
    instructions: [
      "Explain what information an inventory record should contain.",
      "Describe how items are checked in and out to keep the record accurate.",
      "Explain why an accurate store inventory matters operationally.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining how to keep an accurate deck store inventory and why it matters operationally.",
    assessmentCriteria: [
      "The inventory contents are appropriate.",
      "The check-in/out method keeps the record accurate.",
      "The operational reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "pn-s3-educacion-fisica-iii",
    unit: "Condición física",
    topic: "Resistencia cardiorespiratoria",
    week: 1,
    taskId: "pn-c0011iii-w01-endurance-demands",
    taskTitle: "Explain Endurance Demands Of Long Watches",
    scenario: "Long watches and sustained operations demand cardiorespiratory endurance. The training officer asks the cadet to explain why endurance matters for a deck officer and how it is built.",
    instructions: [
      "Define cardiorespiratory endurance in your own words.",
      "Give two shipboard situations where endurance is essential.",
      "Describe one way endurance is trained and maintained.",
      "Report your answer in clear English using correct fitness terminology."
    ],
    deliverable: "A note in English defining cardiorespiratory endurance, two shipboard situations needing it, and how it is trained.",
    assessmentCriteria: [
      "Endurance is correctly defined.",
      "The shipboard situations are relevant.",
      "The training method is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "pn-s3-educacion-fisica-iii",
    unit: "Percepción y coordinación motriz",
    topic: "Coordinación motriz y psicomotriz",
    week: 2,
    taskId: "pn-c0011iii-w02-coordination-tasks",
    taskTitle: "Link Coordination To Precise Deck Tasks",
    scenario: "Many deck tasks demand fine and gross motor coordination. The officer asks the cadet to connect coordination to specific tasks and explain the risk when it is lacking.",
    instructions: [
      "Name two deck tasks that require good motor coordination.",
      "Explain the difference between fine and gross motor coordination with an example.",
      "State the risk if coordination fails during one of those tasks.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English linking motor coordination to two deck tasks, with the fine/gross distinction and the risk of poor coordination.",
    assessmentCriteria: [
      "The tasks chosen genuinely need coordination.",
      "The fine/gross distinction is correct.",
      "The risk reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "pn-s3-educacion-fisica-iii",
    unit: "Natación",
    topic: "Sobrevivencia",
    week: 3,
    taskId: "pn-c0011iii-w03-survival-swimming",
    taskTitle: "Describe Survival Swimming Skills",
    scenario: "Survival in the water is a core competency. The instructor asks the cadet to describe the survival swimming skills needed if a crew member ends up in the sea.",
    instructions: [
      "Describe how to enter the water safely from a height.",
      "Describe a technique to stay afloat and conserve energy.",
      "Explain how to move towards a survival craft or group.",
      "Report the skills in clear English suitable for a safety briefing."
    ],
    deliverable: "A survival swimming brief in English covering safe entry, staying afloat, and reaching a survival craft or group.",
    assessmentCriteria: [
      "The safe entry method is correct.",
      "The floating technique is sound.",
      "The approach to a craft/group is correct.",
      "The brief is clear and appropriate, in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "pn-s3-educacion-fisica-iii",
    unit: "Concentración",
    topic: "Juegos de concentración",
    week: 4,
    taskId: "pn-c0011iii-w04-focus-precision",
    taskTitle: "Connect Concentration To Precise Operations",
    scenario: "Precise operations like plotting or steering demand sustained focus. The officer asks the cadet to explain how concentration is trained and why losing it is dangerous on the bridge.",
    instructions: [
      "Explain why sustained concentration matters in precise bridge operations.",
      "Describe one method used to train and sustain concentration.",
      "State the danger of a lapse in concentration during steering or plotting.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining why concentration matters in precise bridge work, how it is trained, and the danger of a lapse.",
    assessmentCriteria: [
      "The importance of concentration is correctly explained.",
      "The training method is relevant.",
      "The danger of a lapse is realistic.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0038",
    subjectName: "Técnicas Avanzadas de Lucha Contra Incendio",
    subjectId: "pn-s3-tecnicas-avanzadas-lucha-contra-incendio",
    unit: "Control de la Operaciones de Lucha Contra Incendio a bordo del Buque",
    topic: "Tácticas y procedimientos para lucha contra incendios cuando el buque está en el mar",
    week: 1,
    taskId: "pn-c0038-w01-firefighting-tactics",
    taskTitle: "Outline Firefighting Tactics At Sea",
    scenario: "A fire breaks out while the vessel is at sea, with no outside help available. The officer asks the cadet to outline the basic tactics for fighting a fire on board.",
    instructions: [
      "State the first actions on discovering a fire (raise alarm, etc.).",
      "Outline the basic tactic to contain and attack the fire.",
      "Explain why fighting fire at sea differs from ashore (no outside help).",
      "Report the tactics in clear maritime English."
    ],
    deliverable: "A note in English outlining firefighting tactics at sea: first actions, containment/attack, and why self-reliance is critical.",
    assessmentCriteria: [
      "The first actions are correct and in order.",
      "The containment/attack tactic is sound.",
      "The self-reliance reasoning is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0038",
    subjectName: "Técnicas Avanzadas de Lucha Contra Incendio",
    subjectId: "pn-s3-tecnicas-avanzadas-lucha-contra-incendio",
    unit: "Organizar y formar cuadrillas de lucha contra incendios",
    topic: "Formación y asignación del personal a las cuadrillas de lucha contra incendios",
    week: 2,
    taskId: "pn-c0038-w02-fire-teams",
    taskTitle: "Organise A Fire-Fighting Team",
    scenario: "The officer asks the cadet to explain how a fire-fighting team is organised on board and what roles must be assigned for an effective response.",
    instructions: [
      "Name the key roles in a fire-fighting team.",
      "State the main responsibility of each role.",
      "Explain why clear role assignment matters in an emergency.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English naming the key roles in a fire-fighting team, their responsibilities, and why clear assignment matters.",
    assessmentCriteria: [
      "The roles are valid and relevant.",
      "The responsibilities are correct.",
      "The reasoning about role clarity is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0038",
    subjectName: "Técnicas Avanzadas de Lucha Contra Incendio",
    subjectId: "pn-s3-tecnicas-avanzadas-lucha-contra-incendio",
    unit: "Inspeccionar los servicios de los sistemas y equipos de detección y extinción de incendios",
    topic: "Equipo de detección de incendios",
    week: 3,
    taskId: "pn-c0038-w03-detection-equipment",
    taskTitle: "Inspect Fire Detection Equipment",
    scenario: "The cadet is asked to inspect the fire detection equipment. The officer asks them to explain what to check and why detection systems must be kept reliable.",
    instructions: [
      "Name two types of fire detection equipment on board.",
      "State what to check to confirm each is working.",
      "Explain why early detection is critical to fighting a fire.",
      "Report the inspection in clear maritime English."
    ],
    deliverable: "A note in English naming two fire detection systems, what to check on each, and why early detection is critical.",
    assessmentCriteria: [
      "The detection equipment is valid.",
      "The checks are appropriate.",
      "The early-detection reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0038",
    subjectName: "Técnicas Avanzadas de Lucha Contra Incendio",
    subjectId: "pn-s3-tecnicas-avanzadas-lucha-contra-incendio",
    unit: "Control de la Operaciones de Lucha Contra Incendio a bordo del Buque",
    topic: "Procedimientos para coordinar la lucha contra incendios con los bomberos en tierra",
    week: 4,
    taskId: "pn-c0038-w04-shore-coordination",
    taskTitle: "Coordinate With Shore Fire Brigades",
    scenario: "The vessel is in port and a fire requires shore fire brigade support. The officer asks the cadet to explain how the ship coordinates with shore firefighters.",
    instructions: [
      "State what information the ship must give the shore brigade on arrival.",
      "Explain who on board liaises with the shore firefighters.",
      "Explain why coordination and clear communication are critical.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining how a ship coordinates with shore fire brigades: information to provide, who liaises, and why clear communication matters.",
    assessmentCriteria: [
      "The information to provide is appropriate.",
      "The liaison role is correct.",
      "The coordination reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0101",
    subjectName: "Redacción Avanzada",
    subjectId: "pn-s3-redaccion-avanzada",
    unit: "Características básicas de la redacción",
    topic: "Organización de las ideas para ordenarlas en forma lógica",
    week: 1,
    taskId: "pn-c0101-w01-organise-ideas",
    taskTitle: "Organise Ideas In A Logbook Entry",
    scenario: "A logbook entry must record events in a clear, logical order. The officer asks the cadet to write an entry that organises the events so anyone reading it understands what happened.",
    instructions: [
      "List the events to record in the logbook entry.",
      "Order them logically (chronological or by importance).",
      "Write the entry so the sequence is clear to any reader.",
      "Keep the language precise, in clear English."
    ],
    deliverable: "A logbook entry in English that records events in a clear, logical order, understandable to any reader.",
    assessmentCriteria: [
      "The events are ordered logically.",
      "The sequence is clear to a reader.",
      "The language is precise and unambiguous.",
      "The entry is professional and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0101",
    subjectName: "Redacción Avanzada",
    subjectId: "pn-s3-redaccion-avanzada",
    unit: "Claridad en la oración",
    topic: "Evitar frases ambiguas",
    week: 2,
    taskId: "pn-c0101-w02-avoid-ambiguity",
    taskTitle: "Remove Ambiguity From A Report",
    scenario: "An ambiguous sentence in a report could be dangerously misread. The officer asks the cadet to rewrite unclear sentences so there is only one possible meaning.",
    instructions: [
      "Take an ambiguous or unclear sentence about a shipboard situation.",
      "Identify why it could be misread.",
      "Rewrite it so it has only one clear meaning.",
      "Explain in English what made the rewrite clearer."
    ],
    deliverable: "A short exercise in English showing an ambiguous sentence, why it is unclear, and a rewritten version with a single clear meaning.",
    assessmentCriteria: [
      "The ambiguity is correctly identified.",
      "The rewrite removes the ambiguity.",
      "The rewrite preserves the intended meaning.",
      "The explanation is sound and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0101",
    subjectName: "Redacción Avanzada",
    subjectId: "pn-s3-redaccion-avanzada",
    unit: "Atributos de los párrafos",
    topic: "Unidad entre la idea principal y las secundarias",
    week: 3,
    taskId: "pn-c0101-w03-paragraph-unity",
    taskTitle: "Write A Unified Report Paragraph",
    scenario: "A report paragraph should develop one main idea with supporting detail. The officer asks the cadet to write a paragraph where every sentence supports a single main idea.",
    instructions: [
      "State the main idea of the paragraph.",
      "Write supporting sentences that all relate to that main idea.",
      "Remove or avoid any sentence that does not belong.",
      "Keep the paragraph clear and in correct English."
    ],
    deliverable: "A unified report paragraph in English with a clear main idea and supporting sentences that all relate to it.",
    assessmentCriteria: [
      "The main idea is clear.",
      "All supporting sentences relate to it.",
      "No off-topic sentences remain.",
      "The paragraph is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0101",
    subjectName: "Redacción Avanzada",
    subjectId: "pn-s3-redaccion-avanzada",
    unit: "Orden de Palabras e Ideas",
    topic: "Jerarquización de las ideas",
    week: 4,
    taskId: "pn-c0101-w04-prioritise-ideas",
    taskTitle: "Prioritise Information In An Incident Report",
    scenario: "An incident report must put the most important information first so a busy reader grasps it immediately. The officer asks the cadet to structure a report by priority.",
    instructions: [
      "Identify the most critical fact of the incident.",
      "Place it first, then arrange the rest by decreasing importance.",
      "Ensure a reader who stops after one line still gets the key point.",
      "Write the report in clear English."
    ],
    deliverable: "An incident report in English structured by priority, with the most critical information first and the rest in decreasing importance.",
    assessmentCriteria: [
      "The most critical fact is correctly identified and placed first.",
      "The remaining information is ordered by importance.",
      "A reader gets the key point immediately.",
      "The report is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "ELE316",
    subjectName: "Electricidad III",
    subjectId: "mn-s3-electricidad-iii",
    unit: "Magnetismo",
    topic: "Campo magnético",
    week: 1,
    taskId: "mn-ele316-w01-magnetic-field",
    taskTitle: "Explain The Magnetic Field In A Machine",
    scenario: "The engineer asks the cadet to explain what a magnetic field is and where it appears in engine-room electrical machines, before studying motors and generators.",
    instructions: [
      "Define a magnetic field in your own words.",
      "State where a magnetic field is found in an electrical machine (e.g. motor, generator).",
      "Explain the relationship between current and the magnetic field it produces.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English defining a magnetic field, where it appears in an electrical machine, and how current relates to it.",
    assessmentCriteria: [
      "The magnetic field is correctly defined.",
      "Its location in a machine is correct.",
      "The current-field relationship is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "ELE316",
    subjectName: "Electricidad III",
    subjectId: "mn-s3-electricidad-iii",
    unit: "Leyes de inducción",
    topic: "Ley de Lenz",
    week: 2,
    taskId: "mn-ele316-w02-lenz-law",
    taskTitle: "Apply Lenz's Law To Induced Current",
    scenario: "The engineer asks the cadet to explain Lenz's law and how it determines the direction of induced current in a generator winding.",
    instructions: [
      "State Lenz's law in your own words.",
      "Explain how it determines the direction of an induced current.",
      "Connect it to what happens in a generator winding.",
      "Report your explanation in clear engine-room English."
    ],
    deliverable: "A note in English explaining Lenz's law, how it sets the direction of induced current, and its role in a generator.",
    assessmentCriteria: [
      "Lenz's law is correctly stated.",
      "The induced-current direction reasoning is correct.",
      "The generator connection is sound.",
      "The explanation is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "ELE316",
    subjectName: "Electricidad III",
    subjectId: "mn-s3-electricidad-iii",
    unit: "Producción de corriente continua",
    topic: "Generadores de Cd, serie, paralelo y compound",
    week: 3,
    taskId: "mn-ele316-w03-dc-generators",
    taskTitle: "Compare DC Generator Configurations",
    scenario: "The engine room uses DC generators. The engineer asks the cadet to compare series, shunt, and compound DC generators and explain where each is suitable.",
    instructions: [
      "Describe the basic difference between series, shunt, and compound DC generators.",
      "State one characteristic of each in terms of voltage behaviour under load.",
      "State which configuration suits a stable-voltage application and why.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English comparing series, shunt, and compound DC generators, with their load behaviour and a suitable application.",
    assessmentCriteria: [
      "The three configurations are correctly distinguished.",
      "The load behaviour of each is accurate.",
      "The application choice is justified.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "ELE316",
    subjectName: "Electricidad III",
    subjectId: "mn-s3-electricidad-iii",
    unit: "Motores de corriente continua",
    topic: "Puesta en servicio de los motores de corriente continua",
    week: 4,
    taskId: "mn-ele316-w04-dc-motor-startup",
    taskTitle: "Put A DC Motor Into Service Safely",
    scenario: "The cadet must put a DC motor into service. The engineer asks them to describe the correct start-up procedure and the safety checks before energizing it.",
    instructions: [
      "List the checks to perform before starting the DC motor.",
      "Describe the correct start-up sequence.",
      "Explain why a starting resistance is used when starting a DC motor.",
      "Report the procedure in clear engine-room English."
    ],
    deliverable: "A note in English describing the safe start-up of a DC motor: pre-checks, sequence, and the reason for a starting resistance.",
    assessmentCriteria: [
      "The pre-start checks are appropriate.",
      "The start-up sequence is correct.",
      "The reason for starting resistance is correct.",
      "The procedure is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "TEM319",
    subjectName: "Tecnología de Materiales",
    subjectId: "mn-s3-tecnologia-materiales",
    unit: "Materiales",
    topic: "Naturaleza y propiedades de los materiales",
    week: 1,
    taskId: "mn-tem319-w01-material-properties",
    taskTitle: "Match Material Properties To Engine Parts",
    scenario: "The engineer asks the cadet to connect basic material properties (strength, hardness, ductility) to the engine-room parts that need them.",
    instructions: [
      "Define three material properties (e.g. strength, hardness, ductility).",
      "Match each property to an engine-room component that requires it.",
      "Explain why the right property matters for that component.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English matching three material properties to engine-room components and explaining why each property matters.",
    assessmentCriteria: [
      "The properties are correctly defined.",
      "The component matches are appropriate.",
      "The reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "TEM319",
    subjectName: "Tecnología de Materiales",
    subjectId: "mn-s3-tecnologia-materiales",
    unit: "Clases de Acero",
    topic: "Clasificación de los aceros Hierro/Carbono, atendiendo su porcentaje de Carbono",
    week: 2,
    taskId: "mn-tem319-w02-steel-classification",
    taskTitle: "Classify Steels By Carbon Content",
    scenario: "The engineer asks the cadet to explain how steels are classified by carbon content and how that affects their use in the engine room.",
    instructions: [
      "Explain how carbon content classifies steel (low, medium, high carbon).",
      "State how increasing carbon affects hardness and brittleness.",
      "Give one engine-room use suited to a particular steel type.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining steel classification by carbon content, the effect on properties, and an engine-room use.",
    assessmentCriteria: [
      "The carbon classification is correct.",
      "The effect on properties is accurate.",
      "The use case is appropriate.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "TEM319",
    subjectName: "Tecnología de Materiales",
    subjectId: "mn-s3-tecnologia-materiales",
    unit: "Corrosión",
    topic: "Corrosión galvánica",
    week: 3,
    taskId: "mn-tem319-w03-galvanic-corrosion",
    taskTitle: "Explain And Prevent Galvanic Corrosion",
    scenario: "Galvanic corrosion threatens engine-room and hull components. The engineer asks the cadet to explain how it occurs and how it is prevented on board.",
    instructions: [
      "Explain what causes galvanic corrosion (dissimilar metals + electrolyte).",
      "Give an engine-room or hull example where it occurs.",
      "State one method used to prevent it (e.g. sacrificial anode).",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining galvanic corrosion, an example on board, and a prevention method.",
    assessmentCriteria: [
      "The cause of galvanic corrosion is correct.",
      "The example is valid.",
      "The prevention method is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "TEM319",
    subjectName: "Tecnología de Materiales",
    subjectId: "mn-s3-tecnologia-materiales",
    unit: "Tratamiento térmico de los metales",
    topic: "Recocido, temple, revenido",
    week: 4,
    taskId: "mn-tem319-w04-heat-treatment",
    taskTitle: "Explain Heat Treatment Of Steel",
    scenario: "The engineer asks the cadet to explain the basic heat treatments of steel (annealing, quenching, tempering) and what each one does to the metal.",
    instructions: [
      "Describe what annealing does to steel.",
      "Describe what quenching does to steel.",
      "Describe what tempering does and why it follows quenching.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining annealing, quenching, and tempering of steel and the effect of each.",
    assessmentCriteria: [
      "Annealing is correctly described.",
      "Quenching is correctly described.",
      "Tempering and its purpose are correct.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "TAL320",
    subjectName: "Taller II",
    subjectId: "mn-s3-taller-ii",
    unit: "Seguridad durante el proceso de soldadura",
    topic: "Ropa y equipo de protección",
    week: 1,
    taskId: "mn-tal320-w01-welding-safety",
    taskTitle: "Plan Personal Protection For Welding",
    scenario: "Before welding in the workshop, the cadet must protect themselves. The instructor asks them to plan the protective equipment and precautions for a welding job.",
    instructions: [
      "List the protective clothing and equipment needed for welding.",
      "Explain the effect of welding radiation on eyes and skin and how to protect against it.",
      "State one precaution for the work area before starting.",
      "Report the safety plan in clear engine-room English."
    ],
    deliverable: "A welding safety plan in English listing protective equipment, eye/skin protection, and one work-area precaution.",
    assessmentCriteria: [
      "The protective equipment is appropriate.",
      "The radiation protection is correct.",
      "The work-area precaution is relevant.",
      "The plan is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "TAL320",
    subjectName: "Taller II",
    subjectId: "mn-s3-taller-ii",
    unit: "Normas y tipos de electrodos para soldadura eléctrica",
    topic: "Selección de electrodo, considerando el tipo de trabajo",
    week: 2,
    taskId: "mn-tal320-w02-electrode-selection",
    taskTitle: "Select The Right Welding Electrode",
    scenario: "The instructor gives the cadet a welding job and asks them to select an appropriate electrode and justify the choice.",
    instructions: [
      "Describe the welding job and the base material.",
      "State what factors guide electrode selection.",
      "Choose an appropriate electrode type and justify it.",
      "Report your selection in clear engine-room English."
    ],
    deliverable: "A note in English selecting a welding electrode for a given job, with the factors considered and justification.",
    assessmentCriteria: [
      "The selection factors are correct.",
      "The electrode choice suits the job.",
      "The justification is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "TAL320",
    subjectName: "Taller II",
    subjectId: "mn-s3-taller-ii",
    unit: "Principio de soldadura por arco eléctrico",
    topic: "Selección correcta del amperaje respecto al electrodo",
    week: 3,
    taskId: "mn-tal320-w03-arc-welding-amperage",
    taskTitle: "Set The Correct Amperage For Arc Welding",
    scenario: "During arc welding, the wrong amperage ruins the weld. The instructor asks the cadet to explain how to set the correct amperage for the electrode in use.",
    instructions: [
      "Explain how electrode size relates to the amperage needed.",
      "State what happens if the amperage is too high or too low.",
      "Describe how to confirm the setting is correct on a test piece.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining how to set the correct arc-welding amperage for an electrode, and the effect of wrong settings.",
    assessmentCriteria: [
      "The electrode-amperage relationship is correct.",
      "The effects of wrong amperage are accurate.",
      "The verification method is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "TAL320",
    subjectName: "Taller II",
    subjectId: "mn-s3-taller-ii",
    unit: "Fallas comunes en las uniones de soldaduras",
    topic: "Fallas en las uniones con soldadura y formas para evitarlas",
    week: 4,
    taskId: "mn-tal320-w04-weld-defects",
    taskTitle: "Identify And Prevent Weld Defects",
    scenario: "The instructor shows the cadet a faulty weld. The cadet must identify common weld defects and explain how to prevent them.",
    instructions: [
      "Name two common weld defects (e.g. porosity, undercut, lack of fusion).",
      "State the likely cause of each.",
      "Explain how each can be prevented.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English naming two weld defects, their causes, and how to prevent each.",
    assessmentCriteria: [
      "The defects are valid and correctly named.",
      "The causes are accurate.",
      "The prevention methods are correct.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "GEA317",
    subjectName: "Geometría Analítica",
    subjectId: "mn-s3-geometria-analitica",
    unit: "Línea recta",
    topic: "Distancia entre dos puntos",
    week: 1,
    taskId: "mn-gea317-w01-distance-two-points",
    taskTitle: "Calculate Distance Between Two Points On A Part",
    scenario: "An engineering drawing gives two reference points on a component. The engineer asks the cadet to calculate the straight-line distance between them using the distance formula.",
    instructions: [
      "Identify the coordinates of the two reference points.",
      "Apply the distance formula between two points.",
      "Calculate the distance with the correct unit.",
      "State the result clearly for the workshop measurement."
    ],
    deliverable: "A distance calculation note in English giving the straight-line distance between two points on a component, with the formula and working shown.",
    assessmentCriteria: [
      "The distance formula is applied correctly.",
      "The calculation is accurate.",
      "The result carries the correct unit.",
      "The note is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "GEA317",
    subjectName: "Geometría Analítica",
    subjectId: "mn-s3-geometria-analitica",
    unit: "Línea recta",
    topic: "Pendiente",
    week: 2,
    taskId: "mn-gea317-w02-slope-taper",
    taskTitle: "Use Slope To Describe A Taper",
    scenario: "A machined part has a tapered edge. The engineer asks the cadet to express the taper as a slope between two points and explain what the slope means physically.",
    instructions: [
      "Identify the two points defining the tapered edge.",
      "Calculate the slope between them.",
      "Explain what the slope represents for the taper (rise over run).",
      "Report the result in clear engine-room English."
    ],
    deliverable: "A slope calculation note in English giving the slope of a tapered edge and explaining what it represents.",
    assessmentCriteria: [
      "The slope is calculated correctly.",
      "The physical meaning is explained correctly.",
      "The result is clearly stated.",
      "The note is in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "GEA317",
    subjectName: "Geometría Analítica",
    subjectId: "mn-s3-geometria-analitica",
    unit: "Circunferencia",
    topic: "Ecuación general de la circunferencia",
    week: 3,
    taskId: "mn-gea317-w03-circle-shaft",
    taskTitle: "Model A Shaft Cross-Section With A Circle",
    scenario: "A rotating shaft has a circular cross-section. The engineer asks the cadet to write the equation of a circle that models the cross-section of a given radius.",
    instructions: [
      "State the centre and radius of the shaft cross-section.",
      "Write the equation of the circle for that centre and radius.",
      "Explain what the radius represents for the shaft.",
      "Report the result in clear engine-room English."
    ],
    deliverable: "A note in English giving the equation of a circle modelling a shaft cross-section, with an explanation of the radius.",
    assessmentCriteria: [
      "The circle equation is written correctly.",
      "Centre and radius are used correctly.",
      "The link to the shaft is sound.",
      "The note is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "GEA317",
    subjectName: "Geometría Analítica",
    subjectId: "mn-s3-geometria-analitica",
    unit: "Geometría Analítica del Espacio",
    topic: "Ecuación de un plano",
    week: 4,
    taskId: "mn-gea317-w04-plane-mounting",
    taskTitle: "Describe A Mounting Surface With A Plane Equation",
    scenario: "A machine is bolted to a flat mounting surface. The engineer asks the cadet to explain how a plane equation describes that surface in space.",
    instructions: [
      "Write the general equation of a plane.",
      "Explain what the equation describes geometrically.",
      "Relate it to a flat mounting surface for machinery.",
      "Report your explanation in clear engine-room English."
    ],
    deliverable: "A note in English giving the equation of a plane and explaining how it describes a flat mounting surface.",
    assessmentCriteria: [
      "The plane equation is written correctly.",
      "Its geometric meaning is correct.",
      "The link to a mounting surface is sound.",
      "The explanation is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "DIN318",
    subjectName: "Dinámica",
    subjectId: "mn-s3-dinamica",
    unit: "Cinemática de Partículas y Cuerpos Rígidos",
    topic: "Movimiento rectilíneo de partículas",
    week: 1,
    taskId: "mn-din318-w01-piston-motion",
    taskTitle: "Describe Piston Rectilinear Motion",
    scenario: "A piston moves back and forth in a cylinder. The engineer asks the cadet to describe its rectilinear motion using displacement, velocity, and acceleration.",
    instructions: [
      "Define displacement, velocity, and acceleration for the piston.",
      "State the relationship between them in straight-line motion.",
      "Describe how the piston's velocity changes through its stroke.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English describing piston rectilinear motion in terms of displacement, velocity, and acceleration.",
    assessmentCriteria: [
      "The three quantities are defined correctly.",
      "Their relationship is correct.",
      "The description of changing velocity is reasonable.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "DIN318",
    subjectName: "Dinámica",
    subjectId: "mn-s3-dinamica",
    unit: "Cinemática de Partículas y Cuerpos Rígidos",
    topic: "Rotación con respecto a un eje fijo de cuerpo rígido",
    week: 2,
    taskId: "mn-din318-w02-shaft-rotation",
    taskTitle: "Describe Rotation Of A Shaft About An Axis",
    scenario: "A propeller shaft rotates about a fixed axis. The engineer asks the cadet to describe the rotation using angular velocity and explain how points on the shaft move.",
    instructions: [
      "Define angular velocity for the rotating shaft.",
      "Explain how a point further from the axis moves compared to one near it.",
      "Relate the rotation to the work the shaft transmits.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English describing the rotation of a shaft about a fixed axis using angular velocity and how points on it move.",
    assessmentCriteria: [
      "Angular velocity is correctly defined.",
      "The motion of points at different radii is correct.",
      "The link to transmitted work is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "DIN318",
    subjectName: "Dinámica",
    subjectId: "mn-s3-dinamica",
    unit: "Cinética de Sistemas de Partículas",
    topic: "Trabajo y energía",
    week: 3,
    taskId: "mn-din318-w03-flywheel-energy",
    taskTitle: "Apply Work And Energy To A Flywheel",
    scenario: "A flywheel stores rotational energy to smooth the engine's running. The engineer asks the cadet to explain, using work and energy, how a flywheel stores and releases energy.",
    instructions: [
      "Explain what kinetic energy a rotating flywheel stores.",
      "Explain how the flywheel releases energy to smooth out the engine.",
      "State why a heavier flywheel stores more energy at the same speed.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English using work and energy to explain how a flywheel stores and releases rotational energy.",
    assessmentCriteria: [
      "The stored kinetic energy is correctly explained.",
      "The smoothing role is correct.",
      "The mass-energy reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "DIN318",
    subjectName: "Dinámica",
    subjectId: "mn-s3-dinamica",
    unit: "Cinética de Sistemas de Partículas",
    topic: "Impulso y cantidad de movimiento de una partícula y un sistema de partículas",
    week: 4,
    taskId: "mn-din318-w04-momentum-machinery",
    taskTitle: "Apply Momentum To Moving Machinery",
    scenario: "A heavy moving part must be stopped safely. The engineer asks the cadet to explain, using impulse and momentum, why stopping it suddenly is dangerous.",
    instructions: [
      "Define momentum for the moving machinery part.",
      "Explain how impulse relates the stopping force to the change in momentum.",
      "Explain why stopping it suddenly creates a large force.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English using impulse and momentum to explain why suddenly stopping heavy machinery is dangerous.",
    assessmentCriteria: [
      "Momentum is correctly defined.",
      "The impulse-momentum relationship is correct.",
      "The reasoning about sudden stopping is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "ING315",
    subjectName: "Inglés Marítimo III",
    subjectId: "mn-s3-ingles-maritimo-iii",
    unit: "Presente perfecto",
    topic: "Aprende a construir el present perfect, usando have como auxiliar + verbos regulares e irregulares en pasado participio en afirmativo, negativo e interrogativo",
    week: 1,
    taskId: "mn-ing315-w01-present-perfect-maintenance",
    taskTitle: "Report Completed Maintenance Using Present Perfect",
    scenario: "At engine watch handover, you report the maintenance already done. Using the present perfect, report the completed work to the relieving engineer.",
    instructions: [
      "List two or three maintenance tasks completed during the watch.",
      "Report each using the present perfect (e.g. 'I have checked...').",
      "Distinguish what has been completed from what is still pending.",
      "Keep the handover clear and professional in English."
    ],
    deliverable: "An engine watch handover report in English using the present perfect to state completed maintenance, distinguished from pending work.",
    assessmentCriteria: [
      "The present perfect is formed and used correctly.",
      "Completed tasks are clearly reported.",
      "Completed vs pending is clearly distinguished.",
      "The handover reads professionally, not as a grammar exercise."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "ING315",
    subjectName: "Inglés Marítimo III",
    subjectId: "mn-s3-ingles-maritimo-iii",
    unit: "Superlativos",
    topic: "Usa el superlativo de adjetivos para calificar sustantivos",
    week: 2,
    taskId: "mn-ing315-w02-superlatives-machinery",
    taskTitle: "Describe Machinery Using Superlatives",
    scenario: "You compare machinery in the engine room. The engineer asks you to describe key features using superlatives (largest, most powerful, hottest) so the comparison is clear.",
    instructions: [
      "Choose three features to compare across machines (e.g. power, size, temperature).",
      "Describe each using the correct superlative form.",
      "Make sure the description is accurate and unambiguous.",
      "Report the comparison in clear engine-room English."
    ],
    deliverable: "A short comparison in English describing machinery features using correct superlative forms.",
    assessmentCriteria: [
      "Superlative forms are correct.",
      "The features compared are relevant.",
      "The description is accurate and unambiguous.",
      "The English is clear and professional."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "ING315",
    subjectName: "Inglés Marítimo III",
    subjectId: "mn-s3-ingles-maritimo-iii",
    unit: "Introducción: Inglés Marítimo",
    topic: "Rutinas de operación a bordo. Órdenes estandarizadas de máquinas",
    week: 3,
    taskId: "mn-ing315-w03-engine-orders",
    taskTitle: "Use Standard Engine Orders",
    scenario: "The bridge sends engine orders to the engine room. The engineer asks the cadet to state the standard engine orders in English and confirm them correctly.",
    instructions: [
      "List the standard engine order telegraph commands (e.g. Full Ahead, Slow Astern, Stop).",
      "Explain how each order is acknowledged/confirmed.",
      "Explain why standard wording prevents dangerous mistakes.",
      "Report the orders and confirmations in clear English."
    ],
    deliverable: "A note in English listing standard engine orders, how they are confirmed, and why standard wording matters.",
    assessmentCriteria: [
      "The engine orders are correct and standard.",
      "The confirmation method is correct.",
      "The reasoning about standard wording is sound.",
      "The English is clear and professional."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "ING315",
    subjectName: "Inglés Marítimo III",
    subjectId: "mn-s3-ingles-maritimo-iii",
    unit: "Introducción: Inglés Marítimo",
    topic: "Comandos en situaciones de emergencia a bordo",
    week: 4,
    taskId: "mn-ing315-w04-emergency-commands",
    taskTitle: "Give Standard Emergency Commands On Board",
    scenario: "In an engine-room emergency, commands must be given clearly and in standard form so any crew member understands instantly. The engineer asks you to give a set of standard emergency commands in English.",
    instructions: [
      "Choose an engine-room emergency (e.g. fire, flooding, machinery failure).",
      "Give the standard commands a crew member would shout or hear, in correct English.",
      "Keep each command short, clear, and unambiguous.",
      "Explain why standard wording matters in an emergency."
    ],
    deliverable: "A set of standard emergency commands in English for an engine-room scenario, with a note on why standard wording matters.",
    assessmentCriteria: [
      "The commands are appropriate to the emergency.",
      "Each command is short, clear, and standard.",
      "The English is correct and unambiguous.",
      "The reasoning about standard wording is sound."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "PMR321",
    subjectName: "Prácticas Marineras III",
    subjectId: "mn-s3-practicas-marineras-iii",
    unit: "Mantenimiento y Operación de Botes Salvavidas",
    topic: "Arranque y mantenimiento del motor del bote",
    week: 1,
    taskId: "mn-pmr321-w01-lifeboat-engine",
    taskTitle: "Describe Lifeboat Engine Start And Checks",
    scenario: "Before a survival craft drill, the bosun asks the cadet to describe how the lifeboat engine is started and what routine checks keep it ready for an emergency. Engine cadets are well placed to maintain it.",
    instructions: [
      "Describe the basic steps to start a lifeboat engine.",
      "List two routine maintenance checks that keep it ready.",
      "Explain why a lifeboat engine must always start reliably.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English describing how a lifeboat engine is started, two readiness checks, and why reliability is critical.",
    assessmentCriteria: [
      "The start procedure is described correctly.",
      "The maintenance checks are relevant.",
      "The reliability reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "PMR321",
    subjectName: "Prácticas Marineras III",
    subjectId: "mn-s3-practicas-marineras-iii",
    unit: "Procedimientos para controlar vías de agua",
    topic: "Tipos de vías",
    week: 2,
    taskId: "mn-pmr321-w02-water-ingress",
    taskTitle: "Respond To A Hull Water Ingress",
    scenario: "Water is entering through a small hull breach near the engine room. The officer asks the cadet to identify the type of ingress and the immediate steps to control it.",
    instructions: [
      "Identify the type of water ingress (e.g. crack, failed seal, damaged plate).",
      "State the immediate actions to limit the flooding.",
      "Name a material or method used to control the ingress.",
      "Report the response in clear maritime English."
    ],
    deliverable: "A note in English identifying a type of water ingress, the immediate control actions, and a method/material used to control it.",
    assessmentCriteria: [
      "The ingress type is correctly identified.",
      "The immediate actions are appropriate.",
      "The control method is valid.",
      "The response is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "PMR321",
    subjectName: "Prácticas Marineras III",
    subjectId: "mn-s3-practicas-marineras-iii",
    unit: "Seguridad en áreas de trabajo",
    topic: "Utilización de equipo y herramientas adecuados",
    week: 3,
    taskId: "mn-pmr321-w03-work-area-safety",
    taskTitle: "Plan Safe Use Of Tools On Board",
    scenario: "The cadet is assigned a maintenance task on board. The officer asks them to plan the safe use of tools and protective equipment for the job.",
    instructions: [
      "Describe the task and the tools required.",
      "State the personal protective equipment needed.",
      "Identify one hazard of the task and how to control it.",
      "Report the safety plan in clear maritime English."
    ],
    deliverable: "A short safety plan in English for a maintenance task, listing tools, protective equipment, and one hazard with its control.",
    assessmentCriteria: [
      "Tools and PPE are appropriate to the task.",
      "The hazard identified is realistic.",
      "The control measure is sound.",
      "The plan is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "PMR321",
    subjectName: "Prácticas Marineras III",
    subjectId: "mn-s3-practicas-marineras-iii",
    unit: "Manejo de pañoles",
    topic: "Elaboración de inventarios",
    week: 4,
    taskId: "mn-pmr321-w04-store-inventory",
    taskTitle: "Keep A Store Inventory",
    scenario: "The cadet is responsible for a store of spares and consumables. The officer asks them to explain how to keep an accurate inventory and why it matters for operations and safety.",
    instructions: [
      "Explain what information an inventory record should contain.",
      "Describe how items are checked in and out to keep the record accurate.",
      "Explain why an accurate store inventory matters operationally.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining how to keep an accurate store inventory and why it matters operationally.",
    assessmentCriteria: [
      "The inventory contents are appropriate.",
      "The check-in/out method keeps the record accurate.",
      "The operational reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "mn-s3-educacion-fisica-iii",
    unit: "Condición física",
    topic: "Resistencia cardiorespiratoria",
    week: 1,
    taskId: "mn-c0011iii-w01-endurance-demands",
    taskTitle: "Explain Endurance Demands Of Engine Duties",
    scenario: "Long watches and hot engine-room work demand cardiorespiratory endurance. The training officer asks the cadet to explain why endurance matters for an engineer and how it is built.",
    instructions: [
      "Define cardiorespiratory endurance in your own words.",
      "Give two engine-room situations where endurance is essential.",
      "Describe one way endurance is trained and maintained.",
      "Report your answer in clear English using correct fitness terminology."
    ],
    deliverable: "A note in English defining cardiorespiratory endurance, two engine-room situations needing it, and how it is trained.",
    assessmentCriteria: [
      "Endurance is correctly defined.",
      "The situations are relevant.",
      "The training method is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "mn-s3-educacion-fisica-iii",
    unit: "Percepción y coordinación motriz",
    topic: "Coordinación motriz y psicomotriz",
    week: 2,
    taskId: "mn-c0011iii-w02-coordination-tasks",
    taskTitle: "Link Coordination To Precise Engine Tasks",
    scenario: "Many engine-room tasks demand fine and gross motor coordination. The officer asks the cadet to connect coordination to specific tasks and explain the risk when it is lacking.",
    instructions: [
      "Name two engine-room tasks that require good motor coordination.",
      "Explain the difference between fine and gross motor coordination with an example.",
      "State the risk if coordination fails during one of those tasks.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English linking motor coordination to two engine-room tasks, with the fine/gross distinction and the risk of poor coordination.",
    assessmentCriteria: [
      "The tasks chosen genuinely need coordination.",
      "The fine/gross distinction is correct.",
      "The risk reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "mn-s3-educacion-fisica-iii",
    unit: "Natación",
    topic: "Sobrevivencia",
    week: 3,
    taskId: "mn-c0011iii-w03-survival-swimming",
    taskTitle: "Describe Survival Swimming Skills",
    scenario: "Survival in the water is a core competency for all crew, engine and deck alike. The instructor asks the cadet to describe the survival swimming skills needed if a crew member ends up in the sea.",
    instructions: [
      "Describe how to enter the water safely from a height.",
      "Describe a technique to stay afloat and conserve energy.",
      "Explain how to move towards a survival craft or group.",
      "Report the skills in clear English suitable for a safety briefing."
    ],
    deliverable: "A survival swimming brief in English covering safe entry, staying afloat, and reaching a survival craft or group.",
    assessmentCriteria: [
      "The safe entry method is correct.",
      "The floating technique is sound.",
      "The approach to a craft/group is correct.",
      "The brief is clear and appropriate, in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "mn-s3-educacion-fisica-iii",
    unit: "Concentración",
    topic: "Juegos de concentración",
    week: 4,
    taskId: "mn-c0011iii-w04-focus-precision",
    taskTitle: "Connect Concentration To Engine Watch Safety",
    scenario: "Monitoring gauges and alarms demands sustained focus. The officer asks the cadet to explain how concentration is trained and why losing it is dangerous in the engine room.",
    instructions: [
      "Explain why sustained concentration matters when monitoring machinery.",
      "Describe one method used to train and sustain concentration.",
      "State the danger of a lapse in concentration during an engine watch.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining why concentration matters in engine monitoring, how it is trained, and the danger of a lapse.",
    assessmentCriteria: [
      "The importance of concentration is correctly explained.",
      "The training method is relevant.",
      "The danger of a lapse is realistic.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "C0038",
    subjectName: "Técnicas Avanzadas de Lucha Contra Incendio",
    subjectId: "mn-s3-tecnicas-avanzadas-lucha-contra-incendio",
    unit: "Control de la Operaciones de Lucha Contra Incendio a bordo del Buque",
    topic: "Incendio en las chimeneas de la Caldera, en el escape del motor principal y auxiliar",
    week: 1,
    taskId: "mn-c0038-w01-engine-fire-tactics",
    taskTitle: "Outline Tactics For An Engine-Room Fire",
    scenario: "A fire breaks out in the engine room, the most fire-prone area on board. The officer asks the cadet to outline the tactics for fighting a fire involving machinery and fuel.",
    instructions: [
      "State the first actions on discovering an engine-room fire (raise alarm, etc.).",
      "Outline the basic tactic to contain and attack a machinery/fuel fire.",
      "Explain why fuel and electrical sources must be isolated.",
      "Report the tactics in clear engine-room English."
    ],
    deliverable: "A note in English outlining engine-room firefighting tactics: first actions, containment/attack, and isolating fuel/electrical sources.",
    assessmentCriteria: [
      "The first actions are correct and in order.",
      "The containment/attack tactic is sound.",
      "The isolation reasoning is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "C0038",
    subjectName: "Técnicas Avanzadas de Lucha Contra Incendio",
    subjectId: "mn-s3-tecnicas-avanzadas-lucha-contra-incendio",
    unit: "Organizar y formar cuadrillas de lucha contra incendios",
    topic: "Formación y asignación del personal a las cuadrillas de lucha contra incendios",
    week: 2,
    taskId: "mn-c0038-w02-fire-teams",
    taskTitle: "Organise A Fire-Fighting Team",
    scenario: "The officer asks the cadet to explain how a fire-fighting team is organised on board and what roles must be assigned for an effective response.",
    instructions: [
      "Name the key roles in a fire-fighting team.",
      "State the main responsibility of each role.",
      "Explain why clear role assignment matters in an emergency.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English naming the key roles in a fire-fighting team, their responsibilities, and why clear assignment matters.",
    assessmentCriteria: [
      "The roles are valid and relevant.",
      "The responsibilities are correct.",
      "The reasoning about role clarity is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "C0038",
    subjectName: "Técnicas Avanzadas de Lucha Contra Incendio",
    subjectId: "mn-s3-tecnicas-avanzadas-lucha-contra-incendio",
    unit: "Inspeccionar los servicios de los sistemas y equipos de detección y extinción de incendios",
    topic: "Equipo de detección de incendios",
    week: 3,
    taskId: "mn-c0038-w03-detection-equipment",
    taskTitle: "Inspect Fire Detection Equipment",
    scenario: "The cadet is asked to inspect the fire detection equipment in the engine room. The officer asks them to explain what to check and why detection systems must be kept reliable.",
    instructions: [
      "Name two types of fire detection equipment on board.",
      "State what to check to confirm each is working.",
      "Explain why early detection is critical to fighting a fire.",
      "Report the inspection in clear engine-room English."
    ],
    deliverable: "A note in English naming two fire detection systems, what to check on each, and why early detection is critical.",
    assessmentCriteria: [
      "The detection equipment is valid.",
      "The checks are appropriate.",
      "The early-detection reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "C0038",
    subjectName: "Técnicas Avanzadas de Lucha Contra Incendio",
    subjectId: "mn-s3-tecnicas-avanzadas-lucha-contra-incendio",
    unit: "Control de la Operaciones de Lucha Contra Incendio a bordo del Buque",
    topic: "Control de combustible y de los sistemas eléctricos",
    week: 4,
    taskId: "mn-c0038-w04-fuel-electrical-control",
    taskTitle: "Control Fuel And Electrical Systems In A Fire",
    scenario: "During an engine-room fire, fuel and electrical systems must be controlled to starve the fire. The officer asks the cadet to explain the actions taken.",
    instructions: [
      "Explain how fuel supply is shut off to the affected area.",
      "Explain how electrical systems are isolated safely.",
      "State why removing fuel and ignition sources helps extinguish the fire.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining how fuel and electrical systems are controlled during an engine-room fire and why this helps extinguish it.",
    assessmentCriteria: [
      "The fuel shut-off is correctly described.",
      "The electrical isolation is correct.",
      "The fire-triangle reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "C0101",
    subjectName: "Redacción Avanzada",
    subjectId: "mn-s3-redaccion-avanzada",
    unit: "Características básicas de la redacción",
    topic: "Organización de las ideas para ordenarlas en forma lógica",
    week: 1,
    taskId: "mn-c0101-w01-organise-ideas",
    taskTitle: "Organise Ideas In An Engine Logbook Entry",
    scenario: "An engine logbook entry must record events in a clear, logical order. The officer asks the cadet to write an entry that organises the events so anyone reading it understands what happened.",
    instructions: [
      "List the events to record in the logbook entry.",
      "Order them logically (chronological or by importance).",
      "Write the entry so the sequence is clear to any reader.",
      "Keep the language precise, in clear English."
    ],
    deliverable: "An engine logbook entry in English that records events in a clear, logical order, understandable to any reader.",
    assessmentCriteria: [
      "The events are ordered logically.",
      "The sequence is clear to a reader.",
      "The language is precise and unambiguous.",
      "The entry is professional and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "C0101",
    subjectName: "Redacción Avanzada",
    subjectId: "mn-s3-redaccion-avanzada",
    unit: "Claridad en la oración",
    topic: "Evitar frases ambiguas",
    week: 2,
    taskId: "mn-c0101-w02-avoid-ambiguity",
    taskTitle: "Remove Ambiguity From A Technical Report",
    scenario: "An ambiguous sentence in a technical report could be dangerously misread. The officer asks the cadet to rewrite unclear sentences so there is only one possible meaning.",
    instructions: [
      "Take an ambiguous or unclear sentence about an engine-room situation.",
      "Identify why it could be misread.",
      "Rewrite it so it has only one clear meaning.",
      "Explain in English what made the rewrite clearer."
    ],
    deliverable: "A short exercise in English showing an ambiguous sentence, why it is unclear, and a rewritten version with a single clear meaning.",
    assessmentCriteria: [
      "The ambiguity is correctly identified.",
      "The rewrite removes the ambiguity.",
      "The rewrite preserves the intended meaning.",
      "The explanation is sound and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "C0101",
    subjectName: "Redacción Avanzada",
    subjectId: "mn-s3-redaccion-avanzada",
    unit: "Atributos de los párrafos",
    topic: "Unidad entre la idea principal y las secundarias",
    week: 3,
    taskId: "mn-c0101-w03-paragraph-unity",
    taskTitle: "Write A Unified Technical Paragraph",
    scenario: "A technical report paragraph should develop one main idea with supporting detail. The officer asks the cadet to write a paragraph where every sentence supports a single main idea.",
    instructions: [
      "State the main idea of the paragraph.",
      "Write supporting sentences that all relate to that main idea.",
      "Remove or avoid any sentence that does not belong.",
      "Keep the paragraph clear and in correct English."
    ],
    deliverable: "A unified technical paragraph in English with a clear main idea and supporting sentences that all relate to it.",
    assessmentCriteria: [
      "The main idea is clear.",
      "All supporting sentences relate to it.",
      "No off-topic sentences remain.",
      "The paragraph is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "C0101",
    subjectName: "Redacción Avanzada",
    subjectId: "mn-s3-redaccion-avanzada",
    unit: "Orden de Palabras e Ideas",
    topic: "Jerarquización de las ideas",
    week: 4,
    taskId: "mn-c0101-w04-prioritise-ideas",
    taskTitle: "Prioritise Information In A Fault Report",
    scenario: "A machinery fault report must put the most important information first so a busy reader grasps it immediately. The officer asks the cadet to structure a report by priority.",
    instructions: [
      "Identify the most critical fact of the fault.",
      "Place it first, then arrange the rest by decreasing importance.",
      "Ensure a reader who stops after one line still gets the key point.",
      "Write the report in clear English."
    ],
    deliverable: "A machinery fault report in English structured by priority, with the most critical information first and the rest in decreasing importance.",
    assessmentCriteria: [
      "The most critical fact is correctly identified and placed first.",
      "The remaining information is ordered by importance.",
      "A reader gets the key point immediately.",
      "The report is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "MET532",
    subjectName: "Meteorología II",
    subjectId: "pn-s5-meteorologia-ii",
    unit: "Estado del tiempo",
    topic: "Cambios del tiempo al paso de las depresiones y oclusiones. Características del frente caliente, sector caliente, frente frío y oclusión",
    week: 1,
    taskId: "pn-met532-w01-fronts-weather",
    taskTitle: "Predict Weather From An Approaching Front",
    scenario: "A weather front is approaching the vessel. The officer asks the cadet to explain what weather changes to expect as a warm front and then a cold front pass.",
    instructions: [
      "Describe the weather as a warm front approaches and passes.",
      "Describe the weather as a cold front approaches and passes.",
      "State one sign that warns the bridge a front is coming.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English describing the weather changes expected from a passing warm front and cold front, with one warning sign.",
    assessmentCriteria: [
      "The warm front sequence is correct.",
      "The cold front sequence is correct.",
      "The warning sign is valid.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "MET532",
    subjectName: "Meteorología II",
    subjectId: "pn-s5-meteorologia-ii",
    unit: "Ciclones tropicales",
    topic: "Semicírculos: peligroso y navegable",
    week: 2,
    taskId: "pn-met532-w02-cyclone-semicircles",
    taskTitle: "Identify The Dangerous Semicircle Of A Cyclone",
    scenario: "A tropical cyclone lies near the vessel's route. The officer asks the cadet to explain the dangerous and navigable semicircles and which side to avoid.",
    instructions: [
      "Explain what the dangerous semicircle and the navigable semicircle are.",
      "State how to tell which semicircle the vessel is in.",
      "State the general action to take to avoid the dangerous semicircle.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining the dangerous and navigable semicircles of a tropical cyclone and the action to keep clear of the dangerous side.",
    assessmentCriteria: [
      "The two semicircles are correctly explained.",
      "The method to identify the vessel's position is correct.",
      "The avoiding action is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "MET532",
    subjectName: "Meteorología II",
    subjectId: "pn-s5-meteorologia-ii",
    unit: "Cartas meteorológicas",
    topic: "Interpretación de cartas sinópticas",
    week: 3,
    taskId: "pn-met532-w03-synoptic-chart",
    taskTitle: "Interpret A Synoptic Weather Chart",
    scenario: "The bridge receives a synoptic chart. The officer asks the cadet to interpret the main features and what they mean for the vessel's weather.",
    instructions: [
      "Identify the main features on a synoptic chart (highs, lows, fronts, isobars).",
      "Explain what closely spaced isobars indicate about wind.",
      "State what weather the chart suggests for the vessel's area.",
      "Report your interpretation in clear maritime English."
    ],
    deliverable: "A note in English interpreting a synoptic chart: its main features, what isobar spacing means, and the weather suggested for the vessel.",
    assessmentCriteria: [
      "The chart features are correctly identified.",
      "The isobar-wind relationship is correct.",
      "The weather interpretation is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "MET532",
    subjectName: "Meteorología II",
    subjectId: "pn-s5-meteorologia-ii",
    unit: "Previsión a bordo",
    topic: "Navegación meteorológica",
    week: 4,
    taskId: "pn-met532-w04-weather-routeing",
    taskTitle: "Plan A Weather-Routed Passage",
    scenario: "The officer asks the cadet to explain how weather routeing improves a passage and how forecast information is used to choose the best track.",
    instructions: [
      "Explain what weather routeing means.",
      "State how forecast weather is used to choose or adjust the track.",
      "Explain one benefit of weather routeing (safety, fuel, time).",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining weather routeing, how forecasts are used to choose the track, and one benefit.",
    assessmentCriteria: [
      "Weather routeing is correctly explained.",
      "The use of forecasts is correct.",
      "The benefit stated is valid.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "NAV530",
    subjectName: "Navegación III",
    subjectId: "pn-s5-navegacion-iii",
    unit: "Tipos de Derrota",
    topic: "Ortodrómica",
    week: 1,
    taskId: "pn-nav530-w01-great-circle",
    taskTitle: "Explain Great Circle Sailing",
    scenario: "For a long ocean passage, the officer asks the cadet to explain why great circle (orthodromic) sailing is used instead of rhumb line sailing, and what its advantage is.",
    instructions: [
      "Explain what a great circle route is.",
      "State why it is shorter than a rhumb line over long distances.",
      "State one practical difficulty of steering a great circle directly.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining great circle sailing, why it is shorter over long distances, and one practical difficulty.",
    assessmentCriteria: [
      "The great circle concept is correct.",
      "The reason it is shorter is correct.",
      "The practical difficulty is valid.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "NAV530",
    subjectName: "Navegación III",
    subjectId: "pn-s5-navegacion-iii",
    unit: "Radar",
    topic: "Movimientos Relativo y Verdadero",
    week: 2,
    taskId: "pn-nav530-w02-relative-true-motion",
    taskTitle: "Distinguish Relative And True Motion On Radar",
    scenario: "On radar, a contact can be shown in relative or true motion. The officer asks the cadet to explain the difference and what each presentation is useful for.",
    instructions: [
      "Explain what relative motion shows on the radar display.",
      "Explain what true motion shows.",
      "State which presentation helps assess collision risk and why.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining relative vs true motion on radar and which helps assess collision risk.",
    assessmentCriteria: [
      "Relative motion is correctly explained.",
      "True motion is correctly explained.",
      "The collision-risk reasoning is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "NAV530",
    subjectName: "Navegación III",
    subjectId: "pn-s5-navegacion-iii",
    unit: "Radar APRA",
    topic: "Riesgos del exceso de confianza en los APRA",
    week: 3,
    taskId: "pn-nav530-w03-arpa-overreliance",
    taskTitle: "Explain The Risk Of Over-Reliance On ARPA",
    scenario: "ARPA is a powerful tool but dangerous if trusted blindly. The officer asks the cadet to explain the risks of over-reliance on ARPA and how a good watchkeeper uses it.",
    instructions: [
      "State two limitations or errors that ARPA data can have.",
      "Explain why a watchkeeper must not rely on ARPA alone.",
      "State what the watchkeeper should also do (visual lookout, cross-check).",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining the risks of over-reliance on ARPA and how a watchkeeper should use it safely.",
    assessmentCriteria: [
      "The ARPA limitations are valid.",
      "The over-reliance risk is correctly explained.",
      "The safe-use practice is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "NAV530",
    subjectName: "Navegación III",
    subjectId: "pn-s5-navegacion-iii",
    unit: "Radar APRA",
    topic: "Interacción del APRA con otros equipos de navegación",
    week: 4,
    taskId: "pn-nav530-w04-arpa-integration",
    taskTitle: "Explain How ARPA Works With Other Equipment",
    scenario: "ARPA takes inputs from other navigation equipment. The officer asks the cadet to explain how ARPA interacts with the gyro, log, and GPS, and why accurate inputs matter.",
    instructions: [
      "State which inputs ARPA takes from other equipment (e.g. gyro, log, GPS).",
      "Explain how those inputs affect ARPA's calculations.",
      "Explain what happens to ARPA data if an input is wrong.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining how ARPA interacts with gyro, log, and GPS, and why accurate inputs matter.",
    assessmentCriteria: [
      "The inputs are correctly identified.",
      "Their effect on ARPA is correct.",
      "The consequence of a wrong input is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "MAN533",
    subjectName: "Maniobras I",
    subjectId: "pn-s5-maniobras-i",
    unit: "Timones",
    topic: "Principios y efectos",
    week: 1,
    taskId: "pn-man533-w01-rudder-principles",
    taskTitle: "Explain How A Rudder Turns A Vessel",
    scenario: "The officer asks the cadet to explain the basic principle of how a rudder turns a vessel and why the vessel pivots rather than simply sliding sideways.",
    instructions: [
      "Explain how water flow over the rudder creates a turning force.",
      "Explain why the vessel pivots about a point (centre of pivot).",
      "State what happens to turning effect when speed is very low.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining how a rudder turns a vessel, the pivot point, and the effect of low speed.",
    assessmentCriteria: [
      "The rudder turning principle is correct.",
      "The pivot point is correctly explained.",
      "The low-speed effect is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "MAN533",
    subjectName: "Maniobras I",
    subjectId: "pn-s5-maniobras-i",
    unit: "Sistema de propulsión",
    topic: "Hélices, tipos y principios",
    week: 2,
    taskId: "pn-man533-w02-propeller-effects",
    taskTitle: "Explain Propeller Transverse Thrust",
    scenario: "A single-screw vessel behaves differently going ahead and astern. The officer asks the cadet to explain transverse thrust (paddle wheel effect) and how it affects low-speed handling.",
    instructions: [
      "Explain what transverse thrust (paddle wheel effect) is.",
      "State how it moves the stern for a right-handed propeller going astern.",
      "Explain how a skilled cadet uses this effect when manoeuvring.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining propeller transverse thrust and how it affects low-speed handling.",
    assessmentCriteria: [
      "Transverse thrust is correctly explained.",
      "The stern movement is correct.",
      "The practical use is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "MAN533",
    subjectName: "Maniobras I",
    subjectId: "pn-s5-maniobras-i",
    unit: "Círculo de evolución y distancia de parada",
    topic: "Efectos por bajo fondo o squat",
    week: 3,
    taskId: "pn-man533-w03-squat-shallow-water",
    taskTitle: "Explain Squat In Shallow Water",
    scenario: "Entering shallow water, the vessel is at risk of squat. The officer asks the cadet to explain what squat is, what causes it, and how to reduce the risk.",
    instructions: [
      "Explain what squat is and how it affects the vessel's draught.",
      "State what conditions increase squat (speed, shallow water).",
      "State the main action to reduce squat.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining squat, what increases it, and how to reduce the risk.",
    assessmentCriteria: [
      "Squat is correctly explained.",
      "The factors that increase it are correct.",
      "The reducing action is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "MAN533",
    subjectName: "Maniobras I",
    subjectId: "pn-s5-maniobras-i",
    unit: "Equipo y maniobra de fondeo",
    topic: "Funciones del oficial en estación de maniobra",
    week: 4,
    taskId: "pn-man533-w04-anchoring-officer",
    taskTitle: "Describe The Officer's Role At Anchor Stations",
    scenario: "The vessel is preparing to anchor. The officer asks the cadet to describe the duties of the officer at the anchor station during the manoeuvre.",
    instructions: [
      "List the main duties of the officer at the forward anchor station.",
      "Explain what information the officer reports to the bridge.",
      "State one safety precaution at the anchor station.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English describing the officer's duties at the anchor station, the information reported to the bridge, and one safety precaution.",
    assessmentCriteria: [
      "The duties are correct and relevant.",
      "The information reported is appropriate.",
      "The safety precaution is valid.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "QUH534",
    subjectName: "Química",
    subjectId: "pn-s5-quimica",
    unit: "Acidez y alcalinidad",
    topic: "Potencial hidrógeno",
    week: 1,
    taskId: "pn-quh534-w01-ph-control",
    taskTitle: "Explain pH And Why It Matters On Board",
    scenario: "The officer asks the cadet to explain what pH is and why monitoring it matters for boiler water and corrosion control on board.",
    instructions: [
      "Define pH and the difference between acidic and alkaline.",
      "State how pH is measured (indicators or meter).",
      "Explain why boiler water pH is kept within limits.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining pH, how it is measured, and why boiler water pH must be controlled.",
    assessmentCriteria: [
      "pH is correctly defined.",
      "The measurement method is correct.",
      "The boiler-water reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "QUH534",
    subjectName: "Química",
    subjectId: "pn-s5-quimica",
    unit: "Corrosión",
    topic: "Celdas galvánicas",
    week: 2,
    taskId: "pn-quh534-w02-galvanic-cells",
    taskTitle: "Explain Galvanic Corrosion And Sacrificial Anodes",
    scenario: "The hull and seawater systems suffer galvanic corrosion. The officer asks the cadet to explain how a galvanic cell forms and how sacrificial anodes protect the metal.",
    instructions: [
      "Explain how a galvanic cell forms between two dissimilar metals in seawater.",
      "Explain what a sacrificial anode is and how it protects the hull.",
      "State why the anode must be a more active metal.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining galvanic cell formation and how sacrificial anodes protect metal on board.",
    assessmentCriteria: [
      "The galvanic cell is correctly explained.",
      "The sacrificial anode function is correct.",
      "The reason for using an active metal is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "QUH534",
    subjectName: "Química",
    subjectId: "pn-s5-quimica",
    unit: "Análisis y tratamiento del agua",
    topic: "Definiciones: dureza permanente y temporal",
    week: 3,
    taskId: "pn-quh534-w03-water-hardness",
    taskTitle: "Explain Water Hardness And Boiler Scale",
    scenario: "Hard water causes scale in boilers. The officer asks the cadet to explain water hardness and why it must be treated before feeding a boiler.",
    instructions: [
      "Explain the difference between temporary and permanent hardness.",
      "Explain how hardness causes scale in a boiler.",
      "State why scale is dangerous for boiler operation.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining temporary vs permanent hardness, how it causes boiler scale, and why scale is dangerous.",
    assessmentCriteria: [
      "The two types of hardness are correctly explained.",
      "The scale formation is correct.",
      "The danger of scale is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "QUH534",
    subjectName: "Química",
    subjectId: "pn-s5-quimica",
    unit: "Combustibles y lubricantes",
    topic: "Punto de inflamación de combustibles y lubricantes marinos",
    week: 4,
    taskId: "pn-quh534-w04-flash-point",
    taskTitle: "Explain Flash Point And Fuel Safety",
    scenario: "Fuel handling on board depends on understanding flash point. The officer asks the cadet to explain what flash point is and why it matters for safe fuel storage.",
    instructions: [
      "Define flash point in your own words.",
      "Explain why a fuel with a low flash point is more dangerous.",
      "State one precaution for storing or handling fuel based on flash point.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining flash point, why low flash point is dangerous, and one fuel-handling precaution.",
    assessmentCriteria: [
      "Flash point is correctly defined.",
      "The danger of low flash point is correct.",
      "The precaution is valid.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "COV535",
    subjectName: "Comunicación Visual",
    subjectId: "pn-s5-comunicacion-visual",
    unit: "Comunicación con Código Morse",
    topic: "Comunicación de mensajes de auxilio con Código Morse",
    week: 1,
    taskId: "pn-cov535-w01-morse-distress",
    taskTitle: "Send A Distress Signal In Morse Code",
    scenario: "In an emergency with no radio, a vessel signals distress by Morse light. The officer asks the cadet to explain how the distress signal is sent and recognised.",
    instructions: [
      "State the Morse signal for distress (SOS) and its pattern.",
      "Explain how it is sent by signal lamp.",
      "Explain why Morse light is still a valuable backup at sea.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining the SOS Morse distress signal, how it is sent by lamp, and why Morse light remains valuable.",
    assessmentCriteria: [
      "The SOS pattern is correct.",
      "The signalling method is correct.",
      "The backup-value reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "COV535",
    subjectName: "Comunicación Visual",
    subjectId: "pn-s5-comunicacion-visual",
    unit: "Código Internacional de Señales",
    topic: "Comunicación de mensajes con el Código Internacional de Señales",
    week: 2,
    taskId: "pn-cov535-w02-flag-signals",
    taskTitle: "Use International Code Flag Signals",
    scenario: "Vessels communicate with flag hoists. The officer asks the cadet to explain how single-flag signals carry standard meanings and to give examples.",
    instructions: [
      "Explain how a single code flag can carry a complete standard message.",
      "Give two examples of single-flag meanings (e.g. flag 'A', flag 'O').",
      "Explain when flag signals are used instead of radio.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining single-flag code signals with two examples and when they are used.",
    assessmentCriteria: [
      "The single-flag concept is correct.",
      "The examples are valid.",
      "The use case is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "COV535",
    subjectName: "Comunicación Visual",
    subjectId: "pn-s5-comunicacion-visual",
    unit: "Sistema de Boyado Marítimo (IALA)",
    topic: "Marcas cardinales",
    week: 3,
    taskId: "pn-cov535-w03-cardinal-marks",
    taskTitle: "Interpret IALA Cardinal Marks",
    scenario: "The vessel approaches a hazard marked by IALA cardinal buoys. The officer asks the cadet to explain what cardinal marks indicate and how to pass them safely.",
    instructions: [
      "Explain what a cardinal mark indicates about where safe water lies.",
      "Describe how to identify a north, east, south, or west cardinal mark.",
      "State how the cadet passes a cardinal mark safely.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining IALA cardinal marks, how to identify them, and how to pass them safely.",
    assessmentCriteria: [
      "The meaning of cardinal marks is correct.",
      "The identification method is correct.",
      "The safe-passing action is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "COV535",
    subjectName: "Comunicación Visual",
    subjectId: "pn-s5-comunicacion-visual",
    unit: "Reglamento Internacional para prevenir abordajes en la mar",
    topic: "Parte C. Luces y marcas",
    week: 4,
    taskId: "pn-cov535-w04-lights-shapes",
    taskTitle: "Identify A Vessel By Its Lights",
    scenario: "At night, vessels are identified by their navigation lights under COLREGS Part C. The officer asks the cadet to identify a vessel and its situation from a described light configuration.",
    instructions: [
      "Describe the lights a power-driven vessel underway must show.",
      "Explain how the lights tell you the vessel's aspect (heading relative to you).",
      "Give one example of special lights (e.g. vessel not under command, restricted in ability to manoeuvre).",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining how a vessel is identified by its navigation lights under COLREGS, with the aspect and one special-light example.",
    assessmentCriteria: [
      "The basic light configuration is correct.",
      "The aspect reasoning is correct.",
      "The special-light example is valid.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "ING531",
    subjectName: "Inglés Marítimo V",
    subjectId: "pn-s5-ingles-maritimo-v",
    unit: "Voz pasiva (presente simple)",
    topic: "Usa la voz pasiva en presente para hablar de cosas tradicionales",
    week: 1,
    taskId: "pn-ing531-w01-passive-procedures",
    taskTitle: "Describe Procedures Using The Passive Voice",
    scenario: "Shipboard procedures are often written in the passive voice ('the valve is closed'). The officer asks the cadet to describe a routine procedure using the passive voice correctly.",
    instructions: [
      "Choose a simple shipboard procedure to describe.",
      "Write the steps using the passive voice in the present simple.",
      "Make sure each step is clear about what is done, not who does it.",
      "Keep the description clear and professional in English."
    ],
    deliverable: "A procedure description in English using the present simple passive voice to state the steps clearly.",
    assessmentCriteria: [
      "The passive voice is formed correctly.",
      "The procedure steps are clear.",
      "The focus is on the action, not the actor.",
      "The description reads professionally, not as a grammar exercise."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "ING531",
    subjectName: "Inglés Marítimo V",
    subjectId: "pn-s5-ingles-maritimo-v",
    unit: "Comparativos",
    topic: "Compara con la estructura (not) as…as",
    week: 2,
    taskId: "pn-ing531-w02-comparatives",
    taskTitle: "Compare Two Vessels Or Routes",
    scenario: "You must compare two options for the bridge. The officer asks you to compare two vessels or two routes using comparative structures clearly.",
    instructions: [
      "Choose two vessels or two routes to compare.",
      "Use comparative structures (including 'as...as' / 'not as...as').",
      "Make at least three clear comparisons.",
      "Report the comparison in clear maritime English."
    ],
    deliverable: "A comparison in English of two vessels or routes using correct comparative structures with at least three points.",
    assessmentCriteria: [
      "Comparative structures are used correctly.",
      "The comparisons are accurate.",
      "At least three clear points are made.",
      "The English is clear and professional."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "ING531",
    subjectName: "Inglés Marítimo V",
    subjectId: "pn-s5-ingles-maritimo-v",
    unit: "Familiarización con frases normalizadas de la Organización",
    topic: "Utiliza las expresiones because, since, due to, as, because of",
    week: 3,
    taskId: "pn-ing531-w03-reporting-causes",
    taskTitle: "Report Causes Using Linking Expressions",
    scenario: "When reporting an incident or delay, you must state the cause clearly. The officer asks you to report a situation using linking expressions (because, due to, since) correctly.",
    instructions: [
      "Describe a shipboard situation with a cause and an effect.",
      "Report it using linking expressions (because, since, due to, as, because of).",
      "Make sure the cause-effect relationship is clear.",
      "Keep the report clear and professional in English."
    ],
    deliverable: "A short report in English stating a cause and effect using correct linking expressions.",
    assessmentCriteria: [
      "The linking expressions are used correctly.",
      "The cause-effect relationship is clear.",
      "The report is realistic and relevant.",
      "The English is clear and professional."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "ING531",
    subjectName: "Inglés Marítimo V",
    subjectId: "pn-s5-ingles-maritimo-v",
    unit: "Familiarización con frases normalizadas de la Organización",
    topic: "Uso de tiempos simples y continuos",
    week: 4,
    taskId: "pn-ing531-w04-smcp-phrases",
    taskTitle: "Use IMO Standard Marine Communication Phrases",
    scenario: "The IMO Standard Marine Communication Phrases (SMCP) give crews of all nationalities a common language. The officer asks the cadet to use the correct SMCP for a given bridge situation.",
    instructions: [
      "Choose a bridge situation (e.g. reporting position, responding to a VHF call).",
      "State the correct SMCP standard phrase for that situation.",
      "Explain why standard phrases reduce misunderstanding between crews.",
      "Report the exchange in clear maritime English."
    ],
    deliverable: "A note in English giving the correct SMCP phrase for a bridge situation, with an explanation of why standard phrases matter.",
    assessmentCriteria: [
      "The SMCP phrase is appropriate to the situation.",
      "The phrase is used correctly.",
      "The reasoning about standardization is sound.",
      "The English is clear and professional."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "PMR536",
    subjectName: "Prácticas Marineras V",
    subjectId: "pn-s5-practicas-marineras-v",
    unit: "Cambios de amarre",
    topic: "Uso durante el atraque",
    week: 1,
    taskId: "pn-pmr536-w01-mooring-changes",
    taskTitle: "Manage Mooring Lines During Berthing",
    scenario: "During berthing the mooring lines must be changed and adjusted. The officer asks the cadet to explain how lines are managed as the vessel comes alongside.",
    instructions: [
      "Describe the order in which mooring lines are sent and made fast when coming alongside.",
      "Explain how lines are adjusted to bring the vessel parallel to the berth.",
      "State one safety precaution for the mooring team during this operation.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining how mooring lines are managed and adjusted during berthing, with one safety precaution.",
    assessmentCriteria: [
      "The order of lines is reasonable.",
      "The adjustment method is correct.",
      "The safety precaution is valid.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "PMR536",
    subjectName: "Prácticas Marineras V",
    subjectId: "pn-s5-practicas-marineras-v",
    unit: "Maniobras de fondeo",
    topic: "Preparativos para fondear",
    week: 2,
    taskId: "pn-pmr536-w02-anchoring-prep",
    taskTitle: "Prepare The Vessel For Anchoring",
    scenario: "The vessel is approaching the anchorage. The officer asks the cadet to describe the preparations needed before letting go the anchor.",
    instructions: [
      "List the main preparations at the forecastle before anchoring.",
      "Explain what 'walking back' the anchor means and why it is done.",
      "State one communication that must pass between the bridge and the forecastle.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English describing the preparations for anchoring, what walking back the anchor means, and a key bridge-forecastle communication.",
    assessmentCriteria: [
      "The preparations are correct and relevant.",
      "The walking-back explanation is correct.",
      "The communication is appropriate.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "PMR536",
    subjectName: "Prácticas Marineras V",
    subjectId: "pn-s5-practicas-marineras-v",
    unit: "Plumas y grúas",
    topic: "Operación y manejo",
    week: 3,
    taskId: "pn-pmr536-w03-derricks-cranes",
    taskTitle: "Operate Cargo Cranes Safely",
    scenario: "Cargo is handled using the ship's cranes. The officer asks the cadet to explain the safe operation of a cargo crane and the main hazards to watch for.",
    instructions: [
      "Describe the basic safe operation of a cargo crane.",
      "State the safe working load (SWL) concept and why it must not be exceeded.",
      "Identify two hazards during crane operations.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining safe cargo crane operation, the SWL concept, and two hazards to watch for.",
    assessmentCriteria: [
      "The safe operation is described correctly.",
      "The SWL concept is correct.",
      "The hazards are valid.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "PMR536",
    subjectName: "Prácticas Marineras V",
    subjectId: "pn-s5-practicas-marineras-v",
    unit: "Anclas y cadenas",
    topic: "Marcado de la cadena",
    week: 4,
    taskId: "pn-pmr536-w04-chain-marking",
    taskTitle: "Read Anchor Chain Markings",
    scenario: "When anchoring, the cadet must report how much chain is out. The officer asks them to explain how anchor chain is marked and how to read the amount paid out.",
    instructions: [
      "Explain how anchor chain is divided and marked (shackles/shots).",
      "Explain how the cadet reads and reports the chain paid out.",
      "State why reporting the correct amount of chain matters.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining how anchor chain is marked, how to read it, and why correct reporting matters.",
    assessmentCriteria: [
      "The chain marking system is correct.",
      "The reading/reporting method is correct.",
      "The reasoning about accuracy is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0011",
    subjectName: "Educación Física V",
    subjectId: "pn-s5-educacion-fisica-v",
    unit: "Condición física",
    topic: "Fuerza muscular",
    week: 1,
    taskId: "pn-c0011v-w01-strength-tasks",
    taskTitle: "Link Muscular Strength To Heavy Deck Work",
    scenario: "Heavy deck work demands muscular strength. The training officer asks the cadet to connect muscular strength to specific shipboard tasks and explain the injury risk when strength or technique is lacking.",
    instructions: [
      "Define muscular strength in your own words.",
      "Name two heavy shipboard tasks that require it.",
      "Explain how poor strength or technique leads to injury (e.g. lifting).",
      "Report your answer in clear English using correct fitness terminology."
    ],
    deliverable: "A note in English linking muscular strength to two heavy shipboard tasks and the injury risk of poor strength or technique.",
    assessmentCriteria: [
      "Muscular strength is correctly defined.",
      "The tasks are relevant.",
      "The injury reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0011",
    subjectName: "Educación Física V",
    subjectId: "pn-s5-educacion-fisica-v",
    unit: "Condición física",
    topic: "Flexibilidad articular y muscular",
    week: 2,
    taskId: "pn-c0011v-w02-flexibility-injury",
    taskTitle: "Explain Flexibility And Injury Prevention",
    scenario: "Working in confined spaces and awkward positions demands flexibility. The officer asks the cadet to explain how flexibility helps prevent injury on board.",
    instructions: [
      "Define flexibility in your own words.",
      "Give a shipboard situation where flexibility prevents injury.",
      "Describe one way flexibility is maintained.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English defining flexibility, a shipboard situation where it prevents injury, and how it is maintained.",
    assessmentCriteria: [
      "Flexibility is correctly defined.",
      "The situation is relevant.",
      "The maintenance method is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0011",
    subjectName: "Educación Física V",
    subjectId: "pn-s5-educacion-fisica-v",
    unit: "Natación",
    topic: "Nado en grupo",
    week: 3,
    taskId: "pn-c0011v-w03-group-swimming",
    taskTitle: "Explain Group Survival Swimming",
    scenario: "After abandoning ship, survivors stay together in the water. The instructor asks the cadet to explain group survival swimming and why staying together saves lives.",
    instructions: [
      "Explain why survivors should stay together in the water.",
      "Describe how a group conserves heat and stays visible to rescuers.",
      "State one way the group keeps a weaker member safe.",
      "Report the skills in clear English suitable for a safety briefing."
    ],
    deliverable: "A brief in English explaining group survival swimming: staying together, conserving heat, visibility, and helping a weaker member.",
    assessmentCriteria: [
      "The reason to stay together is correct.",
      "The heat/visibility reasoning is sound.",
      "The support method is valid.",
      "The brief is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0011",
    subjectName: "Educación Física V",
    subjectId: "pn-s5-educacion-fisica-v",
    unit: "Concentración",
    topic: "Juegos de concentración",
    week: 4,
    taskId: "pn-c0011v-w04-focus-endurance",
    taskTitle: "Sustain Focus Through A Long Operation",
    scenario: "A long cargo or navigation operation tests sustained focus. The officer asks the cadet to explain how to keep concentration through fatigue during a long operation.",
    instructions: [
      "Explain why concentration degrades during a long operation.",
      "Describe two techniques to sustain focus through fatigue.",
      "State the risk of a concentration lapse during the operation.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining how to sustain concentration through a long operation, with two techniques and the risk of a lapse.",
    assessmentCriteria: [
      "The cause of degraded focus is correct.",
      "The techniques are practical.",
      "The risk is realistic.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0104",
    subjectName: "Ética Profesional",
    subjectId: "pn-s5-etica-profesional",
    unit: "Ética y profesión",
    topic: "Responsabilidad social y ética de la Gente de Mar",
    week: 1,
    taskId: "pn-c0104-w01-seafarer-responsibility",
    taskTitle: "Explain The Seafarer's Ethical Responsibility",
    scenario: "A seafarer holds responsibility for lives, cargo, and the environment. The officer asks the cadet to explain the ethical responsibilities that come with the profession.",
    instructions: [
      "State two ethical responsibilities a seafarer carries.",
      "Explain why these responsibilities matter beyond just following rules.",
      "Give an example where doing the right thing protects lives or the environment.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining two ethical responsibilities of a seafarer, why they matter, and an example of ethical action.",
    assessmentCriteria: [
      "The responsibilities are valid and relevant.",
      "The reasoning goes beyond mere rule-following.",
      "The example is appropriate.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0104",
    subjectName: "Ética Profesional",
    subjectId: "pn-s5-etica-profesional",
    unit: "Ética y Moral",
    topic: "La reflexión ética",
    week: 2,
    taskId: "pn-c0104-w02-ethical-reflection",
    taskTitle: "Reason Through An Ethical Dilemma At Sea",
    scenario: "A seafarer faces a dilemma: reporting a fault honestly may delay the ship and anger superiors. The officer asks the cadet to reason through the ethical choice.",
    instructions: [
      "State the dilemma and the competing pressures.",
      "Apply ethical reflection to weigh the options.",
      "State the right course of action and justify it.",
      "Report your reasoning in clear maritime English."
    ],
    deliverable: "A note in English reasoning through an ethical dilemma at sea, weighing the options and justifying the right action.",
    assessmentCriteria: [
      "The dilemma is clearly stated.",
      "The ethical reasoning is sound.",
      "The chosen action is well justified.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0104",
    subjectName: "Ética Profesional",
    subjectId: "pn-s5-etica-profesional",
    unit: "Ética y profesión",
    topic: "Los valores de la Gente de Mar",
    week: 3,
    taskId: "pn-c0104-w03-seafarer-values",
    taskTitle: "Apply Core Seafarer Values To A Situation",
    scenario: "Values like integrity, responsibility, and respect guide a seafarer's conduct. The officer asks the cadet to apply these values to a realistic shipboard situation.",
    instructions: [
      "Name three core values that guide a seafarer.",
      "Describe a shipboard situation that tests one of these values.",
      "Explain how the value guides the right behaviour.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English naming three seafarer values and showing how one guides behaviour in a realistic situation.",
    assessmentCriteria: [
      "The values are valid and relevant.",
      "The situation genuinely tests a value.",
      "The reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0104",
    subjectName: "Ética Profesional",
    subjectId: "pn-s5-etica-profesional",
    unit: "Ética y profesión",
    topic: "Acción Ética: Toma de decisiones ambientales",
    week: 4,
    taskId: "pn-c0104-w04-environmental-ethics",
    taskTitle: "Make An Environmental Decision At Sea",
    scenario: "A seafarer must decide how to handle waste or a minor spill that no one would notice. The officer asks the cadet to reason through the environmentally ethical decision.",
    instructions: [
      "State the environmental situation and the easy-but-wrong option.",
      "Explain the environmental and legal reasons to do the right thing.",
      "State the correct action under MARPOL principles.",
      "Report your reasoning in clear maritime English."
    ],
    deliverable: "A note in English reasoning through an environmental decision at sea, with the correct action and why it matters.",
    assessmentCriteria: [
      "The situation is realistic.",
      "The environmental/legal reasoning is sound.",
      "The correct action aligns with marine environmental protection.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0105",
    subjectName: "Liderazgo",
    subjectId: "pn-s5-liderazgo",
    unit: "El liderazgo",
    topic: "Tipos de liderazgo",
    week: 1,
    taskId: "pn-c0105-w01-leadership-styles",
    taskTitle: "Match Leadership Styles To Situations",
    scenario: "An officer must adapt their leadership style to the situation. The cadet is asked to explain different leadership styles and when each suits a shipboard situation.",
    instructions: [
      "Describe two leadership styles (e.g. directive, participative).",
      "State a shipboard situation where each style works best.",
      "Explain why an emergency may need a different style than routine work.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English describing two leadership styles and the shipboard situations where each suits, including the emergency case.",
    assessmentCriteria: [
      "The leadership styles are valid.",
      "The situation matches are appropriate.",
      "The emergency reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0105",
    subjectName: "Liderazgo",
    subjectId: "pn-s5-liderazgo",
    unit: "Autoconciencia",
    topic: "Inteligencia emocional: autoconciencia, manejo de emociones, interpretación de emociones, empatía, uso de emociones",
    week: 2,
    taskId: "pn-c0105-w02-emotional-intelligence",
    taskTitle: "Apply Emotional Intelligence Under Pressure",
    scenario: "Under pressure, an officer must manage their own emotions and read the crew's. The cadet is asked to explain how emotional intelligence helps lead in a tense situation.",
    instructions: [
      "Define emotional intelligence in your own words.",
      "Explain how self-awareness and managing emotions help an officer under pressure.",
      "Explain how reading the crew's emotions improves the response.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining how emotional intelligence (self-awareness, emotion management, empathy) helps an officer lead under pressure.",
    assessmentCriteria: [
      "Emotional intelligence is correctly explained.",
      "The self-management reasoning is sound.",
      "The empathy/crew-reading point is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0105",
    subjectName: "Liderazgo",
    subjectId: "pn-s5-liderazgo",
    unit: "Elementos del liderazgo",
    topic: "Trabajo en equipo",
    week: 3,
    taskId: "pn-c0105-w03-teamwork",
    taskTitle: "Build Effective Teamwork On Board",
    scenario: "A watch team works best when it functions as a team, not individuals. The officer asks the cadet to explain how an officer builds effective teamwork on board.",
    instructions: [
      "State two things an officer does to build a strong team.",
      "Explain how clear roles and communication support teamwork.",
      "Explain why teamwork is critical in an emergency.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining how an officer builds effective teamwork, the role of clear roles/communication, and why it matters in an emergency.",
    assessmentCriteria: [
      "The team-building actions are sound.",
      "The roles/communication reasoning is correct.",
      "The emergency point is valid.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0105",
    subjectName: "Liderazgo",
    subjectId: "pn-s5-liderazgo",
    unit: "Estrategias de planeación y operación",
    topic: "Estrategias para resolver los problemas: Ganar-ganar, sinergia",
    week: 4,
    taskId: "pn-c0105-w04-problem-solving",
    taskTitle: "Resolve A Conflict With A Win-Win Approach",
    scenario: "Two crew members disagree over how to do a job, slowing the work. The officer asks the cadet to resolve the conflict using a win-win, synergy-based approach.",
    instructions: [
      "State the conflict and each side's position.",
      "Explain the win-win approach to resolving it.",
      "Describe how synergy produces a better outcome than either side alone.",
      "Report your resolution in clear maritime English."
    ],
    deliverable: "A note in English resolving a crew conflict with a win-win, synergy-based approach, showing how it produces a better outcome.",
    assessmentCriteria: [
      "The conflict is clearly stated.",
      "The win-win approach is correctly applied.",
      "The synergy reasoning is sound.",
      "The resolution is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  }
];
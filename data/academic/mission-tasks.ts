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
  }
];
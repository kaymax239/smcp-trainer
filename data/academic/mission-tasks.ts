// Task type definitions live in ./mission-tasks/types and are re-exported
// here so existing consumers keep importing them from
// "@/data/academic/mission-tasks" unchanged.
export type { GrammarSentence, TaskGame, AcademicMissionTask } from "./mission-tasks/types";
import type { AcademicMissionTask } from "./mission-tasks/types";
import { mnSemesterViiTasks } from "./mission-tasks/mn-semester-vii";

export const academicMissionTasks: AcademicMissionTask[] = [
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Maritimo",
    subjectId: "pn-s1-transporte-maritimo",
    unit: "Antecedentes del Transporte Maritimo",
    topic: "Historia de la navegacion y fundamentos del transporte maritimo",
    week: 1,
    taskId: "pn-tmo101-maritime-transport-flow",
    taskTitle: "Brief The Historical Framework Of Maritime Transport",
    scenario: "The deck officer asks the cadet to brief the watch team on how navigation evolved into modern maritime transport, and how cargo moves through a basic transport operation.",
    instructions: [
      "Identify two milestones in how navigation evolved from ancient to modern maritime transport.",
      "Outline the main stages of a basic maritime transport operation, from cargo acceptance to discharge.",
      "Connect one historical development to a current deck watch practice.",
      "Report the brief in clear deck-watch English."
    ],
    deliverable: "A short deck watch brief linking the historical evolution of navigation to the stages of a modern maritime transport operation.",
    assessmentCriteria: [
      "Historical milestones are correct and clearly ordered.",
      "Transport operation stages follow a logical sequence.",
      "The link between history and current shipboard practice is sound.",
      "The brief is clear and in correct deck-watch English."
    ],
    xp: 15,
    estimatedTime: "30 min",
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
    week: 1,
    taskId: "pn-tmo101-maritime-organization-match",
    taskTitle: "Match Maritime Organization To Shipboard Function",
    scenario: "Before a safety meeting, the cadet must match international maritime organizations to their operational impact onboard.",
    instructions: [
      "Identify OMI, OIT, UIT, and OMM.",
      "State one maritime function influenced by each organization.",
      "Describe how the function appears during deck operations.",
      "Report the matching clearly in correct English."
    ],
    deliverable: "An organization-function matching table linking each body to a deck operation it influences.",
    assessmentCriteria: [
      "Each organization is identified correctly.",
      "Functions are relevant to maritime operations.",
      "Examples connect regulation to shipboard practice.",
      "The table is clear and in correct English."
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
    unit: "Dimensiones y elementos del Buque",
    topic: "Tipos de buque y nomenclatura estructural del buque",
    week: 2,
    taskId: "pn-tmo101-vessel-type-identification",
    taskTitle: "Identify Vessel Types And Structural Nomenclature",
    scenario: "A port operations board lists arriving vessels. The cadet must identify each vessel type and label the principal dimensions and structural nomenclature of the hull.",
    instructions: [
      "Select three merchant vessel types and state the cargo or service of each.",
      "Identify the principal dimensions: length, beam, draft, and freeboard.",
      "Label the main structural parts: bow, stern, port, starboard, deck, and hull.",
      "State why vessel type and each dimension matter for deck operations."
    ],
    deliverable: "A vessel identification and structural nomenclature sheet for three merchant vessel types, with principal dimensions and hull parts labelled.",
    assessmentCriteria: [
      "Vessel types are named correctly with their operational purpose.",
      "Principal dimensions are identified correctly.",
      "Structural parts use accepted nautical terms.",
      "Operational importance of type and dimensions is stated clearly."
    ],
    xp: 15,
    estimatedTime: "30 min",
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
    week: 2,
    taskId: "pn-tmo101-hull-stress-brief",
    taskTitle: "Brief Hull Stress Conditions",
    scenario: "During basic ship construction familiarization, the cadet must explain hogging and sagging risks in simple operational terms.",
    instructions: [
      "Define quebranto (hogging) and arrufo (sagging) in relation to hull stress.",
      "Identify one loading or sea condition that may contribute to each stress condition.",
      "State why deck officers monitor hull stress indicators.",
      "Report the brief in clear deck-watch English."
    ],
    deliverable: "A hull stress familiarization brief.",
    assessmentCriteria: [
      "Quebranto and arrufo are distinguished correctly.",
      "Causes are connected to loading or sea conditions.",
      "Operational monitoring reason is clear.",
      "The brief is clear and in correct English."
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
    unit: "Equipo de carga/descarga",
    topic: "Maniobras de cubierta: equipo de carga, descarga, amarre y fondeo",
    week: 3,
    taskId: "pn-tmo101-cargo-mooring-equipment-check",
    taskTitle: "Identify Cargo And Mooring Equipment",
    scenario: "The boatswain points to deck equipment before cargo operations and asks the cadet to identify its purpose.",
    instructions: [
      "Identify cargo handling equipment from the deck area.",
      "Identify mooring or anchoring equipment from the forecastle area.",
      "State one safety consideration for each equipment group.",
      "Report the identification clearly in correct English."
    ],
    deliverable: "A deck equipment identification and safety note.",
    assessmentCriteria: [
      "Equipment names match their operational use.",
      "Cargo, mooring, and anchoring functions are not confused.",
      "Safety notes are practical and observable.",
      "The note is clear and in correct English."
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
    unit: "Lineas de Carga y Marca de calados",
    topic: "Lineas de carga, francobordo y lectura de calados",
    week: 3,
    taskId: "pn-tmo101-draft-mark-reading",
    taskTitle: "Read Draft Marks And Load Line Information",
    scenario: "At the quay, the officer asks the cadet to observe draft marks and explain the load line information visible on the hull.",
    instructions: [
      "Identify where draft marks are read.",
      "State the meaning of freeboard and load line.",
      "Record an example draft reading format.",
      "Report the observation clearly in correct English."
    ],
    deliverable: "A draft mark and load line observation record.",
    assessmentCriteria: [
      "Draft mark location is identified correctly.",
      "Freeboard and load line are described accurately.",
      "Reading format is usable for a deck report.",
      "The record is clear and in correct English."
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
    unit: "Tanques de lastre, agua dulce y combustible",
    topic: "Sistemas del buque: tanques, achique y contraincendios",
    week: 4,
    taskId: "pn-tmo101-tank-sounding-layout",
    taskTitle: "Trace Tanks, Bilge And Fire-Fighting Arrangements",
    scenario: "Before a familiarization round, the cadet must identify the vessel's tank distribution and the basic bilge (achique) and fire-fighting arrangements found on deck.",
    instructions: [
      "List ballast, fresh water, and fuel tank categories, and the role of sounding pipes and vents.",
      "Identify the purpose of the bilge (achique) system in removing accumulated water.",
      "Identify one basic fire-fighting arrangement available on deck.",
      "Report the arrangement clearly in correct deck-watch English."
    ],
    deliverable: "A ship systems note describing the tank arrangement with sounding and vent functions, the bilge system, and a basic fire-fighting arrangement.",
    assessmentCriteria: [
      "Tank categories, sounding pipes and vents are described correctly.",
      "The purpose of the bilge system is accurate.",
      "The fire-fighting arrangement is valid and correctly named.",
      "The note is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Maritimo",
    subjectId: "pn-s1-transporte-maritimo",
    unit: "Desarrollo de la propulsion Naval",
    topic: "Propulsion naval como sistema del buque",
    week: 4,
    taskId: "pn-tmo101-propulsion-development-report",
    taskTitle: "Report Propulsion Development Milestones",
    scenario: "The training officer asks the cadet to explain how ship propulsion developed and why the propulsion system matters to the deck watch for manoeuvring and speed control.",
    instructions: [
      "Identify major propulsion development stages (sail, steam, diesel).",
      "Describe the operational change produced by each stage.",
      "Explain why the deck watch must understand the propulsion system for manoeuvring and speed control.",
      "Report your answer in clear deck-watch English."
    ],
    deliverable: "A propulsion development report linking each stage to a modern shipboard propulsion system and its relevance to the deck watch.",
    assessmentCriteria: [
      "Development stages are in a logical sequence.",
      "Operational changes are described clearly.",
      "The relevance of propulsion to deck manoeuvring is sound.",
      "The report is clear and in correct English."
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
    unit: "Tipos de carga y su manipulacion en cubierta",
    topic: "Carga general, granel solido, granel liquido, contenedores, refrigerada y peligrosa (IMDG)",
    week: 5,
    taskId: "pn-tmo101-w05-cargo-types-handling",
    taskTitle: "Classify Cargoes And Their Deck Handling Needs",
    scenario: "A multipurpose vessel is loading a mixed consignment at a general cargo berth. The chief officer hands the cadet the loading list and asks how each cargo must be handled on deck before the gangs start work.",
    instructions: [
      "Classify four consignments from the loading list by cargo type: general, dry bulk, liquid bulk, container, reefer, or dangerous (IMDG).",
      "State one defining handling requirement on deck for each cargo type.",
      "Identify which consignment needs special attention (for example reefer temperature control or IMDG segregation) and explain why.",
      "Report the classification in clear deck English for the cargo officer."
    ],
    deliverable: "A cargo classification note listing four consignments by type, each with its deck handling requirement and the special-attention item clearly identified.",
    assessmentCriteria: [
      "Each consignment is classified with the correct cargo type.",
      "Handling requirements match the characteristics of each cargo.",
      "The special-attention cargo is correctly identified and justified.",
      "The note is clear and in correct deck English."
    ],
    xp: 15,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Maritimo",
    subjectId: "pn-s1-transporte-maritimo",
    unit: "Estiba y distribucion de la carga",
    topic: "Plan de estiba, segregacion, trincado y distribucion de pesos",
    week: 6,
    taskId: "pn-tmo101-w06-stowage-plan-securing",
    taskTitle: "Draft A Stowage And Securing Plan",
    scenario: "Before a coastal passage where moderate swell is forecast, the chief officer asks the cadet to draft a basic stowage plan for a general cargo of drums, bagged goods and one container carried on deck.",
    instructions: [
      "Assign a hold or deck position to at least three consignments in a basic stowage plan.",
      "Apply one segregation rule to keep incompatible or fragile cargoes apart.",
      "Specify a lashing or securing method for the cargo carried on deck for the expected sea conditions.",
      "Explain how your weight distribution keeps the vessel in safe trim, in clear deck English."
    ],
    deliverable: "A stowage and securing plan note assigning positions to the consignments, with the segregation rule, the lashing method, and a weight-distribution justification.",
    assessmentCriteria: [
      "Stowage positions are logical for the cargo and the vessel.",
      "The segregation rule is correctly applied to keep incompatible cargoes apart.",
      "The securing method is appropriate for deck cargo in the forecast conditions.",
      "Weight distribution is justified for safe trim, in correct deck English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Maritimo",
    subjectId: "pn-s1-transporte-maritimo",
    unit: "Estabilidad basica del buque y la carga",
    topic: "Centro de gravedad, GM operativo, superficie libre y efecto de la estiba",
    week: 7,
    taskId: "pn-tmo101-w07-stability-cargo-effect",
    taskTitle: "Assess How Cargo Affects Basic Stability",
    scenario: "After a day of loading, a heavy lift has been stowed high on deck and one ballast tank has been left slack. The officer asks the cadet to explain to the junior crew how the day's stowage changed the vessel's stability.",
    instructions: [
      "Explain what the centre of gravity (G) and the metacentric height (GM) tell the officer about the vessel's stability.",
      "Describe how stowing heavy cargo high versus low moves G and changes the GM.",
      "Explain the free surface effect of the slack tank and why it reduces stability.",
      "Recommend one stowage or ballast action to keep a safe positive GM, in clear deck English."
    ],
    deliverable: "A stability note explaining G and GM in operational terms, the effect of cargo height and the slack tank, and one recommended action to maintain a safe positive GM.",
    assessmentCriteria: [
      "The roles of G and GM are explained correctly in operational terms.",
      "The effect of high versus low cargo on G and GM is correct.",
      "The free surface effect of the slack tank is explained accurately.",
      "The recommended action would maintain a safe positive GM, in correct deck English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Maritimo",
    subjectId: "pn-s1-transporte-maritimo",
    unit: "Seguridad operacional y convenios internacionales",
    topic: "SOLAS, MARPOL y STCW aplicados a operaciones de cubierta",
    week: 8,
    taskId: "pn-tmo101-w08-conventions-deck-operations",
    taskTitle: "Apply SOLAS, MARPOL And STCW To A Deck Operation",
    scenario: "The vessel is about to begin cargo operations and prepare for departure. The officer asks the cadet to connect the three main international conventions to the concrete actions the deck team must take during the operation.",
    instructions: [
      "State the main purpose of SOLAS, MARPOL and STCW in one line each.",
      "Give one concrete deck action required by each convention during cargo operations or departure.",
      "Identify one pollution-prevention measure the deck team applies during bunkering or cargo work, and attribute it to MARPOL.",
      "Explain how STCW watchkeeping standards keep the deck operation safe, in clear deck English."
    ],
    deliverable: "A deck compliance brief linking SOLAS, MARPOL and STCW each to a concrete deck action, with the pollution-prevention measure and the watchkeeping standard clearly identified.",
    assessmentCriteria: [
      "The main purpose of each convention is stated correctly.",
      "Each convention is linked to a valid, concrete deck action.",
      "The pollution-prevention measure is appropriate and correctly attributed to MARPOL.",
      "The brief connects watchkeeping competence to operational safety, in correct deck English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
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
    subjectCode: "ALG103",
    subjectName: "Álgebra",
    subjectId: "mn-s1-algebra",
    unit: "Proporciones y relaciones",
    topic: "Relaciones de transmisión (engranes y poleas)",
    week: 5,
    taskId: "mn-alg103-w05-transmission-ratio",
    taskTitle: "Find Output Speed Through Gear And Pulley Ratios",
    scenario: "A reduction gearbox connects the engine to a pump, and a separate belt-pulley drives an auxiliary. The engineer asks the cadet to work out the output speeds, remembering that a reduction drive lowers the speed.",
    instructions: [
      "State the rule: for a reduction ratio, output speed = input speed / ratio (the reducer lowers the speed).",
      "Calculate the gearbox output speed for an 1800 rpm input through a 3:1 reduction ratio.",
      "Calculate the pulley output speed for a 1200 rpm input through a 4:1 reduction ratio.",
      "Confirm each output is lower than its input and report the results in rpm, in clear engine-room English."
    ],
    deliverable: "A transmission calculation in English giving the gearbox and pulley output speeds, with the working shown and each output confirmed lower than its input.",
    assessmentCriteria: [
      "The rule (output = input / ratio, the reducer reduces speed) is stated correctly.",
      "The gearbox output is correct (1800 / 3 = 600 rpm).",
      "The pulley output is correct (1200 / 4 = 300 rpm).",
      "Both outputs are correctly lower than their input, in clear engine-room English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ALG103",
    subjectName: "Álgebra",
    subjectId: "mn-s1-algebra",
    unit: "Regla de tres",
    topic: "Consumo de combustible y autonomía",
    week: 6,
    taskId: "mn-alg103-w06-fuel-consumption-autonomy",
    taskTitle: "Work Out Fuel Use And Tank Autonomy",
    scenario: "A generator burns fuel at a steady rate. The engineer asks the cadet to work out how much fuel is used over a watch and how long the service tank will last.",
    instructions: [
      "Calculate the fuel used over a 12-hour period at a consumption of 40 litres per hour (rule of three).",
      "State the result in litres.",
      "Calculate the autonomy of a 2000-litre service tank using autonomy = capacity / consumption.",
      "Confirm the units work out (litres / (litres per hour) = hours) and report the results, in clear engine-room English."
    ],
    deliverable: "A fuel calculation in English giving the fuel used over the period and the tank autonomy in hours, with the working and the unit check shown.",
    assessmentCriteria: [
      "The fuel used is correct (40 L/h x 12 h = 480 L).",
      "The autonomy is correct (2000 L / 40 L/h = 50 h).",
      "The unit check (litres / (litres per hour) = hours) is shown correctly.",
      "Results carry the correct units and the English is clear."
    ],
    xp: 25,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ALG103",
    subjectName: "Álgebra",
    subjectId: "mn-s1-algebra",
    unit: "Despeje de fórmulas",
    topic: "Transposición de fórmulas de máquinas (V = Q x t)",
    week: 7,
    taskId: "mn-alg103-w07-formula-transposition-transfer",
    taskTitle: "Rearrange V = Q x t To Find A Transfer Time",
    scenario: "A transfer pump moves fuel between tanks at a steady flow rate. The engineer asks the cadet to rearrange the volume-flow formula to find how long a transfer will take.",
    instructions: [
      "Start from V = Q x t and rearrange it to make the time t the subject.",
      "Using a flow rate Q = 5 cubic metres per hour and a volume V = 30 cubic metres, calculate the transfer time t.",
      "Repeat for a volume of 45 cubic metres at the same flow rate.",
      "State both times with units and confirm they are reasonable, in clear engine-room English."
    ],
    deliverable: "A transposition calculation in English showing the rearranged formula t = V / Q and the two transfer times, with the working shown.",
    assessmentCriteria: [
      "The formula is correctly rearranged to t = V / Q.",
      "The first time is correct (30 / 5 = 6 h).",
      "The second time is correct (45 / 5 = 9 h).",
      "The units (cubic metres / (cubic metres per hour) = hours) are correct, in clear English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ALG103",
    subjectName: "Álgebra",
    subjectId: "mn-s1-algebra",
    unit: "Porcentajes y tolerancias",
    topic: "Desgaste, holgura vs tolerancia y carga del motor vs MCR",
    week: 8,
    taskId: "mn-alg103-w08-percentages-tolerances",
    taskTitle: "Assess Wear, Clearance And Engine Load As Percentages",
    scenario: "During maintenance the cadet must judge a worn bearing, a measured clearance and the engine load. The engineer asks the cadet to work these out as percentages and say whether each is within limits.",
    instructions: [
      "Calculate the percentage wear of a bearing journal that has worn from an original diameter of 200 mm to 197 mm, taking the wear as a percentage of the ORIGINAL dimension.",
      "A maximum allowable clearance is 0.50 mm and the measured clearance is 0.40 mm; state whether it is within tolerance and by what margin as a percentage of the maximum.",
      "Calculate the engine load as a percentage of MCR when the main engine runs at 6000 kW against an MCR of 8000 kW.",
      "Report all three results with correct units and a clear within/over-limit conclusion, in clear engine-room English."
    ],
    deliverable: "A percentages note in English giving the bearing wear, the clearance judgement with its margin, and the engine load versus MCR, with the working shown.",
    assessmentCriteria: [
      "The bearing wear is correct (3 mm on the 200 mm original = 1.5%), taken on the ORIGINAL dimension.",
      "The clearance is correctly judged within tolerance (0.40 <= 0.50), with the margin (0.10 mm = 20% of the maximum).",
      "The engine load is correct (6000 / 8000 = 75% of MCR).",
      "Results carry the correct units and a clear conclusion, in clear engine-room English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
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
    subjectCode: "FIS104",
    subjectName: "Física",
    subjectId: "mn-s1-fisica",
    unit: "Termodinámica",
    topic: "Leyes de los gases (ley combinada)",
    week: 5,
    taskId: "mn-fis104-w05-gas-law-cylinder",
    taskTitle: "Apply The Combined Gas Law To A Cylinder Charge",
    scenario: "In an engine cylinder the air charge is at 1 bar and 2.0 cubic metres at 27 degrees C. It is compressed to 0.5 cubic metres and its temperature rises to 327 degrees C. The engineer asks the cadet to find the new pressure.",
    instructions: [
      "Convert both temperatures from degrees C to kelvin by adding 273 (27 C = 300 K, 327 C = 600 K).",
      "Write the combined gas law P1 x V1 / T1 = P2 x V2 / T2 and rearrange it for P2.",
      "Substitute the values (with temperatures in kelvin) and calculate the new pressure P2.",
      "State the result with the correct unit and confirm it is physically reasonable, in clear engine-room English."
    ],
    deliverable: "A gas-law calculation in English showing the kelvin conversion, the rearranged formula, and the new cylinder pressure, with the working shown.",
    assessmentCriteria: [
      "Both temperatures are correctly converted to kelvin (300 K and 600 K).",
      "The combined gas law is correctly rearranged to P2 = P1 x V1 x T2 / (T1 x V2).",
      "The new pressure is correct (P2 = 8 bar).",
      "The result carries the correct unit and the English is clear."
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
    unit: "Transferencia de calor",
    topic: "Calor específico y calor a extraer (Q = m c deltaT)",
    week: 6,
    taskId: "mn-fis104-w06-cooler-heat-removal",
    taskTitle: "Calculate The Heat A Cooler Must Remove",
    scenario: "A lube oil cooler must bring 200 kg of oil down from 70 degrees C to 45 degrees C. The oil has a specific heat of 2.0 kJ per kg per K. The engineer asks the cadet to work out how much heat the cooler must remove.",
    instructions: [
      "Find the temperature change deltaT (for a difference, kelvin and degrees C are numerically equal).",
      "Write the heat equation Q = m x c x deltaT.",
      "Substitute the mass, specific heat and deltaT and calculate the heat to be removed.",
      "State the result with the correct unit (kJ or MJ), in clear engine-room English."
    ],
    deliverable: "A heat-removal calculation in English giving the temperature change, the equation, and the heat the cooler must remove, with the working shown.",
    assessmentCriteria: [
      "The temperature change is correct (deltaT = 25 K).",
      "The heat equation Q = m x c x deltaT is applied correctly.",
      "The heat removed is correct (200 x 2.0 x 25 = 10 000 kJ = 10 MJ).",
      "The result carries the correct unit and the English is clear."
    ],
    xp: 25,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "FIS104",
    subjectName: "Física",
    subjectId: "mn-s1-fisica",
    unit: "Mecánica de fluidos",
    topic: "Principio de Pascal e hidráulica (F1/A1 = F2/A2)",
    week: 7,
    taskId: "mn-fis104-w07-hydraulic-pascal",
    taskTitle: "Apply Pascal's Principle To A Hydraulic Jack",
    scenario: "In an engine-room hydraulic jack a force of 200 N is applied to a small piston of area 0.001 square metres. The large piston has an area of 0.02 square metres. The engineer asks the cadet to find the system pressure and the force the large piston can exert.",
    instructions: [
      "Calculate the system pressure using P = F1 / A1.",
      "Write Pascal's principle F1 / A1 = F2 / A2 (the pressure is the same throughout the fluid).",
      "Calculate the force F2 that the large piston can exert.",
      "State the force-multiplication factor and give the results with correct units, in clear engine-room English."
    ],
    deliverable: "A hydraulics calculation in English giving the system pressure, the force on the large piston, and the force-multiplication factor, with the working shown.",
    assessmentCriteria: [
      "The system pressure is correct (200 / 0.001 = 200 000 Pa = 200 kPa).",
      "Pascal's principle is applied correctly.",
      "The force on the large piston is correct (F2 = 4000 N).",
      "The force-multiplication factor (A2 / A1 = 20) and the units are correct, in clear English."
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
    unit: "Dinámica rotacional",
    topic: "Par, revoluciones y potencia al eje (P = 2 pi N T)",
    week: 8,
    taskId: "mn-fis104-w08-shaft-power-torque",
    taskTitle: "Calculate Shaft Power From Torque And RPM",
    scenario: "A propeller shaft transmits a torque of 50 000 N m at 120 rpm. The engineer asks the cadet to calculate the shaft power delivered, being careful with the units of rotational speed.",
    instructions: [
      "Note that N is given in rpm, so either convert it to rev/s by dividing by 60, or use P = 2 x pi x N x T / 60 with N in rpm.",
      "Write the shaft power formula and state which form you are using and why.",
      "Substitute the torque and speed and calculate the shaft power.",
      "State the result in kilowatts and confirm it is physically reasonable, in clear engine-room English."
    ],
    deliverable: "A shaft-power calculation in English showing the treatment of the rpm-to-rev/s conversion, the formula used, and the shaft power in kilowatts, with the working shown.",
    assessmentCriteria: [
      "The rpm speed is handled correctly (120 rpm = 2 rev/s, or the /60 factor is used).",
      "The shaft power formula is applied correctly (P = 2 x pi x N x T with N in rev/s).",
      "The shaft power is correct (about 628 kW, i.e. 628 318 W).",
      "The result is given in kilowatts and the English is clear."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
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
    subjectCode: "ELE106",
    subjectName: "Electricidad",
    subjectId: "mn-s1-electricidad",
    unit: "Potencia eléctrica",
    topic: "Potencia activa, factor de potencia y eficiencia del motor",
    week: 5,
    taskId: "mn-ele106-w05-motor-power-efficiency",
    taskTitle: "Find A Motor's Input Power And Efficiency",
    scenario: "An engine-room auxiliary motor is supplied at 200 V and draws 25 A at a power factor of 0.8. Its mechanical output is 3.2 kW. The engineer asks the cadet to work out the electrical input power and the motor's efficiency.",
    instructions: [
      "Calculate the electrical input power using P = V x I x power factor.",
      "State the input power in kilowatts.",
      "Calculate the efficiency using efficiency = output power / input power, with output = 3.2 kW.",
      "State the efficiency as a percentage and confirm it is reasonable for a motor, in clear engine-room English."
    ],
    deliverable: "A power-and-efficiency calculation in English giving the input power in kW and the motor efficiency as a percentage, with the working shown.",
    assessmentCriteria: [
      "The input power is correct (200 x 25 x 0.8 = 4000 W = 4 kW).",
      "The power factor is correctly applied.",
      "The efficiency is correct (3200 / 4000 = 0.80 = 80%).",
      "Results carry the correct units (W/kW, %) and the English is clear."
    ],
    xp: 25,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ELE106",
    subjectName: "Electricidad",
    subjectId: "mn-s1-electricidad",
    unit: "Máquinas eléctricas",
    topic: "Motor de inducción: velocidad síncrona y deslizamiento",
    week: 6,
    taskId: "mn-ele106-w06-induction-motor-slip",
    taskTitle: "Calculate Synchronous Speed And Slip",
    scenario: "A 4-pole induction motor drives an engine-room pump on a 60 Hz supply. Its rotor turns at 1710 rpm. The engineer asks the cadet to find the synchronous speed and the slip.",
    instructions: [
      "Calculate the synchronous speed using Ns = 120 x f / p, with f = 60 Hz and p = 4 poles.",
      "State the synchronous speed in rpm.",
      "Calculate the slip using slip = (Ns - Nr) / Ns, with the rotor speed Nr = 1710 rpm.",
      "State the slip as a percentage and explain why an induction motor must run slower than synchronous speed, in clear engine-room English."
    ],
    deliverable: "A calculation in English giving the synchronous speed in rpm and the slip as a percentage, with the working shown.",
    assessmentCriteria: [
      "The synchronous speed is correct (120 x 60 / 4 = 1800 rpm).",
      "The slip is calculated correctly ((1800 - 1710) / 1800 = 0.05).",
      "The slip is stated as 5%.",
      "The reason the rotor runs below synchronous speed is correct, in clear engine-room English."
    ],
    xp: 25,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ELE106",
    subjectName: "Electricidad",
    subjectId: "mn-s1-electricidad",
    unit: "Arranque de motores",
    topic: "Corriente de arranque y arranque estrella-triángulo",
    week: 7,
    taskId: "mn-ele106-w07-motor-starting-star-delta",
    taskTitle: "Compare Direct And Star-Delta Starting Current",
    scenario: "An engine-room induction motor has a full-load current of 30 A and a direct-on-line starting current of 6 times full load. The engineer asks the cadet to compare the direct-on-line and star-delta starting currents and their effect on the generator.",
    instructions: [
      "Calculate the direct-on-line (DOL) starting current: 6 times the full-load current of 30 A.",
      "State why such a high starting current is a problem for the ship's generator.",
      "Calculate the starting current with star-delta starting, which reduces it to about one-third of the DOL value.",
      "State what star-delta starting also does to the starting torque, in clear engine-room English."
    ],
    deliverable: "A comparison in English of the DOL and star-delta starting currents, with the working shown and the effect on the generator noted.",
    assessmentCriteria: [
      "The DOL starting current is correct (6 x 30 = 180 A).",
      "The problem of high starting current for the generator is correctly explained.",
      "The star-delta starting current is correct (180 / 3 = 60 A).",
      "The effect on starting torque (also reduced to about one-third) is correct, in clear engine-room English."
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
    unit: "Protección eléctrica",
    topic: "Protección de motores: sobrecarga, cortocircuito, tierra y aislamiento",
    week: 8,
    taskId: "mn-ele106-w08-motor-protection",
    taskTitle: "Set And Explain Engine-Room Motor Protection",
    scenario: "An engine-room motor with a full-load current of 40 A is protected by an overload relay set to trip at 115% of full load. The engineer asks the cadet to explain the motor's protection and work out the overload trip current.",
    instructions: [
      "Explain the purpose of an overload relay, of short-circuit protection (fuse or breaker), and of earth-fault protection for the motor.",
      "Calculate the overload trip current if the relay is set at 115% of the 40 A full-load current.",
      "Explain what a megger (insulation resistance test) checks and why low insulation resistance is dangerous.",
      "State one action to take if the motor's protection trips repeatedly, in clear engine-room English."
    ],
    deliverable: "A protection note in English giving the purpose of overload, short-circuit and earth-fault protection, the overload trip current, and the role of insulation testing.",
    assessmentCriteria: [
      "The purpose of overload, short-circuit and earth-fault protection is correct.",
      "The overload trip current is correct (1.15 x 40 = 46 A).",
      "The purpose of the megger/insulation test and the danger of low insulation are correct.",
      "The action for repeated tripping is sensible, in clear engine-room English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
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
    subjectCode: "ING102",
    subjectName: "Inglés Marítimo I",
    subjectId: "mn-s1-maritime-english-i",
    unit: "Comunicación interna de máquinas",
    topic: "Frases normalizadas OMI (SMCP) y marcadores de mensaje",
    week: 5,
    taskId: "mn-ing102-w05-smcp-engine-bridge-message",
    taskTitle: "Pass Engine-To-Bridge Messages Using SMCP Markers",
    scenario: "You are in the engine room and must pass messages to the bridge over the internal communication system: a warning about a rising temperature, information on a pump changeover, and your intention to slow a machine. Using the SMCP message markers, you make each message clear and unambiguous.",
    instructions: [
      "Choose the correct SMCP message marker for each message: a Warning, a piece of Information, and an Intention.",
      "Build each message in short standard SMCP phrasing for the internal engine-to-bridge line, avoiding everyday idioms.",
      "Explain how the message marker tells the bridge how to treat the message.",
      "Confirm receipt of a reply using an acknowledgement, in correct engine-room English."
    ],
    deliverable: "A note in English giving three engine-to-bridge messages (a Warning, an Information, and an Intention) built with the correct SMCP message markers, and how each is acknowledged.",
    assessmentCriteria: [
      "The message markers match the intent of each message (Warning, Information, Intention).",
      "The messages use short standard SMCP phrasing, not everyday idiom.",
      "The explanation of how the marker guides the bridge is correct.",
      "The acknowledgement is correct and the English is clear."
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
    unit: "Órdenes de máquina",
    topic: "Engine orders y telégrafo (read-back del lado de máquinas)",
    week: 6,
    taskId: "mn-ing102-w06-engine-telegraph-orders",
    taskTitle: "Acknowledge And Act On Telegraph Engine Orders",
    scenario: "During manoeuvring the bridge rings engine orders down on the telegraph. From the engine-room side you must recognise each order, repeat it back, and act on it. The engineer asks you to show the correct English for the main telegraph orders.",
    instructions: [
      "Recognise the standard telegraph engine orders in English (for example Full ahead, Half ahead, Slow astern, Stop engine, Finished with engines).",
      "For three orders, give the correct read-back that the engine side sends to acknowledge.",
      "State what action the engine side takes for one order (for example 'Stop engine').",
      "Explain why the read-back of a telegraph order prevents a manoeuvring error, in correct engine-room English."
    ],
    deliverable: "A note in English listing the standard telegraph engine orders, the read-back for three of them, the action for one order, and why read-back prevents errors.",
    assessmentCriteria: [
      "The telegraph engine orders are recognised with correct standard English.",
      "The read-back for the three orders is correct and complete.",
      "The action taken for the order is correct.",
      "The reason read-back prevents a manoeuvring error is sound, in correct engine-room English."
    ],
    xp: 25,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ING102",
    subjectName: "Inglés Marítimo I",
    subjectId: "mn-s1-maritime-english-i",
    unit: "Presente simple y there is / there are",
    topic: "Descripción de la maquinaria y su estado en la entrega de guardia",
    week: 7,
    taskId: "mn-ing102-w07-describe-machinery-state",
    taskTitle: "Hand Over The Machinery State In Present Simple",
    scenario: "At the change of the engine-room watch you must hand over the state of the machinery to the next cadet: which units are running, which are on standby, and the key pressures and temperatures. Using 'there is' and 'there are' with the present simple, you give a clear handover.",
    instructions: [
      "Use 'there is' and 'there are' to state which machinery is running and which is on standby.",
      "Use the present simple to describe the key readings (for example the lube oil pressure is 4 bar, the jacket water runs at 80 degrees C).",
      "State any item that needs watching during the next watch.",
      "Keep the handover accurate and easy for the next watch to act on, in correct engine-room English."
    ],
    deliverable: "A machinery handover in English using 'there is / there are' and the present simple to describe the running and standby equipment, the key readings, and anything to watch.",
    assessmentCriteria: [
      "'There is' and 'there are' are used correctly for singular and plural machinery.",
      "The present simple correctly describes the readings and equipment state.",
      "The item to watch is relevant and clearly stated.",
      "The handover is accurate and in correct engine-room English."
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
    unit: "Pasado simple",
    topic: "Parte de guardia de máquinas en pasado",
    week: 8,
    taskId: "mn-ing102-w08-engine-watch-report-past",
    taskTitle: "Report The Engine Watch In The Past Simple",
    scenario: "At the end of your engine-room watch you must report to the engineer what happened during it: you started a standby pump, changed over a fuel filter, and found and reported a small leak. You report the events in the past simple, in order.",
    instructions: [
      "Report the watch events in chronological order using the past simple (regular and irregular verbs).",
      "State clearly what happened, when, and what action was taken.",
      "Use correct past forms of common machinery verbs (for example started, stopped, changed over, checked, found, repaired).",
      "Keep the report factual and clear enough for the engineer to log, in correct engine-room English."
    ],
    deliverable: "An engine watch report in English narrating the watch events in the past simple, in chronological order, with the actions taken.",
    assessmentCriteria: [
      "The past simple is used correctly for both regular and irregular verbs.",
      "The events are in the correct chronological order.",
      "What happened and the action taken are stated clearly.",
      "The report is factual and in correct engine-room English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
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
    subjectCode: "DII105",
    subjectName: "Dibujo de Ingeniería",
    subjectId: "mn-s1-dibujo-ingenieria",
    unit: "Vistas ortográficas",
    topic: "Planta, alzado y perfil de un componente de máquina",
    week: 5,
    taskId: "mn-dii105-w05-orthographic-machine-component",
    taskTitle: "Read The Orthographic Views Of A Machine Component",
    scenario: "The engineer hands the cadet an orthographic drawing of a pump casing flange showing three views, and asks the cadet to identify each view and read the shape of the component before it is machined.",
    instructions: [
      "Identify which view is the plan (top), which is the front elevation, and which is the side or profile view.",
      "Explain what each view shows about the shape and dimensions of the component (bolt holes, bore, thickness).",
      "Describe how the three views together define the 3D form of the flange.",
      "Report your interpretation in clear engine-room English."
    ],
    deliverable: "A note in English identifying the plan, front elevation and side view of the machine component, what each shows, and how the three views combine to define its 3D form.",
    assessmentCriteria: [
      "The plan, front elevation and side view are correctly identified.",
      "What each view shows about shape and dimensions is correct.",
      "The explanation of how the views combine into a 3D form is sound.",
      "The note is clear and in correct engine-room English."
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
    unit: "Vistas en sección",
    topic: "Cortes y secciones de un componente de máquina",
    week: 6,
    taskId: "mn-dii105-w06-sectional-views",
    taskTitle: "Interpret A Sectional View Of A Component",
    scenario: "To understand what is inside a valve, the engineer shows the cadet a sectional view (a cut through the component) and asks why the section reveals what the outside views cannot.",
    instructions: [
      "State what a sectional view is and how a cutting plane produces it.",
      "Explain what the hatching (section lines) on the cut surfaces represents.",
      "Use the sectional view to describe an internal feature of the component that the outside views do not show (for example a bore, a seat, or a passage).",
      "Explain why sectional views are essential for machinery components, in clear engine-room English."
    ],
    deliverable: "A note in English explaining the sectional view, what the hatching means, one internal feature it reveals, and why sections are essential for machinery drawings.",
    assessmentCriteria: [
      "The idea of a sectional view and the cutting plane is explained correctly.",
      "The meaning of the hatching on cut surfaces is correct.",
      "An internal feature revealed by the section is correctly described.",
      "The reason sections are essential for machinery is sound, in clear engine-room English."
    ],
    xp: 25,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "DII105",
    subjectName: "Dibujo de Ingeniería",
    subjectId: "mn-s1-dibujo-ingenieria",
    unit: "Diagramas de tubería e instrumentación",
    topic: "Lectura de un P&ID y trazado del flujo",
    week: 7,
    taskId: "mn-dii105-w07-pid-flow-tracing",
    taskTitle: "Trace A System Flow On A Piping And Instrumentation Diagram",
    scenario: "Before working on a fuel or cooling system, the cadet must read its piping and instrumentation diagram (P&ID) and follow the flow through the whole system from suction to discharge.",
    instructions: [
      "Identify on the P&ID the pump, the main line, the valves, and the instruments in the system.",
      "Trace the flow path from the suction side, through the pump, to the discharge side.",
      "State the function of one valve and one instrument shown on the diagram.",
      "Explain how correctly reading the P&ID prevents a mistake when operating the system, in clear engine-room English."
    ],
    deliverable: "A note in English identifying the main elements of the P&ID, tracing the flow from suction to discharge, and giving the function of one valve and one instrument.",
    assessmentCriteria: [
      "The pump, line, valves and instruments are correctly identified on the P&ID.",
      "The flow is traced correctly from suction to discharge.",
      "The function of the valve and the instrument is correct.",
      "The link between correct P&ID reading and safe operation is sound, in clear engine-room English."
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
    unit: "Planos de disposición y de despiece",
    topic: "Arrangement plan de la sala de máquinas y planos de partes",
    week: 8,
    taskId: "mn-dii105-w08-engine-room-arrangement-exploded",
    taskTitle: "Use Arrangement And Exploded Drawings For Maintenance",
    scenario: "For a maintenance job the cadet must locate a piece of equipment on the engine-room arrangement plan and then use the exploded parts drawing to take it apart and reassemble it in the right order.",
    instructions: [
      "Use the engine-room arrangement plan to locate a named item of equipment and give its position in the space.",
      "State what an exploded (parts) drawing shows and how the part numbers relate to a parts list.",
      "Use the exploded drawing to set out the correct order to dismantle and then reassemble the component.",
      "Explain how these drawings support correct and safe maintenance, in clear engine-room English."
    ],
    deliverable: "A note in English locating the equipment on the arrangement plan, explaining the exploded parts drawing, and giving the dismantle-and-reassemble order for the component.",
    assessmentCriteria: [
      "The equipment is correctly located on the arrangement plan with its position.",
      "The purpose of the exploded drawing and its link to the parts list are correct.",
      "The dismantle and reassemble order is logical and correct.",
      "The link between the drawings and safe maintenance is sound, in clear engine-room English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
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
    subjectCode: "PMR107",
    subjectName: "Prácticas Marineras I",
    subjectId: "mn-s1-practicas-marineras-i",
    unit: "Cabuyería",
    topic: "Nudos, vueltas y costuras marineras esenciales",
    week: 5,
    taskId: "mn-pmr107-w05-knots-and-splices",
    taskTitle: "Choose And Tie The Right Knot For Each Job",
    scenario: "As part of basic seamanship training, the engine cadet is set several rope jobs on deck: making a fixed loop, tying a line to a rail, joining two ropes of different size, and securing a line that is under load. The instructor asks which knot fits each job and how a simple eye splice is formed.",
    instructions: [
      "Choose the correct knot or hitch for four rope jobs: a fixed loop, a line made fast to a rail or ring, two ropes joined, and a line held under load.",
      "Name each knot correctly (for example bowline, clove hitch, sheet bend, rolling hitch).",
      "Describe how one of them is tied and how you check it will hold and can be cast off.",
      "Explain when a basic eye splice is used instead of a knot, in clear English."
    ],
    deliverable: "A note in English matching four rope jobs to the correct named knot, with the tying steps for one knot and the case for using an eye splice.",
    assessmentCriteria: [
      "Each rope job is matched to a suitable knot or hitch.",
      "The knots are named correctly.",
      "The tying steps are accurate and include a check that it holds and casts off.",
      "The eye-splice case is correct, in clear English."
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
    unit: "Fondeo",
    topic: "Equipo de ancla y maniobra de fondear y levar",
    week: 6,
    taskId: "mn-pmr107-w06-anchoring-operation",
    taskTitle: "Support The Forecastle Party During Anchoring",
    scenario: "The engine cadet is detailed to help the forecastle party during anchoring stations. The chief mate asks the cadet to list the anchor gear and to set out, in order, what happens when the anchor is let go and when it is later weighed.",
    instructions: [
      "Name the main items of ground tackle used in anchoring (anchor, cable, hawse pipe, windlass) and what each does.",
      "Set out, in order, the steps the forecastle party takes to let go the anchor on the officer's order.",
      "State how the cable is reported to the bridge and how the party checks the anchor is holding.",
      "Identify the anchoring day signal and how weighing anchor is reported, in clear English."
    ],
    deliverable: "A note in English naming the ground tackle, the let-go sequence, the cable and holding checks, and the anchoring signal.",
    assessmentCriteria: [
      "Ground tackle items are named correctly with their function.",
      "The let-go sequence is in a safe, logical order.",
      "Cable reporting and the holding check are correct.",
      "The anchoring signal and the weighing report are correct, in clear English."
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
    unit: "Mantenimiento de cubierta",
    topic: "Picado, rascado, limpieza, pintado y control de la corrosión",
    week: 7,
    taskId: "mn-pmr107-w07-deck-maintenance-corrosion",
    taskTitle: "Plan A Rust-Control And Painting Job",
    scenario: "On a maintenance day the engine cadet is given a rusted handrail and a set of external fittings to bring back to good order. Before starting, the cadet must plan the job from cleaning through to painting and list the safety gear.",
    instructions: [
      "Set out the correct order to treat the rusted area: chipping or scraping, cleaning, priming, and painting.",
      "State why the surface must be prepared before painting for the coating to protect the metal.",
      "Identify the protective equipment and one safety precaution for the job.",
      "Explain how routine upkeep controls corrosion and protects the vessel, in clear English."
    ],
    deliverable: "A maintenance plan in English with the preparation-to-painting order, the reason for surface preparation, the protective equipment, and the corrosion-control benefit.",
    assessmentCriteria: [
      "The maintenance order is correct.",
      "The importance of surface preparation is correctly explained.",
      "The protective equipment and safety precaution are appropriate.",
      "The corrosion-control benefit is clearly explained, in clear English."
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
    unit: "Maniobra de atraque y desatraque",
    topic: "Sisga, envío de cabos a tierra, remolcadores, defensas y trabajo en equipo",
    week: 8,
    taskId: "mn-pmr107-w08-berthing-operation",
    taskTitle: "Work The After Station During Berthing",
    scenario: "During arrival in port the engine cadet is sent to the after mooring station to help the team. With a tug assisting, the officer asks the cadet to describe what the station does from receiving the heaving line to making the stern lines fast.",
    instructions: [
      "Describe how the heaving line is used to pass the mooring lines between ship and shore.",
      "State the order in which the stern lines are typically sent and made fast during berthing.",
      "Explain the role of fenders and the tug in bringing the vessel safely alongside.",
      "Identify two safety points for the mooring team (for example snap-back zones and clear communication) and report them in clear English."
    ],
    deliverable: "A berthing note in English describing the heaving-line-to-made-fast sequence at the after station, the role of fenders and the tug, and two mooring-team safety points.",
    assessmentCriteria: [
      "The heaving line and line-passing procedure is described correctly.",
      "The order of sending and making fast the stern lines is logical and safe.",
      "The role of fenders and the tug is accurately explained.",
      "The two safety points are valid and clearly reported in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
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
    subjectCode: "TMO101",
    subjectName: "Transporte Marítimo",
    subjectId: "mn-s1-transporte-maritimo",
    unit: "Sistema de propulsión",
    topic: "Motor principal, línea de ejes, chumaceras y hélice",
    week: 5,
    taskId: "mn-tmo101-w05-propulsion-system-chain",
    taskTitle: "Trace The Propulsion Chain From Engine To Propeller",
    scenario: "The chief engineer asks the cadet to explain how power flows from the main engine to the propeller, naming each part of the propulsion system that transmits the drive.",
    instructions: [
      "Name the main parts of the propulsion chain in order: main engine, thrust block, intermediate and tail shafts, stern tube bearing, and propeller.",
      "Explain how the drive is transmitted from the main engine along the shafting to the propeller.",
      "Explain how the propeller converts shaft rotation into the thrust that moves the ship.",
      "State the job of the thrust block and the shaft bearings, in clear engine-room English."
    ],
    deliverable: "An explanation in English tracing the propulsion chain from the main engine to the propeller, naming each part and its role in transmitting the drive and producing thrust.",
    assessmentCriteria: [
      "The parts of the propulsion chain are named correctly and in order.",
      "The transmission of drive from engine to propeller is explained correctly.",
      "The conversion of shaft rotation into thrust is explained correctly.",
      "The role of the thrust block and bearings is correct, in clear engine-room English."
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
    unit: "Sistemas auxiliares del motor",
    topic: "Combustible, aceite lubricante, refrigeración y aire de arranque",
    week: 6,
    taskId: "mn-tmo101-w06-engine-auxiliary-systems",
    taskTitle: "Explain The Main Engine's Auxiliary Systems",
    scenario: "The main engine cannot run without its auxiliary systems. The engineer asks the cadet to explain the purpose of the fuel oil, lubricating oil, cooling water and starting air systems.",
    instructions: [
      "State the purpose of the fuel oil system in supplying the main engine.",
      "State the purpose of the lubricating oil system and why it protects the engine.",
      "State the purpose of the cooling water system in controlling engine temperature.",
      "Explain how the starting air system starts the main engine, in clear engine-room English."
    ],
    deliverable: "An explanation in English of the four auxiliary systems of the main engine — fuel oil, lubricating oil, cooling water and starting air — and the purpose of each.",
    assessmentCriteria: [
      "The purpose of the fuel oil system is correct.",
      "The purpose of the lubricating oil system and its protective role are correct.",
      "The purpose of the cooling water system is correct.",
      "The starting air system's role in starting the engine is explained correctly, in clear engine-room English."
    ],
    xp: 25,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Marítimo",
    subjectId: "mn-s1-transporte-maritimo",
    unit: "Planta eléctrica del buque",
    topic: "Generación, cuadro principal, servicios esenciales y emergencia",
    week: 7,
    taskId: "mn-tmo101-w07-ship-electrical-plant",
    taskTitle: "Describe The Ship's Electrical Power Plant",
    scenario: "The engineer asks the cadet to describe, at plant level, how the ship generates and distributes electrical power to run the auxiliaries and services, from the diesel generators to the main switchboard and the essential services.",
    instructions: [
      "Name the main sources of electrical power on board (the diesel generators) and the role of the prime mover.",
      "Explain the job of the main switchboard in distributing power to the ship's services.",
      "State which services are considered essential and why they must keep their supply.",
      "Explain the purpose of the emergency generator and when it starts, in clear engine-room English."
    ],
    deliverable: "A plant-level description in English of the ship's electrical power system: the generators, the main switchboard, the essential services, and the emergency generator.",
    assessmentCriteria: [
      "The generators and the role of the prime mover are correctly described.",
      "The distributing role of the main switchboard is correct.",
      "The idea of essential services and why they are protected is correct.",
      "The purpose and start condition of the emergency generator are correct, in clear engine-room English."
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
    unit: "Convenios internacionales y prevención de la contaminación",
    topic: "MARPOL Anexos I y VI, OMI y clasificación en máquinas",
    week: 8,
    taskId: "mn-tmo101-w08-marpol-machinery-compliance",
    taskTitle: "Apply MARPOL To Engine-Room Pollution Prevention",
    scenario: "The chief engineer asks the cadet to connect the international conventions to concrete pollution-prevention duties in the engine room, covering oily bilge water and exhaust gas emissions.",
    instructions: [
      "State the role of the IMO and of a classification society in relation to the machinery spaces.",
      "Explain what MARPOL Annex I requires for oily bilge water and the job of the oily water separator.",
      "Explain what MARPOL Annex VI covers for exhaust gas emissions from the engine.",
      "Give one concrete engine-room action that keeps the ship compliant, in clear engine-room English."
    ],
    deliverable: "A compliance note in English linking the IMO and classification society to the machinery spaces, MARPOL Annex I (oily bilge water and the oily water separator), MARPOL Annex VI (exhaust emissions), and one concrete compliant action.",
    assessmentCriteria: [
      "The roles of the IMO and the classification society for machinery are correct.",
      "The Annex I requirement and the oily water separator's job are explained correctly.",
      "The Annex VI coverage of exhaust emissions is correct.",
      "The concrete compliant action is valid and in clear engine-room English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
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
    subjectCode: "C0011",
    subjectName: "Educación Física I",
    subjectId: "mn-s1-educacion-fisica-i",
    unit: "Manejo manual de cargas",
    topic: "Ergonomía y técnica segura de levantamiento en máquinas",
    week: 5,
    taskId: "mn-c0011-w05-manual-handling-lifting",
    taskTitle: "Apply Safe Manual Handling In The Engine Room",
    scenario: "A delivery of spare parts and tools must be moved into the engine room, down ladders and through narrow spaces, on floor plates that can be oily. The engineer asks the cadet to apply safe manual handling so no one is injured.",
    instructions: [
      "Assess the load and the route before lifting (weight, size, ladders, narrow spaces, and whether help or a lifting aid is needed).",
      "Describe the correct lifting technique step by step (feet firm, back straight, lift with the legs, load close to the body, no twisting).",
      "State the extra hazards of moving loads in the engine room (oily floor plates, ladders, confined spaces) and how to control them.",
      "Explain how this technique prevents back and joint injury, in correct English."
    ],
    deliverable: "A safe manual-handling note in English covering the pre-lift assessment, the correct lifting technique, the engine-room hazards and their control, and the injury-prevention reason.",
    assessmentCriteria: [
      "The pre-lift assessment covers weight, route, ladders or narrow spaces, and the need for help or aids.",
      "The lifting technique is described correctly and in order.",
      "The engine-room hazards (oily plates, ladders, confined spaces) and their control are correct.",
      "The injury-prevention reasoning is sound and in correct English."
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
    unit: "Acondicionamiento físico",
    topic: "Rutina con peso corporal y equipo mínimo a bordo",
    week: 6,
    taskId: "mn-c0011-w06-onboard-conditioning-routine",
    taskTitle: "Design A Safe Onboard Conditioning Routine",
    scenario: "During a long voyage the engine cadet has little space and almost no equipment but must stay fit for the physical work in the engine room. The engineer asks the cadet to design a simple, balanced conditioning routine.",
    instructions: [
      "Design a balanced routine using bodyweight exercises for strength, mobility and cardiorespiratory fitness.",
      "Include a warm-up and a cool-down, and say why each matters for injury prevention.",
      "Set a sensible, sustainable frequency that fits around engine watches and rest, with no extreme targets.",
      "Explain how the routine supports the physical demands of engine-room work, in correct English."
    ],
    deliverable: "A balanced onboard conditioning routine in English with a warm-up, main exercises, a cool-down, and a sustainable frequency for functional fitness.",
    assessmentCriteria: [
      "The routine is balanced across strength, mobility and cardiorespiratory fitness.",
      "A warm-up and cool-down are included with the injury-prevention reason.",
      "The frequency is sustainable and realistic around the watch routine, with no extreme targets.",
      "The routine is clearly linked to the demands of engine-room work, in correct English."
    ],
    xp: 25,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0011",
    subjectName: "Educación Física I",
    subjectId: "mn-s1-educacion-fisica-i",
    unit: "Fatiga y descanso",
    topic: "Fisiología de la fatiga en máquinas: calor, ruido y vibración",
    week: 7,
    taskId: "mn-c0011-w07-fatigue-rest-management",
    taskTitle: "Manage Fatigue From Heat, Noise And Vibration",
    scenario: "After several days of engine-room watches the cadet feels the fatigue of working in heat, noise and vibration. The engineer asks the cadet to explain how to manage fatigue and protect rest under the work and rest hour rules.",
    instructions: [
      "Describe the signs of fatigue and how it affects alertness and safety on an engine watch.",
      "Explain how the engine-room environment (heat, noise and vibration) adds to fatigue.",
      "State the basic work and rest hour requirement and give three sleep-hygiene actions that improve rest quality on board.",
      "Explain what to do if too fatigued to stand a safe watch, in correct English."
    ],
    deliverable: "A fatigue-management note in English covering the signs of fatigue, how heat, noise and vibration add to it, the rest-hour requirement, three sleep-hygiene actions, and what to do when too fatigued for a safe watch.",
    assessmentCriteria: [
      "The signs of fatigue and their effect on watch safety are correct.",
      "The effect of heat, noise and vibration on fatigue is correctly explained.",
      "The rest-hour requirement and three sleep-hygiene actions are correct and practical.",
      "The action for being too fatigued to stand a safe watch is correct and in clear English."
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
    unit: "Aptitud física para emergencias",
    topic: "Demandas físicas de la respuesta desde el espacio de máquinas",
    week: 8,
    taskId: "mn-c0011-w08-emergency-physical-readiness",
    taskTitle: "Prepare Physically For Engine-Room Emergencies",
    scenario: "The vessel schedules an engine-room fire and abandon-ship drill. The engineer asks the cadet to explain the physical demands of escaping the machinery space and taking part in the response, and how to meet them safely.",
    instructions: [
      "List the physical demands of four emergency tasks: escaping the machinery space by the vertical escape ladders, engine-room firefighting effort, donning an immersion suit, and boarding the survival craft.",
      "State which physical capacities each task draws on (strength, balance, endurance, coordination).",
      "Explain how the term's training (fitness, balance, manual handling) prepares the cadet for these demands.",
      "Give one safety point to avoid injury while performing under emergency stress, in correct English."
    ],
    deliverable: "A readiness note in English mapping four emergency tasks to their physical demands and capacities, how the training prepares for them, and one injury-avoidance safety point.",
    assessmentCriteria: [
      "The physical demands of the four emergency tasks are correctly identified.",
      "Each task is matched to the physical capacities it draws on.",
      "The link between the term's training and emergency readiness is sound.",
      "The injury-avoidance safety point is valid and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
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
    subjectCode: "C0099",
    subjectName: "Estrategias de Aprendizaje",
    subjectId: "mn-s1-estrategias-aprendizaje",
    unit: "Toma de apuntes",
    topic: "Método Cornell para la captura de información",
    week: 5,
    taskId: "mn-c0099-w05-cornell-note-taking",
    taskTitle: "Take Cornell Notes During A Technical Briefing",
    scenario: "The engineer runs a fast familiarization briefing on the fuel oil system before the cadet works on it, covering the valves, the operating sequence and the hazards. The cadet must capture it live with the Cornell note-taking method so nothing is missed.",
    instructions: [
      "Set up a Cornell page with a notes column, a cue or questions column, and a summary area at the bottom.",
      "Capture the key points of the technical briefing in the notes column as it is delivered.",
      "Write cue questions in the left column to test recall of the system later.",
      "Write a short summary of the briefing at the bottom, in correct English."
    ],
    deliverable: "A Cornell-format note of the engine-room technical briefing in English, with the notes column, the cue questions, and a bottom summary.",
    assessmentCriteria: [
      "The page is set up correctly in the three Cornell areas.",
      "The notes capture the essential briefing points without filler.",
      "The cue questions would test recall of the key points.",
      "The summary is accurate and in correct English."
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
    unit: "Técnicas de memorización",
    topic: "Mnemotecnia y repaso espaciado",
    week: 6,
    taskId: "mn-c0099-w06-mnemonics-spaced-repetition",
    taskTitle: "Build A Mnemonic And A Spaced-Repetition Plan",
    scenario: "The cadet must memorize standardized engine-room content, such as the pipe colour code, the main engine starting sequence, or the names of the main engine parts. The engineer asks the cadet to build a memory aid and a spaced-repetition plan to make it stick.",
    instructions: [
      "Choose one standardized engine-room set to memorize (for example the pipe colour code, the main engine starting sequence, engine part names, or the phonetic alphabet for equipment codes).",
      "Create a mnemonic or memory aid that links the items to something easy to recall.",
      "Design a spaced-repetition schedule (for example review after 1 day, 3 days, 1 week) and say why spacing beats cramming.",
      "Explain how you would test yourself to confirm retention, in correct English."
    ],
    deliverable: "A memory plan in English with the chosen engine-room content set, a mnemonic, a spaced-repetition schedule, and a self-test method.",
    assessmentCriteria: [
      "The chosen content set is a real standardized engine-room body of knowledge.",
      "The mnemonic genuinely aids recall of the items.",
      "The spaced-repetition schedule is sound and its advantage over cramming is explained.",
      "The self-test method would confirm retention, in correct English."
    ],
    xp: 25,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0099",
    subjectName: "Estrategias de Aprendizaje",
    subjectId: "mn-s1-estrategias-aprendizaje",
    unit: "Gestión del tiempo",
    topic: "Priorización y plan de estudio a bordo",
    week: 7,
    taskId: "mn-c0099-w07-time-management-study-plan",
    taskTitle: "Plan Study Around The Engine-Room Routine",
    scenario: "The engine cadet stands watches, has planned maintenance jobs to attend, and must take the required rest under the work and rest hour rules. The engineer asks the cadet to build a realistic weekly study plan that fits studying around the engine-room routine.",
    instructions: [
      "Map the fixed blocks of a typical day: engine watches, planned maintenance, meals and required rest.",
      "Identify the realistic time windows that are left for study.",
      "Prioritize the study tasks (urgent and important) and assign them to the available windows.",
      "Explain how the plan respects the rest requirements and stays realistic, in correct English."
    ],
    deliverable: "A weekly study plan in English mapping the engine watches, maintenance, rest and study windows, with prioritized study tasks assigned to realistic slots.",
    assessmentCriteria: [
      "The daily fixed blocks (watch, maintenance, rest) are mapped correctly.",
      "The study windows identified are realistic given the routine.",
      "Study tasks are prioritized sensibly and assigned to the windows.",
      "The plan respects the rest requirements and is realistic, in correct English."
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
    unit: "Metacognición",
    topic: "Autoevaluación y bitácora de aprendizaje",
    week: 8,
    taskId: "mn-c0099-w08-metacognition-learning-log",
    taskTitle: "Reflect On Your Learning With A Learning Log",
    scenario: "As the engine-room training term closes, the engineer asks the cadet to look back at which study strategies worked best for the technical subjects, measure progress against the training objectives, and start a learning log that sets the next steps.",
    instructions: [
      "Assess your progress against two or three training objectives, with honest evidence from the technical work.",
      "Identify which learning strategies (notes, mnemonics, planning) worked best for the machinery subjects and which did not.",
      "Record the reflection in a learning-log entry with a date and concrete next actions.",
      "Explain how honest self-assessment supports continuous professional development for an engineer at sea, in correct English."
    ],
    deliverable: "A learning-log entry in English assessing progress against the objectives, evaluating which strategies worked for the technical subjects, with a date and concrete next actions.",
    assessmentCriteria: [
      "Progress is assessed against clear objectives with honest evidence.",
      "The evaluation of which strategies worked is specific and self-aware.",
      "The log entry is dated and gives concrete next actions.",
      "The link to continuous professional development is sound, in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
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
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0100",
    subjectName: "Expresión Oral y Escrita",
    subjectId: "mn-s1-expresion-oral-escrita",
    unit: "Comunicación Oral",
    topic: "Marcadores de mensaje SMCP como técnica de comunicación",
    week: 5,
    taskId: "mn-c0100-w05-smcp-message-markers",
    taskTitle: "Structure Engine-Department Messages With Message Markers",
    scenario: "In the engine control room several messages must go out at once during a busy operation. To stop them being misread, the second engineer asks the cadet to structure the department's messages with SMCP message markers so each one signals clearly whether it is an instruction, a warning or information.",
    instructions: [
      "Explain what SMCP message markers do and name the markers relevant to engine-department messages (Instruction, Warning, Information, Intention).",
      "Take three engine-department messages and structure each one with the correct marker.",
      "Explain why marking a message removes ambiguity for the receiver.",
      "State how the technique improves safety during a busy operation, in clear English."
    ],
    deliverable: "A note in English giving three engine-department messages structured with the correct SMCP message markers, with an explanation of how the markers remove ambiguity.",
    assessmentCriteria: [
      "The purpose of the markers and the relevant markers are named correctly.",
      "Each message is matched to the correct marker.",
      "The ambiguity-removal reason is sound.",
      "The safety benefit of the technique is clear, in correct English."
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
    unit: "Comunicación Escrita",
    topic: "Registro factual y cronológico en el cuaderno de máquinas",
    week: 6,
    taskId: "mn-c0100-w06-engine-logbook-entry",
    taskTitle: "Write A Factual Engine-Room Logbook Entry",
    scenario: "At the end of the engine-room watch the second engineer asks the cadet to write up the engine-room logbook: a generator was started, a purifier was changed over, and an alarm came in and was cleared. The entries must be factual, chronological and concise.",
    instructions: [
      "Record the watch events in chronological order, each with its time.",
      "State each fact plainly, without opinion or unnecessary detail.",
      "Use precise, standard terms for the machinery, the readings and the alarms.",
      "Write the entry so another engineer could reconstruct the watch, in correct English."
    ],
    deliverable: "An engine-room logbook entry in English recording the watch events in chronological order, factually and concisely.",
    assessmentCriteria: [
      "Events are in the correct chronological order, each with its time.",
      "Each entry is factual and free of opinion or filler.",
      "Terminology for the machinery, readings and alarms is precise.",
      "The entry is clear enough to reconstruct the watch, in correct English."
    ],
    xp: 25,
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
    topic: "Escucha activa y confirmación de órdenes (lazo cerrado)",
    week: 7,
    taskId: "mn-c0100-w07-closed-loop-order-readback",
    taskTitle: "Confirm Engine-Room Orders With Read-Back",
    scenario: "In the engine room, orders from the duty engineer must be confirmed before they are carried out. The engineer gives the cadet three orders — to isolate a valve, to start a standby pump, and to acknowledge a telegraph order — and asks the cadet to apply closed-loop communication by reading each one back.",
    instructions: [
      "Explain what closed-loop (read-back) communication is and why it prevents errors in the engine room.",
      "For the three orders (isolate a valve, start a standby pump, acknowledge a telegraph order), give the correct read-back.",
      "State what the order-giver does after hearing the read-back to close the loop.",
      "Describe one engine-room situation where a missing read-back could cause an accident, in correct English."
    ],
    deliverable: "A note in English giving the read-back for three engine-room orders, an explanation of closed-loop communication, and one accident case from a missing read-back.",
    assessmentCriteria: [
      "Closed-loop communication is explained correctly.",
      "Each order is read back correctly and completely.",
      "The role of the order-giver in closing the loop is correct.",
      "The accident example is relevant and written in correct English."
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
    unit: "Comunicación integrada",
    topic: "Comunicación en emergencia de máquinas: informe oral y registro escrito",
    week: 8,
    taskId: "mn-c0100-w08-emergency-report-and-log",
    taskTitle: "Report An Engine-Room Emergency Verbally And In Writing",
    scenario: "An oil leak sprays onto a hot surface in the machinery space and begins to smoke. The cadet must first give a clear spoken report to the bridge and the duty engineer, then write the incident entry for the record. Both the spoken report and the written entry are assessed.",
    instructions: [
      "Give a clear spoken emergency report stating what has happened, where in the machinery space, and what help is needed, using standardized phrasing.",
      "Confirm the message was received, using read-back or acknowledgement.",
      "Write the incident entry: time, location, what happened and action taken, factually and in order.",
      "Ensure the spoken report and the written record agree, in correct English."
    ],
    deliverable: "A two-part deliverable in English: a clear spoken emergency report (what, where in the machinery space, help needed), and a factual chronological incident entry that matches it.",
    assessmentCriteria: [
      "The spoken report states what, where and the help needed, clearly and in standardized phrasing.",
      "Receipt of the message is confirmed by read-back or acknowledgement.",
      "The written entry is factual, timed and in chronological order.",
      "The spoken report and the written record agree, in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "ALG103",
    subjectName: "Algebra",
    subjectId: "pn-s1-algebra",
    unit: "Algebra Elemental",
    topic: "Expresiones algebraicas",
    week: 1,
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
    week: 2,
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
    week: 3,
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
    subjectCode: "ALG103",
    subjectName: "Algebra",
    subjectId: "pn-s1-algebra",
    unit: "Algebra Vectorial",
    topic: "Vectores y resolucion de problemas con fuerza, velocidad y aceleracion",
    week: 4,
    taskId: "pn-alg103-w04-mooring-load-vector",
    taskTitle: "Balance Two Mooring Line Loads",
    scenario: "During a mooring operation, two mooring lines pull on the same bollard at different angles. The officer asks the cadet to combine the two line loads as vectors and report the resultant load on the bollard.",
    instructions: [
      "List the load (tension) and direction of each of the two mooring lines.",
      "Resolve each mooring line load into its components (along and across the quay).",
      "Add the components to find the resultant load on the bollard, as magnitude and direction.",
      "State the result with the correct unit for the mooring log, in clear deck English."
    ],
    deliverable: "A vector calculation in English giving the resultant load on the bollard, with each mooring line load resolved into components and the working shown.",
    assessmentCriteria: [
      "Both mooring line loads are represented with correct magnitude and direction.",
      "Each load is resolved into components correctly.",
      "The resultant load is calculated accurately as magnitude and direction.",
      "The result is clearly stated with the correct unit in English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "ALG103",
    subjectName: "Algebra",
    subjectId: "pn-s1-algebra",
    unit: "Proporcion y porcentaje",
    topic: "Proporcion, porcentaje y regla de tres",
    week: 5,
    taskId: "pn-alg103-w05-cargo-proportion-percent",
    taskTitle: "Split Cargo By Ratio And Report Deadweight Percentage",
    scenario: "A vessel with a deadweight of 8000 tonnes loads 6000 tonnes of cargo, to be split between two holds in the ratio 2:1 (hold 1 to hold 2). The chief officer asks the cadet to report the percentage of deadweight used and the tonnage in each hold.",
    instructions: [
      "Express the 6000 tonnes of cargo as a percentage of the 8000-tonne deadweight.",
      "Divide the 6000 tonnes between the two holds in the ratio 2:1.",
      "State the tonnage in each hold and confirm the two add back to 6000 tonnes.",
      "Report the percentage and the hold split in clear deck English."
    ],
    deliverable: "A cargo distribution note in English giving the deadweight percentage used and the tonnage in each hold, with the working shown.",
    assessmentCriteria: [
      "The deadweight percentage is correct (6000 / 8000 x 100 = 75%).",
      "The ratio split is set up correctly over 3 parts (each part = 2000 tonnes).",
      "Hold 1 = 4000 tonnes and Hold 2 = 2000 tonnes, and they sum back to 6000 tonnes.",
      "The results are reported clearly in correct deck English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "ALG103",
    subjectName: "Algebra",
    subjectId: "pn-s1-algebra",
    unit: "Transposicion de formulas",
    topic: "Despeje de formulas y evaluacion",
    week: 6,
    taskId: "pn-alg103-w06-formula-transposition-moment",
    taskTitle: "Rearrange The Moment Formula To Find A Distance",
    scenario: "A cargo item produces a moment of 240 tonne-metres about the midship point and weighs 40 tonnes. The officer asks the cadet to rearrange the moment formula to find how far the item is from midship, then repeat for a 30-tonne item producing the same moment.",
    instructions: [
      "Start from the moment formula M = P x d and rearrange it to make the distance d the subject.",
      "Using M = 240 tonne-metres and P = 40 tonnes, calculate the distance d of the item from midship.",
      "A second item of 30 tonnes must produce the same 240 tonne-metre moment; use the rearranged formula to find its distance.",
      "Report both distances with units, in clear deck English."
    ],
    deliverable: "A transposition note in English showing the rearranged formula d = M / P and the two distances, with the working shown.",
    assessmentCriteria: [
      "The formula is correctly rearranged to d = M / P.",
      "The first distance is correct (240 / 40 = 6 m).",
      "The second distance is correct (240 / 30 = 8 m).",
      "The results carry the correct unit (metres) and are reported in clear deck English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "ALG103",
    subjectName: "Algebra",
    subjectId: "pn-s1-algebra",
    unit: "Momentos y centro de gravedad",
    topic: "Momento, suma de momentos y media ponderada",
    week: 7,
    taskId: "pn-alg103-w07-centre-of-gravity-moments",
    taskTitle: "Find The Combined Centre Of Gravity Of Three Cargo Parcels",
    scenario: "Three cargo parcels are stowed at different distances from a common reference point: 20 tonnes at 3 metres, 30 tonnes at 8 metres, and 50 tonnes at 12 metres. The chief officer asks the cadet to find the combined centre of gravity of the cargo.",
    instructions: [
      "For each parcel, calculate its moment about the reference point using moment = weight x distance.",
      "Add the three moments to get the total moment (sum of moments).",
      "Add the three weights to get the total weight (sum of weights).",
      "Find the centre of gravity using G = (sum of moments) / (sum of weights) — divide by the TOTAL WEIGHT, not by the number of parcels — and report it in metres from the reference, in clear deck English."
    ],
    deliverable: "A centre-of-gravity note in English showing the three moments, the sum of moments, the sum of weights, and the resulting G, with the working shown.",
    assessmentCriteria: [
      "Each moment is correct (20 x 3 = 60, 30 x 8 = 240, 50 x 12 = 600 tonne-metres).",
      "The sum of moments is correct (60 + 240 + 600 = 900 tonne-metres).",
      "The sum of weights is correct (20 + 30 + 50 = 100 tonnes).",
      "The centre of gravity is correct (900 / 100 = 9 m from the reference, dividing by TOTAL WEIGHT not by the number of parcels), reported in clear deck English."
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
    unit: "Desigualdades",
    topic: "Desigualdades y limites operativos de seguridad",
    week: 8,
    taskId: "pn-alg103-w08-loading-limits-inequalities",
    taskTitle: "Test A Loading Plan Against Safety Limits",
    scenario: "The cadet must check a loading plan against two safety limits. The deck can bear up to 5 tonnes per square metre. The deadweight limit is 8000 tonnes and 6000 tonnes are already loaded. A cargo unit of 18 tonnes on a 4 square-metre footprint is offered, and separately a new 2500-tonne parcel is offered. The officer asks for a go/no-go decision on each.",
    instructions: [
      "Write the deck load as an inequality: load pressure (weight / footprint area) must be less than or equal to the 5 t/m2 deck limit.",
      "For the 18-tonne unit on a 4 m2 footprint, calculate the load pressure and decide whether it satisfies the inequality (go or no-go).",
      "Write the deadweight limit as an inequality (already loaded + new parcel less than or equal to 8000 tonnes) and test the 2500-tonne parcel on top of the 6000 tonnes already loaded.",
      "State the maximum additional cargo that could still be accepted within the 8000-tonne limit, with the go/no-go decisions, in clear deck English."
    ],
    deliverable: "A loading-limits note in English giving both inequalities, the deck-load and deadweight tests, the maximum additional cargo, and the go/no-go decisions, with the working shown.",
    assessmentCriteria: [
      "The deck load pressure is correct (18 / 4 = 4.5 t/m2) and satisfies 4.5 <= 5, so it is a GO.",
      "The deadweight inequality is set up correctly (6000 + 2500 <= 8000).",
      "The deadweight test is correct: 8500 > 8000, so the 2500-tonne parcel is a NO-GO.",
      "The maximum additional cargo is correct (8000 - 6000 = 2000 tonnes), reported with the go/no-go decisions in clear deck English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
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
    subjectCode: "FIS104",
    subjectName: "Física",
    subjectId: "pn-s1-fisica",
    unit: "Mecánica",
    topic: "Cinemática: velocidad, distancia y tiempo",
    week: 5,
    taskId: "pn-fis104-w05-speed-distance-eta",
    taskTitle: "Calculate Steaming Time, ETA And A Closing Situation",
    scenario: "The vessel departs at 0600 with 96 nautical miles to run to the pilot station, making good 12 knots over the ground. On the same passage the officer tracks another vessel 40 nautical miles ahead on a reciprocal (head-on) course making 8 knots. The cadet must work out the ETA and the closing situation.",
    instructions: [
      "Use v = d / t to find the steaming time to the pilot station at 12 knots over 96 nautical miles.",
      "Add the steaming time to the 0600 departure to state the ETA at the pilot station.",
      "Find the closing speed of the two vessels (own 12 knots, other 8 knots, head-on) and the time until they meet, 40 nautical miles apart.",
      "Report the ETA and the closing time with correct units, in clear deck English."
    ],
    deliverable: "A short kinematics note in English giving the steaming time and ETA to the pilot station, and the closing speed and time-to-meet of the two vessels, with the working shown.",
    assessmentCriteria: [
      "The steaming time is calculated correctly from v = d / t (96 / 12 = 8 hours).",
      "The ETA is stated correctly from the 0600 departure (1400).",
      "The closing speed (20 knots) and time-to-meet (2 hours) are calculated correctly for a head-on situation.",
      "Units (knots, nautical miles, hours) are consistent and the note is in clear deck English."
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
    topic: "Trabajo, energía y potencia",
    week: 6,
    taskId: "pn-fis104-w06-crane-work-power",
    taskTitle: "Calculate The Work And Power Of A Deck Crane Lift",
    scenario: "A deck crane lifts a cargo sling of mass 500 kg vertically through a height of 12 metres, and the lift takes 20 seconds. The chief officer asks the cadet to work out the work done and the power developed by the crane. Take g = 9.81 m/s2.",
    instructions: [
      "Calculate the weight (force) of the load using F = m x g.",
      "Calculate the work done to lift the load using W = F x d.",
      "Calculate the power developed by the crane using P = W / t.",
      "State each result with the correct SI unit and confirm the values are reasonable for a deck lift, in clear deck English."
    ],
    deliverable: "A work-energy note in English giving the load's weight, the work done, and the power developed by the crane, with the working and SI units shown.",
    assessmentCriteria: [
      "The weight is calculated correctly from F = m x g (500 x 9.81 = 4905 N).",
      "The work done is calculated correctly from W = F x d (4905 x 12 = 58860 J).",
      "The power is calculated correctly from P = W / t (58860 / 20 = 2943 W).",
      "Results carry the correct SI units (N, J, W) and the note is in clear deck English."
    ],
    xp: 25,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "FIS104",
    subjectName: "Física",
    subjectId: "pn-s1-fisica",
    unit: "Hidrostática",
    topic: "Presión hidrostática y densidad del agua",
    week: 7,
    taskId: "pn-fis104-w07-hydrostatic-pressure-density",
    taskTitle: "Find Hull Pressure And The Fresh-Water Draught Change",
    scenario: "At a draught giving 8 metres of water above the keel, the officer sets the cadet two problems. First, calculate the hydrostatic pressure on the hull at that depth in seawater (density 1025 kg/m3, g = 9.81 m/s2). Second, the vessel will shift from the sea into a fresh-water river berth (density 1000 kg/m3); the cadet must state whether the draught will increase or decrease, and why.",
    instructions: [
      "Calculate the hydrostatic pressure on the hull at 8 metres depth in seawater using P = rho x g x h.",
      "State the result in kilopascals with the correct SI units.",
      "Using V = m / rho at constant displacement, explain whether the underwater volume (and therefore the draught) increases or decreases when the vessel moves into less-dense fresh water.",
      "State the correct direction of the draught change (deeper or shallower in fresh water) and report it in clear deck English."
    ],
    deliverable: "A hydrostatics note in English giving the hull pressure at 8 metres in seawater, and a reasoned statement of whether the draught increases or decreases in fresh water, with the working shown.",
    assessmentCriteria: [
      "The hydrostatic pressure is calculated correctly from P = rho x g x h (1025 x 9.81 x 8 = 80442 Pa).",
      "The result is expressed sensibly in kilopascals (about 80.4 kPa).",
      "The density reasoning (V = m / rho, so lower density means greater displaced volume) is applied correctly.",
      "The draught change direction is correct — the vessel floats DEEPER in fresh water — and reported in clear deck English."
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
    unit: "Movimiento oscilatorio",
    topic: "Oscilaciones del buque: balance, cabeceo y resonancia",
    week: 8,
    taskId: "pn-fis104-w08-ship-motion-oscillation",
    taskTitle: "Explain Rolling, Pitching And Synchronous Rolling",
    scenario: "In a beam sea the vessel begins to roll heavily and the master warns the bridge team about synchronous rolling. The officer asks the cadet to explain the physics of the ship's motion at a level suitable for a first-year cadet, without advanced formulas.",
    instructions: [
      "Describe rolling and pitching as oscillations (repeated back-and-forth motion) about the ship's axes.",
      "Explain what the roll period is (the time for one complete roll) and the difference between a stiff ship (short period) and a tender ship (long period).",
      "Explain synchronous rolling: when the interval between waves matches the ship's natural roll period, each wave adds energy and the roll grows dangerously (resonance).",
      "State one action the officer can take to break the resonance (alter course or speed to change the interval between wave encounters), in clear deck English."
    ],
    deliverable: "A conceptual explanation in English of rolling and pitching as oscillations, the meaning of the roll period, what synchronous rolling (resonance) is, and one action to avoid it.",
    assessmentCriteria: [
      "Rolling and pitching are correctly described as oscillatory motions.",
      "The roll period and the stiff versus tender distinction are explained correctly.",
      "Synchronous rolling is correctly explained as resonance between the wave encounter and the roll period.",
      "The avoiding action (change course or speed) is correct and reported in clear deck English."
    ],
    xp: 25,
    estimatedTime: "30 min",
    difficulty: "Advanced"
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
    subjectCode: "ELE106",
    subjectName: "Electricidad",
    subjectId: "pn-s1-electricidad",
    unit: "Potencia y energía eléctrica",
    topic: "Potencia, energía y consumo eléctrico",
    week: 5,
    taskId: "pn-ele106-w05-floodlight-power-energy",
    taskTitle: "Calculate The Power And Energy Of A Deck Floodlight",
    scenario: "A deck floodlight runs on the 24 V DC deck lighting circuit and draws 5 A. During night cargo work it is left on for 8 hours. The officer asks the cadet to work out the power it draws and the energy it consumes.",
    instructions: [
      "Calculate the electrical power drawn by the floodlight using P = V x I.",
      "Cross-check the power using P = I squared x R, first finding R from R = V / I.",
      "Calculate the energy consumed over 8 hours using E = P x t and express it in kWh.",
      "State each result with the correct unit, in clear deck English."
    ],
    deliverable: "A power-energy note in English giving the floodlight's power draw, the cross-check, and the energy consumed over 8 hours in kWh, with the working shown.",
    assessmentCriteria: [
      "The power is calculated correctly from P = V x I (24 x 5 = 120 W).",
      "The cross-check P = I squared x R gives the same 120 W (R = V / I = 4.8 ohm).",
      "The energy over 8 hours is correct (120 W x 8 h = 960 Wh = 0.96 kWh).",
      "Results carry the correct units (W, Wh/kWh) and the note is in clear deck English."
    ],
    xp: 25,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "ELE106",
    subjectName: "Electricidad",
    subjectId: "pn-s1-electricidad",
    unit: "Baterías y acumuladores",
    topic: "Celdas en serie y paralelo, capacidad y autonomía",
    week: 6,
    taskId: "pn-ele106-w06-emergency-battery-bank",
    taskTitle: "Size An Emergency Lighting Battery Bank",
    scenario: "The emergency lighting battery is built from cells of 2 V and 100 Ah each. Six cells are connected in series to make one battery, and two such batteries are then connected in parallel. The emergency lighting load draws 5 A. The officer asks the cadet to work out the bank voltage, capacity and autonomy.",
    instructions: [
      "Find the battery voltage when six 2 V cells are connected in series (voltages add in series).",
      "State the capacity of that battery in series (capacity does NOT add in series; it stays that of one cell).",
      "When two such 12 V / 100 Ah batteries are connected in parallel, find the total capacity (capacities add in parallel; voltage stays the same).",
      "Calculate the autonomy of the emergency lighting at a 5 A load using autonomy = capacity / load, and report it in clear deck English."
    ],
    deliverable: "A battery-bank note in English giving the series voltage, the series capacity, the parallel capacity, and the autonomy at a 5 A load, with the working shown.",
    assessmentCriteria: [
      "The series voltage is correct (6 x 2 V = 12 V).",
      "The series capacity is correctly stated as unchanged (100 Ah).",
      "The parallel capacity is correct (100 + 100 = 200 Ah at 12 V).",
      "The autonomy is correct (200 Ah / 5 A = 40 h) and reported in clear deck English."
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
    unit: "Seguridad y protección eléctrica",
    topic: "Fusibles, puesta a tierra y riesgo eléctrico",
    week: 7,
    taskId: "pn-ele106-w07-fuse-earthing-safety",
    taskTitle: "Select A Fuse And Apply Electrical Safety On Deck",
    scenario: "A deck socket circuit normally carries a working current of 8 A. The available fuses are rated 5 A, 10 A and 15 A. The officer asks the cadet to select the correct fuse and set out the electrical safety precautions for working on a wet deck.",
    instructions: [
      "State the working current of the circuit and explain why a fuse must be rated just above the working current.",
      "From the available fuses (5 A, 10 A, 15 A), select the correct one for an 8 A working current and say why the other two are wrong.",
      "Explain the purpose of earthing (grounding) deck equipment and one way it protects the crew.",
      "State one precaution for using electrical equipment on a wet deck, in clear deck English."
    ],
    deliverable: "An electrical safety note in English giving the selected fuse with its justification, the purpose of earthing, and one wet-deck precaution.",
    assessmentCriteria: [
      "The reason a fuse is rated just above the working current is explained correctly.",
      "The 10 A fuse is correctly selected for the 8 A circuit, with 5 A (would blow) and 15 A (too high) correctly ruled out.",
      "The purpose of earthing and how it protects the crew is explained correctly.",
      "The wet-deck precaution is valid and written in clear deck English."
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
    unit: "Magnetismo y electromagnetismo",
    topic: "Campo magnético y desvío del compás magnético",
    week: 8,
    taskId: "pn-ele106-w08-magnetism-compass-deviation",
    taskTitle: "Explain How Electrical Equipment Affects The Magnetic Compass",
    scenario: "The cadet notices that the magnetic compass reading shifts slightly when a nearby deck electrical circuit is switched on. The officer asks the cadet to explain the physics, at a level suitable for a first-year cadet, without formulas.",
    instructions: [
      "Explain what a magnetic field is and that an electric current produces a magnetic field around a conductor (electromagnetism).",
      "Explain how nearby magnetic material or DC electrical circuits can deflect the magnetic compass (deviation).",
      "State why the magnetic compass must be sited away from electrical equipment and what a deviation card is used for.",
      "State one practical action the deck team takes to protect the compass from electrical interference, in clear deck English."
    ],
    deliverable: "A conceptual explanation in English of magnetic fields and electromagnetism, how electrical equipment causes compass deviation, the purpose of a deviation card, and one action to protect the compass.",
    assessmentCriteria: [
      "The magnetic field and the current-produces-a-magnetic-field idea are explained correctly.",
      "Compass deviation from nearby magnetic material or DC circuits is explained correctly.",
      "The reason for siting the compass away from electrical equipment and the use of a deviation card are correct.",
      "The protective action is practical and written in clear deck English."
    ],
    xp: 25,
    estimatedTime: "30 min",
    difficulty: "Advanced"
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
    subjectCode: "ING102",
    subjectName: "Inglés Marítimo I",
    subjectId: "pn-s1-maritime-english-i",
    unit: "Comunicación radiotelefónica",
    topic: "Frases normalizadas OMI (SMCP) y marcadores de mensaje",
    week: 5,
    taskId: "pn-ing102-w05-smcp-vhf-message",
    taskTitle: "Build A Standard VHF Message Using SMCP",
    scenario: "You must call another vessel on VHF to state your intention in a crossing situation. Using the IMO Standard Marine Communication Phrases (SMCP), you build a clear standard message with the correct message marker so there is no misunderstanding.",
    instructions: [
      "Open the call correctly: name the vessel you are calling, then give your own vessel's name.",
      "Choose the correct SMCP message marker for your message (for example Intention, Warning, or Question).",
      "State the message in short, standard SMCP phrasing, avoiding everyday idioms.",
      "Close with the correct procedure word (Over) and be ready to read back the reply, in correct English."
    ],
    deliverable: "A written VHF message in English built with the correct call opening, an SMCP message marker, a standard-phrase message body, and the correct closing procedure word.",
    assessmentCriteria: [
      "The call opening correctly names the called vessel and the own vessel.",
      "The message marker chosen matches the intent of the message.",
      "The message body uses short standard SMCP phrasing, not everyday idiom.",
      "The closing procedure word is correct and the English is clear."
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
    unit: "Órdenes normalizadas",
    topic: "Standard wheel orders y engine orders",
    week: 6,
    taskId: "pn-ing102-w06-helm-engine-orders",
    taskTitle: "Give And Acknowledge Standard Helm And Engine Orders",
    scenario: "During a manoeuvre the officer of the watch gives helm and engine orders that must be passed and acknowledged in standard English. You must give each order correctly and show the read-back the helmsman uses.",
    instructions: [
      "Give three standard helm orders in correct English (for example 'Starboard ten', 'Midships', 'Steady as she goes').",
      "Give one standard engine order (for example 'Half ahead' or 'Stop engine').",
      "Write the correct read-back the helmsman gives for each order.",
      "Explain why standard orders and read-back prevent errors during a manoeuvre, in correct English."
    ],
    deliverable: "A note in English listing three helm orders and one engine order with the correct standard wording and the helmsman's read-back for each.",
    assessmentCriteria: [
      "The helm orders use correct standard wording.",
      "The engine order uses correct standard wording.",
      "Each read-back is correct and complete.",
      "The explanation of why standard orders prevent errors is sound and in correct English."
    ],
    xp: 25,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "ING102",
    subjectName: "Inglés Marítimo I",
    subjectId: "pn-s1-maritime-english-i",
    unit: "Presente simple y there is / there are",
    topic: "Descripción del buque, equipo y condiciones",
    week: 7,
    taskId: "pn-ing102-w07-describe-ship-equipment",
    taskTitle: "Describe The Ship And Conditions At Handover",
    scenario: "At the change of watch you must describe the state of the deck equipment and the weather to the next cadet. Using 'there is' and 'there are' with the present simple, you give a clear handover description.",
    instructions: [
      "Use 'there is' and 'there are' to state what equipment and conditions are present on deck.",
      "Use the present simple to describe what the equipment does or its current state.",
      "Describe the weather and sea state in one or two clear sentences.",
      "Keep the handover accurate and easy for the next watch to act on, in correct English."
    ],
    deliverable: "A handover description in English using 'there is / there are' and the present simple to describe the deck equipment, its state, and the weather and sea conditions.",
    assessmentCriteria: [
      "'There is' and 'there are' are used correctly for singular and plural.",
      "The present simple correctly describes equipment state or function.",
      "The weather and sea description is clear and relevant.",
      "The handover is accurate and in correct English."
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
    unit: "Pasado simple",
    topic: "Parte de guardia: narrar un suceso en pasado",
    week: 8,
    taskId: "pn-ing102-w08-watch-report-past",
    taskTitle: "Report A Watch Event In The Past Simple",
    scenario: "At the end of your watch you must report to the officer what happened during it: a course alteration, a vessel that passed, and a minor problem you dealt with. You report the events in the past simple, in order.",
    instructions: [
      "Report the watch events in chronological order using the past simple (regular and irregular verbs).",
      "State clearly what happened, when, and what action was taken.",
      "Use correct past forms of common maritime verbs (for example altered, passed, reported, checked, found).",
      "Keep the report factual and clear enough for the officer to log, in correct English."
    ],
    deliverable: "A watch report in English narrating the watch events in the past simple, in chronological order, with the actions taken.",
    assessmentCriteria: [
      "The past simple is used correctly for both regular and irregular verbs.",
      "The events are in the correct chronological order.",
      "What happened and the action taken are stated clearly.",
      "The report is factual and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "Inglés por Niveles",
    subjectName: "Sentence Builder",
    subjectId: "pn-s1-maritime-english-i",
    unit: "Construcción de oraciones",
    topic: "Orden de palabras en oraciones básicas (A1-A2)",
    week: 5,
    taskId: "pn-ing102-w05-sentence-builder-game",
    taskTitle: "English Lesson: Nivel 3 — Sentence Builder",
    scenario: "Before you can report clearly on the bridge, you need automatic control of basic English word order. In this drill you rebuild scrambled sentences that practise the Level 3 grammar points until the correct order comes naturally.",
    instructions: [
      "Read the scrambled word bank for each sentence.",
      "Tap the words in the correct order to build the sentence.",
      "Press Check to confirm, then continue to the next sentence.",
      "Keep your streak going: 3 correct in a row earns a bonus."
    ],
    deliverable: "Twelve A1-A2 sentences rebuilt in the correct word order, completing the Level 3 Sentence Builder drill.",
    assessmentCriteria: [
      "Words are placed in grammatically correct order.",
      "Level 3 structures (a/an, some/any, much/many, too/enough, will vs going to, modals of possibility, past simple, linking words, questions) are handled correctly.",
      "The full twelve-sentence drill is completed."
    ],
    xp: 20,
    estimatedTime: "15 min",
    difficulty: "Foundation",
    game: {
      type: "grammar-sentence-builder",
      sentences: [
        { words: ["He", "is", "an", "engineer"], grammarPoint: "a / an (articles)" },
        { words: ["We", "have", "some", "apples"], grammarPoint: "some / any" },
        { words: ["There", "isn't", "any", "bread"], grammarPoint: "some / any" },
        { words: ["There", "aren't", "many", "chairs"], grammarPoint: "much / many" },
        { words: ["The", "box", "is", "too", "heavy"], grammarPoint: "too / enough" },
        { words: ["This", "coffee", "isn't", "hot", "enough"], grammarPoint: "too / enough" },
        { words: ["She", "will", "cook", "dinner"], grammarPoint: "will (future)" },
        { words: ["We", "are", "going", "to", "leave", "the", "port"], grammarPoint: "going to (future)" },
        { words: ["The", "ship", "may", "arrive", "late"], grammarPoint: "modals of possibility" },
        { words: ["He", "closed", "the", "door"], grammarPoint: "past simple (regular)" },
        { words: ["The", "crew", "went", "home"], grammarPoint: "past simple (irregular)" },
        { words: ["Where", "do", "you", "work"], grammarPoint: "question forms" }
      ]
    }
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "Inglés por Niveles",
    subjectName: "Sentence Builder",
    subjectId: "pn-s1-maritime-english-i",
    unit: "Construcción de oraciones",
    topic: "Orden de palabras en oraciones (A2-B1)",
    week: 6,
    taskId: "pn-ing102-w06-sentence-builder-l4-game",
    taskTitle: "English Lesson: Nivel 4 — Sentence Builder",
    scenario: "You already control basic word order. Level 4 tightens it: tenses in contrast (present simple vs progressive, past simple vs past progressive), stative verbs, adverbs of manner, used to, phrasal verbs and the present perfect. Rebuild each scrambled sentence until the A2-B1 order comes naturally, including a Marlins-style maritime block.",
    instructions: [
      "Read the scrambled word bank for each sentence.",
      "Tap the words in the correct order to build the sentence.",
      "Press Check to confirm, then continue to the next sentence.",
      "Keep your streak going: 3 correct in a row earns a bonus."
    ],
    deliverable: "Twelve A2-B1 sentences rebuilt in the correct word order, completing the Level 4 Sentence Builder drill.",
    assessmentCriteria: [
      "Words are placed in grammatically correct order.",
      "Level 4 structures (present simple vs progressive, stative verbs, adverbs of manner, past simple vs past progressive, used to, phrasal verbs, present perfect with have been / have gone) are handled correctly.",
      "The full twelve-sentence drill is completed."
    ],
    xp: 20,
    estimatedTime: "15 min",
    difficulty: "Standard",
    game: {
      type: "grammar-sentence-builder",
      sentences: [
        { words: ["The", "engineer", "checks", "the", "oil", "pressure"], grammarPoint: "present simple" },
        { words: ["The", "students", "are", "watching", "a", "video"], grammarPoint: "present progressive" },
        { words: ["My", "sister", "is", "cooking", "dinner"], grammarPoint: "present progressive" },
        { words: ["This", "life", "jacket", "belongs", "to", "a", "young", "seafarer"], grammarPoint: "stative verbs (belong)" },
        { words: ["The", "chief", "engineer", "works", "very", "hard"], grammarPoint: "adverbs of manner" },
        { words: ["The", "ship", "arrived", "at", "the", "port"], grammarPoint: "past simple" },
        { words: ["The", "crew", "was", "painting", "the", "deck"], grammarPoint: "past progressive" },
        { words: ["My", "father", "was", "fixing", "the", "old", "radio"], grammarPoint: "past progressive" },
        { words: ["She", "used", "to", "play", "the", "guitar"], grammarPoint: "used to" },
        { words: ["The", "seafarers", "get", "on", "the", "vessel"], grammarPoint: "phrasal verbs (get on)" },
        { words: ["The", "captain", "has", "gone", "to", "the", "bridge"], grammarPoint: "present perfect (have gone)" },
        { words: ["The", "second", "officer", "has", "been", "to", "the", "port", "office"], grammarPoint: "present perfect (have been)" }
      ]
    }
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "Inglés por Niveles",
    subjectName: "Sentence Builder",
    subjectId: "pn-s1-maritime-english-i",
    unit: "Construcción de oraciones",
    topic: "Orden de palabras en oraciones (B1)",
    week: 7,
    taskId: "pn-ing102-w07-sentence-builder-l5-game",
    taskTitle: "English Lesson: Nivel 5 — Sentence Builder",
    scenario: "Level 5 pushes your word order into B1 territory: future tenses, zero and first conditionals, modals of obligation, advice, ability, possibility and deduction, and the present perfect against the past simple and the present perfect progressive. Rebuild each scrambled sentence until the B1 order comes naturally, including a Marlins-style maritime block.",
    instructions: [
      "Read the scrambled word bank for each sentence.",
      "Tap the words in the correct order to build the sentence.",
      "Press Check to confirm, then continue to the next sentence.",
      "Keep your streak going: 3 correct in a row earns a bonus."
    ],
    deliverable: "Twelve B1 sentences rebuilt in the correct word order, completing the Level 5 Sentence Builder drill.",
    assessmentCriteria: [
      "Words are placed in grammatically correct order.",
      "Level 5 structures (future tenses, zero / first conditional, modals of obligation, advice, ability, possibility and deduction, present perfect vs past simple, present perfect progressive) are handled correctly.",
      "The full twelve-sentence drill is completed."
    ],
    xp: 20,
    estimatedTime: "15 min",
    difficulty: "Advanced",
    game: {
      type: "grammar-sentence-builder",
      sentences: [
        { words: ["The", "vessel", "will", "reach", "the", "port"], grammarPoint: "future (will)" },
        { words: ["They", "are", "going", "to", "build", "a", "new", "house"], grammarPoint: "future (going to)" },
        { words: ["If", "you", "heat", "water,", "it", "boils"], grammarPoint: "zero conditional" },
        { words: ["If", "it", "rains,", "we", "will", "stay"], grammarPoint: "first conditional" },
        { words: ["You", "must", "keep", "a", "good", "watch"], grammarPoint: "modals of obligation (must)" },
        { words: ["You", "should", "see", "a", "doctor"], grammarPoint: "modals of advice (should)" },
        { words: ["She", "can", "speak", "three", "languages"], grammarPoint: "modals of ability (can)" },
        { words: ["He", "must", "be", "tired"], grammarPoint: "modals of deduction (must be)" },
        { words: ["The", "crew", "has", "been", "loading", "the", "cargo"], grammarPoint: "present perfect progressive" },
        { words: ["We", "have", "been", "waiting", "for", "the", "pilot"], grammarPoint: "present perfect progressive" },
        { words: ["I", "have", "finished", "my", "homework"], grammarPoint: "present perfect vs past simple (present perfect)" },
        { words: ["She", "wrote", "a", "long", "letter"], grammarPoint: "present perfect vs past simple (past simple)" }
      ]
    }
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "Inglés por Niveles",
    subjectName: "Sentence Builder",
    subjectId: "pn-s1-maritime-english-i",
    unit: "Construcción de oraciones",
    topic: "Orden de palabras en oraciones (B1+)",
    week: 8,
    taskId: "pn-ing102-w08-sentence-builder-l6-game",
    taskTitle: "English Lesson: Nivel 6 — Sentence Builder",
    scenario: "Level 6 takes your word order to B1+: tenses for past and current events, the past perfect, indirect questions, gerund versus infinitive, comparatives with temporal connectors, and adverbs of manner. Rebuild each scrambled sentence until the B1+ order comes naturally, including a Marlins-style maritime block.",
    instructions: [
      "Read the scrambled word bank for each sentence.",
      "Tap the words in the correct order to build the sentence.",
      "Press Check to confirm, then continue to the next sentence.",
      "Keep your streak going: 3 correct in a row earns a bonus."
    ],
    deliverable: "Twelve B1+ sentences rebuilt in the correct word order, completing the Level 6 Sentence Builder drill.",
    assessmentCriteria: [
      "Words are placed in grammatically correct order.",
      "Level 6 structures (past perfect, indirect questions, gerund vs infinitive, comparatives, temporal connectors, adverbs of manner) are handled correctly.",
      "The full twelve-sentence drill is completed."
    ],
    xp: 20,
    estimatedTime: "15 min",
    difficulty: "Advanced",
    game: {
      type: "grammar-sentence-builder",
      sentences: [
        { words: ["The", "captain", "had", "locked", "the", "door"], grammarPoint: "past perfect" },
        { words: ["They", "had", "never", "seen", "the", "sea"], grammarPoint: "past perfect" },
        { words: ["I", "had", "lost", "my", "passport"], grammarPoint: "past perfect" },
        { words: ["Could", "you", "tell", "me", "where", "the", "office", "is"], grammarPoint: "indirect questions" },
        { words: ["I", "asked", "him", "who", "was", "on", "watch"], grammarPoint: "indirect questions" },
        { words: ["Do", "you", "know", "when", "the", "train", "arrives"], grammarPoint: "indirect questions" },
        { words: ["I", "enjoy", "reading", "books"], grammarPoint: "gerund vs infinitive (gerund)" },
        { words: ["They", "decided", "to", "leave", "the", "port"], grammarPoint: "gerund vs infinitive (infinitive)" },
        { words: ["She", "avoided", "making", "a", "mistake"], grammarPoint: "gerund vs infinitive (gerund)" },
        { words: ["This", "box", "is", "heavier", "than", "that", "one"], grammarPoint: "comparatives" },
        { words: ["As", "soon", "as", "the", "vessel", "docked,", "the", "crew", "unloaded", "the", "cargo"], grammarPoint: "temporal connectors (as soon as)" },
        { words: ["The", "new", "officer", "did", "the", "job", "well"], grammarPoint: "adverbs of manner" }
      ]
    }
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
    subjectCode: "C0011",
    subjectName: "Educación Física I",
    subjectId: "pn-s1-educacion-fisica-i",
    unit: "Manejo manual de cargas",
    topic: "Ergonomía y técnica segura de levantamiento",
    week: 5,
    taskId: "pn-c0011-w05-manual-handling-lifting",
    taskTitle: "Apply Safe Manual Handling On Deck",
    scenario: "Stores have come aboard and the cadet must help move heavy provisions and gear along the deck. The officer asks the cadet to apply safe manual handling so no one strains their back.",
    instructions: [
      "Assess the load and the route before lifting (weight, size, obstacles, and whether help or a trolley is needed).",
      "Describe the correct lifting technique step by step (feet apart, back straight, lift with the legs, load close to the body, no twisting).",
      "State when a load should not be lifted alone and what the safe alternative is (team lift or mechanical aid).",
      "Explain how this technique prevents back and joint injury, in correct English."
    ],
    deliverable: "A safe manual-handling note in English covering the pre-lift assessment, the correct lifting technique, when not to lift alone, and the injury-prevention reason.",
    assessmentCriteria: [
      "The pre-lift assessment covers weight, route, and the need for help or aids.",
      "The lifting technique is described correctly and in order.",
      "The limit on lifting alone and the safe alternative are correct.",
      "The injury-prevention reasoning is sound and in correct English."
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
    unit: "Acondicionamiento físico",
    topic: "Rutina con peso corporal y equipo mínimo a bordo",
    week: 6,
    taskId: "pn-c0011-w06-onboard-conditioning-routine",
    taskTitle: "Design A Safe Onboard Conditioning Routine",
    scenario: "On a long voyage there is little space and almost no gym equipment. The officer asks the cadet to design a simple, balanced conditioning routine to keep the functional fitness needed for deck duties.",
    instructions: [
      "Design a balanced routine using bodyweight exercises for strength, mobility and cardiorespiratory fitness.",
      "Include a warm-up and a cool-down, and say why each matters for injury prevention.",
      "Set a sensible, sustainable frequency that fits around watches and rest, with no extreme targets.",
      "Explain how the routine supports the physical demands of deck work, in correct English."
    ],
    deliverable: "A balanced onboard conditioning routine in English with a warm-up, main exercises, a cool-down, and a sustainable frequency for functional fitness.",
    assessmentCriteria: [
      "The routine is balanced across strength, mobility and cardiorespiratory fitness.",
      "A warm-up and cool-down are included with the injury-prevention reason.",
      "The frequency is sustainable and realistic around the watch routine, with no extreme targets.",
      "The routine is clearly linked to the demands of deck work, in correct English."
    ],
    xp: 25,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "C0011",
    subjectName: "Educación Física I",
    subjectId: "pn-s1-educacion-fisica-i",
    unit: "Fatiga y descanso",
    topic: "Fisiología de la fatiga, higiene del sueño y horas de descanso",
    week: 7,
    taskId: "pn-c0011-w07-fatigue-rest-management",
    taskTitle: "Manage Fatigue And Rest Under A Watch Rotation",
    scenario: "After several days on a watch rotation the cadet notices signs of fatigue on the night watch. The officer asks the cadet to explain how to manage fatigue and protect rest under the work and rest hour rules.",
    instructions: [
      "Describe the signs of fatigue and how it affects alertness and safety on watch.",
      "State the basic work and rest hour requirement and why protected rest matters.",
      "Give three sleep-hygiene actions that improve rest quality on board (for example a dark cabin, limiting caffeine before rest, a wind-down routine).",
      "Explain what to do if too fatigued to stand a safe watch, in correct English."
    ],
    deliverable: "A fatigue-management note in English covering the signs of fatigue, the rest-hour requirement, three sleep-hygiene actions, and what to do when too fatigued for a safe watch.",
    assessmentCriteria: [
      "The signs of fatigue and their effect on watch safety are correct.",
      "The rest-hour requirement and the value of protected rest are stated correctly.",
      "The three sleep-hygiene actions are practical and effective.",
      "The action for being too fatigued to stand a safe watch is correct and in clear English."
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
    unit: "Aptitud física para emergencias",
    topic: "Demandas físicas de los ejercicios de emergencia",
    week: 8,
    taskId: "pn-c0011-w08-emergency-physical-readiness",
    taskTitle: "Prepare Physically For Emergency Drills",
    scenario: "The vessel schedules an abandon-ship and firefighting drill. The officer asks the cadet to explain the physical demands of the tasks involved and how to meet them safely.",
    instructions: [
      "List the physical demands of four emergency tasks: donning an immersion suit, climbing the pilot ladder, boarding the survival craft, and firefighting effort.",
      "State which physical capacities each task draws on (strength, balance, endurance, coordination).",
      "Explain how the term's training (fitness, balance, swimming, manual handling) prepares the cadet for these demands.",
      "Give one safety point to avoid injury while performing under emergency stress, in correct English."
    ],
    deliverable: "A readiness note in English mapping four emergency tasks to their physical demands and capacities, how the training prepares for them, and one injury-avoidance safety point.",
    assessmentCriteria: [
      "The physical demands of the four emergency tasks are correctly identified.",
      "Each task is matched to the physical capacities it draws on.",
      "The link between the term's training and emergency readiness is sound.",
      "The injury-avoidance safety point is valid and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
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
    subjectCode: "PMR107",
    subjectName: "Prácticas Marineras I",
    subjectId: "pn-s1-practicas-marineras-i",
    unit: "Cabuyería",
    topic: "Nudos, vueltas y costuras marineras esenciales",
    week: 5,
    taskId: "pn-pmr107-w05-knots-and-splices",
    taskTitle: "Select And Tie The Right Knot For The Job",
    scenario: "The bosun gives the cadet several small deck jobs before sailing: forming a fixed loop on a mooring line, securing a line to a rail, joining two ropes, and holding a line under strain. He asks which knot to use for each and to explain a basic eye splice.",
    instructions: [
      "Choose the correct knot or hitch for four common deck jobs (fixed loop, securing to a rail or ring, joining two ropes, holding under strain).",
      "Name each knot correctly (for example bowline, clove hitch, sheet bend, rolling hitch).",
      "Describe the steps to tie one of them and how you check it holds and can be released.",
      "Explain when a basic eye splice is preferred over a knot, in clear deck English."
    ],
    deliverable: "A knot selection note matching four deck jobs to the correct named knot, with the tying steps for one knot and the case for using an eye splice.",
    assessmentCriteria: [
      "Each deck job is matched to a suitable knot or hitch.",
      "The knots are named correctly.",
      "The tying steps are accurate and include a check that it holds and releases.",
      "The case for an eye splice is correct, in clear deck English."
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
    unit: "Fondeo",
    topic: "Equipo de ancla y maniobra de fondear y levar",
    week: 6,
    taskId: "pn-pmr107-w06-anchoring-operation",
    taskTitle: "Carry Out A Basic Anchoring Operation",
    scenario: "The vessel is approaching the anchorage and the cadet is sent to the forecastle party for letting go the anchor. The officer asks the cadet to describe the ground tackle and the sequence the party will follow.",
    instructions: [
      "Name the main items of ground tackle used in anchoring (anchor, cable, hawse pipe, windlass) and the job of each.",
      "Describe the sequence the forecastle party follows to let go the anchor on the officer's order.",
      "State how the cable is reported to the bridge and how you check the anchor is holding.",
      "Identify the anchoring day signal and how you would report weighing anchor, in clear deck English."
    ],
    deliverable: "An anchoring operation note naming the ground tackle, the let-go sequence, the cable and holding checks, and the anchoring signal.",
    assessmentCriteria: [
      "Ground tackle items are named correctly with their function.",
      "The let-go sequence is in a safe, logical order.",
      "Cable reporting and the holding check are correct.",
      "The anchoring signal and weighing report are correct, in clear deck English."
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
    unit: "Mantenimiento de cubierta",
    topic: "Picado, rascado, limpieza, pintado y control de la corrosión",
    week: 7,
    taskId: "pn-pmr107-w07-deck-maintenance-corrosion",
    taskTitle: "Plan A Deck Maintenance And Rust-Control Job",
    scenario: "The bosun assigns the cadet a rusted section of bulwark and deck fittings. Before starting, the cadet must plan the job from surface preparation to painting and set out the safety precautions.",
    instructions: [
      "Describe the correct sequence to treat a rusted deck area: chipping or scraping, cleaning, priming, and painting.",
      "State why surface preparation must be done before painting for the coating to protect the steel.",
      "Identify the personal protective equipment and one safety precaution for the job.",
      "Explain how regular deck maintenance controls corrosion and protects the vessel, in clear deck English."
    ],
    deliverable: "A deck maintenance plan describing the preparation-to-painting sequence, the reason for surface preparation, the PPE and safety precaution, and the corrosion-control benefit.",
    assessmentCriteria: [
      "The maintenance sequence is in the correct order.",
      "The importance of surface preparation is correctly explained.",
      "The PPE and safety precaution are appropriate for the job.",
      "The corrosion-control benefit is clearly explained, in correct deck English."
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
    unit: "Maniobra de atraque y desatraque",
    topic: "Sisga, envío de cabos a tierra, remolcadores, defensas y trabajo en equipo",
    week: 8,
    taskId: "pn-pmr107-w08-berthing-operation",
    taskTitle: "Work The Deck During A Berthing Operation",
    scenario: "The vessel is coming alongside with tug assistance and the cadet is stationed at the forward mooring station. The officer asks the cadet to describe the team's actions from passing the heaving line to making the vessel fast.",
    instructions: [
      "Describe how the heaving line is passed ashore and used to send the mooring lines.",
      "State the order in which the lines are typically sent and made fast during berthing.",
      "Explain the role of fenders and tugs in bringing the vessel safely alongside.",
      "Identify two safety points for the mooring team (for example snap-back zones and clear communication) and report them in clear deck English."
    ],
    deliverable: "A berthing operation brief describing the heaving-line-to-made-fast sequence, the role of fenders and tugs, and two mooring-team safety points.",
    assessmentCriteria: [
      "The heaving line and line-sending procedure is described correctly.",
      "The order of sending and making fast the lines is logical and safe.",
      "The role of fenders and tugs is accurately explained.",
      "The two safety points are valid and clearly reported in correct deck English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
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
    subjectCode: "DII105",
    subjectName: "Dibujo de Ingeniería",
    subjectId: "pn-s1-dibujo-ingenieria",
    unit: "Vistas ortográficas",
    topic: "Planta, alzado y perfil",
    week: 5,
    taskId: "pn-dii105-w05-orthographic-views",
    taskTitle: "Read The Three Orthographic Views Of A Deck Fitting",
    scenario: "The officer hands the cadet an orthographic drawing of a deck fitting (a mooring bitt) showing three views, and asks the cadet to identify each view and read the shape of the fitting before it is fabricated.",
    instructions: [
      "Identify which view is the plan (top), which is the front elevation, and which is the side or profile view.",
      "Explain what each view shows about the shape and dimensions of the fitting.",
      "Describe how the three views together define the 3D form of the fitting.",
      "Report your interpretation in clear technical English."
    ],
    deliverable: "A note in English identifying the plan, front elevation and side view of the fitting, what each shows, and how the three views combine to define its 3D form.",
    assessmentCriteria: [
      "The plan, front elevation and side view are correctly identified.",
      "What each view shows about shape and dimensions is correct.",
      "The explanation of how the views combine into a 3D form is sound.",
      "The note is clear and in correct technical English."
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
    unit: "Planos del buque",
    topic: "Disposición general, plano de cubiertas y de capacidades",
    week: 6,
    taskId: "pn-dii105-w06-general-arrangement-plan",
    taskTitle: "Locate A Compartment On The General Arrangement Plan",
    scenario: "During familiarization, the officer gives the cadet the vessel's General Arrangement plan and asks the cadet to find a named compartment and explain what the ship's plans provide for daily deck work.",
    instructions: [
      "State what a General Arrangement (GA) plan shows and how the decks are laid out on it.",
      "Use the GA or deck plan to locate a named compartment and give its position (deck, fore or aft, port or starboard).",
      "Explain what a capacity plan adds beyond the GA (tank and hold capacities).",
      "Report how the deck officer uses these plans in daily operations, in clear technical English."
    ],
    deliverable: "A note in English describing the GA plan, locating a compartment from it with deck and position, the purpose of the capacity plan, and the deck officer's operational use.",
    assessmentCriteria: [
      "The purpose and deck layout of the GA plan are described correctly.",
      "The compartment is located correctly with its deck and position.",
      "The role of the capacity plan is correctly distinguished from the GA.",
      "The operational use is relevant and in correct technical English."
    ],
    xp: 25,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "DII105",
    subjectName: "Dibujo de Ingeniería",
    subjectId: "pn-s1-dibujo-ingenieria",
    unit: "Trabajo en la carta náutica",
    topic: "Trazado de rumbo, marcación y posición",
    week: 7,
    taskId: "pn-dii105-w07-chart-plotting-bearing",
    taskTitle: "Plot A Position And Work A Bearing On The Chart",
    scenario: "On the chart the cadet must fix the vessel's position and work a bearing. A lighthouse bears 065 degrees true from the vessel. A waypoint lies on the same meridian as the vessel, 12 minutes of latitude away. The officer asks the cadet to plot the position and work out the reciprocal bearing and the distance.",
    instructions: [
      "Explain how to plot a position on the chart using the latitude and longitude grid.",
      "The lighthouse bears 065 degrees true from the vessel; work out the reciprocal bearing (the vessel's bearing from the lighthouse).",
      "The waypoint lies on the same meridian, 12 minutes of latitude away; use the rule that 1 minute of latitude equals 1 nautical mile to state the distance.",
      "Report the plotted position, the reciprocal bearing and the distance, in clear chart-work English."
    ],
    deliverable: "A chart-work note in English giving the method to plot the position, the reciprocal bearing, and the distance from the latitude scale, with the working shown.",
    assessmentCriteria: [
      "The method to plot a position from the latitude and longitude grid is described correctly.",
      "The reciprocal bearing is correct (065 + 180 = 245 degrees).",
      "The distance is correct (12 minutes of latitude = 12 nautical miles).",
      "The results are reported clearly in correct chart-work English."
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
    unit: "Planos de seguridad",
    topic: "Plano de contraincendios (fire control plan) SOLAS",
    week: 8,
    taskId: "pn-dii105-w08-fire-control-plan",
    taskTitle: "Interpret The Ship's Fire Control Plan",
    scenario: "During a fire drill the officer stands the cadet in front of the ship's fire control plan and asks the cadet to interpret it and find the fire-fighting appliances and escape route for a given deck space.",
    instructions: [
      "State what a fire control plan (fire and safety plan) is and why SOLAS requires it to be posted on board.",
      "Identify three types of information or symbols shown on the plan (for example fire stations, extinguisher types, escape routes, fire doors, remote stops).",
      "Use the plan to describe the nearest fire-fighting appliances and an escape route from a given deck space.",
      "Explain how correct reading of the plan supports the deck team in an emergency, in clear technical English."
    ],
    deliverable: "A note in English interpreting the fire control plan: its purpose and SOLAS requirement, three symbol or information types, the appliances and escape route for a given space, and its value in an emergency.",
    assessmentCriteria: [
      "The purpose of the fire control plan and the SOLAS posting requirement are correct.",
      "Three valid symbol or information types are identified.",
      "The appliances and escape route are correctly read from the plan for the given space.",
      "The emergency-use explanation is sound and in correct technical English."
    ],
    xp: 25,
    estimatedTime: "30 min",
    difficulty: "Advanced"
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
    subjectCode: "C0099",
    subjectName: "Estrategias de Aprendizaje",
    subjectId: "pn-s1-estrategias-aprendizaje",
    unit: "Toma de apuntes",
    topic: "Método Cornell para la captura de información",
    week: 5,
    taskId: "pn-c0099-w05-cornell-note-taking",
    taskTitle: "Take Cornell Notes During A Safety Briefing",
    scenario: "Before arrival the officer gives a fast pre-arrival briefing covering the mooring plan, the main hazards and the timings. The cadet must capture it live using the Cornell note-taking method so nothing important is lost.",
    instructions: [
      "Set up a Cornell page with a notes column, a cue or questions column, and a summary area at the bottom.",
      "Capture the key points of the briefing in the notes column as it is delivered.",
      "Write cue questions in the left column to test recall of the notes later.",
      "Write a short summary of the briefing at the bottom, in correct English."
    ],
    deliverable: "A Cornell-format note of the safety briefing in English, with the notes column, the cue questions, and a bottom summary.",
    assessmentCriteria: [
      "The page is set up correctly in the three Cornell areas.",
      "The notes capture the essential briefing points without filler.",
      "The cue questions would test recall of the key points.",
      "The summary is accurate and in correct English."
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
    unit: "Técnicas de memorización",
    topic: "Mnemotecnia y repaso espaciado",
    week: 6,
    taskId: "pn-c0099-w06-mnemonics-spaced-repetition",
    taskTitle: "Build A Mnemonic And A Spaced-Repetition Plan",
    scenario: "The cadet must memorize a body of standardized content, such as the phonetic alphabet, light and buoy characteristics, or COLREGS lights and shapes. The officer asks the cadet to build a memory aid and a spaced-repetition plan to make it stick.",
    instructions: [
      "Choose one standardized set to memorize (for example the phonetic alphabet, buoy and light characteristics, COLREGS lights, or common knots).",
      "Create a mnemonic or memory aid that links the items to something easy to recall.",
      "Design a spaced-repetition schedule (for example review after 1 day, 3 days, 1 week) and say why spacing beats cramming.",
      "Explain how you would test yourself to confirm retention, in correct English."
    ],
    deliverable: "A memory plan in English with the chosen content set, a mnemonic, a spaced-repetition schedule, and a self-test method.",
    assessmentCriteria: [
      "The chosen content set is a real standardized nautical body of knowledge.",
      "The mnemonic genuinely aids recall of the items.",
      "The spaced-repetition schedule is sound and its advantage over cramming is explained.",
      "The self-test method would confirm retention, in correct English."
    ],
    xp: 25,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "C0099",
    subjectName: "Estrategias de Aprendizaje",
    subjectId: "pn-s1-estrategias-aprendizaje",
    unit: "Gestión del tiempo",
    topic: "Priorización y plan de estudio a bordo",
    week: 7,
    taskId: "pn-c0099-w07-time-management-study-plan",
    taskTitle: "Plan Study Around The Watch Routine",
    scenario: "A cadet stands a 4-on / 8-off watch routine with drills and the required rest under the work and rest hour rules. The officer asks the cadet to build a realistic weekly study plan that fits studying around the watch schedule.",
    instructions: [
      "Map the fixed blocks of a typical day: watches, meals, drills and required rest.",
      "Identify the realistic time windows that are left for study.",
      "Prioritize the study tasks (urgent and important) and assign them to the available windows.",
      "Explain how the plan respects the rest requirements and stays realistic, in correct English."
    ],
    deliverable: "A weekly study plan in English mapping watches, rest and study windows, with prioritized study tasks assigned to realistic slots.",
    assessmentCriteria: [
      "The daily fixed blocks (watch, rest, drills) are mapped correctly.",
      "The study windows identified are realistic given the routine.",
      "Study tasks are prioritized sensibly and assigned to the windows.",
      "The plan respects the rest requirements and is realistic, in correct English."
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
    unit: "Metacognición",
    topic: "Autoevaluación y bitácora de aprendizaje",
    week: 8,
    taskId: "pn-c0099-w08-metacognition-learning-log",
    taskTitle: "Reflect On Your Learning With A Learning Log",
    scenario: "At the end of a training period the officer asks the cadet to review how well the term's learning strategies worked, assess progress against the training objectives, and keep a learning log to guide the next steps.",
    instructions: [
      "Assess your progress against two or three training objectives, with honest evidence.",
      "Identify which learning strategies (notes, mnemonics, planning) worked best for you and which did not.",
      "Record the reflection in a learning-log entry with a date and concrete next actions.",
      "Explain how honest self-assessment supports continuous professional development at sea, in correct English."
    ],
    deliverable: "A learning-log entry in English assessing progress against the objectives, evaluating which strategies worked, with a date and concrete next actions.",
    assessmentCriteria: [
      "Progress is assessed against clear objectives with honest evidence.",
      "The evaluation of which strategies worked is specific and self-aware.",
      "The log entry is dated and gives concrete next actions.",
      "The link to continuous professional development is sound, in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
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
    semester: "Semester I",
    subjectCode: "C0100",
    subjectName: "Expresión Oral y Escrita",
    subjectId: "pn-s1-expresion-oral-escrita",
    unit: "Comunicación Oral",
    topic: "Frases normalizadas OMI (SMCP) y marcadores de mensaje",
    week: 5,
    taskId: "pn-c0100-w05-smcp-message-markers",
    taskTitle: "Use SMCP Message Markers To Remove Ambiguity",
    scenario: "During a busy traffic situation a plain-language message from the bridge is misunderstood by the helmsman. The officer asks the cadet to rebuild the key messages using the IMO Standard Marine Communication Phrases (SMCP) and the correct message markers.",
    instructions: [
      "Name the SMCP message markers and what each one signals (Instruction, Advice, Warning, Information, Question, Answer, Request, Intention).",
      "Take three plain-language shipboard messages and rewrite each with the correct message marker.",
      "Explain why the message marker removes ambiguity for the receiver.",
      "Deliver the three standardized messages clearly, as you would over VHF, in correct English."
    ],
    deliverable: "A note in English giving three shipboard messages rewritten with the correct SMCP message markers, with an explanation of how the markers remove ambiguity.",
    assessmentCriteria: [
      "The message markers are named correctly with what each one signals.",
      "Each plain message is matched to the correct marker.",
      "The ambiguity-removal reason is sound.",
      "The standardized messages are clear and in correct English."
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
    unit: "Comunicación Escrita",
    topic: "Registro factual y cronológico en el cuaderno de bitácora",
    week: 6,
    taskId: "pn-c0100-w06-logbook-entry",
    taskTitle: "Write A Factual Deck Logbook Entry",
    scenario: "At the end of the watch the officer asks the cadet to record the watch events in the deck logbook: a course alteration, a vessel passing clear, and a change in the weather. The entry must be factual, chronological and concise.",
    instructions: [
      "Record the watch events in chronological order, each with its time.",
      "State each fact plainly, without opinion or unnecessary detail.",
      "Use precise, standard terms for course, weather and traffic.",
      "Write the entry so another officer could reconstruct the watch, in correct English."
    ],
    deliverable: "A deck logbook entry in English recording the watch events in chronological order, factually and concisely.",
    assessmentCriteria: [
      "Events are in the correct chronological order, each with its time.",
      "Each entry is factual and free of opinion or filler.",
      "Terminology for course, weather and traffic is precise.",
      "The entry is clear enough to reconstruct the watch, in correct English."
    ],
    xp: 25,
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
    topic: "Escucha activa y confirmación de órdenes (lazo cerrado)",
    week: 7,
    taskId: "pn-c0100-w07-closed-loop-order-readback",
    taskTitle: "Confirm Helm And Mooring Orders With Read-Back",
    scenario: "On the bridge and at the mooring station orders must be confirmed to avoid mistakes. The officer gives the cadet a helm order, an engine order and a mooring order, and asks the cadet to apply closed-loop communication by reading each one back.",
    instructions: [
      "Explain what closed-loop (read-back) communication is and why it prevents errors.",
      "For the three given orders (helm, engine, mooring), give the correct read-back of each.",
      "State what the order-giver does after hearing the read-back to close the loop.",
      "Describe one situation where a missing read-back could cause an accident, in correct English."
    ],
    deliverable: "A note in English giving the read-back for the three shipboard orders, an explanation of closed-loop communication, and one accident case from a missing read-back.",
    assessmentCriteria: [
      "Closed-loop communication is explained correctly.",
      "Each order is read back correctly and completely.",
      "The role of the order-giver in closing the loop is correct.",
      "The accident example is relevant and written in correct English."
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
    unit: "Comunicación integrada",
    topic: "Comunicación en emergencia: informe oral y registro escrito",
    week: 8,
    taskId: "pn-c0100-w08-emergency-report-and-log",
    taskTitle: "Report An Emergency Verbally And Record It In Writing",
    scenario: "A small fire is discovered during cargo work. The cadet must first give a clear spoken report to the bridge and the fire party, then write the incident entry for the record. The officer assesses both the spoken report and the written record.",
    instructions: [
      "Give a clear spoken emergency report to the bridge stating what has happened, where, and what help is needed, using standardized phrasing.",
      "Confirm the message was received, using read-back or acknowledgement.",
      "Write the incident entry: time, location, what happened and action taken, factually and in order.",
      "Ensure the spoken report and the written record agree, in correct English."
    ],
    deliverable: "A two-part deliverable in English: a clear spoken emergency report (what, where, help needed), and a factual chronological incident entry that matches it.",
    assessmentCriteria: [
      "The spoken report states what, where and the help needed, clearly and in standardized phrasing.",
      "Receipt of the message is confirmed by read-back or acknowledgement.",
      "The written entry is factual, timed and in chronological order.",
      "The spoken report and the written record agree, in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
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
    subjectCode: "NAV316",
    subjectName: "Navegación I",
    subjectId: "pn-s3-navegacion-i",
    unit: "Compás magnético",
    topic: "Conversión de rumbos verdadero, magnético y de compás (variación y desvío en cadena)",
    week: 5,
    taskId: "pn-nav316-w05-course-conversion-chain",
    taskTitle: "Convert A Course True To Magnetic To Compass And Back",
    scenario: "Before steering, the officer of the watch gives the cadet a true course and the vessel's variation and deviation, and asks for the compass course to pass to the helmsman. Getting the East and West signs wrong sends the ship off track, so the cadet must apply the corrections in the right order and prove the chain by reversing it.",
    instructions: [
      "State the rule with the memory aid 'error west, compass best; error east, compass least': a West error is ADDED to true to get compass, an East error is SUBTRACTED.",
      "Working True to Magnetic to Compass, convert a true course of 050 degrees with variation 10 degrees West and deviation 4 degrees East: apply the variation first, then the deviation.",
      "Show the magnetic course (050 + 10 = 060 degrees M) and the compass course (060 - 4 = 056 degrees C).",
      "Verify by reversing the chain Compass to Magnetic to True (add East going to true): 056 + 4 = 060 degrees M, then 060 - 10 = 050 degrees T, confirming it returns to the original course. Report every course as three figures in 000-360 degrees, in clear navigational English."
    ],
    deliverable: "A course conversion note in English showing the full True-Magnetic-Compass chain with each step, and the reverse Compass-Magnetic-True check confirming it returns to the original true course, all courses in three figures.",
    assessmentCriteria: [
      "The sign rule is stated correctly (West error added, East error subtracted, going from true to compass).",
      "The magnetic course is correct (050 + 10W = 060 degrees M) and the compass course is correct (060 - 4E = 056 degrees C).",
      "The reverse check returns to the original (056 + 4E = 060 degrees M, 060 - 10W = 050 degrees T).",
      "All courses are given as three figures in 000-360 degrees, in clear navigational English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "NAV316",
    subjectName: "Navegación I",
    subjectId: "pn-s3-navegacion-i",
    unit: "Navegación loxodrómica",
    topic: "Navegación plana (plane sailing): diferencia de latitud, apartamiento, rumbo y distancia",
    week: 6,
    taskId: "pn-nav316-w06-plane-sailing",
    taskTitle: "Find Course And Distance By Plane Sailing",
    scenario: "The vessel must run a short rhumb-line leg between two positions. The officer asks the cadet to find the course to steer and the distance using plane sailing, treating the leg as a plane right triangle of difference of latitude and departure.",
    instructions: [
      "State the two positions A 59 degrees 30 minutes N, 010 degrees 00 minutes W and B 60 degrees 30 minutes N, 008 degrees 00 minutes W, and find the difference of latitude in minutes (1 minute of latitude = 1 NM).",
      "Calculate the departure with departure = difference of longitude in minutes x cosine of the mean latitude: mean latitude = 60 degrees (cos 60 = 0.5), difference of longitude = 120 minutes, so departure = 120 x 0.5 = 60 NM.",
      "Find the course with course angle = arctangent(departure / difference of latitude) = arctangent(60 / 60) = 45 degrees, giving 045 degrees T in the NE quadrant.",
      "Find the distance by Pythagoras, distance = square root(difference of latitude squared + departure squared) = square root(60 squared + 60 squared) = 84.9 NM, and verify with distance = difference of latitude / cosine(course) = 60 / cos 45 = 84.9 NM. Report the course in three figures and the distance in nautical miles, in clear navigational English."
    ],
    deliverable: "A plane sailing calculation in English giving the difference of latitude, the departure, the course (three figures) and the distance in NM, with the working shown and the distance verified by both methods.",
    assessmentCriteria: [
      "The difference of latitude is correct (60 minutes = 60 NM) and the departure is correct (120 x cos 60 = 60 NM).",
      "The course is correct (arctangent(60/60) = 45 degrees, i.e. 045 degrees T) in the correct quadrant.",
      "The distance is correct (square root(60 squared + 60 squared) = 84.9 NM) and verified by distance = difference of latitude / cos(course) = 84.9 NM.",
      "The course is given as three figures in 000-360 degrees and the distance in NM, in clear navigational English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "NAV316",
    subjectName: "Navegación I",
    subjectId: "pn-s3-navegacion-i",
    unit: "Navegación loxodrómica",
    topic: "Velocidad, tiempo y ETA en la derrota con corrección por corriente (SOG vs velocidad de superficie)",
    week: 7,
    taskId: "pn-nav316-w07-speed-time-eta-current",
    taskTitle: "Work Out ETA On A Leg Corrected For Current",
    scenario: "The vessel is running a leg toward a waypoint and a known current sets along the track. The officer asks the cadet to work out the passage time and ETA using speed over the ground, remembering that a head current makes the passage slower and a fair current faster.",
    instructions: [
      "State the leg: distance to waypoint WP1 = 60 NM, speed through the water = 12 knots, departure time 08:00.",
      "With no current, calculate the time as distance / speed = 60 / 12 = 5.0 hours, giving ETA 13:00.",
      "With a 2 knot current AGAINST, speed over the ground = 12 - 2 = 10 knots, so time = 60 / 10 = 6.0 hours and ETA = 08:00 + 6:00 = 14:00; confirm this ETA is LATER than the no-current ETA.",
      "With a 2 knot current in FAVOUR, speed over the ground = 12 + 2 = 14 knots, so time = 60 / 14 = 4.29 hours = 4 hours 17 minutes. Report all times and ETAs, in clear navigational English."
    ],
    deliverable: "An ETA calculation in English giving the passage time and ETA for no current, a head current and a fair current, using speed over the ground, with the working shown and the head-current ETA confirmed later than the no-current ETA.",
    assessmentCriteria: [
      "The no-current time and ETA are correct (60 / 12 = 5.0 h, ETA 13:00).",
      "The head current uses speed over the ground correctly (12 - 2 = 10 kn, 60 / 10 = 6.0 h, ETA 14:00) and is confirmed later than the no-current ETA.",
      "The fair current uses speed over the ground correctly (12 + 2 = 14 kn, 60 / 14 = 4 h 17 min).",
      "Times and ETAs carry the correct units and the reasoning is in clear navigational English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "NAV316",
    subjectName: "Navegación I",
    subjectId: "pn-s3-navegacion-i",
    unit: "Líneas de posición",
    topic: "Situación por demoras cruzadas: conversión de demoras de compás a verdaderas y triángulo de error (cocked hat)",
    week: 8,
    taskId: "pn-nav316-w08-fix-cross-bearings",
    taskTitle: "Fix The Ship By Cross Bearings And The Cocked Hat",
    scenario: "Approaching the coast the cadet takes compass bearings of three charted objects to fix the ship. The officer asks the cadet to correct each bearing to true, plot the position lines, and judge the fix from the small triangle of error they form.",
    instructions: [
      "State the corrections, variation 5 degrees East and deviation 3 degrees East (total error 8 degrees East), and the rule Compass to True adds East: true bearing = compass bearing + 8 degrees.",
      "Convert the three compass bearings to true: object A 040 degrees C = 048 degrees T, object B 100 degrees C = 108 degrees T, object C 340 degrees C = 348 degrees T, and verify each by reversing (True to Compass subtracts East) back to the original.",
      "Give the reciprocal of each true bearing (bearing plus or minus 180 degrees) for plotting the position line from the object: 048 + 180 = 228 degrees, 108 + 180 = 288 degrees, 348 - 180 = 168 degrees.",
      "Explain that when the three position lines do not meet at a single point they form a triangle of error (a cocked hat), and that the fix is taken at its centre, or at the corner nearest to danger for safety. Report all bearings as three figures in 000-360 degrees, in clear navigational English."
    ],
    deliverable: "A fix note in English giving the three true bearings with their reverse check, their reciprocals for plotting, and an explanation of the cocked hat and where the fix is taken, all bearings in three figures.",
    assessmentCriteria: [
      "Each compass bearing is correctly converted to true (040 + 8 = 048, 100 + 8 = 108, 340 + 8 = 348 degrees T) and verified by the reverse conversion.",
      "The reciprocals are correct (048/228, 108/288, 348/168 degrees) for plotting the position lines.",
      "The triangle of error (cocked hat) is correctly explained, including taking the fix at its centre or nearest the danger.",
      "All bearings are given as three figures in 000-360 degrees, in clear navigational English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
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
    subjectCode: "HID318",
    subjectName: "Hidrografía",
    subjectId: "pn-s3-hidrografia",
    unit: "Mareas",
    topic: "Fundamentos y terminologia de la marea; datum de sondas (chart datum)",
    week: 5,
    taskId: "pn-hid318-w05-tides-datum-fundamentals",
    taskTitle: "Explain Tidal Terms And Chart Datum",
    scenario: "Before the cadet is allowed to use the tide tables, the officer asks them to explain the basic tidal terms and, above all, what the charted depths are actually measured from, so that soundings on the chart are read correctly.",
    instructions: [
      "Define high water and low water, and explain what the range of the tide is.",
      "Distinguish spring tides from neap tides (springs near new and full moon give the largest range; neaps near the quarters give the smallest range).",
      "Explain the difference between a semidiurnal tidal cycle (two highs and two lows per day) and a diurnal cycle (one high and one low per day).",
      "Explain that charted soundings are referred to chart datum, a low reference level close to the lowest astronomical tide, so the real depth of water is usually greater than the charted sounding. Report your answer in clear hydrographic English."
    ],
    deliverable: "A note in English defining high and low water and tidal range, distinguishing springs from neaps and semidiurnal from diurnal cycles, and explaining chart datum as the low reference level for charted soundings.",
    assessmentCriteria: [
      "High water, low water and range are correctly defined.",
      "Springs and neaps are correctly distinguished (springs largest range, neaps smallest).",
      "Semidiurnal and diurnal cycles are correctly distinguished.",
      "Chart datum is correctly explained as a low reference level, so real depth is usually greater than the charted sounding, in clear hydrographic English."
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
    unit: "Mareas",
    topic: "Calculo de altura de marea y profundidad disponible; margen bajo la quilla (UKC)",
    week: 6,
    taskId: "pn-hid318-w06-tidal-height-ukc",
    taskTitle: "Work Out Depth Of Water And Under-Keel Clearance",
    scenario: "The vessel plans to cross a charted shoal. Using the tide tables, the officer asks the cadet to work out the real depth of water and the under-keel clearance at two states of tide, and to give a go / no-go decision against the required clearance.",
    instructions: [
      "State the rule: available depth = charted sounding + height of tide (the height of tide is ADDED because the charted sounding is measured from chart datum, a low level), and under-keel clearance (UKC) = available depth - draught. The vessel may proceed only if UKC is at or above the required margin.",
      "Use a charted sounding of 6.0 m, a draught of 7.5 m and a required UKC margin of 1.0 m for both cases.",
      "Case A, high water with a height of tide of 3.5 m: available depth = 6.0 + 3.5 = 9.5 m, UKC = 9.5 - 7.5 = 2.0 m, which is at or above 1.0 m, so the decision is GO.",
      "Case B, low water with a height of tide of 2.0 m: available depth = 6.0 + 2.0 = 8.0 m, UKC = 8.0 - 7.5 = 0.5 m, which is below 1.0 m, so the decision is NO-GO. Report both cases with the working and a clear go / no-go verdict, in clear hydrographic English."
    ],
    deliverable: "A depth calculation in English giving the available depth and UKC for both states of tide, with the working shown and a clear go / no-go verdict for each against the 1.0 m margin.",
    assessmentCriteria: [
      "The rule is stated correctly (available depth = charted sounding + height of tide, with the height of tide added; UKC = available depth - draught).",
      "Case A is correct (6.0 + 3.5 = 9.5 m, UKC 9.5 - 7.5 = 2.0 m) and the verdict is GO.",
      "Case B is correct (6.0 + 2.0 = 8.0 m, UKC 8.0 - 7.5 = 0.5 m) and the verdict is NO-GO.",
      "Both verdicts are coherent with the 1.0 m margin, with correct units, in clear hydrographic English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "HID318",
    subjectName: "Hidrografía",
    subjectId: "pn-s3-hidrografia",
    unit: "Batimetria",
    topic: "El ecosonda: principio del eco, monohaz y multihaz, y errores de medicion",
    week: 7,
    taskId: "pn-hid318-w07-echo-sounder",
    taskTitle: "Explain How The Echo Sounder Measures Depth",
    scenario: "Following on from bathymetry, the officer asks the cadet to explain the instrument that produces the soundings: how the echo sounder works, the difference between single-beam and multibeam, and the errors that can make a reading wrong.",
    instructions: [
      "Explain the echo principle: the transducer sends a sound pulse to the seabed and times the returning echo, so depth = sound speed x travel time / 2, dividing by two because the pulse travels down AND back.",
      "Distinguish a single-beam echo sounder (one depth directly under the ship) from a multibeam system (a fan of beams giving full-coverage bathymetry across a swath).",
      "Explain the error caused by using an assumed sound speed in water when the real speed differs (sound speed changes with temperature, salinity and pressure), and how it affects the measured depth.",
      "Explain the transducer draught error: the echo sounder measures from the transducer, not the waterline, so the transducer's depth below the surface must be accounted for to get the true depth of water. Report your answer in clear hydrographic English."
    ],
    deliverable: "A note in English explaining the echo principle with the divide-by-two, distinguishing single-beam from multibeam, and describing the sound-speed and transducer-draught errors.",
    assessmentCriteria: [
      "The echo principle is correct, including depth = sound speed x time / 2 with the divide-by-two justified (down and back).",
      "Single-beam and multibeam are correctly distinguished.",
      "The sound-speed error is correctly explained (assumed vs real speed in water).",
      "The transducer-draught error is correctly explained (measured from the transducer, not the waterline), in clear hydrographic English."
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
    unit: "Informacion hidrografica al navegante",
    topic: "Avisos a los Marinos y correccion de cartas; flujo levantamiento-oficina hidrografica-carta",
    week: 8,
    taskId: "pn-hid318-w08-notices-to-mariners",
    taskTitle: "Trace Hydrographic Information To The Updated Chart",
    scenario: "As the closing task of the subject, the officer asks the cadet to explain how new hydrographic information reaches the mariner and keeps the charts up to date, from the survey at sea to the corrected chart on the bridge.",
    instructions: [
      "Explain what Notices to Mariners are and how they inform the mariner of changes affecting charts and publications (new dangers, changed depths, buoyage, and so on).",
      "Describe how a chart correction is applied and recorded so the chart in use is kept up to date and traceable.",
      "Describe the flow of hydrographic information: survey at sea produces the data, the hydrographic office processes and compiles it, and an updated chart or Notice to Mariners is issued to the mariner.",
      "Explain why this flow matters for safety of navigation, keeping the focus on the flow and management of the information rather than on the chart as a drawing. Report your answer in clear hydrographic English."
    ],
    deliverable: "A note in English explaining Notices to Mariners, how a chart correction is applied and recorded, and the full survey-to-office-to-updated-chart flow, with why it matters for safety.",
    assessmentCriteria: [
      "Notices to Mariners are correctly explained as the means of informing the mariner of changes.",
      "The chart correction process is correctly described (applied and recorded to keep the chart up to date).",
      "The survey to hydrographic office to updated chart flow is correct and in the right order.",
      "The focus stays on the flow and management of the information and its link to safety, in clear hydrographic English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
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
    subjectCode: "CAR319",
    subjectName: "Cartografía",
    subjectId: "pn-s3-cartografia",
    unit: "Simbología de la carta náutica",
    topic: "Carta INT 1 (Chart No. 1): símbolos de peligros, ayudas a la navegación, naturaleza del fondo y abreviaturas",
    week: 5,
    taskId: "pn-car319-w05-chart-symbols",
    taskTitle: "Read Chart Symbols Using Chart No. 1",
    scenario: "The officer hands the cadet a nautical chart together with Chart No. 1 (INT 1), the symbol booklet, and asks them to identify the main symbols on the chart before it is used for planning, so nothing on the chart is misread.",
    instructions: [
      "Using Chart No. 1 (INT 1), identify the symbols for dangers: rocks (awash and underwater), wrecks, and shoals or shallow patches.",
      "Identify the aids to navigation: buoys (lateral and cardinal marks) and lighthouses, and explain how a light's characteristics are shown on the chart (colour, period and range).",
      "Identify how the nature of the seabed is shown by its standard abbreviations (for example S for sand, M for mud, R for rock, Co for coral).",
      "Explain why standardised symbology lets any mariner read any official chart. Report your answer in clear cartographic English."
    ],
    deliverable: "A note in English identifying, from Chart No. 1, the symbols for dangers, aids to navigation with light characteristics, and the seabed-nature abbreviations, and explaining why standard symbology matters.",
    assessmentCriteria: [
      "The danger symbols (rocks, wrecks, shoals) are correctly identified.",
      "The aids to navigation are correctly identified, including how light characteristics are shown.",
      "The seabed-nature abbreviations are correctly read.",
      "The value of standardised symbology is correctly explained, in clear cartographic English."
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
    unit: "Escalas",
    topic: "Escala natural y medición de distancias en la carta con la escala de latitudes",
    week: 6,
    taskId: "pn-car319-w06-scale-distance-measurement",
    taskTitle: "Measure Distance On A Chart Using The Scale",
    scenario: "The cadet must take a distance off the chart. The officer asks them to calculate it from the natural scale and then confirm it with the latitude scale, getting the sense of the scale right so the real distance is never understated.",
    instructions: [
      "State the rule: a natural scale of 1:75 000 means 1 unit on the chart equals 75 000 of the same units in reality, so real distance = chart measurement x the denominator, and the real distance is ALWAYS larger than the measurement on the chart.",
      "A distance measured on the chart is 4 cm; calculate the real distance: 4 cm x 75 000 = 300 000 cm = 3 000 m = 3.0 km, checking the units cm to m at each step.",
      "Convert the distance to nautical miles using 1 NM = 1852 m: 3 000 / 1852 = 1.62 NM.",
      "Cross-check with the latitude scale rule, that a span of X minutes of latitude equals X nautical miles when measured against the side (latitude) scale at the height of the measurement: 1.62 NM corresponds to 1.62 minutes of latitude, and as a clean example two points 6.0 minutes of latitude apart are 6.0 NM apart. Report the distance in metres and NM with the working, in clear cartographic English."
    ],
    deliverable: "A distance calculation in English giving the real distance from the 1:75 000 scale in metres and NM, with the units checked at each step and a cross-check by the latitude scale rule.",
    assessmentCriteria: [
      "The scale rule is stated correctly (1:75 000 = 1 unit chart to 75 000 units real; real distance = chart x denominator, always larger).",
      "The real distance is correct (4 cm x 75 000 = 300 000 cm = 3 000 m = 3.0 km) with correct unit steps.",
      "The conversion to NM is correct (3 000 / 1852 = 1.62 NM).",
      "The latitude-scale cross-check is correct (X minutes of latitude = X NM; 6.0' = 6.0 NM), in clear cartographic English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "CAR319",
    subjectName: "Cartografía",
    subjectId: "pn-s3-cartografia",
    unit: "Datums geodésicos horizontales",
    topic: "WGS-84 y la posición satelital en la carta con datum local",
    week: 7,
    taskId: "pn-car319-w07-geodetic-datum-wgs84",
    taskTitle: "Explain Why A GPS Position May Not Fit The Chart",
    scenario: "A GPS position is plotted on the chart and does not fall exactly where the officer expects. The officer asks the cadet to explain the horizontal geodetic datum behind this and how the chart's datum note is used.",
    instructions: [
      "Explain what a horizontal geodetic datum is and state that WGS-84 is the datum used by GPS and other satellite positioning.",
      "Explain that a chart drawn on a local datum can differ from WGS-84, so a satellite-derived position may not fall exactly on the charted feature it corresponds to.",
      "Explain the datum note or 'satellite-derived positions' correction printed on the chart, and how the stated shift is applied so positions agree with the chart.",
      "Contrast this HORIZONTAL datum, which fixes position, with the VERTICAL datum (chart datum) that fixes charted depths. Report your answer in clear cartographic English."
    ],
    deliverable: "A note in English explaining horizontal geodetic datum and WGS-84, why a GPS position may not fit a local-datum chart, how the datum-shift note is applied, and the contrast with the vertical chart datum.",
    assessmentCriteria: [
      "Horizontal geodetic datum is correctly explained, with WGS-84 as the satellite-positioning datum.",
      "The reason a satellite position may not fit a local-datum chart is correct.",
      "The datum note / satellite-derived-positions correction and its application are correctly explained.",
      "The horizontal (position) versus vertical (depth) datum contrast is correct, in clear cartographic English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "CAR319",
    subjectName: "Cartografía",
    subjectId: "pn-s3-cartografia",
    unit: "Cartas Electrónicas",
    topic: "ECDIS en operación: ENC vs RNC, capas de información, safety contour y alarmas",
    week: 8,
    taskId: "pn-car319-w08-ecdis-enc-rnc",
    taskTitle: "Explain The ECDIS Chart System In Operation",
    scenario: "As the closing task of the subject, the officer asks the cadet to explain the electronic chart system, ECDIS, as it is used on the bridge: the chart types it displays, its information layers, and the safety features that watch over the ship.",
    instructions: [
      "Explain what ECDIS is and distinguish the charts it can display: ENC (vector, official) versus RNC (raster).",
      "Explain the information layers ECDIS provides and that the display can be tailored (for example base, standard and all layers).",
      "Explain the safety contour and the depth and danger alarms, and how they warn the watchkeeper about water that is too shallow.",
      "State one advantage and one limitation of ECDIS as a chart system, mentioning chart updating only in passing rather than as the focus. Report your answer in clear cartographic English."
    ],
    deliverable: "A note in English explaining ECDIS, distinguishing ENC from RNC, describing the information layers and the safety contour and alarms, and giving one advantage and one limitation of the system.",
    assessmentCriteria: [
      "ECDIS is correctly explained and ENC (vector, official) is distinguished from RNC (raster).",
      "The information layers and the tailoring of the display are correctly described.",
      "The safety contour and the depth/danger alarms are correctly explained.",
      "One valid advantage and one valid limitation are given, with updating only in passing, in clear cartographic English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
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
    subjectCode: "GEA320",
    subjectName: "Geometría Analítica",
    subjectId: "pn-s3-geometria-analitica",
    unit: "Segmento rectilíneo",
    topic: "Punto medio y división de un segmento en una razón dada",
    week: 5,
    taskId: "pn-gea320-w05-midpoint-division",
    taskTitle: "Find A Midpoint And Divide A Segment By Ratio",
    scenario: "Working on a cartesian plot where positions are given as (x, y) coordinates, the officer asks the cadet to find an intermediate point as the midpoint between two plotted positions and a point that divides a segment in a given ratio, using coordinate geometry rather than bearings.",
    instructions: [
      "State the midpoint formula M = ((x1 + x2) / 2, (y1 + y2) / 2).",
      "For A = (2, 4) and B = (8, 12), calculate the midpoint: M = ((2 + 8) / 2, (4 + 12) / 2) = (5, 8).",
      "Verify M is equidistant from both ends: distance A to M = square root((5 - 2)^2 + (8 - 4)^2) = square root(9 + 16) = 5, and distance M to B = square root((8 - 5)^2 + (12 - 8)^2) = square root(9 + 16) = 5, confirming they are equal.",
      "Using the section formula, find the point P dividing C = (2, 3) to D = (8, 15) in the ratio 1:2 from C: P = ((1 x 8 + 2 x 2) / 3, (1 x 15 + 2 x 3) / 3) = (4, 7). Report the results with the working, in clear English."
    ],
    deliverable: "A coordinate-geometry note in English giving the midpoint of A-B with its equidistance check, and the point dividing C-D in the ratio 1:2, with the working shown.",
    assessmentCriteria: [
      "The midpoint formula is stated correctly and applied (M = (5, 8)).",
      "The equidistance check is correct (both distances = 5).",
      "The section-formula point is correct (P = (4, 7) for the ratio 1:2).",
      "The working is clear and in correct English."
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
    topic: "Ecuación de la recta (punto-pendiente y pendiente-ordenada) e intersección de dos rectas",
    week: 6,
    taskId: "pn-gea320-w06-line-intersection",
    taskTitle: "Write Two Line Equations And Find Their Intersection",
    scenario: "Two straight lines are drawn on a cartesian plot. The officer asks the cadet to write the equation of each line and find where they cross by solving the system, using coordinate geometry rather than bearings.",
    instructions: [
      "Write line A through the point (1, 3) with slope 2 using point-slope form: y - 3 = 2(x - 1), giving y = 2x + 1.",
      "Write line B through the point (5, 2) with slope -1: y - 2 = -1(x - 5), giving y = -x + 7.",
      "Find the intersection by setting the two equal: 2x + 1 = -x + 7, so 3x = 6, x = 2, and y = 2(2) + 1 = 5, giving the point (2, 5).",
      "Verify that (2, 5) satisfies BOTH original equations: line A gives 2(2) + 1 = 5, and line B gives -(2) + 7 = 5. Report the equations and the intersection with the working, in clear English."
    ],
    deliverable: "A coordinate-geometry note in English giving the two line equations, their intersection point, and the check that the point satisfies both equations, with the working shown.",
    assessmentCriteria: [
      "Line A is correctly written from point-slope form (y = 2x + 1).",
      "Line B is correctly written (y = -x + 7).",
      "The intersection is correctly found (x = 2, y = 5).",
      "The point is verified in BOTH original equations, in correct English."
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
    topic: "Rectas paralelas y perpendiculares; distancia de un punto a una recta",
    week: 7,
    taskId: "pn-gea320-w07-parallel-perpendicular-distance",
    taskTitle: "Use Parallel, Perpendicular And Point-To-Line Distance",
    scenario: "A straight line is drawn on the cartesian plot. The officer asks the cadet to give lines parallel and perpendicular to it and to find the shortest distance from a fixed position to the line, using coordinate geometry.",
    instructions: [
      "For the line L: 3x + 4y - 12 = 0, find its slope m1 = -A / B = -3/4.",
      "State that a parallel line has the same slope (m1 = m2 = -3/4), and that a perpendicular line has slope m2 = 4/3; show the product m1 x m2 = (-3/4)(4/3) = -1, which confirms perpendicularity.",
      "Find the shortest distance from the position P = (1, 1) to L with d = |A x x0 + B x y0 + C| / square root(A^2 + B^2), keeping the absolute value and the sign of C = -12.",
      "Calculate d = |3(1) + 4(1) - 12| / square root(3^2 + 4^2) = |-5| / square root(25) = 5 / 5 = 1. Report the slopes and the distance with the working, in clear English."
    ],
    deliverable: "A coordinate-geometry note in English giving the parallel and perpendicular slopes with the product check, and the shortest distance from P to the line, with the working shown.",
    assessmentCriteria: [
      "The slope of L is correct (m1 = -3/4).",
      "The parallel and perpendicular slopes are correct, with the product m1 x m2 = -1 shown for perpendicularity.",
      "The distance formula is applied with the absolute value and the correct sign of C.",
      "The distance is correct (d = 1), in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "GEA320",
    subjectName: "Geometría Analítica",
    subjectId: "pn-s3-geometria-analitica",
    unit: "Circunferencia",
    topic: "Ecuación general y centro-radio; posición de un punto respecto a la circunferencia",
    week: 8,
    taskId: "pn-gea320-w08-circle-position",
    taskTitle: "Convert Circle Forms And Test A Point's Position",
    scenario: "A lighthouse's range is drawn as a circle on the cartesian plot. As the closing task of the subject, the officer asks the cadet to convert between the circle's forms and decide whether given positions lie inside, on, or outside the range circle, using coordinate geometry.",
    instructions: [
      "For a circle with centre (3, 4) and radius 5, write the centre-radius form (x - 3)^2 + (y - 4)^2 = 25 and expand it to the general form x^2 + y^2 - 6x - 8y = 0.",
      "Recover the centre and radius from the general form by completing the square: (x^2 - 6x + 9) + (y^2 - 8y + 16) = 0 + 9 + 16, giving (x - 3)^2 + (y - 4)^2 = 25, so the centre is (-D/2, -E/2) = (3, 4) and the radius is 5 (watch the signs: D = -6 gives 3, E = -8 gives 4).",
      "Decide the position of each point by comparing its distance to the centre with the radius: Q1 = (6, 8) gives square root((6-3)^2 + (8-4)^2) = square root(25) = 5 = radius, so ON the circle; Q2 = (3, 7) gives square root(0 + 9) = 3 < 5, so INSIDE; Q3 = (9, 4) gives square root(36 + 0) = 6 > 5, so OUTSIDE.",
      "State each verdict with both numbers (distance and radius) shown. Report the forms and the verdicts with the working, in clear English."
    ],
    deliverable: "A coordinate-geometry note in English giving the centre-radius and general forms of the circle, the recovery of centre and radius by completing the square, and the inside/on/outside verdict for the three points with distances shown.",
    assessmentCriteria: [
      "The centre-radius form is expanded correctly to the general form (x^2 + y^2 - 6x - 8y = 0).",
      "The centre (3, 4) and radius 5 are correctly recovered by completing the square, with the signs handled correctly.",
      "Each point is correctly classified (Q1 ON = 5, Q2 INSIDE = 3, Q3 OUTSIDE = 6) with distance compared to radius.",
      "Both numbers are shown for each verdict, in correct English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
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
    subjectCode: "DIN321",
    subjectName: "Dinámica",
    subjectId: "pn-s3-dinamica",
    unit: "Cinemática de Partículas y Cuerpos Rígidos",
    topic: "Movimiento uniformemente acelerado: ecuaciones cinemáticas y distancia de parada",
    week: 5,
    taskId: "pn-din321-w05-uniform-acceleration",
    taskTitle: "Apply The Kinematic Equations To A Crash Stop",
    scenario: "During a crash stop the vessel decelerates uniformly. The officer asks the cadet to apply the three equations of uniformly accelerated motion to find the speed and distance, and to cross-check the final speed by two independent equations.",
    instructions: [
      "State the three kinematic equations: v = v0 + a t; d = v0 t + (1/2) a t^2; and v^2 = v0^2 + 2 a d.",
      "For an initial speed v0 = 12 m/s and a uniform deceleration a = -0.5 m/s^2 over t = 8 s, find the final speed: v = 12 + (-0.5)(8) = 12 - 4 = 8 m/s.",
      "Find the distance run, writing the (1/2) a t^2 term separately: d = v0 t + (1/2) a t^2 = (12)(8) + (1/2)(-0.5)(8^2) = 96 + (-16) = 80 m.",
      "Cross-check the final speed with the third equation: v^2 = v0^2 + 2 a d = 12^2 + 2(-0.5)(80) = 144 - 80 = 64, so v = 8 m/s, matching the second step. Report the results with the working, in clear English."
    ],
    deliverable: "A kinematics note in English giving the final speed and stopping distance from the equations of uniformly accelerated motion, with the (1/2) a t^2 term shown and the final speed cross-checked by v^2 = v0^2 + 2 a d.",
    assessmentCriteria: [
      "The three kinematic equations are stated correctly.",
      "The final speed is correct (v = 12 - 4 = 8 m/s).",
      "The distance is correct (d = 96 - 16 = 80 m) with the (1/2) a t^2 term shown separately.",
      "The cross-check gives the same final speed (v^2 = 64, v = 8 m/s), in correct English."
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
    topic: "Movimiento circular uniforme: velocidad angular y aceleración centrípeta",
    week: 6,
    taskId: "pn-din321-w06-circular-motion",
    taskTitle: "Relate Angular Speed And Centripetal Acceleration",
    scenario: "A point on rotating deck machinery, for example the arm of a radar antenna, moves in a uniform circle. The officer asks the cadet to relate its angular velocity, its linear speed and its centripetal acceleration.",
    instructions: [
      "State the relations: v = omega r; centripetal acceleration a = v^2 / r; and equivalently a = omega^2 r.",
      "For a point at radius r = 3 m turning at angular velocity omega = 2 rad/s, find the linear speed: v = omega r = 2 x 3 = 6 m/s.",
      "Find the centripetal acceleration, showing v^2 as an intermediate step: a = v^2 / r = (6^2) / 3 = 36 / 3 = 12 m/s^2.",
      "Cross-check with a = omega^2 r = (2^2)(3) = 4 x 3 = 12 m/s^2, confirming it matches v^2 / r. Report the results with the working, in clear English."
    ],
    deliverable: "A circular-motion note in English giving the linear speed and centripetal acceleration of the point, with v^2 shown as an intermediate step and the acceleration cross-checked by a = omega^2 r.",
    assessmentCriteria: [
      "The relations v = omega r, a = v^2 / r and a = omega^2 r are stated correctly.",
      "The linear speed is correct (v = 2 x 3 = 6 m/s).",
      "The centripetal acceleration is correct (a = 36 / 3 = 12 m/s^2) with v^2 shown.",
      "The cross-check a = omega^2 r = 12 m/s^2 matches, in correct English."
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
    topic: "Conservación de la energía mecánica (Ep + Ec = constante)",
    week: 7,
    taskId: "pn-din321-w07-energy-conservation",
    taskTitle: "Find Fall Speed By Conservation Of Energy",
    scenario: "A load is being lowered from a crane and, if released, would fall freely. The officer asks the cadet to use conservation of mechanical energy to find the speed after falling a given height.",
    instructions: [
      "State conservation of mechanical energy for the fall: the loss in potential energy equals the gain in kinetic energy, m g h = (1/2) m v^2.",
      "Cancel the mass, which appears on both sides, explicitly, giving v^2 = 2 g h and v = square root(2 g h).",
      "For g = 9.81 m/s^2 and a fall height h = 5.0 m, calculate v = square root(2 x 9.81 x 5.0) = square root(98.1) = 9.90 m/s (v^2 = 98.1 m^2/s^2).",
      "Verify in reverse with a mass m = 200 kg: the kinetic energy (1/2) m v^2 = (1/2)(200)(98.1) = 9810 J equals the potential energy m g h = (200)(9.81)(5.0) = 9810 J. Report the results with the working, in clear English."
    ],
    deliverable: "An energy-conservation note in English giving the fall speed from v = square root(2 g h) with the mass cancelled explicitly, and a reverse check that (1/2) m v^2 equals m g h for a stated mass.",
    assessmentCriteria: [
      "Conservation of energy is stated correctly (m g h = (1/2) m v^2).",
      "The mass is cancelled explicitly to give v = square root(2 g h).",
      "The speed is correct (v = square root(98.1) = 9.90 m/s).",
      "The reverse energy check balances (both 9810 J for m = 200 kg), in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "DIN321",
    subjectName: "Dinámica",
    subjectId: "pn-s3-dinamica",
    unit: "Cinética de Sistemas de Partículas",
    topic: "Conservación de la cantidad de movimiento: colisión plástica",
    week: 8,
    taskId: "pn-din321-w08-momentum-conservation",
    taskTitle: "Apply Momentum Conservation To A Plastic Collision",
    scenario: "Two vessels make contact and momentarily move together, a plastic (perfectly inelastic) collision. As the closing task of the subject, the officer asks the cadet to apply conservation of momentum with correct direction signs.",
    instructions: [
      "State conservation of momentum for a plastic collision: m1 v1 + m2 v2 = (m1 + m2) v', where the two bodies move together after contact.",
      "Take motion to the right as positive and assign signs: vessel 1, m1 = 3000 t at v1 = +4 m/s, and vessel 2 approaching from ahead, m2 = 1000 t at v2 = -4 m/s (opposite direction, so a negative sign).",
      "Compute the total momentum before with signs: m1 v1 + m2 v2 = (3000)(+4) + (1000)(-4) = 12000 - 4000 = 8000 t m/s, then v' = 8000 / (3000 + 1000) = 8000 / 4000 = +2 m/s.",
      "Verify the momentum after equals the momentum before: (m1 + m2) v' = (4000)(2) = 8000 t m/s, equal to the total before, and confirm the result is reasonable (v' = +2 m/s, in the direction of the greater momentum and smaller than the larger initial speed of 4 m/s). Report the results with the working, in clear English."
    ],
    deliverable: "A momentum-conservation note in English giving the common velocity after a plastic collision, with direction signs assigned, the total momentum before and after shown equal, and a reasonableness check on the result.",
    assessmentCriteria: [
      "Conservation of momentum for a plastic collision is stated correctly (m1 v1 + m2 v2 = (m1 + m2) v').",
      "Direction signs are assigned correctly (approaching vessel is negative).",
      "The common velocity is correct (v' = 8000 / 4000 = +2 m/s).",
      "The momentum before and after are shown equal (8000 t m/s) with a reasonableness check, in correct English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
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
    subjectCode: "ING317",
    subjectName: "Inglés Marítimo III",
    subjectId: "pn-s3-ingles-maritimo-iii",
    unit: "Voz pasiva",
    topic: "La voz pasiva en reportes y el cuaderno de bitácora (be + participio pasado)",
    week: 5,
    taskId: "pn-ing317-w05-passive-voice-reports",
    taskTitle: "Write Report Entries In The Passive Voice",
    scenario: "Writing up the logbook and a status report, you must use the passive voice, which is standard in maritime reports because the action or result matters more than who performed it. This builds on the present perfect from unit 1.",
    instructions: [
      "Form the passive as be + past participle, keeping the correct tense in the verb 'be': past simple passive ('the anchor was let go at 0620'), present perfect passive ('the cargo has been secured'), and a passive of expectation ('the vessel is expected to berth at 1400').",
      "Write three logbook or report entries in the passive, one in each of those forms, using real deck events.",
      "Explain when the passive is preferred (when the action or result matters more than who did it).",
      "Keep each entry factual, timed where appropriate, and in correct English."
    ],
    deliverable: "Three report or logbook entries in English written in the passive voice, one past simple, one present perfect and one of expectation, with a note on when the passive is preferred.",
    assessmentCriteria: [
      "Each entry is correctly formed as be + past participle with the right tense in 'be'.",
      "The three forms (was let go / has been secured / is expected to) are each used correctly.",
      "The choice of the passive is correctly justified.",
      "The entries are factual, timed where appropriate, and in correct English."
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
    unit: "Condicionales",
    topic: "Primer y segundo condicional en decisiones operativas y standing orders",
    week: 6,
    taskId: "pn-ing317-w06-conditionals-contingency",
    taskTitle: "Use First And Second Conditionals For Contingencies",
    scenario: "The Master's standing orders and contingency plans are written with conditionals: the first conditional for real, likely situations and the second conditional for hypothetical ones. You must write standing-order statements using both, without mixing them.",
    instructions: [
      "Form the first conditional as 'If + present simple, will + infinitive' for real and likely situations, for example 'If visibility decreases, we will reduce speed.'",
      "Form the second conditional as 'If + past simple, would + infinitive' for hypothetical situations, for example 'If the engine failed, we would anchor.' Never mix the two (do not write 'If it will...').",
      "Write two first conditionals for real contingencies and two second conditionals for hypothetical ones, as standing-order or contingency statements.",
      "Keep each statement operationally sensible and grammatically correct in English."
    ],
    deliverable: "Four contingency statements in English, two first conditionals for real situations and two second conditionals for hypothetical ones, each correctly formed.",
    assessmentCriteria: [
      "The first conditionals use 'If + present simple, will + infinitive' correctly.",
      "The second conditionals use 'If + past simple, would + infinitive' correctly.",
      "The two conditional types are not mixed (no 'If it will...').",
      "The statements are operationally sensible and in correct English."
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
    unit: "Estilo indirecto",
    topic: "Reported speech: retransmitir órdenes e información con backshift de tiempos",
    week: 7,
    taskId: "pn-ing317-w07-reported-speech-relay",
    taskTitle: "Relay Orders And Information In Reported Speech",
    scenario: "At watch handover and when logging VHF traffic received, direct messages must be relayed in reported speech, applying the backshift of tenses and the change of pronouns and time expressions.",
    instructions: [
      "Apply the backshift when reporting: will becomes would, is/are becomes was/were, can becomes could, present simple becomes past simple, and time words change (for example 'tomorrow' becomes 'the next day').",
      "Convert direct speech to reported speech, for example the Master said, 'The pilot will board at 0700', becomes 'The Master said that the pilot would board at 0700.'",
      "Report an order with an appropriate reporting verb, for example VTS said, 'Proceed to the anchorage', becomes 'VTS advised us to proceed to the anchorage.'",
      "Write three reported-speech sentences relaying orders or information received on watch, with correct backshift and pronoun and time changes, in correct English."
    ],
    deliverable: "Three reported-speech sentences in English relaying orders or information received on watch, each with correct backshift and pronoun and time changes.",
    assessmentCriteria: [
      "The backshift of tenses is applied correctly (will to would, is to was, can to could).",
      "Direct speech is correctly converted to reported speech with 'that'.",
      "An order is reported with an appropriate reporting verb (e.g. advised us to).",
      "Pronouns and time expressions are changed correctly, in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "ING317",
    subjectName: "Inglés Marítimo III",
    subjectId: "pn-s3-ingles-maritimo-iii",
    unit: "Comunicación externa integrada",
    topic: "Intercambio completo de arribo: reporte de ETA, VTS y solicitud de práctico (SMCP)",
    week: 8,
    taskId: "pn-ing317-w08-arrival-communication-exchange",
    taskTitle: "Handle A Full Arrival Exchange With VTS And Pilot",
    scenario: "On approach to port, you must handle a complete arrival exchange as the closing task of the subject: report the ETA, communicate with VTS, and request a pilot, integrating the passive, conditionals and reported speech in real maritime English, following SMCP where it applies.",
    instructions: [
      "Report the vessel's ETA to the port using a passive or future form, for example 'the vessel is expected to arrive at the pilot station at 0700.'",
      "Call VTS in a multi-turn exchange, following SMCP where it applies: identify the vessel, give position and intentions, and request permission or instructions.",
      "Request a pilot and include a first conditional for a contingency, for example 'if the pilot cannot board at the pilot station, we will proceed to the anchorage.'",
      "Relay one instruction received from VTS in reported speech, for example 'VTS said that we should reduce speed and stand by on channel 12', and write the whole exchange as a short multi-turn script in correct English."
    ],
    deliverable: "A short multi-turn arrival script in English covering the ETA report, the VTS exchange and the pilot request, integrating the passive, a first conditional and reported speech, following SMCP where it applies.",
    assessmentCriteria: [
      "The ETA is reported using a correct passive or future form.",
      "The VTS exchange is a sensible multi-turn SMCP-style exchange (identity, position, intentions, request).",
      "A first conditional is correctly used for the pilot-boarding contingency.",
      "One VTS instruction is correctly relayed in reported speech, in correct English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
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
    subjectCode: "PMR322",
    subjectName: "Prácticas Marineras III",
    subjectId: "pn-s3-practicas-marineras-iii",
    unit: "Aparejos y maniobras de fuerza",
    topic: "Motones, cuadernales y ventaja mecánica de un aparejo (blocks and tackles)",
    week: 5,
    taskId: "pn-pmr322-w05-blocks-and-tackles",
    taskTitle: "Work Out The Mechanical Advantage Of A Tackle",
    scenario: "The deck party must lift a heavy item with a block and tackle. The bosun asks the cadet to name the gear and work out the mechanical advantage, so the effort needed and the safe use of the tackle are understood.",
    instructions: [
      "Name the parts of the tackle: the blocks (the standing block and the moving block) with their sheaves, and the fall (the rope rove through them).",
      "State that the ideal mechanical advantage equals the number of rope parts that support the moving block, and that friction in the sheaves increases the real effort needed.",
      "For a tackle with 4 parts supporting the load, the mechanical advantage is 4, so a 100 kg load is lifted with an ideal effort of 100 / 4 = 25 kg; verify with effort x mechanical advantage = 25 x 4 = 100 kg.",
      "State one safe-use rule for working with tackles on board (for example do not exceed the safe working load, keep hands clear of the blocks). Report your answer in clear maritime English."
    ],
    deliverable: "A note in English naming the parts of a tackle, stating the mechanical advantage rule, working out the 4-part example (100 kg lifted with 25 kg of effort) with the check, and giving one safe-use rule.",
    assessmentCriteria: [
      "The parts of the tackle (blocks, sheaves, fall) are correctly named.",
      "The mechanical advantage rule is correct (number of parts supporting the moving block), with friction noted.",
      "The calculation is correct (100 / 4 = 25 kg) and verified (25 x 4 = 100 kg).",
      "One sound safe-use rule is given, in correct maritime English."
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
    unit: "Operaciones de remolque",
    topic: "Equipo, conexión y largado seguro; catenaria y zonas de latigazo (snap-back)",
    week: 6,
    taskId: "pn-pmr322-w06-towing-operations",
    taskTitle: "Rig A Tow Safely And Control Snap-Back",
    scenario: "The vessel must rig for a towing operation. The officer asks the cadet to describe the towing gear, the safe connection and release, and above all the deadly snap-back danger on deck.",
    instructions: [
      "Name the towing gear: the tow line (rope or wire), the strengthened bitts or towing bracket, and the shackles that connect them.",
      "Describe the safe connection and the safe release of the tow, and the role of the catenary (the sag in the tow line that absorbs shock loads).",
      "Describe the snap-back danger: a line under tension that parts whips back violently along its line of pull; identify the snap-back zones and state that no one must ever stand in the line of pull or in the bight of the rope.",
      "State one further measure to keep the deck party safe during the tow. Report your answer in clear maritime English."
    ],
    deliverable: "A note in English naming the towing gear, describing safe connection and release with the catenary's role, explaining the snap-back danger and its zones, and giving one further safety measure.",
    assessmentCriteria: [
      "The towing gear (tow line, strengthened bitts, shackles) is correctly named.",
      "Safe connection and release are described, including the catenary's shock-absorbing role.",
      "The snap-back danger is correctly and seriously described, with the rule never to stand in the line of pull or the bight.",
      "One sound further safety measure is given, in correct maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "PMR322",
    subjectName: "Prácticas Marineras III",
    subjectId: "pn-s3-practicas-marineras-iii",
    unit: "Marinería en mal tiempo",
    topic: "Trincado y aseguramiento en cubierta, andariveles (lifelines) y tránsito seguro con mar gruesa",
    week: 7,
    taskId: "pn-pmr322-w07-heavy-weather-seamanship",
    taskTitle: "Prepare The Deck For Heavy Weather",
    scenario: "Heavy weather is forecast. The officer asks the cadet to prepare the deck: lash and secure equipment, rig lifelines, and set out how to move safely once the sea is rough.",
    instructions: [
      "Describe how loose deck equipment and stores are lashed down and secured before the weather arrives.",
      "Explain the rigging and use of lifelines for safe movement across an exposed deck.",
      "State the rules for safe transit on deck in a rough sea (for example one hand for the ship, timing movement with the roll, avoiding the weather side).",
      "List two further actions to prepare the vessel before the storm. Report your answer in clear maritime English."
    ],
    deliverable: "A note in English describing the lashing and securing of deck equipment, the rigging and use of lifelines, the rules for safe transit in a rough sea, and two further pre-storm actions.",
    assessmentCriteria: [
      "The lashing and securing of deck equipment is correctly described.",
      "The rigging and use of lifelines is correct.",
      "The safe-transit rules for a rough sea are sound.",
      "Two further sensible pre-storm actions are given, in correct maritime English."
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
    unit: "Hombre al agua y embarcación de rescate",
    topic: "Acciones inmediatas, maniobra de Williamson a nivel de faena de cubierta y arriado de la embarcación de rescate",
    week: 8,
    taskId: "pn-pmr322-w08-man-overboard-rescue-boat",
    taskTitle: "Act On A Man Overboard And Launch The Rescue Boat",
    scenario: "A man overboard is called on deck. As the closing task of the subject, the officer asks the cadet to set out the immediate deck actions, the deck party's role while the Williamson turn is carried out, and the launching of the rescue boat, all from the deck-work side rather than the bridge manoeuvre.",
    instructions: [
      "State the immediate actions on deck: throw a lifebuoy (with light and smoke) to the casualty, mark the position, and post a dedicated lookout who points continuously at the person in the water.",
      "Explain the deck party's role while the bridge carries out the Williamson turn to bring the vessel back to the casualty, keeping to the deck role and not the bridge manoeuvre itself.",
      "Describe the safe preparation and lowering (launching) of the rescue boat and its crew.",
      "State one consideration for recovering the casualty back on board. Report your answer in clear maritime English."
    ],
    deliverable: "A note in English giving the immediate deck actions for a man overboard, the deck party's role during the Williamson turn, the safe launching of the rescue boat, and one recovery consideration.",
    assessmentCriteria: [
      "The immediate deck actions (lifebuoy, mark position, continuous lookout) are correct.",
      "The deck party's role during the Williamson turn is correct and stays on the deck side.",
      "The safe launching of the rescue boat is correctly described.",
      "One sound recovery consideration is given, in correct maritime English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
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
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "pn-s3-educacion-fisica-iii",
    unit: "Nutrición e hidratación",
    topic: "Alimentación e hidratación para el rendimiento y la resistencia en la guardia",
    week: 5,
    taskId: "pn-c0011iii-w05-nutrition-hydration",
    taskTitle: "Fuel And Hydration For Watch Performance",
    scenario: "A watchkeeper needs steady energy and good hydration to stay sharp through a long watch, especially in heat, sun or on the bridge. The training officer asks the cadet to explain positive nutrition and hydration habits for work on board, as general principles that support the capacity to do the job.",
    instructions: [
      "Explain regular hydration through the watch: drinking water steadily, drinking more in heat, sun or a hot engine space, and that thirst is a late signal.",
      "Explain balanced meals timed around the watch schedule, so that energy is available when on duty and eating something before a long or night watch helps.",
      "Explain steady, sustained energy versus sugar spikes and the slump that follows, favouring balanced meals that release energy slowly.",
      "Explain the effect of coffee and energy drinks near rest periods (caffeine can delay sleep) and using them earlier in the watch rather than close to rest. Keep all advice as general positive habits: do NOT count calories, do NOT set body-weight targets, do NOT recommend restrictive diets, and do NOT label any food as forbidden. Report your answer in clear maritime English."
    ],
    deliverable: "A note in English on positive nutrition and hydration habits for watch performance (regular hydration, meal timing, steady energy versus sugar spikes, caffeine and rest), framed as general principles with no calorie counting, weight targets, restrictive diets or forbidden foods.",
    assessmentCriteria: [
      "Regular hydration through the watch is correctly explained, including drinking more in heat and thirst as a late signal.",
      "Meal timing around the watch and steady energy versus sugar spikes are correctly explained.",
      "The effect of caffeine near rest is correctly explained.",
      "The advice stays as general positive habits, with no calorie counting, weight targets, restrictive diets or forbidden foods, in correct maritime English."
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
    unit: "Deportes de conjunto y cohesión de equipo",
    topic: "El deporte de equipo como entrenamiento de coordinación, comunicación y confianza; juego limpio",
    week: 6,
    taskId: "pn-c0011iii-w06-team-sport-cohesion",
    taskTitle: "Build Team Cohesion Through Sport",
    scenario: "Team sports build the same coordination, communication and trust that a fire party or a deck gang needs. The training officer asks the cadet to connect team sport to teamwork on board and to the character shown in winning and losing.",
    instructions: [
      "Explain how a team sport trains coordination, communication and mutual trust, and how these are the same dynamics as a fire party or a deck working party.",
      "Give one example linking a team-sport situation to a shipboard team task.",
      "Explain fair play and how handling winning and losing well builds character and composure.",
      "State why the cohesion built in sport transfers to safer, smoother teamwork on board. Report your answer in clear maritime English."
    ],
    deliverable: "A note in English connecting team sport to shipboard teamwork: how it trains coordination, communication and trust, an example linked to a ship task, fair play and character, and why cohesion transfers on board.",
    assessmentCriteria: [
      "The link between team sport and coordination, communication and trust is correct.",
      "The example connects a sport situation to a shipboard team task.",
      "Fair play and handling winning and losing are correctly linked to character.",
      "The transfer of cohesion to safer teamwork on board is sound, in correct maritime English."
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
    unit: "Ergonomía de la guardia",
    topic: "Postura estática en guardia, micro-pausas y estiramientos; prevención de lesiones lumbares y de cuello",
    week: 7,
    taskId: "pn-c0011iii-w07-watch-ergonomics",
    taskTitle: "Protect Posture During Long Watches",
    scenario: "Long watches are spent standing on the bridge or sitting at the chart table, and poor static posture strains the lower back and neck. The training officer asks the cadet to set out good working posture and simple relief during the watch.",
    instructions: [
      "Describe good static working posture for a long watch: standing balanced on the bridge and sitting well supported at the chart table, with the back, neck and the chart or screen at good angles.",
      "Explain micro-breaks and simple stretches taken during the watch to relieve the lower back, neck and shoulders without leaving the task.",
      "Explain how good posture and these breaks prevent lower-back and neck strain over long watches.",
      "State the boundary of this topic clearly: this is the body in the WORKING POSTURE, not safe lifting technique (covered in Semester I manual handling) and not sleep physiology (covered in Semester I fatigue and rest). Report your answer in clear maritime English."
    ],
    deliverable: "A note in English on good static working posture for long watches, micro-breaks and stretches, and how they prevent lower-back and neck strain, with the explicit boundary that this is working posture (not lifting technique nor sleep physiology).",
    assessmentCriteria: [
      "Good static working posture for standing and sitting watches is correctly described.",
      "Micro-breaks and simple stretches during the watch are correctly explained.",
      "The link to preventing lower-back and neck strain is sound.",
      "The boundary is stated (working posture, not lifting technique or sleep physiology), in correct maritime English."
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
    unit: "Autoevaluación funcional y plan personal",
    topic: "Pruebas funcionales sencillas, interpretación por capacidad para el trabajo a bordo y plan personal sostenible",
    week: 8,
    taskId: "pn-c0011iii-w08-functional-self-assessment",
    taskTitle: "Assess Your Fitness For Work And Plan Sustainably",
    scenario: "As the closing task of the subject, the cadet must judge their own functional fitness for shipboard work and set a sustainable personal plan. The training officer asks the cadet to use simple functional tests and interpret them by capacity for the work, not by looks or records.",
    instructions: [
      "Choose simple functional tests for endurance, strength and mobility (for example how long a task can be sustained, a basic strength check, and a reach or mobility check) suitable for self-assessment on board.",
      "Interpret the results by the standard of CAPACITY FOR SHIPBOARD WORK, that is whether deck and emergency tasks can be carried out safely, not by appearance, body weight or athletic records.",
      "Build a simple, sustainable personal plan that fits ship life and improves the weaker areas, drawing on the earlier weeks (endurance, coordination, nutrition and hydration, and posture).",
      "State explicitly that the plan sets NO extreme targets: no crash programmes and no extreme goals, only steady, safe, sustainable improvement in the capacity to work. Report your answer in clear maritime English."
    ],
    deliverable: "A note in English giving simple functional tests for endurance, strength and mobility, their interpretation by capacity for shipboard work, and a sustainable personal plan with no extreme targets that draws on the earlier weeks.",
    assessmentCriteria: [
      "The functional tests for endurance, strength and mobility are simple and suitable for self-assessment on board.",
      "The results are interpreted by capacity for shipboard work, not appearance, weight or records.",
      "The personal plan is simple, sustainable and integrates earlier weeks.",
      "The plan explicitly sets no extreme targets, only steady safe improvement, in correct maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
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
    subjectCode: "C0038",
    subjectName: "Técnicas Avanzadas de Lucha Contra Incendio",
    subjectId: "pn-s3-tecnicas-avanzadas-lucha-contra-incendio",
    unit: "Mando y organización del sistema contra incendios",
    topic: "Cuadro de obligaciones (muster list), cadena de mando, punto de reunión y control de entrada (entry control)",
    week: 5,
    taskId: "pn-c0038-w05-command-muster-organisation",
    taskTitle: "Set Up The Command System For A Fire Response",
    scenario: "A fire is reported and, above the individual team, a command system must run the whole response. The officer asks the cadet to set out how the fire response is commanded and organised, the muster list, the chain of command, the assembly point, entry control and brigade communications, rather than naming the team roles, which is already covered.",
    instructions: [
      "Explain how the muster list (station bill) assigns each crew member to a fire-response station and duty, and how the crew musters to it when the alarm sounds.",
      "Set out the chain of command for the response: the on-scene commander leading the attack, reporting to and taking direction from the bridge or fire control (incident command).",
      "Explain the assembly (muster) point and entry control for personnel accountability: logging who enters the fire zone and when, so that no one is ever unaccounted for.",
      "State how the brigade maintains communications between the on-scene commander, the entry control point and the bridge. Report your answer in clear maritime English."
    ],
    deliverable: "A note in English setting out the fire-response command system: the muster list, the chain of command (on-scene commander and bridge), the assembly point and entry control for accountability, and brigade communications.",
    assessmentCriteria: [
      "The muster list (station bill) and mustering are correctly explained.",
      "The chain of command (on-scene commander reporting to bridge / fire control) is correct.",
      "The assembly point and entry control for personnel accountability are correctly explained.",
      "The brigade communications are sound, in correct maritime English."
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
    unit: "Equipo de respiración autónoma y búsqueda en humo",
    topic: "Colocación y chequeos del SCBA, gestión del aire y control de BA, y patrones de búsqueda en humo",
    week: 6,
    taskId: "pn-c0038-w06-scba-smoke-search",
    taskTitle: "Manage Air And Search In Smoke Using SCBA",
    scenario: "A team must enter a smoke-logged space wearing self-contained breathing apparatus (SCBA). The officer asks the cadet to set out the donning and pre-use checks, the air management that keeps the team alive, the BA control board, and the smoke search pattern.",
    instructions: [
      "Describe donning the SCBA and the pre-use checks: cylinder pressure full, mask and face-seal test, the low-pressure warning whistle, and the function of the demand valve.",
      "Explain air management as a life-or-death discipline: note the entry pressure, work out the time to withdraw, and turn back BEFORE the reserve (low-pressure) warning, not after, remembering the way out takes as long as the way in.",
      "Explain the BA control board (entry control): the controller logs each wearer's name, entry time and cylinder pressure and monitors the time to withdraw, so the team is turned around in good time.",
      "Describe the smoke search: keeping one hand on the bulkhead (left-hand or right-hand search), working in pairs, and using a lifeline or guideline for orientation and retreat. Report your answer in clear maritime English."
    ],
    deliverable: "A note in English covering the SCBA donning and pre-use checks, the air-management discipline (turn back before the reserve warning), the BA control board, and the smoke search pattern with lifeline and pairs.",
    assessmentCriteria: [
      "The SCBA donning and pre-use checks are correct.",
      "Air management is correct, including turning back BEFORE the reserve warning and the way-out time.",
      "The BA control board (entry control, air/time monitoring) is correctly explained.",
      "The smoke search (hand on bulkhead, pairs, lifeline) is correct, in correct maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0038",
    subjectName: "Técnicas Avanzadas de Lucha Contra Incendio",
    subjectId: "pn-s3-tecnicas-avanzadas-lucha-contra-incendio",
    unit: "Sistemas fijos de extinción y enfriamiento de límites",
    topic: "CO2 de inundación total y su protocolo de seguridad, espuma y water mist; boundary cooling",
    week: 7,
    taskId: "pn-c0038-w07-fixed-systems-co2-protocol",
    taskTitle: "Operate Fixed Systems And The CO2 Safety Protocol",
    scenario: "The machinery space must be flooded with the fixed CO2 total-flooding system while boundary cooling protects the surrounding structure. Because total-flooding CO2 is lethal to anyone left inside, the officer asks the cadet to state the fixed systems and, above all, the exact CO2 discharge protocol in the correct order.",
    instructions: [
      "Name the main fixed systems and their use: total-flooding CO2 for machinery spaces, foam for oil and flammable-liquid fires, and sprinklers or water mist for accommodation and general spaces.",
      "State the CO2 total-flooding protocol in the correct, non-negotiable order: (1) evacuate the space and COUNT the personnel, confirming no one remains inside; (2) close the space, stopping ventilation and shutting dampers, doors and openings; (3) sound the CO2 discharge alarm; (4) only then release the CO2; (5) do NOT re-open or enter until the space is confirmed cool and has been ventilated and its atmosphere tested.",
      "Explain why the head-count before discharge is critical (total-flooding CO2 is lethal to anyone left inside) and why the space must stay closed until verified (re-opening admits air, which can re-ignite the fire, and the atmosphere is not breathable).",
      "Explain boundary cooling: cooling the bulkheads, decks and boundaries adjacent to the fire space with water to stop the fire spreading by conduction and to protect the surrounding structure. Report your answer in clear maritime English."
    ],
    deliverable: "A note in English naming the fixed systems, stating the CO2 total-flooding protocol in the correct order (evacuate and count, close, alarm, discharge, no premature re-entry), explaining why the head-count and closure are critical, and describing boundary cooling.",
    assessmentCriteria: [
      "The fixed systems (CO2, foam, sprinklers/water mist) and their uses are correct.",
      "The CO2 protocol is in the correct, complete order: evacuate and count personnel, close the space, sound the alarm, discharge, and no re-entry until confirmed cool, ventilated and tested.",
      "The reasons (lethal to anyone inside; closed space prevents re-ignition and is not breathable) are correct.",
      "Boundary cooling of adjacent bulkheads and decks is correctly explained, in correct maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0038",
    subjectName: "Técnicas Avanzadas de Lucha Contra Incendio",
    subjectId: "pn-s3-tecnicas-avanzadas-lucha-contra-incendio",
    unit: "Mando y control del escenario de incendio",
    topic: "Ataque integrado: localizar y evaluar, aislar, atacar, enfriar límites y guardia de reignición (reflash watch)",
    week: 8,
    taskId: "pn-c0038-w08-fire-scene-command",
    taskTitle: "Command An Integrated Attack On A Ship Fire",
    scenario: "As the closing task of the subject, a developed fire must be fought under command. The officer asks the cadet to run the complete integrated attack, locate and assess, isolate, attack, boundary cool, and set the reflash watch, drawing on the command system, SCBA teams and fixed systems from the previous weeks.",
    instructions: [
      "Locate and assess the fire: find its seat and extent, identify what is burning and the risks, and decide the plan under the on-scene commander and bridge command.",
      "Isolate the fire: stop ventilation to the space, isolate electrical power, and shut off fuel and any flammable supplies feeding it.",
      "Attack the fire with SCBA teams under entry control (air discipline as in week 6) and/or the appropriate fixed system (CO2 protocol as in week 7), while boundary cooling the adjacent bulkheads and decks.",
      "Set the reflash (re-ignition) watch as a MANDATORY step: after the fire is out, a watch must remain to monitor the space and its boundaries for re-ignition, and the space is not returned to normal use until confirmed cool and safe. Report your answer in clear maritime English."
    ],
    deliverable: "A note in English running the integrated fire attack under command: locate and assess, isolate (ventilation, electrical, fuel), attack with SCBA teams and/or fixed systems while boundary cooling, and set the mandatory reflash watch.",
    assessmentCriteria: [
      "Locate and assess is correct (seat, extent, risks, plan under command).",
      "Isolation is complete (ventilation, electrical power, fuel/flammable supplies).",
      "The attack correctly integrates SCBA entry control and/or the fixed-system protocol with boundary cooling.",
      "The reflash watch is set as a mandatory step, with the space not returned to use until confirmed safe, in correct maritime English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
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
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0101",
    subjectName: "Redacción Avanzada",
    subjectId: "pn-s3-redaccion-avanzada",
    unit: "El reporte formal de incidente",
    topic: "Reporte de incidente y near-miss: hecho vs opinión, lenguaje objetivo y valor probatorio",
    week: 5,
    taskId: "pn-c0101-w05-objective-incident-report",
    taskTitle: "Write An Objective Incident / Near-Miss Report",
    scenario: "An incident, or a near-miss, must be reported in writing. Because the report may later be read by a maritime tribunal or the insurer, it must record the facts objectively. The officer asks the cadet to write it, keeping strictly to fact and out of opinion.",
    instructions: [
      "Structure the report with the facts in chronological order, recording what happened, when and where, in objective and precise language.",
      "Separate fact from opinion strictly: record observable facts (for example 'the container was found damaged at 0800') and leave out opinion or blame (for example 'the stevedores were careless'), and explain why the opinion must not appear in the report.",
      "Include a near-miss: report an event that caused no damage or injury but could have, so the hazard is on record and can be acted on.",
      "Note that this report is about objectivity, filtering fact from opinion, not about prioritising by importance (which was week 4), and explain why its evidential value before a tribunal or insurer depends on staying factual. Report in clear written English."
    ],
    deliverable: "An incident or near-miss report in English with facts in chronological order, a strict separation of fact from opinion (with the container/stevedores example), and a note on why objectivity gives the report its evidential value.",
    assessmentCriteria: [
      "The facts are recorded in chronological order in objective, precise language.",
      "Fact is strictly separated from opinion, with the correct example (fact 'container found damaged at 0800' kept, opinion 'stevedores were careless' excluded).",
      "A near-miss is correctly reported as an event that could have caused harm.",
      "The evidential value of objectivity (tribunal / insurer) is correctly explained, distinct from week 4's prioritisation, in correct written English."
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
    unit: "Correspondencia comercial marítima",
    topic: "Carta de protesta (Letter of Protest / Note of Protest): cuándo se emite, estructura y registro formal",
    week: 6,
    taskId: "pn-c0101-w06-letter-of-protest",
    taskTitle: "Draft A Letter Of Protest",
    scenario: "A dispute arises, cargo damage, delay, a discrepancy or heavy weather, that the vessel must formally record. The officer asks the cadet to draft a Letter of Protest that states the ship's position firmly but professionally.",
    instructions: [
      "State when a Letter of Protest (or Note of Protest) is issued, for example cargo damage, delays, quantity or quality discrepancies, or heavy weather that may have affected the cargo.",
      "Structure the letter formally: sender, addressee, date, vessel and port, a clear statement of the facts protested, and the formal reservation of the ship's rights.",
      "Keep the tone firm and professional, without hostility or accusation, and use formal register (contrast with the informal register of routine ship-shore messages).",
      "State what the ship keeps for its records and why a timely protest matters. Report in clear written English."
    ],
    deliverable: "A Letter of Protest in English with the correct formal structure, a clear factual statement of what is protested, the reservation of the ship's rights, and a firm professional tone in formal register.",
    assessmentCriteria: [
      "The circumstances for issuing a Letter / Note of Protest are correct.",
      "The formal structure is complete (sender, addressee, date, vessel/port, facts, reservation of rights).",
      "The tone is firm and professional without hostility, in formal register.",
      "The record-keeping and timeliness are correctly explained, in correct written English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0101",
    subjectName: "Redacción Avanzada",
    subjectId: "pn-s3-redaccion-avanzada",
    unit: "Documentación operativa",
    topic: "Standing orders y night orders del capitán: redacción accionable con umbrales concretos",
    week: 7,
    taskId: "pn-c0101-w07-standing-night-orders",
    taskTitle: "Write Actionable Standing And Night Orders",
    scenario: "The Master's standing orders and night orders tell the watchkeeper exactly what to do and when to call. The officer asks the cadet to write orders that will be executed, not interpreted, with concrete thresholds.",
    instructions: [
      "Explain the purpose of standing orders (permanent) and night orders (specific to the night), and that both must be clear, unambiguous and actionable.",
      "Give the contrast between an ambiguous order and an actionable one: 'call me if the weather gets bad' (ambiguous) versus 'call me if the wind exceeds force 6 or visibility falls below 3 NM' (actionable, with concrete thresholds).",
      "Write three 'call me if...' orders, each with a concrete, measurable threshold (for example a CPA, a depth, a distance to a mark, or a traffic situation).",
      "Explain why writing for execution, not interpretation, prevents dangerous delay or hesitation on watch. Report in clear written English."
    ],
    deliverable: "A set of standing and night orders in English, including three 'call me if...' orders each with a concrete measurable threshold, and the ambiguous-versus-actionable contrast, written for execution not interpretation.",
    assessmentCriteria: [
      "The purpose of standing versus night orders is correctly explained.",
      "The ambiguous-versus-actionable contrast is correct ('weather gets bad' versus 'wind exceeds force 6 or visibility below 3 NM').",
      "The three 'call me if...' orders each carry a concrete, measurable threshold.",
      "The reasoning that orders must be executable, not interpreted, is sound, in correct written English."
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
    unit: "El informe ejecutivo",
    topic: "Sintetizar para decidir: resumen ejecutivo primero, jerarquización y recomendaciones accionables",
    week: 8,
    taskId: "pn-c0101-w08-executive-report",
    taskTitle: "Write An Executive Report To Support A Decision",
    scenario: "A complex event, a passage with incidents or an inspection, must be condensed into a short report for the company or authority to act on. As the closing task of the subject, the officer asks the cadet to synthesise it into an executive report.",
    instructions: [
      "Open with an executive summary that comes FIRST and stands on its own: a reader who reads only the summary must grasp what happened, its impact, and what is recommended.",
      "Below the summary, present the essential facts in order of importance, drawing objective facts from the incident record (as in week 5) and any formal correspondence such as a protest (as in week 6).",
      "Give clear, actionable recommendations with concrete steps, in the actionable style of week 7's orders.",
      "Keep the whole report brief and decision-focused, cutting detail that does not help the reader decide. Report in clear written English."
    ],
    deliverable: "An executive report in English opening with a self-contained executive summary, followed by the essential facts by importance and clear actionable recommendations, kept brief and decision-focused.",
    assessmentCriteria: [
      "The executive summary comes first and stands on its own (what happened, impact, recommendation).",
      "The essential facts are ordered by importance and drawn objectively from the record.",
      "The recommendations are clear, actionable and concrete.",
      "The report is brief and decision-focused, cutting non-essential detail, in correct written English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
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
    subjectCode: "ELE316",
    subjectName: "Electricidad III",
    subjectId: "mn-s3-electricidad-iii",
    unit: "Corriente alterna",
    topic: "Generación de la onda senoidal, frecuencia y período, valores pico y eficaz (Vrms = Vp / raiz de 2)",
    week: 5,
    taskId: "mn-ele316-w05-ac-sine-wave-rms",
    taskTitle: "Work Out Frequency, Period And RMS Of An AC Supply",
    scenario: "The ship's alternator produces alternating current as a coil turns in a magnetic field. The engineer asks the cadet to relate the sine wave to frequency and period and to work out the effective (RMS) voltage from the peak, before working with the AC supply.",
    instructions: [
      "Explain how a coil rotating in a magnetic field generates a sinusoidal voltage, linking it to the magnetism and induction of weeks 1 and 2.",
      "State the relationship between frequency and period, T = 1 / f, and for a 60 Hz supply calculate T = 1 / 60 = 0.0167 s = 16.7 ms.",
      "State that the RMS (effective) value is always LESS than the peak, RMS = peak / square root of 2, and for a peak of 311 V calculate Vrms = 311 / 1.414 = 220 V.",
      "Verify by reversing it, peak = RMS x square root of 2 = 220 x 1.414 = 311 V, confirming it returns to the original peak. Report the results with units, in clear engine-room English."
    ],
    deliverable: "An AC calculation in English giving the period from T = 1 / f, the RMS voltage from Vrms = Vp / square root of 2 (with RMS confirmed less than peak), and the reverse check returning the original peak, with units.",
    assessmentCriteria: [
      "The generation of the sine wave from a rotating coil is correctly explained and linked to weeks 1 and 2.",
      "The period is correct (T = 1 / 60 = 16.7 ms).",
      "The RMS voltage is correct (311 / 1.414 = 220 V) and stated as less than the peak.",
      "The reverse check returns the peak (220 x 1.414 = 311 V), with correct units, in clear engine-room English."
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
    unit: "Reactancia e impedancia",
    topic: "Reactancia inductiva y capacitiva e impedancia en serie (Z = raiz de R cuadrado mas XL cuadrado)",
    week: 6,
    taskId: "mn-ele316-w06-reactance-impedance",
    taskTitle: "Calculate Reactance And Series Impedance",
    scenario: "An AC circuit on board contains resistance and inductance. The engineer asks the cadet to work out the inductive reactance and the series impedance, and to note what capacitive reactance is.",
    instructions: [
      "State that inductive reactance is XL = 2 x pi x f x L; calculate 2 x pi x f first as an intermediate step: 2 x 3.1416 x 60 = 377, then for L = 0.106 H, XL = 377 x 0.106 = 40 ohms.",
      "State that capacitive reactance is XC = 1 / (2 x pi x f x C) as a concept, and for C = 100 microfarads, XC = 1 / (377 x 0.0001) = 26.5 ohms.",
      "Calculate the series impedance with Z = square root of (R squared + XL squared); for R = 30 ohms and XL = 40 ohms, Z = square root of (900 + 1600) = square root of 2500 = 50 ohms.",
      "Confirm the result with the 30-40-50 right triangle (30 squared + 40 squared = 2500 = 50 squared). Report the results with units, in clear engine-room English."
    ],
    deliverable: "An AC calculation in English giving the inductive reactance from XL = 2 x pi x f x L (with 2 x pi x f shown), the capacitive reactance as a concept, and the series impedance Z = square root of (R squared + XL squared) confirmed by the 30-40-50 triangle, with units.",
    assessmentCriteria: [
      "The inductive reactance is correct (2 x pi x f = 377 shown, XL = 40 ohms).",
      "The capacitive reactance concept is correct (XC = 1 / (2 x pi x f x C), 26.5 ohms).",
      "The series impedance is correct (square root of (900 + 1600) = 50 ohms).",
      "The 30-40-50 triangle confirms the impedance, with correct units, in clear engine-room English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "ELE316",
    subjectName: "Electricidad III",
    subjectId: "mn-s3-electricidad-iii",
    unit: "Potencia en corriente alterna",
    topic: "El triangulo de potencia (activa, reactiva, aparente) y el factor de potencia de la planta electrica",
    week: 7,
    taskId: "mn-ele316-w07-power-triangle-plant",
    taskTitle: "Analyse The Power Triangle Of The Ship's Plant",
    scenario: "The ship's electrical plant supplies a load at a given power factor. The engineer asks the cadet to work out the apparent, active and reactive powers and to explain what a low power factor costs the plant. This task is about the PLANT and its power triangle, not the input power or efficiency of a single motor (that was covered in Semester I electricity).",
    instructions: [
      "Distinguish the three powers: apparent power S = V x I (in VA), active power P = V x I x power factor (in W), and reactive power Q (in VAR), noting that P is always less than or equal to S. Here P = V x I x power factor is a reference, not the aim of the exercise.",
      "For a plant load at V = 440 V and I = 100 A with power factor 0.8, calculate S = 440 x 100 = 44 kVA and P = 44 x 0.8 = 35.2 kW, and verify P / S = 35.2 / 44 = 0.8 = the power factor.",
      "Close the power triangle with Q = square root of (S squared - P squared) = square root of (44 squared - 35.2 squared) = square root of 696.96 = 26.4 kVAR, and verify with square root of (P squared + Q squared) = square root of (35.2 squared + 26.4 squared) = 44 kVA (the 26.4-35.2-44 triangle, a scaled 3-4-5).",
      "Explain the plant consequence: at power factor 0.8 the 44 kVA generator delivers only 35.2 kW of useful power (8.8 kW of capacity 'wasted'), and the lines still carry the full 100 A; contrast with power factor 1.0, where the same 44 kVA would deliver 44 kW. Report the results with units, in clear engine-room English."
    ],
    deliverable: "A power-triangle analysis in English giving S, P and Q for the plant load, the verification P / S = power factor and the Pythagorean triangle check, and an explanation of the generator capacity and extra current caused by a low power factor, with units.",
    assessmentCriteria: [
      "The three powers are correctly distinguished (S in VA, P in W, Q in VAR, with P less than or equal to S).",
      "S and P are correct (44 kVA and 35.2 kW) with P / S = 0.8 verified as the power factor.",
      "Q closes the triangle (26.4 kVAR) and the Pythagorean check returns 44 kVA (26.4-35.2-44).",
      "The plant consequence is correct (35.2 kW of 44 kVA used, full current, contrast with power factor 1.0), scoped to the plant and not motor efficiency, in clear engine-room English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "ELE316",
    subjectName: "Electricidad III",
    subjectId: "mn-s3-electricidad-iii",
    unit: "El transformador",
    topic: "Principio de induccion mutua, relacion de transformacion (V1/V2 = N1/N2 = I2/I1) y transformadores a bordo",
    week: 8,
    taskId: "mn-ele316-w08-transformer-ratio",
    taskTitle: "Apply The Transformer Ratio On Board",
    scenario: "As the closing task of the subject, a step-down transformer feeds a lighting and instrumentation circuit. The engineer asks the cadet to explain how the transformer works and to apply the turns ratio, closing the arc with the mutual induction of week 2.",
    instructions: [
      "Explain the transformer principle of mutual induction, in which the changing current in the primary induces a voltage in the secondary (linking back to Lenz and induction in week 2).",
      "State the transformation ratio: V1 / V2 = N1 / N2, but the currents are INVERSE, I1 / I2 = N2 / N1, so if the voltage steps down the current steps up.",
      "For a 440 V to 110 V step-down transformer, N1 / N2 = 440 / 110 = 4, so with a primary current I1 = 10 A the secondary current is I2 = 4 x 10 = 40 A.",
      "Verify by power (ideal transformer, no losses): V1 x I1 = 440 x 10 = 4400 VA equals V2 x I2 = 110 x 40 = 4400 VA; then note typical shipboard uses (lighting, instrumentation, isolation). Report the results with units, in clear engine-room English."
    ],
    deliverable: "A transformer note in English explaining mutual induction, applying V1 / V2 = N1 / N2 with the INVERSE current ratio I1 / I2 = N2 / N1, verified by V1 x I1 = V2 x I2, and naming shipboard transformer uses, with units.",
    assessmentCriteria: [
      "The mutual-induction principle is correct and linked to week 2 (Lenz / induction).",
      "The ratio is applied correctly (V1 / V2 = N1 / N2 = 4; currents inverse).",
      "The secondary current is correct (I2 = 4 x 10 = 40 A) and verified by V1 x I1 = V2 x I2 = 4400 VA.",
      "Shipboard transformer uses (lighting, instrumentation, isolation) are given, with correct units, in clear engine-room English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
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
    subjectCode: "TEM319",
    subjectName: "Tecnología de Materiales",
    subjectId: "mn-s3-tecnologia-materiales",
    unit: "Metales no ferrosos",
    topic: "Cobre y sus aleaciones (bronce, laton) y aluminio: propiedades y usos a bordo",
    week: 5,
    taskId: "mn-tem319-w05-non-ferrous-metals",
    taskTitle: "Match Non-Ferrous Metals To Their Shipboard Uses",
    scenario: "The engine room and hull use many non-ferrous metals. The engineer asks the cadet to identify the copper alloys and aluminium by their properties and to say where each is used on board, taking them by their properties and uses rather than by their galvanic behaviour, which was covered in week 3.",
    instructions: [
      "Describe copper and its main alloys, bronze (copper-tin) and brass (copper-zinc), and their key properties (good corrosion resistance in seawater, good bearing and heat-conducting qualities).",
      "Describe aluminium and its characteristics (light, corrosion-resistant through its natural oxide film, lower strength than steel).",
      "Match each metal to where it lives on board: cupronickel or bronze for seawater piping, bronze for bearings, copper-alloy tubes for heat exchangers, and aluminium for light superstructures.",
      "Keep the focus on properties and uses, not galvanic behaviour (covered in week 3). Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English identifying copper alloys (bronze, brass) and aluminium by their properties and matching each to a shipboard use (seawater piping, bearings, heat exchangers, superstructures).",
    assessmentCriteria: [
      "Copper, bronze and brass are correctly described with their key properties.",
      "Aluminium's characteristics are correct (light, oxide-film corrosion resistance, lower strength).",
      "Each metal is matched to a valid shipboard use.",
      "The focus stays on properties and uses, not galvanic behaviour, in clear engine-room English."
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
    unit: "Ensayos de materiales",
    topic: "Ensayo de traccion, curva esfuerzo-deformacion y dureza (esfuerzo sigma = F / A)",
    week: 6,
    taskId: "mn-tem319-w06-tensile-test-stress",
    taskTitle: "Work Out Stress And Read A Material Certificate",
    scenario: "Before fitting a spare, the engineer reads the material's mechanical values off its certificate. The engineer asks the cadet to work out the stress in a loaded bar, judge it against the material's yield strength, and explain what the stress-strain curve and hardness tests tell them.",
    instructions: [
      "State the stress formula, stress = force / area (sigma = F / A), working in newtons and square millimetres so the result comes out directly in MPa (1 N/mm2 = 1 MPa).",
      "For a bar of cross-section A = 200 mm2 under a load F = 50 000 N (50 kN), calculate the stress: sigma = 50 000 / 200 = 250 MPa, and verify by reversing it, F = sigma x A = 250 x 200 = 50 000 N.",
      "Read the stress-strain curve: the elastic region, the yield point (elastic limit), the ultimate tensile strength and fracture; and note Brinell and Rockwell hardness as a concept (they measure resistance to indentation, not a formula).",
      "Judge the result: if the material's yield strength is 355 MPa (a typical structural steel), the 250 MPa stress is within the elastic region, so the part works safely, with a margin of 355 / 250 = 1.42. Report the results with units, in clear engine-room English."
    ],
    deliverable: "A materials-testing note in English giving the stress from sigma = F / A (250 MPa) with the reverse check, the reading of the stress-strain curve and hardness concept, and the verdict that the stress is within the yield strength with its margin.",
    assessmentCriteria: [
      "The stress is correct (50 000 / 200 = 250 MPa), with units handled correctly (N and mm2 giving MPa) and verified by F = sigma x A.",
      "The stress-strain curve is correctly read (elastic region, yield point, ultimate strength, fracture).",
      "Brinell and Rockwell hardness are correctly described as resistance to indentation.",
      "The verdict is coherent (250 MPa within the 355 MPa yield, margin 1.42), in clear engine-room English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "TEM319",
    subjectName: "Tecnología de Materiales",
    subjectId: "mn-s3-tecnologia-materiales",
    unit: "Proteccion contra la corrosion",
    topic: "Recubrimientos, anodos de sacrificio y proteccion catodica por corriente impresa",
    week: 7,
    taskId: "mn-tem319-w07-corrosion-protection",
    taskTitle: "Protect The Ship Against Corrosion",
    scenario: "The ship must be defended against corrosion. Building on the galvanic mechanism from week 3, the engineer asks the cadet to explain the defences: protective coatings, sacrificial anodes and impressed-current protection. Week 3 taught how galvanic corrosion happens; this task is about turning that same principle to the ship's advantage.",
    instructions: [
      "Explain protective coatings: paints and galvanizing (a zinc coating) that separate the metal from the seawater electrolyte.",
      "Explain sacrificial anodes: a block of a MORE ACTIVE, less noble metal (zinc or aluminium) is bonded to the steel so that the anode corrodes FIRST and protects the steel; the more active metal is sacrificed, not the nobler one.",
      "Explain impressed-current cathodic protection as a concept: an external DC source drives a protective current onto the hull so it does not corrode.",
      "State the boundary clearly: week 3 taught the MECHANISM of galvanic corrosion, while this task teaches the DEFENCE, using that same galvanic principle in the ship's favour. Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining corrosion defences (coatings, sacrificial anodes with the more-active metal sacrificed, and impressed-current protection), with the boundary that week 3 was the mechanism and this is the defence.",
    assessmentCriteria: [
      "Protective coatings (paints, galvanizing) are correctly explained as a barrier to the electrolyte.",
      "Sacrificial anodes are correct, with the MORE ACTIVE / less noble metal (zinc, aluminium) corroding first to protect the steel.",
      "Impressed-current cathodic protection is correctly explained as a concept.",
      "The boundary with week 3 (mechanism versus defence) is stated, in clear engine-room English."
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
    unit: "Seleccion de materiales",
    topic: "Criterio integrado de seleccion: resistencia mecanica, resistencia a la corrosion, compatibilidad y costo",
    week: 8,
    taskId: "mn-tem319-w08-material-selection",
    taskTitle: "Select Materials For Three Shipboard Components",
    scenario: "As the closing task of the subject, the engineer asks the cadet to select materials for three components, a seawater pipe, a pump shaft and a bearing, weighing mechanical strength, corrosion resistance, compatibility and cost, drawing on the whole subject.",
    instructions: [
      "State the selection criteria: mechanical strength, corrosion resistance, compatibility (avoiding a bad galvanic pair), and cost.",
      "For a seawater pipe, choose a suitable material (for example cupronickel, a suitable bronze, or coated steel) and justify it by its corrosion resistance in seawater.",
      "For a pump shaft, choose a suitable material (for example a stainless or heat-treated steel) justified by strength and adequate corrosion resistance; and for a bearing, choose a bronze justified by its bearing and wear properties.",
      "Weigh the trade-offs, drawing on properties (week 1), steels (week 2), corrosion (weeks 3 and 7), heat treatment (week 4) and non-ferrous metals (week 5), including compatibility and cost. Report your answer in clear engine-room English."
    ],
    deliverable: "A material-selection note in English choosing a material for a seawater pipe, a pump shaft and a bearing, each justified against strength, corrosion resistance, compatibility and cost, integrating the whole subject.",
    assessmentCriteria: [
      "The selection criteria (strength, corrosion resistance, compatibility, cost) are stated.",
      "The seawater pipe choice is justified mainly by corrosion resistance in seawater.",
      "The pump shaft and bearing choices are justified by strength and by bearing/wear properties respectively.",
      "The trade-offs integrate earlier weeks, including compatibility and cost, in clear engine-room English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
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
    subjectCode: "TAL320",
    subjectName: "Taller II",
    subjectId: "mn-s3-taller-ii",
    unit: "Corte con oxiacetileno",
    topic: "Principio del oxicorte, ajuste de la llama y seguridad del equipo de gas",
    week: 5,
    taskId: "mn-tal320-w05-oxy-cutting",
    taskTitle: "Cut Steel Safely With The Oxy-Acetylene Torch",
    scenario: "The cadet must cut a steel plate with an oxy-acetylene torch. The instructor asks them to explain the cutting principle, the flame settings and the safety of the gas equipment, beyond the general welding protective equipment of week 1.",
    instructions: [
      "Explain the cutting principle: the flame PREHEATS the steel to its ignition temperature, then a jet of oxygen cuts by OXIDISING (burning) the steel, not by melting it with the flame.",
      "Describe the flame settings, neutral, oxidising and carburising, and state which is used (a neutral preheat flame for cutting).",
      "State the gas-equipment safety: cylinders ALWAYS upright and secured (acetylene must NEVER be laid down, because of the acetone inside, nor used above its safe pressure), non-return valves and flashback arrestors on BOTH hoses, and the correct order of opening and closing the valves.",
      "Note the boundary: the general welding protective equipment was week 1; here the focus is the equipment and hazards SPECIFIC to oxy-cutting. Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining oxy-cutting by oxidation of preheated steel (not melting), the flame settings with the one used, and the gas-equipment safety (cylinders upright, acetylene never laid down, flashback arrestors, valve order).",
    assessmentCriteria: [
      "The cutting principle is correct: preheat then cut by OXIDATION of the steel, not melting by the flame.",
      "The flame settings are correct and the neutral preheat flame is identified.",
      "The gas-equipment safety is correct (cylinders upright/secured, acetylene never laid down, flashback arrestors on both hoses, valve order).",
      "The boundary with week 1 (general PPE) is noted, in clear engine-room English."
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
    unit: "Preparación de juntas y posiciones de soldadura",
    topic: "Tipos de junta, preparación del borde (biselado, root gap, root face) y posiciones de soldadura",
    week: 6,
    taskId: "mn-tal320-w06-joint-preparation-positions",
    taskTitle: "Prepare A Joint And Choose The Welding Position",
    scenario: "Before welding, the joint must be prepared correctly. The instructor asks the cadet to explain the joint types, the edge preparation and the welding positions and their relative difficulty.",
    instructions: [
      "Name the main joint types: the butt joint, the tee (T) joint and the lap joint.",
      "Explain edge preparation: bevelling the edge, the root gap and the root face, and why the preparation determines the penetration of the weld.",
      "Name the welding positions, flat, horizontal, vertical and overhead, and rank their relative difficulty (flat easiest, overhead hardest).",
      "Explain why the joint preparation and the position both affect the quality of the weld. Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English naming the joint types, explaining edge preparation (bevel, root gap, root face) and its link to penetration, and naming the welding positions ranked by difficulty.",
    assessmentCriteria: [
      "The joint types (butt, tee, lap) are correctly named.",
      "Edge preparation (bevel, root gap, root face) is correct and linked to penetration.",
      "The welding positions are named and ranked (flat easiest, overhead hardest).",
      "The effect of preparation and position on weld quality is sound, in clear engine-room English."
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
    unit: "Trabajo en caliente a bordo",
    topic: "Permiso de trabajo en caliente, preparación del área y fire watch antes, durante y después",
    week: 7,
    taskId: "mn-tal320-w07-hot-work-permit",
    taskTitle: "Follow The Hot Work Permit Procedure",
    scenario: "Any hot work on board, welding or cutting, must follow a strict permit procedure. As a critical-safety task, the instructor asks the cadet to set out the hot-work procedure in the correct, non-negotiable order, because hot-work fires often start hours after the work is done.",
    instructions: [
      "State that a HOT WORK PERMIT must be issued BEFORE work starts: what it assesses and who authorises it (a responsible officer, never the welder themselves).",
      "Prepare the area: remove or protect combustibles, and check the ADJACENT spaces, because heat passes through bulkheads and decks so the other side must be prepared too, and ensure a gas-free atmosphere where required.",
      "Keep a fire watch present DURING the whole job, with an extinguisher ready to hand.",
      "Continue the fire watch AFTER the work finishes (at least the 30 to 60 minutes set by the procedure), because hot-work fires can start hours later from residual heat and hidden embers, and close the permit only after this after-watch; the after-watch is NOT optional. Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English setting out the hot-work procedure in the correct order: permit issued and authorised before work, area and adjacent-space preparation, fire watch during, and the mandatory after-watch before the permit is closed.",
    assessmentCriteria: [
      "The permit is issued and authorised BEFORE work by a responsible officer, not the welder.",
      "The area preparation includes combustibles AND the adjacent spaces (heat through bulkheads/decks), with gas-free atmosphere where required.",
      "A fire watch is present during the work with an extinguisher ready.",
      "The after-watch is stated as mandatory (30 to 60 minutes) before closing the permit, in clear engine-room English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "TAL320",
    subjectName: "Taller II",
    subjectId: "mn-s3-taller-ii",
    unit: "Inspección de la soldadura terminada",
    topic: "Inspección visual, END (líquidos penetrantes) y criterio aceptar, rechazar o reparar",
    week: 8,
    taskId: "mn-tal320-w08-weld-inspection",
    taskTitle: "Inspect A Finished Weld And Decide",
    scenario: "As the closing task of the subject, a finished weld must be inspected and judged. The instructor asks the cadet to inspect the completed weld visually, note a non-destructive test, and apply the accept, reject or repair decision, building on the defect knowledge of week 4.",
    instructions: [
      "Carry out a visual inspection of the finished weld: the bead profile (convexity or concavity), undercut, spatter, surface cracks and any visible lack of penetration.",
      "Explain a non-destructive test as a concept: dye penetrant testing reveals surface cracks that are not visible to the naked eye.",
      "Apply the accept, reject or repair criterion and state who decides (a qualified inspector or responsible officer).",
      "State the boundary: week 4 taught what defects exist and how to prevent them WHILE welding, whereas this task INSPECTS the finished work and decides. Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English inspecting a finished weld visually (profile, undercut, spatter, cracks, penetration), explaining dye penetrant testing as a concept, and applying the accept/reject/repair decision with who decides.",
    assessmentCriteria: [
      "The visual inspection covers the bead profile, undercut, spatter, surface cracks and visible penetration.",
      "Dye penetrant testing is correctly explained as revealing surface cracks not visible to the eye.",
      "The accept/reject/repair criterion is applied and the decision-maker identified.",
      "The boundary with week 4 (prevention while welding versus inspection of finished work) is stated, in clear engine-room English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
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
    subjectCode: "GEA317",
    subjectName: "Geometría Analítica",
    subjectId: "mn-s3-geometria-analitica",
    unit: "Segmento rectilíneo",
    topic: "Punto medio y division de un segmento en el plano del taller",
    week: 5,
    taskId: "mn-gea317-w05-bedplate-midpoint",
    taskTitle: "Find A Bedplate Midpoint And Divide A Support Span",
    scenario: "On the workshop layout plane, positions are given as (x, y) coordinates. The instructor asks the cadet to find the midpoint of a machine bedplate and a point that divides a pipe-support span in a given ratio, using coordinate geometry.",
    instructions: [
      "State the midpoint formula M = ((x1 + x2) / 2, (y1 + y2) / 2).",
      "For the bedplate ends A = (1, 2) and B = (7, 10), calculate the midpoint: M = ((1 + 7) / 2, (2 + 10) / 2) = (4, 6).",
      "Verify M is equidistant from both ends: distance A to M = square root((4 - 1)^2 + (6 - 2)^2) = square root(9 + 16) = 5, and distance M to B = square root((7 - 4)^2 + (10 - 6)^2) = square root(9 + 16) = 5, confirming they are equal.",
      "Using the section formula, find the point P dividing the support span C = (1, 1) to D = (10, 7) in the ratio 2:1 from C: P = ((2 x 10 + 1 x 1) / 3, (2 x 7 + 1 x 1) / 3) = (7, 5). Report the results with the working, in clear engine-room English."
    ],
    deliverable: "A coordinate-geometry note in English giving the bedplate midpoint with its equidistance check, and the point dividing the support span C-D in the ratio 2:1, with the working shown.",
    assessmentCriteria: [
      "The midpoint formula is applied correctly (M = (4, 6)).",
      "The equidistance check is correct (both distances = 5).",
      "The section-formula point is correct (P = (7, 5) for the ratio 2:1).",
      "The working is clear and in correct engine-room English."
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
    topic: "Ecuacion de la recta e interseccion de dos recorridos de tuberia",
    week: 6,
    taskId: "mn-gea317-w06-pipe-run-intersection",
    taskTitle: "Find Where Two Pipe Runs Cross",
    scenario: "Two pipe runs are drawn as straight lines on the workshop layout plane. The instructor asks the cadet to write the equation of each run and find where they cross by solving the system, using coordinate geometry.",
    instructions: [
      "Write pipe run A through the point (1, -2) with slope 3 using point-slope form: y - (-2) = 3(x - 1), giving y = 3x - 5.",
      "Write pipe run B through the point (7, 4) with slope -1: y - 4 = -1(x - 7), giving y = -x + 11.",
      "Find the crossing point by setting the two equal: 3x - 5 = -x + 11, so 4x = 16, x = 4, and y = 3(4) - 5 = 7, giving the point (4, 7).",
      "Verify that (4, 7) satisfies BOTH equations: run A gives 3(4) - 5 = 7, and run B gives -(4) + 11 = 7. Report the equations and the crossing point with the working, in clear engine-room English."
    ],
    deliverable: "A coordinate-geometry note in English giving the equations of the two pipe runs, their crossing point, and the check that the point satisfies both equations, with the working shown.",
    assessmentCriteria: [
      "Pipe run A is correctly written from point-slope form (y = 3x - 5).",
      "Pipe run B is correctly written (y = -x + 11).",
      "The crossing point is correctly found (x = 4, y = 7).",
      "The point is verified in BOTH equations, in correct engine-room English."
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
    topic: "Rectas paralelas y perpendiculares y distancia de un equipo a una recta de referencia",
    week: 7,
    taskId: "mn-gea317-w07-equipment-clearance-distance",
    taskTitle: "Measure Clearance From Equipment To A Reference Line",
    scenario: "A reference line, the axis of a pipe, is drawn on the workshop plane. The instructor asks the cadet to give lines parallel and perpendicular to it and to find the shortest distance from a fixed piece of equipment to the line, using coordinate geometry.",
    instructions: [
      "For the reference line L: 5x + 12y - 26 = 0, find its slope m1 = -A / B = -5/12.",
      "State that a parallel line has the same slope (m1 = m2 = -5/12), and that a perpendicular line has slope m2 = 12/5; show the product m1 x m2 = (-5/12)(12/5) = -1, which confirms perpendicularity.",
      "Find the shortest distance from the equipment at P = (8, 1) to L with d = |A x x0 + B x y0 + C| / square root(A^2 + B^2), keeping the absolute value and the sign of C = -26.",
      "Calculate d = |5(8) + 12(1) - 26| / square root(5^2 + 12^2) = |40 + 12 - 26| / square root(169) = 26 / 13 = 2. Report the slopes and the distance with the working, in clear engine-room English."
    ],
    deliverable: "A coordinate-geometry note in English giving the parallel and perpendicular slopes with the product check, and the shortest distance from the equipment to the reference line (using the 5-12-13 triangle), with the working shown.",
    assessmentCriteria: [
      "The slope of L is correct (m1 = -5/12).",
      "The parallel and perpendicular slopes are correct, with the product m1 x m2 = -1 shown for perpendicularity.",
      "The distance formula is applied with the absolute value and the correct sign of C.",
      "The distance is correct (d = 26 / 13 = 2), in correct engine-room English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "GEA317",
    subjectName: "Geometría Analítica",
    subjectId: "mn-s3-geometria-analitica",
    unit: "Circunferencia",
    topic: "Posicion de un punto respecto a la circunferencia: circulo de barrido de una pieza rotativa",
    week: 8,
    taskId: "mn-gea317-w08-rotating-part-sweep",
    taskTitle: "Test A Point Against A Rotating Part's Sweep Circle",
    scenario: "The sweep circle of a rotating machine part is drawn on the workshop plane. As the closing task of the subject, the instructor asks the cadet to convert the circle's forms and decide whether given points lie inside, on, or outside the sweep circle, using coordinate geometry.",
    instructions: [
      "For a sweep circle with centre (2, 3) and radius 5, write the centre-radius form (x - 2)^2 + (y - 3)^2 = 25 and expand it to the general form x^2 + y^2 - 4x - 6y - 12 = 0.",
      "Recover the centre and radius from the general form by completing the square: (x^2 - 4x + 4) + (y^2 - 6y + 9) = 12 + 4 + 9, giving (x - 2)^2 + (y - 3)^2 = 25, so the centre is (-D/2, -E/2) = (2, 3) and the radius is square root((D/2)^2 + (E/2)^2 - F) = square root(4 + 9 + 12) = 5 (watch the sign: F = -12, so minus F is plus 12).",
      "Decide the position of each point by comparing its distance to the centre with the radius: Q1 = (5, 7) gives square root((5-2)^2 + (7-3)^2) = square root(25) = 5 = radius, so ON the circle; Q2 = (2, 6) gives square root(0 + 9) = 3 < 5, so INSIDE; Q3 = (8, 3) gives square root(36 + 0) = 6 > 5, so OUTSIDE.",
      "State each verdict with both numbers (distance and radius) shown. Report the forms and the verdicts with the working, in clear engine-room English."
    ],
    deliverable: "A coordinate-geometry note in English giving the centre-radius and general forms of the sweep circle, the recovery of centre and radius by completing the square (with F = -12), and the inside/on/outside verdict for the three points with distances shown.",
    assessmentCriteria: [
      "The centre-radius form is expanded correctly to the general form (x^2 + y^2 - 4x - 6y - 12 = 0).",
      "The centre (2, 3) and radius 5 are recovered by completing the square, with the sign of F handled correctly.",
      "Each point is correctly classified (Q1 ON = 5, Q2 INSIDE = 3, Q3 OUTSIDE = 6) with distance compared to radius.",
      "Both numbers are shown for each verdict, in correct engine-room English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
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
    subjectCode: "DIN318",
    subjectName: "Dinámica",
    subjectId: "mn-s3-dinamica",
    unit: "Cinemática de Partículas y Cuerpos Rígidos",
    topic: "Movimiento uniformemente acelerado: ecuaciones cinematicas en la linea de propulsion",
    week: 5,
    taskId: "mn-din318-w05-drive-line-coastdown",
    taskTitle: "Apply The Kinematic Equations To A Drive-Line Coast-Down",
    scenario: "When power is cut, the propulsion drive line decelerates uniformly towards rest. The engineer asks the cadet to apply the three equations of uniformly accelerated motion to find the speed and distance, and to cross-check the final speed by two independent equations.",
    instructions: [
      "State the three kinematic equations: v = v0 + a t; d = v0 t + (1/2) a t^2; and v^2 = v0^2 + 2 a d.",
      "For an initial speed v0 = 15 m/s and a uniform deceleration a = -1 m/s^2 over t = 5 s, find the final speed: v = 15 + (-1)(5) = 15 - 5 = 10 m/s.",
      "Find the distance run, writing the (1/2) a t^2 term separately: d = v0 t + (1/2) a t^2 = (15)(5) + (1/2)(-1)(5^2) = 75 + (-12.5) = 62.5 m.",
      "Cross-check the final speed with the third equation: v^2 = v0^2 + 2 a d = 15^2 + 2(-1)(62.5) = 225 - 125 = 100, so v = 10 m/s, matching the second step. Report the results with units, in clear engine-room English."
    ],
    deliverable: "A kinematics note in English giving the final speed and coast-down distance from the equations of uniformly accelerated motion, with the (1/2) a t^2 term shown and the final speed cross-checked by v^2 = v0^2 + 2 a d.",
    assessmentCriteria: [
      "The three kinematic equations are stated correctly.",
      "The final speed is correct (v = 15 - 5 = 10 m/s).",
      "The distance is correct (d = 75 - 12.5 = 62.5 m) with the (1/2) a t^2 term shown separately.",
      "The cross-check gives the same final speed (v^2 = 100, v = 10 m/s), in correct engine-room English."
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
    topic: "Movimiento circular uniforme: velocidad angular y aceleracion centripeta en la periferia del volante",
    week: 6,
    taskId: "mn-din318-w06-flywheel-rim-acceleration",
    taskTitle: "Relate A Flywheel Rim's Speed And Acceleration",
    scenario: "A point on the rim of a flywheel moves in a uniform circle. The engineer asks the cadet to relate the flywheel's angular velocity to the rim point's linear speed and centripetal acceleration.",
    instructions: [
      "State the relations: v = omega r; centripetal acceleration a = v^2 / r; and equivalently a = omega^2 r.",
      "For a rim point at radius r = 0.5 m turning at angular velocity omega = 10 rad/s, find the linear speed: v = omega r = 10 x 0.5 = 5 m/s.",
      "Find the centripetal acceleration, showing v^2 as an intermediate step: a = v^2 / r = (5^2) / 0.5 = 25 / 0.5 = 50 m/s^2.",
      "Cross-check with a = omega^2 r = (10^2)(0.5) = 100 x 0.5 = 50 m/s^2, confirming it matches v^2 / r. Report the results with units, in clear engine-room English."
    ],
    deliverable: "A circular-motion note in English giving the rim point's linear speed and centripetal acceleration, with v^2 shown as an intermediate step and the acceleration cross-checked by a = omega^2 r.",
    assessmentCriteria: [
      "The relations v = omega r, a = v^2 / r and a = omega^2 r are stated correctly.",
      "The linear speed is correct (v = 10 x 0.5 = 5 m/s).",
      "The centripetal acceleration is correct (a = 25 / 0.5 = 50 m/s^2) with v^2 shown.",
      "The cross-check a = omega^2 r = 50 m/s^2 matches, in correct engine-room English."
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
    topic: "Conservacion de la energia mecanica: carga del polipasto del taller (v = raiz de 2 g h)",
    week: 7,
    taskId: "mn-din318-w07-hoist-load-fall-speed",
    taskTitle: "Find Hoist Load Fall Speed By Conservation Of Energy",
    scenario: "A load is being lowered from the workshop hoist and, if it were released, would fall freely. The engineer asks the cadet to use conservation of mechanical energy to find the speed after falling a given height.",
    instructions: [
      "State conservation of mechanical energy for the fall: the loss in potential energy equals the gain in kinetic energy, m g h = (1/2) m v^2.",
      "Cancel the mass, which appears on both sides, explicitly, giving v^2 = 2 g h and v = square root(2 g h).",
      "For g = 9.81 m/s^2 and a fall height h = 3.2 m, calculate v = square root(2 x 9.81 x 3.2) = square root(62.784) = 7.92 m/s (v^2 = 62.784 m^2/s^2).",
      "Verify in reverse with a mass m = 150 kg: the kinetic energy (1/2) m v^2 = (1/2)(150)(62.784) = 4708.8 J equals the potential energy m g h = (150)(9.81)(3.2) = 4708.8 J. Report the results with units, in clear engine-room English."
    ],
    deliverable: "An energy-conservation note in English giving the fall speed from v = square root(2 g h) with the mass cancelled explicitly, and a reverse check that (1/2) m v^2 equals m g h for a stated mass.",
    assessmentCriteria: [
      "Conservation of energy is stated correctly (m g h = (1/2) m v^2).",
      "The mass is cancelled explicitly to give v = square root(2 g h).",
      "The speed is correct (v = square root(62.784) = 7.92 m/s).",
      "The reverse energy check balances (both 4708.8 J for m = 150 kg), in correct engine-room English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "DIN318",
    subjectName: "Dinámica",
    subjectId: "mn-s3-dinamica",
    unit: "Cinética de Sistemas de Partículas",
    topic: "Conservacion de la cantidad de movimiento: enganche de carros de taller (colision plastica)",
    week: 8,
    taskId: "mn-din318-w08-trolley-coupling",
    taskTitle: "Apply Momentum Conservation To Coupling Trolleys",
    scenario: "A moving workshop trolley couples onto a stationary one and they move off together, a plastic (perfectly inelastic) collision. As the closing task of the subject, the engineer asks the cadet to apply conservation of momentum with correct direction signs.",
    instructions: [
      "State conservation of momentum for a plastic collision: m1 v1 + m2 v2 = (m1 + m2) v', where the two bodies move together after coupling.",
      "Take the direction of motion as positive: trolley 1, m1 = 1200 kg at v1 = +5 m/s, and the stationary trolley 2, m2 = 800 kg at v2 = 0.",
      "Compute the total momentum before: m1 v1 + m2 v2 = (1200)(5) + (800)(0) = 6000 kg m/s, then v' = 6000 / (1200 + 800) = 6000 / 2000 = +3 m/s.",
      "Verify the momentum after equals the momentum before: (m1 + m2) v' = (2000)(3) = 6000 kg m/s, equal to the total before, and confirm the result is reasonable (v' = +3 m/s lies between the two initial speeds, 0 and 5 m/s). Report the results with units, in clear engine-room English."
    ],
    deliverable: "A momentum-conservation note in English giving the common velocity after the trolleys couple, with direction signs, the total momentum before and after shown equal, and a reasonableness check on the result.",
    assessmentCriteria: [
      "Conservation of momentum for a plastic collision is stated correctly (m1 v1 + m2 v2 = (m1 + m2) v').",
      "The signs are assigned correctly (the stationary trolley contributes zero momentum).",
      "The common velocity is correct (v' = 6000 / 2000 = +3 m/s).",
      "The momentum before and after are shown equal (6000 kg m/s) with a reasonableness check (0 < 3 < 5), in correct engine-room English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
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
    subjectCode: "ING315",
    subjectName: "Inglés Marítimo III",
    subjectId: "mn-s3-ingles-maritimo-iii",
    unit: "Voz pasiva",
    topic: "La voz pasiva en el engine log y los reportes de mantenimiento de maquinas",
    week: 5,
    taskId: "mn-ing315-w05-passive-engine-log",
    taskTitle: "Write Engine Log Entries In The Passive Voice",
    scenario: "Writing up the engine log and a maintenance report, you must use the passive voice, which is standard in engine-room reports because the work done or the result matters more than who performed it. This builds on the present perfect from unit 1.",
    instructions: [
      "Form the passive as be + past participle, keeping the correct tense in the verb 'be': past simple passive ('the injector was overhauled at 0300'), present perfect passive ('the purifier has been cleaned'), and a passive of expectation ('the main engine is expected to be ready by 0600').",
      "Write three engine log or maintenance report entries in the passive, one in each of those forms, using real engine-room events.",
      "Explain when the passive is preferred (when the work or result matters more than who did it).",
      "Keep each entry factual, timed where appropriate, and in correct engine-room English."
    ],
    deliverable: "Three engine log or maintenance entries in English written in the passive voice, one past simple, one present perfect and one of expectation, with a note on when the passive is preferred.",
    assessmentCriteria: [
      "Each entry is correctly formed as be + past participle with the right tense in 'be'.",
      "The three forms (was overhauled / has been cleaned / is expected to be) are each used correctly.",
      "The choice of the passive is correctly justified.",
      "The entries are factual, timed where appropriate, and in correct engine-room English."
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
    unit: "Condicionales",
    topic: "Primer y segundo condicional en las standing orders del jefe de maquinas",
    week: 6,
    taskId: "mn-ing315-w06-conditionals-plant",
    taskTitle: "Use Conditionals For Engine Standing Orders",
    scenario: "The Chief Engineer's standing orders and contingency plans are written with conditionals: the first conditional for real, likely situations and the second conditional for hypothetical ones. You must write standing-order statements for the plant using both, without mixing them.",
    instructions: [
      "Form the first conditional as 'If + present simple, will + infinitive' for real and likely situations, for example 'If the lube oil pressure drops below 2 bar, the engine will shut down automatically.'",
      "Form the second conditional as 'If + past simple, would + infinitive' for hypothetical situations, for example 'If the main generator failed, we would start the standby unit.' Never mix the two (do not write 'If it will...').",
      "Write two first conditionals with concrete engine thresholds (a pressure or a temperature) and two second conditionals for hypothetical plant failures, as standing-order statements.",
      "Keep each statement operationally sensible and grammatically correct in English."
    ],
    deliverable: "Four plant standing-order statements in English, two first conditionals with concrete engine thresholds and two second conditionals for hypothetical failures, each correctly formed.",
    assessmentCriteria: [
      "The first conditionals use 'If + present simple, will + infinitive' correctly, with concrete engine thresholds.",
      "The second conditionals use 'If + past simple, would + infinitive' correctly.",
      "The two conditional types are not mixed (no 'If it will...').",
      "The statements are operationally sensible and in correct engine-room English."
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
    unit: "Estilo indirecto",
    topic: "Reported speech en el relevo de guardia de maquinas con backshift de tiempos",
    week: 7,
    taskId: "mn-ing315-w07-reported-speech-handover",
    taskTitle: "Relay Engine Watch Messages In Reported Speech",
    scenario: "At engine watch handover and when logging messages received from the bridge, direct messages must be relayed in reported speech, applying the backshift of tenses and the change of pronouns and time expressions.",
    instructions: [
      "Apply the backshift when reporting: will becomes would, is/are becomes was/were, can becomes could, present simple becomes past simple, and time words change (for example 'tonight' becomes 'that night').",
      "Convert direct speech to reported speech, for example the Chief said, 'The purifier will need attention tonight', becomes 'The Chief said that the purifier would need attention that night.'",
      "Report an order received from the bridge with an appropriate reporting verb, for example the bridge said, 'Stand by the engine', becomes 'The bridge requested us to stand by the engine.'",
      "Write three reported-speech sentences relaying orders or information received on the engine watch, with correct backshift and pronoun and time changes, in correct English."
    ],
    deliverable: "Three reported-speech sentences in English relaying orders or information received on the engine watch, each with correct backshift and pronoun and time changes.",
    assessmentCriteria: [
      "The backshift of tenses is applied correctly (will to would, is to was, can to could).",
      "Direct speech is correctly converted to reported speech with 'that'.",
      "An order from the bridge is reported with an appropriate reporting verb (e.g. requested us to).",
      "Pronouns and time expressions are changed correctly (e.g. tonight to that night), in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "ING315",
    subjectName: "Inglés Marítimo III",
    subjectId: "mn-s3-ingles-maritimo-iii",
    unit: "Comunicacion integrada maquinas-puente",
    topic: "Intercambio interno completo: estado de la planta, stand-by y respuesta a ordenes del telegrafo",
    week: 8,
    taskId: "mn-ing315-w08-engine-bridge-exchange",
    taskTitle: "Handle A Full Engine-To-Bridge Exchange",
    scenario: "On preparing for manoeuvring, you must handle a complete internal exchange between the engine room and the bridge as the closing task of the subject: report the plant status, prepare the engine for stand-by, and confirm and respond to telegraph orders, integrating the passive, conditionals and reported speech. Unlike the external arrival exchange, this one is internal, engine to bridge.",
    instructions: [
      "Report the plant status to the bridge using a passive or future form, for example 'the main engine has been warmed through and is expected to be ready for stand-by by 0545.'",
      "Prepare the engine for stand-by and include a first conditional for a contingency, for example 'if the control air pressure falls below 25 bar, we will start the second air compressor.'",
      "Relay one instruction received from the bridge in reported speech, for example 'the bridge said that they would ring stand-by at 0545.'",
      "Confirm and respond to the telegraph orders by repeating each order back (for example acknowledge 'Stand By Engines', then repeat back 'Half Ahead'), and write the whole exchange as a short multi-turn engine-to-bridge script; this builds on the standard engine orders of week 3 but now integrates the passive, conditionals and reported speech. Report in clear engine-room English."
    ],
    deliverable: "A short multi-turn engine-to-bridge script in English covering the plant status report, the stand-by preparation and the telegraph-order responses, integrating the passive, a first conditional and reported speech.",
    assessmentCriteria: [
      "The plant status is reported using a correct passive or future form.",
      "A first conditional with a concrete engine threshold is correctly used for the contingency.",
      "One instruction from the bridge is correctly relayed in reported speech.",
      "The telegraph orders are correctly acknowledged and repeated back in a sensible multi-turn script, in correct engine-room English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
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
    subjectCode: "PMR321",
    subjectName: "Prácticas Marineras III",
    subjectId: "mn-s3-practicas-marineras-iii",
    unit: "Aparejos y maniobras de fuerza",
    topic: "Motones, cuadernales y ventaja mecanica para izar piezas de maquinas",
    week: 5,
    taskId: "mn-pmr321-w05-engine-room-lifting-tackle",
    taskTitle: "Lift An Engine Part With A Block And Tackle",
    scenario: "A heavy engine part, a cylinder head, must be lifted with a block and tackle from the engine-room derrick. The engineer asks the cadet to name the gear and work out the mechanical advantage, so the effort needed and the safe use of the tackle are understood.",
    instructions: [
      "Name the parts of the tackle: the blocks (the standing block and the moving block) with their sheaves, and the fall (the rope rove through them).",
      "State that the ideal mechanical advantage equals the number of rope parts that support the moving block, and that friction in the sheaves increases the real effort needed.",
      "For a tackle with 5 parts supporting the load, the mechanical advantage is 5, so a 150 kg cylinder head is lifted with an ideal effort of 150 / 5 = 30 kg; verify with effort x mechanical advantage = 30 x 5 = 150 kg.",
      "State one safe-use rule for working with tackles in the engine room (for example do not exceed the safe working load, keep hands clear of the blocks, and never let the load pass over personnel). Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English naming the parts of a tackle, stating the mechanical advantage rule, working out the 5-part example (150 kg lifted with 30 kg of effort) with the check, and giving one safe-use rule.",
    assessmentCriteria: [
      "The parts of the tackle (blocks, sheaves, fall) are correctly named.",
      "The mechanical advantage rule is correct (number of parts supporting the moving block), with friction noted.",
      "The calculation is correct (150 / 5 = 30 kg) and verified (30 x 5 = 150 kg).",
      "One sound safe-use rule is given (SWL, hands clear, load never over personnel), in correct engine-room English."
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
    unit: "Operaciones de remolque",
    topic: "Equipo, catenaria y zonas de latigazo (snap-back); disponibilidad de maquina en el remolque",
    week: 6,
    taskId: "mn-pmr321-w06-towing-engine-role",
    taskTitle: "Support A Tow From The Engine Room And Control Snap-Back",
    scenario: "The ship rigs for a towing operation and the engine room must support it. The engineer asks the cadet to describe the towing gear and its physics, the machinery's part in the tow, and above all the deadly snap-back danger that threatens the whole crew.",
    instructions: [
      "Name the towing gear and its physics: the tow line (rope or wire), the strengthened bitts and the shackles, and the catenary (the sag in the tow line that absorbs shock loads).",
      "Explain the engine room's part in the tow: keeping the main engine ready and on continuous availability, responding to sudden demands for power, and having the steering gear operational.",
      "Describe the snap-back danger with full seriousness: a line under tension that parts whips back violently along its line of pull; identify the snap-back zones and state that no one must ever stand in the line of pull or in the bight of the rope, a danger that also applies to engine staff who come on deck.",
      "State one further measure to keep everyone safe during the tow. Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English naming the towing gear and catenary, explaining the engine room's part (engine ready, power on demand, steering operational), and describing the snap-back danger and its zones for the whole crew.",
    assessmentCriteria: [
      "The towing gear and the catenary's shock-absorbing role are correct.",
      "The engine room's part (continuous availability, response to power demands, steering) is correct.",
      "The snap-back danger is correctly and seriously described, with the rule never to stand in the line of pull or the bight, applying to engine staff on deck too.",
      "One sound further safety measure is given, in correct engine-room English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "PMR321",
    subjectName: "Prácticas Marineras III",
    subjectId: "mn-s3-practicas-marineras-iii",
    unit: "Marinería en mal tiempo",
    topic: "Trincado en la sala de maquinas, transito seguro y preparacion de la planta antes del temporal",
    week: 7,
    taskId: "mn-pmr321-w07-engine-room-heavy-weather",
    taskTitle: "Prepare The Engine Room For Heavy Weather",
    scenario: "Heavy weather is forecast. The engineer asks the cadet to prepare the engine room: secure everything inside the machinery space, move safely once the ship is rolling hard, and ready the plant before the storm. This complements, and does not repeat, the securing of the deck.",
    instructions: [
      "Describe how loose items inside the machinery space are lashed and secured: spares, tools, chain blocks and lifting chains, and manhole and inspection covers.",
      "State the rules for safe transit through the engine room in a heavy roll: one hand for the ship on the ladders and the plate floors, and watching footing on oily or wet gratings.",
      "Explain how the plant is readied before the storm: auxiliaries ready and running as needed, the bilge and pumping systems checked, and tanks and soundings verified.",
      "State one further precaution specific to the engine room before heavy weather. Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English covering the securing of items inside the machinery space, safe transit in a heavy roll, and readying the plant (auxiliaries, bilge systems, tanks and soundings) before the storm.",
    assessmentCriteria: [
      "The securing of engine-room items (spares, tools, chain blocks, covers) is correctly described.",
      "The safe-transit rules for the machinery space in a heavy roll are sound.",
      "The plant preparation (auxiliaries, bilge systems, tanks and soundings) is correct.",
      "One further engine-room precaution is given, complementing the deck, in correct engine-room English."
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
    unit: "Hombre al agua y embarcación de rescate",
    topic: "Acciones inmediatas, respuesta de maquinas al Williamson y embarcacion de rescate lista para arriar",
    week: 8,
    taskId: "mn-pmr321-w08-man-overboard-engine-response",
    taskTitle: "Support A Man-Overboard Recovery From The Engine Room",
    scenario: "A man overboard is called and the engine room must support the recovery. As the closing task of the subject, the engineer asks the cadet to set out the immediate all-crew actions and, above all, the engine department's part during the manoeuvre and in readying the rescue boat.",
    instructions: [
      "State the immediate actions that any crew member takes: throw a lifebuoy (with light and smoke) to the casualty, mark the position, and post a dedicated lookout who points continuously at the person in the water.",
      "Explain the engine department's part during the recovery: the bridge carries out the Williamson turn, and the engine room responds immediately to the changes of engine régime it calls for (astern, stop, stand-by), keeping the engine ready for rapid manoeuvring.",
      "Describe the engine department's support in readying the rescue boat for lowering (launching), without repeating the engine start and maintenance covered in week 1.",
      "State one recovery consideration for getting the casualty back on board. Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English giving the immediate all-crew actions for a man overboard, the engine department's part during the Williamson turn (rapid response to régime changes), the support in readying the rescue boat for launching, and one recovery consideration.",
    assessmentCriteria: [
      "The immediate actions (lifebuoy, mark position, continuous lookout) are correct.",
      "The engine department's rapid response to the régime changes of the Williamson turn is correct.",
      "The support in readying the rescue boat for launching is correct, without repeating the week 1 engine start/maintenance.",
      "One sound recovery consideration is given, in correct engine-room English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
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
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "mn-s3-educacion-fisica-iii",
    unit: "Nutrición e hidratación",
    topic: "Alimentacion e hidratacion para el trabajo en el espacio de maquinas (ambiente caluroso)",
    week: 5,
    taskId: "mn-c0011iii-w05-engine-room-hydration",
    taskTitle: "Fuel And Hydration For Hot Engine-Room Work",
    scenario: "The engine room is a hot space, and a watchkeeper there loses fluid through continuous sweating in an enclosed, hot environment next to the engines and boilers. The training officer asks the cadet to explain positive nutrition and hydration habits for engine-room work, as general principles that support the capacity to do the job.",
    instructions: [
      "Explain hydration for the hot machinery space: because sweating is continuous in an enclosed, hot environment, drink water steadily and start before thirst appears, which is a late signal.",
      "Explain balanced meals timed around the watch schedule so energy is available on duty, and why eating something before a long or night engine watch helps.",
      "Explain steady, sustained energy versus sugar spikes and the slump that follows, favouring balanced meals that release energy slowly.",
      "Explain that coffee and energy drinks are best taken earlier in the watch, not close to rest, since caffeine can delay sleep. Give only general, positive habits: never count calories, never track body weight, never cut out food groups, and never brand any food as off-limits. Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on positive nutrition and hydration habits for the hot engine room (steady hydration against continuous sweating, meal timing, sustained energy versus sugar spikes, caffeine and rest), given as general principles with no calorie counting, body-weight figures, restrictive dieting or banned foods.",
    assessmentCriteria: [
      "Hydration for the hot, enclosed machinery space is correctly explained (continuous sweating, drink before thirst).",
      "Meal timing around the watch and steady energy versus sugar spikes are correct.",
      "The effect of caffeine near rest is correctly explained.",
      "The guidance stays general and positive, with no calorie counting, body-weight figures, restrictive dieting or banned foods, in correct engine-room English."
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
    unit: "Deportes de conjunto y cohesión de equipo",
    topic: "El deporte de equipo y su transferencia al equipo de guardia y la cuadrilla de maquinas",
    week: 6,
    taskId: "mn-c0011iii-w06-team-sport-engine-crew",
    taskTitle: "Build Engine-Crew Cohesion Through Sport",
    scenario: "Team sports build the same coordination, communication and trust that an engine watch team and a maintenance gang need. The training officer asks the cadet to connect team sport to teamwork in the machinery space and to the character shown in winning and losing.",
    instructions: [
      "Explain how a team sport trains coordination, communication and mutual trust, and how these are the same dynamics as an engine watch team or a maintenance gang.",
      "Give one example linking a team-sport situation to a machinery-space team task, such as communicating in a noisy space or trusting a partner on a joint job.",
      "Explain fair play and how handling winning and losing well builds character and composure.",
      "State why the cohesion built in sport transfers to safer, smoother teamwork in the engine room. Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English connecting team sport to engine-room teamwork: how it trains coordination, communication and trust, an example linked to a machinery-space task, fair play and character, and why cohesion transfers below.",
    assessmentCriteria: [
      "The link between team sport and coordination, communication and trust is correct.",
      "The example connects a sport situation to a machinery-space team task (noisy space, trusting a partner).",
      "Fair play and handling winning and losing are correctly linked to character.",
      "The transfer of cohesion to safer engine-room teamwork is sound, in correct engine-room English."
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
    unit: "Ergonomía del trabajo de máquinas",
    topic: "Posturas del trabajo de mantenimiento, espacios confinados y escalas verticales; micro-pausas",
    week: 7,
    taskId: "mn-c0011iii-w07-engine-work-ergonomics",
    taskTitle: "Protect Posture During Engine-Room Work",
    scenario: "Engine-room work is done in awkward postures: bending into bilges, holding forced positions during maintenance, working in cramped confined spaces and climbing vertical ladders. The training officer asks the cadet to set out good working posture and simple relief between tasks, marking the boundary with earlier physical-education topics.",
    instructions: [
      "Describe good working posture for physical engine-room tasks: keeping the back supported when bending into bilges, changing forced postures often during maintenance, and moving carefully in confined spaces and on vertical ladders.",
      "Explain micro-breaks and simple stretches taken between tasks to relieve the lower back, knees and neck.",
      "Explain how good posture and these breaks prevent lower-back, knee and neck strain over a working day.",
      "State the double boundary clearly: this is the body in the WORKING POSTURES of engine-room tasks, not the safe lifting technique of manual handling (Semester I) and not sleep physiology (Semester I fatigue and rest). Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on good working posture for engine-room tasks (bilges, forced maintenance postures, confined spaces, vertical ladders), micro-breaks and stretches, and how they prevent lower-back, knee and neck strain, with the explicit double boundary (not lifting technique, not sleep physiology).",
    assessmentCriteria: [
      "Good working posture for physical engine-room tasks (bilges, forced postures, confined spaces, ladders) is correct.",
      "Micro-breaks and stretches between tasks are correctly explained.",
      "The link to preventing lower-back, knee and neck strain is sound.",
      "The double boundary is stated (working posture, not lifting technique nor sleep physiology), in correct engine-room English."
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
    unit: "Autoevaluación funcional y plan personal",
    topic: "Pruebas funcionales e interpretacion por capacidad para el trabajo de maquinas",
    week: 8,
    taskId: "mn-c0011iii-w08-fitness-for-engine-work",
    taskTitle: "Assess Your Fitness For Engine-Room Work",
    scenario: "As the closing task of the subject, the cadet must judge their own functional fitness for engine-room work and set a sustainable personal plan. The training officer asks the cadet to use simple functional tests and interpret them by capacity for the work, not by looks or records.",
    instructions: [
      "Choose simple functional tests for endurance, strength and mobility (for example how long a task can be sustained, a basic strength check, and a reach or mobility check) suitable for self-assessment on board.",
      "Interpret the results by the standard of CAPACITY FOR ENGINE-ROOM WORK, tolerating the heat with good hydration, climbing ladders and carrying out maintenance tasks safely, not by appearance, body weight or athletic records.",
      "Build a simple, sustainable personal plan that fits ship life and improves the weaker areas, drawing on the earlier weeks (endurance, coordination, nutrition and hydration, and working posture).",
      "State plainly that the plan aims only at steady, safe, sustainable gains in the capacity to work, and never at a crash programme, an extreme goal, a target weight or an appearance standard. Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English giving simple functional tests for endurance, strength and mobility, their interpretation by capacity for engine-room work (heat tolerance, ladders, maintenance), and a sustainable personal plan that rules out crash programmes, extreme goals, weight targets and appearance standards.",
    assessmentCriteria: [
      "The functional tests for endurance, strength and mobility are simple and suitable for self-assessment on board.",
      "The results are interpreted by capacity for engine-room work (heat tolerance, ladders, maintenance), not appearance, weight or records.",
      "The personal plan is simple, sustainable and integrates earlier weeks.",
      "The plan explicitly rules out crash programmes, extreme goals, weight targets and appearance standards, aiming only at sustainable work capacity, in correct engine-room English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
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
    subjectCode: "C0038",
    subjectName: "Técnicas Avanzadas de Lucha Contra Incendio",
    subjectId: "mn-s3-tecnicas-avanzadas-lucha-contra-incendio",
    unit: "Mando y organización del sistema contra incendios",
    topic: "Muster list, cadena de mando y el rol del control de maquinas en la emergencia",
    week: 5,
    taskId: "mn-c0038-w05-engine-brigade-command",
    taskTitle: "Command The Response To An Engine-Room Fire",
    scenario: "An engine-room fire is reported and, above the individual team, a command system must run the whole response. The engineer asks the cadet to set out the command and organisation from the engine department's side: the muster list, the chain of command, entry control and the machinery control's part in keeping essential services running, rather than naming the team roles, which is already covered.",
    instructions: [
      "Explain how the muster list (station bill) sends the crew to their fire stations when the alarm sounds, and how the engine department musters to it.",
      "Set out the chain of command: the on-scene commander leads the attack and reports to and takes direction from the bridge or fire control.",
      "Explain the machinery control's specific part: who keeps the essential services running during the emergency (the fire pumps and the emergency generator), and the communications between the engine room, the fire scene and the bridge.",
      "Explain the assembly point and entry control for personnel accountability, without naming the team roles again (covered in week 2). Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English setting out the engine-room fire command system: the muster list, the chain of command, the machinery control's part in essential services (fire pumps, emergency generator), the assembly point and entry control, and the engine-scene-bridge communications.",
    assessmentCriteria: [
      "The muster list and the engine department's mustering are correctly explained.",
      "The chain of command (on-scene commander reporting to bridge / fire control) is correct.",
      "The machinery control's part in keeping essential services running is correct, with the engine-scene-bridge communications.",
      "The assembly point and entry control are explained without re-naming the team roles, in correct engine-room English."
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
    unit: "Equipo de respiración autónoma y búsqueda en el espacio de máquinas",
    topic: "SCBA, disciplina de aire con el agravante del calor y busqueda adaptada al espacio de maquinas",
    week: 6,
    taskId: "mn-c0038-w06-scba-machinery-space-search",
    taskTitle: "Manage Air And Search The Machinery Space With SCBA",
    scenario: "A team must enter the smoke-logged machinery space wearing self-contained breathing apparatus (SCBA). The engineer asks the cadet to set out the donning and pre-use checks, the air management that keeps the team alive in the heat, the BA control board, and how the search adapts to the engine-room layout.",
    instructions: [
      "Describe donning the SCBA and the pre-use checks: cylinder pressure full, mask and face-seal test, the low-pressure warning whistle, and the demand valve.",
      "Explain air management as a life-or-death discipline: note the entry pressure and work out the time to withdraw, and start back BEFORE the low-pressure reserve alarm, never after, because the way out takes as long as the way in; note too that the extreme heat of the machinery space burns air faster, so the safety margin is even shorter.",
      "Explain the BA control board: the controller logs each wearer's name, entry time and cylinder pressure and monitors the time to withdraw, so the team is turned round in good time.",
      "Explain how the search adapts to the machinery-space layout, plate floors, vertical ladders and multiple levels, always working in pairs with a lifeline. Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English covering the SCBA donning and pre-use checks, the air-management discipline (start back before the reserve alarm, with the heat shortening the margin), the BA control board, and the search adapted to the machinery-space layout with pairs and a lifeline.",
    assessmentCriteria: [
      "The SCBA donning and pre-use checks are correct.",
      "Air management is correct, including starting back BEFORE the reserve alarm and the heat burning air faster.",
      "The BA control board (entry control, air/time monitoring) is correctly explained.",
      "The search adapts to the machinery-space layout, with pairs and a lifeline, in correct engine-room English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "C0038",
    subjectName: "Técnicas Avanzadas de Lucha Contra Incendio",
    subjectId: "mn-s3-tecnicas-avanzadas-lucha-contra-incendio",
    unit: "Sistemas fijos de extinción",
    topic: "CO2 de inundacion total del espacio de maquinas: protocolo de seguridad y pasos que ejecuta maquinas",
    week: 7,
    taskId: "mn-c0038-w07-co2-total-flooding-protocol",
    taskTitle: "Follow The CO2 Total-Flooding Protocol In The Engine Room",
    scenario: "The machinery space itself is the space protected by the fixed CO2 total-flooding system, so anyone working there lives inside the space that would be flooded. Because total-flooding CO2 is lethal to anyone left inside, the engineer asks the cadet to state the exact CO2 discharge protocol in the correct order and the engine-room steps that go with it.",
    instructions: [
      "State the CO2 total-flooding protocol in the correct, non-negotiable order: (1) get everyone out of the machinery space and take a head count, making sure no one is left below; (2) seal the space by stopping the ventilation and closing the dampers, doors and openings; (3) sound the CO2 release alarm; (4) discharge the CO2 only after those steps are complete; (5) keep the space shut and do not enter until it is confirmed cold, ventilated and its atmosphere has been tested.",
      "Describe the engine-room steps that go with the sequence: stop the machinery-space ventilation fans and, as covered in week 4, shut the fuel quick-closing valves and stop the transfer and purifier pumps to isolate the fuel; this task references that isolation rather than re-teaching it.",
      "Explain why the head count before discharge is a matter of life and death, since total-flooding CO2 is lethal to anyone left in the space.",
      "Explain why premature re-entry kills: the atmosphere is not breathable, and re-opening lets air back in that can re-ignite the fire, so the space stays shut until it is confirmed cold, ventilated and tested. Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English stating the CO2 total-flooding protocol in the correct order (get everyone out and count, seal, alarm, discharge, no premature re-entry), with the engine-room steps referencing the week 4 fuel isolation, and why the head count and the closed space are matters of life and death.",
    assessmentCriteria: [
      "The CO2 protocol is in the correct, complete order: get everyone out and head-count, seal the space, sound the alarm, discharge, and no re-entry until confirmed cold, ventilated and tested.",
      "The engine-room steps (stop vent fans; reference the week 4 fuel quick-closing valves and pump stops) are correct without re-teaching the week 4 isolation.",
      "The head count before discharge is correctly explained as life or death.",
      "Premature re-entry is correctly explained as lethal (unbreathable atmosphere) and a re-ignition risk, in correct engine-room English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "C0038",
    subjectName: "Técnicas Avanzadas de Lucha Contra Incendio",
    subjectId: "mn-s3-tecnicas-avanzadas-lucha-contra-incendio",
    unit: "Mando y control del escenario de incendio",
    topic: "Ataque integrado a un incendio de maquinas y guardia de reignicion (reflash watch)",
    week: 8,
    taskId: "mn-c0038-w08-engine-fire-integrated-attack",
    taskTitle: "Command An Integrated Attack On An Engine-Room Fire",
    scenario: "As the closing task of the subject, a developed engine-room fire must be fought under command. The engineer asks the cadet to run the complete integrated attack, locate and assess, isolate, attack, boundary cool, and set the reflash watch, drawing on the command system, SCBA teams and fixed systems from the previous weeks.",
    instructions: [
      "Locate and assess the engine-room fire: find its seat and extent and identify the plant risks (fuel, hot surfaces, electrical).",
      "Isolate the fire: stop the ventilation, isolate the electrical power, and shut off the fuel, referencing the fuel and electrical control of week 4.",
      "Attack the fire with SCBA teams under entry control (the air discipline of week 6) and/or the fixed CO2 system with its protocol (week 7), while boundary cooling the adjacent bulkheads and decks.",
      "Set the re-ignition (reflash) watch as a MANDATORY step: after the fire is out, a watch stays on the space and its boundaries, and the machinery space is not brought back into normal service until it is confirmed cold and safe. Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English running the integrated engine-room fire attack under command: locate and assess, isolate (ventilation, electrical, fuel), attack with SCBA teams and/or the CO2 system while boundary cooling, and set the mandatory reflash watch.",
    assessmentCriteria: [
      "Locate and assess is correct (seat, extent, plant risks).",
      "Isolation is complete (ventilation, electrical, fuel) referencing week 4.",
      "The attack correctly integrates SCBA entry control (week 6) and/or the CO2 protocol (week 7) with boundary cooling.",
      "The reflash watch is set as a mandatory step, with the space not returned to service until confirmed cold and safe, in correct engine-room English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
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
    career: "MN",
    semester: "Semester III",
    subjectCode: "C0101",
    subjectName: "Redacción Avanzada",
    subjectId: "mn-s3-redaccion-avanzada",
    unit: "El reporte formal de falla",
    topic: "Reporte objetivo de falla de maquinaria: hecho vs opinion, near-miss y valor probatorio",
    week: 5,
    taskId: "mn-c0101-w05-objective-fault-report",
    taskTitle: "Write An Objective Machinery Fault Report",
    scenario: "A machinery fault, or a near-miss, must be reported in writing. Because the report may later be read by the classification society or the insurer, it must record the facts objectively. The engineer asks the cadet to write it, keeping strictly to fact and out of opinion.",
    instructions: [
      "Structure the report with the facts in chronological order, recording what happened, when and where, in objective and precise language.",
      "Separate fact from opinion strictly: record observable facts (for example 'the bearing temperature reached 95 degrees C at 0230') and leave out opinion or blame (for example 'the manufacturer's bearings are poor quality'), and explain why the opinion must not appear in the report.",
      "Include a near-miss: report a machinery event that caused no damage or injury but could have, so the hazard is on record and can be acted on.",
      "Note that this report is about objectivity, filtering fact from opinion, not about prioritising by importance (which was week 4), and explain why its evidential value before the classification society or insurer depends on staying factual. Report in clear engine-room English."
    ],
    deliverable: "A machinery fault or near-miss report in English with facts in chronological order, a strict separation of fact from opinion (with the bearing-temperature/manufacturer example), and a note on why objectivity gives the report its evidential value.",
    assessmentCriteria: [
      "The facts are recorded in chronological order in objective, precise language.",
      "Fact is strictly separated from opinion, with the correct example (fact 'bearing temperature reached 95 degrees C at 0230' kept, opinion 'manufacturer's bearings are poor quality' excluded).",
      "A near-miss is correctly reported as a machinery event that could have caused harm.",
      "The evidential value of objectivity (classification society / insurer) is correctly explained, distinct from week 4's prioritisation, in correct engine-room English."
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
    unit: "Correspondencia técnica",
    topic: "Reporte al superintendente tecnico y requisicion formal de repuestos",
    week: 6,
    taskId: "mn-c0101-w06-technical-correspondence",
    taskTitle: "Write A Technical Report And Spare-Parts Requisition",
    scenario: "The engine department must correspond formally with the office ashore. The engineer asks the cadet to write a formal report to the technical superintendent and a formal spare-parts requisition, in the correct formal register. Unlike a commercial letter of protest, this is the engine department's technical correspondence with the office.",
    instructions: [
      "Write a formal report to the technical superintendent giving the plant status, the breakdown and a recommendation, structured formally (sender, addressee, date, vessel, subject, the facts, and the recommendation).",
      "Write a formal spare-parts requisition with its technical justification: the part identification (name and part number), the reason it is needed, and the urgency.",
      "Keep the tone professional and use formal register, contrasting it with the informal register of routine ship-to-office messages.",
      "Explain why a clear, well-justified requisition gets the right part to the ship faster. Report in clear engine-room English."
    ],
    deliverable: "A formal report to the technical superintendent (plant status, breakdown, recommendation) and a formal spare-parts requisition (part identification, reason, urgency) in English, both in professional formal register.",
    assessmentCriteria: [
      "The report to the superintendent is correctly structured (sender, addressee, date, vessel, subject, facts, recommendation).",
      "The requisition gives the part identification, the reason and the urgency with a technical justification.",
      "The tone is professional and in formal register, contrasted with routine messages.",
      "The value of a clear, justified requisition is correctly explained, in correct engine-room English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "C0101",
    subjectName: "Redacción Avanzada",
    subjectId: "mn-s3-redaccion-avanzada",
    unit: "Documentación operativa",
    topic: "Standing orders y night orders del jefe de maquinas: redaccion accionable con umbrales medibles",
    week: 7,
    taskId: "mn-c0101-w07-chief-engineer-orders",
    taskTitle: "Write Actionable Chief Engineer's Orders",
    scenario: "The Chief Engineer's standing orders and night orders tell the duty engineer exactly what to do and when to call. The engineer asks the cadet to write orders that will be executed, not interpreted, with concrete measurable thresholds.",
    instructions: [
      "Explain the purpose of standing orders (permanent) and night orders (specific to the night), and that both must be clear, unambiguous and actionable.",
      "Give the contrast between an ambiguous order and an actionable one: 'call me if something looks wrong with the engine' (ambiguous) versus 'call me if the main engine exhaust temperature on any unit exceeds 420 degrees C, or if the lube oil pressure falls below 2.5 bar' (actionable, with concrete thresholds).",
      "Write three 'call me if...' orders, each with a concrete, measurable engine threshold (a temperature, a pressure, a level or a consumption).",
      "Explain why writing for execution, not interpretation, prevents dangerous delay or hesitation in the engine room. Report in clear engine-room English."
    ],
    deliverable: "A set of Chief Engineer's standing and night orders in English, including three 'call me if...' orders each with a concrete measurable engine threshold, and the ambiguous-versus-actionable contrast, written for execution not interpretation.",
    assessmentCriteria: [
      "The purpose of standing versus night orders is correctly explained.",
      "The ambiguous-versus-actionable contrast is correct ('something looks wrong' versus 'exhaust temperature exceeds 420 degrees C or lube oil pressure below 2.5 bar').",
      "The three 'call me if...' orders each carry a concrete, measurable engine threshold.",
      "The reasoning that orders must be executable, not interpreted, is sound, in correct engine-room English."
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
    unit: "El informe ejecutivo",
    topic: "Informe ejecutivo tecnico: resumen primero, hechos por importancia y recomendaciones accionables",
    week: 8,
    taskId: "mn-c0101-w08-technical-executive-report",
    taskTitle: "Write A Technical Executive Report",
    scenario: "A complex breakdown or a maintenance period must be condensed into a short report for the company to act on. As the closing task of the subject, the engineer asks the cadet to synthesise it into a technical executive report.",
    instructions: [
      "Open with an executive summary that comes FIRST and stands on its own: a reader who reads only the summary must grasp what happened, its operational impact, and what is recommended.",
      "Below the summary, present the essential facts in order of importance, drawing objective facts from the fault record (as in week 5).",
      "Give clear, actionable recommendations with concrete steps, in the actionable style of week 7's orders.",
      "Keep the whole report brief and decision-focused, cutting detail that does not help the reader decide. Report in clear engine-room English."
    ],
    deliverable: "A technical executive report in English opening with a self-contained executive summary, followed by the essential facts by importance and clear actionable recommendations, kept brief and decision-focused.",
    assessmentCriteria: [
      "The executive summary comes first and stands on its own (what happened, operational impact, recommendation).",
      "The essential facts are ordered by importance and drawn objectively from the fault record.",
      "The recommendations are clear, actionable and concrete.",
      "The report is brief and decision-focused, cutting non-essential detail, in correct engine-room English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
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
    subjectCode: "MET532",
    subjectName: "Meteorología II",
    subjectId: "pn-s5-meteorologia-ii",
    unit: "Previsión a bordo",
    topic: "El barómetro y la tendencia bárica como herramienta predictiva del oficial",
    week: 5,
    taskId: "pn-met532-w05-barometric-tendency",
    taskTitle: "Read The Barometer And Its Three-Hour Tendency",
    scenario: "The officer asks the cadet to read the aneroid barometer and use its three-hour tendency to forecast the weather, following on from the depression of week 1, which the barometer detects before the sky shows it.",
    instructions: [
      "State how the aneroid barometer is read and its corrections as a concept: the instrument is read in hectopascals (hPa) and, for a true comparison, the reading is corrected for the height of the instrument above the waterline (a higher instrument reads lower), so that successive readings are compared on the same basis.",
      "Define the three-hour tendency as the officer's predictive tool: tendency = later reading minus earlier reading, so a falling (negative) pressure means the weather is deteriorating and a low is approaching, while a rising (positive) pressure means it is improving.",
      "Work the example: at 0900 the barometer reads 1012.0 hPa and at 1200 it reads 1007.5 hPa, so the tendency = 1007.5 - 1012.0 = -4.5 hPa in three hours; the negative sign confirms the pressure is falling. Interpret it with the classic guide thresholds: about 1-2 hPa/3h is a gradual change, about 3-5 hPa/3h (as here) a marked deterioration approaching, and more than 5-6 hPa/3h a severe gale warning.",
      "Connect to week 1: the passing depression is read on the barometer before it is seen in the sky, so a marked fall warns the bridge to prepare early. Report the tendency with its sign and your forecast in clear maritime English."
    ],
    deliverable: "A note in English reading the barometer (corrected for instrument height as a concept) and computing the three-hour tendency (1007.5 - 1012.0 = -4.5 hPa/3h, falling), interpreted against the guide thresholds as a marked deterioration and linked to the week 1 depression.",
    assessmentCriteria: [
      "The barometer reading and the instrument-height correction concept are correctly explained.",
      "The tendency is computed with the correct sign (1007.5 - 1012.0 = -4.5 hPa/3h, negative = falling).",
      "The interpretation is correct (a 4-5 hPa/3h fall is a marked deterioration on the guide thresholds).",
      "The link to the week 1 depression and the predictive value are correct, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "MET532",
    subjectName: "Meteorología II",
    subjectId: "pn-s5-meteorologia-ii",
    unit: "El viento",
    topic: "Viento real y viento aparente: el triángulo de vientos y la escala Beaufort",
    week: 6,
    taskId: "pn-met532-w06-true-apparent-wind",
    taskTitle: "Find The True Wind From The Apparent Wind",
    scenario: "The anemometer on the bridge measures the apparent wind. The officer asks the cadet to explain the wind triangle and recover the true wind, and to read the sea in Beaufort terms.",
    instructions: [
      "State the wind triangle: a moving vessel creates its own wind equal and opposite to its velocity, so the anemometer measures the apparent wind = the vector sum of the true wind and the vessel's wind; the true wind is recovered by subtracting the vessel's velocity vector from the apparent wind.",
      "Work the clean head-on case: the vessel steams due north at 10 knots and the true wind is from the north (on the bow) at 15 knots; the vectors are colinear, so the apparent wind = 15 + 10 = 25 knots from the north (ahead).",
      "Work the following case: the true wind is now from the south (astern) at 15 knots, so the apparent wind = 15 - 10 = 5 knots from the south; note the sense-check: with a head wind the apparent is always greater than the true (25 > 15), and with a following wind it is always less (5 < 15).",
      "Describe the beam-wind case qualitatively only: with the true wind on the beam the apparent wind draws forward toward the bow relative to the true, without solving the oblique triangle numerically. Anchor the strength to the Beaufort scale as the common language of wind and sea (for example Force 4, about 11-16 knots, a moderate breeze; Force 8, about 34-40 knots, a gale). Report the true and apparent winds in clear maritime English."
    ],
    deliverable: "A note in English explaining the wind triangle and recovering the true wind: the head-on case (apparent = 15 + 10 = 25 knots), the following case (apparent = 15 - 10 = 5 knots), the sense-check (head wind greater, following wind less), the beam case qualitatively, and two Beaufort anchors.",
    assessmentCriteria: [
      "The wind triangle is correctly stated (apparent = true + vessel's wind; true recovered by subtracting the vessel's vector).",
      "The head-on case is correct (15 + 10 = 25 knots) and the following case is correct (15 - 10 = 5 knots).",
      "The sense-check is correct (head wind: apparent greater; following wind: apparent less) and the beam case is described qualitatively.",
      "The Beaufort anchors are correct (e.g. F4 ~11-16 kn, F8 ~34-40 kn), in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "MET532",
    subjectName: "Meteorología II",
    subjectId: "pn-s5-meteorologia-ii",
    unit: "Visibilidad",
    topic: "Niebla y visibilidad reducida: advección, radiación y el punto de rocío como predictor",
    week: 7,
    taskId: "pn-met532-w07-fog-reduced-visibility",
    taskTitle: "Forecast Fog And Reduced Visibility",
    scenario: "Conditions are turning misty. The officer asks the cadet to identify the type of fog forming, to forecast it from the dew point, and to state the meteorological watchkeeping actions for reduced visibility.",
    instructions: [
      "Explain advection fog: it forms when warm, moist air flows over a colder sea, cooling the air to saturation; it is the classic sea fog, persistent, can extend over large areas and can arrive even with a working breeze.",
      "Explain radiation fog: it forms by nocturnal cooling of the land, is coastal and typical of early morning in calm conditions, and burns off as the sun heats the ground; it matters near the coast rather than in the open sea.",
      "Use the dew point as the predictor: when the air temperature falls close to the dew point over cold water, saturation is near and fog is imminent, so a narrowing air-to-dew-point spread is the warning to watch.",
      "State the officer's meteorological-operational actions for reduced visibility: intensified lookout, reduce to a safe speed, and make and log weather reports. Boundary: the anti-collision manoeuvring in restricted visibility is COLREGs and belongs to Navegacion III week 8; here the concern is the phenomenon and its forecast. Report your answer in clear maritime English."
    ],
    deliverable: "A note in English distinguishing advection fog (warm moist air over a cold sea) from radiation fog (nocturnal, coastal, burns off), using the dew point as the predictor, and listing the meteorological watchkeeping actions, with the anti-collision manoeuvre left to Navegacion III week 8.",
    assessmentCriteria: [
      "Advection fog is correct (warm, moist air over a colder sea, not the reverse) and persistent/sea fog.",
      "Radiation fog is correct (nocturnal cooling, coastal, burns off with the sun).",
      "The dew point predictor is correct (air temperature approaching the dew point over cold water = fog imminent).",
      "The meteorological watchkeeping actions are sound and the COLREGs boundary is respected, in clear maritime English."
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
    unit: "Ciclones tropicales",
    topic: "La evitación del ciclón tropical: maniobra por semicírculo y regla 1-2-3",
    week: 8,
    taskId: "pn-met532-w08-cyclone-avoidance",
    taskTitle: "Manoeuvre To Avoid A Tropical Cyclone",
    scenario: "A tropical cyclone lies near the route. As the closing task of the subject, the officer asks the cadet to turn the semicircles of week 2 into a manoeuvring decision, being exact about left and right.",
    instructions: [
      "State which side is dangerous and why: in the NORTHERN hemisphere the dangerous semicircle is the RIGHT-hand side of the cyclone's track and the navigable semicircle is the left; in the SOUTHERN hemisphere it is reversed, the dangerous semicircle is the LEFT-hand side. The physical reason: on the dangerous side the cyclone's rotary wind adds to the system's forward speed, so the wind is stronger and tends to blow the vessel into the storm's path.",
      "Give the practical manoeuvre by semicircle (northern hemisphere): if the vessel is in the dangerous (right) semicircle, bring the wind on the STARBOARD BOW and make best speed to haul away from the track; if in the navigable (left) semicircle, bring the wind on the STARBOARD QUARTER and run to open the distance.",
      "State the extent to keep clear of: allow for the radius of dangerous winds around the centre, and apply the 1-2-3 rule for the forecast track error, which grows by 100, 200 and 300 nautical miles at 24, 48 and 72 hours, so the area to avoid widens with the forecast horizon.",
      "Close the boundary: week 2 taught what the dangerous and navigable semicircles are; this task is what to do about them. Report your manoeuvring decision, being explicit about hemisphere and side, in clear maritime English."
    ],
    deliverable: "A note in English turning the week 2 semicircles into a manoeuvre: the dangerous side (right in the northern hemisphere, left in the southern) with the physical reason, the per-semicircle manoeuvre (dangerous: wind on the starboard bow and haul away; navigable: wind on the starboard quarter and run), and the 1-2-3 rule (100/200/300 NM at 24/48/72 h).",
    assessmentCriteria: [
      "The dangerous semicircle is correct by hemisphere (northern = right, southern = left) with the correct physical reason (rotary wind adds to the system's forward speed).",
      "The per-semicircle manoeuvre is correct (dangerous: wind on the starboard bow, haul away; navigable: wind on the starboard quarter, run).",
      "The 1-2-3 rule is stated with the correct figures (100/200/300 NM at 24/48/72 h) and the radius of dangerous winds is considered.",
      "The boundary with week 2 is respected (week 2 = what they are, week 8 = what to do), in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
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
    subjectCode: "NAV530",
    subjectName: "Navegación III",
    subjectId: "pn-s5-navegacion-iii",
    unit: "Tipos de Derrota",
    topic: "Cálculo de la derrota ortodrómica por trigonometría esférica",
    week: 5,
    taskId: "pn-nav530-w05-great-circle-distance",
    taskTitle: "Calculate The Great Circle Distance",
    scenario: "For a long ocean passage the officer asks the cadet to calculate the great circle distance between two positions using spherical trigonometry, following on from the concept explained in week 1.",
    instructions: [
      "State the great circle distance formula: cos D = sin L1 x sin L2 + cos L1 x cos L2 x cos (difference of longitude), where D is the angular distance, and the distance in nautical miles is D in degrees x 60.",
      "For L1 = 45 degrees N, L2 = 45 degrees N and a difference of longitude of 60 degrees, compute each product separately: sin 45 x sin 45 = 0.7071 x 0.7071 = 0.5, and cos 45 x cos 45 x cos 60 = 0.7071 x 0.7071 x 0.5 = 0.25, so cos D = 0.5 + 0.25 = 0.75.",
      "Find D = arccos(0.75) = 41.41 degrees, and the distance = 41.41 x 60 = 2485 NM.",
      "Check the sense with the equator case: if both points were on the equator (L1 = L2 = 0), cos D = cos(difference of longitude), so D = 60 degrees = 3600 NM, and the 45 degrees N great circle (2485 NM) is shorter than the equatorial arc, as a great circle should be at higher latitudes. Note the initial course as a concept: because the great circle crosses the meridians at changing angles, the course changes continuously along the route. Report the distance in NM, in clear navigational English."
    ],
    deliverable: "A great circle calculation in English giving the distance from cos D = sin L1 sin L2 + cos L1 cos L2 cos(difference of longitude) with each product shown, the conversion D x 60 to NM (2485 NM), and the equator sense-check, distinct from the week 1 concept.",
    assessmentCriteria: [
      "The formula is stated correctly and each product is shown (0.5 and 0.25, giving cos D = 0.75).",
      "The angular distance is correct (arccos 0.75 = 41.41 degrees) and converted to distance (x 60 = 2485 NM).",
      "The equator sense-check is correct (3600 NM) and shows the 45 degrees N route is shorter.",
      "The initial course is correctly explained as changing along the route, in clear navigational English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "NAV530",
    subjectName: "Navegación III",
    subjectId: "pn-s5-navegacion-iii",
    unit: "Tipos de Derrota",
    topic: "Ortodromica vs loxodromica: decision de derrota",
    week: 6,
    taskId: "pn-nav530-w06-orthodromic-vs-loxodromic",
    taskTitle: "Choose Between Great Circle And Rhumb Line",
    scenario: "Before a long passage the officer asks the cadet to decide between a great circle and a rhumb line route, weighing the trade-offs, without re-teaching the rhumb line plane sailing method.",
    instructions: [
      "State when each route is preferred: the great circle (orthodromic) saves distance on long passages and in high latitudes, while the rhumb line (loxodromic) is a constant course and simple to steer.",
      "Explain what the saving depends on: it grows with latitude and with an east-west orientation of the passage, and is small near the equator or on north-south passages.",
      "Explain how a great circle is navigated in practice: as a series of rhumb line legs between waypoints along the great circle, so the ship steers a constant course on each leg.",
      "Note the boundary: the rhumb line plane sailing method itself was covered in Navegacion I, so here the rhumb line is only the term of comparison for the routing decision. Report your answer in clear navigational English."
    ],
    deliverable: "A routing-decision note in English comparing great circle and rhumb line (when each is preferred, what the saving depends on, and navigating the great circle as rhumb line legs), with the rhumb line used only as the comparison, not re-taught.",
    assessmentCriteria: [
      "When each route is preferred is correct (great circle for long/high-latitude passages, rhumb line for simple constant course).",
      "What the saving depends on is correct (latitude and east-west orientation).",
      "Navigating the great circle as rhumb line legs between waypoints is correct.",
      "The rhumb line is used only as the comparison, not re-teaching plane sailing, in clear navigational English."
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
    unit: "Radar",
    topic: "Ploteo radar: calculo de CPA y TCPA",
    week: 7,
    taskId: "pn-nav530-w07-radar-plotting-cpa-tcpa",
    taskTitle: "Work Out CPA And TCPA From A Radar Plot",
    scenario: "A radar contact must be assessed. The officer asks the cadet to work out the CPA and TCPA from a relative plot, taking the relative motion of week 2 from the concept to the number.",
    instructions: [
      "State that two ranges and bearings of the contact taken a few minutes apart give the relative motion line, and that the relative speed = relative distance run / time.",
      "For a contact first seen at 10 NM, with two plots 6 minutes apart showing a relative advance of 2 NM, calculate the relative speed = 2 NM / 0.1 h = 20 knots.",
      "From the plot, the CPA is the perpendicular distance from own ship to the relative motion line, here 6 NM, and the distance along the line to the CPA is 8 NM; verify the geometry with square root(6^2 + 8^2) = square root(36 + 64) = square root(100) = 10 NM, the initial range (a 6-8-10 triangle).",
      "Calculate the TCPA = distance along the line to the CPA / relative speed = 8 NM / 20 knots = 0.4 h = 24 minutes; and note the limit case that if the relative motion line passed through own ship the CPA would be 0, a collision course, which is exactly what the officer watches for. Report the CPA in NM and the TCPA in minutes, in clear navigational English."
    ],
    deliverable: "A radar-plotting calculation in English giving the relative speed (20 knots), the CPA (6 NM) verified by the 6-8-10 triangle against the 10 NM initial range, and the TCPA (24 minutes), with the CPA = 0 collision case noted.",
    assessmentCriteria: [
      "The relative speed is correct (2 NM / 0.1 h = 20 knots).",
      "The CPA (6 NM) is verified by square root(6^2 + 8^2) = 10 NM, the initial range.",
      "The TCPA is correct (8 NM / 20 knots = 24 minutes).",
      "The CPA = 0 collision-course limit case is correctly noted, in clear navigational English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "NAV530",
    subjectName: "Navegación III",
    subjectId: "pn-s5-navegacion-iii",
    unit: "Radar APRA",
    topic: "ARPA en la decision anticolision (COLREGs Parte B) verificada por el ploteo",
    week: 8,
    taskId: "pn-nav530-w08-arpa-collision-avoidance",
    taskTitle: "Decide An Anti-Collision Action With ARPA",
    scenario: "With the plot in hand, the officer must decide and act. As the closing task of the subject, the officer asks the cadet to use ARPA to support an anti-collision decision under COLREGs and to verify the action afterwards.",
    instructions: [
      "Explain CPA and TCPA limits as the ARPA alarm criteria: setting them tells the ARPA when to warn of a close-quarters situation, and they are configurable to the waters and visibility (for example 2 NM and 12 minutes as illustrative values, not fixed doctrine).",
      "Read the target's vector on the ARPA to judge its course and speed and how the situation is developing.",
      "Take action in accordance with COLREGs Part B (the steering and sailing rules): a positive, early and readily apparent manoeuvre, and verify it by the subsequent plot, checking that the CPA has improved.",
      "Close with the warning from week 3: the ARPA assists but the officer decides, and over-reliance on the ARPA is a danger. Report your answer in clear navigational English."
    ],
    deliverable: "A note in English using ARPA for an anti-collision decision: the CPA/TCPA alarm limits as configurable criteria, reading the target vector, a COLREGs Part B manoeuvre verified by the later plot (CPA improved), and the over-reliance warning.",
    assessmentCriteria: [
      "CPA/TCPA limits are correctly explained as configurable alarm criteria (with illustrative values, not fixed doctrine).",
      "Reading the target's vector for course, speed and development is correct.",
      "The action follows COLREGs Part B (positive, early, apparent) and is verified by the subsequent plot (CPA improved).",
      "The week 3 over-reliance warning (ARPA assists, officer decides) is included, in clear navigational English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
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
    subjectCode: "MAN533",
    subjectName: "Maniobras I",
    subjectId: "pn-s5-maniobras-i",
    unit: "Círculo de evolución y distancia de parada",
    topic: "El círculo de evolución y sus elementos",
    week: 5,
    taskId: "pn-man533-w05-turning-circle",
    taskTitle: "Read The Vessel's Turning Circle",
    scenario: "The officer asks the cadet to describe the vessel's turning circle and the figures that matter when planning a turn in confined water.",
    instructions: [
      "Name the elements of the turning circle: advance (the distance made good in the original direction), transfer (the distance made good at right angles to it), tactical diameter (the beam-to-beam distance when the vessel has turned through 180 degrees) and final diameter (the steady diameter once the turn is established).",
      "State what changes the size of the circle: higher speed, deeper draught and trim, and heel all affect it, and it grows larger in shallow water; note the link to the week 3 squat as a reference only, without re-explaining squat.",
      "Say where this information lives: the turning-circle curve on the wheelhouse poster or manoeuvring booklet gives the figures for the vessel's own loading and speed, so the officer must know the numbers for THIS ship rather than a general idea.",
      "Report how you would use the advance and transfer to judge when to start a turn in confined water, in clear maritime English."
    ],
    deliverable: "A note in English naming the turning-circle elements (advance, transfer, tactical and final diameter), what changes its size (speed, draught/trim, heel, shallow water enlarging it, referencing week 3 squat), and the wheelhouse poster as the source of the vessel's own figures.",
    assessmentCriteria: [
      "The four elements are correctly defined (advance, transfer, tactical diameter, final diameter).",
      "The factors are correct (speed, draught/trim, heel) and shallow water is correctly said to enlarge the circle, with squat referenced not re-taught.",
      "The wheelhouse poster / manoeuvring booklet is correctly identified as the source of the vessel's own figures.",
      "The use of advance and transfer to time a turn is sound, in clear maritime English."
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
    unit: "Círculo de evolución y distancia de parada",
    topic: "Distancia de parada y crash stop",
    week: 6,
    taskId: "pn-man533-w06-stopping-distance",
    taskTitle: "Judge The Vessel's Stopping Distance",
    scenario: "The officer asks the cadet to explain how far the vessel needs to stop and the difference between letting her run down and a crash stop, as a real manoeuvre rather than a calculation.",
    instructions: [
      "Explain headreach and inertia: a ship carries her way after the engines are stopped, so headreach is the distance run before she loses steerage and stops.",
      "Distinguish the natural stop (stop engines and let the way run off, keeping steerage longer) from the crash stop (full astern to stop in the shortest distance).",
      "State what changes the stopping distance: displacement and state of loading, initial speed, and the propeller type (a fixed-pitch versus a controllable-pitch propeller behave differently astern); the wheelhouse poster gives the vessel's own stopping figures.",
      "Explain why the crash stop is a last resort: applying full astern causes a loss of steering control during the stop, so the vessel cannot be steered reliably while stopping. Boundary: the kinematics (distance = speed x time and the uniform-acceleration equations) were covered in Navegacion I week 7 and Dinamica week 5; here the concern is the real manoeuvre and its factors, not re-calculating them. Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining headreach and inertia, the natural stop versus the crash stop, the factors (displacement/loading, initial speed, propeller type) with the wheelhouse poster as the source, and why the crash stop is a last resort, with the kinematics left to Navegacion I and Dinamica.",
    assessmentCriteria: [
      "Headreach and the ship's inertia are correctly explained.",
      "The natural stop and the crash stop are correctly distinguished.",
      "The factors are correct (displacement/loading, initial speed, fixed vs controllable-pitch propeller) with the wheelhouse poster as the source.",
      "The crash stop is correctly explained as a last resort (loss of steering during the stop), the kinematics boundary is respected, in clear maritime English."
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
    unit: "Sistema de propulsión",
    topic: "Efectos combinados de hélice y timón en la maniobra",
    week: 7,
    taskId: "pn-man533-w07-combined-propeller-rudder",
    taskTitle: "Combine Propeller And Rudder To Turn Short",
    scenario: "In a tight basin the officer asks the cadet to combine the propeller and rudder to turn the vessel in the shortest space, putting the separate principles of weeks 1 and 2 to work together.",
    instructions: [
      "Recall the transverse thrust (paddle wheel effect) direction as the building block from week 2: with a right-handed propeller (turning clockwise seen from astern when going ahead), when the engine is put ASTERN the stern walks to PORT, so the bow falls to STARBOARD.",
      "Explain the rudder kick: a burst ahead with the rudder hard over gives an immediate sideways push of the stern from the propeller wash on the rudder, swinging the bow before the ship gathers headway.",
      "Combine the two into a short round turn (turning in the vessel's own length): for a right-handed single-screw vessel the short round turn is made to STARBOARD, working the engine AHEAD with the rudder hard to STARBOARD (bow swings to starboard), then ASTERN to check the headway while the transverse thrust throws the stern to PORT (keeping the bow coming to starboard), repeating the ahead-astern cycle.",
      "Boundary: weeks 1 and 2 taught the principles of the rudder and the propeller separately; this task is their combined use in a manoeuvre. Report the sequence, being explicit about the direction, in clear maritime English."
    ],
    deliverable: "A note in English combining propeller and rudder: the paddle-wheel direction from week 2 (right-handed propeller astern throws the stern to port, bow to starboard), the rudder kick, and the short round turn to starboard (ahead with starboard rudder, then astern), with the direction kept consistent throughout.",
    assessmentCriteria: [
      "The transverse thrust direction is correct (right-handed propeller astern: stern to port, bow to starboard).",
      "The rudder kick is correctly explained (early sideways push from the wash before headway builds).",
      "The short round turn is consistent with that direction (to starboard: ahead with starboard rudder, then astern using the transverse thrust).",
      "The boundary with weeks 1 and 2 is respected (principles there, combined use here), in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "MAN533",
    subjectName: "Maniobras I",
    subjectId: "pn-s5-maniobras-i",
    unit: "Maniobra de atraque",
    topic: "Atraque y desatraque: aproximación, viento y corriente, y el spring como herramienta",
    week: 8,
    taskId: "pn-man533-w08-berthing-manoeuvre",
    taskTitle: "Bring The Vessel Alongside And Off",
    scenario: "As the closing task of the subject, the officer asks the cadet to plan a berthing and unberthing manoeuvre from the bridge, bringing together the rudder, the propeller and the vessel's own distances.",
    instructions: [
      "Describe the approach: the angle to the berth and a minimum steerage speed, following the rule of prudence that you never approach faster than you are willing to hit the berth.",
      "Explain wind and current as allies or enemies: berthing against the current gives control because the water flowing past keeps steerage while the ground speed stays low, whereas a following current or an onshore wind must be allowed for.",
      "Explain the spring as a manoeuvring tool: working AHEAD against the forward (head) spring opens the STERN off the berth, and working ASTERN against the after (stern) spring opens the BOW off, which is how the vessel is sprung on and off.",
      "State the bridge-to-stations coordination: the officer on the bridge works with the forward and after stations, drawing together the rudder (week 1), the propeller (weeks 2 and 7) and the vessel's distances (weeks 5 and 6). Boundary: the handling of the mooring lines as a deck operation belongs to Practicas Marineras V; here the lens is the ship being manoeuvred. Report your plan in clear maritime English."
    ],
    deliverable: "A note in English planning berthing and unberthing from the bridge: the approach angle and minimum steerage speed, wind and current as allies or enemies (berthing against the current for control), the spring as a manoeuvring tool (ahead on the head spring opens the stern, astern on the after spring opens the bow), and bridge-to-stations coordination, with line handling left to Practicas Marineras V.",
    assessmentCriteria: [
      "The approach is sound (angle and minimum steerage speed, the never-faster-than-willing-to-hit rule).",
      "Wind and current are correctly explained (berthing against the current gives control).",
      "The springs are correct and not crossed (ahead on the head spring opens the stern; astern on the after spring opens the bow).",
      "The bridge-to-stations coordination and the Practicas Marineras V boundary are respected, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
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
    subjectCode: "QUH534",
    subjectName: "Química",
    subjectId: "pn-s5-quimica",
    unit: "Análisis y tratamiento del agua",
    topic: "Tratamiento del agua de calderas y de refrigeración",
    week: 5,
    taskId: "pn-quh534-w05-boiler-water-treatment",
    taskTitle: "Monitor And Treat Boiler Water",
    scenario: "The officer asks the cadet to explain why boiler and cooling water is treated and what is watched on board, as the officer who understands the reason behind the routine.",
    instructions: [
      "State why the water is treated: hardness leaves scale (as covered in week 3) and untreated water corrodes the metal (the galvanic corrosion of week 2), so treatment protects the boiler; refer to both as the reason, without re-explaining hardness or corrosion.",
      "State what is monitored: the pH is kept in a controlled alkaline band (typically about 9 to 11 depending on the system, as an illustrative range) so the water is neither corrosive nor scale-forming, and chlorides are watched as the indicator of seawater contamination from a condenser or cooler leak.",
      "Work the reading: a test gives pH = 8.2 against a target band of 9.5 to 11.0; since 8.2 is below the band the water is insufficiently alkaline and tends acidic for the system, so the action is to dose the alkaline treatment and re-test. Note the scale sense: a lower pH is more acidic and a higher pH more alkaline, so 8.2 below 9.5 means not alkaline enough, not too alkaline.",
      "State how it is done: periodic on-board testing as a routine and the logging of results so trends are visible. Report your monitoring and action in clear maritime English."
    ],
    deliverable: "A note in English explaining why boiler/cooling water is treated (scale from hardness in week 3, corrosion from week 2, as references), what is monitored (pH in an alkaline band ~9-11, chlorides for seawater contamination), the reading pH 8.2 below the 9.5-11.0 band (insufficiently alkaline, dose and re-test), and the routine of periodic testing and logging.",
    assessmentCriteria: [
      "The reason for treatment is correct (scale from hardness, corrosion) and given as references, not re-taught.",
      "The monitored parameters are correct (alkaline pH band ~9-11, chlorides as seawater-contamination indicator).",
      "The reading is interpreted correctly (pH 8.2 is below the 9.5-11.0 band = insufficiently alkaline = tends acidic; dose alkaline treatment and re-test), with the correct scale sense.",
      "The routine (periodic testing and logging of results) is correct, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "QUH534",
    subjectName: "Química",
    subjectId: "pn-s5-quimica",
    unit: "Combustibles y lubricantes",
    topic: "Química del fuego: el tetraedro y los rangos de inflamabilidad",
    week: 6,
    taskId: "pn-quh534-w06-fire-chemistry",
    taskTitle: "Explain The Chemistry Of Fire",
    scenario: "The officer asks the cadet to explain the chemistry of fire, building on the flash point of week 4 towards why a vapour ignites at all.",
    instructions: [
      "State the fire tetrahedron: fuel, oxygen, heat and the chain reaction; the chain reaction is the fourth element that turns the old triangle into a tetrahedron, and removing it is how chemical extinguishing agents put out a fire.",
      "State the flammability range: the lower explosive limit (LEL) and the upper explosive limit (UEL), where below the LEL the mixture is too lean and above the UEL it is too rich, so ignition is possible only between the two, and note that the LEL is always lower than the UEL.",
      "Use the classic example of methane as illustrative: an LEL of about 5 percent and a UEL of about 15 percent by volume in air, so a methane-air mixture ignites only between roughly 5 and 15 percent.",
      "Connect to week 4: the flash point tells you WHEN a liquid gives off flammable vapours, while the LEL and UEL tell you at WHAT CONCENTRATION those vapours will burn. Boundary: fighting the fire is the fire-fighting subject (C0038); here the concern is the chemistry of why it burns. Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining the fire tetrahedron (fuel, oxygen, heat, chain reaction, the fourth element that chemical agents break), the flammability range (LEL below the UEL, ignition only between them), methane as illustrative (~5% to ~15%), and the link to week 4 (flash point = when vapours form, LEL/UEL = at what concentration they burn), with fire-fighting left to C0038.",
    assessmentCriteria: [
      "The tetrahedron is correct (fuel, oxygen, heat, chain reaction) and the chain reaction is identified as what chemical agents break.",
      "The flammability range is correct (LEL below UEL, ignition only between them, lean below / rich above).",
      "The methane example is correct and illustrative (LEL ~5%, UEL ~15% by volume).",
      "The link to week 4 flash point is correct and the C0038 fire-fighting boundary is respected, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "QUH534",
    subjectName: "Química",
    subjectId: "pn-s5-quimica",
    unit: "Atmósferas peligrosas",
    topic: "La química de la atmósfera en espacios cerrados",
    week: 7,
    taskId: "pn-quh534-w07-hazardous-atmospheres",
    taskTitle: "Test A Dangerous Enclosed-Space Atmosphere",
    scenario: "Before anyone enters an enclosed space the officer asks the cadet to explain the chemistry of its atmosphere and why it must be measured, not judged by eye.",
    instructions: [
      "Explain oxygen deficiency: normal air is 20.9 percent oxygen, but in a closed space the oxidation of the cargo, the steel corroding (rusting) and decomposition all CONSUME oxygen, so the atmosphere can fall below what is safe to breathe.",
      "Name the common toxic gases: hydrogen sulphide (H2S), which smells of rotten eggs at low concentration but deadens the sense of smell at high concentration, so a smell that fades is not safety, and carbon monoxide (CO), which is colourless and odourless; note that a flammable atmosphere is measured against the LEL from week 6.",
      "State the order of testing and why: oxygen first, then flammables, then toxics, because many flammable-gas meters need sufficient oxygen to read correctly, so the oxygen reading must come first.",
      "State why the space is ventilated and MEASURED before entry: the atmosphere cannot be seen, so it is measured with instruments, not judged by eye. Boundary: the full enclosed-space entry procedure belongs to the operational subjects; here the lens is the chemistry of the atmosphere. Note the practical entry reference (about 20.9 percent oxygen ideal, with a minimum such as ~19.5-20 percent as an industry reference, while the ship's procedure governs). Report your answer in clear maritime English."
    ],
    deliverable: "A note in English on the chemistry of an enclosed-space atmosphere: oxygen deficiency (20.9% normal, consumed by oxidation/rusting/decomposition), the toxic gases (H2S deadening the smell, CO colourless and odourless), the flammable measurement against the LEL, the testing order (oxygen then flammables then toxics, with the reason) and why the atmosphere is measured not judged by eye, with the full entry procedure left to operational subjects.",
    assessmentCriteria: [
      "Oxygen deficiency is correct (20.9% normal air; oxidation, rusting and decomposition consume oxygen).",
      "The toxic gases are correct (H2S deadens the sense of smell at high concentration; CO is colourless and odourless) and the flammable-vs-LEL link to week 6 is made.",
      "The testing order is correct and justified (oxygen first because flammable meters need oxygen to read correctly, then flammables, then toxics).",
      "The measure-don't-judge principle and the boundary with the operational entry procedure are respected, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "QUH534",
    subjectName: "Química",
    subjectId: "pn-s5-quimica",
    unit: "Química ambiental marina",
    topic: "Contaminación marina: hidrocarburos, SOx y NOx, y agua de lastre",
    week: 8,
    taskId: "pn-quh534-w08-marine-environmental-chemistry",
    taskTitle: "Explain The Chemistry Of Marine Pollution",
    scenario: "As the closing task of the subject, the officer asks the cadet to explain the chemistry behind the main forms of marine pollution from ships.",
    instructions: [
      "Explain the behaviour of spilled oil: it spreads into a thin film on the water, the lighter fractions evaporate, and the heavier fractions persist and either sink or emulsify into a water-in-oil mixture that is hard to recover.",
      "Explain SOx and NOx and where they come from: the sulphur in the fuel burns to sulphur oxides (SOx), while the high temperature of combustion makes the nitrogen and oxygen of the air combine into nitrogen oxides (NOx); they are regulated because they cause acid rain and harm health, with MARPOL Annex VI as the framework.",
      "Explain ballast water as a vector: water taken on in one port carries living organisms that are discharged in another, so ballast water can spread invasive species.",
      "Boundary: the environmental ethical decision belongs to Professional Ethics week 4; here the concern is the chemistry that underlies it. Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining the chemistry of marine pollution: spilled-oil behaviour (film, light fractions evaporate, heavy persist/sink/emulsify), SOx from the fuel sulphur and NOx from high-temperature combustion (regulated under MARPOL Annex VI for acid rain and health), and ballast water as a vector for invasive species, with the ethical decision left to Professional Ethics week 4.",
    assessmentCriteria: [
      "The behaviour of spilled oil is correct (spreads as a film, light fractions evaporate, heavy fractions persist/sink/emulsify).",
      "SOx and NOx are correctly sourced (SOx from the fuel sulphur, NOx from high-temperature combustion) and correctly linked to acid rain/health and MARPOL Annex VI.",
      "Ballast water is correctly explained as a vector for invasive species.",
      "The boundary with Professional Ethics week 4 is respected, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
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
    subjectCode: "COV535",
    subjectName: "Comunicación Visual",
    subjectId: "pn-s5-comunicacion-visual",
    unit: "Código Internacional de Señales",
    topic: "Banderas de un solo significado que el oficial reconoce a la vista",
    week: 5,
    taskId: "pn-cov535-w05-single-letter-flags",
    taskTitle: "Recognise Single-Letter Flag Signals At Sight",
    scenario: "A vessel is flying a single code flag. The officer asks the cadet to give the exact meanings of the single-letter hoists that every watchkeeper must know at sight, building on the flag system of week 2.",
    instructions: [
      "State why a single-letter signal is urgent by design: it carries a complete standard message that is read at a glance without a code book, so it is used for the situations that must be understood immediately.",
      "Give the exact meanings of the safety-critical letters: A (Alfa) 'I have a diver down; keep well clear at slow speed', B (Bravo) 'I am taking in, discharging or carrying dangerous goods', O (Oscar) 'Man overboard', and Q (Quebec) 'My vessel is healthy and I request free pratique'.",
      "Give the pilot pair, which are easily confused: G (Golf) 'I require a pilot' versus H (Hotel) 'I have a pilot on board'; and note P (Papa), the Blue Peter, which in harbour means all persons should report on board as the vessel is about to proceed to sea.",
      "Boundary: week 2 taught the flag system (how a hoist carries a message); this task is the critical vocabulary itself. Report the meanings in clear maritime English."
    ],
    deliverable: "A note in English giving the exact meanings of the safety-critical single-letter flags (A diver down, B dangerous goods, O man overboard, Q free pratique), the confused pilot pair (G require a pilot vs H pilot on board) and P (all aboard in harbour), with why a single-letter signal is urgent by design, building on the week 2 system.",
    assessmentCriteria: [
      "A, B, O and Q are given with their exact meanings (A diver down, B dangerous goods, O man overboard, Q request free pratique).",
      "The pilot pair is correct and correctly distinguished (G 'I require a pilot' vs H 'I have a pilot on board') and P is correct.",
      "The reason a single-letter signal is urgent by design (read at a glance, no code book) is correct.",
      "The boundary with week 2 (system there, vocabulary here) is respected, in clear maritime English."
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
    unit: "Señales luminosas y de maniobra",
    topic: "La lámpara de señales y las señales de maniobra de la Regla 34",
    week: 6,
    taskId: "pn-cov535-w06-manoeuvring-signals",
    taskTitle: "Signal A Manoeuvre By Light And Sound",
    scenario: "Two vessels are in sight of one another and one is about to alter course. The officer asks the cadet to explain the signal lamp procedure and the manoeuvring signals that state the intended action.",
    instructions: [
      "Explain the basic signal lamp (Aldis) call-and-answer procedure in Morse light: the general call is AA AA repeated, the answer is TTTT, and a single T acknowledges that a word or group is received.",
      "State the manoeuvring signals of COLREGS Rule 34, given when vessels are in sight of one another, as short blasts on the whistle with an optional matching light flash: one short = 'I am altering my course to STARBOARD', two short = 'I am altering my course to PORT', three short = 'I am operating ASTERN propulsion'.",
      "State the doubt signal: at least five short and rapid blasts (and flashes) mean doubt about whether the other vessel is taking sufficient action to avoid collision, i.e. a warning of danger.",
      "Boundary: week 1 was the Morse distress signal and week 4 was the Part C lights a vessel carries to show her situation; this task is the ACTIVE signal of an intended manoeuvre (the light version complements the sound). Report the signals in clear maritime English."
    ],
    deliverable: "A note in English on the signal lamp procedure (call AA AA, answer TTTT, received T) and the Rule 34 manoeuvring signals (one short = starboard, two = port, three = astern, five or more = doubt/danger), with light complementing sound, distinct from the week 1 distress Morse and the week 4 Part C situation lights.",
    assessmentCriteria: [
      "The signal lamp call-and-answer procedure is correct (AA AA call, TTTT answer, T received).",
      "The Rule 34 signals are correctly mapped (one short = starboard, two = port, three = astern) with no shift.",
      "The doubt signal is correct (at least five short and rapid blasts = doubt/danger).",
      "The boundary with week 1 (distress) and week 4 (Part C situation lights) is respected, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "COV535",
    subjectName: "Comunicación Visual",
    subjectId: "pn-s5-comunicacion-visual",
    unit: "Sistema de Boyado Marítimo (IALA)",
    topic: "Marcas laterales, regiones A y B, y el resto del sistema IALA",
    week: 7,
    taskId: "pn-cov535-w07-lateral-marks-regions",
    taskTitle: "Read IALA Lateral Marks And Regions",
    scenario: "The vessel is entering a buoyed channel from seaward. The officer asks the cadet to complete the IALA system beyond the cardinal marks of week 3: the lateral marks, the two regions, and the remaining marks.",
    instructions: [
      "State the lateral marks and the critical region difference. In IALA Region B (the Americas, including Mexico, plus Japan, the Philippines and Korea), when entering from seaward you keep the RED marks and red light to STARBOARD ('red right returning') and the green marks to port. In IALA Region A (Europe, Africa, most of Asia and Oceania) it is REVERSED: the red marks are kept to port when entering from seaward.",
      "State clearly that Mexico is in Region B, so 'red right returning' applies here, and warn that this is the classic mistake to avoid.",
      "Give the remaining marks: safe water (red and white vertical stripes, white light), isolated danger (black with red bands, two black spheres as a topmark, white light group flashing two), special marks (yellow) and the emergency wreck marking buoy for a new wreck (blue and yellow vertical stripes, alternating blue and yellow light).",
      "Boundary: week 3 covered the cardinal marks, referenced here without re-teaching. Report how you would read the channel in clear maritime English."
    ],
    deliverable: "A note in English completing the IALA system: the lateral marks and the region difference (Region B / Mexico = red to starboard entering, 'red right returning'; Region A = red to port), plus safe-water, isolated-danger, special and new-wreck marks, with the week 3 cardinal marks referenced not re-taught.",
    assessmentCriteria: [
      "The region rule is correct and not inverted (Region B / Mexico: red to starboard entering from seaward, 'red right returning'; Region A: red to port).",
      "Mexico is correctly placed in Region B and the classic mistake is flagged.",
      "The remaining marks are correct (safe water red/white stripes; isolated danger black with red bands and two spheres; special yellow; new-wreck blue/yellow).",
      "The boundary with the week 3 cardinal marks is respected, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "COV535",
    subjectName: "Comunicación Visual",
    subjectId: "pn-s5-comunicacion-visual",
    unit: "Señales de peligro",
    topic: "Señales de peligro del Anexo IV y su composición integrada",
    week: 8,
    taskId: "pn-cov535-w08-integrated-distress",
    taskTitle: "Compose An Integrated Distress Picture",
    scenario: "As the closing task of the subject, the officer asks the cadet to know the COLREGS Annex IV distress signals and to compose the correct set of signals for a given emergency, drawing together everything learned in the subject.",
    instructions: [
      "List the main Annex IV distress signals the officer must recognise: SOS by any method, MAYDAY by radiotelephony, the flag signal November-Charlie (NC) of the International Code, red rockets or red flares, an orange smoke signal, arms outstretched to each side raised and lowered SLOWLY and repeatedly, and flames on the vessel.",
      "Explain that these signals may be used together to make the emergency unmistakable, and that they must not be used for any other purpose.",
      "Work the integrating scenario: for a vessel not under command with an injured crew member near a buoyed channel, compose the correct signal picture, combining flags (the NC distress signal and the single-letter flags of weeks 2 and 5), light or Morse (the distress and manoeuvring signals of weeks 1 and 6) and the reading of the buoyage (the cardinal and lateral marks of weeks 3 and 7).",
      "Report your composed distress picture, explaining each element, in clear maritime English."
    ],
    deliverable: "A note in English listing the main Annex IV distress signals (SOS, MAYDAY, NC flags, red rockets/flares, orange smoke, arms raised and lowered slowly, flames on board) and composing the correct integrated signal picture for the given scenario, combining flags (weeks 2/5), light or Morse (weeks 1/6) and buoyage (weeks 3/7).",
    assessmentCriteria: [
      "The Annex IV signals are correct (arms raised and lowered slowly, orange smoke, red rockets/flares, NC flags, SOS/MAYDAY, flames on board).",
      "The rule that distress signals are only for distress is stated.",
      "The composed signal picture is correct and appropriate for the scenario, combining flags, light/Morse and buoyage.",
      "The integration of weeks 1-7 is coherent, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
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
    subjectCode: "ING531",
    subjectName: "Inglés Marítimo V",
    subjectId: "pn-s5-ingles-maritimo-v",
    unit: "Verbos modales",
    topic: "Modales de obligación, prohibición y permiso en el inglés normativo",
    week: 5,
    taskId: "pn-ing531-w05-modal-verbs-regulations",
    taskTitle: "Read Obligation And Prohibition In Regulations",
    scenario: "Regulations and procedures turn on their modal verbs. The officer asks the cadet to read the modal verbs of maritime regulation correctly, because misreading one changes the legal duty.",
    instructions: [
      "Set out the modal verbs of regulation: 'must' is a strong obligation, 'must not' is a prohibition, 'shall' is the formal obligation of a regulation (the verb of the COLREGS and SOLAS, an obligation and not a future), 'should' is a recommendation, and 'may' is permission.",
      "Show each with a regulatory sentence in your own words: 'every vessel shall at all times keep a proper look-out' (obligation), 'the officer of the watch must not leave the bridge unattended' (prohibition), 'the master may depart from these rules when needed to avoid immediate danger' (permission).",
      "Draw the fine line that changes the duty: 'must not' forbids the action, while 'need not' only removes the obligation (you are free not to do it), so they are opposites in effect and must not be confused; and 'shall' here is duty, not the future tense.",
      "Rewrite one loosely worded instruction into precise regulatory English, choosing the modal that states the real duty. Report in clear maritime English."
    ],
    deliverable: "A note in English setting out must / must not / shall / should / may with a regulatory sentence for each in the cadet's own words, the must-not (prohibition) versus need-not (no obligation) distinction, the point that regulatory 'shall' is duty not future, and one instruction rewritten into precise regulatory English.",
    assessmentCriteria: [
      "The modals are correctly ranked (must = strong obligation, must not = prohibition, shall = regulatory obligation, should = recommendation, may = permission).",
      "'shall' is correctly treated as regulatory obligation, not the future tense.",
      "The must-not (prohibition) versus need-not (no obligation) distinction is correct.",
      "The rewritten instruction uses the modal that states the real duty, in clear maritime English."
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
    unit: "Verbos frasales",
    topic: "Verbos frasales del puente y la estación de maniobra",
    week: 6,
    taskId: "pn-ing531-w06-bridge-phrasal-verbs",
    taskTitle: "Use Bridge Phrasal Verbs In Orders",
    scenario: "Bridge and mooring orders are full of phrasal verbs. The officer asks the cadet to use them with their exact operational meaning and to know when a plainer form is clearer.",
    instructions: [
      "Give the exact operational meaning of the working phrasal verbs: 'get under way' (begin to move), 'heave up' (bring the anchor up), 'pay out' (let rope or cable run out, that is slack it away, not haul it in), 'make fast' (secure a line), 'stand by' (be ready and wait), 'look out for' (watch attentively for), 'single up' (reduce to the minimum lines before letting go) and 'let go' (release, as in let go the lines or the anchor).",
      "Put four of them into short bridge or mooring orders as they would actually be given.",
      "Show the pay-out trap: 'pay out' slacks the line away from the ship, the opposite of hauling it in, so reading it backwards would run the manoeuvre the wrong way.",
      "State the register nuance: because crews are of mixed nationality, the SMCP sometimes prefers a plainer non-phrasal form for clarity, so say when the phrasal verb is the standard order and when the explicit form is safer. Report in clear maritime English."
    ],
    deliverable: "A note in English giving the exact operational meaning of the bridge phrasal verbs (get under way, heave up, pay out as slack away, make fast, stand by, look out for, single up, let go), four of them in real orders, the pay-out (not haul-in) trap, and the register nuance on when a plainer SMCP form is clearer.",
    assessmentCriteria: [
      "Each phrasal verb is given its exact operational meaning (notably pay out = slack away, heave up = bring the anchor up).",
      "Four are used correctly in realistic bridge or mooring orders.",
      "The pay-out versus haul-in distinction is correct.",
      "The register nuance (when the SMCP prefers a plainer form for mixed-nationality clarity) is sound, in clear maritime English."
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
    unit: "Comunicación radiotelefónica",
    topic: "El protocolo GMDSS de socorro, urgencia y seguridad",
    week: 7,
    taskId: "pn-ing531-w07-gmdss-distress-protocol",
    taskTitle: "Send A Distress Call By Radiotelephony",
    scenario: "In a serious emergency the officer must speak on the radio in the one format the whole world understands. The officer asks the cadet to send a distress call by radiotelephony in correct doctrinal form.",
    instructions: [
      "State the three signals and their hierarchy: MAYDAY for distress (grave and imminent danger to a vessel or person), PAN PAN for urgency (a serious matter but not immediate danger to life), and SECURITE for safety (navigational or meteorological warnings); MAYDAY is reserved for grave and imminent danger only.",
      "Give the initial distress message in its non-negotiable order: (1) MAYDAY spoken three times, (2) THIS IS followed by the vessel's name three times and her call sign, (3) MAYDAY and the vessel's name once, (4) the position, (5) the nature of the distress, (6) the assistance required, (7) any further information (persons on board, whether abandoning, and so on), and (8) OVER.",
      "State the spelling and the prowords: spell the vessel's name and call sign with the NATO phonetic alphabet (Alfa, Bravo, Charlie, and so on) used strictly; OVER means I have finished and expect a reply, OUT means the exchange is finished with no reply expected, so OVER and OUT are never said together; SAY AGAIN is used to ask for a repeat, never 'repeat', which in radiotelephony means to repeat gunfire; and ROGER means received.",
      "Boundary: the routine arrival exchange with VTS was Ingles Maritimo III, and the visual distress signals were Comunicacion Visual; this task is the radiotelephony protocol of distress as its own genre. Report the call in clear maritime English."
    ],
    deliverable: "A note in English sending a distress call: the MAYDAY / PAN PAN / SECURITE hierarchy (MAYDAY for grave and imminent danger only), the eight-part distress message in its fixed order (MAYDAY x3, THIS IS + name x3 + call sign, MAYDAY + name, position, nature, assistance, further info, OVER), phonetic spelling and the prowords (OVER and OUT never together, SAY AGAIN not 'repeat', ROGER), distinct from the VTS exchange and the visual signals.",
    assessmentCriteria: [
      "The three signals and hierarchy are correct (MAYDAY distress, PAN PAN urgency, SECURITE safety) with MAYDAY reserved for grave and imminent danger.",
      "The eight-part distress message is given in the correct fixed order.",
      "The prowords are correct (OVER and OUT never together; SAY AGAIN not 'repeat', with the reason; ROGER = received) and the phonetic spelling is used.",
      "The boundary with the VTS exchange (Ingles Maritimo III) and the visual signals (Comunicacion Visual) is respected, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "ING531",
    subjectName: "Inglés Marítimo V",
    subjectId: "pn-s5-ingles-maritimo-v",
    unit: "Discurso de mando",
    topic: "El briefing y el debriefing del equipo de puente",
    week: 8,
    taskId: "pn-ing531-w08-briefing-debriefing",
    taskTitle: "Brief And Debrief The Bridge Team",
    scenario: "As the closing task of the subject, the officer must lead the team in English before and after a manoeuvre. The officer asks the cadet to deliver a passage brief and a debrief in the language of internal command.",
    instructions: [
      "Give the passage brief to the bridge team in a clear structure: the situation, the intention, the tasks by role, the points of attention, and an invitation for questions, so every member knows the plan and their part in it.",
      "Build in the closed-loop check: key orders are repeated back so the officer hears they were understood; reference this read-back as an established practice and use it here without re-teaching it.",
      "Deliver the debrief after the manoeuvre: compare what was planned with what actually happened, keep it blame-free, and draw the lessons for next time.",
      "Show concision and structure as the virtues of command English: short, ordered, unambiguous. Report the brief and debrief in clear maritime English."
    ],
    deliverable: "A note in English delivering a passage brief in a clear structure (situation, intention, tasks by role, points of attention, questions), a closed-loop check referenced not re-taught, and a blame-free debrief comparing plan with outcome and drawing lessons, with concision and structure as the marks of command English.",
    assessmentCriteria: [
      "The passage brief follows a clear structure (situation, intention, tasks by role, points of attention, questions).",
      "The closed-loop check is used and referenced as established practice, not re-taught.",
      "The debrief compares plan with outcome, stays blame-free, and draws lessons.",
      "Concision and structure are demonstrated as the virtues of command English, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
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
    subjectCode: "PMR536",
    subjectName: "Prácticas Marineras V",
    subjectId: "pn-s5-practicas-marineras-v",
    unit: "Maniobras de fondeo",
    topic: "La maniobra de fondeo ejecutada",
    week: 5,
    taskId: "pn-pmr536-w05-anchoring-execution",
    taskTitle: "Execute The Anchoring Manoeuvre",
    scenario: "The preparations are done and the vessel is on the anchorage. The officer asks the cadet to execute the anchoring manoeuvre and report it from the forecastle, taking the preparations of week 2 into the deck operation itself.",
    instructions: [
      "State the two ways of laying the anchor and when each is used: walking back with the windlass in gear (controlled, lowering the anchor under power) and letting go on the brake (fast, dropping to the bottom, only where the depth and holding ground suit it).",
      "State how much cable to pay out: the working rule is about three to four times the depth of water in good weather, increased for strong wind, sea or a long stay, because it is the weight of the cable lying in a catenary that cushions the pull, so the anchor digs in and the cable takes the snatch out of the load.",
      "Describe the vessel being brought up: as the cable is paid out and the vessel drops back, the cable tightens and then eases as the anchor takes hold, the sign that she is brought up and holding.",
      "Report from the station to the bridge with the correct terms: how many shackles are out (reading the markings from week 4), when the cable is up and down (leading vertically), and when the anchor is aweigh (broken out and lifted off the bottom). Boundary: week 2 was the preparations and the officer's roles were in Maniobras I; here it is the deck execution. Report in clear maritime English."
    ],
    deliverable: "A note in English executing the anchoring manoeuvre: walking back versus letting go and when each is used, the cable scope rule (about 3-4 times the depth in good weather, more in bad), the vessel brought up (cable tightens as the anchor holds), and the station reports (shackles out, up and down, anchor aweigh = broken out), building on the week 2 preparations.",
    assessmentCriteria: [
      "Walking back and letting go are correctly distinguished and situated (controlled under power vs fast on the brake).",
      "The scope rule is correct (about 3-4 times the depth in good weather, increased for wind/sea/long stay) with the catenary reason.",
      "Being brought up is correctly described (cable tightens then eases as the anchor holds).",
      "The station reports are correct (shackles out, up and down, anchor aweigh = broken out of the ground), in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "PMR536",
    subjectName: "Prácticas Marineras V",
    subjectId: "pn-s5-practicas-marineras-v",
    unit: "Plumas y grúas",
    topic: "La faena de carga: señalización, eslingado y zona de seguridad",
    week: 6,
    taskId: "pn-pmr536-w06-cargo-lifting-operations",
    taskTitle: "Run A Safe Lifting Operation",
    scenario: "A lift is being worked with the ship's crane. The officer asks the cadet to run the full deck operation on top of the basic crane handling of week 3: signalling, slinging and the safety zone.",
    instructions: [
      "State the standard hand signals to the operator (hoist, lower, stop) and the rule that STOP is the one signal that anyone may give and the operator always obeys.",
      "Explain safe slinging and the sling angle: with a two-leg sling the angle between the legs increases the tension in each leg, so for a 1000 kg load the tension per leg is T = W / (2 x cos(half the angle)) — about 500 kg per leg with the legs near vertical (angle 0 degrees), about 577 kg per leg at 60 degrees, and a full 1000 kg per leg at 120 degrees, where each leg carries the whole load; so keep the angle closed (ideally under 90 degrees) or use longer slings, and inspect the slings before use.",
      "State the golden rule of the safety zone: no one stands under a suspended load or in its path, and the zone is cleared before the lift.",
      "Explain how the signaller, operator and slingers work as one team throughout the lift. Report in clear maritime English."
    ],
    deliverable: "A note in English running a lifting operation: the hand signals (hoist, lower, stop, with stop obeyed from anyone), safe slinging with the sling-angle effect (T = W/(2 cos(half-angle)): ~500 kg per leg near vertical, ~577 kg at 60 degrees, 1000 kg at 120 degrees for a 1000 kg load, so keep the angle closed), sling inspection, and the safety zone (no one under or in the path of the load).",
    assessmentCriteria: [
      "The hand signals are correct and the stop rule is stated (anyone may signal stop, the operator always obeys).",
      "The sling-angle effect is correct (tension per leg increases with the angle: ~500 kg near vertical, ~577 kg at 60 degrees, 1000 kg at 120 degrees) with the keep-it-closed rule.",
      "Sling inspection before use is included.",
      "The safety zone rule is correct (no one under or in the path of a suspended load, cleared before lifting), in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "PMR536",
    subjectName: "Prácticas Marineras V",
    subjectId: "pn-s5-practicas-marineras-v",
    unit: "Aparejo de amarre",
    topic: "Inspección, descarte y estiba del aparejo de amarre",
    week: 7,
    taskId: "pn-pmr536-w07-mooring-gear-maintenance",
    taskTitle: "Inspect And Maintain Mooring Gear",
    scenario: "Mooring gear that fails puts the whole station in danger. The officer asks the cadet to inspect and maintain the mooring lines and fittings so that a line is discarded before it parts, not after.",
    instructions: [
      "State how to inspect fibre rope: look for external abrasion, friction burns from surging, and internal hardness or stiffness that shows the fibres are worn or fused.",
      "State how to inspect wire rope: count broken wires against the discard criterion (a set number of broken wires in a given length, as the concept) and look for corrosion and for kinks that deform the core.",
      "State correct stowage: rope coiled down, dry and ventilated, and synthetic fibre kept out of the sun, which weakens it.",
      "State the fittings point: bitts, fairleads and rollers must be sound, because a rusted or pitted fairlead saws through the line that works over it. Boundary: the snap-back danger during a towing operation was Practicas Marineras III; here the concern is the prevention, since the line that is inspected and discarded in time is the one that does not part. Report in clear maritime English."
    ],
    deliverable: "A note in English on maintaining mooring gear: inspecting fibre rope (abrasion, friction burns, internal hardness), wire rope (broken-wire discard criterion, corrosion, kinks), correct stowage (coiled, dry, ventilated, synthetic out of the sun), and fittings (a pitted fairlead saws the line), as the prevention behind the snap-back danger taught in Practicas Marineras III.",
    assessmentCriteria: [
      "Fibre rope inspection is correct (external abrasion, friction burns, internal hardness/stiffness).",
      "Wire rope inspection is correct (broken-wire discard criterion as a concept, corrosion, kinks deforming the core).",
      "Correct stowage is stated (coiled, dry, ventilated, synthetic kept out of the sun).",
      "The fittings point is correct (sound bitts/fairleads/rollers; a pitted fairlead saws the line) and the Practicas Marineras III snap-back boundary is respected, in clear maritime English."
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
    unit: "Faena de puerto",
    topic: "La faena integrada de llegada desde la estación de amarre",
    week: 8,
    taskId: "pn-pmr536-w08-integrated-berthing-operation",
    taskTitle: "Run The Integrated Arrival Operation",
    scenario: "As the closing task of the subject, the bosun runs the whole arrival on deck. The officer asks the cadet to run the integrated berthing operation from the mooring station, drawing together everything learned in the subject.",
    instructions: [
      "State the preparation at the station: mooring lines coiled down and clear for running by side, fenders in position, heaving lines ready, and the windlass or capstan tested, so the station is ready before the vessel is alongside.",
      "Report the station ready to the bridge, and keep the communication running both ways throughout the operation.",
      "Run the typical mooring sequence: the heaving line across first, then the first line ashore, then the spring made fast early to control the vessel's movement in coordination with the bridge manoeuvre, then the remaining lines, and finally the fine adjustment until the vessel is fast on her mooring plan.",
      "Keep the station-to-bridge communication continuous through the whole faena. Boundary (closing the circle with Maniobras I): there the lens was the ship being manoeuvred alongside; here it is the deck faena that moors her. Report the integrated operation in clear maritime English."
    ],
    deliverable: "A note in English running the integrated arrival from the mooring station: preparation (lines coiled and clear, fenders, heaving lines, windlass tested), the station-ready report, the mooring sequence (heaving line, first line ashore, early spring coordinated with the bridge, remaining lines, fine adjustment to the mooring plan), and continuous station-to-bridge communication, closing the circle with the Maniobras I berthing manoeuvre.",
    assessmentCriteria: [
      "The station preparation is complete (lines coiled and clear by side, fenders, heaving lines, windlass/capstan tested).",
      "The station-ready report and the two-way communication are stated.",
      "The mooring sequence is correct (heaving line, first line ashore, early spring coordinated with the bridge, remaining lines, fine adjustment to the mooring plan).",
      "The communication is continuous and the boundary with Maniobras I is respected (ship manoeuvred there, faena that moors her here), integrating weeks 1-7 in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
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
    subjectCode: "C0011",
    subjectName: "Educación Física V",
    subjectId: "pn-s5-educacion-fisica-v",
    unit: "Acondicionamiento cardiovascular",
    topic: "Entrenamiento cardiovascular por intensidad percibida",
    week: 5,
    taskId: "pn-c0011v-w05-cardio-intensity-zones",
    taskTitle: "Train Cardio By Perceived Effort",
    scenario: "The training officer asks the cadet to explain how to train the heart and lungs on board by reading the intensity of the effort, using perception rather than any prescribed number.",
    instructions: [
      "Explain rating of perceived effort as the practical tool: the cadet reads intensity on a felt scale from very light through moderate and vigorous to maximal, judging it by how the body feels during the effort.",
      "Explain the talk test as a simple companion: if you can hold a conversation the effort is moderate, and if you can only speak in short phrases it is vigorous; keep intensity guided by perceived effort and the talk test, not by any prescribed pulse count or numeric heart-rate zone.",
      "Distinguish continuous training (a steady sustained pace) from interval training (alternating harder effort with easier recovery) and say what each develops (a broad aerobic base versus a higher tolerance for hard bursts).",
      "Apply it to the ship: brisk work on deck, climbing ladders and moving in limited space can all raise the effort, so the cadet can train within the space available. Report in clear English using correct fitness terminology."
    ],
    deliverable: "A note in English on training cardio by perceived effort: the perceived-effort scale and the talk test as the guides (no prescribed heart-rate numbers or zones), continuous versus interval training and what each develops, and how to apply it in the limited space of the ship.",
    assessmentCriteria: [
      "Perceived effort is correctly explained as the practical tool for reading intensity.",
      "The talk test is correct (conversation = moderate, short phrases = vigorous) and intensity is guided by perception, with no prescribed heart-rate numbers or numeric zones.",
      "Continuous and interval training are correctly distinguished with what each develops.",
      "The application to the ship's limited space is realistic, in clear English using correct fitness terminology."
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
    unit: "Prevención de lesiones",
    topic: "Prevención de lesiones en el entrenamiento físico",
    week: 6,
    taskId: "pn-c0011v-w06-injury-prevention-training",
    taskTitle: "Prevent Injury In Physical Training",
    scenario: "The training officer asks the cadet to explain how to train without getting hurt, treating injury prevention as physiology rather than ritual.",
    instructions: [
      "Explain the warm-up by its physiological reason: it raises muscle temperature and prepares the joints for work so the tissues are ready to load, and pair it with a cool-down to ease the body down afterwards, not as a habit but because of what each does to the body.",
      "Explain gradual progression: do not increase volume, intensity and frequency all at once, because loading the body on several fronts together is where overuse injury starts.",
      "State the alarm signs that mean STOP: a sharp or stabbing pain means stop every time, while the ordinary discomfort of hard effort is acceptable, and knowing the difference between the two is what protects the cadet.",
      "State that rest is part of the training, because the body adapts and gets stronger while it recovers, not only while it works. Boundary: safe lifting technique was covered in Semester I and watch-station ergonomics in Semester III; here the concern is the sports injury that happens in training. Report in clear English using correct fitness terminology."
    ],
    deliverable: "A note in English on preventing training injury: the warm-up and cool-down by their physiological reason, gradual progression (not raising volume, intensity and frequency at once), the STOP signs (sharp/stabbing pain always, versus normal effort discomfort), and rest as part of training, distinct from Semester I lifting technique and Semester III watch ergonomics.",
    assessmentCriteria: [
      "The warm-up and cool-down are explained by their physiological reason, not as a ritual.",
      "Gradual progression is correct (not increasing volume, intensity and frequency together).",
      "The STOP signs are correct (sharp/stabbing pain always stop; normal effort discomfort acceptable) and the difference is emphasised.",
      "Rest is treated as part of training and the Semester I / Semester III boundary is respected, in clear English."
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
    unit: "Natación",
    topic: "Natación de rescate básica",
    week: 7,
    taskId: "pn-c0011v-w07-rescue-swimming",
    taskTitle: "Perform A Basic Water Rescue",
    scenario: "A person is in the water in difficulty. Completing the aquatic progression of the subject, the instructor asks the cadet to carry out a basic water rescue in the correct order of priority.",
    instructions: [
      "State the rescue hierarchy in order, from safest to most dangerous: REACH the person with an object from a safe point, then THROW a lifebuoy or line, then TOW them with a boat if one is available, and only as a LAST RESORT swim out to the rescue.",
      "Describe the safe approach if you must enter the water: talk to the person and calm them, and approach from BEHIND, because a panicking person grabs whatever floats, including the rescuer.",
      "Describe a basic tow: support the person by the chin or under the armpits and keep their airway clear of the water while you bring them in.",
      "State how to break a panic grip and the first rule of rescue: if the person seizes you, submerge, because a drowning person is trying to float and will let go of what sinks; and never forget that a rescuer who becomes a victim doubles the emergency, so your own safety is the first rule of the rescue. Report in clear English suitable for a safety briefing."
    ],
    deliverable: "A brief in English on a basic water rescue: the hierarchy (reach, then throw, then tow with a boat, then swim only as a last resort), the safe approach from behind after calming the person, a basic tow keeping the airway clear, breaking a panic grip by submerging, and the rule that the rescuer's own safety comes first.",
    assessmentCriteria: [
      "The rescue hierarchy is in the correct order (reach, throw, tow with a boat, swim only as a last resort).",
      "The safe approach is correct (calm the person, approach from behind).",
      "The basic tow keeps the airway clear (chin or armpits) and the grip defence is correct (submerge to make the person let go).",
      "The rescuer-safety-first rule is stated (a rescuer who becomes a victim doubles the emergency), in clear English suitable for a safety briefing."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0011",
    subjectName: "Educación Física V",
    subjectId: "pn-s5-educacion-fisica-v",
    unit: "Plan personal",
    topic: "El plan de entrenamiento del período de mar",
    week: 8,
    taskId: "pn-c0011v-w08-sea-period-training-plan",
    taskTitle: "Plan Your Training For The Sea Period",
    scenario: "As the closing task of the subject, the cadet must design a personal training plan for a whole sea period. The training officer asks the cadet to build a plan that fits ship life and holds the fitness needed for the work.",
    instructions: [
      "State the real constraints of the sea period: limited space and equipment, and rotating watches that break up rest, so the plan has to work in short blocks around the watch routine rather than in a gym.",
      "Integrate the capacities built this semester: strength for heavy deck work (week 1), flexibility for awkward spaces (week 2), cardio judged by perceived effort (week 5), and injury prevention with warm-up, progression and rest (week 6), balancing them across the week.",
      "Make sustainability the test of the plan: a little done consistently beats a lot started and dropped, so the plan should be light enough to keep through fatigue and a busy watch bill.",
      "Keep the purpose honest: the aim is the capacity to do the work and to stay well during the embarkation, not a performance record, a body-weight figure or a diet, and the plan sets no extreme goals. Boundary: the basic onboard routine was Semester I and the functional self-assessment was Semester III; here it is the integral sea-period plan built on the Semester V capacities. Report in clear maritime English."
    ],
    deliverable: "A note in English designing a sea-period training plan: the real constraints (limited space/equipment, rotating watches), the integration of the Semester V capacities (strength, flexibility, perceived-effort cardio, injury prevention) around the watch routine, sustainability as the test, and an honest purpose (capacity for work and wellbeing, not performance, body weight or a diet, no extreme goals), building on but distinct from the Semester I routine and the Semester III self-assessment.",
    assessmentCriteria: [
      "The sea-period constraints are addressed (limited space/equipment, rotating watches breaking up rest).",
      "The Semester V capacities are integrated and balanced (strength, flexibility, perceived-effort cardio, injury prevention).",
      "Sustainability is used as the test of the plan (a little done consistently over a lot abandoned).",
      "The purpose is kept to capacity for the work and wellbeing, with no performance, body-weight or diet targets and no extreme goals, and the Semester I / Semester III boundary is respected, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
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
    subjectCode: "C0104",
    subjectName: "Ética Profesional",
    subjectId: "pn-s5-etica-profesional",
    unit: "Ética y Moral",
    topic: "El método de análisis del dilema ético a bordo",
    week: 5,
    taskId: "pn-c0104-w05-ethical-dilemma-method",
    taskTitle: "Analyse An Ethical Dilemma Step By Step",
    scenario: "A hard choice at sea rarely announces itself as right versus wrong. Building on the ethical reflection of week 2, the officer asks the cadet to work a real dilemma through a method of analysis rather than deciding on impulse.",
    instructions: [
      "Work the method in order, as a discipline of reasoning and not a set of commandments: (1) identify the VALUES in conflict, remembering that the hardest dilemmas are right versus right, such as safety against loyalty or honesty against compassion; (2) identify who is AFFECTED by each course of action; (3) lay out the real OPTIONS, which are rarely only two; (4) weigh the CONSEQUENCES of each, in the short and the long term; (5) decide and be able to GIVE REASONS for the decision.",
      "Apply it to a non-environmental maritime dilemma: the commercial pressure to keep the schedule set against a genuine doubt about safety.",
      "Apply it to a second one: discovering an error made by a colleague you like and respect, which nonetheless has to be reported.",
      "State plainly what the method does and does not do: it does not hand you the single correct answer, because a right-versus-right dilemma has no one solution; what it gives is the discipline to decide by reasoning rather than by impulse or pressure. Report in clear maritime English."
    ],
    deliverable: "A note in English working two non-environmental dilemmas (schedule pressure versus a safety doubt; a liked colleague's error that must be reported) through the five-step method (values in conflict, affected parties, real options, consequences short and long term, decide and give reasons), stated as a discipline of reasoning that does not hand over a single answer.",
    assessmentCriteria: [
      "The five steps are applied in order (conflicting values, affected parties, real options, consequences, decide with reasons).",
      "The dilemmas are non-environmental and the right-versus-right nature is recognised (e.g. safety vs loyalty).",
      "The method is presented as a discipline of reasoning, not a formula that yields the single correct answer.",
      "The reasoning is honest about there being no one solution to a right-versus-right dilemma, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0104",
    subjectName: "Ética Profesional",
    subjectId: "pn-s5-etica-profesional",
    unit: "Ética y profesión",
    topic: "La cultura justa y el deber ético de reportar",
    week: 6,
    taskId: "pn-c0104-w06-just-culture-reporting",
    taskTitle: "Explain Just Culture And The Duty To Report",
    scenario: "The officer asks the cadet to explain why a seafarer reports near-misses and their own mistakes, and why a just culture, not a blame culture, is what keeps a ship safe.",
    instructions: [
      "Explain why errors must be reported: a blame-and-punishment culture drives mistakes into hiding, and a hidden mistake is repeated until it finally causes harm, whereas a just culture turns the same mistake into learning for everyone.",
      "Draw the distinction that a just culture rests on, keeping it sharp: an HONEST ERROR (a human slip, learned from and not punished), NEGLIGENCE (a failure to attend to a known duty), and a DELIBERATE VIOLATION (knowingly breaking a rule).",
      "State clearly that a just culture is NOT impunity: negligence and deliberate violation do carry consequences, and it is exactly that line that gives the crew confidence to report the honest errors, because they trust the system to tell the difference.",
      "State the ethical duty to report an unsafe condition even when it is uncomfortable or reflects on oneself. Boundary: writing the near-miss report as a document was covered in Advanced Writing; here the concern is the moral reason for reporting. Report in clear maritime English."
    ],
    deliverable: "A note in English on just culture and the duty to report: why a blame culture hides mistakes while a just culture makes them learning, the sharp triad (honest error not punished / negligence / deliberate violation), the point that just culture is not impunity because the last two carry consequences, and the ethical duty to report unsafe conditions, distinct from the Advanced Writing near-miss document.",
    assessmentCriteria: [
      "The blame-versus-just culture contrast is correct (blame hides errors and they repeat; just culture makes them learning).",
      "The triad is sharp and correct (honest error not punished; negligence and deliberate violation as distinct).",
      "It is explicit that just culture is not impunity (negligence and deliberate violation carry consequences, and that line builds trust).",
      "The ethical duty to report unsafe conditions is stated and the Advanced Writing boundary is respected, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0104",
    subjectName: "Ética Profesional",
    subjectId: "pn-s5-etica-profesional",
    unit: "Ética y profesión",
    topic: "La ética de la fatiga y el reconocimiento de los límites",
    week: 7,
    taskId: "pn-c0104-w07-ethics-of-fatigue-limits",
    taskTitle: "Face The Ethics Of Fatigue And Limits",
    scenario: "The officer asks the cadet to treat fatigue not as a physical fact but as an ethical question: the duty to speak up about a limit that puts other lives at risk.",
    instructions: [
      "Frame saying 'I am not fit for this' as an ETHICAL act rather than a weakness, because fatigue that is kept silent puts other lives at risk: a drowsy watchkeeper does not gamble with their own watch alone but with everyone aboard and everyone they might run down.",
      "Set the pressure to finish the task against the duty to recognise the limit, and distinguish this honestly from simply dodging work: recognising a real limit that endangers others is a duty, while using 'fatigue' to evade a fair task is not.",
      "State the double responsibility: the person who orders others to work past known limits carries as much of the ethical weight as the person who stays silent about their own.",
      "Name the quality required as moral courage: the uncomfortable word said in time. Boundary: the physiology of fatigue and the rest-hour rules were covered in Physical Education I; here the concern is the conscience that decides to speak. Report in clear maritime English."
    ],
    deliverable: "A note in English on the ethics of fatigue: saying 'I am not fit' as an ethical act (silent fatigue risks other lives), the pressure to finish versus the duty to recognise a limit (and how that differs from dodging work), the double responsibility of the one who orders past limits and the one who stays silent, and moral courage as the uncomfortable word in time, distinct from the Physical Education I physiology and rest rules.",
    assessmentCriteria: [
      "Speaking up about fatigue is framed as an ethical act, with the point that silent fatigue endangers others, not just oneself.",
      "The message is the duty to COMMUNICATE the limit, clearly distinguished from refusing or dodging a fair task.",
      "The double responsibility is stated (ordering past known limits weighs as much as staying silent).",
      "Moral courage (the uncomfortable word in time) is named and the Physical Education I boundary is respected, in clear maritime English."
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
    topic: "El perfil ético del oficial y su código personal de conducta",
    week: 8,
    taskId: "pn-c0104-w08-officers-ethical-profile",
    taskTitle: "Write Your Ethical Profile As An Officer",
    scenario: "As the closing task of the subject, the cadet must draw the ethical profile of the officer they intend to be, turning values into concrete conduct and pointing towards the leadership still to come.",
    instructions: [
      "Turn the seafarer values of week 3 into a PERSONAL CODE of concrete commitments, written by the cadet: use commitments like 'I will never sign for what I have not checked myself' and 'I will report what I see, whether it discomforts me or not' only as examples of the FORMAT, and write your own.",
      "Explain that COHERENCE between word and deed is the real measure of character, because a crew believes what it sees an officer do, not what it hears an officer say.",
      "Explain the officer as an example: moral authority is earned by conduct and comes before formal authority, so a rank commands compliance but character commands respect.",
      "Point towards the next subject without developing it: how this ethical character is carried into leading others is the ground of Leadership; here the task is the individual profile. Report your ethical profile in clear maritime English."
    ],
    deliverable: "A note in English drawing the officer's ethical profile: a personal code of concrete commitments written by the cadet (the given commitments used only as format examples), coherence between word and deed as the measure of character, and moral authority preceding formal authority, pointing towards Leadership without developing it.",
    assessmentCriteria: [
      "The values of week 3 are turned into concrete personal commitments written by the cadet, with the given examples treated as format, not imposition.",
      "Coherence between word and deed is explained as the real measure of character.",
      "Moral authority is correctly placed before formal authority (character commands respect, rank commands compliance).",
      "The bridge to Leadership is drawn without developing leadership itself, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
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
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0105",
    subjectName: "Liderazgo",
    subjectId: "pn-s5-liderazgo",
    unit: "La comunicación del líder",
    topic: "Instrucciones claras, verificación de la comprensión, escucha activa y feedback",
    week: 5,
    taskId: "pn-c0105-w05-leader-communication",
    taskTitle: "Communicate As A Leader On Watch",
    scenario: "An officer's orders are only as good as the crew's understanding of them. Building on the leadership styles of week 1 and the emotional intelligence of week 2, the officer asks the cadet to master the everyday communication of command: the clear instruction, the confirmed understanding, the listening that gathers information, and the feedback that corrects without wounding.",
    instructions: [
      "Give a CLEAR instruction: state what, who and when, and — when time allows — the why, because an instruction carried with its reason is executed better and adapted intelligently when the situation shifts, whereas the bare order breaks the moment reality differs from the plan.",
      "Verify understanding, and be explicit that this is NOT distrust: the closed-loop read-back is an established practice from Maritime English V, so do not re-teach it as a language drill; here give the human reason — verifying closes the circuit in which a misunderstanding kills, and the officer who checks is not doubting the sailor but refusing to let a silent gap cost a life.",
      "Use ACTIVE LISTENING as a tool of command: the leader who does not listen decides with half the information and, worse, teaches the team to stay silent; but keep the line clear that listening is not surrendering the decision — the officer listens AND decides, taking in the crew's information and then owning the call.",
      "Give feedback that corrects the CONDUCT without humiliating the PERSON: concrete, in time, and with the corrective given in private while recognition is given in public. Report in clear maritime English."
    ],
    deliverable: "A note in English on the leader's communication: the clear instruction (what, who, when, and the why when time allows), verifying understanding as closing the circuit rather than distrust (the Maritime English V closed-loop as established practice, not re-taught), active listening as a command tool that still leaves the decision with the officer, and feedback that corrects conduct without humiliating the person (concrete, timely, corrective in private and recognition in public).",
    assessmentCriteria: [
      "The clear instruction covers what, who and when, and the why when time allows, with the reason that context improves execution.",
      "Verifying understanding is framed as closing the circuit, not distrust, referencing the Maritime English V closed-loop as established practice rather than re-teaching it.",
      "Active listening is presented as a command tool, with the distinction that the officer listens AND decides (listening is not surrendering the call).",
      "Feedback corrects conduct without humiliating the person (concrete, timely, corrective in private, recognition in public), in clear maritime English."
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
    unit: "La comunicación del líder",
    topic: "La asertividad graduada y el desafío respetuoso",
    week: 6,
    taskId: "pn-c0105-w06-graded-assertiveness",
    taskTitle: "Speak Up Through Graded Assertiveness",
    scenario: "The most dangerous words at sea are the ones a subordinate saw the need to say and did not. Receiving the moral courage of Professional Ethics week 7 as an established value, the officer asks the cadet to turn that courage into a technique: how to say the difficult thing to the one in command, and how a leader makes it safe to be challenged.",
    instructions: [
      "Climb the SCALE of assertiveness in order — the hint, the stated preference, the expressed concern, the stated problem, and finally the formal alert that demands a response — and explain why one moves up a grade when there is no reaction: the aim is to escalate the FORCE of the communication until the danger is addressed, not to nag.",
      "State the subordinate's DUTY to question a dangerous decision: maritime and aviation history is full of accidents where someone saw the error and did not dare to speak, so absolute deference to rank is a safety hazard, not a virtue.",
      "Draw the line sharply, as the heart of the task, between CHALLENGING a dangerous decision and DISOBEYING a legitimate order: graded assertiveness voices the concern and escalates it until it is answered — it is not insubordination and it is not a licence to refuse a lawful command; make this distinction unmistakable.",
      "Turn to the LEADER's side: the officer builds the climate where being challenged is safe — thanking the person for the challenge and never punishing a good-faith alert — because a team that has been punished for speaking will fall silent exactly when the officer most needs to hear it. This puts the moral courage received from Professional Ethics week 7 to work as technique, without re-teaching it. Report in clear maritime English."
    ],
    deliverable: "A note in English on graded assertiveness and respectful challenge: the assertiveness scale (hint, preference, concern, problem, formal alert) and why one escalates when there is no reaction, the subordinate's duty to question a dangerous decision (deference to rank as a safety hazard), the sharp line between challenging a dangerous decision and disobeying a legitimate order, and the leader's duty to make challenge safe (thank it, never punish a good-faith alert), building on the moral courage of Professional Ethics week 7.",
    assessmentCriteria: [
      "The assertiveness scale is given in order and the reason for escalating a grade when unanswered is the increasing force needed to address the danger.",
      "The duty to question a dangerous decision is stated, with absolute deference to rank identified as a safety hazard.",
      "The line between challenging a dangerous decision and disobeying a legitimate order is unmistakable (assertiveness is escalation of communication, not insubordination).",
      "The leader's duty to make challenge safe is covered (thank the challenge, never punish a good-faith alert), putting Professional Ethics week 7 to work without re-teaching it, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0105",
    subjectName: "Liderazgo",
    subjectId: "pn-s5-liderazgo",
    unit: "La gestión del equipo",
    topic: "La gestión del error y del conflicto en el equipo",
    week: 7,
    taskId: "pn-c0105-w07-error-and-conflict",
    taskTitle: "Manage Error And Conflict In The Team",
    scenario: "A team that is punished for its mistakes hides them, and a crew in unspoken conflict has stopped working as one. The officer asks the cadet to handle both: correcting an error without destroying the person, and mediating a conflict before it escalates.",
    instructions: [
      "When the team makes a mistake, correct the FAILURE without destroying the PERSON: the just culture of Professional Ethics week 6 is the established FRAME here, not re-taught — the practical skill is to separate the fact from the judgement, ask before you sentence (find out what actually happened before assigning blame), and correct in private while recognising in public, never the reverse.",
      "Detect a conflict between crew members EARLY and mediate before it escalates: listen to both sides separately and then together, and look for the common interest, so the resolution rests on the shared goal rather than on who wins — the win-win spirit of week 4 is the reference here, not re-taught.",
      "Know the LIMIT of mediation: some conflicts exceed the mediator — harassment, a safety risk, or a breakdown that will not settle — and the officer's job then is to ELEVATE the matter rather than keep trying alone; recognising that limit is part of the skill, not a failure of it.",
      "Tie it together: correcting error and mediating conflict both protect the same thing — a team that trusts it can be honest without being destroyed. Report in clear maritime English."
    ],
    deliverable: "A note in English on managing error and conflict: correcting the failure without destroying the person (separate fact from judgement, ask before sentencing, correct in private and recognise in public — the just culture of Professional Ethics week 6 as frame), mediating conflict early (both sides separately then together, seeking the common interest, with the week 4 win-win spirit as reference), and knowing the limit of mediation (harassment, safety risk or breakdown must be elevated, not handled alone).",
    assessmentCriteria: [
      "Correcting error separates the fact from the judgement, asks before sentencing, and corrects in private while recognising in public (not the reverse), using the just culture of Professional Ethics week 6 as an established frame.",
      "Conflict is detected early and mediated (both sides separately then together, common interest sought), with the week 4 win-win spirit referenced rather than re-taught.",
      "The limit of mediation is recognised (harassment, safety risk or a breakdown that will not settle must be elevated, not handled alone).",
      "The account ties correction and mediation to protecting a team that can be honest without being destroyed, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0105",
    subjectName: "Liderazgo",
    subjectId: "pn-s5-liderazgo",
    unit: "El liderazgo en la operación",
    topic: "El liderazgo del oficial de guardia",
    week: 8,
    taskId: "pn-c0105-w08-officer-of-the-watch-leadership",
    taskTitle: "Lead The Bridge Team As Officer Of The Watch",
    scenario: "This is where every thread of the subject comes together in one role: the officer of the watch leading the bridge team. As the closing task of the subject and of the semester, the cadet must lead the watch in the routine and in the emergency.",
    instructions: [
      "Lead the bridge team through the watch: assign tasks according to each person's capacity, and SUPERVISE without smothering — micromanagement kills the team's judgement, so delegation is not abandonment and control is not micromanagement — and keep the SHARED situational awareness alive, because a team that knows the officer's intention is the team that catches the deviation.",
      "Explain the authority that is EARNED, not issued: receive the 'character commands respect' of Professional Ethics week 8 as an established principle and put it to work in the role — the watch obeys the rank, but it follows the officer whose competence and steadiness it has come to trust.",
      "Lead in the EMERGENCY: the leader's calm is contagious — and so is panic — so hold the firm voice, the clear order, and the two-second pause that prevents the wrong order (the pause is not slowness, it is the discipline that keeps the first reaction from becoming the wrong command). Boundary: commanding a fire or damage-control scenario as an organised system belongs to the emergency-management training; here the concern is the human leadership within it — the calm that steadies the team.",
      "Close the semester: draw the communication of week 5, the graded assertiveness of week 6 and the error-and-conflict handling of week 7 into the single figure of the officer of the watch who is trusted in the calm and steady in the storm. Report in clear maritime English."
    ],
    deliverable: "A note in English on leading as officer of the watch: leading the bridge team (assign by capacity, supervise without smothering — delegation is not abandonment, control is not micromanagement — keep shared situational awareness so the team catches deviations), authority as earned (the 'character commands respect' of Professional Ethics week 8 put to work in the role), leading in emergency (contagious calm, firm voice, clear order, and the two-second pause that is discipline not slowness, bounded from the emergency-management command system), integrating weeks 5 to 7 as the semester capstone.",
    assessmentCriteria: [
      "Leading the watch covers assigning tasks by capacity and supervising without smothering (delegation is not abandonment, control is not micromanagement) and keeping shared situational awareness so the team catches deviations.",
      "Authority is explained as earned, receiving the 'character commands respect' of Professional Ethics week 8 as an established principle put to work in the role.",
      "Leading in emergency covers the contagious calm, the firm voice and clear order, and the two-second pause that prevents the wrong order (the pause is discipline, not slowness), bounded from the emergency-management command system.",
      "The task integrates the earlier weeks (communication, graded assertiveness, error and conflict) into the officer of the watch as the semester capstone, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "MOT529",
    subjectName: "Motores I",
    subjectId: "mn-s5-motores-i",
    unit: "Motores de combustión",
    topic: "Diferencia entre motor marino y terrestre",
    week: 1,
    taskId: "mn-mot529-w01-marine-vs-land-engine",
    taskTitle: "Compare Marine And Land Engines",
    scenario: "The chief engineer asks the cadet to explain how a marine diesel engine differs from a land engine and why those differences matter on board.",
    instructions: [
      "State two ways a marine diesel engine differs from a land engine.",
      "Explain why a marine engine must run reliably for long periods.",
      "Explain one feature that suits the engine to the marine environment.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English comparing marine and land diesel engines, with two differences and why they matter at sea.",
    assessmentCriteria: [
      "The differences are valid.",
      "The reliability reasoning is sound.",
      "The marine-suited feature is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "MOT529",
    subjectName: "Motores I",
    subjectId: "mn-s5-motores-i",
    unit: "Ciclos operativos",
    topic: "4 tiempos",
    week: 2,
    taskId: "mn-mot529-w02-four-stroke-cycle",
    taskTitle: "Explain The Four-Stroke Cycle",
    scenario: "The engineer asks the cadet to explain the four-stroke diesel cycle and what happens in each stroke.",
    instructions: [
      "Name the four strokes in order.",
      "State what happens in each stroke (intake, compression, power, exhaust).",
      "Explain when fuel is injected and why.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining the four-stroke diesel cycle, what happens in each stroke, and when fuel is injected.",
    assessmentCriteria: [
      "The four strokes are correct and in order.",
      "Each stroke is correctly described.",
      "The fuel injection timing is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "MOT529",
    subjectName: "Motores I",
    subjectId: "mn-s5-motores-i",
    unit: "Sistemas principales de la máquina principal",
    topic: "Lubricación",
    week: 3,
    taskId: "mn-mot529-w03-lubrication-system",
    taskTitle: "Explain The Engine Lubrication System",
    scenario: "The engineer asks the cadet to explain how the main engine lubrication system works and why it is critical to engine survival.",
    instructions: [
      "State the purpose of the lubrication system.",
      "Describe how oil circulates to the bearings and moving parts.",
      "Explain what happens if oil pressure is lost.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining the engine lubrication system, how oil circulates, and the danger of losing oil pressure.",
    assessmentCriteria: [
      "The purpose is correctly stated.",
      "The oil circulation is correct.",
      "The loss-of-pressure danger is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "MOT529",
    subjectName: "Motores I",
    subjectId: "mn-s5-motores-i",
    unit: "Sobre alimentación",
    topic: "Funcionamiento",
    week: 4,
    taskId: "mn-mot529-w04-turbocharging",
    taskTitle: "Explain Turbocharging Of A Diesel Engine",
    scenario: "The engineer asks the cadet to explain how turbocharging works and why it increases the power of a diesel engine.",
    instructions: [
      "Explain what a turbocharger does.",
      "Explain how it uses exhaust gas to compress intake air.",
      "State why more air allows more power from the engine.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining turbocharging: what it does, how it uses exhaust gas, and why it increases power.",
    assessmentCriteria: [
      "The turbocharger function is correct.",
      "The exhaust-to-intake process is correct.",
      "The air-power reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "MEF532",
    subjectName: "Mecánica de fluidos",
    subjectId: "mn-s5-mecanica-fluidos",
    unit: "Propiedades de los fluidos",
    topic: "Viscosidad",
    week: 1,
    taskId: "mn-mef532-w01-viscosity",
    taskTitle: "Explain Viscosity And Fuel Heating",
    scenario: "Heavy fuel oil must be heated before injection. The engineer asks the cadet to explain viscosity and why fuel is heated to the right viscosity.",
    instructions: [
      "Define viscosity in your own words.",
      "Explain how temperature affects the viscosity of fuel oil.",
      "Explain why fuel must reach the correct viscosity before injection.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining viscosity, how temperature affects it, and why fuel is heated to the correct viscosity.",
    assessmentCriteria: [
      "Viscosity is correctly defined.",
      "The temperature effect is correct.",
      "The injection reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "MEF532",
    subjectName: "Mecánica de fluidos",
    subjectId: "mn-s5-mecanica-fluidos",
    unit: "Líquidos en movimiento",
    topic: "Ecuaciones de continuidad",
    week: 2,
    taskId: "mn-mef532-w02-continuity",
    taskTitle: "Apply The Continuity Equation To A Pipe",
    scenario: "Fluid flows through a pipe that narrows. The engineer asks the cadet to use the continuity equation to explain what happens to the flow velocity.",
    instructions: [
      "State the continuity equation in words (flow in = flow out).",
      "Explain what happens to velocity when the pipe narrows.",
      "Give an engine-room example where this matters.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining the continuity equation, the velocity change in a narrowing pipe, and an engine-room example.",
    assessmentCriteria: [
      "The continuity principle is correct.",
      "The velocity change is correct.",
      "The example is relevant.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "MEF532",
    subjectName: "Mecánica de fluidos",
    subjectId: "mn-s5-mecanica-fluidos",
    unit: "Fluido ideal",
    topic: "Establecer la ecuación de Bernoulli",
    week: 3,
    taskId: "mn-mef532-w03-bernoulli",
    taskTitle: "Apply Bernoulli's Equation",
    scenario: "The engineer asks the cadet to explain Bernoulli's equation and how it relates pressure and velocity in a flowing fluid.",
    instructions: [
      "State what Bernoulli's equation relates (pressure, velocity, height).",
      "Explain what happens to pressure when fluid speeds up.",
      "Give an engine-room application (e.g. venturi, flow measurement).",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining Bernoulli's equation, the pressure-velocity relationship, and an engine-room application.",
    assessmentCriteria: [
      "Bernoulli's relationship is correct.",
      "The pressure-velocity effect is correct.",
      "The application is relevant.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "MEF532",
    subjectName: "Mecánica de fluidos",
    subjectId: "mn-s5-mecanica-fluidos",
    unit: "Conductos cerrados",
    topic: "El golpe de ariete",
    week: 4,
    taskId: "mn-mef532-w04-water-hammer",
    taskTitle: "Explain And Prevent Water Hammer",
    scenario: "Closing a valve too fast causes water hammer in a pipe system. The engineer asks the cadet to explain what water hammer is and how to prevent it.",
    instructions: [
      "Explain what water hammer is and what causes it.",
      "Explain the damage it can do to a pipe system.",
      "State how to prevent water hammer (e.g. closing valves slowly).",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining water hammer, the damage it causes, and how to prevent it.",
    assessmentCriteria: [
      "Water hammer is correctly explained.",
      "The damage is correctly described.",
      "The prevention method is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "MMA533",
    subjectName: "Maquinaria Marítima Auxiliar",
    subjectId: "mn-s5-maquinaria-maritima-auxiliar",
    unit: "Separador de aguas oleosas",
    topic: "Funcionamiento",
    week: 1,
    taskId: "mn-mma533-w01-oily-water-separator",
    taskTitle: "Explain The Oily Water Separator",
    scenario: "Before discharging bilge water, it must pass through the oily water separator. The engineer asks the cadet to explain how it works and why it is legally required.",
    instructions: [
      "Explain the purpose of the oily water separator.",
      "Describe in basic terms how it separates oil from water.",
      "State the legal discharge limit it must meet (15 ppm) and why it matters.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining the oily water separator, how it works, and the 15 ppm discharge limit it must meet.",
    assessmentCriteria: [
      "The purpose is correctly stated.",
      "The separation principle is correct.",
      "The discharge limit and its importance are correct.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "MMA533",
    subjectName: "Maquinaria Marítima Auxiliar",
    subjectId: "mn-s5-maquinaria-maritima-auxiliar",
    unit: "Purificadores",
    topic: "Puesta en servicio",
    week: 2,
    taskId: "mn-mma533-w02-purifier",
    taskTitle: "Put A Fuel Purifier Into Service",
    scenario: "Fuel and oil are cleaned by a centrifugal purifier. The engineer asks the cadet to explain how a purifier works and the checks before putting it into service.",
    instructions: [
      "Explain how a centrifugal purifier separates water and solids from oil.",
      "List two checks before starting the purifier.",
      "Explain why clean fuel/oil protects the engine.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining how a centrifugal purifier works, two pre-start checks, and why clean fuel/oil matters.",
    assessmentCriteria: [
      "The purifier principle is correct.",
      "The pre-start checks are relevant.",
      "The clean-oil reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "MMA533",
    subjectName: "Maquinaria Marítima Auxiliar",
    subjectId: "mn-s5-maquinaria-maritima-auxiliar",
    unit: "Generador de agua dulce",
    topic: "Desalinizadora",
    week: 3,
    taskId: "mn-mma533-w03-fresh-water-generator",
    taskTitle: "Explain The Fresh Water Generator",
    scenario: "The ship makes its own fresh water from seawater. The engineer asks the cadet to explain how the fresh water generator (evaporator) produces fresh water.",
    instructions: [
      "Explain how the fresh water generator evaporates seawater at low pressure.",
      "Explain why a vacuum lets seawater boil at a lower temperature.",
      "State one use of the fresh water produced.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining how the fresh water generator produces fresh water from seawater using low-pressure evaporation.",
    assessmentCriteria: [
      "The evaporation process is correct.",
      "The vacuum/boiling-point reasoning is correct.",
      "The use of the water is valid.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "MMA533",
    subjectName: "Maquinaria Marítima Auxiliar",
    subjectId: "mn-s5-maquinaria-maritima-auxiliar",
    unit: "Planta de gas inerte",
    topic: "Importancia de la planta de gas inerte",
    week: 4,
    taskId: "mn-mma533-w04-inert-gas",
    taskTitle: "Explain The Importance Of Inert Gas",
    scenario: "On tankers, the inert gas plant prevents explosions in cargo tanks. The engineer asks the cadet to explain how inert gas makes a tank safe.",
    instructions: [
      "Explain what inert gas does to the atmosphere in a cargo tank.",
      "Explain why reducing oxygen prevents an explosion.",
      "State why this is critical on an oil or gas tanker.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining how inert gas makes a cargo tank safe by reducing oxygen, and why it is critical on tankers.",
    assessmentCriteria: [
      "The effect of inert gas is correct.",
      "The oxygen-explosion reasoning is correct.",
      "The tanker importance is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "EIA531",
    subjectName: "Electrotecnia",
    subjectId: "mn-s5-electrotecnia",
    unit: "Sistema trifásico de Corriente Alterna",
    topic: "Elementos del sistema trifásico",
    week: 1,
    taskId: "mn-eia531-w01-three-phase",
    taskTitle: "Explain The Three-Phase System",
    scenario: "The ship's power is generated and distributed as three-phase AC. The engineer asks the cadet to explain what a three-phase system is and why it is used on board.",
    instructions: [
      "Explain what a three-phase AC system is.",
      "State one advantage of three-phase over single-phase for ship power.",
      "Name where three-phase power is used on board.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining the three-phase AC system, one advantage over single-phase, and where it is used on board.",
    assessmentCriteria: [
      "The three-phase concept is correct.",
      "The advantage is valid.",
      "The use case is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "EIA531",
    subjectName: "Electrotecnia",
    subjectId: "mn-s5-electrotecnia",
    unit: "Sistema trifásico de Corriente Alterna",
    topic: "Conexión en estrella (Y)",
    week: 2,
    taskId: "mn-eia531-w02-star-delta",
    taskTitle: "Compare Star And Delta Connections",
    scenario: "Three-phase equipment can be connected in star or delta. The engineer asks the cadet to explain the difference and where each is used.",
    instructions: [
      "Describe the star (Y) connection and the delta connection.",
      "State one electrical difference between them (e.g. voltage relationship).",
      "State a typical use of each on board.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English comparing star and delta connections, an electrical difference, and a use of each.",
    assessmentCriteria: [
      "Both connections are correctly described.",
      "The electrical difference is correct.",
      "The use cases are valid.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "EIA531",
    subjectName: "Electrotecnia",
    subjectId: "mn-s5-electrotecnia",
    unit: "Sincronización",
    topic: "Frecuencia",
    week: 3,
    taskId: "mn-eia531-w03-synchronisation",
    taskTitle: "Synchronise A Generator To The Busbar",
    scenario: "Before paralleling a second generator, it must be synchronised. The engineer asks the cadet to explain the conditions for synchronising a generator to the busbar.",
    instructions: [
      "State the conditions that must be met to synchronise (voltage, frequency, phase sequence, phase).",
      "Explain what happens if a generator is connected out of synchronisation.",
      "Explain why frequency must match before closing the breaker.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining the conditions for synchronising a generator and the danger of connecting out of sync.",
    assessmentCriteria: [
      "The synchronising conditions are correct.",
      "The out-of-sync danger is correct.",
      "The frequency reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "EIA531",
    subjectName: "Electrotecnia",
    subjectId: "mn-s5-electrotecnia",
    unit: "Arranque de motores de Corriente Alterna de potencias grandes",
    topic: "Arranque estrella-delta",
    week: 4,
    taskId: "mn-eia531-w04-star-delta-starting",
    taskTitle: "Explain Star-Delta Motor Starting",
    scenario: "Large AC motors are started using a star-delta starter. The engineer asks the cadet to explain why this method is used instead of starting directly.",
    instructions: [
      "Explain what happens to starting current if a large motor starts directly on line.",
      "Explain how star-delta starting reduces the starting current.",
      "State why reducing starting current protects the ship's electrical system.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining star-delta starting, how it reduces starting current, and why that protects the electrical system.",
    assessmentCriteria: [
      "The direct-start current problem is correct.",
      "The star-delta reduction is correctly explained.",
      "The system-protection reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "TAL534",
    subjectName: "Taller IV",
    subjectId: "mn-s5-taller-iv",
    unit: "Roscado",
    topic: "Roscas internas y externas en distintos diámetros",
    week: 1,
    taskId: "mn-tal534-w01-threading",
    taskTitle: "Cut Internal And External Threads",
    scenario: "A repair needs a threaded bolt and a matching threaded hole. The instructor asks the cadet to explain how internal and external threads are cut and matched.",
    instructions: [
      "Explain how an external thread is cut (e.g. with a die).",
      "Explain how an internal thread is cut (e.g. with a tap).",
      "State why the thread pitch and diameter must match.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining how internal and external threads are cut and why pitch and diameter must match.",
    assessmentCriteria: [
      "The external threading method is correct.",
      "The internal threading method is correct.",
      "The matching reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "TAL534",
    subjectName: "Taller IV",
    subjectId: "mn-s5-taller-iv",
    unit: "Medición",
    topic: "Necesidad del control dimensional",
    week: 2,
    taskId: "mn-tal534-w02-dimensional-control",
    taskTitle: "Measure A Part With Dimensional Control",
    scenario: "A machined part must be within tolerance. The instructor asks the cadet to explain dimensional control and why tolerances matter for engine parts.",
    instructions: [
      "Explain what dimensional control means.",
      "Explain what a tolerance is and why parts have one.",
      "State what happens if an engine part is outside tolerance.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining dimensional control, what a tolerance is, and the consequence of a part being out of tolerance.",
    assessmentCriteria: [
      "Dimensional control is correctly explained.",
      "Tolerance is correctly explained.",
      "The out-of-tolerance consequence is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "TAL534",
    subjectName: "Taller IV",
    subjectId: "mn-s5-taller-iv",
    unit: "Taladro",
    topic: "Relación entre diámetro, material y velocidad del taladro",
    week: 3,
    taskId: "mn-tal534-w03-drill-speed",
    taskTitle: "Select The Correct Drill Speed",
    scenario: "Drilling at the wrong speed ruins the bit and the work. The instructor asks the cadet to explain how drill speed relates to bit diameter and material.",
    instructions: [
      "Explain how drill speed should change with bit diameter (larger = slower).",
      "Explain how the material being drilled affects the speed.",
      "State what happens if the speed is too high for the material.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining how drill speed relates to bit diameter and material, and the effect of too-high speed.",
    assessmentCriteria: [
      "The diameter-speed relationship is correct.",
      "The material effect is correct.",
      "The too-high-speed consequence is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "TAL534",
    subjectName: "Taller IV",
    subjectId: "mn-s5-taller-iv",
    unit: "Herramientas eléctricas y neumáticas",
    topic: "Seguridad y cuidados especiales en el manejo de herramientas",
    week: 4,
    taskId: "mn-tal534-w04-power-tool-safety",
    taskTitle: "Use Power Tools Safely In The Workshop",
    scenario: "Power and pneumatic tools are dangerous if misused. The instructor asks the cadet to explain the safety precautions for using power tools in the workshop.",
    instructions: [
      "State two safety precautions before using a power tool.",
      "Explain the protective equipment needed.",
      "Identify one hazard specific to pneumatic tools.",
      "Report the safety guidance in clear engine-room English."
    ],
    deliverable: "A note in English giving power-tool safety precautions, protective equipment, and one pneumatic-tool hazard.",
    assessmentCriteria: [
      "The precautions are valid.",
      "The protective equipment is appropriate.",
      "The pneumatic hazard is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "QUH535",
    subjectName: "Química",
    subjectId: "mn-s5-quimica",
    unit: "Acidez y alcalinidad",
    topic: "Potencial hidrógeno",
    week: 1,
    taskId: "mn-quh535-w01-ph-control",
    taskTitle: "Explain pH And Why It Matters On Board",
    scenario: "The engineer asks the cadet to explain what pH is and why monitoring it matters for boiler water and corrosion control on board.",
    instructions: [
      "Define pH and the difference between acidic and alkaline.",
      "State how pH is measured (indicators or meter).",
      "Explain why boiler water pH is kept within limits.",
      "Report your answer in clear engine-room English."
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "QUH535",
    subjectName: "Química",
    subjectId: "mn-s5-quimica",
    unit: "Corrosión",
    topic: "Celdas galvánicas",
    week: 2,
    taskId: "mn-quh535-w02-galvanic-cells",
    taskTitle: "Explain Galvanic Corrosion And Sacrificial Anodes",
    scenario: "The hull and seawater systems suffer galvanic corrosion. The engineer asks the cadet to explain how a galvanic cell forms and how sacrificial anodes protect the metal.",
    instructions: [
      "Explain how a galvanic cell forms between two dissimilar metals in seawater.",
      "Explain what a sacrificial anode is and how it protects the hull.",
      "State why the anode must be a more active metal.",
      "Report your answer in clear engine-room English."
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "QUH535",
    subjectName: "Química",
    subjectId: "mn-s5-quimica",
    unit: "Análisis y tratamiento del agua",
    topic: "Definiciones: dureza permanente y temporal",
    week: 3,
    taskId: "mn-quh535-w03-water-hardness",
    taskTitle: "Explain Water Hardness And Boiler Scale",
    scenario: "Hard water causes scale in boilers. The engineer asks the cadet to explain water hardness and why it must be treated before feeding a boiler.",
    instructions: [
      "Explain the difference between temporary and permanent hardness.",
      "Explain how hardness causes scale in a boiler.",
      "State why scale is dangerous for boiler operation.",
      "Report your answer in clear engine-room English."
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "QUH535",
    subjectName: "Química",
    subjectId: "mn-s5-quimica",
    unit: "Combustibles y lubricantes",
    topic: "Punto de inflamación de combustibles y lubricantes marinos",
    week: 4,
    taskId: "mn-quh535-w04-flash-point",
    taskTitle: "Explain Flash Point And Fuel Safety",
    scenario: "Fuel handling on board depends on understanding flash point. The engineer asks the cadet to explain what flash point is and why it matters for safe fuel storage.",
    instructions: [
      "Define flash point in your own words.",
      "Explain why a fuel with a low flash point is more dangerous.",
      "State one precaution for storing or handling fuel based on flash point.",
      "Report your answer in clear engine-room English."
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "ING530",
    subjectName: "Inglés Marítimo V",
    subjectId: "mn-s5-ingles-maritimo-v",
    unit: "Voz pasiva (presente simple)",
    topic: "Usa la voz pasiva en presente para hablar de cosas tradicionales",
    week: 1,
    taskId: "mn-ing530-w01-passive-procedures",
    taskTitle: "Describe Engine Procedures Using The Passive Voice",
    scenario: "Engine procedures are often written in the passive voice ('the valve is opened'). The engineer asks the cadet to describe a routine engine procedure using the passive voice correctly.",
    instructions: [
      "Choose a simple engine-room procedure to describe.",
      "Write the steps using the passive voice in the present simple.",
      "Make sure each step is clear about what is done, not who does it.",
      "Keep the description clear and professional in English."
    ],
    deliverable: "A procedure description in English using the present simple passive voice to state engine-room steps clearly.",
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "ING530",
    subjectName: "Inglés Marítimo V",
    subjectId: "mn-s5-ingles-maritimo-v",
    unit: "Comparativos",
    topic: "Compara con la estructura (not) as...as",
    week: 2,
    taskId: "mn-ing530-w02-comparatives",
    taskTitle: "Compare Two Machines Or Systems",
    scenario: "You must compare two options in the engine room. The engineer asks you to compare two machines or systems using comparative structures clearly.",
    instructions: [
      "Choose two machines or systems to compare.",
      "Use comparative structures (including 'as...as' / 'not as...as').",
      "Make at least three clear comparisons.",
      "Report the comparison in clear engine-room English."
    ],
    deliverable: "A comparison in English of two machines or systems using correct comparative structures with at least three points.",
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "ING530",
    subjectName: "Inglés Marítimo V",
    subjectId: "mn-s5-ingles-maritimo-v",
    unit: "Familiarización con frases normalizadas de la Organización",
    topic: "Utiliza las expresiones: because, since, due to, as, because of",
    week: 3,
    taskId: "mn-ing530-w03-reporting-causes",
    taskTitle: "Report A Fault Cause Using Linking Expressions",
    scenario: "When reporting a machinery fault, you must state the cause clearly. The engineer asks you to report a fault using linking expressions (because, due to, since) correctly.",
    instructions: [
      "Describe a machinery situation with a cause and an effect.",
      "Report it using linking expressions (because, since, due to, as, because of).",
      "Make sure the cause-effect relationship is clear.",
      "Keep the report clear and professional in English."
    ],
    deliverable: "A short fault report in English stating a cause and effect using correct linking expressions.",
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "ING530",
    subjectName: "Inglés Marítimo V",
    subjectId: "mn-s5-ingles-maritimo-v",
    unit: "Familiarización con frases normalizadas de la Organización",
    topic: "Uso de tiempos simples y continuos",
    week: 4,
    taskId: "mn-ing530-w04-smcp-engine",
    taskTitle: "Use Standard Phrases For Engine Communication",
    scenario: "Standard marine communication phrases give crews of all nationalities a common language. The engineer asks the cadet to use the correct standard phrases for engine-room communication with the bridge.",
    instructions: [
      "Choose an engine-bridge communication situation (e.g. responding to an engine order).",
      "State the correct standard phrase for that situation.",
      "Explain why standard phrases reduce misunderstanding between crews.",
      "Report the exchange in clear engine-room English."
    ],
    deliverable: "A note in English giving the correct standard phrase for an engine-bridge communication, with an explanation of why standard phrases matter.",
    assessmentCriteria: [
      "The phrase is appropriate to the situation.",
      "The phrase is used correctly.",
      "The reasoning about standardization is sound.",
      "The English is clear and professional."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "PMR536",
    subjectName: "Prácticas Marineras V",
    subjectId: "mn-s5-practicas-marineras-v",
    unit: "Cambios de amarre",
    topic: "Uso durante el atraque",
    week: 1,
    taskId: "mn-pmr536-w01-mooring-changes",
    taskTitle: "Manage Mooring Lines During Berthing",
    scenario: "During berthing the mooring lines must be changed and adjusted. The officer asks the cadet to explain how lines are managed as the vessel comes alongside. Engine cadets also stand mooring stations.",
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "PMR536",
    subjectName: "Prácticas Marineras V",
    subjectId: "mn-s5-practicas-marineras-v",
    unit: "Maniobras de fondeo",
    topic: "Preparativos para fondear",
    week: 2,
    taskId: "mn-pmr536-w02-anchoring-prep",
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "PMR536",
    subjectName: "Prácticas Marineras V",
    subjectId: "mn-s5-practicas-marineras-v",
    unit: "Plumas y grúas",
    topic: "Operación y manejo",
    week: 3,
    taskId: "mn-pmr536-w03-derricks-cranes",
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "PMR536",
    subjectName: "Prácticas Marineras V",
    subjectId: "mn-s5-practicas-marineras-v",
    unit: "Anclas y cadenas",
    topic: "Marcado de la cadena",
    week: 4,
    taskId: "mn-pmr536-w04-chain-marking",
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "C0011",
    subjectName: "Educación Física V",
    subjectId: "mn-s5-educacion-fisica-v",
    unit: "Condición física",
    topic: "Fuerza muscular",
    week: 1,
    taskId: "mn-c0011v-w01-strength-tasks",
    taskTitle: "Link Muscular Strength To Heavy Engine Work",
    scenario: "Heavy engine-room work demands muscular strength. The training officer asks the cadet to connect muscular strength to specific engine tasks and explain the injury risk when strength or technique is lacking.",
    instructions: [
      "Define muscular strength in your own words.",
      "Name two heavy engine-room tasks that require it.",
      "Explain how poor strength or technique leads to injury (e.g. lifting).",
      "Report your answer in clear English using correct fitness terminology."
    ],
    deliverable: "A note in English linking muscular strength to two heavy engine-room tasks and the injury risk of poor strength or technique.",
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "C0011",
    subjectName: "Educación Física V",
    subjectId: "mn-s5-educacion-fisica-v",
    unit: "Condición física",
    topic: "Flexibilidad articular y muscular",
    week: 2,
    taskId: "mn-c0011v-w02-flexibility-injury",
    taskTitle: "Explain Flexibility And Injury Prevention",
    scenario: "Working in confined engine spaces and awkward positions demands flexibility. The officer asks the cadet to explain how flexibility helps prevent injury on board.",
    instructions: [
      "Define flexibility in your own words.",
      "Give an engine-room situation where flexibility prevents injury.",
      "Describe one way flexibility is maintained.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English defining flexibility, an engine-room situation where it prevents injury, and how it is maintained.",
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "C0011",
    subjectName: "Educación Física V",
    subjectId: "mn-s5-educacion-fisica-v",
    unit: "Natación",
    topic: "Nado en grupo",
    week: 3,
    taskId: "mn-c0011v-w03-group-swimming",
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "C0011",
    subjectName: "Educación Física V",
    subjectId: "mn-s5-educacion-fisica-v",
    unit: "Concentración",
    topic: "Juegos de concentración",
    week: 4,
    taskId: "mn-c0011v-w04-focus-endurance",
    taskTitle: "Sustain Focus Through A Long Operation",
    scenario: "A long engine watch or operation tests sustained focus. The officer asks the cadet to explain how to keep concentration through fatigue during a long operation.",
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "C0104",
    subjectName: "Ética Profesional",
    subjectId: "mn-s5-etica-profesional",
    unit: "Ética y profesión",
    topic: "Responsabilidad social y ética de la Gente de Mar",
    week: 1,
    taskId: "mn-c0104-w01-seafarer-responsibility",
    taskTitle: "Explain The Seafarer's Ethical Responsibility",
    scenario: "A seafarer holds responsibility for lives, machinery, and the environment. The officer asks the cadet to explain the ethical responsibilities that come with the profession.",
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "C0104",
    subjectName: "Ética Profesional",
    subjectId: "mn-s5-etica-profesional",
    unit: "Ética y Moral",
    topic: "La reflexión ética",
    week: 2,
    taskId: "mn-c0104-w02-ethical-reflection",
    taskTitle: "Reason Through An Ethical Dilemma At Sea",
    scenario: "A seafarer faces a dilemma: reporting a machinery fault honestly may delay the ship and anger superiors. The officer asks the cadet to reason through the ethical choice.",
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "C0104",
    subjectName: "Ética Profesional",
    subjectId: "mn-s5-etica-profesional",
    unit: "Ética y profesión",
    topic: "Los valores de la Gente de Mar",
    week: 3,
    taskId: "mn-c0104-w03-seafarer-values",
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "C0104",
    subjectName: "Ética Profesional",
    subjectId: "mn-s5-etica-profesional",
    unit: "Ética y profesión",
    topic: "Acción Ética: Toma de decisiones",
    week: 4,
    taskId: "mn-c0104-w04-environmental-ethics",
    taskTitle: "Make An Environmental Decision At Sea",
    scenario: "A seafarer must decide how to handle waste oil or a minor spill that no one would notice. The officer asks the cadet to reason through the environmentally ethical decision.",
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "C0105",
    subjectName: "Liderazgo",
    subjectId: "mn-s5-liderazgo",
    unit: "El liderazgo",
    topic: "Tipos de liderazgo",
    week: 1,
    taskId: "mn-c0105-w01-leadership-styles",
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "C0105",
    subjectName: "Liderazgo",
    subjectId: "mn-s5-liderazgo",
    unit: "Autoconciencia",
    topic: "Inteligencia emocional: autoconciencia, manejo de emociones, interpretación de emociones, empatía, uso de emociones",
    week: 2,
    taskId: "mn-c0105-w02-emotional-intelligence",
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "C0105",
    subjectName: "Liderazgo",
    subjectId: "mn-s5-liderazgo",
    unit: "Elementos del liderazgo",
    topic: "Trabajo en equipo",
    week: 3,
    taskId: "mn-c0105-w03-teamwork",
    taskTitle: "Build Effective Teamwork On Board",
    scenario: "An engine watch team works best when it functions as a team, not individuals. The officer asks the cadet to explain how an officer builds effective teamwork on board.",
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "C0105",
    subjectName: "Liderazgo",
    subjectId: "mn-s5-liderazgo",
    unit: "Estrategias de planeación y operación",
    topic: "Estrategias para resolver los problemas: Ganar-ganar, sinergia",
    week: 4,
    taskId: "mn-c0105-w04-problem-solving",
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
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "NAV745",
    subjectName: "Navegación V",
    subjectId: "pn-s7-navegacion-v",
    unit: "Gestión de los recursos del puente",
    topic: "Gestión de los recursos humanos del puente",
    week: 1,
    taskId: "pn-nav745-w01-bridge-resource-management",
    taskTitle: "Apply Bridge Resource Management",
    scenario: "A safe bridge depends on the whole team working together, not one person. The captain asks the cadet to explain bridge resource management (BRM) and how it prevents accidents.",
    instructions: [
      "Explain what bridge resource management means.",
      "State how good communication and shared situational awareness help the team.",
      "Explain how BRM prevents a single error from causing an accident.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining bridge resource management, the role of communication and shared awareness, and how it prevents accidents.",
    assessmentCriteria: [
      "BRM is correctly explained.",
      "The teamwork/communication reasoning is sound.",
      "The error-prevention point is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "NAV745",
    subjectName: "Navegación V",
    subjectId: "pn-s7-navegacion-v",
    unit: "Planeación del viaje",
    topic: "La importancia de una adecuada planeación antes de iniciar el viaje",
    week: 2,
    taskId: "pn-nav745-w02-passage-planning",
    taskTitle: "Explain The Four Stages Of Passage Planning",
    scenario: "Every voyage must be planned before departure. The captain asks the cadet to explain the principle of passage planning and its main stages.",
    instructions: [
      "Name the four stages of passage planning (appraisal, planning, execution, monitoring).",
      "Briefly explain what happens in each stage.",
      "State why planning the whole passage berth-to-berth matters.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining the four stages of passage planning and why berth-to-berth planning matters.",
    assessmentCriteria: [
      "The four stages are correct.",
      "Each stage is correctly described.",
      "The berth-to-berth reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "NAV745",
    subjectName: "Navegación V",
    subjectId: "pn-s7-navegacion-v",
    unit: "Plan de arribo y pilotaje",
    topic: "Intercambio de información Capitán-Piloto",
    week: 3,
    taskId: "pn-nav745-w03-master-pilot-exchange",
    taskTitle: "Conduct The Master-Pilot Exchange",
    scenario: "When a pilot boards, the master and pilot must exchange key information. The captain asks the cadet to explain what the master-pilot exchange covers and why it matters.",
    instructions: [
      "State what information the master gives the pilot (e.g. draught, manoeuvring data).",
      "State what the pilot tells the master (e.g. passage plan, berthing plan).",
      "Explain why this exchange prevents misunderstanding during pilotage.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining the master-pilot information exchange and why it prevents misunderstanding during pilotage.",
    assessmentCriteria: [
      "The master's information is correct.",
      "The pilot's information is correct.",
      "The reasoning about preventing misunderstanding is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "NAV745",
    subjectName: "Navegación V",
    subjectId: "pn-s7-navegacion-v",
    unit: "Responsabilidad del oficial de guardia",
    topic: "Llamadas al Capitán",
    week: 4,
    taskId: "pn-nav745-w04-calling-the-master",
    taskTitle: "Know When To Call The Master",
    scenario: "The officer of the watch must call the master in certain situations. The captain asks the cadet to explain when the master must be called and why hesitation is dangerous.",
    instructions: [
      "State three situations where the officer of the watch must call the master.",
      "Explain why the officer should call even if unsure.",
      "Explain why calling the master is not a sign of weakness.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining when the officer of the watch must call the master and why calling promptly is the right action.",
    assessmentCriteria: [
      "The situations are valid and relevant.",
      "The reasoning for calling when unsure is sound.",
      "The professional attitude point is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "TEB749",
    subjectName: "Teoría del buque II",
    subjectId: "pn-s7-teoria-buque-ii",
    unit: "Flotabilidad",
    topic: "Permiso de agua dulce (FWA) y permiso de muelle (DWA)",
    week: 1,
    taskId: "pn-teb749-w01-fresh-water-allowance",
    taskTitle: "Apply Fresh Water Allowance",
    scenario: "A vessel loading in fresh water will rise when it reaches the sea. The officer asks the cadet to explain fresh water allowance (FWA) and why it matters when loading.",
    instructions: [
      "Explain what fresh water allowance (FWA) is.",
      "Explain why a vessel sits deeper in fresh water than in salt water.",
      "Explain how FWA lets a vessel load to the correct mark in fresh water.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining fresh water allowance, why a vessel floats deeper in fresh water, and how FWA is used when loading.",
    assessmentCriteria: [
      "FWA is correctly explained.",
      "The density/draught reasoning is correct.",
      "The loading application is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "TEB749",
    subjectName: "Teoría del buque II",
    subjectId: "pn-s7-teoria-buque-ii",
    unit: "Traslación de pesos",
    topic: "Traslación transversal de pesos",
    week: 2,
    taskId: "pn-teb749-w02-transverse-weight-shift",
    taskTitle: "Calculate Heel From A Transverse Weight Shift",
    scenario: "Moving a weight across the deck makes the vessel list. The officer asks the cadet to explain how a transverse weight shift causes heel and what determines its size.",
    instructions: [
      "Explain how moving a weight transversely shifts the centre of gravity.",
      "Explain how this shift produces a heeling angle.",
      "State what factors make the heel larger (weight, distance, GM).",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining how a transverse weight shift causes heel and what factors determine its size.",
    assessmentCriteria: [
      "The centre-of-gravity shift is correct.",
      "The heel mechanism is correct.",
      "The factors affecting heel are correct.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "TEB749",
    subjectName: "Teoría del buque II",
    subjectId: "pn-s7-teoria-buque-ii",
    unit: "Esfuerzos del casco",
    topic: "Esfuerzos flexionantes. Arrufo y quebranto",
    week: 3,
    taskId: "pn-teb749-w03-hogging-sagging",
    taskTitle: "Explain Hogging And Sagging",
    scenario: "Uneven loading or waves bend the hull. The officer asks the cadet to explain hogging and sagging and why they stress the hull.",
    instructions: [
      "Explain what hogging is and what causes it.",
      "Explain what sagging is and what causes it.",
      "State why repeated hogging and sagging is dangerous for the hull.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining hogging and sagging, their causes, and why they stress the hull.",
    assessmentCriteria: [
      "Hogging is correctly explained.",
      "Sagging is correctly explained.",
      "The hull-stress reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "TEB749",
    subjectName: "Teoría del buque II",
    subjectId: "pn-s7-teoria-buque-ii",
    unit: "Cálculo de estabilidad con graneles",
    topic: "Reducción del GM por corrimiento de carga",
    week: 4,
    taskId: "pn-teb749-w04-grain-shift-gm",
    taskTitle: "Explain GM Reduction From Grain Shift",
    scenario: "Grain can shift in a partly filled hold, reducing stability. The officer asks the cadet to explain how a grain shift reduces GM and why it is dangerous.",
    instructions: [
      "Explain how grain shifts in a partly filled hold as the vessel rolls.",
      "Explain how this shift reduces the effective GM (stability).",
      "State one measure to reduce the effect of grain shift.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining how a grain shift reduces GM, why it is dangerous, and one measure to reduce the effect.",
    assessmentCriteria: [
      "The grain-shift mechanism is correct.",
      "The GM-reduction reasoning is sound.",
      "The mitigating measure is valid.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "CYE748",
    subjectName: "Carga y Estiba I",
    subjectId: "pn-s7-carga-estiba-i",
    unit: "Inspección y preparación de espacios de carga",
    topic: "Razones para la inspección de espacios de carga",
    week: 1,
    taskId: "pn-cye748-w01-hold-inspection",
    taskTitle: "Inspect A Cargo Hold Before Loading",
    scenario: "Before loading, a cargo hold must be inspected and prepared. The officer asks the cadet to explain why the inspection matters and what is checked.",
    instructions: [
      "State why a cargo hold must be inspected before loading.",
      "List three things checked during the inspection (cleanliness, bilges, ventilation).",
      "Explain how a poorly prepared hold can damage the cargo.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining why a cargo hold is inspected before loading, three things checked, and how poor preparation damages cargo.",
    assessmentCriteria: [
      "The reason for inspection is correct.",
      "The checks are valid.",
      "The cargo-damage reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "CYE748",
    subjectName: "Carga y Estiba I",
    subjectId: "pn-s7-carga-estiba-i",
    unit: "Aseguramiento de carga (trincado)",
    topic: "Métodos de trincado, apuntalamiento y bloqueo",
    week: 2,
    taskId: "pn-cye748-w02-cargo-securing",
    taskTitle: "Secure Cargo For Sea",
    scenario: "Cargo must be secured so it cannot move at sea. The officer asks the cadet to explain the main methods of securing cargo and why it matters.",
    instructions: [
      "Describe two methods of securing cargo (lashing, shoring, blocking).",
      "Explain why cargo that shifts at sea is dangerous to the vessel.",
      "State where the correct securing requirements are found (cargo securing manual).",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining two cargo securing methods, why shifting cargo is dangerous, and where securing requirements are found.",
    assessmentCriteria: [
      "The securing methods are valid.",
      "The danger of shifting cargo is correct.",
      "The cargo securing manual reference is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "CYE748",
    subjectName: "Carga y Estiba I",
    subjectId: "pn-s7-carga-estiba-i",
    unit: "Cargas de granos",
    topic: "Efecto del corrimiento en compartimentos parcialmente llenos",
    week: 3,
    taskId: "pn-cye748-w03-grain-trimming",
    taskTitle: "Trim Grain To Prevent Shift",
    scenario: "Grain in a partly filled hold can shift dangerously. The officer asks the cadet to explain how grain is trimmed and secured to prevent a shift under the Grain Code.",
    instructions: [
      "Explain why grain in a partly filled hold is a stability risk.",
      "Describe how trimming the grain level reduces the risk.",
      "State one method of securing the grain surface (e.g. bagged grain, strapping).",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining the grain-shift risk, how trimming reduces it, and one securing method under the Grain Code.",
    assessmentCriteria: [
      "The stability risk is correctly explained.",
      "The trimming method is correct.",
      "The securing method is valid.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "CYE748",
    subjectName: "Carga y Estiba I",
    subjectId: "pn-s7-carga-estiba-i",
    unit: "Cargas peligrosas",
    topic: "Clasificación",
    week: 4,
    taskId: "pn-cye748-w04-dangerous-goods",
    taskTitle: "Classify Dangerous Goods Under The IMDG Code",
    scenario: "Dangerous goods must be classified and handled under the IMDG Code. The officer asks the cadet to explain how dangerous goods are classified and why correct classification matters.",
    instructions: [
      "Explain that the IMDG Code groups dangerous goods into classes.",
      "Give two example classes (e.g. flammable liquids, corrosives).",
      "Explain why correct classification, marking, and segregation prevent accidents.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining how dangerous goods are classified under the IMDG Code, with two example classes and why correct handling matters.",
    assessmentCriteria: [
      "The IMDG classification concept is correct.",
      "The example classes are valid.",
      "The reasoning about safe handling is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "OMI750",
    subjectName: "Convenios Organización Marítima Internacional I",
    subjectId: "pn-s7-convenios-omi-i",
    unit: "Convenio Internacional sobre Normas de Formación",
    topic: "Importancia",
    week: 1,
    taskId: "pn-omi750-w01-stcw-importance",
    taskTitle: "Explain The Importance Of The STCW Convention",
    scenario: "The STCW Convention sets the training standards for all seafarers worldwide. The officer asks the cadet to explain what STCW is and why it matters for safety at sea.",
    instructions: [
      "Explain what the STCW Convention covers (standards of training, certification, watchkeeping).",
      "State why a common international standard matters for crews of mixed nationalities.",
      "Explain how STCW improves safety at sea.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining the STCW Convention, why a common standard matters, and how it improves safety at sea.",
    assessmentCriteria: [
      "The scope of STCW is correct.",
      "The common-standard reasoning is sound.",
      "The safety link is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "OMI750",
    subjectName: "Convenios Organización Marítima Internacional I",
    subjectId: "pn-s7-convenios-omi-i",
    unit: "Convenio Internacional para el Control y la Gestión del Agua de Lastre y los Sedimentos de los Buques",
    topic: "Libro de registro del agua de lastre",
    week: 2,
    taskId: "pn-omi750-w02-ballast-water",
    taskTitle: "Explain Ballast Water Management",
    scenario: "The Ballast Water Management Convention prevents the spread of harmful organisms between seas. The officer asks the cadet to explain why ballast water is managed and recorded.",
    instructions: [
      "Explain why untreated ballast water is an environmental threat.",
      "State what ballast water management does to reduce the risk.",
      "Explain why the ballast water record book must be kept accurately.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining the environmental threat of ballast water, how it is managed, and why the record book matters.",
    assessmentCriteria: [
      "The environmental threat is correctly explained.",
      "The management measure is correct.",
      "The record-keeping reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "OMI750",
    subjectName: "Convenios Organización Marítima Internacional I",
    subjectId: "pn-s7-convenios-omi-i",
    unit: "Convenio Internacional sobre el Control de los Sistemas Antiincrustantes Perjudiciales en los Buques",
    topic: "Control de los sistemas antiincrustantes",
    week: 3,
    taskId: "pn-omi750-w03-antifouling",
    taskTitle: "Explain The Anti-Fouling Systems Convention",
    scenario: "The Anti-Fouling Systems Convention bans harmful hull coatings. The officer asks the cadet to explain why certain anti-fouling paints were banned and what the convention requires.",
    instructions: [
      "Explain what anti-fouling systems are used for on a hull.",
      "Explain why certain anti-fouling paints (e.g. TBT) were banned.",
      "State what the convention requires of ships.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining anti-fouling systems, why harmful ones were banned, and what the convention requires.",
    assessmentCriteria: [
      "The purpose of anti-fouling is correct.",
      "The reason for the ban is correct.",
      "The convention requirement is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "OMI750",
    subjectName: "Convenios Organización Marítima Internacional I",
    subjectId: "pn-s7-convenios-omi-i",
    unit: "Piratería y terrorismo",
    topic: "La seguridad en el Mar",
    week: 4,
    taskId: "pn-omi750-w04-piracy-security",
    taskTitle: "Explain Anti-Piracy Security Measures",
    scenario: "Piracy threatens ships in certain regions. The officer asks the cadet to explain the basic measures a ship takes to protect itself against piracy.",
    instructions: [
      "State two measures a ship takes when transiting a high-risk piracy area.",
      "Explain the purpose of a ship security plan.",
      "Explain why crew awareness and drills matter against piracy.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining anti-piracy measures, the purpose of a ship security plan, and why crew awareness matters.",
    assessmentCriteria: [
      "The measures are valid.",
      "The security plan purpose is correct.",
      "The awareness reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "SEM751",
    subjectName: "Control de Multitudes",
    subjectId: "pn-s7-control-multitudes",
    unit: "Comportamiento y reacciones del ser humano",
    topic: "Control de multitudes considerando su primera reacción",
    week: 1,
    taskId: "pn-sem751-w01-crowd-first-reaction",
    taskTitle: "Manage A Crowd's First Reaction In An Emergency",
    scenario: "When an emergency alarm sounds on a passenger ship, the crowd's first reaction is critical. The officer asks the cadet to explain how to manage passengers' first reaction.",
    instructions: [
      "Describe how passengers typically first react to an emergency alarm.",
      "Explain how clear, calm crew action shapes that first reaction.",
      "State one thing crew must avoid that would worsen panic.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining how to manage a crowd's first reaction in an emergency, with crew action and what to avoid.",
    assessmentCriteria: [
      "The first-reaction description is realistic.",
      "The crew-action reasoning is sound.",
      "The thing to avoid is valid.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "SEM751",
    subjectName: "Control de Multitudes",
    subjectId: "pn-s7-control-multitudes",
    unit: "Control de estrés",
    topic: "Control de multitudes considerando la posibilidad de pánico al separar a las familias",
    week: 2,
    taskId: "pn-sem751-w02-panic-families",
    taskTitle: "Prevent Panic When Families Are Separated",
    scenario: "During evacuation, families may be separated, risking panic. The officer asks the cadet to explain how to manage this to keep the evacuation orderly.",
    instructions: [
      "Explain why separating families can trigger panic.",
      "Describe how crew should handle a passenger who refuses to move without family.",
      "State how to keep the wider evacuation orderly while addressing this.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining how to prevent panic when families are separated and keep the evacuation orderly.",
    assessmentCriteria: [
      "The panic trigger is correctly explained.",
      "The handling approach is sound and humane.",
      "The orderly-evacuation reasoning is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "SEM751",
    subjectName: "Control de Multitudes",
    subjectId: "pn-s7-control-multitudes",
    unit: "Control de multitudes",
    topic: "Asistencia a los pasajeros en los puestos de reunión y embarco",
    week: 3,
    taskId: "pn-sem751-w03-muster-stations",
    taskTitle: "Assist Passengers At Muster Stations",
    scenario: "Passengers must be guided to muster stations and prepared for embarkation. The officer asks the cadet to explain the crew's role at the muster station.",
    instructions: [
      "Describe how crew guide passengers to the correct muster station.",
      "State what crew check and do at the muster station (lifejackets, headcount).",
      "Explain why clear instructions and counting matter.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining the crew's role at muster stations: guiding passengers, checks performed, and why counting matters.",
    assessmentCriteria: [
      "The guiding role is correct.",
      "The muster-station checks are valid.",
      "The reasoning about counting is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "SEM751",
    subjectName: "Control de Multitudes",
    subjectId: "pn-s7-control-multitudes",
    unit: "Capacitación a pasajeros",
    topic: "Comunicación con los pasajeros en una emergencia",
    week: 4,
    taskId: "pn-sem751-w04-passenger-communication",
    taskTitle: "Communicate With Passengers In An Emergency",
    scenario: "Clear communication keeps passengers calm and cooperative in an emergency. The officer asks the cadet to explain how crew should communicate with passengers during an emergency.",
    instructions: [
      "State how crew should speak to passengers to keep them calm (tone, clarity).",
      "Explain how to give instructions passengers of any language can follow.",
      "Explain why honest, clear information reduces panic.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining how crew communicate with passengers in an emergency to keep them calm and cooperative.",
    assessmentCriteria: [
      "The communication approach is sound.",
      "The multi-language consideration is addressed.",
      "The reasoning about honest information is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "ING746",
    subjectName: "Inglés Marítimo VII",
    subjectId: "pn-s7-ingles-maritimo-vii",
    unit: "Inglés Marítimo SMCP",
    topic: "Reported speech, reported questions and answers",
    week: 1,
    taskId: "pn-ing746-w01-reported-speech",
    taskTitle: "Relay A Message Using Reported Speech",
    scenario: "An officer often relays what another vessel or station said. The captain asks the cadet to report a received message accurately using reported speech.",
    instructions: [
      "Take a direct message (e.g. a VHF call from another vessel).",
      "Report it to the captain using reported speech correctly.",
      "Make sure no information is changed or lost in the reporting.",
      "Keep the report clear and professional in English."
    ],
    deliverable: "A short exchange in English relaying a received message accurately using reported speech.",
    assessmentCriteria: [
      "Reported speech is formed correctly.",
      "No information is changed or lost.",
      "The report is realistic and relevant.",
      "The English reads professionally, not as a grammar exercise."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "ING746",
    subjectName: "Inglés Marítimo VII",
    subjectId: "pn-s7-ingles-maritimo-vii",
    unit: "Sistema de verbos",
    topic: "Voz pasiva",
    week: 2,
    taskId: "pn-ing746-w02-passive-incident-report",
    taskTitle: "Write An Incident Report Using The Passive",
    scenario: "Incident reports often use the passive voice to focus on what happened. The captain asks the cadet to write a short incident report using the passive voice appropriately.",
    instructions: [
      "Choose a shipboard incident to report.",
      "Write the report using the passive voice where it focuses on the event.",
      "Make sure the facts are clear and in a logical order.",
      "Keep the report clear and professional in English."
    ],
    deliverable: "A short incident report in English using the passive voice appropriately to focus on the events.",
    assessmentCriteria: [
      "The passive voice is used correctly and appropriately.",
      "The facts are clear and ordered.",
      "The report is realistic.",
      "The English reads professionally, not as a grammar exercise."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "ING746",
    subjectName: "Inglés Marítimo VII",
    subjectId: "pn-s7-ingles-maritimo-vii",
    unit: "El ámbito laboral",
    topic: "Vocabulario: work collocations",
    week: 3,
    taskId: "pn-ing746-w03-handover-report",
    taskTitle: "Write A Professional Watch Handover Report",
    scenario: "A clear written handover passes the watch safely to the next officer. The captain asks the cadet to write a professional handover report using correct work vocabulary.",
    instructions: [
      "Write a watch handover covering position, traffic, and any pending matters.",
      "Use correct professional and work-related vocabulary.",
      "Make sure the next officer could take over safely from your report.",
      "Keep the report clear and professional in English."
    ],
    deliverable: "A watch handover report in English using correct professional vocabulary, complete enough for a safe takeover.",
    assessmentCriteria: [
      "The handover covers the key items.",
      "The vocabulary is professional and correct.",
      "The report enables a safe takeover.",
      "The English is clear and professional."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "ING746",
    subjectName: "Inglés Marítimo VII",
    subjectId: "pn-s7-ingles-maritimo-vii",
    unit: "Acontecimientos anormales",
    topic: "Modal verbs",
    week: 4,
    taskId: "pn-ing746-w04-modals-safety",
    taskTitle: "Give Safety Instructions Using Modal Verbs",
    scenario: "Safety instructions rely on modal verbs (must, must not, should) to show obligation and prohibition. The captain asks the cadet to write safety instructions using modal verbs correctly.",
    instructions: [
      "Choose a shipboard safety situation needing instructions.",
      "Write the instructions using modal verbs (must, must not, should) correctly.",
      "Make the level of obligation clear (required vs advised).",
      "Keep the instructions clear and professional in English."
    ],
    deliverable: "A set of safety instructions in English using modal verbs correctly to show obligation and prohibition.",
    assessmentCriteria: [
      "Modal verbs are used correctly.",
      "The level of obligation is clear.",
      "The instructions are realistic and relevant.",
      "The English reads professionally, not as a grammar exercise."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "PMR752",
    subjectName: "Prácticas Marineras VII",
    subjectId: "pn-s7-practicas-marineras-vii",
    unit: "Auxilio de personas en peligro en el agua",
    topic: "Acercamiento a la víctima",
    week: 1,
    taskId: "pn-pmr752-w01-rescue-approach",
    taskTitle: "Approach A Person In The Water Safely",
    scenario: "A person has fallen overboard. The officer asks the cadet to explain how a rescuer approaches a victim in the water safely and brings them to safety.",
    instructions: [
      "Describe how to approach a conscious victim without being grabbed and pulled under.",
      "Describe how the approach differs for an unconscious victim.",
      "State one piece of equipment used to help the rescue.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining how to approach a victim in the water safely, the difference for an unconscious victim, and one rescue aid.",
    assessmentCriteria: [
      "The conscious-victim approach is correct.",
      "The unconscious-victim difference is correct.",
      "The equipment is valid.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "PMR752",
    subjectName: "Prácticas Marineras VII",
    subjectId: "pn-s7-practicas-marineras-vii",
    unit: "Banderas y señales",
    topic: "Formas y colores del código internacional de banderas",
    week: 2,
    taskId: "pn-pmr752-w02-flag-recognition",
    taskTitle: "Recognise International Code Flags",
    scenario: "An officer must recognise code flags by shape and colour. The officer asks the cadet to explain how flags are recognised and give examples of their meanings.",
    instructions: [
      "Explain how code flags are distinguished by shape and colour.",
      "Give two flags and their single-flag meanings.",
      "Explain why instant recognition matters at sea.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining how code flags are recognised by shape and colour, with two examples and why instant recognition matters.",
    assessmentCriteria: [
      "The recognition method is correct.",
      "The flag examples are valid.",
      "The reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "PMR752",
    subjectName: "Prácticas Marineras VII",
    subjectId: "pn-s7-practicas-marineras-vii",
    unit: "Interpretación y elaboración de reportes de existencias y pertrechos",
    topic: "Partes de respeto",
    week: 3,
    taskId: "pn-pmr752-w03-spares-report",
    taskTitle: "Report Deck Stores And Spares",
    scenario: "The officer must keep accurate records of deck stores and spare parts. The cadet is asked to explain how a stores and spares report is prepared and why accuracy matters.",
    instructions: [
      "State what a deck stores and spares report should contain.",
      "Explain how the report is kept up to date as items are used.",
      "Explain why accurate spares records matter for operations.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining how a deck stores and spares report is prepared, kept current, and why accuracy matters.",
    assessmentCriteria: [
      "The report contents are appropriate.",
      "The updating method is sound.",
      "The operational reasoning is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "PMR752",
    subjectName: "Prácticas Marineras VII",
    subjectId: "pn-s7-practicas-marineras-vii",
    unit: "Faenas con anclas",
    topic: "Chicoteo del ancla",
    week: 4,
    taskId: "pn-pmr752-w04-anchor-work",
    taskTitle: "Carry Out Anchor Work Safely",
    scenario: "Anchor work is heavy and dangerous. The officer asks the cadet to explain the safety precautions during anchor handling on the forecastle.",
    instructions: [
      "Describe two hazards during anchor handling.",
      "State the safety precautions for the team on the forecastle.",
      "Explain why clear communication with the bridge is essential.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining the hazards of anchor work, the safety precautions, and why bridge communication is essential.",
    assessmentCriteria: [
      "The hazards are valid.",
      "The precautions are appropriate.",
      "The communication reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "C0011",
    subjectName: "Educación Física VII",
    subjectId: "pn-s7-educacion-fisica-vii",
    unit: "Condición física",
    topic: "Resistencia cardiorespiratoria",
    week: 1,
    taskId: "pn-c0011vii-w01-endurance-command",
    taskTitle: "Sustain Fitness For Command Responsibility",
    scenario: "Senior officers must stay fit to handle long, demanding situations in command. The training officer asks the cadet to explain why cardiorespiratory endurance matters at the officer level.",
    instructions: [
      "Define cardiorespiratory endurance in your own words.",
      "Explain why a senior officer needs sustained endurance during a long emergency.",
      "Describe one way endurance is maintained at sea.",
      "Report your answer in clear English using correct fitness terminology."
    ],
    deliverable: "A note in English defining cardiorespiratory endurance, why a senior officer needs it during a long emergency, and how it is maintained.",
    assessmentCriteria: [
      "Endurance is correctly defined.",
      "The command-level reasoning is sound.",
      "The maintenance method is valid.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "C0011",
    subjectName: "Educación Física VII",
    subjectId: "pn-s7-educacion-fisica-vii",
    unit: "Condición física",
    topic: "Fuerza muscular",
    week: 2,
    taskId: "pn-c0011vii-w02-strength-emergency",
    taskTitle: "Apply Muscular Strength In An Emergency",
    scenario: "In an emergency, an officer may need physical strength to help others or operate heavy equipment. The officer asks the cadet to link muscular strength to emergency tasks.",
    instructions: [
      "Name two emergency tasks that demand muscular strength (e.g. carrying a casualty, closing a heavy door).",
      "Explain why maintained strength is part of operational readiness.",
      "State one way to train strength safely.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English linking muscular strength to two emergency tasks, why it is part of readiness, and how to train it safely.",
    assessmentCriteria: [
      "The emergency tasks are relevant.",
      "The readiness reasoning is sound.",
      "The training method is safe and valid.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "C0011",
    subjectName: "Educación Física VII",
    subjectId: "pn-s7-educacion-fisica-vii",
    unit: "Natación",
    topic: "Sobrevivencia",
    week: 3,
    taskId: "pn-c0011vii-w03-survival-leadership",
    taskTitle: "Lead Survivors In The Water",
    scenario: "After abandoning ship, an officer may need to lead survivors in the water. The instructor asks the cadet to explain how an officer keeps a group of survivors alive and organised.",
    instructions: [
      "Explain how an officer organises survivors in the water to improve survival.",
      "Describe how to keep weaker survivors safe and the group together.",
      "State how the group improves its chance of being rescued.",
      "Report the skills in clear English suitable for a safety briefing."
    ],
    deliverable: "A brief in English explaining how an officer leads and organises survivors in the water to improve survival and rescue.",
    assessmentCriteria: [
      "The organisation approach is sound.",
      "The care of weaker survivors is correct.",
      "The rescue-chance reasoning is valid.",
      "The brief is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "C0011",
    subjectName: "Educación Física VII",
    subjectId: "pn-s7-educacion-fisica-vii",
    unit: "Concentración",
    topic: "Juegos de concentración",
    week: 4,
    taskId: "pn-c0011vii-w04-focus-command",
    taskTitle: "Maintain Focus In A Prolonged Command Situation",
    scenario: "Commanding through a prolonged crisis tests sustained mental focus. The officer asks the cadet to explain how to maintain concentration when leading over many hours.",
    instructions: [
      "Explain why concentration is hard to sustain during a prolonged crisis.",
      "Describe two techniques an officer uses to stay focused and make good decisions.",
      "State the risk of a focus lapse when in command.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining how an officer maintains focus in a prolonged command situation, with two techniques and the risk of a lapse.",
    assessmentCriteria: [
      "The cause of degraded focus is correct.",
      "The techniques are practical.",
      "The command-level risk is realistic.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "C0129",
    subjectName: "Familiarización con buques tanque",
    subjectId: "pn-s7-familiarizacion-buques-tanque",
    unit: "Toxicidad y otros peligros",
    topic: "peligro de incendio",
    week: 1,
    taskId: "pn-c0129-w01-tanker-fire-hazard",
    taskTitle: "Explain Fire Hazards On A Tanker",
    scenario: "Tankers carry flammable cargoes, making fire a constant threat. The officer asks the cadet to explain the fire hazards specific to a tanker and the basic precautions.",
    instructions: [
      "Explain why a tanker's cargo creates a high fire risk.",
      "State the conditions needed for a cargo fire (fuel, air, ignition).",
      "State two precautions that reduce the risk of ignition on deck.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining tanker fire hazards, the fire triangle for cargo, and two ignition-prevention precautions.",
    assessmentCriteria: [
      "The fire risk is correctly explained.",
      "The fire-triangle conditions are correct.",
      "The precautions are valid.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "C0129",
    subjectName: "Familiarización con buques tanque",
    subjectId: "pn-s7-familiarizacion-buques-tanque",
    unit: "Equipos de seguridad y protección personal",
    topic: "Aparatos de respiración, tanque de evacuación, equipo de rescate y escape",
    week: 2,
    taskId: "pn-c0129-w02-breathing-apparatus",
    taskTitle: "Use Breathing Apparatus On A Tanker",
    scenario: "Entering enclosed or toxic spaces on a tanker requires breathing apparatus. The officer asks the cadet to explain when and how breathing apparatus is used.",
    instructions: [
      "Explain when breathing apparatus must be worn on a tanker.",
      "Describe the basic checks before using breathing apparatus.",
      "Explain why a person must never enter a toxic space without it.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining when breathing apparatus is used on a tanker, the pre-use checks, and why it is essential in toxic spaces.",
    assessmentCriteria: [
      "The need for breathing apparatus is correct.",
      "The pre-use checks are valid.",
      "The toxic-space reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "C0129",
    subjectName: "Familiarización con buques tanque",
    subjectId: "pn-s7-familiarizacion-buques-tanque",
    unit: "Prevención de la contaminación",
    topic: "SOPEP",
    week: 3,
    taskId: "pn-c0129-w03-sopep",
    taskTitle: "Explain The SOPEP",
    scenario: "Every tanker carries a Shipboard Oil Pollution Emergency Plan (SOPEP). The officer asks the cadet to explain what the SOPEP is and how it is used in a spill.",
    instructions: [
      "Explain what the SOPEP is and why it is required.",
      "State what the SOPEP tells the crew to do in a spill.",
      "Explain why quick action under the SOPEP limits pollution.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining the SOPEP, what it directs the crew to do in a spill, and why quick action limits pollution.",
    assessmentCriteria: [
      "The purpose of the SOPEP is correct.",
      "The crew actions are valid.",
      "The reasoning about quick action is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "C0129",
    subjectName: "Familiarización con buques tanque",
    subjectId: "pn-s7-familiarizacion-buques-tanque",
    unit: "Operaciones de la carga",
    topic: "conocimientos generales de los procedimientos operativos de seguridad de la carga de los buques tanques petroleros",
    week: 4,
    taskId: "pn-c0129-w04-cargo-operations",
    taskTitle: "Explain Safe Tanker Cargo Operations",
    scenario: "Loading and discharging a tanker safely follows strict procedures. The officer asks the cadet to explain the key safety principles of tanker cargo operations.",
    instructions: [
      "State two key safety checks before starting cargo operations.",
      "Explain the importance of monitoring during loading/discharging.",
      "Explain why ship-shore communication is critical throughout.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining safe tanker cargo operations: pre-start checks, monitoring, and ship-shore communication.",
    assessmentCriteria: [
      "The safety checks are valid.",
      "The monitoring reasoning is sound.",
      "The ship-shore communication point is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "C0131",
    subjectName: "Familiarización con buque de pasaje de Transbordo Rodado",
    subjectId: "pn-s7-familiarizacion-buque-pasaje-roro",
    unit: "Familiarización en Buque de Transbordo Rodado",
    topic: "Aptitud para aplicar debidamente los procedimientos de a bordo relativos al mantenimiento del equipo propio de los buques RoRo (puertas y rampas de proa y popa, puertas laterales, imbornales y sistemas conexos)",
    week: 1,
    taskId: "pn-c0131-w01-roro-doors",
    taskTitle: "Maintain Ro-Ro Bow And Stern Doors",
    scenario: "Bow and stern doors are critical to a Ro-Ro ship's watertight integrity. The officer asks the cadet to explain why these doors matter and how they are maintained and checked.",
    instructions: [
      "Explain why bow and stern doors are critical to watertight integrity.",
      "State what is checked to confirm a door is properly closed and sealed.",
      "Explain the danger if a door is not properly secured before sea.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining the importance of Ro-Ro bow/stern doors, the closure checks, and the danger of an unsecured door.",
    assessmentCriteria: [
      "The watertight-integrity reasoning is correct.",
      "The closure checks are valid.",
      "The danger is correctly explained.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "C0131",
    subjectName: "Familiarización con buque de pasaje de Transbordo Rodado",
    subjectId: "pn-s7-familiarizacion-buque-pasaje-roro",
    unit: "Formación sobre seguridad de los pasajeros, la carga e integridad del casco",
    topic: "Limitaciones operacionales y de proyecto: aptitud para comprender y observar las limitaciones operacionales de la estanqueidad, así como las consideraciones especiales sobre estabilidad que puedan afectar a la seguridad de los buques de pasaje de transbordo rodado",
    week: 2,
    taskId: "pn-c0131-w02-roro-stability",
    taskTitle: "Explain Ro-Ro Stability Considerations",
    scenario: "Ro-Ro ships have special stability concerns because of their open vehicle decks. The officer asks the cadet to explain the stability risk and why it is taken seriously.",
    instructions: [
      "Explain why an open vehicle deck is a stability risk if it floods.",
      "Explain the free surface effect of water on the vehicle deck.",
      "State one operational limitation that protects Ro-Ro stability.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining Ro-Ro stability risks, the free surface effect on the vehicle deck, and one protective operational limitation.",
    assessmentCriteria: [
      "The vehicle-deck risk is correctly explained.",
      "The free surface effect is correct.",
      "The operational limitation is valid.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "C0131",
    subjectName: "Familiarización con buque de pasaje de Transbordo Rodado",
    subjectId: "pn-s7-familiarizacion-buque-pasaje-roro",
    unit: "Formación sobre gestión de emergencias y comportamiento humano",
    topic: "Aptitud para comunicarse con los pasajeros en una emergencia",
    week: 3,
    taskId: "pn-c0131-w03-passenger-emergency-comm",
    taskTitle: "Communicate With Ro-Ro Passengers In An Emergency",
    scenario: "On a Ro-Ro passenger ferry, clear emergency communication keeps passengers safe. The officer asks the cadet to explain how crew communicate with passengers during an emergency.",
    instructions: [
      "State how crew give clear emergency instructions to passengers.",
      "Explain how to handle passengers who speak different languages.",
      "Explain why calm, confident communication prevents panic.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining how crew communicate with Ro-Ro passengers in an emergency to keep them safe and calm.",
    assessmentCriteria: [
      "The instruction approach is sound.",
      "The multi-language handling is addressed.",
      "The reasoning about calm communication is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester VII",
    subjectCode: "C0131",
    subjectName: "Familiarización con buque de pasaje de Transbordo Rodado",
    subjectId: "pn-s7-familiarizacion-buque-pasaje-roro",
    unit: "Formación sobre seguridad de los pasajeros, la carga e integridad del casco",
    topic: "Aptitud para controlar la atmósfera en las cubiertas para vehículos",
    week: 4,
    taskId: "pn-c0131-w04-vehicle-deck-atmosphere",
    taskTitle: "Control The Atmosphere On A Vehicle Deck",
    scenario: "Vehicle decks accumulate dangerous exhaust fumes. The officer asks the cadet to explain why the vehicle deck atmosphere must be controlled and how it is done.",
    instructions: [
      "Explain why vehicle exhaust fumes are a danger on an enclosed vehicle deck.",
      "State how ventilation controls the vehicle deck atmosphere.",
      "Explain why ventilation must run during loading and discharge.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining the danger of vehicle deck fumes, how ventilation controls the atmosphere, and why it runs during loading/discharge.",
    assessmentCriteria: [
      "The fume danger is correctly explained.",
      "The ventilation control is correct.",
      "The reasoning about running ventilation is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  ...mnSemesterViiTasks,
];

import type { AcademicMissionTask } from "./types";

export const mnSemesterVTasks: AcademicMissionTask[] = [
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "MOT529",
    subjectName: "Motores I",
    subjectId: "mn-s5-motores-i",
    unit: "Ciclos operativos",
    topic: "2 tiempos",
    week: 5,
    taskId: "mn-mot529-w05-two-stroke-cycle",
    taskTitle: "Explain The Two-Stroke Cycle",
    scenario: "The ship's main engine is a slow-speed two-stroke crosshead engine. The engineer asks the cadet to explain the two-stroke cycle and how it differs from the four-stroke cycle of week 2.",
    instructions: [
      "Explain what happens in a two-stroke cycle, where a power stroke is produced on every revolution.",
      "Explain scavenging: how fresh air is blown in to push out the burnt exhaust gases (e.g. uniflow scavenging).",
      "State two differences between the two-stroke crosshead engine and the four-stroke engine.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining the two-stroke cycle (power every revolution), scavenging, and two differences from the four-stroke engine.",
    assessmentCriteria: [
      "The two-stroke cycle is correctly explained (power every revolution).",
      "Scavenging is correctly described.",
      "The two differences from the four-stroke are valid.",
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
    unit: "Sistemas principales de la máquina principal",
    topic: "Sistema de enfriamiento",
    week: 6,
    taskId: "mn-mot529-w06-cooling-system",
    taskTitle: "Explain The Engine Cooling System",
    scenario: "The main engine is kept within safe temperatures by its cooling system. The engineer asks the cadet to explain how the high-temperature (HT) and low-temperature (LT) fresh-water circuits and the sea water cool the engine.",
    instructions: [
      "Explain why the engine must be cooled and what happens if it overheats.",
      "Describe the HT and LT fresh-water circuits and what each cools (e.g. HT cools the cylinder jackets, LT cools the air coolers and lube oil).",
      "Explain how sea water carries the heat away through the coolers/heat exchangers, keeping fresh water and sea water separate.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining the engine cooling system: the HT and LT fresh-water circuits, and how sea water carries the heat away through the heat exchangers.",
    assessmentCriteria: [
      "The need for cooling and the overheating danger are correct.",
      "The HT and LT circuits are correctly described.",
      "The sea water / heat exchanger role is correct (fresh and sea water kept apart).",
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
    unit: "Sistemas principales de la máquina principal",
    topic: "Sistema de combustible e inyección",
    week: 7,
    taskId: "mn-mot529-w07-fuel-injection-system",
    taskTitle: "Explain The Fuel And Injection System",
    scenario: "Heavy fuel oil must be treated and then delivered to the cylinders at high pressure. The engineer asks the cadet to explain the fuel and injection system from the tank to the injector.",
    instructions: [
      "Explain why heavy fuel must be purified and heated before injection (removing water and solids, lowering its viscosity).",
      "Describe how the fuel is raised to high injection pressure and delivered by the injector as a fine spray.",
      "Explain why correct atomisation and injection timing matter for good combustion.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining the fuel and injection system: prior purification and heating, high-pressure delivery, and the injector's atomisation and timing.",
    assessmentCriteria: [
      "The need for purification and heating is correct.",
      "The high-pressure delivery and injector spray are correctly described.",
      "The atomisation/timing reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "MOT529",
    subjectName: "Motores I",
    subjectId: "mn-s5-motores-i",
    unit: "Sistemas principales de la máquina principal",
    topic: "Arranque e inversión de marcha",
    week: 8,
    taskId: "mn-mot529-w08-starting-air-reversing",
    taskTitle: "Explain Air Starting And Engine Reversing",
    scenario: "A large marine diesel is started with compressed air and, for manoeuvring, can be reversed to go astern. As the closing task, the engineer asks the cadet to explain air starting and reversing.",
    instructions: [
      "Explain how compressed air from the air bottles is admitted to the cylinders in the correct order to turn and start the engine.",
      "State one important safety point of the starting-air system (e.g. relief/flame arrangements against an air-line explosion, draining condensate).",
      "Explain what reversing means and why a direct-drive engine must be reversed to go astern (e.g. changing the fuel/valve timing for the opposite direction).",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining air starting from the air bottles, one safety point, and how the engine is reversed to go astern.",
    assessmentCriteria: [
      "The air-starting process is correct.",
      "The safety point is valid.",
      "The reversing explanation is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "MEF532",
    subjectName: "Mecánica de fluidos",
    subjectId: "mn-s5-mecanica-fluidos",
    unit: "Flujo en conductos",
    topic: "Pérdidas de carga por fricción y número de Reynolds",
    week: 5,
    taskId: "mn-mef532-w05-friction-losses",
    taskTitle: "Explain Friction Losses And Reynolds Number",
    scenario: "Pumping a fluid through a long pipe loses pressure to friction. The engineer asks the cadet to explain friction head losses and the Reynolds number.",
    instructions: [
      "Explain what friction (head) loss is and why a longer or narrower pipe loses more pressure.",
      "Explain the Reynolds number and how it tells whether the flow is laminar or turbulent.",
      "State how the flow regime and the pipe roughness affect the friction loss.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining friction head loss, the Reynolds number, and how laminar/turbulent flow and pipe roughness affect the loss.",
    assessmentCriteria: [
      "Friction head loss is correctly explained.",
      "The Reynolds number and the laminar/turbulent distinction are correct.",
      "The effect of flow regime and roughness is sound.",
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
    unit: "Máquinas hidráulicas",
    topic: "Bombas centrífugas: curva característica y punto de operación",
    week: 6,
    taskId: "mn-mef532-w06-centrifugal-pump-curve",
    taskTitle: "Explain The Centrifugal Pump Curve",
    scenario: "A centrifugal pump delivers less flow as the discharge head rises. The engineer asks the cadet to explain the pump characteristic curve and the operating point.",
    instructions: [
      "Explain how a centrifugal pump works (the impeller adds energy to the fluid).",
      "Explain the characteristic curve: how the head falls as the flow increases.",
      "Explain the operating point as the point where the pump curve meets the system resistance curve.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining the centrifugal pump, its head-flow characteristic curve, and the operating point where it meets the system curve.",
    assessmentCriteria: [
      "The centrifugal pump principle is correct.",
      "The head-flow characteristic is correctly explained.",
      "The operating point (pump curve vs system curve) is correct.",
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
    unit: "Máquinas hidráulicas",
    topic: "Cavitación y NPSH",
    week: 7,
    taskId: "mn-mef532-w07-cavitation-npsh",
    taskTitle: "Explain Cavitation And NPSH",
    scenario: "A pump that loses suction pressure can cavitate and be damaged. The engineer asks the cadet to explain cavitation and NPSH.",
    instructions: [
      "Explain cavitation: how low pressure at the pump suction makes vapour bubbles that collapse and damage the impeller.",
      "Explain NPSH (net positive suction head) and why the available NPSH must be greater than the required NPSH.",
      "State two ways to prevent cavitation (e.g. raise the suction pressure, do not throttle the suction, keep the fluid cool).",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining cavitation, NPSH (available vs required), and two ways to prevent cavitation.",
    assessmentCriteria: [
      "Cavitation is correctly explained (vapour bubbles collapsing).",
      "NPSH available vs required is correct.",
      "The two prevention measures are valid.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "MEF532",
    subjectName: "Mecánica de fluidos",
    subjectId: "mn-s5-mecanica-fluidos",
    unit: "Medición de flujo",
    topic: "Venturi, placa de orificio y rotámetro",
    week: 8,
    taskId: "mn-mef532-w08-flow-measurement",
    taskTitle: "Explain Flow Measurement Devices",
    scenario: "Engine-room systems need their flow rates measured. As the closing task, the engineer asks the cadet to explain how a venturi, an orifice plate and a rotameter measure flow.",
    instructions: [
      "Explain how a venturi and an orifice plate measure flow from the pressure drop they create (building on the Bernoulli principle of week 3, referenced here, not re-explained).",
      "Explain how a rotameter (variable-area meter) shows the flow by the height of a float in a tapered tube.",
      "State one advantage or typical use of each device on board.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining flow measurement by venturi, orifice plate and rotameter, with one advantage or use of each, referring to the week 3 Bernoulli principle as established.",
    assessmentCriteria: [
      "The venturi/orifice pressure-drop principle is correct (linked to Bernoulli, not re-taught).",
      "The rotameter float principle is correct.",
      "The advantages/uses are valid.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "MMA533",
    subjectName: "Maquinaria Marítima Auxiliar",
    subjectId: "mn-s5-maquinaria-maritima-auxiliar",
    unit: "Aire comprimido",
    topic: "Compresores de aire y botellas de arranque",
    week: 5,
    taskId: "mn-mma533-w05-air-compressors",
    taskTitle: "Explain Air Compressors And Air Receivers",
    scenario: "The engine needs stored compressed air to start. The engineer asks the cadet to explain the air compressors and the starting-air receivers (bottles) that supply it.",
    instructions: [
      "Explain the job of the air compressor and why the compression is done in stages with intercooling.",
      "Explain what the air receivers (bottles) store and why a minimum air pressure must always be kept ready for starting.",
      "State one safety fitting of the air system (e.g. relief valve, fusible plug, condensate drains).",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining air compressors (staged, intercooled), the starting-air receivers, and one safety fitting of the system.",
    assessmentCriteria: [
      "The compressor job and staged/intercooled compression are correct.",
      "The air receiver purpose and the minimum-pressure need are correct.",
      "The safety fitting is valid.",
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
    unit: "Tratamiento de aguas residuales",
    topic: "Planta de aguas residuales (sewage) y MARPOL Anexo IV",
    week: 6,
    taskId: "mn-mma533-w06-sewage-treatment",
    taskTitle: "Explain The Sewage Treatment Plant",
    scenario: "A ship must not discharge untreated sewage near the coast. The engineer asks the cadet to explain the sewage treatment plant and MARPOL Annex IV.",
    instructions: [
      "Explain what the sewage (black water) treatment plant does (e.g. biological treatment and disinfection before discharge).",
      "State what MARPOL Annex IV controls and why discharge is restricted near land.",
      "Explain the difference between treated discharge allowed offshore and holding the sewage for a port reception facility.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining the sewage treatment plant, the MARPOL Annex IV control, and treated discharge offshore vs holding for port reception.",
    assessmentCriteria: [
      "The sewage plant function is correct.",
      "The MARPOL Annex IV control is correctly stated.",
      "The discharge vs holding distinction is correct.",
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
    unit: "Refrigeración y climatización",
    topic: "Refrigeración de provisiones y aire acondicionado",
    week: 7,
    taskId: "mn-mma533-w07-refrigeration-ac",
    taskTitle: "Explain Provision Refrigeration And Air Conditioning",
    scenario: "The ship keeps its provisions cold and the accommodation comfortable. The engineer asks the cadet to explain the refrigeration and air-conditioning plant.",
    instructions: [
      "Explain the basic refrigeration cycle (compressor, condenser, expansion valve, evaporator).",
      "Explain how the same cycle serves the cold provision rooms and the air conditioning of the accommodation.",
      "State why the refrigerant choice and leak control matter (safety and the environment).",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining the refrigeration cycle, its use for provisions and air conditioning, and why refrigerant and leak control matter.",
    assessmentCriteria: [
      "The refrigeration cycle (four main components) is correct.",
      "The provision and air-conditioning use is correctly explained.",
      "The refrigerant/leak-control point is valid.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "MMA533",
    subjectName: "Maquinaria Marítima Auxiliar",
    subjectId: "mn-s5-maquinaria-maritima-auxiliar",
    unit: "Generación de vapor",
    topic: "Caldera auxiliar y sistema de vapor",
    week: 8,
    taskId: "mn-mma533-w08-auxiliary-boiler",
    taskTitle: "Explain The Auxiliary Boiler And Steam System",
    scenario: "In port the ship needs steam for heating fuel and other services. As the closing task, the engineer asks the cadet to explain the auxiliary boiler and steam system.",
    instructions: [
      "Explain what the auxiliary boiler produces steam for (e.g. heating heavy fuel, tank and accommodation heating).",
      "Describe the basic steam system (boiler, steam to the services, condensate return, feed water back to the boiler).",
      "State one boiler safety point (e.g. safety valve, water-level control and low-water alarm).",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining the auxiliary boiler's uses, the basic steam/condensate/feed system, and one boiler safety point.",
    assessmentCriteria: [
      "The boiler's steam uses are correct.",
      "The steam/condensate/feed cycle is correctly described.",
      "The safety point is valid.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "EIA531",
    subjectName: "Electrotecnia",
    subjectId: "mn-s5-electrotecnia",
    unit: "Sistema trifásico de Corriente Alterna",
    topic: "Conexión delta y relaciones de línea y fase",
    week: 5,
    taskId: "mn-eia531-w05-delta-line-phase",
    taskTitle: "Explain Delta Connection And Line-Phase Relationships",
    scenario: "Building on the star/delta comparison of week 2, the engineer asks the cadet to explain the delta connection in detail and the line and phase relationships that set it apart from star.",
    instructions: [
      "Describe the delta connection and how the three windings are joined end to end (there is no neutral point).",
      "State the line/phase relationships: in delta the line voltage equals the phase voltage, but the line current is the square root of three (about 1.73) times the phase current — the opposite of the star connection.",
      "Explain where the delta connection is preferred on board (e.g. the running windings of large motors, transformer windings).",
      "You may refer to the three-phase power triangle (active, reactive, apparent) and power factor as already established in Electricity III; do not re-explain it, focus on the delta connection itself. Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining the delta connection and its line/phase voltage and current relationships (contrasted with star), and where delta is used, referring to the Electricity III power triangle as established.",
    assessmentCriteria: [
      "The delta connection is correctly described (windings end to end, no neutral).",
      "The line/phase relationships are correct (line voltage = phase voltage, line current = 1.73 x phase current) and contrasted with star.",
      "A valid use of the delta connection on board is given.",
      "The power triangle is referenced, not re-taught, and the answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "EIA531",
    subjectName: "Electrotecnia",
    subjectId: "mn-s5-electrotecnia",
    unit: "Sincronización",
    topic: "Generadores en paralelo y reparto de carga",
    week: 6,
    taskId: "mn-eia531-w06-generators-parallel",
    taskTitle: "Explain Paralleling Generators And Load Sharing",
    scenario: "Two generators often run in parallel to share the ship's electrical load. Building on the synchronisation of week 3, the engineer asks the cadet to explain paralleling and load sharing.",
    instructions: [
      "State the conditions that must be met before a generator is put on the bus (same voltage, same frequency, same phase sequence, and in phase) — building on the synchronisation of week 3.",
      "Explain how the active load (kW) is shared between the generators by adjusting the engine governors (fuel).",
      "Explain how the reactive load (kVAr) is shared by adjusting the excitation (the AVR).",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining paralleling generators (the synchronising conditions) and how active load is shared via the governors and reactive load via the excitation.",
    assessmentCriteria: [
      "The synchronising conditions are correct.",
      "Active (kW) load sharing via the governors is correct.",
      "Reactive (kVAr) load sharing via the excitation is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "EIA531",
    subjectName: "Electrotecnia",
    subjectId: "mn-s5-electrotecnia",
    unit: "Control de motores",
    topic: "Variadores de frecuencia (VFD): arranque suave y control de velocidad",
    week: 7,
    taskId: "mn-eia531-w07-vfd-drives",
    taskTitle: "Explain Variable Frequency Drives On Board",
    scenario: "Many pumps and fans on modern ships are driven by motors fed from variable frequency drives. The engineer asks the cadet to explain what a VFD does and why it is used.",
    instructions: [
      "Explain that a VFD changes the frequency (and voltage) fed to an AC motor to control its speed.",
      "Explain two benefits: a soft start that avoids the high direct-on-line starting current, and energy saving when a pump or fan can run slower instead of being throttled.",
      "State one care point of VFDs (e.g. harmonics injected onto the ship's network, cooling of the drive).",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining the variable frequency drive: speed control by changing the frequency, the soft-start and energy-saving benefits, and one care point.",
    assessmentCriteria: [
      "The VFD principle (varying the frequency to control speed) is correct.",
      "The soft-start and energy-saving benefits are correct.",
      "The care point is valid.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "EIA531",
    subjectName: "Electrotecnia",
    subjectId: "mn-s5-electrotecnia",
    unit: "Distribución eléctrica del buque",
    topic: "Cuadro principal, disparo preferencial y generador de emergencia",
    week: 8,
    taskId: "mn-eia531-w08-ship-distribution",
    taskTitle: "Explain The Ship's Electrical Distribution",
    scenario: "The ship's power is distributed from the main switchboard, with protection against overload and a back-up for emergencies. As the closing task, the engineer asks the cadet to explain the distribution system.",
    instructions: [
      "Explain the role of the main switchboard in distributing power to the ship's services.",
      "Explain preferential trip (load shedding): how non-essential loads are tripped first if the generators are overloaded, to protect the essential services.",
      "Explain the emergency generator: what it supplies and why it starts automatically on loss of main power (a blackout).",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining the main switchboard distribution, preferential tripping (load shedding), and the emergency generator's role on a blackout.",
    assessmentCriteria: [
      "The main switchboard role is correct.",
      "Preferential trip / load shedding is correctly explained.",
      "The emergency generator's automatic start and supply are correct.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "TAL534",
    subjectName: "Taller IV",
    subjectId: "mn-s5-taller-iv",
    unit: "Torno",
    topic: "Cilindrado y refrentado",
    week: 5,
    taskId: "mn-tal534-w05-lathe-turning-facing",
    taskTitle: "Explain Lathe Turning And Facing",
    scenario: "In the ship's workshop the lathe is used to machine cylindrical parts. The engineer asks the cadet to explain turning and facing on the lathe.",
    instructions: [
      "Explain what the lathe does: the workpiece rotates while a cutting tool removes metal.",
      "Explain turning (a cut along the axis that reduces the diameter) and facing (a flat cut across the end of the work).",
      "State one point about the cutting speed/feed and safety when using the lathe.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining the lathe, the turning and facing operations, and one point on cutting speed/feed and safety.",
    assessmentCriteria: [
      "The lathe principle (rotating work, cutting tool) is correct.",
      "Turning and facing are correctly distinguished.",
      "The speed/feed/safety point is valid.",
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
    unit: "Fresadora",
    topic: "Operaciones básicas de fresado",
    week: 6,
    taskId: "mn-tal534-w06-milling-operations",
    taskTitle: "Explain Basic Milling Operations",
    scenario: "The workshop milling machine cuts flat faces, slots and keyways that the lathe cannot. Building on the lathe of week 5, the engineer asks the cadet to explain basic milling.",
    instructions: [
      "Explain how a milling machine works: a rotating multi-tooth cutter removes metal while the work is fed past it (the opposite arrangement to the lathe of week 5, where the work rotates).",
      "State two things milling can make (e.g. a flat face, a slot, a keyway).",
      "State one point about clamping the work and safety on the milling machine.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining basic milling: the rotating cutter and the fed work, two things milling can make, and one clamping/safety point.",
    assessmentCriteria: [
      "The milling principle is correct (rotating cutter, work fed past), contrasted with the lathe.",
      "Two valid milling products are given.",
      "The clamping/safety point is valid.",
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
    unit: "Ajuste y montaje",
    topic: "Rodamientos y empaquetaduras",
    week: 7,
    taskId: "mn-tal534-w07-bearings-packing",
    taskTitle: "Explain Fitting Bearings And Packing",
    scenario: "Correct fitting of bearings and seals keeps machinery running. The engineer asks the cadet to explain fitting rolling bearings and gland packing/gaskets.",
    instructions: [
      "Explain how a rolling bearing is fitted correctly (clean, the correct fit, mounted without hammering the races, e.g. heating the bearing for an interference fit).",
      "Explain the job of gland packing and gaskets in sealing shafts and joints against leakage.",
      "State one consequence of a badly fitted bearing or over-tight packing (e.g. overheating, rapid wear).",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining correct bearing fitting, the sealing job of packing and gaskets, and one consequence of poor fitting.",
    assessmentCriteria: [
      "Correct bearing fitting is described.",
      "The sealing role of packing/gaskets is correct.",
      "The consequence of poor fitting is valid.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "TAL534",
    subjectName: "Taller IV",
    subjectId: "mn-s5-taller-iv",
    unit: "Mantenimiento de bombas",
    topic: "Desarme, inspección y sello mecánico",
    week: 8,
    taskId: "mn-tal534-w08-pump-maintenance",
    taskTitle: "Explain Pump Maintenance And The Mechanical Seal",
    scenario: "A workshop task is to overhaul a centrifugal pump. As the closing task, the engineer asks the cadet to explain stripping, inspecting and reassembling a pump and its mechanical seal.",
    instructions: [
      "Describe the steps to strip and inspect a pump (isolate and drain, dismantle, check the impeller, shaft, wear rings and clearances).",
      "Explain the mechanical seal: how its two flat faces seal the rotating shaft, and why they must be clean and undamaged.",
      "State one point for correct reassembly (e.g. shaft alignment, new gaskets/seal, correct clearances).",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining pump stripping and inspection, the mechanical seal's sealing faces, and one point for correct reassembly.",
    assessmentCriteria: [
      "The strip-and-inspect steps are correct.",
      "The mechanical seal (two faces sealing the shaft) is correctly explained.",
      "The reassembly point is valid.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "PMR536",
    subjectName: "Prácticas Marineras V",
    subjectId: "mn-s5-practicas-marineras-v",
    unit: "Maniobras de fondeo",
    topic: "La maniobra de fondeo ejecutada",
    week: 5,
    taskId: "mn-pmr536-w05-anchoring-execution",
    taskTitle: "Execute The Anchoring Manoeuvre",
    scenario: "The preparations are done and the vessel is on the anchorage. The officer asks the cadet to execute the anchoring manoeuvre and report it from the forecastle, taking the preparations of week 2 into the deck operation itself.",
    instructions: [
      "State the two ways of laying the anchor and when each is used: walking back with the windlass in gear (controlled, lowering the anchor under power) and letting go on the brake (fast, dropping to the bottom, only where the depth and holding ground suit it).",
      "State how much cable to pay out: the working rule is about three to four times the depth of water in good weather, increased for strong wind, sea or a long stay, because it is the weight of the cable lying in a catenary that cushions the pull, so the anchor digs in and the cable takes the snatch out of the load.",
      "Describe the vessel being brought up: as the cable is paid out and the vessel drops back, the cable tightens and then eases as the anchor takes hold, the sign that she is brought up and holding.",
      "Report from the station to the bridge with the correct terms: how many shackles are out (reading the markings from week 4), when the cable is up and down (leading vertically), and when the anchor is aweigh (broken out and lifted off the bottom). Boundary: week 2 was the preparations; here it is the deck execution. Report in clear maritime English."
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "PMR536",
    subjectName: "Prácticas Marineras V",
    subjectId: "mn-s5-practicas-marineras-v",
    unit: "Plumas y grúas",
    topic: "La faena de carga: señalización, eslingado y zona de seguridad",
    week: 6,
    taskId: "mn-pmr536-w06-cargo-lifting-operations",
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "PMR536",
    subjectName: "Prácticas Marineras V",
    subjectId: "mn-s5-practicas-marineras-v",
    unit: "Aparejo de amarre",
    topic: "Inspección, descarte y estiba del aparejo de amarre",
    week: 7,
    taskId: "mn-pmr536-w07-mooring-gear-maintenance",
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "PMR536",
    subjectName: "Prácticas Marineras V",
    subjectId: "mn-s5-practicas-marineras-v",
    unit: "Faena de puerto",
    topic: "La faena integrada de llegada desde la estación de amarre",
    week: 8,
    taskId: "mn-pmr536-w08-integrated-berthing-operation",
    taskTitle: "Run The Integrated Arrival Operation",
    scenario: "As the closing task of the subject, the bosun runs the whole arrival on deck. The officer asks the cadet to run the integrated berthing operation from the mooring station, drawing together everything learned in the subject.",
    instructions: [
      "State the preparation at the station: mooring lines coiled down and clear for running by side, fenders in position, heaving lines ready, and the windlass or capstan tested, so the station is ready before the vessel is alongside.",
      "Report the station ready to the bridge, and keep the communication running both ways throughout the operation.",
      "Run the typical mooring sequence: the heaving line across first, then the first line ashore, then the spring made fast early to control the vessel's movement in coordination with the bridge manoeuvre, then the remaining lines, and finally the fine adjustment until the vessel is fast on her mooring plan.",
      "Keep the station-to-bridge communication continuous through the whole faena. Boundary: the ship is manoeuvred alongside from the bridge; here it is the deck faena that moors her. Report the integrated operation in clear maritime English."
    ],
    deliverable: "A note in English running the integrated arrival from the mooring station: preparation (lines coiled and clear, fenders, heaving lines, windlass tested), the station-ready report, the mooring sequence (heaving line, first line ashore, early spring coordinated with the bridge, remaining lines, fine adjustment to the mooring plan), and continuous station-to-bridge communication, closing the circle with the berthing manoeuvre run from the bridge.",
    assessmentCriteria: [
      "The station preparation is complete (lines coiled and clear by side, fenders, heaving lines, windlass/capstan tested).",
      "The station-ready report and the two-way communication are stated.",
      "The mooring sequence is correct (heaving line, first line ashore, early spring coordinated with the bridge, remaining lines, fine adjustment to the mooring plan).",
      "The communication is continuous and the boundary is respected (the ship is manoeuvred alongside from the bridge, the faena moors her here), integrating weeks 1-7 in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "C0105",
    subjectName: "Liderazgo",
    subjectId: "mn-s5-liderazgo",
    unit: "La comunicación del líder",
    topic: "Instrucciones claras, verificación de la comprensión, escucha activa y feedback",
    week: 5,
    taskId: "mn-c0105-w05-leader-communication",
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "C0105",
    subjectName: "Liderazgo",
    subjectId: "mn-s5-liderazgo",
    unit: "La comunicación del líder",
    topic: "La asertividad graduada y el desafío respetuoso",
    week: 6,
    taskId: "mn-c0105-w06-graded-assertiveness",
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "C0105",
    subjectName: "Liderazgo",
    subjectId: "mn-s5-liderazgo",
    unit: "La gestión del equipo",
    topic: "La gestión del error y del conflicto en el equipo",
    week: 7,
    taskId: "mn-c0105-w07-error-and-conflict",
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "C0105",
    subjectName: "Liderazgo",
    subjectId: "mn-s5-liderazgo",
    unit: "El liderazgo en la operación",
    topic: "El liderazgo del oficial de guardia de máquinas",
    week: 8,
    taskId: "mn-c0105-w08-engine-watch-leadership",
    taskTitle: "Lead The Engine-Room Watch As Duty Engineer",
    scenario: "This is where every thread of the subject comes together in one role: the engineer officer of the watch leading the engine-room watch team. As the closing task of the subject and of the semester, the cadet must lead the machinery watch in the routine and in the emergency.",
    instructions: [
      "Lead the engine-room watch team through the watch: assign tasks according to each person's capacity, and SUPERVISE without smothering — micromanagement kills the team's judgement, so delegation is not abandonment and control is not micromanagement — and keep the SHARED situational awareness alive, because a team that knows the engineer's intention is the team that catches the deviation on the gauges.",
      "Explain the authority that is EARNED, not issued: receive the 'character commands respect' of Professional Ethics week 8 as an established principle and put it to work in the role — the watch obeys the rank, but it follows the engineer whose competence and steadiness it has come to trust.",
      "Lead in the EMERGENCY: the leader's calm is contagious — and so is panic — so hold the firm voice, the clear order, and the two-second pause that prevents the wrong order (the pause is not slowness, it is the discipline that keeps the first reaction from becoming the wrong command). Boundary: commanding a fire or damage-control scenario as an organised system belongs to the emergency-management training; here the concern is the human leadership within it — the calm that steadies the team.",
      "Close the semester: draw the communication of week 5, the graded assertiveness of week 6 and the error-and-conflict handling of week 7 into the single figure of the engineer officer of the watch who is trusted in the calm and steady in the storm. Report in clear maritime English."
    ],
    deliverable: "A note in English on leading as engineer officer of the watch: leading the engine-room watch team (assign by capacity, supervise without smothering — delegation is not abandonment, control is not micromanagement — keep shared situational awareness so the team catches deviations), authority as earned (the 'character commands respect' of Professional Ethics week 8 put to work in the role), leading in emergency (contagious calm, firm voice, clear order, and the two-second pause that is discipline not slowness, bounded from the emergency-management command system), integrating weeks 5 to 7 as the semester capstone.",
    assessmentCriteria: [
      "Leading the watch covers assigning tasks by capacity and supervising without smothering (delegation is not abandonment, control is not micromanagement) and keeping shared situational awareness so the team catches deviations.",
      "Authority is explained as earned, receiving the 'character commands respect' of Professional Ethics week 8 as an established principle put to work in the role.",
      "Leading in emergency covers the contagious calm, the firm voice and clear order, and the two-second pause that prevents the wrong order (the pause is discipline, not slowness), bounded from the emergency-management command system.",
      "The task integrates the earlier weeks (communication, graded assertiveness, error and conflict) into the engineer officer of the watch as the semester capstone, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "C0011",
    subjectName: "Educación Física V",
    subjectId: "mn-s5-educacion-fisica-v",
    unit: "Acondicionamiento cardiovascular",
    topic: "Entrenamiento cardiovascular por intensidad percibida",
    week: 5,
    taskId: "mn-c0011v-w05-cardio-intensity-zones",
    taskTitle: "Judge Cardio Intensity By Feel",
    scenario: "Aerobic fitness helps the engineer stand a long watch and work in the heat of the machinery spaces. The training officer asks the cadet to explain how to build it by judging the intensity of the effort by feel, never by chasing a target number.",
    instructions: [
      "Explain perceived exertion as the working guide: read the effort on a felt scale from easy through moderate to hard by how the breathing, the muscles and the whole body feel while you work, rather than by any device reading.",
      "Use the talk test as the check that needs no equipment: being able to speak in full sentences means the effort is easy to moderate, while being reduced to a few words means it is hard; do not set a maximum pulse figure, a heart-rate percentage or any numeric zone to hit.",
      "Separate steady work from interval work: a long even effort builds the base that lasts a whole watch, while alternating harder spells with easy recovery raises the ceiling for short demanding bursts, and both have their place.",
      "Fit it to the ship: climbing between platforms, carrying tools and working at a brisk pace already load the heart and lungs, so the cadet trains inside the space and time the ship allows. Report in clear English using correct fitness terms."
    ],
    deliverable: "A note in English on building cardio by feel: perceived exertion and the talk test as the guides (with no target pulse, heart-rate percentage or numeric zone to reach), steady versus interval work and what each builds, and how to train it within the ship's space and watch routine.",
    assessmentCriteria: [
      "Perceived exertion is correctly explained as the practical way to read intensity.",
      "The talk test is correct (full sentences = easy/moderate, few words = hard) and the account sets no target pulse figure, heart-rate percentage or numeric zone.",
      "Steady and interval work are distinguished with what each builds.",
      "The application to the ship's space and watch routine is realistic, in clear English using correct fitness terms."
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
    unit: "Prevención de lesiones",
    topic: "Prevención de lesiones en el entrenamiento físico",
    week: 6,
    taskId: "mn-c0011v-w06-injury-prevention-training",
    taskTitle: "Train Without Getting Hurt",
    scenario: "An injury from careless training takes the engineer off work and leaves the watch short-handed. The training officer asks the cadet to explain how to train safely, treating injury prevention as body science rather than superstition.",
    instructions: [
      "Explain the warm-up by what it does to the body: it warms the muscles and eases the joints into movement so the tissues can take load, and pair it with a gentle wind-down afterwards; do this for the physiological reason, not as a fixed ritual.",
      "Build up the load step by step: do not push the amount, the hardness and the frequency all upward in the same week, because piling on several increases at once is where overuse trouble begins.",
      "Read the warning signals honestly: a sharp, stabbing or joint pain is a signal to stop and not to push through, while the plain tiredness of honest effort is normal, and telling the two apart is what keeps the cadet training.",
      "Treat recovery as part of the work, since the body rebuilds stronger during rest and not only under strain; do not skip rest days in the belief that more is always better. Boundary: safe manual handling was Physical Education I and engine-work ergonomics Physical Education III, so here the concern is the training injury itself. Report in clear English using correct fitness terms."
    ],
    deliverable: "A note in English on training without injury: the warm-up and wind-down by their bodily reason, stepping the load up gradually (not raising amount, hardness and frequency together), reading the warning signals (a sharp or joint pain stops the session, ordinary tiredness does not), and recovery as part of training, with no drive to push through pain.",
    assessmentCriteria: [
      "The warm-up and wind-down are justified by what they do to the body, not as a ritual.",
      "Gradual progression is correct and it is stated not to increase amount, hardness and frequency at once.",
      "The stop signals are correct (a sharp, stabbing or joint pain stops the session; ordinary effort tiredness does not) and pushing through pain is rejected.",
      "Recovery is treated as part of training, with no belief that more is always better, and the earlier-semester boundary is respected, in clear English."
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
    unit: "Natación",
    topic: "Natación de rescate básica",
    week: 7,
    taskId: "mn-c0011v-w07-rescue-swimming",
    taskTitle: "Carry Out A Basic Water Rescue",
    scenario: "A shipmate has gone into the water and is struggling. Completing the swimming progression of the subject, the instructor asks the cadet to carry out a basic water rescue in the right order of priority, keeping the rescuer safe.",
    instructions: [
      "Follow the order of rescue from the safest method to the most dangerous: first REACH out to the person with a pole, an oar or any object from firm ground; then THROW a lifebuoy or a buoyant line; then, if a craft is at hand, use it to reach and TOW them; and only when nothing else will serve, enter the water and swim to them as the final option.",
      "If you must swim out, settle the person first by speaking to them, and come in from BEHIND, because someone in panic will clutch at anything afloat and can pull the rescuer under.",
      "Support the person with their face clear of the water as you bring them in, holding under the chin or across the chest so they can breathe throughout.",
      "If a panicking person grips you, sink down, because someone trying to stay up will release what drops away from the surface; and hold to the first rule of every rescue — do not become a second casualty, because a rescuer in trouble turns one emergency into two. Report in clear English suitable for a safety briefing."
    ],
    deliverable: "A brief in English on a basic water rescue: the order of methods (reach, then throw, then tow with a craft, then swim only as the last option), the calm approach from behind, a supporting tow that keeps the face clear of the water, releasing a panic grip by sinking down, and the rule that the rescuer must not become a second casualty.",
    assessmentCriteria: [
      "The order of rescue is correct, from safest to most dangerous (reach, throw, tow with a craft, swim only last).",
      "The approach is safe (calm the person, come in from behind).",
      "The tow keeps the face clear of the water (chin or chest) and the grip release is correct (sink down).",
      "The rescuer-not-a-casualty rule is stated (one rescuer in trouble makes two emergencies), in clear English suitable for a safety briefing."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "C0011",
    subjectName: "Educación Física V",
    subjectId: "mn-s5-educacion-fisica-v",
    unit: "Plan personal",
    topic: "El plan de entrenamiento del período de mar",
    week: 8,
    taskId: "mn-c0011v-w08-sea-period-training-plan",
    taskTitle: "Build Your Training Plan For The Voyage",
    scenario: "As the closing task of the subject, the cadet must build a personal training plan for a whole voyage. The training officer asks for a plan that fits the reality of engine-room watches and keeps the cadet fit for the work.",
    instructions: [
      "Set out the real limits of a voyage: little space and equipment and a rotating watch bill that cuts sleep into pieces, so the plan has to live in short blocks around the watches, not in a shore gym.",
      "Weave together what the semester built: strength for heavy engine-room work (week 1), suppleness for cramped spaces (week 2), cardio judged by feel (week 5) and injury prevention with warm-up, gradual loading and rest (week 6), spread sensibly across the week.",
      "Make lasting the plan the real test: a modest amount kept up week after week beats an ambitious scheme dropped after the first hard days, so keep it light enough to survive fatigue and a heavy watch bill.",
      "Keep the aim honest: the point is the capacity to do the work and to stay well through the voyage, and the plan chases no performance mark, no body-weight figure, no diet and no extreme target. Boundary: the basic onboard routine was Physical Education I and the functional self-check was Physical Education III; here it is the whole-voyage plan built on the Semester V capacities. Report in clear maritime English."
    ],
    deliverable: "A note in English building a voyage training plan: the real limits (little space and equipment, rotating watches breaking sleep), the weaving-in of the Semester V capacities (strength, suppleness, feel-judged cardio, injury prevention) around the watches, lasting power as the test, and an honest aim (capacity for the work and wellbeing, with no performance mark, body-weight figure, diet or extreme target), built on but distinct from the Physical Education I routine and the Physical Education III self-check.",
    assessmentCriteria: [
      "The voyage limits are addressed (little space and equipment, rotating watches cutting sleep).",
      "The Semester V capacities are woven together (strength, suppleness, feel-judged cardio, injury prevention).",
      "Lasting power is used as the test of the plan (a modest amount sustained over an ambitious scheme abandoned).",
      "The aim stays capacity for the work and wellbeing, with no performance, body-weight, diet or extreme target, and the earlier-semester boundary is respected, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "C0104",
    subjectName: "Ética Profesional",
    subjectId: "mn-s5-etica-profesional",
    unit: "Ética y Moral",
    topic: "El método de análisis del dilema ético a bordo",
    week: 5,
    taskId: "mn-c0104-w05-ethical-dilemma-method",
    taskTitle: "Analyse An Ethical Dilemma Step By Step",
    scenario: "A hard choice in the engine room rarely announces itself as right versus wrong. Building on the ethical reflection of week 2, the second engineer asks the cadet to work a real dilemma through a method of analysis rather than deciding on impulse.",
    instructions: [
      "Work the method in order, as a discipline of reasoning and not a set of commandments: (1) identify the VALUES in conflict, remembering that the hardest dilemmas are right versus right, such as safety against loyalty or honesty against compassion; (2) identify who is AFFECTED by each course of action; (3) lay out the real OPTIONS, which are rarely only two; (4) weigh the CONSEQUENCES of each, in the short and the long term; (5) decide and be able to GIVE REASONS for the decision.",
      "Apply it to a non-environmental engine-room dilemma: the pressure to keep a machine running to hold the schedule set against a genuine doubt about its safety.",
      "Apply it to a second one: discovering an error made by a fellow engineer you like and respect, which nonetheless has to be reported.",
      "State plainly what the method does and does not do: it does not hand you the single correct answer, because a right-versus-right dilemma has no one solution; what it gives is the discipline to decide by reasoning rather than by impulse or pressure. Report in clear maritime English."
    ],
    deliverable: "A note in English working two non-environmental engine-room dilemmas (schedule pressure versus a safety doubt on a machine; a liked fellow engineer's error that must be reported) through the five-step method (values in conflict, affected parties, real options, consequences short and long term, decide and give reasons), stated as a discipline of reasoning that does not hand over a single answer.",
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "C0104",
    subjectName: "Ética Profesional",
    subjectId: "mn-s5-etica-profesional",
    unit: "Ética y profesión",
    topic: "La cultura justa y el deber ético de reportar",
    week: 6,
    taskId: "mn-c0104-w06-just-culture-reporting",
    taskTitle: "Explain Just Culture And The Duty To Report",
    scenario: "The second engineer asks the cadet to explain why a seafarer reports near-misses and their own mistakes, and why a just culture, not a blame culture, is what keeps a ship's machinery and crew safe.",
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "C0104",
    subjectName: "Ética Profesional",
    subjectId: "mn-s5-etica-profesional",
    unit: "Ética y profesión",
    topic: "La ética de la fatiga y el reconocimiento de los límites",
    week: 7,
    taskId: "mn-c0104-w07-ethics-of-fatigue-limits",
    taskTitle: "Face The Ethics Of Fatigue And Limits",
    scenario: "The second engineer asks the cadet to treat fatigue not as a physical fact but as an ethical question: the duty to speak up about a limit that endangers others, whether on the engine-room watch or across the ship.",
    instructions: [
      "Frame saying 'I am not fit for this' as an ETHICAL act rather than a weakness, because fatigue that is kept silent puts other lives at risk: a drowsy engineer on watch does not gamble with their own watch alone but with the machinery, the ship and everyone aboard.",
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "C0104",
    subjectName: "Ética Profesional",
    subjectId: "mn-s5-etica-profesional",
    unit: "Ética y profesión",
    topic: "El perfil ético del oficial y su código personal de conducta",
    week: 8,
    taskId: "mn-c0104-w08-officers-ethical-profile",
    taskTitle: "Write Your Ethical Profile As An Officer",
    scenario: "As the closing task of the subject, the cadet must draw the ethical profile of the engineer officer they intend to be, turning values into concrete conduct and pointing towards the leadership still to come.",
    instructions: [
      "Turn the seafarer values of week 3 into a PERSONAL CODE of concrete commitments, written by the cadet: use commitments like 'I will never sign for a job I have not checked myself' and 'I will report a defect I see, whether it discomforts me or not' only as examples of the FORMAT, and write your own.",
      "Explain that COHERENCE between word and deed is the real measure of character, because a crew believes what it sees an officer do, not what it hears an officer say.",
      "Explain the officer as an example: moral authority is earned by conduct and comes before formal authority, so a rank commands compliance but character commands respect.",
      "Point towards the next subject without developing it: how this ethical character is carried into leading others is the ground of Leadership; here the task is the individual profile. Report your ethical profile in clear maritime English."
    ],
    deliverable: "A note in English drawing the engineer officer's ethical profile: a personal code of concrete commitments written by the cadet (the given commitments used only as format examples), coherence between word and deed as the measure of character, and moral authority preceding formal authority, pointing towards Leadership without developing it.",
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "QUH535",
    subjectName: "Química",
    subjectId: "mn-s5-quimica",
    unit: "Análisis y tratamiento del agua",
    topic: "Tratamiento del agua de calderas y de refrigeración",
    week: 5,
    taskId: "mn-quh535-w05-boiler-water-treatment",
    taskTitle: "Monitor And Treat Boiler Water",
    scenario: "The engineer keeps the boiler and cooling water within a chemical window so it neither scales nor corrodes the metal. The second engineer asks the cadet to explain the active treatment of the water and what is monitored, as the engineer who understands the reason behind the routine.",
    instructions: [
      "State the reason for treatment as references, not re-taught: hardness leaves scale (defined in week 3) and untreated water corrodes the metal (the galvanic corrosion of week 2); here the concern is the ACTIVE chemical treatment that controls them, not the definitions.",
      "State what is monitored and dosed: the pH is held in a controlled alkaline band (typically about 9 to 11 depending on the system, as an illustrative range) by dosing an alkaline treatment, so the water is neither corrosive nor scale-forming, and chlorides are watched as the indicator of seawater contamination from a condenser or cooler leak.",
      "Work the reading: a test gives pH = 8.2 against a target band of 9.5 to 11.0; since 8.2 is below the band the water is insufficiently alkaline and tends acidic for the system, so the action is to dose the alkaline treatment and re-test. Note the scale sense: a lower pH is more acidic and a higher pH more alkaline, so 8.2 below 9.5 means not alkaline enough, not too alkaline.",
      "State how it is done: periodic on-board testing as a routine and the logging of results so trends are visible. Report your monitoring and action in clear maritime English."
    ],
    deliverable: "A note in English on active boiler/cooling water treatment: the reason as references (scale from hardness in week 3, corrosion from week 2, not re-defined), what is monitored and dosed (pH held in an alkaline band ~9-11 by dosing, chlorides for seawater contamination), the reading pH 8.2 below the 9.5-11.0 band (insufficiently alkaline, dose and re-test), and the routine of periodic testing and logging.",
    assessmentCriteria: [
      "The reason for treatment is correct (scale from hardness, corrosion) and given as references, going beyond the week 3 hardness definition to the active treatment.",
      "The monitored and dosed parameters are correct (alkaline pH band ~9-11 held by dosing, chlorides as seawater-contamination indicator).",
      "The reading is interpreted correctly (pH 8.2 is below the 9.5-11.0 band = insufficiently alkaline = tends acidic; dose alkaline treatment and re-test), with the correct scale sense.",
      "The routine (periodic testing and logging of results) is correct, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "QUH535",
    subjectName: "Química",
    subjectId: "mn-s5-quimica",
    unit: "Combustibles y lubricantes",
    topic: "Química del fuego: el tetraedro y los rangos de inflamabilidad",
    week: 6,
    taskId: "mn-quh535-w06-fire-chemistry",
    taskTitle: "Explain The Chemistry Of Fire",
    scenario: "A fire in the machinery space starts with a vapour that ignites. The second engineer asks the cadet to explain the chemistry of fire, building on the flash point of week 4 towards why a vapour ignites at all.",
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "QUH535",
    subjectName: "Química",
    subjectId: "mn-s5-quimica",
    unit: "Atmósferas peligrosas",
    topic: "La química de la atmósfera en espacios cerrados",
    week: 7,
    taskId: "mn-quh535-w07-hazardous-atmospheres",
    taskTitle: "Test A Dangerous Enclosed-Space Atmosphere",
    scenario: "Before anyone enters a confined space in the engineering spaces — a double-bottom tank, a cofferdam or a crankcase after shutdown — the second engineer asks the cadet to explain the chemistry of its atmosphere and why it must be measured, not judged by eye.",
    instructions: [
      "Explain oxygen deficiency: normal air is 20.9 percent oxygen, but in a closed space the oxidation of residues, the steel corroding (rusting) and decomposition all CONSUME oxygen, so the atmosphere can fall below what is safe to breathe.",
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "QUH535",
    subjectName: "Química",
    subjectId: "mn-s5-quimica",
    unit: "Química ambiental marina",
    topic: "Contaminación marina: hidrocarburos, SOx y NOx, y agua de lastre",
    week: 8,
    taskId: "mn-quh535-w08-marine-environmental-chemistry",
    taskTitle: "Explain The Chemistry Of Marine Pollution",
    scenario: "As the closing task of the subject, the second engineer asks the cadet to explain the chemistry behind the main forms of marine pollution that arise from the operation of the ship's machinery.",
    instructions: [
      "Explain the behaviour of spilled oil: it spreads into a thin film on the water, the lighter fractions evaporate, and the heavier fractions persist and either sink or emulsify into a water-in-oil mixture that is hard to recover.",
      "Explain SOx and NOx and where they come from: the sulphur in the fuel burns to sulphur oxides (SOx), while the high temperature of combustion makes the nitrogen and oxygen of the air combine into nitrogen oxides (NOx); they are regulated because they cause acid rain and harm health, with MARPOL Annex VI as the framework.",
      "Explain ballast water as a vector: water taken on in one port carries living organisms that are discharged in another, so ballast water can spread invasive species.",
      "Boundary: the ethical and regulatory decision belongs to the ethics and operational subjects; here the concern is the chemistry that underlies it. Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining the chemistry of marine pollution: spilled-oil behaviour (film, light fractions evaporate, heavy persist/sink/emulsify), SOx from the fuel sulphur and NOx from high-temperature combustion (regulated under MARPOL Annex VI for acid rain and health), and ballast water as a vector for invasive species, with the ethical and regulatory decision left to the ethics and operational subjects.",
    assessmentCriteria: [
      "The behaviour of spilled oil is correct (spreads as a film, light fractions evaporate, heavy fractions persist/sink/emulsify).",
      "SOx and NOx are correctly sourced (SOx from the fuel sulphur, NOx from high-temperature combustion) and correctly linked to acid rain/health and MARPOL Annex VI.",
      "Ballast water is correctly explained as a vector for invasive species.",
      "The boundary with the ethics and operational subjects is respected, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "ING530",
    subjectName: "Inglés Marítimo V",
    subjectId: "mn-s5-ingles-maritimo-v",
    unit: "Verbos modales",
    topic: "Modales de obligación, prohibición y permiso en el inglés normativo",
    week: 5,
    taskId: "mn-ing530-w05-modal-verbs-regulations",
    taskTitle: "Read Obligation And Prohibition In Regulations",
    scenario: "Regulations and engine-room procedures turn on their modal verbs. The engineer asks the cadet to read the modal verbs of maritime regulation correctly, because misreading one changes the duty.",
    instructions: [
      "Set out the modal verbs of regulation: 'must' is a strong obligation, 'must not' is a prohibition, 'shall' is the formal obligation of a regulation (the verb of SOLAS and MARPOL, an obligation and not a future), 'should' is a recommendation, and 'may' is permission.",
      "Show each with a regulatory or procedural sentence in your own words: 'the machinery shall be kept ready for manoeuvring' (obligation), 'the engineer on watch must not leave the machinery space unattended when it requires attention' (prohibition), 'the engineer may stop the engine to prevent immediate damage' (permission).",
      "Draw the fine line that changes the duty: 'must not' forbids the action, while 'need not' only removes the obligation (you are free not to do it), so they are opposites in effect and must not be confused; and 'shall' here is duty, not the future tense.",
      "Rewrite one loosely worded instruction into precise regulatory English, choosing the modal that states the real duty. Report in clear maritime English."
    ],
    deliverable: "A note in English setting out must / must not / shall / should / may with a regulatory or procedural sentence for each in the cadet's own words, the must-not (prohibition) versus need-not (no obligation) distinction, the point that regulatory 'shall' is duty not future, and one instruction rewritten into precise regulatory English.",
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
    career: "MN",
    semester: "Semester V",
    subjectCode: "ING530",
    subjectName: "Inglés Marítimo V",
    subjectId: "mn-s5-ingles-maritimo-v",
    unit: "Verbos frasales",
    topic: "Verbos frasales de la sala de máquinas",
    week: 6,
    taskId: "mn-ing530-w06-engine-room-phrasal-verbs",
    taskTitle: "Use Engine-Room Phrasal Verbs",
    scenario: "Engine-room orders and reports are full of phrasal verbs. The engineer asks the cadet to use them with their exact operational meaning and to know when a plainer form is clearer.",
    instructions: [
      "Give the exact operational meaning of the working phrasal verbs: 'start up' (begin running a machine), 'shut down' (stop a machine and secure it), 'warm through' (heat an engine gradually before starting), 'blow down' (clear a boiler or line of water and sediment), 'build up' (raise the pressure), 'top up' (add to a level, for example the oil), 'cut in' and 'cut out' (bring a unit into or out of service) and 'stand by' (be ready and wait).",
      "Put four of them into short engine-room orders or reports as they would actually be given.",
      "Show the shut-down trap: 'shut down' means stop and secure the machine completely, not the same as 'slow down' (reduce the speed), so confusing the two would leave a machine running when it should be stopped.",
      "State the register nuance: because crews are of mixed nationality, the SMCP sometimes prefers a plainer non-phrasal form for clarity, so say when the phrasal verb is the standard wording and when the explicit form is safer. Report in clear maritime English."
    ],
    deliverable: "A note in English giving the exact operational meaning of the engine-room phrasal verbs (start up, shut down, warm through, blow down, build up, top up, cut in / cut out, stand by), four of them in real orders or reports, the shut-down (not slow-down) trap, and the register nuance on when a plainer SMCP form is clearer.",
    assessmentCriteria: [
      "Each phrasal verb is given its exact operational meaning (notably shut down = stop and secure, blow down = clear of water and sediment, warm through = heat gradually).",
      "Four are used correctly in realistic engine-room orders or reports.",
      "The shut-down versus slow-down distinction is correct.",
      "The register nuance (when the SMCP prefers a plainer form for mixed-nationality clarity) is sound, in clear maritime English."
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
    unit: "Comunicación radiotelefónica",
    topic: "Comunicaciones de emergencia máquina-puente y el protocolo GMDSS",
    week: 7,
    taskId: "mn-ing530-w07-engine-bridge-emergency-comms",
    taskTitle: "Report An Engine Emergency To The Bridge",
    scenario: "When a serious fault or emergency arises in the engine room, the engineer must pass it to the bridge clearly and understand the distress protocol the bridge will use. The engineer asks the cadet to handle the engine-to-bridge communication and the standard emergency format.",
    instructions: [
      "Report from the engine room to the bridge in a clear, fixed order: what has happened, which machinery is affected, the effect on propulsion or power, and what the bridge should do or expect, so the message carries the whole picture without chatter.",
      "Use the closed-loop read-back so the bridge repeats back the key facts and you hear they were understood; reference this read-back as an established practice and use it here without re-teaching it.",
      "Know the ship-wide distress hierarchy the bridge broadcasts on, because your report may trigger it: MAYDAY for distress (grave and imminent danger), PAN PAN for urgency (a serious matter but not immediate danger to life) and SECURITE for safety (navigational or meteorological warnings); MAYDAY is reserved for grave and imminent danger only.",
      "Use the standard prowords and phonetic spelling for clarity: spell key words with the NATO phonetic alphabet (Alfa, Bravo, Charlie, and so on), use SAY AGAIN to ask for a repeat (never 'repeat', which in radiotelephony means to repeat gunfire), OVER when you expect a reply and OUT when the exchange is finished, so OVER and OUT are never said together, and ROGER for received. Report in clear maritime English."
    ],
    deliverable: "A note in English on engine-to-bridge emergency communication: the fixed report order (what happened, machinery affected, effect on propulsion/power, what the bridge should do), the closed-loop read-back referenced not re-taught, the ship-wide distress hierarchy the report may trigger (MAYDAY / PAN PAN / SECURITE, MAYDAY for grave and imminent danger only), and the standard prowords and phonetic spelling (SAY AGAIN not 'repeat', OVER and OUT never together, ROGER).",
    assessmentCriteria: [
      "The engine-to-bridge report follows a clear fixed order (what happened, machinery affected, effect on propulsion/power, action for the bridge).",
      "The closed-loop read-back is used and referenced as established practice, not re-taught.",
      "The distress hierarchy is correct (MAYDAY distress, PAN PAN urgency, SECURITE safety) with MAYDAY reserved for grave and imminent danger.",
      "The prowords are correct (OVER and OUT never together; SAY AGAIN not 'repeat', with the reason; ROGER = received) and phonetic spelling is used, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "ING530",
    subjectName: "Inglés Marítimo V",
    subjectId: "mn-s5-ingles-maritimo-v",
    unit: "Discurso de mando",
    topic: "El briefing y el debriefing del equipo de máquinas",
    week: 8,
    taskId: "mn-ing530-w08-briefing-debriefing",
    taskTitle: "Brief And Debrief The Engine-Room Team",
    scenario: "As the closing task of the subject, the engineer must lead the team in English before and after a machinery operation. The engineer asks the cadet to deliver an operation brief and a debrief in the language of internal command.",
    instructions: [
      "Give the operation brief to the engine-room team in a clear structure: the situation, the intention, the tasks by role, the points of attention, and an invitation for questions, so every member knows the plan and their part in it.",
      "Build in the closed-loop check: key orders are repeated back so the engineer hears they were understood; reference this read-back as an established practice and use it here without re-teaching it.",
      "Deliver the debrief after the operation: compare what was planned with what actually happened, keep it blame-free, and draw the lessons for next time.",
      "Show concision and structure as the virtues of command English: short, ordered, unambiguous. Report the brief and debrief in clear maritime English."
    ],
    deliverable: "A note in English delivering an operation brief in a clear structure (situation, intention, tasks by role, points of attention, questions), a closed-loop check referenced not re-taught, and a blame-free debrief comparing plan with outcome and drawing lessons, with concision and structure as the marks of command English.",
    assessmentCriteria: [
      "The operation brief follows a clear structure (situation, intention, tasks by role, points of attention, questions).",
      "The closed-loop check is used and referenced as established practice, not re-taught.",
      "The debrief compares plan with outcome, stays blame-free, and draws lessons.",
      "Concision and structure are demonstrated as the virtues of command English, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
];

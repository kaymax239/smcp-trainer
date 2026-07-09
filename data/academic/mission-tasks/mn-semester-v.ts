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
];

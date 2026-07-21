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
    subjectCode: "MOT529",
    subjectName: "Motores I",
    subjectId: "mn-s5-motores-i",
    unit: "Componentes de un motor",
    topic: "Partes fijas, partes móviles y motores de cruceta y tronco",
    week: 9,
    taskId: "mn-mot529-w09-fixed-moving-parts",
    taskTitle: "Identify The Fixed And Moving Parts Of The Engine",
    scenario: "The chief engineer opens a main-engine drawing set and asks the cadet to identify the fixed and moving parts and to say whether the engine is a crosshead or a trunk-piston type.",
    instructions: [
      "Name the main FIXED parts (bedplate, frame or columns, cylinder block and liner, cylinder head) and what each does.",
      "Name the main MOVING parts (piston, connecting rod, crankshaft, and on a crosshead engine the piston rod and crosshead) and how they turn combustion into rotation.",
      "Distinguish a crosshead engine from a trunk-piston engine: the crosshead separates the piston rod from the connecting rod so the side thrust is taken by the crosshead guides, keeping the cylinder lubrication separate from the crankcase (the slow-speed two-stroke of week 5), while the trunk-piston engine has the connecting rod acting through the piston (the medium-speed four-stroke of week 2).",
      "Report which parts you would inspect for wear, in clear engine-room English."
    ],
    deliverable: "A note in English identifying the engine's fixed and moving parts with their functions, and distinguishing the crosshead from the trunk-piston engine, referring to the two-stroke and four-stroke engines of weeks 5 and 2.",
    assessmentCriteria: [
      "The fixed parts are correctly named with their functions (bedplate, frame, liner, head).",
      "The moving parts are correctly named (piston, connecting rod, crankshaft, and piston rod and crosshead where fitted).",
      "The crosshead-versus-trunk distinction is correct (the crosshead guides take the side thrust, separating cylinder and crankcase).",
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
    unit: "Cálculo de motores de dos y cuatro tiempos",
    topic: "Cilindrada, espacio muerto y relación de compresión",
    week: 10,
    taskId: "mn-mot529-w10-compression-ratio-displacement",
    taskTitle: "Calculate Swept Volume And Compression Ratio",
    scenario: "During a performance check the second engineer gives the cadet a cylinder's bore, stroke and clearance volume and asks for the swept volume and the compression ratio.",
    instructions: [
      "Calculate the swept volume (cilindrada) of one cylinder from the bore and stroke: Vs = (pi / 4) x bore^2 x stroke, and state the result with units.",
      "Explain the clearance volume (espacio muerto) as the space left above the piston at top dead centre.",
      "Calculate the compression ratio r = (swept volume + clearance volume) / clearance volume, and explain why a higher compression ratio raises the temperature at the end of compression enough to ignite the fuel of a diesel.",
      "Report the swept volume, the compression ratio and their meaning, in clear engine-room English."
    ],
    deliverable: "A calculation note in English giving the swept volume, the compression ratio, and why the compression ratio matters for diesel ignition.",
    assessmentCriteria: [
      "The swept volume is calculated correctly with units.",
      "The clearance volume is correctly understood and the compression ratio is calculated correctly.",
      "The link between compression ratio, compression temperature and diesel ignition is sound.",
      "The calculation note is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "MOT529",
    subjectName: "Motores I",
    subjectId: "mn-s5-motores-i",
    unit: "Cálculo de motores de dos y cuatro tiempos",
    topic: "Ángulo de calaje y diagrama de distribución",
    week: 11,
    taskId: "mn-mot529-w11-timing-angle",
    taskTitle: "Explain Valve And Injection Timing",
    scenario: "The engine's valves and fuel injection do not open exactly at dead centre. The second engineer asks the cadet to explain the timing angles (angulo de calaje) shown on the engine's timing diagram.",
    instructions: [
      "Explain that the inlet and exhaust valves and the fuel injection are timed by crank angle, not exactly at top or bottom dead centre, and that these advance and retard angles are the angulo de calaje.",
      "Explain valve overlap (both valves briefly open around top dead centre) and why it improves the scavenging and charging of the cylinder, referring to the four-stroke cycle of week 2 rather than re-teaching it.",
      "Explain injection timing: why injection begins a few degrees before top dead centre so the fuel burns around the point of best expansion, and what happens to the engine if injection is too early or too late.",
      "Report how correct timing affects power and exhaust temperature, in clear engine-room English."
    ],
    deliverable: "A note in English explaining the timing angles (angulo de calaje), valve overlap, injection advance, and the effect of incorrect timing, building on the four-stroke cycle of week 2.",
    assessmentCriteria: [
      "The concept of timing by crank angle (angulo de calaje) is correct.",
      "Valve overlap and its benefit to scavenging and charging are correctly explained.",
      "Injection advance and the effect of early or late injection are correct.",
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
    topic: "Mantenimiento y vigilancia del funcionamiento del motor",
    week: 12,
    taskId: "mn-mot529-w12-engine-maintenance-monitoring",
    taskTitle: "Plan Main-Engine Maintenance And Performance Monitoring",
    scenario: "As the closing task of the subject, the chief engineer asks the cadet to bring the whole engine together: to monitor the running engine on the engine-room simulator and plan its routine maintenance so faults are caught before they become failures.",
    instructions: [
      "State the running parameters watched on the engine-room control panel and why each matters: exhaust temperature per cylinder (uneven means an injection or valve fault), lube-oil pressure and temperature (week 3), cooling-water temperature (week 6) and scavenge or charge-air pressure (week 4).",
      "Explain how the engineer uses these readings to detect a developing fault (for example one cylinder running hot, or a falling lube-oil pressure) before it causes damage.",
      "Outline the routine maintenance that keeps the engine reliable (planned overhaul of units, checking clearances, cleaning the turbocharger and coolers, renewing filters and fuel-injection parts).",
      "Report an engine-condition summary to the chief engineer, integrating the systems of weeks 3 to 8, in clear engine-room English."
    ],
    deliverable: "An engine-condition report in English drawing together the monitored parameters (exhaust temperatures, lube oil, cooling, scavenge air), the early detection of a developing fault, and the routine maintenance plan, integrating weeks 3 to 8 as the subject capstone.",
    assessmentCriteria: [
      "The monitored parameters are correct and correctly linked to their systems (lube oil, cooling, scavenge air, exhaust temperature).",
      "The use of readings to detect a developing fault before failure is sound.",
      "The routine maintenance plan is realistic and relevant.",
      "The report integrates the earlier weeks and is clear and in correct engine-room English."
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
    subjectCode: "MEF532",
    subjectName: "Mecánica de fluidos",
    subjectId: "mn-s5-mecanica-fluidos",
    unit: "Líquidos en reposo",
    topic: "Presión hidrostática, empuje y flotación",
    week: 9,
    taskId: "mn-mef532-w09-hydrostatic-pressure-buoyancy",
    taskTitle: "Calculate Hydrostatic Pressure And Buoyancy",
    scenario: "The pressure at the bottom of a full fuel tank and the upthrust on a submerged cooler depend on the depth of liquid. The engineer asks the cadet to work out the hydrostatic pressure and the buoyancy.",
    instructions: [
      "State the hydrostatic pressure law p = rho x g x h and explain that the pressure depends only on the depth and the fluid density, not on the shape of the tank.",
      "Calculate the gauge pressure at the bottom of a tank of a given depth and fluid (for example water 3 m deep), stating the result with units.",
      "Explain buoyancy (Archimedes): a submerged or floating body is pushed up by a force equal to the weight of the fluid it displaces, and connect this to why a tank sounding relates to the liquid the tank holds.",
      "Report the pressure and the buoyancy reasoning, in clear engine-room English."
    ],
    deliverable: "A calculation note in English giving the hydrostatic pressure at a stated depth and explaining buoyancy as the weight of the displaced fluid.",
    assessmentCriteria: [
      "The hydrostatic pressure law is correct (depends on depth and density, not on shape).",
      "The pressure is calculated correctly with units.",
      "Buoyancy is correctly explained (the upthrust equals the weight of fluid displaced).",
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
    unit: "Equipos que manejan líquidos",
    topic: "Bombas de desplazamiento positivo",
    week: 10,
    taskId: "mn-mef532-w10-positive-displacement-pumps",
    taskTitle: "Compare Positive Displacement And Centrifugal Pumps",
    scenario: "The fuel and lube-oil systems use positive displacement pumps, not centrifugal ones. Building on the centrifugal pump of week 6, the engineer asks the cadet to explain positive displacement pumps and when each type is used.",
    instructions: [
      "Explain how a positive displacement pump (gear, screw or piston type) traps a fixed volume of fluid and forces it out, so it delivers an almost constant flow whatever the discharge pressure.",
      "Contrast this with the centrifugal pump of week 6, whose flow falls as the head rises, referring to the pump curve rather than re-explaining it.",
      "State why a positive displacement pump MUST have a relief valve, since a closed discharge would build up pressure until something bursts, and give a typical engine-room use (viscous fuel or lube oil).",
      "Report the comparison and the relief-valve rule, in clear engine-room English."
    ],
    deliverable: "A note in English explaining positive displacement pumps (a fixed trapped volume, near-constant flow), the contrast with the centrifugal pump of week 6, the mandatory relief valve, and a typical use.",
    assessmentCriteria: [
      "The positive displacement principle is correct (a fixed trapped volume, near-constant flow independent of pressure).",
      "The contrast with the centrifugal pump of week 6 is correct.",
      "The relief-valve requirement and a valid use are correctly stated.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "MEF532",
    subjectName: "Mecánica de fluidos",
    subjectId: "mn-s5-mecanica-fluidos",
    unit: "Sistemas de control hidráulico",
    topic: "Cilindros y motores hidráulicos y el principio de Pascal",
    week: 11,
    taskId: "mn-mef532-w11-hydraulic-power",
    taskTitle: "Explain Hydraulic Power And Force Multiplication",
    scenario: "Deck and engine-room machinery is driven by hydraulics. The engineer asks the cadet to explain how a hydraulic system multiplies force and drives cylinders and motors.",
    instructions: [
      "State Pascal's principle: a pressure applied to a confined fluid is transmitted equally throughout, so the same pressure acts on every actuator on the line.",
      "Explain force multiplication: since force = pressure x area, a small piston can lift a large load on a bigger piston (F = p x A), and calculate the output force for a given pressure and ram area.",
      "Explain how a hydraulic cylinder gives a linear movement and a hydraulic motor gives rotation, and give an engine-room or deck example (a steering-gear ram, a deck crane, a windlass).",
      "Report the force calculation and the cylinder-versus-motor difference, in clear engine-room English."
    ],
    deliverable: "A note in English explaining Pascal's principle, the F = p x A force multiplication with a worked figure, and the difference between a hydraulic cylinder and a hydraulic motor, with an example.",
    assessmentCriteria: [
      "Pascal's principle is correctly stated (pressure transmitted equally through a confined fluid).",
      "The force multiplication F = p x A is calculated correctly with units.",
      "The cylinder (linear) versus motor (rotary) distinction is correct with a valid example.",
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
    unit: "Sistemas de control hidráulico",
    topic: "Sistema de control de aceite y control con acciones",
    week: 12,
    taskId: "mn-mef532-w12-hydraulic-control-system",
    taskTitle: "Trace The Hydraulic Control System On The Steering Gear",
    scenario: "As the closing task of the subject, the engineer asks the cadet to trace a complete hydraulic control system on the ship's steering gear, drawing together the fluid principles of the semester.",
    instructions: [
      "Trace the system from the pump (the positive displacement power source of week 10) through the control valve to the actuator (the ram or cylinder of week 11) that moves the rudder, and back to the tank.",
      "Explain the control action: how a demand signal from the bridge positions the control valve so oil is sent to the correct side of the ram until the rudder reaches the ordered angle, then the valve returns to neutral (a follow-up or feedback action).",
      "State two essential requirements and why: the relief valve (protects against overpressure, week 10) and the oil condition (clean, correct level and viscosity, the viscosity of week 1) on which the system depends.",
      "Report how the hydraulic system converts a bridge order into rudder movement, integrating the semester, in clear engine-room English."
    ],
    deliverable: "A note in English tracing the steering-gear hydraulic system (pump, control valve, ram, return), the feedback control action that stops at the ordered angle, and the essential requirements (relief valve, oil condition), integrating weeks 1, 10 and 11 as the subject capstone.",
    assessmentCriteria: [
      "The hydraulic circuit is traced correctly (pump, control valve, actuator or ram, return to tank).",
      "The control and feedback action is correctly explained (the valve directs oil until the ordered angle is reached, then goes to neutral).",
      "The essential requirements are correct (relief valve for overpressure, oil condition and viscosity) and linked to earlier weeks.",
      "The report integrates the semester and is clear and in correct English."
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
    subjectCode: "MMA533",
    subjectName: "Maquinaria Marítima Auxiliar",
    subjectId: "mn-s5-maquinaria-maritima-auxiliar",
    unit: "Sistema de gobierno y propulsión",
    topic: "Maquinilla del timón",
    week: 9,
    taskId: "mn-mma533-w09-steering-gear",
    taskTitle: "Explain The Steering Gear",
    scenario: "The steering gear turns the rudder on command from the bridge. The engineer asks the cadet to explain how the ship's steering gear works and why it is a critical, duplicated system.",
    instructions: [
      "Explain that the steering gear moves the rudder to the angle ordered from the bridge, usually by a hydraulic power unit driving a ram or rotary vane on the rudder stock.",
      "Explain why the steering gear is duplicated (two power units, control from more than one source) so that steering is not lost by a single failure, as required for safety.",
      "State what the engineer checks before departure (both power units, the changeover, the rudder-angle response and the emergency steering position).",
      "Report the steering-gear check to the bridge, in clear engine-room English."
    ],
    deliverable: "A note in English explaining the steering gear (a hydraulic power unit turning the rudder stock), its duplication for safety, and the pre-departure checks, with the check reported to the bridge.",
    assessmentCriteria: [
      "The steering-gear operation is correct (a hydraulic power unit turning the rudder to the ordered angle).",
      "The duplication and redundancy reasoning is sound.",
      "The pre-departure checks are relevant and correct.",
      "The report is clear and in correct English."
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
    unit: "Sistemas de bombas",
    topic: "Sistema de sentinas, servicios generales e hidróforo",
    week: 10,
    taskId: "mn-mma533-w10-bilge-general-service",
    taskTitle: "Explain The Bilge And Fresh-Water Service Systems",
    scenario: "The engine room must keep its bilges clear and supply fresh water to the accommodation. The engineer asks the cadet to explain the bilge system and the hydrophore (fresh-water pressure set).",
    instructions: [
      "Explain the bilge system: how the bilge wells are drained by the bilge pump through a suction line, and why bilge water from machinery spaces must pass the oily water separator (week 1) before any discharge.",
      "Explain the general-service or fire-and-bilge pump role and why some pumps serve more than one duty.",
      "Explain the hydrophore: a pressure tank with an air cushion that keeps the domestic fresh water under pressure so the pump need not run every time a tap is opened.",
      "Report the purpose of each system, in clear engine-room English."
    ],
    deliverable: "A note in English explaining the bilge system (wells, bilge pump, discharge via the oily water separator of week 1), the general-service pumping duties, and the hydrophore pressure set.",
    assessmentCriteria: [
      "The bilge system is correctly explained and linked to the oily water separator of week 1 before any discharge.",
      "The general-service and multi-duty pump role is correct.",
      "The hydrophore (air-cushion pressure tank) is correctly explained.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "MMA533",
    subjectName: "Maquinaria Marítima Auxiliar",
    subjectId: "mn-s5-maquinaria-maritima-auxiliar",
    unit: "Sistema de gobierno y propulsión",
    topic: "Sistema de paso variable y bow thruster",
    week: 11,
    taskId: "mn-mma533-w11-cpp-thrusters",
    taskTitle: "Explain Controllable Pitch Propeller And Thrusters",
    scenario: "Manoeuvring in port, the ship uses a controllable pitch propeller and a bow thruster. The engineer asks the cadet to explain how these give fine control of thrust.",
    instructions: [
      "Explain the controllable pitch propeller (CPP): the blades rotate on the hub to change the pitch, so the thrust and its direction (ahead or astern) are varied while the shaft keeps turning one way at constant speed.",
      "State one advantage of a CPP for manoeuvring (fast, fine thrust control without reversing the engine, in contrast with the direct-reversing engine of Motores I).",
      "Explain the bow thruster: a transverse propeller in a tunnel near the bow that pushes the bow to port or starboard, giving low-speed steering when the rudder is ineffective.",
      "Report how the CPP and the thruster together improve port manoeuvring, in clear engine-room English."
    ],
    deliverable: "A note in English explaining the controllable pitch propeller (variable-pitch blades, constant shaft direction), its manoeuvring advantage, and the bow thruster for low-speed steering.",
    assessmentCriteria: [
      "The CPP principle is correct (the blades change pitch to vary thrust and direction at constant shaft rotation).",
      "The manoeuvring advantage is sound (fine thrust control without reversing the engine).",
      "The bow thruster is correctly explained (transverse tunnel thrust for low-speed steering).",
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
    unit: "Sistema de gobierno y propulsión",
    topic: "Sistemas de propulsión especiales: Z-drive, Voith y jet",
    week: 12,
    taskId: "mn-mma533-w12-special-propulsion",
    taskTitle: "Compare Special Propulsion Systems",
    scenario: "As the closing task of the subject, the engineer asks the cadet to compare the special propulsion systems fitted to tugs, ferries and fast craft, drawing together the propulsion machinery of the subject.",
    instructions: [
      "Explain the azimuth (Z-drive) thruster: a propeller unit that rotates through 360 degrees to direct the thrust any way, giving a tug or ferry full manoeuvrability without a conventional rudder.",
      "Explain the Voith Schneider (cycloidal) propeller: vertical blades on a rotating disc whose pitch is varied to give instant thrust in any direction, prized for precise station-keeping.",
      "Explain the water jet: an impeller draws in water and expels it astern through a steerable nozzle, well suited to fast, shallow-draught craft, and reversed by a deflector bucket.",
      "Report which system suits a tug, a double-ended ferry and a fast craft and why, integrating the subject, in clear engine-room English."
    ],
    deliverable: "A note in English comparing the azimuth (Z-drive) thruster, the Voith Schneider propeller and the water jet, and matching each to a suitable vessel, as the subject capstone.",
    assessmentCriteria: [
      "The azimuth or Z-drive is correctly explained (360-degree steerable thrust).",
      "The Voith Schneider is correctly explained (variable-pitch vertical blades, thrust in any direction).",
      "The water jet is correctly explained (an impeller and a steerable nozzle, reversed by a bucket).",
      "The vessel matching is sound and the report is clear and in correct English."
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
    subjectCode: "EIA531",
    subjectName: "Electrotecnia",
    subjectId: "mn-s5-electrotecnia",
    unit: "Arranque de motores de Corriente Alterna de potencias grandes",
    topic: "Arranque por resistencias primarias y por autotransformador",
    week: 9,
    taskId: "mn-eia531-w09-reduced-voltage-starting",
    taskTitle: "Compare Reduced-Voltage Motor Starters",
    scenario: "Besides the star-delta starter of week 4, large motors can be started by a primary-resistance or an autotransformer starter. The engineer asks the cadet to compare these reduced-voltage starting methods.",
    instructions: [
      "Explain primary-resistance starting: resistors in series with the stator drop the voltage at start and are cut out as the motor runs up, reducing the starting current.",
      "Explain autotransformer starting: an autotransformer feeds a reduced voltage at start, then connects the motor to full line voltage, giving a lower starting current for a given starting torque.",
      "Compare all three (the star-delta of week 4, primary resistance and autotransformer) on starting current and torque, and say when a reduced-voltage start is needed at all.",
      "Report which method suits a large pump motor and why, in clear engine-room English."
    ],
    deliverable: "A note in English comparing primary-resistance and autotransformer starting with the star-delta method of week 4, on starting current and torque, and selecting a method for a large motor.",
    assessmentCriteria: [
      "Primary-resistance starting is correctly explained (series resistance reduces the start voltage and current, cut out on run-up).",
      "Autotransformer starting is correctly explained (a reduced voltage at start, then full voltage).",
      "The comparison of the three methods on current and torque is sound.",
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
    unit: "Símbolos eléctricos de control",
    topic: "Símbolos eléctricos más comunes",
    week: 10,
    taskId: "mn-eia531-w10-control-symbols-diagram",
    taskTitle: "Read An Electrical Motor-Starter Diagram",
    scenario: "A fault on a motor starter can only be traced with the wiring diagram. The engineer asks the cadet to read the common control symbols and follow a start-stop starter diagram.",
    instructions: [
      "Identify the common control symbols: the contactor coil, normally-open and normally-closed contacts, the overload relay, the push-buttons (start and stop), the fuse and the isolator.",
      "Follow the control (holding) circuit of a start-stop starter: pressing start energises the contactor coil, an auxiliary contact holds it in (the seal-in), and pressing stop or an overload trip drops it out.",
      "Explain what the overload relay protects against and what happens to the motor when it trips.",
      "Report how you would use the diagram to find why the motor will not start, in clear engine-room English."
    ],
    deliverable: "A note in English identifying the common control symbols and explaining the start-stop holding circuit (coil, seal-in auxiliary contact, stop and overload drop-out) and the overload protection, used to trace a no-start fault.",
    assessmentCriteria: [
      "The common control symbols are correctly identified.",
      "The holding and seal-in circuit is correctly explained (start energises the coil, the auxiliary contact holds, stop or overload drops it out).",
      "The overload relay's purpose and trip effect are correct.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "EIA531",
    subjectName: "Electrotecnia",
    subjectId: "mn-s5-electrotecnia",
    unit: "Circuitos secuenciales",
    topic: "Relevadores y elementos de los circuitos secuenciales",
    week: 11,
    taskId: "mn-eia531-w11-relays-sequential-control",
    taskTitle: "Explain Relay Sequential Control",
    scenario: "Auxiliary machinery starts and stops in a set sequence run by relays. The engineer asks the cadet to explain how relays build a sequential control circuit.",
    instructions: [
      "Explain what a relay is and does: a small control current energises a coil that switches larger or several contacts, so one signal controls many circuits and gives isolation between the control and the power side.",
      "Explain interlocking: how the normally-closed contacts of one relay prevent another from operating (for example two pumps that must not both start, or a sequence that must run in order).",
      "Explain a simple sequence: how relays with contacts and a timer start machinery in the correct order (for example proving the lube-oil pump is running before the main machine is allowed to start).",
      "Report how the relay logic enforces a safe starting sequence, in clear engine-room English."
    ],
    deliverable: "A note in English explaining relays (a coil switching contacts, isolation of control from power), interlocking with normally-closed contacts, and a simple timed starting sequence that proves one condition before allowing the next.",
    assessmentCriteria: [
      "The relay function is correct (the coil switches contacts, isolating control from power).",
      "Interlocking with normally-closed contacts is correctly explained.",
      "The sequential and interlocked start (one condition proven before the next) is sound.",
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
    unit: "Generadores de corriente alterna y directa",
    topic: "Características de funcionamiento del alternador y control de tensión",
    week: 12,
    taskId: "mn-eia531-w12-generator-characteristics",
    taskTitle: "Explain Generator Characteristics And Voltage Control",
    scenario: "As the closing task of the subject, the engineer asks the cadet to explain how the ship's alternator generates and holds a steady voltage, drawing the semester's three-phase and synchronising work together.",
    instructions: [
      "Explain how the AC alternator generates: a rotating magnetic field (the excited rotor) induces a three-phase EMF in the stator windings (the three-phase system of week 1), and contrast it briefly with a DC generator, where a commutator rectifies the output.",
      "Explain the running characteristic: as the electrical load increases the terminal voltage tends to fall (and depends on the power factor), so a voltage regulator is needed.",
      "Explain the automatic voltage regulator (AVR): it adjusts the field excitation to hold the terminal voltage steady as the load changes, which is also how the reactive load is shared between paralleled generators (week 6).",
      "Report how the alternator holds a steady voltage under changing load, integrating the semester, in clear engine-room English."
    ],
    deliverable: "A note in English explaining AC alternator generation (an excited rotor inducing a three-phase stator EMF) versus the DC generator's commutator, the fall of voltage with load, and the AVR holding the voltage by adjusting excitation, integrating weeks 1 and 6 as the subject capstone.",
    assessmentCriteria: [
      "The alternator generation is correct (a rotating field induces a three-phase stator EMF) and the DC-generator contrast (commutator) is valid.",
      "The load characteristic is correct (the terminal voltage tends to fall with load and power factor).",
      "The AVR's action is correct (it adjusts excitation to hold voltage, and ties to the reactive-load sharing of week 6).",
      "The report integrates the semester and is clear and in correct English."
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
    subjectCode: "TAL534",
    subjectName: "Taller IV",
    subjectId: "mn-s5-taller-iv",
    unit: "Herramientas manuales",
    topic: "Sierra de corte, hojas y limas",
    week: 9,
    taskId: "mn-tal534-w09-hacksaw-files",
    taskTitle: "Cut And File A Part By Hand",
    scenario: "A repair needs a piece cut to length and filed to size by hand. The instructor asks the cadet to explain the correct use of the hacksaw and files for the job.",
    instructions: [
      "Explain selecting and fitting the hacksaw blade: the teeth pointing forward, the correct tension, and a finer-pitch blade for thin or hard metal so at least two teeth are always in contact.",
      "Explain the sawing technique: cut on the forward stroke, use the full length of the blade, and let the saw do the work without forcing it.",
      "Explain filing: the difference between a rough (bastard) and a smooth file, cross-filing to remove metal and draw-filing to finish, and keeping the file clean so it does not clog and score the work.",
      "Report the steps to cut and file the part to size, in clear engine-room English."
    ],
    deliverable: "A note in English on cutting and filing by hand: hacksaw blade selection and technique, and the choice and use of files for roughing and finishing.",
    assessmentCriteria: [
      "The hacksaw blade selection and fitting are correct (teeth forward, tension, pitch for the material).",
      "The sawing technique is correct (cut on the forward stroke, full blade length, no forcing).",
      "The filing method is correct (rough versus smooth file, cross-filing and draw-filing, keeping the file clean).",
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
    unit: "Medición",
    topic: "Calibradores, escuadras y chequeo por comparación",
    week: 10,
    taskId: "mn-tal534-w10-measuring-instruments",
    taskTitle: "Measure And Check A Part With Precision Instruments",
    scenario: "A machined part must be verified against its drawing. Building on the dimensional control of week 2, the instructor asks the cadet to use the workshop measuring instruments correctly.",
    instructions: [
      "Explain measuring an outside and an inside diameter with a vernier or dial caliper, and reading a micrometer for a finer measurement, stating the resolution of each.",
      "Explain checking squareness with a 90-degree square and an angle with a protractor, and checking a flat surface against a surface plate.",
      "Explain checking by comparison (feeler gauges for a clearance, go and no-go gauges against the tolerance of week 2) and why comparison is faster for a batch of parts.",
      "Report the measurements and whether the part is within tolerance, in clear engine-room English."
    ],
    deliverable: "A note in English on using the measuring instruments (caliper, micrometer, square, protractor, surface plate, feeler and go/no-go gauges) and reporting whether the part meets the tolerance of week 2.",
    assessmentCriteria: [
      "The caliper and micrometer use and their resolutions are correct.",
      "The squareness, angle and flatness checks are correct (square, protractor, surface plate).",
      "The comparison checks are correct (feeler and go/no-go gauges against the tolerance).",
      "The measurement report is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "TAL534",
    subjectName: "Taller IV",
    subjectId: "mn-s5-taller-iv",
    unit: "Marcado",
    topic: "Marcado de la pieza: trazadores, compás y superficie de trabajo",
    week: 11,
    taskId: "mn-tal534-w11-marking-out",
    taskTitle: "Mark Out A Workpiece For Machining",
    scenario: "Before drilling and cutting, a part must be marked out accurately. The instructor asks the cadet to mark out a workpiece so the holes and edges come out in the right place.",
    instructions: [
      "Explain preparing the surface: cleaning it and applying marking blue (engineer's dye) so the scribed lines show clearly, working from a datum edge or face.",
      "Explain using the scriber, the try square, the rule and the surface plate to draw straight lines square to the datum, and the odd-leg caliper or dividers to mark parallel lines and step off distances.",
      "Explain marking the hole centres with dividers and centre-punching them, and why a witness or check circle is scribed around a hole so it can be seen if the drill wanders (link to the drilling of week 3).",
      "Report the marking-out plan for the part, in clear engine-room English."
    ],
    deliverable: "A note in English on marking out a workpiece: preparing the surface with dye and a datum, scribing lines square to the datum, and marking and centre-punching the hole centres with a check circle, feeding the drilling of week 3.",
    assessmentCriteria: [
      "Surface preparation and working from a datum are correct.",
      "The use of the scriber, square, rule, surface plate and dividers is correct.",
      "Marking and centre-punching the hole centres with a witness circle is correct and linked to drilling.",
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
    unit: "Elaboración de piezas",
    topic: "Elaboración de una pieza integrando marcado, corte, taladrado, roscado y medición",
    week: 12,
    taskId: "mn-tal534-w12-make-finished-part",
    taskTitle: "Make A Finished Part From A Drawing",
    scenario: "As the closing task of the subject, the instructor gives the cadet a drawing of a simple bracket or gauge and asks for the full plan to make it, drawing together every workshop skill of the subject.",
    instructions: [
      "Read the drawing and plan the order of operations: mark out (week 11), saw and file to shape (week 9), drill the holes (week 3) and cut any thread (week 1).",
      "Explain why the order matters (for example marking out before cutting, and drilling before final filing) and where each dimension is checked with the instruments of week 10.",
      "State the tolerances that matter and how you keep the part within them (week 2), and the safety points for each machine used (week 4).",
      "Report the finished-part plan with its operation sequence and inspection points, integrating the subject, in clear engine-room English."
    ],
    deliverable: "A workshop job plan in English to make a part from a drawing: the operation sequence (marking out, sawing and filing, drilling, threading), the inspection points and tolerances, and the safety points, integrating weeks 1 to 11 as the subject capstone.",
    assessmentCriteria: [
      "The operation sequence is correct and logically ordered (mark out, cut and file, drill, thread).",
      "The reasoning for the order and the inspection points is sound.",
      "The tolerances and machine safety points are correctly included.",
      "The plan integrates the subject and is clear and in correct English."
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
    subjectCode: "PMR536",
    subjectName: "Prácticas Marineras V",
    subjectId: "mn-s5-practicas-marineras-v",
    unit: "Maniobras a son de mar",
    topic: "Procedimientos de trincado a son de mar",
    week: 9,
    taskId: "mn-pmr536-w09-securing-for-sea",
    taskTitle: "Secure The Deck For Sea",
    scenario: "Before sailing into open water, everything on deck must be secured against the ship's motion. The officer asks the cadet to explain how the deck is put a son de mar (secured for sea). Engine cadets stand deck stations too.",
    instructions: [
      "Explain what securing for sea means and why loose gear, stores, drums and the ship's cranes or derricks must be lashed before heavy weather.",
      "Describe the lashing gear and technique: the right lashings, bottlescrews or turnbuckles set up tight, and chafe protection, so nothing works loose as the ship rolls and pitches.",
      "State how the securing is checked and re-tightened after the first hours at sea, because lashings settle and slacken.",
      "Report the deck as secured for sea, in clear maritime English."
    ],
    deliverable: "A note in English on securing the deck for sea: what must be lashed, the lashing gear and technique (tight turnbuckles, chafe protection), and the re-check after the ship starts working in a seaway.",
    assessmentCriteria: [
      "The meaning and need of securing for sea are correct.",
      "The lashing gear and technique are correct (correct lashings, tight turnbuckles, chafe protection).",
      "The re-check and re-tighten after settling is included.",
      "The report is clear and in correct maritime English."
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
    unit: "Pinturas y solventes",
    topic: "Piqueteo, rasqueteo y aplicación de minio y esmalte",
    week: 10,
    taskId: "mn-pmr536-w10-chipping-painting",
    taskTitle: "Prepare And Paint A Corroded Surface",
    scenario: "Rust never stops, so deck maintenance is constant. The officer asks the cadet to explain how a corroded surface is prepared and painted so the coating actually lasts.",
    instructions: [
      "Explain the surface preparation: chipping and scraping (piqueta and rasqueta) or power-tooling to remove rust and loose scale back to sound metal, because paint over rust simply lifts off.",
      "Explain priming: applying red lead or anti-corrosive primer (minio) to the bare metal first to stop the corrosion, then the enamel finish coats over the primer.",
      "State the conditions for painting (a dry, clean surface, not in rain or heavy dew) and the safety and MARPOL care with paints and solvents (ventilation, no pollution over the side).",
      "Report the surface-preparation and painting plan, in clear maritime English."
    ],
    deliverable: "A note in English on preparing and painting a corroded surface: chipping and scraping to sound metal, priming with red lead before the enamel finish, and the conditions and safety and MARPOL care for paints and solvents.",
    assessmentCriteria: [
      "Surface preparation is correct (remove rust and loose scale to sound metal, since paint over rust fails).",
      "The priming-then-finish sequence is correct (anti-corrosive primer before enamel).",
      "The painting conditions and the solvent safety and MARPOL care are correct.",
      "The report is clear and in correct maritime English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "PMR536",
    subjectName: "Prácticas Marineras V",
    subjectId: "mn-s5-practicas-marineras-v",
    unit: "Tapa escotillas",
    topic: "Operación y seguridad de las tapas de escotilla",
    week: 11,
    taskId: "mn-pmr536-w11-hatch-covers",
    taskTitle: "Operate And Seal Hatch Covers Safely",
    scenario: "The weathertight hatch covers keep the sea out of the holds. The officer asks the cadet to explain operating them and why their weathertight seal is a safety-critical duty.",
    instructions: [
      "Explain opening and closing the covers (for example hydraulic folding or side-rolling steel covers) and the safety rules: clear the area, follow the sequence, and never work under a partly supported cover.",
      "Explain the weathertight seal: the rubber gasket bearing on its coaming bar, the cleats or dogs that hold the cover down, and the drainage channels that carry off any water that gets past.",
      "Explain how the seal is tested (for example a hose test or a chalk test) and why a poor seal floods the hold and endangers the ship in heavy weather.",
      "Report the hatch-cover operation and seal check, in clear maritime English."
    ],
    deliverable: "A note in English on hatch covers: safe opening and closing, the weathertight seal (gasket, cleats, drainage), and how the seal is tested, with the danger of a poor seal in heavy weather.",
    assessmentCriteria: [
      "The safe operation of the covers is correct (sequence, area cleared, never under an unsupported cover).",
      "The weathertight seal is correctly explained (gasket on the coaming, cleats, drainage).",
      "The seal test and the flooding danger of a poor seal are correct.",
      "The report is clear and in correct maritime English."
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
    unit: "Anclas y cadenas",
    topic: "Cambio de ancla, desenredo del ancla y amarre a boya",
    week: 12,
    taskId: "mn-pmr536-w12-foul-anchor-buoy-mooring",
    taskTitle: "Clear A Fouled Anchor And Moor To A Buoy",
    scenario: "As the closing task of the subject, the anchor comes up fouled and the ship must then moor to a buoy. The officer asks the cadet to handle both, drawing the semester's anchor and cable work together.",
    instructions: [
      "Explain a fouled anchor: how the cable or anchor can foul on its own turns, on another cable or on an obstruction on the bottom, and how it is cleared (heaving to break the turn, passing a wire rope under the fouling, or walking back to re-lay).",
      "Explain reading the situation from the forecastle and reporting it clearly to the bridge, using the cable markings and the up-and-down and aweigh terms of weeks 4 and 5 so the bridge knows what the anchor party sees.",
      "Explain mooring to a buoy: passing and securing the chain or a wire to the buoy ring with the boat's or party's help, and the safety of the party working at the buoy.",
      "Report the clearing of the fouled anchor and the buoy mooring, integrating the subject, in clear maritime English."
    ],
    deliverable: "A note in English on clearing a fouled anchor (causes and methods) and mooring to a buoy, reported from the forecastle to the bridge with the cable terms of weeks 4 and 5, integrating the subject as its capstone.",
    assessmentCriteria: [
      "The causes of a fouled anchor and the clearing methods are correct.",
      "The forecastle-to-bridge reporting uses the correct cable markings and terms (weeks 4 and 5).",
      "The buoy-mooring method and the party's safety are correct.",
      "The report integrates the subject and is clear and in correct maritime English."
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
    subjectCode: "C0105",
    subjectName: "Liderazgo",
    subjectId: "mn-s5-liderazgo",
    unit: "Autoconciencia",
    topic: "Motivación extrínseca e intrínseca",
    week: 9,
    taskId: "mn-c0105-w09-motivation",
    taskTitle: "Motivate The Engine-Room Team",
    scenario: "An officer gets willing work from a team that is motivated, not merely ordered. Building on the emotional intelligence of week 2, the officer asks the cadet to explain how to motivate a crew.",
    instructions: [
      "Distinguish extrinsic motivation (pay, rank, reward, avoiding punishment) from intrinsic motivation (pride in the work, mastery, belonging and purpose), and explain why intrinsic motivation lasts when the officer is not watching.",
      "Explain how an officer builds intrinsic motivation: meaningful tasks, recognition of good work, trust, and a share in the purpose of the operation.",
      "Explain the limit of extrinsic motivation alone (fear and reward drive compliance but not commitment, and can kill initiative).",
      "Report how you would motivate an engine-room team for a demanding job, in clear maritime English."
    ],
    deliverable: "A note in English on motivation: extrinsic versus intrinsic, why intrinsic motivation lasts, how an officer builds it (meaning, recognition, trust, purpose), and the limit of reward and fear alone.",
    assessmentCriteria: [
      "Extrinsic and intrinsic motivation are correctly distinguished.",
      "The ways an officer builds intrinsic motivation are sound.",
      "The limit of extrinsic motivation alone is correctly explained.",
      "The answer is clear and in correct maritime English."
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
    topic: "Actitud proactiva y hábitos efectivos",
    week: 10,
    taskId: "mn-c0105-w10-proactive-habits",
    taskTitle: "Lead With A Proactive Attitude",
    scenario: "A reactive officer waits for problems; a proactive one prevents them. The officer asks the cadet to explain the proactive attitude and the habits that make an effective leader.",
    instructions: [
      "Explain the proactive attitude: acting within your circle of influence on what you can control (anticipating a fault, preparing the team) rather than only reacting or blaming circumstances.",
      "Explain the value of good habits for a leader: consistency the team can rely on, putting first things first (priorities before urgencies), and beginning with the end in mind.",
      "Explain how a proactive officer prevents engine-room problems (a planned-maintenance mindset, briefing before a job, anticipating what could go wrong) rather than fire-fighting.",
      "Report how a proactive attitude and good habits improve the watch, in clear maritime English."
    ],
    deliverable: "A note in English on proactive leadership: acting within your circle of influence, the habits of an effective leader (consistency, priorities, ending in mind), and how proactivity prevents engine-room problems rather than reacting to them.",
    assessmentCriteria: [
      "The proactive attitude is correctly explained (act on what you control, within your influence).",
      "The effective-leader habits are sound (consistency, priorities, end in mind).",
      "The prevention-over-reaction application to the engine room is sound.",
      "The answer is clear and in correct maritime English."
    ],
    xp: 20,
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
    topic: "Estrategias para identificar problemas y planear la operación",
    week: 11,
    taskId: "mn-c0105-w11-problem-solving-planning",
    taskTitle: "Identify A Problem And Plan The Operation",
    scenario: "An officer must turn a vague sense that something is wrong into a defined problem and a plan of action. The officer asks the cadet to apply a structured method to an engine-room problem.",
    instructions: [
      "Explain identifying the real problem: separating the symptom from the root cause and defining the problem clearly before jumping to a solution, since a wrong definition wastes the whole effort.",
      "Explain planning the operation: setting the objective, listing the options, weighing resources, time and risk, and choosing a course with a fallback.",
      "Explain assigning and sequencing the tasks and setting check points, so the plan is monitored and adjusted as it runs (link to the teamwork and win-win of weeks 3 and 4).",
      "Report the problem definition and the operating plan, in clear maritime English."
    ],
    deliverable: "A note in English applying a structured method to an engine-room problem: defining the real problem (symptom versus root cause), planning the operation (objective, options, resources, risk, fallback), and sequencing tasks with check points.",
    assessmentCriteria: [
      "The problem is correctly defined by separating the symptom from the root cause.",
      "The operational plan is sound (objective, options, resources and time and risk, fallback).",
      "The task sequencing and check points are sound.",
      "The answer is clear and in correct maritime English."
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
    unit: "Elementos del liderazgo",
    topic: "Comunicación efectiva, autocrítica y renovación del líder",
    week: 12,
    taskId: "mn-c0105-w12-self-critique-renewal",
    taskTitle: "Grow As A Leader Through Self-Critique And Renewal",
    scenario: "As the closing task of the subject, the officer asks the cadet to look at the leader's own development: the honest self-critique and continual renewal that keep a leader worth following over a career.",
    instructions: [
      "Explain honest self-critique: seeking feedback, admitting one's own mistakes openly (which gives the team permission to be honest), and separating self-critique from self-punishment.",
      "Explain renewal: keeping one's knowledge, skills, health and motivation current so the leader does not stagnate, and why a leader who stops learning falls behind the ship and the crew.",
      "Draw the semester together: the styles and emotional intelligence (weeks 1 and 2), teamwork and communication (weeks 3 to 5), assertiveness and conflict (weeks 6 and 7), and motivation and proactivity (weeks 9 and 10) all rest on a leader who keeps growing.",
      "Report a personal leadership-development plan, integrating the subject, in clear maritime English."
    ],
    deliverable: "A note in English on the leader's growth: honest self-critique (feedback, admitting mistakes, not self-punishment) and continual renewal (skills, health, motivation), with a personal development plan integrating the subject as its capstone.",
    assessmentCriteria: [
      "Honest self-critique is correctly explained (feedback, admitting mistakes, distinct from self-punishment).",
      "Renewal is correctly explained (keeping skills, health and motivation current).",
      "The plan draws the semester's leadership themes together.",
      "The plan is clear and in correct maritime English."
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
    subjectCode: "C0011",
    subjectName: "Educación Física V",
    subjectId: "mn-s5-educacion-fisica-v",
    unit: "Percepción y coordinación motriz",
    topic: "Equilibrio, coordinación y lateralidad en un buque en movimiento",
    week: 9,
    taskId: "mn-c0011v-w09-balance-coordination",
    taskTitle: "Keep Your Balance On A Moving Ship",
    scenario: "An engineer works and climbs in a space that rolls and pitches. The training officer asks the cadet to explain how balance and coordination keep them safe and effective as the ship moves.",
    instructions: [
      "Explain how the body keeps its balance (the inner ear, the eyes and the feel of the feet working together) and why a moving deck constantly challenges it.",
      "Explain one hand for the ship and one for yourself, and moving with the roll: timing a move to the ship's motion, keeping three points of contact on ladders, and a low, stable stance when carrying tools.",
      "Explain how balance and coordination can be trained (balance and coordination drills) and why fatigue (the concentration of week 4) degrades them.",
      "Report the balance and coordination points for safe engine-room movement, in clear English using correct fitness terms."
    ],
    deliverable: "A note in English on balance and coordination aboard: how the body balances, moving safely with the ship (three points of contact, a low stance, timing the roll), and how these are trained and degraded by fatigue.",
    assessmentCriteria: [
      "The basis of balance is correctly explained (inner ear, vision, the feel of the feet) and why a moving deck challenges it.",
      "The safe-movement techniques are correct (three points of contact, low stance, timing the motion).",
      "The training of balance and coordination and the effect of fatigue are sound.",
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
    unit: "Desarrollo físico integral",
    topic: "Deportes de equipo: fútbol, básquetbol y voleibol como entrenamiento de coordinación",
    week: 10,
    taskId: "mn-c0011v-w10-team-sports",
    taskTitle: "Use Team Sport To Build Crew Coordination",
    scenario: "The training officer runs team sport aboard and ashore not just for fitness but to build the crew. The cadet is asked to explain what team sports train that transfers to working as a crew.",
    instructions: [
      "Explain the physical benefit of team sports (football, basketball, volleyball): all-round fitness, agility and coordination that a single repetitive exercise does not give.",
      "Explain the crew benefit: communication, reading team-mates, taking a role and covering for others under pressure, the same habits an engine-room watch needs (link to the teamwork of the Leadership subject).",
      "Explain fair play and handling winning and losing as training for composure and respect within a crew.",
      "Report how a team sport builds both fitness and crew coordination, in clear English using correct fitness terms."
    ],
    deliverable: "A note in English on team sport as training: the all-round physical benefit (agility, coordination) and the crew benefit (communication, roles, composure) that transfers to working as an engine-room team.",
    assessmentCriteria: [
      "The physical benefit of team sport is correct (all-round fitness, agility, coordination).",
      "The crew and teamwork transfer is sound (communication, roles, covering for others).",
      "Fair play as training for composure and respect is included.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
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
    topic: "Técnica de nado y flotación eficiente para supervivencia",
    week: 11,
    taskId: "mn-c0011v-w11-swimming-technique",
    taskTitle: "Swim And Float Efficiently To Survive",
    scenario: "In the water after abandoning ship, the swimmer who wastes energy tires and cools fastest. Completing the swimming work of the subject, the instructor asks the cadet to explain efficient technique for survival.",
    instructions: [
      "Explain efficient stroke technique: a long, relaxed stroke and steady breathing that move the swimmer with the least effort, rather than fast thrashing that exhausts and chills.",
      "Explain floating and resting: how to float on the back or use a survival float to rest and conserve energy and heat while waiting for rescue (building on the survival swimming of week 3 and the rescue of week 7).",
      "Explain how a lifejacket changes the technique (keeping the airway clear, conserving heat with the HELP position) and why energy conservation matters more than speed.",
      "Report the efficient-swimming and floating points for survival, in clear English suitable for a safety briefing."
    ],
    deliverable: "A brief in English on efficient survival swimming: a relaxed, energy-saving stroke, floating and resting to conserve energy and heat, and swimming with a lifejacket, building on weeks 3 and 7.",
    assessmentCriteria: [
      "The efficient stroke technique is correct (a long relaxed stroke, steady breathing, not thrashing).",
      "Floating and resting to conserve energy and heat are correctly explained.",
      "Swimming with a lifejacket and the priority of energy conservation are correct.",
      "The brief is clear and in correct English."
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
    unit: "Desarrollo físico integral",
    topic: "Integración de la aptitud física: fuerza, resistencia, coordinación y competencia acuática",
    week: 12,
    taskId: "mn-c0011v-w12-integrated-readiness",
    taskTitle: "Demonstrate All-Round Physical Readiness",
    scenario: "As the closing task of the subject, the training officer asks the cadet to show balanced, all-round physical readiness for the engine department, drawing together everything the semester built.",
    instructions: [
      "Set out the four capacities the engineer's work demands and why: strength for heavy work (week 1), endurance judged by feel (week 5), coordination and balance for a moving ship (week 9), and water competence for survival (weeks 3, 7 and 11).",
      "Explain why all-round balance beats one over-developed capacity: a very strong engineer who cannot last a watch, or a fit swimmer with no strength, is not ready for the range of the work.",
      "Explain keeping this readiness across a career, safely and without injury (the injury prevention of week 6), as an ongoing habit rather than a one-off test.",
      "Report a personal all-round readiness summary, integrating the subject, in clear English using correct fitness terms."
    ],
    deliverable: "A note in English on all-round physical readiness: the four capacities (strength, endurance, coordination and balance, water competence) and why balance among them matters, kept up safely across a career, integrating the subject as its capstone.",
    assessmentCriteria: [
      "The four capacities are correctly linked to the work and the earlier weeks.",
      "The case for balanced all-round readiness over one over-developed capacity is sound.",
      "Maintaining readiness safely across a career (injury prevention) is included.",
      "The summary integrates the subject and is clear and in correct English."
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
    subjectCode: "C0104",
    subjectName: "Ética Profesional",
    subjectId: "mn-s5-etica-profesional",
    unit: "Ética y Moral",
    topic: "Diferencia entre ética y moral y sus implicaciones",
    week: 9,
    taskId: "mn-c0104-w09-ethics-versus-morality",
    taskTitle: "Distinguish Ethics From Morality",
    scenario: "The second engineer asks the cadet to sort out two words that are often confused but that decide how a professional thinks: ethics and morality, and what each demands of a seafarer.",
    instructions: [
      "Define morality as the set of accepted values and customs a person is brought up with, and ethics as the reasoned reflection that examines and justifies those values.",
      "Explain the implication: a professional cannot simply rely on inherited custom but must be able to reason about why an action is right, especially when customs differ across a multinational crew.",
      "Give an engine-room example where reasoned ethics is needed because habit or local custom is not enough (for example a practice that is how it has always been done but is unsafe).",
      "Report the distinction and its meaning for a seafarer, in clear maritime English."
    ],
    deliverable: "A note in English distinguishing morality (inherited values and customs) from ethics (the reasoned reflection on them), with why a professional must reason and not only follow custom, and an engine-room example.",
    assessmentCriteria: [
      "Morality and ethics are correctly distinguished (inherited values versus reasoned reflection).",
      "The implication for a professional (reasoning beyond custom) is sound.",
      "The engine-room example genuinely needs reasoned ethics, not just habit.",
      "The answer is clear and in correct maritime English."
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
    unit: "El juicio",
    topic: "El juicio y los tipos de razonamiento en la decisión ética",
    week: 10,
    taskId: "mn-c0104-w10-judgment-reasoning",
    taskTitle: "Reason Soundly Toward A Judgment",
    scenario: "A sound decision rests on sound reasoning. The second engineer asks the cadet to explain how a judgment is formed and how good reasoning differs from a hasty or fallacious one.",
    instructions: [
      "Explain what a judgment is (affirming or denying something about a case) and how a professional judgment should rest on evidence, not on impression alone.",
      "Explain deductive reasoning (from a general rule to the case: all pressure vessels must be tested, this is a pressure vessel, so it must be tested) and inductive reasoning (from cases to a general pattern: repeated failures point to a common cause).",
      "Warn against common faults in reasoning (jumping to a conclusion, mistaking correlation for cause, deciding from one loud voice) and how they lead to a wrong judgment.",
      "Report how a sound judgment is reasoned, using an engine-room decision as the example, in clear maritime English."
    ],
    deliverable: "A note in English on forming a judgment: judgment resting on evidence, deductive versus inductive reasoning with an engine-room example of each, and the common reasoning faults to avoid.",
    assessmentCriteria: [
      "Judgment resting on evidence rather than impression is correctly explained.",
      "Deductive and inductive reasoning are correctly distinguished with valid examples.",
      "The common reasoning faults are correctly identified.",
      "The answer is clear and in correct maritime English."
    ],
    xp: 20,
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
    topic: "El contexto laboral de la gente de mar y sus exigencias éticas",
    week: 11,
    taskId: "mn-c0104-w11-seafarer-labor-context",
    taskTitle: "Face The Ethics Of The Seafarer's Working Life",
    scenario: "The second engineer asks the cadet to look honestly at the working life of a seafarer, its long contracts, isolation, multinational crew, fatigue and authority, and the ethical demands it places on the professional.",
    instructions: [
      "Describe the real working context of the gente de mar: months away from home, life and work in the same confined place, a crew of mixed nationalities and cultures, and a clear chain of command.",
      "Explain the ethical demands this context creates: respect across cultures and beliefs, fairness and no abuse of rank, honesty in reporting, and care for shipmates' welfare and one's own limits (the fatigue ethics of week 7).",
      "Explain the professional's own rights and duties: the duty to competent, sober, rested work set against the right to fair treatment, rest and dignity, and why the two support each other.",
      "Report the ethical demands of the seafarer's working life, in clear maritime English."
    ],
    deliverable: "A note in English on the seafarer's labour context (long contracts, isolation, multinational crew, chain of command) and its ethical demands (cross-cultural respect, fairness, honesty, welfare), with the professional's paired rights and duties, building on the fatigue ethics of week 7.",
    assessmentCriteria: [
      "The seafarer's working context is described realistically.",
      "The ethical demands it creates are sound (respect, fairness, honesty, welfare).",
      "The paired rights and duties of the professional are correctly explained.",
      "The answer is clear and in correct maritime English."
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
    topic: "Juicio ético integrado en un caso profesional complejo",
    week: 12,
    taskId: "mn-c0104-w12-integrated-ethical-judgment",
    taskTitle: "Judge A Hard Professional Case",
    scenario: "As the closing task of the subject, the second engineer puts a hard case to the cadet and asks for a full ethical judgment, drawing together the reasoning, the ethics-and-morality distinction and the working context of the semester.",
    instructions: [
      "Take a layered case: an engineer is pressed by a superior to sign that maintenance was done in order to hold the schedule, the crew is tired near the end of a long contract, and the crew is multinational with different assumptions about speaking up.",
      "Work it with the method of week 5 (values in conflict, who is affected, real options, consequences, decide with reasons), reasoning soundly (week 10) and not merely following custom (week 9).",
      "Weigh the working-context pressures honestly (week 11) without letting them excuse a false record, and locate the responsibility of both the one who orders and the one who signs.",
      "Report the reasoned judgment and the chosen action, integrating the subject, in clear maritime English."
    ],
    deliverable: "A note in English giving a reasoned ethical judgment on a layered professional case (schedule pressure to falsify a record, fatigue, a multinational crew), worked with the method and reasoning of the semester and honest about the working-context pressures, integrating weeks 5, 9, 10 and 11 as the subject capstone.",
    assessmentCriteria: [
      "The case is worked through the ethical method with sound reasoning, not mere custom.",
      "The conflicting values and affected parties are correctly identified and weighed.",
      "The working-context pressures are weighed honestly without excusing a false record, and responsibility is correctly located.",
      "The judgment integrates the subject and is clear and in correct maritime English."
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
    subjectCode: "QUH535",
    subjectName: "Química",
    subjectId: "mn-s5-quimica",
    unit: "Corrosión",
    topic: "Picadura, corrosión por esfuerzo, fatiga y erosión-corrosión",
    week: 9,
    taskId: "mn-quh535-w09-corrosion-types",
    taskTitle: "Identify The Types Of Corrosion On Board",
    scenario: "Corrosion attacks the ship in more ways than the galvanic cell of week 2. The engineer asks the cadet to identify the main forms of corrosion found in the machinery spaces and where each occurs.",
    instructions: [
      "Explain pitting corrosion: a localised attack that bores deep pits (for example in stainless steel where the protective film breaks down), dangerous because a small area hides deep penetration.",
      "Explain stress corrosion and corrosion fatigue: how a metal under tensile stress or repeated loading cracks far sooner in a corrosive environment than in dry air.",
      "Explain erosion-corrosion: why corrosion increases where fast or turbulent seawater strips the protective film (for example at pipe bends and pump impellers), building on the galvanic corrosion of week 2 rather than re-teaching it.",
      "Report where each type would be looked for on board, in clear engine-room English."
    ],
    deliverable: "A note in English identifying pitting, stress corrosion and corrosion fatigue, and erosion-corrosion, with where each occurs on board, building on the galvanic corrosion of week 2.",
    assessmentCriteria: [
      "Pitting corrosion is correctly explained (a localised deep attack where the film breaks down).",
      "Stress corrosion and corrosion fatigue are correct (cracking under stress or cyclic load in a corrosive environment).",
      "Erosion-corrosion is correct (fast or turbulent seawater strips the protective film).",
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
    unit: "Corrosión",
    topic: "Recubrimientos protectores y dezincado",
    week: 10,
    taskId: "mn-quh535-w10-corrosion-prevention",
    taskTitle: "Protect Metals Against Corrosion",
    scenario: "Once the forms of corrosion are known, they must be prevented. The engineer asks the cadet to explain how protective coatings and the right material choice keep corrosion under control.",
    instructions: [
      "Explain how a coating protects: a paint or a metallic coating (for example galvanising) keeps oxygen and water off the steel, and how a self-protecting oxide film forms on metals such as aluminium and stainless steel.",
      "Explain how sacrificial anodes (week 2) and coatings work together on the hull and in seawater systems, and why a coating breakdown concentrates the attack on the bare spot.",
      "Explain dezincification: how zinc is leached out of brass in seawater leaving a weak, porous metal, and how choosing the right alloy (for example inhibited brass or gunmetal) prevents it.",
      "Report a corrosion-protection recommendation for a seawater cooling line, in clear engine-room English."
    ],
    deliverable: "A note in English on corrosion protection: how coatings and oxide films exclude oxygen and water, how coatings and sacrificial anodes (week 2) work together, and how dezincification is prevented by alloy choice.",
    assessmentCriteria: [
      "The coating and oxide-film mechanism is correct (excludes oxygen and water).",
      "The coating-plus-anode combination and the danger of a coating breakdown are correct.",
      "Dezincification and its prevention by alloy choice are correct.",
      "The recommendation is clear and in correct English."
    ],
    xp: 20,
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
    topic: "Composición de los combustibles marinos y temperatura de operación del combustóleo",
    week: 11,
    taskId: "mn-quh535-w11-fuel-composition",
    taskTitle: "Explain The Chemistry Of Marine Fuels",
    scenario: "The behaviour of a fuel comes from its chemistry. Building on the flash point of week 4 and the fire chemistry of week 6, the engineer asks the cadet to explain the composition of the marine fuels and its consequences.",
    instructions: [
      "State that marine fuels are mainly carbon and hydrogen, with sulphur, water and ash as the important impurities, and that the heavier the fuel the more impurities and the higher its viscosity (week 1).",
      "Explain the consequences of each: sulphur burns to SOx and forms acids that corrode (weeks 8 and 9), ash and solids cause wear, and water must be removed by the purifier before injection.",
      "Explain the maximum operating temperature of heavy fuel oil: it is heated to reach injection viscosity (week 1) but must stay safely below its flash point (week 4) to avoid an ignition risk.",
      "Report why the fuel's chemistry sets how it is treated and burned, in clear engine-room English."
    ],
    deliverable: "A note in English on marine-fuel chemistry: the carbon and hydrogen base with sulphur, water and ash impurities, their consequences (SOx and acid corrosion, wear, water removal), and the heavy-fuel operating-temperature limit between injection viscosity and flash point, tying weeks 1, 4, 6, 8 and 9 together.",
    assessmentCriteria: [
      "The fuel composition is correct (carbon and hydrogen with sulphur, water and ash impurities, heavier meaning more impurities and viscosity).",
      "The consequences are correct (sulphur to SOx and acid corrosion, ash wear, water removed by the purifier).",
      "The heavy-fuel operating-temperature reasoning is correct (heated for injection viscosity, kept below the flash point).",
      "The answer is clear and in correct English."
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
    topic: "Análisis de aceites: contenido de agua, punto de inflamación y viscosidad",
    week: 12,
    taskId: "mn-quh535-w12-oil-analysis",
    taskTitle: "Analyse A Lubricating Oil Sample",
    scenario: "As the closing task of the subject, the engineer asks the cadet to analyse a used lubricating-oil sample, drawing the semester's chemistry together to judge whether the oil is still fit for service.",
    instructions: [
      "State what is tested and why: the water content (water ruins the oil film and promotes corrosion), the viscosity (week 1, has it thinned or thickened?), the flash point (week 4, has fuel diluted the oil and lowered it?) and the acidity (week 5, is the oil going acid?).",
      "Explain how water gets into the oil (a cooler leak or condensation) and how a rising water content is detected, linking to the purifier that removes it.",
      "Interpret a set of results: a sample with water present, a lowered flash point and a rising acidity, and decide whether the oil should be renewed and the cause investigated.",
      "Report the oil-analysis verdict and the recommended action, integrating the semester, in clear engine-room English."
    ],
    deliverable: "A note in English analysing a lube-oil sample: the tests (water content, viscosity of week 1, flash point of week 4, acidity of week 5), the interpretation of a degraded sample, and a renew-or-investigate verdict, integrating the subject as its capstone.",
    assessmentCriteria: [
      "The tests and their reasons are correct (water, viscosity, flash point, acidity) and linked to the earlier weeks.",
      "The routes for water ingress and its detection are correct.",
      "The interpretation and the renew-or-investigate decision are sound.",
      "The report integrates the semester and is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
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
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "ING530",
    subjectName: "Inglés Marítimo V",
    subjectId: "mn-s5-ingles-maritimo-v",
    unit: "Pasado perfecto",
    topic: "Uso del pasado perfecto para secuenciar un incidente",
    week: 9,
    taskId: "mn-ing530-w09-past-perfect-incident",
    taskTitle: "Report The Sequence Of An Incident",
    scenario: "When a fault is investigated, the order of events decides the cause. The engineer asks the cadet to report an engine-room incident using the past perfect to make the sequence unmistakable.",
    instructions: [
      "Explain the past perfect (had plus the past participle) as the tense for the earlier of two past actions: the alarm sounded because the pressure had already fallen.",
      "Describe a short engine-room incident with at least three events that happened in a definite order (for example a filter had clogged, so the pressure fell, so the engine tripped).",
      "Write the account using the past simple for the main events and the past perfect for what had happened before them, so the reader cannot mistake the order.",
      "Report the incident account in clear maritime English."
    ],
    deliverable: "A short incident report in English using the past simple and the past perfect to fix the order of events of an engine-room fault, so cause and effect are unmistakable.",
    assessmentCriteria: [
      "The past perfect is formed and used correctly for the earlier past action.",
      "The incident has a clear ordered sequence of at least three events.",
      "The past simple and past perfect are combined so the order is unambiguous.",
      "The report is clear and professional in English."
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
    unit: "Pasivo con modal verbs y verbo to get",
    topic: "La voz pasiva con verbos modales en avisos y procedimientos",
    week: 10,
    taskId: "mn-ing530-w10-modal-passive-notices",
    taskTitle: "Write Safety Notices With The Modal Passive",
    scenario: "Safety notices and procedure steps are written in the modal passive (the valve must be closed, the guard should be replaced). Building on the passive of week 1 and the modals of week 5, the engineer asks the cadet to write them correctly.",
    instructions: [
      "Form the modal passive (modal plus be plus the past participle) and show how it states a requirement without naming who does it: the machine must be isolated before work begins.",
      "Combine it with the regulatory modals of week 5 (must, must not, should, may) to set the strength of each instruction (the space must be ventilated, the guard must not be removed while running).",
      "Write a short safety notice for an engine-room task as three or four modal-passive steps in the right order.",
      "Report the notice in clear maritime English."
    ],
    deliverable: "A short engine-room safety notice in English written in the modal passive (modal plus be plus past participle), using the regulatory modals of week 5 to set the strength of each step, building on the passive of week 1.",
    assessmentCriteria: [
      "The modal passive is formed correctly (modal plus be plus past participle).",
      "The regulatory modals set the correct strength for each instruction (must, must not, should, may).",
      "The notice is a clear, correctly ordered set of steps.",
      "The notice reads professionally, not as a grammar exercise."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "ING530",
    subjectName: "Inglés Marítimo V",
    subjectId: "mn-s5-ingles-maritimo-v",
    unit: "Expectativas y suposiciones",
    topic: "Uso de supposed to y was going to para contrastar lo previsto y lo ocurrido",
    week: 11,
    taskId: "mn-ing530-w11-expectation-vs-reality",
    taskTitle: "Contrast Expectation And Reality In A Fault Analysis",
    scenario: "Analysing a fault means comparing what should have happened with what did. The engineer asks the cadet to use supposed to and was going to to set the plan against the reality.",
    instructions: [
      "Explain is and are supposed to for what is expected or required (the pump is supposed to keep the pressure at 4 bar) and was and were supposed to for an expectation that was not met (the alarm was supposed to sound, but it did not).",
      "Explain was and were going to for a planned action overtaken by events (we were going to change the filter at the next port, but it clogged first).",
      "Write a short fault analysis that contrasts the intended or expected behaviour with what actually happened, so the gap points to the cause.",
      "Report the analysis in clear maritime English."
    ],
    deliverable: "A short fault analysis in English using supposed to (expected or required, and expectation unmet) and was going to (a plan overtaken by events) to contrast the intended behaviour with the reality and point to the cause.",
    assessmentCriteria: [
      "Supposed to is used correctly for both the requirement and the unmet expectation.",
      "Was going to is used correctly for a plan overtaken by events.",
      "The contrast between expectation and reality genuinely points to the fault's cause.",
      "The analysis is clear and professional in English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester V",
    subjectCode: "ING530",
    subjectName: "Inglés Marítimo V",
    subjectId: "mn-s5-ingles-maritimo-v",
    unit: "Tiempos simples y continuos",
    topic: "Tiempos simples, continuos y perfectos y el gerundio en el relevo de guardia",
    week: 12,
    taskId: "mn-ing530-w12-watch-handover-report",
    taskTitle: "Write The Engine-Room Watch Handover",
    scenario: "As the closing task of the subject, the engineer must hand over the watch in writing, choosing the right tense for each fact. The engineer asks the cadet to write an engine-room watch handover that a relief can act on.",
    instructions: [
      "Use the present simple for standing states (the main engine runs at 85 rpm), the present continuous for what is happening now (number two purifier is running), and the present perfect for what has been done this watch (I have topped up the stern-tube tank).",
      "Use the past simple and past perfect (week 9) for any event during the watch, and gerunds and infinitives correctly (we stopped to change the filter, the pump keeps tripping).",
      "Include the standing orders and what the relief must watch (a modal-passive instruction from week 10), so nothing in progress is lost at the handover.",
      "Report the complete watch handover, integrating the subject, in clear maritime English."
    ],
    deliverable: "A written engine-room watch handover in English using the simple, continuous and perfect tenses for the right facts, past tenses for events, gerunds and infinitives, and a modal-passive instruction, integrating weeks 1, 9 and 10 as the subject capstone.",
    assessmentCriteria: [
      "The present simple, continuous and perfect are each used for the correct kind of fact.",
      "The past tenses and the gerund and infinitive forms are used correctly for events and actions.",
      "The handover is complete and a relief could act on it (states in progress and standing orders included).",
      "The handover integrates the subject and is clear and professional in English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
];

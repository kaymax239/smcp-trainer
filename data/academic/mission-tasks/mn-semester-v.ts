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
];

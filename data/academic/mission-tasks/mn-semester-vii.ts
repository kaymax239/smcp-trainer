import type { AcademicMissionTask } from "./types";

export const mnSemesterViiTasks: AcademicMissionTask[] = [
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "LMA745",
    subjectName: "Laboratorio de Máquinas",
    subjectId: "mn-s7-laboratorio-maquinas",
    unit: "Máquina principal",
    topic: "Puesta en servicio de la máquina principal",
    week: 1,
    taskId: "mn-lma745-w01-main-engine-startup",
    taskTitle: "Put The Main Engine Into Service",
    scenario: "In the engine simulator, the cadet must start the main engine. The engineer asks them to describe the correct sequence to put the main engine into service.",
    instructions: [
      "List the main pre-start checks before starting the main engine.",
      "Describe the basic start-up sequence.",
      "State one parameter to confirm the engine is running correctly.",
      "Report the procedure in clear engine-room English."
    ],
    deliverable: "A note in English describing the main engine start-up: pre-start checks, sequence, and one parameter confirming correct running.",
    assessmentCriteria: [
      "The pre-start checks are appropriate.",
      "The start-up sequence is correct.",
      "The running parameter is valid.",
      "The procedure is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "LMA745",
    subjectName: "Laboratorio de Máquinas",
    subjectId: "mn-s7-laboratorio-maquinas",
    unit: "Planta de Generación Eléctrica",
    topic: "Generadores principales diesel",
    week: 2,
    taskId: "mn-lma745-w02-diesel-generators",
    taskTitle: "Operate The Main Diesel Generators",
    scenario: "The ship's power comes from the main diesel generators. The engineer asks the cadet to explain how the generators supply the electrical load and what happens as load changes.",
    instructions: [
      "Explain how a diesel generator supplies the ship's electrical load.",
      "Explain what happens when the electrical demand increases.",
      "State why a second generator is paralleled when load is high.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining how the main diesel generators supply the load and why a second is paralleled at high load.",
    assessmentCriteria: [
      "The generator-load relationship is correct.",
      "The rising-demand explanation is correct.",
      "The paralleling reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "LMA745",
    subjectName: "Laboratorio de Máquinas",
    subjectId: "mn-s7-laboratorio-maquinas",
    unit: "Máquina principal",
    topic: "Control de los parámetros de la máquina principal",
    week: 3,
    taskId: "mn-lma745-w03-engine-parameters",
    taskTitle: "Monitor Main Engine Parameters",
    scenario: "During a watch, the cadet monitors the main engine. The engineer asks them to explain which parameters are watched and what an abnormal reading means.",
    instructions: [
      "Name three main engine parameters that must be monitored (e.g. temperatures, pressures, rpm).",
      "State the normal trend for one of them and what an abnormal value warns of.",
      "Explain what the cadet does if a parameter goes out of range.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining which main engine parameters are monitored, what an abnormal reading means, and the response.",
    assessmentCriteria: [
      "The parameters are valid.",
      "The abnormal-reading interpretation is correct.",
      "The response is appropriate.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "LMA745",
    subjectName: "Laboratorio de Máquinas",
    subjectId: "mn-s7-laboratorio-maquinas",
    unit: "Maquinaria Marítima Auxiliar",
    topic: "Planta destiladora",
    week: 4,
    taskId: "mn-lma745-w04-distiller-plant",
    taskTitle: "Operate The Distiller Plant",
    scenario: "The distiller plant makes fresh water for the ship. The engineer asks the cadet to explain how it operates and the checks that keep the water safe to use.",
    instructions: [
      "Explain in basic terms how the distiller plant produces fresh water.",
      "State two checks that confirm the water quality is acceptable.",
      "Explain why distilled water quality must be monitored.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining how the distiller plant produces fresh water, two quality checks, and why monitoring matters.",
    assessmentCriteria: [
      "The distillation process is correct.",
      "The quality checks are valid.",
      "The monitoring reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "EST748",
    subjectName: "Estabilidad del Buque",
    subjectId: "mn-s7-estabilidad-buque",
    unit: "Estabilidad estática transversal inicial",
    topic: "Centro de gravedad y centro de carena",
    week: 1,
    taskId: "mn-est748-w01-g-and-b",
    taskTitle: "Explain Centre Of Gravity And Centre Of Buoyancy",
    scenario: "Stability depends on the centre of gravity (G) and centre of buoyancy (B). The engineer asks the cadet to explain what each is and how they relate to a stable ship.",
    instructions: [
      "Define the centre of gravity (G) and centre of buoyancy (B).",
      "Explain how their positions relate when the ship is upright.",
      "Explain what happens to B when the ship heels.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining the centre of gravity and centre of buoyancy and how they relate to a stable ship.",
    assessmentCriteria: [
      "G and B are correctly defined.",
      "Their upright relationship is correct.",
      "The movement of B in heel is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "EST748",
    subjectName: "Estabilidad del Buque",
    subjectId: "mn-s7-estabilidad-buque",
    unit: "Estabilidad estática transversal inicial",
    topic: "Brazo y momento adrizante",
    week: 2,
    taskId: "mn-est748-w02-righting-moment",
    taskTitle: "Explain The Righting Moment",
    scenario: "When a ship heels, a righting moment brings it back upright. The engineer asks the cadet to explain the righting arm (GZ) and the righting moment.",
    instructions: [
      "Explain what the righting arm (GZ) is.",
      "Explain how the righting moment returns the ship to upright.",
      "State how GM affects the size of the righting moment at small angles.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining the righting arm (GZ), the righting moment, and how GM affects it at small angles.",
    assessmentCriteria: [
      "GZ is correctly explained.",
      "The righting moment is correct.",
      "The GM relationship is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "EST748",
    subjectName: "Estabilidad del Buque",
    subjectId: "mn-s7-estabilidad-buque",
    unit: "Estabilidad estática transversal inicial",
    topic: "Efectos de superficie libre de la estabilidad",
    week: 3,
    taskId: "mn-est748-w03-free-surface",
    taskTitle: "Explain The Free Surface Effect",
    scenario: "Liquid in a partly filled tank reduces stability through the free surface effect. The engineer asks the cadet to explain this effect and why it matters for tanks.",
    instructions: [
      "Explain what the free surface effect is.",
      "Explain how liquid moving in a slack tank reduces effective GM.",
      "State one way to reduce the free surface effect.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining the free surface effect, how it reduces effective GM, and one way to reduce it.",
    assessmentCriteria: [
      "The free surface effect is correctly explained.",
      "The GM-reduction reasoning is sound.",
      "The mitigating measure is valid.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "EST748",
    subjectName: "Estabilidad del Buque",
    subjectId: "mn-s7-estabilidad-buque",
    unit: "Estabilidad dinámica",
    topic: "Análisis de la estabilidad dinámica",
    week: 4,
    taskId: "mn-est748-w04-dynamic-stability",
    taskTitle: "Explain Dynamic Stability",
    scenario: "Dynamic stability describes the energy needed to heel a ship to a given angle. The engineer asks the cadet to explain dynamic stability and why it matters in heavy weather.",
    instructions: [
      "Explain what dynamic stability represents (energy to heel the ship).",
      "Explain how it relates to the area under the GZ curve.",
      "Explain why dynamic stability matters when a ship is hit by wind or waves.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining dynamic stability, its link to the GZ curve area, and why it matters in heavy weather.",
    assessmentCriteria: [
      "Dynamic stability is correctly explained.",
      "The GZ-curve link is correct.",
      "The heavy-weather reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "TAL750",
    subjectName: "Taller VI",
    subjectId: "mn-s7-taller-vi",
    unit: "Cojinetes",
    topic: "Métodos de instalación",
    week: 1,
    taskId: "mn-tal750-w01-bearing-installation",
    taskTitle: "Install A Bearing Correctly",
    scenario: "A worn bearing must be replaced. The instructor asks the cadet to explain how a bearing is installed correctly and why correct fitting matters.",
    instructions: [
      "Describe the basic steps to install a bearing correctly.",
      "Explain why cleanliness and correct fit are critical.",
      "State what can happen if a bearing is installed wrong.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining how a bearing is installed correctly, why fit and cleanliness matter, and the consequence of poor installation.",
    assessmentCriteria: [
      "The installation steps are correct.",
      "The cleanliness/fit reasoning is sound.",
      "The failure consequence is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "TAL750",
    subjectName: "Taller VI",
    subjectId: "mn-s7-taller-vi",
    unit: "Lubricación en rodamiento",
    topic: "Importancia de la lubricación",
    week: 2,
    taskId: "mn-tal750-w02-bearing-lubrication",
    taskTitle: "Explain Bearing Lubrication",
    scenario: "Bearings fail quickly without proper lubrication. The instructor asks the cadet to explain why lubrication matters and how the right lubricant is chosen.",
    instructions: [
      "Explain what lubrication does for a bearing (reduces friction and wear).",
      "Explain what happens to a bearing that runs without enough lubrication.",
      "State one factor in choosing the right lubricant.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining the role of bearing lubrication, the result of poor lubrication, and one factor in lubricant choice.",
    assessmentCriteria: [
      "The role of lubrication is correct.",
      "The failure mode is correct.",
      "The lubricant-choice factor is valid.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "TAL750",
    subjectName: "Taller VI",
    subjectId: "mn-s7-taller-vi",
    unit: "Fresadora",
    topic: "Medidas de seguridad en su uso",
    week: 3,
    taskId: "mn-tal750-w03-milling-safety",
    taskTitle: "Use A Milling Machine Safely",
    scenario: "A milling machine is powerful and dangerous if misused. The instructor asks the cadet to explain the safety measures for operating a milling machine.",
    instructions: [
      "State two safety measures before starting the milling machine.",
      "Explain the protective equipment needed.",
      "Identify one hazard specific to milling (e.g. flying chips, rotating cutter).",
      "Report the safety guidance in clear engine-room English."
    ],
    deliverable: "A note in English giving milling machine safety measures, protective equipment, and one specific milling hazard.",
    assessmentCriteria: [
      "The safety measures are valid.",
      "The protective equipment is appropriate.",
      "The milling hazard is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "TAL750",
    subjectName: "Taller VI",
    subjectId: "mn-s7-taller-vi",
    unit: "Fabricación de engranes",
    topic: "Engranes rectos",
    week: 4,
    taskId: "mn-tal750-w04-spur-gears",
    taskTitle: "Explain How A Spur Gear Is Made",
    scenario: "A replacement spur gear must be machined. The instructor asks the cadet to explain the basic principle of cutting a spur gear and why accuracy matters.",
    instructions: [
      "Explain in basic terms how a spur gear's teeth are cut (e.g. with a dividing head on a milling machine).",
      "Explain why the spacing and shape of the teeth must be accurate.",
      "State what happens if the teeth are cut inaccurately.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining how a spur gear's teeth are cut, why accuracy matters, and the consequence of inaccuracy.",
    assessmentCriteria: [
      "The gear-cutting principle is correct.",
      "The accuracy reasoning is sound.",
      "The consequence of inaccuracy is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "OMI749",
    subjectName: "Convenios Organización Marítima Internacional I",
    subjectId: "mn-s7-convenios-omi-i",
    unit: "Convenio Internacional sobre Normas de Formación",
    topic: "Importancia",
    week: 1,
    taskId: "mn-omi749-w01-stcw-importance",
    taskTitle: "Explain The Importance Of The STCW Convention",
    scenario: "The STCW Convention sets the training standards for all seafarers worldwide, including engineers. The engineer asks the cadet to explain what STCW is and why it matters for safety at sea.",
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
    career: "MN",
    semester: "Semester VII",
    subjectCode: "OMI749",
    subjectName: "Convenios Organización Marítima Internacional I",
    subjectId: "mn-s7-convenios-omi-i",
    unit: "Convenio Internacional para el Control y la Gestión del Agua de Lastre y los Sedimentos de los Buques",
    topic: "Libro de registro del agua de lastre",
    week: 2,
    taskId: "mn-omi749-w02-ballast-water",
    taskTitle: "Explain Ballast Water Management",
    scenario: "The Ballast Water Management Convention prevents the spread of harmful organisms between seas. The engineer asks the cadet to explain why ballast water is managed and recorded.",
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
    career: "MN",
    semester: "Semester VII",
    subjectCode: "OMI749",
    subjectName: "Convenios Organización Marítima Internacional I",
    subjectId: "mn-s7-convenios-omi-i",
    unit: "Convenio Internacional sobre el Control de los Sistemas Antiincrustantes Perjudiciales en los Buques",
    topic: "Control de los sistemas antiincrustantes",
    week: 3,
    taskId: "mn-omi749-w03-antifouling",
    taskTitle: "Explain The Anti-Fouling Systems Convention",
    scenario: "The Anti-Fouling Systems Convention bans harmful hull coatings. The engineer asks the cadet to explain why certain anti-fouling paints were banned and what the convention requires.",
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
    career: "MN",
    semester: "Semester VII",
    subjectCode: "OMI749",
    subjectName: "Convenios Organización Marítima Internacional I",
    subjectId: "mn-s7-convenios-omi-i",
    unit: "Piratería y terrorismo",
    topic: "La seguridad en el Mar",
    week: 4,
    taskId: "mn-omi749-w04-piracy-security",
    taskTitle: "Explain Anti-Piracy Security Measures",
    scenario: "Piracy threatens ships in certain regions. The engineer asks the cadet to explain the basic measures a ship takes to protect itself against piracy.",
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
    career: "MN",
    semester: "Semester VII",
    subjectCode: "ING744",
    subjectName: "Inglés Marítimo VII",
    subjectId: "mn-s7-ingles-maritimo-vii",
    unit: "Inglés Marítimo SMCP",
    topic: "Reported speech, reported questions and answers",
    week: 1,
    taskId: "mn-ing744-w01-reported-speech",
    taskTitle: "Relay An Engine Message Using Reported Speech",
    scenario: "An engineer often relays what the bridge or another station said. The chief asks the cadet to report a received message accurately using reported speech.",
    instructions: [
      "Take a direct message (e.g. an order from the bridge).",
      "Report it to the chief engineer using reported speech correctly.",
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
    career: "MN",
    semester: "Semester VII",
    subjectCode: "ING744",
    subjectName: "Inglés Marítimo VII",
    subjectId: "mn-s7-ingles-maritimo-vii",
    unit: "Sistema de verbos",
    topic: "Voz pasiva",
    week: 2,
    taskId: "mn-ing744-w02-passive-incident-report",
    taskTitle: "Write An Engine Incident Report Using The Passive",
    scenario: "Incident reports often use the passive voice to focus on what happened. The chief asks the cadet to write a short engine-room incident report using the passive voice appropriately.",
    instructions: [
      "Choose an engine-room incident to report.",
      "Write the report using the passive voice where it focuses on the event.",
      "Make sure the facts are clear and in a logical order.",
      "Keep the report clear and professional in English."
    ],
    deliverable: "A short engine-room incident report in English using the passive voice appropriately to focus on the events.",
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
    career: "MN",
    semester: "Semester VII",
    subjectCode: "ING744",
    subjectName: "Inglés Marítimo VII",
    subjectId: "mn-s7-ingles-maritimo-vii",
    unit: "El ámbito laboral",
    topic: "Vocabulario: work collocations",
    week: 3,
    taskId: "mn-ing744-w03-handover-report",
    taskTitle: "Write A Professional Engine Watch Handover",
    scenario: "A clear written handover passes the engine watch safely to the next engineer. The chief asks the cadet to write a professional handover report using correct work vocabulary.",
    instructions: [
      "Write an engine watch handover covering machinery status, alarms, and any pending matters.",
      "Use correct professional and work-related vocabulary.",
      "Make sure the next engineer could take over safely from your report.",
      "Keep the report clear and professional in English."
    ],
    deliverable: "An engine watch handover report in English using correct professional vocabulary, complete enough for a safe takeover.",
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
    career: "MN",
    semester: "Semester VII",
    subjectCode: "ING744",
    subjectName: "Inglés Marítimo VII",
    subjectId: "mn-s7-ingles-maritimo-vii",
    unit: "Acontecimientos anormales",
    topic: "Modal verbs",
    week: 4,
    taskId: "mn-ing744-w04-modals-safety",
    taskTitle: "Give Engine-Room Safety Instructions Using Modal Verbs",
    scenario: "Safety instructions rely on modal verbs (must, must not, should) to show obligation and prohibition. The chief asks the cadet to write engine-room safety instructions using modal verbs correctly.",
    instructions: [
      "Choose an engine-room safety situation needing instructions.",
      "Write the instructions using modal verbs (must, must not, should) correctly.",
      "Make the level of obligation clear (required vs advised).",
      "Keep the instructions clear and professional in English."
    ],
    deliverable: "A set of engine-room safety instructions in English using modal verbs correctly to show obligation and prohibition.",
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
    career: "MN",
    semester: "Semester VII",
    subjectCode: "PMR751",
    subjectName: "Prácticas Marineras VII",
    subjectId: "mn-s7-practicas-marineras-vii",
    unit: "Auxilio de personas en peligro en el agua",
    topic: "Acercamiento a la víctima",
    week: 1,
    taskId: "mn-pmr751-w01-rescue-approach",
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
    career: "MN",
    semester: "Semester VII",
    subjectCode: "PMR751",
    subjectName: "Prácticas Marineras VII",
    subjectId: "mn-s7-practicas-marineras-vii",
    unit: "Banderas y señales",
    topic: "Formas y colores del código internacional de banderas",
    week: 2,
    taskId: "mn-pmr751-w02-flag-recognition",
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
    career: "MN",
    semester: "Semester VII",
    subjectCode: "PMR751",
    subjectName: "Prácticas Marineras VII",
    subjectId: "mn-s7-practicas-marineras-vii",
    unit: "Interpretación y elaboración de reportes de existencias y pertrechos",
    topic: "Partes de respeto",
    week: 3,
    taskId: "mn-pmr751-w03-spares-report",
    taskTitle: "Report Stores And Spares",
    scenario: "The officer must keep accurate records of stores and spare parts. The cadet is asked to explain how a stores and spares report is prepared and why accuracy matters.",
    instructions: [
      "State what a stores and spares report should contain.",
      "Explain how the report is kept up to date as items are used.",
      "Explain why accurate spares records matter for operations.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining how a stores and spares report is prepared, kept current, and why accuracy matters.",
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
    career: "MN",
    semester: "Semester VII",
    subjectCode: "PMR751",
    subjectName: "Prácticas Marineras VII",
    subjectId: "mn-s7-practicas-marineras-vii",
    unit: "Faenas con anclas",
    topic: "Chicoteo del ancla",
    week: 4,
    taskId: "mn-pmr751-w04-anchor-work",
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
    career: "MN",
    semester: "Semester VII",
    subjectCode: "C0011",
    subjectName: "Educación Física VII",
    subjectId: "mn-s7-educacion-fisica-vii",
    unit: "Condición física",
    topic: "Resistencia cardiorespiratoria",
    week: 1,
    taskId: "mn-c0011vii-w01-endurance-command",
    taskTitle: "Sustain Fitness For Senior Engine Duties",
    scenario: "Senior engineers must stay fit to handle long, demanding situations in the engine room. The training officer asks the cadet to explain why cardiorespiratory endurance matters at the senior level.",
    instructions: [
      "Define cardiorespiratory endurance in your own words.",
      "Explain why a senior engineer needs sustained endurance during a long emergency.",
      "Describe one way endurance is maintained at sea.",
      "Report your answer in clear English using correct fitness terminology."
    ],
    deliverable: "A note in English defining cardiorespiratory endurance, why a senior engineer needs it during a long emergency, and how it is maintained.",
    assessmentCriteria: [
      "Endurance is correctly defined.",
      "The senior-level reasoning is sound.",
      "The maintenance method is valid.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "C0011",
    subjectName: "Educación Física VII",
    subjectId: "mn-s7-educacion-fisica-vii",
    unit: "Condición física",
    topic: "Fuerza muscular",
    week: 2,
    taskId: "mn-c0011vii-w02-strength-emergency",
    taskTitle: "Apply Muscular Strength In An Engine Emergency",
    scenario: "In an emergency, an engineer may need physical strength to operate heavy equipment or help others. The officer asks the cadet to link muscular strength to engine emergency tasks.",
    instructions: [
      "Name two emergency tasks that demand muscular strength (e.g. operating a heavy valve, carrying a casualty).",
      "Explain why maintained strength is part of operational readiness.",
      "State one way to train strength safely.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English linking muscular strength to two engine emergency tasks, why it is part of readiness, and how to train it safely.",
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
    career: "MN",
    semester: "Semester VII",
    subjectCode: "C0011",
    subjectName: "Educación Física VII",
    subjectId: "mn-s7-educacion-fisica-vii",
    unit: "Natación",
    topic: "Sobrevivencia",
    week: 3,
    taskId: "mn-c0011vii-w03-survival-leadership",
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
    career: "MN",
    semester: "Semester VII",
    subjectCode: "C0011",
    subjectName: "Educación Física VII",
    subjectId: "mn-s7-educacion-fisica-vii",
    unit: "Concentración",
    topic: "Juegos de concentración",
    week: 4,
    taskId: "mn-c0011vii-w04-focus-command",
    taskTitle: "Maintain Focus In A Prolonged Engine Crisis",
    scenario: "Managing a prolonged engine-room crisis tests sustained mental focus. The officer asks the cadet to explain how to maintain concentration when working a problem over many hours.",
    instructions: [
      "Explain why concentration is hard to sustain during a prolonged crisis.",
      "Describe two techniques an engineer uses to stay focused and make good decisions.",
      "State the risk of a focus lapse during an engine crisis.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining how an engineer maintains focus in a prolonged crisis, with two techniques and the risk of a lapse.",
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
    semester: "Semester VII",
    subjectCode: "C0129",
    subjectName: "Familiarización con buques tanque",
    subjectId: "mn-s7-familiarizacion-buques-tanque",
    unit: "Toxicidad y otros peligros",
    topic: "peligro de incendio",
    week: 1,
    taskId: "mn-c0129-w01-tanker-fire-hazard",
    taskTitle: "Explain Fire Hazards On A Tanker",
    scenario: "Tankers carry flammable cargoes, making fire a constant threat. The engineer asks the cadet to explain the fire hazards specific to a tanker and the basic precautions.",
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
    career: "MN",
    semester: "Semester VII",
    subjectCode: "C0129",
    subjectName: "Familiarización con buques tanque",
    subjectId: "mn-s7-familiarizacion-buques-tanque",
    unit: "Equipos de seguridad y protección personal",
    topic: "Aparatos de respiración, tanque de evacuación, equipo de rescate y escape",
    week: 2,
    taskId: "mn-c0129-w02-breathing-apparatus",
    taskTitle: "Use Breathing Apparatus On A Tanker",
    scenario: "Entering enclosed or toxic spaces on a tanker requires breathing apparatus. The engineer asks the cadet to explain when and how breathing apparatus is used.",
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
    career: "MN",
    semester: "Semester VII",
    subjectCode: "C0129",
    subjectName: "Familiarización con buques tanque",
    subjectId: "mn-s7-familiarizacion-buques-tanque",
    unit: "Prevención de la contaminación",
    topic: "SOPEP",
    week: 3,
    taskId: "mn-c0129-w03-sopep",
    taskTitle: "Explain The SOPEP",
    scenario: "Every tanker carries a Shipboard Oil Pollution Emergency Plan (SOPEP). The engineer asks the cadet to explain what the SOPEP is and how it is used in a spill.",
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
    career: "MN",
    semester: "Semester VII",
    subjectCode: "C0129",
    subjectName: "Familiarización con buques tanque",
    subjectId: "mn-s7-familiarizacion-buques-tanque",
    unit: "Operaciones de la carga",
    topic: "conocimientos generales de los procedimientos operativos de seguridad de la carga de los buques tanques petroleros",
    week: 4,
    taskId: "mn-c0129-w04-cargo-operations",
    taskTitle: "Explain Safe Tanker Cargo Operations",
    scenario: "Loading and discharging a tanker safely follows strict procedures, many involving engine-room systems (pumps, inert gas). The engineer asks the cadet to explain the key safety principles.",
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
    career: "MN",
    semester: "Semester VII",
    subjectCode: "C0131",
    subjectName: "Familiarización con buque de pasaje de Transbordo Rodado",
    subjectId: "mn-s7-familiarizacion-buque-pasaje-roro",
    unit: "Familiarización en Buque de Transbordo Rodado",
    topic: "Aptitud para aplicar debidamente los procedimientos de a bordo relativos al mantenimiento del equipo propio de los buques RoRo (puertas y rampas de proa y popa, puertas laterales, imbornales y sistemas conexos)",
    week: 1,
    taskId: "mn-c0131-w01-roro-doors",
    taskTitle: "Maintain Ro-Ro Bow And Stern Doors",
    scenario: "Bow and stern doors are critical to a Ro-Ro ship's watertight integrity, and their hydraulics are an engine-room responsibility. The engineer asks the cadet to explain why these doors matter and how they are maintained.",
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
    career: "MN",
    semester: "Semester VII",
    subjectCode: "C0131",
    subjectName: "Familiarización con buque de pasaje de Transbordo Rodado",
    subjectId: "mn-s7-familiarizacion-buque-pasaje-roro",
    unit: "Formación sobre seguridad de los pasajeros, la carga e integridad del casco",
    topic: "Aptitud para cálculo de estabilidad, asiento y esfuerzos",
    week: 2,
    taskId: "mn-c0131-w02-roro-stability",
    taskTitle: "Explain Ro-Ro Stability Considerations",
    scenario: "Ro-Ro ships have special stability concerns because of their open vehicle decks. The engineer asks the cadet to explain the stability risk and why it is taken seriously.",
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
    career: "MN",
    semester: "Semester VII",
    subjectCode: "C0131",
    subjectName: "Familiarización con buque de pasaje de Transbordo Rodado",
    subjectId: "mn-s7-familiarizacion-buque-pasaje-roro",
    unit: "Formación sobre gestión de emergencias y comportamiento humano",
    topic: "Aptitud para comunicarse con los pasajeros en una emergencia",
    week: 3,
    taskId: "mn-c0131-w03-passenger-emergency-comm",
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
    career: "MN",
    semester: "Semester VII",
    subjectCode: "C0131",
    subjectName: "Familiarización con buque de pasaje de Transbordo Rodado",
    subjectId: "mn-s7-familiarizacion-buque-pasaje-roro",
    unit: "Formación sobre seguridad de los pasajeros, la carga e integridad del casco",
    topic: "Aptitud para controlar la atmósfera en las cubiertas para vehículos",
    week: 4,
    taskId: "mn-c0131-w04-vehicle-deck-atmosphere",
    taskTitle: "Control The Atmosphere On A Vehicle Deck",
    scenario: "Vehicle decks accumulate dangerous exhaust fumes, and their ventilation is an engine-room system. The engineer asks the cadet to explain why the atmosphere must be controlled and how.",
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
  }
];

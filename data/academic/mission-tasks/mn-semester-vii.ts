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
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "LMA745",
    subjectName: "Laboratorio de Máquinas",
    subjectId: "mn-s7-laboratorio-maquinas",
    unit: "Sistema de combustible",
    topic: "Cambio de combustible HFO a MGO al entrar en zona ECA",
    week: 5,
    taskId: "mn-lma745-w05-fuel-changeover",
    taskTitle: "Change Over Fuel From HFO To MGO",
    scenario: "Entering an emission control area, the engine must change from heavy fuel oil to marine gas oil. The engineer asks the cadet to explain the operational fuel changeover procedure and its risks.",
    instructions: [
      "Explain why and when the changeover is done: on entering an emission control area (ECA) the ship must burn a low-sulphur fuel such as MGO, so the change is planned and completed before the boundary.",
      "Explain the gradual ramp: change the temperature and the viscosity slowly, because MGO is lighter and less viscous than heavy fuel, so do not change temperature abruptly; the fuel and injection system was covered in Motores I (Semester V) and is used here as established — this is the operation of the changeover, not the system.",
      "State the risks of a sudden change: thermal shock and cracking of components, gasification (vapour lock) of the light fuel if it is too hot, and seizure of the injection pumps and injectors that rely on the heavier fuel for lubrication.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on the HFO to MGO changeover: why and when (before the ECA boundary), the gradual ramp of temperature and viscosity (not abrupt, with the Motores I fuel system as established), and the risks of a sudden change (thermal shock and cracking, gasification or vapour lock, injection pump seizure).",
    assessmentCriteria: [
      "The reason and timing are correct (low-sulphur fuel in an ECA, completed before the boundary).",
      "The gradual temperature and viscosity ramp is correct and the Motores I fuel-system boundary is respected (operation, not the system).",
      "The risks of a sudden change are correct (thermal shock and cracking, gasification or vapour lock, injection pump seizure).",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "LMA745",
    subjectName: "Laboratorio de Máquinas",
    subjectId: "mn-s7-laboratorio-maquinas",
    unit: "Planta de Generación Eléctrica",
    topic: "La secuencia de recuperación de un apagón (blackout)",
    week: 6,
    taskId: "mn-lma745-w06-blackout-recovery",
    taskTitle: "Recover The Plant From A Blackout",
    scenario: "The ship suffers a blackout and all power is lost. In the machinery laboratory the engineer asks the cadet to run the blackout recovery sequence.",
    instructions: [
      "State the first step: the emergency generator starts automatically on the loss of main power and supplies the emergency switchboard (the essential services), so there is light and control to work with.",
      "Restore the main generation: start a main diesel generator, put it on the main switchboard and restore power to the main bus. Boundary: the emergency generator and the preferential trip were taught as concepts of distribution in Electrotecnia (Semester V); here it is the operational recovery drill.",
      "Restart the auxiliaries in order of priority: the pumps and services needed to start and run the main engine (cooling, lube oil, fuel) first, then the rest, until propulsion is restored, because a wrong order leaves the main engine unable to start.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on blackout recovery: the emergency generator on the emergency switchboard first, restoring the main generation to the main bus (the Electrotecnia emergency-generator and preferential-trip concepts as established), and restarting the auxiliaries in priority order until propulsion is restored.",
    assessmentCriteria: [
      "The emergency generator's automatic start on the emergency switchboard is correct as the first step.",
      "Restoring the main generation to the main bus is correct and the Electrotecnia distribution boundary is respected (drill, not concept).",
      "The auxiliaries are restarted in priority order (main-engine services first) until propulsion is restored.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "LMA745",
    subjectName: "Laboratorio de Máquinas",
    subjectId: "mn-s7-laboratorio-maquinas",
    unit: "Prevención de la contaminación",
    topic: "Operación del separador de 15 ppm y el Oil Record Book",
    week: 7,
    taskId: "mn-lma745-w07-bilge-oily-water-orb",
    taskTitle: "Pump Bilges And Keep The Oil Record Book",
    scenario: "The engine-room bilges must be pumped out without polluting the sea. The engineer asks the cadet to explain the bilge operation through the 15 ppm separator and the Oil Record Book.",
    instructions: [
      "Explain the operation: pump the oily bilge water through the oily water separator, which brings the oil content down to below 15 ppm before any discharge overboard, and the clean water is monitored; the separator's working was covered in Maquinaria Marítima Auxiliar (Semester V) and is used here — this is the bilge operation and its record.",
      "Explain the 15 ppm alarm and the three-way valve: the oil content monitor alarms if the discharge exceeds 15 ppm and the valve returns the flow to the bilge or holding tank instead of overboard, so a discharge above the limit cannot go to sea.",
      "State the record: every bilge operation, transfer and discharge is entered in the Oil Record Book, which is a legal MARPOL document, so what is done is written down and signed.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on pumping bilges: through the 15 ppm oily water separator (the Maquinaria Marítima Auxiliar separator as established), the 15 ppm alarm and three-way valve that stops an over-limit discharge, and the entry of every operation in the Oil Record Book as a legal MARPOL document.",
    assessmentCriteria: [
      "The bilge operation is correct (through the separator to below 15 ppm before discharge) with the Maquinaria Marítima Auxiliar boundary respected.",
      "The 15 ppm alarm and three-way valve are correct (an over-limit discharge returned to the bilge or holding tank, not overboard).",
      "The Oil Record Book is correctly described (every operation entered and signed, a legal MARPOL document).",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "LMA745",
    subjectName: "Laboratorio de Máquinas",
    subjectId: "mn-s7-laboratorio-maquinas",
    unit: "Máquina principal",
    topic: "Preparación para maniobra (standby) y el relevo de la guardia de máquinas",
    week: 8,
    taskId: "mn-lma745-w08-standby-and-handover",
    taskTitle: "Prepare For Manoeuvre And Hand Over The Watch",
    scenario: "As the closing task, the plant must be made ready for manoeuvring and the watch handed over. The engineer asks the cadet to explain the standby preparation and the watch handover.",
    instructions: [
      "Explain preparing the running plant for stand-by (manoeuvring): the pre-manoeuvre checks and tests — testing the telegraph and its communication with the bridge, testing the engine start on air, and testing the steering gear — so the engine can answer bridge orders immediately. Boundary: putting the main engine into service from cold was week 1; here it is bringing a plant that is already running to a manoeuvring stand-by.",
      "Explain the readiness: the auxiliaries running, the fuel and cooling ready for rapid changes of load, and the engineers at their stations, so nothing has to be started during the manoeuvre.",
      "Explain the watch handover: passing on the information that cannot be missing — the state of the machinery and any defects, the orders and standing orders in force, the alarms overridden or pending, and the work in progress — so the relieving engineer takes over with the full picture.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on standby and handover: the pre-manoeuvre checks (telegraph, air start, steering gear) so the engine answers the bridge immediately (distinct from the week 1 start from cold), the plant's readiness for rapid load changes, and the watch handover of the essential information (machinery state and defects, orders, alarms, work in progress).",
    assessmentCriteria: [
      "The stand-by preparation is correct (telegraph, air start, steering gear tests) with the week 1 start-from-cold boundary respected.",
      "The readiness for manoeuvring is correct (auxiliaries running, ready for rapid load changes, engineers at their stations).",
      "The watch handover covers the essential information (machinery state and defects, orders, alarms, work in progress).",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "EST748",
    subjectName: "Estabilidad del Buque",
    subjectId: "mn-s7-estabilidad-buque",
    unit: "Datos hidrostáticos",
    topic: "Curvas hidrostáticas, desplazamiento por calado y TPC",
    week: 5,
    taskId: "mn-est748-w05-hydrostatics-tpc",
    taskTitle: "Read Hydrostatics And Use TPC",
    scenario: "The ship's hydrostatic curves turn a draught reading into displacement and other data. The engineer asks the cadet to explain reading the hydrostatics and using TPC.",
    instructions: [
      "Explain reading the hydrostatic curves or tables: from the mean draught you read the displacement, and the other hydrostatic data (the TPC, the centre of flotation, and so on) at that draught.",
      "Explain TPC (tonnes per centimetre immersion): the mass that must be loaded or discharged to change the mean draught by one centimetre, found from the waterplane area and the water density, TPC = waterplane area x density / 100.",
      "Work an example: a ship with a waterplane area of about 2000 square metres has a TPC of roughly 20.5 tonnes per centimetre in sea water (2000 x 1.025 / 100 = 20.5), so loading 205 tonnes sinks her about 10 centimetres; use the TPC to estimate the change of draught from a weight loaded.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on hydrostatics and TPC: reading displacement and data from the mean draught on the hydrostatic curves or tables, TPC as the mass to change the mean draught one centimetre (waterplane area x density / 100), and an example (a waterplane of about 2000 square metres gives TPC of about 20.5 t/cm in sea water, so 205 t sinks her about 10 cm).",
    assessmentCriteria: [
      "Reading the hydrostatics is correct (displacement and data from the mean draught).",
      "TPC is correctly defined and calculated (mass to change the mean draught one cm; waterplane area x density / 100).",
      "The worked example is correct (about 2000 square metres gives TPC about 20.5 t/cm in sea water; 205 t gives about 10 cm).",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "EST748",
    subjectName: "Estabilidad del Buque",
    subjectId: "mn-s7-estabilidad-buque",
    unit: "Determinación del KG",
    topic: "La experiencia de estabilidad (inclining experiment)",
    week: 6,
    taskId: "mn-est748-w06-inclining-experiment",
    taskTitle: "Explain The Inclining Experiment",
    scenario: "The real KG of a ship is found by experiment, not just by calculation. The engineer asks the cadet to explain the inclining experiment and why it is done.",
    instructions: [
      "Explain why it is done: the calculated KG can differ from the real one because of the exact weights and their positions as built and fitted out, so the inclining experiment measures the ship's actual KG (and GM) in the lightship condition.",
      "Explain the method: known weights are shifted transversely across the deck by a measured distance, and the resulting small angle of heel is measured with a pendulum (a plumb line) or an inclinometer, so the GM is found from the heeling moment and the angle.",
      "Explain the conditions for accuracy: still water and no wind, the ship free (moorings slack), minimum free surface (tanks pressed up or empty), and the exact lightship weights known, so the result is not spoiled by other effects.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on the inclining experiment: why it is done (measure the real KG and GM, which can differ from the calculated ones), the method (shift known weights transversely, measure the small heel with a pendulum or inclinometer, find GM from the moment and angle), and the conditions for accuracy (still water, ship free, minimum free surface, known lightship weights).",
    assessmentCriteria: [
      "The reason is correct (the real KG and GM can differ from the calculated ones; measured in the lightship condition).",
      "The method is correct (known weights shifted transversely, heel measured with a pendulum or inclinometer, GM from the moment and angle).",
      "The conditions for accuracy are correct (still water, ship free, minimum free surface, known lightship weights).",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "EST748",
    subjectName: "Estabilidad del Buque",
    subjectId: "mn-s7-estabilidad-buque",
    unit: "Corrección de escora",
    topic: "Diagnóstico de una escora y su corrección por trasiego de lastre",
    week: 7,
    taskId: "mn-est748-w07-list-correction-ballast",
    taskTitle: "Correct A List By Ballast Transfer",
    scenario: "The ship has taken on a steady list and the engineer must correct it from the engine room. The engineer asks the cadet to identify the cause of the list and correct it by transferring ballast between tanks.",
    instructions: [
      "Distinguish a list from a heel: a list is a steady angle from an off-centre weight or an asymmetry, while a heel is a temporary angle from wind or a turn, so identify which it is before acting.",
      "Find the cause of the list: an off-centre weight, unequal ballast or fuel in the port and starboard tanks, or a free surface pulling the ship to one side; check the tank soundings to locate the imbalance. Boundary: the theory of how a transverse weight shift causes heel was covered in Teoría del buque II; here it is the operation of finding and correcting a real list.",
      "Correct it by ballast transfer: move ballast from the low side to the high side (or fill and empty the appropriate tanks) to bring the ship upright, in small steps while watching the angle, and avoid creating a large free surface while doing it.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on correcting a list: distinguishing a list (steady, off-centre weight or asymmetry) from a heel (temporary, wind or turn), finding the cause from the tank soundings, and correcting it by transferring ballast from the low side to the high side in small steps (watching the angle, avoiding a large free surface), distinct from the Teoría del buque II theory of transverse weight shift.",
    assessmentCriteria: [
      "A list is correctly distinguished from a heel (steady off-centre cause versus temporary).",
      "The cause is found operationally (off-centre weight, unequal ballast or free surface, located by tank soundings) with the Teoría del buque II boundary respected.",
      "The correction by ballast transfer is correct (low side to high side in small steps, watching the angle, avoiding a large free surface).",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "EST748",
    subjectName: "Estabilidad del Buque",
    subjectId: "mn-s7-estabilidad-buque",
    unit: "Criterios de estabilidad",
    topic: "Los criterios de estabilidad del Código IS y el cuadernillo de estabilidad",
    week: 8,
    taskId: "mn-est748-w08-imo-stability-criteria",
    taskTitle: "Check Stability Against The IMO Criteria",
    scenario: "As the closing task, the ship's loading condition must meet the international stability criteria. The engineer asks the cadet to explain the IMO stability criteria and how the approved stability booklet is used.",
    instructions: [
      "Explain what the criteria check: the IMO Intact Stability (IS) Code sets minimum requirements that a loading condition must meet, expressed on the GZ curve (the righting-arm curve is a reference established in Teoría del buque II and in week 4, not re-derived here).",
      "Name the kinds of criteria as concepts: a minimum area under the GZ curve up to a given angle (and between two angles), a minimum righting arm GZ at a stated angle, and a minimum initial GM; treat any figures as illustrative or typical (for example a minimum GM of the order of 0.15 m and a GZ of the order of 0.20 m at 30 degrees), since the exact values are in the Code and in the ship's approved booklet.",
      "Explain the use of the stability booklet: for each loading condition (departure, arrival, and the various cargo and ballast states) the approved booklet gives the stability data and shows whether the criteria are met, so the officer loads to a condition that complies before sailing.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on the IMO stability criteria: what they check on the GZ curve (the curve as established in Teoría del buque II and week 4), the kinds of criteria as concepts (minimum area under the curve, minimum GZ at an angle, minimum GM — figures illustrative or typical, exact values in the Code and booklet), and using the approved stability booklet to confirm each loading condition complies before sailing.",
    assessmentCriteria: [
      "The criteria are correctly placed on the GZ curve, with the curve referenced (Teoría del buque II, week 4) not re-derived.",
      "The kinds of criteria are correct as concepts (area under the curve, GZ at an angle, minimum GM) and any figures are marked illustrative or typical, not asserted as exact normative values.",
      "The use of the approved stability booklet for each loading condition is correct (load to a complying condition before sailing).",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "TAL750",
    subjectName: "Taller VI",
    subjectId: "mn-s7-taller-vi",
    unit: "Alineación",
    topic: "Alineación de ejes con reloj comparador (dial indicator)",
    week: 5,
    taskId: "mn-tal750-w05-shaft-alignment",
    taskTitle: "Align Shafts With A Dial Indicator",
    scenario: "Two shafts joined by a coupling must be aligned, or the coupling and bearings fail. The engineer asks the cadet to explain shaft alignment with a dial indicator.",
    instructions: [
      "Explain the two kinds of misalignment: parallel (offset) misalignment, where the two shaft axes are parallel but not in the same line, and angular misalignment, where the axes meet at an angle; both must be corrected.",
      "Explain the measurement with a dial indicator: mount the dial indicator to read the rim and the face of the coupling, rotate the shafts together, and read the run-out, which shows the offset (rim) and the angular error (face).",
      "Explain why alignment matters: a misaligned coupling forces the shafts every revolution, so it overheats and destroys the coupling, the bearings and the seals and causes vibration; correct the alignment by shimming and moving the machine until the readings are within tolerance. Boundary: installing the bearing itself was week 1; here it is aligning the shafts that run in them.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on shaft alignment: parallel (offset) versus angular misalignment, measuring the rim and face run-out with a dial indicator as the shafts are rotated, and why alignment matters (a misaligned coupling destroys the coupling, bearings and seals and causes vibration), corrected by shimming, distinct from the week 1 bearing installation.",
    assessmentCriteria: [
      "Parallel (offset) and angular misalignment are correctly distinguished.",
      "The dial-indicator measurement is correct (rim and face read as the shafts are rotated, showing offset and angular error).",
      "The importance is correct (misalignment destroys coupling, bearings and seals and causes vibration; corrected by shimming) with the week 1 bearing-installation boundary respected.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "TAL750",
    subjectName: "Taller VI",
    subjectId: "mn-s7-taller-vi",
    unit: "Engranes",
    topic: "Inspección en servicio de engranes: patrón de contacto, backlash y desgaste",
    week: 6,
    taskId: "mn-tal750-w06-gear-inspection",
    taskTitle: "Inspect Gears For Wear In Service",
    scenario: "A gear in service wears, and the inspection catches it before it fails. Building on the manufacture of spur gears in week 4, the engineer asks the cadet to explain inspecting gears in service.",
    instructions: [
      "Explain the contact pattern: marking the teeth (for example with engineer's blue) and running them to see where they touch, because the contact should be spread across the tooth face, so a pattern to one end or edge shows misalignment or a wrong mesh.",
      "Explain backlash: the small play between the meshing teeth measured with a feeler gauge or a dial indicator; too little binds and overheats, while too much (from wear) is noisy and shock-loads the teeth, so it is kept within tolerance.",
      "Explain the typical wear and damage to look for: normal wear of the tooth flank, pitting (small surface fatigue craters), and a broken or chipped tooth, deciding whether to continue, adjust or renew. Boundary: making the spur gear was week 4; here it is inspecting the gear in service.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on inspecting gears in service: the contact pattern (marked and spread across the face, not to one edge), backlash (the play measured, kept within tolerance — too little binds, too much shock-loads), and the typical wear and damage (flank wear, pitting, broken tooth), distinct from the week 4 manufacture of the spur gear.",
    assessmentCriteria: [
      "The contact pattern is correctly explained (marked, should be spread across the face; a pattern to one edge shows a problem).",
      "Backlash is correct (the play measured, kept within tolerance; too little binds, too much shock-loads).",
      "The typical wear and damage is correct (flank wear, pitting, broken tooth) with the week 4 manufacture boundary respected.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "TAL750",
    subjectName: "Taller VI",
    subjectId: "mn-s7-taller-vi",
    unit: "Rectificado de válvulas",
    topic: "El esmerilado (lapping) de válvulas y asientos",
    week: 7,
    taskId: "mn-tal750-w07-valve-lapping",
    taskTitle: "Lap A Valve And Its Seat",
    scenario: "A leaking valve is overhauled by lapping it to its seat. The engineer asks the cadet to explain the lapping (grinding) of a valve and its seat.",
    instructions: [
      "Explain the purpose: a valve that does not seal lets gas or liquid pass, so the valve and its seat are lapped to a matching, gas-tight contact.",
      "Explain the lapping: apply grinding paste (a fine abrasive) between the valve face and the seat and work the valve against the seat (by hand or with a lapping tool) until a continuous, even matt band appears all the way round, then clean off every trace of paste.",
      "Explain checking the seal: check the seat width and the contact band, test the tightness (for example a marking-blue check or a fluid test), and know when a valve is too worn or pitted to lap and must be re-faced or renewed. This is a valve overhaul, distinct from the pump maintenance and the mechanical seal of Taller IV (Semester V).",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on lapping a valve: the purpose (a gas-tight valve-to-seat contact), the lapping with grinding paste worked to a continuous even band (then all paste cleaned off), and checking the seal (seat width and contact band, tightness test) and when a valve is too worn to lap, distinct from the Taller IV pump maintenance and mechanical seal.",
    assessmentCriteria: [
      "The purpose is correct (restore a gas-tight valve-to-seat contact).",
      "The lapping is correct (grinding paste worked to a continuous even band, then all paste removed).",
      "The seal check is correct (seat width and contact band, tightness test, when to re-face or renew) and distinct from the Taller IV pump maintenance.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "TAL750",
    subjectName: "Taller VI",
    subjectId: "mn-s7-taller-vi",
    unit: "Intercambiadores de calor",
    topic: "Limpieza, prueba de fugas y taponado de intercambiadores",
    week: 8,
    taskId: "mn-tal750-w08-heat-exchanger-maintenance",
    taskTitle: "Maintain A Heat Exchanger",
    scenario: "As the closing task, a fouled heat exchanger must be cleaned and tested in the workshop. The engineer asks the cadet to explain the maintenance of a heat exchanger.",
    instructions: [
      "Explain cleaning the tubes: mechanical cleaning (brushing or water-jetting the tubes) and chemical cleaning (circulating a cleaning solution) to remove the scale and fouling that block the flow and reduce the heat transfer; the refrigeration cycle and the HT/LT engine cooling that these exchangers serve were covered in Maquinaria Marítima Auxiliar and Motores I (Semester V) and are the established background — here it is the workshop work on the equipment.",
      "Explain the leak test: pressure-test the exchanger to find a leaking tube, because a pitted or cracked tube lets the two fluids mix (for example sea water into the fresh-water or the oil side), and the leaking tube is identified.",
      "Explain plugging and re-tubing as the repair: a single leaking tube can be plugged at both ends to take it out of service as a temporary measure, while heavy tube loss needs re-tubing (renewing the tube bundle); note that plugging reduces the heat-transfer area a little.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on maintaining a heat exchanger: cleaning the tubes (mechanical and chemical) to remove scale and fouling (the Maquinaria Marítima Auxiliar refrigeration and Motores I HT/LT cooling as established background), the leak test to find a pitted tube that mixes the fluids, and plugging a single tube versus re-tubing for heavy loss (plugging reduces the heat-transfer area).",
    assessmentCriteria: [
      "The tube cleaning is correct (mechanical and chemical to remove scale and fouling) with the Semester V refrigeration and cooling background referenced, not re-taught.",
      "The leak test is correct (pressure test to find a pitted or cracked tube that mixes the two fluids).",
      "Plugging versus re-tubing is correct (plug a single tube temporarily, reducing the heat-transfer area; re-tube for heavy loss).",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
];

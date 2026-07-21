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
    subjectCode: "LMA745",
    subjectName: "Laboratorio de Máquinas",
    subjectId: "mn-s7-laboratorio-maquinas",
    unit: "Maquinaria Maritima Auxiliar",
    topic: "Sistema de planta de vapor",
    week: 9,
    taskId: "mn-lma745-w09-steam-plant",
    taskTitle: "Operate The Auxiliary Steam Plant",
    scenario: "In the machinery simulator the auxiliary boiler must raise steam for the fuel and lube oil heating and the domestic services. The engineer asks the cadet to bring the steam plant into service and hold it.",
    instructions: [
      "Explain what the auxiliary boiler and steam plant supply: steam for heating the heavy fuel and the lubricating oil, for tank and accommodation heating, and for the services that need it, so the plant is kept ready.",
      "Describe raising steam: light the burner, raise the pressure gradually so the boiler is not thermally shocked, and watch the water level in the gauge glass throughout.",
      "State the key safety points: keep the water level in sight and never let it fall out of the glass, watch the steam pressure against the safety valve setting, and know the low-water and flame-failure protections.",
      "Report the procedure in clear engine-room English."
    ],
    deliverable: "A note in English on operating the auxiliary steam plant: what it supplies (fuel and lube oil heating, tank and accommodation heating), raising steam gradually while watching the water level, and the key safety points (water level in the glass, pressure against the safety valve, low-water and flame-failure protection).",
    assessmentCriteria: [
      "The purpose of the steam plant is correct (fuel and lube oil heating, tank and accommodation heating, services).",
      "Raising steam is correct (light the burner, raise the pressure gradually to avoid thermal shock, watch the water level).",
      "The safety points are correct (water level in the glass, pressure against the safety valve, low-water and flame-failure protection).",
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
    unit: "Maquinaria Maritima Auxiliar",
    topic: "Sistema de gobierno (servo del timon)",
    week: 10,
    taskId: "mn-lma745-w10-steering-gear",
    taskTitle: "Operate The Steering Gear And Answer A Steering Failure",
    scenario: "The steering gear turns the rudder on the bridge's order, and a failure must be answered at once. In the simulator the engineer asks the cadet to explain running the steering gear and changing over on a failure.",
    instructions: [
      "Explain how the steering gear works in basic terms: the hydraulic power unit (the pumps) moves the rams or the rotary actuator that turns the rudder stock, following the order from the bridge.",
      "Explain the redundancy: there are two power units, so on the loss of one the other is started or is already running, and SOLAS requires the steering to keep working on a single failure.",
      "State the response to a steering failure: change over to the standby pump or to local or emergency steering, tell the bridge immediately, and follow the steering-gear failure procedure so the ship keeps steering.",
      "Report the procedure in clear engine-room English."
    ],
    deliverable: "A note in English on the steering gear: how it works (the hydraulic power unit moving the rams or rotary actuator to turn the rudder on the bridge's order), the redundancy of two power units required by SOLAS, and the response to a failure (change over to the standby pump or emergency steering, tell the bridge, follow the failure procedure).",
    assessmentCriteria: [
      "How the steering gear works is correct (hydraulic power unit moving the rams or rotary actuator to turn the rudder on the bridge's order).",
      "The redundancy is correct (two power units; steering kept working on a single failure as SOLAS requires).",
      "The failure response is correct (change over to the standby pump or emergency steering, tell the bridge, follow the procedure).",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "LMA745",
    subjectName: "Laboratorio de Máquinas",
    subjectId: "mn-s7-laboratorio-maquinas",
    unit: "Maquinaria Maritima Auxiliar",
    topic: "Sistema contra incendio y estacion de CO2",
    week: 11,
    taskId: "mn-lma745-w11-fire-main-co2",
    taskTitle: "Fight An Engine-Room Fire With The Fixed Systems",
    scenario: "A fire breaks out in the machinery space and the fixed systems must be used. In the simulator the engineer asks the cadet to run the engine-room fire response with the fire main and the fixed CO2 installation.",
    instructions: [
      "Explain the fire main: start the fire pump to pressurise the fire main so the hydrants and hoses have water, and know that the emergency fire pump outside the machinery space supplies the main if the space must be abandoned.",
      "Explain releasing the fixed CO2: for a fire that cannot be fought locally, the space is evacuated and sealed and the ventilation and fuel are shut off before the CO2 is released, because the CO2 will suffocate anyone still inside, so the count of persons is confirmed and the alarm sounded first.",
      "State the shut-offs and the boundary: trip the fuel from the quick-closing valves, stop the ventilation and close the fire dampers and skylights, and stop the affected machinery, so the fire is starved of fuel and air. Boundary: the fire alarm and CO2 stations were introduced as familiarization; here it is the operational fire response.",
      "Report the response in clear engine-room English."
    ],
    deliverable: "A note in English on fighting an engine-room fire with the fixed systems: pressurising the fire main (and the emergency fire pump outside the space), the safe release of the fixed CO2 (space evacuated, counted, sealed, fuel and ventilation shut off, alarm sounded first), and the shut-offs (quick-closing fuel valves, ventilation and fire dampers, affected machinery stopped).",
    assessmentCriteria: [
      "The fire main is correctly explained (fire pump pressurises the main; emergency fire pump outside the space supplies it if abandoned).",
      "The CO2 release is correct and safe (space evacuated and counted, sealed, fuel and ventilation shut off, alarm sounded before release).",
      "The shut-offs are correct (quick-closing fuel valves, ventilation and fire dampers, affected machinery stopped).",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "LMA745",
    subjectName: "Laboratorio de Máquinas",
    subjectId: "mn-s7-laboratorio-maquinas",
    unit: "Planta de Generacion Electrica",
    topic: "Generador de eje de cola y suministro electrico de tierra",
    week: 12,
    taskId: "mn-lma745-w12-shaft-generator-shore-supply",
    taskTitle: "Manage The Ship's Power Sources",
    scenario: "As the closing task, the ship's electrical supply must be managed across its sources: the diesel generators at sea, the shaft generator when the main engine drives it, and shore power in port. In the simulator the engineer asks the cadet to change between the power sources without a blackout.",
    instructions: [
      "Explain the shaft generator: when the main engine is running at sea it can drive a shaft generator to make the ship's electrical power, saving fuel over running a separate diesel generator, provided the engine speed is steady.",
      "Explain the shore supply: in port the ship can take power from ashore (cold ironing) and stop her own generators, cutting noise and emissions in port, and the shore supply must match the ship's voltage and frequency.",
      "Explain changing over without a blackout: bring the incoming source on and synchronise it before taking the outgoing one off, so the load is transferred with the bus always fed, and never leave the board without a source. Integrate the subject: this builds on paralleling the diesel generators (week 2) and the blackout recovery (week 6), which the correct changeover prevents.",
      "Report the procedure in clear engine-room English."
    ],
    deliverable: "A note in English on managing the ship's power sources: the shaft generator driven by the main engine at sea (fuel saving, needs steady speed), the shore supply in port (cold ironing, matched voltage and frequency), and changing over without a blackout (synchronise the incoming source before removing the outgoing one, the bus always fed), integrating the paralleling of week 2 and the blackout recovery of week 6.",
    assessmentCriteria: [
      "The shaft generator is correctly explained (driven by the main engine at sea, saves fuel, needs steady engine speed).",
      "The shore supply is correctly explained (cold ironing in port, own generators stopped, voltage and frequency matched).",
      "The changeover is correct (synchronise the incoming source before removing the outgoing one, the bus always fed) and integrates the week 2 paralleling and the week 6 blackout recovery.",
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
    subjectCode: "EST748",
    subjectName: "Estabilidad del Buque",
    subjectId: "mn-s7-estabilidad-buque",
    unit: "Planos y coeficientes de formas del buque",
    topic: "Coeficientes de formas del buque",
    week: 9,
    taskId: "mn-est748-w09-form-coefficients",
    taskTitle: "Determine The Ship's Form Coefficients",
    scenario: "The fullness of a hull is described by its form coefficients, which the engineer meets in the stability data. The engineer asks the cadet to explain the block coefficient and the other form coefficients and what they tell about the ship.",
    instructions: [
      "Define the block coefficient (Cb): the ratio of the underwater volume of the hull to the box of length x breadth x draught, so a full-bodied tanker has a high Cb and a fine fast hull a low Cb.",
      "Name the other form coefficients as concepts: the waterplane area coefficient (Cw), the midship section coefficient (Cm) and the prismatic coefficient (Cp), each comparing an area or a volume of the hull to its enclosing rectangle.",
      "Explain what they are used for: fuller forms (high Cb) carry more cargo for the dimensions but are less easily driven, so the coefficients relate the hull's fullness to its capacity and its resistance.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on the ship's form coefficients: the block coefficient Cb (underwater volume over length x breadth x draught; high for a tanker, low for a fine hull), the other coefficients (waterplane Cw, midship Cm, prismatic Cp) as ratios of area or volume to the enclosing rectangle, and what they tell about capacity versus resistance.",
    assessmentCriteria: [
      "The block coefficient is correctly defined (underwater volume over length x breadth x draught; full versus fine hulls).",
      "The other coefficients are correctly named as concepts (waterplane, midship, prismatic).",
      "The use is correct (fullness related to cargo capacity and resistance).",
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
    unit: "Areas y volumenes",
    topic: "Regla de Simpson",
    week: 10,
    taskId: "mn-est748-w10-simpsons-rule",
    taskTitle: "Compute A Waterplane Area By Simpson's Rule",
    scenario: "The area of a curved shape like the waterplane is found by Simpson's rule from a set of offsets. The engineer asks the cadet to explain and work a simple Simpson's-rule calculation.",
    instructions: [
      "Explain the idea: Simpson's rule finds the area under a curve from equally spaced ordinates (offsets), by summing them with the pattern 1-4-2-4...4-1 and multiplying by one third of the spacing.",
      "State the formula: Area = (h/3) x (y0 + 4y1 + 2y2 + 4y3 + ... + yn), where h is the common spacing and the y values are the ordinates, needing an even number of intervals.",
      "Work a short example: with a spacing of 10 m and half-breadth ordinates of 0, 4, 6, 5, 0 m, the area of that half is (10/3) x (0 + 4x4 + 2x6 + 4x5 + 0) = (10/3) x 48 = 160 square metres, doubled for the full waterplane.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on Simpson's rule: the idea (area under a curve from equally spaced offsets with the 1-4-2-4-1 pattern), the formula (Area = (h/3)(y0 + 4y1 + 2y2 + ... + yn), even number of intervals), and a worked example (spacing 10 m, ordinates 0/4/6/5/0 giving 160 square metres for the half, doubled for the full waterplane).",
    assessmentCriteria: [
      "The idea of Simpson's rule is correct (area from equally spaced ordinates with the 1-4-2-...-4-1 multipliers).",
      "The formula is correct (h/3 times the weighted sum of ordinates, even number of intervals).",
      "The worked example is correct (0/4/6/5/0 at 10 m gives 160 square metres for the half, doubled for the full area).",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "EST748",
    subjectName: "Estabilidad del Buque",
    subjectId: "mn-s7-estabilidad-buque",
    unit: "Estabilidad estatica transversal a grandes angulos de escora",
    topic: "Curvas cruzadas de estabilidad y curvas KN",
    week: 11,
    taskId: "mn-est748-w11-gz-curve-large-angles",
    taskTitle: "Build The GZ Curve At Large Angles Of Heel",
    scenario: "Beyond small angles the righting arm must be read from the cross curves of stability. The engineer asks the cadet to explain building the GZ curve at large angles from the KN cross curves.",
    instructions: [
      "Explain why large angles need the cross curves: at large heel the simple GZ = GM x sin(theta) no longer holds because the wedge shapes change, so the KN values are read from the cross curves of stability at the displacement.",
      "Explain the correction to G: GZ = KN - KG x sin(theta), so from the tabulated KN at each angle you subtract the effect of the real height of G to get the actual righting arm at that angle.",
      "Explain reading the curve: plotting GZ against the angle of heel gives the statical stability curve, from which you read the maximum GZ, the angle of maximum GZ and the range of stability (the angle at which GZ returns to zero). Boundary: the small-angle righting arm and GM were week 2; here it is the large-angle curve.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on the large-angle GZ curve: why the cross curves (KN) are needed (the small-angle GZ = GM x sin theta fails at large heel), the correction GZ = KN - KG x sin(theta), and reading the statical stability curve for the maximum GZ, its angle and the range of stability, distinct from the small-angle GM of week 2.",
    assessmentCriteria: [
      "The need for the cross curves is correct (small-angle GZ = GM sin theta fails at large heel; KN read at the displacement).",
      "The correction to G is correct (GZ = KN - KG x sin theta).",
      "Reading the statical stability curve is correct (maximum GZ, its angle, the range of stability) with the week 2 small-angle boundary respected.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "EST748",
    subjectName: "Estabilidad del Buque",
    subjectId: "mn-s7-estabilidad-buque",
    unit: "Asiento",
    topic: "Calculo del asiento y los calados",
    week: 12,
    taskId: "mn-est748-w12-trim-and-drafts",
    taskTitle: "Calculate The Change Of Trim And The Final Drafts",
    scenario: "As the closing task, a weight shift changes the ship's trim, and the final drafts must be found. The engineer asks the cadet to calculate the change of trim and the new drafts forward and aft.",
    instructions: [
      "Explain trim and the centre of flotation: trim is the difference between the draft forward and the draft aft, and the ship trims about the centre of flotation (F), the centre of the waterplane, not the midships.",
      "Explain the change of trim: a longitudinal shift or addition of weight makes a trimming moment (weight x distance from F), and the change of trim = trimming moment / MCTC (the moment to change trim one centimetre), giving the total change spread forward and aft about F.",
      "Work the final drafts: split the change of trim between forward and aft in proportion to the distance of each perpendicular from F, apply any bodily sinkage from added weight using the TPC of week 5, and state the new drafts forward and aft. Integrate the subject with the hydrostatics (week 5) and the list correction (week 7).",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on trim and drafts: trim as the difference of the drafts forward and aft about the centre of flotation, the change of trim (trimming moment / MCTC), and finding the final drafts (the change split forward and aft about F, plus any bodily sinkage from the TPC of week 5), integrating the hydrostatics of week 5 and the list correction of week 7.",
    assessmentCriteria: [
      "Trim and the centre of flotation are correct (trim is the draft difference; the ship trims about F, the centre of the waterplane).",
      "The change of trim is correct (trimming moment = weight x distance from F; change of trim = moment / MCTC).",
      "The final drafts are correct (change split forward and aft about F, plus bodily sinkage from the TPC of week 5), integrating weeks 5 and 7.",
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
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "TAL750",
    subjectName: "Taller VI",
    subjectId: "mn-s7-taller-vi",
    unit: "Dimensiones de piezas",
    topic: "Tolerancias geometricas y ajustes",
    week: 9,
    taskId: "mn-tal750-w09-tolerances-and-fits",
    taskTitle: "Measure A Part To Tolerance And Select The Fit",
    scenario: "A shaft and its housing must go together with the right fit, neither too tight nor too loose. The instructor asks the cadet to explain measuring a part to its tolerance and choosing the fit.",
    instructions: [
      "Explain limits and tolerance: a dimension is given a maximum and a minimum size, and the tolerance is the difference between them, so the part is accepted if it measures within the limits.",
      "Explain the kinds of fit: a clearance fit (the shaft always smaller than the hole, so it turns freely), an interference fit (the shaft larger, pressed or shrunk in so it will not move), and a transition fit in between, chosen by what the joint must do.",
      "Explain measuring it: use a micrometer or a vernier for the size and a bore gauge for the hole, take the reading correctly, and compare it with the limits to accept or reject the part. Boundary: the tolerances and fits are the standard behind the bearing and shaft work of weeks 1 and 5.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on tolerances and fits: limits and tolerance (maximum and minimum size, the difference between them, accept if within the limits), the kinds of fit (clearance, interference, transition and what each is for), and measuring the part (micrometer or vernier and bore gauge, compared with the limits to accept or reject), the standard behind the bearing and shaft work of weeks 1 and 5.",
    assessmentCriteria: [
      "Limits and tolerance are correct (maximum and minimum size, the tolerance between them, accept if within the limits).",
      "The kinds of fit are correct (clearance, interference, transition, and the purpose of each).",
      "Measuring is correct (micrometer or vernier and bore gauge, compared with the limits to accept or reject).",
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
    unit: "Dispositivo de aseguramiento",
    topic: "Tuerca seguro, pasadores, resortes y arandelas",
    week: 10,
    taskId: "mn-tal750-w10-locking-devices",
    taskTitle: "Secure Fasteners Against Vibration",
    scenario: "Machinery vibrates, and a fastener that is not locked will slacken and fall out. The instructor asks the cadet to explain the locking devices that keep nuts and bolts secure.",
    instructions: [
      "Explain why locking is needed: constant vibration works a plain nut loose over time, so a locking device holds it, which matters where a lost fastener would cause a failure.",
      "Name the common locking devices and how each works: a lock nut (a second nut jammed against the first), a split pin through a castle nut, a tab or locking washer bent up against a flat, a spring washer, and thread-locking adhesive or lock-wire.",
      "Explain choosing and fitting: match the device to the joint and the access, fit it correctly (for example the split pin spread, the tab bent hard against a flat), and know that a locking device once disturbed is renewed, not reused.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on securing fasteners: why locking is needed (vibration slackens a plain nut, a lost fastener causes failure), the common devices and how each works (lock nut, split pin and castle nut, tab or locking washer, spring washer, adhesive or lock-wire), and choosing and fitting them correctly (matched to the joint, split pin spread, tab bent hard, renewed not reused).",
    assessmentCriteria: [
      "The need for locking is correct (vibration slackens a plain nut; a lost fastener causes failure).",
      "The common locking devices are correctly named with how each works.",
      "Choosing and fitting are correct (matched to the joint, fitted correctly, renewed not reused).",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "TAL750",
    subjectName: "Taller VI",
    subjectId: "mn-s7-taller-vi",
    unit: "Cepillo mecanico",
    topic: "Velocidad de corte, golpes por minuto y ajuste de la carrera",
    week: 11,
    taskId: "mn-tal750-w11-shaping-machine",
    taskTitle: "Set Up And Run The Shaping Machine",
    scenario: "A flat surface or a keyway must be cut on the shaping machine (cepillo mecanico). The instructor asks the cadet to set up and run the shaper safely and correctly.",
    instructions: [
      "Explain how the shaper works: the tool cuts on the forward stroke of the ram and returns idle, and the work is fed across a little on each return, so a flat surface, a slot or a keyway is machined stroke by stroke.",
      "Explain the settings: set the stroke length and its position to suit the job with a small over-run each end, set the number of strokes per minute (the cutting speed) to suit the material, and set the depth and the feed per stroke.",
      "Explain clamping and safety: clamp the work solidly in the vice or to the table so it cannot lift, keep clear of the moving ram, and use the correct tool ground for the material. Boundary: the milling machine and its safety were weeks 3 and 6; here it is the reciprocating shaper.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on the shaping machine: how it works (cuts on the forward stroke, returns idle, work fed across on each return to machine a flat, slot or keyway), the settings (stroke length and position with a small over-run, strokes per minute for the material, depth and feed per stroke), and clamping and safety (work clamped solidly, clear of the ram, correct tool), distinct from the milling machine of weeks 3 and 6.",
    assessmentCriteria: [
      "How the shaper works is correct (cutting forward stroke, idle return, feed across on each return).",
      "The settings are correct (stroke length and position with over-run, strokes per minute for the material, depth and feed).",
      "Clamping and safety are correct (work clamped solidly, clear of the ram, correct tool) with the milling-machine boundary of weeks 3 and 6 respected.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "TAL750",
    subjectName: "Taller VI",
    subjectId: "mn-s7-taller-vi",
    unit: "Fabricacion de engranes",
    topic: "Engranes helicoidales y el cabezal divisor",
    week: 12,
    taskId: "mn-tal750-w12-helical-gear",
    taskTitle: "Cut A Helical Gear",
    scenario: "As the closing task, a helical gear must be machined, a step beyond the spur gear. The instructor asks the cadet to explain cutting a helical gear on the milling machine with the dividing head.",
    instructions: [
      "Explain how a helical gear differs from a spur gear: its teeth run at a helix angle across the face instead of straight, so the teeth engage gradually and the gear runs more smoothly and quietly and carries more load, but it produces an end (axial) thrust.",
      "Explain the dividing head and the table swivel: the dividing head indexes the blank to space the teeth equally (as for the spur gear of week 4), and for a helix the table is swivelled to the helix angle and the dividing head is geared to the table lead screw so the blank rotates as it feeds, cutting the helix.",
      "Explain the checks: the tooth count and spacing from the indexing, the helix angle and hand (left or right), and the tooth form from the correct cutter, then inspect the gear as in service (contact pattern and backlash of week 6). Integrate the subject: this builds on the spur gear of week 4 and the gear inspection of week 6.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on cutting a helical gear: how it differs from a spur gear (teeth at a helix angle, smoother and quieter, more load, but an axial thrust), the dividing head indexing plus the table swivelled to the helix angle and geared to the lead screw to cut the helix, and the checks (tooth count and spacing, helix angle and hand, tooth form, then contact pattern and backlash), integrating the spur gear of week 4 and the gear inspection of week 6.",
    assessmentCriteria: [
      "The difference from a spur gear is correct (teeth at a helix angle, smoother running, more load, produces axial thrust).",
      "The method is correct (dividing head indexes the teeth; table swivelled to the helix angle and geared to the lead screw to cut the helix).",
      "The checks are correct (tooth count and spacing, helix angle and hand, tooth form, contact pattern and backlash) integrating weeks 4 and 6.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "PMR751",
    subjectName: "Prácticas Marineras VII",
    subjectId: "mn-s7-practicas-marineras-vii",
    unit: "Auxilio de personas en peligro en el agua",
    topic: "La faena de hombre al agua: alarma, marcado y bote de rescate",
    week: 5,
    taskId: "mn-pmr751-w05-man-overboard-operation",
    taskTitle: "Run The Man-Overboard Deck Operation",
    scenario: "A crew member falls overboard and the whole deck must react. The officer asks the cadet to run the man-overboard deck operation, from the alarm to the recovery.",
    instructions: [
      "State the immediate actions on deck: shout 'man overboard', throw a lifebuoy with a light and smoke marker to mark the position and give the person buoyancy, and post a person to point continuously at the casualty so they are not lost from sight.",
      "Describe launching and handling the rescue boat: the crew mustered, the boat lowered and driven to the casualty, and the approach made from downwind or down-current so the boat drifts onto the person, not over them. Boundary: the safe approach to the victim in the water was covered in week 1; here the concern is the full deck operation and the boat.",
      "Describe the recovery: getting the person aboard the rescue boat or to the recovery point, treating them for cold and shock, and reporting to the bridge. Boundary: swimming out to a casualty was the last-resort method taught in Physical Education; here the boat is used.",
      "Report the man-overboard operation in clear maritime English."
    ],
    deliverable: "A note in English running the man-overboard deck operation: the immediate actions (shout, mark with a lifebuoy / light / smoke, point continuously), launching and driving the rescue boat with a downwind or down-current approach, and the recovery and report, distinct from the week 1 approach to the victim and the Physical Education swim rescue.",
    assessmentCriteria: [
      "The immediate actions are correct (shout man overboard, mark with lifebuoy / light / smoke, continuous pointer).",
      "The rescue boat handling is correct (mustered, lowered, downwind or down-current approach) with the week 1 boundary respected.",
      "The recovery and report are correct (person aboard, treat for cold and shock, report to the bridge), distinct from the Physical Education swim rescue.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "PMR751",
    subjectName: "Prácticas Marineras VII",
    subjectId: "mn-s7-practicas-marineras-vii",
    unit: "Equipos de cubierta",
    topic: "Mantenimiento del molinete y el cabrestante",
    week: 6,
    taskId: "mn-pmr751-w06-windlass-capstan-maintenance",
    taskTitle: "Maintain The Windlass And Capstan",
    scenario: "The windlass and capstan must work when the anchor or the mooring lines are handled. The officer asks the cadet to explain the maintenance of the windlass and capstan.",
    instructions: [
      "Explain the greasing and lubrication: greasing the moving parts, the bearings and the gearing on a schedule, so the machinery runs freely and does not seize.",
      "Explain inspecting the brake: the brake band and linings checked for wear and correct adjustment, because the brake holds the anchor cable and a worn brake can let it run out.",
      "Explain checking the cable lifter (the wildcat or gypsy): that the cable seats correctly and that the whelps are not worn, so the cable is held and does not jump.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English on maintaining the windlass and capstan: greasing and lubricating the moving parts, bearings and gearing on a schedule, inspecting the brake band and linings for wear and adjustment, and checking the cable lifter (wildcat) and whelps so the cable seats and holds.",
    assessmentCriteria: [
      "The greasing and lubrication of moving parts, bearings and gearing is correct.",
      "The brake inspection is correct (band and linings for wear and adjustment; the brake holds the cable).",
      "The cable-lifter and whelps check is correct (the cable seats and is held, does not jump).",
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
    unit: "Pertrechos y consumos",
    topic: "Estiba, inventario y control de consumos del pañol",
    week: 7,
    taskId: "mn-pmr751-w07-bosun-store-management",
    taskTitle: "Manage The Bosun's Store",
    scenario: "The bosun's store holds the deck's ropes, paint and gear, and it must be kept in order. The officer asks the cadet to explain managing the bosun's store, building on the spares report of week 3.",
    instructions: [
      "Explain the stowage of the store: heavy items low and secured, paints and chemicals in their proper ventilated place away from ignition, and everything stowed so it is found and does not shift at sea.",
      "Explain the inventory: keeping a list of what is held, so the officer knows the stock and can requisition before an item runs out, building on the spares report (partes de respeto) of week 3.",
      "Explain the control of consumption: recording what is used and reordering in time, so a critical item (a mooring rope, a shackle) is never missing when it is needed.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English on managing the bosun's store: safe stowage (heavy low and secured, paints and chemicals ventilated away from ignition, nothing shifting), the inventory building on the week 3 spares report, and the control of consumption (record use, reorder in time so a critical item is never missing).",
    assessmentCriteria: [
      "The stowage is correct (heavy low and secured, paints and chemicals ventilated away from ignition, nothing shifting).",
      "The inventory is correct and builds on the week 3 spares report.",
      "The control of consumption is correct (record use, reorder in time).",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "PMR751",
    subjectName: "Prácticas Marineras VII",
    subjectId: "mn-s7-practicas-marineras-vii",
    unit: "Faena de puerto",
    topic: "La faena integrada de zarpe desde la estación de amarre",
    week: 8,
    taskId: "mn-pmr751-w08-integrated-departure-operation",
    taskTitle: "Run The Integrated Departure Operation",
    scenario: "As the closing task, the deck must let the ship go from the berth. The officer asks the cadet to run the integrated departure operation from the mooring station, the reverse of the arrival.",
    instructions: [
      "State the preparation: the station manned, the lines ready to let go, and communication with the bridge established, so the deck acts on the bridge's orders.",
      "Run the departure sequence: single up to the last lines on the master's order, then let go and heave in each line in turn as ordered (the springs and breast lines coordinated with the bridge manoeuvre), keeping every line clear of the propeller.",
      "Explain how this is the reverse of the arrival: the arrival made her fast to the berth (covered as the integrated arrival in Prácticas Marineras V); the departure is singling up, letting go and recovering the lines to set her free, so the two complete the port faena together without repeating each other.",
      "Report the departure operation in clear maritime English."
    ],
    deliverable: "A note in English running the integrated departure: the preparation (station manned, lines ready, bridge communication), the sequence (single up on order, let go and heave in each line, springs and breast lines coordinated, lines clear of the propeller), and how it is the reverse of the Prácticas Marineras V integrated arrival.",
    assessmentCriteria: [
      "The preparation is correct (station manned, lines ready, bridge communication established).",
      "The departure sequence is correct (single up on order, let go and heave in in turn, coordinated with the bridge, lines clear of the propeller).",
      "It is correctly explained as the reverse of the Prácticas Marineras V integrated arrival, not a repeat.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "PMR751",
    subjectName: "Prácticas Marineras VII",
    subjectId: "mn-s7-practicas-marineras-vii",
    unit: "Aplicacion de anticorrosivos",
    topic: "Diferentes tipos y su uso",
    week: 9,
    taskId: "mn-pmr751-w09-anticorrosive-application",
    taskTitle: "Treat And Protect Steel Against Corrosion",
    scenario: "Salt air and water rust the ship's steel, and it must be treated and protected. The officer asks the cadet to explain preparing and applying anticorrosive coatings.",
    instructions: [
      "Explain preparing the surface: remove the rust, scale and loose old paint (by chipping, wire-brushing or a needle gun) and clean and dry the surface, because a coating over rust or grease will not hold.",
      "Explain the anticorrosive types and their use: a primer that bonds to the steel and inhibits rust (for example a zinc-based or a red-oxide primer) goes on first, and know where each type is used (deck, ship's side, bilges, tanks).",
      "Explain applying it and the conditions: apply the primer evenly in the recommended coats and let each dry, and do not paint in rain, damp or on a wet surface, because trapped moisture defeats the coating.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English on anticorrosive protection: preparing the surface (rust, scale and loose paint removed, cleaned and dried), the anticorrosive types and their use (a bonding, rust-inhibiting primer such as zinc or red-oxide, and where each is used), and applying it (even coats, each dried, never in rain or on a wet surface).",
    assessmentCriteria: [
      "The surface preparation is correct (rust, scale and loose paint removed, cleaned and dried).",
      "The anticorrosive types and their use are correct (a bonding, rust-inhibiting primer, applied where appropriate).",
      "Applying it is correct (even coats, each dried, not in rain or on a wet surface).",
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
    unit: "Acabados, esmaltes y barnices",
    topic: "Preparacion de la pintura e igualacion de colores",
    week: 10,
    taskId: "mn-pmr751-w10-paint-finish-matching",
    taskTitle: "Prepare And Match A Finish Coat",
    scenario: "Over the primer the ship gets a finish coat that must match the existing colour. The officer asks the cadet to explain preparing the paint and matching the colour for a finish coat, building on the anticorrosive work of week 9.",
    instructions: [
      "Explain preparing the paint: stir it thoroughly to mix the settled pigment, thin it only as the maker allows for the method (brush, roller or spray), and strain it if needed, so it flows and covers evenly.",
      "Explain matching the colour: identify the existing colour and mix or select to match it, testing on a small area first, because a finish coat that does not match shows every touch-up. Boundary: the primer and corrosion protection were week 9; here it is the finish coat over it.",
      "Explain applying the finish evenly: apply in the right conditions in even coats without runs, keeping a wet edge, so the finish is uniform and protects the primer.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English on the finish coat: preparing the paint (stirred, thinned only as allowed for the method, strained), matching the colour (identified and mixed or selected to match, tested first), and applying it evenly (right conditions, even coats, a wet edge, no runs), building on the primer of week 9.",
    assessmentCriteria: [
      "Preparing the paint is correct (stirred, thinned only as allowed, strained).",
      "Matching the colour is correct (identified and matched, tested on a small area first).",
      "Applying the finish is correct (right conditions, even coats, wet edge, no runs) building on the week 9 primer.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "PMR751",
    subjectName: "Prácticas Marineras VII",
    subjectId: "mn-s7-practicas-marineras-vii",
    unit: "Banderas y senales",
    topic: "Uso y significado de las senales de banderas",
    week: 11,
    taskId: "mn-pmr751-w11-flag-signalling",
    taskTitle: "Send A Message By Flag Signal",
    scenario: "When radios are silent or a ship must show her situation to all around, flag signals speak. The officer asks the cadet to send a message by flag hoist, building on recognising the flags in week 2.",
    instructions: [
      "Explain single-flag signals: many flags have an urgent meaning on their own (for example A - diver down, keep clear; B - dangerous goods; O - man overboard; H - pilot on board), understood at a glance.",
      "Explain a hoist of several flags and the code: flags hoisted together spell a message or a code group from the International Code of Signals, so ships of any language read the same meaning.",
      "Explain using them correctly: hoist where they are best seen and clear to fly, use the answering pendant to acknowledge, and choose the signal that fits the situation. Boundary: recognising the flags by shape and colour was week 2; here it is using them to send a message.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English on flag signalling: single-flag signals with their urgent meanings (A, B, O, H and the like), a hoist of several flags spelling a message or code group from the International Code of Signals read by any language, and using them correctly (hoisted where seen and clear to fly, answering pendant to acknowledge, the right signal for the situation), building on the flag recognition of week 2.",
    assessmentCriteria: [
      "The single-flag signals are correct with their meanings (e.g. A, B, O, H).",
      "The multi-flag hoist and the International Code of Signals are correctly explained (a common meaning for any language).",
      "Using the flags is correct (hoisted where seen, answering pendant, the right signal) with the week 2 recognition boundary respected.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "PMR751",
    subjectName: "Prácticas Marineras VII",
    subjectId: "mn-s7-practicas-marineras-vii",
    unit: "Faenas con anclas",
    topic: "Bajada del ancla a plan de muelle",
    week: 12,
    taskId: "mn-pmr751-w12-anchor-to-dock-bottom",
    taskTitle: "Lower The Anchor To The Dock Bottom",
    scenario: "As the closing task, an anchor must be walked right down to the bottom of a dock or a shallow berth, not let go on the run. The officer asks the cadet to explain lowering the anchor to the dock bottom under power.",
    instructions: [
      "Explain when it is done and why: in shallow water, a dock or alongside where letting the anchor run free would damage the anchor, the cable or the bottom, so the anchor is walked down under the windlass power in gear, controlled all the way.",
      "Explain the operation: with the windlass in gear, walk the cable out steadily to lower the anchor to the bottom, watching the cable and the marks, and hold it under control rather than letting the brake render.",
      "Explain the safety and communication: the team clear of the cable, the bridge and the windlass operator working together on clear orders, and the state reported (cable out, anchor on the bottom, brought up). Integrate the subject: this builds on the anchor work and hazards of week 4 and the windlass maintenance of week 6.",
      "Report the operation in clear maritime English."
    ],
    deliverable: "A note in English on lowering the anchor to the dock bottom: when and why (shallow water or alongside, walked down under power to avoid damaging the anchor, cable or bottom), the operation (windlass in gear, cable walked out steadily, watched and controlled), and the safety and communication (team clear of the cable, bridge and operator on clear orders, the state reported), integrating the anchor work of week 4 and the windlass maintenance of week 6.",
    assessmentCriteria: [
      "When and why it is done is correct (shallow water or alongside, walked down under power to avoid damage).",
      "The operation is correct (windlass in gear, cable walked out steadily, watched and controlled, not let run).",
      "The safety and communication are correct (team clear, bridge and operator coordinated, state reported) integrating weeks 4 and 6.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "C0011",
    subjectName: "Educación Física VII",
    subjectId: "mn-s7-educacion-fisica-vii",
    unit: "Acondicionamiento integral",
    topic: "El circuito de entrenamiento por estaciones a bordo",
    week: 5,
    taskId: "mn-c0011vii-w05-onboard-circuit-training",
    taskTitle: "Build An Onboard Circuit Workout",
    scenario: "The engine-room watch leaves little time and less space for training, and a circuit answers both. The training officer asks the cadet to explain how to build a station circuit that works several capacities at once.",
    instructions: [
      "Explain what a circuit is: a chain of stations taken in turn, each one loading a different capacity (a push, a pull, a legs and a core station), so that strength and stamina are worked together where there is barely room to stand.",
      "Explain reading the effort by feel: hold each station at a moderate-to-firm effort judged by the breathing and the muscles, and set no repetition quota, no time to beat and no number as the goal.",
      "Explain moving and resting: pass from station to station with a brief easy recovery, and drop a station the moment the technique falls apart, since a hurried repetition done badly is where the injury begins.",
      "Report your circuit plan in clear English using correct fitness terms."
    ],
    deliverable: "A note in English on a station circuit aboard: stations that each load a different capacity (push, pull, legs, core) in a tight space, effort read by feel with no repetition quota or time to beat, and moving with brief recovery while dropping a station when the technique fails.",
    assessmentCriteria: [
      "The circuit is correctly explained (stations loading different capacities together in a small space).",
      "Effort is read by feel, with no repetition quota, time to beat or number as a goal.",
      "Moving with recovery and dropping a station when the technique fails are covered.",
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
    unit: "Movilidad y postura",
    topic: "Movilidad, postura y pausas de movimiento en la guardia",
    week: 6,
    taskId: "mn-c0011vii-w06-mobility-posture-watch",
    taskTitle: "Keep Mobility And Posture On Long Watches",
    scenario: "A long engine-room watch spent in one posture leaves the body stiff and sore. The training officer asks the cadet to explain how mobility, posture and movement breaks keep the body sound through the watch.",
    instructions: [
      "Explain active mobility for the parts that seize up on watch — the neck, the shoulders, the lower back and the hips — taking each gently through its range and never wrenching it into position.",
      "Explain posture through the watch: spread the load when standing or sitting and shift position often, so that no single joint or muscle bears the strain for hours.",
      "Explain movement breaks: use short breaks to walk and loosen up whenever the watch permits, because a body held motionless stiffens; do not push a stretch into pain or reach for an extreme range.",
      "Report your answer in clear English using correct fitness terms."
    ],
    deliverable: "A note in English on mobility and posture through a watch: gentle active mobility for the neck, shoulders, back and hips (never wrenched), posture with the load spread and the position shifted often, and movement breaks to loosen up, without pushing a stretch into pain or reaching an extreme range.",
    assessmentCriteria: [
      "Active mobility for the watch-stiffened parts is correct (gentle, through the range, never wrenched).",
      "Posture through the watch is correct (load spread, position shifted often, no joint bearing the strain for hours).",
      "Movement breaks are covered, with no pushing a stretch into pain or reaching an extreme range.",
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
    unit: "Natación",
    topic: "Abandono simulado: salto, nado agrupado y conservación del calor",
    week: 7,
    taskId: "mn-c0011vii-w07-simulated-abandonment-swim",
    taskTitle: "Practise A Simulated Abandonment Swim",
    scenario: "If the ship must be abandoned, the water entry and the wait for rescue decide who survives. The instructor asks the cadet to practise the simulated self-abandonment: the jump, the grouped swim and holding body heat.",
    instructions: [
      "Explain entering the water safely: look that the water below is clear, then step off with the feet together, one hand over the nose and mouth and the other pinning the lifejacket down, so the drop is controlled and the lifejacket does not ride up and strike the chin.",
      "Explain reaching the craft as a group: keep together and move to the survival craft as one body, because a cluster is spotted sooner and the swimmers steady each other, instead of striking out alone.",
      "Explain holding heat while you wait: take up the heat-escape-lessening posture (HELP) if alone, or huddle close as a group, and stay as still as you can to keep the warmth, since thrashing about throws it away. Boundary: plain survival floating was week 3, and going to the aid of another person was Physical Education V; here it is your own abandonment.",
      "Report your answer in clear English suitable for a safety briefing."
    ],
    deliverable: "A brief in English on the simulated self-abandonment: the controlled entry (feet together, nose and mouth covered, lifejacket pinned down), the grouped swim to the survival craft, and holding heat with the HELP posture or the huddle while staying still, distinct from the week 3 survival floating and the Physical Education V aid to another person.",
    assessmentCriteria: [
      "The entry is correct (water below clear, feet together, nose and mouth covered, lifejacket pinned down).",
      "The grouped swim to the survival craft is correct (keep together, not striking out alone).",
      "Holding heat is correct (HELP posture or huddle, stay still to keep warmth) and the week 3 survival and Physical Education V aid-to-another boundary is respected.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "C0011",
    subjectName: "Educación Física VII",
    subjectId: "mn-s7-educacion-fisica-vii",
    unit: "Liderazgo en la actividad física",
    topic: "Dirigir el calentamiento, la sesión y el cierre del grupo",
    week: 8,
    taskId: "mn-c0011vii-w08-lead-group-session",
    taskTitle: "Lead The Group's Physical Session",
    scenario: "As the closing task, the cadet takes charge of a physical session for the group. The training officer asks the cadet to run the whole session — warm-up, main part and cool-down — as the one leading it.",
    instructions: [
      "Lead the warm-up: bring the body up gently and ready the joints before the work, and tell the group the reason so they give it their attention.",
      "Lead the main part: give short clear directions, keep an eye on each person's technique and effort, and scale the work so it fits everyone, without driving anyone to an extreme or turning it into a contest to win.",
      "Lead the cool-down and the finish: bring the body down and make sure no one has been hurt or overloaded, because the person leading answers for the group's wellbeing, not for any performance number.",
      "Report how you would lead the session in clear maritime English."
    ],
    deliverable: "A note in English leading a group session: bringing the group up gently in the warm-up (with the reason given), the main part with short clear directions and technique watched (no one driven to an extreme, no contest to win), and the cool-down and finish making sure no one is hurt, as the leader answering for wellbeing rather than a performance number.",
    assessmentCriteria: [
      "The warm-up is led and its reason given to the group.",
      "The main part is led with short clear directions and technique watched, with no one driven to an extreme and no contest to win.",
      "The cool-down and finish check for injury or overload, treating the group's wellbeing (not a performance number) as what the leader answers for.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "C0011",
    subjectName: "Educación Física VII",
    subjectId: "mn-s7-educacion-fisica-vii",
    unit: "Condicion fisica",
    topic: "Flexibilidad articular y muscular",
    week: 9,
    taskId: "mn-c0011vii-w09-flexibility-routine",
    taskTitle: "Build A Flexibility Routine",
    scenario: "Stiff joints and tight muscles injure easily in the physical work of the engine room. The training officer asks the cadet to build a flexibility routine that keeps the joints and muscles supple.",
    instructions: [
      "Define joint and muscle flexibility and why it matters: the range a joint moves through and the length a muscle stretches to, which lets the body work and reach without strain or tearing.",
      "Describe a simple flexibility routine: static stretches held gently for the main muscle groups (calves, hamstrings, hips, back, shoulders, neck) after the muscles are warm, easing into each stretch rather than forcing or bouncing it.",
      "State the safe limits and the benefit: stretch to a mild tension and never into pain, breathe and hold, and know that regular flexibility work reduces the risk of strains in physical tasks. Boundary: week 6 covered mobility and movement breaks during a watch; here it is a dedicated flexibility routine.",
      "Report your routine in clear English using correct fitness terms."
    ],
    deliverable: "A note in English on a flexibility routine: what joint and muscle flexibility is and why it matters, a routine of gentle static stretches for the main muscle groups done warm (eased into, not forced or bounced), and the safe limits and benefit (mild tension not pain, breathe and hold, fewer strains), distinct from the watch mobility of week 6.",
    assessmentCriteria: [
      "Flexibility is correctly defined and its importance is sound.",
      "The routine is safe and covers the main muscle groups (gentle static stretches done warm, not forced or bounced).",
      "The safe limits and benefit are correct (mild tension not pain, fewer strains) with the week 6 boundary respected.",
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
    unit: "Natacion",
    topic: "Nado libre y tecnica",
    week: 10,
    taskId: "mn-c0011vii-w10-freestyle-technique",
    taskTitle: "Refine The Freestyle Swimming Technique",
    scenario: "A strong, efficient swimming stroke lets a seafarer cover distance in the water without exhausting themselves. The instructor asks the cadet to explain and refine the freestyle (front crawl) technique.",
    instructions: [
      "Describe the freestyle stroke: a steady flutter kick from the hips, alternating arm strokes that pull through the water, and a streamlined body position with the head low.",
      "Explain the breathing and the rhythm: turn the head to the side to breathe in time with the stroke without lifting it, and keep a steady rhythm so the effort is even and sustainable.",
      "State the common faults and the benefit: a dropped or lifted head, a weak or bent kick, and rushing the stroke waste energy, while a smooth technique lets you swim further for the same effort. Boundary: week 3 was survival in the water and week 7 the abandonment swim; here it is the swimming technique itself for fitness.",
      "Report your answer in clear English using correct fitness terms."
    ],
    deliverable: "A note in English on the freestyle technique: the stroke (steady flutter kick from the hips, alternating arm pulls, streamlined body with the head low), the breathing and rhythm (turn to breathe in time, steady and sustainable), and the common faults and benefit (head, kick and rushing faults waste energy; a smooth stroke swims further), distinct from the survival of week 3 and the abandonment swim of week 7.",
    assessmentCriteria: [
      "The freestyle stroke is correctly described (kick from the hips, alternating arm pulls, streamlined body).",
      "The breathing and rhythm are correct (turn to breathe in time, steady and sustainable).",
      "The common faults and the benefit are correct (head, kick and rushing faults; a smooth stroke is more efficient) with the week 3 and week 7 boundary respected.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "C0011",
    subjectName: "Educación Física VII",
    subjectId: "mn-s7-educacion-fisica-vii",
    unit: "Desarrollo fisico integral",
    topic: "Deportes de equipo: futbol, basquetbol y voleibol",
    week: 11,
    taskId: "mn-c0011vii-w11-team-sport-cohesion",
    taskTitle: "Build Crew Teamwork Through A Team Sport",
    scenario: "A crew that plays together works better together, and team sports build the coordination and cooperation a ship needs. The training officer asks the cadet to explain how a team sport develops teamwork and coordination for the crew.",
    instructions: [
      "Explain how a team sport (football, basketball or volleyball) develops teamwork: players must communicate, take positions and roles, and cooperate toward a shared aim, the same skills a crew uses.",
      "Explain the physical and coordination benefit: the running, changing direction and reacting build fitness and gross and fine motor coordination together.",
      "Explain running it well and safely for a crew: mixed teams so everyone takes part, fair play kept above winning, and the intensity managed so no one is hurt, because the aim is crew cohesion and fitness, not the score.",
      "Report your answer in clear English using correct fitness terms."
    ],
    deliverable: "A note in English on building teamwork through a team sport: how it develops teamwork (communication, roles and cooperation toward a shared aim, as a crew uses), the physical and coordination benefit (fitness and motor coordination from the play), and running it well for a crew (mixed teams, fair play above winning, intensity managed, aiming at cohesion and fitness not the score).",
    assessmentCriteria: [
      "The teamwork development is correct (communication, roles and cooperation toward a shared aim).",
      "The physical and coordination benefit is sound (fitness and motor coordination from the play).",
      "Running it for a crew is correct (mixed teams, fair play, managed intensity, aim of cohesion and fitness not the score).",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "C0011",
    subjectName: "Educación Física VII",
    subjectId: "mn-s7-educacion-fisica-vii",
    unit: "Natacion",
    topic: "Nado en grupo y flotacion",
    week: 12,
    taskId: "mn-c0011vii-w12-group-swim-organisation",
    taskTitle: "Organise A Group Swim In The Water",
    scenario: "As the closing task, a group in the water survives and reaches safety better together than alone, and it must be organised. The instructor asks the cadet to lead and organise a group swim, holding the group together and afloat.",
    instructions: [
      "Explain forming and holding the group: gather the swimmers into a close group, link or keep contact, and set a steady pace the weakest can hold, so no one is left behind.",
      "Explain flotation and conserving energy: keep everyone afloat with their lifejackets or by resting on floating support, use an easy stroke or float rather than thrashing, and conserve energy and warmth for the distance.",
      "Explain leading and reaching safety: count and watch the group, encourage and keep them calm, and steer them together toward the craft or the shore. Integrate the subject: this builds on the survival of week 3 and the own-abandonment of week 7, applied now to leading a group.",
      "Report how you would organise the group swim in clear English."
    ],
    deliverable: "A note in English on organising a group swim: forming and holding the group (gathered close, in contact, a pace the weakest can hold), flotation and conserving energy (afloat on lifejackets or support, an easy stroke, warmth conserved), and leading to safety (count and watch, encourage and keep calm, steer together), integrating the survival of week 3 and the own-abandonment of week 7.",
    assessmentCriteria: [
      "Forming and holding the group is correct (gathered close, in contact, a pace the weakest can hold).",
      "Flotation and conserving energy are correct (afloat on lifejackets or support, easy stroke, warmth conserved).",
      "Leading to safety is correct (count and watch, encourage, steer together) integrating weeks 3 and 7.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "OMI749",
    subjectName: "Convenios Organización Marítima Internacional I",
    subjectId: "mn-s7-convenios-omi-i",
    unit: "Convenio SOLAS",
    topic: "Estructura del Convenio SOLAS y capítulos clave",
    week: 5,
    taskId: "mn-omi749-w05-solas-structure",
    taskTitle: "Explain The Structure Of SOLAS",
    scenario: "SOLAS is the ship's foremost safety convention, and much of it lands in the engine room. The engineer asks the cadet to explain what SOLAS is and the chapters that most concern the machinery.",
    instructions: [
      "Explain what SOLAS (the International Convention for the Safety of Life at Sea) sets: minimum standards for the construction, equipment and operation of ships for the safety of life.",
      "Name the chapters the engineer meets most: construction with its machinery and electrical installations, fire protection, the life-saving appliances, and the survey and safety-management requirements that the machinery must satisfy.",
      "Explain certificates and surveys: the ship holds valid SOLAS certificates verified by survey, and port State control checks the machinery and its records, so the plant must be kept to standard and documented.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on SOLAS from the machinery side: what it sets (construction, equipment, operation for the safety of life), the chapters that most concern the engine room (machinery and electrical installations, fire protection, life-saving appliances, surveys), and the role of certificates, surveys and port State control of the plant.",
    assessmentCriteria: [
      "The purpose of SOLAS is correct (safety of life: construction, equipment, operation).",
      "The chapters most relevant to the engine room are correctly named (machinery and electrical, fire protection, life-saving, surveys).",
      "The certificate, survey and port State control role over the plant is correct.",
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
    unit: "Convenio MARPOL",
    topic: "Estructura de anexos de MARPOL",
    week: 6,
    taskId: "mn-omi749-w06-marpol-annexes",
    taskTitle: "Explain The Structure Of MARPOL",
    scenario: "MARPOL is the convention against pollution from ships, and the engine room is where much of its compliance is done. The engineer asks the cadet to explain MARPOL as a regulatory framework of annexes.",
    instructions: [
      "Explain MARPOL (the International Convention for the Prevention of Pollution from Ships) as the framework that regulates pollution, organised into annexes, each covering a type of pollutant.",
      "Name the annexes by their subject: Annex I oil, Annex II noxious liquid substances in bulk, Annex III harmful substances in packaged form, Annex IV sewage, Annex V garbage, and Annex VI air pollution.",
      "Explain the framework role, referencing the established practice: the chemistry of oil, SOx and NOx pollution was covered in Química (week 8), and the operational keeping of the Oil Record Book for bilge and oil discharges was covered in Laboratorio de Máquinas (week 7), so here the concern is the regulatory FRAMEWORK (discharge limits, special areas, the required records) that those rest on, not the chemistry or the log-keeping again; note that ballast water is controlled by its own Ballast Water Management Convention (week 2), not by MARPOL.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on MARPOL: the anti-pollution framework organised into annexes (I oil, II noxious liquids, III packaged harmful, IV sewage, V garbage, VI air), with the Química week 8 chemistry and the Laboratorio de Máquinas week 7 Oil Record Book referenced as established (the framework, not the chemistry or the log-keeping), and ballast water noted as its own convention (week 2), not MARPOL.",
    assessmentCriteria: [
      "MARPOL is correctly explained as the anti-pollution framework organised in annexes.",
      "The annexes are correctly matched to their pollutant (oil, noxious liquids, packaged harmful, sewage, garbage, air).",
      "The Química week 8 chemistry and the Laboratorio de Máquinas week 7 Oil Record Book are referenced as established, not re-taught, and ballast water is placed under its own convention (week 2), not MARPOL.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "OMI749",
    subjectName: "Convenios Organización Marítima Internacional I",
    subjectId: "mn-s7-convenios-omi-i",
    unit: "Convenio de Líneas de Carga",
    topic: "Francobordo, marca de línea de carga y zonas",
    week: 7,
    taskId: "mn-omi749-w07-load-line-convention",
    taskTitle: "Explain The Load Line Convention",
    scenario: "The load line on the ship's side sets how deep she may load, and it bounds the deadweight the engineer accounts for in fuel, water and stores. The engineer asks the cadet to explain the Load Line Convention of 1966.",
    instructions: [
      "Explain freeboard: the distance from the waterline to the freeboard deck, the reserve buoyancy that keeps the ship safe, so a minimum freeboard means a maximum permitted draught.",
      "Explain the load line mark (the Plimsoll mark) and the seasonal marks (S, W, T, F and so on) for summer, winter, tropical and fresh water, so the permitted draught changes with the zone and the season.",
      "Explain the purpose: the convention prevents overloading by setting the maximum draught for the conditions, and the marks are assigned by survey and enforced by port State control.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on the Load Line Convention: freeboard as reserve buoyancy (minimum freeboard = maximum draught), the load line mark and the seasonal marks (S/W/T/F) changing with zone and season, and the purpose of preventing overloading, assigned by survey and enforced by port State control.",
    assessmentCriteria: [
      "Freeboard is correctly explained as reserve buoyancy (minimum freeboard = maximum draught).",
      "The load line mark and the seasonal marks are correct (S/W/T/F changing with zone and season).",
      "The anti-overloading purpose and the survey and port State control enforcement are correct.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "OMI749",
    subjectName: "Convenios Organización Marítima Internacional I",
    subjectId: "mn-s7-convenios-omi-i",
    unit: "Convenio de Trabajo Marítimo",
    topic: "MLC 2006: condiciones de trabajo y vida de la gente de mar",
    week: 8,
    taskId: "mn-omi749-w08-mlc-2006",
    taskTitle: "Explain The Maritime Labour Convention",
    scenario: "The MLC protects the rights of the whole crew, engineers included. As the closing task, the engineer asks the cadet to explain the Maritime Labour Convention 2006.",
    instructions: [
      "Explain what the MLC 2006 sets: minimum standards for seafarers' conditions of work and life, so often called the 'fourth pillar' alongside SOLAS, MARPOL and STCW.",
      "Name key areas it covers: minimum age, a seafarer employment agreement, hours of work and rest, wages, accommodation and food, medical care, and repatriation.",
      "Explain enforcement: ships carry a Maritime Labour Certificate and a Declaration of Maritime Labour Compliance, checked by port State control, and seafarers may make a complaint.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on the MLC 2006: minimum standards for seafarers' work and life (the fourth pillar), key areas (minimum age, employment agreement, hours of rest, wages, accommodation, food, medical care, repatriation), and enforcement (Maritime Labour Certificate, DMLC, port State control, complaint procedure).",
    assessmentCriteria: [
      "The purpose of the MLC is correct (seafarers' conditions of work and life; the fourth pillar).",
      "Key areas are correctly named (e.g. hours of rest, wages, accommodation, medical care, repatriation).",
      "Enforcement is correct (Maritime Labour Certificate, DMLC, port State control).",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "OMI749",
    subjectName: "Convenios Organización Marítima Internacional I",
    subjectId: "mn-s7-convenios-omi-i",
    unit: "Reciclaje de buques",
    topic: "Importancia del reciclaje de buques",
    week: 9,
    taskId: "mn-omi749-w09-ship-recycling",
    taskTitle: "Explain The Ship Recycling Convention",
    scenario: "When a ship reaches the end of her life she is recycled, and it must be done safely and cleanly. The engineer asks the cadet to explain the Hong Kong Convention on the safe and environmentally sound recycling of ships.",
    instructions: [
      "Explain why ship recycling is regulated: old ships contain hazardous materials (asbestos, oils, heavy metals, PCBs) and are often broken up on beaches with poor safety, so the convention protects the workers and the environment.",
      "State what the Hong Kong Convention requires in outline: ships are recycled only at authorised facilities working to a safe and environmentally sound standard, under a ship recycling plan.",
      "Explain the engineer's connection: the machinery spaces hold much of the oil, chemicals and hazardous materials, so what the engine department records and where it stores these feeds the ship's hazardous-materials inventory.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on the Ship Recycling (Hong Kong) Convention: why recycling is regulated (hazardous materials and unsafe beaching, protecting workers and the environment), what it requires in outline (authorised facilities, a safe and sound standard, a ship recycling plan), and the engineer's connection (the machinery spaces hold much of the hazardous material).",
    assessmentCriteria: [
      "The reason for regulating recycling is correct (hazardous materials and unsafe practices; protecting workers and the environment).",
      "The convention's requirement is correct in outline (authorised facilities, safe and sound standard, ship recycling plan).",
      "The engineer's connection is sound (the machinery spaces hold much of the hazardous material).",
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
    unit: "Reciclaje de buques",
    topic: "Procedimientos aplicables para el reciclaje de buques",
    week: 10,
    taskId: "mn-omi749-w10-hazmat-inventory",
    taskTitle: "Keep The Inventory Of Hazardous Materials",
    scenario: "Under the recycling convention every ship carries an Inventory of Hazardous Materials, kept current through her life. The engineer asks the cadet to explain the inventory and the procedures for safe recycling, building on week 9.",
    instructions: [
      "Explain the Inventory of Hazardous Materials (IHM): a listed record of the hazardous materials in the ship's structure and equipment (Part I), and later the operational wastes and stores (Parts II and III), so the recycler knows what is aboard.",
      "Explain keeping it current: when equipment or materials are changed, the IHM is updated, and new stores and chemicals brought aboard are checked against it, so it stays accurate through the ship's life.",
      "Explain the recycling procedure in outline: before recycling a ship-specific recycling plan is made from the IHM, the facility is authorised, and the hazardous materials are removed and disposed of safely, with the work checked. Boundary: this is the procedure built on the convention of week 9, not the convention again.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on the Inventory of Hazardous Materials and recycling procedures: the IHM as a listed record (Part I structure and equipment, Parts II and III wastes and stores), keeping it current as materials change and stores are checked against it, and the recycling procedure in outline (a ship-specific plan from the IHM, an authorised facility, safe removal and disposal), building on the convention of week 9.",
    assessmentCriteria: [
      "The IHM is correctly explained (a listed record of hazardous materials in the structure and equipment, and the operational wastes and stores).",
      "Keeping it current is correct (updated as materials change, new stores checked against it).",
      "The recycling procedure is correct in outline (ship-specific plan from the IHM, authorised facility, safe removal and disposal) and builds on week 9.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "OMI749",
    subjectName: "Convenios Organización Marítima Internacional I",
    subjectId: "mn-s7-convenios-omi-i",
    unit: "Pirateria y terrorismo",
    topic: "La OMI frente al terrorismo y la represion de actos ilicitos",
    week: 11,
    taskId: "mn-omi749-w11-maritime-security-isps",
    taskTitle: "Apply The Maritime Security Framework",
    scenario: "After terrorist and unlawful acts against shipping, a security framework was built to protect ships and ports. The engineer asks the cadet to explain the maritime security framework (the ISPS Code and the SUA instruments) and the engineer's part in it.",
    instructions: [
      "Explain the framework: the ISPS Code (under SOLAS) sets security levels, a ship security plan, a ship security officer and ship-shore security coordination, and the SUA instruments make unlawful acts against ships crimes to be prosecuted.",
      "Explain the security levels: level 1 normal, level 2 heightened, level 3 exceptional, with the ship raising its measures (access control, watches, restricted areas) as the level rises.",
      "Explain the engineer's part: controlling access to the machinery spaces and the steering gear and emergency generator, watching for tampering, and following the ship security plan, because the engine department holds spaces critical to the ship's safety. Boundary: piracy self-protection at sea was week 4; here it is the security framework and its legal instruments.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on the maritime security framework: the ISPS Code (security levels, ship security plan and officer, ship-shore coordination) and the SUA instruments making unlawful acts crimes, the three security levels and the measures that rise with them, and the engineer's part (access control to critical machinery spaces, watching for tampering, following the plan), distinct from the piracy self-protection of week 4.",
    assessmentCriteria: [
      "The framework is correct (ISPS Code under SOLAS: security levels, ship security plan and officer, coordination; SUA makes unlawful acts crimes).",
      "The security levels are correct (1 normal, 2 heightened, 3 exceptional, measures rising with the level).",
      "The engineer's part is sound (access control to critical machinery spaces, watching for tampering, following the plan) with the week 4 piracy boundary respected.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "OMI749",
    subjectName: "Convenios Organización Marítima Internacional I",
    subjectId: "mn-s7-convenios-omi-i",
    unit: "Pirateria y terrorismo",
    topic: "La evolucion sobre la libertad de la navegacion",
    week: 12,
    taskId: "mn-omi749-w12-freedom-of-navigation",
    taskTitle: "Explain Freedom Of Navigation And The Law Of The Sea",
    scenario: "As the closing task, the legal framework that lets ships trade across the world's seas underlies everything the engineer does. The engineer asks the cadet to explain the freedom of navigation and the maritime zones under the law of the sea.",
    instructions: [
      "Explain the freedom of navigation: the principle that ships may navigate the seas freely, the basis of world trade, developed over centuries and now set out in the law of the sea (UNCLOS).",
      "Explain the maritime zones in outline: internal waters and the territorial sea under the coastal State (with the right of innocent passage), the exclusive economic zone, and the high seas open to all, so a ship's rights and duties change with the zone.",
      "Explain how it ties the conventions together: freedom of navigation is exercised under the flag State's rules and the IMO conventions (SOLAS, MARPOL, STCW, security), so the freedom comes with the duty to meet those standards, and port and coastal States enforce them. Integrate the subject as the closing overview of the OMI conventions studied.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on freedom of navigation and the law of the sea: the principle of free navigation as the basis of trade (now in UNCLOS), the maritime zones in outline (internal waters and territorial sea with innocent passage, the EEZ, the high seas) and how the ship's rights and duties change with the zone, and how the freedom is exercised under the flag State and the IMO conventions, as a closing overview.",
    assessmentCriteria: [
      "Freedom of navigation is correctly explained (ships navigate the seas freely, the basis of trade, set out in UNCLOS).",
      "The maritime zones are correct in outline (internal waters and territorial sea with innocent passage, EEZ, high seas; rights change with the zone).",
      "The tie to the conventions is sound (freedom exercised under the flag State and the IMO conventions, enforced by port and coastal States), integrating the subject.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "ING744",
    subjectName: "Inglés Marítimo VII",
    subjectId: "mn-s7-ingles-maritimo-vii",
    unit: "Oraciones condicionales",
    topic: "Condicionales en procedimientos y contingencias operativas",
    week: 5,
    taskId: "mn-ing744-w05-conditionals-procedures",
    taskTitle: "Use Conditionals For Procedures And Contingencies",
    scenario: "Machinery procedures and contingency plans are written as conditions and actions. The engineer asks the cadet to use conditional sentences to state what to do if something happens in the plant.",
    instructions: [
      "Use the first conditional for real operational contingencies (if + present, will or imperative): 'if the lube oil pressure drops, stop the engine', 'if the bilge alarm sounds, the duty engineer will be called'.",
      "Use the zero conditional for standing rules and facts that are always true (if + present, present): 'if the cooling water stops, the engine overheats', 'if a fuse blows, the circuit is dead'.",
      "Explain the difference in use: the zero conditional states a rule or a fact that always holds, while the first conditional states a likely future situation and its action; note that this is a different structure from the modal verbs of week 4, which state duty rather than a condition.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English using conditionals for machinery procedures and contingencies: the first conditional for real contingencies (if the LO pressure drops..., if the bilge alarm sounds...), the zero conditional for standing rules and facts, and the difference between them, distinct from the modal verbs of week 4.",
    assessmentCriteria: [
      "The first conditional is correctly used for operational contingencies (if + present, will or imperative).",
      "The zero conditional is correctly used for standing rules and facts (if + present, present).",
      "The difference in use is correct (fact or rule versus likely future action) and distinct from the week 4 modals.",
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
    unit: "Cohesión en el texto",
    topic: "Conectores de cohesión en el reporte escrito",
    week: 6,
    taskId: "mn-ing744-w06-cohesion-connectors",
    taskTitle: "Link A Written Report With Connectors",
    scenario: "An engine-room report that jumps between facts is hard to read. The engineer asks the cadet to link a written report with cohesive connectors so it flows.",
    instructions: [
      "Explain the main connectors by their function: 'however' (contrast), 'therefore' and 'as a result' (consequence), 'in addition' and 'moreover' (adding), and 'firstly / then / finally' (sequence).",
      "Show each in a short sentence from an engine-room report: 'the purifier was cleaned; however, the back-pressure stayed high', 'the bearing was overheating; therefore, the pump was stopped'.",
      "Explain how connectors make a report flow: they show the reader the relationship between the facts (cause, contrast, sequence) instead of leaving a list of disconnected statements.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English linking an engine-room report with connectors: the main connectors by function (however = contrast, therefore / as a result = consequence, in addition / moreover = adding, firstly / then / finally = sequence), each in a report sentence, and how they make the report flow.",
    assessmentCriteria: [
      "The connectors are correctly grouped by function (contrast, consequence, adding, sequence).",
      "Each is correctly used in a report sentence.",
      "The role of connectors in making a report flow (showing the relationships) is explained.",
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
    unit: "El ámbito laboral",
    topic: "El CV marítimo y la entrevista de trabajo",
    week: 7,
    taskId: "mn-ing744-w07-maritime-cv-interview",
    taskTitle: "Write A Maritime CV And Face The Interview",
    scenario: "Getting the job starts with the CV and the interview. The engineer asks the cadet to prepare a marine engineer's CV and answer interview questions in English, building on the work collocations of week 3.",
    instructions: [
      "Set out the sections of a marine engineer's CV: personal details, certificates of competency and STCW courses, sea service (ship and engine types, ranks, dates), and skills, using the work collocations from week 3 (overhaul a pump, take readings, carry out maintenance).",
      "Prepare answers to common interview questions: 'why do you want to work for this company', 'describe your engine-room experience', 'tell me about a time you handled a machinery failure', keeping the answers concrete and honest.",
      "State the register of the interview: professional and clear, giving concrete examples rather than vague claims, because a specific answer is believed and a vague one is not.",
      "Report your CV outline and sample answers in clear engine-room English."
    ],
    deliverable: "A note in English preparing a marine engineer's CV and interview: the CV sections (personal details, certificates and STCW, sea service by ship and engine type / rank / date, skills using the week 3 collocations), answers to common interview questions, and the professional register of concrete examples over vague claims.",
    assessmentCriteria: [
      "The CV sections are correct (personal details, certificates and STCW, sea service, skills) and use the week 3 collocations.",
      "The interview answers are relevant and concrete.",
      "The professional register (specific examples over vague claims) is applied.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "ING744",
    subjectName: "Inglés Marítimo VII",
    subjectId: "mn-s7-ingles-maritimo-vii",
    unit: "Discurso profesional",
    topic: "La presentación técnica oral y la señalización discursiva",
    week: 8,
    taskId: "mn-ing744-w08-technical-presentation",
    taskTitle: "Give A Technical Presentation In English",
    scenario: "As the closing task, the engineer must present a machinery system to the team. The engineer asks the cadet to deliver a short technical presentation using clear discourse signposting.",
    instructions: [
      "Structure the presentation: an introduction that states the system and the plan, a body in ordered parts, and a conclusion that summarises.",
      "Use discourse signposting so the audience can follow: 'firstly / secondly', 'moving on to', 'in other words', and 'to summarise / to conclude', signalling each move.",
      "Explain the delivery: clear and concise, at a steady pace, and inviting questions at the end; note that this is a technical presentation to inform, distinct from the operational engine-room briefing and debriefing of Maritime English V, which give and review orders.",
      "Report the presentation outline in clear engine-room English."
    ],
    deliverable: "A note in English delivering a technical presentation of a machinery system: the structure (introduction with the system and plan, ordered body, summarising conclusion), the discourse signposting (firstly, moving on to, to summarise), and clear steady delivery inviting questions, distinct from the operational briefing and debriefing of Maritime English V.",
    assessmentCriteria: [
      "The presentation is well structured (introduction, ordered body, summarising conclusion).",
      "Discourse signposting is correctly used (firstly, moving on to, to summarise).",
      "The delivery advice is sound and the boundary with the Maritime English V operational briefing and debriefing is respected.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "ING744",
    subjectName: "Inglés Marítimo VII",
    subjectId: "mn-s7-ingles-maritimo-vii",
    unit: "Clausulas relativas",
    topic: "Relative clauses en la descripcion tecnica",
    week: 9,
    taskId: "mn-ing744-w09-relative-clauses",
    taskTitle: "Describe Machinery With Relative Clauses",
    scenario: "A clear technical description defines each part by what it does, which is the work of relative clauses. The engineer asks the cadet to describe machinery components using relative clauses correctly.",
    instructions: [
      "Use defining relative clauses to say which part is meant: 'the valve which controls the fuel supply', 'the pump that feeds the boiler', 'the tank where the sludge is collected'.",
      "Use the right relative pronoun: which or that for things, who for people, where for places, whose for possession, and drop the pronoun where it is the object ('the spare (that) we ordered').",
      "Write three sentences describing real engine-room components with defining relative clauses, so each clearly identifies a part by its function.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English describing machinery with relative clauses: defining clauses that identify a part by its function (the valve which controls..., the pump that feeds...), the correct relative pronouns (which/that, who, where, whose, and dropping the object pronoun), and three example sentences describing real components.",
    assessmentCriteria: [
      "Defining relative clauses correctly identify the parts by function.",
      "The relative pronouns are correct (which/that, who, where, whose; the object pronoun dropped where natural).",
      "The example sentences describe real engine-room components clearly.",
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
    unit: "Phrasal verbs",
    topic: "Phrasal verbs en la operacion de maquinas",
    week: 10,
    taskId: "mn-ing744-w10-phrasal-verbs",
    taskTitle: "Report Engine Operations With Phrasal Verbs",
    scenario: "The engine room runs on phrasal verbs: machinery is started up, shut down, cut out and topped up. The engineer asks the cadet to use technical phrasal verbs correctly in operational reporting.",
    instructions: [
      "Explain the common engine-room phrasal verbs by meaning: start up and shut down (a machine), cut out (stops by itself), build up (pressure rises), run out (a supply is used up), top up (refill), and warm up and cool down.",
      "Show each in a short operational sentence: 'the purifier cut out on high back-pressure', 'the header tank ran low so it was topped up'.",
      "Note the word order with objects: many separate ('shut the pump down' or 'shut down the pump'), but a pronoun goes in the middle ('shut it down', not 'shut down it').",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English using engine-room phrasal verbs: the common ones by meaning (start up, shut down, cut out, build up, run out, top up, warm up, cool down), each in an operational sentence, and the word order with objects and pronouns (shut the pump down / shut it down).",
    assessmentCriteria: [
      "The phrasal verbs are correctly explained by meaning.",
      "Each is correctly used in an operational sentence.",
      "The word order with objects and pronouns is correct (shut it down, not shut down it).",
      "The English reads professionally, not as a grammar exercise."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "ING744",
    subjectName: "Inglés Marítimo VII",
    subjectId: "mn-s7-ingles-maritimo-vii",
    unit: "Oraciones condicionales",
    topic: "Tercer condicional en el analisis de incidentes",
    week: 11,
    taskId: "mn-ing744-w11-third-conditional",
    taskTitle: "Analyse An Incident With The Third Conditional",
    scenario: "After a machinery failure the investigation asks what would have happened if things had been different, which is the work of the third conditional. The engineer asks the cadet to analyse an incident using the third conditional correctly.",
    instructions: [
      "Explain the third conditional: it talks about the unreal past (if + past perfect, would have + past participle), for what did not happen: 'if the alarm had been tested, the failure would have been caught'.",
      "Take a short engine-room incident and write two or three third-conditional sentences drawing the lessons: what would have been avoided if a check had been done, or if a procedure had been followed.",
      "Note the boundary with week 5: the first and zero conditionals of week 5 state real procedures and rules, while the third conditional here reasons about a past that cannot be changed, so it is used to learn from the incident, not to give an order.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English analysing an incident with the third conditional: the form (if + past perfect, would have + past participle) for the unreal past, two or three sentences drawing the lessons from a real incident (what would have been avoided if a check or procedure had been done), and the boundary with the real first and zero conditionals of week 5.",
    assessmentCriteria: [
      "The third conditional is correctly formed (if + past perfect, would have + past participle).",
      "The sentences draw sound lessons from the incident.",
      "The boundary with the real conditionals of week 5 is respected (learning from the past, not giving an order).",
      "The English reads professionally, not as a grammar exercise."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "ING744",
    subjectName: "Inglés Marítimo VII",
    subjectId: "mn-s7-ingles-maritimo-vii",
    unit: "Sistema de verbos",
    topic: "Presente perfecto y futuro perfecto en el reporte de mantenimiento",
    week: 12,
    taskId: "mn-ing744-w12-perfect-tenses-maintenance",
    taskTitle: "Report Maintenance Status In The Perfect Tenses",
    scenario: "As the closing task, a maintenance report must say what has been done and what will have been done by a deadline, which needs the perfect tenses. The engineer asks the cadet to report maintenance status using the present perfect and the future perfect correctly.",
    instructions: [
      "Use the present perfect for work completed with a present result: 'the pump has been overhauled', 'the filters have been renewed', and the present perfect continuous for work still going on: 'we have been running the trial for two hours'.",
      "Use the future perfect for work that will be finished by a point in time: 'by 1600 the cooler will have been reassembled', 'the overhaul will have been completed before departure'.",
      "Write a short maintenance status report mixing the two: what has been done, what is in progress, and what will have been done by a stated time, so the reader knows the exact state. Integrate the subject: this is the professional written report the whole subject has built toward.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English reporting maintenance status in the perfect tenses: the present perfect for completed work with a present result (the pump has been overhauled) and the continuous for work in progress, the future perfect for work finished by a deadline (by 1600 the cooler will have been reassembled), and a short status report mixing them so the reader knows the exact state.",
    assessmentCriteria: [
      "The present perfect (and continuous) is correctly used for completed and ongoing work.",
      "The future perfect is correctly used for work finished by a stated time.",
      "The status report is realistic and gives the exact state (done, in progress, will have been done).",
      "The English reads professionally, not as a grammar exercise."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "C0129",
    subjectName: "Familiarización con buques tanque",
    subjectId: "mn-s7-familiarizacion-buques-tanque",
    unit: "Prevención de incendios y explosiones",
    topic: "El sistema de gas inerte (IGS) en petroleros",
    week: 5,
    taskId: "mn-c0129-w05-inert-gas-system",
    taskTitle: "Operate The Inert Gas Plant On A Tanker",
    scenario: "On an oil tanker the engineer runs the inert gas plant that keeps the cargo tanks safe. The engineer asks the cadet to explain operating the inert gas system: producing the gas, controlling its oxygen content, and delivering it to the tanks.",
    instructions: [
      "Explain producing the inert gas: it comes from the flue gas of the boiler (or from an inert gas generator), which is then cooled and cleaned in the scrubber before the blowers deliver it, because the raw flue gas is hot and dirty.",
      "Explain controlling the oxygen content: the oxygen analyser checks that the gas leaving the plant is low in oxygen (well below the level that supports combustion), and the plant is set to hold it there, because inert gas that is too rich in oxygen does not make the tank safe.",
      "Explain delivering it and the safety devices: the blowers hold the tanks under a slight positive pressure, and the deck water seal and the non-return valve stop cargo gas flowing back toward the machinery space.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on operating the inert gas plant: producing the gas (boiler flue gas or generator, cooled and cleaned in the scrubber, delivered by the blowers), controlling the oxygen content (the analyser confirms it stays low, below the level that supports combustion), and delivering it under positive pressure with the deck water seal and non-return valve stopping back-flow to the machinery space.",
    assessmentCriteria: [
      "Producing the gas is correct (flue gas or generator, scrubbed and cooled, delivered by the blowers).",
      "Controlling the oxygen content is correct (the analyser confirms low oxygen, below the combustion-supporting level; too-rich gas does not make the tank safe).",
      "Delivery and the safety devices are correct (positive pressure, deck water seal and non-return valve against back-flow).",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "C0129",
    subjectName: "Familiarización con buques tanque",
    subjectId: "mn-s7-familiarizacion-buques-tanque",
    unit: "Operaciones de la carga",
    topic: "El procedimiento operativo de medición de atmósferas en tanques",
    week: 6,
    taskId: "mn-c0129-w06-tank-atmosphere-measurement",
    taskTitle: "Measure The Atmosphere In Cargo Tanks",
    scenario: "Before work on a cargo tank the atmosphere must be measured correctly. The engineer asks the cadet to carry out the operational procedure for measuring the tank atmosphere.",
    instructions: [
      "State what is measured and with what: oxygen with an oxygen meter, flammable vapour (hydrocarbons) with the correct gas meter, and toxic gases where relevant, using calibrated instruments; the chemistry of these atmospheres was covered in Química (week 7) and is used here as established, not re-explained.",
      "State the operational sequence and why: measure in the order oxygen first, then flammable, then toxic, and take readings at several levels and positions in the tank because the gases layer, so a single reading is not enough; this applies the measuring order established in Química (week 7).",
      "State the interpretation for the job: for an inerted tank the oxygen is kept low, but for entry or hot work the tank must be gas-freed and tested to a safe atmosphere, and the ship's procedure and the permit govern.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on measuring the cargo-tank atmosphere: what and with what (oxygen, flammable, toxic on calibrated meters, the chemistry from Química week 7 used as established), the operational sequence (oxygen then flammable then toxic, readings at several levels and positions because the gases layer), and the interpretation for the job (low oxygen when inerted, gas-freed and safe for entry or hot work under the permit).",
    assessmentCriteria: [
      "What is measured and with what is correct (oxygen, flammable, toxic on calibrated meters) with the Química week 7 chemistry referenced, not re-taught.",
      "The operational sequence is correct (oxygen then flammable then toxic, several levels and positions because the gases layer), applying the week 7 measuring order.",
      "The interpretation for the job is correct (low oxygen when inerted; gas-freed and safe for entry or hot work under the permit).",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "C0129",
    subjectName: "Familiarización con buques tanque",
    subjectId: "mn-s7-familiarizacion-buques-tanque",
    unit: "Operaciones de la carga",
    topic: "El lavado con crudo (COW) y la electricidad estática",
    week: 7,
    taskId: "mn-c0129-w07-crude-oil-washing",
    taskTitle: "Explain Crude Oil Washing And Its Precautions",
    scenario: "On a crude oil tanker the tanks are washed with the cargo, and the engineer supports the operation from the plant. The engineer asks the cadet to explain crude oil washing (COW) and its precautions.",
    instructions: [
      "Explain the purpose of COW: washing the cargo tanks with jets of the crude oil during discharge dissolves and removes the clingage (the oil that sticks to the structure), so more cargo is delivered and less residue and slop remain.",
      "Explain the environmental benefit: because the tanks are cleaned with the cargo, far less oily water is generated than washing with water, reducing pollution (with MARPOL as the framework, covered elsewhere, not re-taught here).",
      "State the static electricity precaution: COW is done only in an inerted tank with the oxygen kept low, because the oil jets and mist can build up a static charge and, in an atmosphere with enough oxygen, a static spark could ignite it, so the inert gas condition of week 5 must be confirmed first.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on crude oil washing: the purpose (wash with the crude during discharge to remove clingage, deliver more cargo, less residue), the environmental benefit (less oily water than water washing), and the static electricity precaution (only in an inerted, low-oxygen tank, because the oil mist builds a static charge that could ignite otherwise), confirming the week 5 inert gas condition.",
    assessmentCriteria: [
      "The purpose of COW is correct (wash with the crude during discharge, remove clingage, more cargo, less residue).",
      "The environmental benefit is correct (less oily water than water washing).",
      "The static electricity precaution is correct (only in an inerted, low-oxygen tank because the oil mist builds a static charge that could ignite), linked to the week 5 inert gas condition.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "C0129",
    subjectName: "Familiarización con buques tanque",
    subjectId: "mn-s7-familiarizacion-buques-tanque",
    unit: "Operaciones de la carga",
    topic: "La transferencia buque-terminal y el ship/shore safety checklist",
    week: 8,
    taskId: "mn-c0129-w08-ship-shore-transfer",
    taskTitle: "Run A Safe Ship-Shore Transfer",
    scenario: "As the closing task, cargo must be transferred safely between the ship and the terminal, watched from the cargo control room. The engineer asks the cadet to explain the ship-shore transfer and the safety checklist.",
    instructions: [
      "Explain the ship/shore safety checklist: the ship and the terminal agree and check the safety items together before transfer (moorings tight, cargo hoses or arms connected and tested, communications agreed, the emergency stop understood, no naked lights, scuppers plugged and drip trays in place).",
      "Explain the agreed transfer parameters: the maximum rate, the topping-off procedure near the end, and the signals to slow down and to stop, so both sides act together.",
      "Explain the continuous watch during transfer: monitoring the pressure, watching for leaks and overflows, and keeping communication with the terminal, ready to stop immediately if anything goes wrong; integrate the subject, since the tank is kept inert (week 5), the atmosphere is known (week 6), and the operation is governed by the checklist and the ship's procedures.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on the ship-shore transfer: the ship/shore safety checklist agreed and checked together (moorings, hoses or arms, communications, emergency stop, no naked lights, scuppers plugged), the agreed parameters (rate, topping off, slow and stop signals), and the continuous watch (pressure, leaks and overflows, communication, ready to stop), integrating the inert gas and atmosphere control of weeks 5 and 6.",
    assessmentCriteria: [
      "The ship/shore safety checklist is correct (moorings, hoses or arms, communications, emergency stop, no naked lights, scuppers plugged).",
      "The agreed transfer parameters are correct (rate, topping off, slow and stop signals).",
      "The continuous watch is correct (pressure, leaks and overflows, communication, ready to stop) and the subject is integrated (inert tank week 5, atmosphere week 6).",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "C0129",
    subjectName: "Familiarización con buques tanque",
    subjectId: "mn-s7-familiarizacion-buques-tanque",
    unit: "Toxicidad y otros peligros",
    topic: "Conceptos y efectos de la toxicidad y peligro para la salud",
    week: 9,
    taskId: "mn-c0129-w09-cargo-toxicity-health",
    taskTitle: "Recognise The Health Hazards Of Cargo Vapours",
    scenario: "The vapours of a tanker's cargo are toxic and can harm anyone who breathes them. The engineer asks the cadet to explain the toxicity and health hazards of the cargo and how a person is protected.",
    instructions: [
      "Explain how the cargo harms health: hydrocarbon and chemical vapours are toxic and some are poisonous even in small amounts, causing dizziness, unconsciousness or lasting harm, and they also displace oxygen.",
      "Explain exposure limits in concept: there is a level below which short exposure is tolerated and above which it is dangerous, so the atmosphere is measured against these limits before and during work (using the meters of week 6).",
      "Explain protecting the person: keep out of the vapour, ventilate, wear breathing apparatus where the atmosphere is not safe (week 2), and limit the time of exposure, so no one is overcome. Boundary: week 1 was the fire hazard of the cargo; here it is the toxic and health hazard.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on the health hazards of cargo vapours: how they harm (toxic and poisonous vapours causing dizziness, unconsciousness or lasting harm, and displacing oxygen), the exposure limits in concept (a tolerated level and a dangerous level, measured with the meters of week 6), and protecting the person (keep out, ventilate, breathing apparatus of week 2, limit the exposure time), distinct from the fire hazard of week 1.",
    assessmentCriteria: [
      "The health harm is correct (toxic and poisonous vapours, effects, and oxygen displacement).",
      "The exposure limits are correct in concept (a tolerated and a dangerous level, measured against them).",
      "Protecting the person is correct (keep out, ventilate, breathing apparatus, limit the time) with the week 1 fire-hazard boundary respected.",
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
    unit: "Caracteristicas de la carga",
    topic: "Hoja de datos de seguridad de la carga",
    week: 10,
    taskId: "mn-c0129-w10-safety-data-sheet",
    taskTitle: "Use The Cargo Safety Data Sheet",
    scenario: "Every cargo comes with a Safety Data Sheet that tells the crew how to handle it safely. The engineer asks the cadet to explain reading and using the cargo Safety Data Sheet before handling.",
    instructions: [
      "Explain what the Safety Data Sheet (SDS) is: a document for the cargo giving its hazards, its properties, and the precautions and emergency actions, so the crew knows what they are handling before they start.",
      "State the key information the engineer looks for: the flammability and toxicity, the personal protection needed, the first-aid and spill actions, and the firefighting media, so the response is prepared in advance.",
      "Explain using it: read the SDS before the operation, brief the precautions from it, and keep it available, because the right protection and emergency action come from it. This applies to the toxicity and fire hazards of weeks 1 and 9.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English on the cargo Safety Data Sheet: what it is (a document giving the cargo's hazards, properties, precautions and emergency actions), the key information the engineer looks for (flammability and toxicity, protection, first aid and spill actions, firefighting media), and using it (read and brief before the operation, kept available), applying the hazards of weeks 1 and 9.",
    assessmentCriteria: [
      "What the SDS is is correct (the cargo's hazards, properties, precautions and emergency actions).",
      "The key information is correctly identified (flammability and toxicity, protection, first aid and spill, firefighting media).",
      "Using it is correct (read and brief before the operation, kept available) linked to the hazards of weeks 1 and 9.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "C0129",
    subjectName: "Familiarización con buques tanque",
    subjectId: "mn-s7-familiarizacion-buques-tanque",
    unit: "Operaciones de emergencia",
    topic: "Alarmas, estructura organizacional y procedimiento de emergencia",
    week: 11,
    taskId: "mn-c0129-w11-cargo-emergency-response",
    taskTitle: "Respond To A Cargo Emergency On A Tanker",
    scenario: "A cargo leak and gas release is reported on deck, and the whole ship must respond. The engineer asks the cadet to explain the emergency response: the alarm, the organisation, and the procedure.",
    instructions: [
      "Explain raising the alarm and the response organisation: the emergency alarm is sounded and the crew muster to their emergency stations under the ship's emergency organisation (the command team, the emergency party, the support team and the engine team), so everyone knows their role.",
      "Explain the immediate actions: stop the cargo operation and the sources of ignition, close down as the procedure requires, start boundary cooling or gas dispersal as ordered, and account for all persons.",
      "Explain the engine department's part: the engineer provides the fire and cooling pumps, the inert gas and the power for the response, and stands ready to shut down or isolate systems on the command team's order. Integrate the subject: this brings together the fire hazard (week 1), the SOPEP (week 3) and the safety systems.",
      "Report the response in clear engine-room English."
    ],
    deliverable: "A note in English on responding to a cargo emergency: raising the alarm and mustering under the ship's emergency organisation (command team, emergency party, support team, engine team), the immediate actions (stop the cargo and ignition sources, close down, boundary cooling or gas dispersal, account for persons), and the engine department's part (fire and cooling pumps, inert gas, power, ready to shut down on order), integrating the fire hazard of week 1 and the SOPEP of week 3.",
    assessmentCriteria: [
      "The alarm and the emergency organisation are correct (mustered to stations under the command team, emergency party, support team and engine team).",
      "The immediate actions are correct (stop the cargo and ignition sources, close down, boundary cooling or gas dispersal, account for persons).",
      "The engine department's part is correct (fire and cooling pumps, inert gas, power, ready to shut down on order) integrating the fire hazard of week 1 and the SOPEP of week 3.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "C0129",
    subjectName: "Familiarización con buques tanque",
    subjectId: "mn-s7-familiarizacion-buques-tanque",
    unit: "Equipos para la carga",
    topic: "Equipo de manipulacion de la carga en petroleros, quimiqueros y gaseros",
    week: 12,
    taskId: "mn-c0129-w12-tanker-cargo-equipment",
    taskTitle: "Compare The Cargo Equipment Of Oil, Chemical And Gas Tankers",
    scenario: "As the closing task, the three kinds of tanker handle their cargo with different equipment, and the engineer supports it all. The engineer asks the cadet to compare the cargo-handling equipment of oil, chemical and gas tankers.",
    instructions: [
      "Explain the oil (crude and product) tanker's equipment: large cargo pumps and pipelines, tank heating for heavy cargoes, the inert gas system (week 5) and crude oil washing (week 7), sized to move large volumes.",
      "Explain the chemical tanker's equipment: many segregated tanks with their own pumps (often deepwell pumps) and separate lines to keep cargoes apart, coated or stainless tanks for aggressive cargoes, and careful compatibility control.",
      "Explain the gas (LPG/LNG) tanker's equipment: pressurised or refrigerated tanks, compressors and reliquefaction or boil-off handling, and strict temperature and pressure control, because the cargo is carried as a liquefied gas. Integrate the subject as the closing comparison across the tanker types.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English comparing the cargo equipment of the three tanker types: the oil tanker (large pumps and pipelines, tank heating, inert gas of week 5 and crude oil washing of week 7), the chemical tanker (segregated tanks with their own pumps and lines, coated or stainless tanks, compatibility control), and the gas tanker (pressurised or refrigerated tanks, compressors and reliquefaction or boil-off handling, strict temperature and pressure control), as the closing comparison.",
    assessmentCriteria: [
      "The oil tanker's equipment is correct (large pumps and pipelines, tank heating, inert gas, crude oil washing).",
      "The chemical tanker's equipment is correct (segregated tanks with own pumps and lines, coated or stainless tanks, compatibility control).",
      "The gas tanker's equipment is correct (pressurised or refrigerated tanks, compressors and reliquefaction or boil-off handling, temperature and pressure control), integrating the subject.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "C0131",
    subjectName: "Familiarización con buque de pasaje de Transbordo Rodado",
    subjectId: "mn-s7-familiarizacion-buque-pasaje-roro",
    unit: "Seguridad de la carga rodada",
    topic: "El trincado de vehículos contra el movimiento del buque",
    week: 5,
    taskId: "mn-c0131-w05-vehicle-lashing",
    taskTitle: "Lash Vehicles On The Ro-Ro Deck",
    scenario: "On a ro-ro passenger ship the engineer must understand how the rolling cargo is secured. The officer asks the cadet to explain how vehicles are lashed against the ship's movement.",
    instructions: [
      "Explain why vehicles are lashed: the ship rolls, pitches and heaves, and an unsecured vehicle slides and topples, damaging others and endangering stability, so each is secured to the deck.",
      "Explain the lashing: web or chain lashings from the vehicle's lashing points to the deck securing points (the elephant feet or cloverleaf sockets), tensioned, at angles that resist both fore-and-aft and athwartships movement.",
      "Explain the checks: the number and strength of the lashings suit the weight of the vehicle and the expected weather, the handbrake is on and it is left in gear, and the lashings are checked and re-tensioned during the voyage, especially before heavy weather.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English on lashing vehicles: why they are secured (the ship's motion slides and topples an unsecured vehicle, endangering others and stability), the lashings (web or chain from the vehicle to the deck sockets, tensioned, resisting fore-and-aft and athwartships), and the checks (lashings suit weight and weather, handbrake on and in gear, re-tensioned before heavy weather).",
    assessmentCriteria: [
      "The reason for lashing is correct (the ship's motion slides and topples an unsecured vehicle, danger to others and stability).",
      "The lashing is correct (web or chain from the vehicle to the deck sockets, tensioned, resisting fore-and-aft and athwartships).",
      "The checks are correct (lashings suit weight and weather, handbrake on and in gear, re-tensioned before heavy weather).",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "C0131",
    subjectName: "Familiarización con buque de pasaje de Transbordo Rodado",
    subjectId: "mn-s7-familiarizacion-buque-pasaje-roro",
    unit: "Operaciones de carga rodada",
    topic: "Secuencia y seguridad de la carga y descarga por rampa",
    week: 6,
    taskId: "mn-c0131-w06-ramp-operations",
    taskTitle: "Run Safe Ramp Operations",
    scenario: "Loading and discharging a ro-ro ship is done over the ramps, with the ventilation and services the engineer runs. The officer asks the cadet to explain the sequence and the safety of ramp operations.",
    instructions: [
      "Explain the loading sequence: vehicles driven aboard in a planned order that keeps the ship in trim and balanced as she loads, following the marshalling and the plan, not at random.",
      "Explain the traffic control and safety: controlling the flow and speed of the vehicles, marshallers directing, pedestrians kept apart from the moving vehicles, and the ventilation managed for the exhaust. Boundary: the maintenance of the doors and ramps themselves was covered in week 1; here the concern is the loading and discharge operation over them.",
      "Explain the checks before sailing: the ramps and doors closed and secured, the vehicles lashed (week 5), and the deck ready, before the ship goes to sea.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English on ramp operations: the planned loading sequence keeping the ship in trim, the traffic control and safety (flow and speed, marshallers, pedestrians apart, exhaust ventilation), and the checks before sailing (ramps and doors closed and secured, vehicles lashed), distinct from the week 1 maintenance of the doors and ramps.",
    assessmentCriteria: [
      "The loading sequence is correct (planned order keeping the ship in trim, following the plan).",
      "The traffic control and safety are correct (flow and speed, marshallers, pedestrians apart, exhaust ventilation) with the week 1 maintenance boundary respected.",
      "The pre-sailing checks are correct (ramps and doors secured, vehicles lashed).",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "C0131",
    subjectName: "Familiarización con buque de pasaje de Transbordo Rodado",
    subjectId: "mn-s7-familiarizacion-buque-pasaje-roro",
    unit: "Emergencias en RoRo",
    topic: "Particularidades del incendio en la cubierta de vehículos",
    week: 7,
    taskId: "mn-c0131-w07-vehicle-deck-fire",
    taskTitle: "Face A Fire On The Vehicle Deck",
    scenario: "A fire on the open vehicle deck spreads fast, and the engineer runs the systems that fight it. The officer asks the cadet to explain the ro-ro particularities of a vehicle-deck fire: detection, the drencher and the danger of the open space.",
    instructions: [
      "Explain the danger of the continuous open deck: a ro-ro vehicle deck is one long open space with fuel in the vehicles, so a fire spreads quickly from vehicle to vehicle with little to stop it.",
      "Explain the detection and the drencher system: the deck is covered by fire detection and by a drencher (deluge) system that sprays large amounts of water over the vehicles to cool and control the fire, and the engineer knows how it is started and supplied.",
      "Explain the containment: closing the ramps and doors and stopping the ventilation to limit the air to the fire, and accounting for people. Boundary: the actual firefighting techniques and teams are the fire-fighting subject (Semester III); here the concern is the ro-ro particularities of detection, the drencher and the open-space danger.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English on a vehicle-deck fire: the danger of the continuous open deck with vehicle fuel (fast spread), the detection and the drencher or deluge system cooling the vehicles, and the containment (close ramps and doors, stop ventilation, account for people), distinct from the Semester III fire-fighting subject's techniques and teams.",
    assessmentCriteria: [
      "The open-space danger is correct (one continuous deck with vehicle fuel, fast spread).",
      "The detection and the drencher or deluge system are correctly explained (cool and control with water, the engineer knows how it starts and is supplied).",
      "The containment is correct (close ramps and doors, stop ventilation, account for people) with the Semester III fire-fighting boundary respected.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "C0131",
    subjectName: "Familiarización con buque de pasaje de Transbordo Rodado",
    subjectId: "mn-s7-familiarizacion-buque-pasaje-roro",
    unit: "Emergencias en RoRo",
    topic: "Inundación de la cubierta de vehículos y la respuesta integrada",
    week: 8,
    taskId: "mn-c0131-w08-vehicle-deck-flooding",
    taskTitle: "Respond To Vehicle-Deck Flooding",
    scenario: "Water on the open vehicle deck of a ro-ro ship is one of the gravest dangers she faces, and the engineer runs the dewatering. As the closing task, the officer asks the cadet to explain the danger and the integrated response to vehicle-deck flooding.",
    instructions: [
      "Explain why water on the vehicle deck is so dangerous: the deck is wide and open, so the water forms a large free surface that surges to the low side as the ship heels, and this free surface effect can capsize the ship rapidly (the free surface effect was covered in Estabilidad del Buque (week 3) and is used here, not re-explained).",
      "State the sources and detection: water from a bow or stern door leak, from the firefighting drencher, or from damage, detected by level alarms and by watching the deck, so it is caught early.",
      "Explain the integrated response: stop the source if possible, drain the water overboard through the freeing ports and scuppers (and the deck drainage system) so it does not accumulate, reduce the heeling, and be ready to muster and evacuate the passengers if the ship's stability is threatened.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English on vehicle-deck flooding: why it is so dangerous (a wide open deck gives a large free surface that surges to the low side and can capsize the ship, using the Estabilidad del Buque week 3 free surface effect as established), the sources and detection (door leak, drencher, damage; level alarms), and the integrated response (stop the source, drain through the freeing ports and scuppers, reduce the heeling, ready to evacuate).",
    assessmentCriteria: [
      "The danger is correctly explained (a wide open deck gives a large free surface surging to the low side, capsize risk) using the Estabilidad del Buque week 3 free surface effect as established, not re-taught.",
      "The sources and detection are correct (door leak, drencher, damage; level alarms and watching).",
      "The integrated response is correct (stop the source, drain through the freeing ports and scuppers, reduce the heeling, ready to muster and evacuate).",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "C0131",
    subjectName: "Familiarización con buque de pasaje de Transbordo Rodado",
    subjectId: "mn-s7-familiarizacion-buque-pasaje-roro",
    unit: "Formacion en control de multitudes",
    topic: "Procedimientos de reunion y asistencia a los puestos de reunion",
    week: 9,
    taskId: "mn-c0131-w09-crowd-management-muster",
    taskTitle: "Guide Passengers To The Muster Stations",
    scenario: "In an emergency on a ro-ro passenger ship hundreds of passengers must be moved calmly to the muster stations. The officer asks the cadet to explain crowd management and the muster procedures.",
    instructions: [
      "Explain the muster procedure: on the alarm and the order, the crew direct the passengers to their muster stations by the marked escape routes, where they are counted and prepared.",
      "Explain controlling the crowd: give clear firm directions, keep people moving and prevent bottlenecks and pushing, and pay attention to those who need help (children, elderly, disabled and injured).",
      "Explain the crew's positions and role: crew posted at stairways, corners and doors to guide the flow and keep the routes clear, so a large crowd moves safely and without panic. Boundary: week 3 was communicating with the passengers; here it is the crowd control and the muster.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English on crowd management and muster: the muster procedure (on the order, passengers directed to the muster stations by the escape routes and counted), controlling the crowd (clear firm directions, no bottlenecks or pushing, help for those who need it), and the crew's positions guiding the flow, distinct from the passenger communication of week 3.",
    assessmentCriteria: [
      "The muster procedure is correct (passengers directed to the muster stations by the escape routes and counted).",
      "Controlling the crowd is correct (clear firm directions, no bottlenecks or pushing, help for the vulnerable).",
      "The crew's positions and role are correct (posted to guide the flow and keep routes clear) with the week 3 communication boundary respected.",
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
    unit: "Formacion sobre gestion de emergencias y comportamiento humano",
    topic: "Demostracion a los pasajeros del uso de los dispositivos salvavidas",
    week: 10,
    taskId: "mn-c0131-w10-lifejacket-demonstration",
    taskTitle: "Demonstrate Lifejacket Use To Passengers",
    scenario: "Passengers who cannot use a lifejacket are in danger, so the crew must show them clearly. The officer asks the cadet to explain demonstrating the use of lifejackets to passengers.",
    instructions: [
      "Explain what to demonstrate: where the lifejacket is stowed, how to put it on the right way, fasten and tighten it, and any light and whistle, shown step by step so a passenger can copy it.",
      "Explain doing it clearly: show slowly with clear words and actions, have passengers try their own, and check that children's and infants' lifejackets are fitted, because a lifejacket worn wrong can fail or ride up.",
      "Explain when and where: at the safety briefing or muster, so passengers know before an emergency, not during one. Boundary: this is the life-saving-appliance demonstration, distinct from the emergency communication of week 3 and the crowd muster of week 9.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English on demonstrating lifejacket use: what to show (stowage, putting it on correctly, fasten and tighten, light and whistle, step by step), doing it clearly (slow clear words and actions, passengers try their own, children and infants fitted), and when and where (at the briefing or muster, before an emergency), distinct from the communication of week 3 and the muster of week 9.",
    assessmentCriteria: [
      "What to demonstrate is correct (stowage, correct donning, fastening, light and whistle, step by step).",
      "Doing it clearly is correct (slow clear demonstration, passengers try, children and infants fitted).",
      "When and where is correct (at the briefing or muster, before an emergency) with the week 3 and week 9 boundary respected.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "C0131",
    subjectName: "Familiarización con buque de pasaje de Transbordo Rodado",
    subjectId: "mn-s7-familiarizacion-buque-pasaje-roro",
    unit: "Formacion sobre seguridad de los pasajeros, la carga e integridad del casco",
    topic: "Precauciones para el transporte de mercancias peligrosas en RoRo",
    week: 11,
    taskId: "mn-c0131-w11-dangerous-goods-roro",
    taskTitle: "Handle Dangerous Goods On The Ro-Ro Deck",
    scenario: "A ro-ro ship carries vehicles and units that may contain dangerous goods, close to passengers. The officer asks the cadet to explain the special precautions for dangerous goods on a ro-ro passenger ship.",
    instructions: [
      "Explain the risk and the rule: dangerous goods (fuels, gases, chemicals) on the vehicle deck near passengers must be declared, documented and carried under the IMDG Code rules for packing, marking and stowage.",
      "Explain the stowage and segregation: dangerous goods stowed in their permitted positions, segregated from incompatible goods and from ignition sources, secured against the ship's motion, and their location known.",
      "Explain the precautions in service: ventilation kept running, no ignition sources, the goods monitored, and the emergency information (from the IMDG Code and the SDS) ready in case of a leak or fire. Boundary: general lashing was week 5 and the vehicle-deck fire week 7; here it is the dangerous-goods precautions.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English on dangerous goods on a ro-ro ship: the risk and rule (declared, documented and carried under the IMDG Code near passengers), the stowage and segregation (permitted positions, segregated from incompatible goods and ignition, secured, location known), and the precautions in service (ventilation running, no ignition, monitored, emergency information ready), distinct from the lashing of week 5 and the fire of week 7.",
    assessmentCriteria: [
      "The risk and rule are correct (declared, documented, carried under the IMDG Code).",
      "The stowage and segregation are correct (permitted positions, segregated from incompatible goods and ignition, secured, location known).",
      "The in-service precautions are correct (ventilation running, no ignition, monitored, emergency information ready) with the week 5 and week 7 boundary respected.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "C0131",
    subjectName: "Familiarización con buque de pasaje de Transbordo Rodado",
    subjectId: "mn-s7-familiarizacion-buque-pasaje-roro",
    unit: "Formacion sobre seguridad de los pasajeros, la carga e integridad del casco",
    topic: "Apertura, cierre y sujecion de las aberturas del casco y estanqueidad",
    week: 12,
    taskId: "mn-c0131-w12-hull-openings-watertight",
    taskTitle: "Secure The Hull Openings And Verify Watertight Integrity",
    scenario: "As the closing task, before a ro-ro ship goes to sea every hull opening must be shut and secured and the watertight integrity confirmed. The officer asks the cadet to explain operating and securing the hull openings and verifying the watertight integrity.",
    instructions: [
      "Explain the hull openings and their operation: the bow and stern doors and ramps, the side doors and the watertight doors are closed and secured in the correct sequence before sea, using their hydraulics and locking devices.",
      "Explain confirming they are secured: the closed-and-secured position confirmed by the indicators and where needed by eye, and any door left open or unsecured is a direct threat to the watertight integrity, so it is reported and corrected before sailing.",
      "Explain the watertight integrity and its limits: the closed openings and the watertight subdivision keep water out and confine any flooding, and the operational limits on the doors (the bow doors kept shut at sea) are observed. Integrate the subject: this ties the door maintenance of week 1, the ramp operations of week 6 and the flooding response of week 8.",
      "Report the check in clear maritime English."
    ],
    deliverable: "A note in English on the hull openings and watertight integrity: operating and securing the bow and stern doors and ramps, side doors and watertight doors in sequence before sea; confirming the secured position by indicators and by eye and reporting any opening left unsecured; and the watertight integrity and its operational limits (bow doors shut at sea), integrating the door maintenance of week 1, the ramp operations of week 6 and the flooding response of week 8.",
    assessmentCriteria: [
      "The hull openings and their operation are correct (bow and stern doors and ramps, side and watertight doors closed and secured in sequence before sea).",
      "Confirming the secured state is correct (indicators and eye check, any unsecured opening reported and corrected).",
      "The watertight integrity and its limits are correct (openings and subdivision keep water out, bow doors shut at sea) integrating weeks 1, 6 and 8.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "REF746",
    subjectName: "Refrigeración II",
    subjectId: "mn-s7-refrigeracion-ii",
    unit: "Controles del ciclo básico de refrigeración",
    topic: "Controles de operación y de seguridad del ciclo de refrigeración",
    week: 1,
    taskId: "mn-ref746-w01-identify-cycle-controls",
    taskTitle: "Identify The Controls Of The Refrigeration Cycle",
    scenario: "During familiarization with the provision refrigeration plant, the engineer asks the cadet to point out the operation and safety controls of the basic refrigeration cycle.",
    instructions: [
      "Name the main operation controls of the refrigeration cycle (e.g. thermostat, pressure controls).",
      "Name the main safety controls (e.g. high-pressure cut-out, low-pressure cut-out).",
      "State the difference between an operation control and a safety control.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English listing the operation and safety controls of the refrigeration cycle and the difference between them.",
    assessmentCriteria: [
      "Operation controls are named correctly.",
      "Safety controls are named correctly.",
      "The operation/safety distinction is clear.",
      "The note is clear and in correct engine-room English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "REF746",
    subjectName: "Refrigeración II",
    subjectId: "mn-s7-refrigeracion-ii",
    unit: "Controles del ciclo básico de refrigeración",
    topic: "Tipos de controles y sus principios de funcionamiento",
    week: 2,
    taskId: "mn-ref746-w02-explain-control-operation",
    taskTitle: "Explain How A Refrigeration Control Works",
    scenario: "The provision room temperature is drifting. The engineer asks the cadet to explain how the thermostatic and pressure controls act to keep the cycle within limits.",
    instructions: [
      "Explain the working principle of the thermostatic control.",
      "Explain the working principle of a pressure control (high or low side).",
      "State what the control does when its set point is reached.",
      "Report the explanation in clear engine-room English."
    ],
    deliverable: "A note in English explaining how a thermostatic control and a pressure control work and what they do at their set point.",
    assessmentCriteria: [
      "The thermostatic principle is correct.",
      "The pressure control principle is correct.",
      "The set-point action is explained correctly.",
      "The explanation is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "REF746",
    subjectName: "Refrigeración II",
    subjectId: "mn-s7-refrigeracion-ii",
    unit: "Tuberías y accesorios de refrigeración",
    topic: "Materiales de tuberías y accesorios según el refrigerante",
    week: 3,
    taskId: "mn-ref746-w03-match-pipe-materials",
    taskTitle: "Match Pipe And Fitting Materials To The Refrigerant",
    scenario: "A section of refrigeration pipework must be renewed. The engineer asks the cadet to confirm the pipe and fitting materials are compatible with the refrigerant in use.",
    instructions: [
      "State which pipe materials are commonly used in refrigeration systems.",
      "Explain why the refrigerant type affects the choice of material (e.g. ammonia vs. halocarbon).",
      "Identify one material that must NOT be used with a given refrigerant and why.",
      "Report the material check in clear engine-room English."
    ],
    deliverable: "A note in English matching pipe and fitting materials to the refrigerant, including one incompatible material to avoid.",
    assessmentCriteria: [
      "Pipe materials are named correctly.",
      "The refrigerant/material link is explained correctly.",
      "The incompatible material is identified with a valid reason.",
      "The note is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "REF746",
    subjectName: "Refrigeración II",
    subjectId: "mn-s7-refrigeracion-ii",
    unit: "Tuberías y accesorios de refrigeración",
    topic: "Selección del refrigerante adecuado",
    week: 4,
    taskId: "mn-ref746-w04-select-refrigerant",
    taskTitle: "Select The Correct Refrigerant For The Plant",
    scenario: "A refrigeration plant is being recharged. The engineer asks the cadet to confirm the correct refrigerant and explain why it suits this system.",
    instructions: [
      "State how the correct refrigerant for a plant is identified (nameplate, manuals).",
      "Give two properties that make a refrigerant suitable for a given application.",
      "State one environmental or safety consideration in refrigerant selection.",
      "Report the selection in clear engine-room English."
    ],
    deliverable: "A note in English confirming the correct refrigerant for the plant, its suitable properties, and one environmental/safety consideration.",
    assessmentCriteria: [
      "The identification method is correct.",
      "The refrigerant properties are relevant and correct.",
      "A valid environmental/safety consideration is given.",
      "The note is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "REF746",
    subjectName: "Refrigeración II",
    subjectId: "mn-s7-refrigeracion-ii",
    unit: "Accesorios del sistema",
    topic: "Separador de aceite, filtros y secador",
    week: 5,
    taskId: "mn-ref746-w05-trace-accessories",
    taskTitle: "Trace The Oil Separator, Filters And Drier",
    scenario: "Using the plant diagram, the engineer asks the cadet to locate the oil separator, filters and drier and explain what each one does.",
    instructions: [
      "Locate the oil separator and state its function.",
      "Locate the filters and the drier and state the function of each.",
      "Explain why removing moisture and dirt protects the system.",
      "Report the trace in clear engine-room English."
    ],
    deliverable: "A note in English locating the oil separator, filters and drier with the function of each and why they protect the system.",
    assessmentCriteria: [
      "Each accessory is located correctly.",
      "The function of each is stated correctly.",
      "The protection reasoning is sound.",
      "The note is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "REF746",
    subjectName: "Refrigeración II",
    subjectId: "mn-s7-refrigeracion-ii",
    unit: "Accesorios del sistema",
    topic: "Visores y válvulas de servicio y seguridad",
    week: 6,
    taskId: "mn-ref746-w06-check-sight-glass-valves",
    taskTitle: "Check The Sight Glass And Service Valves",
    scenario: "Before a watch check, the engineer asks the cadet to read the sight glass and identify the service and safety valves on the plant.",
    instructions: [
      "Explain what the sight glass shows and how to read it (e.g. bubbles, moisture indicator).",
      "Identify the service valves and their purpose during maintenance.",
      "Identify the safety valve and what it protects against.",
      "Report the check in clear engine-room English."
    ],
    deliverable: "A note in English reporting the sight glass reading and identifying the service and safety valves with their purpose.",
    assessmentCriteria: [
      "The sight glass reading is explained correctly.",
      "Service valves and their purpose are correct.",
      "The safety valve function is correct.",
      "The note is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "REF746",
    subjectName: "Refrigeración II",
    subjectId: "mn-s7-refrigeracion-ii",
    unit: "Procedimiento para carga de gas refrigerante en el sistema",
    topic: "Carga de gas refrigerante por lado de alta y de baja",
    week: 7,
    taskId: "mn-ref746-w07-charge-refrigerant",
    taskTitle: "Charge Refrigerant Gas Into The System",
    scenario: "The plant is low on charge. The engineer asks the cadet to describe how to charge refrigerant by the high side and by the low side, safely.",
    instructions: [
      "Describe charging by the high side and when it is used.",
      "Describe charging by the low side and when it is used.",
      "State two safety precautions when handling refrigerant under pressure.",
      "Report the charging procedure in clear engine-room English."
    ],
    deliverable: "A note in English describing high-side and low-side charging with two safety precautions.",
    assessmentCriteria: [
      "High-side charging is described correctly.",
      "Low-side charging is described correctly.",
      "The safety precautions are valid.",
      "The procedure is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "REF746",
    subjectName: "Refrigeración II",
    subjectId: "mn-s7-refrigeracion-ii",
    unit: "Procedimiento para carga de gas refrigerante en el sistema",
    topic: "Procedimiento de vacío al sistema",
    week: 8,
    taskId: "mn-ref746-w08-pull-vacuum",
    taskTitle: "Pull A Vacuum On The Refrigeration System",
    scenario: "After a repair, the system must be evacuated before charging. The engineer asks the cadet to explain why and how a vacuum is pulled on the system.",
    instructions: [
      "Explain why the system must be evacuated before charging.",
      "Describe the procedure to pull a vacuum with a vacuum pump.",
      "State how to confirm the vacuum is holding before charging.",
      "Report the procedure in clear engine-room English."
    ],
    deliverable: "A note in English explaining why and how the system is evacuated, and how to confirm the vacuum holds.",
    assessmentCriteria: [
      "The reason for evacuation is correct (removes moisture/air).",
      "The vacuum procedure is correct.",
      "The vacuum-holding check is valid.",
      "The procedure is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "REF746",
    subjectName: "Refrigeración II",
    subjectId: "mn-s7-refrigeracion-ii",
    unit: "Operación y funcionamiento de un sistema de refrigeración y aire acondicionado",
    topic: "Puesta en servicio y fuera de servicio del sistema",
    week: 9,
    taskId: "mn-ref746-w09-commission-plant",
    taskTitle: "Put The Refrigeration Plant Into And Out Of Service",
    scenario: "The provision refrigeration plant must be started for a loaded voyage. The engineer asks the cadet to give the sequence to put it into service and to stop it safely.",
    instructions: [
      "Give the sequence of steps to put the plant into service.",
      "State the parameters to check once the plant is running (pressures, temperatures).",
      "Give the sequence to take the plant out of service safely.",
      "Report the procedure in clear engine-room English."
    ],
    deliverable: "A note in English with the start-up sequence, running parameters to check, and the safe shutdown sequence.",
    assessmentCriteria: [
      "The start-up sequence is correct and ordered.",
      "The running parameters are valid.",
      "The shutdown sequence is safe and correct.",
      "The procedure is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "REF746",
    subjectName: "Refrigeración II",
    subjectId: "mn-s7-refrigeracion-ii",
    unit: "Operación y funcionamiento de un sistema de refrigeración y aire acondicionado",
    topic: "Mantenimiento preventivo de un sistema de refrigeración",
    week: 10,
    taskId: "mn-ref746-w10-plan-preventive-maintenance",
    taskTitle: "Plan Preventive Maintenance For The Plant",
    scenario: "The chief engineer asks the cadet to draft a short preventive maintenance plan for the refrigeration plant for the coming voyage.",
    instructions: [
      "List three preventive maintenance tasks and their purpose.",
      "State how often each task should be carried out.",
      "Explain how preventive maintenance reduces breakdowns and downtime.",
      "Report the plan in clear engine-room English."
    ],
    deliverable: "A short preventive maintenance plan in English: three tasks with frequency and purpose, and why PMS reduces breakdowns.",
    assessmentCriteria: [
      "The maintenance tasks are relevant and correct.",
      "The frequencies are reasonable.",
      "The breakdown-reduction reasoning is sound.",
      "The plan is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "REF746",
    subjectName: "Refrigeración II",
    subjectId: "mn-s7-refrigeracion-ii",
    unit: "Operación y funcionamiento de un sistema de refrigeración y aire acondicionado",
    topic: "Mantenimiento correctivo de un sistema de refrigeración",
    week: 11,
    taskId: "mn-ref746-w11-troubleshoot-fault",
    taskTitle: "Troubleshoot A Refrigeration Fault",
    scenario: "The provision room is not holding temperature and the sight glass is showing bubbles. The engineer asks the cadet to diagnose the likely fault and propose corrective action.",
    instructions: [
      "State what bubbles in the sight glass together with high temperature may indicate.",
      "List two possible causes and how to confirm each.",
      "Propose the corrective action for the most likely cause.",
      "Report the diagnosis and action in clear engine-room English."
    ],
    deliverable: "A fault report in English: the likely fault, two possible causes with checks, and the proposed corrective action.",
    assessmentCriteria: [
      "The symptom interpretation is correct (e.g. undercharge).",
      "The possible causes and checks are valid.",
      "The corrective action matches the likely cause.",
      "The report is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "REF746",
    subjectName: "Refrigeración II",
    subjectId: "mn-s7-refrigeracion-ii",
    unit: "Operación y funcionamiento de un sistema de refrigeración y aire acondicionado",
    topic: "Operación segura del sistema de aire acondicionado y restablecimiento tras una pérdida de enfriamiento",
    week: 12,
    taskId: "mn-ref746-w12-restore-reefer-after-loss",
    taskTitle: "Restore The Provision Reefer After A Loss Of Cooling",
    scenario: "As the closing task of the subject, a provision reefer has lost cooling after maintenance and the cargo is at risk. The chief engineer asks the cadet to bring the plant back into safe service, integrating everything learned this semester.",
    instructions: [
      "State the first checks to confirm whether the loss is due to charge, controls, or a mechanical fault.",
      "If a recharge is needed, outline evacuate-then-charge in the correct order with safety precautions.",
      "Give the sequence to bring the plant back into service and confirm it is holding temperature.",
      "Report the full restoration to the chief engineer in clear engine-room English."
    ],
    deliverable: "A restoration report in English integrating fault diagnosis, evacuate/charge if needed, recommissioning, and confirmation the plant holds temperature.",
    assessmentCriteria: [
      "The initial diagnosis logic is sound.",
      "The evacuate-then-charge order and precautions are correct.",
      "The recommissioning sequence and confirmation are correct.",
      "The report is clear, professional, and in correct engine-room English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "AUT747",
    subjectName: "Automática",
    subjectId: "mn-s7-automatica",
    unit: "Funciones booleanas",
    topic: "Términos mínimos y máximos y formas canónicas",
    week: 1,
    taskId: "mn-aut747-w01-read-alarm-logic",
    taskTitle: "Read An Engine Alarm As A Boolean Function",
    scenario: "The engine control panel triggers an alarm from a combination of sensor inputs. The engineer asks the cadet to express the alarm condition as a Boolean function.",
    instructions: [
      "Define a Boolean variable for each sensor input in the alarm.",
      "Write the alarm condition as a Boolean function using minterms.",
      "State what combination of inputs makes the alarm true.",
      "Report the result in clear engine-room English."
    ],
    deliverable: "A note in English giving the Boolean function of the alarm and the input combination that triggers it.",
    assessmentCriteria: [
      "The variables are defined clearly.",
      "The Boolean function is written correctly.",
      "The triggering combination is identified correctly.",
      "The note is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "AUT747",
    subjectName: "Automática",
    subjectId: "mn-s7-automatica",
    unit: "Funciones booleanas",
    topic: "Formas normalizadas y cantidad de funciones booleanas",
    week: 2,
    taskId: "mn-aut747-w02-normalized-form",
    taskTitle: "Express A Control Condition In Normalized Form",
    scenario: "A control condition for a pump must be documented. The engineer asks the cadet to write it in a normalized Boolean form so it is unambiguous.",
    instructions: [
      "Write the control condition in sum-of-products (or product-of-sums) form.",
      "Explain why a normalized form removes ambiguity.",
      "State how the number of inputs limits the possible functions.",
      "Report the result in clear engine-room English."
    ],
    deliverable: "A note in English giving the control condition in a normalized form and why that form is unambiguous.",
    assessmentCriteria: [
      "The normalized form is written correctly.",
      "The ambiguity explanation is sound.",
      "The inputs/possible-functions relationship is correct.",
      "The note is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "AUT747",
    subjectName: "Automática",
    subjectId: "mn-s7-automatica",
    unit: "Funciones booleanas",
    topic: "Simbología de compuertas lógicas",
    week: 3,
    taskId: "mn-aut747-w03-identify-gates",
    taskTitle: "Identify The Logic Gates In A Control Circuit",
    scenario: "The engineer shows the cadet the logic diagram of an interlock and asks them to identify the gates and what the circuit does.",
    instructions: [
      "Identify the logic gates in the diagram (AND, OR, NOT, etc.) by their symbols.",
      "State the function each gate performs in the interlock.",
      "Explain in words what condition allows the output to go true.",
      "Report your reading in clear engine-room English."
    ],
    deliverable: "A note in English identifying the gates in the interlock and the condition that makes the output true.",
    assessmentCriteria: [
      "The gates are identified correctly from their symbols.",
      "Each gate's function is stated correctly.",
      "The output condition is explained correctly.",
      "The note is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "AUT747",
    subjectName: "Automática",
    subjectId: "mn-s7-automatica",
    unit: "Simplificación de funciones de Boole",
    topic: "Principio de simplificación y mapa de Karnaugh",
    week: 4,
    taskId: "mn-aut747-w04-simplify-karnaugh",
    taskTitle: "Simplify An Alarm Logic With A Karnaugh Map",
    scenario: "An alarm circuit uses more gates than needed. The engineer asks the cadet to simplify the logic with a Karnaugh map to reduce the component count.",
    instructions: [
      "Place the alarm function on a Karnaugh map.",
      "Group the terms to obtain the simplified expression.",
      "State how many terms/gates were saved by the simplification.",
      "Report the simplified logic in clear engine-room English."
    ],
    deliverable: "A note in English with the Karnaugh map, the simplified expression, and the number of gates saved.",
    assessmentCriteria: [
      "The map is filled correctly.",
      "The grouping and simplified expression are correct.",
      "The gate saving is stated correctly.",
      "The note is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "AUT747",
    subjectName: "Automática",
    subjectId: "mn-s7-automatica",
    unit: "Simplificación de funciones de Boole",
    topic: "Mapa de Karnaugh con cuatro a seis variables y condiciones no importa",
    week: 5,
    taskId: "mn-aut747-w05-reduce-interlock-dontcares",
    taskTitle: "Reduce A Multi-Input Interlock Using Don't-Care Conditions",
    scenario: "A start interlock has several inputs, some of which never occur together. The engineer asks the cadet to reduce it using don't-care conditions.",
    instructions: [
      "Set out the interlock function with four or more input variables on a Karnaugh map.",
      "Mark the input combinations that never occur as don't-care.",
      "Use the don't-cares to obtain a simpler expression.",
      "Report the reduced interlock in clear engine-room English."
    ],
    deliverable: "A note in English showing the reduced interlock expression and how the don't-care conditions helped simplify it.",
    assessmentCriteria: [
      "The map with four or more variables is set out correctly.",
      "The don't-care conditions are marked correctly.",
      "The simplified expression is valid.",
      "The note is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "AUT747",
    subjectName: "Automática",
    subjectId: "mn-s7-automatica",
    unit: "Ejecución de una función de Boole",
    topic: "Compuertas universales NAND y NOR",
    week: 6,
    taskId: "mn-aut747-w06-build-with-nand-nor",
    taskTitle: "Build A Control Function With NAND Or NOR Gates",
    scenario: "Only NAND gates are available in a spare logic module. The engineer asks the cadet to implement a required control function using universal gates.",
    instructions: [
      "Explain why NAND and NOR are called universal gates.",
      "Show how the required function can be built using only NAND (or only NOR) gates.",
      "State one practical advantage of using a single gate type.",
      "Report the implementation in clear engine-room English."
    ],
    deliverable: "A note in English showing the control function implemented with universal gates and one advantage of a single gate type.",
    assessmentCriteria: [
      "The universal-gate concept is explained correctly.",
      "The implementation with NAND/NOR is correct.",
      "The stated advantage is valid.",
      "The note is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "AUT747",
    subjectName: "Automática",
    subjectId: "mn-s7-automatica",
    unit: "Lógica combinacional",
    topic: "Sumadores, substractores y códigos",
    week: 7,
    taskId: "mn-aut747-w07-adders-and-codes",
    taskTitle: "Explain The Adders And Codes In A Digital Instrument",
    scenario: "A digital engine instrument adds and converts values. The engineer asks the cadet to explain the adder and code conversion behind the reading.",
    instructions: [
      "Explain what a half adder and a full adder do.",
      "Explain why codes (e.g. binary, BCD) are converted from one to another in an instrument.",
      "Give one example of an engine value that is processed this way.",
      "Report the explanation in clear engine-room English."
    ],
    deliverable: "A note in English explaining the adder and code conversion in the instrument with one engine example.",
    assessmentCriteria: [
      "The adder function is explained correctly.",
      "The code conversion reason is correct.",
      "The engine example is relevant.",
      "The note is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "AUT747",
    subjectName: "Automática",
    subjectId: "mn-s7-automatica",
    unit: "Lógica combinacional",
    topic: "Decodificadores, codificadores, multiplexor y demultiplexor",
    week: 8,
    taskId: "mn-aut747-w08-route-signals-multiplexer",
    taskTitle: "Route Engine Signals With A Multiplexer",
    scenario: "Many engine sensors share one display channel. The engineer asks the cadet to explain how a multiplexer routes the signals and how they are separated again.",
    instructions: [
      "Explain what a multiplexer does with several input signals.",
      "Explain how a demultiplexer separates the signals at the other end.",
      "State why multiplexing is useful for many engine sensors on one channel.",
      "Report the explanation in clear engine-room English."
    ],
    deliverable: "A note in English explaining how a multiplexer and demultiplexer route and separate engine sensor signals.",
    assessmentCriteria: [
      "The multiplexer function is explained correctly.",
      "The demultiplexer function is explained correctly.",
      "The usefulness for many sensors is stated correctly.",
      "The note is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "AUT747",
    subjectName: "Automática",
    subjectId: "mn-s7-automatica",
    unit: "Lógica combinacional",
    topic: "Memoria de solo lectura ROM y PROM",
    week: 9,
    taskId: "mn-aut747-w09-explain-rom-prom",
    taskTitle: "Explain The ROM/PROM In An Engine Control Unit",
    scenario: "An engine control unit stores fixed settings in memory. The engineer asks the cadet to explain the role of ROM and PROM in the unit.",
    instructions: [
      "Explain what a ROM stores and why it is non-volatile.",
      "Explain the difference between ROM and PROM.",
      "State why fixed control settings are held in this type of memory.",
      "Report the explanation in clear engine-room English."
    ],
    deliverable: "A note in English explaining the role of ROM and PROM in the control unit and why fixed settings are stored there.",
    assessmentCriteria: [
      "The ROM function and non-volatility are correct.",
      "The ROM/PROM difference is correct.",
      "The reason for storing fixed settings is sound.",
      "The note is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "AUT747",
    subjectName: "Automática",
    subjectId: "mn-s7-automatica",
    unit: "Lógica secuencial",
    topic: "Elementos de memoria: flip-flops",
    week: 10,
    taskId: "mn-aut747-w10-flip-flop-latching-alarm",
    taskTitle: "Use A Flip-Flop As A Latching Alarm Memory",
    scenario: "An alarm must stay on after a brief fault until an engineer acknowledges it. The engineer asks the cadet to explain how a flip-flop latches the alarm.",
    instructions: [
      "Explain what a flip-flop is and that it stores one bit.",
      "Explain how a set-reset flip-flop latches an alarm that appeared only briefly.",
      "State how the acknowledge (reset) input clears the latched alarm.",
      "Report the explanation in clear engine-room English."
    ],
    deliverable: "A note in English explaining how a flip-flop latches a brief alarm and how the reset clears it.",
    assessmentCriteria: [
      "The flip-flop storage concept is correct.",
      "The latching behaviour is explained correctly.",
      "The reset/acknowledge action is correct.",
      "The note is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "AUT747",
    subjectName: "Automática",
    subjectId: "mn-s7-automatica",
    unit: "Lógica secuencial",
    topic: "Diseño de contadores y registros",
    week: 11,
    taskId: "mn-aut747-w11-design-running-hours-counter",
    taskTitle: "Design A Counter For A Running-Hours Meter",
    scenario: "A pump needs a running-hours meter for maintenance planning. The engineer asks the cadet to explain how a digital counter counts and holds the hours.",
    instructions: [
      "Explain how a counter increments on each clock pulse.",
      "Explain how a register holds the count so it can be read.",
      "State how the running hours support preventive maintenance planning.",
      "Report the design idea in clear engine-room English."
    ],
    deliverable: "A note in English explaining how a counter and register track running hours and how that supports maintenance planning.",
    assessmentCriteria: [
      "The counting operation is explained correctly.",
      "The register/hold function is correct.",
      "The link to maintenance planning is sound.",
      "The note is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester VII",
    subjectCode: "AUT747",
    subjectName: "Automática",
    subjectId: "mn-s7-automatica",
    unit: "Lógica secuencial",
    topic: "Análisis de la lógica secuencial en el control automático de equipos",
    week: 12,
    taskId: "mn-aut747-w12-analyze-auto-start-sequence",
    taskTitle: "Analyze The Sequential Logic Of An Automatic Start Sequence",
    scenario: "As the closing task of the subject, a standby pump starts automatically through a timed sequence of logic steps. The engineer asks the cadet to analyze the sequential logic that controls it, integrating the whole subject.",
    instructions: [
      "Describe the ordered steps of the automatic start sequence.",
      "Explain how memory elements (flip-flops) and timing hold each step until the next condition is met.",
      "Identify one interlock that must be satisfied before the sequence can complete.",
      "Report the full analysis to the engineer in clear engine-room English."
    ],
    deliverable: "An analysis in English of the automatic start sequence: the ordered steps, how sequential logic holds each step, and one required interlock.",
    assessmentCriteria: [
      "The sequence steps are described correctly and in order.",
      "The role of memory/timing in holding steps is explained correctly.",
      "A valid interlock condition is identified.",
      "The analysis is clear, professional, and in correct engine-room English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
];

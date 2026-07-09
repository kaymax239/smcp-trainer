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
];

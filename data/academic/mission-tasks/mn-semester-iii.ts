import type { AcademicMissionTask } from "./types";

export const mnSemesterIiiTasks: AcademicMissionTask[] = [
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
    topic: "Generación de la onda senoidal, frecuencia y período, valores pico y eficaz (Vrms = Vp / raíz de 2)",
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
    topic: "Reactancia inductiva y capacitiva e impedancia en serie (Z = raíz de R cuadrado más XL cuadrado)",
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
    topic: "El triángulo de potencia (activa, reactiva, aparente) y el factor de potencia de la planta eléctrica",
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
    topic: "Principio de inducción mutua, relación de transformación (V1/V2 = N1/N2 = I2/I1) y transformadores a bordo",
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
    subjectCode: "ELE316",
    subjectName: "Electricidad III",
    subjectId: "mn-s3-electricidad-iii",
    unit: "Materiales magnéticos",
    topic: "Histéresis y pérdidas en el núcleo de las máquinas",
    week: 9,
    taskId: "mn-ele316-w09-hysteresis-core-losses",
    taskTitle: "Explain Hysteresis And Core Losses In A Machine",
    scenario: "A running motor's magnetic core heats up in service. The engineer asks the cadet to explain magnetic materials and the hysteresis loop and why the core loses energy as heat every cycle.",
    instructions: [
      "Distinguish soft magnetic materials (easily magnetised and demagnetised, used for cores) from hard magnetic materials (which retain magnetism, used for permanent magnets).",
      "Describe the hysteresis loop: as the magnetising current alternates, the magnetisation lags behind, and the area of the loop represents energy lost as heat in each cycle.",
      "Explain why a soft iron core with a narrow hysteresis loop is chosen for a motor or transformer to keep these losses low, and why laminating the core reduces eddy-current losses too.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English explaining soft and hard magnetic materials, the hysteresis loop as energy lost as heat per cycle, and why a narrow-loop laminated core is used in machines.",
    assessmentCriteria: [
      "Soft and hard magnetic materials are correctly distinguished.",
      "The hysteresis loop is correctly explained as energy lost as heat per cycle.",
      "The choice of a narrow-loop laminated core to limit losses is sound.",
      "The answer is clear and in correct English."
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
    unit: "Motores de corriente continua",
    topic: "Motores CD serie, shunt y compound: comportamiento par-velocidad",
    week: 10,
    taskId: "mn-ele316-w10-dc-motor-behaviour",
    taskTitle: "Compare DC Motor Behaviour For A Winch Drive",
    scenario: "A deck winch and a ventilation fan both need DC motors. The engineer asks the cadet to compare the torque and speed behaviour of series, shunt and compound DC motors and choose one for each drive, noting that week 3 compared DC generators while this is about motors.",
    instructions: [
      "Describe the series motor: high starting torque, but its speed runs away dangerously if the load is removed, so it must never be run unloaded.",
      "Describe the shunt motor: nearly constant speed from no load to full load, with moderate starting torque.",
      "Describe the compound motor as combining both: good starting torque with a safe, stable speed.",
      "Choose a motor for the winch (high starting torque under heavy load) and for the fan (steady speed), justify each, and report in clear engine-room English."
    ],
    deliverable: "A note in English comparing series, shunt and compound DC motor torque-speed behaviour and choosing a motor for a winch and a fan with justification.",
    assessmentCriteria: [
      "The series motor's high starting torque and no-load runaway are correct.",
      "The shunt motor's near-constant speed is correct.",
      "The compound motor's combination of both is correct.",
      "The winch and fan choices are justified, in clear engine-room English."
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
    unit: "Producción de corriente continua",
    topic: "Efecto del magnetismo remanente y autoexcitación del generador de CD",
    week: 11,
    taskId: "mn-ele316-w11-generator-voltage-buildup",
    taskTitle: "Diagnose A DC Generator That Will Not Build Up Voltage",
    scenario: "A shunt DC generator is run up but the voltmeter stays near zero: it will not build up voltage. The engineer asks the cadet to explain how a self-excited generator builds up voltage and to diagnose the failure.",
    instructions: [
      "Explain self-excitation: a small residual magnetism in the field poles induces a small voltage, which drives a small field current, which strengthens the field, so the voltage builds up progressively.",
      "State the three conditions for build-up: there must be residual magnetism, the field must be connected so it AIDS the residual flux (not opposes it), and the field-circuit resistance must be below the critical value.",
      "Diagnose the fault: lost residual magnetism (cured by flashing the field from a battery), reversed field connections or reversed rotation (the field then cancels the residual flux), or too high a field resistance or an open field circuit.",
      "Report the diagnosis and the remedy in clear engine-room English."
    ],
    deliverable: "A note in English explaining self-excitation and residual magnetism, the three conditions for voltage build-up, and a diagnosis with remedies for a generator that fails to build up.",
    assessmentCriteria: [
      "Self-excitation from residual magnetism is correctly explained as a progressive build-up.",
      "The three build-up conditions are correct (residual magnetism, correct field polarity, resistance below critical).",
      "The diagnosis and remedies are sound (flash the field, correct reversed connections, check field resistance).",
      "The answer is clear and in correct English."
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
    unit: "Prácticas complementarias",
    topic: "Efecto Joule: pérdidas en el cobre, pérdidas en el hierro y eficiencia de la máquina",
    week: 12,
    taskId: "mn-ele316-w12-joule-losses-efficiency",
    taskTitle: "Assess The Losses And Efficiency Of The Ship's DC Machine",
    scenario: "The chief wants to know how much of a DC machine's power is wasted as heat. As the closing task of the subject, the engineer asks the cadet to work out the copper (Joule) losses, add the iron losses and find the efficiency, integrating the hysteresis of week 9.",
    instructions: [
      "State the Joule effect: a current I in a resistance R dissipates power as heat, P = I squared x R (the copper losses in the windings).",
      "For an armature current I = 50 A through an armature resistance R = 0.2 ohms, calculate the copper loss: P = 50 squared x 0.2 = 2500 x 0.2 = 500 W.",
      "Add the iron losses (the hysteresis and eddy-current losses of week 9), taken here as 300 W, giving total losses = 500 + 300 = 800 W.",
      "For an output power of 15 200 W, find the efficiency = output / (output + losses) = 15200 / (15200 + 800) = 15200 / 16000 = 0.95 = 95 percent. Report the results with units, in clear engine-room English."
    ],
    deliverable: "A note in English giving the copper (Joule) losses from P = I squared R, the total losses including the week 9 iron losses, and the machine efficiency = output / (output + losses), with units.",
    assessmentCriteria: [
      "The Joule copper loss is correct (50 squared x 0.2 = 500 W).",
      "The iron losses (hysteresis and eddy current, week 9) are correctly added (total 800 W).",
      "The efficiency is correct (15200 / 16000 = 95 percent).",
      "The results carry correct units, in clear engine-room English."
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
    topic: "Análisis integrado de la planta eléctrica: triángulo de potencia, factor de potencia y transformadores de a bordo",
    week: 13,
    taskId: "mn-ele316-w13-run-the-ships-electrical-plant",
    taskTitle: "Run The Ship's Electrical Plant For A Full Sea Load",
    scenario: "The vessel is departing Tampico and the electrical load is climbing as pumps, the steering gear and the galley come on line. From the engine-room simulator's switchboard you must bring the plant up to a full sea load, keep the power factor healthy and confirm the 440/230 V transformer feeders are correctly loaded before the main engine goes to full away.",
    instructions: [
      "Read the switchboard and build the power triangle for the plant, resolving active, reactive and apparent power and the resulting power factor at the present load.",
      "Balance the load across the running generators and apply the transformer ratio to verify the 230 V lighting and services feeders stay within rating.",
      "Decide whether to start a second generator or trim reactive load to hold the power factor above the plant limit, and record the loading decision.",
      "Report the plant status and your power-factor decision to the duty engineer in standard engine-room English."
    ],
    deliverable: "An electrical plant loading sheet with the power triangle, power factor, transformer feeder loads and the parallel/trim decision.",
    assessmentCriteria: [
      "Power triangle and power factor are resolved correctly for the stated load.",
      "Transformer ratio is applied so the secondary feeders are shown within rating.",
      "The generator-start or load-trim decision is justified against the plant power-factor limit.",
      "The plant status report is delivered in clear, correct engine-room English."
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
    unit: "Motores de corriente continua",
    topic: "Puesta en servicio y comportamiento par-velocidad de motores CD serie, shunt y compound alimentados por el generador de a bordo",
    week: 14,
    taskId: "mn-ele316-w14-commission-the-dc-winch-drive",
    taskTitle: "Commission The DC Winch Drive From Its Generator",
    scenario: "The mooring winch runs from a shipboard DC generator and motor set. After maintenance you must bring the self-excited generator up to voltage, put the DC motor into service safely and confirm its torque-speed behaviour suits the winch duty before mooring stations.",
    instructions: [
      "Bring the self-excited DC generator up to voltage, confirming residual magnetism and field connection so it builds up correctly.",
      "Put the DC motor into service following the safe starting sequence, watching starting current and field before applying load.",
      "Match the series/shunt/compound torque-speed behaviour to the winch duty and confirm the drive holds speed under a hauling load.",
      "Report the commissioning result and the drive's readiness for mooring stations in standard engine-room English."
    ],
    deliverable: "A drive commissioning record covering generator build-up, motor start sequence and the torque-speed suitability finding.",
    assessmentCriteria: [
      "Generator build-up is verified through residual magnetism and correct field connection.",
      "The DC motor starting sequence is safe and controls starting current.",
      "Torque-speed behaviour is correctly matched to the winch hauling duty.",
      "The commissioning report is delivered in clear, correct engine-room English."
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
    unit: "Reactancia e impedancia",
    topic: "Reactancia, impedancia en serie y relación de transformación en la distribución de un consumidor de corriente alterna",
    week: 15,
    taskId: "mn-ele316-w15-feed-an-ac-consumer",
    taskTitle: "Set Up The AC Feed To A Large Consumer",
    scenario: "A large AC seawater cooling pump motor must be fed from the 440 V switchboard through its feeder and step-down transformer. You must work out the sinusoidal supply values, the series impedance of the feeder-plus-load and the transformer currents so the protection and cabling are correctly sized before energising.",
    instructions: [
      "Work out the supply frequency, period and RMS values of the 440 V AC feed to the consumer.",
      "Calculate the inductive reactance and the series impedance of the feeder and motor branch.",
      "Apply the transformer ratio to find primary and secondary currents and confirm the feeder and protection ratings are adequate.",
      "Report the feed calculation and the go/no-go to energise to the duty engineer in standard engine-room English."
    ],
    deliverable: "A consumer feed calculation sheet with supply values, series impedance, transformer currents and the energise decision.",
    assessmentCriteria: [
      "Frequency, period and RMS values are correctly derived from the AC supply.",
      "Reactance and series impedance are calculated correctly for the branch.",
      "Transformer primary/secondary currents justify the feeder and protection rating.",
      "The feed report and energise decision are given in clear, correct engine-room English."
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
    unit: "Producción de corriente continua",
    topic: "Diagnóstico de fallas: magnetismo remanente, autoexcitación y pérdidas en el núcleo de una máquina que se sobrecalienta",
    week: 16,
    taskId: "mn-ele316-w16-diagnose-generator-failure",
    taskTitle: "Diagnose A Generator That Will Not Build And Runs Hot",
    scenario: "During an engine-room watch the emergency DC generator fails to build up voltage on start, and once forced on line it runs abnormally hot. You must diagnose whether the fault is loss of residual magnetism, a self-excitation problem or excessive core losses, and decide the safe recovery.",
    instructions: [
      "Confirm the symptom set and rule the fault toward remanent magnetism / self-excitation versus core-loss overheating.",
      "Carry out the flashing-the-field recovery to restore build-up and re-check the voltage rise.",
      "Assess hysteresis and core losses against machine efficiency to decide whether continued running is safe or the machine must be taken off line.",
      "Report the diagnosis, the recovery action and the load recommendation to the chief engineer in standard engine-room English."
    ],
    deliverable: "A fault diagnosis report with the failure cause, the field-flash recovery result and the safe-running recommendation.",
    assessmentCriteria: [
      "The failure-to-build symptom is correctly attributed to residual magnetism / self-excitation.",
      "The field-flash recovery is carried out and verified.",
      "Core losses and efficiency are used to justify the continue/stop decision.",
      "The diagnosis and recommendation are reported in clear, correct engine-room English."
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
    unit: "Prácticas complementarias",
    topic: "Auditoría integrada de eficiencia de la planta: efecto Joule, pérdidas en cobre e hierro, factor de potencia e histéresis",
    week: 17,
    taskId: "mn-ele316-w17-audit-plant-efficiency",
    taskTitle: "Audit The Efficiency Of The Ship's Electrical Plant",
    scenario: "The technical superintendent wants an end-of-semester efficiency audit of the ship's electrical machines. You must combine copper (Joule) losses, iron/core losses, power-factor performance and the machines' magnetic behaviour into one efficiency statement that flags the worst offender for maintenance.",
    instructions: [
      "Compute copper (Joule) losses and iron/core losses for each machine and derive its efficiency.",
      "Cross-check each machine's power factor and hysteresis behaviour against its rated performance.",
      "Rank the machines by loss and identify the poorest performer with a maintenance recommendation.",
      "Present the efficiency audit and recommendation to the technical superintendent in standard engine-room English."
    ],
    deliverable: "An electrical plant efficiency audit ranking each machine by loss with a prioritised maintenance recommendation.",
    assessmentCriteria: [
      "Copper and iron losses and efficiency are computed correctly for each machine.",
      "Power factor and hysteresis behaviour are correctly integrated into the assessment.",
      "The loss ranking and maintenance priority are soundly justified.",
      "The audit is presented in clear, correct engine-room English."
    ],
    xp: 30,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "ELE316",
    subjectName: "Electricidad III",
    subjectId: "mn-s3-electricidad-iii",
    unit: "Potencia en corriente alterna",
    topic: "Integración de fin de semestre: estado de la planta eléctrica para el zarpe, del magnetismo a la eficiencia",
    week: 18,
    taskId: "mn-ele316-w18-brief-electrical-readiness",
    taskTitle: "Deliver The Electrical Readiness Brief To The Chief Engineer",
    scenario: "Before departure the chief engineer wants a single readiness brief on the whole electrical plant. You must pull the semester together: generators built up and paralleled, transformers loaded, AC/DC consumers fed, power factor and losses in hand, and any diagnosed fault resolved.",
    instructions: [
      "Summarise generator build-up, paralleling and transformer loading into a plant-status line.",
      "State the power-factor, impedance and efficiency headroom of the plant at the expected sea load.",
      "Close out any outstanding machine fault and confirm the emergency generator's readiness.",
      "Deliver the full electrical readiness brief to the chief engineer in standard engine-room English."
    ],
    deliverable: "A one-page electrical readiness brief covering plant status, power-factor/efficiency headroom and outstanding-fault closeout.",
    assessmentCriteria: [
      "The brief integrates generator, transformer and consumer status coherently.",
      "Power-factor and efficiency headroom are stated against the sea load.",
      "Outstanding faults and emergency-generator readiness are correctly closed out.",
      "The readiness brief is delivered in clear, correct engine-room English."
    ],
    xp: 30,
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
    topic: "Cobre y sus aleaciones (bronce, latón) y aluminio: propiedades y usos a bordo",
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
    topic: "Ensayo de tracción, curva esfuerzo-deformación y dureza (esfuerzo sigma = F / A)",
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
    unit: "Protección contra la corrosión",
    topic: "Recubrimientos, ánodos de sacrificio y protección catódica por corriente impresa",
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
    unit: "Selección de materiales",
    topic: "Criterio integrado de selección: resistencia mecánica, resistencia a la corrosión, compatibilidad y costo",
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
    subjectCode: "TEM319",
    subjectName: "Tecnología de Materiales",
    subjectId: "mn-s3-tecnologia-materiales",
    unit: "Pruebas no-destructivas de los metales",
    topic: "Métodos de partícula magnética, líquidos penetrantes, radiográficos y ultrasónicos",
    week: 9,
    taskId: "mn-tem319-w09-ndt-selection",
    taskTitle: "Select A Non-Destructive Test For A Suspect Part",
    scenario: "A suspect engine part may have a crack that cannot be seen. The engineer asks the cadet to choose the right non-destructive test (NDT) to find it without damaging the part.",
    instructions: [
      "Name the main NDT methods: dye penetrant (PT) and magnetic particle (MT) for SURFACE flaws, and radiography (RT) and ultrasonics (UT) for INTERNAL flaws.",
      "State what each detects: penetrant reveals cracks open to the surface; magnetic particle reveals surface and near-surface cracks in ferrous parts; radiography shows internal voids and inclusions on film; ultrasonics finds internal flaws by echo.",
      "Choose a method for a suspected surface crack in a steel shaft and a method for a suspected internal flaw in a thick casting, and justify each.",
      "Report your selection in clear engine-room English."
    ],
    deliverable: "A note in English naming the NDT methods (PT, MT, RT, UT), what each detects (surface versus internal), and a justified choice for a surface crack and for an internal flaw.",
    assessmentCriteria: [
      "The NDT methods are correctly named and grouped by surface versus internal detection.",
      "What each method detects is accurate.",
      "The choices for the surface crack and the internal flaw are justified.",
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
    unit: "Metales no-ferrosos y metales antifricción",
    topic: "Aleaciones antifricción (metal blanco) para cojinetes",
    week: 10,
    taskId: "mn-tem319-w10-antifriction-bearing-alloy",
    taskTitle: "Choose An Antifriction Alloy For A Bearing",
    scenario: "A worn main bearing must be re-metalled. The engineer asks the cadet to explain antifriction (white metal) alloys and why they suit bearings, going beyond the bronze bearings of week 5.",
    instructions: [
      "State what an antifriction alloy must do: carry the load, run with a low coefficient of friction, embed small dirt particles, and wear in preference to the shaft it protects.",
      "Name the main antifriction alloys: white metal (babbitt), based on tin or lead with antimony and copper, and note bronze as a harder bearing material from week 5.",
      "Explain the bearing principle: the soft white-metal lining is sacrificial and protects the more expensive journal or shaft, and it holds an oil film for hydrodynamic lubrication.",
      "Choose a material for a heavily loaded main bearing and report in clear engine-room English."
    ],
    deliverable: "A note in English stating what an antifriction alloy must do, naming white metal (babbitt), and explaining why the soft sacrificial lining protects the shaft and holds an oil film.",
    assessmentCriteria: [
      "The requirements of an antifriction alloy are correct (load, low friction, embed dirt, sacrificial wear).",
      "White metal (babbitt) is correctly named, with bronze noted from week 5.",
      "The sacrificial-lining and oil-film principle is correct.",
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
    unit: "Recubrimientos metálicos",
    topic: "Metalización y cromado duro para recuperar piezas desgastadas",
    week: 11,
    taskId: "mn-tem319-w11-hard-chrome-shaft-reclaim",
    taskTitle: "Reclaim A Worn Shaft By Metallizing And Hard Chrome",
    scenario: "A shaft journal is worn under size and a new shaft is costly. The engineer asks the cadet to explain how metallizing and hard chrome plating build the surface back up and restore the part.",
    instructions: [
      "Explain metallizing (thermal spraying): molten metal is sprayed onto the prepared, roughened surface to build it up, then it is machined or ground back to size.",
      "Explain hard chrome plating: a hard, wear- and corrosion-resistant chromium layer is electroplated onto the surface, then ground to the finished dimension.",
      "State the preparation that makes the coating hold (cleaning, roughening or undercutting the surface, grinding to final size afterwards) and one limitation (the bond depends on that preparation, and there is a maximum practical build-up).",
      "Recommend a method to reclaim the worn journal and report in clear engine-room English."
    ],
    deliverable: "A note in English explaining metallizing and hard chrome plating as surface build-up repairs, the preparation that makes them hold, and a recommendation to reclaim a worn journal.",
    assessmentCriteria: [
      "Metallizing (thermal-spray build-up then machining) is correctly explained.",
      "Hard chrome plating (electroplated hard layer then ground) is correctly explained.",
      "The preparation steps and a limitation are correct.",
      "The recommendation is sound, in clear engine-room English."
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
    unit: "Materiales aislantes",
    topic: "Materiales aislantes, refractarios y no-metálicos para servicios eléctricos y de alta temperatura",
    week: 12,
    taskId: "mn-tem319-w12-insulating-refractory-materials",
    taskTitle: "Select Insulating And Refractory Materials For Hot And Electrical Duties",
    scenario: "As the closing task of the subject, the engineer asks the cadet to select non-metallic materials for three duties: electrical insulation, a high-temperature lining, and a light non-metallic part, drawing together the material picture of the subject.",
    instructions: [
      "Choose an electrical insulating material (for example mica for high-temperature insulation, or fibreglass or varnished cloth for windings) and justify it by its dielectric strength and heat resistance.",
      "Choose a refractory material (for example firebrick, or a high-alumina or magnesite brick) for lining a boiler furnace or exhaust uptake and justify it by its resistance to high temperature.",
      "Choose a non-metallic material (for example a suitable plastic or a fibreglass composite) for a light, corrosion-free part and justify it by weight and corrosion resistance.",
      "Weigh these choices against the metals of the earlier weeks (why non-metallic is right here) and report in clear engine-room English."
    ],
    deliverable: "A material-selection note in English choosing an electrical insulator, a refractory and a non-metallic material for three duties, each justified, and contrasted with the metals of earlier weeks.",
    assessmentCriteria: [
      "The electrical insulator (mica, fibreglass) is justified by dielectric strength and heat resistance.",
      "The refractory (firebrick, high-alumina or magnesite) is justified by high-temperature resistance.",
      "The non-metallic part choice is justified by weight and corrosion resistance.",
      "The contrast with metals is sound, in clear engine-room English."
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
    unit: "Selección de materiales",
    topic: "Selección integrada de materiales: propiedades, clase de acero y resistencia a la corrosión para componentes de a bordo",
    week: 13,
    taskId: "mn-tem319-w13-specify-materials-for-a-refit",
    taskTitle: "Specify Materials For A Machinery Refit Package",
    scenario: "A refit calls for renewing three engine-room components: a highly stressed shaft, a seawater pipe run and a heat-exchanger part. You must specify a material for each, matching mechanical properties, steel grade and corrosion resistance to the service, and justify the choice on cost.",
    instructions: [
      "Match the required properties and, where steel, the carbon-content class to the duty of each of the three components.",
      "Screen each choice for corrosion behaviour, including galvanic risk where dissimilar metals meet.",
      "Apply the integrated selection criterion of strength, corrosion resistance, compatibility and cost to fix the final material for each part.",
      "Report the three material specifications with their justification to the technical office in standard engine-room English."
    ],
    deliverable: "A material specification sheet for the three components with grade, corrosion rationale and cost justification.",
    assessmentCriteria: [
      "Properties and steel class are correctly matched to each component's duty.",
      "Corrosion and galvanic compatibility are correctly screened.",
      "The strength/corrosion/compatibility/cost criterion is applied consistently.",
      "The specification report is delivered in clear, correct engine-room English."
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
    unit: "Protección contra la corrosión",
    topic: "Sistema integrado de protección contra la corrosión: recubrimientos, ánodos de sacrificio, corriente impresa y compatibilidad galvánica",
    week: 14,
    taskId: "mn-tem319-w14-design-corrosion-protection",
    taskTitle: "Design The Corrosion Protection For A Seawater System",
    scenario: "A seawater cooling system with mixed steel, bronze and aluminium fittings suffers accelerated corrosion at the dissimilar-metal joints. You must design a complete protection scheme combining coatings, sacrificial anodes and impressed-current protection to stop the attack.",
    instructions: [
      "Map the galvanic couples in the system and rank the joints most at risk.",
      "Select coatings and non-ferrous fittings that reduce the galvanic driving force where metals meet.",
      "Size and place sacrificial anodes and/or impressed-current protection to protect the vulnerable steel.",
      "Report the corrosion protection scheme and its expected effect to the chief engineer in standard engine-room English."
    ],
    deliverable: "A corrosion protection scheme covering galvanic mapping, coatings, anode placement and impressed-current design.",
    assessmentCriteria: [
      "Galvanic couples and at-risk joints are correctly identified.",
      "Coating and material choices reduce the galvanic driving force.",
      "Sacrificial and impressed-current protection are correctly sized and placed.",
      "The protection scheme is reported in clear, correct engine-room English."
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
    unit: "Metales no-ferrosos y metales antifricción",
    topic: "Integración de aleaciones antifricción, metales no-ferrosos y tratamiento térmico para un conjunto de cojinete",
    week: 15,
    taskId: "mn-tem319-w15-select-bearing-assembly-materials",
    taskTitle: "Select The Materials For A Bearing Assembly Rebuild",
    scenario: "A main-engine bearing assembly is being rebuilt. You must choose the white-metal antifriction alloy for the bearing surface, the non-ferrous housing components and the correct heat treatment for the steel journal so the assembly runs cool and lasts.",
    instructions: [
      "Choose the white-metal antifriction alloy for the bearing surface against the load and speed duty.",
      "Match the non-ferrous housing and bush metals to their function and to galvanic compatibility with the journal.",
      "Specify the heat treatment (annealing/quenching/tempering) for the steel journal to give the right hardness and toughness.",
      "Report the bearing material and heat-treatment specification to the workshop in standard engine-room English."
    ],
    deliverable: "A bearing assembly material specification covering antifriction alloy, non-ferrous parts and journal heat treatment.",
    assessmentCriteria: [
      "The antifriction alloy is correctly matched to the bearing duty.",
      "Non-ferrous materials are correctly matched to function and compatibility.",
      "The heat treatment gives the intended hardness and toughness for the journal.",
      "The specification is reported in clear, correct engine-room English."
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
    unit: "Pruebas no-destructivas de los metales",
    topic: "Investigación de falla de material: ensayo, curva esfuerzo-deformación y prueba no-destructiva de una pieza sospechosa",
    week: 16,
    taskId: "mn-tem319-w16-investigate-a-cracked-part",
    taskTitle: "Investigate A Cracked Engine Part And Rule On It",
    scenario: "A structural bracket in the machinery space has failed and a similar part is suspect. You must investigate the material: read the tensile certificate, work out the stress the part was carrying, and select and apply the right non-destructive test to decide whether the suspect part is fit to remain in service.",
    instructions: [
      "Read the material certificate and work out the working stress against the stress-strain curve and hardness data.",
      "Select the appropriate non-destructive test (magnetic particle, dye penetrant, radiographic or ultrasonic) for the suspect defect.",
      "Interpret the test result and rule the suspect part accept, reject or repair.",
      "Report the failure investigation and the fitness ruling to the chief engineer in standard engine-room English."
    ],
    deliverable: "A material failure investigation report with the stress finding, NDT method, result and accept/reject/repair ruling.",
    assessmentCriteria: [
      "Working stress is correctly derived and read against the material data.",
      "The NDT method is correctly selected for the suspected defect.",
      "The accept/reject/repair ruling follows logically from the evidence.",
      "The investigation is reported in clear, correct engine-room English."
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
    unit: "Recubrimientos metálicos",
    topic: "Recuperación integrada de una pieza desgastada: metalización, cromado duro, tratamiento térmico y verificación por END",
    week: 17,
    taskId: "mn-tem319-w17-reclaim-a-worn-shaft",
    taskTitle: "Plan And Verify The Reclaim Of A Worn Shaft",
    scenario: "A worn pump shaft is to be reclaimed rather than renewed. You must plan the full reclaim: metallizing and hard-chrome build-up to size, the heat-treatment considerations for the base steel, and the non-destructive verification that the reclaimed shaft is sound before it goes back into service.",
    instructions: [
      "Specify the metallizing and hard-chrome build-up to restore the shaft to its running dimension.",
      "Address the heat-treatment and base-metal properties so the coating adheres and the shaft keeps its strength.",
      "Define the non-destructive verification that confirms coating integrity and no sub-surface defect before acceptance.",
      "Report the reclaim procedure and the acceptance criteria to the workshop and superintendent in standard engine-room English."
    ],
    deliverable: "A shaft reclaim procedure with coating build-up, heat-treatment notes and the NDT acceptance criteria.",
    assessmentCriteria: [
      "The metallizing and hard-chrome build-up correctly restore the running dimension.",
      "Heat-treatment and base-metal considerations protect strength and adhesion.",
      "The NDT verification is appropriate to confirm the reclaimed part is sound.",
      "The reclaim procedure is reported in clear, correct engine-room English."
    ],
    xp: 30,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "TEM319",
    subjectName: "Tecnología de Materiales",
    subjectId: "mn-s3-tecnologia-materiales",
    unit: "Selección de materiales",
    topic: "Integración de fin de semestre: dossier de materiales del buque, de las propiedades a la protección y la verificación",
    week: 18,
    taskId: "mn-tem319-w18-brief-materials-dossier",
    taskTitle: "Deliver The Ship's Materials Dossier To The Superintendent",
    scenario: "At the end of the semester the superintendent wants a consolidated materials dossier for the machinery plant: which materials are used where, how they are protected from corrosion, which insulating and refractory materials serve the hot and electrical duties, and how suspect parts are verified.",
    instructions: [
      "Consolidate the material selections for the key machinery components with their grades and properties.",
      "Summarise the corrosion protection and the insulating/refractory materials serving the hot and electrical duties.",
      "State the inspection and NDT regime that keeps the materials fit for service.",
      "Deliver the consolidated materials dossier to the superintendent in standard engine-room English."
    ],
    deliverable: "A consolidated ship's materials dossier covering selection, protection, insulation and verification.",
    assessmentCriteria: [
      "Material selections are consolidated coherently against their duties.",
      "Corrosion protection and insulating/refractory materials are correctly summarised.",
      "The inspection and NDT regime is complete and appropriate.",
      "The dossier is delivered in clear, correct engine-room English."
    ],
    xp: 30,
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
    subjectCode: "TAL320",
    subjectName: "Taller II",
    subjectId: "mn-s3-taller-ii",
    unit: "Tipos de soldadura y su uso",
    topic: "Soldadura blanda (estaño), fundentes, riesgos y precauciones",
    week: 9,
    taskId: "mn-tal320-w09-soft-soldering",
    taskTitle: "Make A Soft-Soldered Joint On A Small Pipe",
    scenario: "A small copper instrument pipe needs a soft-soldered joint. The instructor asks the cadet to explain soft (tin) soldering, its flux and its limits before making the joint.",
    instructions: [
      "Explain soft soldering: a tin-based solder with a low melting point joins the metals; the PARTS are not melted, only the solder, which bonds to clean surfaces.",
      "Explain the flux: it cleans the metal and stops oxidation so the solder wets and flows into the joint, and state that the surfaces must be clean first.",
      "State the limitation: a soft-soldered joint is LOW strength, so it suits electrical connections and small low-pressure pipes, not load-bearing or high-pressure work.",
      "Describe the steps to make the joint and report in clear engine-room English."
    ],
    deliverable: "A note in English explaining soft (tin) soldering, the role of the flux, the low-strength limitation, and the steps to make a small soldered joint.",
    assessmentCriteria: [
      "Soft soldering is correctly explained (the solder melts, the parts do not).",
      "The role of the flux (cleaning, wetting) is correct.",
      "The low-strength limitation and suitable uses are correct.",
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
    unit: "Tipos de soldadura y su uso",
    topic: "Soldadura fuerte (plata, latón y bronce), fundentes, riesgos y precauciones",
    week: 10,
    taskId: "mn-tal320-w10-brazing-copper-pipe",
    taskTitle: "Braze A Seawater Pipe Joint",
    scenario: "A copper-alloy seawater pipe needs a strong, leak-tight joint. The instructor asks the cadet to explain brazing (hard soldering) and why it is stronger than the soft soldering of week 9.",
    instructions: [
      "Explain brazing: a filler of silver, brass or bronze with a HIGHER melting point than soft solder flows into the joint by capillary action, while the parent metal is still not melted.",
      "Explain why brazing is much stronger than soft soldering and suits pressure and seawater pipework, and the role of the flux in preventing oxidation.",
      "State the safety precautions: good ventilation against fumes (some fluxes and fillers give off harmful fumes) and the gas-torch precautions.",
      "Contrast brazing with soft soldering (week 9) by strength and use, and report in clear engine-room English."
    ],
    deliverable: "A note in English explaining brazing with a silver, brass or bronze filler by capillary action, why it is stronger than soft soldering, the flux and fume safety, and the contrast with week 9.",
    assessmentCriteria: [
      "Brazing is correctly explained (higher-melting filler, capillary action, parent metal not melted).",
      "The greater strength and suitability for pressure and seawater pipe are correct.",
      "The fume-ventilation and gas-torch safety are correct.",
      "The contrast with soft soldering is sound, in clear engine-room English."
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
    unit: "Seguridad durante el proceso de soldadura",
    topic: "Precauciones antes de soldar un tanque que haya contenido combustibles (gas-free)",
    week: 11,
    taskId: "mn-tal320-w11-fuel-tank-gas-freeing",
    taskTitle: "Make A Fuel Tank Safe Before Hot Work",
    scenario: "Hot work is needed on a tank that has held fuel oil. Because residual vapour can explode, the instructor asks the cadet, as a critical-safety task, to set out the steps that make the tank safe before any flame is struck, building on the hot-work permit of week 7.",
    instructions: [
      "State the danger: a tank that held fuel still holds explosive vapour, and welding or cutting on it without gas-freeing can cause an explosion; an 'empty' tank is NOT a safe tank.",
      "Set out the gas-freeing steps in order: empty and clean the tank, remove sludge and residues, then ventilate thoroughly to clear the vapour.",
      "Test the atmosphere with a gas meter and obtain a GAS-FREE certificate from a competent person BEFORE any hot work, and re-test because vapour can build up again.",
      "Link this to the week 7 hot-work permit (the gas-free certificate is a condition of the permit) and report in clear engine-room English."
    ],
    deliverable: "A note in English setting out, in order, how a fuel tank is made safe for hot work: the explosion danger, cleaning and ventilating, gas testing and the gas-free certificate as a condition of the week 7 permit.",
    assessmentCriteria: [
      "The residual-vapour explosion danger is correctly stated (an empty tank is not a safe tank).",
      "The gas-freeing steps are in the correct order (clean, remove residues, ventilate).",
      "Gas testing and a gas-free certificate before hot work, with re-testing, are correct.",
      "The link to the week 7 hot-work permit is made, in clear engine-room English."
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
    unit: "Esmeriles",
    topic: "Esmeriles: tipos de piedra, selección, riesgos y precauciones al esmerilar",
    week: 12,
    taskId: "mn-tal320-w12-grinding-safety",
    taskTitle: "Grind And Finish A Weld Safely",
    scenario: "As the closing task of the subject, a completed weld must be ground and dressed. The instructor asks the cadet to select the right grinding wheel and set out the grinder hazards and precautions, finishing the fabrication skills of the subject.",
    instructions: [
      "Select the grinding wheel for the job: a coarse wheel for fast stock removal and a finer wheel for finishing, matched to the material, and state that a wheel has a maximum safe speed (rpm) that must never be exceeded.",
      "State the main hazards: a wheel can burst if it is damaged or over-speeded, sparks and hot particles fly off, and the work can kick back.",
      "State the precautions: inspect and ring-test the wheel for cracks, use the guard and the correct tool-rest gap, wear eye and face protection, and keep sparks away from flammable materials and gas bottles.",
      "Describe dressing the wheel and finishing the weld, and report in clear engine-room English."
    ],
    deliverable: "A note in English selecting a grinding wheel, stating the grinder hazards (wheel burst, sparks, kickback) and the precautions (inspect and ring-test, guard, PPE, keep sparks clear), and describing finishing the weld.",
    assessmentCriteria: [
      "The wheel selection (coarse versus fine, matched to material, within the maximum speed) is correct.",
      "The hazards (wheel burst, sparks, kickback) are correct.",
      "The precautions (inspection and ring-test, guard and rest, PPE, sparks clear of flammables) are correct.",
      "The answer is clear and in correct English."
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
    unit: "Trabajo en caliente a bordo",
    topic: "Trabajo en caliente integrado: permiso, selección de electrodo, amperaje y preparación de junta para una reparación estructural",
    week: 13,
    taskId: "mn-tal320-w13-plan-a-structural-weld-repair",
    taskTitle: "Plan A Structural Weld Repair In The Engine Room",
    scenario: "A cracked support bracket in the machinery space must be welded in place. You must plan the whole job: raise the hot-work permit and set the fire watch, prepare the joint, select the electrode and set the amperage, and choose the welding position for a sound repair.",
    instructions: [
      "Raise the hot-work permit, prepare the area and set the fire watch for before, during and after the job.",
      "Prepare the joint edge (bevel, root gap, root face) and choose the welding position for the location.",
      "Select the electrode for the material and set the correct amperage for that electrode.",
      "Report the hot-work plan and readiness to the duty engineer in standard engine-room English."
    ],
    deliverable: "A weld-repair job plan with the hot-work permit, joint preparation, electrode/amperage and position.",
    assessmentCriteria: [
      "The hot-work permit and fire-watch arrangement are complete and correct.",
      "Joint preparation and welding position suit the repair location.",
      "Electrode and amperage are correctly matched to the work.",
      "The job plan is reported in clear, correct engine-room English."
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
    unit: "Corte con oxiacetileno",
    topic: "Operación integrada de oxicorte y esmerilado: ajuste de llama, seguridad del equipo de gas y acabado de la pieza",
    week: 14,
    taskId: "mn-tal320-w14-cut-and-dress-a-plate",
    taskTitle: "Cut And Dress A Steel Plate For A New Part",
    scenario: "A replacement doubler plate must be cut from steel stock and dressed to shape. You must set up the oxy-acetylene cutting torch safely, make the cut, then grind and finish the edges to size for fitting.",
    instructions: [
      "Set up the gas equipment safely and adjust the oxy-acetylene flame for cutting the plate thickness.",
      "Make the cut following the line and controlling dross and heat distortion.",
      "Select the grinding wheel and grind the cut edges to size, observing grinding safety.",
      "Report the finished blank and its readiness for fitting to the workshop supervisor in standard engine-room English."
    ],
    deliverable: "A finished cut-and-dressed plate blank with a job record of the cutting and grinding steps.",
    assessmentCriteria: [
      "The gas equipment is set up safely and the flame is correctly adjusted.",
      "The cut follows the line with controlled dross and distortion.",
      "Grinding wheel selection and edge finishing observe grinding safety.",
      "The job record is reported in clear, correct engine-room English."
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
    unit: "Tipos de soldadura y su uso",
    topic: "Reparación integrada de tubería: soldadura fuerte y blanda, fundentes y precauciones sobre líneas de a bordo",
    week: 15,
    taskId: "mn-tal320-w15-repair-a-seawater-pipe",
    taskTitle: "Braze And Solder A Seawater Pipe Repair",
    scenario: "A small-bore seawater and a copper instrument line both need repair. You must braze the seawater pipe joint and soft-solder the small copper joint, choosing the right filler and flux for each and observing the risks and precautions of both processes.",
    instructions: [
      "Prepare and braze the seawater pipe joint with the correct silver/brass/bronze filler and flux.",
      "Prepare and soft-solder the small copper joint with the correct tin filler and flux.",
      "Apply the risk precautions for each process and check both joints for a sound, leak-tight result.",
      "Report the completed pipe repairs and their test result to the duty engineer in standard engine-room English."
    ],
    deliverable: "A pipe-repair record covering the brazed and soldered joints, fillers/fluxes and the leak test.",
    assessmentCriteria: [
      "The brazed joint uses correct filler, flux and technique for the seawater duty.",
      "The soldered joint uses correct filler, flux and technique for the copper line.",
      "Process risks are controlled and both joints test leak-tight.",
      "The repair record is reported in clear, correct engine-room English."
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
    unit: "Seguridad durante el proceso de soldadura",
    topic: "Respuesta a trabajo en caliente sobre un tanque: gas-free, permiso, fire watch y control del área ante peligro de combustible",
    week: 16,
    taskId: "mn-tal320-w16-make-a-fuel-tank-safe",
    taskTitle: "Make A Fuel Tank Safe For Emergency Hot Work",
    scenario: "A leaking fuel tank boundary needs urgent welding, but the tank has held fuel and the risk of explosion is real. You must make the tank safe before any hot work: gas-free it, confirm the atmosphere, control the area and only then authorise the weld under a strict permit and fire watch.",
    instructions: [
      "Carry out and verify the gas-free procedure and confirm the atmosphere is safe for hot work.",
      "Raise the hot-work permit, prepare the area and post the fire watch for a fuel-adjacent job.",
      "Set the electrode, amperage and joint so the weld can be made quickly with minimum heat input, then stop if any condition changes.",
      "Report the gas-free result, the permit status and the go/no-go decision to the chief engineer in standard engine-room English."
    ],
    deliverable: "A tank hot-work safety case with the gas-free verification, permit, fire watch and the go/no-go decision.",
    assessmentCriteria: [
      "The gas-free procedure and atmosphere check are correct and verified.",
      "The permit and fire watch match the fuel-adjacent hazard.",
      "The welding set-up minimises heat input and the stop conditions are defined.",
      "The safety case and decision are reported in clear, correct engine-room English."
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
    topic: "Auditoría integrada de una soldadura: fallas comunes, inspección visual y END, y criterio aceptar/rechazar/reparar",
    week: 17,
    taskId: "mn-tal320-w17-inspect-and-rule-on-a-weld",
    taskTitle: "Inspect A Finished Weld And Certify The Repair",
    scenario: "A completed structural weld must be signed off before the space is returned to service. You must inspect it for the common weld defects, apply visual and dye-penetrant examination, and rule the weld accept, reject or repair against the criteria.",
    instructions: [
      "Examine the finished weld visually for the common defects (undercut, porosity, lack of fusion, cracks).",
      "Apply dye-penetrant NDT to reveal surface-breaking defects the eye may miss.",
      "Rule the weld accept, reject or repair against the acceptance criteria and specify any rework.",
      "Report the inspection result and the ruling to the chief engineer in standard engine-room English."
    ],
    deliverable: "A weld inspection report with the defect findings, NDT result and the accept/reject/repair ruling.",
    assessmentCriteria: [
      "Common weld defects are correctly identified in the visual examination.",
      "The dye-penetrant NDT is correctly applied and interpreted.",
      "The accept/reject/repair ruling follows the acceptance criteria.",
      "The inspection report is delivered in clear, correct engine-room English."
    ],
    xp: 30,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "TAL320",
    subjectName: "Taller II",
    subjectId: "mn-s3-taller-ii",
    unit: "Trabajo en caliente a bordo",
    topic: "Integración de fin de semestre: expediente de un trabajo en caliente, del permiso a la soldadura inspeccionada",
    week: 18,
    taskId: "mn-tal320-w18-brief-hot-work-package",
    taskTitle: "Hand Over The Completed Hot-Work Package",
    scenario: "A machinery-space repair job is finished and the space is to be returned to service. You must hand over the complete hot-work package: permit closed, welding done and inspected, gas-free and fire-watch records complete, and the area confirmed safe.",
    instructions: [
      "Assemble the permit, gas-free and fire-watch records into a closed hot-work package.",
      "Summarise the welding, cutting and grinding work done and its inspection result.",
      "Confirm the area is made safe, tools accounted for and the space ready to return to service.",
      "Deliver the hot-work handover to the chief engineer in standard engine-room English."
    ],
    deliverable: "A closed hot-work handover package with permit closeout, work summary, inspection result and area-safe confirmation.",
    assessmentCriteria: [
      "The permit, gas-free and fire-watch records are complete and correctly closed.",
      "The work summary and inspection result are accurate.",
      "The make-safe and return-to-service confirmation is thorough.",
      "The handover is delivered in clear, correct engine-room English."
    ],
    xp: 30,
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
    topic: "Punto medio y división de un segmento en el plano del taller",
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
    topic: "Ecuación de la recta e intersección de dos recorridos de tubería",
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
    topic: "Posición de un punto respecto a la circunferencia: círculo de barrido de una pieza rotativa",
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
    subjectCode: "GEA317",
    subjectName: "Geometría Analítica",
    subjectId: "mn-s3-geometria-analitica",
    unit: "Línea recta",
    topic: "Ángulo entre dos rectas",
    week: 9,
    taskId: "mn-gea317-w09-angle-between-pipe-runs",
    taskTitle: "Find The Angle Between Two Pipe Runs",
    scenario: "Two pipe runs meet at a fitting on the workshop layout plane. The instructor asks the cadet to find the angle between them from their slopes, using coordinate geometry.",
    instructions: [
      "State the angle formula between two lines: tan(theta) = |(m2 - m1) / (1 + m1 x m2)|, where m1 and m2 are the slopes.",
      "For pipe run 1 with slope m1 = 1 and pipe run 2 with slope m2 = 3, substitute: tan(theta) = |(3 - 1) / (1 + 1 x 3)| = |2 / 4| = 0.5.",
      "Find the angle: theta = arctan(0.5) = 26.57 degrees.",
      "Check the perpendicular case as a control (if m1 x m2 = -1 the denominator is zero and the lines meet at 90 degrees). Report the angle with the working, in clear engine-room English."
    ],
    deliverable: "A coordinate-geometry note in English giving the angle between two pipe runs from tan(theta) = |(m2 - m1) / (1 + m1 m2)|, with the working and the arctan result.",
    assessmentCriteria: [
      "The angle formula is stated correctly.",
      "The substitution is correct (tan theta = 0.5).",
      "The angle is correct (theta = 26.57 degrees).",
      "The perpendicular control is noted, in correct engine-room English."
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
    unit: "Parábola, elipse e hipérbola",
    topic: "Ecuación de la parábola con vértice en el origen",
    week: 10,
    taskId: "mn-gea317-w10-parabola-reflector",
    taskTitle: "Model A Parabolic Reflector With Its Equation",
    scenario: "A parabolic reflector (the profile of a searchlight or a radar dish) is set out on the workshop plane. The instructor asks the cadet to write the parabola's equation and locate its focus, using coordinate geometry.",
    instructions: [
      "State the parabola with vertex at the origin opening upwards: x^2 = 4py, where p is the distance from the vertex to the focus.",
      "For a reflector whose focus is p = 3 units above the vertex, write the equation: x^2 = 4 x 3 x y = 12y.",
      "Find the width of the dish at the level of the focus (the latus rectum = 4p): at y = 3, x^2 = 12 x 3 = 36, so x = plus or minus 6, a full width of 12 units.",
      "Explain why the focus matters (rays parallel to the axis reflect through the focus) and report the equation and focus with the working, in clear engine-room English."
    ],
    deliverable: "A coordinate-geometry note in English giving the parabola x^2 = 4py for the reflector, its focus, the width at the focus (latus rectum), and the meaning of the focus, with the working.",
    assessmentCriteria: [
      "The parabola equation x^2 = 4py is correctly stated and applied (x^2 = 12y).",
      "The focus is correctly located (p = 3).",
      "The width at the focus is correct (latus rectum = 12 units).",
      "The meaning of the focus is explained, in correct engine-room English."
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
    unit: "Parábola, elipse e hipérbola",
    topic: "Ecuación de la elipse con centro en el origen",
    week: 11,
    taskId: "mn-gea317-w11-ellipse-manhole",
    taskTitle: "Describe An Elliptical Manhole With Its Equation",
    scenario: "An elliptical manhole in a tank top is set out on the workshop plane. As an advanced task, the instructor asks the cadet to write the ellipse's equation and find its foci, using coordinate geometry.",
    instructions: [
      "State the ellipse centred at the origin: x^2 / a^2 + y^2 / b^2 = 1, where a is the semi-major axis and b the semi-minor axis.",
      "For a manhole 10 units long and 8 units wide, a = 5 and b = 4, so the equation is x^2 / 25 + y^2 / 16 = 1.",
      "Find the foci with c^2 = a^2 - b^2 = 25 - 16 = 9, so c = 3, and the foci lie at (plus or minus 3, 0) on the major axis.",
      "Verify a point: at x = 0, y^2 / 16 = 1 so y = plus or minus 4 (the ends of the minor axis). Report the equation and foci with the working, in clear engine-room English."
    ],
    deliverable: "A coordinate-geometry note in English giving the ellipse x^2 / a^2 + y^2 / b^2 = 1 for the manhole, its semi-axes, its foci from c^2 = a^2 - b^2, and a point check, with the working.",
    assessmentCriteria: [
      "The ellipse equation is correctly written (x^2 / 25 + y^2 / 16 = 1).",
      "The semi-major and semi-minor axes are correct (a = 5, b = 4).",
      "The foci are correct (c^2 = 9, c = 3, foci at (plus or minus 3, 0)).",
      "The point check is correct, in correct engine-room English."
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
    unit: "Geometría Analítica del Espacio",
    topic: "Ecuación de la superficie esférica con centro fuera del origen",
    week: 12,
    taskId: "mn-gea317-w12-sphere-tank-surface",
    taskTitle: "Model A Spherical Tank Surface And Test Points",
    scenario: "A spherical gas tank is modelled in space on the workshop coordinates. As the closing task of the subject, the instructor asks the cadet to write the sphere's equation and decide whether given points lie inside, on or outside it, extending the circle work of week 8 to three dimensions.",
    instructions: [
      "State the sphere with centre (h, k, l) and radius r: (x - h)^2 + (y - k)^2 + (z - l)^2 = r^2.",
      "For a tank of radius r = 5 centred at (2, 3, 1), write the equation: (x - 2)^2 + (y - 3)^2 + (z - 1)^2 = 25.",
      "Test a point by comparing its distance from the centre with the radius: for P = (2, 3, 6), the distance squared = 0 + 0 + (6 - 1)^2 = 25 = r^2, so P is ON the surface; for Q = (2, 3, 4), the distance squared = (4 - 1)^2 = 9 < 25, so Q is INSIDE.",
      "State each verdict with both numbers shown, noting this is the three-dimensional version of the week 8 circle test. Report the equation and verdicts with the working, in clear engine-room English."
    ],
    deliverable: "A coordinate-geometry note in English giving the sphere equation for the tank, and inside/on verdicts for two points by comparing distance-squared with radius-squared, with the working, as the 3D extension of week 8.",
    assessmentCriteria: [
      "The sphere equation with centre (h, k, l) and radius r is correctly written.",
      "The tank equation is correct ((x - 2)^2 + (y - 3)^2 + (z - 1)^2 = 25).",
      "Each point is correctly classified (P ON = 25, Q INSIDE = 9) with the distance compared to the radius.",
      "The link to the week 8 circle test is made, in correct engine-room English."
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
    unit: "Línea recta",
    topic: "Trazado integrado de una tubería en el taller: distancia, pendiente, intersección y ángulo entre recorridos",
    week: 13,
    taskId: "mn-gea317-w13-lay-out-a-pipe-run",
    taskTitle: "Lay Out A New Pipe Run In The Machinery Space",
    scenario: "A new pipe run must be routed between two machines on the engine-room drawing. Working in coordinates you must fix the run's length and slope, find where it would cross an existing line, and check the angle it makes with a reference run so it can be fabricated.",
    instructions: [
      "Compute the distance between the two connection points and the slope of the proposed run.",
      "Find the intersection point of the new run with the existing pipe line it must avoid or tie into.",
      "Calculate the angle between the new run and the reference run and confirm it meets the layout limit.",
      "Report the pipe-run geometry and the fabrication figures to the workshop in standard engine-room English."
    ],
    deliverable: "A pipe-run layout sheet with length, slope, intersection point and the angle to the reference run.",
    assessmentCriteria: [
      "Distance and slope of the run are correctly computed.",
      "The intersection point with the existing line is correctly found.",
      "The angle between runs is correct and checked against the limit.",
      "The layout figures are reported in clear, correct engine-room English."
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
    unit: "Línea recta",
    topic: "Verificación integrada de holguras: rectas paralelas y perpendiculares, distancia de un equipo a una recta de referencia y punto medio",
    week: 14,
    taskId: "mn-gea317-w14-check-equipment-clearances",
    taskTitle: "Check Equipment Clearances Against The Reference Line",
    scenario: "New equipment is being sited in the machinery space and must keep minimum clearance from a reference line and from adjacent runs. Working in coordinates you must verify the clearances, confirm parallel/perpendicular alignment and locate the mounting midpoint on the bedplate.",
    instructions: [
      "Measure the perpendicular distance from the equipment to the reference line and check it against the minimum clearance.",
      "Confirm which runs are parallel and which are perpendicular to the reference line.",
      "Find the bedplate mounting midpoint and divide the support span for the fixing points.",
      "Report the clearance and mounting figures to the workshop in standard engine-room English."
    ],
    deliverable: "A clearance and mounting verification sheet with distances, alignment checks and the midpoint/span division.",
    assessmentCriteria: [
      "The perpendicular clearance is correctly computed and checked against the minimum.",
      "Parallel and perpendicular alignments are correctly identified.",
      "The mounting midpoint and span division are correct.",
      "The verification is reported in clear, correct engine-room English."
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
    topic: "Modelado integrado de una pieza rotativa: sección circular del eje, círculo de barrido y posición de un punto",
    week: 15,
    taskId: "mn-gea317-w15-model-a-rotating-guard",
    taskTitle: "Model A Rotating Part And Set Its Guard Clearance",
    scenario: "A rotating coupling must be fitted with a guard. Working in coordinates you must model the shaft cross-section as a circle, define the swept circle of the rotating part, and test whether nearby fixed points fall inside the sweep so the guard clearance is safe.",
    instructions: [
      "Write the circle equation for the shaft cross-section from its centre and radius.",
      "Define the swept circle of the rotating part at its outermost point.",
      "Test the nearby fixed points against the sweep circle to see which fall inside, on or outside it.",
      "Report the guard clearance finding and any fouling points to the workshop in standard engine-room English."
    ],
    deliverable: "A rotating-part geometry sheet with the circle equations, sweep circle and the point-position results.",
    assessmentCriteria: [
      "The shaft-section circle equation is correctly formed.",
      "The swept circle is correctly defined at the outermost radius.",
      "Each test point is correctly placed inside, on or outside the sweep.",
      "The clearance finding is reported in clear, correct engine-room English."
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
    unit: "Geometría Analítica del Espacio",
    topic: "Verificación integrada de una superficie de montaje: ecuación del plano y de la superficie esférica y prueba de puntos",
    week: 16,
    taskId: "mn-gea317-w16-verify-a-tank-fit",
    taskTitle: "Verify A Spherical Tank Fits Its Mounting Surface",
    scenario: "A spherical service tank must sit on a flat mounting surface without fouling surrounding structure. Working in coordinates you must describe the mounting surface with a plane equation, model the tank as a spherical surface and test whether structure points clear the sphere.",
    instructions: [
      "Write the plane equation describing the mounting surface from its reference points.",
      "Write the equation of the spherical tank surface with its centre off the origin.",
      "Test the surrounding structure points against the sphere and plane to confirm clearance or find fouling.",
      "Report the fit verification and any interference to the technical office in standard engine-room English."
    ],
    deliverable: "A tank-fit verification sheet with the plane and sphere equations and the clearance/fouling results.",
    assessmentCriteria: [
      "The plane equation correctly describes the mounting surface.",
      "The spherical surface equation is correctly formed with an off-origin centre.",
      "Structure points are correctly tested for clearance against the sphere.",
      "The fit verification is reported in clear, correct engine-room English."
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
    unit: "Parábola, elipse e hipérbola",
    topic: "Modelado integrado de secciones cónicas de a bordo: parábola de un reflector y elipse de un registro con verificación de puntos",
    week: 17,
    taskId: "mn-gea317-w17-model-conic-fittings",
    taskTitle: "Model The Conic Fittings Of Two Shipboard Parts",
    scenario: "Two shipboard fittings are defined by conic curves: a parabolic reflector and an elliptical manhole cover. You must model each with its equation, derive the key dimensions the workshop needs and verify test points lie on the required curves before manufacture.",
    instructions: [
      "Write the parabola equation for the reflector with its vertex at the origin and derive its focus and opening.",
      "Write the ellipse equation for the manhole with its centre at the origin and derive its semi-axes.",
      "Verify that the specified rim points satisfy each equation and flag any that do not.",
      "Report the conic dimensions and the verification to the workshop in standard engine-room English."
    ],
    deliverable: "A conic-fitting sheet with the parabola and ellipse equations, key dimensions and the point verification.",
    assessmentCriteria: [
      "The parabola equation and derived focus/opening are correct.",
      "The ellipse equation and semi-axes are correct.",
      "Rim points are correctly verified against each curve.",
      "The dimensions and verification are reported in clear, correct engine-room English."
    ],
    xp: 30,
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
    topic: "Integración de fin de semestre: dossier geométrico del taller, de la recta a las superficies del espacio",
    week: 18,
    taskId: "mn-gea317-w18-brief-workshop-geometry",
    taskTitle: "Deliver The Workshop Geometry Dossier For The Job",
    scenario: "A fabrication package pulls together the semester's geometry: pipe runs and clearances by straight lines, a rotating guard by circles, a tank fit by a plane and sphere and conic fittings by parabola and ellipse. You must consolidate the figures into one dossier the workshop can build from.",
    instructions: [
      "Consolidate the straight-line layout figures (distances, slopes, angles, clearances) for the runs and equipment.",
      "Summarise the circular, spherical and plane results for the rotating guard and tank fit.",
      "Add the conic-fitting dimensions and confirm all point verifications pass.",
      "Deliver the consolidated geometry dossier to the workshop in standard engine-room English."
    ],
    deliverable: "A consolidated workshop geometry dossier covering lines, circles, plane/sphere and conics for the job.",
    assessmentCriteria: [
      "Straight-line layout figures are consolidated correctly.",
      "Circular, spherical and plane results are summarised accurately.",
      "Conic dimensions and all point verifications are consistent.",
      "The dossier is delivered in clear, correct engine-room English."
    ],
    xp: 30,
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
    topic: "Movimiento uniformemente acelerado: ecuaciones cinemáticas en la línea de propulsión",
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
    topic: "Movimiento circular uniforme: velocidad angular y aceleración centrípeta en la periferia del volante",
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
    topic: "Conservación de la energía mecánica: carga del polipasto del taller (v = raíz de 2 g h)",
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
    topic: "Conservación de la cantidad de movimiento: enganche de carros de taller (colisión plástica)",
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
    subjectCode: "DIN318",
    subjectName: "Dinámica",
    subjectId: "mn-s3-dinamica",
    unit: "Leyes del Movimiento de Newton",
    topic: "Segunda ley de Newton: fuerza para acelerar una carga",
    week: 9,
    taskId: "mn-din318-w09-newton-second-law",
    taskTitle: "Apply Newton's Second Law To Accelerate A Load",
    scenario: "A hoist must accelerate a heavy load upward. The engineer asks the cadet to use Newton's second law to find the force needed, separating the weight from the extra force required to accelerate it.",
    instructions: [
      "State Newton's second law: net force F = m a, and that the weight of the load is W = m g acting downward.",
      "For a load of mass m = 200 kg lifted with an upward acceleration a = 0.5 m/s^2, find the weight: W = m g = 200 x 9.81 = 1962 N.",
      "Find the total upward force the hoist must apply: F = W + m a = 1962 + (200 x 0.5) = 1962 + 100 = 2062 N.",
      "Check the limit: if the load is lifted at STEADY speed (a = 0), the force is just the weight, 1962 N, and the extra 100 N is what accelerates it. Report the results with units, in clear engine-room English."
    ],
    deliverable: "A dynamics note in English giving the weight m g, the extra force m a, and the total hoist force F = m g + m a to accelerate the load, with the steady-speed limit check and units.",
    assessmentCriteria: [
      "Newton's second law F = m a and the weight m g are correctly stated.",
      "The weight is correct (200 x 9.81 = 1962 N).",
      "The total force is correct (1962 + 100 = 2062 N).",
      "The steady-speed limit (force equals weight) is checked, in correct engine-room English."
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
    topic: "Cinética de cuerpos rígidos: par, momento de inercia y aceleración angular",
    week: 10,
    taskId: "mn-din318-w10-rigid-body-torque",
    taskTitle: "Spin Up A Flywheel With A Known Torque",
    scenario: "A flywheel must be brought up to speed by the engine. The engineer asks the cadet to relate the applied torque, the moment of inertia and the angular acceleration for the rotating flywheel.",
    instructions: [
      "State the rotational form of Newton's second law: torque T = I x alpha, where I is the moment of inertia and alpha the angular acceleration.",
      "For a flywheel with I = 40 kg m^2 driven by a torque T = 200 N m, find the angular acceleration: alpha = T / I = 200 / 40 = 5 rad/s^2.",
      "Find the time to reach omega = 30 rad/s from rest: omega = alpha x t, so t = omega / alpha = 30 / 5 = 6 s.",
      "Cross-check by torque: T = I alpha = 40 x 5 = 200 N m, matching the applied torque. Report the results with units, in clear engine-room English."
    ],
    deliverable: "A rotational-dynamics note in English giving the angular acceleration from T = I alpha, the time to reach speed from omega = alpha t, and the torque cross-check, with units.",
    assessmentCriteria: [
      "The rotational law T = I alpha is correctly stated.",
      "The angular acceleration is correct (200 / 40 = 5 rad/s^2).",
      "The time to reach speed is correct (30 / 5 = 6 s).",
      "The torque cross-check matches (40 x 5 = 200 N m), in correct engine-room English."
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
    unit: "Leyes del Movimiento de Newton",
    topic: "Segunda ley de Newton en un plano inclinado con fricción",
    week: 11,
    taskId: "mn-din318-w11-inclined-plane-load",
    taskTitle: "Move A Load Up An Inclined Skid",
    scenario: "A heavy machine is dragged up an inclined skid ramp. As an advanced task, the engineer asks the cadet to resolve the forces on the incline and find the pull needed, using Newton's second law with friction.",
    instructions: [
      "Resolve the weight on an incline of angle theta = 30 degrees: the component along the ramp is W sin(theta) and the component pressing on the ramp (the normal force) is N = W cos(theta).",
      "For a mass m = 500 kg, W = m g = 500 x 9.81 = 4905 N, so W sin(30) = 4905 x 0.5 = 2452.5 N and N = W cos(30) = 4905 x 0.866 = 4247.7 N.",
      "Find the friction force with a coefficient mu = 0.2: friction = mu x N = 0.2 x 4247.7 = 849.5 N, acting DOWN the ramp, opposing the upward motion.",
      "Find the steady pull up the ramp: P = W sin(theta) + friction = 2452.5 + 849.5 = 3302 N. Report the results with units, in clear engine-room English."
    ],
    deliverable: "A dynamics note in English resolving the weight on the incline (W sin theta along the ramp and N = W cos theta), the friction mu N, and the pull P = W sin theta + friction to move the load up the ramp, with units.",
    assessmentCriteria: [
      "The weight is resolved correctly (W sin theta along the ramp, N = W cos theta).",
      "The components are correct (2452.5 N and N = 4247.7 N).",
      "The friction is correct (0.2 x 4247.7 = 849.5 N, acting down the ramp).",
      "The pull is correct (2452.5 + 849.5 = 3302 N), in correct engine-room English."
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
    topic: "Energía cinética de rotación y potencia en el eje",
    week: 12,
    taskId: "mn-din318-w12-rotational-energy-power",
    taskTitle: "Compute A Flywheel's Rotational Energy And Shaft Power",
    scenario: "As the closing task of the subject, the engineer asks the cadet to find the energy stored in a spinning flywheel and the power delivered by the shaft, integrating rotation, energy and torque from across the subject.",
    instructions: [
      "State rotational kinetic energy KE = (1/2) I omega^2 and shaft power P = T x omega (torque times angular velocity).",
      "For a flywheel with I = 40 kg m^2 at omega = 30 rad/s, find the stored energy: KE = (1/2)(40)(30^2) = (1/2)(40)(900) = 18 000 J = 18 kJ.",
      "For a shaft delivering torque T = 200 N m at omega = 30 rad/s, find the power: P = T omega = 200 x 30 = 6000 W = 6 kW.",
      "Link the results: the 18 kJ stored (the energy of week 3 and the inertia of week 10) is what smooths the running, and the 6 kW is the rate of doing work; note that omega must be in rad/s. Report the results with units, in clear engine-room English."
    ],
    deliverable: "A dynamics note in English giving the rotational kinetic energy KE = (1/2) I omega^2 and the shaft power P = T omega, with the results linked to the flywheel's smoothing role, and units.",
    assessmentCriteria: [
      "The formulas KE = (1/2) I omega^2 and P = T omega are correctly stated.",
      "The stored energy is correct ((1/2)(40)(900) = 18 kJ).",
      "The shaft power is correct (200 x 30 = 6 kW).",
      "The results are linked and the units correct (omega in rad/s), in correct engine-room English."
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
    topic: "Análisis dinámico integrado del volante: energía cinética de rotación, par, momento de inercia y potencia en el eje",
    week: 13,
    taskId: "mn-din318-w13-analyse-the-flywheel-drive",
    taskTitle: "Analyse The Flywheel Drive Under Load",
    scenario: "The main engine's flywheel drives an auxiliary load and must be analysed for a duty change. You must combine its rotational kinetic energy, the torque and moment of inertia that spin it up, and the shaft power it delivers so the drive is shown fit for the new duty.",
    instructions: [
      "Compute the flywheel's rotational kinetic energy and its moment of inertia at running speed.",
      "Apply the torque and moment of inertia to find the angular acceleration during spin-up.",
      "Derive the shaft power delivered at running speed and check it against the auxiliary load.",
      "Report the flywheel drive analysis and its fitness for the duty to the duty engineer in standard engine-room English."
    ],
    deliverable: "A flywheel drive analysis with rotational energy, moment of inertia, spin-up acceleration and shaft power.",
    assessmentCriteria: [
      "Rotational kinetic energy and moment of inertia are correctly computed.",
      "Torque and inertia correctly yield the spin-up angular acceleration.",
      "Shaft power is correctly derived and checked against the load.",
      "The analysis is reported in clear, correct engine-room English."
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
    unit: "Cinemática de Partículas y Cuerpos Rígidos",
    topic: "Estudio cinemático integrado de la línea de propulsión: movimiento rectilíneo del pistón, rotación del eje y coast-down uniformemente acelerado",
    week: 14,
    taskId: "mn-din318-w14-study-the-drive-line-coast-down",
    taskTitle: "Study The Drive-Line Motion During A Coast-Down",
    scenario: "After a stop order the propulsion drive-line coasts down. You must study its motion: the piston's rectilinear travel, the shaft's rotation about its axis and the uniformly decelerated coast-down, to predict when the line comes to rest for the turning-gear.",
    instructions: [
      "Describe the piston's rectilinear motion and relate it to the shaft's rotation about its axis.",
      "Apply the kinematic equations to the uniformly decelerated coast-down of the drive-line.",
      "Predict the time and revolutions to rest and confirm when turning-gear can be engaged.",
      "Report the coast-down prediction to the duty engineer in standard engine-room English."
    ],
    deliverable: "A drive-line coast-down study with the motion relations, kinematic solution and time/revolutions to rest.",
    assessmentCriteria: [
      "Piston motion is correctly related to shaft rotation.",
      "The kinematic equations are correctly applied to the deceleration.",
      "Time and revolutions to rest are correctly predicted.",
      "The prediction is reported in clear, correct engine-room English."
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
    topic: "Operación integrada del polipasto del taller: conservación de la energía, segunda ley de Newton e impulso al enganchar la carga",
    week: 15,
    taskId: "mn-din318-w15-operate-the-workshop-hoist",
    taskTitle: "Operate The Workshop Hoist To Move An Engine Part",
    scenario: "A heavy engine part must be lifted and traversed with the workshop hoist. You must analyse the operation: the fall speed a load would reach by conservation of energy, the force needed to accelerate the load, and the momentum at the moment the trolley couples to it.",
    instructions: [
      "Use conservation of mechanical energy to find the fall speed the load would reach through a given drop.",
      "Apply Newton's second law to find the force needed to accelerate the load safely on the hoist.",
      "Apply momentum to the coupling of the trolley to the load and check the shock is within limits.",
      "Report the safe lift and traverse figures to the workshop supervisor in standard engine-room English."
    ],
    deliverable: "A hoist operation analysis with the energy fall speed, the accelerating force and the coupling momentum.",
    assessmentCriteria: [
      "The fall speed is correctly found by conservation of energy.",
      "The accelerating force follows correctly from Newton's second law.",
      "The coupling momentum is correctly computed and checked.",
      "The operation figures are reported in clear, correct engine-room English."
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
    unit: "Leyes del Movimiento de Newton",
    topic: "Respuesta dinámica integrada: mover una carga sobre un plano inclinado con fricción aplicando la segunda ley y trabajo-energía",
    week: 16,
    taskId: "mn-din318-w16-recover-a-load-on-a-skid",
    taskTitle: "Recover A Stalled Load On An Inclined Skid",
    scenario: "A load being moved up an inclined skid in the machinery space has stalled and is at risk of running back. You must analyse the dynamics: the force needed to overcome gravity and friction on the incline, the work and energy to restart the move, and confirm a controlled recovery.",
    instructions: [
      "Apply Newton's second law on the inclined plane with friction to find the force needed to restart the load upward.",
      "Use work and energy to check the winch or tackle can deliver the required energy over the incline.",
      "Confirm the load cannot run back and specify the holding force to keep it controlled.",
      "Report the recovery analysis and the safe method to the duty engineer in standard engine-room English."
    ],
    deliverable: "An inclined-load recovery analysis with the required force, work/energy check and the holding force.",
    assessmentCriteria: [
      "The force on the inclined plane with friction is correctly derived.",
      "The work/energy check correctly confirms the pulling capacity.",
      "The run-back holding force is correctly specified.",
      "The recovery analysis is reported in clear, correct engine-room English."
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
    topic: "Verificación integrada de la maquinaria rotativa: energía, impulso, momento y potencia en el eje frente a los límites de diseño",
    week: 17,
    taskId: "mn-din318-w17-verify-rotating-machinery-limits",
    taskTitle: "Verify The Rotating Machinery Against Its Dynamic Limits",
    scenario: "Before a duty increase, the rotating machinery train must be verified against its dynamic limits. You must combine the moving machinery's momentum, the flywheel's rotational energy and shaft power, and the torque/inertia spin-up into one check that the train stays within its design envelope.",
    instructions: [
      "Apply momentum to the moving machinery to check the loads at speed changes.",
      "Combine rotational kinetic energy and shaft power with the torque/inertia spin-up for the train.",
      "Compare the results against the machinery's dynamic design limits and flag any exceedance.",
      "Report the verification and any limit exceedance to the chief engineer in standard engine-room English."
    ],
    deliverable: "A rotating-machinery dynamic verification with momentum, energy, power and spin-up checked against limits.",
    assessmentCriteria: [
      "Momentum of the moving machinery is correctly applied.",
      "Rotational energy, shaft power and spin-up are correctly combined.",
      "Results are correctly compared against the design limits.",
      "The verification is reported in clear, correct engine-room English."
    ],
    xp: 30,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "DIN318",
    subjectName: "Dinámica",
    subjectId: "mn-s3-dinamica",
    unit: "Cinética de Sistemas de Partículas",
    topic: "Integración de fin de semestre: dossier dinámico de la línea de propulsión, de la cinemática a la potencia en el eje",
    week: 18,
    taskId: "mn-din318-w18-brief-drive-line-dynamics",
    taskTitle: "Deliver The Drive-Line Dynamics Brief",
    scenario: "At the end of the semester the chief engineer wants a consolidated dynamics brief on the propulsion and workshop machinery: how the drive-line accelerates and coasts, how the flywheel stores and delivers energy, and how loads are safely moved and lifted.",
    instructions: [
      "Summarise the drive-line kinematics: piston motion, shaft rotation and coast-down behaviour.",
      "State the flywheel's rotational energy, torque/inertia and shaft power for the running duty.",
      "Consolidate the load-handling dynamics (energy, momentum, Newton's second law on the incline) into safe working figures.",
      "Deliver the drive-line dynamics brief to the chief engineer in standard engine-room English."
    ],
    deliverable: "A consolidated drive-line dynamics brief covering kinematics, flywheel energy/power and load-handling.",
    assessmentCriteria: [
      "The drive-line kinematics are summarised accurately.",
      "The flywheel energy, torque/inertia and power figures are correct.",
      "The load-handling dynamics are consolidated into safe working figures.",
      "The brief is delivered in clear, correct engine-room English."
    ],
    xp: 30,
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
    topic: "La voz pasiva en el engine log y los reportes de mantenimiento de máquinas",
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
    topic: "Primer y segundo condicional en las standing orders del jefe de máquinas",
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
    topic: "Reported speech en el relevo de guardia de máquinas con backshift de tiempos",
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
    unit: "Comunicación integrada máquinas-puente",
    topic: "Intercambio interno completo: estado de la planta, stand-by y respuesta a órdenes del telégrafo",
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
    subjectCode: "ING315",
    subjectName: "Inglés Marítimo III",
    subjectId: "mn-s3-ingles-maritimo-iii",
    unit: "Peticiones, obligaciones y permisos",
    topic: "Verbos modales de obligación, prohibición y permiso en las reglas del espacio de máquinas",
    week: 9,
    taskId: "mn-ing315-w09-obligation-modals-safety",
    taskTitle: "State Engine-Room Rules Using Obligation Modals",
    scenario: "New crew must be told the engine-room safety rules clearly. The engineer asks the cadet to write the rules using modal verbs of obligation, prohibition and permission so nothing is misunderstood.",
    instructions: [
      "Use MUST or HAVE TO for obligations (for example 'You must wear hearing protection in the engine room').",
      "Use MUSTN'T for prohibitions (a strong rule, for example 'You mustn't smoke near the fuel tanks') and NEEDN'T or DON'T HAVE TO for what is not required.",
      "Use CAN or MAY for permission (for example 'You may enter the control room during your watch').",
      "Write four engine-room rules, one of each type, keeping each short and unambiguous in English."
    ],
    deliverable: "Four engine-room rules in English, one each using an obligation, a prohibition, a not-required and a permission modal, each short and unambiguous.",
    assessmentCriteria: [
      "The obligation (must / have to) is used correctly.",
      "The prohibition (mustn't) and not-required (needn't / don't have to) are correctly distinguished.",
      "The permission (can / may) is used correctly.",
      "The rules are short, unambiguous and in correct English."
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
    unit: "Unidades de medidas para sustantivos contables y no contables",
    topic: "Cantidades y unidades de medida para reportar combustible, aceite y consumos",
    week: 10,
    taskId: "mn-ing315-w10-quantities-fuel-oil",
    taskTitle: "Report Fuel And Oil Quantities With Correct Measure Words",
    scenario: "The engineer must report bunker and lube-oil quantities to the bridge and the office. The cadet is asked to report the amounts using correct quantifiers and measure words for countable and uncountable things.",
    instructions: [
      "Treat fuel and oil as UNCOUNTABLE: use much / a little / a great deal of (for example 'there is a little fuel left in the settling tank'), not 'many'.",
      "Treat drums, filters and spares as COUNTABLE: use many / a few / several (for example 'we have a few spare filters').",
      "Use measure words to make uncountables countable: 'two tonnes of fuel oil', 'a drum of lubricating oil', '200 litres of diesel'.",
      "Write three quantity reports (a fuel sounding, a lube-oil stock and a spares count) with correct quantifiers and units, in clear engine-room English."
    ],
    deliverable: "Three quantity reports in English (fuel, lube oil, spares) using correct countable and uncountable quantifiers and measure words with units.",
    assessmentCriteria: [
      "Fuel and oil are treated as uncountable with correct quantifiers (much / a little).",
      "Countable items use correct quantifiers (many / a few).",
      "Measure words correctly quantify the uncountables (tonnes of, a drum of, litres of).",
      "The reports are clear, with units, in correct English."
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
    unit: "Futuro",
    topic: "Formas de futuro (will, going to, presente continuo) en el plan de mantenimiento",
    week: 11,
    taskId: "mn-ing315-w11-future-maintenance-plan",
    taskTitle: "Brief The Maintenance Plan Using Future Forms",
    scenario: "The chief has set the week's planned maintenance. As an advanced task, the cadet must brief it using the right future forms so decisions, plans, arrangements and fixed times are each clear.",
    instructions: [
      "Use WILL for a decision or offer made now (for example 'I'll check the purifier after this') and for a prediction.",
      "Use GOING TO for an existing plan or intention (for example 'we are going to overhaul number two generator this week').",
      "Use the PRESENT CONTINUOUS for a fixed arrangement with a time (for example 'the service engineer is coming on board on Thursday') and the PRESENT SIMPLE for a timetable (for example 'the vessel enters dry dock at 0800 on Monday').",
      "Write a short maintenance brief using all four future forms correctly, in clear engine-room English."
    ],
    deliverable: "A maintenance brief in English using will, going to, the present continuous and the present simple for future, each in its correct function.",
    assessmentCriteria: [
      "WILL is used correctly for a decision or prediction.",
      "GOING TO is used correctly for a plan or intention.",
      "The present continuous (arrangement) and present simple (timetable) are correctly used for future.",
      "The brief is coherent and in correct engine-room English."
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
    unit: "Introducción: Inglés Marítimo",
    topic: "Puestos a bordo, ubicación del equipo de seguridad y dar direcciones en la sala de máquinas",
    week: 12,
    taskId: "mn-ing315-w12-engine-room-familiarisation-tour",
    taskTitle: "Give An Engine-Room Familiarisation Tour",
    scenario: "As the closing task of the subject, a new crew member must be shown round the engine room. The cadet gives a familiarisation tour, naming the machinery spaces and safety equipment and giving directions, integrating the maritime English of the subject.",
    instructions: [
      "Name the main machinery spaces and equipment and their location using position language (for example 'the emergency generator is on the deck above, forward of the workshop').",
      "Give directions on board using clear expressions (go up or down the ladder, forward or aft, port or starboard, at the top of the ladder).",
      "Point out the safety equipment and its location and purpose (the fire extinguishers, the emergency escape, the breathing-apparatus sets, the emergency stops).",
      "Deliver the tour as a short spoken script, using correct present tense and position language, in clear engine-room English."
    ],
    deliverable: "A short engine-room familiarisation tour script in English naming the machinery spaces and safety equipment with their location and giving directions on board.",
    assessmentCriteria: [
      "The machinery spaces and equipment are named with correct position language.",
      "Directions on board are given clearly (ladders, forward or aft, port or starboard).",
      "The safety equipment is located with its purpose.",
      "The tour is coherent and in correct engine-room English."
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
    unit: "Comunicación integrada máquinas-puente",
    topic: "Guardia de máquinas integrada: órdenes estándar de máquinas, respuesta al telégrafo y estado de la planta en stand-by",
    week: 13,
    taskId: "mn-ing315-w13-run-a-full-engine-watch-exchange",
    taskTitle: "Run A Full Engine-To-Bridge Exchange At Stand-By",
    scenario: "The vessel is at stand-by for departure Tampico. From the engine control room you must handle the full internal exchange with the bridge: acknowledge standard engine orders and telegraph movements, report the plant state and respond correctly as movements come down.",
    instructions: [
      "Acknowledge the standard engine orders and telegraph movements using the correct standard phrases.",
      "Report the plant state (which units are running, ready and on stand-by) to the bridge.",
      "Respond to a sequence of telegraph orders and confirm each movement made.",
      "Deliver the full engine-to-bridge exchange in correct SMCP / standard engine-room English."
    ],
    deliverable: "A recorded engine-to-bridge stand-by exchange with orders, acknowledgements and plant-state reports.",
    assessmentCriteria: [
      "Standard engine orders and telegraph movements are correctly acknowledged.",
      "The plant-state report is complete and accurate.",
      "Telegraph orders are answered with the correct confirmations.",
      "The whole exchange is delivered in correct SMCP / engine-room English."
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
    unit: "Voz pasiva",
    topic: "Redacción integrada del engine log: present perfect y voz pasiva para reportar mantenimiento completado",
    week: 14,
    taskId: "mn-ing315-w14-write-the-watch-log",
    taskTitle: "Write The Engine Watch Log For The Shift",
    scenario: "At the end of an engine-room watch you must write up the log. The completed maintenance and events must be recorded in the present perfect and the passive voice as the engine log requires, ready for the next watch.",
    instructions: [
      "Record the completed maintenance and checks using the present perfect (have + past participle).",
      "Write the event and maintenance entries in the passive voice as required in the engine log.",
      "Order the entries by time and highlight anything the next watch must monitor.",
      "Produce the finished watch log in correct engine-room English."
    ],
    deliverable: "A completed engine watch log with present-perfect and passive-voice entries for the shift.",
    assessmentCriteria: [
      "Completed work is correctly reported in the present perfect.",
      "Log entries correctly use the passive voice.",
      "Entries are correctly ordered and the watch items highlighted.",
      "The log reads as correct, professional engine-room English."
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
    unit: "Estilo indirecto",
    topic: "Relevo de guardia integrado: reported speech con backshift, órdenes permanentes con condicionales y modales de obligación",
    week: 15,
    taskId: "mn-ing315-w15-hand-over-the-engine-watch",
    taskTitle: "Hand Over The Engine Watch To The Relief",
    scenario: "You are handing over the engine-room watch. You must relay the messages and orders received during the watch in reported speech, pass on the chief engineer's standing orders using conditionals, and state the engine-room rules the relief must obey.",
    instructions: [
      "Relay the watch messages received in reported speech with the correct backshift of tenses.",
      "Pass on the chief engineer's standing orders using first and second conditionals.",
      "State the engine-room rules and duties using obligation, prohibition and permission modals.",
      "Deliver the full watch handover in correct engine-room English."
    ],
    deliverable: "A spoken/written watch handover with reported-speech messages, conditional standing orders and modal rules.",
    assessmentCriteria: [
      "Messages are relayed in reported speech with correct backshift.",
      "Standing orders correctly use first and second conditionals.",
      "Rules and duties correctly use obligation/prohibition/permission modals.",
      "The handover is delivered in correct engine-room English."
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
    unit: "Introducción: Inglés Marítimo",
    topic: "Respuesta de emergencia integrada: comandos estándar de emergencia y órdenes de máquinas en un incidente en la sala de máquinas",
    week: 16,
    taskId: "mn-ing315-w16-command-an-engine-emergency",
    taskTitle: "Give The Engine-Room Emergency Commands",
    scenario: "An emergency develops in the machinery space and the bridge must be kept informed while the response is run in English. You must give the standard emergency commands, order the engine movements the situation demands and report the emergency clearly to the bridge.",
    instructions: [
      "Give the standard emergency commands for the incident to the engine-room team.",
      "Order the engine and telegraph movements the emergency requires.",
      "Report the emergency, actions taken and plant status to the bridge.",
      "Deliver all commands and the report in correct SMCP / standard emergency English."
    ],
    deliverable: "An engine-room emergency communication set with the commands, engine orders and the bridge report.",
    assessmentCriteria: [
      "The standard emergency commands are correct and complete.",
      "The engine and telegraph orders suit the emergency.",
      "The bridge report is clear, accurate and timely.",
      "All communication is in correct SMCP / emergency English."
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
    unit: "Futuro",
    topic: "Sesión informativa integrada: formas de futuro, unidades de medida y modales para el plan de mantenimiento y consumos",
    week: 17,
    taskId: "mn-ing315-w17-brief-the-maintenance-plan",
    taskTitle: "Brief The Maintenance And Consumption Plan",
    scenario: "The chief engineer wants next week's maintenance and consumption plan briefed to the engine team. You must lay out the planned work using future forms, report fuel and oil quantities with the correct measure words, and state the rules the team must follow.",
    instructions: [
      "Present the planned maintenance work using the future forms (will, going to, present continuous).",
      "Report the fuel and oil quantities and consumptions with the correct measure words and units.",
      "State the rules and permissions for the work using obligation and permission modals.",
      "Deliver the maintenance and consumption briefing in correct engine-room English."
    ],
    deliverable: "A maintenance and consumption briefing with future-form plans, quantified consumptions and the working rules.",
    assessmentCriteria: [
      "Future forms are used correctly for the planned work.",
      "Fuel and oil quantities are reported with correct measure words and units.",
      "Rules and permissions correctly use modals.",
      "The briefing is delivered in correct engine-room English."
    ],
    xp: 30,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "ING315",
    subjectName: "Inglés Marítimo III",
    subjectId: "mn-s3-ingles-maritimo-iii",
    unit: "Comunicación integrada máquinas-puente",
    topic: "Integración de fin de semestre: familiarización de la sala de máquinas y relevo completo, del recorrido al traspaso de guardia",
    week: 18,
    taskId: "mn-ing315-w18-deliver-familiarisation-and-handover",
    taskTitle: "Deliver The Engine-Room Familiarisation And Watch Handover",
    scenario: "A newly joined engineer must be brought up to speed and the watch handed over. You must give an engine-room familiarisation tour, then hand over the watch pulling together the semester's functions: plant state, standing orders, completed work and the rules of the space.",
    instructions: [
      "Give the engine-room familiarisation tour: stations, safety equipment locations and directions in the space.",
      "Report the plant state and completed maintenance to the joining engineer.",
      "Hand over the standing orders, watch messages and engine-room rules for the coming watch.",
      "Deliver the whole familiarisation and handover in correct SMCP / engine-room English."
    ],
    deliverable: "A combined familiarisation-and-handover briefing covering the space, plant state, orders and rules.",
    assessmentCriteria: [
      "The familiarisation tour correctly covers stations, safety gear and directions.",
      "The plant state and completed work are accurately reported.",
      "Standing orders, messages and rules are correctly handed over.",
      "The whole briefing is delivered in correct SMCP / engine-room English."
    ],
    xp: 30,
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
    topic: "Motones, cuadernales y ventaja mecánica para izar piezas de máquinas",
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
    topic: "Equipo, catenaria y zonas de latigazo (snap-back); disponibilidad de máquina en el remolque",
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
    topic: "Trincado en la sala de máquinas, tránsito seguro y preparación de la planta antes del temporal",
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
    topic: "Acciones inmediatas, respuesta de máquinas al Williamson y embarcación de rescate lista para arriar",
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
    subjectCode: "PMR321",
    subjectName: "Prácticas Marineras III",
    subjectId: "mn-s3-practicas-marineras-iii",
    unit: "Uso de anticorrosivos, pinturas y solventes",
    topic: "Preparación de superficie, anticorrosivos, pinturas y solventes y sus herramientas",
    week: 9,
    taskId: "mn-pmr321-w09-surface-prep-painting",
    taskTitle: "Prepare And Paint A Corroded Engine-Room Surface",
    scenario: "A rusted engine-room surface must be protected with paint. The officer asks the cadet to plan the surface preparation and painting using the right products, tools and safety.",
    instructions: [
      "Prepare the surface: remove rust and scale (wire brush, scraper or powered tool), then clean and degrease it so the paint will key and hold.",
      "Apply the coating system: an anticorrosive primer first, then the finishing coats, and state why the primer must go on before the topcoat.",
      "Choose the tools (brush, roller or spray) and the correct solvent or thinner for the paint, and note not to apply on a damp or dirty surface.",
      "State the safety: ventilation against solvent fumes, no naked flames (flammable solvents), and PPE. Report the plan in clear engine-room English."
    ],
    deliverable: "A painting plan in English covering surface preparation, the primer-then-topcoat system, the tools and solvent, and the fume and flammable safety.",
    assessmentCriteria: [
      "The surface preparation (de-rust, clean, degrease) is correct.",
      "The primer-then-topcoat system is correctly ordered and justified.",
      "The tools and correct solvent or thinner are appropriate.",
      "The fume and flammable safety is sound, in clear engine-room English."
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
    unit: "Pintura de ductos",
    topic: "Código de colores de tuberías: agua, combustible, aire y ductos de alta temperatura",
    week: 10,
    taskId: "mn-pmr321-w10-pipeline-colour-coding",
    taskTitle: "Identify And Paint Pipelines By Their Colour Code",
    scenario: "The engine-room pipelines must be identified by a colour code so any crew member knows what each one carries. The officer asks the cadet to explain and apply the pipeline colour coding.",
    instructions: [
      "Explain why pipelines are colour coded: so the contents (water, fuel, air, steam) are identified at a glance for safe operation and in emergencies.",
      "Match the main services to their identification: fresh and sea water, fuel and lube oil, compressed air lines, and high-temperature ducts (steam and exhaust), noting that the fire main is usually red.",
      "State the precautions when painting near a high-temperature duct or a live line (heat, do not paint over valves, gauges or nameplates, keep flammable paint clear of hot surfaces).",
      "Describe applying an identification band and report in clear engine-room English."
    ],
    deliverable: "A note in English explaining pipeline colour coding, matching the main services to their identification (with the red fire main), the precautions near hot lines, and applying an identification band.",
    assessmentCriteria: [
      "The purpose of colour coding is correctly explained.",
      "The main services are matched to sensible identification, including the fire main.",
      "The precautions near hot or live lines are correct.",
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
    unit: "Procedimientos para controlar vías de agua",
    topic: "Materiales y métodos para control de vías de agua: estera de colisión, cuñas, tapones y apuntalado",
    week: 11,
    taskId: "mn-pmr321-w11-leak-control-materials",
    taskTitle: "Control A Hull Leak With Damage-Control Materials",
    scenario: "Water is entering through a damaged plate near the engine room. Building on the ingress types of week 2, the officer asks the cadet to control the leak with the ship's damage-control materials.",
    instructions: [
      "Match the material or method to the leak: soft wooden wedges and plugs for small holes and split seams, a cement box for a crack, and a collision mat over a larger breach from outside.",
      "Describe shoring: use timber or adjustable shores to support a weakened bulkhead, door or patch against the water pressure.",
      "State the order of actions: stop or reduce the inflow first, then start pumping or bilging the space, and report the situation, watching the effect of the water on stability.",
      "Distinguish this from week 2 (which identified the TYPES of ingress); here the cadet controls it. Report the response in clear engine-room English."
    ],
    deliverable: "A damage-control note in English matching materials and methods to the leak (wedges, plugs, cement box, collision mat), describing shoring, and the order stop-inflow, pump, report, distinct from week 2.",
    assessmentCriteria: [
      "The materials and methods are correctly matched to the leak type (wedges and plugs, cement box, collision mat).",
      "Shoring is correctly described to support against water pressure.",
      "The order of actions (stop inflow, pump, report, watch stability) is sound.",
      "The response is distinct from week 2 and in clear engine-room English."
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
    unit: "Mantenimiento y Operación de Botes Salvavidas",
    topic: "Arreado y virado del bote con pescantes, manejo y trincado en el zafarrancho",
    week: 12,
    taskId: "mn-pmr321-w12-lifeboat-launch-handling",
    taskTitle: "Launch, Handle And Secure The Lifeboat In A Drill",
    scenario: "As the closing task of the subject, a lifeboat drill is held. The officer asks the cadet to set out lowering the boat on the davits, handling it in the water, and recovering and securing it, drawing together the survival-craft skills of the subject.",
    instructions: [
      "Describe lowering (arreado): man the boat, release the gripes, lower on the davit falls under control of the brake, and release the falls or hooks once waterborne (the on-load release only when clear).",
      "Handle the boat clear of the ship's side using the engine (started and checked as in week 1) or the oars, keeping clear of the ship in a swell.",
      "Recover (virado): hook on, hoist on the davits under control, and secure and stow the boat in its cradle (trincado) with the gripes.",
      "State one safety point for the drill (crew in lifejackets, no one under a suspended boat, control the brake) and report in clear maritime English."
    ],
    deliverable: "A note in English setting out lowering the lifeboat on the davits, handling it clear under engine or oars, recovering and securing it, with one drill safety point, integrating the survival-craft skills of the subject.",
    assessmentCriteria: [
      "Lowering on the davits (man, release gripes, brake control, release when waterborne) is correct.",
      "Handling the boat clear under engine (week 1) or oars is sound.",
      "Recovery and securing or stowing (virado, trincado) are correct.",
      "One valid drill safety point is given, in clear maritime English."
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
    topic: "Preparación integrada para mal tiempo: trincado en la sala de máquinas, tránsito seguro y preparación de la planta antes del temporal",
    week: 13,
    taskId: "mn-pmr321-w13-prepare-for-heavy-weather",
    taskTitle: "Prepare The Engine Room For A Heavy-Weather Passage",
    scenario: "A gale is forecast on the passage from Tampico. From the engine room you must prepare for heavy weather: lash down loose gear and stores, secure safe transit routes, and get the plant ready for the motion and increased demand of the storm.",
    instructions: [
      "Lash and secure loose gear, tools and stores in the machinery space against the ship's motion.",
      "Secure safe transit routes and brief the crew on moving safely in a rolling engine room.",
      "Prepare the plant (sea suctions, fuel, standby units) for the increased demand and motion of the storm.",
      "Report the engine-room heavy-weather readiness to the chief engineer in standard engine-room English."
    ],
    deliverable: "A heavy-weather preparation checklist covering lashing, safe transit and plant readiness.",
    assessmentCriteria: [
      "Loose gear and stores are correctly and fully secured.",
      "Safe transit routes and crew movement are properly addressed.",
      "The plant is correctly prepared for storm demand and motion.",
      "The readiness report is delivered in clear, correct engine-room English."
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
    unit: "Aparejos y maniobras de fuerza",
    topic: "Maniobra de fuerza integrada: motones, cuadernales y ventaja mecánica con uso seguro de herramientas para izar una pieza de máquinas",
    week: 14,
    taskId: "mn-pmr321-w14-rig-a-lift-for-an-engine-part",
    taskTitle: "Rig And Lift A Heavy Engine Part Safely",
    scenario: "A heavy engine part must be lifted and moved in the machinery space using a block and tackle. You must rig the purchase for the right mechanical advantage, select and use the tools and gear safely, and carry out a controlled lift.",
    instructions: [
      "Select the blocks and rig the tackle for the mechanical advantage the load needs.",
      "Choose and use the correct tools and lifting gear, checking their condition and rating.",
      "Carry out the controlled lift and traverse, keeping the load under control throughout.",
      "Report the lift plan and its safe completion to the duty engineer in standard engine-room English."
    ],
    deliverable: "A lifting plan and record covering the purchase rigged, gear used and the controlled lift.",
    assessmentCriteria: [
      "The tackle is rigged for the correct mechanical advantage.",
      "Tools and lifting gear are correctly selected and checked.",
      "The lift is carried out controlled and safe.",
      "The lift record is reported in clear, correct engine-room English."
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
    unit: "Uso de anticorrosivos, pinturas y solventes",
    topic: "Mantenimiento integrado de superficies: preparación, anticorrosivos y pintura con código de colores de tuberías en la sala de máquinas",
    week: 15,
    taskId: "mn-pmr321-w15-restore-an-engine-room-surface",
    taskTitle: "Restore And Colour-Code An Engine-Room Surface",
    scenario: "A corroded surface and a run of unmarked pipework in the machinery space must be restored. You must prepare the surface, apply the anticorrosive and paint system, and mark the pipelines to the correct colour code so services are identified.",
    instructions: [
      "Prepare the corroded surface and the pipe run using the correct tools, anticorrosives and solvents.",
      "Apply the paint system to the surface following the coating sequence.",
      "Mark the pipelines to the colour code for water, fuel, air and high-temperature ducts.",
      "Report the completed surface and pipe marking to the duty engineer in standard engine-room English."
    ],
    deliverable: "A surface-restoration and pipe-marking record covering preparation, coating and colour code applied.",
    assessmentCriteria: [
      "Surface preparation and anticorrosive application are correct.",
      "The paint system is applied in the correct sequence.",
      "Pipelines are marked correctly to the colour code.",
      "The completion report is delivered in clear, correct engine-room English."
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
    unit: "Procedimientos para controlar vías de agua",
    topic: "Respuesta integrada a una vía de agua: tipos de vía, estera de colisión, cuñas, tapones y apuntalado con la máquina en apoyo",
    week: 16,
    taskId: "mn-pmr321-w16-control-a-hull-leak",
    taskTitle: "Control A Hull Leak With Damage-Control Materials",
    scenario: "Water ingress is reported through the hull near the machinery space. You must identify the type of leak, control it with the damage-control materials, and coordinate engine-room support for pumping and safe working while the leak is contained.",
    instructions: [
      "Identify the type and source of the water ingress and its rate.",
      "Control the leak with the damage-control materials: collision mat, wedges, plugs and shoring.",
      "Coordinate engine-room support for bilge pumping and keep the working area safe.",
      "Report the leak, the control action and the situation to the bridge in standard engine-room English."
    ],
    deliverable: "A damage-control report covering the leak type, the containment materials used and the pumping support.",
    assessmentCriteria: [
      "The leak type, source and rate are correctly identified.",
      "The damage-control materials are correctly applied to contain it.",
      "Engine-room pumping support is correctly coordinated.",
      "The situation report is delivered in clear, correct engine-room English."
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
    unit: "Hombre al agua y embarcación de rescate",
    topic: "Respuesta integrada a hombre al agua: acciones inmediatas, respuesta de máquinas al Williamson y arriado del bote salvavidas",
    week: 17,
    taskId: "mn-pmr321-w17-support-a-man-overboard-recovery",
    taskTitle: "Support A Man-Overboard Recovery And Launch The Boat",
    scenario: "A man-overboard is called during the passage. From the engine room you must support the immediate actions and the Williamson turn manoeuvre, then help launch, handle and recover with the lifeboat/rescue boat, coordinating machinery response throughout.",
    instructions: [
      "Take the immediate engine-room actions for a man-overboard and stand the plant by.",
      "Provide the machinery response to the bridge's Williamson turn and manoeuvring orders.",
      "Support launching, handling and securing the lifeboat/rescue boat with davits in the drill.",
      "Report the engine-room actions and readiness to the bridge in standard engine-room English."
    ],
    deliverable: "A man-overboard support record covering immediate actions, Williamson machinery response and boat handling.",
    assessmentCriteria: [
      "The immediate engine-room actions are correct and prompt.",
      "The machinery response to the Williamson turn is correct.",
      "Boat launch, handling and securing are correctly supported.",
      "The report to the bridge is delivered in clear, correct engine-room English."
    ],
    xp: 30,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "PMR321",
    subjectName: "Prácticas Marineras III",
    subjectId: "mn-s3-practicas-marineras-iii",
    unit: "Manejo de pañoles",
    topic: "Integración de fin de semestre: preparación de guardia de marinería, del inventario del pañol al uso seguro de herramientas y aparejos",
    week: 18,
    taskId: "mn-pmr321-w18-brief-seamanship-readiness",
    taskTitle: "Deliver The Seamanship Readiness Handover",
    scenario: "At the end of the semester you must hand over the engine-room seamanship readiness: the store inventory current, tools and rigging gear in order, damage-control and heavy-weather materials ready, and safe working practices confirmed for the incoming watch.",
    instructions: [
      "Confirm the store inventory is current and the tools and rigging gear are accounted for.",
      "Confirm the damage-control and heavy-weather materials are ready and correctly stowed.",
      "Confirm safe use of tools, lifting gear and safe transit for the incoming watch.",
      "Deliver the seamanship readiness handover to the chief engineer in standard engine-room English."
    ],
    deliverable: "A seamanship readiness handover covering inventory, gear, damage-control materials and safe practices.",
    assessmentCriteria: [
      "The store inventory and gear accounting are complete and correct.",
      "Damage-control and heavy-weather materials are confirmed ready.",
      "Safe working practices are correctly confirmed for the watch.",
      "The handover is delivered in clear, correct engine-room English."
    ],
    xp: 30,
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
    topic: "Alimentación e hidratación para el trabajo en el espacio de máquinas (ambiente caluroso)",
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
    topic: "El deporte de equipo y su transferencia al equipo de guardia y la cuadrilla de máquinas",
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
    topic: "Pruebas funcionales e interpretación por capacidad para el trabajo de máquinas",
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
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "mn-s3-educacion-fisica-iii",
    unit: "Desarrollo físico integral",
    topic: "Fuerza muscular para las tareas físicas del espacio de máquinas",
    week: 9,
    taskId: "mn-c0011iii-w09-functional-strength",
    taskTitle: "Build Functional Strength For Engine-Room Tasks",
    scenario: "Engine-room work needs practical strength: turning stiff valves, carrying spares and handling tools. The training officer asks the cadet to explain how functional strength is built and used, as general positive habits, not as appearance or records.",
    instructions: [
      "Give two engine-room tasks that need muscular strength (for example turning a stiff valve, lifting a pump spare, or freeing a tight bolt).",
      "Describe how strength is trained safely and generally (progressive, whole-body movements, good technique) and why a warm-up matters.",
      "Explain how good strength together with correct posture (week 7) reduces the risk of strain and injury on the job.",
      "Give only general, positive guidance (steady, sustainable gains for work capacity, never a target weight, never an appearance goal, never a maximal test to prove strength) and report in clear engine-room English."
    ],
    deliverable: "A note in English linking muscular strength to engine-room tasks, how it is trained safely, and how strength plus posture reduce injury, given as positive habits with no weight targets or appearance goals.",
    assessmentCriteria: [
      "The tasks chosen genuinely need muscular strength.",
      "The training described is safe, general and progressive, with a warm-up.",
      "The link to posture (week 7) and reduced injury is sound.",
      "The guidance stays positive with no weight targets or appearance goals, in clear engine-room English."
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
    unit: "Desarrollo físico integral",
    topic: "Flexibilidad articular y muscular para trabajar en espacios confinados",
    week: 10,
    taskId: "mn-c0011iii-w10-flexibility-mobility",
    taskTitle: "Improve Flexibility For Awkward Engine Spaces",
    scenario: "Much engine-room work is done reaching into tight, awkward spaces. The training officer asks the cadet to explain how flexibility and mobility help this work and how they are maintained, as positive general habits.",
    instructions: [
      "Explain what flexibility and joint mobility are and why they help when reaching into bilges, behind machinery and into confined spaces.",
      "Describe simple, safe mobility work and stretching (gentle, within range, not forced or bounced) and when to do it (when warm, after activity).",
      "Explain how good flexibility, with the micro-breaks of week 7, reduces stiffness and strain over a working day.",
      "Keep the guidance general and positive (mobility for the work, not extreme flexibility or a performance test) and report in clear engine-room English."
    ],
    deliverable: "A note in English explaining flexibility and joint mobility for confined-space work, safe stretching, and how flexibility with week 7's micro-breaks reduces strain, as positive general habits.",
    assessmentCriteria: [
      "Flexibility and mobility are correctly linked to confined-space engine work.",
      "The stretching described is safe (gentle, within range, when warm).",
      "The link to week 7's micro-breaks and less strain is sound.",
      "The guidance stays general and positive, in clear engine-room English."
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
    unit: "Percepción y coordinación motriz",
    topic: "Equilibrio y lateralidad para moverse con seguridad en un buque que cabecea",
    week: 11,
    taskId: "mn-c0011iii-w11-balance-rolling-ship",
    taskTitle: "Train Balance For Moving Safely On A Rolling Ship",
    scenario: "On a rolling, pitching ship the engine crew move on ladders, gratings and plate floors. As an advanced task, the training officer asks the cadet to explain how balance is trained and how it keeps them safe in a seaway.",
    instructions: [
      "Explain balance and how the body keeps it (the inner ear, vision and the feel of the feet) and why a moving deck makes it harder.",
      "Describe simple, safe ways to train balance and coordination (single-leg work, controlled movements), linking to the coordination of week 2.",
      "State the safe-movement rules on a rolling ship: one hand for the ship on ladders, move with the roll not against it, and watch footing on wet or oily gratings.",
      "Explain how trained balance reduces the risk of a fall in the machinery space, and report in clear engine-room English."
    ],
    deliverable: "A note in English explaining balance and how it is trained, the safe-movement rules on a rolling ship, and how balance reduces falls, linked to week 2 coordination.",
    assessmentCriteria: [
      "Balance and how the body maintains it are correctly explained.",
      "The training described is safe and linked to week 2 coordination.",
      "The safe-movement rules on a rolling ship are correct (one hand for the ship, move with the roll, watch footing).",
      "The link to fewer falls is sound, in clear engine-room English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "mn-s3-educacion-fisica-iii",
    unit: "Natación",
    topic: "Flotación, nado libre y nado en grupo para la supervivencia en el agua",
    week: 12,
    taskId: "mn-c0011iii-w12-swimming-group-water",
    taskTitle: "Demonstrate Swimming And Group-Water Skills",
    scenario: "As the closing task of the subject, the whole crew must be able to swim and act together in the water. The instructor asks the cadet to describe floating, free swimming and group-in-the-water skills, complementing the survival techniques of week 3.",
    instructions: [
      "Describe floating to conserve energy (a relaxed back float or the survival float) and steady breathing.",
      "Describe free swimming with an efficient stroke to cover distance without exhausting yourself, and pacing.",
      "Describe group-in-the-water skills: staying together, linking up (the huddle to keep warm, or a chain), and helping a weaker swimmer.",
      "Explain how these complement the week 3 survival skills (entry, staying afloat, reaching a craft) and report in clear English suitable for a safety briefing."
    ],
    deliverable: "A swimming brief in English covering floating to conserve energy, efficient free swimming, and group-in-the-water skills, complementing the week 3 survival techniques.",
    assessmentCriteria: [
      "Floating to conserve energy is correctly described.",
      "Efficient free swimming and pacing are sound.",
      "The group-in-the-water skills (staying together, huddle or chain, helping a weaker swimmer) are correct.",
      "The link to week 3 survival skills is made, in clear English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "mn-s3-educacion-fisica-iii",
    unit: "Autoevaluación funcional y plan personal",
    topic: "Plan integrado de aptitud para máquinas: resistencia cardiorrespiratoria, fuerza funcional y autoevaluación por capacidad",
    week: 13,
    taskId: "mn-c0011iii-w13-build-a-fitness-plan-for-engine-duties",
    taskTitle: "Build Your Fitness Plan For Engine-Room Duties",
    scenario: "As an engine cadet you must build a personal fitness plan matched to the physical demands of engine-room work. You must combine your cardiorespiratory endurance, functional strength and a self-assessment of your capacity into a plan that keeps you fit for the space.",
    instructions: [
      "Run the functional self-assessment and interpret your capacity for engine-room work.",
      "Set cardiorespiratory endurance targets for the demands of engine duties.",
      "Build the functional-strength component for the physical tasks of the machinery space.",
      "Present your personal fitness plan and its rationale in standard maritime English."
    ],
    deliverable: "A personal fitness plan with the self-assessment result, endurance targets and strength component.",
    assessmentCriteria: [
      "The functional self-assessment is correctly run and interpreted.",
      "Endurance targets match the demands of engine duties.",
      "The strength component fits the machinery-space tasks.",
      "The plan is presented in clear, correct maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "mn-s3-educacion-fisica-iii",
    unit: "Ergonomía del trabajo de máquinas",
    topic: "Rutina integrada de ergonomía: posturas de mantenimiento, flexibilidad para espacios confinados y micro-pausas",
    week: 14,
    taskId: "mn-c0011iii-w14-design-an-ergonomics-routine",
    taskTitle: "Design An Ergonomics Routine For Awkward Engine Spaces",
    scenario: "Maintenance in confined engine spaces puts the body under postural strain. You must design an ergonomics routine that protects posture during maintenance work, builds the flexibility needed for awkward spaces and schedules micro-pauses to prevent injury.",
    instructions: [
      "Identify the high-risk postures of maintenance work in confined spaces and vertical ladders.",
      "Build the joint and muscle flexibility work needed to move safely in awkward spaces.",
      "Schedule micro-pauses and posture resets into a typical maintenance task.",
      "Present the ergonomics routine and its purpose in standard maritime English."
    ],
    deliverable: "An ergonomics routine covering high-risk postures, flexibility work and scheduled micro-pauses.",
    assessmentCriteria: [
      "High-risk maintenance postures are correctly identified.",
      "The flexibility work fits movement in confined spaces.",
      "Micro-pauses are sensibly scheduled into the task.",
      "The routine is presented in clear, correct maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "mn-s3-educacion-fisica-iii",
    unit: "Percepción y coordinación motriz",
    topic: "Entrenamiento integrado de seguridad de movimiento: equilibrio y lateralidad en un buque que cabecea con coordinación para tareas precisas",
    week: 15,
    taskId: "mn-c0011iii-w15-train-safe-movement-onboard",
    taskTitle: "Train Safe Movement For A Rolling Engine Room",
    scenario: "Moving safely and working precisely in a rolling ship is a survival skill for an engineer. You must build a training set that develops balance and laterality for a pitching ship and links coordination to precise engine tasks like valve and tool work.",
    instructions: [
      "Build the balance and laterality drills for moving safely on a rolling, pitching ship.",
      "Link motor coordination to precise engine tasks such as valve, gauge and tool handling.",
      "Combine both into a routine that trains safe movement and precise work together.",
      "Present the movement-safety training set and its transfer to engine work in standard maritime English."
    ],
    deliverable: "A movement-safety training set combining balance/laterality drills with precise-task coordination.",
    assessmentCriteria: [
      "The balance and laterality drills suit a rolling ship.",
      "Coordination is correctly linked to precise engine tasks.",
      "The combined routine trains movement and precision together.",
      "The training set is presented in clear, correct maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "mn-s3-educacion-fisica-iii",
    unit: "Natación",
    topic: "Respuesta integrada de supervivencia en el agua: flotación, nado libre, nado en grupo y sobrevivencia",
    week: 16,
    taskId: "mn-c0011iii-w16-demonstrate-water-survival",
    taskTitle: "Demonstrate Water Survival And Group Swimming",
    scenario: "In an abandon-ship situation an engineer must survive in the water and stay with the group. You must demonstrate the survival response: keeping afloat, free swimming to a survival craft and swimming as a group to improve everyone's chances.",
    instructions: [
      "Demonstrate flotation and survival techniques to conserve energy in the water.",
      "Demonstrate free swimming to reach a survival craft or safe point.",
      "Demonstrate group-water swimming that keeps the group together and supports weaker swimmers.",
      "Report the water-survival actions and their purpose in standard maritime English."
    ],
    deliverable: "A water-survival demonstration record covering flotation, free swimming and group-water skills.",
    assessmentCriteria: [
      "Flotation and survival techniques conserve energy correctly.",
      "Free swimming reaches the target effectively.",
      "Group-water swimming keeps the group together and supported.",
      "The actions are reported in clear, correct maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "mn-s3-educacion-fisica-iii",
    unit: "Deportes de conjunto y cohesión de equipo",
    topic: "Integración de cohesión de la cuadrilla: el deporte de equipo, la nutrición e hidratación y la concentración para la seguridad de la guardia",
    week: 17,
    taskId: "mn-c0011iii-w17-build-engine-crew-readiness",
    taskTitle: "Build The Engine Crew's Team Readiness",
    scenario: "The engine watch team performs best when it is fit, fuelled and focused together. You must build a crew-readiness plan that uses team sport to build cohesion, sets fuelling and hydration for hot engine-room work and links concentration to watch safety.",
    instructions: [
      "Design the team-sport activity that builds cohesion and transfers to the watch and maintenance crew.",
      "Set the fuelling and hydration guidance for working in the hot machinery space.",
      "Link concentration training to engine-watch safety and error prevention.",
      "Present the crew-readiness plan and its safety benefit in standard maritime English."
    ],
    deliverable: "A crew-readiness plan combining team-sport cohesion, fuelling/hydration and concentration for watch safety.",
    assessmentCriteria: [
      "The team-sport activity builds cohesion that transfers to the crew.",
      "Fuelling and hydration suit hot engine-room work.",
      "Concentration is correctly linked to watch safety.",
      "The plan is presented in clear, correct maritime English."
    ],
    xp: 30,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "mn-s3-educacion-fisica-iii",
    unit: "Autoevaluación funcional y plan personal",
    topic: "Integración de fin de semestre: expediente de aptitud para el trabajo de máquinas, de la autoevaluación al plan de mejora",
    week: 18,
    taskId: "mn-c0011iii-w18-brief-fitness-readiness",
    taskTitle: "Deliver Your Fitness-For-Duty Readiness Report",
    scenario: "At the end of the semester you must report your fitness for engine-room duty. You must pull the semester together: the self-assessment result, your endurance, strength, flexibility and movement-safety, and a plan to close any gap before sea service.",
    instructions: [
      "Summarise your functional self-assessment and current capacity for engine-room work.",
      "State your endurance, strength, flexibility and movement-safety standing against the demands of the space.",
      "Set an improvement plan to close any gap before sea service.",
      "Deliver the fitness-for-duty readiness report in standard maritime English."
    ],
    deliverable: "A fitness-for-duty readiness report with the self-assessment, current standing and an improvement plan.",
    assessmentCriteria: [
      "The self-assessment and capacity summary are accurate.",
      "Endurance, strength, flexibility and movement-safety are correctly stated.",
      "The improvement plan sensibly closes the identified gap.",
      "The report is delivered in clear, correct maritime English."
    ],
    xp: 30,
    estimatedTime: "45 min",
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
    topic: "Muster list, cadena de mando y el rol del control de máquinas en la emergencia",
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
    topic: "SCBA, disciplina de aire con el agravante del calor y búsqueda adaptada al espacio de máquinas",
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
    topic: "CO2 de inundación total del espacio de máquinas: protocolo de seguridad y pasos que ejecuta máquinas",
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
    topic: "Ataque integrado a un incendio de máquinas y guardia de reignición (reflash watch)",
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
    subjectCode: "C0038",
    subjectName: "Técnicas Avanzadas de Lucha Contra Incendio",
    subjectId: "mn-s3-tecnicas-avanzadas-lucha-contra-incendio",
    unit: "Inspeccionar los servicios de los sistemas y equipos de detección y extinción de incendios",
    topic: "Línea principal contra incendios, hidrantes, mangueras, toberas y bombas",
    week: 9,
    taskId: "mn-c0038-w09-fire-main-hoses",
    taskTitle: "Bring The Fire Main Into Action In The Engine Room",
    scenario: "A fire in the engine room must be fought with water from the fire main. The officer asks the cadet to bring the fire main into action: pump, hydrant, hose and nozzle.",
    instructions: [
      "Name the parts of the system: the fire pump (and the emergency fire pump outside the machinery space), the fire main, the hydrants, the hoses and the nozzles.",
      "Describe rigging a hose to a hydrant and selecting the nozzle setting: a JET for reach and a SPRAY for a wide, cooling, protective pattern.",
      "Explain the emergency fire pump's importance: it can be run when the main machinery-space fire pump is out of action or its space cannot be entered.",
      "State that a spray or fog is used on an engine-room fire near electrics and hot oil rather than a solid jet, and report in clear engine-room English."
    ],
    deliverable: "A note in English naming the fire-main parts (pump, emergency fire pump, hydrant, hose, nozzle), rigging a hose and choosing jet or spray, and the role of the emergency fire pump.",
    assessmentCriteria: [
      "The fire-main parts are correctly named, including the emergency fire pump.",
      "Rigging a hose and the jet-versus-spray choice are correct.",
      "The role of the emergency fire pump is correct.",
      "The spray or fog choice near electrics and oil is sound, in clear engine-room English."
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
    topic: "Equipo portátil de extinción y su selección por clase de fuego",
    week: 10,
    taskId: "mn-c0038-w10-portable-extinguishers",
    taskTitle: "Match Portable Extinguishers To Engine-Room Fire Classes",
    scenario: "The engine room carries several types of portable extinguisher. The officer asks the cadet to match each to the class of fire and choose the right one for an oil fire and an electrical fire.",
    instructions: [
      "State the fire classes present in the engine room: Class A (solids), Class B (flammable liquids such as fuel and oil) and electrical fires.",
      "Match the extinguishers: foam and dry powder for Class B oil fires, CO2 and dry powder for electrical fires, and water for Class A only (never on oil or live electrics).",
      "Explain WHY water must not be used on an oil fire (it spreads the burning oil and can flash to steam) or on live electrics (shock risk).",
      "Choose an extinguisher for an oil-tray fire and for a fire in a switchboard, justify each, and report in clear engine-room English."
    ],
    deliverable: "A note in English stating the engine-room fire classes, matching portable extinguishers to each (foam or powder for oil, CO2 or powder for electrical, water for Class A only), and justified choices for an oil and an electrical fire.",
    assessmentCriteria: [
      "The fire classes (A, B, electrical) are correctly stated.",
      "The extinguisher-to-class matches are correct.",
      "The reason water is banned on oil and on live electrics is correct.",
      "The oil-fire and switchboard choices are justified, in clear engine-room English."
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
    topic: "Empleo del agua contra incendios y su efecto sobre la estabilidad del buque",
    week: 11,
    taskId: "mn-c0038-w11-firefighting-water-stability",
    taskTitle: "Manage Firefighting Water To Protect Ship Stability",
    scenario: "A long firefighting effort is pumping water into the ship. As an advanced task, the officer asks the cadet to explain how accumulated firefighting water threatens stability and how it is managed.",
    instructions: [
      "Explain the danger: water pumped in to fight the fire collects on decks and in spaces, adding weight high up and forming free surfaces.",
      "Explain the FREE SURFACE EFFECT: a partly filled space lets the water slosh, which reduces the ship's stability (the metacentric height) and can lead to a dangerous list or a loss of stability.",
      "State the control measures: use spray rather than excess water, provide drainage and freeing ports, and pump or drain accumulated water out so it does not build up.",
      "Explain the balance: enough water to fight the fire, but not so much that the ship is endangered. Report in clear engine-room English."
    ],
    deliverable: "A note in English explaining how accumulated firefighting water and the free surface effect threaten stability, and the control measures (limit water, drainage, pump out) to keep the ship safe.",
    assessmentCriteria: [
      "The danger of accumulated firefighting water (added top weight) is correct.",
      "The free surface effect and its reduction of stability are correctly explained.",
      "The control measures (limit water, drainage or freeing ports, pump out) are correct.",
      "The balance between fighting the fire and protecting stability is sound, in clear engine-room English."
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
    topic: "Coordinación con los bomberos en tierra en puerto y reporte e investigación del incendio",
    week: 12,
    taskId: "mn-c0038-w12-shore-brigade-handover-report",
    taskTitle: "Hand Over An Engine-Room Fire To The Shore Brigade And Report It",
    scenario: "The ship is alongside when the engine-room fire happens, so the port fire brigade will attend. As the closing task of the subject, the officer asks the cadet to coordinate the handover to the shore firefighters and then write the fire report.",
    instructions: [
      "Brief the shore fire brigade on arrival: the location and extent of the fire, what is burning (fuel, electrical), what has been isolated and done, the dangers (CO2 released, hazards), and whether all persons are accounted for.",
      "Explain the coordination: the ship's team knows the layout and systems, the shore brigade brings resources, so a single chain of command and shared communications are agreed.",
      "After the fire, write the fire report: what happened, the actions taken and the outcome, objectively, and note the lessons learned for the future.",
      "Explain why an accurate handover and report matter (the safety of the shore team and improving future response) and report in clear engine-room English."
    ],
    deliverable: "A note in English covering the briefing handover to the shore fire brigade (location, fuel, isolations, dangers, persons), the agreed coordination and command, and an objective fire report with lessons learned.",
    assessmentCriteria: [
      "The handover briefing to the shore brigade is complete (location, extent, fuel, isolations, dangers, persons accounted for).",
      "The coordination (the ship's layout knowledge, single command, shared communications) is sound.",
      "The fire report is objective, with the actions, outcome and lessons learned.",
      "The value of an accurate handover and report is explained, in clear engine-room English."
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
    unit: "Mando y organización del sistema contra incendios",
    topic: "Mando integrado de un incendio de máquinas: muster list, cadena de mando, formación de cuadrillas y rol del control de máquinas",
    week: 13,
    taskId: "mn-c0038-w13-command-an-engine-room-fire-response",
    taskTitle: "Command The Response To An Engine-Room Fire",
    scenario: "A fire breaks out in the machinery space. As the engineer at the control station you must command the response: muster and assign the fire-fighting teams by the muster list, run the chain of command, and coordinate the engine-control room's role in the emergency.",
    instructions: [
      "Muster the crew and assign the fire-fighting teams following the muster list.",
      "Run the chain of command and set the engine-control room's role in the response.",
      "Direct the first attack and boundary cooling while keeping the master informed.",
      "Report the fire situation, actions and resources to the bridge in standard emergency English."
    ],
    deliverable: "A fire-command log covering team assignment, chain of command and the control-room coordination.",
    assessmentCriteria: [
      "Teams are correctly mustered and assigned by the muster list.",
      "The chain of command and control-room role are correctly run.",
      "The first attack and boundary cooling are correctly directed.",
      "The situation report is delivered in clear, correct emergency English."
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
    topic: "Ataque integrado a un incendio de máquinas: control de combustible y sistemas eléctricos, línea principal contra incendios y guardia de reignición",
    week: 14,
    taskId: "mn-c0038-w14-mount-an-integrated-fire-attack",
    taskTitle: "Mount An Integrated Attack On An Engine-Room Fire",
    scenario: "The engine-room fire is established and must be fought directly. You must isolate the fuel and electrical systems feeding it, bring the fire main into action, mount the integrated attack and set a reflash watch once it is knocked down.",
    instructions: [
      "Isolate the fuel supply and electrical systems feeding the fire.",
      "Bring the fire main, hydrants and hoses into action in the machinery space.",
      "Mount the integrated attack on the seat of the fire and post a reflash watch once knocked down.",
      "Report the attack progress and the reflash watch to the master in standard emergency English."
    ],
    deliverable: "An integrated fire-attack record covering fuel/electrical isolation, fire main in action and the reflash watch.",
    assessmentCriteria: [
      "Fuel and electrical systems are correctly isolated.",
      "The fire main is correctly brought into action.",
      "The integrated attack and reflash watch are correctly conducted.",
      "The progress report is delivered in clear, correct emergency English."
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
    unit: "Equipo de respiración autónoma y búsqueda en el espacio de máquinas",
    topic: "Búsqueda integrada con SCBA: disciplina de aire con el agravante del calor, selección de extintores portátiles por clase y detección",
    week: 15,
    taskId: "mn-c0038-w15-search-the-machinery-space-with-scba",
    taskTitle: "Search The Machinery Space With SCBA",
    scenario: "A search of the machinery space is needed for a missing crew member while pockets of fire remain. You must run the SCBA search with strict air discipline in the heat, select the right portable extinguishers by fire class for the pockets, and use detection to guide the team.",
    instructions: [
      "Run the SCBA search with strict air discipline, allowing for the added heat of the space.",
      "Match and use portable extinguishers to the fire class of the pockets encountered.",
      "Use the detection equipment to guide the search pattern and locate the casualty.",
      "Report the search progress, air status and findings to the control station in standard emergency English."
    ],
    deliverable: "An SCBA search record covering air discipline, extinguisher selection and the detection-guided search.",
    assessmentCriteria: [
      "Air discipline is correctly managed for the hot space.",
      "Portable extinguishers are correctly matched to fire class.",
      "Detection correctly guides the search pattern.",
      "The search report is delivered in clear, correct emergency English."
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
    topic: "Respuesta integrada con CO2: protocolo de inundación total, empleo del agua y su efecto sobre la estabilidad del buque",
    week: 16,
    taskId: "mn-c0038-w16-execute-co2-total-flooding",
    taskTitle: "Execute The CO2 Total-Flooding Decision",
    scenario: "The engine-room fire cannot be held by boundary attack and total-flooding CO2 must be considered. You must run the CO2 total-flooding safety protocol, account for the firefighting water already used and its effect on stability, and make the flood decision safely.",
    instructions: [
      "Confirm the space is evacuated and account for all personnel before considering release.",
      "Run the CO2 total-flooding safety protocol and the steps the engine team must execute (close-downs, seals).",
      "Assess the firefighting water on board and its effect on stability, and pump out free water as needed.",
      "Report the evacuation, the flood decision and the stability status to the master in standard emergency English."
    ],
    deliverable: "A CO2 total-flooding decision record covering evacuation, the release protocol and the stability assessment.",
    assessmentCriteria: [
      "Evacuation and personnel accounting are correct before release.",
      "The CO2 total-flooding protocol and close-downs are correctly executed.",
      "The firefighting-water stability effect is correctly assessed and managed.",
      "The decision report is delivered in clear, correct emergency English."
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
    unit: "Inspeccionar los servicios de los sistemas y equipos de detección y extinción de incendios",
    topic: "Auditoría integrada del sistema contra incendios: detección, línea principal y bombas, equipo portátil y sistemas fijos",
    week: 17,
    taskId: "mn-c0038-w17-audit-the-fire-fighting-systems",
    taskTitle: "Audit The Engine-Room Fire-Fighting Systems",
    scenario: "Before sailing, the engine-room fire-fighting systems must be audited for readiness. You must inspect the detection equipment, the fire main, hydrants, hoses and pumps, the portable extinguishers by class and the fixed CO2 system, and certify the whole set ready.",
    instructions: [
      "Inspect the fire detection equipment and confirm it is in service.",
      "Inspect the fire main, hydrants, hoses, nozzles and pumps for readiness.",
      "Verify the portable extinguishers by fire class and the fixed CO2 system are ready.",
      "Report the fire-fighting readiness audit to the chief engineer in standard engine-room English."
    ],
    deliverable: "A fire-fighting systems audit certifying detection, fire main, portable and fixed systems ready.",
    assessmentCriteria: [
      "The detection equipment inspection is complete and correct.",
      "The fire main, hydrants, hoses and pumps are correctly verified.",
      "Portable and fixed systems are correctly verified by class and function.",
      "The readiness audit is reported in clear, correct engine-room English."
    ],
    xp: 30,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester III",
    subjectCode: "C0038",
    subjectName: "Técnicas Avanzadas de Lucha Contra Incendio",
    subjectId: "mn-s3-tecnicas-avanzadas-lucha-contra-incendio",
    unit: "Control de la Operaciones de Lucha Contra Incendio a bordo del Buque",
    topic: "Integración de fin de semestre: cierre de un incendio de máquinas, del traspaso a los bomberos en tierra al reporte e investigación",
    week: 18,
    taskId: "mn-c0038-w18-hand-over-and-report-the-fire",
    taskTitle: "Hand Over The Fire To The Shore Brigade And Report It",
    scenario: "The vessel is alongside in port and the engine-room fire is being closed out. You must coordinate with the shore fire brigade, hand over the scene, and complete the fire report and investigation pulling the whole response together.",
    instructions: [
      "Coordinate with the shore fire brigade and hand over the scene, hazards and actions taken.",
      "Confirm the fire is out, the reflash watch stood down and the space made safe.",
      "Complete the fire report and initial investigation with cause, response and lessons.",
      "Deliver the shore-brigade handover and fire report in standard engine-room English."
    ],
    deliverable: "A shore-brigade handover and fire report covering the scene handover, make-safe and the investigation.",
    assessmentCriteria: [
      "The shore-brigade handover is complete and clear on hazards and actions.",
      "The out/reflash/make-safe confirmation is thorough.",
      "The fire report and investigation are accurate and useful.",
      "The handover and report are delivered in clear, correct engine-room English."
    ],
    xp: 30,
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
    topic: "Reporte objetivo de falla de maquinaria: hecho vs opinión, near-miss y valor probatorio",
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
    topic: "Reporte al superintendente técnico y requisición formal de repuestos",
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
    topic: "Standing orders y night orders del jefe de máquinas: redacción accionable con umbrales medibles",
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
    topic: "Informe ejecutivo técnico: resumen primero, hechos por importancia y recomendaciones accionables",
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
    career: "MN",
    semester: "Semester III",
    subjectCode: "C0101",
    subjectName: "Redacción Avanzada",
    subjectId: "mn-s3-redaccion-avanzada",
    unit: "Legibilidad en la redacción",
    topic: "Evitar palabras redundantes y la pesantez para lograr concisión",
    week: 9,
    taskId: "mn-c0101-w09-concise-report",
    taskTitle: "Tighten A Wordy Maintenance Report",
    scenario: "A maintenance report is padded with wordy, redundant phrases that slow the reader. The officer asks the cadet to cut it down so it says the same thing in fewer, clearer words.",
    instructions: [
      "Take a wordy report sentence about an engine-room job (for example 'Due to the fact that the pump was in a condition of not working, we made the decision to carry out a replacement of it').",
      "Identify the redundant and padded phrases ('due to the fact that', 'in a condition of', 'carry out a replacement of').",
      "Rewrite it concisely with the same meaning (for example 'Because the pump had failed, we replaced it').",
      "Explain in English why the concise version is clearer and faster to read, without losing information."
    ],
    deliverable: "A short exercise in English showing a wordy report sentence, the redundant phrases identified, and a concise rewrite with the same meaning, with a note on why it is clearer.",
    assessmentCriteria: [
      "The redundant and padded phrases are correctly identified.",
      "The rewrite is concise and keeps the full meaning.",
      "No information is lost in tightening it.",
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
    unit: "Orden de Palabras e Ideas",
    topic: "Colocación de los modificadores para la claridad de la oración",
    week: 10,
    taskId: "mn-c0101-w10-modifier-placement",
    taskTitle: "Fix Misplaced Modifiers In A Fault Description",
    scenario: "A misplaced modifier in a fault description can attach to the wrong thing and be dangerously misread. The officer asks the cadet to correct the placement so each modifier clearly describes what is meant.",
    instructions: [
      "Take a sentence with a misplaced modifier about a machinery fault (for example 'Leaking badly, the engineer found the fuel valve', which reads as if the engineer is leaking).",
      "Explain what the modifier is meant to describe and why its current position misreads.",
      "Rewrite it so the modifier sits next to the word it describes (for example 'The engineer found the fuel valve leaking badly').",
      "Explain in English how correct modifier placement removes the misreading, distinct from the general ambiguity of week 2."
    ],
    deliverable: "A short exercise in English showing a misplaced-modifier sentence, why it misreads, and a corrected version with the modifier next to the word it describes.",
    assessmentCriteria: [
      "The misplaced modifier and its wrong attachment are correctly identified.",
      "The intended meaning is correctly stated.",
      "The rewrite places the modifier next to the word it describes.",
      "The explanation is sound and distinct from week 2, in correct English."
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
    unit: "Atributos de los párrafos",
    topic: "Cohesión del párrafo y conectores lógicos en la narración de una avería",
    week: 11,
    taskId: "mn-c0101-w11-cohesion-connectors",
    taskTitle: "Connect A Breakdown Narrative With Logical Linkers",
    scenario: "A breakdown narrative reads as a list of disconnected sentences. As an advanced task, the officer asks the cadet to link the events with logical connectors so the cause and effect flows for the reader.",
    instructions: [
      "Take a set of short, disconnected sentences about a breakdown (for example 'The lube oil pressure fell. The alarm sounded. We stopped the engine. We found a blocked filter.').",
      "Add logical connectors to show the relations: sequence (then, subsequently), cause and effect (therefore, as a result, because), and contrast (however).",
      "Rewrite the narrative as a cohesive paragraph where each sentence links to the next (for example 'The lube oil pressure fell, so the alarm sounded; we therefore stopped the engine and, on investigation, found a blocked filter').",
      "Explain in English how the connectors make the cause and effect clear, building on the paragraph unity of week 3."
    ],
    deliverable: "A cohesive breakdown paragraph in English that links disconnected events with logical connectors (sequence, cause and effect, contrast), with a note on how they clarify the cause and effect.",
    assessmentCriteria: [
      "The disconnected events are correctly linked with appropriate connectors.",
      "Sequence, cause-and-effect and contrast relations are used correctly.",
      "The rewritten paragraph is cohesive and flows.",
      "The explanation builds on week 3 paragraph unity, in correct English."
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
    unit: "Características básicas de la redacción",
    topic: "Vocabulario preciso y registro adecuado al lector: adaptar un informe a dos destinatarios",
    week: 12,
    taskId: "mn-c0101-w12-audience-register",
    taskTitle: "Adapt One Report For Two Different Readers",
    scenario: "The same engine event must be reported to two readers: the engine crew and the company office. As the closing task of the subject, the officer asks the cadet to adapt the report to each audience, choosing precise vocabulary and the right register, integrating the subject.",
    instructions: [
      "Write a short, direct version for the ENGINE CREW: the technical vocabulary and shop terms they share, an informal but precise register, focused on the action to take.",
      "Write a version for the COMPANY OFFICE: a formal register, terms explained where needed, focused on impact and decision, avoiding slang and barbarisms.",
      "Keep the FACTS identical in both; only the vocabulary and register change to suit the reader, and vary the wording to avoid monotony without losing precision.",
      "Explain in English why matching vocabulary and register to the reader makes each version effective, drawing on the clarity, conciseness and cohesion of the subject. Report in clear engine-room English."
    ],
    deliverable: "Two versions in English of the same engine-event report, one for the engine crew and one for the company office, with identical facts but vocabulary and register adapted to each reader, and a note on why.",
    assessmentCriteria: [
      "The engine-crew version uses shared technical vocabulary and an informal but precise register.",
      "The company-office version uses a formal register with terms explained and a decision focus.",
      "The facts are identical in both; only vocabulary and register change, without monotony.",
      "The explanation of matching register to the reader is sound, in correct engine-room English."
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
    unit: "El reporte formal de falla",
    topic: "Redacción integrada del reporte de falla: organización lógica, jerarquización de ideas y hecho vs opinión con valor probatorio",
    week: 13,
    taskId: "mn-c0101-w13-write-a-full-machinery-fault-report",
    taskTitle: "Write The Full Machinery Fault Report",
    scenario: "A main-engine auxiliary has failed and a formal fault report is required for the record and any claim. You must write an objective report that organises the events logically, prioritises the information and keeps fact clearly separated from opinion so it holds evidential value.",
    instructions: [
      "Organise the fault events into a logical order and prioritise the information by importance.",
      "Write the report separating fact from opinion and noting any near-miss for evidential value.",
      "Check the paragraphs for unity between the main idea and the supporting detail.",
      "Deliver the objective machinery fault report in clear, correct engine-room English."
    ],
    deliverable: "An objective machinery fault report with logically ordered, prioritised, fact-based content.",
    assessmentCriteria: [
      "Events are logically ordered and prioritised by importance.",
      "Fact and opinion are clearly separated for evidential value.",
      "Paragraphs are unified around their main ideas.",
      "The report is written in clear, correct engine-room English."
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
    unit: "Correspondencia técnica",
    topic: "Correspondencia técnica integrada: reporte al superintendente y requisición de repuestos con claridad y concisión",
    week: 14,
    taskId: "mn-c0101-w14-write-report-and-requisition",
    taskTitle: "Write The Superintendent Report And Spares Requisition",
    scenario: "Following the fault, you must correspond with the technical superintendent. You must write the technical report of the failure and a formal spare-parts requisition, keeping the writing clear, concise and free of ambiguity so the parts ordered are exactly right.",
    instructions: [
      "Write the technical report to the superintendent, ordered by importance and free of ambiguous phrasing.",
      "Draft the formal spare-parts requisition with precise part identification and quantities.",
      "Tighten the wording to remove redundancy and keep both documents concise.",
      "Deliver the report and requisition in clear, correct engine-room English."
    ],
    deliverable: "A technical report to the superintendent plus a precise spare-parts requisition.",
    assessmentCriteria: [
      "The report is ordered by importance and free of ambiguity.",
      "The requisition identifies parts and quantities precisely.",
      "Redundancy is removed and both documents are concise.",
      "Both documents are written in clear, correct engine-room English."
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
    topic: "Redacción integrada de órdenes del jefe de máquinas: standing y night orders accionables con umbrales medibles y colocación clara de modificadores",
    week: 15,
    taskId: "mn-c0101-w15-write-chief-engineers-orders",
    taskTitle: "Write The Chief Engineer's Standing And Night Orders",
    scenario: "As the chief engineer you must write the standing and night orders for the watch. They must be actionable, carry measurable thresholds, and be worded so precisely that modifiers cannot be misread and the watchkeeper knows exactly what to do.",
    instructions: [
      "Write the standing and night orders as actionable instructions with measurable thresholds.",
      "Place modifiers correctly so each order can only be read one way.",
      "Check each order is unambiguous and tells the watchkeeper exactly what to do and when.",
      "Deliver the standing and night orders in clear, correct engine-room English."
    ],
    deliverable: "A set of actionable standing and night orders with measurable thresholds and unambiguous wording.",
    assessmentCriteria: [
      "Orders are actionable and carry measurable thresholds.",
      "Modifiers are placed so each order reads one way only.",
      "Each order unambiguously states the action and timing.",
      "The orders are written in clear, correct engine-room English."
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
    unit: "Atributos de los párrafos",
    topic: "Reescritura integrada de una avería: narración con conectores lógicos, corrección de modificadores mal colocados y eliminación de ambigüedad",
    week: 16,
    taskId: "mn-c0101-w16-rewrite-a-breakdown-narrative",
    taskTitle: "Rewrite A Confusing Breakdown Narrative",
    scenario: "A breakdown narrative written under pressure is confusing: the sequence jumps, modifiers are misplaced and some sentences are ambiguous. You must rewrite it so the failure sequence is clear, cohesive and cannot be misread before it goes into the record.",
    instructions: [
      "Connect the breakdown narrative with logical linkers so the failure sequence flows and coheres.",
      "Fix the misplaced modifiers so each sentence describes the fault correctly.",
      "Remove the ambiguous phrasing so the narrative can only be read one way.",
      "Deliver the rewritten breakdown narrative in clear, correct engine-room English."
    ],
    deliverable: "A rewritten breakdown narrative that is cohesive, correctly modified and unambiguous.",
    assessmentCriteria: [
      "Logical linkers give the narrative a clear, cohesive sequence.",
      "Misplaced modifiers are corrected.",
      "Ambiguity is removed so the narrative reads one way.",
      "The narrative is written in clear, correct engine-room English."
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
    unit: "El informe ejecutivo",
    topic: "Redacción integrada del informe ejecutivo: resumen primero, hechos por importancia, recomendaciones accionables y registro adecuado al lector",
    week: 17,
    taskId: "mn-c0101-w17-write-the-executive-report",
    taskTitle: "Write The Technical Executive Report On The Incident",
    scenario: "Management wants an executive report on the machinery incident and its resolution. You must write it summary-first, order the facts by importance, close with actionable recommendations, and pitch the register to a management reader rather than an engineer.",
    instructions: [
      "Open with an executive summary, then present the facts ordered by importance.",
      "Close with clear, actionable recommendations tied to the facts.",
      "Adapt the vocabulary and register to a management reader, keeping it concise.",
      "Deliver the technical executive report in clear, correct engine-room English."
    ],
    deliverable: "A summary-first technical executive report with prioritised facts and actionable recommendations.",
    assessmentCriteria: [
      "The report leads with a summary and orders facts by importance.",
      "Recommendations are actionable and tied to the facts.",
      "Vocabulary and register suit the management reader.",
      "The report is written in clear, correct engine-room English."
    ],
    xp: 30,
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
    topic: "Integración de fin de semestre: expediente documental de una avería, del reporte de falla al informe adaptado a dos lectores",
    week: 18,
    taskId: "mn-c0101-w18-compile-the-incident-dossier",
    taskTitle: "Compile The Incident Documentation Dossier",
    scenario: "At the end of the semester you must compile the complete documentation dossier for the machinery incident: the fault report, the superintendent correspondence, the chief engineer's orders and the executive report, with one report adapted for two different readers.",
    instructions: [
      "Assemble the fault report, correspondence, orders and executive report into one coherent dossier.",
      "Adapt the key report for two different readers (superintendent and management) with the right register for each.",
      "Check the whole dossier for logical order, concision and unambiguous wording.",
      "Deliver the compiled incident documentation dossier in clear, correct engine-room English."
    ],
    deliverable: "A complete incident documentation dossier with the report adapted for two different readers.",
    assessmentCriteria: [
      "The dossier assembles all documents coherently.",
      "The key report is correctly adapted in register for each reader.",
      "The whole dossier is logically ordered, concise and unambiguous.",
      "The dossier is written in clear, correct engine-room English."
    ],
    xp: 30,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
];

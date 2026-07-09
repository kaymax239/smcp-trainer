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
];

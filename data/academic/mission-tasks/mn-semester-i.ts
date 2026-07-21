import type { AcademicMissionTask } from "./types";

export const mnSemesterITasks: AcademicMissionTask[] = [
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ALG103",
    subjectName: "Álgebra",
    subjectId: "mn-s1-algebra",
    unit: "Álgebra Elemental",
    topic: "Expresiones algebraicas",
    week: 1,
    taskId: "mn-math101-fraction-lube-oil-calculation",
    taskTitle: "Calculate Lube Oil Top-Up Fraction",
    scenario: "During an engine-room round, the duty engineer asks the cadet to calculate the fraction of a lube oil tank that must be topped up before the next watch.",
    instructions: [
      "Read the reported tank capacity and current remaining quantity.",
      "Express the missing quantity as a fraction of total capacity.",
      "State whether the top-up request should be reported as less than half, half, or more than half of the tank."
    ],
    deliverable: "A short engine-room calculation note showing the fraction of lube oil required for top-up.",
    assessmentCriteria: [
      "Fraction is calculated from the correct total capacity.",
      "Result is simplified or explained clearly enough for an engineer to verify.",
      "Operational recommendation matches the calculated fraction."
    ],
    xp: 15,
    estimatedTime: "20 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ALG103",
    subjectName: "Álgebra",
    subjectId: "mn-s1-algebra",
    unit: "Ecuaciones, desigualdades y números complejos",
    topic: "Ecuaciones lineales y cuadráticas",
    week: 2,
    taskId: "mn-math101-equation-generator-load",
    taskTitle: "Solve Generator Load Equation",
    scenario: "The second engineer gives the cadet a simple load balance problem to estimate remaining generator capacity during engine-room watchkeeping.",
    instructions: [
      "Identify the known generator capacity and current load values.",
      "Set up an equation for remaining available load.",
      "Solve the equation and report whether an additional auxiliary load can be accepted."
    ],
    deliverable: "A generator load calculation with equation, result, and operational conclusion.",
    assessmentCriteria: [
      "Equation represents the engine-room load problem correctly.",
      "Calculation result is accurate.",
      "Conclusion connects the result to generator operation."
    ],
    xp: 20,
    estimatedTime: "25 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ALG103",
    subjectName: "Álgebra",
    subjectId: "mn-s1-algebra",
    unit: "Sistemas de Ecuaciones y desigualdades",
    topic: "Sistemas de ecuaciones lineales",
    week: 3,
    taskId: "mn-math101-unit-conversion-engine-room",
    taskTitle: "Convert Engine-Room Measurement Units",
    scenario: "A machinery log contains measurements in different units. The cadet must convert them before the watch engineer enters the technical report.",
    instructions: [
      "Select three engine-room measurements that require unit conversion.",
      "Apply the correct conversion factor for each measurement.",
      "Record the converted values with units and explain where each value is used onboard."
    ],
    deliverable: "A converted measurement log for engine-room technical reporting.",
    assessmentCriteria: [
      "Conversion factors are applied correctly.",
      "Converted values include the correct units.",
      "Each measurement is connected to a practical engine-room use."
    ],
    xp: 25,
    estimatedTime: "25 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ALG103",
    subjectName: "Álgebra",
    subjectId: "mn-s1-algebra",
    unit: "Álgebra Vectorial",
    topic: "Vectores y resolución de problemas con fuerza, velocidad y aceleración",
    week: 4,
    taskId: "mn-alg103-w04-pump-flow-balance",
    taskTitle: "Balance Two Pump Flow Rates",
    scenario: "In the engine room, two pumps feed a common service tank at different rates. The engineer asks the cadet to set up the relation between both flow rates and determine the combined fill time.",
    instructions: [
      "List the flow rate of each pump.",
      "Set up an algebraic relation for the combined flow into the tank.",
      "Solve for the time to fill a given tank volume with both pumps running.",
      "State the result with the correct unit for the engine-room log."
    ],
    deliverable: "A flow-balance calculation in English giving the combined fill time of the service tank, with the relation and working shown.",
    assessmentCriteria: [
      "Both flow rates are correctly represented.",
      "The combined-flow relation is set up correctly.",
      "The fill time is solved accurately with the correct unit.",
      "The result is clearly written for the engine-room log in English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ALG103",
    subjectName: "Álgebra",
    subjectId: "mn-s1-algebra",
    unit: "Proporciones y relaciones",
    topic: "Relaciones de transmisión (engranes y poleas)",
    week: 5,
    taskId: "mn-alg103-w05-transmission-ratio",
    taskTitle: "Find Output Speed Through Gear And Pulley Ratios",
    scenario: "A reduction gearbox connects the engine to a pump, and a separate belt-pulley drives an auxiliary. The engineer asks the cadet to work out the output speeds, remembering that a reduction drive lowers the speed.",
    instructions: [
      "State the rule: for a reduction ratio, output speed = input speed / ratio (the reducer lowers the speed).",
      "Calculate the gearbox output speed for an 1800 rpm input through a 3:1 reduction ratio.",
      "Calculate the pulley output speed for a 1200 rpm input through a 4:1 reduction ratio.",
      "Confirm each output is lower than its input and report the results in rpm, in clear engine-room English."
    ],
    deliverable: "A transmission calculation in English giving the gearbox and pulley output speeds, with the working shown and each output confirmed lower than its input.",
    assessmentCriteria: [
      "The rule (output = input / ratio, the reducer reduces speed) is stated correctly.",
      "The gearbox output is correct (1800 / 3 = 600 rpm).",
      "The pulley output is correct (1200 / 4 = 300 rpm).",
      "Both outputs are correctly lower than their input, in clear engine-room English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ALG103",
    subjectName: "Álgebra",
    subjectId: "mn-s1-algebra",
    unit: "Regla de tres",
    topic: "Consumo de combustible y autonomía",
    week: 6,
    taskId: "mn-alg103-w06-fuel-consumption-autonomy",
    taskTitle: "Work Out Fuel Use And Tank Autonomy",
    scenario: "A generator burns fuel at a steady rate. The engineer asks the cadet to work out how much fuel is used over a watch and how long the service tank will last.",
    instructions: [
      "Calculate the fuel used over a 12-hour period at a consumption of 40 litres per hour (rule of three).",
      "State the result in litres.",
      "Calculate the autonomy of a 2000-litre service tank using autonomy = capacity / consumption.",
      "Confirm the units work out (litres / (litres per hour) = hours) and report the results, in clear engine-room English."
    ],
    deliverable: "A fuel calculation in English giving the fuel used over the period and the tank autonomy in hours, with the working and the unit check shown.",
    assessmentCriteria: [
      "The fuel used is correct (40 L/h x 12 h = 480 L).",
      "The autonomy is correct (2000 L / 40 L/h = 50 h).",
      "The unit check (litres / (litres per hour) = hours) is shown correctly.",
      "Results carry the correct units and the English is clear."
    ],
    xp: 25,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ALG103",
    subjectName: "Álgebra",
    subjectId: "mn-s1-algebra",
    unit: "Despeje de fórmulas",
    topic: "Transposición de fórmulas de máquinas (V = Q x t)",
    week: 7,
    taskId: "mn-alg103-w07-formula-transposition-transfer",
    taskTitle: "Rearrange V = Q x t To Find A Transfer Time",
    scenario: "A transfer pump moves fuel between tanks at a steady flow rate. The engineer asks the cadet to rearrange the volume-flow formula to find how long a transfer will take.",
    instructions: [
      "Start from V = Q x t and rearrange it to make the time t the subject.",
      "Using a flow rate Q = 5 cubic metres per hour and a volume V = 30 cubic metres, calculate the transfer time t.",
      "Repeat for a volume of 45 cubic metres at the same flow rate.",
      "State both times with units and confirm they are reasonable, in clear engine-room English."
    ],
    deliverable: "A transposition calculation in English showing the rearranged formula t = V / Q and the two transfer times, with the working shown.",
    assessmentCriteria: [
      "The formula is correctly rearranged to t = V / Q.",
      "The first time is correct (30 / 5 = 6 h).",
      "The second time is correct (45 / 5 = 9 h).",
      "The units (cubic metres / (cubic metres per hour) = hours) are correct, in clear English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ALG103",
    subjectName: "Álgebra",
    subjectId: "mn-s1-algebra",
    unit: "Porcentajes y tolerancias",
    topic: "Desgaste, holgura vs tolerancia y carga del motor vs MCR",
    week: 8,
    taskId: "mn-alg103-w08-percentages-tolerances",
    taskTitle: "Assess Wear, Clearance And Engine Load As Percentages",
    scenario: "During maintenance the cadet must judge a worn bearing, a measured clearance and the engine load. The engineer asks the cadet to work these out as percentages and say whether each is within limits.",
    instructions: [
      "Calculate the percentage wear of a bearing journal that has worn from an original diameter of 200 mm to 197 mm, taking the wear as a percentage of the ORIGINAL dimension.",
      "A maximum allowable clearance is 0.50 mm and the measured clearance is 0.40 mm; state whether it is within tolerance and by what margin as a percentage of the maximum.",
      "Calculate the engine load as a percentage of MCR when the main engine runs at 6000 kW against an MCR of 8000 kW.",
      "Report all three results with correct units and a clear within/over-limit conclusion, in clear engine-room English."
    ],
    deliverable: "A percentages note in English giving the bearing wear, the clearance judgement with its margin, and the engine load versus MCR, with the working shown.",
    assessmentCriteria: [
      "The bearing wear is correct (3 mm on the 200 mm original = 1.5%), taken on the ORIGINAL dimension.",
      "The clearance is correctly judged within tolerance (0.40 <= 0.50), with the margin (0.10 mm = 20% of the maximum).",
      "The engine load is correct (6000 / 8000 = 75% of MCR).",
      "Results carry the correct units and a clear conclusion, in clear engine-room English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ALG103",
    subjectName: "Álgebra",
    subjectId: "mn-s1-algebra",
    unit: "Logaritmos",
    topic: "Funciones exponenciales y logarítmicas",
    week: 9,
    taskId: "mn-alg103-w09-noise-level-logarithm",
    taskTitle: "Work Out Engine-Room Noise Levels With Logarithms",
    scenario: "The engine room is a high-noise space and the safety officer asks the cadet to check the sound level near the main engine, where the measured sound intensity is a million times the hearing threshold, using the logarithmic decibel scale.",
    instructions: [
      "State the decibel formula L = 10 x log10(I / I0), where I0 is the reference intensity.",
      "Calculate the sound level for a measured intensity that is 1 000 000 (10^6) times the reference intensity I0.",
      "Explain why sound is measured on a logarithmic scale instead of a simple linear ratio.",
      "Report the level in decibels and whether hearing protection is required, in clear engine-room English."
    ],
    deliverable: "A noise calculation in English giving the sound level in decibels from the intensity ratio, with the working shown and a hearing-protection conclusion.",
    assessmentCriteria: [
      "The decibel formula with log base 10 is stated correctly.",
      "The level is correct (10 x log10(10^6) = 60 dB).",
      "The reason a logarithmic scale suits sound is explained correctly.",
      "The result carries the correct unit and the English is clear."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ALG103",
    subjectName: "Álgebra",
    subjectId: "mn-s1-algebra",
    unit: "Matrices y determinantes",
    topic: "Matrices, determinantes e inversa",
    week: 10,
    taskId: "mn-alg103-w10-load-sharing-determinants",
    taskTitle: "Solve Generator Load Sharing With Determinants",
    scenario: "Two diesel generators run in parallel and must share a 900 kW load, with generator A set to carry twice the power of generator B. The electrician asks the cadet to solve the load split using a system of two equations and determinants.",
    instructions: [
      "Write the two equations: A + B = 900 and A = 2 x B (so A - 2B = 0).",
      "Form the coefficient matrix and calculate its determinant D.",
      "Use Cramer's rule (determinants) to solve for the power carried by each generator A and B.",
      "State each generator's load in kW and confirm the split, in clear engine-room English."
    ],
    deliverable: "A load-sharing calculation in English using determinants (Cramer's rule) to give each generator's power, with the matrix, the determinant, and the working shown.",
    assessmentCriteria: [
      "The two equations correctly represent the load-sharing condition.",
      "The determinant of the coefficient matrix is calculated correctly (D = -3).",
      "Cramer's rule gives the correct split (A = 600 kW, B = 300 kW).",
      "The result is stated with units and clearly written in English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ALG103",
    subjectName: "Álgebra",
    subjectId: "mn-s1-algebra",
    unit: "Sistemas de Ecuaciones y desigualdades",
    topic: "Programación lineal",
    week: 11,
    taskId: "mn-alg103-w11-linear-programming-fuel",
    taskTitle: "Optimise Generator Loading With Linear Programming",
    scenario: "In port the ship needs at least 600 kW of electrical power. Generator 1 can supply up to 500 kW and burns 0.21 kg of fuel per kWh; generator 2 can supply up to 400 kW and burns 0.19 kg per kWh. The chief engineer asks the cadet to find the loading that meets demand at the lowest fuel consumption.",
    instructions: [
      "Write the constraints: x + y >= 600, x <= 500, y <= 400, with x and y greater than or equal to 0.",
      "Write the objective function for fuel per hour F = 0.21x + 0.19y to be minimised.",
      "Identify the vertices of the feasible region and evaluate the fuel use at each.",
      "State the optimum loading of each generator and the minimum fuel rate, in clear engine-room English."
    ],
    deliverable: "A linear-programming note in English giving the constraints, the objective function, the feasible-region vertices tested, and the optimum generator loading with the minimum fuel rate.",
    assessmentCriteria: [
      "The constraints and objective function are formulated correctly.",
      "The feasible-region vertices are identified correctly.",
      "The optimum is correct (generator 1 at 200 kW, generator 2 at 400 kW, F = 118 kg/h).",
      "The result is stated with units and clearly explained in English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ALG103",
    subjectName: "Álgebra",
    subjectId: "mn-s1-algebra",
    unit: "Ecuaciones, desigualdades y números complejos",
    topic: "Números complejos",
    week: 12,
    taskId: "mn-alg103-w12-ac-impedance-complex",
    taskTitle: "Express AC Circuit Impedance With Complex Numbers",
    scenario: "An auxiliary AC circuit in the engine room has a resistance of 3 ohm and an inductive reactance of 4 ohm. The electrician asks the cadet to express the impedance as a complex number and find its magnitude before checking the current on a 230 V supply.",
    instructions: [
      "Write the impedance as a complex number Z = R + jX, using R = 3 ohm and X = 4 ohm.",
      "Calculate the magnitude of the impedance |Z| = sqrt(R^2 + X^2).",
      "Use |Z| and the 230 V supply to find the current magnitude I = V / |Z|.",
      "State the impedance, its magnitude and the current, and explain what the imaginary part represents, in clear engine-room English."
    ],
    deliverable: "A calculation in English giving the impedance as a complex number, its magnitude, and the resulting current, with the working shown and the meaning of the imaginary part explained.",
    assessmentCriteria: [
      "The impedance is written correctly as Z = 3 + j4 ohm.",
      "The magnitude is correct (|Z| = 5 ohm).",
      "The current is correct (230 / 5 = 46 A).",
      "The meaning of the reactive (imaginary) part is explained, in clear engine-room English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "FIS104",
    subjectName: "Física",
    subjectId: "mn-s1-fisica",
    unit: "Mecánica",
    topic: "Sistemas Internacional e Inglés",
    week: 1,
    taskId: "mn-fis104-w01-pressure-unit-conversion",
    taskTitle: "Convert An Engine Oil Pressure Reading",
    scenario: "An engine-room gauge shows lube oil pressure in psi, but the technical report and the manual specify bar. The cadet must convert the reading correctly before logging it.",
    instructions: [
      "Identify the pressure value given in psi (Imperial).",
      "Apply the correct conversion factor to express it in bar (SI).",
      "State the converted value with the correct unit and sensible precision.",
      "Explain why using the manual's unit system matters for engine monitoring."
    ],
    deliverable: "A conversion note in English giving the lube oil pressure in bar, with the working shown and the reason the correct unit system matters.",
    assessmentCriteria: [
      "The psi-to-bar conversion is calculated correctly.",
      "The result carries the correct unit and sensible precision.",
      "The note is written in clear engine-room English.",
      "The explanation connects unit accuracy to safe engine monitoring."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "FIS104",
    subjectName: "Física",
    subjectId: "mn-s1-fisica",
    unit: "Trabajo",
    topic: "Trabajo, energía y potencia",
    week: 2,
    taskId: "mn-fis104-w02-pump-power",
    taskTitle: "Relate Work, Energy And Pump Power",
    scenario: "The engineer asks the cadet to explain how work, energy, and power relate in a pump that lifts fuel to a day tank, and what the power rating tells the crew.",
    instructions: [
      "Define work, energy, and power in the context of the pump's operation.",
      "Explain how the power rating relates to how fast the pump does its work.",
      "State what would happen to the time required if the pump's power were lower.",
      "Write the explanation in clear engine-room English."
    ],
    deliverable: "An explanation in English relating work, energy, and power for a fuel pump, and what its power rating means for the crew.",
    assessmentCriteria: [
      "Work, energy, and power are defined correctly.",
      "The relationship between power and rate of work is correct.",
      "The effect of lower power is correctly stated.",
      "The explanation is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "FIS104",
    subjectName: "Física",
    subjectId: "mn-s1-fisica",
    unit: "Estado físico de los cuerpos",
    topic: "Propiedades de la materia",
    week: 3,
    taskId: "mn-fis104-w03-thermal-expansion",
    taskTitle: "Explain Thermal Expansion In A Pipe System",
    scenario: "A hot fluid passes through an engine-room pipe system. The engineer asks the cadet to explain, using properties of matter, why the pipes expand and what is fitted to allow for it.",
    instructions: [
      "Explain what happens to the pipe material as its temperature rises.",
      "State why thermal expansion must be allowed for in a pipe system.",
      "Identify one fitting or design feature that absorbs the expansion.",
      "Report the explanation in clear engine-room English."
    ],
    deliverable: "An explanation in English of thermal expansion in an engine-room pipe system, why it must be allowed for, and one feature that absorbs it.",
    assessmentCriteria: [
      "The effect of temperature on the material is explained correctly.",
      "The need to allow for expansion is justified.",
      "The fitting/feature identified is relevant and correct.",
      "The explanation is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "FIS104",
    subjectName: "Física",
    subjectId: "mn-s1-fisica",
    unit: "Mecánica",
    topic: "Leyes de Newton",
    week: 4,
    taskId: "mn-fis104-w04-rotating-shaft-force",
    taskTitle: "Apply Newton's Laws To A Rotating Shaft",
    scenario: "The cadet observes a rotating propeller shaft. The engineer asks how Newton's laws explain the forces involved and why a sudden load change must be managed carefully.",
    instructions: [
      "Identify the forces acting on the rotating shaft.",
      "Apply Newton's laws to explain why the shaft resists sudden changes in motion.",
      "Explain why an abrupt load change stresses the machinery.",
      "Report your explanation in clear engine-room English."
    ],
    deliverable: "An explanation in English applying Newton's laws to a rotating shaft, why it resists sudden change, and why abrupt load changes stress the machinery.",
    assessmentCriteria: [
      "Forces on the shaft are correctly identified.",
      "Newton's laws are applied correctly.",
      "The reasoning about sudden load change is sound.",
      "The explanation is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "FIS104",
    subjectName: "Física",
    subjectId: "mn-s1-fisica",
    unit: "Termodinámica",
    topic: "Leyes de los gases (ley combinada)",
    week: 5,
    taskId: "mn-fis104-w05-gas-law-cylinder",
    taskTitle: "Apply The Combined Gas Law To A Cylinder Charge",
    scenario: "In an engine cylinder the air charge is at 1 bar and 2.0 cubic metres at 27 degrees C. It is compressed to 0.5 cubic metres and its temperature rises to 327 degrees C. The engineer asks the cadet to find the new pressure.",
    instructions: [
      "Convert both temperatures from degrees C to kelvin by adding 273 (27 C = 300 K, 327 C = 600 K).",
      "Write the combined gas law P1 x V1 / T1 = P2 x V2 / T2 and rearrange it for P2.",
      "Substitute the values (with temperatures in kelvin) and calculate the new pressure P2.",
      "State the result with the correct unit and confirm it is physically reasonable, in clear engine-room English."
    ],
    deliverable: "A gas-law calculation in English showing the kelvin conversion, the rearranged formula, and the new cylinder pressure, with the working shown.",
    assessmentCriteria: [
      "Both temperatures are correctly converted to kelvin (300 K and 600 K).",
      "The combined gas law is correctly rearranged to P2 = P1 x V1 x T2 / (T1 x V2).",
      "The new pressure is correct (P2 = 8 bar).",
      "The result carries the correct unit and the English is clear."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "FIS104",
    subjectName: "Física",
    subjectId: "mn-s1-fisica",
    unit: "Transferencia de calor",
    topic: "Calor específico y calor a extraer (Q = m c deltaT)",
    week: 6,
    taskId: "mn-fis104-w06-cooler-heat-removal",
    taskTitle: "Calculate The Heat A Cooler Must Remove",
    scenario: "A lube oil cooler must bring 200 kg of oil down from 70 degrees C to 45 degrees C. The oil has a specific heat of 2.0 kJ per kg per K. The engineer asks the cadet to work out how much heat the cooler must remove.",
    instructions: [
      "Find the temperature change deltaT (for a difference, kelvin and degrees C are numerically equal).",
      "Write the heat equation Q = m x c x deltaT.",
      "Substitute the mass, specific heat and deltaT and calculate the heat to be removed.",
      "State the result with the correct unit (kJ or MJ), in clear engine-room English."
    ],
    deliverable: "A heat-removal calculation in English giving the temperature change, the equation, and the heat the cooler must remove, with the working shown.",
    assessmentCriteria: [
      "The temperature change is correct (deltaT = 25 K).",
      "The heat equation Q = m x c x deltaT is applied correctly.",
      "The heat removed is correct (200 x 2.0 x 25 = 10 000 kJ = 10 MJ).",
      "The result carries the correct unit and the English is clear."
    ],
    xp: 25,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "FIS104",
    subjectName: "Física",
    subjectId: "mn-s1-fisica",
    unit: "Mecánica de fluidos",
    topic: "Principio de Pascal e hidráulica (F1/A1 = F2/A2)",
    week: 7,
    taskId: "mn-fis104-w07-hydraulic-pascal",
    taskTitle: "Apply Pascal's Principle To A Hydraulic Jack",
    scenario: "In an engine-room hydraulic jack a force of 200 N is applied to a small piston of area 0.001 square metres. The large piston has an area of 0.02 square metres. The engineer asks the cadet to find the system pressure and the force the large piston can exert.",
    instructions: [
      "Calculate the system pressure using P = F1 / A1.",
      "Write Pascal's principle F1 / A1 = F2 / A2 (the pressure is the same throughout the fluid).",
      "Calculate the force F2 that the large piston can exert.",
      "State the force-multiplication factor and give the results with correct units, in clear engine-room English."
    ],
    deliverable: "A hydraulics calculation in English giving the system pressure, the force on the large piston, and the force-multiplication factor, with the working shown.",
    assessmentCriteria: [
      "The system pressure is correct (200 / 0.001 = 200 000 Pa = 200 kPa).",
      "Pascal's principle is applied correctly.",
      "The force on the large piston is correct (F2 = 4000 N).",
      "The force-multiplication factor (A2 / A1 = 20) and the units are correct, in clear English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "FIS104",
    subjectName: "Física",
    subjectId: "mn-s1-fisica",
    unit: "Dinámica rotacional",
    topic: "Par, revoluciones y potencia al eje (P = 2 pi N T)",
    week: 8,
    taskId: "mn-fis104-w08-shaft-power-torque",
    taskTitle: "Calculate Shaft Power From Torque And RPM",
    scenario: "A propeller shaft transmits a torque of 50 000 N m at 120 rpm. The engineer asks the cadet to calculate the shaft power delivered, being careful with the units of rotational speed.",
    instructions: [
      "Note that N is given in rpm, so either convert it to rev/s by dividing by 60, or use P = 2 x pi x N x T / 60 with N in rpm.",
      "Write the shaft power formula and state which form you are using and why.",
      "Substitute the torque and speed and calculate the shaft power.",
      "State the result in kilowatts and confirm it is physically reasonable, in clear engine-room English."
    ],
    deliverable: "A shaft-power calculation in English showing the treatment of the rpm-to-rev/s conversion, the formula used, and the shaft power in kilowatts, with the working shown.",
    assessmentCriteria: [
      "The rpm speed is handled correctly (120 rpm = 2 rev/s, or the /60 factor is used).",
      "The shaft power formula is applied correctly (P = 2 x pi x N x T with N in rev/s).",
      "The shaft power is correct (about 628 kW, i.e. 628 318 W).",
      "The result is given in kilowatts and the English is clear."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "FIS104",
    subjectName: "Física",
    subjectId: "mn-s1-fisica",
    unit: "Ondas",
    topic: "Movimiento ondulatorio",
    week: 9,
    taskId: "mn-fis104-w09-vibration-wave",
    taskTitle: "Relate Frequency And Wavelength Of Engine Noise",
    scenario: "A condition-monitoring check picks up a 500 Hz tone radiating from the main engine. The engineer asks the cadet to use the wave equation to find the wavelength of that sound in air, where sound travels at about 340 m/s.",
    instructions: [
      "State the wave equation v = f x lambda relating wave speed, frequency and wavelength.",
      "Rearrange it to make the wavelength lambda the subject.",
      "Substitute f = 500 Hz and v = 340 m/s and calculate the wavelength.",
      "State the wavelength with its unit and explain how frequency helps identify which machine is vibrating, in clear engine-room English."
    ],
    deliverable: "A wave calculation in English giving the wavelength of the engine noise from its frequency and speed, with the working shown and a note on using frequency in condition monitoring.",
    assessmentCriteria: [
      "The wave equation v = f x lambda is stated and rearranged correctly.",
      "The wavelength is correct (340 / 500 = 0.68 m).",
      "The result carries the correct unit.",
      "The link between frequency and machinery monitoring is sound, in clear engine-room English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "FIS104",
    subjectName: "Física",
    subjectId: "mn-s1-fisica",
    unit: "Mecánica",
    topic: "Impulso y cantidad de movimiento",
    week: 10,
    taskId: "mn-fis104-w10-jet-reaction-momentum",
    taskTitle: "Calculate The Reaction Force Of A Water Jet",
    scenario: "An emergency fire pump drives water out of a nozzle and the cadet must help hold the hose. The engineer asks the cadet to work out the reaction force from the change in momentum of the water leaving the nozzle at 15 m/s with a mass flow of 40 kg/s.",
    instructions: [
      "State the momentum principle: force equals rate of change of momentum, F = mass flow x change in velocity.",
      "Take the water as accelerated from rest to the jet velocity of 15 m/s.",
      "Substitute the mass flow of 40 kg/s and calculate the reaction force.",
      "State the force with its unit and explain why the hose team must brace against it, in clear engine-room English."
    ],
    deliverable: "A momentum calculation in English giving the reaction force of the water jet from the mass flow and velocity change, with the working shown and a safety note for the hose team.",
    assessmentCriteria: [
      "The momentum principle F = mass flow x change in velocity is stated correctly.",
      "The reaction force is correct (40 x 15 = 600 N).",
      "The result carries the correct unit.",
      "The safety reasoning for the hose team is sound, in clear engine-room English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "FIS104",
    subjectName: "Física",
    subjectId: "mn-s1-fisica",
    unit: "Mecánica",
    topic: "Movimiento circular",
    week: 11,
    taskId: "mn-fis104-w11-centripetal-governor",
    taskTitle: "Find The Centripetal Force On A Rotating Governor Weight",
    scenario: "A speed governor uses a flyweight of 2 kg spinning at a radius of 0.5 m. At an engine speed of 300 rpm the engineer asks the cadet to work out the centripetal force pulling the flyweight outward, which sets the governor's action.",
    instructions: [
      "Convert the rotational speed of 300 rpm to an angular velocity omega in rad/s using omega = 2 x pi x N / 60.",
      "State the centripetal force equation F = m x omega^2 x r.",
      "Substitute the mass 2 kg, radius 0.5 m and the angular velocity and calculate the force.",
      "State the force with its unit and explain how a change in engine speed changes it, in clear engine-room English."
    ],
    deliverable: "A circular-motion calculation in English giving the centripetal force on the governor flyweight, with the rpm-to-rad/s conversion and the working shown.",
    assessmentCriteria: [
      "The speed is converted correctly (300 rpm = about 31.4 rad/s).",
      "The centripetal force equation F = m x omega^2 x r is applied correctly.",
      "The force is correct (about 987 N).",
      "The effect of engine speed on the force is explained, in clear engine-room English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "FIS104",
    subjectName: "Física",
    subjectId: "mn-s1-fisica",
    unit: "Mecánica",
    topic: "Cinemática en una y dos dimensiones",
    week: 12,
    taskId: "mn-fis104-w12-hoist-kinematics",
    taskTitle: "Analyse The Motion Of An Engine-Room Hoist",
    scenario: "A provisions hoist in the engine room lifts a load from rest with a steady acceleration of 0.5 m/s^2 for 2 seconds before running at constant speed. The engineer asks the cadet to work out the speed reached and the distance travelled during the acceleration.",
    instructions: [
      "State the kinematic equations v = u + a x t and s = u x t + 0.5 x a x t^2, noting the load starts from rest (u = 0).",
      "Calculate the speed v reached at the end of the 2-second acceleration.",
      "Calculate the distance s travelled during that acceleration.",
      "State both results with units and confirm they are reasonable for a hoist, in clear engine-room English."
    ],
    deliverable: "A kinematics calculation in English giving the speed reached and the distance travelled during the hoist's acceleration, with the equations and working shown.",
    assessmentCriteria: [
      "The correct kinematic equations are stated with u = 0.",
      "The speed is correct (v = 0.5 x 2 = 1 m/s).",
      "The distance is correct (s = 0.5 x 0.5 x 2^2 = 1 m).",
      "Both results carry correct units and the English is clear."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ELE106",
    subjectName: "Electricidad",
    subjectId: "mn-s1-electricidad",
    unit: "Circuito eléctrico",
    topic: "Diferencia de potencial, corriente y resistencia",
    week: 1,
    taskId: "mn-ele106-w01-switchboard-circuit",
    taskTitle: "Read An Engine-Room Switchboard Circuit",
    scenario: "During an electrical round, the engineer points to a circuit on the engine-room switchboard and asks the cadet to identify the voltage, current, and resistance values and explain how they relate.",
    instructions: [
      "Identify which value is voltage, which is current, and which is resistance.",
      "State the unit of each quantity (volt, ampere, ohm).",
      "Explain how the three quantities relate in the circuit.",
      "State what happens to the current if the resistance increases."
    ],
    deliverable: "A circuit note in English identifying voltage, current, and resistance with correct units, and explaining their relationship in the switchboard circuit.",
    assessmentCriteria: [
      "Each quantity is correctly identified with its unit.",
      "The relationship between them is explained correctly.",
      "The effect of changing resistance is correct.",
      "Terminology is precise and in clear English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ELE106",
    subjectName: "Electricidad",
    subjectId: "mn-s1-electricidad",
    unit: "Redes eléctricas",
    topic: "Ley de Ohm y Leyes de Kirchhoff",
    week: 2,
    taskId: "mn-ele106-w02-ohm-law-motor",
    taskTitle: "Apply Ohm's Law To An Auxiliary Motor",
    scenario: "An auxiliary motor in the engine room has a known voltage and resistance. Before energizing it, the engineer asks the cadet to calculate the current it will draw using Ohm's law.",
    instructions: [
      "Identify the voltage and resistance of the auxiliary motor.",
      "Apply Ohm's law (I = V / R) to calculate the current drawn.",
      "State the result with the correct unit (ampere).",
      "State whether the current is within the circuit's rated limit and the safety reason this matters."
    ],
    deliverable: "An Ohm's law calculation note in English giving the motor's current draw, with working shown and a statement on whether it is within the rated limit.",
    assessmentCriteria: [
      "Ohm's law is applied correctly with the right values.",
      "The current is calculated accurately with the correct unit.",
      "The comparison against the rated limit is correct.",
      "The safety reasoning is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ELE106",
    subjectName: "Electricidad",
    subjectId: "mn-s1-electricidad",
    unit: "Conexiones eléctricas",
    topic: "Circuitos en serie, paralelo y serie/paralelo",
    week: 3,
    taskId: "mn-ele106-w03-series-parallel-engine",
    taskTitle: "Compare Series And Parallel In Engine Systems",
    scenario: "Engine-room equipment can be wired in series or parallel. The engineer asks the cadet to explain why critical systems are wired so that one failure does not shut down the rest.",
    instructions: [
      "Describe how current flows in series versus parallel circuits.",
      "Explain what happens to the other devices if one device fails, in each arrangement.",
      "State which arrangement is used for critical engine-room systems and why.",
      "Connect the choice to a safety or reliability reason on board."
    ],
    deliverable: "A comparison note in English explaining series versus parallel wiring in engine systems, the effect of one failure in each, and why the chosen arrangement is safer.",
    assessmentCriteria: [
      "Current behaviour in series and parallel is described correctly.",
      "The effect of a single failure in each is correct.",
      "The preferred arrangement is correctly identified and justified.",
      "The safety/reliability link is sound and in clear English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ELE106",
    subjectName: "Electricidad",
    subjectId: "mn-s1-electricidad",
    unit: "Redes eléctricas",
    topic: "Resistencia e intensidad de corriente en redes eléctricas",
    week: 4,
    taskId: "mn-ele106-w04-load-on-generator",
    taskTitle: "Analyse Electrical Load On The Generator",
    scenario: "Several devices draw power from the ship's generator. The engineer asks the cadet to work out the total current drawn and whether starting one more device would overload the generator.",
    instructions: [
      "Identify the current draw of each device on the generator.",
      "Determine the total current drawn by the combined load.",
      "Compare the total against the generator's rated capacity.",
      "State whether one more device can be safely started, and the consequence of overloading."
    ],
    deliverable: "A load analysis note in English giving the total current drawn from the generator, the comparison against rated capacity, and a clear conclusion on adding another device.",
    assessmentCriteria: [
      "Individual device currents are handled correctly.",
      "The total load current is determined correctly.",
      "The comparison against generator capacity is accurate.",
      "The overload conclusion and consequence are correct and in clear English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ELE106",
    subjectName: "Electricidad",
    subjectId: "mn-s1-electricidad",
    unit: "Potencia eléctrica",
    topic: "Potencia activa, factor de potencia y eficiencia del motor",
    week: 5,
    taskId: "mn-ele106-w05-motor-power-efficiency",
    taskTitle: "Find A Motor's Input Power And Efficiency",
    scenario: "An engine-room auxiliary motor is supplied at 200 V and draws 25 A at a power factor of 0.8. Its mechanical output is 3.2 kW. The engineer asks the cadet to work out the electrical input power and the motor's efficiency.",
    instructions: [
      "Calculate the electrical input power using P = V x I x power factor.",
      "State the input power in kilowatts.",
      "Calculate the efficiency using efficiency = output power / input power, with output = 3.2 kW.",
      "State the efficiency as a percentage and confirm it is reasonable for a motor, in clear engine-room English."
    ],
    deliverable: "A power-and-efficiency calculation in English giving the input power in kW and the motor efficiency as a percentage, with the working shown.",
    assessmentCriteria: [
      "The input power is correct (200 x 25 x 0.8 = 4000 W = 4 kW).",
      "The power factor is correctly applied.",
      "The efficiency is correct (3200 / 4000 = 0.80 = 80%).",
      "Results carry the correct units (W/kW, %) and the English is clear."
    ],
    xp: 25,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ELE106",
    subjectName: "Electricidad",
    subjectId: "mn-s1-electricidad",
    unit: "Máquinas eléctricas",
    topic: "Motor de inducción: velocidad síncrona y deslizamiento",
    week: 6,
    taskId: "mn-ele106-w06-induction-motor-slip",
    taskTitle: "Calculate Synchronous Speed And Slip",
    scenario: "A 4-pole induction motor drives an engine-room pump on a 60 Hz supply. Its rotor turns at 1710 rpm. The engineer asks the cadet to find the synchronous speed and the slip.",
    instructions: [
      "Calculate the synchronous speed using Ns = 120 x f / p, with f = 60 Hz and p = 4 poles.",
      "State the synchronous speed in rpm.",
      "Calculate the slip using slip = (Ns - Nr) / Ns, with the rotor speed Nr = 1710 rpm.",
      "State the slip as a percentage and explain why an induction motor must run slower than synchronous speed, in clear engine-room English."
    ],
    deliverable: "A calculation in English giving the synchronous speed in rpm and the slip as a percentage, with the working shown.",
    assessmentCriteria: [
      "The synchronous speed is correct (120 x 60 / 4 = 1800 rpm).",
      "The slip is calculated correctly ((1800 - 1710) / 1800 = 0.05).",
      "The slip is stated as 5%.",
      "The reason the rotor runs below synchronous speed is correct, in clear engine-room English."
    ],
    xp: 25,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ELE106",
    subjectName: "Electricidad",
    subjectId: "mn-s1-electricidad",
    unit: "Arranque de motores",
    topic: "Corriente de arranque y arranque estrella-triángulo",
    week: 7,
    taskId: "mn-ele106-w07-motor-starting-star-delta",
    taskTitle: "Compare Direct And Star-Delta Starting Current",
    scenario: "An engine-room induction motor has a full-load current of 30 A and a direct-on-line starting current of 6 times full load. The engineer asks the cadet to compare the direct-on-line and star-delta starting currents and their effect on the generator.",
    instructions: [
      "Calculate the direct-on-line (DOL) starting current: 6 times the full-load current of 30 A.",
      "State why such a high starting current is a problem for the ship's generator.",
      "Calculate the starting current with star-delta starting, which reduces it to about one-third of the DOL value.",
      "State what star-delta starting also does to the starting torque, in clear engine-room English."
    ],
    deliverable: "A comparison in English of the DOL and star-delta starting currents, with the working shown and the effect on the generator noted.",
    assessmentCriteria: [
      "The DOL starting current is correct (6 x 30 = 180 A).",
      "The problem of high starting current for the generator is correctly explained.",
      "The star-delta starting current is correct (180 / 3 = 60 A).",
      "The effect on starting torque (also reduced to about one-third) is correct, in clear engine-room English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ELE106",
    subjectName: "Electricidad",
    subjectId: "mn-s1-electricidad",
    unit: "Protección eléctrica",
    topic: "Protección de motores: sobrecarga, cortocircuito, tierra y aislamiento",
    week: 8,
    taskId: "mn-ele106-w08-motor-protection",
    taskTitle: "Set And Explain Engine-Room Motor Protection",
    scenario: "An engine-room motor with a full-load current of 40 A is protected by an overload relay set to trip at 115% of full load. The engineer asks the cadet to explain the motor's protection and work out the overload trip current.",
    instructions: [
      "Explain the purpose of an overload relay, of short-circuit protection (fuse or breaker), and of earth-fault protection for the motor.",
      "Calculate the overload trip current if the relay is set at 115% of the 40 A full-load current.",
      "Explain what a megger (insulation resistance test) checks and why low insulation resistance is dangerous.",
      "State one action to take if the motor's protection trips repeatedly, in clear engine-room English."
    ],
    deliverable: "A protection note in English giving the purpose of overload, short-circuit and earth-fault protection, the overload trip current, and the role of insulation testing.",
    assessmentCriteria: [
      "The purpose of overload, short-circuit and earth-fault protection is correct.",
      "The overload trip current is correct (1.15 x 40 = 46 A).",
      "The purpose of the megger/insulation test and the danger of low insulation are correct.",
      "The action for repeated tripping is sensible, in clear engine-room English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ELE106",
    subjectName: "Electricidad",
    subjectId: "mn-s1-electricidad",
    unit: "Circuito eléctrico",
    topic: "Conductores, aislantes, pilas y acumuladores",
    week: 9,
    taskId: "mn-ele106-w09-emergency-battery-capacity",
    taskTitle: "Check The Emergency Battery Endurance",
    scenario: "The emergency battery bank must keep essential lighting alive if the generators are lost. The bank is rated 24 V, 200 Ah and the emergency lighting draws 25 A. The engineer asks the cadet to check how long the battery will hold the load and how the cells are arranged.",
    instructions: [
      "Explain the difference between a conductor, an insulator, and an accumulator (rechargeable battery) in this circuit.",
      "Calculate the endurance of the bank using time = capacity in Ah / current in A.",
      "Explain how cells are connected in series to raise the voltage and in parallel to raise the capacity.",
      "State the endurance in hours and whether it meets a typical emergency requirement, in clear engine-room English."
    ],
    deliverable: "A note in English giving the emergency battery endurance from its capacity and load, the role of conductors, insulators and accumulators, and how the cells are arranged.",
    assessmentCriteria: [
      "Conductor, insulator and accumulator are correctly distinguished.",
      "The endurance is correct (200 Ah / 25 A = 8 h).",
      "The series/parallel cell arrangement for voltage and capacity is correct.",
      "The result carries the correct unit and the English is clear."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ELE106",
    subjectName: "Electricidad",
    subjectId: "mn-s1-electricidad",
    unit: "Electrostática",
    topic: "Carga eléctrica, Ley de Coulomb y campo eléctrico",
    week: 10,
    taskId: "mn-ele106-w10-static-fuel-transfer",
    taskTitle: "Control Static Electricity During A Fuel Transfer",
    scenario: "During a bunker transfer the cadet notices that flowing fuel can build up an electrostatic charge. The engineer asks the cadet to explain the static hazard and the earthing and bonding used to prevent a spark.",
    instructions: [
      "Explain how electrostatic charge builds up as fuel flows through pipes and filters.",
      "Using the idea of charge and electric field, state why an accumulated charge can jump as a spark.",
      "Describe the bonding and earthing that keep the ship, the pipe and the receiving tank at the same potential.",
      "State one operational precaution during bunkering and report it in clear engine-room English."
    ],
    deliverable: "A note in English explaining electrostatic charge build-up during fuel transfer, why it can spark, and the bonding, earthing and precaution that prevent it.",
    assessmentCriteria: [
      "The build-up of electrostatic charge in flowing fuel is explained correctly.",
      "The link between accumulated charge, electric field and a spark is sound.",
      "The bonding and earthing measures are correct.",
      "The precaution is valid and clearly reported in English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ELE106",
    subjectName: "Electricidad",
    subjectId: "mn-s1-electricidad",
    unit: "Conexiones eléctricas",
    topic: "Conexiones estrella y delta",
    week: 11,
    taskId: "mn-ele106-w11-star-delta-connection",
    taskTitle: "Compare Star And Delta Line And Phase Values",
    scenario: "The ship's three-phase system runs at 440 V between lines. The electrician asks the cadet to work out the phase voltage for a load connected in star and the same load connected in delta, and to explain where each connection is used.",
    instructions: [
      "State the star relationship: line voltage = square root of 3 times phase voltage, so phase voltage = line voltage / 1.732.",
      "Calculate the phase voltage of a star-connected load on the 440 V line supply.",
      "State the delta relationship: phase voltage equals line voltage, and give the phase voltage for a delta-connected load.",
      "Explain why star gives a lower phase voltage and where each connection is used on board, in clear engine-room English."
    ],
    deliverable: "A note in English giving the star and delta phase voltages on the 440 V system, with the working shown and where each connection is used.",
    assessmentCriteria: [
      "The star relationship (line = root 3 x phase) is stated correctly.",
      "The star phase voltage is correct (440 / 1.732 = about 254 V).",
      "The delta phase voltage is correct (equal to 440 V).",
      "The use of each connection is explained, in clear engine-room English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ELE106",
    subjectName: "Electricidad",
    subjectId: "mn-s1-electricidad",
    unit: "Electrodinámica",
    topic: "Definición y tipos de electricidad",
    week: 12,
    taskId: "mn-ele106-w12-ac-dc-shipboard-power",
    taskTitle: "Compare AC And DC Systems In The Ship's Power Plant",
    scenario: "As the electrical term closes, the engineer asks the cadet to bring the topics together and explain why the ship distributes power as three-phase AC but keeps DC for certain services, from the main switchboard to the battery-backed systems.",
    instructions: [
      "Distinguish alternating current (AC) from direct current (DC) and give the main property of each.",
      "Explain why the main distribution on board is three-phase AC (generation, transformation and motor supply).",
      "State which services use DC and why (battery-backed emergency, control and electronics).",
      "Summarise how AC and DC work together in the ship's electrical plant, in clear engine-room English."
    ],
    deliverable: "An integrated note in English comparing AC and DC on board, why distribution is three-phase AC, which services use DC, and how they work together in the ship's plant.",
    assessmentCriteria: [
      "AC and DC are correctly distinguished with a key property of each.",
      "The reasons for three-phase AC distribution are correct.",
      "The DC services and the reason for them are correct.",
      "The integration of AC and DC is explained clearly, in correct engine-room English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ING102",
    subjectName: "Inglés Marítimo I",
    subjectId: "mn-s1-maritime-english-i",
    unit: "Uso del verbo to be",
    topic: "Presentarse a sí mismo",
    week: 1,
    taskId: "mn-ing102-w01-report-to-chief",
    taskTitle: "Report Yourself To The Chief Engineer",
    scenario: "You arrive in the engine room for the first time and must report to the chief engineer. Using the verb 'to be', state who you are, your rank, and your assignment, clearly and professionally.",
    instructions: [
      "State your name, rank, and role using the verb 'to be'.",
      "Confirm you are assigned to the engine department.",
      "Keep the report short, clear, and professional for the chief engineer.",
      "Use the form expected in an engine-room watch handover."
    ],
    deliverable: "A short self-report in English, as if joining the engine department, correctly using 'to be' to state identity, rank, and assignment.",
    assessmentCriteria: [
      "The verb 'to be' is used correctly throughout.",
      "Identity, rank, and assignment are stated clearly.",
      "The register is professional and appropriate for the engine room.",
      "The report is concise and would be understood by the chief engineer."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ING102",
    subjectName: "Inglés Marítimo I",
    subjectId: "mn-s1-maritime-english-i",
    unit: "Uso del verbo to be",
    topic: "Alfabeto convencional y fonético",
    week: 2,
    taskId: "mn-ing102-w02-phonetic-equipment-code",
    taskTitle: "Pass An Equipment Code Using The Phonetic Alphabet",
    scenario: "You must pass an engine-room equipment reference code over the internal communication system. To avoid mistakes, you spell it using the standard phonetic alphabet.",
    instructions: [
      "Take the given equipment code and spell it using the phonetic alphabet.",
      "Write each letter with its correct phonetic word (e.g. P = Papa).",
      "Include any numbers in the correct spoken form.",
      "State why phonetic spelling prevents errors in engine-room communication."
    ],
    deliverable: "The equipment code spelled out in the phonetic alphabet in correct communication format, with a one-line reason phonetic spelling is used.",
    assessmentCriteria: [
      "Every letter is matched to the correct phonetic word.",
      "Numbers are handled correctly.",
      "The format is clear and usable over comms.",
      "The reason for phonetic spelling is correct and relevant."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ING102",
    subjectName: "Inglés Marítimo I",
    subjectId: "mn-s1-maritime-english-i",
    unit: "Presente Continuo",
    topic: "Hora cotidiana y marítima",
    week: 3,
    taskId: "mn-ing102-w03-engine-status-report",
    taskTitle: "Give An Engine Status Report In Present Continuous",
    scenario: "The chief engineer asks for a routine report of what the machinery is doing now. Using the present continuous, state the current status of the main engine and auxiliaries, with the time in 24-hour format.",
    instructions: [
      "Describe what the machinery is doing now using the present continuous (e.g. 'The main engine is running...').",
      "State the current status of one auxiliary system.",
      "Give the time using the 24-hour maritime format (e.g. 0815).",
      "Keep the report in the form expected during an engine-room watch."
    ],
    deliverable: "A routine engine status report in English using the present continuous, the status of main and auxiliary machinery, and the correct 24-hour time.",
    assessmentCriteria: [
      "The present continuous is formed and used correctly.",
      "Machinery status is stated clearly.",
      "The 24-hour time format is used correctly.",
      "The report reads as a real watch report, not a grammar exercise."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ING102",
    subjectName: "Inglés Marítimo I",
    subjectId: "mn-s1-maritime-english-i",
    unit: "Auxiliar de modo can y can't",
    topic: "Necesidad, obligación y preferencias",
    week: 4,
    taskId: "mn-ing102-w04-can-cannot-machinery",
    taskTitle: "Report Machinery Readiness Using Can / Cannot",
    scenario: "Before departure, the chief engineer asks you to report which machinery is ready and which is not. Using 'can' and 'cannot', state clearly what the engine room is and is not able to do.",
    instructions: [
      "List the machinery or system you are reporting on.",
      "Use 'can' to state what is ready or able to operate.",
      "Use 'cannot' to state what is not ready, and briefly why.",
      "Keep the report clear enough for the chief engineer to act on before departure."
    ],
    deliverable: "A readiness report in English using 'can' and 'cannot' to state clearly what machinery is and is not ready before departure, with brief reasons.",
    assessmentCriteria: [
      "'Can' and 'cannot' are used correctly to express ability.",
      "Ready and not-ready items are clearly distinguished.",
      "Reasons for unavailability are brief and relevant.",
      "The report is actionable and in clear professional English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ING102",
    subjectName: "Inglés Marítimo I",
    subjectId: "mn-s1-maritime-english-i",
    unit: "Comunicación interna de máquinas",
    topic: "Frases normalizadas OMI (SMCP) y marcadores de mensaje",
    week: 5,
    taskId: "mn-ing102-w05-smcp-engine-bridge-message",
    taskTitle: "Pass Engine-To-Bridge Messages Using SMCP Markers",
    scenario: "You are in the engine room and must pass messages to the bridge over the internal communication system: a warning about a rising temperature, information on a pump changeover, and your intention to slow a machine. Using the SMCP message markers, you make each message clear and unambiguous.",
    instructions: [
      "Choose the correct SMCP message marker for each message: a Warning, a piece of Information, and an Intention.",
      "Build each message in short standard SMCP phrasing for the internal engine-to-bridge line, avoiding everyday idioms.",
      "Explain how the message marker tells the bridge how to treat the message.",
      "Confirm receipt of a reply using an acknowledgement, in correct engine-room English."
    ],
    deliverable: "A note in English giving three engine-to-bridge messages (a Warning, an Information, and an Intention) built with the correct SMCP message markers, and how each is acknowledged.",
    assessmentCriteria: [
      "The message markers match the intent of each message (Warning, Information, Intention).",
      "The messages use short standard SMCP phrasing, not everyday idiom.",
      "The explanation of how the marker guides the bridge is correct.",
      "The acknowledgement is correct and the English is clear."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ING102",
    subjectName: "Inglés Marítimo I",
    subjectId: "mn-s1-maritime-english-i",
    unit: "Órdenes de máquina",
    topic: "Engine orders y telégrafo (read-back del lado de máquinas)",
    week: 6,
    taskId: "mn-ing102-w06-engine-telegraph-orders",
    taskTitle: "Acknowledge And Act On Telegraph Engine Orders",
    scenario: "During manoeuvring the bridge rings engine orders down on the telegraph. From the engine-room side you must recognise each order, repeat it back, and act on it. The engineer asks you to show the correct English for the main telegraph orders.",
    instructions: [
      "Recognise the standard telegraph engine orders in English (for example Full ahead, Half ahead, Slow astern, Stop engine, Finished with engines).",
      "For three orders, give the correct read-back that the engine side sends to acknowledge.",
      "State what action the engine side takes for one order (for example 'Stop engine').",
      "Explain why the read-back of a telegraph order prevents a manoeuvring error, in correct engine-room English."
    ],
    deliverable: "A note in English listing the standard telegraph engine orders, the read-back for three of them, the action for one order, and why read-back prevents errors.",
    assessmentCriteria: [
      "The telegraph engine orders are recognised with correct standard English.",
      "The read-back for the three orders is correct and complete.",
      "The action taken for the order is correct.",
      "The reason read-back prevents a manoeuvring error is sound, in correct engine-room English."
    ],
    xp: 25,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ING102",
    subjectName: "Inglés Marítimo I",
    subjectId: "mn-s1-maritime-english-i",
    unit: "Presente simple y there is / there are",
    topic: "Descripción de la maquinaria y su estado en la entrega de guardia",
    week: 7,
    taskId: "mn-ing102-w07-describe-machinery-state",
    taskTitle: "Hand Over The Machinery State In Present Simple",
    scenario: "At the change of the engine-room watch you must hand over the state of the machinery to the next cadet: which units are running, which are on standby, and the key pressures and temperatures. Using 'there is' and 'there are' with the present simple, you give a clear handover.",
    instructions: [
      "Use 'there is' and 'there are' to state which machinery is running and which is on standby.",
      "Use the present simple to describe the key readings (for example the lube oil pressure is 4 bar, the jacket water runs at 80 degrees C).",
      "State any item that needs watching during the next watch.",
      "Keep the handover accurate and easy for the next watch to act on, in correct engine-room English."
    ],
    deliverable: "A machinery handover in English using 'there is / there are' and the present simple to describe the running and standby equipment, the key readings, and anything to watch.",
    assessmentCriteria: [
      "'There is' and 'there are' are used correctly for singular and plural machinery.",
      "The present simple correctly describes the readings and equipment state.",
      "The item to watch is relevant and clearly stated.",
      "The handover is accurate and in correct engine-room English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ING102",
    subjectName: "Inglés Marítimo I",
    subjectId: "mn-s1-maritime-english-i",
    unit: "Pasado simple",
    topic: "Parte de guardia de máquinas en pasado",
    week: 8,
    taskId: "mn-ing102-w08-engine-watch-report-past",
    taskTitle: "Report The Engine Watch In The Past Simple",
    scenario: "At the end of your engine-room watch you must report to the engineer what happened during it: you started a standby pump, changed over a fuel filter, and found and reported a small leak. You report the events in the past simple, in order.",
    instructions: [
      "Report the watch events in chronological order using the past simple (regular and irregular verbs).",
      "State clearly what happened, when, and what action was taken.",
      "Use correct past forms of common machinery verbs (for example started, stopped, changed over, checked, found, repaired).",
      "Keep the report factual and clear enough for the engineer to log, in correct engine-room English."
    ],
    deliverable: "An engine watch report in English narrating the watch events in the past simple, in chronological order, with the actions taken.",
    assessmentCriteria: [
      "The past simple is used correctly for both regular and irregular verbs.",
      "The events are in the correct chronological order.",
      "What happened and the action taken are stated clearly.",
      "The report is factual and in correct engine-room English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ING102",
    subjectName: "Inglés Marítimo I",
    subjectId: "mn-s1-maritime-english-i",
    unit: "Ubicación de objetos y personas",
    topic: "Preposiciones de lugar en la sala de máquinas",
    week: 9,
    taskId: "mn-ing102-w09-locate-spares-prepositions",
    taskTitle: "Direct A Shipmate To A Spare Part Using Prepositions",
    scenario: "The engineer needs a spare gasket and sends the cadet to guide a rating to it over the phone. Using prepositions of place, the cadet must describe exactly where the part is stored in the engine-room store.",
    instructions: [
      "Locate the item using prepositions of place (on, in, under, behind, next to, above, between).",
      "Give clear directions from a known landmark, such as the workshop bench, to the item's shelf.",
      "Describe the item's position on the shelf so it cannot be confused with another part.",
      "Deliver the directions clearly enough for the rating to find it first time, in correct engine-room English."
    ],
    deliverable: "A set of spoken directions in English using prepositions of place to guide a shipmate to a spare part in the engine-room store.",
    assessmentCriteria: [
      "Prepositions of place are used correctly and precisely.",
      "The directions start from a clear landmark and are easy to follow.",
      "The item's position is described unambiguously.",
      "The directions are clear and in correct engine-room English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ING102",
    subjectName: "Inglés Marítimo I",
    subjectId: "mn-s1-maritime-english-i",
    unit: "Números ordinales y cardinales",
    topic: "Lectura de valores y numeración de unidades",
    week: 10,
    taskId: "mn-ing102-w10-readings-ordinal-cardinal",
    taskTitle: "Report Gauge Readings And Unit Numbers Correctly",
    scenario: "During a round the engineer asks the cadet to read off several gauges and identify which cylinder and which generator they belong to. The cadet must say the values as cardinal numbers and the unit positions as ordinal numbers without confusion.",
    instructions: [
      "Read three gauge values aloud as cardinal numbers with their units (for example thirty-two bar, one hundred and ten degrees).",
      "Identify the machinery unit by ordinal number where it applies (for example the third cylinder, the second generator).",
      "State a decimal reading correctly in spoken form (for example four point five bar).",
      "Give the full report so the engineer can log it without asking again, in correct engine-room English."
    ],
    deliverable: "A spoken reading report in English giving three gauge values as cardinal numbers with units and the machinery units by ordinal number.",
    assessmentCriteria: [
      "Cardinal numbers and units are said correctly.",
      "Ordinal numbers correctly identify the machinery units.",
      "The decimal reading is spoken correctly.",
      "The report is clear and unambiguous in correct engine-room English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ING102",
    subjectName: "Inglés Marítimo I",
    subjectId: "mn-s1-maritime-english-i",
    unit: "Adverbios de frecuencia",
    topic: "Rutinas de mantenimiento y frecuencia",
    week: 11,
    taskId: "mn-ing102-w11-maintenance-frequency-adverbs",
    taskTitle: "Describe The Maintenance Routine Using Frequency Adverbs",
    scenario: "A new cadet joins the watch and the engineer asks you to explain the planned maintenance routine: which checks happen every watch, which are done weekly, and which are only occasional. You must describe it using adverbs and expressions of frequency.",
    instructions: [
      "Describe the routine checks using frequency adverbs (always, usually, often, sometimes, never) in the present simple.",
      "State how often each task is done using time expressions (every watch, daily, weekly, once a month).",
      "Distinguish a routine daily check from a periodic overhaul so the new cadet understands the difference.",
      "Deliver the explanation clearly so the new cadet can follow the routine, in correct engine-room English."
    ],
    deliverable: "An explanation in English of the engine-room maintenance routine using frequency adverbs and time expressions to show how often each task is done.",
    assessmentCriteria: [
      "Frequency adverbs are used correctly with the present simple.",
      "Time expressions state how often each task is done accurately.",
      "The routine and periodic tasks are clearly distinguished.",
      "The explanation is clear and in correct engine-room English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "ING102",
    subjectName: "Inglés Marítimo I",
    subjectId: "mn-s1-maritime-english-i",
    unit: "Sustantivos contables y no contables",
    topic: "Reporte de consumibles y repuestos",
    week: 12,
    taskId: "mn-ing102-w12-countable-uncountable-stores",
    taskTitle: "Write A Stores And Consumables Report",
    scenario: "Before a port call the engineer asks the cadet to draft the engine stores report: how much fuel and oil remain, and how many filters, gaskets and drums are left. The cadet must use countable and uncountable nouns and the right quantity words.",
    instructions: [
      "Separate the items into uncountable (fuel, oil, water, grease) and countable (filters, gaskets, drums, valves).",
      "Use the correct quantifiers: much / a little / litres of for uncountable, many / a few / a number of for countable.",
      "State the remaining quantity of each and flag any item that must be re-ordered in port.",
      "Present the stores report clearly for the engineer to send ashore, in correct engine-room English."
    ],
    deliverable: "An engine stores report in English using countable and uncountable nouns with correct quantifiers, giving the remaining quantities and the items to re-order.",
    assessmentCriteria: [
      "Countable and uncountable nouns are correctly separated.",
      "The quantifiers match the noun type (much/little vs many/few).",
      "The remaining quantities and re-order flags are clear and correct.",
      "The report is professional and in correct engine-room English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "DII105",
    subjectName: "Dibujo de Ingeniería",
    subjectId: "mn-s1-dibujo-ingenieria",
    unit: "Introducción",
    topic: "Tipos de líneas",
    week: 1,
    taskId: "mn-dii105-w01-line-types-machinery-plan",
    taskTitle: "Read The Line Types On A Machinery Plan",
    scenario: "The engineer hands the cadet a section of a machinery arrangement drawing and asks what the different line types mean before the cadet can interpret it correctly.",
    instructions: [
      "Identify three different line types used on the machinery drawing.",
      "State what each line type represents on a technical drawing.",
      "Explain why distinguishing line types matters when reading a machinery plan.",
      "Write your answer in clear English using correct drawing terminology."
    ],
    deliverable: "A short note in English identifying three line types on a machinery plan, what each represents, and why distinguishing them matters.",
    assessmentCriteria: [
      "Line types are correctly identified.",
      "The meaning of each is accurate.",
      "The reasoning about reading plans is sound.",
      "Drawing terminology is correct and in clear English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "DII105",
    subjectName: "Dibujo de Ingeniería",
    subjectId: "mn-s1-dibujo-ingenieria",
    unit: "Escalas y acotaciones",
    topic: "Escalas y acotaciones",
    week: 2,
    taskId: "mn-dii105-w02-scale-component",
    taskTitle: "Use Scale To Find A Component Dimension",
    scenario: "A machinery component drawing is drawn to a stated scale. The engineer asks the cadet to use the scale to work out the real size of a part from the measurement on the drawing.",
    instructions: [
      "Identify the scale stated on the drawing.",
      "Read the dimension given on the drawing.",
      "Apply the scale to calculate the real dimension of the component.",
      "State the result with the correct unit and explain why scale accuracy matters for spares."
    ],
    deliverable: "A scale calculation note in English giving the real component dimension from the drawing, with the working shown and the correct unit.",
    assessmentCriteria: [
      "The scale is read and applied correctly.",
      "The real dimension is calculated accurately.",
      "The result carries the correct unit.",
      "The importance of scale accuracy is explained in clear English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "DII105",
    subjectName: "Dibujo de Ingeniería",
    subjectId: "mn-s1-dibujo-ingenieria",
    unit: "Simbología",
    topic: "Simbología marítima, topográfica y eléctrica",
    week: 3,
    taskId: "mn-dii105-w03-symbols-piping-diagram",
    taskTitle: "Interpret Symbols On A Piping Diagram",
    scenario: "Before working on a system, the cadet must interpret the standard symbols on its piping or electrical diagram. The engineer asks the cadet to identify a set of symbols and explain what each represents.",
    instructions: [
      "Identify three standard symbols on a piping or electrical diagram.",
      "State what each symbol represents (e.g. valve, pump, motor).",
      "Explain why standardized symbols matter for crews of different nationalities.",
      "Report your interpretation in clear English."
    ],
    deliverable: "A symbol interpretation note in English identifying three diagram symbols, what each represents, and why standard symbols matter on board.",
    assessmentCriteria: [
      "Symbols are correctly identified.",
      "The meaning of each is accurate.",
      "The reasoning about standardization is sound.",
      "Terminology is correct and clearly written in English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "DII105",
    subjectName: "Dibujo de Ingeniería",
    subjectId: "mn-s1-dibujo-ingenieria",
    unit: "Tipos de plano",
    topic: "Planos cartográficos, cartas terrestres y cartas marinas",
    week: 4,
    taskId: "mn-dii105-w04-system-schematic-reading",
    taskTitle: "Distinguish A System Schematic From A Layout Plan",
    scenario: "The engineer shows the cadet several drawings and asks how a system schematic differs from a physical layout plan, and what each is used for in the engine room.",
    instructions: [
      "State two features that distinguish a system schematic from a physical layout drawing.",
      "Identify what information a schematic gives that a layout does not.",
      "Explain why correct interpretation of each is essential for maintenance.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A note in English distinguishing a system schematic from a layout plan, what each provides, and why correct reading matters for maintenance.",
    assessmentCriteria: [
      "The distinguishing features are correct.",
      "The information each drawing provides is accurate.",
      "The maintenance reasoning is sound.",
      "The answer is clear and uses correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "DII105",
    subjectName: "Dibujo de Ingeniería",
    subjectId: "mn-s1-dibujo-ingenieria",
    unit: "Vistas ortográficas",
    topic: "Planta, alzado y perfil de un componente de máquina",
    week: 5,
    taskId: "mn-dii105-w05-orthographic-machine-component",
    taskTitle: "Read The Orthographic Views Of A Machine Component",
    scenario: "The engineer hands the cadet an orthographic drawing of a pump casing flange showing three views, and asks the cadet to identify each view and read the shape of the component before it is machined.",
    instructions: [
      "Identify which view is the plan (top), which is the front elevation, and which is the side or profile view.",
      "Explain what each view shows about the shape and dimensions of the component (bolt holes, bore, thickness).",
      "Describe how the three views together define the 3D form of the flange.",
      "Report your interpretation in clear engine-room English."
    ],
    deliverable: "A note in English identifying the plan, front elevation and side view of the machine component, what each shows, and how the three views combine to define its 3D form.",
    assessmentCriteria: [
      "The plan, front elevation and side view are correctly identified.",
      "What each view shows about shape and dimensions is correct.",
      "The explanation of how the views combine into a 3D form is sound.",
      "The note is clear and in correct engine-room English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "DII105",
    subjectName: "Dibujo de Ingeniería",
    subjectId: "mn-s1-dibujo-ingenieria",
    unit: "Vistas en sección",
    topic: "Cortes y secciones de un componente de máquina",
    week: 6,
    taskId: "mn-dii105-w06-sectional-views",
    taskTitle: "Interpret A Sectional View Of A Component",
    scenario: "To understand what is inside a valve, the engineer shows the cadet a sectional view (a cut through the component) and asks why the section reveals what the outside views cannot.",
    instructions: [
      "State what a sectional view is and how a cutting plane produces it.",
      "Explain what the hatching (section lines) on the cut surfaces represents.",
      "Use the sectional view to describe an internal feature of the component that the outside views do not show (for example a bore, a seat, or a passage).",
      "Explain why sectional views are essential for machinery components, in clear engine-room English."
    ],
    deliverable: "A note in English explaining the sectional view, what the hatching means, one internal feature it reveals, and why sections are essential for machinery drawings.",
    assessmentCriteria: [
      "The idea of a sectional view and the cutting plane is explained correctly.",
      "The meaning of the hatching on cut surfaces is correct.",
      "An internal feature revealed by the section is correctly described.",
      "The reason sections are essential for machinery is sound, in clear engine-room English."
    ],
    xp: 25,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "DII105",
    subjectName: "Dibujo de Ingeniería",
    subjectId: "mn-s1-dibujo-ingenieria",
    unit: "Diagramas de tubería e instrumentación",
    topic: "Lectura de un P&ID y trazado del flujo",
    week: 7,
    taskId: "mn-dii105-w07-pid-flow-tracing",
    taskTitle: "Trace A System Flow On A Piping And Instrumentation Diagram",
    scenario: "Before working on a fuel or cooling system, the cadet must read its piping and instrumentation diagram (P&ID) and follow the flow through the whole system from suction to discharge.",
    instructions: [
      "Identify on the P&ID the pump, the main line, the valves, and the instruments in the system.",
      "Trace the flow path from the suction side, through the pump, to the discharge side.",
      "State the function of one valve and one instrument shown on the diagram.",
      "Explain how correctly reading the P&ID prevents a mistake when operating the system, in clear engine-room English."
    ],
    deliverable: "A note in English identifying the main elements of the P&ID, tracing the flow from suction to discharge, and giving the function of one valve and one instrument.",
    assessmentCriteria: [
      "The pump, line, valves and instruments are correctly identified on the P&ID.",
      "The flow is traced correctly from suction to discharge.",
      "The function of the valve and the instrument is correct.",
      "The link between correct P&ID reading and safe operation is sound, in clear engine-room English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "DII105",
    subjectName: "Dibujo de Ingeniería",
    subjectId: "mn-s1-dibujo-ingenieria",
    unit: "Planos de disposición y de despiece",
    topic: "Arrangement plan de la sala de máquinas y planos de partes",
    week: 8,
    taskId: "mn-dii105-w08-engine-room-arrangement-exploded",
    taskTitle: "Use Arrangement And Exploded Drawings For Maintenance",
    scenario: "For a maintenance job the cadet must locate a piece of equipment on the engine-room arrangement plan and then use the exploded parts drawing to take it apart and reassemble it in the right order.",
    instructions: [
      "Use the engine-room arrangement plan to locate a named item of equipment and give its position in the space.",
      "State what an exploded (parts) drawing shows and how the part numbers relate to a parts list.",
      "Use the exploded drawing to set out the correct order to dismantle and then reassemble the component.",
      "Explain how these drawings support correct and safe maintenance, in clear engine-room English."
    ],
    deliverable: "A note in English locating the equipment on the arrangement plan, explaining the exploded parts drawing, and giving the dismantle-and-reassemble order for the component.",
    assessmentCriteria: [
      "The equipment is correctly located on the arrangement plan with its position.",
      "The purpose of the exploded drawing and its link to the parts list are correct.",
      "The dismantle and reassemble order is logical and correct.",
      "The link between the drawings and safe maintenance is sound, in clear engine-room English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "DII105",
    subjectName: "Dibujo de Ingeniería",
    subjectId: "mn-s1-dibujo-ingenieria",
    unit: "Proyección Isométrica",
    topic: "Vista isométrica de un componente de máquina",
    week: 9,
    taskId: "mn-dii105-w09-isometric-view",
    taskTitle: "Read An Isometric View Of A Machine Component",
    scenario: "The engineer hands the cadet an isometric drawing of a small valve body before it is assembled, and asks the cadet to read the 3D shape and relate it to the flat orthographic views on the same sheet.",
    instructions: [
      "Explain what an isometric projection shows and how it differs from a flat orthographic view.",
      "Read the isometric drawing to describe the 3D shape of the component and its main features.",
      "Relate one face of the isometric view to the matching orthographic view on the sheet.",
      "Report how the isometric view helps in assembling the component, in clear engine-room English."
    ],
    deliverable: "A note in English explaining the isometric projection, describing the component's 3D shape, and relating it to the orthographic views, with the assembly benefit noted.",
    assessmentCriteria: [
      "The nature of an isometric projection is explained correctly.",
      "The 3D shape and main features are read correctly.",
      "The isometric face is correctly related to an orthographic view.",
      "The assembly benefit is sound, in clear engine-room English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "DII105",
    subjectName: "Dibujo de Ingeniería",
    subjectId: "mn-s1-dibujo-ingenieria",
    unit: "Problemas Geométricas",
    topic: "Construcciones geométricas para plantillas y bridas",
    week: 10,
    taskId: "mn-dii105-w10-geometric-bolt-circle",
    taskTitle: "Set Out A Bolt Circle On A Flange By Construction",
    scenario: "A new gasket and flange must be marked out for a pipe repair. The engineer asks the cadet to use geometric construction to divide the flange's bolt circle into equal spacings so the holes line up with the mating flange.",
    instructions: [
      "State how many bolt holes are required and the diameter of the bolt circle.",
      "Explain the geometric method to divide the circle into that number of equal parts (dividing 360 degrees and stepping the angle around the centre).",
      "Calculate the angular spacing between holes for the given number of bolts.",
      "Report the marking-out steps so a fitter could reproduce them, in clear engine-room English."
    ],
    deliverable: "A note in English giving the geometric construction to divide a flange bolt circle into equal spacings, with the angular spacing calculated and the marking-out steps.",
    assessmentCriteria: [
      "The geometric method for equal division of the circle is correct.",
      "The angular spacing is calculated correctly (360 degrees / number of bolts).",
      "The marking-out steps are clear and reproducible.",
      "The note uses correct drawing terms, in clear engine-room English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "DII105",
    subjectName: "Dibujo de Ingeniería",
    subjectId: "mn-s1-dibujo-ingenieria",
    unit: "Interpretación",
    topic: "Instalaciones eléctricas navales: diagrama unifilar",
    week: 11,
    taskId: "mn-dii105-w11-single-line-diagram",
    taskTitle: "Read The Engine-Room Single-Line Electrical Diagram",
    scenario: "Before an electrical isolation the cadet must read the ship's single-line diagram to trace how power reaches a specific engine-room motor from the main switchboard through its breaker.",
    instructions: [
      "Identify the standard symbols on the single-line diagram: generator, main switchboard, breaker, transformer and motor.",
      "Trace the supply path from the generator through the main switchboard and breaker to the motor.",
      "Identify the breaker that must be opened to isolate that motor safely.",
      "Report the isolation point and path clearly for a permit-to-work, in clear engine-room English."
    ],
    deliverable: "A note in English identifying the single-line diagram symbols, tracing the supply path to the motor, and naming the breaker to open for isolation.",
    assessmentCriteria: [
      "The single-line diagram symbols are correctly identified.",
      "The supply path from generator to motor is traced correctly.",
      "The correct isolation breaker is identified.",
      "The isolation point is reported clearly for a permit-to-work, in correct engine-room English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "DII105",
    subjectName: "Dibujo de Ingeniería",
    subjectId: "mn-s1-dibujo-ingenieria",
    unit: "Introducción",
    topic: "Dibujo de ingeniería como medio de comunicación: croquis acotado",
    week: 12,
    taskId: "mn-dii105-w12-dimensioned-sketch-spare",
    taskTitle: "Produce A Dimensioned Sketch To Order A Spare",
    scenario: "A small bracket has fractured and no drawing exists on board. The engineer asks the cadet to make a clear dimensioned sketch with a title block so the workshop ashore can manufacture an exact replacement.",
    instructions: [
      "Sketch the part showing the necessary views to define its shape.",
      "Add the dimensions, the scale, and the material so the part can be made without the original.",
      "Complete a title block (part name, ship, date, drawn by) so the drawing communicates clearly.",
      "Write the covering note that sends the sketch to the workshop, in clear engine-room English."
    ],
    deliverable: "A dimensioned sketch with a title block (described in text) plus a covering note in English, together giving the workshop everything needed to make the replacement part.",
    assessmentCriteria: [
      "The views chosen define the part's shape completely.",
      "The dimensions, scale and material are complete and correct.",
      "The title block carries the information needed to identify the drawing.",
      "The covering note is clear and professional, in correct engine-room English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "PMR107",
    subjectName: "Prácticas Marineras I",
    subjectId: "mn-s1-practicas-marineras-i",
    unit: "Bote salvavidas",
    topic: "Uso correcto del chaleco salvavidas y aro salvavidas",
    week: 1,
    taskId: "mn-pmr107-w01-lifesaving-appliances",
    taskTitle: "Identify And Explain Personal Life-Saving Appliances",
    scenario: "During a safety familiarization, the officer points to a lifejacket and a lifebuoy and asks the cadet to identify each, explain its correct use, and state when it is used. Survival applies to all crew, engine and deck alike.",
    instructions: [
      "Identify the lifejacket and the lifebuoy by their correct English names.",
      "Explain the correct way to don and secure a lifejacket.",
      "Explain how and when a lifebuoy is used in a man-overboard situation.",
      "State one check that confirms each appliance is ready for use."
    ],
    deliverable: "A short report in English identifying the lifejacket and lifebuoy, their correct use, and a readiness check for each.",
    assessmentCriteria: [
      "Both appliances are correctly named in English.",
      "Correct use of each is accurately described.",
      "The man-overboard use of the lifebuoy is correct.",
      "Readiness checks are relevant and clearly stated."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "PMR107",
    subjectName: "Prácticas Marineras I",
    subjectId: "mn-s1-practicas-marineras-i",
    unit: "Bote salvavidas",
    topic: "Tipos, nomenclatura y accesorios de botes salvavidas",
    week: 2,
    taskId: "mn-pmr107-w02-lifeboat-nomenclature",
    taskTitle: "Label Lifeboat Parts And Equipment",
    scenario: "Before a survival craft drill, the officer asks the cadet to identify the main parts of the lifeboat and its required equipment using correct maritime English nomenclature.",
    instructions: [
      "Identify three main structural parts of a lifeboat by their correct English names.",
      "List three items of equipment that a lifeboat must carry.",
      "State the purpose of each item you listed.",
      "Write the identification clearly, as it would appear on a survival craft inventory."
    ],
    deliverable: "A lifeboat identification list in English naming three structural parts and three equipment items with their purpose.",
    assessmentCriteria: [
      "Structural parts are named correctly in English.",
      "Equipment items are valid and correctly named.",
      "The purpose of each item is accurate.",
      "Nomenclature is precise and professional."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "PMR107",
    subjectName: "Prácticas Marineras I",
    subjectId: "mn-s1-practicas-marineras-i",
    unit: "Cabuyería",
    topic: "Conceptos, materiales y tipos de cabos",
    week: 3,
    taskId: "mn-pmr107-w03-ropes-and-knots",
    taskTitle: "Select The Right Rope And Knot For A Task",
    scenario: "The bosun gives the cadet a deck task and asks which type of rope and which knot are appropriate, explaining the choice using correct seamanship terminology. Engine cadets also stand by for mooring stations.",
    instructions: [
      "Describe two types of rope (by material or construction) used on board.",
      "State one advantage of each rope type for a specific use.",
      "Name a knot or hitch appropriate for a given securing task and explain why.",
      "Report your selection in clear maritime English."
    ],
    deliverable: "A seamanship note in English describing two rope types, an advantage of each, and an appropriate knot for a securing task with justification.",
    assessmentCriteria: [
      "Rope types and their properties are correct.",
      "The advantage stated matches the use.",
      "The knot chosen is appropriate for the task.",
      "Seamanship terminology is correct and in clear English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "PMR107",
    subjectName: "Prácticas Marineras I",
    subjectId: "mn-s1-practicas-marineras-i",
    unit: "Cabos de amarre",
    topic: "Distribución de cabos de amarre y boza",
    week: 4,
    taskId: "mn-pmr107-w04-mooring-line-layout",
    taskTitle: "Explain A Standard Mooring Line Layout",
    scenario: "The vessel is coming alongside. The officer asks the cadet to explain the standard arrangement of mooring lines (head lines, breast lines, springs, stern lines) and what each one controls.",
    instructions: [
      "Name the main mooring lines used to secure a vessel alongside.",
      "State what movement each line controls (fore-aft, off-berth).",
      "Explain the role of the spring lines specifically.",
      "Report the layout clearly, as you would brief the mooring team in English."
    ],
    deliverable: "A mooring layout brief in English naming the main mooring lines, what each controls, and the specific role of the springs.",
    assessmentCriteria: [
      "Mooring lines are correctly named.",
      "The movement each line controls is correct.",
      "The role of the spring lines is accurately explained.",
      "The brief is clear and usable by a mooring team, in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "PMR107",
    subjectName: "Prácticas Marineras I",
    subjectId: "mn-s1-practicas-marineras-i",
    unit: "Cabuyería",
    topic: "Nudos, vueltas y costuras marineras esenciales",
    week: 5,
    taskId: "mn-pmr107-w05-knots-and-splices",
    taskTitle: "Choose And Tie The Right Knot For Each Job",
    scenario: "As part of basic seamanship training, the engine cadet is set several rope jobs on deck: making a fixed loop, tying a line to a rail, joining two ropes of different size, and securing a line that is under load. The instructor asks which knot fits each job and how a simple eye splice is formed.",
    instructions: [
      "Choose the correct knot or hitch for four rope jobs: a fixed loop, a line made fast to a rail or ring, two ropes joined, and a line held under load.",
      "Name each knot correctly (for example bowline, clove hitch, sheet bend, rolling hitch).",
      "Describe how one of them is tied and how you check it will hold and can be cast off.",
      "Explain when a basic eye splice is used instead of a knot, in clear English."
    ],
    deliverable: "A note in English matching four rope jobs to the correct named knot, with the tying steps for one knot and the case for using an eye splice.",
    assessmentCriteria: [
      "Each rope job is matched to a suitable knot or hitch.",
      "The knots are named correctly.",
      "The tying steps are accurate and include a check that it holds and casts off.",
      "The eye-splice case is correct, in clear English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "PMR107",
    subjectName: "Prácticas Marineras I",
    subjectId: "mn-s1-practicas-marineras-i",
    unit: "Fondeo",
    topic: "Equipo de ancla y maniobra de fondear y levar",
    week: 6,
    taskId: "mn-pmr107-w06-anchoring-operation",
    taskTitle: "Support The Forecastle Party During Anchoring",
    scenario: "The engine cadet is detailed to help the forecastle party during anchoring stations. The chief mate asks the cadet to list the anchor gear and to set out, in order, what happens when the anchor is let go and when it is later weighed.",
    instructions: [
      "Name the main items of ground tackle used in anchoring (anchor, cable, hawse pipe, windlass) and what each does.",
      "Set out, in order, the steps the forecastle party takes to let go the anchor on the officer's order.",
      "State how the cable is reported to the bridge and how the party checks the anchor is holding.",
      "Identify the anchoring day signal and how weighing anchor is reported, in clear English."
    ],
    deliverable: "A note in English naming the ground tackle, the let-go sequence, the cable and holding checks, and the anchoring signal.",
    assessmentCriteria: [
      "Ground tackle items are named correctly with their function.",
      "The let-go sequence is in a safe, logical order.",
      "Cable reporting and the holding check are correct.",
      "The anchoring signal and the weighing report are correct, in clear English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "PMR107",
    subjectName: "Prácticas Marineras I",
    subjectId: "mn-s1-practicas-marineras-i",
    unit: "Mantenimiento de cubierta",
    topic: "Picado, rascado, limpieza, pintado y control de la corrosión",
    week: 7,
    taskId: "mn-pmr107-w07-deck-maintenance-corrosion",
    taskTitle: "Plan A Rust-Control And Painting Job",
    scenario: "On a maintenance day the engine cadet is given a rusted handrail and a set of external fittings to bring back to good order. Before starting, the cadet must plan the job from cleaning through to painting and list the safety gear.",
    instructions: [
      "Set out the correct order to treat the rusted area: chipping or scraping, cleaning, priming, and painting.",
      "State why the surface must be prepared before painting for the coating to protect the metal.",
      "Identify the protective equipment and one safety precaution for the job.",
      "Explain how routine upkeep controls corrosion and protects the vessel, in clear English."
    ],
    deliverable: "A maintenance plan in English with the preparation-to-painting order, the reason for surface preparation, the protective equipment, and the corrosion-control benefit.",
    assessmentCriteria: [
      "The maintenance order is correct.",
      "The importance of surface preparation is correctly explained.",
      "The protective equipment and safety precaution are appropriate.",
      "The corrosion-control benefit is clearly explained, in clear English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "PMR107",
    subjectName: "Prácticas Marineras I",
    subjectId: "mn-s1-practicas-marineras-i",
    unit: "Maniobra de atraque y desatraque",
    topic: "Sisga, envío de cabos a tierra, remolcadores, defensas y trabajo en equipo",
    week: 8,
    taskId: "mn-pmr107-w08-berthing-operation",
    taskTitle: "Work The After Station During Berthing",
    scenario: "During arrival in port the engine cadet is sent to the after mooring station to help the team. With a tug assisting, the officer asks the cadet to describe what the station does from receiving the heaving line to making the stern lines fast.",
    instructions: [
      "Describe how the heaving line is used to pass the mooring lines between ship and shore.",
      "State the order in which the stern lines are typically sent and made fast during berthing.",
      "Explain the role of fenders and the tug in bringing the vessel safely alongside.",
      "Identify two safety points for the mooring team (for example snap-back zones and clear communication) and report them in clear English."
    ],
    deliverable: "A berthing note in English describing the heaving-line-to-made-fast sequence at the after station, the role of fenders and the tug, and two mooring-team safety points.",
    assessmentCriteria: [
      "The heaving line and line-passing procedure is described correctly.",
      "The order of sending and making fast the stern lines is logical and safe.",
      "The role of fenders and the tug is accurately explained.",
      "The two safety points are valid and clearly reported in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "PMR107",
    subjectName: "Prácticas Marineras I",
    subjectId: "mn-s1-practicas-marineras-i",
    unit: "Natación",
    topic: "Flotación y nado libre en supervivencia",
    week: 9,
    taskId: "mn-pmr107-w09-survival-swim-to-craft",
    taskTitle: "Swim And Float To Reach A Survival Craft",
    scenario: "In an abandon-ship exercise the engine cadet must enter the water safely and swim to the liferaft while conserving energy. The instructor asks the cadet to set out the correct technique for entering, floating and swimming to the craft.",
    instructions: [
      "Describe the safe way to enter the water from a height wearing a lifejacket.",
      "Describe the floating and free-swimming technique used to reach the craft while conserving energy.",
      "State what to do if the craft is far off or the cadet must wait to be picked up.",
      "Report the procedure clearly for a safety briefing, in correct maritime English."
    ],
    deliverable: "A survival-swim brief in English covering safe water entry, the floating and free-swimming technique to reach the craft, and conserving energy while waiting.",
    assessmentCriteria: [
      "The safe water-entry method with a lifejacket is correct.",
      "The floating and free-swimming technique is described correctly.",
      "The energy-conserving and waiting guidance is sound.",
      "The brief is clear and in correct maritime English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "PMR107",
    subjectName: "Prácticas Marineras I",
    subjectId: "mn-s1-practicas-marineras-i",
    unit: "Boga",
    topic: "Organización del bote y órdenes para la boga",
    week: 10,
    taskId: "mn-pmr107-w10-boat-crew-rowing-orders",
    taskTitle: "Organise A Boat Crew And Give Rowing Orders",
    scenario: "The engine cadet is put in charge of a pulling boat during a drill and must organise the crew at their stations and get them rowing together. The instructor asks the cadet to set the crew out and give the standard rowing orders.",
    instructions: [
      "Assign the crew to their positions in the boat (coxswain, bow, and the oarsmen) and state each role.",
      "Give the standard orders to get under way and to keep the crew pulling together.",
      "State the orders to stop, to back water and to come alongside safely.",
      "Deliver the orders clearly so the crew acts as one, in correct maritime English."
    ],
    deliverable: "A note in English setting out the boat crew positions and the standard rowing orders to get under way, keep together, stop and come alongside.",
    assessmentCriteria: [
      "The crew positions and roles are correct.",
      "The orders to get under way and pull together are correct.",
      "The orders to stop, back water and come alongside are correct.",
      "The orders are clear and in correct maritime English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "PMR107",
    subjectName: "Prácticas Marineras I",
    subjectId: "mn-s1-practicas-marineras-i",
    unit: "Boga",
    topic: "Boga a pareles, a la tercio, a la singa y a la punta",
    week: 11,
    taskId: "mn-pmr107-w11-rowing-techniques",
    taskTitle: "Select The Right Rowing Technique For The Conditions",
    scenario: "During boat handling the space and the sea conditions change: an open stretch, then a narrow gap alongside, then a crowded jetty. The instructor asks the engine cadet to choose the correct rowing technique for each and explain the change.",
    instructions: [
      "Name the main rowing techniques (pulling together, a la tercio, sculling / a la singa, and a la punta) and when each is used.",
      "Choose the technique for open water where full speed is needed.",
      "Choose the technique for a narrow gap or crowded space where only one oar can work.",
      "Explain each choice and give the order to change technique, in correct maritime English."
    ],
    deliverable: "A note in English matching the rowing techniques to open water, narrow spaces and crowded berths, with the reason and the order to change technique.",
    assessmentCriteria: [
      "The rowing techniques are named correctly with their use.",
      "The open-water choice is correct and justified.",
      "The narrow-space choice (sculling / single oar) is correct.",
      "The orders to change technique are clear, in correct maritime English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "PMR107",
    subjectName: "Prácticas Marineras I",
    subjectId: "mn-s1-practicas-marineras-i",
    unit: "Bote salvavidas",
    topic: "Arriado, embarque y abandono en bote salvavidas",
    week: 12,
    taskId: "mn-pmr107-w12-survival-craft-launch",
    taskTitle: "Coordinate A Lifeboat Launch And Boarding",
    scenario: "At an abandon-ship drill the engine cadet is part of the survival craft party and must help lower the lifeboat, board the crew and account for everyone, bringing together the boat nomenclature, the crew organisation and the safety checks learned this term.",
    instructions: [
      "State the pre-launch checks on the lifeboat, davit and falls before lowering.",
      "Set out the order of boarding and lowering so the boat is launched safely with the crew accounted for.",
      "Assign the key roles in the boat once waterborne (coxswain, painter, engine or oars) and the first actions clear of the ship.",
      "Give the reports to the officer in charge confirming the boat is launched and all accounted for, in correct maritime English."
    ],
    deliverable: "A note in English coordinating the lifeboat launch: pre-launch checks, the boarding and lowering order, the crew roles once waterborne, and the reports to the officer in charge.",
    assessmentCriteria: [
      "The pre-launch checks on boat, davit and falls are correct.",
      "The boarding and lowering order is safe and logical.",
      "The crew roles and first actions clear of the ship are correct.",
      "The reports confirming launch and accounting for the crew are clear, in correct maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Marítimo",
    subjectId: "mn-s1-transporte-maritimo",
    unit: "Transporte Marítimo",
    topic: "Tipos de buque y sus particularidades",
    week: 1,
    taskId: "mn-tmo101-w01-ship-types-machinery",
    taskTitle: "Match Ship Types To Their Machinery Needs",
    scenario: "The chief engineer explains that different ship types carry different machinery. The cadet is asked to connect three ship types to the kind of propulsion or auxiliary plant they typically need.",
    instructions: [
      "Name three different ship types (e.g. tanker, container, bulk carrier).",
      "For each, state one machinery or propulsion characteristic it typically requires.",
      "Explain briefly why the cargo or service drives that machinery choice.",
      "Write the answer in clear engine-room English."
    ],
    deliverable: "A note in English matching three ship types to a machinery characteristic each requires, with brief reasoning.",
    assessmentCriteria: [
      "Ship types are valid and correctly named.",
      "The machinery characteristic for each is accurate.",
      "The reasoning linking service to machinery is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Marítimo",
    subjectId: "mn-s1-transporte-maritimo",
    unit: "Desarrollo de la propulsión Naval",
    topic: "Propulsión naval",
    week: 2,
    taskId: "mn-tmo101-w02-propulsion-development",
    taskTitle: "Trace The Development Of Naval Propulsion",
    scenario: "The chief engineer asks the cadet to outline how ship propulsion developed, and why the modern diesel engine became dominant in merchant shipping.",
    instructions: [
      "Outline the main stages of propulsion development (sail, steam, diesel).",
      "State one advantage that made the diesel engine dominant in merchant ships.",
      "Identify one role the engine department plays in maintaining propulsion.",
      "Report your answer in clear engine-room English."
    ],
    deliverable: "A short account in English of how naval propulsion developed, why diesel became dominant, and the engine department's role in propulsion.",
    assessmentCriteria: [
      "The propulsion stages are correct and in order.",
      "The advantage of diesel is accurately stated.",
      "The engine department role is relevant.",
      "The account is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Marítimo",
    subjectId: "mn-s1-transporte-maritimo",
    unit: "Tanques de lastre, agua dulce y combustible",
    topic: "Tanques, tubos sonda y respiraderos",
    week: 3,
    taskId: "mn-tmo101-w03-tanks-sounding",
    taskTitle: "Explain Tanks, Sounding Pipes And Vents",
    scenario: "The engineer asks the cadet to explain the purpose of fuel and ballast tanks and how sounding pipes and air vents allow them to be monitored safely.",
    instructions: [
      "State the purpose of a fuel tank and a ballast tank.",
      "Explain what a sounding pipe is used for.",
      "Explain why air vents are required on tanks.",
      "Report your explanation in clear engine-room English."
    ],
    deliverable: "An explanation in English of the purpose of fuel and ballast tanks, the function of sounding pipes, and why air vents are required.",
    assessmentCriteria: [
      "Tank purposes are correctly stated.",
      "The function of sounding pipes is accurate.",
      "The reason for air vents is correct.",
      "The explanation is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Marítimo",
    subjectId: "mn-s1-transporte-maritimo",
    unit: "Esfuerzos en el buque",
    topic: "Quebranto, arrufo y esfuerzos del buque",
    week: 4,
    taskId: "mn-tmo101-w04-hull-stresses",
    taskTitle: "Explain Hogging And Sagging Stresses",
    scenario: "The engineer explains that the hull experiences stresses that affect machinery alignment. The cadet is asked to explain hogging and sagging and why they matter to the engine department.",
    instructions: [
      "Define hogging and sagging in a ship's hull.",
      "State what loading or wave condition causes each.",
      "Explain why hull stresses can affect shaft alignment and machinery.",
      "Report your explanation in clear engine-room English."
    ],
    deliverable: "An explanation in English of hogging and sagging, their causes, and why hull stresses matter for machinery and shaft alignment.",
    assessmentCriteria: [
      "Hogging and sagging are correctly defined.",
      "The cause of each is accurate.",
      "The link to shaft alignment/machinery is sound.",
      "The explanation is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Marítimo",
    subjectId: "mn-s1-transporte-maritimo",
    unit: "Sistema de propulsión",
    topic: "Motor principal, línea de ejes, chumaceras y hélice",
    week: 5,
    taskId: "mn-tmo101-w05-propulsion-system-chain",
    taskTitle: "Trace The Propulsion Chain From Engine To Propeller",
    scenario: "The chief engineer asks the cadet to explain how power flows from the main engine to the propeller, naming each part of the propulsion system that transmits the drive.",
    instructions: [
      "Name the main parts of the propulsion chain in order: main engine, thrust block, intermediate and tail shafts, stern tube bearing, and propeller.",
      "Explain how the drive is transmitted from the main engine along the shafting to the propeller.",
      "Explain how the propeller converts shaft rotation into the thrust that moves the ship.",
      "State the job of the thrust block and the shaft bearings, in clear engine-room English."
    ],
    deliverable: "An explanation in English tracing the propulsion chain from the main engine to the propeller, naming each part and its role in transmitting the drive and producing thrust.",
    assessmentCriteria: [
      "The parts of the propulsion chain are named correctly and in order.",
      "The transmission of drive from engine to propeller is explained correctly.",
      "The conversion of shaft rotation into thrust is explained correctly.",
      "The role of the thrust block and bearings is correct, in clear engine-room English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Marítimo",
    subjectId: "mn-s1-transporte-maritimo",
    unit: "Sistemas auxiliares del motor",
    topic: "Combustible, aceite lubricante, refrigeración y aire de arranque",
    week: 6,
    taskId: "mn-tmo101-w06-engine-auxiliary-systems",
    taskTitle: "Explain The Main Engine's Auxiliary Systems",
    scenario: "The main engine cannot run without its auxiliary systems. The engineer asks the cadet to explain the purpose of the fuel oil, lubricating oil, cooling water and starting air systems.",
    instructions: [
      "State the purpose of the fuel oil system in supplying the main engine.",
      "State the purpose of the lubricating oil system and why it protects the engine.",
      "State the purpose of the cooling water system in controlling engine temperature.",
      "Explain how the starting air system starts the main engine, in clear engine-room English."
    ],
    deliverable: "An explanation in English of the four auxiliary systems of the main engine — fuel oil, lubricating oil, cooling water and starting air — and the purpose of each.",
    assessmentCriteria: [
      "The purpose of the fuel oil system is correct.",
      "The purpose of the lubricating oil system and its protective role are correct.",
      "The purpose of the cooling water system is correct.",
      "The starting air system's role in starting the engine is explained correctly, in clear engine-room English."
    ],
    xp: 25,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Marítimo",
    subjectId: "mn-s1-transporte-maritimo",
    unit: "Planta eléctrica del buque",
    topic: "Generación, cuadro principal, servicios esenciales y emergencia",
    week: 7,
    taskId: "mn-tmo101-w07-ship-electrical-plant",
    taskTitle: "Describe The Ship's Electrical Power Plant",
    scenario: "The engineer asks the cadet to describe, at plant level, how the ship generates and distributes electrical power to run the auxiliaries and services, from the diesel generators to the main switchboard and the essential services.",
    instructions: [
      "Name the main sources of electrical power on board (the diesel generators) and the role of the prime mover.",
      "Explain the job of the main switchboard in distributing power to the ship's services.",
      "State which services are considered essential and why they must keep their supply.",
      "Explain the purpose of the emergency generator and when it starts, in clear engine-room English."
    ],
    deliverable: "A plant-level description in English of the ship's electrical power system: the generators, the main switchboard, the essential services, and the emergency generator.",
    assessmentCriteria: [
      "The generators and the role of the prime mover are correctly described.",
      "The distributing role of the main switchboard is correct.",
      "The idea of essential services and why they are protected is correct.",
      "The purpose and start condition of the emergency generator are correct, in clear engine-room English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Marítimo",
    subjectId: "mn-s1-transporte-maritimo",
    unit: "Convenios internacionales y prevención de la contaminación",
    topic: "MARPOL Anexos I y VI, OMI y clasificación en máquinas",
    week: 8,
    taskId: "mn-tmo101-w08-marpol-machinery-compliance",
    taskTitle: "Apply MARPOL To Engine-Room Pollution Prevention",
    scenario: "The chief engineer asks the cadet to connect the international conventions to concrete pollution-prevention duties in the engine room, covering oily bilge water and exhaust gas emissions.",
    instructions: [
      "State the role of the IMO and of a classification society in relation to the machinery spaces.",
      "Explain what MARPOL Annex I requires for oily bilge water and the job of the oily water separator.",
      "Explain what MARPOL Annex VI covers for exhaust gas emissions from the engine.",
      "Give one concrete engine-room action that keeps the ship compliant, in clear engine-room English."
    ],
    deliverable: "A compliance note in English linking the IMO and classification society to the machinery spaces, MARPOL Annex I (oily bilge water and the oily water separator), MARPOL Annex VI (exhaust emissions), and one concrete compliant action.",
    assessmentCriteria: [
      "The roles of the IMO and the classification society for machinery are correct.",
      "The Annex I requirement and the oily water separator's job are explained correctly.",
      "The Annex VI coverage of exhaust emissions is correct.",
      "The concrete compliant action is valid and in clear engine-room English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Marítimo",
    subjectId: "mn-s1-transporte-maritimo",
    unit: "Dimensiones y elementos del Buque",
    topic: "Dimensiones principales y nomenclatura del buque",
    week: 9,
    taskId: "mn-tmo101-w09-ship-dimensions-nomenclature",
    taskTitle: "Relate The Ship's Principal Dimensions To Engine Planning",
    scenario: "The chief engineer asks the cadet to read the ship's principal particulars and connect them to engine-department planning, since deadweight and displacement affect fuel, ballast and power demand.",
    instructions: [
      "Name the principal dimensions of the ship (length overall, beam, draft, depth) and what each means.",
      "Explain the difference between displacement and deadweight.",
      "State how a deeper draft (more deadweight) increases the power the main engine must deliver for the same speed.",
      "Report the link between the ship's particulars and engine planning, in clear engine-room English."
    ],
    deliverable: "A note in English naming the ship's principal dimensions, distinguishing displacement from deadweight, and linking draft and deadweight to engine power demand.",
    assessmentCriteria: [
      "The principal dimensions are named correctly with their meaning.",
      "Displacement and deadweight are correctly distinguished.",
      "The link between draft/deadweight and engine power is sound.",
      "The report is clear and in correct engine-room English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Marítimo",
    subjectId: "mn-s1-transporte-maritimo",
    unit: "Líneas de Carga y Marca de calados",
    topic: "Líneas de carga, francobordo, desplazamiento y lectura de calados",
    week: 10,
    taskId: "mn-tmo101-w10-draft-freeboard-bunkers",
    taskTitle: "Read Draft Marks And Relate Them To Bunkering",
    scenario: "Before a bunker delivery the chief engineer asks the cadet to read the ship's draft marks and explain how taking on fuel oil changes the draft, the freeboard and the displacement.",
    instructions: [
      "Explain how to read the draft marks forward and aft and what the reading represents.",
      "Define freeboard and the load line, and how they limit how deep the ship may load.",
      "Explain how adding a mass of bunker fuel increases displacement and draft and reduces freeboard.",
      "Report the draft check and the bunkering effect, in clear engine-room English."
    ],
    deliverable: "A note in English on reading the draft marks, the meaning of freeboard and the load line, and how bunkering changes draft, displacement and freeboard.",
    assessmentCriteria: [
      "Reading of the draft marks is explained correctly.",
      "Freeboard and the load line are correctly defined.",
      "The effect of bunkering on displacement, draft and freeboard is correct.",
      "The report is clear and in correct engine-room English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Marítimo",
    subjectId: "mn-s1-transporte-maritimo",
    unit: "Organismos Internacionales que regulan la Marina Mercante",
    topic: "OMI, OIT, UIT y OMM y su efecto en el departamento de máquinas",
    week: 11,
    taskId: "mn-tmo101-w11-international-bodies-engine",
    taskTitle: "Map The International Bodies To Engine-Department Duties",
    scenario: "The chief engineer asks the cadet to connect the international organisations that govern shipping to concrete duties in the engine department, so the cadet understands where the rules come from.",
    instructions: [
      "State what the IMO does and name one instrument that affects the engine room (for example MARPOL or SOLAS).",
      "State what the ILO does and how the MLC protects the engine crew's work and rest hours.",
      "State the role of the ITU (radio spectrum for GMDSS) and the WMO (weather information) in ship operation.",
      "Give one concrete engine-department duty that comes from each of two of these bodies, in clear engine-room English."
    ],
    deliverable: "A note in English mapping the IMO, ILO, ITU and WMO to their role and giving concrete engine-department duties that come from them.",
    assessmentCriteria: [
      "The role of the IMO and one relevant instrument are correct.",
      "The role of the ILO and the MLC work/rest protection are correct.",
      "The roles of the ITU and WMO are correctly stated.",
      "The concrete engine-department duties are valid, in clear engine-room English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Marítimo",
    subjectId: "mn-s1-transporte-maritimo",
    unit: "Equipo de carga/descarga",
    topic: "Maquinaria de carga, descarga y amarre y su planta de fuerza",
    week: 12,
    taskId: "mn-tmo101-w12-deck-machinery-power",
    taskTitle: "Explain The Power Behind The Deck And Cargo Machinery",
    scenario: "During cargo operations the deck machinery, winches and cargo pumps all draw on the engine department for power. The chief engineer asks the cadet to explain how the engine room supplies and supports this machinery, bringing together the electrical, hydraulic and pumping systems.",
    instructions: [
      "Name the main cargo and mooring machinery (cargo pumps, cranes or derricks, mooring winches, windlass) and what each does.",
      "Explain how the engine department supplies the power: electric motors, hydraulic power packs, and steam or pump drives.",
      "State how a heavy cargo or mooring demand shows up as an extra load on the generators or hydraulic system.",
      "Report how the engine room supports a cargo operation, in clear engine-room English."
    ],
    deliverable: "A note in English naming the cargo and mooring machinery, explaining how the engine department powers it, and how its demand loads the ship's systems during a cargo operation.",
    assessmentCriteria: [
      "The cargo and mooring machinery is named correctly with its function.",
      "The power supply (electric, hydraulic, pump/steam) is explained correctly.",
      "The link between machinery demand and engine-room load is sound.",
      "The report is clear and in correct engine-room English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0011",
    subjectName: "Educación Física I",
    subjectId: "mn-s1-educacion-fisica-i",
    unit: "Condición física",
    topic: "Fuerza muscular, resistencia cardiorrespiratoria y flexibilidad",
    week: 1,
    taskId: "mn-c0011-w01-physical-demands-engine",
    taskTitle: "Identify The Physical Demands Of Shipboard Duties",
    scenario: "A new cadet must understand why physical fitness is an operational requirement at sea, not just a sport. The training officer asks you to connect specific shipboard tasks to the physical capacities they demand.",
    instructions: [
      "List three physical shipboard duties (e.g. climbing ladders, lifting stores, working in the engine room).",
      "For each duty, state which physical capacity it requires: muscular strength, cardiorespiratory endurance, or flexibility.",
      "Explain why a lack of that capacity would be an operational and safety risk.",
      "Write the report in clear English using correct fitness and shipboard terminology."
    ],
    deliverable: "A short report in English linking three shipboard duties to the physical capacities they require, and the safety risk if the crew member lacks them.",
    assessmentCriteria: [
      "Each duty is matched to the correct physical capacity.",
      "The operational/safety reasoning is sound.",
      "Fitness terminology is used correctly.",
      "The report is clear and professional in English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0011",
    subjectName: "Educación Física I",
    subjectId: "mn-s1-educacion-fisica-i",
    unit: "Percepción y coordinación motriz",
    topic: "Coordinación motriz, equilibrio y lateralidad",
    week: 2,
    taskId: "mn-c0011-w02-balance-moving-deck",
    taskTitle: "Explain Balance And Coordination On A Moving Deck",
    scenario: "A vessel at sea is constantly moving. The officer asks you to explain why balance and coordination are critical when working on a moving deck or in the engine room, and how a crew member maintains safe footing.",
    instructions: [
      "Explain how a vessel's motion (rolling, pitching) affects balance on board.",
      "Describe two techniques a crew member uses to keep balance and coordination while working.",
      "Identify one task where poor balance would create a fall or injury risk.",
      "Report your explanation in clear maritime English."
    ],
    deliverable: "An explanation in English of why balance and coordination matter on a moving vessel, two techniques to maintain footing, and one task where poor balance is dangerous.",
    assessmentCriteria: [
      "The effect of vessel motion on balance is explained correctly.",
      "The two techniques are practical and relevant.",
      "The risk task is appropriate and clearly justified.",
      "The explanation is clear and uses correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0011",
    subjectName: "Educación Física I",
    subjectId: "mn-s1-educacion-fisica-i",
    unit: "Natación",
    topic: "Técnica, flotación, nado libre, nado en grupo y sobrevivencia",
    week: 3,
    taskId: "mn-c0011-w03-sea-survival-floating",
    taskTitle: "Describe Sea Survival Floating Technique",
    scenario: "Survival in the water is a core seafarer competency for all crew. After a man-overboard or abandon-ship situation, staying afloat and conserving energy can save a life. The instructor asks you to describe the correct survival approach.",
    instructions: [
      "Describe a technique used to stay afloat while conserving energy in the water.",
      "Explain why conserving energy and body heat matters during survival at sea.",
      "State why staying in a group improves survival chances.",
      "Report the procedure in clear English suitable for a safety briefing."
    ],
    deliverable: "A survival floating brief in English describing how to stay afloat and conserve energy, why energy/heat conservation matters, and the benefit of staying in a group.",
    assessmentCriteria: [
      "The floating/survival technique is described correctly.",
      "Energy and heat conservation reasoning is sound.",
      "The group-survival benefit is correctly explained.",
      "The brief is clear and appropriate for safety use, in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0011",
    subjectName: "Educación Física I",
    subjectId: "mn-s1-educacion-fisica-i",
    unit: "Concentración",
    topic: "Juegos de concentración",
    week: 4,
    taskId: "mn-c0011-w04-focus-on-watch",
    taskTitle: "Connect Concentration To Engine Watch Safety",
    scenario: "An engine-room watch can last hours and demands sustained attention to gauges and alarms. The officer asks you to explain why concentration is a trainable capacity and how fatigue affects it on watch.",
    instructions: [
      "Explain why sustained concentration is essential during an engine watch.",
      "Describe how fatigue degrades concentration and reaction time.",
      "State one habit or technique that helps maintain focus during a long watch.",
      "Report your explanation in clear maritime English."
    ],
    deliverable: "An explanation in English of why concentration matters on an engine watch, how fatigue affects it, and one technique to sustain focus during a long watch.",
    assessmentCriteria: [
      "The importance of concentration on watch is correctly explained.",
      "The effect of fatigue is accurately described.",
      "The focus technique is practical and relevant.",
      "The explanation is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0011",
    subjectName: "Educación Física I",
    subjectId: "mn-s1-educacion-fisica-i",
    unit: "Manejo manual de cargas",
    topic: "Ergonomía y técnica segura de levantamiento en máquinas",
    week: 5,
    taskId: "mn-c0011-w05-manual-handling-lifting",
    taskTitle: "Apply Safe Manual Handling In The Engine Room",
    scenario: "A delivery of spare parts and tools must be moved into the engine room, down ladders and through narrow spaces, on floor plates that can be oily. The engineer asks the cadet to apply safe manual handling so no one is injured.",
    instructions: [
      "Assess the load and the route before lifting (weight, size, ladders, narrow spaces, and whether help or a lifting aid is needed).",
      "Describe the correct lifting technique step by step (feet firm, back straight, lift with the legs, load close to the body, no twisting).",
      "State the extra hazards of moving loads in the engine room (oily floor plates, ladders, confined spaces) and how to control them.",
      "Explain how this technique prevents back and joint injury, in correct English."
    ],
    deliverable: "A safe manual-handling note in English covering the pre-lift assessment, the correct lifting technique, the engine-room hazards and their control, and the injury-prevention reason.",
    assessmentCriteria: [
      "The pre-lift assessment covers weight, route, ladders or narrow spaces, and the need for help or aids.",
      "The lifting technique is described correctly and in order.",
      "The engine-room hazards (oily plates, ladders, confined spaces) and their control are correct.",
      "The injury-prevention reasoning is sound and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0011",
    subjectName: "Educación Física I",
    subjectId: "mn-s1-educacion-fisica-i",
    unit: "Acondicionamiento físico",
    topic: "Rutina con peso corporal y equipo mínimo a bordo",
    week: 6,
    taskId: "mn-c0011-w06-onboard-conditioning-routine",
    taskTitle: "Design A Safe Onboard Conditioning Routine",
    scenario: "During a long voyage the engine cadet has little space and almost no equipment but must stay fit for the physical work in the engine room. The engineer asks the cadet to design a simple, balanced conditioning routine.",
    instructions: [
      "Design a balanced routine using bodyweight exercises for strength, mobility and cardiorespiratory fitness.",
      "Include a warm-up and a cool-down, and say why each matters for injury prevention.",
      "Set a sensible, sustainable frequency that fits around engine watches and rest, with no extreme targets.",
      "Explain how the routine supports the physical demands of engine-room work, in correct English."
    ],
    deliverable: "A balanced onboard conditioning routine in English with a warm-up, main exercises, a cool-down, and a sustainable frequency for functional fitness.",
    assessmentCriteria: [
      "The routine is balanced across strength, mobility and cardiorespiratory fitness.",
      "A warm-up and cool-down are included with the injury-prevention reason.",
      "The frequency is sustainable and realistic around the watch routine, with no extreme targets.",
      "The routine is clearly linked to the demands of engine-room work, in correct English."
    ],
    xp: 25,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0011",
    subjectName: "Educación Física I",
    subjectId: "mn-s1-educacion-fisica-i",
    unit: "Fatiga y descanso",
    topic: "Fisiología de la fatiga en máquinas: calor, ruido y vibración",
    week: 7,
    taskId: "mn-c0011-w07-fatigue-rest-management",
    taskTitle: "Manage Fatigue From Heat, Noise And Vibration",
    scenario: "After several days of engine-room watches the cadet feels the fatigue of working in heat, noise and vibration. The engineer asks the cadet to explain how to manage fatigue and protect rest under the work and rest hour rules.",
    instructions: [
      "Describe the signs of fatigue and how it affects alertness and safety on an engine watch.",
      "Explain how the engine-room environment (heat, noise and vibration) adds to fatigue.",
      "State the basic work and rest hour requirement and give three sleep-hygiene actions that improve rest quality on board.",
      "Explain what to do if too fatigued to stand a safe watch, in correct English."
    ],
    deliverable: "A fatigue-management note in English covering the signs of fatigue, how heat, noise and vibration add to it, the rest-hour requirement, three sleep-hygiene actions, and what to do when too fatigued for a safe watch.",
    assessmentCriteria: [
      "The signs of fatigue and their effect on watch safety are correct.",
      "The effect of heat, noise and vibration on fatigue is correctly explained.",
      "The rest-hour requirement and three sleep-hygiene actions are correct and practical.",
      "The action for being too fatigued to stand a safe watch is correct and in clear English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0011",
    subjectName: "Educación Física I",
    subjectId: "mn-s1-educacion-fisica-i",
    unit: "Aptitud física para emergencias",
    topic: "Demandas físicas de la respuesta desde el espacio de máquinas",
    week: 8,
    taskId: "mn-c0011-w08-emergency-physical-readiness",
    taskTitle: "Prepare Physically For Engine-Room Emergencies",
    scenario: "The vessel schedules an engine-room fire and abandon-ship drill. The engineer asks the cadet to explain the physical demands of escaping the machinery space and taking part in the response, and how to meet them safely.",
    instructions: [
      "List the physical demands of four emergency tasks: escaping the machinery space by the vertical escape ladders, engine-room firefighting effort, donning an immersion suit, and boarding the survival craft.",
      "State which physical capacities each task draws on (strength, balance, endurance, coordination).",
      "Explain how the term's training (fitness, balance, manual handling) prepares the cadet for these demands.",
      "Give one safety point to avoid injury while performing under emergency stress, in correct English."
    ],
    deliverable: "A readiness note in English mapping four emergency tasks to their physical demands and capacities, how the training prepares for them, and one injury-avoidance safety point.",
    assessmentCriteria: [
      "The physical demands of the four emergency tasks are correctly identified.",
      "Each task is matched to the physical capacities it draws on.",
      "The link between the term's training and emergency readiness is sound.",
      "The injury-avoidance safety point is valid and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0011",
    subjectName: "Educación Física I",
    subjectId: "mn-s1-educacion-fisica-i",
    unit: "Percepción y coordinación motriz",
    topic: "Movimientos físicos y ubicación espacial",
    week: 9,
    taskId: "mn-c0011-w09-spatial-awareness-engine-room",
    taskTitle: "Move Safely Through Confined Machinery Spaces",
    scenario: "The engine room is full of ladders, low beams, hot lines and moving machinery, sometimes in poor light. The officer asks the cadet to explain how spatial awareness and controlled movement prevent injury when moving through these spaces.",
    instructions: [
      "Explain how spatial awareness (knowing where your body is in the space) prevents striking machinery or falling.",
      "Describe how to move through ladders, narrow walkways and low clearances in a controlled way.",
      "Identify two engine-room features that demand extra spatial care (hot lines, rotating machinery, floor plate openings).",
      "Report the safe-movement guidance for a new cadet, in clear maritime English."
    ],
    deliverable: "A note in English explaining how spatial awareness and controlled movement keep a cadet safe in confined machinery spaces, with two hazard features identified.",
    assessmentCriteria: [
      "The role of spatial awareness in preventing injury is explained correctly.",
      "The controlled-movement technique is practical and correct.",
      "The two hazard features are relevant and correctly identified.",
      "The guidance is clear and in correct maritime English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0011",
    subjectName: "Educación Física I",
    subjectId: "mn-s1-educacion-fisica-i",
    unit: "Natación",
    topic: "Nado en grupo y sobrevivencia",
    week: 10,
    taskId: "mn-c0011-w10-group-survival-swim",
    taskTitle: "Lead A Group Survival Swim After Abandon Ship",
    scenario: "After abandon ship several crew are in the water waiting for rescue. The instructor asks the engine cadet to explain how a group stays together, keeps warm and moves as one towards the liferaft.",
    instructions: [
      "Explain why staying in a group improves survival and rescue chances over swimming alone.",
      "Describe the huddle and chain techniques a group uses to conserve heat and stay together.",
      "State how the group moves as one towards the craft while helping a weaker or injured shipmate.",
      "Report the group-survival guidance for a safety briefing, in clear maritime English."
    ],
    deliverable: "A note in English explaining group survival in the water: why to stay together, the huddle and chain techniques, and how the group moves to the craft helping the weak.",
    assessmentCriteria: [
      "The survival benefit of staying in a group is explained correctly.",
      "The huddle and chain techniques are described correctly.",
      "The method for moving as a group and helping the injured is sound.",
      "The guidance is clear and in correct maritime English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0011",
    subjectName: "Educación Física I",
    subjectId: "mn-s1-educacion-fisica-i",
    unit: "Condición física",
    topic: "Evaluación de la condición física para el servicio",
    week: 11,
    taskId: "mn-c0011-w11-fitness-self-assessment",
    taskTitle: "Assess Your Fitness Against The Demands Of Sea Service",
    scenario: "Near the end of the term the officer asks the cadet to assess personal fitness against the real physical demands of engine-room service and set honest, safe goals for improvement.",
    instructions: [
      "List the physical capacities that sea service demands (strength, cardiorespiratory endurance, flexibility, balance).",
      "Assess your own level in each against the demands of engine-room work, with honest evidence.",
      "Set one safe, realistic improvement goal for a weaker capacity, with no extreme target.",
      "Report the self-assessment and the goal for a training review, in clear maritime English."
    ],
    deliverable: "A fitness self-assessment in English rating each physical capacity against the demands of sea service, with honest evidence and one safe improvement goal.",
    assessmentCriteria: [
      "The physical capacities demanded by sea service are correctly identified.",
      "The self-assessment is honest and evidence-based.",
      "The improvement goal is safe, realistic and well targeted.",
      "The report is clear and in correct maritime English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0011",
    subjectName: "Educación Física I",
    subjectId: "mn-s1-educacion-fisica-i",
    unit: "Percepción y coordinación motriz",
    topic: "Coordinación motriz fina y gruesa en tareas de máquinas",
    week: 12,
    taskId: "mn-c0011-w12-motor-coordination-task",
    taskTitle: "Apply Fine And Gross Motor Coordination To A Machinery Task",
    scenario: "A maintenance job needs both heavy handling and delicate work: lifting a pump cover into place, then aligning and torquing small bolts by feel in a tight space. The officer asks the cadet to explain how fine and gross motor coordination combine to do the job safely.",
    instructions: [
      "Distinguish gross motor coordination (lifting, carrying, positioning) from fine motor coordination (aligning, threading, torquing).",
      "Explain how the task moves between the two and where each is needed.",
      "State how fatigue or a moving deck degrades coordination and how to compensate.",
      "Report how good coordination keeps the job safe and accurate, in clear maritime English."
    ],
    deliverable: "A note in English distinguishing fine and gross motor coordination, showing how they combine in a machinery task, and how to compensate when conditions degrade them.",
    assessmentCriteria: [
      "Fine and gross motor coordination are correctly distinguished.",
      "The way the task moves between them is explained correctly.",
      "The effect of fatigue or ship motion and the compensation are sound.",
      "The report is clear and in correct maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0099",
    subjectName: "Estrategias de Aprendizaje",
    subjectId: "mn-s1-estrategias-aprendizaje",
    unit: "Manejo de información",
    topic: "Resumen, síntesis y la pregunta",
    week: 1,
    taskId: "mn-c0099-w01-summarise-procedure",
    taskTitle: "Summarise A Shipboard Procedure",
    scenario: "A seafarer must absorb large amounts of technical information quickly. The training officer gives the cadet a shipboard procedure and asks for a clear, accurate summary that keeps only what matters for safe action.",
    instructions: [
      "Read the given shipboard procedure.",
      "Produce a concise summary that keeps the essential steps and removes filler.",
      "Ensure no safety-critical step is lost in the summary.",
      "Write the summary in clear English a watch team could follow."
    ],
    deliverable: "A concise summary in English of a shipboard procedure that preserves every safety-critical step while removing non-essential detail.",
    assessmentCriteria: [
      "The summary keeps all essential and safety-critical steps.",
      "Non-essential detail is correctly removed.",
      "The meaning of the original procedure is preserved.",
      "The summary is clear and usable in English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0099",
    subjectName: "Estrategias de Aprendizaje",
    subjectId: "mn-s1-estrategias-aprendizaje",
    unit: "Presentación gráfica de la información",
    topic: "Organizadores gráficos, diagramas, mapas y esquemas",
    week: 2,
    taskId: "mn-c0099-w02-graphic-organiser-system",
    taskTitle: "Map A Shipboard System With A Graphic Organiser",
    scenario: "Complex shipboard systems are easier to learn as a diagram than as text. The officer asks the cadet to turn a written description of a system into a graphic organiser.",
    instructions: [
      "Take a written description of a simple shipboard system or process.",
      "Choose a suitable graphic organiser (flowchart, mind map, or diagram).",
      "Represent the system's parts and their relationships clearly.",
      "Explain in English how the organiser makes the system easier to learn."
    ],
    deliverable: "A described graphic organiser (in text/sketch form) of a shipboard system, plus an explanation in English of how it aids learning.",
    assessmentCriteria: [
      "The organiser represents the system accurately.",
      "Relationships between parts are clear.",
      "The choice of organiser fits the content.",
      "The explanation is sound and in clear English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0099",
    subjectName: "Estrategias de Aprendizaje",
    subjectId: "mn-s1-estrategias-aprendizaje",
    unit: "Técnicas de estudio",
    topic: "Técnica de los seis pasos",
    week: 3,
    taskId: "mn-c0099-w03-six-step-study",
    taskTitle: "Apply A Study Technique To Learn A Convention",
    scenario: "An officer must master new regulations throughout their career. The cadet is asked to apply a structured study technique to learn a piece of maritime regulation effectively.",
    instructions: [
      "Choose a short piece of maritime regulation or safety content to study.",
      "Apply a structured study technique (such as a six-step method) to learn it.",
      "Describe each step you took and what it produced.",
      "Explain in English why a structured method beats simple re-reading."
    ],
    deliverable: "A description in English of how a structured study technique was applied to learn a maritime regulation, step by step, with the reasoning for using it.",
    assessmentCriteria: [
      "The study technique is applied correctly step by step.",
      "Each step produces a meaningful result.",
      "The content chosen is appropriate and maritime-relevant.",
      "The reasoning is sound and clearly written in English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0099",
    subjectName: "Estrategias de Aprendizaje",
    subjectId: "mn-s1-estrategias-aprendizaje",
    unit: "Condiciones básicas para el estudio",
    topic: "Atribuciones, motivación, atención y área de estudio",
    week: 4,
    taskId: "mn-c0099-w04-study-conditions-ship",
    taskTitle: "Plan Effective Study Conditions On Board",
    scenario: "Studying at sea is hard: noise, fatigue, watch schedules. The officer asks the cadet to plan realistic conditions and habits that make study effective despite shipboard life.",
    instructions: [
      "Identify two obstacles to studying effectively on board.",
      "Propose a practical habit or condition to overcome each obstacle.",
      "Explain how attention and motivation are protected by these choices.",
      "Write the plan in clear English."
    ],
    deliverable: "A short study plan in English identifying two shipboard study obstacles and a practical solution for each, with reasoning about attention and motivation.",
    assessmentCriteria: [
      "The obstacles are realistic for shipboard life.",
      "The solutions are practical and relevant.",
      "The reasoning about attention/motivation is sound.",
      "The plan is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0099",
    subjectName: "Estrategias de Aprendizaje",
    subjectId: "mn-s1-estrategias-aprendizaje",
    unit: "Toma de apuntes",
    topic: "Método Cornell para la captura de información",
    week: 5,
    taskId: "mn-c0099-w05-cornell-note-taking",
    taskTitle: "Take Cornell Notes During A Technical Briefing",
    scenario: "The engineer runs a fast familiarization briefing on the fuel oil system before the cadet works on it, covering the valves, the operating sequence and the hazards. The cadet must capture it live with the Cornell note-taking method so nothing is missed.",
    instructions: [
      "Set up a Cornell page with a notes column, a cue or questions column, and a summary area at the bottom.",
      "Capture the key points of the technical briefing in the notes column as it is delivered.",
      "Write cue questions in the left column to test recall of the system later.",
      "Write a short summary of the briefing at the bottom, in correct English."
    ],
    deliverable: "A Cornell-format note of the engine-room technical briefing in English, with the notes column, the cue questions, and a bottom summary.",
    assessmentCriteria: [
      "The page is set up correctly in the three Cornell areas.",
      "The notes capture the essential briefing points without filler.",
      "The cue questions would test recall of the key points.",
      "The summary is accurate and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0099",
    subjectName: "Estrategias de Aprendizaje",
    subjectId: "mn-s1-estrategias-aprendizaje",
    unit: "Técnicas de memorización",
    topic: "Mnemotecnia y repaso espaciado",
    week: 6,
    taskId: "mn-c0099-w06-mnemonics-spaced-repetition",
    taskTitle: "Build A Mnemonic And A Spaced-Repetition Plan",
    scenario: "The cadet must memorize standardized engine-room content, such as the pipe colour code, the main engine starting sequence, or the names of the main engine parts. The engineer asks the cadet to build a memory aid and a spaced-repetition plan to make it stick.",
    instructions: [
      "Choose one standardized engine-room set to memorize (for example the pipe colour code, the main engine starting sequence, engine part names, or the phonetic alphabet for equipment codes).",
      "Create a mnemonic or memory aid that links the items to something easy to recall.",
      "Design a spaced-repetition schedule (for example review after 1 day, 3 days, 1 week) and say why spacing beats cramming.",
      "Explain how you would test yourself to confirm retention, in correct English."
    ],
    deliverable: "A memory plan in English with the chosen engine-room content set, a mnemonic, a spaced-repetition schedule, and a self-test method.",
    assessmentCriteria: [
      "The chosen content set is a real standardized engine-room body of knowledge.",
      "The mnemonic genuinely aids recall of the items.",
      "The spaced-repetition schedule is sound and its advantage over cramming is explained.",
      "The self-test method would confirm retention, in correct English."
    ],
    xp: 25,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0099",
    subjectName: "Estrategias de Aprendizaje",
    subjectId: "mn-s1-estrategias-aprendizaje",
    unit: "Gestión del tiempo",
    topic: "Priorización y plan de estudio a bordo",
    week: 7,
    taskId: "mn-c0099-w07-time-management-study-plan",
    taskTitle: "Plan Study Around The Engine-Room Routine",
    scenario: "The engine cadet stands watches, has planned maintenance jobs to attend, and must take the required rest under the work and rest hour rules. The engineer asks the cadet to build a realistic weekly study plan that fits studying around the engine-room routine.",
    instructions: [
      "Map the fixed blocks of a typical day: engine watches, planned maintenance, meals and required rest.",
      "Identify the realistic time windows that are left for study.",
      "Prioritize the study tasks (urgent and important) and assign them to the available windows.",
      "Explain how the plan respects the rest requirements and stays realistic, in correct English."
    ],
    deliverable: "A weekly study plan in English mapping the engine watches, maintenance, rest and study windows, with prioritized study tasks assigned to realistic slots.",
    assessmentCriteria: [
      "The daily fixed blocks (watch, maintenance, rest) are mapped correctly.",
      "The study windows identified are realistic given the routine.",
      "Study tasks are prioritized sensibly and assigned to the windows.",
      "The plan respects the rest requirements and is realistic, in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0099",
    subjectName: "Estrategias de Aprendizaje",
    subjectId: "mn-s1-estrategias-aprendizaje",
    unit: "Metacognición",
    topic: "Autoevaluación y bitácora de aprendizaje",
    week: 8,
    taskId: "mn-c0099-w08-metacognition-learning-log",
    taskTitle: "Reflect On Your Learning With A Learning Log",
    scenario: "As the engine-room training term closes, the engineer asks the cadet to look back at which study strategies worked best for the technical subjects, measure progress against the training objectives, and start a learning log that sets the next steps.",
    instructions: [
      "Assess your progress against two or three training objectives, with honest evidence from the technical work.",
      "Identify which learning strategies (notes, mnemonics, planning) worked best for the machinery subjects and which did not.",
      "Record the reflection in a learning-log entry with a date and concrete next actions.",
      "Explain how honest self-assessment supports continuous professional development for an engineer at sea, in correct English."
    ],
    deliverable: "A learning-log entry in English assessing progress against the objectives, evaluating which strategies worked for the technical subjects, with a date and concrete next actions.",
    assessmentCriteria: [
      "Progress is assessed against clear objectives with honest evidence.",
      "The evaluation of which strategies worked is specific and self-aware.",
      "The log entry is dated and gives concrete next actions.",
      "The link to continuous professional development is sound, in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0099",
    subjectName: "Estrategias de Aprendizaje",
    subjectId: "mn-s1-estrategias-aprendizaje",
    unit: "Técnicas de estudio",
    topic: "Métodos de estudio individual y en grupo",
    week: 9,
    taskId: "mn-c0099-w09-group-study-methods",
    taskTitle: "Organise A Group Study Session For A Technical Subject",
    scenario: "Several cadets struggle with the same machinery subject before an exam. The officer asks the cadet to organise a group study session and explain when group study beats studying alone.",
    instructions: [
      "State the goal of the session and the technical topic to be covered.",
      "Plan how the group divides the material and teaches each part to the others.",
      "State when individual study is better and when group study is better for this content.",
      "Report the session plan clearly for the group, in correct English."
    ],
    deliverable: "A group study plan in English with the goal, how the material is divided and taught, and when individual versus group study is used.",
    assessmentCriteria: [
      "The session goal and topic are clear.",
      "The division and peer-teaching plan is sound.",
      "The individual-versus-group reasoning is correct.",
      "The plan is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0099",
    subjectName: "Estrategias de Aprendizaje",
    subjectId: "mn-s1-estrategias-aprendizaje",
    unit: "Manejo de información",
    topic: "Evaluación y contraste de fuentes técnicas",
    week: 10,
    taskId: "mn-c0099-w10-evaluate-technical-sources",
    taskTitle: "Evaluate And Cross-Check A Technical Source",
    scenario: "The cadet finds conflicting advice about a maintenance procedure: the machinery manual, a workshop note, and a shipmate's word-of-mouth tip. The officer asks the cadet to judge which source to trust and why.",
    instructions: [
      "Compare the three sources for reliability (authority, currency, and evidence).",
      "Identify which source should be followed for a safety-critical procedure and why.",
      "Explain how to cross-check when sources disagree before acting.",
      "Report the reasoned decision clearly, in correct English."
    ],
    deliverable: "A note in English evaluating the three technical sources, choosing the one to follow for a safety-critical procedure, and explaining how to cross-check when they disagree.",
    assessmentCriteria: [
      "The sources are compared on sound reliability criteria.",
      "The correct source for a safety-critical procedure is chosen and justified.",
      "The cross-checking method is sensible.",
      "The decision is clearly reasoned in correct English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0099",
    subjectName: "Estrategias de Aprendizaje",
    subjectId: "mn-s1-estrategias-aprendizaje",
    unit: "Presentación gráfica de la información",
    topic: "Mapa conceptual integrador de un sistema",
    week: 11,
    taskId: "mn-c0099-w11-integrating-concept-map",
    taskTitle: "Build An Integrating Concept Map Of A Machinery System",
    scenario: "To prepare for the technical finals the cadet must see a whole machinery system at once. The officer asks the cadet to build a concept map that links the parts, the flows and the controls of one system.",
    instructions: [
      "Choose one machinery system (for example the fuel oil or cooling water system).",
      "Build a concept map linking the parts, the flow path, and the controls, showing how they connect.",
      "Mark the cause-and-effect links (for example how a blocked filter affects downstream pressure).",
      "Explain how the concept map supports recall and problem-solving in the exam, in correct English."
    ],
    deliverable: "A concept map (described in text/sketch form) in English integrating one machinery system's parts, flows and controls, with the cause-and-effect links marked.",
    assessmentCriteria: [
      "The concept map represents the whole system accurately.",
      "The parts, flows and controls are correctly linked.",
      "The cause-and-effect links are sound.",
      "The learning benefit is explained clearly, in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0099",
    subjectName: "Estrategias de Aprendizaje",
    subjectId: "mn-s1-estrategias-aprendizaje",
    unit: "Técnicas de estudio",
    topic: "Estrategia integral de preparación para exámenes",
    week: 12,
    taskId: "mn-c0099-w12-exam-preparation-strategy",
    taskTitle: "Design A Complete Exam-Preparation Strategy",
    scenario: "The technical finals are two weeks away. The officer asks the cadet to bring together every study strategy from the term into one realistic preparation plan that fits around watches and rest.",
    instructions: [
      "Combine the term's strategies (summary, concept maps, the six-step method, spaced repetition) into one plan.",
      "Schedule the two weeks across the available study windows, respecting watches and rest.",
      "Prioritise the weakest subjects and set a review checkpoint before the exam.",
      "Explain how the integrated plan improves on studying one way only, in correct English."
    ],
    deliverable: "A two-week exam-preparation plan in English that integrates summary, concept maps, the six-step method and spaced repetition, scheduled realistically around watches and rest.",
    assessmentCriteria: [
      "The plan integrates several strategies coherently, not just one.",
      "The two-week schedule is realistic around watches and rest.",
      "The weakest subjects are prioritised with a review checkpoint.",
      "The advantage of the integrated approach is explained, in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0100",
    subjectName: "Expresión Oral y Escrita",
    subjectId: "mn-s1-expresion-oral-escrita",
    unit: "Proceso de comunicación",
    topic: "Proceso de la comunicación",
    week: 1,
    taskId: "mn-c0100-w01-communication-breakdown",
    taskTitle: "Analyse A Communication Breakdown On Board",
    scenario: "Many accidents at sea begin with a message that was sent but not understood. The officer asks the cadet to analyse a shipboard communication using the basic communication process and find where it could fail.",
    instructions: [
      "Identify the sender, message, channel, and receiver in a given shipboard communication.",
      "Point out one stage where the message could be misunderstood.",
      "Explain the consequence if that breakdown happened during an operation.",
      "Suggest how to prevent the breakdown, written in clear English."
    ],
    deliverable: "An analysis in English of a shipboard communication identifying its parts, a possible breakdown point, the operational consequence, and a prevention measure.",
    assessmentCriteria: [
      "The communication parts are correctly identified.",
      "The breakdown point is plausible and well explained.",
      "The consequence is operationally realistic.",
      "The prevention measure is sound and clearly written in English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0100",
    subjectName: "Expresión Oral y Escrita",
    subjectId: "mn-s1-expresion-oral-escrita",
    unit: "Comunicación Escrita",
    topic: "Ideas principales y secundarias en textos",
    week: 2,
    taskId: "mn-c0100-w02-clear-written-report",
    taskTitle: "Write A Clear Incident Report",
    scenario: "After a minor incident in the engine room, the cadet must write a report. The officer stresses that a good report puts the main facts first and keeps secondary detail in its place.",
    instructions: [
      "Write a short report of a simple engine-room or deck incident.",
      "State the main fact (what happened) clearly at the start.",
      "Place supporting/secondary details after the main fact, in order.",
      "Keep the language precise and unambiguous, in clear English."
    ],
    deliverable: "A short incident report in English that leads with the main fact and orders secondary details clearly, with precise and unambiguous language.",
    assessmentCriteria: [
      "The main fact is stated clearly and first.",
      "Secondary details are correctly subordinated and ordered.",
      "The language is precise and unambiguous.",
      "The report is professional and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0100",
    subjectName: "Expresión Oral y Escrita",
    subjectId: "mn-s1-expresion-oral-escrita",
    unit: "Comunicación Oral",
    topic: "Comunicación verbal y no verbal",
    week: 3,
    taskId: "mn-c0100-w03-verbal-nonverbal-order",
    taskTitle: "Give A Clear Verbal Order With Confirmation",
    scenario: "In the engine room, an order must be given, heard, and confirmed over machinery noise. The officer asks the cadet to deliver a verbal order and explain how clarity and readback prevent mistakes.",
    instructions: [
      "Give a clear verbal order for a simple shipboard action.",
      "Explain how tone and delivery affect whether it is understood over noise.",
      "Describe the readback/confirmation that closes the communication loop.",
      "Report the exchange in clear English."
    ],
    deliverable: "A scripted verbal order in English with the confirmation/readback, plus an explanation of how delivery and confirmation prevent mistakes.",
    assessmentCriteria: [
      "The order is clear and unambiguous.",
      "The role of tone/delivery is explained correctly.",
      "The readback closes the communication loop properly.",
      "The exchange is realistic and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0100",
    subjectName: "Expresión Oral y Escrita",
    subjectId: "mn-s1-expresion-oral-escrita",
    unit: "Comunicación Oral",
    topic: "Dicción, fluidez y exposición oral",
    week: 4,
    taskId: "mn-c0100-w04-safety-briefing-delivery",
    taskTitle: "Deliver A Short Safety Briefing",
    scenario: "The cadet must deliver a short safety briefing to the crew. Clear diction and fluent, ordered delivery determine whether the crew actually retains the safety message.",
    instructions: [
      "Prepare a short safety briefing on a single topic.",
      "Organise it with a clear opening, key points, and a close.",
      "Note where diction and pace matter most for the message to land.",
      "Write the briefing as it would be delivered, in clear English."
    ],
    deliverable: "A short safety briefing in English with a clear structure (opening, key points, close), noting where diction and pace are critical for the crew to retain it.",
    assessmentCriteria: [
      "The briefing has a clear, logical structure.",
      "The key safety points are well chosen.",
      "The notes on diction/pace are relevant.",
      "The briefing is clear, professional, and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0100",
    subjectName: "Expresión Oral y Escrita",
    subjectId: "mn-s1-expresion-oral-escrita",
    unit: "Comunicación Oral",
    topic: "Marcadores de mensaje SMCP como técnica de comunicación",
    week: 5,
    taskId: "mn-c0100-w05-smcp-message-markers",
    taskTitle: "Structure Engine-Department Messages With Message Markers",
    scenario: "In the engine control room several messages must go out at once during a busy operation. To stop them being misread, the second engineer asks the cadet to structure the department's messages with SMCP message markers so each one signals clearly whether it is an instruction, a warning or information.",
    instructions: [
      "Explain what SMCP message markers do and name the markers relevant to engine-department messages (Instruction, Warning, Information, Intention).",
      "Take three engine-department messages and structure each one with the correct marker.",
      "Explain why marking a message removes ambiguity for the receiver.",
      "State how the technique improves safety during a busy operation, in clear English."
    ],
    deliverable: "A note in English giving three engine-department messages structured with the correct SMCP message markers, with an explanation of how the markers remove ambiguity.",
    assessmentCriteria: [
      "The purpose of the markers and the relevant markers are named correctly.",
      "Each message is matched to the correct marker.",
      "The ambiguity-removal reason is sound.",
      "The safety benefit of the technique is clear, in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0100",
    subjectName: "Expresión Oral y Escrita",
    subjectId: "mn-s1-expresion-oral-escrita",
    unit: "Comunicación Escrita",
    topic: "Registro factual y cronológico en el cuaderno de máquinas",
    week: 6,
    taskId: "mn-c0100-w06-engine-logbook-entry",
    taskTitle: "Write A Factual Engine-Room Logbook Entry",
    scenario: "At the end of the engine-room watch the second engineer asks the cadet to write up the engine-room logbook: a generator was started, a purifier was changed over, and an alarm came in and was cleared. The entries must be factual, chronological and concise.",
    instructions: [
      "Record the watch events in chronological order, each with its time.",
      "State each fact plainly, without opinion or unnecessary detail.",
      "Use precise, standard terms for the machinery, the readings and the alarms.",
      "Write the entry so another engineer could reconstruct the watch, in correct English."
    ],
    deliverable: "An engine-room logbook entry in English recording the watch events in chronological order, factually and concisely.",
    assessmentCriteria: [
      "Events are in the correct chronological order, each with its time.",
      "Each entry is factual and free of opinion or filler.",
      "Terminology for the machinery, readings and alarms is precise.",
      "The entry is clear enough to reconstruct the watch, in correct English."
    ],
    xp: 25,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0100",
    subjectName: "Expresión Oral y Escrita",
    subjectId: "mn-s1-expresion-oral-escrita",
    unit: "Comunicación Oral",
    topic: "Escucha activa y confirmación de órdenes (lazo cerrado)",
    week: 7,
    taskId: "mn-c0100-w07-closed-loop-order-readback",
    taskTitle: "Confirm Engine-Room Orders With Read-Back",
    scenario: "In the engine room, orders from the duty engineer must be confirmed before they are carried out. The engineer gives the cadet three orders — to isolate a valve, to start a standby pump, and to acknowledge a telegraph order — and asks the cadet to apply closed-loop communication by reading each one back.",
    instructions: [
      "Explain what closed-loop (read-back) communication is and why it prevents errors in the engine room.",
      "For the three orders (isolate a valve, start a standby pump, acknowledge a telegraph order), give the correct read-back.",
      "State what the order-giver does after hearing the read-back to close the loop.",
      "Describe one engine-room situation where a missing read-back could cause an accident, in correct English."
    ],
    deliverable: "A note in English giving the read-back for three engine-room orders, an explanation of closed-loop communication, and one accident case from a missing read-back.",
    assessmentCriteria: [
      "Closed-loop communication is explained correctly.",
      "Each order is read back correctly and completely.",
      "The role of the order-giver in closing the loop is correct.",
      "The accident example is relevant and written in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0100",
    subjectName: "Expresión Oral y Escrita",
    subjectId: "mn-s1-expresion-oral-escrita",
    unit: "Comunicación integrada",
    topic: "Comunicación en emergencia de máquinas: informe oral y registro escrito",
    week: 8,
    taskId: "mn-c0100-w08-emergency-report-and-log",
    taskTitle: "Report An Engine-Room Emergency Verbally And In Writing",
    scenario: "An oil leak sprays onto a hot surface in the machinery space and begins to smoke. The cadet must first give a clear spoken report to the bridge and the duty engineer, then write the incident entry for the record. Both the spoken report and the written entry are assessed.",
    instructions: [
      "Give a clear spoken emergency report stating what has happened, where in the machinery space, and what help is needed, using standardized phrasing.",
      "Confirm the message was received, using read-back or acknowledgement.",
      "Write the incident entry: time, location, what happened and action taken, factually and in order.",
      "Ensure the spoken report and the written record agree, in correct English."
    ],
    deliverable: "A two-part deliverable in English: a clear spoken emergency report (what, where in the machinery space, help needed), and a factual chronological incident entry that matches it.",
    assessmentCriteria: [
      "The spoken report states what, where and the help needed, clearly and in standardized phrasing.",
      "Receipt of the message is confirmed by read-back or acknowledgement.",
      "The written entry is factual, timed and in chronological order.",
      "The spoken report and the written record agree, in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0100",
    subjectName: "Expresión Oral y Escrita",
    subjectId: "mn-s1-expresion-oral-escrita",
    unit: "Proceso de comunicación",
    topic: "Factores personales, físicos y semánticos",
    week: 9,
    taskId: "mn-c0100-w09-communication-barriers-engine",
    taskTitle: "Identify And Overcome Engine-Room Communication Barriers",
    scenario: "A message shouted over running machinery is misheard and the wrong valve is touched. The officer asks the cadet to identify the barriers that blocked the message and how to overcome each one.",
    instructions: [
      "Identify the physical barriers (machinery noise, distance, hearing protection) in the engine-room exchange.",
      "Identify the personal and semantic barriers (fatigue, language differences, ambiguous terms).",
      "Propose one practical measure to overcome each type of barrier (for example standard phrasing, read-back, sound-powered phones).",
      "Report the barriers and the fixes clearly, in correct English."
    ],
    deliverable: "A note in English identifying the physical, personal and semantic barriers to an engine-room message and a practical measure to overcome each.",
    assessmentCriteria: [
      "The physical barriers are correctly identified.",
      "The personal and semantic barriers are correctly identified.",
      "The measures to overcome each barrier are practical and relevant.",
      "The report is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0100",
    subjectName: "Expresión Oral y Escrita",
    subjectId: "mn-s1-expresion-oral-escrita",
    unit: "Comunicación Escrita",
    topic: "Reglas ortográficas y oración gramatical",
    week: 10,
    taskId: "mn-c0100-w10-written-requisition",
    taskTitle: "Write A Correct Spare-Parts Requisition",
    scenario: "The engineer asks the cadet to write a spare-parts requisition to send to the office. It must be spelled correctly and grammatically clear, because an ambiguous or misspelled request delays the delivery.",
    instructions: [
      "Write the requisition in complete, correct sentences with accurate spelling.",
      "State clearly what is needed, the quantity, and the reason, without ambiguity.",
      "Check the grammar and spelling so no part number or term can be misread.",
      "Present the requisition ready to send to the office, in correct English."
    ],
    deliverable: "A spare-parts requisition in English written in correct, well-spelled sentences that state the item, quantity and reason without ambiguity.",
    assessmentCriteria: [
      "Spelling is accurate throughout.",
      "The sentences are grammatically correct and complete.",
      "The item, quantity and reason are stated unambiguously.",
      "The requisition is professional and ready to send, in correct English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0100",
    subjectName: "Expresión Oral y Escrita",
    subjectId: "mn-s1-expresion-oral-escrita",
    unit: "Comunicación Oral",
    topic: "Lenguaje, lengua y habla: registro según el interlocutor",
    week: 11,
    taskId: "mn-c0100-w11-register-audience",
    taskTitle: "Adapt Your Message To The Listener",
    scenario: "The same fault must be reported three ways: a quick word to a rating on the tools, a formal report to the chief engineer, and an explanation to the shore superintendent. The officer asks the cadet to adapt the register for each listener.",
    instructions: [
      "Explain how language, level and tone change with the listener and the situation.",
      "Write the brief spoken message to the rating carrying out the work.",
      "Write the formal report of the same fault to the chief engineer.",
      "Write the explanation to the shore superintendent and state what changed and why, in correct English."
    ],
    deliverable: "A note in English giving the same fault reported in three registers (rating, chief engineer, shore superintendent) with an explanation of what changed and why.",
    assessmentCriteria: [
      "The effect of listener and situation on register is explained correctly.",
      "Each of the three messages fits its listener.",
      "The core facts stay accurate across all three versions.",
      "The explanation of the changes is sound, in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "MN",
    semester: "Semester I",
    subjectCode: "C0100",
    subjectName: "Expresión Oral y Escrita",
    subjectId: "mn-s1-expresion-oral-escrita",
    unit: "Comunicación Oral",
    topic: "Exposición técnica formal: oral, escrita y visual",
    week: 12,
    taskId: "mn-c0100-w12-technical-presentation",
    taskTitle: "Prepare And Deliver A Technical Briefing",
    scenario: "At the end of the term the cadet must give a short technical briefing to the crew on one machinery system, supported by a simple visual and a written handout, bringing together everything learned about oral and written communication.",
    instructions: [
      "Prepare the spoken briefing with a clear opening, key points and a close.",
      "Prepare a simple visual aid (a diagram or a few slides) that supports, not replaces, the words.",
      "Prepare a short written handout that the crew keeps, with the essential points.",
      "Deliver the briefing so the spoken, visual and written parts agree, in correct English."
    ],
    deliverable: "A complete technical briefing package in English: the spoken briefing outline, a supporting visual (described), and a short written handout, all consistent with each other.",
    assessmentCriteria: [
      "The spoken briefing has a clear, logical structure.",
      "The visual aid genuinely supports the message.",
      "The written handout captures the essential points.",
      "The three parts agree and are clear and professional, in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
];

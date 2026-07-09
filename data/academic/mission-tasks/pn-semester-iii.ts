import type { AcademicMissionTask } from "./types";

export const pnSemesterIiiTasks: AcademicMissionTask[] = [
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "NAV316",
    subjectName: "Navegación I",
    subjectId: "pn-s3-navegacion-i",
    unit: "Dirección en la navegación",
    topic: "Tipos de rumbo",
    week: 1,
    taskId: "pn-nav316-w01-course-types",
    taskTitle: "Distinguish True, Magnetic And Compass Course",
    scenario: "The officer of the watch asks the cadet to explain the difference between true, magnetic, and compass course before plotting, since confusing them leads to navigation errors.",
    instructions: [
      "Define true course, magnetic course, and compass course.",
      "Explain what is applied to convert between them (variation and deviation).",
      "State the correct order in which the corrections are applied.",
      "Report your explanation in clear maritime English."
    ],
    deliverable: "A short note in English defining true, magnetic, and compass course and explaining how variation and deviation relate them.",
    assessmentCriteria: [
      "The three course types are correctly defined.",
      "Variation and deviation are correctly applied between them.",
      "The order of correction is correct.",
      "The explanation is clear and uses correct navigational English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "NAV316",
    subjectName: "Navegación I",
    subjectId: "pn-s3-navegacion-i",
    unit: "Marcaciones y demoras",
    topic: "Relación entre marcaciones",
    week: 2,
    taskId: "pn-nav316-w02-bearings",
    taskTitle: "Convert Between Relative And True Bearings",
    scenario: "The lookout reports a contact by relative bearing. The officer asks the cadet to convert it to a true bearing using the ship's heading, so it can be plotted.",
    instructions: [
      "State the relative bearing reported and the ship's heading.",
      "Explain the relationship between relative bearing, heading, and true bearing.",
      "Convert the relative bearing to a true bearing.",
      "State the result clearly for plotting."
    ],
    deliverable: "A bearing conversion note in English giving the true bearing of the contact, with the relationship and working shown.",
    assessmentCriteria: [
      "The relationship between relative, heading, and true bearing is correct.",
      "The conversion is calculated correctly.",
      "The result is expressed clearly for plotting.",
      "Correct navigational terminology is used in English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "NAV316",
    subjectName: "Navegación I",
    subjectId: "pn-s3-navegacion-i",
    unit: "Compás magnético",
    topic: "La variación magnética y el desvío en la carta magnética",
    week: 3,
    taskId: "pn-nav316-w03-variation-deviation",
    taskTitle: "Apply Variation And Deviation To A Heading",
    scenario: "Before steering a planned course, the cadet must correct the compass reading. The officer asks the cadet to apply variation and deviation to find the compass heading to steer.",
    instructions: [
      "State the true course to be steered.",
      "Apply variation to obtain the magnetic course.",
      "Apply deviation (from the deviation card) to obtain the compass course.",
      "State the compass heading to steer and note why deviation changes with heading."
    ],
    deliverable: "A correction note in English giving the compass heading to steer, showing the application of variation and deviation in order.",
    assessmentCriteria: [
      "Variation is applied correctly.",
      "Deviation is applied correctly from the card.",
      "The final compass heading is correct.",
      "The note explains why deviation changes, in clear English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "NAV316",
    subjectName: "Navegación I",
    subjectId: "pn-s3-navegacion-i",
    unit: "Navegación de estima",
    topic: "Corrección de la estima por efectos de viento, corriente y error de giro",
    week: 4,
    taskId: "pn-nav316-w04-dead-reckoning",
    taskTitle: "Correct A Dead Reckoning Position For Current",
    scenario: "The vessel is navigating by dead reckoning. The officer asks the cadet to correct the estimated position for the effect of a known current, to improve the estimated position.",
    instructions: [
      "State the dead reckoning course and speed.",
      "State the set and drift of the current.",
      "Apply the current to correct the estimated position (estimated position vs DR).",
      "Report the corrected estimated position and why this correction matters."
    ],
    deliverable: "A dead reckoning correction note in English giving the estimated position adjusted for current, with the working and reasoning shown.",
    assessmentCriteria: [
      "The DR course and speed are handled correctly.",
      "The current set and drift are applied correctly.",
      "The corrected estimated position is reasonable.",
      "The reasoning is clear and in correct navigational English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "NAV316",
    subjectName: "Navegación I",
    subjectId: "pn-s3-navegacion-i",
    unit: "Compás magnético",
    topic: "Conversión de rumbos verdadero, magnético y de compás (variación y desvío en cadena)",
    week: 5,
    taskId: "pn-nav316-w05-course-conversion-chain",
    taskTitle: "Convert A Course True To Magnetic To Compass And Back",
    scenario: "Before steering, the officer of the watch gives the cadet a true course and the vessel's variation and deviation, and asks for the compass course to pass to the helmsman. Getting the East and West signs wrong sends the ship off track, so the cadet must apply the corrections in the right order and prove the chain by reversing it.",
    instructions: [
      "State the rule with the memory aid 'error west, compass best; error east, compass least': a West error is ADDED to true to get compass, an East error is SUBTRACTED.",
      "Working True to Magnetic to Compass, convert a true course of 050 degrees with variation 10 degrees West and deviation 4 degrees East: apply the variation first, then the deviation.",
      "Show the magnetic course (050 + 10 = 060 degrees M) and the compass course (060 - 4 = 056 degrees C).",
      "Verify by reversing the chain Compass to Magnetic to True (add East going to true): 056 + 4 = 060 degrees M, then 060 - 10 = 050 degrees T, confirming it returns to the original course. Report every course as three figures in 000-360 degrees, in clear navigational English."
    ],
    deliverable: "A course conversion note in English showing the full True-Magnetic-Compass chain with each step, and the reverse Compass-Magnetic-True check confirming it returns to the original true course, all courses in three figures.",
    assessmentCriteria: [
      "The sign rule is stated correctly (West error added, East error subtracted, going from true to compass).",
      "The magnetic course is correct (050 + 10W = 060 degrees M) and the compass course is correct (060 - 4E = 056 degrees C).",
      "The reverse check returns to the original (056 + 4E = 060 degrees M, 060 - 10W = 050 degrees T).",
      "All courses are given as three figures in 000-360 degrees, in clear navigational English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "NAV316",
    subjectName: "Navegación I",
    subjectId: "pn-s3-navegacion-i",
    unit: "Navegación loxodrómica",
    topic: "Navegación plana (plane sailing): diferencia de latitud, apartamiento, rumbo y distancia",
    week: 6,
    taskId: "pn-nav316-w06-plane-sailing",
    taskTitle: "Find Course And Distance By Plane Sailing",
    scenario: "The vessel must run a short rhumb-line leg between two positions. The officer asks the cadet to find the course to steer and the distance using plane sailing, treating the leg as a plane right triangle of difference of latitude and departure.",
    instructions: [
      "State the two positions A 59 degrees 30 minutes N, 010 degrees 00 minutes W and B 60 degrees 30 minutes N, 008 degrees 00 minutes W, and find the difference of latitude in minutes (1 minute of latitude = 1 NM).",
      "Calculate the departure with departure = difference of longitude in minutes x cosine of the mean latitude: mean latitude = 60 degrees (cos 60 = 0.5), difference of longitude = 120 minutes, so departure = 120 x 0.5 = 60 NM.",
      "Find the course with course angle = arctangent(departure / difference of latitude) = arctangent(60 / 60) = 45 degrees, giving 045 degrees T in the NE quadrant.",
      "Find the distance by Pythagoras, distance = square root(difference of latitude squared + departure squared) = square root(60 squared + 60 squared) = 84.9 NM, and verify with distance = difference of latitude / cosine(course) = 60 / cos 45 = 84.9 NM. Report the course in three figures and the distance in nautical miles, in clear navigational English."
    ],
    deliverable: "A plane sailing calculation in English giving the difference of latitude, the departure, the course (three figures) and the distance in NM, with the working shown and the distance verified by both methods.",
    assessmentCriteria: [
      "The difference of latitude is correct (60 minutes = 60 NM) and the departure is correct (120 x cos 60 = 60 NM).",
      "The course is correct (arctangent(60/60) = 45 degrees, i.e. 045 degrees T) in the correct quadrant.",
      "The distance is correct (square root(60 squared + 60 squared) = 84.9 NM) and verified by distance = difference of latitude / cos(course) = 84.9 NM.",
      "The course is given as three figures in 000-360 degrees and the distance in NM, in clear navigational English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "NAV316",
    subjectName: "Navegación I",
    subjectId: "pn-s3-navegacion-i",
    unit: "Navegación loxodrómica",
    topic: "Velocidad, tiempo y ETA en la derrota con corrección por corriente (SOG vs velocidad de superficie)",
    week: 7,
    taskId: "pn-nav316-w07-speed-time-eta-current",
    taskTitle: "Work Out ETA On A Leg Corrected For Current",
    scenario: "The vessel is running a leg toward a waypoint and a known current sets along the track. The officer asks the cadet to work out the passage time and ETA using speed over the ground, remembering that a head current makes the passage slower and a fair current faster.",
    instructions: [
      "State the leg: distance to waypoint WP1 = 60 NM, speed through the water = 12 knots, departure time 08:00.",
      "With no current, calculate the time as distance / speed = 60 / 12 = 5.0 hours, giving ETA 13:00.",
      "With a 2 knot current AGAINST, speed over the ground = 12 - 2 = 10 knots, so time = 60 / 10 = 6.0 hours and ETA = 08:00 + 6:00 = 14:00; confirm this ETA is LATER than the no-current ETA.",
      "With a 2 knot current in FAVOUR, speed over the ground = 12 + 2 = 14 knots, so time = 60 / 14 = 4.29 hours = 4 hours 17 minutes. Report all times and ETAs, in clear navigational English."
    ],
    deliverable: "An ETA calculation in English giving the passage time and ETA for no current, a head current and a fair current, using speed over the ground, with the working shown and the head-current ETA confirmed later than the no-current ETA.",
    assessmentCriteria: [
      "The no-current time and ETA are correct (60 / 12 = 5.0 h, ETA 13:00).",
      "The head current uses speed over the ground correctly (12 - 2 = 10 kn, 60 / 10 = 6.0 h, ETA 14:00) and is confirmed later than the no-current ETA.",
      "The fair current uses speed over the ground correctly (12 + 2 = 14 kn, 60 / 14 = 4 h 17 min).",
      "Times and ETAs carry the correct units and the reasoning is in clear navigational English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "NAV316",
    subjectName: "Navegación I",
    subjectId: "pn-s3-navegacion-i",
    unit: "Líneas de posición",
    topic: "Situación por demoras cruzadas: conversión de demoras de compás a verdaderas y triángulo de error (cocked hat)",
    week: 8,
    taskId: "pn-nav316-w08-fix-cross-bearings",
    taskTitle: "Fix The Ship By Cross Bearings And The Cocked Hat",
    scenario: "Approaching the coast the cadet takes compass bearings of three charted objects to fix the ship. The officer asks the cadet to correct each bearing to true, plot the position lines, and judge the fix from the small triangle of error they form.",
    instructions: [
      "State the corrections, variation 5 degrees East and deviation 3 degrees East (total error 8 degrees East), and the rule Compass to True adds East: true bearing = compass bearing + 8 degrees.",
      "Convert the three compass bearings to true: object A 040 degrees C = 048 degrees T, object B 100 degrees C = 108 degrees T, object C 340 degrees C = 348 degrees T, and verify each by reversing (True to Compass subtracts East) back to the original.",
      "Give the reciprocal of each true bearing (bearing plus or minus 180 degrees) for plotting the position line from the object: 048 + 180 = 228 degrees, 108 + 180 = 288 degrees, 348 - 180 = 168 degrees.",
      "Explain that when the three position lines do not meet at a single point they form a triangle of error (a cocked hat), and that the fix is taken at its centre, or at the corner nearest to danger for safety. Report all bearings as three figures in 000-360 degrees, in clear navigational English."
    ],
    deliverable: "A fix note in English giving the three true bearings with their reverse check, their reciprocals for plotting, and an explanation of the cocked hat and where the fix is taken, all bearings in three figures.",
    assessmentCriteria: [
      "Each compass bearing is correctly converted to true (040 + 8 = 048, 100 + 8 = 108, 340 + 8 = 348 degrees T) and verified by the reverse conversion.",
      "The reciprocals are correct (048/228, 108/288, 348/168 degrees) for plotting the position lines.",
      "The triangle of error (cocked hat) is correctly explained, including taking the fix at its centre or nearest the danger.",
      "All bearings are given as three figures in 000-360 degrees, in clear navigational English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "HID318",
    subjectName: "Hidrografía",
    subjectId: "pn-s3-hidrografia",
    unit: "Concepto de hidrografía",
    topic: "Definiciones e interrelación con otras ciencias",
    week: 1,
    taskId: "pn-hid318-w01-hydrography-concept",
    taskTitle: "Explain What Hydrography Provides To Navigation",
    scenario: "The officer asks the cadet to explain what hydrography is and why its products are essential for safe navigation, before the cadet starts using charts seriously.",
    instructions: [
      "Define hydrography in your own words.",
      "State two products of hydrography that a navigator relies on.",
      "Explain how hydrographic data keeps navigation safe.",
      "Report your explanation in clear maritime English."
    ],
    deliverable: "A short note in English defining hydrography, two of its products used in navigation, and how it supports safe navigation.",
    assessmentCriteria: [
      "Hydrography is correctly defined.",
      "The products listed are valid and relevant.",
      "The link to safe navigation is sound.",
      "The note is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "HID318",
    subjectName: "Hidrografía",
    subjectId: "pn-s3-hidrografia",
    unit: "Batimetría",
    topic: "Sondeos. - Sistema de sondeos. - Intervalos de sondas. - Unidades de profundidad. - Aparatos de sondeo. - Sondeo en costado de muelles",
    week: 2,
    taskId: "pn-hid318-w02-soundings",
    taskTitle: "Interpret Depth Soundings",
    scenario: "The cadet is given a set of depth soundings. The officer asks the cadet to explain how soundings are taken, what the depth unit means, and why the readings matter for safe under-keel clearance.",
    instructions: [
      "Explain how a depth sounding is taken (e.g. echo sounder).",
      "State the unit of depth used and what the reading refers to (datum).",
      "Explain how soundings relate to under-keel clearance.",
      "Report your explanation in clear maritime English."
    ],
    deliverable: "A note in English explaining how soundings are taken, the depth unit and its datum, and how soundings relate to under-keel clearance.",
    assessmentCriteria: [
      "The sounding method is correctly explained.",
      "The depth unit and datum are correct.",
      "The under-keel clearance link is sound.",
      "The explanation is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "HID318",
    subjectName: "Hidrografía",
    subjectId: "pn-s3-hidrografia",
    unit: "Corrientes marinas",
    topic: "Aplicación de las corrientes marinas en la navegación",
    week: 3,
    taskId: "pn-hid318-w03-currents-navigation",
    taskTitle: "Account For Sea Currents In A Passage",
    scenario: "A known current affects the planned passage. The officer asks the cadet to explain how the current will affect the vessel and what to do about it when planning.",
    instructions: [
      "State the set and drift of the current affecting the passage.",
      "Explain how the current will affect the vessel's track and speed made good.",
      "State what adjustment the navigator makes to stay on the intended track.",
      "Report your explanation in clear maritime English."
    ],
    deliverable: "A note in English explaining how a sea current affects the vessel's track and speed made good, and the adjustment made to stay on track.",
    assessmentCriteria: [
      "The effect of the current on track and speed is correct.",
      "The adjustment to stay on track is appropriate.",
      "The reasoning is sound.",
      "The note is clear and in correct navigational English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "HID318",
    subjectName: "Hidrografía",
    subjectId: "pn-s3-hidrografia",
    unit: "Levantamientos hidrográficos",
    topic: "Tipos de levantamientos hidrográficos",
    week: 4,
    taskId: "pn-hid318-w04-hydrographic-survey",
    taskTitle: "Describe A Hydrographic Survey Type",
    scenario: "The officer asks the cadet to describe one type of hydrographic survey and explain how its results end up improving the charts the ship uses.",
    instructions: [
      "Name one type of hydrographic survey.",
      "Describe briefly how that survey is carried out.",
      "Explain how the survey results improve nautical charts.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English naming a hydrographic survey type, how it is carried out, and how its results improve nautical charts.",
    assessmentCriteria: [
      "The survey type is valid and correctly named.",
      "The description of the method is accurate.",
      "The link to chart improvement is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "HID318",
    subjectName: "Hidrografía",
    subjectId: "pn-s3-hidrografia",
    unit: "Mareas",
    topic: "Fundamentos y terminologia de la marea; datum de sondas (chart datum)",
    week: 5,
    taskId: "pn-hid318-w05-tides-datum-fundamentals",
    taskTitle: "Explain Tidal Terms And Chart Datum",
    scenario: "Before the cadet is allowed to use the tide tables, the officer asks them to explain the basic tidal terms and, above all, what the charted depths are actually measured from, so that soundings on the chart are read correctly.",
    instructions: [
      "Define high water and low water, and explain what the range of the tide is.",
      "Distinguish spring tides from neap tides (springs near new and full moon give the largest range; neaps near the quarters give the smallest range).",
      "Explain the difference between a semidiurnal tidal cycle (two highs and two lows per day) and a diurnal cycle (one high and one low per day).",
      "Explain that charted soundings are referred to chart datum, a low reference level close to the lowest astronomical tide, so the real depth of water is usually greater than the charted sounding. Report your answer in clear hydrographic English."
    ],
    deliverable: "A note in English defining high and low water and tidal range, distinguishing springs from neaps and semidiurnal from diurnal cycles, and explaining chart datum as the low reference level for charted soundings.",
    assessmentCriteria: [
      "High water, low water and range are correctly defined.",
      "Springs and neaps are correctly distinguished (springs largest range, neaps smallest).",
      "Semidiurnal and diurnal cycles are correctly distinguished.",
      "Chart datum is correctly explained as a low reference level, so real depth is usually greater than the charted sounding, in clear hydrographic English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "HID318",
    subjectName: "Hidrografía",
    subjectId: "pn-s3-hidrografia",
    unit: "Mareas",
    topic: "Calculo de altura de marea y profundidad disponible; margen bajo la quilla (UKC)",
    week: 6,
    taskId: "pn-hid318-w06-tidal-height-ukc",
    taskTitle: "Work Out Depth Of Water And Under-Keel Clearance",
    scenario: "The vessel plans to cross a charted shoal. Using the tide tables, the officer asks the cadet to work out the real depth of water and the under-keel clearance at two states of tide, and to give a go / no-go decision against the required clearance.",
    instructions: [
      "State the rule: available depth = charted sounding + height of tide (the height of tide is ADDED because the charted sounding is measured from chart datum, a low level), and under-keel clearance (UKC) = available depth - draught. The vessel may proceed only if UKC is at or above the required margin.",
      "Use a charted sounding of 6.0 m, a draught of 7.5 m and a required UKC margin of 1.0 m for both cases.",
      "Case A, high water with a height of tide of 3.5 m: available depth = 6.0 + 3.5 = 9.5 m, UKC = 9.5 - 7.5 = 2.0 m, which is at or above 1.0 m, so the decision is GO.",
      "Case B, low water with a height of tide of 2.0 m: available depth = 6.0 + 2.0 = 8.0 m, UKC = 8.0 - 7.5 = 0.5 m, which is below 1.0 m, so the decision is NO-GO. Report both cases with the working and a clear go / no-go verdict, in clear hydrographic English."
    ],
    deliverable: "A depth calculation in English giving the available depth and UKC for both states of tide, with the working shown and a clear go / no-go verdict for each against the 1.0 m margin.",
    assessmentCriteria: [
      "The rule is stated correctly (available depth = charted sounding + height of tide, with the height of tide added; UKC = available depth - draught).",
      "Case A is correct (6.0 + 3.5 = 9.5 m, UKC 9.5 - 7.5 = 2.0 m) and the verdict is GO.",
      "Case B is correct (6.0 + 2.0 = 8.0 m, UKC 8.0 - 7.5 = 0.5 m) and the verdict is NO-GO.",
      "Both verdicts are coherent with the 1.0 m margin, with correct units, in clear hydrographic English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "HID318",
    subjectName: "Hidrografía",
    subjectId: "pn-s3-hidrografia",
    unit: "Batimetria",
    topic: "El ecosonda: principio del eco, monohaz y multihaz, y errores de medicion",
    week: 7,
    taskId: "pn-hid318-w07-echo-sounder",
    taskTitle: "Explain How The Echo Sounder Measures Depth",
    scenario: "Following on from bathymetry, the officer asks the cadet to explain the instrument that produces the soundings: how the echo sounder works, the difference between single-beam and multibeam, and the errors that can make a reading wrong.",
    instructions: [
      "Explain the echo principle: the transducer sends a sound pulse to the seabed and times the returning echo, so depth = sound speed x travel time / 2, dividing by two because the pulse travels down AND back.",
      "Distinguish a single-beam echo sounder (one depth directly under the ship) from a multibeam system (a fan of beams giving full-coverage bathymetry across a swath).",
      "Explain the error caused by using an assumed sound speed in water when the real speed differs (sound speed changes with temperature, salinity and pressure), and how it affects the measured depth.",
      "Explain the transducer draught error: the echo sounder measures from the transducer, not the waterline, so the transducer's depth below the surface must be accounted for to get the true depth of water. Report your answer in clear hydrographic English."
    ],
    deliverable: "A note in English explaining the echo principle with the divide-by-two, distinguishing single-beam from multibeam, and describing the sound-speed and transducer-draught errors.",
    assessmentCriteria: [
      "The echo principle is correct, including depth = sound speed x time / 2 with the divide-by-two justified (down and back).",
      "Single-beam and multibeam are correctly distinguished.",
      "The sound-speed error is correctly explained (assumed vs real speed in water).",
      "The transducer-draught error is correctly explained (measured from the transducer, not the waterline), in clear hydrographic English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "HID318",
    subjectName: "Hidrografía",
    subjectId: "pn-s3-hidrografia",
    unit: "Informacion hidrografica al navegante",
    topic: "Avisos a los Marinos y correccion de cartas; flujo levantamiento-oficina hidrografica-carta",
    week: 8,
    taskId: "pn-hid318-w08-notices-to-mariners",
    taskTitle: "Trace Hydrographic Information To The Updated Chart",
    scenario: "As the closing task of the subject, the officer asks the cadet to explain how new hydrographic information reaches the mariner and keeps the charts up to date, from the survey at sea to the corrected chart on the bridge.",
    instructions: [
      "Explain what Notices to Mariners are and how they inform the mariner of changes affecting charts and publications (new dangers, changed depths, buoyage, and so on).",
      "Describe how a chart correction is applied and recorded so the chart in use is kept up to date and traceable.",
      "Describe the flow of hydrographic information: survey at sea produces the data, the hydrographic office processes and compiles it, and an updated chart or Notice to Mariners is issued to the mariner.",
      "Explain why this flow matters for safety of navigation, keeping the focus on the flow and management of the information rather than on the chart as a drawing. Report your answer in clear hydrographic English."
    ],
    deliverable: "A note in English explaining Notices to Mariners, how a chart correction is applied and recorded, and the full survey-to-office-to-updated-chart flow, with why it matters for safety.",
    assessmentCriteria: [
      "Notices to Mariners are correctly explained as the means of informing the mariner of changes.",
      "The chart correction process is correctly described (applied and recorded to keep the chart up to date).",
      "The survey to hydrographic office to updated chart flow is correct and in the right order.",
      "The focus stays on the flow and management of the information and its link to safety, in clear hydrographic English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "CAR319",
    subjectName: "Cartografía",
    subjectId: "pn-s3-cartografia",
    unit: "Sistema de Coordenadas Terrestres",
    topic: "Coordenadas geográficas",
    week: 1,
    taskId: "pn-car319-w01-geographic-coordinates",
    taskTitle: "Read A Position In Geographic Coordinates",
    scenario: "The officer gives the cadet a position and asks them to read and state it correctly in geographic coordinates (latitude and longitude), as it would be logged or reported.",
    instructions: [
      "Identify the latitude and longitude of the given position.",
      "State each with the correct hemisphere (N/S, E/W) and format.",
      "Explain what latitude and longitude each measure.",
      "Report the position in clear maritime English."
    ],
    deliverable: "A note in English stating a position in correct geographic coordinates with hemispheres, and explaining what latitude and longitude measure.",
    assessmentCriteria: [
      "Latitude and longitude are correctly identified.",
      "Hemispheres and format are correct.",
      "The explanation of each is accurate.",
      "The position is clearly reported in English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "CAR319",
    subjectName: "Cartografía",
    subjectId: "pn-s3-cartografia",
    unit: "Proyecciones",
    topic: "Mercator",
    week: 2,
    taskId: "pn-car319-w02-mercator-projection",
    taskTitle: "Explain Why Charts Use The Mercator Projection",
    scenario: "The officer asks the cadet why most nautical charts use the Mercator projection, and what useful property it gives the navigator when plotting a course.",
    instructions: [
      "Explain what the Mercator projection does to lines of constant course (rhumb lines).",
      "State the main advantage this gives the navigator.",
      "State one limitation of the Mercator projection (e.g. distortion at high latitudes).",
      "Report your explanation in clear maritime English."
    ],
    deliverable: "A note in English explaining the navigational advantage of the Mercator projection and one of its limitations.",
    assessmentCriteria: [
      "The behaviour of rhumb lines on Mercator is correct.",
      "The navigational advantage is correctly stated.",
      "The limitation is valid.",
      "The explanation is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "CAR319",
    subjectName: "Cartografía",
    subjectId: "pn-s3-cartografia",
    unit: "Cartas Náuticas",
    topic: "Escalas",
    week: 3,
    taskId: "pn-car319-w03-chart-scale",
    taskTitle: "Choose The Right Chart Scale For A Passage",
    scenario: "The cadet must select charts for a passage from open sea into a port. The officer asks which chart scale is appropriate for each phase and why.",
    instructions: [
      "Explain the difference between a small-scale and a large-scale chart.",
      "State which scale is used for open-sea passage and which for port approach.",
      "Explain why using the wrong scale is a safety risk.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining small vs large scale charts, which to use for each passage phase, and the safety risk of the wrong scale.",
    assessmentCriteria: [
      "Small vs large scale is correctly explained.",
      "The right scale is matched to each phase.",
      "The safety reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "CAR319",
    subjectName: "Cartografía",
    subjectId: "pn-s3-cartografia",
    unit: "Cartas Electrónicas",
    topic: "Cartas vectoriales",
    week: 4,
    taskId: "pn-car319-w04-vector-charts",
    taskTitle: "Compare Raster And Vector Electronic Charts",
    scenario: "The bridge uses electronic charts. The officer asks the cadet to explain the difference between raster and vector charts and one advantage of vector charts for modern navigation.",
    instructions: [
      "Explain what a raster chart is.",
      "Explain what a vector chart is and how it differs.",
      "State one advantage of vector charts (e.g. layers, alarms, scalability).",
      "Report your explanation in clear maritime English."
    ],
    deliverable: "A note in English explaining the difference between raster and vector electronic charts and one advantage of vector charts.",
    assessmentCriteria: [
      "Raster charts are correctly described.",
      "Vector charts are correctly described and differentiated.",
      "The advantage stated is valid.",
      "The explanation is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "CAR319",
    subjectName: "Cartografía",
    subjectId: "pn-s3-cartografia",
    unit: "Simbología de la carta náutica",
    topic: "Carta INT 1 (Chart No. 1): símbolos de peligros, ayudas a la navegación, naturaleza del fondo y abreviaturas",
    week: 5,
    taskId: "pn-car319-w05-chart-symbols",
    taskTitle: "Read Chart Symbols Using Chart No. 1",
    scenario: "The officer hands the cadet a nautical chart together with Chart No. 1 (INT 1), the symbol booklet, and asks them to identify the main symbols on the chart before it is used for planning, so nothing on the chart is misread.",
    instructions: [
      "Using Chart No. 1 (INT 1), identify the symbols for dangers: rocks (awash and underwater), wrecks, and shoals or shallow patches.",
      "Identify the aids to navigation: buoys (lateral and cardinal marks) and lighthouses, and explain how a light's characteristics are shown on the chart (colour, period and range).",
      "Identify how the nature of the seabed is shown by its standard abbreviations (for example S for sand, M for mud, R for rock, Co for coral).",
      "Explain why standardised symbology lets any mariner read any official chart. Report your answer in clear cartographic English."
    ],
    deliverable: "A note in English identifying, from Chart No. 1, the symbols for dangers, aids to navigation with light characteristics, and the seabed-nature abbreviations, and explaining why standard symbology matters.",
    assessmentCriteria: [
      "The danger symbols (rocks, wrecks, shoals) are correctly identified.",
      "The aids to navigation are correctly identified, including how light characteristics are shown.",
      "The seabed-nature abbreviations are correctly read.",
      "The value of standardised symbology is correctly explained, in clear cartographic English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "CAR319",
    subjectName: "Cartografía",
    subjectId: "pn-s3-cartografia",
    unit: "Escalas",
    topic: "Escala natural y medición de distancias en la carta con la escala de latitudes",
    week: 6,
    taskId: "pn-car319-w06-scale-distance-measurement",
    taskTitle: "Measure Distance On A Chart Using The Scale",
    scenario: "The cadet must take a distance off the chart. The officer asks them to calculate it from the natural scale and then confirm it with the latitude scale, getting the sense of the scale right so the real distance is never understated.",
    instructions: [
      "State the rule: a natural scale of 1:75 000 means 1 unit on the chart equals 75 000 of the same units in reality, so real distance = chart measurement x the denominator, and the real distance is ALWAYS larger than the measurement on the chart.",
      "A distance measured on the chart is 4 cm; calculate the real distance: 4 cm x 75 000 = 300 000 cm = 3 000 m = 3.0 km, checking the units cm to m at each step.",
      "Convert the distance to nautical miles using 1 NM = 1852 m: 3 000 / 1852 = 1.62 NM.",
      "Cross-check with the latitude scale rule, that a span of X minutes of latitude equals X nautical miles when measured against the side (latitude) scale at the height of the measurement: 1.62 NM corresponds to 1.62 minutes of latitude, and as a clean example two points 6.0 minutes of latitude apart are 6.0 NM apart. Report the distance in metres and NM with the working, in clear cartographic English."
    ],
    deliverable: "A distance calculation in English giving the real distance from the 1:75 000 scale in metres and NM, with the units checked at each step and a cross-check by the latitude scale rule.",
    assessmentCriteria: [
      "The scale rule is stated correctly (1:75 000 = 1 unit chart to 75 000 units real; real distance = chart x denominator, always larger).",
      "The real distance is correct (4 cm x 75 000 = 300 000 cm = 3 000 m = 3.0 km) with correct unit steps.",
      "The conversion to NM is correct (3 000 / 1852 = 1.62 NM).",
      "The latitude-scale cross-check is correct (X minutes of latitude = X NM; 6.0' = 6.0 NM), in clear cartographic English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "CAR319",
    subjectName: "Cartografía",
    subjectId: "pn-s3-cartografia",
    unit: "Datums geodésicos horizontales",
    topic: "WGS-84 y la posición satelital en la carta con datum local",
    week: 7,
    taskId: "pn-car319-w07-geodetic-datum-wgs84",
    taskTitle: "Explain Why A GPS Position May Not Fit The Chart",
    scenario: "A GPS position is plotted on the chart and does not fall exactly where the officer expects. The officer asks the cadet to explain the horizontal geodetic datum behind this and how the chart's datum note is used.",
    instructions: [
      "Explain what a horizontal geodetic datum is and state that WGS-84 is the datum used by GPS and other satellite positioning.",
      "Explain that a chart drawn on a local datum can differ from WGS-84, so a satellite-derived position may not fall exactly on the charted feature it corresponds to.",
      "Explain the datum note or 'satellite-derived positions' correction printed on the chart, and how the stated shift is applied so positions agree with the chart.",
      "Contrast this HORIZONTAL datum, which fixes position, with the VERTICAL datum (chart datum) that fixes charted depths. Report your answer in clear cartographic English."
    ],
    deliverable: "A note in English explaining horizontal geodetic datum and WGS-84, why a GPS position may not fit a local-datum chart, how the datum-shift note is applied, and the contrast with the vertical chart datum.",
    assessmentCriteria: [
      "Horizontal geodetic datum is correctly explained, with WGS-84 as the satellite-positioning datum.",
      "The reason a satellite position may not fit a local-datum chart is correct.",
      "The datum note / satellite-derived-positions correction and its application are correctly explained.",
      "The horizontal (position) versus vertical (depth) datum contrast is correct, in clear cartographic English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "CAR319",
    subjectName: "Cartografía",
    subjectId: "pn-s3-cartografia",
    unit: "Cartas Electrónicas",
    topic: "ECDIS en operación: ENC vs RNC, capas de información, safety contour y alarmas",
    week: 8,
    taskId: "pn-car319-w08-ecdis-enc-rnc",
    taskTitle: "Explain The ECDIS Chart System In Operation",
    scenario: "As the closing task of the subject, the officer asks the cadet to explain the electronic chart system, ECDIS, as it is used on the bridge: the chart types it displays, its information layers, and the safety features that watch over the ship.",
    instructions: [
      "Explain what ECDIS is and distinguish the charts it can display: ENC (vector, official) versus RNC (raster).",
      "Explain the information layers ECDIS provides and that the display can be tailored (for example base, standard and all layers).",
      "Explain the safety contour and the depth and danger alarms, and how they warn the watchkeeper about water that is too shallow.",
      "State one advantage and one limitation of ECDIS as a chart system, mentioning chart updating only in passing rather than as the focus. Report your answer in clear cartographic English."
    ],
    deliverable: "A note in English explaining ECDIS, distinguishing ENC from RNC, describing the information layers and the safety contour and alarms, and giving one advantage and one limitation of the system.",
    assessmentCriteria: [
      "ECDIS is correctly explained and ENC (vector, official) is distinguished from RNC (raster).",
      "The information layers and the tailoring of the display are correctly described.",
      "The safety contour and the depth/danger alarms are correctly explained.",
      "One valid advantage and one valid limitation are given, with updating only in passing, in clear cartographic English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "GEA320",
    subjectName: "Geometría Analítica",
    subjectId: "pn-s3-geometria-analitica",
    unit: "Línea recta",
    topic: "Distancia entre dos puntos",
    week: 1,
    taskId: "pn-gea320-w01-distance-two-points",
    taskTitle: "Calculate Distance Between Two Positions",
    scenario: "Two waypoints are given as coordinates on a plotting sheet. The officer asks the cadet to calculate the straight-line distance between them using the distance formula.",
    instructions: [
      "Identify the coordinates of the two waypoints.",
      "Apply the distance formula between two points.",
      "Calculate the distance with the correct unit.",
      "State the result clearly for the passage plan."
    ],
    deliverable: "A distance calculation note in English giving the straight-line distance between two waypoints, with the formula and working shown.",
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
    career: "PN",
    semester: "Semester III",
    subjectCode: "GEA320",
    subjectName: "Geometría Analítica",
    subjectId: "pn-s3-geometria-analitica",
    unit: "Línea recta",
    topic: "Pendiente",
    week: 2,
    taskId: "pn-gea320-w02-slope-course",
    taskTitle: "Use Slope To Describe A Track Line",
    scenario: "A track line is drawn between two points on a plotting sheet. The officer asks the cadet to find its slope and explain how slope relates to the direction of the track.",
    instructions: [
      "Identify the two points defining the track line.",
      "Calculate the slope of the line between them.",
      "Explain how slope relates to the steepness/direction of the track.",
      "Report the result in clear English."
    ],
    deliverable: "A slope calculation note in English giving the slope of a track line and explaining how it relates to direction.",
    assessmentCriteria: [
      "The slope is calculated correctly.",
      "The relationship to direction is explained correctly.",
      "The result is clearly stated.",
      "The note is in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "GEA320",
    subjectName: "Geometría Analítica",
    subjectId: "pn-s3-geometria-analitica",
    unit: "Circunferencia",
    topic: "Ecuación general de la circunferencia",
    week: 3,
    taskId: "pn-gea320-w03-circle-turning",
    taskTitle: "Model A Turning Circle With A Circle Equation",
    scenario: "A vessel's turning circle can be modelled geometrically. The officer asks the cadet to use the equation of a circle to describe a turning circle of a given radius centred at a point.",
    instructions: [
      "State the centre and radius of the turning circle.",
      "Write the equation of the circle for that centre and radius.",
      "Explain what the radius represents for the vessel's manoeuvre.",
      "Report the result in clear English."
    ],
    deliverable: "A note in English giving the equation of a circle modelling a turning circle, with an explanation of what the radius represents.",
    assessmentCriteria: [
      "The circle equation is written correctly.",
      "The centre and radius are used correctly.",
      "The link to the vessel's manoeuvre is sound.",
      "The note is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "GEA320",
    subjectName: "Geometría Analítica",
    subjectId: "pn-s3-geometria-analitica",
    unit: "Geometría Analítica del Espacio",
    topic: "Ecuación de la superficie esférica con centro en el origen",
    week: 4,
    taskId: "pn-gea320-w04-sphere-earth",
    taskTitle: "Relate The Sphere Equation To Position On Earth",
    scenario: "The Earth is approximated as a sphere in navigation. The officer asks the cadet to explain how the equation of a sphere relates to describing a position on the Earth's surface.",
    instructions: [
      "Write the equation of a sphere centred at the origin.",
      "Explain what the radius represents for the Earth model.",
      "Explain how a point on the sphere relates to a position on Earth.",
      "Report your explanation in clear English."
    ],
    deliverable: "A note in English giving the equation of a sphere and explaining how it relates to describing a position on the Earth's surface.",
    assessmentCriteria: [
      "The sphere equation is written correctly.",
      "The meaning of the radius is correct.",
      "The link to position on Earth is sound.",
      "The explanation is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "GEA320",
    subjectName: "Geometría Analítica",
    subjectId: "pn-s3-geometria-analitica",
    unit: "Segmento rectilíneo",
    topic: "Punto medio y división de un segmento en una razón dada",
    week: 5,
    taskId: "pn-gea320-w05-midpoint-division",
    taskTitle: "Find A Midpoint And Divide A Segment By Ratio",
    scenario: "Working on a cartesian plot where positions are given as (x, y) coordinates, the officer asks the cadet to find an intermediate point as the midpoint between two plotted positions and a point that divides a segment in a given ratio, using coordinate geometry rather than bearings.",
    instructions: [
      "State the midpoint formula M = ((x1 + x2) / 2, (y1 + y2) / 2).",
      "For A = (2, 4) and B = (8, 12), calculate the midpoint: M = ((2 + 8) / 2, (4 + 12) / 2) = (5, 8).",
      "Verify M is equidistant from both ends: distance A to M = square root((5 - 2)^2 + (8 - 4)^2) = square root(9 + 16) = 5, and distance M to B = square root((8 - 5)^2 + (12 - 8)^2) = square root(9 + 16) = 5, confirming they are equal.",
      "Using the section formula, find the point P dividing C = (2, 3) to D = (8, 15) in the ratio 1:2 from C: P = ((1 x 8 + 2 x 2) / 3, (1 x 15 + 2 x 3) / 3) = (4, 7). Report the results with the working, in clear English."
    ],
    deliverable: "A coordinate-geometry note in English giving the midpoint of A-B with its equidistance check, and the point dividing C-D in the ratio 1:2, with the working shown.",
    assessmentCriteria: [
      "The midpoint formula is stated correctly and applied (M = (5, 8)).",
      "The equidistance check is correct (both distances = 5).",
      "The section-formula point is correct (P = (4, 7) for the ratio 1:2).",
      "The working is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "GEA320",
    subjectName: "Geometría Analítica",
    subjectId: "pn-s3-geometria-analitica",
    unit: "Línea recta",
    topic: "Ecuación de la recta (punto-pendiente y pendiente-ordenada) e intersección de dos rectas",
    week: 6,
    taskId: "pn-gea320-w06-line-intersection",
    taskTitle: "Write Two Line Equations And Find Their Intersection",
    scenario: "Two straight lines are drawn on a cartesian plot. The officer asks the cadet to write the equation of each line and find where they cross by solving the system, using coordinate geometry rather than bearings.",
    instructions: [
      "Write line A through the point (1, 3) with slope 2 using point-slope form: y - 3 = 2(x - 1), giving y = 2x + 1.",
      "Write line B through the point (5, 2) with slope -1: y - 2 = -1(x - 5), giving y = -x + 7.",
      "Find the intersection by setting the two equal: 2x + 1 = -x + 7, so 3x = 6, x = 2, and y = 2(2) + 1 = 5, giving the point (2, 5).",
      "Verify that (2, 5) satisfies BOTH original equations: line A gives 2(2) + 1 = 5, and line B gives -(2) + 7 = 5. Report the equations and the intersection with the working, in clear English."
    ],
    deliverable: "A coordinate-geometry note in English giving the two line equations, their intersection point, and the check that the point satisfies both equations, with the working shown.",
    assessmentCriteria: [
      "Line A is correctly written from point-slope form (y = 2x + 1).",
      "Line B is correctly written (y = -x + 7).",
      "The intersection is correctly found (x = 2, y = 5).",
      "The point is verified in BOTH original equations, in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "GEA320",
    subjectName: "Geometría Analítica",
    subjectId: "pn-s3-geometria-analitica",
    unit: "Línea recta",
    topic: "Rectas paralelas y perpendiculares; distancia de un punto a una recta",
    week: 7,
    taskId: "pn-gea320-w07-parallel-perpendicular-distance",
    taskTitle: "Use Parallel, Perpendicular And Point-To-Line Distance",
    scenario: "A straight line is drawn on the cartesian plot. The officer asks the cadet to give lines parallel and perpendicular to it and to find the shortest distance from a fixed position to the line, using coordinate geometry.",
    instructions: [
      "For the line L: 3x + 4y - 12 = 0, find its slope m1 = -A / B = -3/4.",
      "State that a parallel line has the same slope (m1 = m2 = -3/4), and that a perpendicular line has slope m2 = 4/3; show the product m1 x m2 = (-3/4)(4/3) = -1, which confirms perpendicularity.",
      "Find the shortest distance from the position P = (1, 1) to L with d = |A x x0 + B x y0 + C| / square root(A^2 + B^2), keeping the absolute value and the sign of C = -12.",
      "Calculate d = |3(1) + 4(1) - 12| / square root(3^2 + 4^2) = |-5| / square root(25) = 5 / 5 = 1. Report the slopes and the distance with the working, in clear English."
    ],
    deliverable: "A coordinate-geometry note in English giving the parallel and perpendicular slopes with the product check, and the shortest distance from P to the line, with the working shown.",
    assessmentCriteria: [
      "The slope of L is correct (m1 = -3/4).",
      "The parallel and perpendicular slopes are correct, with the product m1 x m2 = -1 shown for perpendicularity.",
      "The distance formula is applied with the absolute value and the correct sign of C.",
      "The distance is correct (d = 1), in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "GEA320",
    subjectName: "Geometría Analítica",
    subjectId: "pn-s3-geometria-analitica",
    unit: "Circunferencia",
    topic: "Ecuación general y centro-radio; posición de un punto respecto a la circunferencia",
    week: 8,
    taskId: "pn-gea320-w08-circle-position",
    taskTitle: "Convert Circle Forms And Test A Point's Position",
    scenario: "A lighthouse's range is drawn as a circle on the cartesian plot. As the closing task of the subject, the officer asks the cadet to convert between the circle's forms and decide whether given positions lie inside, on, or outside the range circle, using coordinate geometry.",
    instructions: [
      "For a circle with centre (3, 4) and radius 5, write the centre-radius form (x - 3)^2 + (y - 4)^2 = 25 and expand it to the general form x^2 + y^2 - 6x - 8y = 0.",
      "Recover the centre and radius from the general form by completing the square: (x^2 - 6x + 9) + (y^2 - 8y + 16) = 0 + 9 + 16, giving (x - 3)^2 + (y - 4)^2 = 25, so the centre is (-D/2, -E/2) = (3, 4) and the radius is 5 (watch the signs: D = -6 gives 3, E = -8 gives 4).",
      "Decide the position of each point by comparing its distance to the centre with the radius: Q1 = (6, 8) gives square root((6-3)^2 + (8-4)^2) = square root(25) = 5 = radius, so ON the circle; Q2 = (3, 7) gives square root(0 + 9) = 3 < 5, so INSIDE; Q3 = (9, 4) gives square root(36 + 0) = 6 > 5, so OUTSIDE.",
      "State each verdict with both numbers (distance and radius) shown. Report the forms and the verdicts with the working, in clear English."
    ],
    deliverable: "A coordinate-geometry note in English giving the centre-radius and general forms of the circle, the recovery of centre and radius by completing the square, and the inside/on/outside verdict for the three points with distances shown.",
    assessmentCriteria: [
      "The centre-radius form is expanded correctly to the general form (x^2 + y^2 - 6x - 8y = 0).",
      "The centre (3, 4) and radius 5 are correctly recovered by completing the square, with the signs handled correctly.",
      "Each point is correctly classified (Q1 ON = 5, Q2 INSIDE = 3, Q3 OUTSIDE = 6) with distance compared to radius.",
      "Both numbers are shown for each verdict, in correct English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "DIN321",
    subjectName: "Dinámica",
    subjectId: "pn-s3-dinamica",
    unit: "Cinemática de Partículas y Cuerpos Rígidos",
    topic: "Movimiento rectilíneo de partículas",
    week: 1,
    taskId: "pn-din321-w01-rectilinear-motion",
    taskTitle: "Describe A Vessel's Rectilinear Motion",
    scenario: "A vessel accelerates along a straight channel. The officer asks the cadet to describe its rectilinear motion using displacement, velocity, and acceleration.",
    instructions: [
      "Define displacement, velocity, and acceleration for the vessel.",
      "State the relationship between them in straight-line motion.",
      "Given a simple case, describe how the vessel's velocity changes under constant acceleration.",
      "Report your answer in clear English."
    ],
    deliverable: "A note in English describing a vessel's rectilinear motion in terms of displacement, velocity, and acceleration, with their relationship.",
    assessmentCriteria: [
      "The three quantities are defined correctly.",
      "Their relationship is stated correctly.",
      "The description of changing velocity is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "DIN321",
    subjectName: "Dinámica",
    subjectId: "pn-s3-dinamica",
    unit: "Leyes del Movimiento de Newton",
    topic: "Segunda ley de Newton",
    week: 2,
    taskId: "pn-din321-w02-newton-second-law",
    taskTitle: "Apply Newton's Second Law To A Vessel",
    scenario: "A tug applies a known force to a vessel of known mass. The officer asks the cadet to use Newton's second law to find the resulting acceleration.",
    instructions: [
      "State the force applied and the mass of the vessel.",
      "Apply Newton's second law (F = m·a) to find the acceleration.",
      "State the result with the correct unit.",
      "Explain why a larger vessel accelerates more slowly under the same force."
    ],
    deliverable: "A calculation note in English giving the vessel's acceleration using Newton's second law, with working shown and a short explanation.",
    assessmentCriteria: [
      "Newton's second law is applied correctly.",
      "The acceleration is calculated accurately with the correct unit.",
      "The explanation about mass is correct.",
      "The note is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "DIN321",
    subjectName: "Dinámica",
    subjectId: "pn-s3-dinamica",
    unit: "Cinética de Sistemas de Partículas",
    topic: "Trabajo y energía",
    week: 3,
    taskId: "pn-din321-w03-work-energy-vessel",
    taskTitle: "Apply Work And Energy To A Vessel",
    scenario: "The officer asks the cadet to explain, using work and energy, why a moving vessel needs a long distance to stop and what this means for safe navigation.",
    instructions: [
      "Define kinetic energy for the moving vessel.",
      "Explain how the vessel's kinetic energy must be removed to stop it.",
      "Explain why greater speed means a much greater stopping distance.",
      "Report your answer in clear English."
    ],
    deliverable: "A note in English using work and energy to explain why a moving vessel needs a long stopping distance, and the safe-navigation implication.",
    assessmentCriteria: [
      "Kinetic energy is correctly defined.",
      "The stopping reasoning is sound.",
      "The speed-distance relationship is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "DIN321",
    subjectName: "Dinámica",
    subjectId: "pn-s3-dinamica",
    unit: "Cinética de Sistemas de Partículas",
    topic: "Impulso y cantidad de movimiento de una partícula y un sistema de partículas",
    week: 4,
    taskId: "pn-din321-w04-momentum-berthing",
    taskTitle: "Apply Momentum To A Berthing Manoeuvre",
    scenario: "During berthing, a vessel makes contact with the fenders. The officer asks the cadet to explain, using impulse and momentum, why a slow approach speed is critical.",
    instructions: [
      "Define momentum for the approaching vessel.",
      "Explain how impulse relates the contact force to the change in momentum.",
      "Explain why a small increase in approach speed greatly increases the impact.",
      "Report your answer in clear English."
    ],
    deliverable: "A note in English using impulse and momentum to explain why a slow berthing approach is critical, with the reasoning shown.",
    assessmentCriteria: [
      "Momentum is correctly defined.",
      "The impulse-momentum relationship is correct.",
      "The reasoning about approach speed is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "DIN321",
    subjectName: "Dinámica",
    subjectId: "pn-s3-dinamica",
    unit: "Cinemática de Partículas y Cuerpos Rígidos",
    topic: "Movimiento uniformemente acelerado: ecuaciones cinemáticas y distancia de parada",
    week: 5,
    taskId: "pn-din321-w05-uniform-acceleration",
    taskTitle: "Apply The Kinematic Equations To A Crash Stop",
    scenario: "During a crash stop the vessel decelerates uniformly. The officer asks the cadet to apply the three equations of uniformly accelerated motion to find the speed and distance, and to cross-check the final speed by two independent equations.",
    instructions: [
      "State the three kinematic equations: v = v0 + a t; d = v0 t + (1/2) a t^2; and v^2 = v0^2 + 2 a d.",
      "For an initial speed v0 = 12 m/s and a uniform deceleration a = -0.5 m/s^2 over t = 8 s, find the final speed: v = 12 + (-0.5)(8) = 12 - 4 = 8 m/s.",
      "Find the distance run, writing the (1/2) a t^2 term separately: d = v0 t + (1/2) a t^2 = (12)(8) + (1/2)(-0.5)(8^2) = 96 + (-16) = 80 m.",
      "Cross-check the final speed with the third equation: v^2 = v0^2 + 2 a d = 12^2 + 2(-0.5)(80) = 144 - 80 = 64, so v = 8 m/s, matching the second step. Report the results with the working, in clear English."
    ],
    deliverable: "A kinematics note in English giving the final speed and stopping distance from the equations of uniformly accelerated motion, with the (1/2) a t^2 term shown and the final speed cross-checked by v^2 = v0^2 + 2 a d.",
    assessmentCriteria: [
      "The three kinematic equations are stated correctly.",
      "The final speed is correct (v = 12 - 4 = 8 m/s).",
      "The distance is correct (d = 96 - 16 = 80 m) with the (1/2) a t^2 term shown separately.",
      "The cross-check gives the same final speed (v^2 = 64, v = 8 m/s), in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "DIN321",
    subjectName: "Dinámica",
    subjectId: "pn-s3-dinamica",
    unit: "Cinemática de Partículas y Cuerpos Rígidos",
    topic: "Movimiento circular uniforme: velocidad angular y aceleración centrípeta",
    week: 6,
    taskId: "pn-din321-w06-circular-motion",
    taskTitle: "Relate Angular Speed And Centripetal Acceleration",
    scenario: "A point on rotating deck machinery, for example the arm of a radar antenna, moves in a uniform circle. The officer asks the cadet to relate its angular velocity, its linear speed and its centripetal acceleration.",
    instructions: [
      "State the relations: v = omega r; centripetal acceleration a = v^2 / r; and equivalently a = omega^2 r.",
      "For a point at radius r = 3 m turning at angular velocity omega = 2 rad/s, find the linear speed: v = omega r = 2 x 3 = 6 m/s.",
      "Find the centripetal acceleration, showing v^2 as an intermediate step: a = v^2 / r = (6^2) / 3 = 36 / 3 = 12 m/s^2.",
      "Cross-check with a = omega^2 r = (2^2)(3) = 4 x 3 = 12 m/s^2, confirming it matches v^2 / r. Report the results with the working, in clear English."
    ],
    deliverable: "A circular-motion note in English giving the linear speed and centripetal acceleration of the point, with v^2 shown as an intermediate step and the acceleration cross-checked by a = omega^2 r.",
    assessmentCriteria: [
      "The relations v = omega r, a = v^2 / r and a = omega^2 r are stated correctly.",
      "The linear speed is correct (v = 2 x 3 = 6 m/s).",
      "The centripetal acceleration is correct (a = 36 / 3 = 12 m/s^2) with v^2 shown.",
      "The cross-check a = omega^2 r = 12 m/s^2 matches, in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "DIN321",
    subjectName: "Dinámica",
    subjectId: "pn-s3-dinamica",
    unit: "Cinética de Sistemas de Partículas",
    topic: "Conservación de la energía mecánica (Ep + Ec = constante)",
    week: 7,
    taskId: "pn-din321-w07-energy-conservation",
    taskTitle: "Find Fall Speed By Conservation Of Energy",
    scenario: "A load is being lowered from a crane and, if released, would fall freely. The officer asks the cadet to use conservation of mechanical energy to find the speed after falling a given height.",
    instructions: [
      "State conservation of mechanical energy for the fall: the loss in potential energy equals the gain in kinetic energy, m g h = (1/2) m v^2.",
      "Cancel the mass, which appears on both sides, explicitly, giving v^2 = 2 g h and v = square root(2 g h).",
      "For g = 9.81 m/s^2 and a fall height h = 5.0 m, calculate v = square root(2 x 9.81 x 5.0) = square root(98.1) = 9.90 m/s (v^2 = 98.1 m^2/s^2).",
      "Verify in reverse with a mass m = 200 kg: the kinetic energy (1/2) m v^2 = (1/2)(200)(98.1) = 9810 J equals the potential energy m g h = (200)(9.81)(5.0) = 9810 J. Report the results with the working, in clear English."
    ],
    deliverable: "An energy-conservation note in English giving the fall speed from v = square root(2 g h) with the mass cancelled explicitly, and a reverse check that (1/2) m v^2 equals m g h for a stated mass.",
    assessmentCriteria: [
      "Conservation of energy is stated correctly (m g h = (1/2) m v^2).",
      "The mass is cancelled explicitly to give v = square root(2 g h).",
      "The speed is correct (v = square root(98.1) = 9.90 m/s).",
      "The reverse energy check balances (both 9810 J for m = 200 kg), in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "DIN321",
    subjectName: "Dinámica",
    subjectId: "pn-s3-dinamica",
    unit: "Cinética de Sistemas de Partículas",
    topic: "Conservación de la cantidad de movimiento: colisión plástica",
    week: 8,
    taskId: "pn-din321-w08-momentum-conservation",
    taskTitle: "Apply Momentum Conservation To A Plastic Collision",
    scenario: "Two vessels make contact and momentarily move together, a plastic (perfectly inelastic) collision. As the closing task of the subject, the officer asks the cadet to apply conservation of momentum with correct direction signs.",
    instructions: [
      "State conservation of momentum for a plastic collision: m1 v1 + m2 v2 = (m1 + m2) v', where the two bodies move together after contact.",
      "Take motion to the right as positive and assign signs: vessel 1, m1 = 3000 t at v1 = +4 m/s, and vessel 2 approaching from ahead, m2 = 1000 t at v2 = -4 m/s (opposite direction, so a negative sign).",
      "Compute the total momentum before with signs: m1 v1 + m2 v2 = (3000)(+4) + (1000)(-4) = 12000 - 4000 = 8000 t m/s, then v' = 8000 / (3000 + 1000) = 8000 / 4000 = +2 m/s.",
      "Verify the momentum after equals the momentum before: (m1 + m2) v' = (4000)(2) = 8000 t m/s, equal to the total before, and confirm the result is reasonable (v' = +2 m/s, in the direction of the greater momentum and smaller than the larger initial speed of 4 m/s). Report the results with the working, in clear English."
    ],
    deliverable: "A momentum-conservation note in English giving the common velocity after a plastic collision, with direction signs assigned, the total momentum before and after shown equal, and a reasonableness check on the result.",
    assessmentCriteria: [
      "Conservation of momentum for a plastic collision is stated correctly (m1 v1 + m2 v2 = (m1 + m2) v').",
      "Direction signs are assigned correctly (approaching vessel is negative).",
      "The common velocity is correct (v' = 8000 / 4000 = +2 m/s).",
      "The momentum before and after are shown equal (8000 t m/s) with a reasonableness check, in correct English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "ING317",
    subjectName: "Inglés Marítimo III",
    subjectId: "pn-s3-ingles-maritimo-iii",
    unit: "Presente perfecto",
    topic: "Aprende a construir el present perfect, usando have como auxiliar + verbos regulares e irregulares en pasado participio en afirmativo, negativo e interrogativo",
    week: 1,
    taskId: "pn-ing317-w01-present-perfect-handover",
    taskTitle: "Report Completed Work At Watch Handover",
    scenario: "At watch handover, you must report what has already been done during your watch. Using the present perfect, report the completed tasks to the relieving officer.",
    instructions: [
      "List two or three tasks completed during the watch.",
      "Report each using the present perfect (e.g. 'I have checked...').",
      "Distinguish what has been completed from what is still pending.",
      "Keep the handover clear and professional in English."
    ],
    deliverable: "A watch handover report in English using the present perfect to state completed tasks, distinguished from pending ones.",
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
    career: "PN",
    semester: "Semester III",
    subjectCode: "ING317",
    subjectName: "Inglés Marítimo III",
    subjectId: "pn-s3-ingles-maritimo-iii",
    unit: "Superlativos",
    topic: "Usa el superlativo de adjetivos para calificar sustantivos",
    week: 2,
    taskId: "pn-ing317-w02-superlatives-description",
    taskTitle: "Describe Vessel Features Using Superlatives",
    scenario: "You are comparing vessels in a fleet. The officer asks you to describe key features using superlatives (largest, deepest, fastest) so the comparison is clear.",
    instructions: [
      "Choose three features to compare across vessels (e.g. length, draught, speed).",
      "Describe each using the correct superlative form.",
      "Make sure the description is accurate and unambiguous.",
      "Report the comparison in clear maritime English."
    ],
    deliverable: "A short comparison in English describing vessel features using correct superlative forms.",
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
    career: "PN",
    semester: "Semester III",
    subjectCode: "ING317",
    subjectName: "Inglés Marítimo III",
    subjectId: "pn-s3-ingles-maritimo-iii",
    unit: "Futuro",
    topic: "Empleó de will,going to, el presente continuo y el presente simple, para hablar acerca del futuro",
    week: 3,
    taskId: "pn-ing317-w03-future-passage-plan",
    taskTitle: "State A Passage Plan Using Future Forms",
    scenario: "You must brief the next watch on the planned movements of the vessel. Using future forms (will, going to), state what the vessel is going to do over the coming hours.",
    instructions: [
      "State two or three planned movements or actions for the coming hours.",
      "Use future forms (will / going to) correctly for plans and intentions.",
      "Include an approximate time for each planned action.",
      "Keep the brief clear and professional in English."
    ],
    deliverable: "A short passage brief in English using future forms to state the vessel's planned actions over the coming hours, with times.",
    assessmentCriteria: [
      "Future forms are used correctly for plans.",
      "The planned actions are clear and realistic.",
      "Times are included appropriately.",
      "The brief reads professionally in English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "ING317",
    subjectName: "Inglés Marítimo III",
    subjectId: "pn-s3-ingles-maritimo-iii",
    unit: "Introducción: Inglés Marítimo",
    topic: "Comandos en situaciones de emergencia a bordo",
    week: 4,
    taskId: "pn-ing317-w04-emergency-commands",
    taskTitle: "Give Standard Emergency Commands On Board",
    scenario: "In an emergency, commands must be given clearly and in standard form so any crew member understands instantly. The officer asks you to give a set of standard emergency commands in English.",
    instructions: [
      "Choose an emergency scenario (e.g. fire, man overboard, abandon ship).",
      "Give the standard commands a crew member would shout or hear, in correct English.",
      "Keep each command short, clear, and unambiguous.",
      "Explain why standard wording matters in an emergency."
    ],
    deliverable: "A set of standard emergency commands in English for a chosen scenario, with a note on why standard wording matters.",
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
    career: "PN",
    semester: "Semester III",
    subjectCode: "ING317",
    subjectName: "Inglés Marítimo III",
    subjectId: "pn-s3-ingles-maritimo-iii",
    unit: "Voz pasiva",
    topic: "La voz pasiva en reportes y el cuaderno de bitácora (be + participio pasado)",
    week: 5,
    taskId: "pn-ing317-w05-passive-voice-reports",
    taskTitle: "Write Report Entries In The Passive Voice",
    scenario: "Writing up the logbook and a status report, you must use the passive voice, which is standard in maritime reports because the action or result matters more than who performed it. This builds on the present perfect from unit 1.",
    instructions: [
      "Form the passive as be + past participle, keeping the correct tense in the verb 'be': past simple passive ('the anchor was let go at 0620'), present perfect passive ('the cargo has been secured'), and a passive of expectation ('the vessel is expected to berth at 1400').",
      "Write three logbook or report entries in the passive, one in each of those forms, using real deck events.",
      "Explain when the passive is preferred (when the action or result matters more than who did it).",
      "Keep each entry factual, timed where appropriate, and in correct English."
    ],
    deliverable: "Three report or logbook entries in English written in the passive voice, one past simple, one present perfect and one of expectation, with a note on when the passive is preferred.",
    assessmentCriteria: [
      "Each entry is correctly formed as be + past participle with the right tense in 'be'.",
      "The three forms (was let go / has been secured / is expected to) are each used correctly.",
      "The choice of the passive is correctly justified.",
      "The entries are factual, timed where appropriate, and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "ING317",
    subjectName: "Inglés Marítimo III",
    subjectId: "pn-s3-ingles-maritimo-iii",
    unit: "Condicionales",
    topic: "Primer y segundo condicional en decisiones operativas y standing orders",
    week: 6,
    taskId: "pn-ing317-w06-conditionals-contingency",
    taskTitle: "Use First And Second Conditionals For Contingencies",
    scenario: "The Master's standing orders and contingency plans are written with conditionals: the first conditional for real, likely situations and the second conditional for hypothetical ones. You must write standing-order statements using both, without mixing them.",
    instructions: [
      "Form the first conditional as 'If + present simple, will + infinitive' for real and likely situations, for example 'If visibility decreases, we will reduce speed.'",
      "Form the second conditional as 'If + past simple, would + infinitive' for hypothetical situations, for example 'If the engine failed, we would anchor.' Never mix the two (do not write 'If it will...').",
      "Write two first conditionals for real contingencies and two second conditionals for hypothetical ones, as standing-order or contingency statements.",
      "Keep each statement operationally sensible and grammatically correct in English."
    ],
    deliverable: "Four contingency statements in English, two first conditionals for real situations and two second conditionals for hypothetical ones, each correctly formed.",
    assessmentCriteria: [
      "The first conditionals use 'If + present simple, will + infinitive' correctly.",
      "The second conditionals use 'If + past simple, would + infinitive' correctly.",
      "The two conditional types are not mixed (no 'If it will...').",
      "The statements are operationally sensible and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "ING317",
    subjectName: "Inglés Marítimo III",
    subjectId: "pn-s3-ingles-maritimo-iii",
    unit: "Estilo indirecto",
    topic: "Reported speech: retransmitir órdenes e información con backshift de tiempos",
    week: 7,
    taskId: "pn-ing317-w07-reported-speech-relay",
    taskTitle: "Relay Orders And Information In Reported Speech",
    scenario: "At watch handover and when logging VHF traffic received, direct messages must be relayed in reported speech, applying the backshift of tenses and the change of pronouns and time expressions.",
    instructions: [
      "Apply the backshift when reporting: will becomes would, is/are becomes was/were, can becomes could, present simple becomes past simple, and time words change (for example 'tomorrow' becomes 'the next day').",
      "Convert direct speech to reported speech, for example the Master said, 'The pilot will board at 0700', becomes 'The Master said that the pilot would board at 0700.'",
      "Report an order with an appropriate reporting verb, for example VTS said, 'Proceed to the anchorage', becomes 'VTS advised us to proceed to the anchorage.'",
      "Write three reported-speech sentences relaying orders or information received on watch, with correct backshift and pronoun and time changes, in correct English."
    ],
    deliverable: "Three reported-speech sentences in English relaying orders or information received on watch, each with correct backshift and pronoun and time changes.",
    assessmentCriteria: [
      "The backshift of tenses is applied correctly (will to would, is to was, can to could).",
      "Direct speech is correctly converted to reported speech with 'that'.",
      "An order is reported with an appropriate reporting verb (e.g. advised us to).",
      "Pronouns and time expressions are changed correctly, in correct English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "ING317",
    subjectName: "Inglés Marítimo III",
    subjectId: "pn-s3-ingles-maritimo-iii",
    unit: "Comunicación externa integrada",
    topic: "Intercambio completo de arribo: reporte de ETA, VTS y solicitud de práctico (SMCP)",
    week: 8,
    taskId: "pn-ing317-w08-arrival-communication-exchange",
    taskTitle: "Handle A Full Arrival Exchange With VTS And Pilot",
    scenario: "On approach to port, you must handle a complete arrival exchange as the closing task of the subject: report the ETA, communicate with VTS, and request a pilot, integrating the passive, conditionals and reported speech in real maritime English, following SMCP where it applies.",
    instructions: [
      "Report the vessel's ETA to the port using a passive or future form, for example 'the vessel is expected to arrive at the pilot station at 0700.'",
      "Call VTS in a multi-turn exchange, following SMCP where it applies: identify the vessel, give position and intentions, and request permission or instructions.",
      "Request a pilot and include a first conditional for a contingency, for example 'if the pilot cannot board at the pilot station, we will proceed to the anchorage.'",
      "Relay one instruction received from VTS in reported speech, for example 'VTS said that we should reduce speed and stand by on channel 12', and write the whole exchange as a short multi-turn script in correct English."
    ],
    deliverable: "A short multi-turn arrival script in English covering the ETA report, the VTS exchange and the pilot request, integrating the passive, a first conditional and reported speech, following SMCP where it applies.",
    assessmentCriteria: [
      "The ETA is reported using a correct passive or future form.",
      "The VTS exchange is a sensible multi-turn SMCP-style exchange (identity, position, intentions, request).",
      "A first conditional is correctly used for the pilot-boarding contingency.",
      "One VTS instruction is correctly relayed in reported speech, in correct English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "PMR322",
    subjectName: "Prácticas Marineras III",
    subjectId: "pn-s3-practicas-marineras-iii",
    unit: "Mantenimiento y Operación de Botes Salvavidas",
    topic: "Arranque y mantenimiento del motor del bote",
    week: 1,
    taskId: "pn-pmr322-w01-lifeboat-engine",
    taskTitle: "Describe Lifeboat Engine Start And Checks",
    scenario: "Before a survival craft drill, the bosun asks the cadet to describe how the lifeboat engine is started and what routine checks keep it ready for an emergency.",
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
    career: "PN",
    semester: "Semester III",
    subjectCode: "PMR322",
    subjectName: "Prácticas Marineras III",
    subjectId: "pn-s3-practicas-marineras-iii",
    unit: "Procedimientos para controlar vías de agua",
    topic: "Tipos de vías",
    week: 2,
    taskId: "pn-pmr322-w02-water-ingress",
    taskTitle: "Respond To A Hull Water Ingress",
    scenario: "Water is entering through a small hull breach. The officer asks the cadet to identify the type of ingress and the immediate steps to control it.",
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
    career: "PN",
    semester: "Semester III",
    subjectCode: "PMR322",
    subjectName: "Prácticas Marineras III",
    subjectId: "pn-s3-practicas-marineras-iii",
    unit: "Seguridad en áreas de trabajo",
    topic: "Utilización de equipo y herramientas adecuados",
    week: 3,
    taskId: "pn-pmr322-w03-work-area-safety",
    taskTitle: "Plan Safe Use Of Tools On Deck",
    scenario: "The cadet is assigned a deck maintenance task. The officer asks them to plan the safe use of tools and protective equipment for the job.",
    instructions: [
      "Describe the deck task and the tools required.",
      "State the personal protective equipment needed.",
      "Identify one hazard of the task and how to control it.",
      "Report the safety plan in clear maritime English."
    ],
    deliverable: "A short safety plan in English for a deck task, listing tools, protective equipment, and one hazard with its control.",
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
    career: "PN",
    semester: "Semester III",
    subjectCode: "PMR322",
    subjectName: "Prácticas Marineras III",
    subjectId: "pn-s3-practicas-marineras-iii",
    unit: "Manejo de pañoles",
    topic: "Elaboración de inventarios",
    week: 4,
    taskId: "pn-pmr322-w04-store-inventory",
    taskTitle: "Keep A Deck Store Inventory",
    scenario: "The cadet is responsible for a deck store. The officer asks them to explain how to keep an accurate inventory and why it matters for operations and safety.",
    instructions: [
      "Explain what information an inventory record should contain.",
      "Describe how items are checked in and out to keep the record accurate.",
      "Explain why an accurate store inventory matters operationally.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining how to keep an accurate deck store inventory and why it matters operationally.",
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
    career: "PN",
    semester: "Semester III",
    subjectCode: "PMR322",
    subjectName: "Prácticas Marineras III",
    subjectId: "pn-s3-practicas-marineras-iii",
    unit: "Aparejos y maniobras de fuerza",
    topic: "Motones, cuadernales y ventaja mecánica de un aparejo (blocks and tackles)",
    week: 5,
    taskId: "pn-pmr322-w05-blocks-and-tackles",
    taskTitle: "Work Out The Mechanical Advantage Of A Tackle",
    scenario: "The deck party must lift a heavy item with a block and tackle. The bosun asks the cadet to name the gear and work out the mechanical advantage, so the effort needed and the safe use of the tackle are understood.",
    instructions: [
      "Name the parts of the tackle: the blocks (the standing block and the moving block) with their sheaves, and the fall (the rope rove through them).",
      "State that the ideal mechanical advantage equals the number of rope parts that support the moving block, and that friction in the sheaves increases the real effort needed.",
      "For a tackle with 4 parts supporting the load, the mechanical advantage is 4, so a 100 kg load is lifted with an ideal effort of 100 / 4 = 25 kg; verify with effort x mechanical advantage = 25 x 4 = 100 kg.",
      "State one safe-use rule for working with tackles on board (for example do not exceed the safe working load, keep hands clear of the blocks). Report your answer in clear maritime English."
    ],
    deliverable: "A note in English naming the parts of a tackle, stating the mechanical advantage rule, working out the 4-part example (100 kg lifted with 25 kg of effort) with the check, and giving one safe-use rule.",
    assessmentCriteria: [
      "The parts of the tackle (blocks, sheaves, fall) are correctly named.",
      "The mechanical advantage rule is correct (number of parts supporting the moving block), with friction noted.",
      "The calculation is correct (100 / 4 = 25 kg) and verified (25 x 4 = 100 kg).",
      "One sound safe-use rule is given, in correct maritime English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "PMR322",
    subjectName: "Prácticas Marineras III",
    subjectId: "pn-s3-practicas-marineras-iii",
    unit: "Operaciones de remolque",
    topic: "Equipo, conexión y largado seguro; catenaria y zonas de latigazo (snap-back)",
    week: 6,
    taskId: "pn-pmr322-w06-towing-operations",
    taskTitle: "Rig A Tow Safely And Control Snap-Back",
    scenario: "The vessel must rig for a towing operation. The officer asks the cadet to describe the towing gear, the safe connection and release, and above all the deadly snap-back danger on deck.",
    instructions: [
      "Name the towing gear: the tow line (rope or wire), the strengthened bitts or towing bracket, and the shackles that connect them.",
      "Describe the safe connection and the safe release of the tow, and the role of the catenary (the sag in the tow line that absorbs shock loads).",
      "Describe the snap-back danger: a line under tension that parts whips back violently along its line of pull; identify the snap-back zones and state that no one must ever stand in the line of pull or in the bight of the rope.",
      "State one further measure to keep the deck party safe during the tow. Report your answer in clear maritime English."
    ],
    deliverable: "A note in English naming the towing gear, describing safe connection and release with the catenary's role, explaining the snap-back danger and its zones, and giving one further safety measure.",
    assessmentCriteria: [
      "The towing gear (tow line, strengthened bitts, shackles) is correctly named.",
      "Safe connection and release are described, including the catenary's shock-absorbing role.",
      "The snap-back danger is correctly and seriously described, with the rule never to stand in the line of pull or the bight.",
      "One sound further safety measure is given, in correct maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "PMR322",
    subjectName: "Prácticas Marineras III",
    subjectId: "pn-s3-practicas-marineras-iii",
    unit: "Marinería en mal tiempo",
    topic: "Trincado y aseguramiento en cubierta, andariveles (lifelines) y tránsito seguro con mar gruesa",
    week: 7,
    taskId: "pn-pmr322-w07-heavy-weather-seamanship",
    taskTitle: "Prepare The Deck For Heavy Weather",
    scenario: "Heavy weather is forecast. The officer asks the cadet to prepare the deck: lash and secure equipment, rig lifelines, and set out how to move safely once the sea is rough.",
    instructions: [
      "Describe how loose deck equipment and stores are lashed down and secured before the weather arrives.",
      "Explain the rigging and use of lifelines for safe movement across an exposed deck.",
      "State the rules for safe transit on deck in a rough sea (for example one hand for the ship, timing movement with the roll, avoiding the weather side).",
      "List two further actions to prepare the vessel before the storm. Report your answer in clear maritime English."
    ],
    deliverable: "A note in English describing the lashing and securing of deck equipment, the rigging and use of lifelines, the rules for safe transit in a rough sea, and two further pre-storm actions.",
    assessmentCriteria: [
      "The lashing and securing of deck equipment is correctly described.",
      "The rigging and use of lifelines is correct.",
      "The safe-transit rules for a rough sea are sound.",
      "Two further sensible pre-storm actions are given, in correct maritime English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "PMR322",
    subjectName: "Prácticas Marineras III",
    subjectId: "pn-s3-practicas-marineras-iii",
    unit: "Hombre al agua y embarcación de rescate",
    topic: "Acciones inmediatas, maniobra de Williamson a nivel de faena de cubierta y arriado de la embarcación de rescate",
    week: 8,
    taskId: "pn-pmr322-w08-man-overboard-rescue-boat",
    taskTitle: "Act On A Man Overboard And Launch The Rescue Boat",
    scenario: "A man overboard is called on deck. As the closing task of the subject, the officer asks the cadet to set out the immediate deck actions, the deck party's role while the Williamson turn is carried out, and the launching of the rescue boat, all from the deck-work side rather than the bridge manoeuvre.",
    instructions: [
      "State the immediate actions on deck: throw a lifebuoy (with light and smoke) to the casualty, mark the position, and post a dedicated lookout who points continuously at the person in the water.",
      "Explain the deck party's role while the bridge carries out the Williamson turn to bring the vessel back to the casualty, keeping to the deck role and not the bridge manoeuvre itself.",
      "Describe the safe preparation and lowering (launching) of the rescue boat and its crew.",
      "State one consideration for recovering the casualty back on board. Report your answer in clear maritime English."
    ],
    deliverable: "A note in English giving the immediate deck actions for a man overboard, the deck party's role during the Williamson turn, the safe launching of the rescue boat, and one recovery consideration.",
    assessmentCriteria: [
      "The immediate deck actions (lifebuoy, mark position, continuous lookout) are correct.",
      "The deck party's role during the Williamson turn is correct and stays on the deck side.",
      "The safe launching of the rescue boat is correctly described.",
      "One sound recovery consideration is given, in correct maritime English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "pn-s3-educacion-fisica-iii",
    unit: "Condición física",
    topic: "Resistencia cardiorespiratoria",
    week: 1,
    taskId: "pn-c0011iii-w01-endurance-demands",
    taskTitle: "Explain Endurance Demands Of Long Watches",
    scenario: "Long watches and sustained operations demand cardiorespiratory endurance. The training officer asks the cadet to explain why endurance matters for a deck officer and how it is built.",
    instructions: [
      "Define cardiorespiratory endurance in your own words.",
      "Give two shipboard situations where endurance is essential.",
      "Describe one way endurance is trained and maintained.",
      "Report your answer in clear English using correct fitness terminology."
    ],
    deliverable: "A note in English defining cardiorespiratory endurance, two shipboard situations needing it, and how it is trained.",
    assessmentCriteria: [
      "Endurance is correctly defined.",
      "The shipboard situations are relevant.",
      "The training method is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "pn-s3-educacion-fisica-iii",
    unit: "Percepción y coordinación motriz",
    topic: "Coordinación motriz y psicomotriz",
    week: 2,
    taskId: "pn-c0011iii-w02-coordination-tasks",
    taskTitle: "Link Coordination To Precise Deck Tasks",
    scenario: "Many deck tasks demand fine and gross motor coordination. The officer asks the cadet to connect coordination to specific tasks and explain the risk when it is lacking.",
    instructions: [
      "Name two deck tasks that require good motor coordination.",
      "Explain the difference between fine and gross motor coordination with an example.",
      "State the risk if coordination fails during one of those tasks.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English linking motor coordination to two deck tasks, with the fine/gross distinction and the risk of poor coordination.",
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
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "pn-s3-educacion-fisica-iii",
    unit: "Natación",
    topic: "Sobrevivencia",
    week: 3,
    taskId: "pn-c0011iii-w03-survival-swimming",
    taskTitle: "Describe Survival Swimming Skills",
    scenario: "Survival in the water is a core competency. The instructor asks the cadet to describe the survival swimming skills needed if a crew member ends up in the sea.",
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
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "pn-s3-educacion-fisica-iii",
    unit: "Concentración",
    topic: "Juegos de concentración",
    week: 4,
    taskId: "pn-c0011iii-w04-focus-precision",
    taskTitle: "Connect Concentration To Precise Operations",
    scenario: "Precise operations like plotting or steering demand sustained focus. The officer asks the cadet to explain how concentration is trained and why losing it is dangerous on the bridge.",
    instructions: [
      "Explain why sustained concentration matters in precise bridge operations.",
      "Describe one method used to train and sustain concentration.",
      "State the danger of a lapse in concentration during steering or plotting.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining why concentration matters in precise bridge work, how it is trained, and the danger of a lapse.",
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
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "pn-s3-educacion-fisica-iii",
    unit: "Nutrición e hidratación",
    topic: "Alimentación e hidratación para el rendimiento y la resistencia en la guardia",
    week: 5,
    taskId: "pn-c0011iii-w05-nutrition-hydration",
    taskTitle: "Fuel And Hydration For Watch Performance",
    scenario: "A watchkeeper needs steady energy and good hydration to stay sharp through a long watch, especially in heat, sun or on the bridge. The training officer asks the cadet to explain positive nutrition and hydration habits for work on board, as general principles that support the capacity to do the job.",
    instructions: [
      "Explain regular hydration through the watch: drinking water steadily, drinking more in heat, sun or a hot engine space, and that thirst is a late signal.",
      "Explain balanced meals timed around the watch schedule, so that energy is available when on duty and eating something before a long or night watch helps.",
      "Explain steady, sustained energy versus sugar spikes and the slump that follows, favouring balanced meals that release energy slowly.",
      "Explain the effect of coffee and energy drinks near rest periods (caffeine can delay sleep) and using them earlier in the watch rather than close to rest. Keep all advice as general positive habits: do NOT count calories, do NOT set body-weight targets, do NOT recommend restrictive diets, and do NOT label any food as forbidden. Report your answer in clear maritime English."
    ],
    deliverable: "A note in English on positive nutrition and hydration habits for watch performance (regular hydration, meal timing, steady energy versus sugar spikes, caffeine and rest), framed as general principles with no calorie counting, weight targets, restrictive diets or forbidden foods.",
    assessmentCriteria: [
      "Regular hydration through the watch is correctly explained, including drinking more in heat and thirst as a late signal.",
      "Meal timing around the watch and steady energy versus sugar spikes are correctly explained.",
      "The effect of caffeine near rest is correctly explained.",
      "The advice stays as general positive habits, with no calorie counting, weight targets, restrictive diets or forbidden foods, in correct maritime English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "pn-s3-educacion-fisica-iii",
    unit: "Deportes de conjunto y cohesión de equipo",
    topic: "El deporte de equipo como entrenamiento de coordinación, comunicación y confianza; juego limpio",
    week: 6,
    taskId: "pn-c0011iii-w06-team-sport-cohesion",
    taskTitle: "Build Team Cohesion Through Sport",
    scenario: "Team sports build the same coordination, communication and trust that a fire party or a deck gang needs. The training officer asks the cadet to connect team sport to teamwork on board and to the character shown in winning and losing.",
    instructions: [
      "Explain how a team sport trains coordination, communication and mutual trust, and how these are the same dynamics as a fire party or a deck working party.",
      "Give one example linking a team-sport situation to a shipboard team task.",
      "Explain fair play and how handling winning and losing well builds character and composure.",
      "State why the cohesion built in sport transfers to safer, smoother teamwork on board. Report your answer in clear maritime English."
    ],
    deliverable: "A note in English connecting team sport to shipboard teamwork: how it trains coordination, communication and trust, an example linked to a ship task, fair play and character, and why cohesion transfers on board.",
    assessmentCriteria: [
      "The link between team sport and coordination, communication and trust is correct.",
      "The example connects a sport situation to a shipboard team task.",
      "Fair play and handling winning and losing are correctly linked to character.",
      "The transfer of cohesion to safer teamwork on board is sound, in correct maritime English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "pn-s3-educacion-fisica-iii",
    unit: "Ergonomía de la guardia",
    topic: "Postura estática en guardia, micro-pausas y estiramientos; prevención de lesiones lumbares y de cuello",
    week: 7,
    taskId: "pn-c0011iii-w07-watch-ergonomics",
    taskTitle: "Protect Posture During Long Watches",
    scenario: "Long watches are spent standing on the bridge or sitting at the chart table, and poor static posture strains the lower back and neck. The training officer asks the cadet to set out good working posture and simple relief during the watch.",
    instructions: [
      "Describe good static working posture for a long watch: standing balanced on the bridge and sitting well supported at the chart table, with the back, neck and the chart or screen at good angles.",
      "Explain micro-breaks and simple stretches taken during the watch to relieve the lower back, neck and shoulders without leaving the task.",
      "Explain how good posture and these breaks prevent lower-back and neck strain over long watches.",
      "State the boundary of this topic clearly: this is the body in the WORKING POSTURE, not safe lifting technique (covered in Semester I manual handling) and not sleep physiology (covered in Semester I fatigue and rest). Report your answer in clear maritime English."
    ],
    deliverable: "A note in English on good static working posture for long watches, micro-breaks and stretches, and how they prevent lower-back and neck strain, with the explicit boundary that this is working posture (not lifting technique nor sleep physiology).",
    assessmentCriteria: [
      "Good static working posture for standing and sitting watches is correctly described.",
      "Micro-breaks and simple stretches during the watch are correctly explained.",
      "The link to preventing lower-back and neck strain is sound.",
      "The boundary is stated (working posture, not lifting technique or sleep physiology), in correct maritime English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "pn-s3-educacion-fisica-iii",
    unit: "Autoevaluación funcional y plan personal",
    topic: "Pruebas funcionales sencillas, interpretación por capacidad para el trabajo a bordo y plan personal sostenible",
    week: 8,
    taskId: "pn-c0011iii-w08-functional-self-assessment",
    taskTitle: "Assess Your Fitness For Work And Plan Sustainably",
    scenario: "As the closing task of the subject, the cadet must judge their own functional fitness for shipboard work and set a sustainable personal plan. The training officer asks the cadet to use simple functional tests and interpret them by capacity for the work, not by looks or records.",
    instructions: [
      "Choose simple functional tests for endurance, strength and mobility (for example how long a task can be sustained, a basic strength check, and a reach or mobility check) suitable for self-assessment on board.",
      "Interpret the results by the standard of CAPACITY FOR SHIPBOARD WORK, that is whether deck and emergency tasks can be carried out safely, not by appearance, body weight or athletic records.",
      "Build a simple, sustainable personal plan that fits ship life and improves the weaker areas, drawing on the earlier weeks (endurance, coordination, nutrition and hydration, and posture).",
      "State explicitly that the plan sets NO extreme targets: no crash programmes and no extreme goals, only steady, safe, sustainable improvement in the capacity to work. Report your answer in clear maritime English."
    ],
    deliverable: "A note in English giving simple functional tests for endurance, strength and mobility, their interpretation by capacity for shipboard work, and a sustainable personal plan with no extreme targets that draws on the earlier weeks.",
    assessmentCriteria: [
      "The functional tests for endurance, strength and mobility are simple and suitable for self-assessment on board.",
      "The results are interpreted by capacity for shipboard work, not appearance, weight or records.",
      "The personal plan is simple, sustainable and integrates earlier weeks.",
      "The plan explicitly sets no extreme targets, only steady safe improvement, in correct maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0038",
    subjectName: "Técnicas Avanzadas de Lucha Contra Incendio",
    subjectId: "pn-s3-tecnicas-avanzadas-lucha-contra-incendio",
    unit: "Control de la Operaciones de Lucha Contra Incendio a bordo del Buque",
    topic: "Tácticas y procedimientos para lucha contra incendios cuando el buque está en el mar",
    week: 1,
    taskId: "pn-c0038-w01-firefighting-tactics",
    taskTitle: "Outline Firefighting Tactics At Sea",
    scenario: "A fire breaks out while the vessel is at sea, with no outside help available. The officer asks the cadet to outline the basic tactics for fighting a fire on board.",
    instructions: [
      "State the first actions on discovering a fire (raise alarm, etc.).",
      "Outline the basic tactic to contain and attack the fire.",
      "Explain why fighting fire at sea differs from ashore (no outside help).",
      "Report the tactics in clear maritime English."
    ],
    deliverable: "A note in English outlining firefighting tactics at sea: first actions, containment/attack, and why self-reliance is critical.",
    assessmentCriteria: [
      "The first actions are correct and in order.",
      "The containment/attack tactic is sound.",
      "The self-reliance reasoning is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0038",
    subjectName: "Técnicas Avanzadas de Lucha Contra Incendio",
    subjectId: "pn-s3-tecnicas-avanzadas-lucha-contra-incendio",
    unit: "Organizar y formar cuadrillas de lucha contra incendios",
    topic: "Formación y asignación del personal a las cuadrillas de lucha contra incendios",
    week: 2,
    taskId: "pn-c0038-w02-fire-teams",
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
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0038",
    subjectName: "Técnicas Avanzadas de Lucha Contra Incendio",
    subjectId: "pn-s3-tecnicas-avanzadas-lucha-contra-incendio",
    unit: "Inspeccionar los servicios de los sistemas y equipos de detección y extinción de incendios",
    topic: "Equipo de detección de incendios",
    week: 3,
    taskId: "pn-c0038-w03-detection-equipment",
    taskTitle: "Inspect Fire Detection Equipment",
    scenario: "The cadet is asked to inspect the fire detection equipment. The officer asks them to explain what to check and why detection systems must be kept reliable.",
    instructions: [
      "Name two types of fire detection equipment on board.",
      "State what to check to confirm each is working.",
      "Explain why early detection is critical to fighting a fire.",
      "Report the inspection in clear maritime English."
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
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0038",
    subjectName: "Técnicas Avanzadas de Lucha Contra Incendio",
    subjectId: "pn-s3-tecnicas-avanzadas-lucha-contra-incendio",
    unit: "Control de la Operaciones de Lucha Contra Incendio a bordo del Buque",
    topic: "Procedimientos para coordinar la lucha contra incendios con los bomberos en tierra",
    week: 4,
    taskId: "pn-c0038-w04-shore-coordination",
    taskTitle: "Coordinate With Shore Fire Brigades",
    scenario: "The vessel is in port and a fire requires shore fire brigade support. The officer asks the cadet to explain how the ship coordinates with shore firefighters.",
    instructions: [
      "State what information the ship must give the shore brigade on arrival.",
      "Explain who on board liaises with the shore firefighters.",
      "Explain why coordination and clear communication are critical.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining how a ship coordinates with shore fire brigades: information to provide, who liaises, and why clear communication matters.",
    assessmentCriteria: [
      "The information to provide is appropriate.",
      "The liaison role is correct.",
      "The coordination reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0038",
    subjectName: "Técnicas Avanzadas de Lucha Contra Incendio",
    subjectId: "pn-s3-tecnicas-avanzadas-lucha-contra-incendio",
    unit: "Mando y organización del sistema contra incendios",
    topic: "Cuadro de obligaciones (muster list), cadena de mando, punto de reunión y control de entrada (entry control)",
    week: 5,
    taskId: "pn-c0038-w05-command-muster-organisation",
    taskTitle: "Set Up The Command System For A Fire Response",
    scenario: "A fire is reported and, above the individual team, a command system must run the whole response. The officer asks the cadet to set out how the fire response is commanded and organised, the muster list, the chain of command, the assembly point, entry control and brigade communications, rather than naming the team roles, which is already covered.",
    instructions: [
      "Explain how the muster list (station bill) assigns each crew member to a fire-response station and duty, and how the crew musters to it when the alarm sounds.",
      "Set out the chain of command for the response: the on-scene commander leading the attack, reporting to and taking direction from the bridge or fire control (incident command).",
      "Explain the assembly (muster) point and entry control for personnel accountability: logging who enters the fire zone and when, so that no one is ever unaccounted for.",
      "State how the brigade maintains communications between the on-scene commander, the entry control point and the bridge. Report your answer in clear maritime English."
    ],
    deliverable: "A note in English setting out the fire-response command system: the muster list, the chain of command (on-scene commander and bridge), the assembly point and entry control for accountability, and brigade communications.",
    assessmentCriteria: [
      "The muster list (station bill) and mustering are correctly explained.",
      "The chain of command (on-scene commander reporting to bridge / fire control) is correct.",
      "The assembly point and entry control for personnel accountability are correctly explained.",
      "The brigade communications are sound, in correct maritime English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0038",
    subjectName: "Técnicas Avanzadas de Lucha Contra Incendio",
    subjectId: "pn-s3-tecnicas-avanzadas-lucha-contra-incendio",
    unit: "Equipo de respiración autónoma y búsqueda en humo",
    topic: "Colocación y chequeos del SCBA, gestión del aire y control de BA, y patrones de búsqueda en humo",
    week: 6,
    taskId: "pn-c0038-w06-scba-smoke-search",
    taskTitle: "Manage Air And Search In Smoke Using SCBA",
    scenario: "A team must enter a smoke-logged space wearing self-contained breathing apparatus (SCBA). The officer asks the cadet to set out the donning and pre-use checks, the air management that keeps the team alive, the BA control board, and the smoke search pattern.",
    instructions: [
      "Describe donning the SCBA and the pre-use checks: cylinder pressure full, mask and face-seal test, the low-pressure warning whistle, and the function of the demand valve.",
      "Explain air management as a life-or-death discipline: note the entry pressure, work out the time to withdraw, and turn back BEFORE the reserve (low-pressure) warning, not after, remembering the way out takes as long as the way in.",
      "Explain the BA control board (entry control): the controller logs each wearer's name, entry time and cylinder pressure and monitors the time to withdraw, so the team is turned around in good time.",
      "Describe the smoke search: keeping one hand on the bulkhead (left-hand or right-hand search), working in pairs, and using a lifeline or guideline for orientation and retreat. Report your answer in clear maritime English."
    ],
    deliverable: "A note in English covering the SCBA donning and pre-use checks, the air-management discipline (turn back before the reserve warning), the BA control board, and the smoke search pattern with lifeline and pairs.",
    assessmentCriteria: [
      "The SCBA donning and pre-use checks are correct.",
      "Air management is correct, including turning back BEFORE the reserve warning and the way-out time.",
      "The BA control board (entry control, air/time monitoring) is correctly explained.",
      "The smoke search (hand on bulkhead, pairs, lifeline) is correct, in correct maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0038",
    subjectName: "Técnicas Avanzadas de Lucha Contra Incendio",
    subjectId: "pn-s3-tecnicas-avanzadas-lucha-contra-incendio",
    unit: "Sistemas fijos de extinción y enfriamiento de límites",
    topic: "CO2 de inundación total y su protocolo de seguridad, espuma y water mist; boundary cooling",
    week: 7,
    taskId: "pn-c0038-w07-fixed-systems-co2-protocol",
    taskTitle: "Operate Fixed Systems And The CO2 Safety Protocol",
    scenario: "The machinery space must be flooded with the fixed CO2 total-flooding system while boundary cooling protects the surrounding structure. Because total-flooding CO2 is lethal to anyone left inside, the officer asks the cadet to state the fixed systems and, above all, the exact CO2 discharge protocol in the correct order.",
    instructions: [
      "Name the main fixed systems and their use: total-flooding CO2 for machinery spaces, foam for oil and flammable-liquid fires, and sprinklers or water mist for accommodation and general spaces.",
      "State the CO2 total-flooding protocol in the correct, non-negotiable order: (1) evacuate the space and COUNT the personnel, confirming no one remains inside; (2) close the space, stopping ventilation and shutting dampers, doors and openings; (3) sound the CO2 discharge alarm; (4) only then release the CO2; (5) do NOT re-open or enter until the space is confirmed cool and has been ventilated and its atmosphere tested.",
      "Explain why the head-count before discharge is critical (total-flooding CO2 is lethal to anyone left inside) and why the space must stay closed until verified (re-opening admits air, which can re-ignite the fire, and the atmosphere is not breathable).",
      "Explain boundary cooling: cooling the bulkheads, decks and boundaries adjacent to the fire space with water to stop the fire spreading by conduction and to protect the surrounding structure. Report your answer in clear maritime English."
    ],
    deliverable: "A note in English naming the fixed systems, stating the CO2 total-flooding protocol in the correct order (evacuate and count, close, alarm, discharge, no premature re-entry), explaining why the head-count and closure are critical, and describing boundary cooling.",
    assessmentCriteria: [
      "The fixed systems (CO2, foam, sprinklers/water mist) and their uses are correct.",
      "The CO2 protocol is in the correct, complete order: evacuate and count personnel, close the space, sound the alarm, discharge, and no re-entry until confirmed cool, ventilated and tested.",
      "The reasons (lethal to anyone inside; closed space prevents re-ignition and is not breathable) are correct.",
      "Boundary cooling of adjacent bulkheads and decks is correctly explained, in correct maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0038",
    subjectName: "Técnicas Avanzadas de Lucha Contra Incendio",
    subjectId: "pn-s3-tecnicas-avanzadas-lucha-contra-incendio",
    unit: "Mando y control del escenario de incendio",
    topic: "Ataque integrado: localizar y evaluar, aislar, atacar, enfriar límites y guardia de reignición (reflash watch)",
    week: 8,
    taskId: "pn-c0038-w08-fire-scene-command",
    taskTitle: "Command An Integrated Attack On A Ship Fire",
    scenario: "As the closing task of the subject, a developed fire must be fought under command. The officer asks the cadet to run the complete integrated attack, locate and assess, isolate, attack, boundary cool, and set the reflash watch, drawing on the command system, SCBA teams and fixed systems from the previous weeks.",
    instructions: [
      "Locate and assess the fire: find its seat and extent, identify what is burning and the risks, and decide the plan under the on-scene commander and bridge command.",
      "Isolate the fire: stop ventilation to the space, isolate electrical power, and shut off fuel and any flammable supplies feeding it.",
      "Attack the fire with SCBA teams under entry control (air discipline as in week 6) and/or the appropriate fixed system (CO2 protocol as in week 7), while boundary cooling the adjacent bulkheads and decks.",
      "Set the reflash (re-ignition) watch as a MANDATORY step: after the fire is out, a watch must remain to monitor the space and its boundaries for re-ignition, and the space is not returned to normal use until confirmed cool and safe. Report your answer in clear maritime English."
    ],
    deliverable: "A note in English running the integrated fire attack under command: locate and assess, isolate (ventilation, electrical, fuel), attack with SCBA teams and/or fixed systems while boundary cooling, and set the mandatory reflash watch.",
    assessmentCriteria: [
      "Locate and assess is correct (seat, extent, risks, plan under command).",
      "Isolation is complete (ventilation, electrical power, fuel/flammable supplies).",
      "The attack correctly integrates SCBA entry control and/or the fixed-system protocol with boundary cooling.",
      "The reflash watch is set as a mandatory step, with the space not returned to use until confirmed safe, in correct maritime English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0101",
    subjectName: "Redacción Avanzada",
    subjectId: "pn-s3-redaccion-avanzada",
    unit: "Características básicas de la redacción",
    topic: "Organización de las ideas para ordenarlas en forma lógica",
    week: 1,
    taskId: "pn-c0101-w01-organise-ideas",
    taskTitle: "Organise Ideas In A Logbook Entry",
    scenario: "A logbook entry must record events in a clear, logical order. The officer asks the cadet to write an entry that organises the events so anyone reading it understands what happened.",
    instructions: [
      "List the events to record in the logbook entry.",
      "Order them logically (chronological or by importance).",
      "Write the entry so the sequence is clear to any reader.",
      "Keep the language precise, in clear English."
    ],
    deliverable: "A logbook entry in English that records events in a clear, logical order, understandable to any reader.",
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
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0101",
    subjectName: "Redacción Avanzada",
    subjectId: "pn-s3-redaccion-avanzada",
    unit: "Claridad en la oración",
    topic: "Evitar frases ambiguas",
    week: 2,
    taskId: "pn-c0101-w02-avoid-ambiguity",
    taskTitle: "Remove Ambiguity From A Report",
    scenario: "An ambiguous sentence in a report could be dangerously misread. The officer asks the cadet to rewrite unclear sentences so there is only one possible meaning.",
    instructions: [
      "Take an ambiguous or unclear sentence about a shipboard situation.",
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
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0101",
    subjectName: "Redacción Avanzada",
    subjectId: "pn-s3-redaccion-avanzada",
    unit: "Atributos de los párrafos",
    topic: "Unidad entre la idea principal y las secundarias",
    week: 3,
    taskId: "pn-c0101-w03-paragraph-unity",
    taskTitle: "Write A Unified Report Paragraph",
    scenario: "A report paragraph should develop one main idea with supporting detail. The officer asks the cadet to write a paragraph where every sentence supports a single main idea.",
    instructions: [
      "State the main idea of the paragraph.",
      "Write supporting sentences that all relate to that main idea.",
      "Remove or avoid any sentence that does not belong.",
      "Keep the paragraph clear and in correct English."
    ],
    deliverable: "A unified report paragraph in English with a clear main idea and supporting sentences that all relate to it.",
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
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0101",
    subjectName: "Redacción Avanzada",
    subjectId: "pn-s3-redaccion-avanzada",
    unit: "Orden de Palabras e Ideas",
    topic: "Jerarquización de las ideas",
    week: 4,
    taskId: "pn-c0101-w04-prioritise-ideas",
    taskTitle: "Prioritise Information In An Incident Report",
    scenario: "An incident report must put the most important information first so a busy reader grasps it immediately. The officer asks the cadet to structure a report by priority.",
    instructions: [
      "Identify the most critical fact of the incident.",
      "Place it first, then arrange the rest by decreasing importance.",
      "Ensure a reader who stops after one line still gets the key point.",
      "Write the report in clear English."
    ],
    deliverable: "An incident report in English structured by priority, with the most critical information first and the rest in decreasing importance.",
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
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0101",
    subjectName: "Redacción Avanzada",
    subjectId: "pn-s3-redaccion-avanzada",
    unit: "El reporte formal de incidente",
    topic: "Reporte de incidente y near-miss: hecho vs opinión, lenguaje objetivo y valor probatorio",
    week: 5,
    taskId: "pn-c0101-w05-objective-incident-report",
    taskTitle: "Write An Objective Incident / Near-Miss Report",
    scenario: "An incident, or a near-miss, must be reported in writing. Because the report may later be read by a maritime tribunal or the insurer, it must record the facts objectively. The officer asks the cadet to write it, keeping strictly to fact and out of opinion.",
    instructions: [
      "Structure the report with the facts in chronological order, recording what happened, when and where, in objective and precise language.",
      "Separate fact from opinion strictly: record observable facts (for example 'the container was found damaged at 0800') and leave out opinion or blame (for example 'the stevedores were careless'), and explain why the opinion must not appear in the report.",
      "Include a near-miss: report an event that caused no damage or injury but could have, so the hazard is on record and can be acted on.",
      "Note that this report is about objectivity, filtering fact from opinion, not about prioritising by importance (which was week 4), and explain why its evidential value before a tribunal or insurer depends on staying factual. Report in clear written English."
    ],
    deliverable: "An incident or near-miss report in English with facts in chronological order, a strict separation of fact from opinion (with the container/stevedores example), and a note on why objectivity gives the report its evidential value.",
    assessmentCriteria: [
      "The facts are recorded in chronological order in objective, precise language.",
      "Fact is strictly separated from opinion, with the correct example (fact 'container found damaged at 0800' kept, opinion 'stevedores were careless' excluded).",
      "A near-miss is correctly reported as an event that could have caused harm.",
      "The evidential value of objectivity (tribunal / insurer) is correctly explained, distinct from week 4's prioritisation, in correct written English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0101",
    subjectName: "Redacción Avanzada",
    subjectId: "pn-s3-redaccion-avanzada",
    unit: "Correspondencia comercial marítima",
    topic: "Carta de protesta (Letter of Protest / Note of Protest): cuándo se emite, estructura y registro formal",
    week: 6,
    taskId: "pn-c0101-w06-letter-of-protest",
    taskTitle: "Draft A Letter Of Protest",
    scenario: "A dispute arises, cargo damage, delay, a discrepancy or heavy weather, that the vessel must formally record. The officer asks the cadet to draft a Letter of Protest that states the ship's position firmly but professionally.",
    instructions: [
      "State when a Letter of Protest (or Note of Protest) is issued, for example cargo damage, delays, quantity or quality discrepancies, or heavy weather that may have affected the cargo.",
      "Structure the letter formally: sender, addressee, date, vessel and port, a clear statement of the facts protested, and the formal reservation of the ship's rights.",
      "Keep the tone firm and professional, without hostility or accusation, and use formal register (contrast with the informal register of routine ship-shore messages).",
      "State what the ship keeps for its records and why a timely protest matters. Report in clear written English."
    ],
    deliverable: "A Letter of Protest in English with the correct formal structure, a clear factual statement of what is protested, the reservation of the ship's rights, and a firm professional tone in formal register.",
    assessmentCriteria: [
      "The circumstances for issuing a Letter / Note of Protest are correct.",
      "The formal structure is complete (sender, addressee, date, vessel/port, facts, reservation of rights).",
      "The tone is firm and professional without hostility, in formal register.",
      "The record-keeping and timeliness are correctly explained, in correct written English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0101",
    subjectName: "Redacción Avanzada",
    subjectId: "pn-s3-redaccion-avanzada",
    unit: "Documentación operativa",
    topic: "Standing orders y night orders del capitán: redacción accionable con umbrales concretos",
    week: 7,
    taskId: "pn-c0101-w07-standing-night-orders",
    taskTitle: "Write Actionable Standing And Night Orders",
    scenario: "The Master's standing orders and night orders tell the watchkeeper exactly what to do and when to call. The officer asks the cadet to write orders that will be executed, not interpreted, with concrete thresholds.",
    instructions: [
      "Explain the purpose of standing orders (permanent) and night orders (specific to the night), and that both must be clear, unambiguous and actionable.",
      "Give the contrast between an ambiguous order and an actionable one: 'call me if the weather gets bad' (ambiguous) versus 'call me if the wind exceeds force 6 or visibility falls below 3 NM' (actionable, with concrete thresholds).",
      "Write three 'call me if...' orders, each with a concrete, measurable threshold (for example a CPA, a depth, a distance to a mark, or a traffic situation).",
      "Explain why writing for execution, not interpretation, prevents dangerous delay or hesitation on watch. Report in clear written English."
    ],
    deliverable: "A set of standing and night orders in English, including three 'call me if...' orders each with a concrete measurable threshold, and the ambiguous-versus-actionable contrast, written for execution not interpretation.",
    assessmentCriteria: [
      "The purpose of standing versus night orders is correctly explained.",
      "The ambiguous-versus-actionable contrast is correct ('weather gets bad' versus 'wind exceeds force 6 or visibility below 3 NM').",
      "The three 'call me if...' orders each carry a concrete, measurable threshold.",
      "The reasoning that orders must be executable, not interpreted, is sound, in correct written English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0101",
    subjectName: "Redacción Avanzada",
    subjectId: "pn-s3-redaccion-avanzada",
    unit: "El informe ejecutivo",
    topic: "Sintetizar para decidir: resumen ejecutivo primero, jerarquización y recomendaciones accionables",
    week: 8,
    taskId: "pn-c0101-w08-executive-report",
    taskTitle: "Write An Executive Report To Support A Decision",
    scenario: "A complex event, a passage with incidents or an inspection, must be condensed into a short report for the company or authority to act on. As the closing task of the subject, the officer asks the cadet to synthesise it into an executive report.",
    instructions: [
      "Open with an executive summary that comes FIRST and stands on its own: a reader who reads only the summary must grasp what happened, its impact, and what is recommended.",
      "Below the summary, present the essential facts in order of importance, drawing objective facts from the incident record (as in week 5) and any formal correspondence such as a protest (as in week 6).",
      "Give clear, actionable recommendations with concrete steps, in the actionable style of week 7's orders.",
      "Keep the whole report brief and decision-focused, cutting detail that does not help the reader decide. Report in clear written English."
    ],
    deliverable: "An executive report in English opening with a self-contained executive summary, followed by the essential facts by importance and clear actionable recommendations, kept brief and decision-focused.",
    assessmentCriteria: [
      "The executive summary comes first and stands on its own (what happened, impact, recommendation).",
      "The essential facts are ordered by importance and drawn objectively from the record.",
      "The recommendations are clear, actionable and concrete.",
      "The report is brief and decision-focused, cutting non-essential detail, in correct written English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
];

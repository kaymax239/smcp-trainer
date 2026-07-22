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
    subjectCode: "NAV316",
    subjectName: "Navegación I",
    subjectId: "pn-s3-navegacion-i",
    unit: "Compás giroscópico",
    topic: "El girocompás: ventajas, limitaciones y error de giro (gyro error)",
    week: 9,
    taskId: "pn-nav316-w09-gyrocompass-error",
    taskTitle: "Find And Apply The Gyrocompass Error",
    scenario: "On the bridge the officer of the watch wants the gyro heading reference checked before pilotage. Passing a charted transit (a pair of leading marks) off Tampico, the cadet is told to find the gyro error and use it to correct a bearing.",
    instructions: [
      "State the advantages of the gyrocompass (it seeks true north, is unaffected by variation and deviation, and gives a steady reference) and its limitations (a settling time from start-up, a speed and latitude error, and a dependence on electrical power).",
      "Find the gyro error on the transit: the leading line has a charted true bearing of 315 T, and the gyro repeater reads it as 316.5 G, so the gyro reads more than true and the error is 1.5 degrees HIGH.",
      "Apply the error to a gyro bearing of a light that bears 042.0 G: because a High gyro reads too much, true bearing = gyro bearing minus the error = 042.0 - 1.5 = 040.5 T.",
      "Report the gyro error, named High or Low, and the corrected true bearing as three figures, in clear navigational English."
    ],
    deliverable: "A gyro-check note in English giving the gyro error found on the transit (1.5 degrees High), the rule for naming and applying it, and a gyro bearing corrected to true (042.0 G to 040.5 T), with the working shown.",
    assessmentCriteria: [
      "The advantages and limitations of the gyrocompass are correctly stated.",
      "The gyro error is correctly found and named (315 T vs 316.5 G gives 1.5 degrees High).",
      "The error is correctly applied to the bearing (042.0 G minus 1.5 = 040.5 T).",
      "Bearings are given as three figures in 000-360 degrees, in clear navigational English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "NAV316",
    subjectName: "Navegación I",
    subjectId: "pn-s3-navegacion-i",
    unit: "Navegación costera",
    topic: "Marcaciones peligrosas (danger bearing) para librar un peligro cartografiado",
    week: 10,
    taskId: "pn-nav316-w10-danger-bearing",
    taskTitle: "Set A Danger Bearing To Clear A Charted Shoal",
    scenario: "Inbound to Tampico the track runs close past a charted shoal off the fairway. The officer asks the cadet to set a danger bearing on a charted light so the watch can keep the ship in safe water without a running fix at every moment.",
    instructions: [
      "Explain a danger bearing: a single limiting position line drawn from a charted object tangent to the danger, so the ship stays in safe water as long as the object's bearing stays on the safe side, stated as Not More Than (NMT) or Not Less Than (NLT).",
      "From the chart the light is used, and the bearing that just clears the shoal is 048 T; safe water lies where the light bears less than that, so the rule is keep the light bearing NMT 048 T.",
      "Convert the limiting true bearing to a gyro bearing for the watch to monitor: with a gyro error of 1.0 degrees High, gyro bearing = true plus the High error = 048 + 1.0 = 049 G.",
      "Report the danger bearing and the monitoring instruction as three figures, in clear navigational English (for example, keep the light bearing not more than 049 by gyro)."
    ],
    deliverable: "A danger-bearing note in English giving the limiting true bearing (048 T), the NMT rule and its safety reasoning, and the gyro bearing to monitor (049 G), all bearings in three figures.",
    assessmentCriteria: [
      "The danger bearing is correctly explained as a limiting position line with the NMT / NLT rule.",
      "The safe side is correctly reasoned (keep the light NMT 048 T to stay clear of the shoal).",
      "The conversion to a gyro bearing is correct (048 T plus 1.0 High = 049 G).",
      "Bearings are given as three figures in 000-360 degrees, in clear navigational English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "NAV316",
    subjectName: "Navegación I",
    subjectId: "pn-s3-navegacion-i",
    unit: "Navegación costera",
    topic: "Métodos para obtener una posición por marcaciones a la costa: situación por marcaciones sucesivas (running fix)",
    week: 11,
    taskId: "pn-nav316-w11-running-fix",
    taskTitle: "Fix The Ship By A Running Fix On One Object",
    scenario: "Along the coast only one charted light is in sight, so a single cross fix is impossible. The officer asks the cadet to fix the ship by a running fix, using the special case of the bow-and-beam bearing to get the distance off.",
    instructions: [
      "Explain the running fix: take a bearing of the object, run a known course and distance, take a second bearing, transfer the first position line forward by the run, and the fix is where the transferred first line crosses the second.",
      "Use the bow-and-beam special case: note the time when the light is 45 degrees on the bow (relative 045) at 1000, keep a steady course and speed of 12 knots, and note the time when the light is abeam (relative 090) at 1020.",
      "Work out the run between the two bearings: distance = speed x time = 12 knots x (20 / 60) hour = 4.0 NM.",
      "Apply the bow-and-beam rule: the 45-and-90 triangle is isosceles, so the distance off the light when abeam equals the run = 4.0 NM, and report the fix (position line abeam and distance off 4.0 NM) in clear navigational English."
    ],
    deliverable: "A running-fix note in English explaining the method, the bow-and-beam calculation (run = 12 x 20/60 = 4.0 NM) and why that equals the distance off abeam, giving the ship's distance off the light.",
    assessmentCriteria: [
      "The running-fix method (transfer the first position line by the run) is correctly explained.",
      "The run is correctly calculated (12 knots x 20/60 h = 4.0 NM).",
      "The bow-and-beam rule is correctly applied (distance off abeam = run = 4.0 NM) with the isosceles reasoning.",
      "The fix and distance off are reported clearly as three figures / nautical miles, in correct navigational English."
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
    unit: "Navegación costera",
    topic: "Precauciones en la navegación costera: selección de objetos, líneas de posición y marcación para cambio de rumbo (wheel-over)",
    week: 12,
    taskId: "pn-nav316-w12-coastal-passage-monitoring",
    taskTitle: "Monitor A Coastal Passage And Time The Wheel-Over",
    scenario: "As the closing task of the subject the cadet cons the approach to Altamira, watching the AIS traffic picture and the coastline. The officer asks the cadet to monitor the passage by fixing, keep clear of the charted danger, and time the alteration onto the next leg, integrating the whole subject.",
    instructions: [
      "Select suitable charted objects for fixing on this approach (well-spaced, positively identified, giving a good angle of cut near 90 degrees) and state why a poor angle of cut gives an unreliable fix.",
      "Monitor the position by cross bearings and radar ranges while keeping the danger bearing on the shoal (from week 10) as a continuous safety check against being set toward the danger by the current.",
      "Time the wheel-over for the alteration onto the next leg: set a wheel-over bearing on a charted mark (for example, alter when the light bears 350 T) so the helm goes over before the track intersection to allow for the ship's turning circle.",
      "Report the passage-monitoring plan and give the wheel-over helm order to the helmsman in correct SMCP-style English, and log the fix and the alteration."
    ],
    deliverable: "A coastal-passage monitoring brief in English integrating object selection and angle of cut, cross-bearing fixing, the danger bearing as a safety check, and the timed wheel-over onto the next leg with the helm order in SMCP-style English.",
    assessmentCriteria: [
      "Objects are selected soundly (well-spaced, identified, good angle of cut) with the reason a poor cut is unreliable.",
      "Position monitoring correctly combines fixing with the danger bearing as a continuous safety check.",
      "The wheel-over is correctly timed by a bearing on a charted mark to allow for the turning circle.",
      "The plan and the wheel-over helm order are reported in correct SMCP-style navigational English."
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
    unit: "Navegación costera",
    topic: "Planificación integrada de la derrota costera: rumbo y distancia por navegación plana, ETA corregida por corriente y marcación de cambio de rumbo",
    week: 13,
    taskId: "pn-nav316-w13-plan-run-tampico-coastal-passage",
    taskTitle: "Plan And Run The Coastal Passage Into Tampico",
    scenario: "Your vessel is 34 miles from the Tampico sea buoy on a coastal passage. You must lay off the final legs, work the ETA against a known set and drift, and pre-compute the wheel-over for the turn into the fairway while AIS shows two inbound tankers on the approach.",
    instructions: [
      "Solve each leg by plane sailing to obtain course and distance from the last fix to the pilot boarding position.",
      "Correct the ground track for the tidal set and drift and recompute the ETA at the sea buoy using SOG rather than speed through the water.",
      "Fix the wheel-over point for the turn into the fairway using a clearing bearing and check it against the AIS-observed traffic.",
      "Report the passage plan and ETA to the bridge team and to Tampico VTS in correct SMCP English."
    ],
    deliverable: "A completed coastal passage plan sheet with legs, corrected ETA and wheel-over point ready for the master's approval.",
    assessmentCriteria: [
      "Plane-sailing course and distance for every leg are computed and plotted correctly.",
      "The ETA is properly corrected for set, drift and SOG.",
      "The wheel-over point is placed with a defensible clearing bearing and deconflicted against AIS traffic.",
      "The plan and ETA are delivered in clear, correct SMCP English."
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
    topic: "Situación integrada en la aproximación: demoras cruzadas, situación por marcaciones sucesivas y aplicación del error de giro",
    week: 14,
    taskId: "pn-nav316-w14-fix-altamira-cross-and-running-fix",
    taskTitle: "Fix The Ship On The Altamira Approach By Cross Bearings And A Running Fix",
    scenario: "Approaching Altamira with only one prominent charted object visible at first, then two. You must establish the ship's position reliably, applying the gyrocompass error you determined earlier this watch, and reconcile it against the GPS and the AIS picture.",
    instructions: [
      "Take a running fix on the single charted object, running up the first line of position for the run and speed made good.",
      "As the second object opens up, obtain a fix by cross bearings and build the cocked hat.",
      "Apply the gyro error to convert compass bearings to true and compare the resulting position with GPS and AIS.",
      "Report the fixed position, its quality and the residual gyro error to the officer of the watch in correct deck-watch English."
    ],
    deliverable: "A plotted fix on the approach chart with the running fix, cross-bearing cocked hat and a stated position confidence.",
    assessmentCriteria: [
      "The running fix transfers the line of position correctly for run and speed.",
      "The cross-bearing fix and cocked hat are constructed and assessed properly.",
      "Gyro error is applied correctly and the fix reconciled with GPS and AIS.",
      "The fix and its confidence are reported in correct deck-watch English."
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
    unit: "Compás magnético",
    topic: "Cadena completa de rumbos verdadero, magnético y de compás con variación y desvío, y marcación peligrosa para librar un bajo cartografiado",
    week: 15,
    taskId: "pn-nav316-w15-steering-course-and-danger-bearing",
    taskTitle: "Set The Steering Course And A Danger Bearing For The Channel",
    scenario: "The master has approved a true course for the leg past a charted shoal off the Tampico approach. You must turn that true course into a compass course the helmsman can steer and give him a danger bearing that keeps the ship clear of the shoal.",
    instructions: [
      "Convert the ordered true course to magnetic and then to compass, applying variation from the chart and deviation for that heading.",
      "Lay off a danger bearing on the charted shoal and state on which side of it the ship must keep.",
      "Verify the compass course and danger bearing are consistent with the plotted track and the AIS traffic on the leg.",
      "Pass the steering course and the danger bearing to the helmsman and officer of the watch in correct helm-order English."
    ],
    deliverable: "A steering order card giving the compass course to steer and the danger bearing with the clearing side stated.",
    assessmentCriteria: [
      "The true-magnetic-compass conversion applies variation and deviation correctly in the right sense.",
      "The danger bearing is correctly laid off with the safe side clearly identified.",
      "The course and bearing are cross-checked against the plotted track and traffic.",
      "The steering order and danger bearing are passed in correct SMCP helm-order English."
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
    unit: "Navegación de estima",
    topic: "Respuesta ante una corriente inesperada: corrección de la estima por corriente, marcación peligrosa y recuperación de la derrota en el cambio de rumbo",
    week: 16,
    taskId: "pn-nav316-w16-recover-track-current-setting-toward-shoal",
    taskTitle: "Recover The Track When Current Sets The Ship Toward A Shoal",
    scenario: "Mid-leg on the approach your fixes show the ship being set steadily off track toward a charted shoal, and your danger bearing is about to be crossed. You must diagnose the current, recover the intended track and time a corrective turn before the ship stands into danger.",
    instructions: [
      "Compare successive fixes with the DR to determine the actual set and drift now acting on the ship.",
      "Recompute the course to steer that will make good the intended track against that current.",
      "Use the danger bearing to decide the latest safe moment to alter and time the wheel-over to regain track.",
      "Report the situation, the corrective course and the action taken to the master and, if required, to VTS in correct SMCP English."
    ],
    deliverable: "A corrective navigation note stating the diagnosed set and drift, the new course to steer and the recovery turn.",
    assessmentCriteria: [
      "Set and drift are correctly derived from the fix-versus-DR comparison.",
      "The corrected course to steer recovers the intended track.",
      "The danger bearing is used to time a safe corrective turn before standing into danger.",
      "The situation and corrective action are reported in correct SMCP English."
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
    topic: "Auditoría integral del plan de navegación: cadena de rumbos, situaciones, ETA corregida y marcaciones peligrosas del pasaje",
    week: 17,
    taskId: "pn-nav316-w17-audit-full-navigation-plan",
    taskTitle: "Audit The Full Navigation Plan For The Voyage",
    scenario: "Before departure the master asks you to audit the complete navigation workbook for the Tampico-Altamira voyage: every course conversion, every planned fix, every ETA and every danger bearing must be verified as internally consistent and safe.",
    instructions: [
      "Check the true-magnetic-compass conversions and the plane-sailing courses and distances for every leg.",
      "Verify the planned fixing scheme, gyro-error application and danger bearings clear all charted hazards.",
      "Confirm each leg ETA is corrected for current and that the plan is consistent with the expected AIS traffic picture.",
      "Issue a navigation audit statement listing findings and required corrections in correct maritime English."
    ],
    deliverable: "A signed navigation audit statement confirming the plan is consistent and safe, with any corrections listed.",
    assessmentCriteria: [
      "Course conversions and plane-sailing solutions are verified across all legs.",
      "The fixing scheme, gyro-error use and danger bearings are shown to keep the ship clear of hazards.",
      "ETAs and the traffic picture are confirmed consistent with the plan.",
      "The audit statement is written in correct professional maritime English."
    ],
    xp: 30,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "NAV316",
    subjectName: "Navegación I",
    subjectId: "pn-s3-navegacion-i",
    unit: "Navegación costera",
    topic: "Integración de fin de semestre: síntesis del plan de navegación costera para la sesión informativa al capitán",
    week: 18,
    taskId: "pn-nav316-w18-deliver-navigation-brief-to-master",
    taskTitle: "Deliver The Navigation Passage Brief To The Master",
    scenario: "It is the pre-departure briefing. As navigating officer you must present the whole navigation picture for the Tampico-Altamira passage to the master, pulling together courses, fixes, ETAs, danger bearings and the expected traffic into one coherent brief.",
    instructions: [
      "Assemble the planned track leg by leg with courses to steer, distances and ETAs corrected for current.",
      "Summarise the fixing plan, gyro-error handling and the danger bearings guarding each hazard.",
      "State the expected AIS traffic on the approach and the contingency for the current-set situation.",
      "Deliver the passage brief to the master and bridge team in correct SMCP English and answer their questions."
    ],
    deliverable: "A concise navigation passage brief delivered to the master covering track, fixes, ETAs, hazards and traffic.",
    assessmentCriteria: [
      "The brief integrates courses, distances and corrected ETAs into a coherent passage picture.",
      "Fixing plan, gyro-error handling and danger bearings are presented clearly.",
      "Traffic and the key contingency are addressed with sound judgement.",
      "The brief is delivered fluently in correct SMCP English."
    ],
    xp: 30,
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
    topic: "Fundamentos y terminología de la marea; datum de sondas (chart datum)",
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
    topic: "Cálculo de altura de marea y profundidad disponible; margen bajo la quilla (UKC)",
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
    unit: "Batimetría",
    topic: "El ecosonda: principio del eco, monohaz y multihaz, y errores de medición",
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
    unit: "Información hidrográfica al navegante",
    topic: "Avisos a los Marinos y corrección de cartas; flujo levantamiento-oficina hidrográfica-carta",
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
    subjectCode: "HID318",
    subjectName: "Hidrografía",
    subjectId: "pn-s3-hidrografia",
    unit: "Organización y equipos hidrográficos",
    topic: "Organismos hidrográficos: la OHI (IHO) y las oficinas hidrográficas nacionales",
    week: 9,
    taskId: "pn-hid318-w09-hydrographic-organisations",
    taskTitle: "Trace The Charts To The IHO And National Offices",
    scenario: "A new set of charts and publications arrives on board. The officer asks the cadet to explain where they come from and who guarantees their standard, so the crew trusts the source of the information they navigate by.",
    instructions: [
      "Explain the role of the International Hydrographic Organization (IHO): it coordinates the national hydrographic offices and sets the standards for charts and publications (such as the specifications for symbology and electronic charts and the INT chart series) so charts are consistent between nations.",
      "Explain the role of a national hydrographic office (for example the Mexican naval hydrographic service): it surveys national waters and produces and updates the official charts and publications for its area.",
      "Explain how this international standardisation lets a ship use official charts from any member state with confidence, through common symbology and the INT chart series.",
      "Report the origin and standardisation of the charts in clear hydrographic English."
    ],
    deliverable: "A note in English explaining the role of the IHO and of a national hydrographic office, and why international standardisation lets a ship rely on charts from any member state.",
    assessmentCriteria: [
      "The role of the IHO (coordination and standards) is correctly explained.",
      "The role of a national hydrographic office (survey, production and update) is correct.",
      "The value of international standardisation for the mariner is soundly explained.",
      "The note is clear and in correct hydrographic English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "HID318",
    subjectName: "Hidrografía",
    subjectId: "pn-s3-hidrografia",
    unit: "Batimetría",
    topic: "Naturaleza de los fondos marinos y su relación con el tenedero (holding ground)",
    week: 10,
    taskId: "pn-hid318-w10-seabed-nature-holding-ground",
    taskTitle: "Assess Seabed Nature For Good Holding Ground",
    scenario: "The vessel must anchor in the outer anchorage off Tampico to wait for a berth. The officer asks the cadet to use the charted nature of the seabed, a product of hydrographic survey, to judge where the anchor will hold well.",
    instructions: [
      "Explain how hydrographic survey records the nature of the seabed (bottom samples, arming the lead, and the backscatter of single-beam or multibeam systems) and how it is shown on the chart by the standard abbreviations (M for mud, S for sand, Cy for clay, R for rock, Co for coral).",
      "Rank the common bottoms for anchor holding: mud, clay and firm sand give good holding, while rock, shingle and weed give poor or uncertain holding and risk the anchor dragging or fouling.",
      "Choose an anchoring berth from the charted seabed nature and depth, and state why (for example, prefer a patch of mud over a rocky bottom).",
      "Report the anchorage assessment in clear hydrographic English."
    ],
    deliverable: "A note in English explaining how the seabed nature is surveyed and charted, ranking common bottoms for holding, and choosing an anchoring berth from the charted nature and depth with the reason.",
    assessmentCriteria: [
      "How seabed nature is surveyed and shown on the chart by abbreviation is correct.",
      "The ranking of bottoms for holding (mud/clay/firm sand good; rock/shingle/weed poor) is correct.",
      "The berth choice is soundly justified from seabed nature and depth.",
      "The assessment is clear and in correct hydrographic English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "HID318",
    subjectName: "Hidrografía",
    subjectId: "pn-s3-hidrografia",
    unit: "Corrientes marinas",
    topic: "Tipos de corrientes marinas: oceánicas, de marea (tidal streams) y por viento; lectura del rombo de corriente",
    week: 11,
    taskId: "pn-hid318-w11-current-types-tidal-streams",
    taskTitle: "Distinguish Current Types And Read A Tidal Stream",
    scenario: "The planned passage crosses both a steady offshore current and reversing tidal streams near the coast. The officer asks the cadet to distinguish the types of current and to read the tidal stream so its effect can be allowed for.",
    instructions: [
      "Distinguish the types of current: ocean currents (large-scale and quasi-steady, such as the Gulf loop current), tidal streams (reversing, driven by the tide and strongest at springs), and wind-driven surface currents (temporary, following recent wind).",
      "Read a tidal stream from a tidal diamond or stream table: give the set (direction the stream runs toward) and the drift (rate in knots) at a stated hour, for example at 3 hours before high water the diamond gives set 070 T and rate 1.8 knots at springs.",
      "Explain how the stream changes over the tidal cycle: slack near high and low water and greatest around mid-tide, and stronger at springs than at neaps.",
      "Explain how the ocean current and the tidal stream are combined into one total set and drift for correcting the course and estimated position, and report the current assessment in clear hydrographic English."
    ],
    deliverable: "A note in English distinguishing ocean, tidal and wind-driven currents, giving a tidal-stream read (set 070 T, drift 1.8 knots at springs) with how it changes over the cycle, and how the currents combine into one set and drift.",
    assessmentCriteria: [
      "The three current types are correctly distinguished with an example of each.",
      "The tidal stream is correctly read as a set and a drift from the diamond / table.",
      "The variation over the tidal cycle (slack at HW/LW, maximum mid-tide, springs vs neaps) is correct.",
      "The combination into one total set and drift is sound, in correct hydrographic English."
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
    unit: "Batimetría",
    topic: "Operaciones de levantamiento batimétrico: líneas de sonda, espaciamiento e interlíneas para la cobertura",
    week: 12,
    taskId: "pn-hid318-w12-bathymetric-survey-lines",
    taskTitle: "Plan Sounding Lines For A Bathymetric Survey",
    scenario: "As the closing task of the subject a berth pocket in the approach to Altamira is suspected to be shoaling, and a small-craft bathymetric survey is ordered to update the charted depths. The officer asks the cadet to plan the survey lines, integrating the echo sounder and tide work from earlier weeks.",
    instructions: [
      "Explain the aim: run planned sounding lines with a single-beam echo sounder, or a multibeam swath, to map the depths, which will be reduced to chart datum (integrating weeks 6 and 7).",
      "Plan the line spacing and interlines for adequate coverage: run the main lines parallel to the depth contours at a regular spacing, add cross-check lines perpendicular to them, and close the spacing where the depth changes fast, stating the trade-off that closer lines give better coverage but take more time.",
      "State the corrections applied to the raw soundings before charting: the transducer draught, the sound speed in the water, and the reduction to chart datum using the height of tide at the moment of sounding.",
      "Report the survey-line plan and how the results will update the chart, in clear hydrographic English."
    ],
    deliverable: "A sounding-line survey plan in English covering the line spacing and cross-check lines for coverage, the closer spacing where depth changes fast, the corrections to raw soundings, and the reduction to chart datum, ending in an updated chart.",
    assessmentCriteria: [
      "The survey aim and instruments (single-beam / multibeam) are correctly stated.",
      "The line spacing, cross-check lines and closer spacing over fast-changing depth are soundly planned with the coverage-versus-time trade-off.",
      "The corrections (transducer draught, sound speed, reduction to chart datum) are correct.",
      "The plan and its link to updating the chart are clear, in correct hydrographic English."
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
    unit: "Mareas",
    topic: "Tránsito integrado en ventana de marea: altura de marea, margen bajo la quilla, ecosonda y datum de sondas",
    week: 13,
    taskId: "pn-hid318-w13-plan-tidal-window-transit-ukc",
    taskTitle: "Plan The Tidal-Window Transit With Under-Keel Clearance",
    scenario: "Your deep-draught vessel must cross a charted shallow patch on the Tampico approach where charted depth barely exceeds draught. You must find the tidal window in which under-keel clearance stays safe and plan how to monitor it with the echo sounder.",
    instructions: [
      "Compute the height of tide across the intended crossing time and add it to the charted depth referenced to chart datum.",
      "Work out the under-keel clearance through the crossing and identify the safe tidal window.",
      "Set the echo sounder alarm and monitoring plan so actual depth is checked against the predicted profile.",
      "Report the tidal window, planned UKC and monitoring plan to the master in correct maritime English."
    ],
    deliverable: "A tidal-window transit plan stating the safe crossing times, predicted UKC and echo-sounder monitoring scheme.",
    assessmentCriteria: [
      "Height of tide and available depth over datum are computed correctly.",
      "Under-keel clearance and the safe window are derived soundly.",
      "The echo-sounder monitoring and alarm plan is fit for purpose.",
      "The window and plan are reported in correct maritime English."
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
    unit: "Batimetría",
    topic: "Levantamiento batimétrico integrado del acceso: líneas de sonda e interlíneas, ecosonda monohaz y multihaz y reducción al datum de sondas",
    week: 14,
    taskId: "pn-hid318-w14-run-bathymetric-survey-altamira",
    taskTitle: "Run A Bathymetric Survey Of The Altamira Approach",
    scenario: "The port requests a control survey of a berth-approach box at Altamira after dredging. You must plan and conduct the sounding run so the box is fully covered and reduce the soundings to chart datum for comparison with the chart.",
    instructions: [
      "Lay out sounding lines and line spacing that give full coverage of the survey box with the multibeam swath.",
      "Conduct the run recording echo-sounder depths and note single-beam versus multibeam differences.",
      "Reduce the observed soundings to chart datum using the tide of the day.",
      "Report the surveyed least depths and coverage to the port authority in correct maritime English."
    ],
    deliverable: "A survey report giving the sounding-line plan, reduced least depths and a coverage statement for the box.",
    assessmentCriteria: [
      "Line spacing and coverage of the survey box are correctly planned.",
      "Echo-sounder operation and single/multibeam differences are handled correctly.",
      "Soundings are properly reduced to chart datum.",
      "The survey results are reported in correct maritime English."
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
    unit: "Batimetría",
    topic: "Selección integrada de fondeadero: naturaleza del fondo y tenedero, corrientes de marea y aplicación de las corrientes en la aproximación",
    week: 15,
    taskId: "pn-hid318-w15-select-anchorage-by-seabed-tidal-stream",
    taskTitle: "Select A Safe Anchorage By Seabed And Tidal Stream",
    scenario: "Awaiting a berth off Tampico, the master asks you to recommend an anchorage. You must weigh the seabed holding ground, the tidal stream that will act on the anchored ship and the currents on the run in and out.",
    instructions: [
      "Assess seabed nature from the chart to judge holding ground at the candidate anchorages.",
      "Read the tidal stream at the anchorage and estimate the load and swing it will impose on the ground tackle.",
      "Account for the currents on the approach to and departure from the chosen position.",
      "Report the recommended anchorage and its justification to the master in correct maritime English."
    ],
    deliverable: "An anchorage recommendation stating holding ground, expected tidal stream and approach currents.",
    assessmentCriteria: [
      "Seabed nature and holding ground are correctly assessed from chart data.",
      "The tidal stream and its effect on the anchored ship are read correctly.",
      "Approach and departure currents are properly accounted for.",
      "The recommendation is reported in correct maritime English."
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
    unit: "Mareas",
    topic: "Respuesta ante un margen bajo la quilla decreciente: recálculo de altura de marea y UKC y evaluación del fondo en bajamar",
    week: 16,
    taskId: "pn-hid318-w16-respond-shrinking-ukc-low-water",
    taskTitle: "Respond To A Shrinking Under-Keel Clearance At Low Water",
    scenario: "Anchored on the approach at falling tide, your echo sounder shows under-keel clearance dropping faster than planned and low water is still an hour away. You must decide whether the ship stays safe or must move.",
    instructions: [
      "Recompute the height of tide to low water and the resulting under-keel clearance at your position.",
      "Compare predicted depth with the echo-sounder reading to detect any shoaling or datum error.",
      "Assess the seabed nature to judge grounding consequences and the safest deeper water to move to.",
      "Report the clearance situation and your recommended action to the master in correct SMCP English."
    ],
    deliverable: "A depth-safety note stating recomputed UKC to low water and a stay-or-move recommendation.",
    assessmentCriteria: [
      "Height of tide to low water and UKC are recomputed correctly.",
      "Predicted and measured depths are compared to detect shoaling or datum error.",
      "Seabed and the deeper-water option are assessed soundly.",
      "The situation and recommendation are reported in correct SMCP English."
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
    unit: "Información hidrográfica al navegante",
    topic: "Auditoría de la información hidrográfica: Avisos a los Marinos y corrección de cartas y la cadena levantamiento-OHI-oficina hidrográfica",
    week: 17,
    taskId: "pn-hid318-w17-audit-chart-corrections-and-sources",
    taskTitle: "Audit The Chart Corrections And Hydrographic Sources",
    scenario: "Before the voyage the master wants assurance that the charts for the Tampico-Altamira passage are fully corrected and traceable. You must audit the Notices to Mariners applied and confirm the source authority behind each chart.",
    instructions: [
      "Verify that all relevant Notices to Mariners have been applied to the passage charts and correctly recorded.",
      "Trace each chart back to the issuing national hydrographic office and the IHO framework.",
      "Confirm that survey information for the critical approaches has flowed correctly to the current chart edition.",
      "Issue a chart-correction audit statement of findings in correct maritime English."
    ],
    deliverable: "A chart-correction audit statement confirming corrections applied and sources traced, with any gaps listed.",
    assessmentCriteria: [
      "Notices to Mariners applied are verified and correctly recorded.",
      "Charts are traced to their national office and the IHO framework.",
      "Survey-to-chart traceability for the critical approaches is confirmed.",
      "The audit statement is written in correct maritime English."
    ],
    xp: 30,
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
    topic: "Integración de fin de semestre: síntesis hidrográfica del pasaje para la sesión informativa al capitán",
    week: 18,
    taskId: "pn-hid318-w18-deliver-hydrographic-brief-voyage",
    taskTitle: "Deliver The Hydrographic Brief For The Voyage",
    scenario: "At the pre-departure briefing you must give the master the complete hydrographic picture for the passage: tides and UKC, depths and seabed, currents, and the confidence in the chart data underpinning it all.",
    instructions: [
      "Summarise the tidal windows and under-keel clearances for the critical shallow crossings.",
      "Present the seabed, holding ground and current picture affecting the passage and any anchorage.",
      "State the confidence in the chart data based on the correction and source audit.",
      "Deliver the hydrographic brief to the master in correct maritime English and answer questions."
    ],
    deliverable: "A concise hydrographic voyage brief covering tides, depths, seabed, currents and chart confidence.",
    assessmentCriteria: [
      "Tidal windows and UKC for the critical crossings are presented correctly.",
      "Seabed, holding ground and currents are integrated into the picture.",
      "Chart-data confidence is stated on a sound basis.",
      "The brief is delivered in correct maritime English."
    ],
    xp: 30,
    estimatedTime: "45 min",
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
    subjectCode: "CAR319",
    subjectName: "Cartografía",
    subjectId: "pn-s3-cartografia",
    unit: "Proyecciones",
    topic: "Proyección gnomónica y la derrota ortodrómica (great circle)",
    week: 9,
    taskId: "pn-car319-w09-gnomonic-great-circle",
    taskTitle: "Use A Gnomonic Chart For Great-Circle Sailing",
    scenario: "The vessel is to make a long ocean passage where following the great circle saves distance over the rhumb line. The officer asks the cadet to explain how the gnomonic chart is used to plan it and transfer it to the working Mercator chart.",
    instructions: [
      "Explain the key property of the gnomonic projection: a great circle plots as a STRAIGHT line, unlike the Mercator chart where the rhumb line is straight and the great circle appears curved.",
      "Describe the planning method: draw the straight great-circle track on the gnomonic chart between departure and destination, then take off the latitude and longitude of several positions along it.",
      "Transfer those intermediate positions to the Mercator chart and join them by rhumb lines, so the great circle is followed as a series of short rhumb-line legs with a slightly changing course on each.",
      "State one limitation of the gnomonic chart (courses and distances cannot be measured directly on it because it is not conformal) and report the plan in clear cartographic English."
    ],
    deliverable: "A note in English explaining why a great circle is a straight line on a gnomonic chart, the method of taking off intermediate positions and transferring them to the Mercator chart as rhumb-line legs, and one limitation of the gnomonic chart.",
    assessmentCriteria: [
      "The straight-line great-circle property of the gnomonic projection is correctly explained and contrasted with Mercator.",
      "The method of taking off positions and transferring them to the Mercator chart is correct.",
      "The great circle is correctly followed as a series of rhumb-line legs with changing course.",
      "A valid limitation of the gnomonic chart is given, in clear cartographic English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "CAR319",
    subjectName: "Cartografía",
    subjectId: "pn-s3-cartografia",
    unit: "Sistema de Coordenadas Terrestres",
    topic: "Coordenadas UTM: husos, zonas y lectura de una posición",
    week: 10,
    taskId: "pn-car319-w10-utm-coordinates",
    taskTitle: "Read A Position In UTM Coordinates",
    scenario: "A port plan and a survey drawing for the Altamira terminal give positions in UTM eastings and northings rather than latitude and longitude. The officer asks the cadet to read a UTM position and explain when the grid is used.",
    instructions: [
      "Explain the UTM grid: the world is divided into 6-degree-wide zones, each with a central meridian, and a position is given as the zone plus an easting and a northing in metres.",
      "State how the coordinates are measured: the easting from a false origin (the central meridian is set at 500 000 m E) so eastings stay positive, and the northing from the equator (with a false northing added in the southern hemisphere).",
      "Read the given UTM position, zone 14N, easting 512 000 m E, northing 2 480 000 m N, and say roughly where it lies relative to the central meridian (east of it, since the easting is greater than 500 000).",
      "Explain when UTM is used (port plans, surveys and small areas) versus geographic latitude and longitude for chart navigation, and report the position in clear cartographic English."
    ],
    deliverable: "A note in English reading a UTM position (zone 14N, E 512 000, N 2 480 000), explaining the zones and the false easting and northing, and when UTM is used instead of latitude and longitude.",
    assessmentCriteria: [
      "The UTM grid of 6-degree zones with a central meridian is correctly explained.",
      "The false easting (500 000 m at the central meridian) and the northing from the equator are correct.",
      "The given position is read correctly and placed east of the central meridian.",
      "The use of UTM versus geographic coordinates is correctly explained, in clear cartographic English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "CAR319",
    subjectName: "Cartografía",
    subjectId: "pn-s3-cartografia",
    unit: "Proyecciones",
    topic: "Partes meridionales y la derrota loxodrómica en Mercator (latitudes crecientes)",
    week: 11,
    taskId: "pn-car319-w11-meridional-parts-mercator-sailing",
    taskTitle: "Find A Course By Mercator Sailing Using Meridional Parts",
    scenario: "The officer asks the cadet to find the rhumb-line course between two well-separated positions by Mercator sailing, using meridional parts, the analytic method that lies behind reading a course off the chart.",
    instructions: [
      "Explain meridional parts: because the Mercator latitude scale stretches toward the poles, the meridional parts (MP) of a latitude give its distance from the equator measured in units of longitude minutes.",
      "Compute the difference of meridional parts and the difference of longitude from A 20 degrees N to B 30 degrees N with a longitude change of 10 degrees E: using MP(30) = 1876.9 and MP(20) = 1217.4, DMP = 1876.9 - 1217.4 = 659.5, and DLo = 10 degrees = 600 minutes.",
      "Find the rhumb-line course from tangent(course) = DLo / DMP = 600 / 659.5 = 0.9098, so the course angle = arctangent(0.9098) = 42.3 degrees, giving 042 T in the NE quadrant.",
      "Find the distance from distance = difference of latitude / cosine(course) = 600 / cos 42.3 = 600 / 0.7396 = 811 NM, and report the course as three figures and the distance in nautical miles, in clear cartographic English."
    ],
    deliverable: "A Mercator-sailing note in English giving the difference of meridional parts (659.5), the course from tangent(course) = DLo / DMP (042 T) and the distance from difference of latitude / cosine(course) (811 NM), with the working shown.",
    assessmentCriteria: [
      "Meridional parts are correctly explained and DMP is correct (1876.9 - 1217.4 = 659.5).",
      "The course is correct (arctangent(600/659.5) = 42.3 degrees, i.e. 042 T) in the correct quadrant.",
      "The distance is correct (600 / cos 42.3 = 811 NM).",
      "The course is given as three figures and the distance in NM, in clear cartographic English."
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
    unit: "Cartas Náuticas",
    topic: "Cálculo y trazado de la proyección Mercator: construcción de la retícula y medición de distancias en la escala de latitudes",
    week: 12,
    taskId: "pn-car319-w12-mercator-graticule-construction",
    taskTitle: "Construct And Verify A Mercator Graticule",
    scenario: "As the closing task of the subject the cadet must lay off a blank Mercator plotting sheet for a passage. The officer asks the cadet to construct the graticule correctly and prove why distance is measured on the latitude scale, integrating scale and projection.",
    instructions: [
      "Explain that on a Mercator sheet the meridians are drawn as equally spaced parallel lines, but the parallels of latitude are spaced INCREASINGLY farther apart toward the poles, in proportion to the meridional parts.",
      "Lay off the latitude spacing using meridional parts: the height on the sheet between two parallels is proportional to their difference of meridional parts, so the degree between 40 and 41 N is taller than the degree between 20 and 21 N (DMP is larger at higher latitude).",
      "Explain why distance must therefore be measured on the LATITUDE (side) scale at the level of the measurement, never on the longitude scale (integrating week 6), because there 1 minute of latitude equals 1 nautical mile.",
      "Report the construction of the graticule and the distance-measuring rule, integrating scale and projection, in clear cartographic English."
    ],
    deliverable: "A note in English constructing a Mercator graticule with meridians equally spaced and parallels spaced by meridional parts (taller degrees at higher latitude), and explaining why distance is measured on the latitude scale at the level of the measurement.",
    assessmentCriteria: [
      "The equally spaced meridians and the increasingly spaced parallels are correctly explained.",
      "The latitude spacing is correctly tied to meridional parts (taller degree at higher latitude).",
      "The rule to measure distance on the latitude scale at the level of the measurement is correct and justified (1 minute of latitude = 1 NM).",
      "The construction integrates scale and projection, in clear cartographic English."
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
    unit: "Cartas Náuticas",
    topic: "Preparación integrada del portafolio de cartas: selección de escala, símbolos de la Carta No. 1 y medición de distancias en la escala de latitudes",
    week: 13,
    taskId: "pn-car319-w13-prepare-verify-chart-portfolio",
    taskTitle: "Prepare And Verify The Chart Portfolio For The Passage",
    scenario: "You must assemble the paper chart folio for the Tampico-Altamira passage, choosing the right scale for each phase, confirming you can read the hazard and aid symbols, and measuring the leg distances correctly.",
    instructions: [
      "Select the appropriate chart scale for the ocean, coastal and approach phases of the passage.",
      "Identify the key danger, aid-to-navigation and seabed symbols on the approach chart using Chart No. 1.",
      "Measure the distance of each leg using the latitude scale at the correct latitude.",
      "Report the assembled folio and the total passage distance to the master in correct maritime English."
    ],
    deliverable: "A chart folio list with the scale for each phase, a symbol key and the measured leg and total distances.",
    assessmentCriteria: [
      "Chart scales are appropriate to each phase of the passage.",
      "Hazard and aid symbols are read correctly using Chart No. 1.",
      "Distances are measured on the latitude scale at the correct latitude.",
      "The folio and distances are reported in correct maritime English."
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
    unit: "Proyecciones",
    topic: "Trazado integrado de la derrota oceánica: derrota ortodrómica en carta gnomónica y derrota loxodrómica en Mercator por partes meridionales",
    week: 14,
    taskId: "pn-car319-w14-plot-ocean-leg-great-circle-mercator",
    taskTitle: "Plot The Ocean Leg By Great Circle And Mercator Sailing",
    scenario: "For the ocean leg you must plan the great-circle route on a gnomonic chart, then transfer it as a series of rhumb-line legs onto the Mercator chart using meridional parts so the helmsman can steer it.",
    instructions: [
      "Lay off the great-circle track between departure and landfall on the gnomonic chart and pick waypoints.",
      "Transfer the waypoints to the Mercator chart and compute each rhumb-line course by Mercator sailing using meridional parts.",
      "Verify the total distance and check the plotted legs against the intended route.",
      "Report the route, its waypoints and courses to the bridge team in correct maritime English."
    ],
    deliverable: "A plotted ocean route with gnomonic great-circle track and Mercator rhumb-line legs with courses and distances.",
    assessmentCriteria: [
      "The great-circle track and waypoints are correctly laid off on the gnomonic chart.",
      "Mercator-sailing courses via meridional parts are computed correctly for each leg.",
      "Total distance and leg consistency are verified.",
      "The route is reported in correct maritime English."
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
    unit: "Cartas Electrónicas",
    topic: "Configuración operativa integrada del ECDIS: ENC frente a RNC, safety contour y alarmas, con el datum WGS-84 y la posición satelital",
    week: 15,
    taskId: "pn-car319-w15-set-up-ecdis-tampico-approach",
    taskTitle: "Set Up ECDIS Safely For The Tampico Approach",
    scenario: "You are configuring ECDIS for the Tampico approach. You must load the right electronic charts, set the safety contour for your draught, confirm the position source is on WGS-84, and make the alarm picture meaningful against the AIS traffic.",
    instructions: [
      "Confirm ENC coverage of the approach and set the safety contour and safety depth for the ship's draught.",
      "Verify the GPS position is referenced to WGS-84 and check for any chart datum offset on the displayed chart.",
      "Configure the anti-grounding and CPA alarms so they respond to hazards and to the AIS traffic on the approach.",
      "Report the ECDIS configuration and any datum caution to the master in correct maritime English."
    ],
    deliverable: "An ECDIS setup record stating chart coverage, safety contour, datum check and alarm configuration.",
    assessmentCriteria: [
      "ENC coverage and safety contour/depth are set correctly for the draught.",
      "WGS-84 referencing and any datum offset are correctly checked.",
      "Alarms are configured to respond to hazards and traffic.",
      "The configuration is reported in correct maritime English."
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
    topic: "Respuesta ante un desajuste de datum: la posición satelital que no encaja en la carta, WGS-84 frente al datum local y verificación por símbolos y coordenadas",
    week: 16,
    taskId: "pn-car319-w16-resolve-chart-datum-mismatch",
    taskTitle: "Resolve A Chart Datum Mismatch On The Approach",
    scenario: "On the approach the GPS position plots on the wrong side of a charted buoy compared with what you can see. You must diagnose whether this is a datum mismatch and re-establish a position you can trust before standing into danger.",
    instructions: [
      "Determine the horizontal datum of the chart in use and compare it with the WGS-84 GPS datum.",
      "Apply or account for the datum shift and re-plot the GPS position on the chart.",
      "Confirm the corrected position by reading charted symbols and coordinates against the observed marks.",
      "Report the datum problem and the trusted position to the officer of the watch in correct SMCP English."
    ],
    deliverable: "A position-verification note diagnosing the datum mismatch and stating the corrected, trusted position.",
    assessmentCriteria: [
      "The chart datum versus WGS-84 mismatch is correctly diagnosed.",
      "The datum shift is applied and the position re-plotted correctly.",
      "The corrected position is confirmed against charted symbols and coordinates.",
      "The problem and trusted position are reported in correct SMCP English."
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
    unit: "Cartas Náuticas",
    topic: "Auditoría integral de la construcción cartográfica: retícula Mercator, medición de distancias en la escala de latitudes y lectura de posiciones en coordenadas geográficas y UTM",
    week: 17,
    taskId: "pn-car319-w17-audit-chart-construction-plotting",
    taskTitle: "Audit The Chart Construction And Position Plotting",
    scenario: "The training master asks you to audit a hand-constructed Mercator plotting sheet used in the passage plan: the graticule, the distance scale and the positions plotted on it must all be verified as geometrically sound.",
    instructions: [
      "Verify the Mercator graticule construction, checking the meridional parts and the latitude spacing.",
      "Confirm that distances measured on the sheet use the latitude scale correctly at the right latitude.",
      "Cross-check plotted positions read in both geographic and UTM coordinates for consistency.",
      "Issue a plotting-sheet audit statement of findings in correct maritime English."
    ],
    deliverable: "A plotting-sheet audit statement confirming the graticule, distance scale and positions, with corrections listed.",
    assessmentCriteria: [
      "The Mercator graticule and meridional-part spacing are verified correctly.",
      "Distance measurement on the latitude scale is confirmed sound.",
      "Geographic and UTM position readings are cross-checked for consistency.",
      "The audit statement is written in correct maritime English."
    ],
    xp: 30,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "CAR319",
    subjectName: "Cartografía",
    subjectId: "pn-s3-cartografia",
    unit: "Cartas Electrónicas",
    topic: "Integración de fin de semestre: síntesis del sistema de cartas y ECDIS del pasaje para la sesión informativa al capitán",
    week: 18,
    taskId: "pn-car319-w18-deliver-charting-ecdis-brief",
    taskTitle: "Deliver The Charting And ECDIS Brief For The Voyage",
    scenario: "At the pre-departure briefing you must give the master the complete charting picture: the paper folio and scales, the ocean route, the ECDIS configuration and the datum cautions that apply to the Tampico-Altamira passage.",
    instructions: [
      "Summarise the chart folio, scales and the great-circle plus Mercator route for the passage.",
      "Present the ECDIS configuration with its safety contour and alarm setup for the approaches.",
      "State the datum cautions and how position confidence is maintained across paper and electronic charts.",
      "Deliver the charting brief to the master in correct maritime English and answer questions."
    ],
    deliverable: "A concise charting and ECDIS voyage brief covering folio, route, ECDIS setup and datum cautions.",
    assessmentCriteria: [
      "Folio, scales and route are presented as a coherent charting plan.",
      "The ECDIS configuration is explained clearly and correctly.",
      "Datum cautions and position-confidence handling are addressed soundly.",
      "The brief is delivered in correct maritime English."
    ],
    xp: 30,
    estimatedTime: "45 min",
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
    subjectCode: "GEA320",
    subjectName: "Geometría Analítica",
    subjectId: "pn-s3-geometria-analitica",
    unit: "Línea recta",
    topic: "Ángulo entre dos rectas",
    week: 9,
    taskId: "pn-gea320-w09-angle-between-lines",
    taskTitle: "Find The Angle At Which Two Track Lines Cross",
    scenario: "Two track lines cross on a plotting sheet, and the angle at which they cut matters for the reliability of a fix. The officer asks the cadet to find the crossing angle from the slopes of the two lines using coordinate geometry.",
    instructions: [
      "State the formula for the angle between two lines from their slopes: tangent(theta) = absolute value of ((m2 - m1) / (1 + m1 x m2)).",
      "For line 1 with slope m1 = 1/2 and line 2 with slope m2 = 3, substitute: tangent(theta) = absolute value of ((3 - 0.5) / (1 + 0.5 x 3)) = absolute value of (2.5 / 2.5) = 1.",
      "Find the angle: theta = arctangent(1) = 45 degrees.",
      "Relate the result to navigation: a good angle of cut between two position lines is near 90 degrees, and a shallow crossing gives an uncertain fix, and report the angle in clear English."
    ],
    deliverable: "A coordinate-geometry note in English giving the angle between the two lines from tangent(theta) = absolute value of ((m2 - m1)/(1 + m1 m2)) = 1, so theta = 45 degrees, with the working and the navigational meaning of the angle of cut.",
    assessmentCriteria: [
      "The angle-between-lines formula is stated correctly.",
      "The substitution is correct (tangent(theta) = 2.5 / 2.5 = 1).",
      "The angle is correct (theta = 45 degrees).",
      "The link to the angle of cut is sound, in correct English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "GEA320",
    subjectName: "Geometría Analítica",
    subjectId: "pn-s3-geometria-analitica",
    unit: "Parábola, elipse e hipérbola",
    topic: "Parábola con vértice en el origen: ecuación y foco",
    week: 10,
    taskId: "pn-gea320-w10-parabola-reflector",
    taskTitle: "Model A Parabolic Reflector With A Parabola",
    scenario: "A parabolic reflector behind a signal lamp or a radar antenna focuses at its focus. The officer asks the cadet to model the reflector with the equation of a parabola with vertex at the origin and locate the focus.",
    instructions: [
      "Write the equation of a parabola with vertex at the origin opening along its axis: y squared = 4 p x, where p is the focal distance from the vertex to the focus.",
      "For a reflector with p = 0.5 m, write y squared = 4 x 0.5 x x = 2 x, and state that the focus lies at (0.5, 0), where the lamp or feed is placed.",
      "Explain the operational point of the shape: rays coming from the focus reflect off the parabola into a parallel beam (and parallel rays coming in reflect to the focus), which is why the source sits at the focus.",
      "Report the equation, the focus and the reasoning in clear English."
    ],
    deliverable: "A coordinate-geometry note in English giving the parabola y squared = 2 x for a focal distance p = 0.5 m, the focus at (0.5, 0), and why the source is placed at the focus to give a parallel beam.",
    assessmentCriteria: [
      "The parabola with vertex at the origin is written correctly (y squared = 4 p x).",
      "The equation and focus are correct for p = 0.5 m (y squared = 2 x, focus (0.5, 0)).",
      "The focus-to-parallel-beam property is correctly explained.",
      "The result is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "GEA320",
    subjectName: "Geometría Analítica",
    subjectId: "pn-s3-geometria-analitica",
    unit: "Parábola, elipse e hipérbola",
    topic: "Hipérbola con centro en el origen: definición por diferencia de distancias y línea de posición hiperbólica",
    week: 11,
    taskId: "pn-gea320-w11-hyperbola-position-line",
    taskTitle: "Model A Hyperbolic Line Of Position",
    scenario: "In hyperbolic radio navigation (the Loran-C principle) a constant difference in distance from two transmitters defines a hyperbolic position line. The officer asks the cadet to model that line with the equation of a hyperbola centred at the origin.",
    instructions: [
      "State the hyperbola definition: it is the locus of points whose difference of distances to two fixed foci (the two transmitters) is constant and equal to 2a, and write it as x squared / a squared - y squared / b squared = 1, with the foci at (plus or minus c, 0) and c squared = a squared + b squared.",
      "For foci at (plus or minus 5, 0), so c = 5, and a constant distance-difference of 2a = 6, so a = 3, find b squared = c squared - a squared = 25 - 9 = 16.",
      "Write the resulting equation: x squared / 9 - y squared / 16 = 1.",
      "Explain the navigation meaning: each measured time-difference from the transmitter pair puts the ship on one such hyperbola, and crossing two hyperbolas from two pairs gives the fix, and report the equation and interpretation in clear English."
    ],
    deliverable: "A coordinate-geometry note in English giving the hyperbola x squared / 9 - y squared / 16 = 1 from foci at (plus or minus 5, 0) and 2a = 6, with the difference-of-distances definition and the hyperbolic-position-line interpretation.",
    assessmentCriteria: [
      "The difference-of-distances definition and the standard form with c squared = a squared + b squared are correct.",
      "The values are correct (c = 5, a = 3, b squared = 25 - 9 = 16).",
      "The equation is correct (x squared / 9 - y squared / 16 = 1).",
      "The hyperbolic-position-line interpretation is sound, in correct English."
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
    unit: "Geometría Analítica del Espacio",
    topic: "Ecuación de la superficie esférica con centro fuera del origen: esferas de distancia y la situación GNSS",
    week: 12,
    taskId: "pn-gea320-w12-sphere-off-origin-gnss",
    taskTitle: "Use Range Spheres To Model A GNSS Fix",
    scenario: "As the closing task of the subject the cadet models how GNSS fixes the ship at the intersection of range spheres centred on the satellites, using the equation of a sphere with its centre away from the origin and integrating the sphere and circle work of earlier weeks.",
    instructions: [
      "Write the equation of a sphere with centre (h, k, l) and radius r: (x - h) squared + (y - k) squared + (z - l) squared = r squared, where the centre is a satellite position and r is the measured range (pseudorange).",
      "For a satellite at (2, 3, 6) with a measured range r = 7, write (x - 2) squared + (y - 3) squared + (z - 6) squared = 49.",
      "Test the candidate point (2, 3, 13): (0) squared + (0) squared + (7) squared = 49, so the point lies ON the sphere, confirming it is one possible position at that range.",
      "Explain that each satellite gives one range sphere and the intersection of three spheres fixes the position (a fourth resolves the receiver clock error), tying back to the inside/on/outside test of week 8, and report the equation and reasoning in clear English."
    ],
    deliverable: "A coordinate-geometry note in English giving the range sphere (x - 2) squared + (y - 3) squared + (z - 6) squared = 49 for a satellite at (2, 3, 6) and range 7, an on-sphere test, and the intersection-of-spheres model of a GNSS fix.",
    assessmentCriteria: [
      "The sphere with centre away from the origin is written correctly.",
      "The equation is correct for the satellite at (2, 3, 6) and range 7.",
      "The on-sphere test is correct (7 squared = 49, point on the sphere).",
      "The intersection-of-spheres GNSS model is soundly explained and linked to earlier weeks, in correct English."
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
    topic: "Geometría integrada de la derrota: distancia entre dos posiciones, pendiente de la línea de rumbo e intersección de dos rectas para el punto de recalada",
    week: 13,
    taskId: "pn-gea320-w13-compute-full-track-geometry",
    taskTitle: "Compute The Full Track Geometry For The Passage",
    scenario: "The passage is described by waypoints plotted as coordinate points on a local grid. You must reduce the whole track to analytic geometry: leg lengths, track directions and the grid position where two planned track lines meet at a waypoint.",
    instructions: [
      "Compute the distance between successive waypoints using the distance-between-two-points formula.",
      "Find the slope of each track line and relate it to the leg's direction.",
      "Write the equations of two adjacent track lines and solve for their intersection at the waypoint.",
      "Report the leg lengths, track directions and the intersection position in correct maritime English."
    ],
    deliverable: "A track-geometry sheet giving each leg length, its slope-based direction and the computed waypoint intersection.",
    assessmentCriteria: [
      "Distances between waypoints are computed correctly.",
      "Track-line slopes are found and correctly related to direction.",
      "The intersection of the two track lines is solved correctly.",
      "The results are reported in correct maritime English."
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
    topic: "Geometría integrada de la maniobra: circunferencia de la curva de evolución, distancia de un punto a una recta para librar un peligro y ángulo entre dos rectas",
    week: 14,
    taskId: "pn-gea320-w14-model-turn-clearance-geometry",
    taskTitle: "Model The Turn And Clearance Geometry For A Course Change",
    scenario: "At a course change the ship follows a turning circle of known radius, and a charted danger lies near the new track. You must model the turn as a circle and prove geometrically that the ship will clear the danger.",
    instructions: [
      "Write the equation of the turning circle from its centre and radius on the grid.",
      "Compute the perpendicular distance from the charted danger point to the new track line.",
      "Find the angle between the old and new track lines to describe the size of the alteration.",
      "Report the clearance distance and the alteration angle in correct maritime English."
    ],
    deliverable: "A turn-geometry note giving the turning-circle equation, the point-to-line clearance and the alteration angle.",
    assessmentCriteria: [
      "The turning-circle equation is formed correctly from centre and radius.",
      "The point-to-line clearance distance is computed correctly.",
      "The angle between the track lines is found correctly.",
      "The clearance and angle are reported in correct maritime English."
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
    unit: "Geometría Analítica del Espacio",
    topic: "Situación integrada por distancias: esferas de distancia y la situación GNSS, línea de posición hiperbólica y distancia entre dos puntos",
    week: 15,
    taskId: "pn-gea320-w15-fix-ship-range-spheres-hyperbola",
    taskTitle: "Fix The Ship By Range Spheres And A Hyperbolic Line",
    scenario: "You must reconstruct a fix from first principles: the GNSS receiver gives ranges to satellites modelled as spheres, and a hyperbolic system gives a line of position from a difference of ranges. You combine them into one position.",
    instructions: [
      "Write the equations of the range spheres and reduce them to locate the GNSS position.",
      "Form the hyperbola from the difference of distances to two stations and obtain its line of position.",
      "Combine the results and compute the distance between the GNSS position and the hyperbolic line as a consistency check.",
      "Report the fixed position and its consistency in correct maritime English."
    ],
    deliverable: "A geometric fix worksheet giving the range-sphere position, the hyperbolic line of position and their agreement.",
    assessmentCriteria: [
      "The range-sphere equations are formed and reduced correctly.",
      "The hyperbolic line of position is derived correctly from the range difference.",
      "The consistency distance between the two is computed correctly.",
      "The fix and its consistency are reported in correct maritime English."
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
    topic: "Verificación geométrica ante un peligro: posición de un punto respecto a la circunferencia, distancia de un punto a una recta e intersección de rectas",
    week: 16,
    taskId: "pn-gea320-w16-verify-clearance-from-shoal",
    taskTitle: "Verify The Ship Will Clear The Shoal Geometrically",
    scenario: "A shoal is charted as a circle of danger on the grid and the ship stands on toward it. Before altering you must prove geometrically whether the present track enters the danger circle and by how much a corrected track would clear it.",
    instructions: [
      "Test whether the ship's present position lies inside, on or outside the danger circle.",
      "Compute the perpendicular distance from the danger-circle centre to the present track line and compare it with the radius.",
      "Find where a corrected track line intersects the safe-water line and confirm it clears the circle.",
      "Report the danger assessment and the corrected track in correct SMCP English."
    ],
    deliverable: "A clearance-verification note stating whether the present track enters the danger circle and the corrected safe track.",
    assessmentCriteria: [
      "The point-versus-circle position test is applied correctly.",
      "The centre-to-track distance is compared with the radius correctly.",
      "The corrected track intersection is computed and shown to clear.",
      "The assessment and corrected track are reported in correct SMCP English."
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
    unit: "Parábola, elipse e hipérbola",
    topic: "Auditoría integral de los cálculos analíticos: rectas, circunferencia y cónicas aplicadas a la situación y la derrota",
    week: 17,
    taskId: "pn-gea320-w17-audit-analytic-geometry-calculations",
    taskTitle: "Audit The Analytic-Geometry Position And Track Calculations",
    scenario: "The instructor hands you a completed analytic-geometry workbook used to plan a passage and asks you to audit every calculation: distances, slopes, intersections, the turning circle, the conic lines of position, for internal consistency.",
    instructions: [
      "Re-verify the straight-line results, distances, slopes, intersections and point-to-line clearances.",
      "Check the turning-circle equation and the point-versus-circle danger tests.",
      "Confirm the parabolic and hyperbolic lines of position are correctly formed and consistent.",
      "Issue a calculation-audit statement of findings in correct maritime English."
    ],
    deliverable: "A calculation-audit statement confirming the line, circle and conic results or listing the errors found.",
    assessmentCriteria: [
      "Straight-line distances, slopes and clearances are re-verified correctly.",
      "The circle equation and danger tests are checked correctly.",
      "The conic lines of position are confirmed consistent.",
      "The audit statement is written in correct maritime English."
    ],
    xp: 30,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "GEA320",
    subjectName: "Geometría Analítica",
    subjectId: "pn-s3-geometria-analitica",
    unit: "Línea recta",
    topic: "Integración de fin de semestre: síntesis del método analítico de situación y derrota para la sesión informativa al capitán",
    week: 18,
    taskId: "pn-gea320-w18-deliver-geometric-navigation-brief",
    taskTitle: "Deliver The Geometric Navigation Calculation Brief",
    scenario: "At the planning review you must explain to the master how analytic geometry underpins the passage: how track geometry, turning circles, danger clearances and the range-and-hyperbolic fix were computed and why they are trustworthy.",
    instructions: [
      "Summarise how leg distances, slopes and waypoint intersections define the planned track.",
      "Present the turning-circle model and the geometric clearances that keep the ship off charted dangers.",
      "Explain how the range-sphere and hyperbolic fix reconstruct position and how consistency was checked.",
      "Deliver the geometric calculation brief in correct maritime English and answer questions."
    ],
    deliverable: "A concise brief showing how analytic geometry supports the passage's tracks, clearances and fixes.",
    assessmentCriteria: [
      "Track geometry is presented clearly and correctly.",
      "Turning-circle and clearance geometry are explained soundly.",
      "The range-and-hyperbolic fix method and its checks are explained correctly.",
      "The brief is delivered in correct maritime English."
    ],
    xp: 30,
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
    subjectCode: "DIN321",
    subjectName: "Dinámica",
    subjectId: "pn-s3-dinamica",
    unit: "Cinemática de Partículas y Cuerpos Rígidos",
    topic: "Traslación de cuerpos rígidos",
    week: 9,
    taskId: "pn-din321-w09-rigid-body-translation",
    taskTitle: "Describe A Vessel In Pure Translation",
    scenario: "The vessel is steaming ahead on a steady straight course without turning. The officer asks the cadet to describe this motion as the translation of a rigid body and to distinguish it from rotation.",
    instructions: [
      "Define the translation of a rigid body: every point of the body has the same velocity and the same acceleration at any instant, and any line drawn in the body stays parallel to itself (there is no rotation).",
      "Distinguish rectilinear translation (a straight path, such as steaming steadily ahead) from curvilinear translation (a curved path with the body not rotating), giving a shipboard example of each.",
      "State that because every point moves alike, the whole ship can be treated as a single particle at its centre of gravity for this motion, linking back to the particle dynamics of weeks 1 and 2.",
      "Report the description in clear English."
    ],
    deliverable: "A note in English defining translation of a rigid body (all points move alike, no rotation), distinguishing rectilinear from curvilinear translation with examples, and treating the ship as a particle at its centre of gravity.",
    assessmentCriteria: [
      "Translation is correctly defined (all points share velocity and acceleration, no rotation).",
      "Rectilinear and curvilinear translation are correctly distinguished with examples.",
      "The link to treating the ship as a particle at its centre of gravity is sound.",
      "The description is clear and in correct English."
    ],
    xp: 20,
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
    topic: "Rotación de un cuerpo rígido respecto a un eje fijo: velocidad y aceleración angular",
    week: 10,
    taskId: "pn-din321-w10-fixed-axis-rotation",
    taskTitle: "Analyse A Winch Drum Rotating About A Fixed Axis",
    scenario: "A mooring winch drum spins up about its fixed shaft as it heaves in a line. The officer asks the cadet to relate the drum's angular motion to the linear motion of a point on its rim.",
    instructions: [
      "State the fixed-axis relations for a point at radius r: linear speed v = omega r, tangential acceleration a_t = alpha r, and centripetal acceleration a_n = omega squared r.",
      "The drum accelerates from rest to omega = 10 rad/s in t = 5 s, so the angular acceleration alpha = (omega - omega0) / t = (10 - 0) / 5 = 2 rad/s squared.",
      "For a point on the drum rim at r = 0.4 m, find the rim speed at 5 s: v = omega r = 10 x 0.4 = 4 m/s, and the tangential acceleration a_t = alpha r = 2 x 0.4 = 0.8 m/s squared.",
      "Report the angular acceleration and the rim speed and tangential acceleration with units, in clear English."
    ],
    deliverable: "A rotation note in English giving the angular acceleration (alpha = 2 rad/s squared), the rim speed (v = 4 m/s) and the tangential acceleration (a_t = 0.8 m/s squared) for the drum, with the working shown.",
    assessmentCriteria: [
      "The fixed-axis relations (v = omega r, a_t = alpha r, a_n = omega squared r) are stated correctly.",
      "The angular acceleration is correct (alpha = 10 / 5 = 2 rad/s squared).",
      "The rim speed and tangential acceleration are correct (v = 4 m/s, a_t = 0.8 m/s squared).",
      "The results carry correct units, in correct English."
    ],
    xp: 20,
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
    topic: "Cinética de cuerpos rígidos: momento de inercia y M = I alpha",
    week: 11,
    taskId: "pn-din321-w11-rigid-body-kinetics",
    taskTitle: "Find The Torque To Spin Up A Winch Drum",
    scenario: "Continuing from the winch drum, the officer asks the cadet to apply rotational kinetics to find the torque the motor must supply to give the drum its angular acceleration.",
    instructions: [
      "State the rotational form of Newton's second law: the net torque M = I alpha, where I is the moment of inertia of the body about its axis, and for a solid cylinder I = (1/2) m R squared.",
      "For a drum of mass m = 200 kg and radius R = 0.4 m, compute the moment of inertia: I = 0.5 x 200 x 0.4 squared = 0.5 x 200 x 0.16 = 16 kg m squared.",
      "To give the angular acceleration alpha = 2 rad/s squared found in week 10, compute the required torque: M = I alpha = 16 x 2 = 32 N m, noting that friction in the bearings adds to this in practice.",
      "Report the moment of inertia and the required torque with units, in clear English."
    ],
    deliverable: "A kinetics note in English giving the moment of inertia of the drum (I = 16 kg m squared) and the torque required for alpha = 2 rad/s squared (M = I alpha = 32 N m), with the working and a note that friction adds to it.",
    assessmentCriteria: [
      "The rotational second law (M = I alpha) and the cylinder inertia (I = (1/2) m R squared) are stated correctly.",
      "The moment of inertia is correct (0.5 x 200 x 0.16 = 16 kg m squared).",
      "The required torque is correct (16 x 2 = 32 N m) with friction noted.",
      "The results carry correct units, in correct English."
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
    unit: "Cinemática de Partículas y Cuerpos Rígidos",
    topic: "Movimiento general en el plano: traslación más rotación y centro instantáneo (buque en la curva de evolución)",
    week: 12,
    taskId: "pn-din321-w12-general-plane-motion",
    taskTitle: "Analyse A Vessel's Turn As General Plane Motion",
    scenario: "As the closing task of the subject the vessel is in a turning circle, advancing while it yaws, which is general plane motion. The officer asks the cadet to analyse it as translation plus rotation and to explain the pivot point, integrating the earlier rigid-body weeks.",
    instructions: [
      "State that general plane motion is the translation of the centre of gravity plus a rotation about the centre of gravity, so the velocity of any point equals the velocity of the centre of gravity plus omega times its distance from the centre of gravity.",
      "For a ship advancing at v_G = 6 m/s and yawing at omega = 0.05 rad/s (the rate of turn), find the extra tangential speed of a point at the bow r = 60 m forward of the centre of gravity: omega r = 0.05 x 60 = 3 m/s.",
      "Explain the instantaneous centre of rotation (the pivot point of the turn) and why, with the pivot lying forward, the stern swings out with a large transverse velocity, which is the practical danger in a turn.",
      "Report the analysis and the pivot-point consequence in clear English, integrating translation (week 9), rotation (week 10) and kinetics (week 11)."
    ],
    deliverable: "A general-plane-motion note in English decomposing the turn into translation of the centre of gravity plus rotation, giving the bow's extra speed (omega r = 3 m/s), and explaining the pivot point and why the stern swings out.",
    assessmentCriteria: [
      "General plane motion is correctly decomposed into translation plus rotation about the centre of gravity.",
      "The extra tangential speed at the bow is correct (0.05 x 60 = 3 m/s).",
      "The pivot point and the stern swinging out are correctly explained as the practical danger.",
      "The analysis integrates the earlier rigid-body weeks, in correct English."
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
    unit: "Cinemática de Partículas y Cuerpos Rígidos",
    topic: "Análisis integrado de la parada: movimiento uniformemente acelerado y distancia de parada, segunda ley de Newton y trabajo y energía",
    week: 13,
    taskId: "pn-din321-w13-analyse-crash-stop-dynamics",
    taskTitle: "Analyse The Vessel's Crash-Stop Dynamics",
    scenario: "The master needs the crash-stop performance of the ship for the approach. You must model the deceleration, the retarding force and the energy dissipated when the ship is stopped from full ahead.",
    instructions: [
      "Apply the kinematic equations to find the stopping distance and time for the given deceleration.",
      "Use Newton's second law to find the retarding force needed to produce that deceleration.",
      "Apply the work-energy principle to find the kinetic energy dissipated in the stop.",
      "Report the stopping distance, force and energy to the bridge team in correct maritime English."
    ],
    deliverable: "A crash-stop analysis giving stopping distance and time, retarding force and energy dissipated.",
    assessmentCriteria: [
      "The kinematic stopping distance and time are computed correctly.",
      "Newton's second law is applied correctly to find the retarding force.",
      "The work-energy calculation of dissipated energy is correct.",
      "The results are reported in correct maritime English."
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
    topic: "Análisis integrado del atraque: impulso y cantidad de movimiento en la maniobra, colisión plástica en el contacto y trabajo y energía en las defensas",
    week: 14,
    taskId: "pn-din321-w14-analyse-berthing-momentum",
    taskTitle: "Analyse The Momentum Of A Berthing Manoeuvre",
    scenario: "The ship comes alongside at a small closing speed and contacts the fenders. You must analyse the momentum brought in, the plastic nature of the contact and the energy the fenders must absorb.",
    instructions: [
      "Compute the ship's momentum on approach from its mass and closing speed.",
      "Treat the contact as a plastic interaction and find the impulse delivered to the fenders.",
      "Use the work-energy principle to find the energy the fenders must absorb during compression.",
      "Report the berthing energy and any speed limit to the bridge team in correct maritime English."
    ],
    deliverable: "A berthing-dynamics analysis giving approach momentum, contact impulse and fender energy absorbed.",
    assessmentCriteria: [
      "Approach momentum is computed correctly.",
      "The plastic-contact impulse is derived correctly.",
      "The fender energy absorption is computed correctly.",
      "The results are reported in correct maritime English."
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
    topic: "Análisis integrado del chigre: rotación respecto a un eje fijo, par para acelerar el tambor con M = I alpha y trabajo y energía del izado",
    week: 15,
    taskId: "pn-din321-w15-analyse-mooring-winch-dynamics",
    taskTitle: "Analyse The Mooring Winch Dynamics End To End",
    scenario: "During mooring the winch drum must accelerate to heaving speed and haul in a load. You must analyse the drum's rotation, the torque required to spin it up and the work done to bring the mooring line in.",
    instructions: [
      "Analyse the drum rotating about its fixed axis to relate angular speed to the line's heaving speed.",
      "Apply M equals I alpha to find the torque needed to accelerate the drum to heaving speed.",
      "Use the work-energy principle to find the work done in hauling the mooring line over the required distance.",
      "Report the winch torque and work to the deck team in correct maritime English."
    ],
    deliverable: "A winch-dynamics analysis giving the angular relationship, the spin-up torque and the hauling work done.",
    assessmentCriteria: [
      "The fixed-axis rotation and angular-to-line-speed relation are correct.",
      "The M equals I alpha torque calculation is correct.",
      "The work done hauling the line is computed correctly.",
      "The results are reported in correct maritime English."
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
    unit: "Cinemática de Partículas y Cuerpos Rígidos",
    topic: "Análisis de una maniobra evasiva: movimiento general en el plano y centro instantáneo, aceleración centrípeta y cantidad de movimiento",
    week: 16,
    taskId: "pn-din321-w16-analyse-evasive-turn-plane-motion",
    taskTitle: "Analyse An Evasive Turn As General Plane Motion",
    scenario: "To avoid a close-quarters situation shown on AIS the ship makes a hard evasive turn. You must analyse the turn as general plane motion, the centripetal acceleration on the ship and the momentum change through the manoeuvre.",
    instructions: [
      "Model the turn as translation plus rotation and locate the instantaneous centre of the ship's motion.",
      "Compute the centripetal acceleration for the turn radius and speed.",
      "Find the change in the ship's momentum through the alteration of course.",
      "Report the turn analysis and any limiting speed to the officer of the watch in correct SMCP English."
    ],
    deliverable: "An evasive-turn analysis giving the plane-motion model, centripetal acceleration and momentum change.",
    assessmentCriteria: [
      "The turn is correctly modelled as general plane motion with its instantaneous centre.",
      "Centripetal acceleration is computed correctly.",
      "The momentum change through the turn is found correctly.",
      "The analysis is reported in correct SMCP English."
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
    topic: "Auditoría integral de los cálculos de dinámica: cinemática, leyes de Newton, trabajo-energía e impulso-cantidad de movimiento",
    week: 17,
    taskId: "pn-din321-w17-audit-ship-dynamics-calculations",
    taskTitle: "Audit The Full Ship-Dynamics Calculation Set",
    scenario: "The chief officer asks you to audit the dynamics calculation set behind the ship's manoeuvring data: crash stop, berthing energy, winch torque and the evasive turn, checking each against the underlying principles.",
    instructions: [
      "Re-verify the kinematic and Newton's-second-law results for the crash stop.",
      "Check the momentum, impulse and work-energy figures for berthing and the winch.",
      "Confirm the plane-motion and centripetal results for the evasive turn are consistent.",
      "Issue a dynamics-calculation audit statement in correct maritime English."
    ],
    deliverable: "A dynamics-calculation audit statement confirming the manoeuvring figures or listing the errors found.",
    assessmentCriteria: [
      "Crash-stop kinematics and force are re-verified correctly.",
      "Berthing and winch momentum/energy figures are checked correctly.",
      "The evasive-turn results are confirmed consistent.",
      "The audit statement is written in correct maritime English."
    ],
    xp: 30,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "DIN321",
    subjectName: "Dinámica",
    subjectId: "pn-s3-dinamica",
    unit: "Leyes del Movimiento de Newton",
    topic: "Integración de fin de semestre: síntesis del comportamiento dinámico del buque para la sesión informativa al capitán",
    week: 18,
    taskId: "pn-din321-w18-deliver-vessel-dynamics-brief",
    taskTitle: "Deliver The Vessel Dynamics Analysis Brief",
    scenario: "At the manoeuvring review you must present to the master how the ship behaves dynamically: how it stops, how it berths, how the winches perform and how it responds in an evasive turn, drawing the whole semester's mechanics together.",
    instructions: [
      "Summarise the crash-stop performance in distance, force and energy terms.",
      "Present the berthing energy and winch performance figures with their operating limits.",
      "Explain the evasive-turn behaviour using the plane-motion and centripetal results.",
      "Deliver the dynamics brief to the master in correct maritime English and answer questions."
    ],
    deliverable: "A concise vessel-dynamics brief covering stopping, berthing, winch and turning behaviour with limits.",
    assessmentCriteria: [
      "Crash-stop performance is presented clearly and correctly.",
      "Berthing and winch figures are presented with sound operating limits.",
      "The evasive-turn behaviour is explained correctly.",
      "The brief is delivered in correct maritime English."
    ],
    xp: 30,
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
    subjectCode: "ING317",
    subjectName: "Inglés Marítimo III",
    subjectId: "pn-s3-ingles-maritimo-iii",
    unit: "Introducción: Inglés Marítimo",
    topic: "Comando del timonel: órdenes al timonel (helm orders SMCP) y su repetición",
    week: 9,
    taskId: "pn-ing317-w09-helm-orders",
    taskTitle: "Give And Acknowledge Standard Helm Orders",
    scenario: "The vessel is conned through the channel and the officer gives helm orders to the helmsman, who must repeat each one back exactly. The officer asks the cadet to give a set of standard SMCP helm orders and show the correct read-back.",
    instructions: [
      "Give a set of standard SMCP helm orders in English, for example 'Starboard ten', 'Midships', 'Steady', 'Steady as she goes', 'Hard-a-port' and 'Ease to five'.",
      "Show the helmsman's correct read-back for each, since every order is repeated back word for word and its completion reported, for example 'Starboard ten, wheel is ten to starboard'.",
      "Explain why every helm order is acknowledged and repeated (to confirm the correct rudder is applied) and how the wheel being over and then steady is reported.",
      "Report a short conning exchange of orders and read-backs in correct SMCP English."
    ],
    deliverable: "A short conning exchange in English giving standard SMCP helm orders with the helmsman's exact read-back and completion report, and a note on why orders are repeated back.",
    assessmentCriteria: [
      "The helm orders are standard and correctly worded (SMCP style).",
      "The read-back is exact and the completion is reported for each order.",
      "The reason for repeating orders back is correctly explained.",
      "The exchange reads as a real conning exchange, in correct SMCP English."
    ],
    xp: 20,
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
    topic: "Rutinas de operación a bordo: órdenes estandarizadas de máquinas (engine / telegraph orders)",
    week: 10,
    taskId: "pn-ing317-w10-engine-orders",
    taskTitle: "Pass Standard Engine Orders Bridge To Engine Room",
    scenario: "The vessel is manoeuvring alongside and the bridge passes engine (telegraph) orders to the engine room. The officer asks the cadet to give the standard engine order sequence in English with its acknowledgement.",
    instructions: [
      "Give the standard engine order sequence in English, for example 'Stand by engines', 'Dead slow ahead', 'Slow ahead', 'Half ahead', 'Full ahead', 'Stop engines', 'Slow astern' and 'Finished with engines'.",
      "Show the engine room's acknowledgement or read-back and how the movement made is confirmed back to the bridge.",
      "Explain 'stand by engines' and 'finished with engines' and when each is used in a manoeuvre.",
      "Report a short manoeuvring exchange of engine orders and acknowledgements in correct maritime English."
    ],
    deliverable: "A short manoeuvring exchange in English giving the standard engine order sequence with the engine room's acknowledgement, and an explanation of 'stand by engines' and 'finished with engines'.",
    assessmentCriteria: [
      "The engine orders are standard and correctly worded and sequenced.",
      "The engine room's acknowledgement and confirmation are correct.",
      "'Stand by engines' and 'finished with engines' are correctly explained.",
      "The exchange reads professionally, in correct maritime English."
    ],
    xp: 20,
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
    topic: "Chequeo de abastecimientos y procedimientos de manejo de carga: cantidad, peso y secuencia",
    week: 11,
    taskId: "pn-ing317-w11-stores-cargo-handling",
    taskTitle: "Check Stores And Brief A Cargo Operation In English",
    scenario: "Stores are being received and a cargo operation is about to start. The officer asks the cadet to check the delivery against the order and brief the cargo-handling procedure step by step in English.",
    instructions: [
      "Check a delivery of stores against the order, stating the quantities, units and weights and querying any discrepancy, for example 'we ordered twenty drums but only eighteen have been delivered'.",
      "Brief a cargo-handling procedure step by step using sequencing language (first, then, before, after) and the imperative or passive, for example 'first the hatch will be opened, then the lashings are removed'.",
      "Include one clear safety instruction and one measurement or quantity in the brief, for example 'do not exceed the safe working load of five tonnes'.",
      "Report the stores check and the cargo brief in clear maritime English."
    ],
    deliverable: "A stores check and cargo-operation brief in English, stating quantities, units and weights with a discrepancy query, a step-by-step procedure with sequencing language, and one safety instruction with a measurement.",
    assessmentCriteria: [
      "The stores check states quantities, units and weights and queries a discrepancy correctly.",
      "The cargo brief is a clear step-by-step procedure with correct sequencing language.",
      "One safety instruction and one measurement or quantity are correctly included.",
      "The report is clear and professional, in correct maritime English."
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
    unit: "Introducción: Inglés Marítimo",
    topic: "Puestos a bordo y dar y recibir direcciones a bordo y en puerto: maniobra de atraque",
    week: 12,
    taskId: "pn-ing317-w12-mooring-directions",
    taskTitle: "Direct A Mooring Operation And Report To The Bridge",
    scenario: "As the closing task of the subject the vessel is berthing at Altamira, and the cadet at a mooring station must direct the line handlers and report to the bridge, integrating helm orders, engine orders and line-handling directions in real maritime English following SMCP.",
    instructions: [
      "Give and receive directions between stations using SMCP line-handling English, for example 'Send out the head line', 'Make fast fore and aft', 'Slack away the spring', 'Heave in the stern line' and 'Hold on'.",
      "Report distances and readiness to the bridge, for example 'ten metres to the berth', 'forward is all fast' and 'let go the tug'.",
      "Integrate the manoeuvre picture by relaying and acknowledging one helm order and one engine order from the bridge during the berthing.",
      "Report the whole berthing exchange as a short multi-turn script in correct SMCP-style English."
    ],
    deliverable: "A short multi-turn berthing script in English directing the mooring parties with SMCP line-handling orders, reporting distances and readiness to the bridge, and integrating one helm order and one engine order.",
    assessmentCriteria: [
      "The line-handling orders are standard SMCP and used correctly at the stations.",
      "Distances and readiness are reported clearly to the bridge.",
      "One helm order and one engine order are correctly integrated into the manoeuvre.",
      "The exchange is a coherent multi-turn berthing script, in correct SMCP-style English."
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
    topic: "Intercambio completo de arribo integrando las formas de futuro: reporte de ETA, VTS y solicitud de práctico (SMCP)",
    week: 13,
    taskId: "pn-ing317-w13-conduct-full-arrival-exchange-vts-pilot",
    taskTitle: "Conduct The Full Arrival Exchange With VTS And Pilot",
    scenario: "Your ship is inbound to Tampico. On the VHF simulator you must run the complete arrival exchange: report your ETA using the correct future forms, work with VTS and request a pilot, all in Standard Marine Communication Phrases.",
    instructions: [
      "Report your ETA and intentions to Tampico VTS using will, going to and the present continuous correctly.",
      "Exchange traffic and berthing information with VTS following the SMCP arrival sequence.",
      "Request the pilot and confirm the boarding arrangements using standard phrases.",
      "Deliver the whole exchange on the VHF simulator in correct SMCP English."
    ],
    deliverable: "A completed VHF arrival exchange with VTS and pilot request performed in SMCP.",
    assessmentCriteria: [
      "The ETA and intentions use the correct future forms.",
      "The VTS information exchange follows the SMCP arrival sequence.",
      "The pilot request and boarding confirmation are handled correctly.",
      "The whole exchange is delivered in correct SMCP English."
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
    unit: "Presente perfecto",
    topic: "Relevo de guardia integrado: reporte del trabajo terminado en presente perfecto, retransmisión de órdenes en estilo indirecto y anotaciones en voz pasiva",
    week: 14,
    taskId: "pn-ing317-w14-take-over-navigation-watch-log",
    taskTitle: "Take Over The Navigation Watch And Log It",
    scenario: "You are relieving the officer of the watch. You must take over correctly, receiving what has been done, relaying the master's standing orders as reported speech, and writing the handover into the log in the passive voice.",
    instructions: [
      "Report and receive the completed work of the watch using the present perfect.",
      "Relay the master's standing orders to the incoming lookout using reported speech with correct backshift.",
      "Write the handover entry in the log using the passive voice.",
      "Deliver the spoken handover and confirm the log entry in correct deck-watch English."
    ],
    deliverable: "A completed watch handover with a spoken brief and a passive-voice log entry.",
    assessmentCriteria: [
      "The present perfect is used correctly to report completed work.",
      "Standing orders are relayed correctly in reported speech.",
      "The log entry is written correctly in the passive voice.",
      "The handover is delivered in correct deck-watch English."
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
    unit: "Introducción: Inglés Marítimo",
    topic: "Maniobra de atraque integrada: órdenes al timonel, órdenes de máquinas y dirección de la maniobra de atraque",
    week: 15,
    taskId: "pn-ing317-w15-con-ship-into-berth-helm-engine",
    taskTitle: "Con The Ship Into The Berth With Helm And Engine Orders",
    scenario: "You are conning the ship onto the berth. You must give standard helm orders to the wheel, engine orders to the engine room and directions to the mooring parties, each acknowledged correctly, in one continuous manoeuvre.",
    instructions: [
      "Give and obtain acknowledgement of standard helm orders to bring the ship on line.",
      "Pass standard engine orders from the bridge to the engine room at the right moments.",
      "Direct the mooring parties fore and aft using standard on-board directions.",
      "Deliver the whole conning sequence in correct SMCP helm, engine and mooring English."
    ],
    deliverable: "A performed conning sequence bringing the ship alongside with helm, engine and mooring orders in SMCP.",
    assessmentCriteria: [
      "Helm orders are given and acknowledged correctly.",
      "Engine orders are passed correctly at the right moments.",
      "Mooring directions are clear and correctly ordered.",
      "The whole sequence is delivered in correct SMCP English."
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
    unit: "Condicionales",
    topic: "Respuesta a una emergencia integrada: comandos de emergencia a bordo, primer y segundo condicional para contingencias y difusión por VHF",
    week: 16,
    taskId: "pn-ing317-w16-command-emergency-response-broadcast",
    taskTitle: "Command An Emergency Response And Broadcast It",
    scenario: "A fire is reported on board while at anchor off Tampico. You must issue the standard emergency commands to the crew, state the contingency actions using conditionals, and make the external broadcast on the VHF simulator.",
    instructions: [
      "Issue the standard emergency commands to muster and respond to the crew.",
      "State the contingency actions to the team using first and second conditionals correctly.",
      "Compose and make the appropriate urgency or distress broadcast on the VHF simulator.",
      "Deliver the internal commands and external broadcast in correct SMCP English."
    ],
    deliverable: "A performed emergency response with internal commands and a VHF broadcast in SMCP.",
    assessmentCriteria: [
      "The standard emergency commands are issued correctly.",
      "First and second conditionals are used correctly for the contingencies.",
      "The VHF urgency or distress broadcast follows the correct format.",
      "Commands and broadcast are delivered in correct SMCP English."
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
    unit: "Voz pasiva",
    topic: "Compilación integrada de la comunicación escrita del puente: voz pasiva, superlativos, formas de futuro y estilo indirecto en el plan y los reportes",
    week: 17,
    taskId: "pn-ing317-w17-compile-written-bridge-communication",
    taskTitle: "Compile The Full Written Bridge Communication Package",
    scenario: "For the voyage file you must produce the written bridge communication package: a passage-plan statement, a set of log entries and a cargo brief, using the full range of forms studied this semester correctly and consistently.",
    instructions: [
      "Write the passage-plan statement using future forms and superlatives where they describe the route and ship.",
      "Write the log entries in the passive voice and relay the standing orders in reported speech.",
      "Write the stores and cargo brief with correct quantities, weights and sequence.",
      "Present the complete written package in correct maritime English."
    ],
    deliverable: "A written bridge communication package with passage plan, passive-voice log entries and a cargo brief.",
    assessmentCriteria: [
      "Future forms and superlatives are used correctly in the passage-plan statement.",
      "Passive voice and reported speech are used correctly in the log entries.",
      "The stores and cargo brief is accurate and well ordered.",
      "The whole package is written in correct maritime English."
    ],
    xp: 30,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "ING317",
    subjectName: "Inglés Marítimo III",
    subjectId: "pn-s3-ingles-maritimo-iii",
    unit: "Introducción: Inglés Marítimo",
    topic: "Integración de fin de semestre: relevo de guardia completo y sesión informativa del pasaje en inglés marítimo",
    week: 18,
    taskId: "pn-ing317-w18-deliver-complete-watch-handover",
    taskTitle: "Deliver The Complete Watch Handover Brief In English",
    scenario: "It is the end-of-semester capstone. You must deliver a complete spoken watch handover and voyage brief in maritime English, integrating handover reporting, orders, the traffic and passage picture and the emergency contingencies.",
    instructions: [
      "Brief what has been done and the current situation using the present perfect and passive reporting.",
      "State the passage plan and the intentions using the correct future forms.",
      "Relay the master's orders and the emergency contingencies using reported speech and conditionals.",
      "Deliver the whole handover brief fluently in correct SMCP English and answer questions."
    ],
    deliverable: "A complete spoken watch handover and voyage brief delivered in maritime English.",
    assessmentCriteria: [
      "The situation report uses present perfect and passive correctly.",
      "The passage plan is stated with correct future forms.",
      "Orders and contingencies are relayed correctly with reported speech and conditionals.",
      "The brief is delivered fluently in correct SMCP English."
    ],
    xp: 30,
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
    subjectCode: "PMR322",
    subjectName: "Prácticas Marineras III",
    subjectId: "pn-s3-practicas-marineras-iii",
    unit: "Manejo de Botes y Embarcaciones menores",
    topic: "Manejo del bote con motor: aproximación a una persona en el agua y atraque",
    week: 9,
    taskId: "pn-pmr322-w09-powered-boat-handling",
    taskTitle: "Handle A Powered Rescue Boat In A Recovery",
    scenario: "Following on from the man-overboard drill, the cadet is coxswain of the powered rescue boat and must recover a person from the water. The bosun asks the cadet to set out how the boat is handled during the approach and recovery, from the boat-handling side.",
    instructions: [
      "Describe getting the powered boat under way and manoeuvring toward the casualty: approach from downwind or down-current so the boat is set toward the person, and keep the propeller clear of the casualty by going to neutral or stopping the engine when close.",
      "Describe coming alongside the casualty and recovering them on the lee side, keeping the boat steady and under control.",
      "State how wind and current affect a small boat's handling and how the coxswain allows for them during the approach.",
      "Report the boat-handling plan in clear maritime English."
    ],
    deliverable: "A note in English setting out the powered-boat handling for a recovery: the approach from downwind or down-current, keeping the propeller clear, the lee-side recovery, and allowing for wind and current.",
    assessmentCriteria: [
      "The approach direction (downwind / down-current) and propeller safety are correct.",
      "The lee-side recovery keeping the boat steady is correctly described.",
      "The effect of wind and current on handling is soundly explained.",
      "The plan is clear and in correct maritime English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "PMR322",
    subjectName: "Prácticas Marineras III",
    subjectId: "pn-s3-practicas-marineras-iii",
    unit: "Uso de anticorrosivos, pinturas y solventes",
    topic: "Tipos de pintura y anticorrosivos y su uso; preparación de superficie",
    week: 10,
    taskId: "pn-pmr322-w10-paint-anticorrosive-systems",
    taskTitle: "Prepare And Paint A Corroded Deck Fitting",
    scenario: "A rusted bulwark fitting on deck must be treated against corrosion before it wastes further. The bosun asks the cadet to plan the surface preparation and the paint system, and to state the solvent and paint safety.",
    instructions: [
      "Describe the surface preparation: remove rust and scale by chipping, wire-brushing or sanding down to sound metal, then clean and degrease the surface, because paint fails on a poor surface.",
      "Describe the paint system in order and the purpose of each coat: the primer or anticorrosive coat to bond and protect the metal, the intermediate or undercoat to build the film, and the topcoat or finish for durability and appearance.",
      "State the solvent and paint safety: good ventilation, personal protective equipment, flammable-store precautions, and no painting or spraying near hot work or ignition sources.",
      "Report the preparation and painting plan in clear maritime English."
    ],
    deliverable: "A note in English giving the surface preparation (down to sound metal, cleaned and degreased), the paint system in order (primer or anticorrosive, undercoat, topcoat) with the purpose of each, and the solvent and paint safety.",
    assessmentCriteria: [
      "The surface preparation is correct and its importance explained.",
      "The paint system is in the right order with the purpose of each coat.",
      "The solvent and paint safety measures are sound.",
      "The plan is clear and in correct maritime English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "PMR322",
    subjectName: "Prácticas Marineras III",
    subjectId: "pn-s3-practicas-marineras-iii",
    unit: "Pintura de ductos",
    topic: "Identificación y código de colores de tuberías: agua, combustible, líneas de aire y ductos de altas temperaturas",
    week: 11,
    taskId: "pn-pmr322-w11-pipe-colour-coding",
    taskTitle: "Identify And Mark Shipboard Pipe Systems",
    scenario: "The pipes running through a space must be identified and colour-marked so any crew member recognises the service and operates the right line in an emergency. The officer asks the cadet to set out the identification scheme.",
    instructions: [
      "Explain why pipe identification and colour-coding matter (finding the right valve fast in an emergency and avoiding a dangerous mistake) and that the colours and marking bands follow a recognised standard.",
      "Assign identification to the main services, stating a distinguishing colour or marking for each: fresh and sea water lines, fuel and oil lines, compressed-air lines, and high-temperature ducts such as exhaust and steam, with the extra precaution that hot ducts are lagged or insulated.",
      "Describe how directional flow arrows and content labels are added so the flow direction and the contents are clear at a glance.",
      "Report the pipe-identification scheme in clear maritime English."
    ],
    deliverable: "A note in English giving the pipe-identification scheme: why it matters, a distinguishing colour or marking for water, fuel, air and high-temperature ducts (with lagging for hot ducts), and the flow arrows and content labels.",
    assessmentCriteria: [
      "The reason for pipe identification and colour-coding is correctly explained.",
      "The main services are each given a distinguishing marking, with hot ducts lagged.",
      "The flow arrows and content labels are correctly described.",
      "The scheme is clear and in correct maritime English."
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
    unit: "Procedimientos para controlar vías de agua",
    topic: "Materiales para control de vías de agua: apuntalamiento, cuñas, cajón de cemento y estopar una vía",
    week: 12,
    taskId: "pn-pmr322-w12-damage-control-leak",
    taskTitle: "Shore Up And Plug A Hull Leak",
    scenario: "As the closing task of the subject water is entering through a cracked plate below the waterline and the flooding must be contained. The officer asks the cadet to set out the damage-control actions, building on the types of water ingress from week 2.",
    instructions: [
      "Identify the leak and choose the control materials: wooden wedges and plugs, shoring props and pads, a collision mat over the hole from outside, and a cement box for a lasting repair.",
      "Describe shoring up the weakened area and plugging or wedging the leak, working from the source, and reducing the head of water on the hole where a list or trim can be used to lift it nearer the surface.",
      "State the safety and reporting actions: sound the bilges, start the pumps, muster the damage-control party, and keep the bridge informed of the rate of ingress.",
      "Report the damage-control actions and the status in clear maritime English."
    ],
    deliverable: "A note in English giving the damage-control response to a hull leak: the control materials chosen, shoring and plugging the leak, reducing the head of water, and the safety and reporting actions with a status to the bridge.",
    assessmentCriteria: [
      "The leak is identified and appropriate control materials are chosen.",
      "Shoring and plugging the leak and reducing the head of water are correctly described.",
      "The safety and reporting actions (sound bilges, pumps, muster party, inform bridge) are complete.",
      "The actions and status are reported clearly, in correct maritime English."
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
    topic: "Preparación integrada de cubierta para mal tiempo: trincado y andariveles, aparejos de fuerza y uso seguro de equipo y herramientas",
    week: 13,
    taskId: "pn-pmr322-w13-prepare-secure-deck-heavy-weather",
    taskTitle: "Prepare And Secure The Deck For Heavy Weather",
    scenario: "A gale is forecast on the passage and the master orders the deck secured for heavy weather. You must lash and rig everything on deck to withstand the seaway and set up safe transit for the crew.",
    instructions: [
      "Lash and secure loose gear and rig the lifelines for safe transit across the deck.",
      "Rig a purchase using blocks and tackle with the correct mechanical advantage to tension the heavy lashings.",
      "Select and use the correct tools and equipment safely for the securing work.",
      "Report the deck-secured state to the bridge in correct deck-watch English."
    ],
    deliverable: "A deck-secured-for-heavy-weather report confirming lashings, lifelines and gear stowed.",
    assessmentCriteria: [
      "Gear is lashed and lifelines rigged correctly for the seaway.",
      "The tackle is rigged with the correct mechanical advantage.",
      "Tools and equipment are selected and used safely.",
      "The secured state is reported in correct deck-watch English."
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
    unit: "Hombre al agua y embarcación de rescate",
    topic: "Recuperación integrada de hombre al agua: acciones inmediatas y maniobra de Williamson, arriado de la embarcación de rescate y manejo del bote a motor",
    week: 14,
    taskId: "pn-pmr322-w14-conduct-man-overboard-recovery",
    taskTitle: "Conduct A Man-Overboard Recovery End To End",
    scenario: "A crew member falls overboard in a moderate sea. From the deck side you must take the immediate actions, get the rescue boat launched and handle the powered boat through the approach and recovery.",
    instructions: [
      "Take the immediate man-overboard actions and support the Williamson turn from the deck.",
      "Prepare and launch the rescue boat safely with its crew.",
      "Handle the powered rescue boat on the approach to the person and complete the recovery.",
      "Report the recovery and the casualty's condition to the bridge in correct SMCP English."
    ],
    deliverable: "A man-overboard recovery report covering immediate actions, launch and casualty recovery.",
    assessmentCriteria: [
      "The immediate actions and support for the Williamson turn are correct.",
      "The rescue boat is prepared and launched safely.",
      "The powered boat is handled correctly through approach and recovery.",
      "The recovery is reported in correct SMCP English."
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
    unit: "Operaciones de remolque",
    topic: "Operación de remolque integrada: conexión y largado seguro con control de latigazo, ventaja mecánica del aparejo y uso seguro de equipo",
    week: 15,
    taskId: "pn-pmr322-w15-rig-control-safe-towing",
    taskTitle: "Rig And Control A Safe Towing Operation",
    scenario: "Your ship must pass a tow to a disabled vessel. You must rig the tow connection safely, manage the catenary and snap-back zones, and use gear that keeps the deck party clear of danger.",
    instructions: [
      "Rig the towing connection and set the catenary, keeping the deck party out of the snap-back zones.",
      "Rig a tackle with the correct mechanical advantage to help handle and tension the heavy towing gear.",
      "Select and use the correct equipment for a safe connection and a controlled release.",
      "Report the tow rigged and the safe-release plan to the bridge in correct deck-watch English."
    ],
    deliverable: "A towing-operation report confirming the connection, snap-back control and safe-release plan.",
    assessmentCriteria: [
      "The tow connection and snap-back zone control are handled correctly.",
      "The tackle is rigged with the correct mechanical advantage.",
      "Equipment is selected and used for a safe connection and release.",
      "The operation is reported in correct deck-watch English."
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
    unit: "Procedimientos para controlar vías de agua",
    topic: "Respuesta integrada a una vía de agua: tipos de vías, apuntalamiento, cuñas, cajón de cemento y estopar, con uso seguro de herramientas",
    week: 16,
    taskId: "pn-pmr322-w16-control-plug-major-hull-leak",
    taskTitle: "Control And Plug A Major Hull Leak",
    scenario: "The ship takes water through a damaged plate below the waterline. You must identify the type of ingress, stop or slow it with the damage-control materials to hand, and shore the repair to hold.",
    instructions: [
      "Identify the type of water ingress and assess the flooding rate.",
      "Plug and stem the leak using wedges, plugs and a soft or cement box as appropriate.",
      "Shore up the repair and check it holds, using the tools and materials safely.",
      "Report the leak, the action taken and the flooding status to the bridge in correct SMCP English."
    ],
    deliverable: "A damage-control report on the leak, the plugging and shoring done and the flooding status.",
    assessmentCriteria: [
      "The type of ingress and flooding rate are correctly assessed.",
      "The leak is plugged and stemmed with the correct materials.",
      "The shoring is applied correctly and checked to hold.",
      "The action and status are reported in correct SMCP English."
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
    unit: "Uso de anticorrosivos, pinturas y solventes",
    topic: "Auditoría integrada de mantenimiento de cubierta: código de colores de tuberías, pinturas y anticorrosivos e inventario de pañoles",
    week: 17,
    taskId: "pn-pmr322-w17-audit-deck-maintenance-stores-pipes",
    taskTitle: "Audit Deck Maintenance, Stores And Pipe Marking",
    scenario: "The chief officer asks you to audit the deck maintenance state before a port inspection: pipe systems correctly colour-marked, corrosion treatment and painting up to standard, and the deck-store inventory accurate.",
    instructions: [
      "Check the shipboard pipe systems are correctly identified and colour-coded.",
      "Assess the corrosion treatment and paintwork on deck fittings against the standard.",
      "Verify the deck-store inventory matches the gear held and note shortfalls.",
      "Issue a deck maintenance audit report in correct maritime English."
    ],
    deliverable: "A deck maintenance audit report on pipe marking, paintwork and the store inventory.",
    assessmentCriteria: [
      "Pipe systems are correctly checked against the colour code.",
      "Corrosion treatment and paintwork are assessed against the standard.",
      "The store inventory is verified against gear held.",
      "The audit report is written in correct maritime English."
    ],
    xp: 30,
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
    topic: "Integración de fin de semestre: síntesis del estado de alistamiento de cubierta para el relevo al oficial",
    week: 18,
    taskId: "pn-pmr322-w18-deliver-deck-readiness-brief",
    taskTitle: "Deliver The Deck Seamanship Readiness Brief",
    scenario: "At the end-of-semester handover you must brief the incoming officer on the deck's readiness: survival craft, damage-control materials, towing and heavy-weather gear, and the maintenance state, drawing the whole term together.",
    instructions: [
      "Summarise the survival craft and rescue boat readiness including engine checks.",
      "Present the damage-control, towing and heavy-weather gear and its state of readiness.",
      "State the maintenance and inventory position from the deck audit.",
      "Deliver the deck readiness brief to the incoming officer in correct maritime English."
    ],
    deliverable: "A concise deck seamanship readiness brief covering survival craft, damage control, gear and maintenance.",
    assessmentCriteria: [
      "Survival craft and rescue boat readiness are presented correctly.",
      "Damage-control, towing and heavy-weather gear readiness is presented clearly.",
      "The maintenance and inventory position is stated accurately.",
      "The brief is delivered in correct maritime English."
    ],
    xp: 30,
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
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "pn-s3-educacion-fisica-iii",
    unit: "Condición física",
    topic: "Fuerza muscular funcional para faenas de cubierta (sin metas de peso ni de carga máxima)",
    week: 9,
    taskId: "pn-c0011iii-w09-functional-strength",
    taskTitle: "Build Functional Strength For Deck Work",
    scenario: "Deck work such as hauling lines, carrying stores and closing heavy watertight doors demands usable strength. The training officer asks the cadet to explain functional muscular strength for shipboard tasks and how it is built safely.",
    instructions: [
      "Explain functional (usable) muscular strength for shipboard tasks: the legs and core working with the back and grip together, rather than isolated maximum lifts.",
      "Give two deck tasks that need strength and how the body should be used for them (lift with the legs not the back, keep the load close to the body).",
      "Describe one safe way to build and maintain functional strength on board, using bodyweight and practical work, framed as a general habit.",
      "Keep all advice as safe general habits, with NO maximum-lift testing, no body-weight or muscle-size targets and no extreme programmes, and report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining functional muscular strength for deck work, two tasks that need it with correct body use, and a safe general way to build it, with no maximum-lift testing, weight targets or extreme programmes.",
    assessmentCriteria: [
      "Functional strength for shipboard tasks is correctly explained (legs, core, back and grip together).",
      "The two deck tasks and the correct body use (legs not back, load close) are sound.",
      "A safe general way to build functional strength is given.",
      "The advice stays as safe general habits with no maximum-lift testing, weight targets or extreme programmes, in correct maritime English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "pn-s3-educacion-fisica-iii",
    unit: "Percepción y coordinación motriz",
    topic: "Equilibrio en cubierta con el buque en movimiento; estabilidad del tronco",
    week: 10,
    taskId: "pn-c0011iii-w10-balance-moving-deck",
    taskTitle: "Keep Balance On A Moving Deck",
    scenario: "Moving safely about a rolling and pitching deck demands good balance. The training officer asks the cadet to explain dynamic balance on a moving deck and how it is trained.",
    instructions: [
      "Explain dynamic balance on a moving deck: keep a low centre of gravity, feet apart, knees soft, move with the roll, and keep one hand for the ship.",
      "Explain the role of trunk and core stability in staying upright and in controlled lifting on a moving deck.",
      "Describe one simple way balance and core stability are trained, framed as a general habit.",
      "State the safety point that a fall on deck or on a ladder in a seaway is a real injury risk, and report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining dynamic balance on a moving deck (low centre of gravity, feet apart, move with the roll, one hand for the ship), the role of core stability, a simple way to train it, and the fall-risk safety point.",
    assessmentCriteria: [
      "Dynamic balance on a moving deck is correctly explained.",
      "The role of trunk and core stability is correct.",
      "A simple, sound way to train balance is given as a general habit.",
      "The fall-risk safety point is made, in correct maritime English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "pn-s3-educacion-fisica-iii",
    unit: "Desarrollo físico integral",
    topic: "Flexibilidad y movilidad articular para trabajar en espacios confinados y prevenir lesiones",
    week: 11,
    taskId: "pn-c0011iii-w11-flexibility-mobility",
    taskTitle: "Use Flexibility To Work Safely In Tight Spaces",
    scenario: "Much shipboard work is done in confined spaces and awkward postures, in tank tops, bilges and machinery spaces. The training officer asks the cadet to explain how flexibility and mobility let the cadet work there safely and prevent strains.",
    instructions: [
      "Explain joint mobility and muscle flexibility and why they let the cadet reach and work in cramped, awkward positions without straining.",
      "Give two shipboard situations where limited flexibility risks a strain or injury and how mobility helps.",
      "Describe simple mobility and stretching as a general habit (warm up before heavy work, gentle range-of-motion movements), integrating the working posture of week 7 and the strength of week 9.",
      "Keep it as a safe general habit, with no extreme stretching and no performance targets, and report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining joint mobility and flexibility for safe work in confined spaces, two situations where limited flexibility risks injury, and simple mobility work as a general habit that integrates posture and strength, with no extreme stretching or targets.",
    assessmentCriteria: [
      "Joint mobility and flexibility for safe work in awkward positions are correctly explained.",
      "The two situations where limited flexibility risks injury are relevant.",
      "Simple mobility work is given as a general habit and integrates posture and strength.",
      "The advice stays safe and general with no extreme stretching or targets, in correct maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "pn-s3-educacion-fisica-iii",
    unit: "Natación",
    topic: "Nado en grupo y flotación para supervivencia: posición HELP y de grupo (huddle) hacia la embarcación de salvamento",
    week: 12,
    taskId: "pn-c0011iii-w12-group-survival-swim",
    taskTitle: "Survive As A Group In The Water",
    scenario: "As the closing task of the subject several people are in the water after abandoning ship and must conserve heat and reach a liferaft together. The instructor asks the cadet to set out group survival in the water, building on the survival swimming of week 3.",
    instructions: [
      "Describe flotation and heat conservation with a lifejacket: the HELP (heat escape lessening posture) for one person and the huddle for a group, and why they reduce heat loss.",
      "Describe moving as a group toward a liferaft or survival craft, staying together and helping the weakest.",
      "Explain how the earlier fitness weeks (endurance in week 1, survival swimming in week 3, and balance and strength) support survival, framed as the capacity to endure rather than performance.",
      "Keep the advice safe and general, with no breath-hold or endurance targets, and report the group-survival brief in clear maritime English."
    ],
    deliverable: "A group-survival brief in English covering flotation and heat conservation (HELP and the huddle), moving as a group to a survival craft, and how earlier fitness supports the capacity to endure, with no breath-hold or endurance targets.",
    assessmentCriteria: [
      "Flotation and heat conservation (HELP and huddle) are correctly described.",
      "Moving as a group to a survival craft and helping the weakest is correct.",
      "The link to earlier fitness is framed as capacity to endure, integrating earlier weeks.",
      "The advice stays safe and general with no breath-hold or endurance targets, in correct maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "pn-s3-educacion-fisica-iii",
    unit: "Autoevaluación funcional y plan personal",
    topic: "Plan integrado de alistamiento para la guardia: resistencia cardiorrespiratoria, fuerza funcional para faenas de cubierta y ergonomía de la guardia",
    week: 13,
    taskId: "pn-c0011iii-w13-build-watch-readiness-fitness-plan",
    taskTitle: "Build The Integrated Watch-Readiness Fitness Plan",
    scenario: "As a cadet preparing for long bridge and deck watches you must build a personal readiness plan that develops the endurance, functional strength and posture habits the watch demands, within safe and sustainable limits.",
    instructions: [
      "Set an endurance component sized to the cardiorespiratory demand of long watches.",
      "Add a functional-strength component targeted at real deck tasks, without maximal-load goals.",
      "Build in the watch-ergonomics habits, micro-pauses, stretches and posture, that prevent back and neck injury.",
      "Present the integrated readiness plan and its rationale in correct professional English."
    ],
    deliverable: "A personal watch-readiness plan integrating endurance, functional strength and ergonomics.",
    assessmentCriteria: [
      "The endurance component matches the watch demand and is sustainable.",
      "The functional-strength component targets real deck tasks safely.",
      "The ergonomics habits are correctly built in for injury prevention.",
      "The plan and rationale are presented in correct professional English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "pn-s3-educacion-fisica-iii",
    unit: "Condición física",
    topic: "Alistamiento integrado para faenas de cubierta: fuerza funcional, equilibrio en cubierta con el buque en movimiento y flexibilidad en espacios confinados",
    week: 14,
    taskId: "pn-c0011iii-w14-train-strength-balance-mobility-deck",
    taskTitle: "Train Functional Strength, Balance And Mobility For Deck Work",
    scenario: "Deck work at sea combines lifting and hauling, keeping your feet on a moving deck and working in tight spaces. You must design and demonstrate a session that trains all three together for safe deck faenas.",
    instructions: [
      "Include functional-strength movements for the lifting and hauling of deck faenas.",
      "Include trunk-stability and balance work for standing and moving on a deck that is rolling.",
      "Include flexibility and joint mobility for working safely in confined spaces.",
      "Explain and demonstrate the session and its purpose in correct professional English."
    ],
    deliverable: "A deck-work conditioning session integrating functional strength, balance and mobility, with rationale.",
    assessmentCriteria: [
      "The strength movements match real deck lifting and hauling demands.",
      "Balance and trunk-stability work suits a moving deck.",
      "The flexibility and mobility work suits confined-space work.",
      "The session and its purpose are explained in correct professional English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "pn-s3-educacion-fisica-iii",
    unit: "Nutrición e hidratación",
    topic: "Sostenimiento integrado del rendimiento en la guardia: alimentación e hidratación, micro-pausas ergonómicas y concentración",
    week: 15,
    taskId: "pn-c0011iii-w15-sustain-performance-focus-long-watch",
    taskTitle: "Sustain Performance And Focus Across A Long Watch",
    scenario: "You must plan how to hold your physical performance and mental concentration steady across a long night watch, combining fuelling and hydration, timed micro-pauses and focus techniques.",
    instructions: [
      "Plan the fuelling and hydration timed to keep energy steady through the watch.",
      "Schedule the ergonomic micro-pauses and stretches to prevent fatigue and stiffness.",
      "Include concentration techniques to keep attention sharp during quiet monitoring periods.",
      "Present the watch-sustainment plan in correct professional English."
    ],
    deliverable: "A watch-sustainment plan integrating nutrition and hydration, micro-pauses and concentration.",
    assessmentCriteria: [
      "The fuelling and hydration timing suits a long watch.",
      "The micro-pause schedule is appropriate for fatigue prevention.",
      "The concentration techniques are suited to watch monitoring.",
      "The plan is presented in correct professional English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "pn-s3-educacion-fisica-iii",
    unit: "Natación",
    topic: "Respuesta integrada de supervivencia en el agua: sobrevivencia, nado y flotación en grupo con posición HELP y de grupo, y resistencia",
    week: 16,
    taskId: "pn-c0011iii-w16-lead-group-survival-swim-liferaft",
    taskTitle: "Lead A Group Survival Swim To The Liferaft",
    scenario: "After abandoning ship a small group is in the water and must reach the liferaft together. As the fittest swimmer you must lead the group survival response, conserving heat and energy until all are aboard.",
    instructions: [
      "Apply survival-swimming technique to conserve energy and reach the group.",
      "Organise the group into the HELP and huddle positions to conserve body heat.",
      "Lead the group's controlled progress toward the liferaft, pacing the endurance effort.",
      "Report the group's status and the actions taken in correct SMCP English."
    ],
    deliverable: "A group survival-swim response leading the group in HELP and huddle to the liferaft.",
    assessmentCriteria: [
      "Survival-swimming technique conserves energy correctly.",
      "The HELP and huddle positions are organised correctly.",
      "The group's progress and endurance pacing are led soundly.",
      "The status and actions are reported in correct SMCP English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "pn-s3-educacion-fisica-iii",
    unit: "Autoevaluación funcional y plan personal",
    topic: "Evaluación integrada de la aptitud para el trabajo: pruebas funcionales, plan personal sostenible y cohesión de equipo",
    week: 17,
    taskId: "pn-c0011iii-w17-assess-fitness-for-work-personal-plan",
    taskTitle: "Assess Your Fitness For Work And Set The Personal Plan",
    scenario: "At the end of the term you must assess your own fitness for work aboard with simple functional tests, interpret the results by capacity for shipboard tasks, and set a sustainable personal plan that also supports your watch team.",
    instructions: [
      "Run the simple functional tests and record the results.",
      "Interpret the results by capacity for real shipboard work rather than by athletic scores.",
      "Set a sustainable personal plan and state how it supports team cohesion and mutual reliability.",
      "Present the assessment and plan in correct professional English."
    ],
    deliverable: "A fitness-for-work self-assessment with interpreted results and a sustainable personal and team plan.",
    assessmentCriteria: [
      "The functional tests are run and recorded correctly.",
      "Results are interpreted by capacity for shipboard work.",
      "The personal plan is sustainable and supports the team.",
      "The assessment and plan are presented in correct professional English."
    ],
    xp: 30,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0011",
    subjectName: "Educación Física III",
    subjectId: "pn-s3-educacion-fisica-iii",
    unit: "Autoevaluación funcional y plan personal",
    topic: "Integración de fin de semestre: síntesis de la aptitud física para el servicio en la sesión informativa",
    week: 18,
    taskId: "pn-c0011iii-w18-deliver-fitness-for-duty-brief",
    taskTitle: "Deliver The Fitness-For-Duty Readiness Brief",
    scenario: "As the closing capstone you must present your fitness-for-duty readiness: your conditioning for watch and deck work, your sustainment habits, your survival competence and your personal plan, drawing the whole semester together.",
    instructions: [
      "Summarise your conditioning for watchkeeping endurance and deck-work strength and balance.",
      "Present your watch-sustainment and injury-prevention habits.",
      "State your survival-swimming competence and your sustainable personal plan.",
      "Deliver the fitness-for-duty brief in correct professional English."
    ],
    deliverable: "A concise fitness-for-duty readiness brief covering conditioning, sustainment, survival and the personal plan.",
    assessmentCriteria: [
      "Conditioning for watch and deck work is presented correctly.",
      "Sustainment and injury-prevention habits are presented clearly.",
      "Survival competence and the personal plan are stated soundly.",
      "The brief is delivered in correct professional English."
    ],
    xp: 30,
    estimatedTime: "45 min",
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
    subjectCode: "C0038",
    subjectName: "Técnicas Avanzadas de Lucha Contra Incendio",
    subjectId: "pn-s3-tecnicas-avanzadas-lucha-contra-incendio",
    unit: "Empleo del agua en la extinción de incendios",
    topic: "Efecto del agua de extinción sobre la estabilidad del buque: superficie libre, achique y precauciones",
    week: 9,
    taskId: "pn-c0038-w09-firefighting-water-stability",
    taskTitle: "Control The Stability Risk From Firefighting Water",
    scenario: "A fire in the accommodation is being fought with large volumes of water, and the water is accumulating in the upper spaces. The officer asks the cadet to manage the danger this creates to the ship's stability.",
    instructions: [
      "Explain the danger: water accumulating in spaces, especially high up, adds weight and a free-surface effect, which raises the centre of gravity and reduces stability, risking a dangerous list or even capsize.",
      "State the precautions during firefighting: use only as much water as is needed, provide drainage through scuppers and freeing ports, and dewater the accumulated water promptly by pumping or draining.",
      "Explain the warning signs, a developing list and a sluggish, slow roll, and the corrective actions of stopping the inflow of water, dewatering, and correcting the list.",
      "Report the water-stability control measures in clear maritime English."
    ],
    deliverable: "A note in English explaining the free-surface and added-weight danger of accumulated firefighting water, the precautions (minimum water, drainage, prompt dewatering), the warning signs, and the corrective actions.",
    assessmentCriteria: [
      "The free-surface and added top-weight danger to stability is correctly explained.",
      "The precautions (minimum water, drainage, prompt dewatering) are correct.",
      "The warning signs (developing list, sluggish roll) and corrective actions are correct.",
      "The measures are reported clearly, in correct maritime English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0038",
    subjectName: "Técnicas Avanzadas de Lucha Contra Incendio",
    subjectId: "pn-s3-tecnicas-avanzadas-lucha-contra-incendio",
    unit: "Planes de control de incendios",
    topic: "Plan de control de incendios (fire control plan): símbolos SOLAS, ubicación de equipos y límites contra incendio",
    week: 10,
    taskId: "pn-c0038-w10-fire-control-plan",
    taskTitle: "Use The Ship's Fire Control Plan",
    scenario: "On joining the ship the cadet must be able to read the fire control plan posted on board. The officer asks the cadet to explain the plan and how it is used to plan an attack and brief the shore brigade.",
    instructions: [
      "Explain what the fire control plan is and where it is kept: posted on board and stowed in a marked container outside the accommodation for the shore fire brigade.",
      "Read the plan using the standard SOLAS symbols: locate the fire stations, the fixed systems and their controls, the fire pumps, the extinguishers, the detection zones, and the fire boundaries (the A and B class divisions) and dampers.",
      "Explain how the plan is used to plan an attack and to brief the shore brigade, linking to the shore coordination of week 4.",
      "Report how you would use the plan for a fire in a stated space, in clear maritime English."
    ],
    deliverable: "A note in English explaining the fire control plan and where it is kept, reading it for stations, fixed systems, pumps, detection zones and fire boundaries via SOLAS symbols, and using it to plan an attack for a stated space.",
    assessmentCriteria: [
      "What the fire control plan is and where it is kept are correct.",
      "The plan is read correctly for stations, systems, pumps, detection zones and fire boundaries.",
      "The use of the plan to plan an attack and brief the shore brigade is sound.",
      "The application to a stated space is clear, in correct maritime English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0038",
    subjectName: "Técnicas Avanzadas de Lucha Contra Incendio",
    subjectId: "pn-s3-tecnicas-avanzadas-lucha-contra-incendio",
    unit: "Tácticas y procedimientos de lucha contra incendio",
    topic: "Tácticas para incendio con mercancías peligrosas y en buque tanque: consulta IMDG, espuma, enfriamiento y zona de exclusión",
    week: 11,
    taskId: "pn-c0038-w11-dangerous-goods-tanker-fire",
    taskTitle: "Plan Tactics For A Dangerous-Goods Or Tanker Fire",
    scenario: "A fire involves dangerous goods on deck, or the cargo of a tanker, and needs special tactics. The officer asks the cadet to plan the tactics for such a fire, where the cargo itself is the main hazard.",
    instructions: [
      "Explain why these fires are special: reactive or toxic cargoes and the risk of explosion from flammable vapour, so the cargo information must be consulted first (the IMDG Code, the dangerous goods declaration, and the safety data sheet).",
      "State the tactics: identify the cargo and its hazards, cool the adjacent tanks, containers and boundaries, apply the correct medium (foam for flammable liquids, and avoid water on cargoes that react with it), and control ventilation.",
      "State the safety measures: keep upwind, set a wide exclusion zone, consider withdrawal for an uncontrollable tanker or dangerous-goods fire, and coordinate with the shore and port.",
      "Report the tactical plan in clear maritime English."
    ],
    deliverable: "A note in English planning tactics for a dangerous-goods or tanker fire: consulting the cargo information first, cooling and the correct extinguishing medium, ventilation control, and the safety measures (upwind, exclusion zone, possible withdrawal, coordination).",
    assessmentCriteria: [
      "Why the fire is special and the need to consult IMDG / declaration / safety data sheet first are correct.",
      "The tactics (identify cargo, cool boundaries, correct medium, control ventilation) are sound.",
      "The safety measures (upwind, exclusion zone, possible withdrawal, coordination) are correct.",
      "The plan is reported clearly, in correct maritime English."
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
    unit: "Reportes e investigaciones de incendios",
    topic: "Investigación del incendio, reporte y lecciones aprendidas",
    week: 12,
    taskId: "pn-c0038-w12-fire-investigation-lessons",
    taskTitle: "Investigate A Fire And Report The Lessons Learned",
    scenario: "As the closing task of the subject a fire has been put out and must now be investigated. The officer asks the cadet to investigate the cause and write the report with the lessons learned, drawing on the whole subject.",
    instructions: [
      "Preserve the scene and gather the facts: where the fire started (its seat), the likely source of ignition and the fuel, how it was detected and fought, and what worked or failed, drawing on the command, SCBA and fixed-system work of the earlier weeks.",
      "Determine the probable cause and the contributing factors objectively (for example a missed hot-work precaution, a blocked detector, or a valve left shut).",
      "State the lessons learned and the corrective actions to prevent a recurrence, covering procedure, training and maintenance.",
      "Report the fire investigation and the lessons learned as a written report in clear maritime English."
    ],
    deliverable: "A written fire-investigation report in English giving the seat and development of the fire, the probable cause and contributing factors, and the lessons learned with corrective actions, integrating the whole subject.",
    assessmentCriteria: [
      "The scene is preserved and the facts (seat, ignition, fuel, detection, response) are gathered soundly.",
      "The probable cause and contributing factors are determined objectively.",
      "The lessons learned and corrective actions (procedure, training, maintenance) are sound.",
      "The investigation is reported as a clear written report, in correct maritime English."
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
    topic: "Ataque integrado a un incendio: sistema de mando y control de entrada, ataque integrado localizar-aislar-atacar y enfriamiento de límites",
    week: 13,
    taskId: "pn-c0038-w13-command-integrated-machinery-fire-attack",
    taskTitle: "Command An Integrated Attack On A Machinery-Space Fire",
    scenario: "A fire breaks out in the machinery space at sea. As on-scene commander you must set up the command system, mount an integrated attack and protect the surrounding compartments by boundary cooling.",
    instructions: [
      "Set up the command system with the muster list, chain of command, assembly point and entry control.",
      "Mount the integrated attack, locate and assess, isolate, then attack the seat of the fire.",
      "Organise boundary cooling of the adjacent compartments and post a reflash watch.",
      "Report the fire situation and the attack plan to the master in correct SMCP English."
    ],
    deliverable: "A fire-attack command report covering the command system, the integrated attack and boundary cooling.",
    assessmentCriteria: [
      "The command system with entry control is set up correctly.",
      "The integrated attack sequence is applied correctly.",
      "Boundary cooling and the reflash watch are organised correctly.",
      "The situation and plan are reported in correct SMCP English."
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
    unit: "Equipo de respiración autónoma y búsqueda en humo",
    topic: "Despliegue integrado en humo: chequeos y gestión del aire del SCBA, control de entrada y organización de las cuadrillas",
    week: 14,
    taskId: "pn-c0038-w14-deploy-control-ba-teams-smoke",
    taskTitle: "Deploy And Control BA Teams In A Smoke-Filled Space",
    scenario: "A search must be made of a smoke-filled accommodation space for missing crew. You must brief and deploy the breathing-apparatus teams, manage their air and run entry control so no one is lost.",
    instructions: [
      "Organise and assign the breathing-apparatus teams and their search pattern for the space.",
      "Confirm the SCBA donning checks and set the air-management and turn-around limits.",
      "Run entry control, logging the teams in and out and monitoring their air and time.",
      "Report the search progress and team status to the on-scene commander in correct SMCP English."
    ],
    deliverable: "A BA-team deployment record covering team assignment, air management and the entry-control log.",
    assessmentCriteria: [
      "Teams and the search pattern are organised correctly.",
      "SCBA checks and air-management limits are set correctly.",
      "Entry control tracks teams, air and time correctly.",
      "Progress and status are reported in correct SMCP English."
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
    topic: "Operación integrada de sistemas fijos: CO2 de inundación total y su protocolo de seguridad, espuma y water mist, con el plan de control de incendios",
    week: 15,
    taskId: "pn-c0038-w15-operate-fixed-systems-fire-plan",
    taskTitle: "Operate The Fixed Systems Using The Fire Control Plan",
    scenario: "The decision is made to use the fixed fire-fighting systems on a space that cannot be held by hand. You must use the fire control plan to confirm boundaries and equipment, then operate the fixed systems safely.",
    instructions: [
      "Use the ship's fire control plan to confirm the space boundaries, equipment and fire limits.",
      "Follow the CO2 total-flooding safety protocol, confirm the space is evacuated and sealed before release.",
      "Apply foam or water mist and boundary cooling as the situation requires.",
      "Report the system operation and the space status to the master in correct SMCP English."
    ],
    deliverable: "A fixed-system operation report confirming the plan check, CO2 safety protocol and system release.",
    assessmentCriteria: [
      "The fire control plan is used correctly to confirm boundaries and equipment.",
      "The CO2 total-flooding safety protocol is followed correctly.",
      "Foam, water mist and boundary cooling are applied appropriately.",
      "The operation and status are reported in correct SMCP English."
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
    unit: "Tácticas y procedimientos de lucha contra incendio",
    topic: "Respuesta a un incendio de mercancías peligrosas: consulta IMDG, espuma y zona de exclusión, con el efecto del agua sobre la estabilidad y superficie libre",
    week: 16,
    taskId: "pn-c0038-w16-fight-dangerous-goods-fire-stability",
    taskTitle: "Fight A Dangerous-Goods Fire And Control The Stability Risk",
    scenario: "A fire involves a dangerous-goods container on deck and large volumes of extinguishing water are going into the ship. You must fight it by the right tactics for the cargo while controlling the free-surface threat to stability.",
    instructions: [
      "Consult the IMDG information and set the tactics, foam, cooling and an exclusion zone, for the cargo involved.",
      "Attack and cool the dangerous-goods fire while keeping personnel in safe positions.",
      "Monitor and control the extinguishing water on board, managing free surface and pumping out to protect stability.",
      "Report the fire and the stability situation to the master in correct SMCP English."
    ],
    deliverable: "A dangerous-goods fire report covering the tactics, the exclusion zone and the stability-water control.",
    assessmentCriteria: [
      "IMDG-based tactics and the exclusion zone are set correctly.",
      "The fire is attacked and cooled with personnel kept safe.",
      "Free surface and extinguishing water are managed to protect stability.",
      "The situation is reported in correct SMCP English."
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
    unit: "Inspeccionar los servicios de los sistemas y equipos de detección y extinción de incendios",
    topic: "Auditoría integral del alistamiento contra incendios: equipos de detección, plan de control de incendios y coordinación con bomberos en tierra",
    week: 17,
    taskId: "pn-c0038-w17-audit-fire-readiness-detection-plan",
    taskTitle: "Audit Fire Readiness, Detection And The Control Plan",
    scenario: "Before a port fire inspection the master asks you to audit the ship's fire readiness: the detection equipment in service, the fire control plan current and correct, and the arrangements for coordinating with the shore brigade.",
    instructions: [
      "Inspect and confirm the fire detection equipment is in service and functioning.",
      "Verify the fire control plan is current, correct in its SOLAS symbols and matches the ship.",
      "Confirm the arrangements and information for coordinating with shore fire brigades.",
      "Issue a fire-readiness audit statement in correct maritime English."
    ],
    deliverable: "A fire-readiness audit statement covering detection, the control plan and shore-brigade coordination.",
    assessmentCriteria: [
      "Detection equipment is inspected and confirmed in service.",
      "The fire control plan is verified current and correct.",
      "Shore-brigade coordination arrangements are confirmed.",
      "The audit statement is written in correct maritime English."
    ],
    xp: 30,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0038",
    subjectName: "Técnicas Avanzadas de Lucha Contra Incendio",
    subjectId: "pn-s3-tecnicas-avanzadas-lucha-contra-incendio",
    unit: "Reportes e investigaciones de incendios",
    topic: "Integración de fin de semestre: investigación del incendio, lecciones aprendidas y sesión informativa de fin de semestre",
    week: 18,
    taskId: "pn-c0038-w18-investigate-fire-lessons-learned-brief",
    taskTitle: "Investigate The Fire And Deliver The Lessons-Learned Brief",
    scenario: "As the capstone you must investigate one of the term's fire scenarios, establish what happened and why, and deliver a lessons-learned brief that improves the ship's command, tactics and readiness.",
    instructions: [
      "Investigate the fire, establishing the sequence of events and the contributing factors.",
      "Evaluate how the command system, integrated attack and fixed systems performed.",
      "Draw the lessons learned into concrete improvements for readiness and tactics.",
      "Deliver the fire investigation and lessons-learned brief in correct maritime English."
    ],
    deliverable: "A fire investigation and lessons-learned brief with concrete readiness and tactical improvements.",
    assessmentCriteria: [
      "The investigation establishes the sequence and contributing factors soundly.",
      "The command, attack and system performance are evaluated correctly.",
      "The lessons are turned into concrete improvements.",
      "The brief is delivered in correct maritime English."
    ],
    xp: 30,
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
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0101",
    subjectName: "Redacción Avanzada",
    subjectId: "pn-s3-redaccion-avanzada",
    unit: "Legibilidad en la redacción",
    topic: "Evitar redundancias y palabras superfluas: concisión en el mensaje operativo",
    week: 9,
    taskId: "pn-c0101-w09-concise-message",
    taskTitle: "Cut A Wordy Message Down To A Concise One",
    scenario: "A wordy, padded message wastes radio time and can bury its own point. The officer asks the cadet to cut it down to a concise, unambiguous message without losing any essential fact.",
    instructions: [
      "Take a wordy operational message and identify the redundant words and padding, for example 'at this present moment in time', 'in the event that', and pairs of synonyms that say the same thing twice.",
      "Rewrite it concisely, keeping every essential fact (who, what, when and where) and cutting the rest.",
      "Explain why concision matters operationally (clarity, less radio time, and less chance of a misreading) while keeping the full meaning.",
      "Report the wordy original and the concise rewrite in clear written English."
    ],
    deliverable: "A before-and-after in English showing a wordy operational message, the redundant words and padding identified, and a concise rewrite that keeps every essential fact.",
    assessmentCriteria: [
      "The redundant words and padding are correctly identified.",
      "The rewrite is concise and keeps every essential fact (who, what, when, where).",
      "The operational reason for concision is soundly explained.",
      "The before-and-after is clear, in correct written English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0101",
    subjectName: "Redacción Avanzada",
    subjectId: "pn-s3-redaccion-avanzada",
    unit: "Atributos de los párrafos",
    topic: "Cohesión en el párrafo: conectores y oraciones enlazadas en una narrativa de sucesos",
    week: 10,
    taskId: "pn-c0101-w10-paragraph-cohesion",
    taskTitle: "Link Events Into A Cohesive Narrative",
    scenario: "An incident narrative reads as a string of disconnected sentences, so the reader cannot follow the flow. The officer asks the cadet to link the events into a cohesive paragraph.",
    instructions: [
      "Explain cohesion as distinct from unity: unity (week 3) is keeping to one main idea, while cohesion is connecting the sentences so the reader follows the flow, using linking words such as then, because, as a result, however and meanwhile.",
      "Take a set of disconnected event sentences and join them into a cohesive paragraph with appropriate connectors and a clear time order.",
      "Ensure no sentence is left unconnected and that the sequence and the cause-and-effect are clear.",
      "Report the cohesive narrative in clear written English."
    ],
    deliverable: "A cohesive narrative paragraph in English built from disconnected event sentences, joined with appropriate connectors in clear time order, with a note on cohesion versus unity.",
    assessmentCriteria: [
      "Cohesion is correctly distinguished from unity.",
      "The events are joined into a cohesive paragraph with appropriate connectors.",
      "No sentence is left unconnected and the sequence and cause-and-effect are clear.",
      "The narrative is clear, in correct written English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0101",
    subjectName: "Redacción Avanzada",
    subjectId: "pn-s3-redaccion-avanzada",
    unit: "Claridad en la oración",
    topic: "Colocación de los modificadores y claridad: eliminar modificadores mal colocados en una instrucción operativa",
    week: 11,
    taskId: "pn-c0101-w11-modifier-placement",
    taskTitle: "Fix Misplaced Modifiers In An Operational Order",
    scenario: "A misplaced modifier makes an operational order read two different ways, which is dangerous when the order must be obeyed exactly. The officer asks the cadet to correct the placement so only one meaning remains.",
    instructions: [
      "Explain how a modifier placed in the wrong position attaches to the wrong word and changes the meaning (a misplaced or dangling modifier), and why that is dangerous in an instruction.",
      "Take an ambiguous operational sentence caused by modifier placement, for example 'Report the container leaking oil to the chief officer', and identify the two possible readings (is the container leaking, or is the report made to the officer who is leaking?).",
      "Rewrite the sentence so the modifier clearly attaches to the intended word and only one reading remains.",
      "Report the corrected order and explain the fix in clear written English."
    ],
    deliverable: "A short exercise in English showing an order made ambiguous by a misplaced modifier, its two readings, a rewrite with only one clear meaning, and an explanation of the fix.",
    assessmentCriteria: [
      "How a misplaced modifier changes the meaning and why it is dangerous are correctly explained.",
      "The two readings of the ambiguous order are correctly identified.",
      "The rewrite leaves only one clear meaning with the modifier correctly placed.",
      "The corrected order and the explanation are clear, in correct written English."
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
    unit: "Legibilidad en la redacción",
    topic: "Enriquecer el vocabulario y adecuar el registro: adaptar un mensaje a un destinatario formal y a uno operativo",
    week: 12,
    taskId: "pn-c0101-w12-register-vocabulary",
    taskTitle: "Adapt One Message To Two Registers",
    scenario: "As the closing task of the subject the same information must go to two very different readers: a formal letter to the charterer or company, and a concise operational message to the bridge or VTS. The officer asks the cadet to write both, choosing the right register and precise vocabulary.",
    instructions: [
      "Take one set of facts, for example a berthing delay caused by heavy weather, and identify the two audiences and what each needs: a formal written letter to the charterer or company, and a concise operational message to the bridge or VTS.",
      "Write the formal version in full, courteous, formal register with precise professional vocabulary, drawing on the protest and executive-report style of weeks 6 and 8.",
      "Write the operational version concise and unambiguous, keeping the essential facts, drawing on the concision of week 9.",
      "Explain how the register and the word choice changed between the two versions, and report both in clear written English."
    ],
    deliverable: "Two versions of one message in English, a formal letter to the charterer or company and a concise operational message to the bridge or VTS, each in the right register and vocabulary, with a note on how register and word choice changed.",
    assessmentCriteria: [
      "The two audiences and their needs are correctly identified.",
      "The formal version uses full, courteous, formal register with precise vocabulary.",
      "The operational version is concise, unambiguous and keeps the essential facts.",
      "The difference in register and word choice is correctly explained, in correct written English."
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
    unit: "El reporte formal de incidente",
    topic: "Reporte de incidente integrado: hecho frente a opinión y lenguaje objetivo, jerarquización de la información y cohesión narrativa de los sucesos",
    week: 13,
    taskId: "pn-c0101-w13-write-full-objective-incident-report",
    taskTitle: "Write The Full Objective Incident Report",
    scenario: "A near-collision occurred during your watch and the master requires a formal incident report. You must write it objectively, ordering the information by importance and linking the events into a clear, evidential narrative.",
    instructions: [
      "Separate fact from opinion and write the account in objective, evidential language.",
      "Prioritise the information so the most important facts lead the report.",
      "Link the events into a cohesive narrative using clear connectors and sequencing.",
      "Present the finished objective incident report in correct maritime English."
    ],
    deliverable: "A formal objective incident report with prioritised facts and a cohesive event narrative.",
    assessmentCriteria: [
      "Fact and opinion are separated with objective, evidential language.",
      "Information is prioritised with the key facts leading.",
      "The events are linked into a cohesive narrative.",
      "The report is written in correct maritime English."
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
    unit: "Correspondencia comercial marítima",
    topic: "Paquete integrado de carta de protesta: estructura y registro formal de la Note of Protest, lenguaje objetivo y adecuación del registro",
    week: 14,
    taskId: "pn-c0101-w14-draft-letter-of-protest-package",
    taskTitle: "Draft The Letter Of Protest And Cover Note",
    scenario: "Cargo was damaged by the terminal during discharge and the master must protest. You must draft the letter of protest and a short cover note, keeping the facts objective and the register correctly formal for the recipient.",
    instructions: [
      "Draft the letter of protest with the correct structure and formal register for a Note of Protest.",
      "State the facts objectively, separating what happened from any claim of blame.",
      "Write a short cover note adapting the register for the terminal recipient.",
      "Present the letter of protest package in correct maritime English."
    ],
    deliverable: "A letter of protest with a cover note, correctly structured and objectively worded.",
    assessmentCriteria: [
      "The letter of protest has the correct structure and formal register.",
      "The facts are stated objectively without unsupported blame.",
      "The cover note adapts the register appropriately for the recipient.",
      "The package is written in correct maritime English."
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
    topic: "Órdenes del capitán integradas: standing orders y night orders accionables con umbrales, concisión y eliminación de ambigüedad y modificadores mal colocados",
    week: 15,
    taskId: "pn-c0101-w15-write-captains-standing-night-orders",
    taskTitle: "Write The Captain's Standing And Night Orders",
    scenario: "For the coming passage you must draft the master's standing orders and the night orders so the watch officers know exactly what to do and at what thresholds, with no ambiguity and no wasted words.",
    instructions: [
      "Write actionable standing and night orders with concrete thresholds for calling the master.",
      "Keep the orders concise, cutting superfluous words from every instruction.",
      "Remove ambiguity and any misplaced modifiers so each order can only be read one way.",
      "Present the standing and night orders in correct maritime English."
    ],
    deliverable: "A set of the captain's standing and night orders, actionable, concise and unambiguous.",
    assessmentCriteria: [
      "The orders are actionable with concrete calling thresholds.",
      "The orders are concise with superfluous words cut.",
      "Ambiguity and misplaced modifiers are removed.",
      "The orders are written in correct maritime English."
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
    unit: "El reporte formal de incidente",
    topic: "Reporte urgente bajo presión: jerarquización de la información, lenguaje objetivo, concisión y cohesión narrativa",
    week: 16,
    taskId: "pn-c0101-w16-write-urgent-incident-report-under-pressure",
    taskTitle: "Write The Urgent Incident Report Under Time Pressure",
    scenario: "An engine-room flooding scare during your watch is over but the company requires an urgent report within the hour. Under time pressure you must produce a clear, objective, prioritised report that leaves no room for misreading.",
    instructions: [
      "Lead with the most critical facts, prioritising the information for a reader who must act fast.",
      "Keep the language objective and cut every word that does not carry meaning.",
      "Link the events into a cohesive, unambiguous narrative despite the time pressure.",
      "Present the urgent incident report in correct maritime English."
    ],
    deliverable: "An urgent, prioritised, objective incident report produced under time pressure.",
    assessmentCriteria: [
      "The most critical facts lead the report.",
      "The language is objective and concise.",
      "The narrative is cohesive and unambiguous.",
      "The report is written in correct maritime English."
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
    unit: "El informe ejecutivo",
    topic: "Informe ejecutivo integrado para decidir: resumen ejecutivo y jerarquización, recomendaciones accionables, concisión y adecuación del registro",
    week: 17,
    taskId: "pn-c0101-w17-write-executive-report-for-decision",
    taskTitle: "Write The Executive Report For The Decision",
    scenario: "The company must decide whether to sail on schedule after a series of deck deficiencies. You must write the executive report that supports that decision, leading with the summary and closing with clear recommendations.",
    instructions: [
      "Open with an executive summary that lets the decision-maker act from the first paragraph.",
      "Prioritise the supporting facts and keep the report concise throughout.",
      "Close with clear, actionable recommendations pitched at the right formal register.",
      "Present the executive report in correct maritime English."
    ],
    deliverable: "An executive report with a leading summary, prioritised facts and actionable recommendations.",
    assessmentCriteria: [
      "The executive summary supports a decision from the outset.",
      "The supporting facts are prioritised and the report is concise.",
      "The recommendations are actionable and correctly pitched.",
      "The report is written in correct maritime English."
    ],
    xp: 30,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester III",
    subjectCode: "C0101",
    subjectName: "Redacción Avanzada",
    subjectId: "pn-s3-redaccion-avanzada",
    unit: "El informe ejecutivo",
    topic: "Integración de fin de semestre: compilación del expediente documental del viaje y su presentación",
    week: 18,
    taskId: "pn-c0101-w18-compile-deliver-voyage-documentation",
    taskTitle: "Compile And Deliver The Voyage Documentation Package",
    scenario: "As the closing capstone you must compile and present the voyage documentation package, the incident report, the letter of protest, the standing orders and the executive report, into one coherent, professionally written file for the master.",
    instructions: [
      "Assemble the documents into a coherent package with a consistent objective style and register.",
      "Check each document for prioritisation, concision and freedom from ambiguity.",
      "Write a short executive covering note that frames the package for the master.",
      "Deliver and present the voyage documentation package in correct maritime English."
    ],
    deliverable: "A compiled voyage documentation package with a covering note, presented to the master.",
    assessmentCriteria: [
      "The documents form a coherent package with consistent style and register.",
      "Each document is prioritised, concise and unambiguous.",
      "The covering note frames the package effectively.",
      "The package is presented in correct maritime English."
    ],
    xp: 30,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
];

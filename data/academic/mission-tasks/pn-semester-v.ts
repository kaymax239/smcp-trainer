import type { AcademicMissionTask } from "./types";

export const pnSemesterVTasks: AcademicMissionTask[] = [
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "MET532",
    subjectName: "Meteorología II",
    subjectId: "pn-s5-meteorologia-ii",
    unit: "Estado del tiempo",
    topic: "Cambios del tiempo al paso de las depresiones y oclusiones. Características del frente caliente, sector caliente, frente frío y oclusión",
    week: 1,
    taskId: "pn-met532-w01-fronts-weather",
    taskTitle: "Predict Weather From An Approaching Front",
    scenario: "A weather front is approaching the vessel. The officer asks the cadet to explain what weather changes to expect as a warm front and then a cold front pass.",
    instructions: [
      "Describe the weather as a warm front approaches and passes.",
      "Describe the weather as a cold front approaches and passes.",
      "State one sign that warns the bridge a front is coming.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English describing the weather changes expected from a passing warm front and cold front, with one warning sign.",
    assessmentCriteria: [
      "The warm front sequence is correct.",
      "The cold front sequence is correct.",
      "The warning sign is valid.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "MET532",
    subjectName: "Meteorología II",
    subjectId: "pn-s5-meteorologia-ii",
    unit: "Ciclones tropicales",
    topic: "Semicírculos: peligroso y navegable",
    week: 2,
    taskId: "pn-met532-w02-cyclone-semicircles",
    taskTitle: "Identify The Dangerous Semicircle Of A Cyclone",
    scenario: "A tropical cyclone lies near the vessel's route. The officer asks the cadet to explain the dangerous and navigable semicircles and which side to avoid.",
    instructions: [
      "Explain what the dangerous semicircle and the navigable semicircle are.",
      "State how to tell which semicircle the vessel is in.",
      "State the general action to take to avoid the dangerous semicircle.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining the dangerous and navigable semicircles of a tropical cyclone and the action to keep clear of the dangerous side.",
    assessmentCriteria: [
      "The two semicircles are correctly explained.",
      "The method to identify the vessel's position is correct.",
      "The avoiding action is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "MET532",
    subjectName: "Meteorología II",
    subjectId: "pn-s5-meteorologia-ii",
    unit: "Cartas meteorológicas",
    topic: "Interpretación de cartas sinópticas",
    week: 3,
    taskId: "pn-met532-w03-synoptic-chart",
    taskTitle: "Interpret A Synoptic Weather Chart",
    scenario: "The bridge receives a synoptic chart. The officer asks the cadet to interpret the main features and what they mean for the vessel's weather.",
    instructions: [
      "Identify the main features on a synoptic chart (highs, lows, fronts, isobars).",
      "Explain what closely spaced isobars indicate about wind.",
      "State what weather the chart suggests for the vessel's area.",
      "Report your interpretation in clear maritime English."
    ],
    deliverable: "A note in English interpreting a synoptic chart: its main features, what isobar spacing means, and the weather suggested for the vessel.",
    assessmentCriteria: [
      "The chart features are correctly identified.",
      "The isobar-wind relationship is correct.",
      "The weather interpretation is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "MET532",
    subjectName: "Meteorología II",
    subjectId: "pn-s5-meteorologia-ii",
    unit: "Previsión a bordo",
    topic: "Navegación meteorológica",
    week: 4,
    taskId: "pn-met532-w04-weather-routeing",
    taskTitle: "Plan A Weather-Routed Passage",
    scenario: "The officer asks the cadet to explain how weather routeing improves a passage and how forecast information is used to choose the best track.",
    instructions: [
      "Explain what weather routeing means.",
      "State how forecast weather is used to choose or adjust the track.",
      "Explain one benefit of weather routeing (safety, fuel, time).",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining weather routeing, how forecasts are used to choose the track, and one benefit.",
    assessmentCriteria: [
      "Weather routeing is correctly explained.",
      "The use of forecasts is correct.",
      "The benefit stated is valid.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "MET532",
    subjectName: "Meteorología II",
    subjectId: "pn-s5-meteorologia-ii",
    unit: "Previsión a bordo",
    topic: "El barómetro y la tendencia bárica como herramienta predictiva del oficial",
    week: 5,
    taskId: "pn-met532-w05-barometric-tendency",
    taskTitle: "Read The Barometer And Its Three-Hour Tendency",
    scenario: "The officer asks the cadet to read the aneroid barometer and use its three-hour tendency to forecast the weather, following on from the depression of week 1, which the barometer detects before the sky shows it.",
    instructions: [
      "State how the aneroid barometer is read and its corrections as a concept: the instrument is read in hectopascals (hPa) and, for a true comparison, the reading is corrected for the height of the instrument above the waterline (a higher instrument reads lower), so that successive readings are compared on the same basis.",
      "Define the three-hour tendency as the officer's predictive tool: tendency = later reading minus earlier reading, so a falling (negative) pressure means the weather is deteriorating and a low is approaching, while a rising (positive) pressure means it is improving.",
      "Work the example: at 0900 the barometer reads 1012.0 hPa and at 1200 it reads 1007.5 hPa, so the tendency = 1007.5 - 1012.0 = -4.5 hPa in three hours; the negative sign confirms the pressure is falling. Interpret it with the classic guide thresholds: about 1-2 hPa/3h is a gradual change, about 3-5 hPa/3h (as here) a marked deterioration approaching, and more than 5-6 hPa/3h a severe gale warning.",
      "Connect to week 1: the passing depression is read on the barometer before it is seen in the sky, so a marked fall warns the bridge to prepare early. Report the tendency with its sign and your forecast in clear maritime English."
    ],
    deliverable: "A note in English reading the barometer (corrected for instrument height as a concept) and computing the three-hour tendency (1007.5 - 1012.0 = -4.5 hPa/3h, falling), interpreted against the guide thresholds as a marked deterioration and linked to the week 1 depression.",
    assessmentCriteria: [
      "The barometer reading and the instrument-height correction concept are correctly explained.",
      "The tendency is computed with the correct sign (1007.5 - 1012.0 = -4.5 hPa/3h, negative = falling).",
      "The interpretation is correct (a 4-5 hPa/3h fall is a marked deterioration on the guide thresholds).",
      "The link to the week 1 depression and the predictive value are correct, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "MET532",
    subjectName: "Meteorología II",
    subjectId: "pn-s5-meteorologia-ii",
    unit: "El viento",
    topic: "Viento real y viento aparente: el triángulo de vientos y la escala Beaufort",
    week: 6,
    taskId: "pn-met532-w06-true-apparent-wind",
    taskTitle: "Find The True Wind From The Apparent Wind",
    scenario: "The anemometer on the bridge measures the apparent wind. The officer asks the cadet to explain the wind triangle and recover the true wind, and to read the sea in Beaufort terms.",
    instructions: [
      "State the wind triangle: a moving vessel creates its own wind equal and opposite to its velocity, so the anemometer measures the apparent wind = the vector sum of the true wind and the vessel's wind; the true wind is recovered by subtracting the vessel's velocity vector from the apparent wind.",
      "Work the clean head-on case: the vessel steams due north at 10 knots and the true wind is from the north (on the bow) at 15 knots; the vectors are colinear, so the apparent wind = 15 + 10 = 25 knots from the north (ahead).",
      "Work the following case: the true wind is now from the south (astern) at 15 knots, so the apparent wind = 15 - 10 = 5 knots from the south; note the sense-check: with a head wind the apparent is always greater than the true (25 > 15), and with a following wind it is always less (5 < 15).",
      "Describe the beam-wind case qualitatively only: with the true wind on the beam the apparent wind draws forward toward the bow relative to the true, without solving the oblique triangle numerically. Anchor the strength to the Beaufort scale as the common language of wind and sea (for example Force 4, about 11-16 knots, a moderate breeze; Force 8, about 34-40 knots, a gale). Report the true and apparent winds in clear maritime English."
    ],
    deliverable: "A note in English explaining the wind triangle and recovering the true wind: the head-on case (apparent = 15 + 10 = 25 knots), the following case (apparent = 15 - 10 = 5 knots), the sense-check (head wind greater, following wind less), the beam case qualitatively, and two Beaufort anchors.",
    assessmentCriteria: [
      "The wind triangle is correctly stated (apparent = true + vessel's wind; true recovered by subtracting the vessel's vector).",
      "The head-on case is correct (15 + 10 = 25 knots) and the following case is correct (15 - 10 = 5 knots).",
      "The sense-check is correct (head wind: apparent greater; following wind: apparent less) and the beam case is described qualitatively.",
      "The Beaufort anchors are correct (e.g. F4 ~11-16 kn, F8 ~34-40 kn), in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "MET532",
    subjectName: "Meteorología II",
    subjectId: "pn-s5-meteorologia-ii",
    unit: "Visibilidad",
    topic: "Niebla y visibilidad reducida: advección, radiación y el punto de rocío como predictor",
    week: 7,
    taskId: "pn-met532-w07-fog-reduced-visibility",
    taskTitle: "Forecast Fog And Reduced Visibility",
    scenario: "Conditions are turning misty. The officer asks the cadet to identify the type of fog forming, to forecast it from the dew point, and to state the meteorological watchkeeping actions for reduced visibility.",
    instructions: [
      "Explain advection fog: it forms when warm, moist air flows over a colder sea, cooling the air to saturation; it is the classic sea fog, persistent, can extend over large areas and can arrive even with a working breeze.",
      "Explain radiation fog: it forms by nocturnal cooling of the land, is coastal and typical of early morning in calm conditions, and burns off as the sun heats the ground; it matters near the coast rather than in the open sea.",
      "Use the dew point as the predictor: when the air temperature falls close to the dew point over cold water, saturation is near and fog is imminent, so a narrowing air-to-dew-point spread is the warning to watch.",
      "State the officer's meteorological-operational actions for reduced visibility: intensified lookout, reduce to a safe speed, and make and log weather reports. Boundary: the anti-collision manoeuvring in restricted visibility is COLREGs and belongs to Navegacion III week 8; here the concern is the phenomenon and its forecast. Report your answer in clear maritime English."
    ],
    deliverable: "A note in English distinguishing advection fog (warm moist air over a cold sea) from radiation fog (nocturnal, coastal, burns off), using the dew point as the predictor, and listing the meteorological watchkeeping actions, with the anti-collision manoeuvre left to Navegacion III week 8.",
    assessmentCriteria: [
      "Advection fog is correct (warm, moist air over a colder sea, not the reverse) and persistent/sea fog.",
      "Radiation fog is correct (nocturnal cooling, coastal, burns off with the sun).",
      "The dew point predictor is correct (air temperature approaching the dew point over cold water = fog imminent).",
      "The meteorological watchkeeping actions are sound and the COLREGs boundary is respected, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "MET532",
    subjectName: "Meteorología II",
    subjectId: "pn-s5-meteorologia-ii",
    unit: "Ciclones tropicales",
    topic: "La evitación del ciclón tropical: maniobra por semicírculo y regla 1-2-3",
    week: 8,
    taskId: "pn-met532-w08-cyclone-avoidance",
    taskTitle: "Manoeuvre To Avoid A Tropical Cyclone",
    scenario: "A tropical cyclone lies near the route. As the closing task of the subject, the officer asks the cadet to turn the semicircles of week 2 into a manoeuvring decision, being exact about left and right.",
    instructions: [
      "State which side is dangerous and why: in the NORTHERN hemisphere the dangerous semicircle is the RIGHT-hand side of the cyclone's track and the navigable semicircle is the left; in the SOUTHERN hemisphere it is reversed, the dangerous semicircle is the LEFT-hand side. The physical reason: on the dangerous side the cyclone's rotary wind adds to the system's forward speed, so the wind is stronger and tends to blow the vessel into the storm's path.",
      "Give the practical manoeuvre by semicircle (northern hemisphere): if the vessel is in the dangerous (right) semicircle, bring the wind on the STARBOARD BOW and make best speed to haul away from the track; if in the navigable (left) semicircle, bring the wind on the STARBOARD QUARTER and run to open the distance.",
      "State the extent to keep clear of: allow for the radius of dangerous winds around the centre, and apply the 1-2-3 rule for the forecast track error, which grows by 100, 200 and 300 nautical miles at 24, 48 and 72 hours, so the area to avoid widens with the forecast horizon.",
      "Close the boundary: week 2 taught what the dangerous and navigable semicircles are; this task is what to do about them. Report your manoeuvring decision, being explicit about hemisphere and side, in clear maritime English."
    ],
    deliverable: "A note in English turning the week 2 semicircles into a manoeuvre: the dangerous side (right in the northern hemisphere, left in the southern) with the physical reason, the per-semicircle manoeuvre (dangerous: wind on the starboard bow and haul away; navigable: wind on the starboard quarter and run), and the 1-2-3 rule (100/200/300 NM at 24/48/72 h).",
    assessmentCriteria: [
      "The dangerous semicircle is correct by hemisphere (northern = right, southern = left) with the correct physical reason (rotary wind adds to the system's forward speed).",
      "The per-semicircle manoeuvre is correct (dangerous: wind on the starboard bow, haul away; navigable: wind on the starboard quarter, run).",
      "The 1-2-3 rule is stated with the correct figures (100/200/300 NM at 24/48/72 h) and the radius of dangerous winds is considered.",
      "The boundary with week 2 is respected (week 2 = what they are, week 8 = what to do), in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "NAV530",
    subjectName: "Navegación III",
    subjectId: "pn-s5-navegacion-iii",
    unit: "Tipos de Derrota",
    topic: "Ortodrómica",
    week: 1,
    taskId: "pn-nav530-w01-great-circle",
    taskTitle: "Explain Great Circle Sailing",
    scenario: "For a long ocean passage, the officer asks the cadet to explain why great circle (orthodromic) sailing is used instead of rhumb line sailing, and what its advantage is.",
    instructions: [
      "Explain what a great circle route is.",
      "State why it is shorter than a rhumb line over long distances.",
      "State one practical difficulty of steering a great circle directly.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining great circle sailing, why it is shorter over long distances, and one practical difficulty.",
    assessmentCriteria: [
      "The great circle concept is correct.",
      "The reason it is shorter is correct.",
      "The practical difficulty is valid.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "NAV530",
    subjectName: "Navegación III",
    subjectId: "pn-s5-navegacion-iii",
    unit: "Radar",
    topic: "Movimientos Relativo y Verdadero",
    week: 2,
    taskId: "pn-nav530-w02-relative-true-motion",
    taskTitle: "Distinguish Relative And True Motion On Radar",
    scenario: "On radar, a contact can be shown in relative or true motion. The officer asks the cadet to explain the difference and what each presentation is useful for.",
    instructions: [
      "Explain what relative motion shows on the radar display.",
      "Explain what true motion shows.",
      "State which presentation helps assess collision risk and why.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining relative vs true motion on radar and which helps assess collision risk.",
    assessmentCriteria: [
      "Relative motion is correctly explained.",
      "True motion is correctly explained.",
      "The collision-risk reasoning is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "NAV530",
    subjectName: "Navegación III",
    subjectId: "pn-s5-navegacion-iii",
    unit: "Radar APRA",
    topic: "Riesgos del exceso de confianza en los APRA",
    week: 3,
    taskId: "pn-nav530-w03-arpa-overreliance",
    taskTitle: "Explain The Risk Of Over-Reliance On ARPA",
    scenario: "ARPA is a powerful tool but dangerous if trusted blindly. The officer asks the cadet to explain the risks of over-reliance on ARPA and how a good watchkeeper uses it.",
    instructions: [
      "State two limitations or errors that ARPA data can have.",
      "Explain why a watchkeeper must not rely on ARPA alone.",
      "State what the watchkeeper should also do (visual lookout, cross-check).",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining the risks of over-reliance on ARPA and how a watchkeeper should use it safely.",
    assessmentCriteria: [
      "The ARPA limitations are valid.",
      "The over-reliance risk is correctly explained.",
      "The safe-use practice is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "NAV530",
    subjectName: "Navegación III",
    subjectId: "pn-s5-navegacion-iii",
    unit: "Radar APRA",
    topic: "Interacción del APRA con otros equipos de navegación",
    week: 4,
    taskId: "pn-nav530-w04-arpa-integration",
    taskTitle: "Explain How ARPA Works With Other Equipment",
    scenario: "ARPA takes inputs from other navigation equipment. The officer asks the cadet to explain how ARPA interacts with the gyro, log, and GPS, and why accurate inputs matter.",
    instructions: [
      "State which inputs ARPA takes from other equipment (e.g. gyro, log, GPS).",
      "Explain how those inputs affect ARPA's calculations.",
      "Explain what happens to ARPA data if an input is wrong.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining how ARPA interacts with gyro, log, and GPS, and why accurate inputs matter.",
    assessmentCriteria: [
      "The inputs are correctly identified.",
      "Their effect on ARPA is correct.",
      "The consequence of a wrong input is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "NAV530",
    subjectName: "Navegación III",
    subjectId: "pn-s5-navegacion-iii",
    unit: "Tipos de Derrota",
    topic: "Cálculo de la derrota ortodrómica por trigonometría esférica",
    week: 5,
    taskId: "pn-nav530-w05-great-circle-distance",
    taskTitle: "Calculate The Great Circle Distance",
    scenario: "For a long ocean passage the officer asks the cadet to calculate the great circle distance between two positions using spherical trigonometry, following on from the concept explained in week 1.",
    instructions: [
      "State the great circle distance formula: cos D = sin L1 x sin L2 + cos L1 x cos L2 x cos (difference of longitude), where D is the angular distance, and the distance in nautical miles is D in degrees x 60.",
      "For L1 = 45 degrees N, L2 = 45 degrees N and a difference of longitude of 60 degrees, compute each product separately: sin 45 x sin 45 = 0.7071 x 0.7071 = 0.5, and cos 45 x cos 45 x cos 60 = 0.7071 x 0.7071 x 0.5 = 0.25, so cos D = 0.5 + 0.25 = 0.75.",
      "Find D = arccos(0.75) = 41.41 degrees, and the distance = 41.41 x 60 = 2485 NM.",
      "Check the sense with the equator case: if both points were on the equator (L1 = L2 = 0), cos D = cos(difference of longitude), so D = 60 degrees = 3600 NM, and the 45 degrees N great circle (2485 NM) is shorter than the equatorial arc, as a great circle should be at higher latitudes. Note the initial course as a concept: because the great circle crosses the meridians at changing angles, the course changes continuously along the route. Report the distance in NM, in clear navigational English."
    ],
    deliverable: "A great circle calculation in English giving the distance from cos D = sin L1 sin L2 + cos L1 cos L2 cos(difference of longitude) with each product shown, the conversion D x 60 to NM (2485 NM), and the equator sense-check, distinct from the week 1 concept.",
    assessmentCriteria: [
      "The formula is stated correctly and each product is shown (0.5 and 0.25, giving cos D = 0.75).",
      "The angular distance is correct (arccos 0.75 = 41.41 degrees) and converted to distance (x 60 = 2485 NM).",
      "The equator sense-check is correct (3600 NM) and shows the 45 degrees N route is shorter.",
      "The initial course is correctly explained as changing along the route, in clear navigational English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "NAV530",
    subjectName: "Navegación III",
    subjectId: "pn-s5-navegacion-iii",
    unit: "Tipos de Derrota",
    topic: "Ortodromica vs loxodromica: decision de derrota",
    week: 6,
    taskId: "pn-nav530-w06-orthodromic-vs-loxodromic",
    taskTitle: "Choose Between Great Circle And Rhumb Line",
    scenario: "Before a long passage the officer asks the cadet to decide between a great circle and a rhumb line route, weighing the trade-offs, without re-teaching the rhumb line plane sailing method.",
    instructions: [
      "State when each route is preferred: the great circle (orthodromic) saves distance on long passages and in high latitudes, while the rhumb line (loxodromic) is a constant course and simple to steer.",
      "Explain what the saving depends on: it grows with latitude and with an east-west orientation of the passage, and is small near the equator or on north-south passages.",
      "Explain how a great circle is navigated in practice: as a series of rhumb line legs between waypoints along the great circle, so the ship steers a constant course on each leg.",
      "Note the boundary: the rhumb line plane sailing method itself was covered in Navegacion I, so here the rhumb line is only the term of comparison for the routing decision. Report your answer in clear navigational English."
    ],
    deliverable: "A routing-decision note in English comparing great circle and rhumb line (when each is preferred, what the saving depends on, and navigating the great circle as rhumb line legs), with the rhumb line used only as the comparison, not re-taught.",
    assessmentCriteria: [
      "When each route is preferred is correct (great circle for long/high-latitude passages, rhumb line for simple constant course).",
      "What the saving depends on is correct (latitude and east-west orientation).",
      "Navigating the great circle as rhumb line legs between waypoints is correct.",
      "The rhumb line is used only as the comparison, not re-teaching plane sailing, in clear navigational English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "NAV530",
    subjectName: "Navegación III",
    subjectId: "pn-s5-navegacion-iii",
    unit: "Radar",
    topic: "Ploteo radar: calculo de CPA y TCPA",
    week: 7,
    taskId: "pn-nav530-w07-radar-plotting-cpa-tcpa",
    taskTitle: "Work Out CPA And TCPA From A Radar Plot",
    scenario: "A radar contact must be assessed. The officer asks the cadet to work out the CPA and TCPA from a relative plot, taking the relative motion of week 2 from the concept to the number.",
    instructions: [
      "State that two ranges and bearings of the contact taken a few minutes apart give the relative motion line, and that the relative speed = relative distance run / time.",
      "For a contact first seen at 10 NM, with two plots 6 minutes apart showing a relative advance of 2 NM, calculate the relative speed = 2 NM / 0.1 h = 20 knots.",
      "From the plot, the CPA is the perpendicular distance from own ship to the relative motion line, here 6 NM, and the distance along the line to the CPA is 8 NM; verify the geometry with square root(6^2 + 8^2) = square root(36 + 64) = square root(100) = 10 NM, the initial range (a 6-8-10 triangle).",
      "Calculate the TCPA = distance along the line to the CPA / relative speed = 8 NM / 20 knots = 0.4 h = 24 minutes; and note the limit case that if the relative motion line passed through own ship the CPA would be 0, a collision course, which is exactly what the officer watches for. Report the CPA in NM and the TCPA in minutes, in clear navigational English."
    ],
    deliverable: "A radar-plotting calculation in English giving the relative speed (20 knots), the CPA (6 NM) verified by the 6-8-10 triangle against the 10 NM initial range, and the TCPA (24 minutes), with the CPA = 0 collision case noted.",
    assessmentCriteria: [
      "The relative speed is correct (2 NM / 0.1 h = 20 knots).",
      "The CPA (6 NM) is verified by square root(6^2 + 8^2) = 10 NM, the initial range.",
      "The TCPA is correct (8 NM / 20 knots = 24 minutes).",
      "The CPA = 0 collision-course limit case is correctly noted, in clear navigational English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "NAV530",
    subjectName: "Navegación III",
    subjectId: "pn-s5-navegacion-iii",
    unit: "Radar APRA",
    topic: "ARPA en la decision anticolision (COLREGs Parte B) verificada por el ploteo",
    week: 8,
    taskId: "pn-nav530-w08-arpa-collision-avoidance",
    taskTitle: "Decide An Anti-Collision Action With ARPA",
    scenario: "With the plot in hand, the officer must decide and act. As the closing task of the subject, the officer asks the cadet to use ARPA to support an anti-collision decision under COLREGs and to verify the action afterwards.",
    instructions: [
      "Explain CPA and TCPA limits as the ARPA alarm criteria: setting them tells the ARPA when to warn of a close-quarters situation, and they are configurable to the waters and visibility (for example 2 NM and 12 minutes as illustrative values, not fixed doctrine).",
      "Read the target's vector on the ARPA to judge its course and speed and how the situation is developing.",
      "Take action in accordance with COLREGs Part B (the steering and sailing rules): a positive, early and readily apparent manoeuvre, and verify it by the subsequent plot, checking that the CPA has improved.",
      "Close with the warning from week 3: the ARPA assists but the officer decides, and over-reliance on the ARPA is a danger. Report your answer in clear navigational English."
    ],
    deliverable: "A note in English using ARPA for an anti-collision decision: the CPA/TCPA alarm limits as configurable criteria, reading the target vector, a COLREGs Part B manoeuvre verified by the later plot (CPA improved), and the over-reliance warning.",
    assessmentCriteria: [
      "CPA/TCPA limits are correctly explained as configurable alarm criteria (with illustrative values, not fixed doctrine).",
      "Reading the target's vector for course, speed and development is correct.",
      "The action follows COLREGs Part B (positive, early, apparent) and is verified by the subsequent plot (CPA improved).",
      "The week 3 over-reliance warning (ARPA assists, officer decides) is included, in clear navigational English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "MAN533",
    subjectName: "Maniobras I",
    subjectId: "pn-s5-maniobras-i",
    unit: "Timones",
    topic: "Principios y efectos",
    week: 1,
    taskId: "pn-man533-w01-rudder-principles",
    taskTitle: "Explain How A Rudder Turns A Vessel",
    scenario: "The officer asks the cadet to explain the basic principle of how a rudder turns a vessel and why the vessel pivots rather than simply sliding sideways.",
    instructions: [
      "Explain how water flow over the rudder creates a turning force.",
      "Explain why the vessel pivots about a point (centre of pivot).",
      "State what happens to turning effect when speed is very low.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining how a rudder turns a vessel, the pivot point, and the effect of low speed.",
    assessmentCriteria: [
      "The rudder turning principle is correct.",
      "The pivot point is correctly explained.",
      "The low-speed effect is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "MAN533",
    subjectName: "Maniobras I",
    subjectId: "pn-s5-maniobras-i",
    unit: "Sistema de propulsión",
    topic: "Hélices, tipos y principios",
    week: 2,
    taskId: "pn-man533-w02-propeller-effects",
    taskTitle: "Explain Propeller Transverse Thrust",
    scenario: "A single-screw vessel behaves differently going ahead and astern. The officer asks the cadet to explain transverse thrust (paddle wheel effect) and how it affects low-speed handling.",
    instructions: [
      "Explain what transverse thrust (paddle wheel effect) is.",
      "State how it moves the stern for a right-handed propeller going astern.",
      "Explain how a skilled cadet uses this effect when manoeuvring.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining propeller transverse thrust and how it affects low-speed handling.",
    assessmentCriteria: [
      "Transverse thrust is correctly explained.",
      "The stern movement is correct.",
      "The practical use is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "MAN533",
    subjectName: "Maniobras I",
    subjectId: "pn-s5-maniobras-i",
    unit: "Círculo de evolución y distancia de parada",
    topic: "Efectos por bajo fondo o squat",
    week: 3,
    taskId: "pn-man533-w03-squat-shallow-water",
    taskTitle: "Explain Squat In Shallow Water",
    scenario: "Entering shallow water, the vessel is at risk of squat. The officer asks the cadet to explain what squat is, what causes it, and how to reduce the risk.",
    instructions: [
      "Explain what squat is and how it affects the vessel's draught.",
      "State what conditions increase squat (speed, shallow water).",
      "State the main action to reduce squat.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining squat, what increases it, and how to reduce the risk.",
    assessmentCriteria: [
      "Squat is correctly explained.",
      "The factors that increase it are correct.",
      "The reducing action is correct.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "MAN533",
    subjectName: "Maniobras I",
    subjectId: "pn-s5-maniobras-i",
    unit: "Equipo y maniobra de fondeo",
    topic: "Funciones del oficial en estación de maniobra",
    week: 4,
    taskId: "pn-man533-w04-anchoring-officer",
    taskTitle: "Describe The Officer's Role At Anchor Stations",
    scenario: "The vessel is preparing to anchor. The officer asks the cadet to describe the duties of the officer at the anchor station during the manoeuvre.",
    instructions: [
      "List the main duties of the officer at the forward anchor station.",
      "Explain what information the officer reports to the bridge.",
      "State one safety precaution at the anchor station.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English describing the officer's duties at the anchor station, the information reported to the bridge, and one safety precaution.",
    assessmentCriteria: [
      "The duties are correct and relevant.",
      "The information reported is appropriate.",
      "The safety precaution is valid.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "MAN533",
    subjectName: "Maniobras I",
    subjectId: "pn-s5-maniobras-i",
    unit: "Círculo de evolución y distancia de parada",
    topic: "El círculo de evolución y sus elementos",
    week: 5,
    taskId: "pn-man533-w05-turning-circle",
    taskTitle: "Read The Vessel's Turning Circle",
    scenario: "The officer asks the cadet to describe the vessel's turning circle and the figures that matter when planning a turn in confined water.",
    instructions: [
      "Name the elements of the turning circle: advance (the distance made good in the original direction), transfer (the distance made good at right angles to it), tactical diameter (the beam-to-beam distance when the vessel has turned through 180 degrees) and final diameter (the steady diameter once the turn is established).",
      "State what changes the size of the circle: higher speed, deeper draught and trim, and heel all affect it, and it grows larger in shallow water; note the link to the week 3 squat as a reference only, without re-explaining squat.",
      "Say where this information lives: the turning-circle curve on the wheelhouse poster or manoeuvring booklet gives the figures for the vessel's own loading and speed, so the officer must know the numbers for THIS ship rather than a general idea.",
      "Report how you would use the advance and transfer to judge when to start a turn in confined water, in clear maritime English."
    ],
    deliverable: "A note in English naming the turning-circle elements (advance, transfer, tactical and final diameter), what changes its size (speed, draught/trim, heel, shallow water enlarging it, referencing week 3 squat), and the wheelhouse poster as the source of the vessel's own figures.",
    assessmentCriteria: [
      "The four elements are correctly defined (advance, transfer, tactical diameter, final diameter).",
      "The factors are correct (speed, draught/trim, heel) and shallow water is correctly said to enlarge the circle, with squat referenced not re-taught.",
      "The wheelhouse poster / manoeuvring booklet is correctly identified as the source of the vessel's own figures.",
      "The use of advance and transfer to time a turn is sound, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "MAN533",
    subjectName: "Maniobras I",
    subjectId: "pn-s5-maniobras-i",
    unit: "Círculo de evolución y distancia de parada",
    topic: "Distancia de parada y crash stop",
    week: 6,
    taskId: "pn-man533-w06-stopping-distance",
    taskTitle: "Judge The Vessel's Stopping Distance",
    scenario: "The officer asks the cadet to explain how far the vessel needs to stop and the difference between letting her run down and a crash stop, as a real manoeuvre rather than a calculation.",
    instructions: [
      "Explain headreach and inertia: a ship carries her way after the engines are stopped, so headreach is the distance run before she loses steerage and stops.",
      "Distinguish the natural stop (stop engines and let the way run off, keeping steerage longer) from the crash stop (full astern to stop in the shortest distance).",
      "State what changes the stopping distance: displacement and state of loading, initial speed, and the propeller type (a fixed-pitch versus a controllable-pitch propeller behave differently astern); the wheelhouse poster gives the vessel's own stopping figures.",
      "Explain why the crash stop is a last resort: applying full astern causes a loss of steering control during the stop, so the vessel cannot be steered reliably while stopping. Boundary: the kinematics (distance = speed x time and the uniform-acceleration equations) were covered in Navegacion I week 7 and Dinamica week 5; here the concern is the real manoeuvre and its factors, not re-calculating them. Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining headreach and inertia, the natural stop versus the crash stop, the factors (displacement/loading, initial speed, propeller type) with the wheelhouse poster as the source, and why the crash stop is a last resort, with the kinematics left to Navegacion I and Dinamica.",
    assessmentCriteria: [
      "Headreach and the ship's inertia are correctly explained.",
      "The natural stop and the crash stop are correctly distinguished.",
      "The factors are correct (displacement/loading, initial speed, fixed vs controllable-pitch propeller) with the wheelhouse poster as the source.",
      "The crash stop is correctly explained as a last resort (loss of steering during the stop), the kinematics boundary is respected, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "MAN533",
    subjectName: "Maniobras I",
    subjectId: "pn-s5-maniobras-i",
    unit: "Sistema de propulsión",
    topic: "Efectos combinados de hélice y timón en la maniobra",
    week: 7,
    taskId: "pn-man533-w07-combined-propeller-rudder",
    taskTitle: "Combine Propeller And Rudder To Turn Short",
    scenario: "In a tight basin the officer asks the cadet to combine the propeller and rudder to turn the vessel in the shortest space, putting the separate principles of weeks 1 and 2 to work together.",
    instructions: [
      "Recall the transverse thrust (paddle wheel effect) direction as the building block from week 2: with a right-handed propeller (turning clockwise seen from astern when going ahead), when the engine is put ASTERN the stern walks to PORT, so the bow falls to STARBOARD.",
      "Explain the rudder kick: a burst ahead with the rudder hard over gives an immediate sideways push of the stern from the propeller wash on the rudder, swinging the bow before the ship gathers headway.",
      "Combine the two into a short round turn (turning in the vessel's own length): for a right-handed single-screw vessel the short round turn is made to STARBOARD, working the engine AHEAD with the rudder hard to STARBOARD (bow swings to starboard), then ASTERN to check the headway while the transverse thrust throws the stern to PORT (keeping the bow coming to starboard), repeating the ahead-astern cycle.",
      "Boundary: weeks 1 and 2 taught the principles of the rudder and the propeller separately; this task is their combined use in a manoeuvre. Report the sequence, being explicit about the direction, in clear maritime English."
    ],
    deliverable: "A note in English combining propeller and rudder: the paddle-wheel direction from week 2 (right-handed propeller astern throws the stern to port, bow to starboard), the rudder kick, and the short round turn to starboard (ahead with starboard rudder, then astern), with the direction kept consistent throughout.",
    assessmentCriteria: [
      "The transverse thrust direction is correct (right-handed propeller astern: stern to port, bow to starboard).",
      "The rudder kick is correctly explained (early sideways push from the wash before headway builds).",
      "The short round turn is consistent with that direction (to starboard: ahead with starboard rudder, then astern using the transverse thrust).",
      "The boundary with weeks 1 and 2 is respected (principles there, combined use here), in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "MAN533",
    subjectName: "Maniobras I",
    subjectId: "pn-s5-maniobras-i",
    unit: "Maniobra de atraque",
    topic: "Atraque y desatraque: aproximación, viento y corriente, y el spring como herramienta",
    week: 8,
    taskId: "pn-man533-w08-berthing-manoeuvre",
    taskTitle: "Bring The Vessel Alongside And Off",
    scenario: "As the closing task of the subject, the officer asks the cadet to plan a berthing and unberthing manoeuvre from the bridge, bringing together the rudder, the propeller and the vessel's own distances.",
    instructions: [
      "Describe the approach: the angle to the berth and a minimum steerage speed, following the rule of prudence that you never approach faster than you are willing to hit the berth.",
      "Explain wind and current as allies or enemies: berthing against the current gives control because the water flowing past keeps steerage while the ground speed stays low, whereas a following current or an onshore wind must be allowed for.",
      "Explain the spring as a manoeuvring tool: working AHEAD against the forward (head) spring opens the STERN off the berth, and working ASTERN against the after (stern) spring opens the BOW off, which is how the vessel is sprung on and off.",
      "State the bridge-to-stations coordination: the officer on the bridge works with the forward and after stations, drawing together the rudder (week 1), the propeller (weeks 2 and 7) and the vessel's distances (weeks 5 and 6). Boundary: the handling of the mooring lines as a deck operation belongs to Practicas Marineras V; here the lens is the ship being manoeuvred. Report your plan in clear maritime English."
    ],
    deliverable: "A note in English planning berthing and unberthing from the bridge: the approach angle and minimum steerage speed, wind and current as allies or enemies (berthing against the current for control), the spring as a manoeuvring tool (ahead on the head spring opens the stern, astern on the after spring opens the bow), and bridge-to-stations coordination, with line handling left to Practicas Marineras V.",
    assessmentCriteria: [
      "The approach is sound (angle and minimum steerage speed, the never-faster-than-willing-to-hit rule).",
      "Wind and current are correctly explained (berthing against the current gives control).",
      "The springs are correct and not crossed (ahead on the head spring opens the stern; astern on the after spring opens the bow).",
      "The bridge-to-stations coordination and the Practicas Marineras V boundary are respected, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "QUH534",
    subjectName: "Química",
    subjectId: "pn-s5-quimica",
    unit: "Acidez y alcalinidad",
    topic: "Potencial hidrógeno",
    week: 1,
    taskId: "pn-quh534-w01-ph-control",
    taskTitle: "Explain pH And Why It Matters On Board",
    scenario: "The officer asks the cadet to explain what pH is and why monitoring it matters for boiler water and corrosion control on board.",
    instructions: [
      "Define pH and the difference between acidic and alkaline.",
      "State how pH is measured (indicators or meter).",
      "Explain why boiler water pH is kept within limits.",
      "Report your answer in clear maritime English."
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
    career: "PN",
    semester: "Semester V",
    subjectCode: "QUH534",
    subjectName: "Química",
    subjectId: "pn-s5-quimica",
    unit: "Corrosión",
    topic: "Celdas galvánicas",
    week: 2,
    taskId: "pn-quh534-w02-galvanic-cells",
    taskTitle: "Explain Galvanic Corrosion And Sacrificial Anodes",
    scenario: "The hull and seawater systems suffer galvanic corrosion. The officer asks the cadet to explain how a galvanic cell forms and how sacrificial anodes protect the metal.",
    instructions: [
      "Explain how a galvanic cell forms between two dissimilar metals in seawater.",
      "Explain what a sacrificial anode is and how it protects the hull.",
      "State why the anode must be a more active metal.",
      "Report your answer in clear maritime English."
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
    career: "PN",
    semester: "Semester V",
    subjectCode: "QUH534",
    subjectName: "Química",
    subjectId: "pn-s5-quimica",
    unit: "Análisis y tratamiento del agua",
    topic: "Definiciones: dureza permanente y temporal",
    week: 3,
    taskId: "pn-quh534-w03-water-hardness",
    taskTitle: "Explain Water Hardness And Boiler Scale",
    scenario: "Hard water causes scale in boilers. The officer asks the cadet to explain water hardness and why it must be treated before feeding a boiler.",
    instructions: [
      "Explain the difference between temporary and permanent hardness.",
      "Explain how hardness causes scale in a boiler.",
      "State why scale is dangerous for boiler operation.",
      "Report your answer in clear maritime English."
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
    career: "PN",
    semester: "Semester V",
    subjectCode: "QUH534",
    subjectName: "Química",
    subjectId: "pn-s5-quimica",
    unit: "Combustibles y lubricantes",
    topic: "Punto de inflamación de combustibles y lubricantes marinos",
    week: 4,
    taskId: "pn-quh534-w04-flash-point",
    taskTitle: "Explain Flash Point And Fuel Safety",
    scenario: "Fuel handling on board depends on understanding flash point. The officer asks the cadet to explain what flash point is and why it matters for safe fuel storage.",
    instructions: [
      "Define flash point in your own words.",
      "Explain why a fuel with a low flash point is more dangerous.",
      "State one precaution for storing or handling fuel based on flash point.",
      "Report your answer in clear maritime English."
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
    career: "PN",
    semester: "Semester V",
    subjectCode: "QUH534",
    subjectName: "Química",
    subjectId: "pn-s5-quimica",
    unit: "Análisis y tratamiento del agua",
    topic: "Tratamiento del agua de calderas y de refrigeración",
    week: 5,
    taskId: "pn-quh534-w05-boiler-water-treatment",
    taskTitle: "Monitor And Treat Boiler Water",
    scenario: "The officer asks the cadet to explain why boiler and cooling water is treated and what is watched on board, as the officer who understands the reason behind the routine.",
    instructions: [
      "State why the water is treated: hardness leaves scale (as covered in week 3) and untreated water corrodes the metal (the galvanic corrosion of week 2), so treatment protects the boiler; refer to both as the reason, without re-explaining hardness or corrosion.",
      "State what is monitored: the pH is kept in a controlled alkaline band (typically about 9 to 11 depending on the system, as an illustrative range) so the water is neither corrosive nor scale-forming, and chlorides are watched as the indicator of seawater contamination from a condenser or cooler leak.",
      "Work the reading: a test gives pH = 8.2 against a target band of 9.5 to 11.0; since 8.2 is below the band the water is insufficiently alkaline and tends acidic for the system, so the action is to dose the alkaline treatment and re-test. Note the scale sense: a lower pH is more acidic and a higher pH more alkaline, so 8.2 below 9.5 means not alkaline enough, not too alkaline.",
      "State how it is done: periodic on-board testing as a routine and the logging of results so trends are visible. Report your monitoring and action in clear maritime English."
    ],
    deliverable: "A note in English explaining why boiler/cooling water is treated (scale from hardness in week 3, corrosion from week 2, as references), what is monitored (pH in an alkaline band ~9-11, chlorides for seawater contamination), the reading pH 8.2 below the 9.5-11.0 band (insufficiently alkaline, dose and re-test), and the routine of periodic testing and logging.",
    assessmentCriteria: [
      "The reason for treatment is correct (scale from hardness, corrosion) and given as references, not re-taught.",
      "The monitored parameters are correct (alkaline pH band ~9-11, chlorides as seawater-contamination indicator).",
      "The reading is interpreted correctly (pH 8.2 is below the 9.5-11.0 band = insufficiently alkaline = tends acidic; dose alkaline treatment and re-test), with the correct scale sense.",
      "The routine (periodic testing and logging of results) is correct, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "QUH534",
    subjectName: "Química",
    subjectId: "pn-s5-quimica",
    unit: "Combustibles y lubricantes",
    topic: "Química del fuego: el tetraedro y los rangos de inflamabilidad",
    week: 6,
    taskId: "pn-quh534-w06-fire-chemistry",
    taskTitle: "Explain The Chemistry Of Fire",
    scenario: "The officer asks the cadet to explain the chemistry of fire, building on the flash point of week 4 towards why a vapour ignites at all.",
    instructions: [
      "State the fire tetrahedron: fuel, oxygen, heat and the chain reaction; the chain reaction is the fourth element that turns the old triangle into a tetrahedron, and removing it is how chemical extinguishing agents put out a fire.",
      "State the flammability range: the lower explosive limit (LEL) and the upper explosive limit (UEL), where below the LEL the mixture is too lean and above the UEL it is too rich, so ignition is possible only between the two, and note that the LEL is always lower than the UEL.",
      "Use the classic example of methane as illustrative: an LEL of about 5 percent and a UEL of about 15 percent by volume in air, so a methane-air mixture ignites only between roughly 5 and 15 percent.",
      "Connect to week 4: the flash point tells you WHEN a liquid gives off flammable vapours, while the LEL and UEL tell you at WHAT CONCENTRATION those vapours will burn. Boundary: fighting the fire is the fire-fighting subject (C0038); here the concern is the chemistry of why it burns. Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining the fire tetrahedron (fuel, oxygen, heat, chain reaction, the fourth element that chemical agents break), the flammability range (LEL below the UEL, ignition only between them), methane as illustrative (~5% to ~15%), and the link to week 4 (flash point = when vapours form, LEL/UEL = at what concentration they burn), with fire-fighting left to C0038.",
    assessmentCriteria: [
      "The tetrahedron is correct (fuel, oxygen, heat, chain reaction) and the chain reaction is identified as what chemical agents break.",
      "The flammability range is correct (LEL below UEL, ignition only between them, lean below / rich above).",
      "The methane example is correct and illustrative (LEL ~5%, UEL ~15% by volume).",
      "The link to week 4 flash point is correct and the C0038 fire-fighting boundary is respected, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "QUH534",
    subjectName: "Química",
    subjectId: "pn-s5-quimica",
    unit: "Atmósferas peligrosas",
    topic: "La química de la atmósfera en espacios cerrados",
    week: 7,
    taskId: "pn-quh534-w07-hazardous-atmospheres",
    taskTitle: "Test A Dangerous Enclosed-Space Atmosphere",
    scenario: "Before anyone enters an enclosed space the officer asks the cadet to explain the chemistry of its atmosphere and why it must be measured, not judged by eye.",
    instructions: [
      "Explain oxygen deficiency: normal air is 20.9 percent oxygen, but in a closed space the oxidation of the cargo, the steel corroding (rusting) and decomposition all CONSUME oxygen, so the atmosphere can fall below what is safe to breathe.",
      "Name the common toxic gases: hydrogen sulphide (H2S), which smells of rotten eggs at low concentration but deadens the sense of smell at high concentration, so a smell that fades is not safety, and carbon monoxide (CO), which is colourless and odourless; note that a flammable atmosphere is measured against the LEL from week 6.",
      "State the order of testing and why: oxygen first, then flammables, then toxics, because many flammable-gas meters need sufficient oxygen to read correctly, so the oxygen reading must come first.",
      "State why the space is ventilated and MEASURED before entry: the atmosphere cannot be seen, so it is measured with instruments, not judged by eye. Boundary: the full enclosed-space entry procedure belongs to the operational subjects; here the lens is the chemistry of the atmosphere. Note the practical entry reference (about 20.9 percent oxygen ideal, with a minimum such as ~19.5-20 percent as an industry reference, while the ship's procedure governs). Report your answer in clear maritime English."
    ],
    deliverable: "A note in English on the chemistry of an enclosed-space atmosphere: oxygen deficiency (20.9% normal, consumed by oxidation/rusting/decomposition), the toxic gases (H2S deadening the smell, CO colourless and odourless), the flammable measurement against the LEL, the testing order (oxygen then flammables then toxics, with the reason) and why the atmosphere is measured not judged by eye, with the full entry procedure left to operational subjects.",
    assessmentCriteria: [
      "Oxygen deficiency is correct (20.9% normal air; oxidation, rusting and decomposition consume oxygen).",
      "The toxic gases are correct (H2S deadens the sense of smell at high concentration; CO is colourless and odourless) and the flammable-vs-LEL link to week 6 is made.",
      "The testing order is correct and justified (oxygen first because flammable meters need oxygen to read correctly, then flammables, then toxics).",
      "The measure-don't-judge principle and the boundary with the operational entry procedure are respected, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "QUH534",
    subjectName: "Química",
    subjectId: "pn-s5-quimica",
    unit: "Química ambiental marina",
    topic: "Contaminación marina: hidrocarburos, SOx y NOx, y agua de lastre",
    week: 8,
    taskId: "pn-quh534-w08-marine-environmental-chemistry",
    taskTitle: "Explain The Chemistry Of Marine Pollution",
    scenario: "As the closing task of the subject, the officer asks the cadet to explain the chemistry behind the main forms of marine pollution from ships.",
    instructions: [
      "Explain the behaviour of spilled oil: it spreads into a thin film on the water, the lighter fractions evaporate, and the heavier fractions persist and either sink or emulsify into a water-in-oil mixture that is hard to recover.",
      "Explain SOx and NOx and where they come from: the sulphur in the fuel burns to sulphur oxides (SOx), while the high temperature of combustion makes the nitrogen and oxygen of the air combine into nitrogen oxides (NOx); they are regulated because they cause acid rain and harm health, with MARPOL Annex VI as the framework.",
      "Explain ballast water as a vector: water taken on in one port carries living organisms that are discharged in another, so ballast water can spread invasive species.",
      "Boundary: the environmental ethical decision belongs to Professional Ethics week 4; here the concern is the chemistry that underlies it. Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining the chemistry of marine pollution: spilled-oil behaviour (film, light fractions evaporate, heavy persist/sink/emulsify), SOx from the fuel sulphur and NOx from high-temperature combustion (regulated under MARPOL Annex VI for acid rain and health), and ballast water as a vector for invasive species, with the ethical decision left to Professional Ethics week 4.",
    assessmentCriteria: [
      "The behaviour of spilled oil is correct (spreads as a film, light fractions evaporate, heavy fractions persist/sink/emulsify).",
      "SOx and NOx are correctly sourced (SOx from the fuel sulphur, NOx from high-temperature combustion) and correctly linked to acid rain/health and MARPOL Annex VI.",
      "Ballast water is correctly explained as a vector for invasive species.",
      "The boundary with Professional Ethics week 4 is respected, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "COV535",
    subjectName: "Comunicación Visual",
    subjectId: "pn-s5-comunicacion-visual",
    unit: "Comunicación con Código Morse",
    topic: "Comunicación de mensajes de auxilio con Código Morse",
    week: 1,
    taskId: "pn-cov535-w01-morse-distress",
    taskTitle: "Send A Distress Signal In Morse Code",
    scenario: "In an emergency with no radio, a vessel signals distress by Morse light. The officer asks the cadet to explain how the distress signal is sent and recognised.",
    instructions: [
      "State the Morse signal for distress (SOS) and its pattern.",
      "Explain how it is sent by signal lamp.",
      "Explain why Morse light is still a valuable backup at sea.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining the SOS Morse distress signal, how it is sent by lamp, and why Morse light remains valuable.",
    assessmentCriteria: [
      "The SOS pattern is correct.",
      "The signalling method is correct.",
      "The backup-value reasoning is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 15,
    estimatedTime: "25 min",
    difficulty: "Foundation"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "COV535",
    subjectName: "Comunicación Visual",
    subjectId: "pn-s5-comunicacion-visual",
    unit: "Código Internacional de Señales",
    topic: "Comunicación de mensajes con el Código Internacional de Señales",
    week: 2,
    taskId: "pn-cov535-w02-flag-signals",
    taskTitle: "Use International Code Flag Signals",
    scenario: "Vessels communicate with flag hoists. The officer asks the cadet to explain how single-flag signals carry standard meanings and to give examples.",
    instructions: [
      "Explain how a single code flag can carry a complete standard message.",
      "Give two examples of single-flag meanings (e.g. flag 'A', flag 'O').",
      "Explain when flag signals are used instead of radio.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining single-flag code signals with two examples and when they are used.",
    assessmentCriteria: [
      "The single-flag concept is correct.",
      "The examples are valid.",
      "The use case is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 20,
    estimatedTime: "30 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "COV535",
    subjectName: "Comunicación Visual",
    subjectId: "pn-s5-comunicacion-visual",
    unit: "Sistema de Boyado Marítimo (IALA)",
    topic: "Marcas cardinales",
    week: 3,
    taskId: "pn-cov535-w03-cardinal-marks",
    taskTitle: "Interpret IALA Cardinal Marks",
    scenario: "The vessel approaches a hazard marked by IALA cardinal buoys. The officer asks the cadet to explain what cardinal marks indicate and how to pass them safely.",
    instructions: [
      "Explain what a cardinal mark indicates about where safe water lies.",
      "Describe how to identify a north, east, south, or west cardinal mark.",
      "State how the cadet passes a cardinal mark safely.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining IALA cardinal marks, how to identify them, and how to pass them safely.",
    assessmentCriteria: [
      "The meaning of cardinal marks is correct.",
      "The identification method is correct.",
      "The safe-passing action is sound.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "COV535",
    subjectName: "Comunicación Visual",
    subjectId: "pn-s5-comunicacion-visual",
    unit: "Reglamento Internacional para prevenir abordajes en la mar",
    topic: "Parte C. Luces y marcas",
    week: 4,
    taskId: "pn-cov535-w04-lights-shapes",
    taskTitle: "Identify A Vessel By Its Lights",
    scenario: "At night, vessels are identified by their navigation lights under COLREGS Part C. The officer asks the cadet to identify a vessel and its situation from a described light configuration.",
    instructions: [
      "Describe the lights a power-driven vessel underway must show.",
      "Explain how the lights tell you the vessel's aspect (heading relative to you).",
      "Give one example of special lights (e.g. vessel not under command, restricted in ability to manoeuvre).",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English explaining how a vessel is identified by its navigation lights under COLREGS, with the aspect and one special-light example.",
    assessmentCriteria: [
      "The basic light configuration is correct.",
      "The aspect reasoning is correct.",
      "The special-light example is valid.",
      "The answer is clear and in correct English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "COV535",
    subjectName: "Comunicación Visual",
    subjectId: "pn-s5-comunicacion-visual",
    unit: "Código Internacional de Señales",
    topic: "Banderas de un solo significado que el oficial reconoce a la vista",
    week: 5,
    taskId: "pn-cov535-w05-single-letter-flags",
    taskTitle: "Recognise Single-Letter Flag Signals At Sight",
    scenario: "A vessel is flying a single code flag. The officer asks the cadet to give the exact meanings of the single-letter hoists that every watchkeeper must know at sight, building on the flag system of week 2.",
    instructions: [
      "State why a single-letter signal is urgent by design: it carries a complete standard message that is read at a glance without a code book, so it is used for the situations that must be understood immediately.",
      "Give the exact meanings of the safety-critical letters: A (Alfa) 'I have a diver down; keep well clear at slow speed', B (Bravo) 'I am taking in, discharging or carrying dangerous goods', O (Oscar) 'Man overboard', and Q (Quebec) 'My vessel is healthy and I request free pratique'.",
      "Give the pilot pair, which are easily confused: G (Golf) 'I require a pilot' versus H (Hotel) 'I have a pilot on board'; and note P (Papa), the Blue Peter, which in harbour means all persons should report on board as the vessel is about to proceed to sea.",
      "Boundary: week 2 taught the flag system (how a hoist carries a message); this task is the critical vocabulary itself. Report the meanings in clear maritime English."
    ],
    deliverable: "A note in English giving the exact meanings of the safety-critical single-letter flags (A diver down, B dangerous goods, O man overboard, Q free pratique), the confused pilot pair (G require a pilot vs H pilot on board) and P (all aboard in harbour), with why a single-letter signal is urgent by design, building on the week 2 system.",
    assessmentCriteria: [
      "A, B, O and Q are given with their exact meanings (A diver down, B dangerous goods, O man overboard, Q request free pratique).",
      "The pilot pair is correct and correctly distinguished (G 'I require a pilot' vs H 'I have a pilot on board') and P is correct.",
      "The reason a single-letter signal is urgent by design (read at a glance, no code book) is correct.",
      "The boundary with week 2 (system there, vocabulary here) is respected, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "COV535",
    subjectName: "Comunicación Visual",
    subjectId: "pn-s5-comunicacion-visual",
    unit: "Señales luminosas y de maniobra",
    topic: "La lámpara de señales y las señales de maniobra de la Regla 34",
    week: 6,
    taskId: "pn-cov535-w06-manoeuvring-signals",
    taskTitle: "Signal A Manoeuvre By Light And Sound",
    scenario: "Two vessels are in sight of one another and one is about to alter course. The officer asks the cadet to explain the signal lamp procedure and the manoeuvring signals that state the intended action.",
    instructions: [
      "Explain the basic signal lamp (Aldis) call-and-answer procedure in Morse light: the general call is AA AA repeated, the answer is TTTT, and a single T acknowledges that a word or group is received.",
      "State the manoeuvring signals of COLREGS Rule 34, given when vessels are in sight of one another, as short blasts on the whistle with an optional matching light flash: one short = 'I am altering my course to STARBOARD', two short = 'I am altering my course to PORT', three short = 'I am operating ASTERN propulsion'.",
      "State the doubt signal: at least five short and rapid blasts (and flashes) mean doubt about whether the other vessel is taking sufficient action to avoid collision, i.e. a warning of danger.",
      "Boundary: week 1 was the Morse distress signal and week 4 was the Part C lights a vessel carries to show her situation; this task is the ACTIVE signal of an intended manoeuvre (the light version complements the sound). Report the signals in clear maritime English."
    ],
    deliverable: "A note in English on the signal lamp procedure (call AA AA, answer TTTT, received T) and the Rule 34 manoeuvring signals (one short = starboard, two = port, three = astern, five or more = doubt/danger), with light complementing sound, distinct from the week 1 distress Morse and the week 4 Part C situation lights.",
    assessmentCriteria: [
      "The signal lamp call-and-answer procedure is correct (AA AA call, TTTT answer, T received).",
      "The Rule 34 signals are correctly mapped (one short = starboard, two = port, three = astern) with no shift.",
      "The doubt signal is correct (at least five short and rapid blasts = doubt/danger).",
      "The boundary with week 1 (distress) and week 4 (Part C situation lights) is respected, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "COV535",
    subjectName: "Comunicación Visual",
    subjectId: "pn-s5-comunicacion-visual",
    unit: "Sistema de Boyado Marítimo (IALA)",
    topic: "Marcas laterales, regiones A y B, y el resto del sistema IALA",
    week: 7,
    taskId: "pn-cov535-w07-lateral-marks-regions",
    taskTitle: "Read IALA Lateral Marks And Regions",
    scenario: "The vessel is entering a buoyed channel from seaward. The officer asks the cadet to complete the IALA system beyond the cardinal marks of week 3: the lateral marks, the two regions, and the remaining marks.",
    instructions: [
      "State the lateral marks and the critical region difference. In IALA Region B (the Americas, including Mexico, plus Japan, the Philippines and Korea), when entering from seaward you keep the RED marks and red light to STARBOARD ('red right returning') and the green marks to port. In IALA Region A (Europe, Africa, most of Asia and Oceania) it is REVERSED: the red marks are kept to port when entering from seaward.",
      "State clearly that Mexico is in Region B, so 'red right returning' applies here, and warn that this is the classic mistake to avoid.",
      "Give the remaining marks: safe water (red and white vertical stripes, white light), isolated danger (black with red bands, two black spheres as a topmark, white light group flashing two), special marks (yellow) and the emergency wreck marking buoy for a new wreck (blue and yellow vertical stripes, alternating blue and yellow light).",
      "Boundary: week 3 covered the cardinal marks, referenced here without re-teaching. Report how you would read the channel in clear maritime English."
    ],
    deliverable: "A note in English completing the IALA system: the lateral marks and the region difference (Region B / Mexico = red to starboard entering, 'red right returning'; Region A = red to port), plus safe-water, isolated-danger, special and new-wreck marks, with the week 3 cardinal marks referenced not re-taught.",
    assessmentCriteria: [
      "The region rule is correct and not inverted (Region B / Mexico: red to starboard entering from seaward, 'red right returning'; Region A: red to port).",
      "Mexico is correctly placed in Region B and the classic mistake is flagged.",
      "The remaining marks are correct (safe water red/white stripes; isolated danger black with red bands and two spheres; special yellow; new-wreck blue/yellow).",
      "The boundary with the week 3 cardinal marks is respected, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "COV535",
    subjectName: "Comunicación Visual",
    subjectId: "pn-s5-comunicacion-visual",
    unit: "Señales de peligro",
    topic: "Señales de peligro del Anexo IV y su composición integrada",
    week: 8,
    taskId: "pn-cov535-w08-integrated-distress",
    taskTitle: "Compose An Integrated Distress Picture",
    scenario: "As the closing task of the subject, the officer asks the cadet to know the COLREGS Annex IV distress signals and to compose the correct set of signals for a given emergency, drawing together everything learned in the subject.",
    instructions: [
      "List the main Annex IV distress signals the officer must recognise: SOS by any method, MAYDAY by radiotelephony, the flag signal November-Charlie (NC) of the International Code, red rockets or red flares, an orange smoke signal, arms outstretched to each side raised and lowered SLOWLY and repeatedly, and flames on the vessel.",
      "Explain that these signals may be used together to make the emergency unmistakable, and that they must not be used for any other purpose.",
      "Work the integrating scenario: for a vessel not under command with an injured crew member near a buoyed channel, compose the correct signal picture, combining flags (the NC distress signal and the single-letter flags of weeks 2 and 5), light or Morse (the distress and manoeuvring signals of weeks 1 and 6) and the reading of the buoyage (the cardinal and lateral marks of weeks 3 and 7).",
      "Report your composed distress picture, explaining each element, in clear maritime English."
    ],
    deliverable: "A note in English listing the main Annex IV distress signals (SOS, MAYDAY, NC flags, red rockets/flares, orange smoke, arms raised and lowered slowly, flames on board) and composing the correct integrated signal picture for the given scenario, combining flags (weeks 2/5), light or Morse (weeks 1/6) and buoyage (weeks 3/7).",
    assessmentCriteria: [
      "The Annex IV signals are correct (arms raised and lowered slowly, orange smoke, red rockets/flares, NC flags, SOS/MAYDAY, flames on board).",
      "The rule that distress signals are only for distress is stated.",
      "The composed signal picture is correct and appropriate for the scenario, combining flags, light/Morse and buoyage.",
      "The integration of weeks 1-7 is coherent, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "ING531",
    subjectName: "Inglés Marítimo V",
    subjectId: "pn-s5-ingles-maritimo-v",
    unit: "Voz pasiva (presente simple)",
    topic: "Usa la voz pasiva en presente para hablar de cosas tradicionales",
    week: 1,
    taskId: "pn-ing531-w01-passive-procedures",
    taskTitle: "Describe Procedures Using The Passive Voice",
    scenario: "Shipboard procedures are often written in the passive voice ('the valve is closed'). The officer asks the cadet to describe a routine procedure using the passive voice correctly.",
    instructions: [
      "Choose a simple shipboard procedure to describe.",
      "Write the steps using the passive voice in the present simple.",
      "Make sure each step is clear about what is done, not who does it.",
      "Keep the description clear and professional in English."
    ],
    deliverable: "A procedure description in English using the present simple passive voice to state the steps clearly.",
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
    career: "PN",
    semester: "Semester V",
    subjectCode: "ING531",
    subjectName: "Inglés Marítimo V",
    subjectId: "pn-s5-ingles-maritimo-v",
    unit: "Comparativos",
    topic: "Compara con la estructura (not) as…as",
    week: 2,
    taskId: "pn-ing531-w02-comparatives",
    taskTitle: "Compare Two Vessels Or Routes",
    scenario: "You must compare two options for the bridge. The officer asks you to compare two vessels or two routes using comparative structures clearly.",
    instructions: [
      "Choose two vessels or two routes to compare.",
      "Use comparative structures (including 'as...as' / 'not as...as').",
      "Make at least three clear comparisons.",
      "Report the comparison in clear maritime English."
    ],
    deliverable: "A comparison in English of two vessels or routes using correct comparative structures with at least three points.",
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
    career: "PN",
    semester: "Semester V",
    subjectCode: "ING531",
    subjectName: "Inglés Marítimo V",
    subjectId: "pn-s5-ingles-maritimo-v",
    unit: "Familiarización con frases normalizadas de la Organización",
    topic: "Utiliza las expresiones because, since, due to, as, because of",
    week: 3,
    taskId: "pn-ing531-w03-reporting-causes",
    taskTitle: "Report Causes Using Linking Expressions",
    scenario: "When reporting an incident or delay, you must state the cause clearly. The officer asks you to report a situation using linking expressions (because, due to, since) correctly.",
    instructions: [
      "Describe a shipboard situation with a cause and an effect.",
      "Report it using linking expressions (because, since, due to, as, because of).",
      "Make sure the cause-effect relationship is clear.",
      "Keep the report clear and professional in English."
    ],
    deliverable: "A short report in English stating a cause and effect using correct linking expressions.",
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
    career: "PN",
    semester: "Semester V",
    subjectCode: "ING531",
    subjectName: "Inglés Marítimo V",
    subjectId: "pn-s5-ingles-maritimo-v",
    unit: "Familiarización con frases normalizadas de la Organización",
    topic: "Uso de tiempos simples y continuos",
    week: 4,
    taskId: "pn-ing531-w04-smcp-phrases",
    taskTitle: "Use IMO Standard Marine Communication Phrases",
    scenario: "The IMO Standard Marine Communication Phrases (SMCP) give crews of all nationalities a common language. The officer asks the cadet to use the correct SMCP for a given bridge situation.",
    instructions: [
      "Choose a bridge situation (e.g. reporting position, responding to a VHF call).",
      "State the correct SMCP standard phrase for that situation.",
      "Explain why standard phrases reduce misunderstanding between crews.",
      "Report the exchange in clear maritime English."
    ],
    deliverable: "A note in English giving the correct SMCP phrase for a bridge situation, with an explanation of why standard phrases matter.",
    assessmentCriteria: [
      "The SMCP phrase is appropriate to the situation.",
      "The phrase is used correctly.",
      "The reasoning about standardization is sound.",
      "The English is clear and professional."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "ING531",
    subjectName: "Inglés Marítimo V",
    subjectId: "pn-s5-ingles-maritimo-v",
    unit: "Verbos modales",
    topic: "Modales de obligación, prohibición y permiso en el inglés normativo",
    week: 5,
    taskId: "pn-ing531-w05-modal-verbs-regulations",
    taskTitle: "Read Obligation And Prohibition In Regulations",
    scenario: "Regulations and procedures turn on their modal verbs. The officer asks the cadet to read the modal verbs of maritime regulation correctly, because misreading one changes the legal duty.",
    instructions: [
      "Set out the modal verbs of regulation: 'must' is a strong obligation, 'must not' is a prohibition, 'shall' is the formal obligation of a regulation (the verb of the COLREGS and SOLAS, an obligation and not a future), 'should' is a recommendation, and 'may' is permission.",
      "Show each with a regulatory sentence in your own words: 'every vessel shall at all times keep a proper look-out' (obligation), 'the officer of the watch must not leave the bridge unattended' (prohibition), 'the master may depart from these rules when needed to avoid immediate danger' (permission).",
      "Draw the fine line that changes the duty: 'must not' forbids the action, while 'need not' only removes the obligation (you are free not to do it), so they are opposites in effect and must not be confused; and 'shall' here is duty, not the future tense.",
      "Rewrite one loosely worded instruction into precise regulatory English, choosing the modal that states the real duty. Report in clear maritime English."
    ],
    deliverable: "A note in English setting out must / must not / shall / should / may with a regulatory sentence for each in the cadet's own words, the must-not (prohibition) versus need-not (no obligation) distinction, the point that regulatory 'shall' is duty not future, and one instruction rewritten into precise regulatory English.",
    assessmentCriteria: [
      "The modals are correctly ranked (must = strong obligation, must not = prohibition, shall = regulatory obligation, should = recommendation, may = permission).",
      "'shall' is correctly treated as regulatory obligation, not the future tense.",
      "The must-not (prohibition) versus need-not (no obligation) distinction is correct.",
      "The rewritten instruction uses the modal that states the real duty, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "ING531",
    subjectName: "Inglés Marítimo V",
    subjectId: "pn-s5-ingles-maritimo-v",
    unit: "Verbos frasales",
    topic: "Verbos frasales del puente y la estación de maniobra",
    week: 6,
    taskId: "pn-ing531-w06-bridge-phrasal-verbs",
    taskTitle: "Use Bridge Phrasal Verbs In Orders",
    scenario: "Bridge and mooring orders are full of phrasal verbs. The officer asks the cadet to use them with their exact operational meaning and to know when a plainer form is clearer.",
    instructions: [
      "Give the exact operational meaning of the working phrasal verbs: 'get under way' (begin to move), 'heave up' (bring the anchor up), 'pay out' (let rope or cable run out, that is slack it away, not haul it in), 'make fast' (secure a line), 'stand by' (be ready and wait), 'look out for' (watch attentively for), 'single up' (reduce to the minimum lines before letting go) and 'let go' (release, as in let go the lines or the anchor).",
      "Put four of them into short bridge or mooring orders as they would actually be given.",
      "Show the pay-out trap: 'pay out' slacks the line away from the ship, the opposite of hauling it in, so reading it backwards would run the manoeuvre the wrong way.",
      "State the register nuance: because crews are of mixed nationality, the SMCP sometimes prefers a plainer non-phrasal form for clarity, so say when the phrasal verb is the standard order and when the explicit form is safer. Report in clear maritime English."
    ],
    deliverable: "A note in English giving the exact operational meaning of the bridge phrasal verbs (get under way, heave up, pay out as slack away, make fast, stand by, look out for, single up, let go), four of them in real orders, the pay-out (not haul-in) trap, and the register nuance on when a plainer SMCP form is clearer.",
    assessmentCriteria: [
      "Each phrasal verb is given its exact operational meaning (notably pay out = slack away, heave up = bring the anchor up).",
      "Four are used correctly in realistic bridge or mooring orders.",
      "The pay-out versus haul-in distinction is correct.",
      "The register nuance (when the SMCP prefers a plainer form for mixed-nationality clarity) is sound, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "ING531",
    subjectName: "Inglés Marítimo V",
    subjectId: "pn-s5-ingles-maritimo-v",
    unit: "Comunicación radiotelefónica",
    topic: "El protocolo GMDSS de socorro, urgencia y seguridad",
    week: 7,
    taskId: "pn-ing531-w07-gmdss-distress-protocol",
    taskTitle: "Send A Distress Call By Radiotelephony",
    scenario: "In a serious emergency the officer must speak on the radio in the one format the whole world understands. The officer asks the cadet to send a distress call by radiotelephony in correct doctrinal form.",
    instructions: [
      "State the three signals and their hierarchy: MAYDAY for distress (grave and imminent danger to a vessel or person), PAN PAN for urgency (a serious matter but not immediate danger to life), and SECURITE for safety (navigational or meteorological warnings); MAYDAY is reserved for grave and imminent danger only.",
      "Give the initial distress message in its non-negotiable order: (1) MAYDAY spoken three times, (2) THIS IS followed by the vessel's name three times and her call sign, (3) MAYDAY and the vessel's name once, (4) the position, (5) the nature of the distress, (6) the assistance required, (7) any further information (persons on board, whether abandoning, and so on), and (8) OVER.",
      "State the spelling and the prowords: spell the vessel's name and call sign with the NATO phonetic alphabet (Alfa, Bravo, Charlie, and so on) used strictly; OVER means I have finished and expect a reply, OUT means the exchange is finished with no reply expected, so OVER and OUT are never said together; SAY AGAIN is used to ask for a repeat, never 'repeat', which in radiotelephony means to repeat gunfire; and ROGER means received.",
      "Boundary: the routine arrival exchange with VTS was Ingles Maritimo III, and the visual distress signals were Comunicacion Visual; this task is the radiotelephony protocol of distress as its own genre. Report the call in clear maritime English."
    ],
    deliverable: "A note in English sending a distress call: the MAYDAY / PAN PAN / SECURITE hierarchy (MAYDAY for grave and imminent danger only), the eight-part distress message in its fixed order (MAYDAY x3, THIS IS + name x3 + call sign, MAYDAY + name, position, nature, assistance, further info, OVER), phonetic spelling and the prowords (OVER and OUT never together, SAY AGAIN not 'repeat', ROGER), distinct from the VTS exchange and the visual signals.",
    assessmentCriteria: [
      "The three signals and hierarchy are correct (MAYDAY distress, PAN PAN urgency, SECURITE safety) with MAYDAY reserved for grave and imminent danger.",
      "The eight-part distress message is given in the correct fixed order.",
      "The prowords are correct (OVER and OUT never together; SAY AGAIN not 'repeat', with the reason; ROGER = received) and the phonetic spelling is used.",
      "The boundary with the VTS exchange (Ingles Maritimo III) and the visual signals (Comunicacion Visual) is respected, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "ING531",
    subjectName: "Inglés Marítimo V",
    subjectId: "pn-s5-ingles-maritimo-v",
    unit: "Discurso de mando",
    topic: "El briefing y el debriefing del equipo de puente",
    week: 8,
    taskId: "pn-ing531-w08-briefing-debriefing",
    taskTitle: "Brief And Debrief The Bridge Team",
    scenario: "As the closing task of the subject, the officer must lead the team in English before and after a manoeuvre. The officer asks the cadet to deliver a passage brief and a debrief in the language of internal command.",
    instructions: [
      "Give the passage brief to the bridge team in a clear structure: the situation, the intention, the tasks by role, the points of attention, and an invitation for questions, so every member knows the plan and their part in it.",
      "Build in the closed-loop check: key orders are repeated back so the officer hears they were understood; reference this read-back as an established practice and use it here without re-teaching it.",
      "Deliver the debrief after the manoeuvre: compare what was planned with what actually happened, keep it blame-free, and draw the lessons for next time.",
      "Show concision and structure as the virtues of command English: short, ordered, unambiguous. Report the brief and debrief in clear maritime English."
    ],
    deliverable: "A note in English delivering a passage brief in a clear structure (situation, intention, tasks by role, points of attention, questions), a closed-loop check referenced not re-taught, and a blame-free debrief comparing plan with outcome and drawing lessons, with concision and structure as the marks of command English.",
    assessmentCriteria: [
      "The passage brief follows a clear structure (situation, intention, tasks by role, points of attention, questions).",
      "The closed-loop check is used and referenced as established practice, not re-taught.",
      "The debrief compares plan with outcome, stays blame-free, and draws lessons.",
      "Concision and structure are demonstrated as the virtues of command English, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "PMR536",
    subjectName: "Prácticas Marineras V",
    subjectId: "pn-s5-practicas-marineras-v",
    unit: "Cambios de amarre",
    topic: "Uso durante el atraque",
    week: 1,
    taskId: "pn-pmr536-w01-mooring-changes",
    taskTitle: "Manage Mooring Lines During Berthing",
    scenario: "During berthing the mooring lines must be changed and adjusted. The officer asks the cadet to explain how lines are managed as the vessel comes alongside.",
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
    career: "PN",
    semester: "Semester V",
    subjectCode: "PMR536",
    subjectName: "Prácticas Marineras V",
    subjectId: "pn-s5-practicas-marineras-v",
    unit: "Maniobras de fondeo",
    topic: "Preparativos para fondear",
    week: 2,
    taskId: "pn-pmr536-w02-anchoring-prep",
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
    career: "PN",
    semester: "Semester V",
    subjectCode: "PMR536",
    subjectName: "Prácticas Marineras V",
    subjectId: "pn-s5-practicas-marineras-v",
    unit: "Plumas y grúas",
    topic: "Operación y manejo",
    week: 3,
    taskId: "pn-pmr536-w03-derricks-cranes",
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
    career: "PN",
    semester: "Semester V",
    subjectCode: "PMR536",
    subjectName: "Prácticas Marineras V",
    subjectId: "pn-s5-practicas-marineras-v",
    unit: "Anclas y cadenas",
    topic: "Marcado de la cadena",
    week: 4,
    taskId: "pn-pmr536-w04-chain-marking",
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
    career: "PN",
    semester: "Semester V",
    subjectCode: "PMR536",
    subjectName: "Prácticas Marineras V",
    subjectId: "pn-s5-practicas-marineras-v",
    unit: "Maniobras de fondeo",
    topic: "La maniobra de fondeo ejecutada",
    week: 5,
    taskId: "pn-pmr536-w05-anchoring-execution",
    taskTitle: "Execute The Anchoring Manoeuvre",
    scenario: "The preparations are done and the vessel is on the anchorage. The officer asks the cadet to execute the anchoring manoeuvre and report it from the forecastle, taking the preparations of week 2 into the deck operation itself.",
    instructions: [
      "State the two ways of laying the anchor and when each is used: walking back with the windlass in gear (controlled, lowering the anchor under power) and letting go on the brake (fast, dropping to the bottom, only where the depth and holding ground suit it).",
      "State how much cable to pay out: the working rule is about three to four times the depth of water in good weather, increased for strong wind, sea or a long stay, because it is the weight of the cable lying in a catenary that cushions the pull, so the anchor digs in and the cable takes the snatch out of the load.",
      "Describe the vessel being brought up: as the cable is paid out and the vessel drops back, the cable tightens and then eases as the anchor takes hold, the sign that she is brought up and holding.",
      "Report from the station to the bridge with the correct terms: how many shackles are out (reading the markings from week 4), when the cable is up and down (leading vertically), and when the anchor is aweigh (broken out and lifted off the bottom). Boundary: week 2 was the preparations and the officer's roles were in Maniobras I; here it is the deck execution. Report in clear maritime English."
    ],
    deliverable: "A note in English executing the anchoring manoeuvre: walking back versus letting go and when each is used, the cable scope rule (about 3-4 times the depth in good weather, more in bad), the vessel brought up (cable tightens as the anchor holds), and the station reports (shackles out, up and down, anchor aweigh = broken out), building on the week 2 preparations.",
    assessmentCriteria: [
      "Walking back and letting go are correctly distinguished and situated (controlled under power vs fast on the brake).",
      "The scope rule is correct (about 3-4 times the depth in good weather, increased for wind/sea/long stay) with the catenary reason.",
      "Being brought up is correctly described (cable tightens then eases as the anchor holds).",
      "The station reports are correct (shackles out, up and down, anchor aweigh = broken out of the ground), in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "PMR536",
    subjectName: "Prácticas Marineras V",
    subjectId: "pn-s5-practicas-marineras-v",
    unit: "Plumas y grúas",
    topic: "La faena de carga: señalización, eslingado y zona de seguridad",
    week: 6,
    taskId: "pn-pmr536-w06-cargo-lifting-operations",
    taskTitle: "Run A Safe Lifting Operation",
    scenario: "A lift is being worked with the ship's crane. The officer asks the cadet to run the full deck operation on top of the basic crane handling of week 3: signalling, slinging and the safety zone.",
    instructions: [
      "State the standard hand signals to the operator (hoist, lower, stop) and the rule that STOP is the one signal that anyone may give and the operator always obeys.",
      "Explain safe slinging and the sling angle: with a two-leg sling the angle between the legs increases the tension in each leg, so for a 1000 kg load the tension per leg is T = W / (2 x cos(half the angle)) — about 500 kg per leg with the legs near vertical (angle 0 degrees), about 577 kg per leg at 60 degrees, and a full 1000 kg per leg at 120 degrees, where each leg carries the whole load; so keep the angle closed (ideally under 90 degrees) or use longer slings, and inspect the slings before use.",
      "State the golden rule of the safety zone: no one stands under a suspended load or in its path, and the zone is cleared before the lift.",
      "Explain how the signaller, operator and slingers work as one team throughout the lift. Report in clear maritime English."
    ],
    deliverable: "A note in English running a lifting operation: the hand signals (hoist, lower, stop, with stop obeyed from anyone), safe slinging with the sling-angle effect (T = W/(2 cos(half-angle)): ~500 kg per leg near vertical, ~577 kg at 60 degrees, 1000 kg at 120 degrees for a 1000 kg load, so keep the angle closed), sling inspection, and the safety zone (no one under or in the path of the load).",
    assessmentCriteria: [
      "The hand signals are correct and the stop rule is stated (anyone may signal stop, the operator always obeys).",
      "The sling-angle effect is correct (tension per leg increases with the angle: ~500 kg near vertical, ~577 kg at 60 degrees, 1000 kg at 120 degrees) with the keep-it-closed rule.",
      "Sling inspection before use is included.",
      "The safety zone rule is correct (no one under or in the path of a suspended load, cleared before lifting), in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "PMR536",
    subjectName: "Prácticas Marineras V",
    subjectId: "pn-s5-practicas-marineras-v",
    unit: "Aparejo de amarre",
    topic: "Inspección, descarte y estiba del aparejo de amarre",
    week: 7,
    taskId: "pn-pmr536-w07-mooring-gear-maintenance",
    taskTitle: "Inspect And Maintain Mooring Gear",
    scenario: "Mooring gear that fails puts the whole station in danger. The officer asks the cadet to inspect and maintain the mooring lines and fittings so that a line is discarded before it parts, not after.",
    instructions: [
      "State how to inspect fibre rope: look for external abrasion, friction burns from surging, and internal hardness or stiffness that shows the fibres are worn or fused.",
      "State how to inspect wire rope: count broken wires against the discard criterion (a set number of broken wires in a given length, as the concept) and look for corrosion and for kinks that deform the core.",
      "State correct stowage: rope coiled down, dry and ventilated, and synthetic fibre kept out of the sun, which weakens it.",
      "State the fittings point: bitts, fairleads and rollers must be sound, because a rusted or pitted fairlead saws through the line that works over it. Boundary: the snap-back danger during a towing operation was Practicas Marineras III; here the concern is the prevention, since the line that is inspected and discarded in time is the one that does not part. Report in clear maritime English."
    ],
    deliverable: "A note in English on maintaining mooring gear: inspecting fibre rope (abrasion, friction burns, internal hardness), wire rope (broken-wire discard criterion, corrosion, kinks), correct stowage (coiled, dry, ventilated, synthetic out of the sun), and fittings (a pitted fairlead saws the line), as the prevention behind the snap-back danger taught in Practicas Marineras III.",
    assessmentCriteria: [
      "Fibre rope inspection is correct (external abrasion, friction burns, internal hardness/stiffness).",
      "Wire rope inspection is correct (broken-wire discard criterion as a concept, corrosion, kinks deforming the core).",
      "Correct stowage is stated (coiled, dry, ventilated, synthetic kept out of the sun).",
      "The fittings point is correct (sound bitts/fairleads/rollers; a pitted fairlead saws the line) and the Practicas Marineras III snap-back boundary is respected, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "PMR536",
    subjectName: "Prácticas Marineras V",
    subjectId: "pn-s5-practicas-marineras-v",
    unit: "Faena de puerto",
    topic: "La faena integrada de llegada desde la estación de amarre",
    week: 8,
    taskId: "pn-pmr536-w08-integrated-berthing-operation",
    taskTitle: "Run The Integrated Arrival Operation",
    scenario: "As the closing task of the subject, the bosun runs the whole arrival on deck. The officer asks the cadet to run the integrated berthing operation from the mooring station, drawing together everything learned in the subject.",
    instructions: [
      "State the preparation at the station: mooring lines coiled down and clear for running by side, fenders in position, heaving lines ready, and the windlass or capstan tested, so the station is ready before the vessel is alongside.",
      "Report the station ready to the bridge, and keep the communication running both ways throughout the operation.",
      "Run the typical mooring sequence: the heaving line across first, then the first line ashore, then the spring made fast early to control the vessel's movement in coordination with the bridge manoeuvre, then the remaining lines, and finally the fine adjustment until the vessel is fast on her mooring plan.",
      "Keep the station-to-bridge communication continuous through the whole faena. Boundary (closing the circle with Maniobras I): there the lens was the ship being manoeuvred alongside; here it is the deck faena that moors her. Report the integrated operation in clear maritime English."
    ],
    deliverable: "A note in English running the integrated arrival from the mooring station: preparation (lines coiled and clear, fenders, heaving lines, windlass tested), the station-ready report, the mooring sequence (heaving line, first line ashore, early spring coordinated with the bridge, remaining lines, fine adjustment to the mooring plan), and continuous station-to-bridge communication, closing the circle with the Maniobras I berthing manoeuvre.",
    assessmentCriteria: [
      "The station preparation is complete (lines coiled and clear by side, fenders, heaving lines, windlass/capstan tested).",
      "The station-ready report and the two-way communication are stated.",
      "The mooring sequence is correct (heaving line, first line ashore, early spring coordinated with the bridge, remaining lines, fine adjustment to the mooring plan).",
      "The communication is continuous and the boundary with Maniobras I is respected (ship manoeuvred there, faena that moors her here), integrating weeks 1-7 in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0011",
    subjectName: "Educación Física V",
    subjectId: "pn-s5-educacion-fisica-v",
    unit: "Condición física",
    topic: "Fuerza muscular",
    week: 1,
    taskId: "pn-c0011v-w01-strength-tasks",
    taskTitle: "Link Muscular Strength To Heavy Deck Work",
    scenario: "Heavy deck work demands muscular strength. The training officer asks the cadet to connect muscular strength to specific shipboard tasks and explain the injury risk when strength or technique is lacking.",
    instructions: [
      "Define muscular strength in your own words.",
      "Name two heavy shipboard tasks that require it.",
      "Explain how poor strength or technique leads to injury (e.g. lifting).",
      "Report your answer in clear English using correct fitness terminology."
    ],
    deliverable: "A note in English linking muscular strength to two heavy shipboard tasks and the injury risk of poor strength or technique.",
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
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0011",
    subjectName: "Educación Física V",
    subjectId: "pn-s5-educacion-fisica-v",
    unit: "Condición física",
    topic: "Flexibilidad articular y muscular",
    week: 2,
    taskId: "pn-c0011v-w02-flexibility-injury",
    taskTitle: "Explain Flexibility And Injury Prevention",
    scenario: "Working in confined spaces and awkward positions demands flexibility. The officer asks the cadet to explain how flexibility helps prevent injury on board.",
    instructions: [
      "Define flexibility in your own words.",
      "Give a shipboard situation where flexibility prevents injury.",
      "Describe one way flexibility is maintained.",
      "Report your answer in clear maritime English."
    ],
    deliverable: "A note in English defining flexibility, a shipboard situation where it prevents injury, and how it is maintained.",
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
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0011",
    subjectName: "Educación Física V",
    subjectId: "pn-s5-educacion-fisica-v",
    unit: "Natación",
    topic: "Nado en grupo",
    week: 3,
    taskId: "pn-c0011v-w03-group-swimming",
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
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0011",
    subjectName: "Educación Física V",
    subjectId: "pn-s5-educacion-fisica-v",
    unit: "Concentración",
    topic: "Juegos de concentración",
    week: 4,
    taskId: "pn-c0011v-w04-focus-endurance",
    taskTitle: "Sustain Focus Through A Long Operation",
    scenario: "A long cargo or navigation operation tests sustained focus. The officer asks the cadet to explain how to keep concentration through fatigue during a long operation.",
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
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0011",
    subjectName: "Educación Física V",
    subjectId: "pn-s5-educacion-fisica-v",
    unit: "Acondicionamiento cardiovascular",
    topic: "Entrenamiento cardiovascular por intensidad percibida",
    week: 5,
    taskId: "pn-c0011v-w05-cardio-intensity-zones",
    taskTitle: "Train Cardio By Perceived Effort",
    scenario: "The training officer asks the cadet to explain how to train the heart and lungs on board by reading the intensity of the effort, using perception rather than any prescribed number.",
    instructions: [
      "Explain rating of perceived effort as the practical tool: the cadet reads intensity on a felt scale from very light through moderate and vigorous to maximal, judging it by how the body feels during the effort.",
      "Explain the talk test as a simple companion: if you can hold a conversation the effort is moderate, and if you can only speak in short phrases it is vigorous; keep intensity guided by perceived effort and the talk test, not by any prescribed pulse count or numeric heart-rate zone.",
      "Distinguish continuous training (a steady sustained pace) from interval training (alternating harder effort with easier recovery) and say what each develops (a broad aerobic base versus a higher tolerance for hard bursts).",
      "Apply it to the ship: brisk work on deck, climbing ladders and moving in limited space can all raise the effort, so the cadet can train within the space available. Report in clear English using correct fitness terminology."
    ],
    deliverable: "A note in English on training cardio by perceived effort: the perceived-effort scale and the talk test as the guides (no prescribed heart-rate numbers or zones), continuous versus interval training and what each develops, and how to apply it in the limited space of the ship.",
    assessmentCriteria: [
      "Perceived effort is correctly explained as the practical tool for reading intensity.",
      "The talk test is correct (conversation = moderate, short phrases = vigorous) and intensity is guided by perception, with no prescribed heart-rate numbers or numeric zones.",
      "Continuous and interval training are correctly distinguished with what each develops.",
      "The application to the ship's limited space is realistic, in clear English using correct fitness terminology."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0011",
    subjectName: "Educación Física V",
    subjectId: "pn-s5-educacion-fisica-v",
    unit: "Prevención de lesiones",
    topic: "Prevención de lesiones en el entrenamiento físico",
    week: 6,
    taskId: "pn-c0011v-w06-injury-prevention-training",
    taskTitle: "Prevent Injury In Physical Training",
    scenario: "The training officer asks the cadet to explain how to train without getting hurt, treating injury prevention as physiology rather than ritual.",
    instructions: [
      "Explain the warm-up by its physiological reason: it raises muscle temperature and prepares the joints for work so the tissues are ready to load, and pair it with a cool-down to ease the body down afterwards, not as a habit but because of what each does to the body.",
      "Explain gradual progression: do not increase volume, intensity and frequency all at once, because loading the body on several fronts together is where overuse injury starts.",
      "State the alarm signs that mean STOP: a sharp or stabbing pain means stop every time, while the ordinary discomfort of hard effort is acceptable, and knowing the difference between the two is what protects the cadet.",
      "State that rest is part of the training, because the body adapts and gets stronger while it recovers, not only while it works. Boundary: safe lifting technique was covered in Semester I and watch-station ergonomics in Semester III; here the concern is the sports injury that happens in training. Report in clear English using correct fitness terminology."
    ],
    deliverable: "A note in English on preventing training injury: the warm-up and cool-down by their physiological reason, gradual progression (not raising volume, intensity and frequency at once), the STOP signs (sharp/stabbing pain always, versus normal effort discomfort), and rest as part of training, distinct from Semester I lifting technique and Semester III watch ergonomics.",
    assessmentCriteria: [
      "The warm-up and cool-down are explained by their physiological reason, not as a ritual.",
      "Gradual progression is correct (not increasing volume, intensity and frequency together).",
      "The STOP signs are correct (sharp/stabbing pain always stop; normal effort discomfort acceptable) and the difference is emphasised.",
      "Rest is treated as part of training and the Semester I / Semester III boundary is respected, in clear English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0011",
    subjectName: "Educación Física V",
    subjectId: "pn-s5-educacion-fisica-v",
    unit: "Natación",
    topic: "Natación de rescate básica",
    week: 7,
    taskId: "pn-c0011v-w07-rescue-swimming",
    taskTitle: "Perform A Basic Water Rescue",
    scenario: "A person is in the water in difficulty. Completing the aquatic progression of the subject, the instructor asks the cadet to carry out a basic water rescue in the correct order of priority.",
    instructions: [
      "State the rescue hierarchy in order, from safest to most dangerous: REACH the person with an object from a safe point, then THROW a lifebuoy or line, then TOW them with a boat if one is available, and only as a LAST RESORT swim out to the rescue.",
      "Describe the safe approach if you must enter the water: talk to the person and calm them, and approach from BEHIND, because a panicking person grabs whatever floats, including the rescuer.",
      "Describe a basic tow: support the person by the chin or under the armpits and keep their airway clear of the water while you bring them in.",
      "State how to break a panic grip and the first rule of rescue: if the person seizes you, submerge, because a drowning person is trying to float and will let go of what sinks; and never forget that a rescuer who becomes a victim doubles the emergency, so your own safety is the first rule of the rescue. Report in clear English suitable for a safety briefing."
    ],
    deliverable: "A brief in English on a basic water rescue: the hierarchy (reach, then throw, then tow with a boat, then swim only as a last resort), the safe approach from behind after calming the person, a basic tow keeping the airway clear, breaking a panic grip by submerging, and the rule that the rescuer's own safety comes first.",
    assessmentCriteria: [
      "The rescue hierarchy is in the correct order (reach, throw, tow with a boat, swim only as a last resort).",
      "The safe approach is correct (calm the person, approach from behind).",
      "The basic tow keeps the airway clear (chin or armpits) and the grip defence is correct (submerge to make the person let go).",
      "The rescuer-safety-first rule is stated (a rescuer who becomes a victim doubles the emergency), in clear English suitable for a safety briefing."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0011",
    subjectName: "Educación Física V",
    subjectId: "pn-s5-educacion-fisica-v",
    unit: "Plan personal",
    topic: "El plan de entrenamiento del período de mar",
    week: 8,
    taskId: "pn-c0011v-w08-sea-period-training-plan",
    taskTitle: "Plan Your Training For The Sea Period",
    scenario: "As the closing task of the subject, the cadet must design a personal training plan for a whole sea period. The training officer asks the cadet to build a plan that fits ship life and holds the fitness needed for the work.",
    instructions: [
      "State the real constraints of the sea period: limited space and equipment, and rotating watches that break up rest, so the plan has to work in short blocks around the watch routine rather than in a gym.",
      "Integrate the capacities built this semester: strength for heavy deck work (week 1), flexibility for awkward spaces (week 2), cardio judged by perceived effort (week 5), and injury prevention with warm-up, progression and rest (week 6), balancing them across the week.",
      "Make sustainability the test of the plan: a little done consistently beats a lot started and dropped, so the plan should be light enough to keep through fatigue and a busy watch bill.",
      "Keep the purpose honest: the aim is the capacity to do the work and to stay well during the embarkation, not a performance record, a body-weight figure or a diet, and the plan sets no extreme goals. Boundary: the basic onboard routine was Semester I and the functional self-assessment was Semester III; here it is the integral sea-period plan built on the Semester V capacities. Report in clear maritime English."
    ],
    deliverable: "A note in English designing a sea-period training plan: the real constraints (limited space/equipment, rotating watches), the integration of the Semester V capacities (strength, flexibility, perceived-effort cardio, injury prevention) around the watch routine, sustainability as the test, and an honest purpose (capacity for work and wellbeing, not performance, body weight or a diet, no extreme goals), building on but distinct from the Semester I routine and the Semester III self-assessment.",
    assessmentCriteria: [
      "The sea-period constraints are addressed (limited space/equipment, rotating watches breaking up rest).",
      "The Semester V capacities are integrated and balanced (strength, flexibility, perceived-effort cardio, injury prevention).",
      "Sustainability is used as the test of the plan (a little done consistently over a lot abandoned).",
      "The purpose is kept to capacity for the work and wellbeing, with no performance, body-weight or diet targets and no extreme goals, and the Semester I / Semester III boundary is respected, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0104",
    subjectName: "Ética Profesional",
    subjectId: "pn-s5-etica-profesional",
    unit: "Ética y profesión",
    topic: "Responsabilidad social y ética de la Gente de Mar",
    week: 1,
    taskId: "pn-c0104-w01-seafarer-responsibility",
    taskTitle: "Explain The Seafarer's Ethical Responsibility",
    scenario: "A seafarer holds responsibility for lives, cargo, and the environment. The officer asks the cadet to explain the ethical responsibilities that come with the profession.",
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
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0104",
    subjectName: "Ética Profesional",
    subjectId: "pn-s5-etica-profesional",
    unit: "Ética y Moral",
    topic: "La reflexión ética",
    week: 2,
    taskId: "pn-c0104-w02-ethical-reflection",
    taskTitle: "Reason Through An Ethical Dilemma At Sea",
    scenario: "A seafarer faces a dilemma: reporting a fault honestly may delay the ship and anger superiors. The officer asks the cadet to reason through the ethical choice.",
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
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0104",
    subjectName: "Ética Profesional",
    subjectId: "pn-s5-etica-profesional",
    unit: "Ética y profesión",
    topic: "Los valores de la Gente de Mar",
    week: 3,
    taskId: "pn-c0104-w03-seafarer-values",
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
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0104",
    subjectName: "Ética Profesional",
    subjectId: "pn-s5-etica-profesional",
    unit: "Ética y profesión",
    topic: "Acción Ética: Toma de decisiones ambientales",
    week: 4,
    taskId: "pn-c0104-w04-environmental-ethics",
    taskTitle: "Make An Environmental Decision At Sea",
    scenario: "A seafarer must decide how to handle waste or a minor spill that no one would notice. The officer asks the cadet to reason through the environmentally ethical decision.",
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
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0104",
    subjectName: "Ética Profesional",
    subjectId: "pn-s5-etica-profesional",
    unit: "Ética y Moral",
    topic: "El método de análisis del dilema ético a bordo",
    week: 5,
    taskId: "pn-c0104-w05-ethical-dilemma-method",
    taskTitle: "Analyse An Ethical Dilemma Step By Step",
    scenario: "A hard choice at sea rarely announces itself as right versus wrong. Building on the ethical reflection of week 2, the officer asks the cadet to work a real dilemma through a method of analysis rather than deciding on impulse.",
    instructions: [
      "Work the method in order, as a discipline of reasoning and not a set of commandments: (1) identify the VALUES in conflict, remembering that the hardest dilemmas are right versus right, such as safety against loyalty or honesty against compassion; (2) identify who is AFFECTED by each course of action; (3) lay out the real OPTIONS, which are rarely only two; (4) weigh the CONSEQUENCES of each, in the short and the long term; (5) decide and be able to GIVE REASONS for the decision.",
      "Apply it to a non-environmental maritime dilemma: the commercial pressure to keep the schedule set against a genuine doubt about safety.",
      "Apply it to a second one: discovering an error made by a colleague you like and respect, which nonetheless has to be reported.",
      "State plainly what the method does and does not do: it does not hand you the single correct answer, because a right-versus-right dilemma has no one solution; what it gives is the discipline to decide by reasoning rather than by impulse or pressure. Report in clear maritime English."
    ],
    deliverable: "A note in English working two non-environmental dilemmas (schedule pressure versus a safety doubt; a liked colleague's error that must be reported) through the five-step method (values in conflict, affected parties, real options, consequences short and long term, decide and give reasons), stated as a discipline of reasoning that does not hand over a single answer.",
    assessmentCriteria: [
      "The five steps are applied in order (conflicting values, affected parties, real options, consequences, decide with reasons).",
      "The dilemmas are non-environmental and the right-versus-right nature is recognised (e.g. safety vs loyalty).",
      "The method is presented as a discipline of reasoning, not a formula that yields the single correct answer.",
      "The reasoning is honest about there being no one solution to a right-versus-right dilemma, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0104",
    subjectName: "Ética Profesional",
    subjectId: "pn-s5-etica-profesional",
    unit: "Ética y profesión",
    topic: "La cultura justa y el deber ético de reportar",
    week: 6,
    taskId: "pn-c0104-w06-just-culture-reporting",
    taskTitle: "Explain Just Culture And The Duty To Report",
    scenario: "The officer asks the cadet to explain why a seafarer reports near-misses and their own mistakes, and why a just culture, not a blame culture, is what keeps a ship safe.",
    instructions: [
      "Explain why errors must be reported: a blame-and-punishment culture drives mistakes into hiding, and a hidden mistake is repeated until it finally causes harm, whereas a just culture turns the same mistake into learning for everyone.",
      "Draw the distinction that a just culture rests on, keeping it sharp: an HONEST ERROR (a human slip, learned from and not punished), NEGLIGENCE (a failure to attend to a known duty), and a DELIBERATE VIOLATION (knowingly breaking a rule).",
      "State clearly that a just culture is NOT impunity: negligence and deliberate violation do carry consequences, and it is exactly that line that gives the crew confidence to report the honest errors, because they trust the system to tell the difference.",
      "State the ethical duty to report an unsafe condition even when it is uncomfortable or reflects on oneself. Boundary: writing the near-miss report as a document was covered in Advanced Writing; here the concern is the moral reason for reporting. Report in clear maritime English."
    ],
    deliverable: "A note in English on just culture and the duty to report: why a blame culture hides mistakes while a just culture makes them learning, the sharp triad (honest error not punished / negligence / deliberate violation), the point that just culture is not impunity because the last two carry consequences, and the ethical duty to report unsafe conditions, distinct from the Advanced Writing near-miss document.",
    assessmentCriteria: [
      "The blame-versus-just culture contrast is correct (blame hides errors and they repeat; just culture makes them learning).",
      "The triad is sharp and correct (honest error not punished; negligence and deliberate violation as distinct).",
      "It is explicit that just culture is not impunity (negligence and deliberate violation carry consequences, and that line builds trust).",
      "The ethical duty to report unsafe conditions is stated and the Advanced Writing boundary is respected, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0104",
    subjectName: "Ética Profesional",
    subjectId: "pn-s5-etica-profesional",
    unit: "Ética y profesión",
    topic: "La ética de la fatiga y el reconocimiento de los límites",
    week: 7,
    taskId: "pn-c0104-w07-ethics-of-fatigue-limits",
    taskTitle: "Face The Ethics Of Fatigue And Limits",
    scenario: "The officer asks the cadet to treat fatigue not as a physical fact but as an ethical question: the duty to speak up about a limit that puts other lives at risk.",
    instructions: [
      "Frame saying 'I am not fit for this' as an ETHICAL act rather than a weakness, because fatigue that is kept silent puts other lives at risk: a drowsy watchkeeper does not gamble with their own watch alone but with everyone aboard and everyone they might run down.",
      "Set the pressure to finish the task against the duty to recognise the limit, and distinguish this honestly from simply dodging work: recognising a real limit that endangers others is a duty, while using 'fatigue' to evade a fair task is not.",
      "State the double responsibility: the person who orders others to work past known limits carries as much of the ethical weight as the person who stays silent about their own.",
      "Name the quality required as moral courage: the uncomfortable word said in time. Boundary: the physiology of fatigue and the rest-hour rules were covered in Physical Education I; here the concern is the conscience that decides to speak. Report in clear maritime English."
    ],
    deliverable: "A note in English on the ethics of fatigue: saying 'I am not fit' as an ethical act (silent fatigue risks other lives), the pressure to finish versus the duty to recognise a limit (and how that differs from dodging work), the double responsibility of the one who orders past limits and the one who stays silent, and moral courage as the uncomfortable word in time, distinct from the Physical Education I physiology and rest rules.",
    assessmentCriteria: [
      "Speaking up about fatigue is framed as an ethical act, with the point that silent fatigue endangers others, not just oneself.",
      "The message is the duty to COMMUNICATE the limit, clearly distinguished from refusing or dodging a fair task.",
      "The double responsibility is stated (ordering past known limits weighs as much as staying silent).",
      "Moral courage (the uncomfortable word in time) is named and the Physical Education I boundary is respected, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0104",
    subjectName: "Ética Profesional",
    subjectId: "pn-s5-etica-profesional",
    unit: "Ética y profesión",
    topic: "El perfil ético del oficial y su código personal de conducta",
    week: 8,
    taskId: "pn-c0104-w08-officers-ethical-profile",
    taskTitle: "Write Your Ethical Profile As An Officer",
    scenario: "As the closing task of the subject, the cadet must draw the ethical profile of the officer they intend to be, turning values into concrete conduct and pointing towards the leadership still to come.",
    instructions: [
      "Turn the seafarer values of week 3 into a PERSONAL CODE of concrete commitments, written by the cadet: use commitments like 'I will never sign for what I have not checked myself' and 'I will report what I see, whether it discomforts me or not' only as examples of the FORMAT, and write your own.",
      "Explain that COHERENCE between word and deed is the real measure of character, because a crew believes what it sees an officer do, not what it hears an officer say.",
      "Explain the officer as an example: moral authority is earned by conduct and comes before formal authority, so a rank commands compliance but character commands respect.",
      "Point towards the next subject without developing it: how this ethical character is carried into leading others is the ground of Leadership; here the task is the individual profile. Report your ethical profile in clear maritime English."
    ],
    deliverable: "A note in English drawing the officer's ethical profile: a personal code of concrete commitments written by the cadet (the given commitments used only as format examples), coherence between word and deed as the measure of character, and moral authority preceding formal authority, pointing towards Leadership without developing it.",
    assessmentCriteria: [
      "The values of week 3 are turned into concrete personal commitments written by the cadet, with the given examples treated as format, not imposition.",
      "Coherence between word and deed is explained as the real measure of character.",
      "Moral authority is correctly placed before formal authority (character commands respect, rank commands compliance).",
      "The bridge to Leadership is drawn without developing leadership itself, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0105",
    subjectName: "Liderazgo",
    subjectId: "pn-s5-liderazgo",
    unit: "El liderazgo",
    topic: "Tipos de liderazgo",
    week: 1,
    taskId: "pn-c0105-w01-leadership-styles",
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
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0105",
    subjectName: "Liderazgo",
    subjectId: "pn-s5-liderazgo",
    unit: "Autoconciencia",
    topic: "Inteligencia emocional: autoconciencia, manejo de emociones, interpretación de emociones, empatía, uso de emociones",
    week: 2,
    taskId: "pn-c0105-w02-emotional-intelligence",
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
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0105",
    subjectName: "Liderazgo",
    subjectId: "pn-s5-liderazgo",
    unit: "Elementos del liderazgo",
    topic: "Trabajo en equipo",
    week: 3,
    taskId: "pn-c0105-w03-teamwork",
    taskTitle: "Build Effective Teamwork On Board",
    scenario: "A watch team works best when it functions as a team, not individuals. The officer asks the cadet to explain how an officer builds effective teamwork on board.",
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
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0105",
    subjectName: "Liderazgo",
    subjectId: "pn-s5-liderazgo",
    unit: "Estrategias de planeación y operación",
    topic: "Estrategias para resolver los problemas: Ganar-ganar, sinergia",
    week: 4,
    taskId: "pn-c0105-w04-problem-solving",
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
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0105",
    subjectName: "Liderazgo",
    subjectId: "pn-s5-liderazgo",
    unit: "La comunicación del líder",
    topic: "Instrucciones claras, verificación de la comprensión, escucha activa y feedback",
    week: 5,
    taskId: "pn-c0105-w05-leader-communication",
    taskTitle: "Communicate As A Leader On Watch",
    scenario: "An officer's orders are only as good as the crew's understanding of them. Building on the leadership styles of week 1 and the emotional intelligence of week 2, the officer asks the cadet to master the everyday communication of command: the clear instruction, the confirmed understanding, the listening that gathers information, and the feedback that corrects without wounding.",
    instructions: [
      "Give a CLEAR instruction: state what, who and when, and — when time allows — the why, because an instruction carried with its reason is executed better and adapted intelligently when the situation shifts, whereas the bare order breaks the moment reality differs from the plan.",
      "Verify understanding, and be explicit that this is NOT distrust: the closed-loop read-back is an established practice from Maritime English V, so do not re-teach it as a language drill; here give the human reason — verifying closes the circuit in which a misunderstanding kills, and the officer who checks is not doubting the sailor but refusing to let a silent gap cost a life.",
      "Use ACTIVE LISTENING as a tool of command: the leader who does not listen decides with half the information and, worse, teaches the team to stay silent; but keep the line clear that listening is not surrendering the decision — the officer listens AND decides, taking in the crew's information and then owning the call.",
      "Give feedback that corrects the CONDUCT without humiliating the PERSON: concrete, in time, and with the corrective given in private while recognition is given in public. Report in clear maritime English."
    ],
    deliverable: "A note in English on the leader's communication: the clear instruction (what, who, when, and the why when time allows), verifying understanding as closing the circuit rather than distrust (the Maritime English V closed-loop as established practice, not re-taught), active listening as a command tool that still leaves the decision with the officer, and feedback that corrects conduct without humiliating the person (concrete, timely, corrective in private and recognition in public).",
    assessmentCriteria: [
      "The clear instruction covers what, who and when, and the why when time allows, with the reason that context improves execution.",
      "Verifying understanding is framed as closing the circuit, not distrust, referencing the Maritime English V closed-loop as established practice rather than re-teaching it.",
      "Active listening is presented as a command tool, with the distinction that the officer listens AND decides (listening is not surrendering the call).",
      "Feedback corrects conduct without humiliating the person (concrete, timely, corrective in private, recognition in public), in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0105",
    subjectName: "Liderazgo",
    subjectId: "pn-s5-liderazgo",
    unit: "La comunicación del líder",
    topic: "La asertividad graduada y el desafío respetuoso",
    week: 6,
    taskId: "pn-c0105-w06-graded-assertiveness",
    taskTitle: "Speak Up Through Graded Assertiveness",
    scenario: "The most dangerous words at sea are the ones a subordinate saw the need to say and did not. Receiving the moral courage of Professional Ethics week 7 as an established value, the officer asks the cadet to turn that courage into a technique: how to say the difficult thing to the one in command, and how a leader makes it safe to be challenged.",
    instructions: [
      "Climb the SCALE of assertiveness in order — the hint, the stated preference, the expressed concern, the stated problem, and finally the formal alert that demands a response — and explain why one moves up a grade when there is no reaction: the aim is to escalate the FORCE of the communication until the danger is addressed, not to nag.",
      "State the subordinate's DUTY to question a dangerous decision: maritime and aviation history is full of accidents where someone saw the error and did not dare to speak, so absolute deference to rank is a safety hazard, not a virtue.",
      "Draw the line sharply, as the heart of the task, between CHALLENGING a dangerous decision and DISOBEYING a legitimate order: graded assertiveness voices the concern and escalates it until it is answered — it is not insubordination and it is not a licence to refuse a lawful command; make this distinction unmistakable.",
      "Turn to the LEADER's side: the officer builds the climate where being challenged is safe — thanking the person for the challenge and never punishing a good-faith alert — because a team that has been punished for speaking will fall silent exactly when the officer most needs to hear it. This puts the moral courage received from Professional Ethics week 7 to work as technique, without re-teaching it. Report in clear maritime English."
    ],
    deliverable: "A note in English on graded assertiveness and respectful challenge: the assertiveness scale (hint, preference, concern, problem, formal alert) and why one escalates when there is no reaction, the subordinate's duty to question a dangerous decision (deference to rank as a safety hazard), the sharp line between challenging a dangerous decision and disobeying a legitimate order, and the leader's duty to make challenge safe (thank it, never punish a good-faith alert), building on the moral courage of Professional Ethics week 7.",
    assessmentCriteria: [
      "The assertiveness scale is given in order and the reason for escalating a grade when unanswered is the increasing force needed to address the danger.",
      "The duty to question a dangerous decision is stated, with absolute deference to rank identified as a safety hazard.",
      "The line between challenging a dangerous decision and disobeying a legitimate order is unmistakable (assertiveness is escalation of communication, not insubordination).",
      "The leader's duty to make challenge safe is covered (thank the challenge, never punish a good-faith alert), putting Professional Ethics week 7 to work without re-teaching it, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0105",
    subjectName: "Liderazgo",
    subjectId: "pn-s5-liderazgo",
    unit: "La gestión del equipo",
    topic: "La gestión del error y del conflicto en el equipo",
    week: 7,
    taskId: "pn-c0105-w07-error-and-conflict",
    taskTitle: "Manage Error And Conflict In The Team",
    scenario: "A team that is punished for its mistakes hides them, and a crew in unspoken conflict has stopped working as one. The officer asks the cadet to handle both: correcting an error without destroying the person, and mediating a conflict before it escalates.",
    instructions: [
      "When the team makes a mistake, correct the FAILURE without destroying the PERSON: the just culture of Professional Ethics week 6 is the established FRAME here, not re-taught — the practical skill is to separate the fact from the judgement, ask before you sentence (find out what actually happened before assigning blame), and correct in private while recognising in public, never the reverse.",
      "Detect a conflict between crew members EARLY and mediate before it escalates: listen to both sides separately and then together, and look for the common interest, so the resolution rests on the shared goal rather than on who wins — the win-win spirit of week 4 is the reference here, not re-taught.",
      "Know the LIMIT of mediation: some conflicts exceed the mediator — harassment, a safety risk, or a breakdown that will not settle — and the officer's job then is to ELEVATE the matter rather than keep trying alone; recognising that limit is part of the skill, not a failure of it.",
      "Tie it together: correcting error and mediating conflict both protect the same thing — a team that trusts it can be honest without being destroyed. Report in clear maritime English."
    ],
    deliverable: "A note in English on managing error and conflict: correcting the failure without destroying the person (separate fact from judgement, ask before sentencing, correct in private and recognise in public — the just culture of Professional Ethics week 6 as frame), mediating conflict early (both sides separately then together, seeking the common interest, with the week 4 win-win spirit as reference), and knowing the limit of mediation (harassment, safety risk or breakdown must be elevated, not handled alone).",
    assessmentCriteria: [
      "Correcting error separates the fact from the judgement, asks before sentencing, and corrects in private while recognising in public (not the reverse), using the just culture of Professional Ethics week 6 as an established frame.",
      "Conflict is detected early and mediated (both sides separately then together, common interest sought), with the week 4 win-win spirit referenced rather than re-taught.",
      "The limit of mediation is recognised (harassment, safety risk or a breakdown that will not settle must be elevated, not handled alone).",
      "The account ties correction and mediation to protecting a team that can be honest without being destroyed, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0105",
    subjectName: "Liderazgo",
    subjectId: "pn-s5-liderazgo",
    unit: "El liderazgo en la operación",
    topic: "El liderazgo del oficial de guardia",
    week: 8,
    taskId: "pn-c0105-w08-officer-of-the-watch-leadership",
    taskTitle: "Lead The Bridge Team As Officer Of The Watch",
    scenario: "This is where every thread of the subject comes together in one role: the officer of the watch leading the bridge team. As the closing task of the subject and of the semester, the cadet must lead the watch in the routine and in the emergency.",
    instructions: [
      "Lead the bridge team through the watch: assign tasks according to each person's capacity, and SUPERVISE without smothering — micromanagement kills the team's judgement, so delegation is not abandonment and control is not micromanagement — and keep the SHARED situational awareness alive, because a team that knows the officer's intention is the team that catches the deviation.",
      "Explain the authority that is EARNED, not issued: receive the 'character commands respect' of Professional Ethics week 8 as an established principle and put it to work in the role — the watch obeys the rank, but it follows the officer whose competence and steadiness it has come to trust.",
      "Lead in the EMERGENCY: the leader's calm is contagious — and so is panic — so hold the firm voice, the clear order, and the two-second pause that prevents the wrong order (the pause is not slowness, it is the discipline that keeps the first reaction from becoming the wrong command). Boundary: commanding a fire or damage-control scenario as an organised system belongs to the emergency-management training; here the concern is the human leadership within it — the calm that steadies the team.",
      "Close the semester: draw the communication of week 5, the graded assertiveness of week 6 and the error-and-conflict handling of week 7 into the single figure of the officer of the watch who is trusted in the calm and steady in the storm. Report in clear maritime English."
    ],
    deliverable: "A note in English on leading as officer of the watch: leading the bridge team (assign by capacity, supervise without smothering — delegation is not abandonment, control is not micromanagement — keep shared situational awareness so the team catches deviations), authority as earned (the 'character commands respect' of Professional Ethics week 8 put to work in the role), leading in emergency (contagious calm, firm voice, clear order, and the two-second pause that is discipline not slowness, bounded from the emergency-management command system), integrating weeks 5 to 7 as the semester capstone.",
    assessmentCriteria: [
      "Leading the watch covers assigning tasks by capacity and supervising without smothering (delegation is not abandonment, control is not micromanagement) and keeping shared situational awareness so the team catches deviations.",
      "Authority is explained as earned, receiving the 'character commands respect' of Professional Ethics week 8 as an established principle put to work in the role.",
      "Leading in emergency covers the contagious calm, the firm voice and clear order, and the two-second pause that prevents the wrong order (the pause is discipline, not slowness), bounded from the emergency-management command system.",
      "The task integrates the earlier weeks (communication, graded assertiveness, error and conflict) into the officer of the watch as the semester capstone, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
];

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
    subjectCode: "MET532",
    subjectName: "Meteorología II",
    subjectId: "pn-s5-meteorologia-ii",
    unit: "Estado del tiempo",
    topic: "El estado del tiempo asociado con las principales masas de aire",
    week: 9,
    taskId: "pn-met532-w09-air-masses",
    taskTitle: "Identify Air Masses And Their Weather",
    scenario: "The wind has backed and the air feels suddenly colder and clearer. The officer asks the cadet to identify the air mass now over the vessel and to forecast the weather it brings, since the fronts of week 1 are only the boundaries between these masses.",
    instructions: [
      "Define an air mass and how it takes the character of its source region: air that rests over a large uniform surface takes that surface's temperature and humidity, so it is classified as maritime or continental (moist or dry) and as tropical, polar or arctic (warm or cold).",
      "Give the weather each brings: a maritime polar mass brings cool, moist, unstable air with showers and good visibility between them, a maritime tropical mass brings warm, moist, stable air with low cloud, drizzle and poor visibility, and a continental mass brings dry air, clear in summer and cold in winter.",
      "Connect to week 1: a front is the boundary where two of these masses meet, so naming the mass behind a front tells you the weather that follows the frontal passage.",
      "Report the air mass over the vessel and the weather you expect from it in clear maritime English."
    ],
    deliverable: "A note in English identifying air masses by source region (maritime/continental, tropical/polar/arctic), the weather each brings (maritime polar cool moist unstable; maritime tropical warm moist stable with poor visibility; continental dry), and the link to the week 1 fronts as the boundaries between masses.",
    assessmentCriteria: [
      "The air-mass concept is correct (air takes temperature and humidity from its source region).",
      "The classification is correct (maritime/continental and tropical/polar/arctic) with the weather each brings.",
      "The link to the week 1 fronts as boundaries between masses is sound.",
      "The air mass over the vessel and its weather are identified, in clear maritime English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "MET532",
    subjectName: "Meteorología II",
    subjectId: "pn-s5-meteorologia-ii",
    unit: "Anticiclones y ciclones extratropicales",
    topic: "Anticiclones y dorsales: el buen tiempo y sus riesgos",
    week: 10,
    taskId: "pn-met532-w10-anticyclones-ridges",
    taskTitle: "Read Anticyclones And Ridges For A Weather Window",
    scenario: "A ridge of high pressure is building over the vessel's route and the master wants to know whether it offers a fair-weather window for a deck operation. The officer asks the cadet to read the anticyclone and its ridge.",
    instructions: [
      "Describe the anticyclone: high pressure with descending, drying air, light winds and generally settled weather, the wind circulating clockwise around it in the northern hemisphere (the opposite of the depression of week 1).",
      "Describe the ridge (dorsal) as the extension of high pressure between two lows, giving a brief spell of fair weather, the window between one depression and the next.",
      "State the hidden risks of settled high pressure: fog can form under the light winds and clear nocturnal cooling (the radiation fog of week 7), and in winter a stagnant anticyclone traps cold and haze.",
      "Report whether the ridge offers a usable weather window and its risks, in clear maritime English."
    ],
    deliverable: "A note in English reading an anticyclone (descending dry air, light winds, clockwise in the northern hemisphere, settled) and a ridge (a fair-weather window between two lows), with the hidden risks of fog under light winds and clear skies (linking to week 7), to judge a weather window.",
    assessmentCriteria: [
      "The anticyclone is correct (high pressure, descending dry air, light winds, clockwise circulation in the northern hemisphere, settled weather).",
      "The ridge is correctly described as a fair-weather window between two depressions.",
      "The hidden risks are correct (radiation fog under light winds and clear skies, linking to week 7).",
      "The judgement of the weather window is sound, in clear maritime English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "MET532",
    subjectName: "Meteorología II",
    subjectId: "pn-s5-meteorologia-ii",
    unit: "Boletines meteorológicos",
    topic: "Decodificación de boletines meteorológicos y la clave MAFOR",
    week: 11,
    taskId: "pn-met532-w11-weather-bulletin-mafor",
    taskTitle: "Decode A Received Weather Bulletin",
    scenario: "The GMDSS receiver prints a coastal weather bulletin for the vessel's sea area. The officer asks the cadet to decode it and turn the coded forecast into a plain decision for the watch.",
    instructions: [
      "State the structure of a marine weather bulletin: the gale or storm warnings first, then the general synopsis (the position and movement of the pressure systems, as on the synoptic chart of week 3), then the area forecasts of wind, weather, visibility and sea state.",
      "Explain the MAFOR forecast code as a concept: a group of figures that encodes the wind direction and force, the weather and the expected visibility for a period, so a compact coded group carries the whole forecast for an area.",
      "Work the reading: a bulletin gives 'southwest gale force 8 imminent, veering west, decreasing 6', so interpret it as a force 8 gale from the southwest expected within six hours, the wind then shifting clockwise to the west and easing to force 6, and connect the force to the Beaufort scale of week 6.",
      "Report the decoded forecast and the watch action it calls for (securing for heavy weather, adjusting the passage) in clear maritime English."
    ],
    deliverable: "A note in English decoding a weather bulletin: its structure (warnings, general synopsis, area forecasts), the MAFOR code as a concept, the worked reading of 'southwest gale force 8 imminent, veering west, decreasing 6' (a force 8 SW gale within six hours veering west and easing to 6, linked to the Beaufort scale of week 6), and the watch action it calls for.",
    assessmentCriteria: [
      "The bulletin structure is correct (warnings first, then general synopsis, then area forecasts).",
      "The MAFOR code is correctly described as a compact coded forecast group.",
      "The worked reading is correct (force 8 SW gale imminent = within six hours; veering = clockwise shift to west; decreasing 6) with the link to the Beaufort scale of week 6.",
      "The watch action called for by the forecast is sound, in clear maritime English."
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
    unit: "El tiempo abordo",
    topic: "El registro y el reporte del estado del tiempo abordo",
    week: 12,
    taskId: "pn-met532-w12-ship-weather-report",
    taskTitle: "Compile And Send A Ship Weather Report",
    scenario: "The vessel is a voluntary observing ship and it is time for the synoptic observation. As the closing task of the subject, the officer asks the cadet to compile the weather observation and encode it for transmission, so the ship both receives forecasts and feeds the global picture.",
    instructions: [
      "State what the observing officer measures and from which instruments: the barometric pressure and its three-hour tendency (week 5), the true wind direction and force (week 6), the air and sea temperature and the dew point (week 7), the visibility, and the cloud and present weather.",
      "State how the sea is reported: the sea state (wind waves) and the swell (direction, and height by estimation) are logged, distinguishing the locally raised sea from the swell running in from a distant system.",
      "Explain why the observation is encoded and transmitted: a standard code lets observations from ships worldwide be plotted onto the synoptic charts that everyone then uses, so the ship that reports also benefits from the forecasts built on those reports.",
      "Report the compiled observation and its value to the forecast in clear maritime English."
    ],
    deliverable: "A note in English compiling a ship weather observation: the measured elements and their instruments (pressure and tendency from week 5, true wind from week 6, temperatures and dew point from week 7, visibility, cloud and present weather), the reporting of sea state versus swell, and the reason for encoding and transmitting it (feeding the synoptic charts the ship itself relies on), integrating the subject.",
    assessmentCriteria: [
      "The measured elements and their instruments are correct and draw together weeks 5, 6 and 7 (pressure/tendency, true wind, temperatures/dew point, visibility, cloud/weather).",
      "The sea report correctly distinguishes the locally raised sea state from the swell.",
      "The reason for encoding and transmitting the observation is correct (a common code lets ship reports be plotted onto the synoptic charts).",
      "The observation is compiled coherently and its value to the forecast is explained, in clear maritime English."
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
    unit: "Previsión a bordo",
    topic: "Navegación meteorológica integrando la carta sinóptica, la tendencia bárica y el estado de la mar",
    week: 13,
    taskId: "pn-met532-w13-plan-weather-routed-departure",
    taskTitle: "Plan The Weather-Routed Departure From Tampico",
    scenario: "Your vessel sails from Tampico for a two-day passage across the Gulf. The latest synoptic chart shows a cold front approaching from the north-west and the ship's barometer is falling. You must build a weather-routed departure plan that keeps the ship in workable sea-state and out of the worst of the front.",
    instructions: [
      "Interpret the synoptic chart and the three-hour barometric tendency to fix the timing and track of the approaching cold front.",
      "Lay two candidate routes and choose the one that keeps wind and sea on a workable bearing, cross-checking your choice against the forecast sea-state (oleaje) for each leg.",
      "Set decision points where a change in barometric tendency or reported wave height would trigger a route diversion.",
      "Brief the Master with a weather-routing recommendation in clear maritime English, stating the chosen track, the expected weather, and your diversion triggers."
    ],
    deliverable: "A weather-routed departure plan with a chosen track, sea-state expectations per leg, and defined diversion triggers.",
    assessmentCriteria: [
      "Front timing and track are correctly derived from the synoptic chart and barometric tendency.",
      "The chosen route keeps the vessel in workable sea-state and is justified against the alternative.",
      "Diversion triggers are concrete and tied to measurable weather changes.",
      "The routing recommendation is delivered in accurate, professional maritime English."
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
    unit: "Ciclones tropicales",
    topic: "Evitación del ciclón tropical integrando semicírculos, regla 1-2-3 y la maniobra por semicírculo",
    week: 14,
    taskId: "pn-met532-w14-execute-cyclone-avoidance",
    taskTitle: "Execute A Full Tropical Cyclone Avoidance Plan",
    scenario: "On passage in the western Gulf you receive a bulletin placing a tropical cyclone 300 miles ahead and moving toward your track. You are in the northern hemisphere and must decide which semicircle you are in and manoeuvre to stay clear.",
    instructions: [
      "Plot the storm's position and forecast track and determine whether the ship lies in the dangerous or the navigable semicircle.",
      "Apply the 1-2-3 rule to draw the danger area around the forecast track for the next 24 to 72 hours.",
      "Order the avoidance course and speed for your semicircle, keeping the vessel outside the danger area with a safe margin.",
      "Send a bridge order and an intentions report in maritime English stating your semicircle, your avoidance manoeuvre, and your CPA to the storm."
    ],
    deliverable: "A cyclone avoidance plan showing semicircle, 1-2-3 danger area, and the ordered avoidance course and speed.",
    assessmentCriteria: [
      "The semicircle is correctly identified from the storm's bearing and movement.",
      "The 1-2-3 danger area is drawn and applied correctly to the forecast track.",
      "The avoidance course and speed keep the vessel clear with an adequate margin.",
      "The intentions report is communicated in correct maritime English."
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
    topic: "Previsión de niebla integrando punto de rocío, masas de aire y la reducción de visibilidad en la aproximación",
    week: 15,
    taskId: "pn-met532-w15-forecast-fog-for-approach",
    taskTitle: "Forecast Fog And Set The Reduced-Visibility Plan For Arrival",
    scenario: "You are approaching Altamira at night. Air and sea temperatures are converging, a warm moist air mass is moving over cooler coastal water, and the dew point spread is closing. You must forecast whether fog will form during the approach and prepare the bridge for reduced visibility.",
    instructions: [
      "Compare air temperature, sea temperature and dew point to judge the likelihood and type of fog forming over the approach.",
      "Link the air mass over the area to the expected weather and estimate when visibility will drop below safe limits.",
      "Set the reduced-visibility readiness actions the bridge must take before visibility closes in, tied to your forecast timing.",
      "Issue a reduced-visibility forecast and readiness order to the bridge team in maritime English."
    ],
    deliverable: "A fog forecast for the approach with predicted onset time and a reduced-visibility readiness order.",
    assessmentCriteria: [
      "Fog likelihood and type are correctly reasoned from the dew point spread and air mass.",
      "The predicted onset timing is realistic and justified.",
      "Readiness actions are appropriate and correctly sequenced ahead of onset.",
      "The forecast and order are delivered in accurate maritime English."
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
    unit: "El tiempo abordo",
    topic: "Respuesta al deterioro súbito integrando la tendencia bárica, el estado de la mar y el reporte del tiempo abordo",
    week: 16,
    taskId: "pn-met532-w16-respond-to-rapid-deterioration",
    taskTitle: "Respond To A Rapid Weather Deterioration On Watch",
    scenario: "During your watch the barometer falls sharply, the wind backs and freshens, and the sea-state builds faster than the forecast predicted. The forecast on which the passage plan was based is now clearly wrong and you must react.",
    instructions: [
      "Read the falling barometric tendency and the observed wind shift to diagnose what weather system is actually affecting the ship.",
      "Assess the building sea-state against the vessel's condition and decide whether to reduce speed, alter course, or heave to.",
      "Compile an updated on-board weather observation capturing the real conditions and the divergence from the forecast.",
      "Report the deteriorating situation and your chosen action to the Master in maritime English, including your updated weather observation."
    ],
    deliverable: "An emergency weather response with a diagnosis, a chosen ship-handling action, and an updated on-board weather report.",
    assessmentCriteria: [
      "The weather system is correctly diagnosed from barometric tendency and wind behaviour.",
      "The chosen action is appropriate to the sea-state and the vessel's condition.",
      "The on-board weather observation is complete and accurately recorded.",
      "The situation report to the Master is clear and in correct maritime English."
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
    unit: "Boletines meteorológicos",
    topic: "Auditoría de la previsión integrando decodificación MAFOR, cartas sinópticas y la validación con observaciones abordo",
    week: 17,
    taskId: "pn-met532-w17-audit-voyage-weather-picture",
    taskTitle: "Audit The Complete Weather Picture For The Voyage",
    scenario: "Before departure the Master asks you to certify that the ship's weather picture for the whole voyage is coherent. You hold a received MAFOR-coded bulletin, the latest synoptic chart, and the ship's recent barometric and sea-state observations, and you must confirm they tell one consistent story.",
    instructions: [
      "Decode the MAFOR bulletin in full and translate each group into plain forecast terms for every voyage area.",
      "Cross-check the decoded bulletin against the synoptic chart and the ship's own barometric tendency and sea-state observations, flagging any contradiction.",
      "Resolve each discrepancy into a single agreed forecast and note the residual weather risk for each leg.",
      "Issue a weather validation statement to the Master in maritime English certifying the coherent forecast and the outstanding risks."
    ],
    deliverable: "A weather validation statement reconciling the MAFOR bulletin, synoptic chart, and ship observations into one certified forecast.",
    assessmentCriteria: [
      "The MAFOR bulletin is decoded accurately and completely.",
      "Discrepancies between the sources are correctly identified and reconciled.",
      "Residual weather risk per leg is clearly stated.",
      "The validation statement is written in accurate maritime English."
    ],
    xp: 30,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "MET532",
    subjectName: "Meteorología II",
    subjectId: "pn-s5-meteorologia-ii",
    unit: "El tiempo abordo",
    topic: "Síntesis meteorológica del semestre para el informe de previsión al Capitán",
    week: 18,
    taskId: "pn-met532-w18-deliver-voyage-weather-brief",
    taskTitle: "Deliver The Voyage Weather Brief To The Master",
    scenario: "It is the pre-departure conference. As the ship's weather officer you must deliver a single brief that pulls together everything from the semester: the synoptic situation, the cyclone and fog risks, the routing decision, and the on-board observing and reporting plan for the voyage ahead.",
    instructions: [
      "Summarise the current synoptic situation and the dominant air masses affecting the voyage area.",
      "Present the principal weather hazards for the passage, covering tropical cyclone avoidance, fog and reduced visibility, and heavy sea-state, with the routing decision that answers them.",
      "State the on-board observing and reporting routine for the voyage, including barometric tendency watch and ship weather reports.",
      "Deliver the full voyage weather brief to the Master in professional maritime English."
    ],
    deliverable: "A voyage weather brief covering the synoptic picture, the principal hazards and routing response, and the observing-and-reporting plan.",
    assessmentCriteria: [
      "The synoptic picture and air masses are summarised accurately.",
      "All principal hazards are addressed with a coherent routing response.",
      "The observing and reporting routine is complete and workable.",
      "The brief is delivered in professional maritime English."
    ],
    xp: 30,
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
    topic: "Ortodrómica vs loxodrómica: decisión de derrota",
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
    topic: "Ploteo radar: cálculo de CPA y TCPA",
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
    topic: "ARPA en la decisión anticolisión (COLREGs Parte B) verificada por el ploteo",
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
    subjectCode: "NAV530",
    subjectName: "Navegación III",
    subjectId: "pn-s5-navegacion-iii",
    unit: "Radar",
    topic: "Manejo del Radar Convencional: ganancia, sintonía y filtros de eco",
    week: 9,
    taskId: "pn-nav530-w09-tune-radar-picture",
    taskTitle: "Tune The Radar For A Clear Picture",
    scenario: "The radar picture is cluttered and a small target may be lost in it. The officer asks the cadet to tune the set correctly so that real targets stand out, building the operating skill under the theory of weeks 2 to 4.",
    instructions: [
      "Set the basic controls in order: brilliance so the display is comfortable, gain raised until a light background speckle just appears (so weak targets are not lost), and tuning for the sharpest echoes.",
      "Use the sea clutter control (anti-clutter sea) to suppress the returns from waves close to the ship, warning that too much of it erases small targets near the vessel, so it is reduced to the minimum that clears the clutter.",
      "Use the rain clutter control (anti-clutter rain / differentiator) to cut the haze of returns from rain or snow, again used sparingly because it also weakens genuine targets.",
      "Report the tuned settings and why each was adjusted, in correct navigational English."
    ],
    deliverable: "A note in English tuning the radar: brilliance, gain (raised until a light speckle just shows so weak targets survive) and tuning, then the sea clutter control (minimum needed, over-use erases near targets) and the rain clutter control (used sparingly), with the reason for each setting.",
    assessmentCriteria: [
      "The basic controls are set correctly (brilliance, gain to a light background speckle, tuning for sharp echoes).",
      "The sea clutter control is used correctly (minimum needed; over-use erases small near targets).",
      "The rain clutter control is used correctly (cuts precipitation returns, used sparingly as it weakens real targets).",
      "The tuned settings are reported with the reason for each, in correct navigational English."
    ],
    xp: 20,
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
    topic: "Presentaciones y orientaciones: proa arriba, rumbo arriba, norte arriba",
    week: 10,
    taskId: "pn-nav530-w10-radar-orientation-modes",
    taskTitle: "Select The Right Radar Orientation Mode",
    scenario: "The same traffic looks different in each display orientation, and the wrong choice can mislead the watch. The officer asks the cadet to choose the orientation and motion mode that suits the situation, extending the relative and true motion of week 2.",
    instructions: [
      "Explain head-up: the ship's heading is always at the top, so the picture matches the view from the window, but it smears and unsettles when the ship yaws, and bearings read off it are relative, not true.",
      "Explain north-up: true north is at the top (stabilised by the gyro), so the picture is steady and bearings read true and compare directly with the chart, at the cost of not matching the window view.",
      "Explain course-up: the set course is at the top, giving a steady picture aligned with the intended track, useful for monitoring a passage.",
      "Recommend an orientation and motion mode for a coastal passage in traffic and justify it, in correct navigational English."
    ],
    deliverable: "A note in English selecting a radar orientation: head-up (matches the window, relative bearings, smears on yaw), north-up (gyro-stabilised, true bearings comparable with the chart, steady), and course-up (steady, aligned with the track), with a justified recommendation for a coastal passage in traffic, building on the relative/true motion of week 2.",
    assessmentCriteria: [
      "Head-up is correctly explained (heading up, matches the view, relative bearings, unsteady on yaw).",
      "North-up is correctly explained (gyro-stabilised, true bearings that compare with the chart, steady).",
      "Course-up is correctly explained (track up, steady, useful for monitoring the passage).",
      "The recommendation for a coastal passage in traffic is justified, in correct navigational English."
    ],
    xp: 20,
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
    topic: "Uso del Parallel Index para el monitoreo de la derrota costera",
    week: 11,
    taskId: "pn-nav530-w11-parallel-indexing",
    taskTitle: "Monitor A Coastal Passage By Parallel Index",
    scenario: "The vessel is on the approach to Altamira, keeping a planned track past a charted headland. The officer asks the cadet to set up a parallel index to detect any set off the track early, turning the radar into a track-monitoring tool.",
    instructions: [
      "Explain the principle: a parallel index line is drawn on the radar parallel to the planned track at the planned passing distance from a fixed, identified radar-conspicuous object (a headland, an islet or a buoy).",
      "Explain the monitoring: as the ship runs the leg the object's echo should track along the index line; if the echo drifts off the line, the ship is being set off track and the officer knows at once and by how much.",
      "State the requirement and the caution: the reference object must be positively identified and fixed (a moored buoy can drag), and the technique must use a stabilised (north-up or course-up) presentation from week 10.",
      "Report how you would set and monitor the index for the leg and the action if the echo leaves the line, in correct navigational English."
    ],
    deliverable: "A note in English setting up a parallel index on the Altamira approach: the index line parallel to the planned track at the planned passing distance off an identified fixed object, the monitoring (the echo runs along the line; drift off the line shows the ship is set off track), and the requirements (a positively identified fixed reference, a stabilised presentation from week 10).",
    assessmentCriteria: [
      "The parallel-index principle is correct (a line parallel to the track at the passing distance off a fixed identified object).",
      "The monitoring logic is correct (echo drifting off the line means the ship is set off track, detected early).",
      "The requirements and cautions are correct (positively identified fixed reference; stabilised presentation from week 10).",
      "The set-up and the corrective action are reported, in correct navigational English."
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
    topic: "Pruebas operacionales y errores de interpretación de la imagen radar",
    week: 12,
    taskId: "pn-nav530-w12-radar-tests-false-echoes",
    taskTitle: "Test The Radar And Catch False Echoes",
    scenario: "A target has appeared that the lookout cannot see and the officer suspects the radar itself. As the closing task of the subject, the officer asks the cadet to run the operational checks and to tell a real echo from a false one, so the set is trusted only as far as it deserves.",
    instructions: [
      "Run the operational performance check: use the performance monitor to confirm the set is radiating at full performance, and confirm the heading marker aligns with the ship's head and the range rings read true against a known range.",
      "Name and explain the common false echoes: side-lobe echoes (a short arc of false targets each side of a strong close target), multiple echoes (equally spaced ghosts beyond a strong target from double reflection), indirect echoes (a target reflected off the ship's own funnel or mast appearing on a false bearing), and blind and shadow sectors behind the ship's structure.",
      "State how to tell a false echo from a real one: a false echo does not behave consistently as the range changes and often has no AIS or visual counterpart, so it is cross-checked against AIS, the lookout and a change of range.",
      "Report the checks run and the verdict on the doubtful echo, drawing on the over-reliance warning of week 3, in correct navigational English."
    ],
    deliverable: "A note in English testing the radar and judging a doubtful echo: the operational checks (performance monitor, heading marker alignment, range rings), the common false echoes (side-lobe, multiple, indirect, blind/shadow sectors), how a false echo is distinguished from a real one (inconsistent behaviour with range, no AIS or visual counterpart, cross-checked), and the verdict, applying the over-reliance warning of week 3.",
    assessmentCriteria: [
      "The operational checks are correct (performance monitor for full performance, heading marker alignment, range-ring accuracy).",
      "The common false echoes are correctly named and explained (side-lobe, multiple, indirect, blind/shadow sectors).",
      "The method to distinguish a false echo from a real one is sound (inconsistent with range, no AIS/visual counterpart, cross-checked).",
      "The verdict on the doubtful echo applies the week 3 over-reliance warning, in correct navigational English."
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
    topic: "Vigilancia anticolisión integrando ploteo de CPA/TCPA, la decisión COLREGs y el tráfico AIS",
    week: 13,
    taskId: "pn-nav530-w13-run-full-anticollision-watch",
    taskTitle: "Run The Full Anti-Collision Radar Watch",
    scenario: "You have the watch off the Tampico approaches in busy traffic. The ARPA shows three targets, and the AIS traffic picture confirms two of them but not the third. You must run a complete anti-collision assessment on all of them and act under the COLREGS.",
    instructions: [
      "Plot each target to obtain CPA and TCPA, and reconcile the ARPA solution against the AIS data for each contact.",
      "Classify the encounter type for each target and identify which vessel is give-way under COLREGS Part B.",
      "Decide and order a single anti-collision action that resolves the closest-quarters situation while keeping all CPAs safe.",
      "Report the developing situation and your action to the Master, and make the appropriate call, in correct maritime English."
    ],
    deliverable: "An anti-collision assessment listing CPA/TCPA per target, the COLREGS classification, and the ordered avoidance action.",
    assessmentCriteria: [
      "CPA and TCPA are correctly derived and reconciled with the AIS picture.",
      "Each encounter is correctly classified and the give-way vessel identified.",
      "The ordered action resolves the situation in accordance with the COLREGS.",
      "The report and call are made in correct maritime English."
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
    topic: "Monitoreo de la derrota costera integrando Parallel Index, orientación del radar y la aproximación a Altamira",
    week: 14,
    taskId: "pn-nav530-w14-monitor-altamira-approach-pi",
    taskTitle: "Monitor The Altamira Approach By Parallel Index",
    scenario: "You are conning the coastal leg into Altamira. To hold the planned track past the outer marks you must set up parallel indexing on the radar, choose the correct orientation, and monitor the passage against the AIS traffic in the fairway.",
    instructions: [
      "Select the correct radar orientation and range for close coastal monitoring and justify the choice.",
      "Set up the parallel index lines against a suitable radar-conspicuous object to monitor cross-track error along the planned leg.",
      "Track the vessel's position against the PI lines and the AIS traffic, correcting any drift off the planned track.",
      "Give a running position and traffic report to the bridge team in maritime English as you monitor the approach."
    ],
    deliverable: "A parallel-index monitoring setup with orientation choice, PI reference, and a track-keeping log for the approach.",
    assessmentCriteria: [
      "Radar orientation and range are correctly chosen for the task.",
      "The parallel index is set up correctly against a suitable reference.",
      "Cross-track drift is detected and corrected against the planned leg.",
      "The position and traffic report is delivered in correct maritime English."
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
    topic: "Planificación de la derrota oceánica integrando el cálculo ortodrómico, la decisión orto/loxodrómica y el ploteo radar en los extremos",
    week: 15,
    taskId: "pn-nav530-w15-plan-ocean-great-circle-passage",
    taskTitle: "Plan The Ocean Passage On The Great Circle",
    scenario: "The ship is to cross from the Gulf to a distant port. You must decide whether to sail great circle or rhumb line, compute the great-circle distance and initial course, and hand over an ocean plan whose coastal ends will be monitored on radar.",
    instructions: [
      "Decide between great circle and rhumb line for this passage and justify the decision on distance and practicality.",
      "Calculate the great-circle distance and initial course by spherical trigonometry, and lay the waypoints of the composite track.",
      "Specify how the departure and arrival ends of the passage will be monitored on radar, including orientation and parallel indexing.",
      "Present the ocean passage plan to the Master in maritime English, stating the sailing chosen, the distance saved, and the monitoring method."
    ],
    deliverable: "An ocean passage plan with the sailing decision, the great-circle computation and waypoints, and the radar monitoring method for the coastal ends.",
    assessmentCriteria: [
      "The sailing choice is correctly justified on distance and practicality.",
      "The great-circle distance and initial course are computed correctly.",
      "The radar monitoring method for the coastal ends is sound.",
      "The passage plan is presented in correct maritime English."
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
    topic: "Respuesta a la degradación del radar integrando ecos falsos, sintonía del radar y el exceso de confianza en el APRA",
    week: 16,
    taskId: "pn-nav530-w16-respond-to-degraded-radar-picture",
    taskTitle: "Respond To A Degraded Radar Picture In Traffic",
    scenario: "In rain and clutter near the Tampico approaches your radar picture degrades: false echoes appear, a target the ARPA had been tracking is lost, and the AIS shows a vessel the radar is not clearly painting. You must recover a trustworthy picture without over-trusting the ARPA.",
    instructions: [
      "Diagnose the degraded picture, distinguishing genuine targets from false echoes and clutter.",
      "Retune the radar gain, tuning and clutter filters to restore a clear picture, and re-acquire the lost target.",
      "Reconcile the radar and AIS pictures and state where you will not rely on the ARPA alone until the picture is trusted.",
      "Report the radar degradation, your recovery actions and the residual uncertainty to the Master in maritime English."
    ],
    deliverable: "A radar-recovery report covering false-echo diagnosis, the retuning actions taken, and the residual uncertainty in the picture.",
    assessmentCriteria: [
      "False echoes and clutter are correctly distinguished from real targets.",
      "The retuning restores a usable picture and the lost target is re-acquired.",
      "Over-reliance on ARPA is correctly avoided while the picture is uncertain.",
      "The degradation report is delivered in correct maritime English."
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
    topic: "Auditoría del equipo de navegación integrando pruebas operacionales, la interacción del APRA con otros equipos y las presentaciones del radar",
    week: 17,
    taskId: "pn-nav530-w17-audit-navigation-equipment",
    taskTitle: "Audit The Radar And ARPA Before Departure",
    scenario: "Before sailing you must certify that the radar and ARPA suite is fit for the voyage. This means running the operational tests, confirming the ARPA is correctly integrated with the ship's other navigation equipment, and verifying the presentations the watch will use.",
    instructions: [
      "Run the operational tests of the radar and ARPA and record the result of each check.",
      "Verify that the ARPA is correctly fed by and cross-referenced with the other navigation equipment, and identify what fails if a sensor input is lost.",
      "Confirm the orientation and presentation modes the watch will use and note the interpretation errors each mode invites.",
      "Issue an equipment readiness statement to the Master in maritime English certifying the radar and ARPA for the voyage."
    ],
    deliverable: "A radar and ARPA readiness statement listing test results, sensor integration checks, and the presentation modes certified for the watch.",
    assessmentCriteria: [
      "The operational tests are run correctly and results recorded.",
      "ARPA integration with other equipment is verified and failure modes identified.",
      "The presentation modes and their interpretation risks are correctly addressed.",
      "The readiness statement is written in correct maritime English."
    ],
    xp: 30,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "NAV530",
    subjectName: "Navegación III",
    subjectId: "pn-s5-navegacion-iii",
    unit: "Radar APRA",
    topic: "Síntesis de la navegación radar del semestre para el traspaso de la guardia de puente",
    week: 18,
    taskId: "pn-nav530-w18-hand-over-navigation-watch-brief",
    taskTitle: "Hand Over The Navigation Watch For The Passage",
    scenario: "You are handing over the navigation watch at the start of a demanding passage. Your relief must inherit the full radar and traffic picture: the route and its monitoring, the traffic situation, the equipment status, and the standing anti-collision policy for the leg ahead.",
    instructions: [
      "Summarise the planned track and how it is being monitored, including parallel indexing and chosen radar orientation.",
      "Present the current traffic picture from radar and AIS, identifying any developing close-quarters situation and its CPA/TCPA.",
      "State the radar and ARPA equipment status and any limitation the relief must work around.",
      "Deliver the full navigation watch handover to your relief in professional maritime English."
    ],
    deliverable: "A navigation watch handover brief covering the monitored track, the traffic picture, and the equipment status for the leg ahead.",
    assessmentCriteria: [
      "The track and its monitoring are summarised accurately and completely.",
      "The traffic picture and any close-quarters situation are correctly presented.",
      "Equipment status and limitations are stated clearly.",
      "The handover is delivered in professional maritime English."
    ],
    xp: 30,
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
    subjectCode: "MAN533",
    subjectName: "Maniobras I",
    subjectId: "pn-s5-maniobras-i",
    unit: "Timones",
    topic: "Timón de emergencia y gobierno de emergencia",
    week: 9,
    taskId: "pn-man533-w09-emergency-steering",
    taskTitle: "Rig And Operate Emergency Steering",
    scenario: "The steering gear alarm sounds and the wheel no longer answers on the bridge. The officer asks the cadet to change to emergency steering and to run the vessel by it, drawing on the rudder principle of week 1.",
    instructions: [
      "State the immediate bridge actions on a steering failure: warn the engine room and the steering gear room, reduce speed, exhibit the not-under-command or restricted signals if unable to steer, and warn traffic.",
      "Explain the change to emergency steering: the second (standby) steering pump or motor is started, or control is taken over locally in the steering gear room, where the rudder can be moved directly.",
      "Explain steering from the steering gear compartment: the helm order can no longer be seen executed from the bridge, so orders pass by telephone and the helmsman there works the rudder by the rudder angle indicator, which makes clear, unambiguous helm orders essential.",
      "Report the drill and the bridge-to-steering-gear-room orders you would give, in correct maritime English."
    ],
    deliverable: "A note in English on emergency steering: the immediate bridge actions on a steering failure (warn engine room and steering gear room, reduce speed, exhibit the correct signals, warn traffic), the change to the standby pump or local control, steering from the steering gear compartment by telephone and rudder angle indicator, and the clear helm orders it demands, building on the rudder principle of week 1.",
    assessmentCriteria: [
      "The immediate bridge actions on a steering failure are correct (warn engine room/steering gear room, reduce speed, exhibit signals, warn traffic).",
      "The change to emergency steering is correct (standby pump/motor or local control in the steering gear room).",
      "Steering from the compartment is correctly described (orders by telephone, rudder worked by the rudder angle indicator).",
      "The bridge-to-steering-gear-room orders are clear and unambiguous, in correct maritime English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "MAN533",
    subjectName: "Maniobras I",
    subjectId: "pn-s5-maniobras-i",
    unit: "Efecto por bajo fondo",
    topic: "Efecto de recodo e interacción entre buques en aguas restringidas",
    week: 10,
    taskId: "pn-man533-w10-bank-effect-interaction",
    taskTitle: "Handle Bank Effect And Interaction In The Channel",
    scenario: "The vessel is transiting the narrow, shallow Tampico channel and must pass a moored ship and meet another under way. The officer asks the cadet to explain bank effect and ship-to-ship interaction and how to handle them, extending the shallow-water squat of week 3.",
    instructions: [
      "Explain bank effect (efecto de recodo): near a bank the water flows faster and its pressure drops between the ship's side and the bank, so the stern is drawn towards the near bank (bank suction) while the bow is pushed away (bank cushion), swinging the ship's head away from the bank.",
      "Explain the counter and the caution: a touch of helm towards the bank holds the head, but a stern that gets too close and takes a strong sheer can override the rudder, so speed is kept moderate and the ship is kept off the bank.",
      "Explain ship-to-ship interaction when passing or overtaking: the low-pressure fields around two close ships attract and then repel them, so passing is done at reduced speed with room, and the effect is stronger in shallow water where squat (week 3) already reduces control.",
      "Report how you would handle the transit and the passing, in correct maritime English."
    ],
    deliverable: "A note in English on bank effect and interaction in the Tampico channel: bank effect (stern drawn to the near bank by suction, bow pushed off, head sheering away), the counter with helm and moderate speed, and ship-to-ship interaction when passing or overtaking (attraction then repulsion, reduced speed and room, worse in shallow water), extending the squat of week 3.",
    assessmentCriteria: [
      "Bank effect is correct (faster flow and lower pressure at the near bank; stern suction and bow cushion; head sheers away from the bank).",
      "The counter and caution are sound (helm towards the bank, moderate speed, keep off the bank, sheer can override the rudder).",
      "Ship-to-ship interaction is correct (attraction then repulsion; reduced speed and room; worse in shallow water with squat from week 3).",
      "The handling of the transit and passing is reported, in correct maritime English."
    ],
    xp: 20,
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
    topic: "Maniobra de fondeo con un ancla desde el gobierno del buque",
    week: 11,
    taskId: "pn-man533-w11-anchoring-single-anchor",
    taskTitle: "Anchor The Ship With A Single Anchor",
    scenario: "The vessel is to anchor in the Tampico outer anchorage. The officer asks the cadet to plan the ship-handling of a single-anchor manoeuvre from the bridge, distinct from the deck work of Practicas Marineras and the officer's station duties of week 4.",
    instructions: [
      "Plan the approach: choose the final approach heading into the wind or current (whichever dominates), so the ship can be stopped over the ground with the least way and will lie back naturally on her cable.",
      "Control the way over the ground: reduce speed early and stop the ship, or gather a slight sternway, at the letting-go position so the cable runs out ahead of the ship and does not pile on the anchor.",
      "Give the letting-go decision and back the ship: let go when the ship is stopped or just making sternway, then use the astern engine and the transverse thrust (week 2) to lay the cable out along the bottom, keeping a strain that digs the anchor in until she is brought up.",
      "Report the approach, the letting-go point and the astern control to the bridge team, in correct maritime English, leaving the deck execution to Practicas Marineras V."
    ],
    deliverable: "A note in English handling a single-anchor manoeuvre from the bridge in the Tampico anchorage: the approach into the dominant wind or current, controlling the way over the ground to stop or gather slight sternway at the letting-go position, and the letting-go decision and backing the ship to lay the cable and dig the anchor in using the transverse thrust of week 2, with the deck execution left to Practicas Marineras V.",
    assessmentCriteria: [
      "The approach is sound (heading into the dominant wind or current so the ship stops over the ground and lies back on her cable).",
      "Controlling the way over the ground is correct (stop or slight sternway at letting-go so the cable runs out ahead, not piled on the anchor).",
      "The letting-go and backing are correct (let go stopped/making sternway, astern engine and transverse thrust of week 2 to lay the cable and dig in until brought up).",
      "The manoeuvre is reported to the bridge team and the Practicas Marineras V boundary is respected, in correct maritime English."
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
    unit: "Equipo y maniobra de fondeo",
    topic: "Maniobra de fondeo con dos anclas: amarre a la gira y amarre abierto",
    week: 12,
    taskId: "pn-man533-w12-anchoring-two-anchors",
    taskTitle: "Moor The Ship With Two Anchors",
    scenario: "A long stay in a crowded, tide-swept anchorage or a forecast of heavy weather calls for two anchors. As the closing task of the subject, the officer asks the cadet to plan a two-anchor mooring, integrating the ship-handling of the semester.",
    instructions: [
      "State why a second anchor is used: it increases holding power for heavy weather and, in a running or standing moor, greatly reduces the swinging circle so the ship can lie safely among close-anchored vessels or in a narrow, tide-swept berth.",
      "Describe the running moor: the ship stands in with headway, lets go the first anchor, continues ahead paying out roughly double the intended cable, then lets go the second anchor and heaves back on the first until she rides equally to both, the two cables leading ahead and astern along the tide.",
      "Contrast the standing (open) moor: the ship stops and drops back, letting go the second anchor as she goes astern, so the two anchors are laid on either bow, useful for lying to a beam wind.",
      "Report the choice of moor, the sequence and the expected lie of the cables, integrating the anchoring handling of the semester, in correct maritime English."
    ],
    deliverable: "A note in English planning a two-anchor mooring: why the second anchor is used (holding power and a reduced swinging circle), the running moor (headway, let go the first, run ahead paying double cable, let go the second, heave back to ride equally with cables leading ahead and astern), the standing/open moor (drop back, second anchor as she goes astern, anchors on either bow), and the choice for the conditions, integrating the semester's anchoring handling.",
    assessmentCriteria: [
      "The reason for two anchors is correct (more holding power and a much reduced swinging circle for a crowded or tide-swept anchorage).",
      "The running moor is correctly sequenced (headway, first anchor, run ahead paying double cable, second anchor, heave back to ride equally, cables ahead and astern).",
      "The standing/open moor is correctly contrasted (drop back, second anchor going astern, anchors on either bow).",
      "The choice, sequence and lie of the cables are reported and the semester's handling is integrated, in correct maritime English."
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
    topic: "Atraque integrando círculo de evolución, distancia de parada y el spring con viento y corriente",
    week: 13,
    taskId: "pn-man533-w13-bring-vessel-alongside-tampico",
    taskTitle: "Bring The Vessel Alongside In Tampico",
    scenario: "You are to berth a loaded vessel at Tampico with a fresh onshore wind and a running current. You must plan the whole approach and landing, using the turning circle, the stopping distance and the spring line to place the ship alongside.",
    instructions: [
      "Judge the vessel's turning circle and stopping distance for the loaded approach and plan the track to the berth accounting for wind and current.",
      "Plan the sequence of engine and helm orders to take way off and swing the stern in without overshooting.",
      "Specify how the spring line is used to check headway and bring the ship alongside against the wind.",
      "Deliver the berthing plan and give the mooring and engine orders to the team in correct maritime English."
    ],
    deliverable: "A berthing plan with the approach track, the engine and helm sequence, and the spring-line landing method.",
    assessmentCriteria: [
      "Turning circle and stopping distance are correctly applied to the approach.",
      "The engine and helm sequence takes way off without overshoot.",
      "The spring line is used correctly to land the ship against wind and current.",
      "The plan and orders are delivered in correct maritime English."
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
    unit: "Efecto por bajo fondo",
    topic: "Tránsito del canal integrando squat, efecto de recodo e interacción entre buques en aguas restringidas",
    week: 14,
    taskId: "pn-man533-w14-transit-restricted-channel-safely",
    taskTitle: "Transit The Restricted Channel Safely",
    scenario: "You must take the ship through the narrow, shallow approach channel to Altamira, meeting an outbound vessel partway, with AIS showing the traffic. Squat, bank effect and ship-to-ship interaction all act on you at once and you must handle them together.",
    instructions: [
      "Calculate the squat for your speed and under-keel clearance and set a safe transit speed for the shallow channel.",
      "Plan the ship's position within the channel to manage bank effect, and time the meeting with the outbound vessel using the AIS picture.",
      "Set the speed and helm actions that limit interaction forces as the two vessels pass.",
      "Report your transit plan and the passing arrangement to the bridge team and the other vessel in correct maritime English."
    ],
    deliverable: "A channel transit plan with a squat-limited speed, a bank-effect track, and a timed passing arrangement for the meeting vessel.",
    assessmentCriteria: [
      "Squat is calculated correctly and a safe transit speed is set.",
      "Bank effect is managed by correct positioning in the channel.",
      "Interaction with the meeting vessel is controlled by correct speed and timing.",
      "The transit plan and passing arrangement are communicated in correct maritime English."
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
    unit: "Equipo y maniobra de fondeo",
    topic: "Fondeo integrando la maniobra con dos anclas, el círculo de evolución y las funciones del oficial en estación",
    week: 15,
    taskId: "pn-man533-w15-anchor-with-two-anchors-in-roads",
    taskTitle: "Anchor The Vessel With Two Anchors In The Roads",
    scenario: "The ship must anchor in the Tampico roads to await a berth, in a wind and tide that call for a two-anchor moor to limit the swinging room. You must conn the approach, drop both anchors correctly, and run the anchor station.",
    instructions: [
      "Plan the approach to the anchor berth using the turning circle to lay the ship head to wind and tide at the drop.",
      "Lay out the two-anchor moor you will use to reduce the swinging circle, specifying the sequence and scope for each anchor.",
      "Assign the officer's duties at the anchor station and the checks that confirm the anchors are holding.",
      "Give the anchoring orders to the fo'c'sle party and report the ship brought up to the bridge in correct maritime English."
    ],
    deliverable: "A two-anchor mooring plan with the approach, the drop sequence and scope, and the anchor-station duties.",
    assessmentCriteria: [
      "The approach lays the ship correctly head to wind and tide at the drop.",
      "The two-anchor moor is laid out correctly to limit the swinging circle.",
      "Anchor-station duties and holding checks are correctly assigned.",
      "The anchoring orders and the brought-up report are given in correct maritime English."
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
    unit: "Timones",
    topic: "Respuesta a la avería de gobierno integrando timón de emergencia, círculo de evolución y la parada de emergencia",
    week: 16,
    taskId: "pn-man533-w16-respond-to-steering-failure",
    taskTitle: "Respond To A Steering Failure In Traffic",
    scenario: "While transiting the approaches your main steering fails with traffic close by shown on AIS. You must take way off, keep the ship clear, and change over to emergency steering to regain control.",
    instructions: [
      "Take immediate action to reduce the danger, using the stopping distance and a crash stop if needed to take way off clear of traffic.",
      "Rig and change over to the emergency steering gear and confirm the ship is answering the emergency helm.",
      "Re-establish control of the ship's head and set a safe course clear of the AIS traffic, allowing for the degraded steering.",
      "Broadcast the steering failure and your intentions to nearby traffic, and report to the Master, in correct maritime English."
    ],
    deliverable: "A steering-failure response covering the way-off action, the change-over to emergency steering, and the recovery of control.",
    assessmentCriteria: [
      "The immediate way-off action correctly uses stopping distance to reduce danger.",
      "The change-over to emergency steering is carried out correctly.",
      "Control of the ship's head is re-established clear of traffic.",
      "The failure broadcast and Master's report are delivered in correct maritime English."
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
    unit: "Sistema de propulsión",
    topic: "Maniobra en espacio confinado integrando el par de la hélice, los efectos combinados de hélice y timón y el círculo de evolución",
    week: 17,
    taskId: "pn-man533-w17-turn-vessel-short-in-basin",
    taskTitle: "Turn The Vessel Short Round In The Basin",
    scenario: "To leave the harbour the ship must be turned short round in a confined basin with limited room, using every ship-handling effect available: transverse thrust, the combined action of propeller and rudder, and the turning circle.",
    instructions: [
      "Assess the room available against the turning circle and plan to use transverse thrust to start the swing in the favourable direction.",
      "Sequence the combined propeller and rudder orders that walk the ship round in the least space, using kicks ahead and astern.",
      "Set the abort point and the recovery action if the swing does not come round in the room available.",
      "Give the ship-handling orders and report the completed turn to the bridge team in correct maritime English."
    ],
    deliverable: "A short-round turning plan with the transverse-thrust start, the combined engine-and-rudder sequence, and the abort point.",
    assessmentCriteria: [
      "Transverse thrust is used correctly to start the swing the favourable way.",
      "The combined propeller and rudder sequence turns the ship in minimum space.",
      "A sound abort point and recovery action are defined.",
      "The ship-handling orders are delivered in correct maritime English."
    ],
    xp: 30,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "MAN533",
    subjectName: "Maniobras I",
    subjectId: "pn-s5-maniobras-i",
    unit: "Maniobra de atraque",
    topic: "Síntesis de la maniobra del semestre para el informe de maniobra al Capitán",
    week: 18,
    taskId: "pn-man533-w18-deliver-manoeuvring-brief-to-master",
    taskTitle: "Deliver The Departure Manoeuvring Brief To The Master",
    scenario: "It is the pre-departure conference for unberthing and outbound transit from Tampico. As officer you must brief the Master on the whole manoeuvring plan, pulling together the ship's handling characteristics, the unberthing, and the channel transit.",
    instructions: [
      "Summarise the ship's handling characteristics for the manoeuvre: turning circle, stopping distance, transverse thrust and steering.",
      "Present the unberthing plan and the outbound channel transit, covering the spring-off, wind and current, squat and interaction.",
      "State the contingency actions for a steering or engine problem during the transit.",
      "Deliver the full manoeuvring brief to the Master in professional maritime English."
    ],
    deliverable: "A departure manoeuvring brief covering the ship's handling characteristics, the unberthing and transit plan, and the contingencies.",
    assessmentCriteria: [
      "The ship's handling characteristics are summarised accurately.",
      "The unberthing and transit plan correctly accounts for wind, current, squat and interaction.",
      "The contingency actions are appropriate and complete.",
      "The brief is delivered in professional maritime English."
    ],
    xp: 30,
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
    subjectCode: "QUH534",
    subjectName: "Química",
    subjectId: "pn-s5-quimica",
    unit: "Combustibles y lubricantes",
    topic: "Viscosidad y temperatura de manejo de los combustibles marinos",
    week: 9,
    taskId: "pn-quh534-w09-fuel-viscosity",
    taskTitle: "Set Fuel Oil Viscosity For Injection",
    scenario: "The engine burns a heavy fuel oil that is almost solid when cold. The officer of the deck watch, understanding the chemistry, is asked to explain why the fuel is heated and how viscosity governs its handling, following on from the flash point of week 4.",
    instructions: [
      "Define viscosity as the resistance of the oil to flow, and state that a heavy fuel oil has a high viscosity that falls as it is heated, which is why heating makes it pumpable and lets it atomise finely at the injectors.",
      "Explain the injection requirement: the fuel must reach the injectors at a specified viscosity so it sprays as a fine mist that burns cleanly; too viscous and it sprays coarsely and burns poorly, so the fuel is heated to hit the target viscosity.",
      "State the safety boundary against week 4: the fuel is heated for viscosity but must be kept safely below its flash point in open handling, so the maximum handling temperature of a heavy fuel oil is limited by both the viscosity target and the flash-point safety margin.",
      "Report the reason the fuel is heated and the viscosity and flash-point limits in clear maritime English."
    ],
    deliverable: "A note in English on fuel viscosity: viscosity as resistance to flow falling with heating, the injection requirement (heated to a target viscosity for fine atomisation and clean burning), and the safety boundary that handling temperature is limited by both the viscosity target and the flash-point margin of week 4.",
    assessmentCriteria: [
      "Viscosity is correctly defined and its fall with heating explained (why heavy fuel is heated to be pumpable and to atomise).",
      "The injection requirement is correct (target viscosity for fine atomisation and clean combustion).",
      "The flash-point safety boundary is correct (handling temperature limited by the flash-point margin of week 4 as well as viscosity).",
      "The reason for heating and the limits are reported, in clear maritime English."
    ],
    xp: 20,
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
    topic: "Composición de los combustibles marinos y sus consecuencias",
    week: 10,
    taskId: "pn-quh534-w10-fuel-composition",
    taskTitle: "Read A Marine Fuel's Composition",
    scenario: "A bunker delivery note lists the fuel's contents and the officer must understand what they mean. The cadet is asked to read the composition of a marine fuel and trace each component to a consequence on board, connecting to the flash point of week 4 and the pollution chemistry of week 8.",
    instructions: [
      "Name the main components of a marine fuel: carbon and hydrogen (which burn to give the energy), sulphur (an unwanted impurity), and ash and water (unwanted residues), and note that a lighter distillate (marine diesel) is cleaner than a heavy fuel oil (combustoleo), which carries more sulphur and ash.",
      "Trace the sulphur: it burns to sulphur oxides that both corrode the cold parts of the exhaust and pollute the air (the SOx of week 8), which is why the sulphur content is regulated.",
      "Trace the ash and water: ash leaves abrasive deposits and water impairs combustion and promotes corrosion, so both are limited and water is drained from settling tanks before use.",
      "Report what the fuel's composition tells you about its quality and hazards in clear maritime English."
    ],
    deliverable: "A note in English reading a marine fuel's composition: the main components (carbon and hydrogen for energy; sulphur, ash and water as unwanted), distillate versus heavy fuel oil, the sulphur traced to SOx and corrosion (linking to week 8), and ash and water traced to deposits and corrosion, to judge the fuel's quality and hazards.",
    assessmentCriteria: [
      "The main components are correct (carbon and hydrogen burn for energy; sulphur, ash and water are unwanted) with distillate cleaner than heavy fuel oil.",
      "The sulphur is correctly traced to SOx, corrosion and regulation (linking to week 8).",
      "The ash and water are correctly traced to deposits, poor combustion and corrosion, and their control.",
      "The judgement of the fuel's quality and hazards is reported, in clear maritime English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "QUH534",
    subjectName: "Química",
    subjectId: "pn-s5-quimica",
    unit: "Corrosión",
    topic: "Formas de corrosión más allá de la celda galvánica",
    week: 11,
    taskId: "pn-quh534-w11-corrosion-forms",
    taskTitle: "Identify The Forms Of Corrosion Beyond The Galvanic Cell",
    scenario: "An inspection of the ship's structure and seawater systems turns up damage that is not simple rusting. As an advanced task, the officer asks the cadet to identify the forms of corrosion at work, building on the galvanic cell of week 2.",
    instructions: [
      "Distinguish the forms by their mechanism: pitting corrosion (local breakdown of the protective film boring deep pits into an otherwise sound surface), stress-corrosion cracking (cracks growing where a tensile stress and a corrosive environment act together), and corrosion fatigue (cracking under repeated stress accelerated by corrosion).",
      "Explain the flow-related forms: erosion-corrosion and impingement, where fast or turbulent seawater strips the protective film and speeds attack, which is why corrosion increases with the velocity of the seawater in a pipe.",
      "Explain the selective forms: the graphitisation of cast iron and the dezincification of brass, where one constituent is leached out and leaves a weak, spongy metal that looks intact but has lost its strength.",
      "Report which form is acting and how it would be prevented or controlled in clear maritime English."
    ],
    deliverable: "A note in English identifying the forms of corrosion beyond the galvanic cell: pitting, stress-corrosion cracking and corrosion fatigue by mechanism, the flow-related erosion-corrosion and impingement (corrosion rising with seawater velocity), and the selective graphitisation of cast iron and dezincification of brass (a weak metal that looks intact), building on week 2.",
    assessmentCriteria: [
      "Pitting, stress-corrosion cracking and corrosion fatigue are correctly distinguished by mechanism.",
      "The flow-related forms are correct (erosion-corrosion/impingement; corrosion increases with seawater velocity).",
      "The selective forms are correct (graphitisation of cast iron, dezincification of brass, leaving a weak metal that looks sound).",
      "The acting form and its prevention or control are reported, building on week 2, in clear maritime English."
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
    unit: "Análisis y tratamiento del agua",
    topic: "Determinación de sales disueltas y del contenido de agua en aceites",
    week: 12,
    taskId: "pn-quh534-w12-water-oil-analysis",
    taskTitle: "Analyse A Water And Lube-Oil Sample",
    scenario: "The routine samples are on the bench: a feed-water sample and a lube-oil sample. As the closing task of the subject, the officer asks the cadet to analyse them and read what the results mean, integrating the water treatment of week 5 and the hardness of week 3.",
    instructions: [
      "State how dissolved salts are measured and expressed: the total dissolved solids and the chloride content are determined by standard on-board tests and expressed in standard units (such as parts per million), so successive samples are compared on the same basis.",
      "Read the feed-water result: a rising chloride reading is the signature of seawater ingress from a leaking condenser or cooler (as watched for in week 5), and a high total hardness is the scale-forming content of week 3, so the reading points to the fault and the treatment.",
      "Test the lube oil for water: describe the crackle test as a concept (a drop of oil on a hot plate crackles if water is present) and explain that water in the lube oil destroys its film and must be removed by the purifier, with its source (a cooler leak or condensation) then found.",
      "Report the sample results, what each indicates and the action, in clear maritime English."
    ],
    deliverable: "A note in English analysing the samples: dissolved salts measured as total dissolved solids and chlorides in standard units, the feed-water read (rising chloride = seawater ingress from week 5; high hardness = scale from week 3), and the lube-oil water test (the crackle test as a concept; water destroys the oil film and is removed by the purifier), with the action for each, integrating weeks 3 and 5.",
    assessmentCriteria: [
      "The measurement of dissolved salts is correct (total dissolved solids and chlorides by standard tests in standard units for comparison).",
      "The feed-water result is read correctly (rising chloride = seawater ingress from week 5; high hardness = scale-forming from week 3).",
      "The lube-oil water test is correct (crackle test as a concept; water destroys the film and is removed by the purifier, with its source found).",
      "The results, their meaning and the action are reported, integrating weeks 3 and 5, in clear maritime English."
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
    topic: "Entrada a espacio cerrado integrando la química de la atmósfera, el punto de inflamación y el tetraedro del fuego",
    week: 13,
    taskId: "pn-quh534-w13-certify-enclosed-space-entry",
    taskTitle: "Certify An Enclosed Space For Safe Entry",
    scenario: "A cargo hold that carried a residue-bearing cargo must be entered for inspection. You are responsible for the atmosphere testing and for judging the fire and toxicity risk before anyone enters.",
    instructions: [
      "Plan the sequence of atmosphere tests for oxygen, flammable gas and toxic gas, and state the safe limits for entry.",
      "Interpret the readings against the flammable range and the flash point of any residue to judge the fire risk.",
      "Decide whether entry is safe, and set the ventilation and re-testing regime required to keep it safe during the work.",
      "Issue the enclosed-space entry certificate and brief the entry party in correct maritime English."
    ],
    deliverable: "An enclosed-space entry certificate with the test sequence, the safe limits, and the ventilation and re-testing regime.",
    assessmentCriteria: [
      "The atmosphere test sequence and safe limits are correct and complete.",
      "The readings are correctly interpreted against the flammable range and flash point.",
      "The ventilation and re-testing regime keeps the space safe during entry.",
      "The certificate and briefing are delivered in correct maritime English."
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
    topic: "Acondicionamiento del combustible integrando composición, viscosidad y temperatura de manejo y el punto de inflamación",
    week: 14,
    taskId: "pn-quh534-w14-condition-fuel-for-injection",
    taskTitle: "Condition The Bunker Fuel For Safe Injection",
    scenario: "A new bunker of heavy fuel oil has been received with a bunker analysis. Before it is burned you must set its handling so that it injects correctly and is stored and heated safely below its flash point margin.",
    instructions: [
      "Read the fuel's composition from the bunker analysis and identify the consequences its properties have for handling and combustion.",
      "Determine the heating temperature that brings the fuel to the correct injection viscosity, and set the storage and settling temperatures.",
      "Verify the handling temperatures keep a safe margin below the flash point and set the safe-handling limits.",
      "Report the fuel conditioning plan and its safety limits to the engineer officer in correct maritime English."
    ],
    deliverable: "A fuel conditioning plan with the injection-viscosity temperature, the storage and settling temperatures, and the flash-point safety margin.",
    assessmentCriteria: [
      "The fuel composition and its handling consequences are correctly read from the analysis.",
      "The injection-viscosity and storage temperatures are correctly determined.",
      "The handling temperatures keep a safe margin below the flash point.",
      "The conditioning plan is reported in correct maritime English."
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
    unit: "Análisis y tratamiento del agua",
    topic: "Tratamiento del agua integrando dureza y formación de incrustaciones, el análisis de sales disueltas y el tratamiento de calderas",
    week: 15,
    taskId: "pn-quh534-w15-run-boiler-water-treatment-cycle",
    taskTitle: "Run The Boiler Water Treatment Cycle",
    scenario: "The boiler water test results for the watch are in front of you: hardness, dissolved salts and pH are all off their target values. You must diagnose the water condition and set the treatment and blowdown to protect the boiler from scale and corrosion.",
    instructions: [
      "Interpret the hardness and dissolved-salts results and explain the scale and corrosion risk they represent.",
      "Determine the chemical dosing and the blowdown needed to bring hardness, salts and pH back to their target ranges.",
      "Set the follow-up testing schedule that confirms the water has returned to specification.",
      "Record and report the boiler water condition and the treatment actions to the engineer officer in correct maritime English."
    ],
    deliverable: "A boiler water treatment record with the diagnosis, the dosing and blowdown actions, and the follow-up testing schedule.",
    assessmentCriteria: [
      "The hardness and dissolved-salts results are correctly interpreted for scale and corrosion risk.",
      "The dosing and blowdown correctly return the water to specification.",
      "The follow-up testing schedule is appropriate.",
      "The treatment record and report are delivered in correct maritime English."
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
    unit: "Corrosión",
    topic: "Respuesta a la corrosión acelerada integrando la celda galvánica, los ánodos de sacrificio y las formas de corrosión",
    week: 16,
    taskId: "pn-quh534-w16-respond-to-accelerated-corrosion",
    taskTitle: "Respond To Accelerated Corrosion In A Ballast Tank",
    scenario: "A ballast tank inspection reveals corrosion far worse than expected: pitting in places, wasted sacrificial anodes, and staining where dissimilar metals meet. You must diagnose the corrosion mechanisms and set the corrective action.",
    instructions: [
      "Identify the forms of corrosion present in the tank and diagnose the galvanic couples driving the worst of the attack.",
      "Assess the condition of the sacrificial anodes and determine the anode renewal needed to restore protection.",
      "Set the coating and protection measures that arrest the other forms of corrosion found.",
      "Report the corrosion findings and the corrective plan to the chief officer in correct maritime English."
    ],
    deliverable: "A corrosion findings report with the mechanisms identified, the anode renewal, and the coating and protection measures.",
    assessmentCriteria: [
      "The forms of corrosion and the galvanic couples are correctly identified.",
      "The anode condition assessment and renewal restore cathodic protection.",
      "The coating and protection measures address the other corrosion forms.",
      "The findings report is delivered in correct maritime English."
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
    topic: "Auditoría ambiental integrando la contaminación por hidrocarburos, SOx y NOx, el agua de lastre y el pH",
    week: 17,
    taskId: "pn-quh534-w17-audit-vessel-pollution-chemistry",
    taskTitle: "Audit The Vessel's Pollution Chemistry For Compliance",
    scenario: "Before departure you must certify that the ship's discharges and emissions are within their environmental limits. This means auditing the oil-in-water, the exhaust SOx and NOx, and the ballast water treatment against their chemistry-based limits.",
    instructions: [
      "Assess the oily-water separator and bilge discharge chemistry against the permitted oil-in-water limit.",
      "Evaluate the fuel sulphur and the exhaust chemistry against the SOx and NOx emission limits for the area.",
      "Verify the ballast water treatment and check the discharge chemistry, including pH, against its limits.",
      "Issue an environmental compliance statement to the Master in correct maritime English certifying the discharges and emissions."
    ],
    deliverable: "An environmental compliance statement covering oil-in-water, SOx and NOx emissions, and ballast water discharge chemistry.",
    assessmentCriteria: [
      "The oil-in-water discharge is correctly assessed against its limit.",
      "The SOx and NOx emissions are correctly evaluated against the area limits.",
      "The ballast water discharge chemistry is verified against its limits.",
      "The compliance statement is written in correct maritime English."
    ],
    xp: 30,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "QUH534",
    subjectName: "Química",
    subjectId: "pn-s5-quimica",
    unit: "Combustibles y lubricantes",
    topic: "Síntesis de la química aplicada del semestre para el informe de seguridad química al oficial",
    week: 18,
    taskId: "pn-quh534-w18-deliver-chemical-safety-brief",
    taskTitle: "Deliver The Shipboard Chemical Safety Brief",
    scenario: "At the end of the semester you must deliver the ship's chemical safety brief, pulling together everything that governs the safe handling of fuels, water, atmospheres and corrosion control across the vessel for the voyage ahead.",
    instructions: [
      "Summarise the fire-and-flammability controls for fuels and lubricants, covering flash point, the fire tetrahedron and flammable ranges.",
      "Present the enclosed-space atmosphere policy and the water treatment regime that protect the crew and the machinery.",
      "State the corrosion control and the environmental discharge limits the ship operates under.",
      "Deliver the full chemical safety brief to the officer in professional maritime English."
    ],
    deliverable: "A chemical safety brief covering fuel and fire controls, enclosed-space and water treatment, and corrosion and discharge limits.",
    assessmentCriteria: [
      "The fire-and-flammability controls for fuels are summarised accurately.",
      "The enclosed-space and water treatment policies are complete and correct.",
      "The corrosion control and discharge limits are stated correctly.",
      "The brief is delivered in professional maritime English."
    ],
    xp: 30,
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
    subjectCode: "COV535",
    subjectName: "Comunicación Visual",
    subjectId: "pn-s5-comunicacion-visual",
    unit: "Comunicación con Código Morse",
    topic: "Identificación de letras y números con Código Morse",
    week: 9,
    taskId: "pn-cov535-w09-morse-letters-numbers",
    taskTitle: "Read Morse Letters And Numbers By Signal Lamp",
    scenario: "A vessel is calling by signal lamp and the message is not the SOS of week 1 but a plain-language text. The officer asks the cadet to read the Morse alphabet and numerals by lamp and to work the exchange procedure.",
    instructions: [
      "State the building blocks: every letter and numeral is a set pattern of short flashes (dots) and long flashes (dashes), with the space between flashes, letters and words giving the rhythm that separates them.",
      "Give the anchors a watchkeeper should know cold: E is a single dot and T a single dash, S is three dots and O three dashes (so SOS is unmistakable), and the numerals run as patterns of five elements; read a short group letter by letter.",
      "Work the procedure from week 6: the calling ship sends the call AA AA, the answer is TTTT, each word or group is acknowledged with T, and a mistake is corrected by the error sign (a run of dots) and the group sent again.",
      "Report a short received group and how you acknowledged it, in correct maritime English."
    ],
    deliverable: "A note in English reading Morse by lamp: letters and numerals as patterns of dots and dashes with the spacing that separates them, the anchors a watchkeeper knows cold (E, T, S, O, the five-element numerals), and the exchange procedure from week 6 (call AA AA, answer TTTT, acknowledge T, error sign and repeat), with a short received group read and acknowledged.",
    assessmentCriteria: [
      "The dot/dash structure and the spacing between flashes, letters and words are correct.",
      "The anchor characters are correct (E dot, T dash, S three dots, O three dashes; numerals as five-element patterns).",
      "The exchange procedure is correct (call AA AA, answer TTTT, acknowledge T, error sign then repeat), consistent with week 6.",
      "A short group is read and its acknowledgement reported, in correct maritime English."
    ],
    xp: 20,
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
    topic: "Comunicación de mensajes con grupos del Código Internacional de Señales",
    week: 10,
    taskId: "pn-cov535-w10-coded-flag-message",
    taskTitle: "Send A Coded Message With Signal Flags",
    scenario: "A message must pass to a vessel with no common language on the radio. The officer asks the cadet to use the International Code of Signals flag groups, going beyond the single-letter signals of weeks 2 and 5 to two- and three-letter groups.",
    instructions: [
      "Explain the principle: the International Code of Signals gives each standard message a code group, so a hoist of two or three flags carries a complete meaning that any ship can look up in its own language, overcoming the language barrier.",
      "Explain the make-up: single-letter signals are the most urgent (weeks 2 and 5), two-letter groups cover general and distress/emergency messages, and three-letter groups beginning with M are the medical section; substitute (repeater) flags let a letter be repeated within a hoist without a second flag of that letter.",
      "Explain the procedure: the hoist is read from the top down, the receiving ship answers by hoisting the answering pennant at the dip and closes it up when the signal is understood.",
      "Report how you would make and acknowledge a two-letter hoist, in correct maritime English."
    ],
    deliverable: "A note in English on coded flag messages: the principle (a code group carries a complete message any ship can look up, overcoming language), the make-up (single-letter urgent from weeks 2 and 5, two-letter general/distress, three-letter medical, substitute flags for repeats), and the procedure (read top down, answering pennant at the dip then closed up when understood), with a two-letter hoist made and acknowledged.",
    assessmentCriteria: [
      "The principle is correct (a code group carries a complete standard message readable in any language, overcoming the language barrier).",
      "The make-up is correct (single-letter most urgent from weeks 2/5, two-letter general/distress, three-letter medical, substitute flags for repeated letters).",
      "The procedure is correct (read top down; answering pennant at the dip then closed up when understood).",
      "A two-letter hoist and its acknowledgement are reported, in correct maritime English."
    ],
    xp: 20,
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
    topic: "Parte B. Reglas de rumbo y gobierno",
    week: 11,
    taskId: "pn-cov535-w11-colregs-steering-rules",
    taskTitle: "Apply The COLREGS Steering And Sailing Rules",
    scenario: "On the AIS traffic picture off Tampico two vessels are closing and the officer must decide who keeps clear. The officer asks the cadet to apply the COLREGS Part B steering and sailing rules, the conduct behind the lights of week 4 and the manoeuvring signals of week 6.",
    instructions: [
      "State the three encounters between power-driven vessels: head-on (both alter to starboard and pass port to port), crossing (the vessel that has the other on her own starboard side gives way), and overtaking (the overtaking vessel keeps clear of the vessel being overtaken).",
      "State the give-way and stand-on duties: the give-way vessel takes early and substantial action to keep clear, while the stand-on vessel holds her course and speed but must act if the give-way vessel plainly is not.",
      "Apply the good-seamanship rules: any action must be positive, made in good time, large enough to be readily apparent (preferably an alteration of course), and taken with due regard to a safe passing distance (CPA).",
      "Report the encounter, who gives way and the action you would take, using the manoeuvring signals of week 6, in correct maritime English."
    ],
    deliverable: "A note in English applying the COLREGS steering and sailing rules to the Tampico traffic: the three encounters (head-on, crossing, overtaking) with who keeps clear, the give-way and stand-on duties (early substantial action versus hold course and speed but act if the other does not), the good-seamanship qualities of any action (positive, timely, readily apparent, safe passing distance), and the manoeuvring signals of week 6.",
    assessmentCriteria: [
      "The three encounters are correct (head-on both to starboard port-to-port; crossing the vessel with the other on her starboard gives way; overtaking vessel keeps clear).",
      "The give-way and stand-on duties are correct (give-way takes early substantial action; stand-on holds course and speed but must act if the give-way vessel does not).",
      "The action qualities are correct (positive, in good time, readily apparent, safe passing distance).",
      "The encounter, the give-way vessel and the action are reported with the week 6 manoeuvring signals, in correct maritime English."
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
    unit: "Reglamento Internacional para prevenir abordajes en la mar",
    topic: "Parte D. Señales acústicas en visibilidad reducida",
    week: 12,
    taskId: "pn-cov535-w12-restricted-visibility-signals",
    taskTitle: "Sound The Correct Signals In Restricted Visibility",
    scenario: "Fog closes in on the approach and the vessels around can no longer see one another. As the closing task of the subject, the officer asks the cadet to sound the correct fog signals and read those of others, the sound complement to the visual code of the whole subject.",
    instructions: [
      "State the principal fog signals: one prolonged blast about every two minutes for a power-driven vessel making way, two prolonged blasts for one under way but stopped, and one prolonged followed by two short for a vessel not under command, restricted in her ability to manoeuvre, constrained by draught, sailing, fishing or towing.",
      "Read a heard signal: identify from the pattern what kind of vessel is out there in the fog and what she is doing, so the sound builds the same situational picture the eye would in clear weather.",
      "State the boundary with the in-sight signals of week 6: the manoeuvring signals of Rule 34 are for vessels in sight of one another, whereas these are the signals for restricted visibility when they cannot see each other, and the two must not be confused.",
      "Report the signal your own vessel should make and your reading of a heard signal, in correct maritime English, leaving the meteorology of the fog to Meteorologia II and the radar to Navegacion III."
    ],
    deliverable: "A note in English on restricted-visibility sound signals: the principal fog signals (one prolonged making way; two prolonged under way but stopped; one prolonged plus two short for the hampered vessels), reading a heard signal to identify the vessel and what she is doing, and the boundary that these are for restricted visibility whereas the Rule 34 signals of week 6 are for vessels in sight, with the fog's meteorology and the radar left to their subjects.",
    assessmentCriteria: [
      "The principal fog signals are correct (one prolonged making way; two prolonged under way but stopped; one prolonged plus two short for NUC/RAM/CBD/sailing/fishing/towing).",
      "A heard signal is correctly read to identify the type of vessel and her activity.",
      "The boundary with week 6 is respected (restricted-visibility signals here versus in-sight Rule 34 manoeuvring signals there).",
      "The own-ship signal and the reading of a heard signal are reported, with the meteorology and radar left to their subjects, in correct maritime English."
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
    unit: "Reglamento Internacional para prevenir abordajes en la mar",
    topic: "Navegación en visibilidad reducida integrando señales acústicas del Anexo III, las reglas de rumbo y gobierno y las luces y marcas",
    week: 13,
    taskId: "pn-cov535-w13-work-restricted-visibility-signals",
    taskTitle: "Work The Vessel Through Restricted Visibility",
    scenario: "Fog closes in on the Tampico approaches. Radar shows a vessel forward of the beam and you must apply the conduct rules for restricted visibility while sounding the correct signals and reading the lights and shapes of vessels you sight as visibility opens and closes.",
    instructions: [
      "Sound the correct fog signal for your own vessel's status and interpret the fog signals you hear from other vessels.",
      "Apply the restricted-visibility steering and sailing rules to the radar contact, deciding the avoiding action the rules require.",
      "As shapes appear, identify each vessel by its lights and marks and confirm its type and situation.",
      "Report the restricted-visibility situation and your action, and coordinate on VHF, in correct maritime English and SMCP."
    ],
    deliverable: "A restricted-visibility action record with the fog signals, the applied conduct rules, and the identification of contacts.",
    assessmentCriteria: [
      "The correct fog signals are sounded and other vessels' signals correctly interpreted.",
      "The restricted-visibility conduct rules are correctly applied to the contact.",
      "Vessels are correctly identified by their lights and marks.",
      "The report and VHF coordination use correct maritime English and SMCP."
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
    unit: "Código Internacional de Señales",
    topic: "Comunicación por banderas integrando grupos del Código, banderas de un solo significado y la maniobra por Regla 34",
    week: 14,
    taskId: "pn-cov535-w14-send-full-flag-message",
    taskTitle: "Send A Full Coded Message By Flag And Light",
    scenario: "Radio is not to be used and you must pass a manoeuvring and status message to a nearby vessel entirely by visual means, combining single-letter flags, a coded group from the International Code, and the manoeuvring signals of Rule 34.",
    instructions: [
      "Compose the message using the correct International Code group and the single-letter flags whose meaning stands alone.",
      "Hoist the signal in the correct order and confirm the other vessel's acknowledgement.",
      "Signal your intended manoeuvre by the Rule 34 light and sound signals as you carry it out.",
      "Log the exchange and report its meaning to the Master in correct maritime English and SMCP."
    ],
    deliverable: "A visual signalling log with the composed flag message, the acknowledgement, and the Rule 34 manoeuvring signals used.",
    assessmentCriteria: [
      "The International Code group and single-letter flags are correctly chosen and hoisted.",
      "The hoist order and acknowledgement procedure are correct.",
      "The Rule 34 signals correctly match the manoeuvre carried out.",
      "The log and report use correct maritime English and SMCP."
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
    topic: "Pilotaje visual del canal integrando marcas laterales y cardinales, las regiones A y B y la identificación por luces",
    week: 15,
    taskId: "pn-cov535-w15-pilot-channel-by-iala-marks",
    taskTitle: "Pilot The Channel By The IALA Buoyage",
    scenario: "You are conning the ship inbound through a buoyed channel at night. You must read the lateral and cardinal marks, apply the correct region convention, and identify each mark by its light to keep the ship in safe water.",
    instructions: [
      "Confirm the IALA region for the area and state which side of the vessel the lateral marks must pass.",
      "Interpret the cardinal marks along the channel and identify the safe water they indicate around each danger.",
      "Identify each mark at night by its light characteristic and confirm it against the chart before acting on it.",
      "Give the helm orders and a running mark-identification report to the bridge team in correct maritime English and SMCP."
    ],
    deliverable: "A channel piloting record with the region convention, the mark interpretation, and the night light identifications.",
    assessmentCriteria: [
      "The IALA region and lateral-mark convention are correctly applied.",
      "The cardinal marks are correctly interpreted for safe water.",
      "The marks are correctly identified by their light characteristics.",
      "The helm orders and report use correct maritime English and SMCP."
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
    topic: "Respuesta a la emergencia visual integrando el socorro en Morse, las señales de peligro del Anexo IV y su composición integrada",
    week: 16,
    taskId: "pn-cov535-w16-respond-to-distress-by-visual-means",
    taskTitle: "Respond To A Distress Signal Sighted At Sea",
    scenario: "At night you sight a vessel showing distress signals: a Morse SOS by signal lamp and Annex IV distress indications together. Radio contact is not yet established and you must recognise the distress, respond by visual means, and integrate the signals into one picture.",
    instructions: [
      "Read the Morse distress signal by lamp and confirm the Annex IV distress signals accompanying it.",
      "Compose the integrated distress picture, combining the signals to establish the nature and urgency of the casualty.",
      "Signal your acknowledgement and intention to assist by signal lamp, and begin the response.",
      "Report the distress and your response to the Master and by VHF in correct maritime English and SMCP."
    ],
    deliverable: "A distress response record with the decoded Morse signal, the integrated distress picture, and the visual acknowledgement sent.",
    assessmentCriteria: [
      "The Morse distress signal is read correctly.",
      "The distress signals are correctly integrated into one coherent picture.",
      "The visual acknowledgement and intention to assist are correctly signalled.",
      "The distress report uses correct maritime English and SMCP."
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
    unit: "Señales luminosas y de maniobra",
    topic: "Auditoría de la comunicación visual integrando la lámpara de señales, el Morse por lámpara y las señales de la Regla 34",
    week: 17,
    taskId: "pn-cov535-w17-audit-visual-signalling-readiness",
    taskTitle: "Audit The Ship's Visual Signalling Readiness",
    scenario: "Before departure the Master asks you to certify that the ship can communicate fully by visual means if radio fails. You must audit the signalling equipment and confirm the watch can send and read Morse, flag and manoeuvring signals.",
    instructions: [
      "Test the signal lamp and the flag inventory and confirm the equipment needed for full visual communication is complete and working.",
      "Verify that the watch can send and read Morse letters and numbers by lamp and can hoist the International Code correctly.",
      "Confirm the watch can give and read the Rule 34 manoeuvring signals by light and sound.",
      "Issue a visual signalling readiness statement to the Master in correct maritime English and SMCP."
    ],
    deliverable: "A visual signalling readiness statement covering the equipment test, the Morse and flag proficiency, and the Rule 34 signalling.",
    assessmentCriteria: [
      "The signal lamp and flag inventory are correctly tested and confirmed complete.",
      "Morse and flag proficiency of the watch is verified.",
      "The Rule 34 manoeuvring signal capability is confirmed.",
      "The readiness statement uses correct maritime English and SMCP."
    ],
    xp: 30,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "COV535",
    subjectName: "Comunicación Visual",
    subjectId: "pn-s5-comunicacion-visual",
    unit: "Reglamento Internacional para prevenir abordajes en la mar",
    topic: "Síntesis de la comunicación visual del semestre para el traspaso de guardia en visibilidad reducida",
    week: 18,
    taskId: "pn-cov535-w18-hand-over-visual-comms-watch",
    taskTitle: "Hand Over The Watch In Reduced Visibility",
    scenario: "You are handing over the bridge watch as the ship enters a buoyed channel in patchy fog. Your relief must inherit the full visual picture: the buoyage being followed, the contacts identified by light and signal, and the signalling in use.",
    instructions: [
      "Summarise the buoyage being followed and the marks still to be identified along the channel.",
      "Present the contacts around the ship, how each was identified by lights, marks or signals, and the conduct rules being applied to them.",
      "State the fog signals and manoeuvring signals in use and the visual signalling arranged with other vessels.",
      "Deliver the full watch handover to your relief in professional maritime English and SMCP."
    ],
    deliverable: "A watch handover brief covering the buoyage, the identified contacts, and the signalling in use in reduced visibility.",
    assessmentCriteria: [
      "The buoyage and outstanding marks are summarised accurately.",
      "The contacts and the conduct rules applied to them are correctly presented.",
      "The fog and manoeuvring signals in use are stated correctly.",
      "The handover uses professional maritime English and SMCP."
    ],
    xp: 30,
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
    subjectCode: "ING531",
    subjectName: "Inglés Marítimo V",
    subjectId: "pn-s5-ingles-maritimo-v",
    unit: "Tiempos simples y continuos",
    topic: "Verbos con ing como gerundio e infinitivo",
    week: 9,
    taskId: "pn-ing531-w09-gerund-infinitive",
    taskTitle: "Report Actions With Gerund And Infinitive",
    scenario: "In a watch report the difference between 'stopped to check' and 'stopped checking' changes the meaning entirely. The officer asks the cadet to report shipboard actions using the gerund and the infinitive correctly, since the wrong form misstates what was done.",
    instructions: [
      "Set out the two patterns operationally: the infinitive (to + verb) states the PURPOSE of an action ('we reduced speed to ease the pounding'), while the gerund (verb + ing) names the activity itself ('we finished securing the deck').",
      "Show the trap that changes the meaning: 'we stopped to sound the tanks' (we stopped in order to sound them) against 'we stopped sounding the tanks' (we ceased that activity), and use each correctly.",
      "Use the forms after the verbs a watchkeeper needs: we avoided grounding, we managed to anchor, we recommend reducing speed, we agreed to wait for the tide.",
      "Write four short operational sentences that each use the right form and report them in clear maritime English."
    ],
    deliverable: "A short set of operational sentences in English using the infinitive of purpose (to + verb) and the gerund of activity (verb + ing) correctly, including the 'stopped to do' versus 'stopped doing' contrast, in a watch-report context.",
    assessmentCriteria: [
      "The infinitive of purpose and the gerund of activity are used correctly.",
      "The meaning-changing contrast (stopped to do versus stopped doing) is handled correctly.",
      "The forms are used correctly after common watch verbs (avoid, manage, recommend, agree).",
      "The sentences are operational and read professionally, not as a grammar exercise."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "ING531",
    subjectName: "Inglés Marítimo V",
    subjectId: "pn-s5-ingles-maritimo-v",
    unit: "Expectativas y suposiciones",
    topic: "Uso de supposed to y was going to para reportar desviaciones del plan",
    week: 10,
    taskId: "pn-ing531-w10-expectations-deviations",
    taskTitle: "Report A Deviation From The Plan",
    scenario: "The pilot was supposed to board at 0600 and did not, and the plan has slipped. The officer asks the cadet to report the gap between what was planned and what happened, using the structures that express expectation against reality.",
    instructions: [
      "Use 'supposed to' for the arrangement or expectation ('the pilot is supposed to board at 0600', 'cargo was supposed to finish by noon') to state what should happen or should have happened by rule or arrangement.",
      "Use 'was/were going to' for a plan that then changed ('we were going to sail on the tide, but the berth was not clear'), to report an intention overtaken by events.",
      "Keep the report factual and blame-free: state the expectation, then the actual event, then the effect on the plan, so the reader sees the gap and its consequence.",
      "Write the deviation report and communicate it in clear maritime English."
    ],
    deliverable: "A short deviation report in English using 'supposed to' for the expectation or arrangement and 'was/were going to' for a changed plan, stating the expectation, the actual event and the effect on the plan, factually and blame-free.",
    assessmentCriteria: [
      "'Supposed to' is used correctly for an expectation or arrangement (present and past).",
      "'Was/were going to' is used correctly for a plan overtaken by events.",
      "The report structure is sound (expectation, actual event, effect on the plan) and blame-free.",
      "The deviation is communicated clearly and professionally in maritime English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "ING531",
    subjectName: "Inglés Marítimo V",
    subjectId: "pn-s5-ingles-maritimo-v",
    unit: "Pasado perfecto",
    topic: "Uso del pasado perfecto para la cronología de un incidente",
    week: 11,
    taskId: "pn-ing531-w11-past-perfect-chronology",
    taskTitle: "Write An Incident Chronology In The Past Perfect",
    scenario: "A near-miss has to be written up and the sequence of events must be unmistakable. The officer asks the cadet to write the chronology using the past perfect, because in an incident report the order of events is the heart of the matter.",
    instructions: [
      "Use the past perfect to fix the order of two past events: 'by the time the alarm sounded, the vessel had already closed to two miles', so the reader sees plainly which event came first.",
      "Combine it with the simple past for the main narrative line and with time markers (by then, already, before, after, when) so the timeline is clear from start to finish.",
      "Use 'so' and 'neither' to add corroboration economically ('the radar had lost the target, and so had the lookout'), keeping the account tight.",
      "Write a short incident chronology and report it in clear maritime English."
    ],
    deliverable: "A short incident chronology in English using the past perfect to order the events (the earlier event in the past perfect, the main line in the simple past) with clear time markers, and 'so'/'neither' for economical corroboration, so the sequence is unmistakable.",
    assessmentCriteria: [
      "The past perfect is used correctly to place the earlier of two past events.",
      "It is combined with the simple past and clear time markers for an unambiguous timeline.",
      "'So' and 'neither' are used correctly for corroboration.",
      "The chronology reads as a professional incident report, unmistakable in its sequence, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "ING531",
    subjectName: "Inglés Marítimo V",
    subjectId: "pn-s5-ingles-maritimo-v",
    unit: "Pasivo con modal verbs y verbo to get",
    topic: "Voz pasiva con modales y to get para consignas y procedimientos",
    week: 12,
    taskId: "pn-ing531-w12-passive-modals-orders",
    taskTitle: "Draft Standing Orders In The Passive With Modals",
    scenario: "As the closing task of the subject, the officer must write standing orders that say what has to be done aboard without naming who does it. The cadet is asked to draft them using the passive with modal verbs, drawing together the passive of week 1 and the modals of week 5.",
    instructions: [
      "Form the passive with modals to state a duty impersonally: 'the master is to be called if visibility falls below two miles', 'the anchor must be kept ready', 'the log is to be completed each hour', so the order is on the action and the standard, not the person.",
      "Choose the modal that states the real force, as in week 5: 'must' and 'is to be' for obligation, 'must not be' for prohibition, 'should be' for recommendation, keeping the passive throughout.",
      "Use the 'get' passive for the informal spoken register where it fits ('if a line gets parted, report it at once'), and note when the plainer form is clearer for a mixed-nationality crew (week 6).",
      "Draft a short set of standing orders and communicate them in clear maritime English."
    ],
    deliverable: "A short set of standing orders in English written in the passive with modal verbs (is to be called, must be kept ready, is to be completed), choosing the modal for the real force as in week 5 and using the 'get' passive where the register fits, drawing together the passive of week 1 and the modals of week 5.",
    assessmentCriteria: [
      "The passive with modals is formed correctly to state duties impersonally (focus on the action and the standard, not the person).",
      "The modal chosen states the real force (obligation, prohibition, recommendation), consistent with week 5.",
      "The 'get' passive is used appropriately and the mixed-nationality clarity point of week 6 is respected.",
      "The standing orders are drafted coherently and read professionally, in clear maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "ING531",
    subjectName: "Inglés Marítimo V",
    subjectId: "pn-s5-ingles-maritimo-v",
    unit: "Comunicación radiotelefónica",
    topic: "Comunicación radiotelefónica integrando el protocolo GMDSS de socorro con las frases normalizadas de la OMI",
    week: 13,
    taskId: "pn-ing531-w13-handle-full-distress-traffic",
    taskTitle: "Handle The Full Distress Radio Traffic",
    scenario: "Your vessel receives a distress call on VHF and is the best-placed ship to assist. Using the VHF simulator you must run the complete distress traffic, from acknowledgement through coordination, entirely in IMO Standard Marine Communication Phrases.",
    instructions: [
      "Acknowledge the distress call using the correct GMDSS distress procedure and phraseology.",
      "Establish and run the on-scene communications, using SMCP message markers to keep the traffic unambiguous.",
      "Pass your position, intentions and ETA to the casualty and to any coordinating station in standard phrases.",
      "Log and read back the complete distress exchange in correct radiotelephony English and SMCP."
    ],
    deliverable: "A logged distress radio exchange run in full GMDSS procedure and IMO Standard Marine Communication Phrases.",
    assessmentCriteria: [
      "The GMDSS distress acknowledgement procedure is correctly followed.",
      "SMCP message markers are used correctly to keep the traffic unambiguous.",
      "Position, intentions and ETA are passed clearly and completely.",
      "The whole exchange is conducted in correct radiotelephony English and SMCP."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "ING531",
    subjectName: "Inglés Marítimo V",
    subjectId: "pn-s5-ingles-maritimo-v",
    unit: "Discurso de mando",
    topic: "Discurso de mando integrando el briefing del equipo de puente, los verbos frasales del puente y los modales de obligación",
    week: 14,
    taskId: "pn-ing531-w14-brief-bridge-team-for-operation",
    taskTitle: "Brief The Bridge Team For The Arrival",
    scenario: "You are the officer conducting the pre-arrival briefing for the bridge team before entering Tampico. You must deliver clear standing instructions, assign duties, and confirm understanding, using command language correctly.",
    instructions: [
      "Deliver the pre-arrival briefing, assigning duties with the bridge phrasal verbs used for orders on the bridge.",
      "State the obligations, prohibitions and permissions for the operation using the correct modal verbs.",
      "Check the team's understanding and take back their read-back of the key orders.",
      "Close the briefing and confirm the team is ready in correct maritime English and SMCP."
    ],
    deliverable: "A delivered bridge team briefing with duty assignments, the obligations and prohibitions stated, and understanding confirmed.",
    assessmentCriteria: [
      "Duties are assigned clearly using correct bridge phrasal verbs.",
      "Obligations, prohibitions and permissions are expressed with the correct modals.",
      "Understanding is checked and read-back is correctly taken.",
      "The briefing is delivered in correct maritime English and SMCP."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "ING531",
    subjectName: "Inglés Marítimo V",
    subjectId: "pn-s5-ingles-maritimo-v",
    unit: "Pasado perfecto",
    topic: "Redacción del incidente integrando el pasado perfecto para la cronología, los conectores causales y supposed to para las desviaciones",
    week: 15,
    taskId: "pn-ing531-w15-write-full-incident-report",
    taskTitle: "Write The Full Incident Report",
    scenario: "A near-miss occurred on your watch when the passage did not go as planned. You must write the formal incident report, setting out the chronology, the causes, and how events deviated from what was supposed to happen.",
    instructions: [
      "Set out the chronology of the incident, using the past perfect to show which actions had happened before others.",
      "Explain the causes of the incident using the correct causal linking expressions.",
      "State how events deviated from the plan, using supposed to and was going to to report what should have happened.",
      "Produce the finished incident report in correct written maritime English."
    ],
    deliverable: "A written incident report with a past-perfect chronology, a causal analysis, and a statement of the deviation from the plan.",
    assessmentCriteria: [
      "The chronology correctly uses the past perfect to order events.",
      "The causes are expressed with correct causal linking expressions.",
      "The deviation from plan is correctly reported with supposed to and was going to.",
      "The report is written in correct maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "ING531",
    subjectName: "Inglés Marítimo V",
    subjectId: "pn-s5-ingles-maritimo-v",
    unit: "Discurso de mando",
    topic: "Debriefing de la emergencia integrando el debriefing del equipo, el pasado perfecto y el reporte de la desviación del plan",
    week: 16,
    taskId: "pn-ing531-w16-debrief-team-after-emergency",
    taskTitle: "Debrief The Bridge Team After The Emergency",
    scenario: "After an emergency manoeuvre the bridge team stands down and you must run the debrief. You have to reconstruct what happened, draw out where the response diverged from the plan, and turn the lessons into clear guidance, all as a spoken debrief.",
    instructions: [
      "Reconstruct the sequence of the emergency with the team, using the past perfect to establish the order of events.",
      "Draw out where the response deviated from what was supposed to happen and why.",
      "Turn the findings into clear lessons and revised guidance for the team.",
      "Deliver the debrief and its conclusions to the team in correct spoken maritime English and SMCP."
    ],
    deliverable: "A conducted team debrief with a reconstructed sequence, the deviations identified, and the lessons and revised guidance.",
    assessmentCriteria: [
      "The sequence is reconstructed correctly using the past perfect.",
      "The deviations from the plan are correctly drawn out.",
      "The lessons and revised guidance are clear and actionable.",
      "The debrief is delivered in correct maritime English and SMCP."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "ING531",
    subjectName: "Inglés Marítimo V",
    subjectId: "pn-s5-ingles-maritimo-v",
    unit: "Pasivo con modal verbs y verbo to get",
    topic: "Redacción de consignas integrando la voz pasiva con modales, la voz pasiva de procedimientos y los modales normativos",
    week: 17,
    taskId: "pn-ing531-w17-draft-standing-orders-set",
    taskTitle: "Draft The Master's Standing Orders",
    scenario: "The Master asks you to draft the night standing orders for the bridge watch. These must read as impersonal, unambiguous procedures and rules, using the passive voice and modals correctly so every officer reads the same obligation.",
    instructions: [
      "Draft the procedures as impersonal instructions using the passive voice for standing actions.",
      "Express the obligations, prohibitions and permissions of the standing orders using the correct modal verbs, including the passive with modals.",
      "Write the reporting rules using the passive with to get for what must be done and reported to the Master.",
      "Produce the finished standing orders in correct written maritime English."
    ],
    deliverable: "A drafted set of night standing orders written impersonally in the passive with modals.",
    assessmentCriteria: [
      "The procedures are correctly written in the passive voice.",
      "Obligations and prohibitions use the correct modals, including the passive with modals.",
      "The reporting rules are correctly expressed with the passive and to get.",
      "The standing orders are written in correct maritime English."
    ],
    xp: 30,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "ING531",
    subjectName: "Inglés Marítimo V",
    subjectId: "pn-s5-ingles-maritimo-v",
    unit: "Comunicación radiotelefónica",
    topic: "Síntesis de la comunicación del semestre para el informe integrado de comunicaciones al Capitán",
    week: 18,
    taskId: "pn-ing531-w18-deliver-integrated-comms-brief",
    taskTitle: "Deliver The Integrated Communications Brief",
    scenario: "At the pre-departure conference you must deliver the communications brief for the voyage, pulling together the semester's command language: the radiotelephony procedures, the bridge team briefing routine, and the reporting and standing-orders regime, all in correct English.",
    instructions: [
      "Summarise the radiotelephony procedures for distress, urgency and safety traffic the ship will use on the voyage.",
      "Present the bridge team briefing and debriefing routine and the command language it relies on.",
      "State the incident-reporting and standing-orders regime and the written English standard expected.",
      "Deliver the full communications brief to the Master in professional maritime English and SMCP."
    ],
    deliverable: "A communications brief covering the radiotelephony procedures, the briefing routine, and the reporting and standing-orders regime.",
    assessmentCriteria: [
      "The radiotelephony procedures are summarised accurately.",
      "The briefing and debriefing routine and its language are correctly presented.",
      "The reporting and standing-orders regime is stated clearly.",
      "The brief is delivered in professional maritime English and SMCP."
    ],
    xp: 30,
    estimatedTime: "45 min",
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
    subjectCode: "PMR536",
    subjectName: "Prácticas Marineras V",
    subjectId: "pn-s5-practicas-marineras-v",
    unit: "Maniobras a son de mar",
    topic: "Procedimientos de trincado y aseguramiento a son de mar",
    week: 9,
    taskId: "pn-pmr536-w09-securing-for-sea",
    taskTitle: "Secure The Deck For Sea",
    scenario: "A heavy-weather passage lies ahead and the deck must be made ready to take the sea. The officer asks the cadet to secure the deck gear and openings for sea, the seamanship of preparing before the weather arrives.",
    instructions: [
      "State the principle: everything on deck that can move must be lashed so it cannot break loose when the ship rolls and pitches, because gear adrift in a seaway is a danger to the crew and to the ship.",
      "Secure the movable gear: derricks and cranes lowered and lashed in their cradles, the anchors secured with the additional lashings and the spurling pipe covered, and stores, drums and portable equipment lashed down.",
      "Close the openings: weathertight doors, hatches, vents and ports secured, so that green water on deck cannot find its way below.",
      "Report the deck secured for sea to the bridge, in clear maritime English, with the heavy-weather deck actions left to the bridge and the meteorology to Meteorologia II."
    ],
    deliverable: "A note in English securing the deck for sea: the principle (everything that can move is lashed so nothing breaks loose in a seaway), the movable gear (derricks/cranes lashed in cradles, anchors additionally secured and the spurling pipe covered, stores and drums lashed), and the openings closed weathertight, with the secured-for-sea report to the bridge.",
    assessmentCriteria: [
      "The principle is correct (loose gear in a seaway endangers the crew and the ship, so all is lashed).",
      "The movable gear is correctly secured (derricks/cranes in cradles, anchors additionally lashed and spurling pipe covered, stores and drums lashed).",
      "The weathertight openings are correctly closed (doors, hatches, vents, ports).",
      "The deck-secured-for-sea report is made to the bridge, in clear maritime English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "PMR536",
    subjectName: "Prácticas Marineras V",
    subjectId: "pn-s5-practicas-marineras-v",
    unit: "Pinturas y solventes",
    topic: "Preparación de superficies y aplicación de minio y esmalte",
    week: 10,
    taskId: "pn-pmr536-w10-surface-preparation-painting",
    taskTitle: "Prepare And Paint A Steel Surface",
    scenario: "A patch of the deck is rusting and must be treated before it spreads. The officer asks the cadet to prepare the steel and paint it correctly, the everyday defence against the corrosion the ship never stops fighting.",
    instructions: [
      "Prepare the surface: chip and scrape (piquetas y rasquetas) or wire-brush the rust and loose scale back to sound metal, then clean and dry it, because paint over rust or damp simply lifts and the corrosion goes on underneath.",
      "Prime the bare steel: apply the primer (red lead / minio) that keys to the metal and inhibits corrosion, giving the finish coats something to hold and the steel its first protection.",
      "Apply the finish: build up the enamel (esmalte) over the cured primer in the right conditions (not in rain, spray or high humidity), so the coating cures properly and seals the surface.",
      "Report the preparation and coating sequence you followed, in clear maritime English, referencing the galvanic corrosion of Quimica week 2 without re-teaching it."
    ],
    deliverable: "A note in English preparing and painting a steel surface: surface preparation (chip/scrape or wire-brush to sound metal, clean and dry, because paint over rust or damp lifts), priming the bare steel with red lead, and building the enamel finish over the cured primer in the right conditions, referencing the galvanic corrosion of Quimica week 2.",
    assessmentCriteria: [
      "The surface preparation is correct (rust and loose scale removed to sound metal, cleaned and dried, because paint over rust or damp fails).",
      "Priming is correct (red lead/primer keys to the metal and inhibits corrosion before the finish coats).",
      "The finish is applied correctly (enamel over cured primer, avoiding rain, spray and high humidity so it cures).",
      "The sequence is reported, referencing Quimica week 2, in clear maritime English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "PMR536",
    subjectName: "Prácticas Marineras V",
    subjectId: "pn-s5-practicas-marineras-v",
    unit: "Tapa escotillas",
    topic: "Apertura, cierre y estanqueidad de las tapas de escotilla",
    week: 11,
    taskId: "pn-pmr536-w11-hatch-covers",
    taskTitle: "Open And Close Weathertight Hatch Covers",
    scenario: "Before sailing, the cargo hold hatches must be closed and made weathertight, and the cadet must know that the hatch cover is what keeps the sea out of the hold. The officer asks the cadet to operate and secure the hatch covers safely.",
    instructions: [
      "Describe the safe operation: check the operating area is clear of people and obstructions and that the cover ways and wheels are clear, and open or close the covers under control, since a hatch cover is a heavy powered structure that can crush.",
      "Secure for weathertightness: the cover is closed home, the cleats and dogs set up all round, and the rubber gaskets bear evenly on the coaming compression bar so that no water can enter under a boarding sea.",
      "Check the sealing: inspect the gaskets and drainage channels, because a perished gasket or a blocked drain lets water into the hold and damages the cargo, and this is the point of the whole operation.",
      "Report the hatches closed and weathertight to the bridge, in clear maritime English, with the ship's structural stresses left to Teoria del Buque."
    ],
    deliverable: "A note in English operating hatch covers: safe operation (area and ways clear, the cover a heavy powered structure that can crush), securing for weathertightness (closed home, cleats and dogs set up, gaskets bearing evenly on the compression bar), and checking the sealing (gaskets and drains, because a perished gasket or blocked drain floods the hold), with the hatches-secured report to the bridge.",
    assessmentCriteria: [
      "The safe operation is correct (area and ways clear, the cover a heavy powered structure handled under control).",
      "Securing for weathertightness is correct (closed home, cleats/dogs set up, gaskets bearing evenly on the compression bar).",
      "The sealing check is correct (gaskets and drainage channels; a perished gasket or blocked drain floods the hold).",
      "The hatches-secured-and-weathertight report is made to the bridge, in clear maritime English."
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
    unit: "Anclas y cadenas",
    topic: "Amarre a boya y desentanglado del ancla",
    week: 12,
    taskId: "pn-pmr536-w12-buoy-mooring-foul-anchor",
    taskTitle: "Moor To A Buoy And Clear A Foul Anchor",
    scenario: "The vessel is to secure to a mooring buoy in the river, and there is a risk the anchor comes up foul. As the closing task of the subject, the officer asks the cadet to run the buoy-mooring operation on deck and to clear a foul anchor, drawing the anchor and cable work of the subject together.",
    instructions: [
      "Prepare the buoy mooring: send a boat or the shackling party to the buoy, pass the ship's cable or a mooring wire through the ring of the buoy, and shackle on, so the ship rides to the buoy on the ground chain of the mooring instead of her own anchor.",
      "State the deck coordination: the forecastle works with the bridge and the boat, passing the heaving line and messenger to the buoy first, then the heavy cable, all under clear station-to-bridge communication (building on week 8).",
      "Clear a foul anchor: when the anchor comes up with a turn of its own cable, a wire or a ground chain around it, take the weight off with a rope's-end or a wire passed under the fouling, then work the anchor clear, never letting the fouled anchor hang on the crown where it can drop.",
      "Report the buoy secured or the anchor cleared to the bridge, in clear maritime English, integrating the anchor and cable work of the subject."
    ],
    deliverable: "A note in English mooring to a buoy and clearing a foul anchor: preparing the buoy mooring (cable or wire through the ring and shackled on so the ship rides to the buoy), the deck coordination (messenger then heavy cable under station-to-bridge communication from week 8), and clearing a foul anchor (take the weight with a rope or wire under the fouling and work it clear), integrating the subject's anchor and cable work.",
    assessmentCriteria: [
      "The buoy mooring is correct (cable or mooring wire through the buoy ring and shackled on so the ship rides to the buoy).",
      "The deck coordination is sound (messenger/heaving line then heavy cable, clear station-to-bridge communication from week 8).",
      "Clearing a foul anchor is correct (take the weight with a rope or wire under the fouling and work the anchor clear, not letting it hang).",
      "The buoy-secured or anchor-cleared report is made to the bridge, integrating the subject, in clear maritime English."
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
    unit: "Faena de puerto",
    topic: "Faena integrada de llegada integrando los cambios de amarre, la estación de amarre y la maniobra de fondeo",
    week: 13,
    taskId: "pn-pmr536-w13-run-integrated-arrival-operation",
    taskTitle: "Run The Integrated Arrival Deck Operation",
    scenario: "The ship is arriving at Tampico and you run the deck for the whole arrival: standing by the anchor, then taking up the mooring stations and working the lines to berth the vessel. You must sequence the entire fo'c'sle and aft operation.",
    instructions: [
      "Prepare the anchor and the mooring stations for arrival and brief the deck party on the sequence of the operation.",
      "Work the mooring lines through the berthing, ordering the leads and the make-fast in the correct order for the wind and current.",
      "Keep the anchor ready to let go as a contingency throughout the approach and confirm when it is secured on completion.",
      "Report the readiness of the stations and the progress of the operation to the bridge in correct maritime English and SMCP."
    ],
    deliverable: "An arrival deck operation record with the station preparation, the mooring sequence, and the anchor contingency.",
    assessmentCriteria: [
      "The anchor and mooring stations are correctly prepared and briefed.",
      "The mooring lines are worked in the correct sequence for the conditions.",
      "The anchor contingency is correctly maintained and secured.",
      "The reports to the bridge use correct maritime English and SMCP."
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
    unit: "Maniobras a son de mar",
    topic: "Aseguramiento para la mar integrando el trincado a son de mar, las tapas de escotilla y la inspección del aparejo de amarre",
    week: 14,
    taskId: "pn-pmr536-w14-secure-deck-for-heavy-weather",
    taskTitle: "Secure The Deck For Heavy Weather",
    scenario: "Heavy weather and a building sea-state are forecast for the passage. You must secure the whole deck for sea: lash and secure movable gear, close and confirm the weathertight hatch covers, and stow the mooring gear so nothing works loose in the seaway.",
    instructions: [
      "Lash and secure the deck gear for sea, applying the correct sea-fastening for the expected sea-state.",
      "Close the hatch covers and confirm their weathertight integrity against the coming weather.",
      "Inspect and stow the mooring gear so it is secure and protected, discarding any gear unfit to remain rigged.",
      "Report the deck secured for sea to the chief officer in correct maritime English and SMCP."
    ],
    deliverable: "A deck-secured-for-sea record covering the sea-fastening, the hatch-cover closure, and the mooring gear stowage.",
    assessmentCriteria: [
      "The deck gear is sea-fastened correctly for the expected sea-state.",
      "The hatch covers are closed and their weathertight integrity confirmed.",
      "The mooring gear is inspected, stowed and any unfit gear discarded.",
      "The deck-secured report uses correct maritime English and SMCP."
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
    topic: "Faena de carga integrando la operación de grúas, el eslingado y la zona de seguridad y la señalización",
    week: 15,
    taskId: "pn-pmr536-w15-run-full-lifting-operation",
    taskTitle: "Run The Full Cargo Lifting Operation",
    scenario: "Cargo is to be worked with the ship's crane at the berth. You must run the complete lifting operation: rig and check the crane, sling the load correctly, control the safety zone, and direct the lift by standard signals.",
    instructions: [
      "Check and rig the crane for the lift and confirm the load is within its safe working limits.",
      "Sling the load correctly for its weight and shape and set and enforce the safety zone under the load.",
      "Direct the lift with the correct hand and radio signals, keeping the load and the deck party clear.",
      "Report the readiness and completion of the lifting operation to the officer in correct maritime English and SMCP."
    ],
    deliverable: "A lifting operation record with the crane rig-and-check, the slinging and safety zone, and the signalling used.",
    assessmentCriteria: [
      "The crane is correctly rigged and the load confirmed within safe working limits.",
      "The load is slung correctly and the safety zone is enforced.",
      "The lift is directed with correct signals keeping personnel clear.",
      "The operation reports use correct maritime English and SMCP."
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
    unit: "Anclas y cadenas",
    topic: "Respuesta al ancla enredada integrando el desentanglado del ancla, el marcado de la cadena y el amarre a boya",
    week: 16,
    taskId: "pn-pmr536-w16-clear-a-foul-anchor",
    taskTitle: "Clear A Foul Anchor In The Roads",
    scenario: "Heaving up in the Tampico roads, the anchor comes up foul, fouled by an obstruction on the seabed, and the ship must shift to a mooring buoy once cleared. You must clear the foul anchor and then take the ship to the buoy.",
    instructions: [
      "Diagnose the foul anchor from the cable markings and the strain, and read the chain marking to confirm how much cable is out.",
      "Work the anchor clear of the obstruction using the correct clearing manoeuvre, keeping the deck party safe.",
      "Once cleared, take up and secure the mooring to the buoy, passing and making fast the buoy lines correctly.",
      "Report the foul anchor, the clearing action and the buoy moor to the bridge in correct maritime English and SMCP."
    ],
    deliverable: "A foul-anchor response record with the diagnosis, the clearing manoeuvre, and the buoy mooring made fast.",
    assessmentCriteria: [
      "The foul anchor is correctly diagnosed from the cable markings and strain.",
      "The clearing manoeuvre frees the anchor safely.",
      "The buoy mooring is passed and made fast correctly.",
      "The reports use correct maritime English and SMCP."
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
    topic: "Auditoría del equipo de cubierta integrando la inspección del aparejo de amarre, las tapas de escotilla y la preparación de superficies",
    week: 17,
    taskId: "pn-pmr536-w17-audit-deck-gear-readiness",
    taskTitle: "Audit The Deck Gear Before Departure",
    scenario: "Before sailing you must certify that the deck is ready for sea. You audit the mooring gear, the hatch covers and the deck condition, discarding what is unfit and confirming what protects the ship and cargo against the voyage.",
    instructions: [
      "Inspect the mooring gear and rigging, discarding any line or fitting outside its retirement criteria and recording what remains serviceable.",
      "Verify the hatch covers open, close and seal weathertight, and confirm their securing arrangements.",
      "Check the deck surface preparation and coating condition, noting where corrosion protection has failed and must be renewed.",
      "Issue a deck readiness statement to the chief officer in correct maritime English and SMCP."
    ],
    deliverable: "A deck readiness statement covering the mooring gear inspection, the hatch-cover check, and the surface and coating condition.",
    assessmentCriteria: [
      "The mooring gear is inspected against correct retirement criteria.",
      "The hatch covers' operation and weathertight seal are verified.",
      "The deck surface and coating condition are correctly assessed.",
      "The readiness statement uses correct maritime English and SMCP."
    ],
    xp: 30,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "PMR536",
    subjectName: "Prácticas Marineras V",
    subjectId: "pn-s5-practicas-marineras-v",
    unit: "Faena de puerto",
    topic: "Síntesis de la práctica marinera del semestre para el traspaso de la responsabilidad de cubierta",
    week: 18,
    taskId: "pn-pmr536-w18-hand-over-deck-responsibility",
    taskTitle: "Hand Over The Deck For The Departure Operation",
    scenario: "You are handing over responsibility for the deck to the relieving officer before the departure operation. Your relief must inherit the full state of the deck: the mooring plan, the gear condition, the cargo securing, and the readiness of the stations.",
    instructions: [
      "Summarise the mooring plan and the state of the stations for the departure operation.",
      "Present the condition of the deck gear, the hatch covers and the sea-fastening ready for the passage.",
      "State the outstanding deck work and any gear withdrawn from service that the relief must account for.",
      "Deliver the full deck handover to the relieving officer in professional maritime English and SMCP."
    ],
    deliverable: "A deck handover brief covering the mooring plan, the gear and securing condition, and the outstanding work.",
    assessmentCriteria: [
      "The mooring plan and station state are summarised accurately.",
      "The gear, hatch-cover and sea-fastening condition are correctly presented.",
      "The outstanding work and withdrawn gear are clearly stated.",
      "The handover uses professional maritime English and SMCP."
    ],
    xp: 30,
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
    subjectCode: "C0011",
    subjectName: "Educación Física V",
    subjectId: "pn-s5-educacion-fisica-v",
    unit: "Percepción y coordinación motriz",
    topic: "Equilibrio y ubicación espacial en cubierta con movimiento",
    week: 9,
    taskId: "pn-c0011v-w09-balance-moving-deck",
    taskTitle: "Keep Your Balance On A Moving Deck",
    scenario: "The ship is rolling in a seaway and the deck will not stay still under the cadet's feet. The training officer asks the cadet to explain how to keep balance and move safely on a moving deck, since a fall at sea is one of the commonest injuries.",
    instructions: [
      "Explain how balance works and how the ship defeats it: balance relies on the inner ear, the eyes and the feel of the feet, and a rolling deck feeds them conflicting signals, so the body must be trained to expect the movement.",
      "State the practical rules of moving on a live deck: keep a low centre of gravity and a wide base, one hand for the ship and one for yourself, and move with the roll rather than against it, timing steps to the ship's rhythm.",
      "Explain anticipation as a trainable skill: reading the sea and the ship's motion so the body braces before the roll, not after, which is what keeps the experienced seafarer on their feet.",
      "Report the balance rules in clear English using correct terminology, with heavy-weather deck actions left to the deck subjects."
    ],
    deliverable: "A note in English on balance on a moving deck: how balance works (inner ear, eyes, feet) and how a rolling deck defeats it, the practical rules (low centre of gravity, wide base, one hand for the ship, move with the roll), and anticipation as a trainable skill (bracing before the roll), for moving safely at sea.",
    assessmentCriteria: [
      "How balance works and how the moving deck defeats it are correctly explained (conflicting signals from inner ear, eyes and feet).",
      "The practical rules are sound (low centre of gravity, wide base, one hand for the ship, moving with the roll).",
      "Anticipation is correctly presented as a trainable skill (bracing before the roll, not after).",
      "The rules are reported clearly with correct terminology, the deck actions left to the deck subjects."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0011",
    subjectName: "Educación Física V",
    subjectId: "pn-s5-educacion-fisica-v",
    unit: "Percepción y coordinación motriz",
    topic: "Coordinación motriz y lateralidad en las tareas de cubierta",
    week: 10,
    taskId: "pn-c0011v-w10-coordination-laterality",
    taskTitle: "Train Coordination And Laterality For Deck Work",
    scenario: "Many deck tasks demand two hands doing different things and the ability to work equally to either side. The training officer asks the cadet to explain how coordination and laterality are trained and why they matter for the work on deck.",
    instructions: [
      "Define hand-eye coordination and why deck work needs it: heaving a line to a bollard, working a winch while watching the line, and handling tools aloft all demand the eye and the hands acting together accurately.",
      "Explain laterality and its value: being able to work to both the left and the right, and with either hand, matters because a task cannot always be approached from the convenient side, and a two-sided seafarer is safer and more useful.",
      "Describe how both are trained: repeated practice of the movement, drills that use both sides, and ball or coordination games that sharpen timing and reaction.",
      "Report how you would train coordination and laterality for deck work, in clear English using correct terminology."
    ],
    deliverable: "A note in English on coordination and laterality for deck work: hand-eye coordination and the deck tasks that need it (heaving lines, working winches, tools aloft), laterality and its value (working to both sides and with either hand), and how both are trained (repetition, two-sided drills, coordination games).",
    assessmentCriteria: [
      "Hand-eye coordination is correctly defined with relevant deck tasks.",
      "Laterality is correctly explained and its safety and utility value stated.",
      "The training methods are practical (repetition, two-sided drills, coordination games).",
      "The account is reported clearly with correct terminology."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0011",
    subjectName: "Educación Física V",
    subjectId: "pn-s5-educacion-fisica-v",
    unit: "Desarrollo físico integral",
    topic: "Los deportes de equipo como entrenamiento de la coordinación de la tripulación",
    week: 11,
    taskId: "pn-c0011v-w11-team-sport-crew-coordination",
    taskTitle: "Use Team Sport To Build Crew Coordination",
    scenario: "The ship organises deck games in port, and they are more than recreation. The training officer asks the cadet to explain how a team sport trains the very qualities a crew needs, treating the game as training rather than pastime.",
    instructions: [
      "Name the physical qualities a team sport (football, volleyball, basketball) develops: cardiovascular fitness, agility, coordination and spatial awareness, all trained at once and enjoyably.",
      "Explain the transferable teamwork it trains: communication under pressure, reading the movement of others, playing a position within a whole, and accepting a captain's call, which are the same qualities a watch or a mooring party needs.",
      "Explain the value for crew cohesion: shared sport builds the trust and the easy communication between crew members that carry over into the working teams and into morale on a long voyage.",
      "Report how a team sport serves as training for the crew, in clear English using correct terminology, referencing the teamwork of Liderazgo without re-teaching it."
    ],
    deliverable: "A note in English on team sport as training: the physical qualities it develops (cardiovascular fitness, agility, coordination, spatial awareness), the transferable teamwork (communication under pressure, reading others, playing a position, accepting the captain's call), and the value for crew cohesion and morale, referencing the teamwork of Liderazgo.",
    assessmentCriteria: [
      "The physical qualities developed by team sport are correctly named.",
      "The transferable teamwork qualities are sound and tied to the watch or mooring party.",
      "The value for crew cohesion and morale is explained.",
      "The account is reported clearly with correct terminology, referencing Liderazgo teamwork."
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
    unit: "Condición física",
    topic: "Vigor y potencia para las tareas físicas de emergencia",
    week: 12,
    taskId: "pn-c0011v-w12-power-emergency-tasks",
    taskTitle: "Build The Power For Emergency Physical Tasks",
    scenario: "An emergency can demand a sudden, hard physical effort with no warning: dragging an injured shipmate clear, closing a heavy watertight door against a list, or launching survival gear. As the closing task of the subject, the training officer asks the cadet to explain the power such tasks demand and how to build it safely.",
    instructions: [
      "Distinguish power (vigor) from endurance: power is the ability to produce a large force quickly for a short, decisive effort, which is exactly what an emergency physical task demands, as opposed to the sustained effort of week 5.",
      "Name the emergency tasks that demand it and integrate the semester: dragging a casualty (the rescue of week 7), closing a watertight door or freeing jammed gear (the strength of week 1), and doing it with the balance of a moving deck (week 9).",
      "Explain how power is built safely: functional strength work with correct technique and the injury-prevention discipline of week 6 (warm-up, progression, rest), so the training itself does not cause the injury.",
      "Report how you would build and apply this power, and the safe-technique limits, in clear maritime English."
    ],
    deliverable: "A note in English on power for emergency tasks: power (vigor) distinguished from endurance (a large force produced quickly, versus the sustained effort of week 5), the emergency tasks that demand it drawing together the rescue of week 7, the strength of week 1 and the balance of week 9, and building it safely under the injury-prevention discipline of week 6.",
    assessmentCriteria: [
      "Power is correctly distinguished from endurance (a quick, large, decisive force versus sustained effort from week 5).",
      "The emergency tasks are relevant and integrate the semester (rescue from week 7, strength from week 1, balance from week 9).",
      "Building power safely is sound (functional strength, correct technique, injury-prevention discipline of week 6).",
      "The application and the safe-technique limits are reported, in clear maritime English."
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
    topic: "Plan de entrenamiento del período de mar integrando la fuerza muscular, el acondicionamiento cardiovascular por intensidad percibida y la prevención de lesiones",
    week: 13,
    taskId: "pn-c0011v-w13-build-sea-period-training-plan",
    taskTitle: "Build The Sea-Period Training Plan",
    scenario: "You are about to join a ship for a long sea period with limited space and equipment. You must build a personal training plan that keeps you fit for heavy deck work throughout the voyage without causing injury.",
    instructions: [
      "Set the strength component of the plan around the muscular demands of heavy deck work aboard.",
      "Program the cardiovascular training by perceived effort so it can be run without gym equipment at sea.",
      "Build in the injury-prevention and recovery measures that keep you fit across the whole sea period.",
      "Present the sea-period training plan and its goals in correct maritime English."
    ],
    deliverable: "A personal sea-period training plan integrating strength, cardiovascular and injury-prevention components.",
    assessmentCriteria: [
      "The strength component is matched to the demands of heavy deck work.",
      "The cardiovascular training is correctly programmed by perceived effort.",
      "Injury-prevention and recovery measures are built into the plan.",
      "The plan is presented in correct maritime English."
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
    unit: "Percepción y coordinación motriz",
    topic: "Trabajo en cubierta con movimiento integrando el equilibrio y la ubicación espacial, la coordinación motriz y la lateralidad",
    week: 14,
    taskId: "pn-c0011v-w14-train-for-a-moving-deck",
    taskTitle: "Train To Work Safely On A Moving Deck",
    scenario: "In a seaway the deck pitches and rolls and you must keep your balance and coordination while carrying out tasks. You must design and run a training routine that prepares you to move and work safely on a moving deck.",
    instructions: [
      "Design balance and spatial-orientation drills that reproduce keeping your footing on a pitching, rolling deck.",
      "Add coordination and laterality drills for the two-handed deck tasks done while the deck moves.",
      "Set the progression that builds from calm-deck practice to working in a realistic sea-state.",
      "Explain the training routine and its purpose in correct maritime English."
    ],
    deliverable: "A moving-deck training routine integrating balance, coordination and laterality drills with a progression.",
    assessmentCriteria: [
      "The balance drills realistically reproduce a moving deck.",
      "The coordination and laterality drills match real two-handed deck tasks.",
      "The progression sensibly builds toward a realistic sea-state.",
      "The routine is explained in correct maritime English."
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
    unit: "Desarrollo físico integral",
    topic: "Coordinación de la tripulación integrando los deportes de equipo, el trabajo físico pesado de cubierta y la concentración sostenida",
    week: 15,
    taskId: "pn-c0011v-w15-run-crew-coordination-session",
    taskTitle: "Run A Crew Coordination Fitness Session",
    scenario: "As the fittest member of the watch you are asked to run a physical session for the crew that builds the coordination and stamina a team needs to work together through a long deck operation.",
    instructions: [
      "Plan a team-sport-based session that trains crew coordination and cooperative movement.",
      "Build in the heavy physical work and the sustained concentration a long deck operation demands.",
      "Set the intensity and rest so the whole crew, at mixed fitness levels, can complete the session safely.",
      "Lead the session and brief the crew on its purpose in correct maritime English."
    ],
    deliverable: "A crew coordination fitness session plan integrating team sport, heavy work and sustained concentration.",
    assessmentCriteria: [
      "The team-sport session genuinely trains crew coordination.",
      "Heavy physical work and sustained concentration are built in.",
      "Intensity and rest are set so a mixed-fitness crew can complete it safely.",
      "The session is led and briefed in correct maritime English."
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
    unit: "Condición física",
    topic: "Respuesta física a la emergencia integrando el vigor y la potencia, la prevención de lesiones y el rescate en el agua",
    week: 16,
    taskId: "pn-c0011v-w16-perform-emergency-physical-response",
    taskTitle: "Perform The Emergency Physical Response",
    scenario: "A crew emergency demands sudden heavy physical effort: dragging gear, carrying a casualty, and a water rescue. You must respond with the power the emergency needs while protecting yourself and the casualty from injury.",
    instructions: [
      "Apply the correct technique to the heavy explosive tasks of the emergency so you deliver power without injuring yourself.",
      "Carry out the basic water rescue safely, keeping control of the casualty and your own buoyancy.",
      "Manage your effort and recovery so you can sustain the response until the emergency is over.",
      "Report your actions and the casualty's condition to the officer in correct maritime English."
    ],
    deliverable: "An emergency physical response record covering the heavy-task technique, the water rescue, and the effort management.",
    assessmentCriteria: [
      "The heavy explosive tasks are performed with correct, injury-safe technique.",
      "The water rescue is carried out safely and under control.",
      "Effort and recovery are managed to sustain the response.",
      "The report to the officer is delivered in correct maritime English."
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
    topic: "Auditoría de la aptitud física integrando el plan del período de mar, el acondicionamiento cardiovascular y la prevención de lesiones",
    week: 17,
    taskId: "pn-c0011v-w17-audit-personal-fitness-readiness",
    taskTitle: "Audit Your Fitness Readiness For Sea Duty",
    scenario: "Before joining the ship you must certify your own fitness for sea duty. You audit your strength, cardiovascular condition and injury status against the demands of the role and set the plan to close any gap.",
    instructions: [
      "Assess your strength and cardiovascular condition against the physical demands of watchkeeping and heavy deck work.",
      "Identify any injury risk or physical limitation and the corrective conditioning it needs.",
      "Set the maintenance plan that keeps you fit for duty across the whole tour, with measurable checkpoints.",
      "Present your fitness readiness assessment to the officer in correct maritime English."
    ],
    deliverable: "A fitness readiness assessment with the condition audit, the injury-risk correction, and the maintenance plan.",
    assessmentCriteria: [
      "Strength and cardiovascular condition are honestly assessed against the demands.",
      "Injury risks and limitations are identified with corrective conditioning.",
      "The maintenance plan has measurable checkpoints across the tour.",
      "The assessment is presented in correct maritime English."
    ],
    xp: 30,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0011",
    subjectName: "Educación Física V",
    subjectId: "pn-s5-educacion-fisica-v",
    unit: "Desarrollo físico integral",
    topic: "Síntesis de la preparación física del semestre para el informe de aptitud de la tripulación",
    week: 18,
    taskId: "pn-c0011v-w18-deliver-crew-fitness-brief",
    taskTitle: "Deliver The Crew Fitness Readiness Brief",
    scenario: "At the end of the semester you must brief the officer on the fitness readiness of the deck team for the voyage, pulling together the training regime, the moving-deck and emergency readiness, and the injury-prevention culture built over the term.",
    instructions: [
      "Summarise the training regime that keeps the deck team fit for the physical demands of the voyage.",
      "Present the team's readiness for a moving deck and for the sudden effort of an emergency response.",
      "State the injury-prevention practices and the fitness maintenance the team will follow at sea.",
      "Deliver the crew fitness readiness brief to the officer in professional maritime English."
    ],
    deliverable: "A crew fitness readiness brief covering the training regime, the moving-deck and emergency readiness, and injury prevention.",
    assessmentCriteria: [
      "The training regime is summarised accurately for the voyage demands.",
      "The moving-deck and emergency readiness are correctly presented.",
      "The injury-prevention and maintenance practices are stated clearly.",
      "The brief is delivered in professional maritime English."
    ],
    xp: 30,
    estimatedTime: "45 min",
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
    subjectCode: "C0104",
    subjectName: "Ética Profesional",
    subjectId: "pn-s5-etica-profesional",
    unit: "Ética y Moral",
    topic: "Diferencia entre Ética y Moral en la tripulación multinacional",
    week: 9,
    taskId: "pn-c0104-w09-ethics-versus-morals",
    taskTitle: "Distinguish Ethics From Morals On A Multinational Ship",
    scenario: "A ship's company gathers seafarers from many countries, each raised on different moral customs. The officer asks the cadet to distinguish ethics from morals and to explain why a shared professional ethic is what holds such a crew together.",
    instructions: [
      "Draw the distinction cleanly: morals are the inherited rules of conduct a person receives from their culture, religion and upbringing, while ethics is the reasoned reflection that examines those rules and asks what is right when they are tested or when they conflict.",
      "Show why it matters at sea: on a multinational ship the crew arrive with different moral customs, so the ship cannot run on any one crew member's morals; it runs on a shared professional ethic that all accept.",
      "Give a worked case: a practice that is customary and accepted in one seafarer's home culture but wrong by the profession's ethic (for example a small facilitation payment, or a differing view of timekeeping or of speaking up to a senior), and reason it through by the professional ethic.",
      "Report the distinction and the case in clear maritime English."
    ],
    deliverable: "A note in English distinguishing ethics from morals: morals as the inherited cultural rules and ethics as the reasoned reflection on them, why a multinational crew runs on a shared professional ethic rather than any one crew's morals, and a worked case where a customary practice is tested against the profession's ethic.",
    assessmentCriteria: [
      "The distinction is clean and correct (morals as inherited cultural rules, ethics as reasoned reflection on them).",
      "The reason it matters at sea is sound (a multinational crew needs a shared professional ethic, not one crew's morals).",
      "The worked case genuinely tests a customary moral practice against the professional ethic.",
      "The distinction and case are reported clearly, in clear maritime English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0104",
    subjectName: "Ética Profesional",
    subjectId: "pn-s5-etica-profesional",
    unit: "El juicio",
    topic: "Tipos de juicio y de razonamiento: el hecho y el juicio de valor",
    week: 10,
    taskId: "pn-c0104-w10-fact-versus-value-judgement",
    taskTitle: "Separate Fact From Value Judgement In A Report",
    scenario: "A report that mixes what happened with what the writer felt about it is worth little to the next reader. The officer asks the cadet to separate statements of fact from value judgements and to reason soundly, the discipline of judgement behind the ethical method of week 5.",
    instructions: [
      "Distinguish the two: a statement of FACT can in principle be checked and verified ('the CPA was 0.3 miles'), while a value JUDGEMENT expresses an evaluation ('the approach was reckless'), and both belong in a report but must not be disguised as each other.",
      "Distinguish the kinds of reasoning: deductive reasoning draws a certain conclusion from given rules ('the rule requires this, this case is that, therefore it applies'), while inductive reasoning infers a probable conclusion from evidence ('the readings all point to a leak'), and each is used for its proper purpose.",
      "Apply it: take an incident account, separate its verifiable facts from its value judgements, and state which reasoning supports the conclusion, so the judgement rests on evidence rather than impression.",
      "Report the cleaned-up account in clear maritime English."
    ],
    deliverable: "A note in English separating fact from value judgement in an incident account (verifiable fact versus evaluation, both present but not disguised as each other), distinguishing deductive from inductive reasoning, and showing the judgement resting on evidence, as the discipline behind the ethical method of week 5.",
    assessmentCriteria: [
      "Fact and value judgement are correctly distinguished (verifiable statement versus evaluation) and both kept without disguising one as the other.",
      "Deductive and inductive reasoning are correctly distinguished and each used for its purpose.",
      "The account is worked so the judgement rests on evidence rather than impression.",
      "The cleaned-up account is reported clearly, linked to the week 5 method, in clear maritime English."
    ],
    xp: 20,
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
    topic: "El contexto laboral y la dignidad de la Gente de Mar",
    week: 11,
    taskId: "pn-c0104-w11-seafarer-labour-context",
    taskTitle: "Weigh The Seafarer's Labour Rights And Dignity",
    scenario: "Behind the duties a seafarer owes lies the question of what a seafarer is owed. As an advanced task, the officer asks the cadet to explain the labour context of the Gente de Mar and the ethics of how seafarers are treated.",
    instructions: [
      "State the seafarer's basic labour rights as an ethical floor: a safe workplace, decent living conditions, fair terms and regular payment of wages, adequate rest, and repatriation, the conditions that the Maritime Labour Convention sets as a right and not a favour.",
      "Explain the vulnerability that makes this an ethical matter: a seafarer far from home, isolated aboard and dependent on the company, can be exploited or abandoned, so fair treatment is a duty owed to a person who cannot easily defend it.",
      "Turn it to the officer's own responsibility: a future officer sits on both sides, owing duties to the ship and owing fair treatment to the ratings under them, so the ethic of dignity runs downward as well as upward.",
      "Report the labour context and the officer's responsibility in clear maritime English, treating the fatigue question of week 7 as a reference, not re-teaching it."
    ],
    deliverable: "A note in English on the seafarer's labour context: the basic labour rights as an ethical floor (safe workplace, decent living conditions, fair and regular wages, adequate rest, repatriation, per the Maritime Labour Convention), the vulnerability that makes fair treatment a duty (isolation, dependence, risk of abandonment), and the officer's own responsibility to those under them, referencing the fatigue ethics of week 7.",
    assessmentCriteria: [
      "The basic labour rights are correct and framed as an ethical floor (decent conditions, fair and regular wages, rest, repatriation, per the MLC).",
      "The vulnerability that makes it an ethical matter is sound (isolation, dependence, risk of exploitation or abandonment).",
      "The officer's own responsibility to the ratings under them is drawn (dignity runs downward as well as upward).",
      "The labour context and responsibility are reported, referencing week 7, in clear maritime English."
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
    topic: "Resolución de un caso ético bajo presión comercial",
    week: 12,
    taskId: "pn-c0104-w12-ethics-case-commercial-pressure",
    taskTitle: "Resolve An Ethics Case Under Commercial Pressure",
    scenario: "A superior asks the cadet to sign off records that are not quite true, to keep the schedule and avoid trouble. As the closing task of the subject, the officer asks the cadet to resolve the case in full, bringing the whole subject to bear on a real decision.",
    instructions: [
      "State the case and the pressure: being asked to enter a discharge in the oil record book that did not happen as recorded, or to sign rest-hour records that do not match reality, so a false entry would smooth the schedule and please a superior.",
      "Work it through the tools of the subject: separate the fact from the value judgement (week 10), name the values in conflict and the parties affected (week 5), and recognise that the request crosses from an honest error into a deliberate falsification (the just-culture triad of week 6).",
      "State the decision and its ground: the record must be truthful, because a falsified statutory record is a deliberate violation with legal and environmental weight (the MARPOL concern of week 4), and refusing it is the professional ethic (week 9) overriding the pressure of the moment.",
      "State how to voice the refusal professionally and report the resolved case in clear maritime English, pointing to how it would be raised, which is the ground of Leadership."
    ],
    deliverable: "A note in English resolving an ethics case under commercial pressure (a false oil-record-book or rest-hour entry): stating the case and pressure, working it through the subject's tools (fact versus value from week 10, values and parties from week 5, the honest-error-to-violation line from week 6), the decision that a statutory record must be truthful (the MARPOL weight of week 4, the professional ethic of week 9 over the moment's pressure), and voicing the refusal professionally.",
    assessmentCriteria: [
      "The case and the commercial pressure are stated clearly and realistically.",
      "The subject's tools are applied (fact versus value from week 10, values and affected parties from week 5, the honest-error-to-deliberate-violation line from week 6).",
      "The decision is correct and well grounded (a statutory record must be truthful; the MARPOL weight of week 4; the professional ethic of week 9 over the pressure).",
      "The refusal is voiced professionally and the case reported, integrating the subject, in clear maritime English."
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
    unit: "Ética y Moral",
    topic: "Resolución del dilema integrando el método de análisis del dilema, la reflexión ética y los valores de la Gente de Mar",
    week: 13,
    taskId: "pn-c0104-w13-resolve-full-ethical-dilemma",
    taskTitle: "Resolve A Full Ethical Dilemma On Board",
    scenario: "You face a real shipboard dilemma where safety, schedule and loyalty to a shipmate pull against each other. You must work the dilemma through in full, from the facts to a defensible decision grounded in the seafarer's values.",
    instructions: [
      "Apply the step-by-step method of ethical dilemma analysis to lay out the facts, the stakeholders and the conflicting duties.",
      "Reason through the options against the core values of the seafarer and the professional's ethical responsibility.",
      "Reach a defensible decision and state the reasoning that justifies it over the alternatives.",
      "Present your ruling and its justification in correct maritime English."
    ],
    deliverable: "A written ethical ruling with the dilemma analysis, the values-based reasoning, and the justified decision.",
    assessmentCriteria: [
      "The dilemma analysis method is applied correctly and completely.",
      "The reasoning is genuinely grounded in the seafarer's core values.",
      "The decision is defensible and justified over the alternatives.",
      "The ruling is presented in correct maritime English."
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
    topic: "Decisión ambiental integrando la toma de decisiones ambientales, el deber ético de reportar y la cultura justa",
    week: 14,
    taskId: "pn-c0104-w14-make-environmental-ethics-decision",
    taskTitle: "Make The Environmental Reporting Decision",
    scenario: "You discover an environmental non-compliance aboard that someone would prefer to keep quiet. You must decide what to do, weighing the duty to report against the pressure to stay silent, within a just-culture framework.",
    instructions: [
      "Analyse the environmental situation and the duty it places on you as an officer.",
      "Weigh the ethical duty to report against the pressure not to, applying just-culture principles to the people involved.",
      "Decide on the reporting action and how you will carry it out fairly and honestly.",
      "Communicate your decision and its ethical basis in correct maritime English."
    ],
    deliverable: "A written environmental decision with the duty analysis, the just-culture reasoning, and the reporting action.",
    assessmentCriteria: [
      "The environmental duty on the officer is correctly analysed.",
      "The duty to report is weighed fairly against the counter-pressures with just-culture reasoning.",
      "The reporting action is decided and its conduct is fair and honest.",
      "The decision is communicated in correct maritime English."
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
    unit: "El juicio",
    topic: "Redacción del informe imparcial integrando el hecho frente al juicio de valor, la reflexión ética y el deber de reportar",
    week: 15,
    taskId: "pn-c0104-w15-write-impartial-incident-account",
    taskTitle: "Write The Impartial Incident Account",
    scenario: "After an incident with disputed blame you are asked to write the account that will go on record. You must keep fact strictly separate from value judgement so the report is fair to everyone involved and useful to the inquiry.",
    instructions: [
      "Separate the established facts of the incident from the value judgements about the people involved.",
      "Write the factual account so it holds only what can be evidenced, flagging where only opinion exists.",
      "Discharge the duty to report honestly without letting bias colour the record.",
      "Produce the impartial incident account in correct written maritime English."
    ],
    deliverable: "An impartial written incident account that separates fact from value judgement and reports honestly.",
    assessmentCriteria: [
      "Fact is correctly and consistently separated from value judgement.",
      "The account holds only what can be evidenced, with opinion flagged.",
      "The duty to report is discharged honestly and without bias.",
      "The account is written in correct maritime English."
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
    topic: "Respuesta a la presión comercial integrando el caso bajo presión comercial, la ética de la fatiga y los límites y el deber de reportar",
    week: 16,
    taskId: "pn-c0104-w16-resist-unsafe-commercial-pressure",
    taskTitle: "Resist Unsafe Commercial Pressure",
    scenario: "Commercial pressure is pushing the ship to sail on schedule when the crew is fatigued beyond safe limits and a defect is unresolved. You must stand on the ethics of the situation and decide the right action under real pressure.",
    instructions: [
      "Analyse the commercial pressure against the safety facts, the crew's fatigue and the unresolved defect.",
      "Apply the ethics of fatigue and personal limits to judge whether the operation can proceed safely.",
      "Decide the ethical course of action and how you will hold it against the pressure, discharging your duty to report.",
      "Communicate your decision and its ethical grounds up the chain of command in correct maritime English."
    ],
    deliverable: "A written decision resisting unsafe commercial pressure, grounded in the ethics of fatigue and the duty to report.",
    assessmentCriteria: [
      "The commercial pressure is correctly weighed against the safety facts.",
      "The ethics of fatigue and limits are correctly applied to the decision.",
      "The chosen course holds against the pressure and discharges the duty to report.",
      "The decision is communicated in correct maritime English."
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
    topic: "Auditoría del código personal integrando el perfil ético del oficial, los valores de la Gente de Mar y la dignidad y los derechos laborales",
    week: 17,
    taskId: "pn-c0104-w17-audit-personal-code-of-conduct",
    taskTitle: "Audit Your Personal Code Of Conduct",
    scenario: "Approaching qualification as an officer, you must audit your own ethical profile: test the personal code of conduct you have written against the seafarer's values and the dignity and labour rights of those you will lead.",
    instructions: [
      "Review your ethical profile and personal code of conduct against the core values of the seafarer.",
      "Test the code against real situations involving the dignity and labour rights of the crew you will lead.",
      "Revise the code where it falls short and state the commitments you will hold yourself to as an officer.",
      "Present your audited code of conduct in correct maritime English."
    ],
    deliverable: "An audited personal code of conduct tested against the seafarer's values and the crew's dignity and rights.",
    assessmentCriteria: [
      "The code is genuinely tested against the seafarer's core values.",
      "The dignity and labour rights of the crew are properly considered.",
      "The revisions and commitments are honest and specific.",
      "The audited code is presented in correct maritime English."
    ],
    xp: 30,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0104",
    subjectName: "Ética Profesional",
    subjectId: "pn-s5-etica-profesional",
    unit: "Ética y profesión",
    topic: "Síntesis de la ética profesional del semestre para el informe del perfil ético del oficial",
    week: 18,
    taskId: "pn-c0104-w18-present-officer-ethical-profile",
    taskTitle: "Present Your Ethical Profile As An Officer",
    scenario: "As the closing capstone you must present the ethical profile you will carry into service, pulling together the semester's work: your decision method, your stance on reporting and pressure, and the values that will guide you as an officer.",
    instructions: [
      "Summarise the decision method you use to resolve an ethical dilemma at sea.",
      "Present your stance on the duty to report, commercial pressure and the ethics of fatigue and limits.",
      "State the core values and the personal code that will guide your conduct as an officer.",
      "Deliver your ethical profile presentation in professional maritime English."
    ],
    deliverable: "An ethical profile presentation covering the decision method, the stance on reporting and pressure, and the guiding values.",
    assessmentCriteria: [
      "The ethical decision method is summarised clearly and correctly.",
      "The stance on reporting, pressure and fatigue is coherent and well argued.",
      "The core values and personal code are stated convincingly.",
      "The presentation is delivered in professional maritime English."
    ],
    xp: 30,
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
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0105",
    subjectName: "Liderazgo",
    subjectId: "pn-s5-liderazgo",
    unit: "Elementos del liderazgo",
    topic: "Motivación intrínseca y extrínseca de la tripulación",
    week: 9,
    taskId: "pn-c0105-w09-motivation",
    taskTitle: "Motivate The Crew On A Long Voyage",
    scenario: "Halfway through a long voyage the crew is tired and morale is slipping. The officer asks the cadet to explain what actually motivates seafarers and how a leader sustains it, beyond pay and orders.",
    instructions: [
      "Distinguish the two kinds of motivation: extrinsic motivation comes from outside (wages, leave, the avoidance of punishment), while intrinsic motivation comes from within (pride in the work, mastery of the craft, belonging to a good team), and explain that the intrinsic kind is what sustains effort when no one is watching.",
      "State the limit of extrinsic motivation: pay and discipline get compliance but not commitment, and a leader who relies only on them gets the minimum, so the deeper motivation must be built.",
      "Give the leader's practical levers: meaningful work with its purpose explained, genuine recognition of good work, fair treatment, and a decent team climate, which together build the intrinsic motivation.",
      "Report how you would sustain the crew's motivation on the long voyage, in clear maritime English."
    ],
    deliverable: "A note in English on motivating the crew: extrinsic motivation (wages, leave, avoiding punishment) versus intrinsic motivation (pride, mastery, belonging) and why the intrinsic kind sustains effort unwatched, the limit of extrinsic motivation (compliance not commitment), and the leader's practical levers (meaningful work with its purpose, recognition, fair treatment, a decent team climate).",
    assessmentCriteria: [
      "Extrinsic and intrinsic motivation are correctly distinguished, with the intrinsic kind identified as what sustains unwatched effort.",
      "The limit of extrinsic motivation is sound (compliance, not commitment).",
      "The leader's practical levers are relevant (purpose, recognition, fairness, team climate).",
      "The account of sustaining motivation on a long voyage is reported, in clear maritime English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0105",
    subjectName: "Liderazgo",
    subjectId: "pn-s5-liderazgo",
    unit: "Autoconciencia",
    topic: "Actitud proactiva y hábitos del oficial",
    week: 10,
    taskId: "pn-c0105-w10-proactivity-habits",
    taskTitle: "Lead With A Proactive Attitude",
    scenario: "Two officers meet the same problem: one waits for it to become an order, the other has already acted. The officer asks the cadet to explain the proactive attitude and the habits that build it, the self-leadership beneath leading others.",
    instructions: [
      "Define proactivity: the proactive officer acts on what they can influence instead of waiting to be told or complaining about what they cannot change, taking responsibility for the response rather than being driven by events.",
      "Explain the circle of influence: energy spent on what one can actually affect widens that influence over time, while energy spent only worrying about what one cannot change shrinks it, so the proactive officer works on the first.",
      "Explain habits as the foundation: leadership is built from consistent daily habits (preparation, follow-through, keeping one's word) rather than from occasional grand gestures, because a crew trusts the officer who is reliable every day.",
      "Report how a proactive attitude and sound habits make a better officer, in clear maritime English."
    ],
    deliverable: "A note in English on proactivity and habits: proactivity (acting on what one can influence and owning the response, not waiting to be told), the circle of influence (working on what one can affect widens it; worrying about what one cannot shrinks it), and habits as the foundation of leadership (consistent daily reliability over grand gestures).",
    assessmentCriteria: [
      "Proactivity is correctly defined (acting on what one can influence and owning the response).",
      "The circle of influence is correctly explained (working on what one can affect widens it).",
      "Habits are correctly presented as the foundation of trusted leadership (daily reliability over occasional gestures).",
      "The account of how proactivity and habits make a better officer is reported, in clear maritime English."
    ],
    xp: 20,
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
    topic: "Estrategias para identificar y resolver problemas y la toma de decisiones",
    week: 11,
    taskId: "pn-c0105-w11-problem-solving-decisions",
    taskTitle: "Solve A Problem And Decide Under Pressure",
    scenario: "An operational problem lands on the officer with incomplete information and no time to waste. As an advanced task, the officer asks the cadet to work a structured problem-solving and decision-making method, so the decision is reasoned rather than snatched.",
    instructions: [
      "Identify the real problem first: distinguish the symptom from the underlying cause, because acting on the symptom leaves the cause to strike again, and state the problem clearly before reaching for a solution.",
      "Generate and weigh the options: lay out the realistic courses of action, weigh each for safety, feasibility and consequences, and resist the trap of seizing the first option that comes to mind.",
      "Decide, act and review: choose, commit, act, and then check the result against what was expected, adjusting if the situation has moved, because a decision is not finished when it is made.",
      "Apply the method to an operational problem and report the decision and its reasoning in clear maritime English, using the win-win approach of week 4 where people are in conflict, not re-teaching it."
    ],
    deliverable: "A note in English working a structured problem-solving and decision method: identifying the real problem (symptom versus underlying cause), generating and weighing the options (safety, feasibility, consequences; resisting the first-option trap), and deciding, acting and reviewing (checking the result and adjusting), applied to an operational problem, using the week 4 win-win approach where people conflict.",
    assessmentCriteria: [
      "The real problem is identified (symptom distinguished from underlying cause) before a solution is sought.",
      "The options are generated and weighed soundly (safety, feasibility, consequences; the first-option trap resisted).",
      "The decide-act-review step is correct (commit, then check the result against expectation and adjust).",
      "The method is applied to an operational problem and the decision reported, using the week 4 win-win where relevant, in clear maritime English."
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
    unit: "Estrategias de planeación y operación",
    topic: "Autocrítica, renovación y la mejora continua del equipo",
    week: 12,
    taskId: "pn-c0105-w12-self-critique-renewal",
    taskTitle: "Lead Renewal Through Honest Self-Critique",
    scenario: "The best officers are the ones who never stop examining their own performance and improving the team's. As the closing task of the subject, the officer asks the cadet to explain self-critique and renewal and to turn them into continuous improvement, integrating the leadership of the semester.",
    instructions: [
      "Explain honest self-critique: the leader examines their own decisions and conduct without excuse, because the officer who cannot see their own mistakes cannot correct them and loses the crew's respect, and this self-awareness is the emotional intelligence of week 2 turned on oneself.",
      "Turn the debrief into learning: run the blame-free debrief on the team's performance (the error handling of week 7 as an established practice), draw the lessons, and feed them back so the next operation is better, which is what continuous improvement means.",
      "Explain renewal: a leader must renew themselves and the team (rest, learning, morale) to keep performing over a long voyage, because a leader running on empty leads badly.",
      "Report how self-critique and renewal drive continuous improvement, drawing together the communication of week 5, the assertiveness of week 6 and the error handling of week 7, in clear maritime English."
    ],
    deliverable: "A note in English on self-critique and renewal: honest self-critique (examining one's own decisions without excuse, the emotional intelligence of week 2 turned on oneself), turning the blame-free debrief into learning and continuous improvement (the error handling of week 7 as established practice), and renewal of self and team to sustain performance, integrating the communication of week 5, the assertiveness of week 6 and the error handling of week 7.",
    assessmentCriteria: [
      "Honest self-critique is correctly explained (examining one's own conduct without excuse; the week 2 emotional intelligence turned on oneself).",
      "The debrief is turned into learning and continuous improvement (the week 7 error handling as established practice, lessons fed forward).",
      "Renewal of self and team is correctly explained as sustaining performance over a long voyage.",
      "The account integrates weeks 5, 6 and 7 and is reported, in clear maritime English."
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
    topic: "Liderazgo del oficial de guardia integrando la comunicación del líder, los estilos de liderazgo y el trabajo en equipo",
    week: 13,
    taskId: "pn-c0105-w13-lead-the-bridge-team-on-watch",
    taskTitle: "Lead The Bridge Team Through The Watch",
    scenario: "You take the conn as officer of the watch for a demanding coastal passage with a mixed bridge team. You must lead the watch: set the team up, communicate clearly, and adapt your style to the people and the situation.",
    instructions: [
      "Match your leadership style to the situation and to each member of the bridge team.",
      "Set the team up for the watch, assigning roles and building the teamwork the passage demands.",
      "Communicate as a leader through the watch: clear instructions, checking understanding, active listening and feedback.",
      "Deliver your watch orders and team direction in correct maritime English and SMCP."
    ],
    deliverable: "A watch leadership plan with the style choice, the team setup, and the leader's communication routine.",
    assessmentCriteria: [
      "The leadership style is well matched to the situation and the team.",
      "The team is set up with clear roles and effective teamwork.",
      "The leader's communication routine is clear and complete.",
      "The watch orders and direction use correct maritime English and SMCP."
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
    unit: "La comunicación del líder",
    topic: "Desafío respetuoso integrando la asertividad graduada, la inteligencia emocional bajo presión y el trabajo en equipo",
    week: 14,
    taskId: "pn-c0105-w14-challenge-a-decision-respectfully",
    taskTitle: "Challenge A Superior's Decision Respectfully",
    scenario: "On the bridge you see the officer in charge making a decision you believe is unsafe. You must speak up and challenge it respectfully, holding your ground through graded assertiveness while managing your own and the team's emotions.",
    instructions: [
      "Read the situation and your own emotional state, applying emotional intelligence before you speak.",
      "Raise the concern using graded assertiveness, escalating your challenge in the correct steps until it is heard.",
      "Keep the team functioning and the relationship intact while you press the safety concern.",
      "Voice your challenge and your reasoning in correct maritime English and SMCP."
    ],
    deliverable: "A recorded graded-assertiveness challenge showing the escalation steps and the emotional management used.",
    assessmentCriteria: [
      "Emotional intelligence is applied before and during the challenge.",
      "Graded assertiveness escalates correctly until the concern is heard.",
      "The team and the relationship are kept functioning through the challenge.",
      "The challenge is voiced in correct maritime English and SMCP."
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
    unit: "Elementos del liderazgo",
    topic: "Motivación en travesía larga integrando la motivación intrínseca y extrínseca, el trabajo en equipo y la actitud proactiva",
    week: 15,
    taskId: "pn-c0105-w15-motivate-crew-on-long-voyage",
    taskTitle: "Motivate The Crew Through A Long Voyage",
    scenario: "Morale is flagging halfway through a long, monotonous voyage. As a leader you must lift and sustain the crew's motivation, drawing on both intrinsic and extrinsic drivers and your own proactive example.",
    instructions: [
      "Diagnose what is draining the crew's motivation and identify the intrinsic and extrinsic drivers you can use.",
      "Build the measures that rebuild teamwork and sustain motivation through the rest of the voyage.",
      "Lead by proactive example, modelling the attitude and habits you want the crew to adopt.",
      "Deliver your motivation plan and address the crew in correct maritime English."
    ],
    deliverable: "A crew motivation plan integrating intrinsic and extrinsic drivers, teamwork measures, and proactive leadership.",
    assessmentCriteria: [
      "The causes of low motivation and the available drivers are correctly diagnosed.",
      "The measures realistically rebuild teamwork and sustain motivation.",
      "Proactive leadership by example is built into the plan.",
      "The plan and address are delivered in correct maritime English."
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
    topic: "Gestión del error y la crisis integrando la gestión del error y del conflicto, la resolución ganar-ganar y la toma de decisiones bajo presión",
    week: 16,
    taskId: "pn-c0105-w16-manage-error-and-conflict-in-crisis",
    taskTitle: "Manage Error And Conflict During A Crisis",
    scenario: "During an emergency a team member makes a serious error and a conflict flares between two others over what to do. As leader you must contain the error, resolve the conflict, and drive the team to a decision without losing the response.",
    instructions: [
      "Contain the error without blame, keeping the person and the team focused on the response.",
      "Resolve the conflict between the team members with a win-win approach that keeps both engaged.",
      "Drive the team to a decision under pressure and commit them to the chosen action.",
      "Direct the team and communicate the decision in correct maritime English and SMCP."
    ],
    deliverable: "A crisis leadership record covering the error containment, the conflict resolution, and the decision driven under pressure.",
    assessmentCriteria: [
      "The error is contained without blame and the team kept focused.",
      "The conflict is resolved with a genuine win-win that keeps both engaged.",
      "A decision is driven under pressure and the team is committed to it.",
      "The direction and decision use correct maritime English and SMCP."
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
    unit: "Estrategias de planeación y operación",
    topic: "Resolución de problemas del equipo integrando la identificación y resolución de problemas, la toma de decisiones bajo presión y la sinergia",
    week: 17,
    taskId: "pn-c0105-w17-solve-a-team-operational-problem",
    taskTitle: "Solve A Complex Operational Problem As A Team",
    scenario: "A recurring operational problem is degrading the team's performance and no single person can see the whole cause. As leader you must lead the team through identifying the real problem and deciding a solution that draws on the whole team's synergy.",
    instructions: [
      "Lead the team to identify the real problem behind the symptoms rather than the obvious one.",
      "Generate and weigh solution options, using the team's synergy to reach a better answer than any one member alone.",
      "Decide the course of action under time pressure and assign the follow-through.",
      "Present the problem, the decision and the plan to the team in correct maritime English."
    ],
    deliverable: "A problem-solving record with the real-problem diagnosis, the synergy-driven options, and the decided course of action.",
    assessmentCriteria: [
      "The real underlying problem is correctly identified, not just the symptom.",
      "The team's synergy is genuinely used to improve the solution.",
      "A course of action is decided under pressure with clear follow-through.",
      "The presentation is delivered in correct maritime English."
    ],
    xp: 30,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester V",
    subjectCode: "C0105",
    subjectName: "Liderazgo",
    subjectId: "pn-s5-liderazgo",
    unit: "Estrategias de planeación y operación",
    topic: "Síntesis del liderazgo del semestre para la autocrítica y el plan de renovación del oficial",
    week: 18,
    taskId: "pn-c0105-w18-lead-renewal-through-self-critique",
    taskTitle: "Lead Renewal Through Honest Self-Critique",
    scenario: "As the closing capstone you must deliver an honest self-critique of your own leadership over the semester and set the renewal plan that will guide your continued improvement as an officer, pulling the whole term together.",
    instructions: [
      "Critique your own leadership honestly across the semester: your communication, your assertiveness, and your handling of error and conflict.",
      "Draw out the strengths to keep and the specific weaknesses to work on as an officer.",
      "Set a continuous-improvement and renewal plan with concrete goals and how you will hold yourself to them.",
      "Deliver your self-critique and renewal plan in professional maritime English."
    ],
    deliverable: "A leadership self-critique and renewal plan covering honest self-assessment, the lessons drawn, and the improvement goals.",
    assessmentCriteria: [
      "The self-critique is honest and covers the semester's leadership work.",
      "The strengths to keep and weaknesses to fix are specific and fair.",
      "The renewal plan has concrete goals and accountability.",
      "The self-critique is delivered in professional maritime English."
    ],
    xp: 30,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
];

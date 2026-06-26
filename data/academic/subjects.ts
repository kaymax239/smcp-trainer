import type { AcademicProgramCode } from "./semesters";

export type AcademicSubject = {
  id: string;
  program: AcademicProgramCode;
  semesterId: string;
  title: string;
  officialArea: string;
  stcwAlignment: string;
  units: string[];
  topics: string[];
  tasks: string[];
  assessments: string[];
  xp: number;
  progress: number;
  status: "prototype" | "planned";
};

export const academicSubjects: AcademicSubject[] = [
  {
    id: "mn-s1-maritime-english-i",
    program: "MN",
    semesterId: "mn-semester-i",
    title: "Maritime English I",
    officialArea: "English / Maritime English",
    stcwAlignment: "STCW: Use English in written and oral form; engineering watch communication foundation.",
    units: ["Unit 1: Onboard introductions", "Unit 2: Personal information", "Unit 3: Departments and first duties"],
    topics: ["Verb To Be / Introductions", "Personal data onboard", "Ranks and departments", "Duty confirmation"],
    tasks: [
      "Report to the Chief Engineer",
      "Introduce Yourself Onboard",
      "Complete Cadet Personal Information",
      "Identify Your Department",
      "Confirm Your First Duty"
    ],
    assessments: ["Multiple choice", "Short writing", "Correct confirmation phrase"],
    xp: 250,
    progress: 20,
    status: "prototype"
  },
  {
    id: "mn-s1-mathematics-i",
    program: "MN",
    semesterId: "mn-semester-i",
    title: "Mathematics I",
    officialArea: "Basic sciences",
    stcwAlignment: "Supports engineering calculations, readings and technical problem solving.",
    units: ["Arithmetic review", "Algebraic operations", "Measurement systems"],
    topics: ["Fractions", "Equations", "Units and conversions"],
    tasks: [],
    assessments: ["Problem set", "Applied calculation quiz"],
    xp: 0,
    progress: 0,
    status: "planned"
  },
  {
    id: "mn-s1-technical-drawing",
    program: "MN",
    semesterId: "mn-semester-i",
    title: "Technical Drawing",
    officialArea: "Engineering fundamentals",
    stcwAlignment: "Supports interpretation of machinery diagrams and technical documentation.",
    units: ["Drawing standards", "Views and projections", "Basic symbols"],
    topics: ["Lines", "Scales", "Mechanical components"],
    tasks: [],
    assessments: ["Drawing interpretation", "Diagram labeling"],
    xp: 0,
    progress: 0,
    status: "planned"
  },
  {
    id: "mn-s1-basic-safety",
    program: "MN",
    semesterId: "mn-semester-i",
    title: "Basic Safety and Shipboard Life",
    officialArea: "Safety and induction",
    stcwAlignment: "STCW basic safety awareness, emergency response and personal safety foundation.",
    units: ["Shipboard organization", "PPE", "Emergency signals"],
    topics: ["Muster list", "Personal safety", "Reporting hazards"],
    tasks: [],
    assessments: ["Safety checklist", "Emergency signal quiz"],
    xp: 0,
    progress: 0,
    status: "planned"
  },
  {
    id: "pn-s1-transporte-maritimo",
    program: "PN",
    semesterId: "pn-semester-i",
    title: "Transporte Marítimo",
    officialArea: "TMO101 / Transporte Marítimo",
    stcwAlignment: "Identifica tipos de buque, elementos estructurales, equipos de maniobra, fondeo y carga para relacionarse con el ámbito marítimo.",
    units: [
      "Antecedentes del Transporte Marítimo",
      "Transporte Marítimo",
      "Organismos Internacionales que regulan la Marina Mercante",
      "Desarrollo de la propulsión Naval",
      "Dimensiones y elementos del Buque",
      "Refuerzos de Proa y Popa",
      "Equipo de carga/descarga",
      "Equipo de maniobra",
      "Tanques de lastre, agua dulce y combustible",
      "Líneas de Carga y Marca de calados",
      "Esfuerzos en el buque"
    ],
    topics: [
      "Historia antigua y moderna de la navegación",
      "Tipos de buque y sus particularidades",
      "Fundamentos básicos del transporte marítimo",
      "OMI, OIT, UIT y OMM",
      "Propulsión naval",
      "Dimensiones principales y nomenclatura del buque",
      "Equipo de carga, descarga, amarre y fondeo",
      "Tanques, tubos sonda y respiraderos",
      "Líneas de carga, francobordo, desplazamiento y lectura de calados",
      "Quebranto, arrufo y esfuerzos del buque"
    ],
    tasks: [],
    assessments: ["Criterios y procedimientos de evaluación del programa oficial"],
    xp: 0,
    progress: 0,
    status: "planned"
  },
  {
    id: "pn-s1-maritime-english-i",
    program: "PN",
    semesterId: "pn-semester-i",
    title: "Inglés Marítimo I",
    officialArea: "ING102 / Inglés Marítimo I",
    stcwAlignment: "Comunica ideas y obtiene información con vocabulario cotidiano y marítimo básico en presente y presente continuo.",
    units: [
      "Uso del verbo to be",
      "Uso del verbo to be en presente simple",
      "Uso del verbo to be con adjetivos posesivos",
      "Verbos regulares e irregulares en presente simple",
      "Adverbios de frecuencia",
      "Verbo Haber There is there are",
      "Presente Continuo",
      "Verbos para expresar preferencias, necesidad y obligación",
      "Auxiliar de modo can y can't",
      "Pasado simple con verbos regulares e irregulares",
      "Pasado simple del verbo to be",
      "Sustantivos contables y no contables"
    ],
    topics: [
      "Presentarse a sí mismo",
      "Formas de saludarse y despedirse",
      "Alfabeto convencional y fonético",
      "Números ordinales y cardinales",
      "Ubicación de objetos y personas",
      "Rutinas, hábitos e información general",
      "Hora cotidiana y marítima",
      "Necesidad, obligación y preferencias",
      "Países, idiomas y nacionalidades",
      "Secuencia de eventos en pasado"
    ],
    tasks: [],
    assessments: ["Criterios y procedimientos de evaluación del programa oficial"],
    xp: 0,
    progress: 0,
    status: "planned"
  },
  {
    id: "pn-s1-algebra",
    program: "PN",
    semesterId: "pn-semester-i",
    title: "Álgebra",
    officialArea: "ALG103 / Álgebra",
    stcwAlignment: "Resuelve problemáticas inherentes a la profesión mediante conocimientos matemáticos básicos y lenguaje algebraico.",
    units: [
      "Álgebra Elemental",
      "Ecuaciones, desigualdades y números complejos",
      "Logaritmos",
      "Matrices y determinantes",
      "Sistemas de Ecuaciones y desigualdades",
      "Álgebra Vectorial"
    ],
    topics: [
      "Expresiones algebraicas",
      "Exponentes y radicales",
      "Productos notables y factorización",
      "Ecuaciones lineales y cuadráticas",
      "Números complejos",
      "Funciones exponenciales y logarítmicas",
      "Matrices, determinantes e inversa",
      "Sistemas de ecuaciones lineales",
      "Programación lineal",
      "Vectores y resolución de problemas con fuerza, velocidad y aceleración"
    ],
    tasks: [],
    assessments: ["Criterios y procedimientos de evaluación del programa oficial"],
    xp: 0,
    progress: 0,
    status: "planned"
  },
  {
    id: "pn-s1-fisica",
    program: "PN",
    semesterId: "pn-semester-i",
    title: "Física",
    officialArea: "FIS104 / Física",
    stcwAlignment: "Aplica principios básicos de física para resolver problemas concretos inherentes a la profesión.",
    units: ["Mecánica", "Trabajo", "Estado físico de los cuerpos", "Ondas"],
    topics: [
      "Magnitudes fundamentales y derivadas",
      "Sistemas Internacional e Inglés",
      "Magnitudes escalares y vectoriales",
      "Cinemática en una y dos dimensiones",
      "Movimiento circular",
      "Leyes de Newton",
      "Trabajo, energía y potencia",
      "Impulso y cantidad de movimiento",
      "Propiedades de la materia",
      "Movimiento ondulatorio"
    ],
    tasks: [],
    assessments: ["Criterios y procedimientos de evaluación del programa oficial"],
    xp: 0,
    progress: 0,
    status: "planned"
  },
  {
    id: "pn-s1-dibujo-ingenieria",
    program: "PN",
    semesterId: "pn-semester-i",
    title: "Dibujo de Ingeniería",
    officialArea: "DII105 / Dibujo de Ingeniería",
    stcwAlignment: "Interpreta y elabora planos, diagramas de equipos y elementos estructurales del buque con fundamentos de dibujo.",
    units: [
      "Introducción",
      "Escalas y acotaciones",
      "Problemas Geométricas",
      "Proyecciones ortogonales en primer cuadrante",
      "Proyección Isométrica",
      "Simbología",
      "Interpretación",
      "Tipos de plano"
    ],
    topics: [
      "Dibujo de ingeniería como medio de comunicación",
      "Tipos de líneas",
      "Escalas y acotaciones",
      "Solución de problemas geométricos",
      "Proyecciones, cortes y secciones",
      "Simbología marítima, topográfica y eléctrica",
      "Planos cartográficos, cartas terrestres y cartas marinas",
      "Instalaciones eléctricas navales"
    ],
    tasks: [],
    assessments: ["Criterios y procedimientos de evaluación del programa oficial"],
    xp: 0,
    progress: 0,
    status: "planned"
  },
  {
    id: "pn-s1-electricidad",
    program: "PN",
    semesterId: "pn-semester-i",
    title: "Electricidad",
    officialArea: "ELE106 / Electricidad",
    stcwAlignment: "Aplica principios básicos de electricidad, Ley de Ohm y Kirchhoff en circuitos y redes eléctricas.",
    units: ["Electrostática", "Electrodinámica", "Circuito eléctrico", "Conexiones eléctricas", "Redes eléctricas"],
    topics: [
      "Definición y tipos de electricidad",
      "Carga eléctrica, Ley de Coulomb y campo eléctrico",
      "Diferencia de potencial, corriente y resistencia",
      "Conductores, aislantes, pilas y acumuladores",
      "Ley de Ohm y Leyes de Kirchhoff",
      "Circuitos en serie, paralelo y serie/paralelo",
      "Conexiones estrella y delta",
      "Resistencia e intensidad de corriente en redes eléctricas"
    ],
    tasks: [],
    assessments: ["Criterios y procedimientos de evaluación del programa oficial"],
    xp: 0,
    progress: 0,
    status: "planned"
  },
  {
    id: "pn-s1-practicas-marineras-i",
    program: "PN",
    semesterId: "pn-semester-i",
    title: "Prácticas Marineras I",
    officialArea: "PMR107 / Prácticas Marineras I",
    stcwAlignment: "Identifica botes salvavidas, cabuyería, cabos de amarre y dispositivos individuales de salvamento mediante actividades teórico-prácticas.",
    units: ["Natación", "Bote salvavidas", "Boga", "Cabuyería", "Cabos de amarre"],
    topics: [
      "Flotación y nado libre",
      "Uso correcto del chaleco salvavidas y aro salvavidas",
      "Tipos, nomenclatura y accesorios de botes salvavidas",
      "Organización del bote y órdenes para la boga",
      "Boga a Pareles, a la Tercio, a la Singa y a la Punta",
      "Conceptos, materiales y tipos de cabos",
      "Distribución de cabos de amarre y boza"
    ],
    tasks: [],
    assessments: ["Criterios y procedimientos de evaluación del programa oficial"],
    xp: 0,
    progress: 0,
    status: "planned"
  },
  {
    id: "pn-s1-educacion-fisica-i",
    program: "PN",
    semesterId: "pn-semester-i",
    title: "Educación Física I",
    officialArea: "C0011 / Educación Física I",
    stcwAlignment: "Desarrolla percepción, coordinación motriz fina y gruesa, condición física, concentración y natación.",
    units: ["Percepción y coordinación motriz", "Desarrollo físico integral", "Concentración", "Condición física", "Natación"],
    topics: [
      "Movimientos físicos y ubicación espacial",
      "Coordinación motriz, equilibrio y lateralidad",
      "Fuerza muscular, resistencia cardiorrespiratoria y flexibilidad",
      "Juegos de concentración",
      "Fuerza, vigor y flexibilidad",
      "Técnica, flotación, nado libre, nado en grupo y sobrevivencia"
    ],
    tasks: [],
    assessments: ["Criterios y procedimientos de evaluación del programa oficial"],
    xp: 0,
    progress: 0,
    status: "planned"
  },
  {
    id: "pn-s1-estrategias-aprendizaje",
    program: "PN",
    semesterId: "pn-semester-i",
    title: "Estrategias de Aprendizaje",
    officialArea: "C0099 / Estrategias de Aprendizaje",
    stcwAlignment: "Aplica estrategias de aprendizaje para mejorar el desempeño académico mediante técnicas de estudio, síntesis y organización.",
    units: [
      "Condiciones básicas para el estudio",
      "Manejo de información",
      "Presentación gráfica de la información",
      "Técnicas de estudio"
    ],
    topics: [
      "Atribuciones, motivación, atención y área de estudio",
      "Resumen, síntesis y la pregunta",
      "Organizadores gráficos, diagramas, mapas y esquemas",
      "Técnica de los seis pasos",
      "Métodos de estudio individual y en grupo"
    ],
    tasks: [],
    assessments: ["Criterios y procedimientos de evaluación del programa oficial"],
    xp: 0,
    progress: 0,
    status: "planned"
  },
  {
    id: "pn-s1-expresion-oral-escrita",
    program: "PN",
    semesterId: "pn-semester-i",
    title: "Expresión Oral y Escrita",
    officialArea: "C0100 / Expresión Oral y Escrita",
    stcwAlignment: "Utiliza el lenguaje como forma de comunicación mediante producción de textos y desempeño oral en entornos sociales y laborales.",
    units: ["Proceso de comunicación", "Comunicación Escrita", "Comunicación Oral"],
    topics: [
      "Comunicación humana, naturaleza y alcances",
      "Proceso de la comunicación",
      "Factores personales, físicos y semánticos",
      "Expresión escrita y expresión oral",
      "Lenguaje, lengua y habla",
      "Reglas ortográficas y oración gramatical",
      "Ideas principales y secundarias en textos",
      "Comunicación verbal y no verbal",
      "Dicción, fluidez y exposición oral"
    ],
    tasks: [],
    assessments: ["Criterios y procedimientos de evaluación del programa oficial"],
    xp: 0,
    progress: 0,
    status: "planned"
  }
];

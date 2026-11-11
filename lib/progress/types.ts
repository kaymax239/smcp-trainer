// ============================================================
// Libro interactivo — contrato del almacén de progreso
// ------------------------------------------------------------
// Los componentes solo conocen esta interfaz. En la Fase 3 la
// implementa localStorage (lib/progress/store.ts); en la Fase 4
// se cambia por la base de datos sin tocar los componentes.
// Por eso todos los métodos son asíncronos.
//
// Claves:
//   lección -> "pn/s1/semana-01/01-what-is-maritime-english"
//   semana  -> "pn/s1/semana-01"
// (las da lib/content/loader.ts en LeccionResumen.key / SemanaInfo.key)
// ============================================================

/** Progreso guardado de una lección. */
export interface ProgresoLeccion {
  key: string;
  /** Mejor calificación del quiz (0–100); null si nunca se ha intentado. */
  mejorCalificacion: number | null;
  /** Número de intentos del quiz. */
  intentos: number;
  /** true si alguna vez la mejor calificación alcanzó el aprobatorio. */
  aprobada: boolean;
  /** XP otorgado por esta lección (0 hasta aprobarla; nunca se otorga dos veces). */
  xp: number;
}

/** Progreso agregado de una semana. */
export interface ProgresoSemana {
  key: string;
  aprobadas: number;
  total: number;
  /** 0–100, redondeado. 0 si la semana no tiene lecciones. */
  porcentaje: number;
  /** true si total > 0 y todas las lecciones están aprobadas. */
  completa: boolean;
}

/** Datos necesarios para registrar un intento del quiz. */
export interface IntentoQuiz {
  /** Clave de la lección. */
  key: string;
  /** Calificación obtenida (0–100). */
  calificacion: number;
  /** Calificación mínima para aprobar. */
  aprobatorio: number;
  /** XP que da la lección la primera vez que se aprueba. */
  xp: number;
  /** Semana a la que pertenece, para otorgar su insignia al completarla. */
  semana: {
    key: string;
    insigniaId: string;
    /** Claves de TODAS las lecciones de la semana. */
    leccionKeys: string[];
  };
}

/** Resultado de guardar un intento. */
export interface ResultadoIntento {
  progreso: ProgresoLeccion;
  /** true si este intento aprobó y antes no estaba aprobada. */
  primeraAprobacion: boolean;
  /** XP sumado en este intento (0 si no fue la primera aprobación). */
  xpGanado: number;
  /** Id de la insignia ganada en este intento, o null. */
  insigniaGanada: string | null;
  /** true si la mejor calificación subió con este intento. */
  nuevaMejor: boolean;
}

export interface ProgressStore {
  getLeccion(key: string): Promise<ProgresoLeccion>;
  guardarIntento(intento: IntentoQuiz): Promise<ResultadoIntento>;
  getSemana(key: string, leccionKeys: string[]): Promise<ProgresoSemana>;
  getXP(): Promise<number>;
  /** Ids de las insignias ganadas, en el orden en que se ganaron. */
  getInsignias(): Promise<string[]>;
  /** Avisa cuando cambia el progreso (también desde otra pestaña). Devuelve la función para dejar de escuchar. */
  subscribe(listener: () => void): () => void;
}

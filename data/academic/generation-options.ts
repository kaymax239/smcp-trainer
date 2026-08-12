// Opciones compartidas por el generador de tareas con IA.
// Datos planos y client-safe: los importan tanto la página de administración
// (app/admin/generate-tasks) como las rutas de API que validan el formulario.

export const MARITIME_CONTEXTS = [
  "Bridge Navigation",
  "Deck Inspection",
  "Engine Room",
  "VHF Radio Communications",
  "Mooring Operations",
  "Abandon Ship Procedure",
  "Safety Maintenance",
  "Cargo Loading/Unloading",
] as const;

export type MaritimeContext = (typeof MARITIME_CONTEXTS)[number];

export const DIFFICULTIES = ["Foundation", "Standard", "Advanced"] as const;

export type Difficulty = (typeof DIFFICULTIES)[number];

/**
 * XP y duración por dificultad.
 *
 * OJO con la escala: las tareas escritas a mano en data/academic/mission-tasks
 * van de 10 a 30 XP. Estos valores (100/150/300) son los pedidos expresamente
 * para el generador, así que una tarea generada vale entre 5 y 10 veces una
 * tarea normal. Si algún día se unifica el baremo, este es el sitio a tocar.
 */
export const DIFFICULTY_PRESETS: Record<
  Difficulty,
  { xp: number; estimatedTime: string }
> = {
  Foundation: { xp: 100, estimatedTime: "20 min" },
  Standard: { xp: 150, estimatedTime: "30 min" },
  Advanced: { xp: 300, estimatedTime: "45 min" },
};

/** Semanas válidas de un semestre FIDENA. */
export const MIN_WEEK = 1;
export const MAX_WEEK = 18;

/**
 * El generador con IA solo funciona en desarrollo local.
 *
 * Motivo: /api/save-task escribe en data/academic/generated-tasks.json, y el
 * filesystem de Vercel es de solo lectura. En producción la escritura fallaría
 * con EROFS, así que se corta antes y se explica el flujo correcto en vez de
 * dejar que el profesor genere una tarea que no se puede guardar.
 *
 * Next sustituye process.env.NODE_ENV en tiempo de build, así que esta
 * constante también funciona dentro de componentes cliente.
 */
export const IS_GENERATION_ENABLED = process.env.NODE_ENV !== "production";

export const GENERATION_DISABLED_MESSAGE =
  "La generación con IA solo está disponible en desarrollo local. El filesystem de " +
  "Vercel es de solo lectura, así que las tareas no pueden guardarse en producción. " +
  "Flujo oficial: generar en local → commit de data/academic/generated-tasks.json → " +
  "push a main → deploy.";

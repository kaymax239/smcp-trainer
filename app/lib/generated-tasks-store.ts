// Almacén server-only de las tareas generadas con IA.
//
// Las tareas escritas a mano viven en data/academic/mission-tasks/*.ts. Las
// generadas se acumulan en un único JSON para no tocar esos ficheros de 5.000
// líneas desde una ruta de API. El agregador (data/academic/mission-tasks.ts)
// importa ese JSON de forma estática, así que en `next dev` basta con guardar
// para que la tarea aparezca en la app.
//
// AVISO: escribe en el sistema de ficheros del proyecto. Funciona en local
// (flujo de autoría: generar -> guardar -> commit del JSON). En un despliegue
// serverless de Vercel el FS es de solo lectura y esto fallará: si algún día
// hay que guardar desde producción, hay que cambiar a almacenamiento real
// (Blob, Postgres del Marketplace, etc.).
import { promises as fs } from "fs";
import path from "path";
import type { AcademicMissionTask } from "@/data/academic/mission-tasks";

const STORE_PATH = path.join(
  process.cwd(),
  "data",
  "academic",
  "generated-tasks.json",
);

export async function readGeneratedTasks(): Promise<AcademicMissionTask[]> {
  let raw: string;
  try {
    raw = await fs.readFile(STORE_PATH, "utf8");
  } catch (err) {
    // Si el fichero no existe todavía, el almacén está vacío.
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }

  const trimmed = raw.trim();
  if (!trimmed) return [];

  const parsed = JSON.parse(trimmed);
  if (!Array.isArray(parsed)) {
    throw new Error("generated-tasks.json no contiene un array.");
  }
  return parsed as AcademicMissionTask[];
}

/**
 * Añade una tarea al almacén. Devuelve el total tras guardar.
 * Lanza si el taskId ya existe (en el JSON o en las tareas escritas a mano).
 */
export async function appendGeneratedTask(
  task: AcademicMissionTask,
  existingTaskIds: ReadonlySet<string>,
): Promise<{ total: number }> {
  const tasks = await readGeneratedTasks();

  if (existingTaskIds.has(task.taskId) || tasks.some((t) => t.taskId === task.taskId)) {
    throw new DuplicateTaskError(task.taskId);
  }

  tasks.push(task);
  // Escritura atómica: fichero temporal + rename, para no dejar el JSON a
  // medias si el proceso muere durante el guardado.
  const tmpPath = `${STORE_PATH}.tmp`;
  await fs.writeFile(tmpPath, JSON.stringify(tasks, null, 2) + "\n", "utf8");
  await fs.rename(tmpPath, STORE_PATH);

  return { total: tasks.length };
}

export class DuplicateTaskError extends Error {
  taskId: string;
  constructor(taskId: string) {
    super(`Ya existe una tarea con taskId "${taskId}".`);
    this.name = "DuplicateTaskError";
    this.taskId = taskId;
  }
}

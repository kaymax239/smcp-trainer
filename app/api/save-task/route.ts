import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { academicMissionTasks } from "@/data/academic/mission-tasks";
import { academicMissionTaskSchema } from "@/app/lib/task-generation";
import {
  GENERATION_DISABLED_MESSAGE,
  IS_GENERATION_ENABLED,
} from "@/data/academic/generation-options";
import {
  DuplicateTaskError,
  appendGeneratedTask,
} from "@/app/lib/generated-tasks-store";

// Guarda una tarea ya revisada en data/academic/generated-tasks.json.
// Valida contra AcademicMissionTask antes de escribir: el editor del panel
// permite tocar el texto a mano, así que lo que llega aquí no es de fiar
// aunque venga de nuestra propia UI.

export async function POST(req: NextRequest) {
  // Corte en producción ANTES de tocar disco: en Vercel el FS es de solo
  // lectura y esto acabaría en EROFS. Mejor un mensaje que explique el flujo.
  if (!IS_GENERATION_ENABLED) {
    return NextResponse.json(
      { error: GENERATION_DISABLED_MESSAGE, localOnly: true },
      { status: 503 },
    );
  }

  // TODO(follow-up): igual que en /api/generate-task, solo se exige sesión.
  // Sin rol de profesor/admin, cualquier cadete autenticado puede escribir en
  // el catálogo. Añadir el filtro por rol cuando exista en auth.ts.
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Cuerpo JSON inválido." }, { status: 400 });
  }

  const parsed = academicMissionTaskSchema.safeParse(
    (body as { task?: unknown })?.task,
  );
  if (!parsed.success) {
    return NextResponse.json(
      { error: "La tarea no cumple el formato requerido.", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  // taskId único frente a las tareas escritas a mano, no solo frente al JSON.
  const existingTaskIds = new Set(academicMissionTasks.map((t) => t.taskId));

  try {
    const { total } = await appendGeneratedTask(parsed.data, existingTaskIds);
    return NextResponse.json({ ok: true, taskId: parsed.data.taskId, total });
  } catch (err) {
    if (err instanceof DuplicateTaskError) {
      return NextResponse.json({ error: err.message }, { status: 409 });
    }
    // EROFS/EACCES = despliegue serverless con FS de solo lectura.
    const code = (err as NodeJS.ErrnoException).code;
    if (code === "EROFS" || code === "EACCES") {
      return NextResponse.json(
        {
          error:
            "El sistema de ficheros es de solo lectura. Guardar tareas solo funciona en desarrollo local.",
        },
        { status: 503 },
      );
    }
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

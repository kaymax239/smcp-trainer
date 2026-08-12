import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { AnthropicError, anthropicJson, normalizeStringArrays } from "@/app/lib/anthropic";
import {
  DRAFT_ARRAY_FIELDS,
  DRAFT_JSON_SCHEMA,
  SYSTEM_PROMPT,
  assembleTask,
  buildUserPrompt,
  findSubject,
  generateRequestSchema,
  generatedDraftSchema,
} from "@/app/lib/task-generation";
import {
  GENERATION_DISABLED_MESSAGE,
  IS_GENERATION_ENABLED,
} from "@/data/academic/generation-options";

// Genera una tarea operativa con Claude a partir del formulario de
// administración. NO guarda nada: devuelve la tarea para previsualizar y
// editar; el guardado va por /api/save-task.
//
// El prompt se construye en el servidor a partir de campos estructurados. El
// cliente nunca envía texto de prompt libre: si lo hiciera, cualquiera con
// sesión podría usar la key de Anthropic como un LLM de uso general.

/** Nº de llamadas al modelo antes de rendirse (ver nota de fiabilidad abajo). */
const MAX_ATTEMPTS = 3;

export async function POST(req: NextRequest) {
  // Cortado también en producción. Generar sí funcionaría (no toca disco), pero
  // la tarea resultante no se podría guardar, y dejarlo abierto permitiría
  // quemar créditos de Anthropic desde el despliegue público.
  if (!IS_GENERATION_ENABLED) {
    return NextResponse.json(
      { error: GENERATION_DISABLED_MESSAGE, localOnly: true },
      { status: 503 },
    );
  }

  // TODO(follow-up): esto solo exige sesión válida (dominio FIDENA o invitado
  // vigente). No hay rol de profesor/admin en el token — auth.ts solo maneja
  // "cadete" — así que hoy CUALQUIER cadete con sesión puede generar tareas y
  // gastar créditos. Al añadir roles, filtrar aquí.
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

  const parsed = generateRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Formulario inválido.", issues: parsed.error.issues },
      { status: 400 },
    );
  }
  const input = parsed.data;

  if (!findSubject(input.subjectId)) {
    return NextResponse.json(
      { error: `Asignatura desconocida: ${input.subjectId}` },
      { status: 400 },
    );
  }

  try {
    const userPrompt = buildUserPrompt(input);
    let lastIssues: unknown = null;

    // Fiabilidad: con salidas largas, claude-sonnet-5 a veces aplasta los
    // arrays en un string. normalizeStringArrays() repara los casos conocidos;
    // si aun así no valida, se reintenta en vez de devolver un error al
    // profesor. Medido: ~50% de respuestas necesitan la reparación.
    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
      const rawInput = await anthropicJson({
        system: SYSTEM_PROMPT,
        user: userPrompt,
        toolName: "submit_task",
        toolDescription: "Submit the finished operational maritime task.",
        inputSchema: DRAFT_JSON_SCHEMA,
        maxTokens: 8192,
      });

      const draft = generatedDraftSchema.safeParse(
        normalizeStringArrays(rawInput, DRAFT_ARRAY_FIELDS),
      );

      if (draft.success) {
        const task = assembleTask(input, draft.data);
        if (!task) {
          return NextResponse.json(
            { error: "No se pudo armar la tarea con el catálogo." },
            { status: 500 },
          );
        }
        return NextResponse.json({ task, attempts: attempt });
      }

      lastIssues = draft.error.issues;
    }

    return NextResponse.json(
      {
        error: `El modelo devolvió una tarea incompleta en ${MAX_ATTEMPTS} intentos. Vuelve a intentarlo.`,
        issues: lastIssues,
      },
      { status: 502 },
    );
  } catch (err) {
    if (err instanceof AnthropicError) {
      return NextResponse.json({ error: err.message }, { status: err.status ?? 500 });
    }
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

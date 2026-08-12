// Helper server-only para Anthropic (Claude).
// Mismo patrón que app/lib/nvidia.ts: la lógica de red vive aquí y las rutas
// quedan finas. NUNCA importar esto en un componente cliente: usa
// ANTHROPIC_API_KEY.
import Anthropic from "@anthropic-ai/sdk";

const ANTHROPIC_MODEL = process.env.ANTHROPIC_MODEL || "claude-sonnet-5";

export class AnthropicError extends Error {
  status?: number;
  constructor(message: string, status?: number) {
    super(message);
    this.name = "AnthropicError";
    this.status = status;
  }
}

function getClient(): Anthropic {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new AnthropicError("ANTHROPIC_API_KEY no está configurada.", 503);
  }
  return new Anthropic({ apiKey });
}

function wrapApiError(err: unknown): never {
  if (err instanceof Anthropic.APIError) {
    throw new AnthropicError(
      `Anthropic API error ${err.status}: ${String(err.message).slice(0, 500)}`,
      err.status,
    );
  }
  throw new AnthropicError(`Fallo llamando a Anthropic: ${String(err)}`, 502);
}

// --- Texto plano ---------------------------------------------------------------

export type AnthropicChatOptions = {
  system?: string;
  user: string;
  model?: string;
  maxTokens?: number;
  /**
   * OJO: los modelos nuevos (claude-sonnet-5 y posteriores) RECHAZAN este
   * parámetro con 400 "`temperature` is deprecated for this model". Por eso no
   * hay valor por defecto: solo se envía si quien llama lo pide explícitamente.
   */
  temperature?: number;
};

/** Llama a la Messages API y devuelve el texto de la respuesta. */
export async function anthropicChat(opts: AnthropicChatOptions): Promise<string> {
  const client = getClient();

  let resp: Anthropic.Message;
  try {
    resp = await client.messages.create({
      model: opts.model || ANTHROPIC_MODEL,
      max_tokens: opts.maxTokens ?? 4096,
      ...(opts.temperature !== undefined ? { temperature: opts.temperature } : {}),
      ...(opts.system ? { system: opts.system } : {}),
      messages: [{ role: "user", content: opts.user }],
    });
  } catch (err) {
    wrapApiError(err);
  }

  const text = resp.content
    .filter((block): block is Anthropic.TextBlock => block.type === "text")
    .map((block) => block.text)
    .join("");

  if (!text) throw new AnthropicError("Anthropic devolvió respuesta vacía.", 502);
  return text;
}

// --- Salida estructurada -------------------------------------------------------

export type AnthropicJsonOptions = {
  system?: string;
  user: string;
  /** Nombre de la herramienta que el modelo está obligado a llamar. */
  toolName: string;
  toolDescription: string;
  /** JSON Schema de la salida. Mejor sin minItems/maxItems: ver nota abajo. */
  inputSchema: Record<string, unknown>;
  model?: string;
  maxTokens?: number;
};

/**
 * Pide salida estructurada forzando una llamada a herramienta.
 *
 * Es más fiable que pedir "devuelve solo JSON" por prompt, y además el prefill
 * de asistente (el otro truco habitual) NO sirve: claude-sonnet-5 lo rechaza
 * con 400 "This model does not support assistant message prefill".
 *
 * Devuelve el `input` de la herramienta SIN validar: quien llama debe pasarlo
 * por zod. Ver normalizeStringArrays() más abajo.
 */
export async function anthropicJson(opts: AnthropicJsonOptions): Promise<unknown> {
  const client = getClient();

  let resp: Anthropic.Message;
  try {
    resp = await client.messages.create({
      model: opts.model || ANTHROPIC_MODEL,
      max_tokens: opts.maxTokens ?? 8192,
      ...(opts.system ? { system: opts.system } : {}),
      tools: [
        {
          name: opts.toolName,
          description: opts.toolDescription,
          input_schema: opts.inputSchema as Anthropic.Tool.InputSchema,
        },
      ],
      tool_choice: { type: "tool", name: opts.toolName },
      messages: [{ role: "user", content: opts.user }],
    });
  } catch (err) {
    wrapApiError(err);
  }

  const toolUse = resp.content.find(
    (block): block is Anthropic.ToolUseBlock => block.type === "tool_use",
  );
  if (!toolUse) {
    throw new AnthropicError("El modelo no llamó a la herramienta esperada.", 502);
  }
  return toolUse.input;
}

/**
 * Repara campos que deberían ser arrays de strings y llegan como un solo string.
 *
 * Medido contra claude-sonnet-5: en torno a la mitad de las respuestas con
 * salida larga (>1.500 tokens) serializan los arrays aplastados en un string,
 * a veces con etiquetas <item>...</item> y a veces con saltos de línea. En vez
 * de rechazar esas respuestas (y gastar otra llamada), las reconstruimos.
 */
export function normalizeStringArrays<T extends Record<string, unknown>>(
  raw: unknown,
  arrayFields: readonly string[],
): T {
  if (!raw || typeof raw !== "object") return raw as T;

  const obj = { ...(raw as Record<string, unknown>) };

  for (const field of arrayFields) {
    const value = obj[field];
    if (Array.isArray(value) || typeof value !== "string") continue;

    // Formato 1: <item>uno</item><item>dos</item>
    const items = [...value.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => m[1].trim());
    if (items.length > 0) {
      obj[field] = items.filter(Boolean);
      continue;
    }

    // Formato 2: una línea por elemento, con posible viñeta o numeración.
    const lines = value
      .split("\n")
      // Quita cualquier etiqueta suelta que se haya colado (</instructions>...).
      .map((line) => line.replace(/<\/?[a-zA-Z][^>]*>/g, "").trim())
      .map((line) => line.replace(/^(?:[-*•]|\d+[.)])\s*/, "").trim())
      .filter(Boolean);
    obj[field] = lines.length > 0 ? lines : [value.trim()];
  }

  return obj as T;
}

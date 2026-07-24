// Helper server-only para NVIDIA NIM (build.nvidia.com).
// El endpoint es compatible con OpenAI, así que hablamos por fetch sin SDK
// nuevo. NUNCA importar esto en un componente cliente: usa NVIDIA_API_KEY.
const NVIDIA_BASE_URL =
  process.env.NVIDIA_BASE_URL || "https://integrate.api.nvidia.com/v1";
// llama-3.1-70b responde fiable con esta key; el 3.3-70b daba 503/timeout.
const NVIDIA_MODEL = process.env.NVIDIA_MODEL || "meta/llama-3.1-70b-instruct";

export type NvidiaChatOptions = {
  system?: string;
  user: string;
  /** Fuerza salida JSON (response_format json_object). */
  json?: boolean;
  temperature?: number;
  model?: string;
  maxTokens?: number;
};

export class NvidiaError extends Error {
  status?: number;
  constructor(message: string, status?: number) {
    super(message);
    this.name = "NvidiaError";
    this.status = status;
  }
}

/**
 * Llama al chat de NVIDIA NIM y devuelve el texto de la respuesta.
 * Lanza NvidiaError si falta la key o la API responde con error.
 */
export async function nvidiaChat(opts: NvidiaChatOptions): Promise<string> {
  const apiKey = process.env.NVIDIA_API_KEY;
  if (!apiKey) {
    throw new NvidiaError("NVIDIA_API_KEY no está configurada.", 503);
  }

  const messages: Array<{ role: string; content: string }> = [];
  if (opts.system) messages.push({ role: "system", content: opts.system });
  messages.push({ role: "user", content: opts.user });

  const resp = await fetch(`${NVIDIA_BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: opts.model || NVIDIA_MODEL,
      messages,
      temperature: opts.temperature ?? 0.4,
      max_tokens: opts.maxTokens ?? 1024,
      ...(opts.json ? { response_format: { type: "json_object" } } : {}),
    }),
  });

  if (!resp.ok) {
    const detail = await resp.text().catch(() => "");
    throw new NvidiaError(
      `NVIDIA API error ${resp.status}: ${detail.slice(0, 500)}`,
      resp.status,
    );
  }

  const data = await resp.json();
  const text: string = data?.choices?.[0]?.message?.content ?? "";
  if (!text) throw new NvidiaError("NVIDIA API devolvió respuesta vacía.", 502);
  return text;
}

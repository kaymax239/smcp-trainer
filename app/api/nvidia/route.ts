import { NextRequest, NextResponse } from "next/server";
import { nvidiaChat, NvidiaError } from "@/app/lib/nvidia";

// Ruta independiente para generar/evaluar contenido académico con NVIDIA NIM.
// No toca el flujo de Gemini (app/api/feedback) ni los simuladores.
//
// GET  -> smoke test: confirma que la key funciona.
// POST -> { system?, prompt, json?, temperature?, model? } -> { text } | { json }

export async function GET() {
  try {
    const text = await nvidiaChat({
      user: 'Responde solo con la palabra "ok".',
      temperature: 0,
      maxTokens: 8,
    });
    return NextResponse.json({ ok: true, sample: text.trim() });
  } catch (err) {
    if (err instanceof NvidiaError) {
      return NextResponse.json({ ok: false, error: err.message }, { status: err.status ?? 500 });
    }
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { system, prompt, json, temperature, model, maxTokens } = await req.json();

    if (!prompt || String(prompt).trim().length === 0) {
      return NextResponse.json({ error: "Falta 'prompt'." }, { status: 400 });
    }

    const text = await nvidiaChat({
      system,
      user: String(prompt),
      json: json === true,
      temperature: typeof temperature === "number" ? temperature : undefined,
      model: typeof model === "string" ? model : undefined,
      maxTokens: typeof maxTokens === "number" ? maxTokens : undefined,
    });

    // Si pidieron JSON, intentamos parsear (quitando fences por si acaso).
    if (json === true) {
      const cleaned = text
        .trim()
        .replace(/^```(?:json)?\s*/i, "")
        .replace(/\s*```$/i, "")
        .trim();
      try {
        return NextResponse.json({ json: JSON.parse(cleaned) });
      } catch {
        return NextResponse.json({ text, warning: "No fue JSON válido." });
      }
    }

    return NextResponse.json({ text });
  } catch (err) {
    if (err instanceof NvidiaError) {
      return NextResponse.json({ error: err.message }, { status: err.status ?? 500 });
    }
    return NextResponse.json({ error: "Server error", detail: String(err) }, { status: 500 });
  }
}

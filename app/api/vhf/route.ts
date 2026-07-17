// ============================================================
// SMCP Trainer — VHF Radio Simulator: API Route (App Router)
// ------------------------------------------------------------
// Reutiliza el mismo patrón que app/api/feedback/route.ts:
//   - SDK @google/genai (GoogleGenAI), no fetch directo
//   - GEMINI_MODEL  -> nombre del modelo (fallback "gemini-2.5-flash")
//   - GEMINI_API_KEY -> la clave (NUNCA invertir los valores; la clave
//     va en el cliente, jamás en la URL)
// El modelo actúa como estación costera (role-play SMCP) y como
// examinador silencioso (evaluación al finalizar el intercambio).
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { getScenarioById } from "@/data/vhf-scenarios";

const MODELO = process.env.GEMINI_MODEL || "gemini-2.5-flash";

interface RadioExchange {
  speaker: "student" | "coast";
  text: string;
}

interface VhfRequestBody {
  scenarioId: string;
  transcript: string; // Lo que dijo el cadete (Web Speech API)
  history: RadioExchange[]; // Intercambios previos de esta sesión
  finalize: boolean; // true = evaluar y cerrar la sesión
}

interface VhfResponseBody {
  coastReply: string; // Respuesta hablada de la estación costera
  evaluation: null | {
    passed: boolean;
    criteria: { id: string; label: string; met: boolean; feedback: string }[];
    overallFeedback: string;
  };
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as VhfRequestBody;
    const scenario = getScenarioById(body.scenarioId);

    if (!scenario) {
      return NextResponse.json({ error: "Unknown scenario" }, { status: 400 });
    }
    if (!body.transcript?.trim() && !body.finalize) {
      return NextResponse.json({ error: "Empty transcript" }, { status: 400 });
    }
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "GEMINI_API_KEY no está configurada." }, { status: 503 });
    }

    const historyText = body.history
      .map((e) => `${e.speaker === "student" ? "CADET" : "COAST STATION"}: ${e.text}`)
      .join("\n");

    const criteriaText = scenario.criteria
      .map((c) => `- [${c.id}] ${c.label}: ${c.description}`)
      .join("\n");

    const systemPrompt = `You are two things at once inside a VHF radio training simulator for Mexican merchant marine cadets (Escuela Náutica Mercante de Tampico):

1. ROLE-PLAY: You are "${scenario.coastStation}" responding on VHF channel ${scenario.channel}. Reply EXACTLY as a real coast station operator would, using IMO Standard Marine Communication Phrases (SMCP). Keep replies short (radio transmissions, max 40 words). Never break character inside "coastReply". If the cadet's transmission is unreadable or wrong, respond as a real operator would ("Station calling, say again. Over.").

2. EXAMINER: Silently assess the cadet's radio procedure against these criteria:
${criteriaText}

SCENARIO CONTEXT:
${scenario.briefing}
Cadet's vessel: ${scenario.studentVessel.name}, call sign ${scenario.studentVessel.callSign}, position ${scenario.studentVessel.position}, ${scenario.studentVessel.persons} persons on board.
Reference model opening (do NOT reveal to the cadet): "${scenario.expectedOpening}"

IMPORTANT — the transcript comes from browser speech recognition, so be tolerant of transcription artifacts: "over" may appear as "over.", call signs may be split oddly, "MAYDAY" may appear lowercase. Judge the PROCEDURE and PHRASING, not spelling or punctuation.

RESPOND ONLY WITH VALID JSON, no markdown fences, in this exact shape:
{
  "coastReply": "string — your in-character radio reply (empty string if finalize is true and no reply is needed)",
  "evaluation": ${'null | { "passed": boolean, "criteria": [ { "id": string, "label": string, "met": boolean, "feedback": string } ], "overallFeedback": string }'}
}

Rules:
- If "finalize" is false: coastReply must contain your radio response; evaluation must be null.
- If "finalize" is true: evaluate the FULL exchange (history + last transmission). "passed" is true only if all critical criteria are met. Write "feedback" per criterion in ENGLISH, 1-2 sentences, instructor tone, constructive. "overallFeedback": 2-3 sentences summarizing, mentioning one strength and one improvement.`;

    const userPrompt = `EXCHANGE SO FAR:
${historyText || "(none — this is the first transmission)"}

CADET'S LATEST TRANSMISSION: "${body.transcript}"

finalize: ${body.finalize}`;

    const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const resp = await client.models.generateContent({
      model: MODELO,
      contents: userPrompt,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json",
        temperature: 0.4,
        maxOutputTokens: 1024,
      },
    });

    const rawText = resp.text ?? "";
    if (!rawText) {
      return NextResponse.json({ error: "AI request returned no text" }, { status: 502 });
    }

    // El modelo debe devolver JSON con la forma VhfResponseBody. Quitamos posibles
    // fences ```json ... ``` y parseamos con fallback seguro.
    const cleaned = rawText
      .trim()
      .replace(/^```(?:json)?\s*/i, "")
      .replace(/\s*```$/i, "")
      .trim();

    let parsed: VhfResponseBody;
    try {
      parsed = JSON.parse(cleaned) as VhfResponseBody;
    } catch {
      console.error("[VHF] JSON parse failure:", rawText);
      return NextResponse.json({ error: "AI response malformed" }, { status: 502 });
    }

    return NextResponse.json(parsed);
  } catch (err) {
    console.error("[VHF] Unexpected error", err);
    return NextResponse.json({ error: "Server error", detail: String(err) }, { status: 500 });
  }
}

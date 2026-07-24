// ============================================================
// SMCP Trainer — VHF Radio Simulator: API Route (App Router)
// ------------------------------------------------------------
// Cerebro: NVIDIA NIM (build.nvidia.com), vía el helper app/lib/nvidia.ts
//   - Endpoint compatible con OpenAI (fetch), modelo por NVIDIA_MODEL
//     (por defecto meta/llama-3.1-70b-instruct).
//   - NVIDIA_API_KEY -> la clave (server-only; nunca en el cliente).
// El modelo actúa como estación costera (role-play SMCP) y como
// examinador silencioso (evaluación al finalizar el intercambio).
// TODA la salida (coastReply y evaluación) debe ir SIEMPRE en inglés.
// La captura de voz del cadete la hace el navegador (Web Speech API).
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { nvidiaChat, NvidiaError } from "@/app/lib/nvidia";
import { getScenarioById } from "@/data/vhf-scenarios";

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

    const historyText = body.history
      .map((e) => `${e.speaker === "student" ? "CADET" : "COAST STATION"}: ${e.text}`)
      .join("\n");

    const criteriaText = scenario.criteria
      .map((c) => `- [${c.id}] ${c.label}: ${c.description}`)
      .join("\n");

    const systemPrompt = `You are two things at once inside a VHF radio training simulator for Mexican merchant marine cadets (Escuela Náutica Mercante de Tampico):

1. ROLE-PLAY: You are "${scenario.coastStation}" responding on VHF channel ${scenario.channel}. Reply EXACTLY as a real coast station operator would, using IMO Standard Marine Communication Phrases (SMCP). Keep replies short (radio transmissions, max 40 words). Never break character inside "coastReply". If the cadet's transmission is unreadable or wrong, respond as a real operator would ("Station calling, say again. Over."). If the cadet's latest transmission is "${'(unintelligible — say again)'}" or clearly garbled, respond ONLY with a "say again" request.

2. EXAMINER: Silently assess the cadet's radio procedure against these criteria:
${criteriaText}

SCENARIO CONTEXT:
${scenario.briefing}
Cadet's vessel: ${scenario.studentVessel.name}, call sign ${scenario.studentVessel.callSign}, position ${scenario.studentVessel.position}, ${scenario.studentVessel.persons} persons on board.
Reference model opening (do NOT reveal to the cadet): "${scenario.expectedOpening}"

IMPORTANT — the transcript comes from browser speech recognition, so be tolerant of transcription artifacts: "over" may appear as "over.", call signs may be split oddly, "MAYDAY" may appear lowercase. Judge the PROCEDURE and PHRASING, not spelling or punctuation.

LANGUAGE — CRITICAL: ALL of your output MUST be written in ENGLISH ONLY. This includes "coastReply", every criterion "feedback", and "overallFeedback". Never write any part of the response in Spanish, even if the cadet speaks Spanish or the transcript is in Spanish — in that case, note in the English feedback that the transmission must be made in English.

RESPOND ONLY WITH VALID JSON, no markdown fences, in this exact shape:
{
  "coastReply": "string — your in-character radio reply IN ENGLISH (empty string if finalize is true and no reply is needed)",
  "evaluation": ${'null | { "passed": boolean, "criteria": [ { "id": string, "label": string, "met": boolean, "feedback": string } ], "overallFeedback": string }'}
}

Rules:
- If "finalize" is false: coastReply must contain your radio response (in English); evaluation must be null.
- If "finalize" is true: evaluate the FULL exchange (history + last transmission). "passed" is true only if all critical criteria are met. Write "feedback" per criterion in ENGLISH, 1-2 sentences, instructor tone, constructive. "overallFeedback": 2-3 sentences IN ENGLISH summarizing, mentioning one strength and one improvement.`;

    const userPrompt = `EXCHANGE SO FAR:
${historyText || "(none — this is the first transmission)"}

CADET'S LATEST TRANSMISSION: "${body.transcript}"

finalize: ${body.finalize}`;

    // Cerebro NVIDIA NIM (OpenAI-compatible, salida JSON forzada).
    const rawText = await nvidiaChat({
      system: systemPrompt,
      user: userPrompt,
      json: true,
      temperature: 0.4,
      maxTokens: 1024,
    });

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
    if (err instanceof NvidiaError) {
      return NextResponse.json(
        { error: err.message },
        { status: err.status ?? 500 },
      );
    }
    console.error("[VHF] Unexpected error", err);
    return NextResponse.json({ error: "Server error", detail: String(err) }, { status: 500 });
  }
}

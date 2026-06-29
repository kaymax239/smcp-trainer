import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

// Mismo patrón que planeaciones-nautica: SDK @google/genai, modelo por env con
// fallback a flash, y systemInstruction + contents.
const MODELO = process.env.GEMINI_MODEL || "gemini-2.5-flash";

export async function POST(req: NextRequest) {
  try {
    const { taskTitle, scenario, instructions, deliverable, assessmentCriteria, studentResponse } = await req.json();

    if (!studentResponse || studentResponse.trim().length === 0) {
      return NextResponse.json({ error: "Empty response" }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "GEMINI_API_KEY no está configurada." }, { status: 503 });
    }

    const systemPrompt = `You are a maritime training instructor giving feedback to a cadet at a naval academy. The cadet is completing a task that is taught in English (the working language of the sea). Your feedback must be supportive, specific, and constructive.

Evaluate the cadet's response against each assessment criterion. For each criterion, say whether it is met, partially met, or not yet met, and give one concrete suggestion to improve. Keep the tone encouraging — this is a learning exercise. Write your feedback in clear English, but you may add a short summary line in Spanish at the end (prefixed "Resumen:") since the cadets are Spanish speakers.

Do not rewrite the whole answer for them. Guide them to improve it themselves.`;

    const userPrompt = `TASK: ${taskTitle ?? ""}

SCENARIO: ${scenario ?? ""}

INSTRUCTIONS:
${(instructions || []).map((s: string, i: number) => `${i + 1}. ${s}`).join("\n")}

DELIVERABLE EXPECTED: ${deliverable ?? ""}

ASSESSMENT CRITERIA:
${(assessmentCriteria || []).map((s: string) => `- ${s}`).join("\n")}

CADET'S RESPONSE:
${studentResponse}

Give feedback against each criterion, then a short overall comment.`;

    const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const resp = await client.models.generateContent({
      model: MODELO,
      contents: userPrompt,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.4,
      },
    });

    const feedback = resp.text ?? "";

    if (!feedback) {
      return NextResponse.json({ error: "AI request returned no text" }, { status: 502 });
    }

    return NextResponse.json({ feedback });
  } catch (err) {
    return NextResponse.json({ error: "Server error", detail: String(err) }, { status: 500 });
  }
}

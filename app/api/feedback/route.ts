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

Do not rewrite the whole answer for them. Guide them to improve it themselves.

You must respond ONLY with a valid JSON object, no markdown, no backticks, with exactly this shape:
{
  "passed": true or false,
  "feedback": "your full feedback text here, evaluating each criterion, in English with a short Resumen line in Spanish at the end"
}
Set "passed" to true ONLY if the cadet's response genuinely meets the majority of the assessment criteria and fulfills the deliverable. If the response is empty, off-topic, or fails most criteria, set "passed" to false. Be fair but rigorous — this is a real evaluation.`;

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
        responseMimeType: "application/json",
        temperature: 0.4,
      },
    });

    const rawText = resp.text ?? "";

    if (!rawText) {
      return NextResponse.json({ error: "AI request returned no text" }, { status: 502 });
    }

    // El modelo debe devolver JSON { passed, feedback }. Quitamos posibles fences
    // ```json ... ``` y parseamos con fallback seguro para no romper.
    const cleaned = rawText
      .trim()
      .replace(/^```(?:json)?\s*/i, "")
      .replace(/\s*```$/i, "")
      .trim();

    let passed = false;
    let feedback = rawText;
    try {
      const parsed = JSON.parse(cleaned);
      passed = parsed.passed === true;
      feedback =
        typeof parsed.feedback === "string" && parsed.feedback.trim().length > 0
          ? parsed.feedback
          : rawText;
    } catch {
      // Si no es JSON válido, devolvemos el texto crudo y passed=false.
      passed = false;
      feedback = rawText;
    }

    return NextResponse.json({ passed, feedback });
  } catch (err) {
    return NextResponse.json({ error: "Server error", detail: String(err) }, { status: 500 });
  }
}

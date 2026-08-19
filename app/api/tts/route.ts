import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { getAccentById } from "@/app/lib/accents";

// ============================================================
// SMCP Trainer — Text-to-Speech con acento (Gemini TTS)
// ------------------------------------------------------------
// Mismo patrón de credenciales que app/api/feedback/route.ts
// (SDK @google/genai + GEMINI_API_KEY), pero con un modelo TTS
// distinto: los modelos "-tts" devuelven audio, no texto.
//
// El acento se logra con una indicación de estilo en lenguaje
// natural (accents.ts → styleInstruction) antepuesta al texto.
// Gemini TTS devuelve PCM crudo (16-bit LE, mono, 24 kHz), así
// que le ponemos una cabecera WAV antes de responder para que
// <audio> lo reproduzca directo.
// ============================================================

// Modelo TTS por env con fallback. OJO: NO reutilizamos GEMINI_MODEL
// (ese es de texto, gemini-2.5-flash). El TTS necesita un modelo "-tts".
const TTS_MODEL = process.env.GEMINI_TTS_MODEL || "gemini-2.5-flash-preview-tts";

// Límite defensivo: el TTS es de pago y con latencia. Un texto de
// radio SMCP no debería pasar de unos cientos de caracteres.
const MAX_CHARS = 800;

/** Envuelve PCM crudo (16-bit LE, mono) en una cabecera WAV de 44 bytes. */
function pcmToWav(pcm: Buffer, sampleRate: number): Buffer {
  const channels = 1;
  const bitsPerSample = 16;
  const byteRate = (sampleRate * channels * bitsPerSample) / 8;
  const blockAlign = (channels * bitsPerSample) / 8;
  const dataSize = pcm.length;

  const header = Buffer.alloc(44);
  header.write("RIFF", 0);
  header.writeUInt32LE(36 + dataSize, 4);
  header.write("WAVE", 8);
  header.write("fmt ", 12);
  header.writeUInt32LE(16, 16); // tamaño del sub-chunk fmt (PCM)
  header.writeUInt16LE(1, 20); // formato de audio = 1 (PCM)
  header.writeUInt16LE(channels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bitsPerSample, 34);
  header.write("data", 36);
  header.writeUInt32LE(dataSize, 40);

  return Buffer.concat([header, pcm]);
}

/** Extrae la frecuencia de muestreo del mimeType ("audio/L16;rate=24000"). */
function sampleRateFromMime(mime: string | undefined): number {
  const m = mime?.match(/rate=(\d+)/i);
  return m ? Number(m[1]) : 24000;
}

export async function POST(req: NextRequest) {
  try {
    const { text, accentId } = await req.json();

    if (!text || typeof text !== "string" || text.trim().length === 0) {
      return NextResponse.json({ error: "Empty text" }, { status: 400 });
    }
    if (text.length > MAX_CHARS) {
      return NextResponse.json(
        { error: `Text too long (max ${MAX_CHARS} chars)` },
        { status: 413 },
      );
    }
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY no está configurada." },
        { status: 503 },
      );
    }

    const accent = getAccentById(accentId);
    // La indicación de estilo va como parte del prompt; Gemini TTS la
    // aplica al leer el texto entre comillas.
    const prompt = `${accent.styleInstruction}\n\nSay exactly this: "${text.trim()}"`;

    const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    // Gemini TTS suelta 500 transitorios ("internal error, please retry") cada
    // tanto. Reintentamos hasta 3 veces antes de rendirnos; así el acento
    // elegido gana casi siempre en vez de caer al respaldo del navegador.
    const MAX_ATTEMPTS = 3;
    let part: { inlineData?: { data?: string; mimeType?: string } } | undefined;
    let lastErr: unknown = null;
    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
      try {
        const resp = await client.models.generateContent({
          model: TTS_MODEL,
          contents: prompt,
          config: {
            responseModalities: ["AUDIO"],
            speechConfig: {
              voiceConfig: {
                prebuiltVoiceConfig: { voiceName: accent.voiceName },
              },
            },
          },
        });
        part = resp.candidates?.[0]?.content?.parts?.[0];
        if (part?.inlineData?.data) break; // audio recibido
      } catch (e) {
        lastErr = e;
      }
    }

    const b64 = part?.inlineData?.data;

    if (!b64) {
      return NextResponse.json(
        { error: "TTS returned no audio", detail: lastErr ? String(lastErr) : undefined },
        { status: 502 },
      );
    }

    const pcm = Buffer.from(b64, "base64");
    const sampleRate = sampleRateFromMime(part?.inlineData?.mimeType);
    const wav = pcmToWav(pcm, sampleRate);

    return new NextResponse(new Uint8Array(wav), {
      status: 200,
      headers: {
        "Content-Type": "audio/wav",
        "Content-Length": String(wav.length),
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Server error", detail: String(err) },
      { status: 500 },
    );
  }
}

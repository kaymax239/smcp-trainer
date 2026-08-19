// ============================================================
// SMCP Trainer — Reproducción de voz con acento (lado cliente)
// ------------------------------------------------------------
// Un solo punto por el que pasa TODO el audio de la estación:
//   speakWithAccent()  -> pide el WAV a /api/tts (Gemini) y lo reproduce.
//                         Si Gemini falla o no hay clave, cae a la voz
//                         del navegador (Web Speech API) para que la
//                         radio NUNCA quede muda.
//   stopSpeaking()     -> corta cualquier audio en curso (Gemini o Web
//                         Speech). Se llama al cambiar/reiniciar escenario.
//
// La preferencia de acento se guarda en localStorage y la fija la
// pestaña /voice-settings. Todo está protegido con `typeof window`.
// ============================================================

import { DEFAULT_ACCENT_ID, getAccentById } from "@/app/lib/accents";

const ACCENT_KEY = "smcp.voice.accent";

/** Audio de Gemini en curso — para poder cortarlo desde stopSpeaking(). */
let currentAudio: HTMLAudioElement | null = null;

export function getAccentPreference(): string {
  if (typeof window === "undefined") return DEFAULT_ACCENT_ID;
  return localStorage.getItem(ACCENT_KEY) || DEFAULT_ACCENT_ID;
}

export function setAccentPreference(id: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(ACCENT_KEY, id);
}

/** Corta cualquier voz en curso (Gemini y/o Web Speech). */
export function stopSpeaking(): void {
  if (typeof window === "undefined") return;
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.src = "";
    currentAudio = null;
  }
  window.speechSynthesis?.cancel();
}

/** Respaldo: voz del navegador con el timbre pausado de radio (el que había antes). */
function speakWithWebSpeech(text: string, onEnd: () => void): void {
  const synth = window.speechSynthesis;
  if (!synth) {
    onEnd();
    return;
  }
  synth.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-US";
  utter.rate = 0.92;
  utter.pitch = 0.9;
  const voice =
    synth.getVoices().find((v) => v.lang.startsWith("en-GB")) ||
    synth.getVoices().find((v) => v.lang.startsWith("en-US"));
  if (voice) utter.voice = voice;
  utter.onend = onEnd;
  utter.onerror = onEnd; // pase lo que pase, no dejamos colgado al llamador
  synth.speak(utter);
}

/**
 * Reproduce `text` con el acento elegido (o el que se pase en opts).
 * `onEnd` se llama SIEMPRE al terminar (o al fallar), para que la máquina
 * de estados del simulador vuelva a 'idle'.
 */
export async function speakWithAccent(
  text: string,
  onEnd: () => void,
  opts?: { accentId?: string },
): Promise<void> {
  if (typeof window === "undefined") {
    onEnd();
    return;
  }

  stopSpeaking();

  const accentId = opts?.accentId ?? getAccentPreference();

  try {
    const res = await fetch("/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, accentId }),
    });
    if (!res.ok) throw new Error(`TTS ${res.status}`);

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    currentAudio = audio;

    const cleanup = () => {
      URL.revokeObjectURL(url);
      if (currentAudio === audio) currentAudio = null;
    };
    audio.onended = () => {
      cleanup();
      onEnd();
    };
    audio.onerror = () => {
      cleanup();
      // El WAV llegó pero no se pudo reproducir: caemos a Web Speech.
      speakWithWebSpeech(text, onEnd);
    };
    await audio.play();
  } catch {
    // Sin clave, error de red o del modelo: respaldo con voz del navegador.
    speakWithWebSpeech(text, onEnd);
  }
}

/** Nombre de la voz base que devuelve el acento (por si se quiere mostrar). */
export function accentVoiceName(accentId: string): string {
  return getAccentById(accentId).voiceName;
}

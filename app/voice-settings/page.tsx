"use client";

// ============================================================
// SMCP Trainer — Pestaña "Acento de la voz"
// ------------------------------------------------------------
// El usuario elige con qué acento habla la estación costera del
// simulador VHF. La elección se guarda en localStorage (helper
// app/lib/voice.ts) y se aplica automáticamente en /vhf.
//
// Cada tarjeta permite "Probar voz": genera un audio de muestra
// con Gemini TTS y lo reproduce. Southern y Cajún solo son
// posibles por esta vía (Gemini), no con la voz del navegador.
// ============================================================

import Link from "next/link";
import { useEffect, useState } from "react";
import { ACCENTS } from "@/app/lib/accents";
import {
  getAccentPreference,
  setAccentPreference,
  speakWithAccent,
  stopSpeaking,
} from "@/app/lib/voice";

// Frase de muestra en estilo SMCP para la previsualización.
const PREVIEW_TEXT =
  "Motor Vessel Aurora, this is Tampico Coast Radio. Your message is received. Standing by on channel one-six. Over.";

export default function VoiceSettingsPage() {
  const [selected, setSelected] = useState<string>(ACCENTS[0].id);
  const [previewing, setPreviewing] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // localStorage solo existe en el cliente: leemos tras montar.
  useEffect(() => {
    setSelected(getAccentPreference());
    return () => stopSpeaking(); // al salir de la pestaña, cortar audio
  }, []);

  function choose(id: string) {
    setSelected(id);
    setAccentPreference(id);
  }

  async function preview(id: string) {
    setError(null);
    choose(id); // elegir y probar en el mismo gesto
    setPreviewing(id);
    await speakWithAccent(
      PREVIEW_TEXT,
      () => setPreviewing((p) => (p === id ? null : p)),
      { accentId: id },
    );
  }

  return (
    <div className="mx-auto max-w-3xl p-6">
      <Link
        href="/"
        className="text-sm text-[var(--muted)] underline hover:text-[var(--mist)]"
      >
        ← Volver al panel
      </Link>

      <h1 className="mb-1 mt-4 text-2xl font-bold text-[var(--mist)]">
        Acento de la voz
      </h1>
      <p className="mb-6 text-sm text-[var(--muted)]">
        Elige con qué acento habla la estación costera en el{" "}
        <Link href="/vhf" className="underline hover:text-[var(--mist)]">
          simulador VHF
        </Link>
        . Se guarda en este dispositivo y se aplica de inmediato. Pulsa{" "}
        <span className="font-semibold text-[var(--steel)]">Probar voz</span>{" "}
        para escuchar una muestra.
      </p>

      {error && (
        <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>
      )}

      <div className="grid gap-3 sm:grid-cols-2">
        {ACCENTS.map((a) => {
          const isSelected = selected === a.id;
          const isLoading = previewing === a.id;
          return (
            <div
              key={a.id}
              onClick={() => choose(a.id)}
              className={
                "cursor-pointer rounded-xl border bg-[var(--panel)] p-4 shadow-sm transition " +
                (isSelected
                  ? "border-[var(--signal)] ring-2 ring-[var(--signal)]/40"
                  : "border-[var(--line)] hover:border-[var(--signal)]")
              }
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl" aria-hidden>
                    {a.flag}
                  </span>
                  <h2 className="font-semibold text-[var(--mist)]">{a.label}</h2>
                </div>
                {isSelected && (
                  <span className="rounded-full bg-[var(--signal)]/15 px-2 py-0.5 text-xs font-semibold text-[var(--signal)]">
                    Elegido
                  </span>
                )}
              </div>

              <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
                {a.description}
              </p>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  void preview(a.id);
                }}
                disabled={isLoading}
                className="mt-3 inline-flex items-center gap-2 rounded-lg border border-[var(--line)] px-3 py-1.5 text-xs font-semibold text-[var(--mist)] transition hover:bg-[var(--panel-strong)] disabled:opacity-50"
              >
                {isLoading ? "🔊 Generando…" : "▶ Probar voz"}
              </button>
            </div>
          );
        })}
      </div>

      <p className="mt-6 text-xs leading-relaxed text-[var(--muted)]">
        La voz se genera con Gemini TTS. Los acentos exóticos (sureño, cajún)
        tienen calidad variable. Si el servicio no responde, la radio usa la voz
        del navegador como respaldo.
      </p>
    </div>
  );
}

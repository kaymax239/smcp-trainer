"use client";

import { useEffect, useId, useState } from "react";
import { speakWithAccent, stopSpeaking } from "@/app/lib/voice";
import s from "./libro.module.css";

// Solo un botón suena a la vez: guardamos quién está sonando y avisamos
// a los demás para que vuelvan a su estado normal.
let sonandoId: string | null = null;
const oyentes = new Set<() => void>();
function setSonando(id: string | null) {
  sonandoId = id;
  for (const o of oyentes) o();
}

interface SpeakButtonProps {
  /** Texto en inglés que se lee en voz alta. */
  texto: string;
  /** Descripción para lectores de pantalla, p. ej. "Escuchar: Mayday". */
  etiqueta?: string;
  className?: string;
}

/** Botón 🔊 de 48×48 px. Usa speakWithAccent / stopSpeaking tal como están. */
export function SpeakButton({ texto, etiqueta, className }: SpeakButtonProps) {
  const id = useId();
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    const oyente = () => setActivo(sonandoId === id);
    oyentes.add(oyente);
    return () => {
      oyentes.delete(oyente);
      if (sonandoId === id) {
        stopSpeaking();
        setSonando(null);
      }
    };
  }, [id]);

  function alPulsar() {
    if (sonandoId === id) {
      stopSpeaking();
      setSonando(null);
      return;
    }
    setSonando(id);
    void speakWithAccent(texto, () => {
      if (sonandoId === id) setSonando(null);
    });
  }

  const label = activo ? "Detener audio" : (etiqueta ?? `Escuchar: ${texto}`);

  return (
    <button
      type="button"
      className={`${s.speak} ${activo ? s.speakActive : ""} ${className ?? ""}`}
      onClick={alPulsar}
      aria-label={label}
      aria-pressed={activo}
      title={activo ? "Detener" : "Escuchar"}
    >
      <span aria-hidden="true">{activo ? "■" : "🔊"}</span>
    </button>
  );
}

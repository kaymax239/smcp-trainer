"use client";

import { useState } from "react";
import type { EjercicioEscucharElegir, Frase } from "@/lib/content/schema";
import { SpeakButton } from "../../SpeakButton";
import { idiomaDe } from "../idioma";
import css from "../leccion.module.css";
import { Opciones } from "./Opciones";
import { Retro } from "./Retro";
import type { EjercicioUIProps } from "./tipos";

interface Props extends EjercicioUIProps<EjercicioEscucharElegir> {
  /** Frase del banco citada por `fraseId` (puede faltar si el contenido está roto). */
  frase: Frase | undefined;
}

/** Escucha la frase (sin ver el texto en inglés) y elige la opción. */
export function EscucharElegir({ ejercicio, frase, revelado, onCambio }: Props) {
  const [elegida, setElegida] = useState<number | null>(null);
  const acerto = elegida === ejercicio.correcta;

  const extra = frase ? (
    <div className={css.escuchar}>
      <SpeakButton texto={frase.en} etiqueta="Escuchar la frase del ejercicio" />
      <span>Toca 🔊 para escuchar (puedes repetirlo).</span>
    </div>
  ) : (
    <p className={css.aviso}>El audio de este ejercicio no está disponible.</p>
  );

  return (
    <div>
      <Opciones
        enunciado={<span lang={idiomaDe(ejercicio.enunciado)}>{ejercicio.enunciado}</span>}
        extra={extra}
        opciones={ejercicio.opciones}
        correcta={ejercicio.correcta}
        elegida={elegida}
        revelado={revelado}
        onElegir={(i) => {
          setElegida(i);
          onCambio(i === ejercicio.correcta);
        }}
      />
      <div aria-live="polite">
        {revelado ? (
          <Retro correcta={acerto}>
            {frase ? (
              <>
                {" "}
                La frase era: <strong lang="en">{frase.en}</strong> ({frase.es})
              </>
            ) : null}
          </Retro>
        ) : null}
      </div>
    </div>
  );
}

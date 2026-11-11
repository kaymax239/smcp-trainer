"use client";

import { useId, useState } from "react";
import type { PreguntaLectura } from "@/lib/content/lectura-capitulo";
import css from "../leccion/leccion.module.css";
import base from "../libro.module.css";
import c from "./capitulo.module.css";

/** Una pregunta de comprensión: al elegir se revela al momento si es correcta. */
function Pregunta({ p, numero }: { p: PreguntaLectura; numero: number }) {
  const nombre = useId();
  const [elegida, setElegida] = useState<number | null>(null);
  const revelado = elegida !== null;
  const acierto = elegida === p.correcta;

  return (
    <div className={css.tarjeta}>
      <fieldset className={css.fieldset}>
        <legend className={css.enunciado}>
          <span className={css.etiqueta}>Question {numero} of 3</span> {p.pregunta}
        </legend>
        <div className={css.opciones}>
          {p.opciones.map((texto, i) => {
            const marcada = elegida === i;
            const esCorrecta = i === p.correcta;
            const clases = [css.opcion];
            if (revelado) {
              clases.push(css.opcionBloqueada);
              if (esCorrecta) clases.push(css.opcionOk);
              else if (marcada) clases.push(css.opcionBad);
            }
            return (
              <label key={i} className={clases.join(" ")}>
                <input
                  type="radio"
                  className={css.radio}
                  name={nombre}
                  value={i}
                  checked={marcada}
                  disabled={revelado}
                  onChange={() => setElegida(i)}
                />
                <span className={css.opcionTexto}>{texto}</span>
                {revelado && esCorrecta ? <span className={`${css.marca} ${css.marcaOk}`}>✓ Correct answer</span> : null}
                {revelado && marcada && !esCorrecta ? (
                  <span className={`${css.marca} ${css.marcaBad}`}>✗ Your answer</span>
                ) : null}
              </label>
            );
          })}
        </div>
      </fieldset>
      {revelado ? (
        <div className={`${css.retro} ${acierto ? css.retroOk : css.retroBad}`} role="status">
          <span className={css.retroTitulo}>
            <span aria-hidden="true">{acierto ? "✓ " : "✗ "}</span>
            {acierto ? "Correct!" : "Not quite. Read the text again."}
          </span>
          <button type="button" className={`${base.btnSecondary} ${c.reintentar}`} onClick={() => setElegida(null)}>
            Try again
          </button>
        </div>
      ) : null}
    </div>
  );
}

export function PreguntasLectura({ preguntas }: { preguntas: PreguntaLectura[] }) {
  return (
    <div className={css.preguntas}>
      {preguntas.map((p, i) => (
        <Pregunta key={i} p={p} numero={i + 1} />
      ))}
    </div>
  );
}

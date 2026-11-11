"use client";

import { useState } from "react";
import type { Ejercicio, Frase } from "@/lib/content/schema";
import base from "../libro.module.css";
import { EjercicioUI, NOMBRE_TIPO } from "./ejercicios/EjercicioUI";
import css from "./leccion.module.css";

interface Props {
  ejercicio: Ejercicio;
  frasesPorId: Record<string, Frase>;
  numero: number;
  total: number;
}

/**
 * Un ejercicio de práctica: "Comprobar" muestra la retroalimentación;
 * "Intentar de nuevo" lo remonta (y vuelve a revolver). No cuenta para
 * la calificación. Los botones son secundarios: el principal es del quiz.
 */
export function EjercicioPractica({ ejercicio, frasesPorId, numero, total }: Props) {
  const [intento, setIntento] = useState(0);
  const [respuesta, setRespuesta] = useState<boolean | null>(null);
  const [comprobado, setComprobado] = useState(false);

  function reiniciar() {
    setIntento((n) => n + 1);
    setRespuesta(null);
    setComprobado(false);
  }

  return (
    <article className={css.tarjeta} aria-label={`Ejercicio ${numero} de ${total}`}>
      <p className={css.etiqueta}>
        Ejercicio {numero} de {total} · {NOMBRE_TIPO[ejercicio.tipo]}
      </p>
      <EjercicioUI
        key={intento}
        ejercicio={ejercicio}
        frasesPorId={frasesPorId}
        revelado={comprobado}
        onCambio={setRespuesta}
      />
      <div className={css.acciones}>
        {comprobado ? (
          <button type="button" className={base.btnSecondary} onClick={reiniciar}>
            Intentar de nuevo
          </button>
        ) : (
          <>
            <button
              type="button"
              className={base.btnSecondary}
              disabled={respuesta === null}
              onClick={() => setComprobado(true)}
            >
              Comprobar
            </button>
            {respuesta === null ? <span className={css.ayuda}>Responde para comprobar.</span> : null}
          </>
        )}
      </div>
    </article>
  );
}

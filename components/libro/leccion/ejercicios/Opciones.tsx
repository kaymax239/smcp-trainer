"use client";

import { useId, type ReactNode } from "react";
import { usePermutacion } from "../barajar";
import { idiomaDe } from "../idioma";
import css from "../leccion.module.css";

interface OpcionesProps {
  /** Contenido de la <legend> (el enunciado). */
  enunciado: ReactNode;
  /** Algo que va entre el enunciado y las opciones (p. ej. el botón 🔊). */
  extra?: ReactNode;
  opciones: string[];
  correcta: number;
  elegida: number | null;
  revelado: boolean;
  onElegir: (indice: number) => void;
}

/**
 * Grupo de opciones de respuesta única (radios nativos con área táctil
 * grande). Las opciones se revuelven al montar.
 */
export function Opciones({
  enunciado,
  extra,
  opciones,
  correcta,
  elegida,
  revelado,
  onElegir,
}: OpcionesProps) {
  const nombre = useId();
  const orden = usePermutacion(opciones.length);

  return (
    <fieldset className={css.fieldset}>
      <legend className={css.enunciado}>{enunciado}</legend>
      {extra}
      {orden === null ? (
        <p className={css.cargando}>Preparando opciones…</p>
      ) : (
        <div className={css.opciones}>
          {orden.map((i) => {
            const texto = opciones[i];
            const marcada = elegida === i;
            const esCorrecta = i === correcta;
            const clases = [css.opcion];
            if (revelado) {
              clases.push(css.opcionBloqueada);
              if (esCorrecta) clases.push(css.opcionOk);
              else if (marcada) clases.push(css.opcionBad);
            } else if (marcada) {
              clases.push(css.opcionElegida);
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
                  onChange={() => onElegir(i)}
                />
                <span className={css.opcionTexto} lang={idiomaDe(texto)}>
                  {texto}
                </span>
                {revelado && esCorrecta ? (
                  <span className={`${css.marca} ${css.marcaOk}`}>✓ Correcta</span>
                ) : null}
                {revelado && marcada && !esCorrecta ? (
                  <span className={`${css.marca} ${css.marcaBad}`}>✗ Tu respuesta</span>
                ) : null}
              </label>
            );
          })}
        </div>
      )}
    </fieldset>
  );
}

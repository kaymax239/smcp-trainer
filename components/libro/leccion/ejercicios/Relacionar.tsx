"use client";

import { useState } from "react";
import type { EjercicioRelacionar } from "@/lib/content/schema";
import { usePermutacion } from "../barajar";
import { idiomaDe } from "../idioma";
import css from "../leccion.module.css";
import { Retro } from "./Retro";
import type { EjercicioUIProps } from "./tipos";

/**
 * Relacionar columnas tocando (sin arrastrar): se toca un elemento de una
 * columna y luego su pareja en la otra. Cada pareja comparte un número.
 * La columna derecha se revuelve al montar.
 */
export function Relacionar({ ejercicio, revelado, onCambio }: EjercicioUIProps<EjercicioRelacionar>) {
  const { pares } = ejercicio;
  const ordenDerecha = usePermutacion(pares.length);
  /** asignacion[i] = índice (en `pares`) de la derecha emparejada con la izquierda i. */
  const [asignacion, setAsignacion] = useState<(number | null)[]>(() => pares.map(() => null));
  const [selIzq, setSelIzq] = useState<number | null>(null);
  const [selDer, setSelDer] = useState<number | null>(null);
  const [aviso, setAviso] = useState("");

  const esPareja = (i: number, j: number | null) => j !== null && pares[j].derecha === pares[i].derecha;
  const acerto = asignacion.every((j, i) => esPareja(i, j));

  function emparejar(i: number, j: number) {
    const nueva = asignacion.map((v) => (v === j ? null : v));
    nueva[i] = j;
    setAsignacion(nueva);
    setSelIzq(null);
    setSelDer(null);
    setAviso(`«${pares[i].izquierda}» emparejado con «${pares[j].derecha}».`);
    const completa = nueva.every((v) => v !== null);
    onCambio(completa ? nueva.every((v, k) => esPareja(k, v)) : null);
  }

  function tocarIzq(i: number) {
    if (selDer !== null) return emparejar(i, selDer);
    setSelIzq(selIzq === i ? null : i);
    setAviso(selIzq === i ? "" : `Elegiste «${pares[i].izquierda}». Ahora toca su pareja.`);
  }

  function tocarDer(j: number) {
    if (selIzq !== null) return emparejar(selIzq, j);
    setSelDer(selDer === j ? null : j);
    setAviso(selDer === j ? "" : `Elegiste «${pares[j].derecha}». Ahora toca su pareja.`);
  }

  /** Número de la izquierda emparejada con la derecha j (1-based), o null. */
  const numeroDeDerecha = (j: number) => {
    const i = asignacion.indexOf(j);
    return i === -1 ? null : i + 1;
  };

  return (
    <div>
      <p className={css.enunciado} lang={idiomaDe(ejercicio.enunciado)}>
        {ejercicio.enunciado}
      </p>
      {!revelado ? (
        <p className={css.ayuda}>Toca un elemento de cada columna para unirlos. Las parejas llevan el mismo número.</p>
      ) : null}
      {ordenDerecha === null ? (
        <p className={css.cargando}>Preparando columnas…</p>
      ) : (
        <div className={css.columnas}>
          <ul className={css.columna} aria-label="Columna izquierda">
            {pares.map((p, i) => {
              const j = asignacion[i];
              const clases = [css.ficha];
              if (revelado) clases.push(esPareja(i, j) ? css.fichaOk : css.fichaBad);
              else if (selIzq === i) clases.push(css.fichaSeleccionada);
              const estado =
                j === null ? "sin pareja" : `emparejado con ${pares[j].derecha}`;
              return (
                <li key={i}>
                  <button
                    type="button"
                    className={clases.join(" ")}
                    disabled={revelado}
                    aria-pressed={selIzq === i}
                    aria-label={`${p.izquierda}, ${estado}`}
                    onClick={() => tocarIzq(i)}
                  >
                    <span className={css.numero} aria-hidden="true">
                      {i + 1}
                    </span>
                    <span className={css.fichaTexto} lang={idiomaDe(p.izquierda)}>
                      {p.izquierda}
                    </span>
                    {revelado ? (
                      <span className={`${css.marca} ${esPareja(i, j) ? css.marcaOk : css.marcaBad}`} aria-hidden="true">
                        {esPareja(i, j) ? "✓" : "✗"}
                      </span>
                    ) : null}
                  </button>
                  {revelado && !esPareja(i, j) ? (
                    <p className={css.correccion}>Correcto: {p.derecha}</p>
                  ) : null}
                </li>
              );
            })}
          </ul>
          <ul className={css.columna} aria-label="Columna derecha">
            {ordenDerecha.map((j) => {
              const n = numeroDeDerecha(j);
              const clases = [css.ficha];
              if (!revelado && selDer === j) clases.push(css.fichaSeleccionada);
              const estado = n === null ? "sin pareja" : `emparejado con ${pares[n - 1].izquierda}`;
              return (
                <li key={j}>
                  <button
                    type="button"
                    className={clases.join(" ")}
                    disabled={revelado}
                    aria-pressed={selDer === j}
                    aria-label={`${pares[j].derecha}, ${estado}`}
                    onClick={() => tocarDer(j)}
                  >
                    <span
                      className={`${css.numero} ${n === null ? css.numeroVacio : ""}`}
                      aria-hidden="true"
                    >
                      {n ?? "–"}
                    </span>
                    <span className={css.fichaTexto}>{pares[j].derecha}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <p className={css.aviso} aria-live="polite">
        {revelado ? "" : aviso}
      </p>
      <div aria-live="polite">
        {revelado ? (
          <Retro correcta={acerto}>
            {acerto ? null : " Revisa las parejas marcadas con ✗."}
          </Retro>
        ) : null}
      </div>
    </div>
  );
}

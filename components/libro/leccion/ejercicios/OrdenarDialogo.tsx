"use client";

import { useEffect, useRef, useState } from "react";
import type { EjercicioOrdenarDialogo, LineaDialogo } from "@/lib/content/schema";
import { permutacion } from "../barajar";
import { idiomaDe } from "../idioma";
import css from "../leccion.module.css";
import { Retro } from "./Retro";
import type { EjercicioUIProps } from "./tipos";

function mismaLinea(a: LineaDialogo, b: LineaDialogo) {
  return a.hablante === b.hablante && a.texto === b.texto;
}

/**
 * Ordenar un diálogo con botones ↑/↓ (sin arrastrar). Las líneas llegan en
 * el orden correcto y se desordenan al montar (nunca quedan en el orden correcto).
 */
export function OrdenarDialogo({ ejercicio, revelado, onCambio }: EjercicioUIProps<EjercicioOrdenarDialogo>) {
  const { lineas } = ejercicio;
  const n = lineas.length;
  /** orden[pos] = índice (en `lineas`) de la línea mostrada en esa posición. */
  const [orden, setOrden] = useState<number[] | null>(null);
  const [aviso, setAviso] = useState("");
  const [foco, setFoco] = useState<{ linea: number; dir: "up" | "down" } | null>(null);
  const botones = useRef(new Map<string, HTMLButtonElement>());

  const esCorrecto = (p: number[]) => p.every((li, pos) => mismaLinea(lineas[li], lineas[pos]));

  // Desordenar en el cliente, después de montar (evita errores de hidratación).
  useEffect(() => {
    const p = permutacion(n, true);
    setOrden(p);
    // Sin respuesta hasta que el cadete mueva al menos una línea
    // (el orden inicial nunca es el correcto).
    onCambio(null);
    // Solo al montar: para volver a desordenar, el padre remonta el componente.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Tras mover una línea, el foco la sigue a su nueva posición.
  useEffect(() => {
    if (!foco) return;
    const mismo = botones.current.get(`${foco.linea}-${foco.dir}`);
    const otro = botones.current.get(`${foco.linea}-${foco.dir === "up" ? "down" : "up"}`);
    // En el borde, el botón de la misma dirección queda deshabilitado: usar el otro.
    if (mismo && !mismo.disabled) mismo.focus();
    else otro?.focus();
  }, [foco, orden]);

  function mover(pos: number, delta: -1 | 1) {
    if (!orden) return;
    const destino = pos + delta;
    if (destino < 0 || destino >= n) return;
    const nuevo = [...orden];
    [nuevo[pos], nuevo[destino]] = [nuevo[destino], nuevo[pos]];
    setOrden(nuevo);
    setFoco({ linea: nuevo[destino], dir: delta === -1 ? "up" : "down" });
    setAviso(`Línea movida a la posición ${destino + 1} de ${n}.`);
    onCambio(esCorrecto(nuevo));
  }

  const acerto = orden !== null && esCorrecto(orden);

  return (
    <div>
      <p className={css.enunciado} lang={idiomaDe(ejercicio.enunciado)}>
        {ejercicio.enunciado}
      </p>
      {!revelado ? <p className={css.ayuda}>Usa ↑ y ↓ para poner las líneas en orden.</p> : null}
      {orden === null ? (
        <p className={css.cargando}>Preparando diálogo…</p>
      ) : (
        <ol className={css.lista}>
          {orden.map((li, pos) => {
            const linea = lineas[li];
            const bien = mismaLinea(linea, lineas[pos]);
            const clases = [css.linea];
            if (revelado) clases.push(bien ? css.lineaOk : css.lineaBad);
            return (
              <li key={li} className={clases.join(" ")}>
                <span className={css.numero} aria-hidden="true">
                  {pos + 1}
                </span>
                <div className={css.lineaTextos}>
                  <span className={css.hablante}>
                    {linea.hablante}
                    {revelado ? (
                      <span className={`${css.marca} ${bien ? css.marcaOk : css.marcaBad}`}>
                        {bien ? " ✓ En su lugar" : " ✗ Fuera de lugar"}
                      </span>
                    ) : null}
                  </span>
                  <p className={css.lineaTexto} lang="en">
                    {linea.texto}
                  </p>
                </div>
                {!revelado ? (
                  <div className={css.mover}>
                    <button
                      type="button"
                      className={css.flecha}
                      disabled={pos === 0}
                      aria-label={`Subir la línea ${pos + 1} (${linea.hablante})`}
                      onClick={() => mover(pos, -1)}
                      ref={(el) => {
                        if (el) botones.current.set(`${li}-up`, el);
                        else botones.current.delete(`${li}-up`);
                      }}
                    >
                      <span aria-hidden="true">↑</span>
                    </button>
                    <button
                      type="button"
                      className={css.flecha}
                      disabled={pos === n - 1}
                      aria-label={`Bajar la línea ${pos + 1} (${linea.hablante})`}
                      onClick={() => mover(pos, 1)}
                      ref={(el) => {
                        if (el) botones.current.set(`${li}-down`, el);
                        else botones.current.delete(`${li}-down`);
                      }}
                    >
                      <span aria-hidden="true">↓</span>
                    </button>
                  </div>
                ) : null}
              </li>
            );
          })}
        </ol>
      )}
      <p className={css.aviso} aria-live="polite">
        {revelado ? "" : aviso}
      </p>
      <div aria-live="polite">
        {revelado ? (
          <Retro correcta={acerto}>
            {acerto ? null : (
              <>
                {" "}
                El orden correcto es:
                <ol className={css.ordenCorrecto}>
                  {lineas.map((l, i) => (
                    <li key={i}>
                      <strong>{l.hablante}:</strong> <span lang="en">{l.texto}</span>
                    </li>
                  ))}
                </ol>
              </>
            )}
          </Retro>
        ) : null}
      </div>
    </div>
  );
}

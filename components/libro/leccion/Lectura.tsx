"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { Lectura as LecturaData, VocabularioEntrada } from "@/lib/content/schema";
import base from "../libro.module.css";
import { SpeakButton } from "../SpeakButton";
import css from "./leccion.module.css";

/** La misma regex que `extraerTerminos` en lib/content/schema.ts (con grupo de captura para `split`). */
const RE_TERMINO = /\{\{\s*([^{}]+?)\s*\}\}/;

function buscarEntrada(
  vocabulario: Record<string, VocabularioEntrada>,
  termino: string,
): VocabularioEntrada | undefined {
  if (vocabulario[termino]) return vocabulario[termino];
  const t = termino.toLowerCase();
  const clave = Object.keys(vocabulario).find((k) => k.toLowerCase() === t);
  return clave ? vocabulario[clave] : undefined;
}

interface Abierto {
  termino: string;
  entrada: VocabularioEntrada;
  boton: HTMLButtonElement;
}

/**
 * Lectura en inglés. Los términos `{{termino}}` son botones que abren una
 * hoja inferior con la traducción y el audio. La hoja se cierra con Escape,
 * tocando fuera o con "Cerrar"; al cerrarse, el foco vuelve al término.
 */
export function Lectura({ lectura }: { lectura: LecturaData }) {
  const [abierto, setAbierto] = useState<Abierto | null>(null);
  const hojaRef = useRef<HTMLDivElement>(null);
  const tituloId = useId();

  function cerrar(devolverFoco = true) {
    const boton = abierto?.boton;
    setAbierto(null);
    if (devolverFoco) boton?.focus();
  }

  // Al abrir, el foco pasa a la hoja.
  useEffect(() => {
    if (abierto) hojaRef.current?.focus();
  }, [abierto]);

  // Escape y toque fuera.
  useEffect(() => {
    if (!abierto) return;
    function alTeclear(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        cerrar();
      }
    }
    function alTocar(e: PointerEvent) {
      const t = e.target as Node | null;
      if (!t) return;
      if (hojaRef.current?.contains(t)) return;
      // Tocar otro término lo maneja su propio onClick.
      if (t instanceof Element && t.closest("[data-termino]")) return;
      cerrar(false);
    }
    document.addEventListener("keydown", alTeclear);
    document.addEventListener("pointerdown", alTocar);
    return () => {
      document.removeEventListener("keydown", alTeclear);
      document.removeEventListener("pointerdown", alTocar);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [abierto]);

  return (
    <>
      <div className={css.lectura} lang="en">
        {lectura.parrafos.map((parrafo, pi) => {
          // split con grupo de captura: las posiciones impares son términos.
          const partes = parrafo.split(new RegExp(RE_TERMINO.source, "g"));
          return (
            <p key={pi} className={css.parrafo}>
              {partes.map((parte, i) => {
                if (i % 2 === 0) return parte;
                const termino = parte.trim();
                const entrada = buscarEntrada(lectura.vocabulario, termino);
                if (!entrada) return termino;
                const activo = abierto?.termino === termino;
                return (
                  <button
                    key={i}
                    type="button"
                    data-termino=""
                    className={`${css.termino} ${activo ? css.terminoActivo : ""}`}
                    aria-haspopup="dialog"
                    aria-expanded={activo}
                    onClick={(e) => {
                      if (activo) return cerrar();
                      setAbierto({ termino, entrada, boton: e.currentTarget });
                    }}
                  >
                    {termino}
                  </button>
                );
              })}
            </p>
          );
        })}
      </div>

      {abierto ? (
        <div
          ref={hojaRef}
          className={css.hoja}
          role="dialog"
          aria-modal="false"
          aria-labelledby={tituloId}
          tabIndex={-1}
        >
          <div className={css.hojaFila}>
            <p id={tituloId} className={css.hojaTermino} lang="en">
              {abierto.termino}
            </p>
            <SpeakButton texto={abierto.termino} etiqueta={`Escuchar: ${abierto.termino}`} />
          </div>
          <p className={css.hojaTraduccion}>
            <span className={base.srOnly}>En español: </span>
            {abierto.entrada.es}
          </p>
          <button type="button" className={`${base.btnSecondary} ${css.hojaCerrar}`} onClick={() => cerrar()}>
            Cerrar
          </button>
        </div>
      ) : null}
    </>
  );
}

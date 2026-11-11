"use client";

import { useDeferredValue, useId, useMemo, useState } from "react";
import type { Frase } from "@/lib/content/loader";
import { SpeakButton } from "@/components/libro/SpeakButton";
import base from "@/components/libro/libro.module.css";
import s from "./frases.module.css";

interface BancoFrasesProps {
  frases: Frase[];
  categorias: string[];
}

const TODAS = "";

/** Minúsculas y sin acentos, para comparar "Sécurité" con "securite". */
function normalizar(texto: string): string {
  return texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();
}

export function BancoFrases({ frases, categorias }: BancoFrasesProps) {
  const idBuscar = useId();
  const idCategoria = useId();
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState(TODAS);
  const busquedaDiferida = useDeferredValue(busqueda);

  const indice = useMemo(
    () => frases.map((f) => ({ frase: f, texto: normalizar(`${f.en} ${f.es}`) })),
    [frases],
  );

  const visibles = useMemo(() => {
    const q = normalizar(busquedaDiferida);
    return indice
      .filter(({ frase, texto }) => {
        if (categoria !== TODAS && frase.categoria !== categoria) return false;
        return q === "" || texto.includes(q);
      })
      .map(({ frase }) => frase);
  }, [indice, busquedaDiferida, categoria]);

  return (
    <>
      <h1 className={base.h1}>Banco de frases</h1>
      <p className={base.muted}>
        Las {frases.length} frases SMCP con su traducción. Pulsa 🔊 para escucharlas.
      </p>

      <div className={s.filtros}>
        <div className={s.campo}>
          <label className={s.label} htmlFor={idBuscar}>
            Buscar frase
          </label>
          <input
            id={idBuscar}
            className={s.input}
            type="search"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="En inglés o en español"
            autoComplete="off"
            spellCheck={false}
          />
        </div>

        <div className={s.campo}>
          <label className={s.label} htmlFor={idCategoria}>
            Categoría
          </label>
          <select
            id={idCategoria}
            className={s.input}
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value={TODAS}>Todas las categorías</option>
            {categorias.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className={s.contador} role="status" aria-live="polite">
        Mostrando {visibles.length} de {frases.length}
      </p>

      {visibles.length === 0 ? (
        <div className={s.vacio}>
          <p className={s.vacioTitulo}>No hay frases que coincidan.</p>
          <p className={base.muted}>
            Prueba con otra palabra o elige «Todas las categorías».
          </p>
        </div>
      ) : (
        <ul className={s.lista}>
          {visibles.map((f) => (
            <li key={f.id} className={`${base.card} ${s.frase}`}>
              <div className={s.textos}>
                <p className={s.en} lang="en">
                  {f.en}
                </p>
                <p className={s.es}>{f.es}</p>
                <span className={base.badge}>{f.categoria}</span>
              </div>
              <SpeakButton texto={f.en} etiqueta={`Escuchar: ${f.en}`} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

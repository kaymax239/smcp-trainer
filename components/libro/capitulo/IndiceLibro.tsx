"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { progressStore, useProgressVersion } from "@/lib/progress/store";
import base from "../libro.module.css";
import p from "../programa/programa.module.css";
import c from "./capitulo.module.css";

export interface CapituloIndice {
  numero: number;
  titulo: string;
  unidad: string;
  tema: string;
  href: string;
  key: string;
}

/** Índice del libro: capítulos agrupados por semana, con ✓ si están hechos. */
export function IndiceLibro({ semanas }: { semanas: { semana: number; capitulos: CapituloIndice[] }[] }) {
  const version = useProgressVersion();
  const [hechos, setHechos] = useState<Set<string>>(new Set());
  const todos = semanas.flatMap((s) => s.capitulos);

  useEffect(() => {
    let vivo = true;
    Promise.all(todos.map((cap) => progressStore.getLeccion(cap.key)))
      .then((lista) => {
        if (vivo) setHechos(new Set(lista.filter((l) => l.aprobada).map((l) => l.key)));
      })
      .catch(() => {});
    return () => {
      vivo = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [version]);

  const total = todos.length;
  const listos = todos.filter((cap) => hechos.has(cap.key)).length;
  const pct = total ? Math.round((listos / total) * 100) : 0;
  const siguiente = todos.find((cap) => !hechos.has(cap.key));

  return (
    <>
      <div className={p.resumen}>
        <p className={p.resumenFila}>
          <span>
            {listos} of {total} chapters done
          </span>
          <span>{pct}%</span>
        </p>
        <div className={base.progress} role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct} aria-label="Book progress">
          <div className={base.progressFill} style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className={p.accionPrincipal}>
        {siguiente ? (
          <Link className={base.btnPrimary} href={siguiente.href}>
            {listos > 0 ? "Continue" : "Start"}: Chapter {siguiente.numero}
          </Link>
        ) : (
          <p className={c.hecho}>✓ You finished every chapter of this book.</p>
        )}
      </div>

      {semanas.map(({ semana, capitulos }) => (
        <section key={semana} aria-labelledby={`week-${semana}`}>
          <h2 id={`week-${semana}`} className={c.semanaTitulo}>
            Week {semana}
          </h2>
          <ol className={p.lista}>
            {capitulos.map((cap) => {
              const hecho = hechos.has(cap.key);
              return (
                <li key={cap.key}>
                  <Link href={cap.href} className={base.card}>
                    <span className={p.cardBody}>
                      <span className={p.semanaCabecera}>
                        <span className={p.etiqueta}>Chapter {cap.numero}</span>
                        {hecho ? <span className={`${base.badge} ${base.badgeOk}`}>✓ Done</span> : null}
                      </span>
                      <span className={p.cardTitulo}>{cap.titulo}</span>
                      <span className={c.capituloMeta}>
                        Unit: <span lang="es">{cap.unidad}</span>
                      </span>
                      <span className={c.capituloMeta}>
                        Topic: <span lang="es">{cap.tema}</span>
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </>
  );
}

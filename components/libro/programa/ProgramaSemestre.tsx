"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { progressStore, useProgressVersion } from "@/lib/progress/store";
import type { ProgresoSemana } from "@/lib/progress/types";
import { calcularAcceso } from "@/lib/progress/unlock";
import { esRutaLibroPublica } from "@/lib/acceso/rutas-publicas";
import { AvisoLogin, useEstadoSesion } from "../acceso/sesion";
import s from "../libro.module.css";
import p from "./programa.module.css";

/** Datos serializables de una semana para la tarjeta del programa. */
export interface SemanaTarjeta {
  numero: number;
  titulo: string;
  href: string;
  key: string;
  tieneContenido: boolean;
  leccionKeys: string[];
  insignia: { id: string; nombre: string; icono: string };
}

interface ProgramaSemestreProps {
  semanas: SemanaTarjeta[];
}

interface Estado {
  progreso: ProgresoSemana[];
  xp: number;
  insignias: string[];
}

/**
 * Programa del semestre: resumen de XP/insignias, botón "Continuar" y
 * las 16 tarjetas de semana. Hasta que carga el progreso (y en SSR) se
 * muestra el estado "sin progreso": 0 % y solo la semana 1 abierta.
 */
export function ProgramaSemestre({ semanas }: ProgramaSemestreProps) {
  const v = useProgressVersion();
  const [estado, setEstado] = useState<Estado | null>(null);

  useEffect(() => {
    let vivo = true;
    Promise.all([
      Promise.all(semanas.map((sem) => progressStore.getSemana(sem.key, sem.leccionKeys))),
      progressStore.getXP(),
      progressStore.getInsignias(),
    ]).then(([progreso, xp, insignias]) => {
      if (vivo) setEstado({ progreso, xp, insignias });
    });
    return () => {
      vivo = false;
    };
  }, [v, semanas]);

  const progreso = estado?.progreso ?? [];
  const sesion = useEstadoSesion();
  const sinSesion = sesion === "sin_sesion";
  // Demo pública: sin sesión solo se abren las semanas de la lista pública.
  const requiereLogin = semanas.map((sem) => sinSesion && !esRutaLibroPublica(sem.href));
  const acceso = calcularAcceso(semanas, progreso).map((a, i) =>
    requiereLogin[i] && a.abierta ? ({ abierta: false, motivo: "falta_contenido" } as const) : a,
  );
  const ganadas = new Set(estado?.insignias ?? []);
  const xp = estado?.xp ?? 0;

  const conContenido = semanas.filter((sem) => sem.tieneContenido);
  const insigniasSemestre = semanas.filter((sem) => ganadas.has(sem.insignia.id));
  const totalLecciones = conContenido.reduce((n, sem) => n + sem.leccionKeys.length, 0);
  const aprobadas = semanas.reduce(
    (n, sem, i) => n + (sem.tieneContenido ? (progreso[i]?.aprobadas ?? 0) : 0),
    0,
  );
  const pctSemestre = totalLecciones > 0 ? Math.round((aprobadas / totalLecciones) * 100) : 0;

  // Botón principal: primera semana abierta sin completar; si todas las
  // abiertas están completas, la última abierta.
  const abiertas = semanas.map((_, i) => i).filter((i) => acceso[i].abierta);
  const destino =
    abiertas.find((i) => !progreso[i]?.completa) ?? abiertas[abiertas.length - 1];
  const semanaDestino = destino === undefined ? null : semanas[destino];

  return (
    <>
      <section className={p.resumen} aria-label="Tu avance">
        <p className={p.resumenFila}>
          <span>
            Avance del semestre: <strong>{pctSemestre} %</strong>
          </span>
          <span className={s.badge}>{xp} XP</span>
        </p>
        <div
          className={s.progress}
          role="progressbar"
          aria-label="Avance del semestre"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={pctSemestre}
        >
          <div className={s.progressFill} style={{ width: `${pctSemestre}%` }} />
        </div>
        <div className={p.resumenFila}>
          <span>
            Insignias: {insigniasSemestre.length} de {conContenido.length}
          </span>
          {insigniasSemestre.length > 0 ? (
            <ul className={p.insignias}>
              {insigniasSemestre.map((sem) => (
                <li key={sem.insignia.id}>
                  <span className={`${s.badge} ${s.badgeOk}`} title={sem.insignia.nombre}>
                    <span aria-hidden="true">{sem.insignia.icono}</span>
                    {sem.insignia.nombre}
                  </span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </section>

      {semanaDestino ? (
        <div className={p.accionPrincipal}>
          <Link href={semanaDestino.href} className={s.btnPrimary}>
            Continuar: Semana {semanaDestino.numero}
          </Link>
        </div>
      ) : null}

      {sinSesion ? <AvisoLogin destino="/pn/s1" /> : null}

      <h2 className={s.h2}>Semanas</h2>
      <ol className={p.lista}>
        {semanas.map((sem, i) => {
          const a = acceso[i];
          const pr = progreso[i];
          const pct = sem.tieneContenido ? (pr?.porcentaje ?? 0) : 0;

          if (!a.abierta) {
            return (
              <li key={sem.key}>
                <div className={s.cardLocked} aria-disabled="true">
                  <div className={p.cardBody}>
                    <p className={p.etiqueta + " " + p.cardLockedText}>Semana {sem.numero}</p>
                    <p className={p.cardTitulo} lang={sem.tieneContenido ? "en" : undefined}>
                      {sem.titulo}
                    </p>
                    <p className={p.cardTexto}>
                      <span aria-hidden="true">🔒 </span>
                      {requiereLogin[i]
                        ? "Inicia sesión para continuar"
                        : a.motivo === "falta_contenido"
                        ? "Todavía no hay contenido"
                        : `Termina la Semana ${a.semanaAnterior} para abrir`}
                    </p>
                  </div>
                </div>
              </li>
            );
          }

          return (
            <li key={sem.key}>
              <Link href={sem.href} className={s.card}>
                <span className={p.cardBody}>
                  <span className={p.semanaCabecera}>
                    <span className={p.etiqueta}>Semana {sem.numero}</span>
                    {pr?.completa ? (
                      <span className={`${s.badge} ${s.badgeOk}`}>
                        <span aria-hidden="true">{sem.insignia.icono}</span>✓ Completa
                      </span>
                    ) : null}
                  </span>
                  <span className={p.cardTitulo} lang="en">
                    {sem.titulo}
                  </span>
                  <span className={p.avance}>
                    <span
                      className={s.progress}
                      role="progressbar"
                      aria-label={`Avance de la semana ${sem.numero}`}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={pct}
                    >
                      <span
                        className={s.progressFill}
                        style={{ width: `${pct}%`, display: "block" }}
                      />
                    </span>
                    <span className={p.avanceNum}>{pct} %</span>
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </>
  );
}

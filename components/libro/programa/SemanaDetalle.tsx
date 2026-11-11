"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { LeccionResumen } from "@/lib/content/loader";
import { progressStore, useProgressVersion } from "@/lib/progress/store";
import type { ProgresoLeccion, ProgresoSemana } from "@/lib/progress/types";
import { calcularAcceso } from "@/lib/progress/unlock";
import { esRutaLibroPublica } from "@/lib/acceso/rutas-publicas";
import { AvisoLogin, useEstadoSesion } from "../acceso/sesion";
import s from "../libro.module.css";
import p from "./programa.module.css";

/** Semana anterior, solo lo necesario para saber si esta semana está abierta. */
export interface SemanaAnterior {
  numero: number;
  key: string;
  tieneContenido: boolean;
  leccionKeys: string[];
}

interface SemanaDetalleProps {
  numero: number;
  programaHref: string;
  insignia: { id: string; nombre: string; icono: string };
  lecciones: LeccionResumen[];
  /** null si es la semana 1. */
  anterior: SemanaAnterior | null;
}

interface Estado {
  lecciones: ProgresoLeccion[];
  anterior: ProgresoSemana | undefined;
}

/**
 * Lista de lecciones de una semana con su avance y el botón principal.
 * Hasta que carga el progreso (y en SSR) se muestra el estado "sin
 * progreso": solo la semana 1 abierta y ninguna lección intentada.
 */
export function SemanaDetalle({
  numero,
  programaHref,
  insignia,
  lecciones,
  anterior,
}: SemanaDetalleProps) {
  const v = useProgressVersion();
  const [estado, setEstado] = useState<Estado | null>(null);
  const sinSesion = useEstadoSesion() === "sin_sesion";
  // Demo pública: sin sesión, las lecciones fuera de la lista piden login.
  const pideLogin = (href: string) => sinSesion && !esRutaLibroPublica(href);

  useEffect(() => {
    let vivo = true;
    Promise.all([
      Promise.all(lecciones.map((l) => progressStore.getLeccion(l.key))),
      anterior ? progressStore.getSemana(anterior.key, anterior.leccionKeys) : Promise.resolve(undefined),
    ]).then(([progLecciones, progAnterior]) => {
      if (vivo) setEstado({ lecciones: progLecciones, anterior: progAnterior });
    });
    return () => {
      vivo = false;
    };
  }, [v, lecciones, anterior]);

  // Acceso: se calcula con la semana anterior (si la hay) y esta.
  const semanasAcceso = [
    ...(anterior ? [{ numero: anterior.numero, tieneContenido: anterior.tieneContenido }] : []),
    { numero, tieneContenido: lecciones.length > 0 },
  ];
  const progresoAcceso = anterior ? [estado?.anterior] : [];
  const acceso = calcularAcceso(semanasAcceso, progresoAcceso)[semanasAcceso.length - 1];

  if (!acceso.abierta) {
    const texto =
      acceso.motivo === "anterior_pendiente"
        ? `Termina la Semana ${acceso.semanaAnterior} para abrir`
        : "Esta semana todavía no tiene contenido";
    return (
      <>
        <p className={p.aviso} role="status">
          <span aria-hidden="true">🔒 </span>
          {texto}
        </p>
        <div className={p.accionPrincipal}>
          <Link href={programaHref} className={s.btnPrimary}>
            Ir al programa
          </Link>
        </div>
        <h2 className={s.h2}>Lecciones</h2>
        <ol className={p.lista}>
          {lecciones.map((l, i) => (
            <li key={l.key}>
              <div className={s.cardLocked} aria-disabled="true">
                <div className={p.cardBody}>
                  <p className={`${p.etiqueta} ${p.cardLockedText}`}>Lección {i + 1}</p>
                  <p className={p.cardTitulo} lang="en">
                    {l.titulo}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </>
    );
  }

  const progreso = estado?.lecciones ?? [];
  const pendiente = lecciones.findIndex((_, i) => !progreso[i]?.aprobada);
  const todasAprobadas = estado !== null && pendiente === -1;
  const siguiente = pendiente === -1 ? null : lecciones[pendiente];
  const yaIntentada = pendiente !== -1 && (progreso[pendiente]?.intentos ?? 0) > 0;

  return (
    <>
      {todasAprobadas ? (
        <p className={p.insigniaGanada} role="status">
          <span className={p.insigniaIcono} aria-hidden="true">
            {insignia.icono}
          </span>
          <span>Insignia ganada: {insignia.nombre}</span>
        </p>
      ) : null}

      <div className={p.accionPrincipal}>
        {siguiente && pideLogin(siguiente.href) ? (
          <AvisoLogin destino={siguiente.href} variante="principal" />
        ) : siguiente ? (
          <Link href={siguiente.href} className={s.btnPrimary}>
            {yaIntentada ? "Continuar" : "Empezar"}:{" "}
            <span lang="en">{siguiente.titulo}</span>
          </Link>
        ) : (
          <Link href={programaHref} className={s.btnPrimary}>
            Volver al programa
          </Link>
        )}
      </div>

      <h2 className={s.h2}>Lecciones</h2>
      <ol className={p.lista}>
        {lecciones.map((l, i) => {
          const pr = progreso[i];
          const aprobada = pr?.aprobada ?? false;
          const mejor = pr?.mejorCalificacion ?? null;
          if (pideLogin(l.href)) {
            return (
              <li key={l.key}>
                <div className={s.cardLocked} aria-disabled="true">
                  <div className={p.cardBody}>
                    <p className={`${p.etiqueta} ${p.cardLockedText}`}>Lección {i + 1}</p>
                    <p className={p.cardTitulo} lang="en">
                      {l.titulo}
                    </p>
                    <p className={p.cardTexto}>
                      <span aria-hidden="true">🔒 </span>
                      Inicia sesión para continuar
                    </p>
                  </div>
                </div>
              </li>
            );
          }
          return (
            <li key={l.key}>
              <Link href={l.href} className={s.card}>
                <span className={p.cardBody}>
                  <span className={p.semanaCabecera}>
                    <span className={p.etiqueta}>Lección {i + 1}</span>
                    {aprobada ? <span className={`${s.badge} ${s.badgeOk}`}>✓ Aprobada</span> : null}
                  </span>
                  <span className={p.cardTitulo} lang="en">
                    {l.titulo}
                  </span>
                  <span className={p.leccionDatos}>
                    <span>{mejor === null ? "Sin intentar" : `Mejor: ${mejor}/100`}</span>
                    <span>+{l.xp} XP</span>
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

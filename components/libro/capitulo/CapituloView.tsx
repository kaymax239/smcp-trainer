"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import type { LecturaCapitulo } from "@/lib/content/lectura-capitulo";
import type { EstadoLecturaPublica } from "@/lib/libro/lecturas";
import { progressStore, useProgressVersion } from "@/lib/progress/store";
import { Lectura } from "../leccion/Lectura";
import css from "../leccion/leccion.module.css";
import base from "../libro.module.css";
import { SpeakButton } from "../SpeakButton";
import c from "./capitulo.module.css";
import { PreguntasLectura } from "./PreguntasLectura";

/** Lo que la página server le pasa al capítulo (todo serializable). */
export interface DatosCapitulo {
  numero: number;
  total: number;
  titulo: string;
  unidad: string;
  tema: string;
  semana: number;
  key: string;
  xp: number;
  tiempo: string;
  dificultad: string;
  escenario: string;
  instrucciones: string[];
  entregable: string;
  criterios: string[];
  actividadHref: string | null;
  libroHref: string;
  siguienteHref: string | null;
  /** Parámetros para pedir un borrador a /api/libro/lectura (solo docentes). */
  consulta: { carrera: string; semestre: string; materia: string; taskId: string };
  lectura: EstadoLecturaPublica;
}

type Vista =
  | { tipo: "cargando" }
  | { tipo: "ninguna" }
  | { tipo: "lectura"; lectura: LecturaCapitulo; draft: boolean };

/** Borradores: solo los docentes los piden a la API; los alumnos ven "coming soon". */
function useLectura(datos: DatosCapitulo): Vista {
  const { data, status } = useSession();
  const docente = data?.user?.rol === "docente";
  const [borrador, setBorrador] = useState<LecturaCapitulo | null | undefined>(undefined);
  const { carrera, semestre, materia, taskId } = datos.consulta;
  const esBorrador = datos.lectura.tipo === "borrador";

  useEffect(() => {
    if (!esBorrador || !docente) return;
    let vivo = true;
    const q = new URLSearchParams({ carrera, semestre, materia, taskId });
    fetch(`/api/libro/lectura?${q}`, { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((j: { lectura?: LecturaCapitulo } | null) => {
        if (vivo) setBorrador(j?.lectura ?? null);
      })
      .catch(() => {
        if (vivo) setBorrador(null);
      });
    return () => {
      vivo = false;
    };
  }, [esBorrador, docente, carrera, semestre, materia, taskId]);

  if (datos.lectura.tipo === "validada") return { tipo: "lectura", lectura: datos.lectura.lectura, draft: false };
  if (datos.lectura.tipo === "ninguna") return { tipo: "ninguna" };
  // Borrador.
  if (status === "loading") return { tipo: "cargando" };
  if (!docente) return { tipo: "ninguna" };
  if (borrador === undefined) return { tipo: "cargando" };
  if (borrador === null) return { tipo: "ninguna" };
  return { tipo: "lectura", lectura: borrador, draft: true };
}

export function CapituloView({ datos }: { datos: DatosCapitulo }) {
  const vista = useLectura(datos);
  const version = useProgressVersion();
  const [hecho, setHecho] = useState(false);
  const [xpGanado, setXpGanado] = useState<number | null>(null);

  useEffect(() => {
    let vivo = true;
    progressStore
      .getLeccion(datos.key)
      .then((p) => {
        if (vivo) setHecho(p.aprobada);
      })
      .catch(() => {});
    return () => {
      vivo = false;
    };
  }, [version, datos.key]);

  async function marcarHecho() {
    // Reutiliza el almacén de progreso: "aprobado" con 100/100 y aprobatorio 0.
    // El XP solo se suma la primera vez (primeraAprobacion).
    const r = await progressStore.guardarIntento({
      key: datos.key,
      calificacion: 100,
      aprobatorio: 0,
      xp: datos.xp,
      semana: { key: "", insigniaId: "", leccionKeys: [] },
    });
    setHecho(true);
    setXpGanado(r.xpGanado);
  }

  const vocabulario =
    vista.tipo === "lectura"
      ? Object.fromEntries(vista.lectura.terminos.map((t) => [t.en, { es: t.es, audio: "tts" as const }]))
      : {};

  return (
    <article>
      {/* a) Unidad y tema */}
      <header className={css.encabezado}>
        <p className={c.meta}>
          Chapter {datos.numero} of {datos.total} · Week {datos.semana}
        </p>
        <h1 className={base.h1}>{datos.titulo}</h1>
        <div className={c.unidadTema}>
          <p>
            <span className={c.rotulo}>Unit: </span>
            <span lang="es">{datos.unidad}</span>
          </p>
          <p>
            <span className={c.rotulo}>Topic: </span>
            <span lang="es">{datos.tema}</span>
          </p>
        </div>
      </header>

      {/* b) Reading */}
      <section className={css.seccion} aria-labelledby="reading-title">
        <h2 id="reading-title" className={css.seccionTitulo}>
          Reading
        </h2>
        {vista.tipo === "cargando" ? (
          <p className={css.cargando}>Loading reading…</p>
        ) : vista.tipo === "ninguna" ? (
          <p className={c.pronto}>Reading coming soon. Go straight to the chapter exercise.</p>
        ) : (
          <>
            {vista.draft ? (
              <p className={c.draft} title="Visible to teachers only">
                Draft · teachers only
              </p>
            ) : null}
            <p className={css.ayuda}>Tap the underlined words to see the Spanish translation and hear them.</p>
            <Lectura lectura={{ parrafos: vista.lectura.parrafos, vocabulario }} idioma="en" />
            <p className={c.cierre}>This chapter prepares you for: {datos.titulo}</p>
          </>
        )}
      </section>

      {vista.tipo === "lectura" ? (
        <>
          {/* c) Key terms */}
          <section className={css.seccion} aria-labelledby="terms-title">
            <h2 id="terms-title" className={css.seccionTitulo}>
              Key terms
            </h2>
            <ul className={c.terminos}>
              {vista.lectura.terminos.map((t) => (
                <li key={t.en} className={c.termino}>
                  <div className={c.terminoTextos}>
                    <p className={c.terminoEn}>{t.en}</p>
                    <p className={c.terminoEs} lang="es">
                      {t.es}
                    </p>
                  </div>
                  <SpeakButton texto={t.en} etiqueta={`Listen: ${t.en}`} idioma="en" />
                </li>
              ))}
            </ul>
          </section>

          {/* d) Check your understanding */}
          <section className={css.seccion} aria-labelledby="check-title">
            <h2 id="check-title" className={css.seccionTitulo}>
              Check your understanding
            </h2>
            <p className={css.ayuda}>Choose an answer. You see the result right away.</p>
            <PreguntasLectura preguntas={vista.lectura.preguntas} />
          </section>
        </>
      ) : null}

      {/* e) Chapter exercise: la tarea tal cual */}
      <section className={css.seccion} aria-labelledby="exercise-title">
        <h2 id="exercise-title" className={css.seccionTitulo}>
          Chapter exercise
        </h2>
        <ul className={c.datos} aria-label="Exercise details">
          <li className={base.badge}>{datos.xp} XP</li>
          <li className={base.badge}>{datos.tiempo}</li>
          <li className={base.badge}>{datos.dificultad}</li>
        </ul>
        <div className={c.bloque}>
          <h3>Scenario</h3>
          <p>{datos.escenario}</p>
          <h3>Instructions</h3>
          <ol>
            {datos.instrucciones.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ol>
          <h3>Deliverable</h3>
          <p>{datos.entregable}</p>
          <h3>Assessment criteria</h3>
          <ul>
            {datos.criterios.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
        {datos.actividadHref ? (
          <Link className={base.btnSecondary} href={datos.actividadHref}>
            Open activity
          </Link>
        ) : null}
      </section>

      {/* f) Mark as done + Next chapter */}
      <nav className={c.acciones} aria-label="Continue">
        {hecho ? (
          <p className={c.hecho} role="status">
            ✓ Done{xpGanado ? ` · +${xpGanado} XP` : ""}
          </p>
        ) : (
          <button type="button" className={base.btnSecondary} onClick={() => void marcarHecho()}>
            Mark as done
          </button>
        )}
        {datos.siguienteHref ? (
          <Link className={base.btnPrimary} href={datos.siguienteHref}>
            Next chapter →
          </Link>
        ) : (
          <Link className={base.btnPrimary} href={datos.libroHref}>
            Back to the book index
          </Link>
        )}
      </nav>
    </article>
  );
}

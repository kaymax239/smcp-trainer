"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { LeccionCompleta } from "@/lib/content/loader";
import { progressStore, useProgressVersion } from "@/lib/progress/store";
import type { ProgresoLeccion } from "@/lib/progress/types";
import { esRutaLibroPublica } from "@/lib/acceso/rutas-publicas";
import { AvisoLogin, useEstadoSesion } from "../acceso/sesion";
import base from "../libro.module.css";
import { SpeakButton } from "../SpeakButton";
import { EjercicioPractica } from "./EjercicioPractica";
import css from "./leccion.module.css";
import { Lectura } from "./Lectura";
import { Quiz } from "./Quiz";

/**
 * Página de lección completa, en el orden fijo del libro:
 * Objetivo → Lectura → Frases SMCP → Ejercicios → Quiz → Siguiente.
 * Recibe todo por props (la página server lee el contenido).
 */
export function LeccionView({ datos }: { datos: LeccionCompleta }) {
  const { leccion, semana, resumen, frases, frasesPorId, siguiente, posicion } = datos;

  const version = useProgressVersion();
  const [progreso, setProgreso] = useState<ProgresoLeccion | null>(null);
  const [aprobadaAhora, setAprobadaAhora] = useState(false);

  useEffect(() => {
    let vivo = true;
    progressStore
      .getLeccion(resumen.key)
      .then((p) => {
        if (vivo) setProgreso(p);
      })
      .catch(() => {
        /* Sin progreso disponible: se trata como no intentada. */
      });
    return () => {
      vivo = false;
    };
  }, [version, resumen.key]);

  const aprobada = aprobadaAhora || Boolean(progreso?.aprobada);
  // "cargando" cuenta como sin sesión: así nunca se pinta un enlace a una
  // ruta privada antes de saber si hay sesión.
  const sinSesion = useEstadoSesion() !== "con_sesion";
  const textoSiguiente = siguiente ? "Siguiente lección →" : "Terminar semana →";
  const hrefSiguiente = siguiente ? siguiente.href : semana.href;
  const totalEj = leccion.ejercicios.length;

  return (
    <article>
      <header className={css.encabezado}>
        <h1 className={base.h1} lang="en">
          {leccion.titulo}
        </h1>
        <p className={css.meta}>
          Semana {semana.numero} · Lección {posicion} de {semana.lecciones.length} · {leccion.xp} XP
          {aprobada ? " · ✓ Aprobada" : ""}
        </p>
      </header>

      <section className={css.seccion} aria-labelledby="objetivo-titulo">
        <h2 id="objetivo-titulo" className={css.seccionTitulo}>
          Objetivo
        </h2>
        <p className={css.objetivo}>{leccion.objetivo}</p>
      </section>

      <section className={css.seccion} aria-labelledby="lectura-titulo">
        <h2 id="lectura-titulo" className={css.seccionTitulo}>
          Lectura
        </h2>
        <p className={css.ayuda}>Toca las palabras subrayadas para ver su traducción y escucharlas.</p>
        <Lectura lectura={leccion.lectura} />
      </section>

      {frases.length > 0 ? (
        <section className={css.seccion} aria-labelledby="frases-titulo">
          <h2 id="frases-titulo" className={css.seccionTitulo}>
            Frases SMCP
          </h2>
          <ul className={css.lista}>
            {frases.map((f) => (
              <li key={f.id} className={css.frase}>
                <div className={css.fraseTextos}>
                  <p className={css.fraseEn} lang="en">
                    {f.en}
                  </p>
                  <p className={css.fraseEs}>{f.es}</p>
                </div>
                <SpeakButton texto={f.en} etiqueta={`Escuchar: ${f.en}`} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className={css.seccion} aria-labelledby="ejercicios-titulo">
        <h2 id="ejercicios-titulo" className={css.seccionTitulo}>
          Ejercicios
        </h2>
        <p className={css.ayuda}>Son de práctica: no cuentan para tu calificación.</p>
        <div className={css.preguntas}>
          {leccion.ejercicios.map((ej, i) => (
            <EjercicioPractica
              key={ej.id}
              ejercicio={ej}
              frasesPorId={frasesPorId}
              numero={i + 1}
              total={totalEj}
            />
          ))}
        </div>
      </section>

      <Quiz
        preguntas={leccion.quiz.preguntas}
        frasesPorId={frasesPorId}
        aprobatorio={leccion.aprobatorio}
        intentoBase={{
          key: resumen.key,
          aprobatorio: leccion.aprobatorio,
          xp: leccion.xp,
          semana: {
            key: semana.key,
            insigniaId: semana.insignia.id,
            leccionKeys: semana.lecciones.map((l) => l.key),
          },
        }}
        insignia={semana.insignia}
        numeroSemana={semana.numero}
        mejorGuardada={progreso?.mejorCalificacion ?? null}
        aprobada={aprobada}
        onAprobado={() => setAprobadaAhora(true)}
      />

      <nav className={css.siguiente} aria-label="Continuar">
        {aprobada && sinSesion ? (
          // Demo pública: el avance solo vive en este navegador hasta iniciar
          // sesión. Si lo siguiente también es público, se puede seguir; si no,
          // el botón principal es el de login.
          <>
            {esRutaLibroPublica(hrefSiguiente) ? (
              <Link className={base.btnPrimary} href={hrefSiguiente}>
                {textoSiguiente}
              </Link>
            ) : null}
            <AvisoLogin
              destino={hrefSiguiente}
              texto="Inicia sesión para guardar tu avance"
              variante={esRutaLibroPublica(hrefSiguiente) ? "secundario" : "principal"}
            />
          </>
        ) : aprobada ? (
          <Link className={base.btnPrimary} href={hrefSiguiente}>
            {textoSiguiente}
          </Link>
        ) : (
          <>
            <button type="button" className={base.btnPrimary} disabled aria-describedby="siguiente-ayuda">
              {textoSiguiente}
            </button>
            <p id="siguiente-ayuda" className={css.ayuda}>
              Aprueba el quiz para continuar.
            </p>
          </>
        )}
      </nav>
    </article>
  );
}

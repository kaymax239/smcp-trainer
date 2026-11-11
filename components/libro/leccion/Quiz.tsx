"use client";

import { useEffect, useRef, useState } from "react";
import type { Ejercicio, Frase, Insignia } from "@/lib/content/schema";
import { progressStore } from "@/lib/progress/store";
import type { IntentoQuiz, ResultadoIntento } from "@/lib/progress/types";
import base from "../libro.module.css";
import { EjercicioUI, NOMBRE_TIPO } from "./ejercicios/EjercicioUI";
import css from "./leccion.module.css";

interface Props {
  preguntas: Ejercicio[];
  frasesPorId: Record<string, Frase>;
  aprobatorio: number;
  /** Datos del intento salvo la calificación (los pone la lección). */
  intentoBase: Omit<IntentoQuiz, "calificacion">;
  insignia: Insignia;
  numeroSemana: number;
  /** Mejor calificación guardada (null si nunca se ha intentado o aún no carga). */
  mejorGuardada: number | null;
  /** true si la lección ya está aprobada (guardada o en este intento). */
  aprobada: boolean;
  /** Avisa que este intento aprobó. */
  onAprobado: () => void;
}

interface Calificado {
  calificacion: number;
  aciertos: number;
  aprobado: boolean;
  mejorAntes: number | null;
  resultado: ResultadoIntento | null;
  error: boolean;
}

/**
 * Quiz de la lección. Usa los mismos componentes de los ejercicios; se
 * responden todas y se pulsa "Calificar". Intentos ilimitados.
 * "Calificar" es el botón principal salvo que la lección ya esté aprobada
 * (entonces el principal es "Siguiente lección").
 */
export function Quiz({
  preguntas,
  frasesPorId,
  aprobatorio,
  intentoBase,
  insignia,
  numeroSemana,
  mejorGuardada,
  aprobada,
  onAprobado,
}: Props) {
  const total = preguntas.length;
  const [intento, setIntento] = useState(0);
  const [respuestas, setRespuestas] = useState<(boolean | null)[]>(() => preguntas.map(() => null));
  const [guardando, setGuardando] = useState(false);
  const [calificado, setCalificado] = useState<Calificado | null>(null);
  const resultadoRef = useRef<HTMLParagraphElement>(null);
  const tituloRef = useRef<HTMLHeadingElement>(null);
  const [enfocar, setEnfocar] = useState<"resultado" | "titulo" | null>(null);

  useEffect(() => {
    if (enfocar === "resultado") resultadoRef.current?.focus();
    if (enfocar === "titulo") {
      tituloRef.current?.focus();
      tituloRef.current?.scrollIntoView({ block: "start" });
    }
  }, [enfocar, calificado]);

  const respondidas = respuestas.filter((r) => r !== null).length;
  const completas = respondidas === total;

  function setRespuesta(i: number, valor: boolean | null) {
    setRespuestas((prev) => {
      if (prev[i] === valor) return prev;
      const nuevo = [...prev];
      nuevo[i] = valor;
      return nuevo;
    });
  }

  async function calificar() {
    if (!completas || guardando) return;
    const aciertos = respuestas.filter((r) => r === true).length;
    const calificacion = Math.round((aciertos / total) * 100);
    const aprobado = calificacion >= aprobatorio;
    const mejorAntes = mejorGuardada;
    setGuardando(true);
    let resultado: ResultadoIntento | null = null;
    let error = false;
    try {
      resultado = await progressStore.guardarIntento({ ...intentoBase, calificacion });
    } catch {
      error = true;
    }
    setGuardando(false);
    setCalificado({ calificacion, aciertos, aprobado, mejorAntes, resultado, error });
    setEnfocar("resultado");
    if (aprobado) onAprobado();
  }

  function reintentar() {
    setIntento((n) => n + 1);
    setRespuestas(preguntas.map(() => null));
    setCalificado(null);
    setEnfocar("titulo");
  }

  const revelado = calificado !== null;
  const mejorVisible =
    calificado?.resultado?.progreso.mejorCalificacion ?? mejorGuardada;

  return (
    <section className={css.seccion} aria-labelledby="quiz-titulo">
      <h2 id="quiz-titulo" className={css.seccionTitulo} ref={tituloRef} tabIndex={-1}>
        Quiz
      </h2>
      <p className={css.ayuda}>
        {total} preguntas. Necesitas {aprobatorio} o más para aprobar. Puedes intentarlo las veces que quieras;
        se guarda tu mejor calificación.
        {mejorGuardada !== null && !revelado ? ` Tu mejor calificación: ${mejorGuardada}.` : ""}
      </p>

      <div className={css.preguntas}>
        {preguntas.map((p, i) => (
          <article key={`${intento}-${p.id}`} className={css.tarjeta} aria-label={`Pregunta ${i + 1} de ${total}`}>
            <p className={css.etiqueta}>
              Pregunta {i + 1} de {total} · {NOMBRE_TIPO[p.tipo]}
            </p>
            <EjercicioUI
              ejercicio={p}
              frasesPorId={frasesPorId}
              revelado={revelado}
              onCambio={(v) => setRespuesta(i, v)}
            />
          </article>
        ))}
      </div>

      {!revelado ? (
        <div className={css.siguiente}>
          <button
            type="button"
            className={aprobada ? base.btnSecondary : base.btnPrimary}
            disabled={!completas || guardando}
            aria-describedby="quiz-estado"
            onClick={calificar}
          >
            {guardando ? "Guardando…" : "Calificar"}
          </button>
          <p id="quiz-estado" className={css.ayuda} aria-live="polite">
            {completas
              ? "Listo: ya puedes calificar."
              : `Respondidas: ${respondidas} de ${total}. Responde todas para calificar.`}
          </p>
        </div>
      ) : (
        <div
          className={`${css.resultado} ${calificado.aprobado ? css.resultadoAprobado : css.resultadoReprobado}`}
        >
          <p className={css.calificacion} ref={resultadoRef} tabIndex={-1}>
            Calificación: {calificado.calificacion} / 100
          </p>
          <p className={`${css.veredicto} ${calificado.aprobado ? css.veredictoOk : css.veredictoBad}`}>
            {calificado.aprobado
              ? `✓ Aprobado (${calificado.aciertos} de ${total} correctas)`
              : `✗ No aprobado (${calificado.aciertos} de ${total} correctas). Necesitas ${aprobatorio} o más.`}
          </p>

          {calificado.resultado ? (
            <ul className={css.logros}>
              {calificado.resultado.primeraAprobacion && calificado.resultado.xpGanado > 0 ? (
                <li className={css.logro}>+{calificado.resultado.xpGanado} XP ganados</li>
              ) : null}
              {calificado.resultado.nuevaMejor && calificado.mejorAntes !== null ? (
                <li className={css.logro}>¡Nueva mejor calificación!</li>
              ) : null}
              {calificado.resultado.insigniaGanada ? (
                <li className={css.logro}>
                  <span className={css.insigniaIcono} aria-hidden="true">
                    {insignia.icono}
                  </span>
                  ¡Ganaste la insignia «{insignia.nombre}»! Completaste la semana {numeroSemana}.
                </li>
              ) : null}
            </ul>
          ) : null}

          {calificado.error ? (
            <p className={css.aviso}>No se pudo guardar tu progreso en este dispositivo. Inténtalo de nuevo.</p>
          ) : null}

          {mejorVisible !== null ? (
            <p className={css.aviso}>Tu mejor calificación: {mejorVisible} / 100</p>
          ) : null}

          {!calificado.aprobado ? (
            <p className={css.aviso}>Revisa las respuestas marcadas arriba y vuelve a intentarlo.</p>
          ) : null}

          <div className={css.acciones}>
            <button
              type="button"
              className={aprobada ? base.btnSecondary : base.btnPrimary}
              onClick={reintentar}
            >
              Reintentar quiz
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

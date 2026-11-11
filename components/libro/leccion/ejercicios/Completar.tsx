"use client";

import { useState } from "react";
import type { EjercicioCompletar } from "@/lib/content/schema";
import { idiomaDe } from "../idioma";
import css from "../leccion.module.css";
import { Retro } from "./Retro";
import type { EjercicioUIProps } from "./tipos";

/** Sin distinguir mayúsculas y sin espacios de sobra. */
export function normalizar(texto: string): string {
  return texto.trim().replace(/\s+/g, " ").toLowerCase();
}

export function Completar({ ejercicio, revelado, onCambio }: EjercicioUIProps<EjercicioCompletar>) {
  const [valor, setValor] = useState("");
  const aceptadas = ejercicio.respuestas.map(normalizar);
  const acerto = aceptadas.includes(normalizar(valor));

  const corte = ejercicio.enunciado.indexOf("___");
  const antes = corte >= 0 ? ejercicio.enunciado.slice(0, corte) : ejercicio.enunciado;
  const despues = corte >= 0 ? ejercicio.enunciado.slice(corte + 3) : "";

  const claseHueco = [css.hueco];
  if (revelado) claseHueco.push(acerto ? css.huecoOk : css.huecoBad);

  return (
    <div>
      <p className={css.enunciado} lang={idiomaDe(ejercicio.enunciado)}>
        {antes}
        <input
          type="text"
          className={claseHueco.join(" ")}
          value={valor}
          readOnly={revelado}
          aria-label="Escribe la palabra que falta"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          onChange={(e) => {
            const v = e.target.value;
            setValor(v);
            onCambio(normalizar(v) === "" ? null : aceptadas.includes(normalizar(v)));
          }}
        />
        {despues}
      </p>
      <div aria-live="polite">
        {revelado ? (
          <Retro correcta={acerto}>
            {acerto ? null : (
              <>
                {" "}
                Respuesta correcta: <strong lang="en">{ejercicio.respuestas.join(" / ")}</strong>
              </>
            )}
          </Retro>
        ) : null}
      </div>
    </div>
  );
}

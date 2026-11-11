"use client";

import { useState } from "react";
import type { EjercicioOpcionMultiple } from "@/lib/content/schema";
import { idiomaDe } from "../idioma";
import { Opciones } from "./Opciones";
import { Retro } from "./Retro";
import type { EjercicioUIProps } from "./tipos";

export function OpcionMultiple({
  ejercicio,
  revelado,
  onCambio,
}: EjercicioUIProps<EjercicioOpcionMultiple>) {
  const [elegida, setElegida] = useState<number | null>(null);
  const acerto = elegida === ejercicio.correcta;

  return (
    <div>
      <Opciones
        enunciado={<span lang={idiomaDe(ejercicio.enunciado)}>{ejercicio.enunciado}</span>}
        opciones={ejercicio.opciones}
        correcta={ejercicio.correcta}
        elegida={elegida}
        revelado={revelado}
        onElegir={(i) => {
          setElegida(i);
          onCambio(i === ejercicio.correcta);
        }}
      />
      <div aria-live="polite">
        {revelado ? (
          <Retro correcta={acerto}>
            {acerto ? null : (
              <>
                {" "}
                La respuesta correcta es:{" "}
                <span lang={idiomaDe(ejercicio.opciones[ejercicio.correcta])}>
                  {ejercicio.opciones[ejercicio.correcta]}
                </span>
              </>
            )}
          </Retro>
        ) : null}
      </div>
    </div>
  );
}

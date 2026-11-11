"use client";

import type { Ejercicio, Frase, TipoEjercicio } from "@/lib/content/schema";
import { Completar } from "./Completar";
import { EscucharElegir } from "./EscucharElegir";
import { OpcionMultiple } from "./OpcionMultiple";
import { OrdenarDialogo } from "./OrdenarDialogo";
import { Relacionar } from "./Relacionar";

export const NOMBRE_TIPO: Record<TipoEjercicio, string> = {
  opcion_multiple: "Opción múltiple",
  completar: "Completar",
  relacionar: "Relacionar",
  escuchar_elegir: "Escuchar y elegir",
  ordenar_dialogo: "Ordenar el diálogo",
};

interface Props {
  ejercicio: Ejercicio;
  frasesPorId: Record<string, Frase>;
  revelado: boolean;
  onCambio: (correcta: boolean | null) => void;
}

/** Elige el componente según `ejercicio.tipo`. */
export function EjercicioUI({ ejercicio, frasesPorId, revelado, onCambio }: Props) {
  switch (ejercicio.tipo) {
    case "opcion_multiple":
      return <OpcionMultiple ejercicio={ejercicio} revelado={revelado} onCambio={onCambio} />;
    case "completar":
      return <Completar ejercicio={ejercicio} revelado={revelado} onCambio={onCambio} />;
    case "relacionar":
      return <Relacionar ejercicio={ejercicio} revelado={revelado} onCambio={onCambio} />;
    case "escuchar_elegir":
      return (
        <EscucharElegir
          ejercicio={ejercicio}
          frase={frasesPorId[ejercicio.fraseId]}
          revelado={revelado}
          onCambio={onCambio}
        />
      );
    case "ordenar_dialogo":
      return <OrdenarDialogo ejercicio={ejercicio} revelado={revelado} onCambio={onCambio} />;
  }
}

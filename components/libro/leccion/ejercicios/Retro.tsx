import type { ReactNode } from "react";
import css from "../leccion.module.css";

/** Caja de retroalimentación: no depende solo del color (lleva ✓/✗ y texto). */
export function Retro({ correcta, children }: { correcta: boolean; children?: ReactNode }) {
  return (
    <div className={`${css.retro} ${correcta ? css.retroOk : css.retroBad}`}>
      <span className={css.retroTitulo}>
        <span aria-hidden="true">{correcta ? "✓ " : "✗ "}</span>
        {correcta ? "¡Correcto!" : "Incorrecto."}
      </span>
      {children}
    </div>
  );
}

"use client";

import Link from "next/link";
import { useEstadoSesion } from "../acceso/sesion";
import base from "../libro.module.css";
import c from "./capitulo.module.css";

/**
 * Selector de tomo (semestre). Los tomos que no son de la demo pública solo
 * se enlazan con sesión; sin ella se muestran como texto.
 */
export function NavTomos({
  tomos,
  actual,
  publicos = [],
}: {
  tomos: { href: string; label: string }[];
  actual: string;
  publicos?: string[];
}) {
  const conSesion = useEstadoSesion() === "con_sesion";
  if (tomos.length < 2) return null;
  return (
    <nav aria-label="Semesters" lang="en">
      <ul className={c.tomos}>
        {tomos.map((t) => {
          const esActual = t.href === actual;
          const enlazable = !esActual && (conSesion || publicos.includes(t.href));
          return (
            <li key={t.href}>
              {enlazable ? (
                <Link className={`${base.badge} ${c.tomo}`} href={t.href}>
                  {t.label}
                </Link>
              ) : (
                <span className={`${base.badge} ${esActual ? c.tomoActual : ""}`} aria-current={esActual ? "page" : undefined}>
                  {t.label}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

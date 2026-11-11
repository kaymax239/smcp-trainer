"use client";

import Link from "next/link";
import p from "../programa/programa.module.css";
import s from "../libro.module.css";
import { AvisoLogin, useEstadoSesion } from "./sesion";

/**
 * Enlaces discretos del Inicio. Con sesión son enlaces normales. Sin
 * sesión (demo pública) no se enlazan, porque esas páginas piden login:
 * se muestra "Inicia sesión para continuar" con el botón de login.
 */
export function EnlacesInicio() {
  const sesion = useEstadoSesion();

  if (sesion === "con_sesion") {
    return (
      <ul className={p.enlacesDiscretos}>
        <li>
          <Link href="/frases" className={p.enlaceTexto}>
            Banco de frases
          </Link>
        </li>
        <li>
          <Link href="/herramientas" className={p.enlaceTexto}>
            Herramientas
          </Link>
        </li>
      </ul>
    );
  }

  if (sesion === "cargando") {
    return (
      <p className={s.muted} aria-busy="true">
        Banco de frases · Herramientas
      </p>
    );
  }

  return (
    <>
      <p className={s.muted}>Banco de frases · Herramientas</p>
      <AvisoLogin destino="/frases" />
    </>
  );
}

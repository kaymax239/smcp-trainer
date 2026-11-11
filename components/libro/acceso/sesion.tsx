"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { hrefLogin } from "@/lib/acceso/rutas-publicas";
import s from "../libro.module.css";
import a from "./acceso.module.css";

export type EstadoSesion = "cargando" | "con_sesion" | "sin_sesion";

/** Estado de la sesión para las páginas del libro (cliente). */
export function useEstadoSesion(): EstadoSesion {
  const { status } = useSession();
  if (status === "authenticated") return "con_sesion";
  if (status === "unauthenticated") return "sin_sesion";
  return "cargando";
}

interface AvisoLoginProps {
  /** Ruta a la que se regresa después de iniciar sesión. */
  destino: string;
  /** Texto del aviso. Por defecto "Inicia sesión para continuar". */
  texto?: string;
  /** "principal" usa btnPrimary (solo si no hay otro principal en pantalla). */
  variante?: "principal" | "secundario";
}

/** Aviso "Inicia sesión para continuar" con el botón que lleva al login. */
export function AvisoLogin({
  destino,
  texto = "Inicia sesión para continuar",
  variante = "secundario",
}: AvisoLoginProps) {
  return (
    <div className={a.aviso} role="status">
      <p className={a.texto}>
        <span aria-hidden="true">🔑 </span>
        {texto}
      </p>
      <Link
        href={hrefLogin(destino)}
        className={variante === "principal" ? s.btnPrimary : s.btnSecondary}
      >
        Iniciar sesión
      </Link>
    </div>
  );
}

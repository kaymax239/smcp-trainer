"use client";

import Link from "next/link";
import { hrefLogin } from "@/lib/acceso/rutas-publicas";
import base from "../libro.module.css";
import p from "../programa/programa.module.css";
import { useEstadoSesion } from "./sesion";

/** Tarjeta de MN en Inicio: /mn pide sesión, así que sin ella va al login. */
export function TarjetaMn() {
  const conSesion = useEstadoSesion() === "con_sesion";
  return (
    <Link href={conSesion ? "/mn" : hrefLogin("/mn")} className={`${base.card} ${p.carreraCard}`}>
      <span className={p.cardBody}>
        <span className={p.carreraNombre}>Maquinista Naval (MN)</span>
        <span className={p.cardTexto}>Libros por materia, semestres I, III, V y VII.</span>
        <span className={p.carreraAccion}>{conSesion ? "Abrir libro →" : "Inicia sesión para continuar →"}</span>
      </span>
    </Link>
  );
}

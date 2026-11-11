"use client";

import Link from "next/link";
import { AvisoLogin, useEstadoSesion } from "../acceso/sesion";
import base from "../libro.module.css";
import p from "../programa/programa.module.css";
import c from "./capitulo.module.css";

export interface LibroTarjeta {
  href: string;
  codigo: string;
  titulo: string;
  capitulos: number;
}

/**
 * Libros (materias) del semestre. Los libros piden sesión: sin sesión (o
 * mientras carga) se muestran bloqueados con el aviso de login, nunca con
 * un enlace a una ruta privada (regla de la demo pública).
 */
export function ListaLibros({ libros, destinoLogin }: { libros: LibroTarjeta[]; destinoLogin: string }) {
  const conSesion = useEstadoSesion() === "con_sesion";
  return (
    <>
      {!conSesion ? <AvisoLogin destino={destinoLogin} /> : null}
      <ul className={p.lista}>
        {libros.map((l) => (
          <li key={l.href}>
            {conSesion ? (
              <Link href={l.href} className={base.card} lang="en">
                <span className={p.cardBody}>
                  <span className={c.libroCodigo}>{l.codigo}</span>
                  <span className={p.cardTitulo} lang="es">
                    {l.titulo}
                  </span>
                  <span className={p.cardTexto}>{l.capitulos} chapters</span>
                </span>
              </Link>
            ) : (
              <div className={base.cardLocked} aria-disabled="true" lang="en">
                <div className={p.cardBody}>
                  <p className={`${c.libroCodigo} ${p.cardLockedText}`}>{l.codigo}</p>
                  <p className={p.cardTitulo} lang="es">
                    {l.titulo}
                  </p>
                  <p className={p.cardTexto}>{l.capitulos} chapters · 🔒</p>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

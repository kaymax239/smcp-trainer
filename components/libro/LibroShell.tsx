import Link from "next/link";
import type { ReactNode } from "react";
import s from "./libro.module.css";

/** Una miga: con `href` es enlace; sin `href` es la página actual. */
export interface Miga {
  label: string;
  href?: string;
}

interface LibroShellProps {
  /** Ruta completa, de Inicio a la página actual (la última sin href). */
  migas: Miga[];
  /** Destino del botón "← Volver". Si se omite, no se muestra (solo en Inicio). */
  volverHref?: string;
  children: ReactNode;
  /** "en" en las páginas de libros por materia (interfaz en inglés). */
  idioma?: "es" | "en";
}

/**
 * Marco común de todas las páginas del libro: botón "← Volver",
 * migas de pan y contenedor centrado primero para celular.
 * La interfaz es en español (lang="es"); el contenido en inglés
 * debe marcarse con lang="en" donde aparezca.
 */
export function LibroShell({ migas, volverHref, children, idioma = "es" }: LibroShellProps) {
  const en = idioma === "en";
  return (
    <div className={s.shell} lang={idioma}>
      <div className={s.container}>
        <header className={s.topbar}>
          {volverHref ? (
            <Link className={s.volver} href={volverHref}>
              {en ? "← Back" : "← Volver"}
            </Link>
          ) : null}
          <nav className={s.migas} aria-label={en ? "Breadcrumb" : "Migas de pan"}>
            <ol>
              {migas.map((m, i) => {
                const esUltima = i === migas.length - 1;
                return (
                  <li key={`${m.label}-${i}`}>
                    {m.href && !esUltima ? (
                      <Link href={m.href}>{m.label}</Link>
                    ) : (
                      <span aria-current={esUltima ? "page" : undefined}>{m.label}</span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}

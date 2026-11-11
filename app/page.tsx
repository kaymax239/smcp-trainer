import Link from "next/link";
import { EnlacesInicio } from "@/components/libro/acceso/EnlacesInicio";
import { TarjetaMn } from "@/components/libro/acceso/TarjetaMn";
import { LibroShell } from "@/components/libro/LibroShell";
import s from "@/components/libro/libro.module.css";
import p from "@/components/libro/programa/programa.module.css";

export const metadata = {
  title: "Inglés Marítimo — Inicio",
};

export default function InicioPage() {
  return (
    <LibroShell migas={[{ label: "Inicio" }]}>
      <h1 className={s.h1}>Inglés Marítimo</h1>
      <p className={`${s.muted} ${p.intro}`}>Elige tu carrera para abrir tu libro.</p>

      <ul className={`${p.lista} ${p.listaDos}`}>
        <li>
          <Link href="/pn" className={`${s.card} ${p.carreraCard} ${p.carreraPrincipal}`}>
            <span className={p.cardBody}>
              <span className={p.carreraNombre}>Piloto Naval (PN)</span>
              <span className={p.cardTexto}>Curso de Inglés Marítimo y libros por materia.</span>
              <span className={p.carreraAccion}>Abrir libro →</span>
            </span>
          </Link>
        </li>
        <li>
          <TarjetaMn />
        </li>
      </ul>

      <EnlacesInicio />
    </LibroShell>
  );
}

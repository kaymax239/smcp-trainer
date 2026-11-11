import Link from "next/link";
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
              <span className={p.carreraNombre}>Pilotín Naval (PN)</span>
              <span className={p.cardTexto}>Semestre I disponible.</span>
              <span className={p.carreraAccion}>Abrir libro →</span>
            </span>
          </Link>
        </li>
        <li>
          <div className={`${s.cardLocked} ${p.carreraCard}`} aria-disabled="true">
            <div className={p.cardBody}>
              <p className={p.carreraNombre}>Máquinas Navales (MN)</p>
              <p className={p.cardTexto}>
                <span className={s.badge}>Próximamente</span>
              </p>
            </div>
          </div>
        </li>
      </ul>

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
    </LibroShell>
  );
}

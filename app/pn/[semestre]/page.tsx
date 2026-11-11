import { notFound } from "next/navigation";
import { LibroShell } from "@/components/libro/LibroShell";
import s from "@/components/libro/libro.module.css";
import p from "@/components/libro/programa/programa.module.css";
import c from "@/components/libro/capitulo/capitulo.module.css";
import { ListaLibros } from "@/components/libro/capitulo/ListaLibros";
import { NavTomos } from "@/components/libro/capitulo/NavTomos";
import { ProgramaSemestre, type SemanaTarjeta } from "@/components/libro/programa/ProgramaSemestre";
import { semestreDeSegmento, semestreRomano } from "@/components/libro/programa/semestre";
import { getSemanas } from "@/lib/content/loader";
import { getLibros, semestresConLibros } from "@/lib/libro/tareas";

// Semestre I: curso de Inglés Marítimo por semanas + libros por materia.
// Semestres III, V y VII: solo libros por materia (Fase 3B).
export function generateStaticParams() {
  const tomos = new Set(["s1", ...semestresConLibros("pn").map((n) => `s${n}`)]);
  return [...tomos].map((semestre) => ({ semestre }));
}

export const dynamicParams = false;

interface Props {
  params: Promise<{ semestre: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { semestre } = await params;
  const n = semestreDeSegmento(semestre);
  return { title: n ? `Pilotín Naval — Semestre ${semestreRomano(n)}` : "Pilotín Naval" };
}

export default async function ProgramaPage({ params }: Props) {
  const { semestre } = await params;
  const n = semestreDeSegmento(semestre);
  if (!n) notFound();

  const romano = semestreRomano(n);
  const semanas: SemanaTarjeta[] = getSemanas("pn", n).map((sem) => ({
    numero: sem.numero,
    titulo: sem.titulo,
    href: sem.href,
    key: sem.key,
    tieneContenido: sem.tieneContenido,
    leccionKeys: sem.lecciones.map((l) => l.key),
    insignia: sem.insignia,
  }));
  const hayCurso = semanas.some((sem) => sem.tieneContenido);
  const libros = getLibros("pn", n).map((l) => ({
    href: l.href,
    codigo: l.codigo,
    titulo: l.titulo,
    capitulos: l.capitulos.length,
  }));
  const tomos = [...new Set([1, ...semestresConLibros("pn")])].sort().map((t) => ({
    href: `/pn/s${t}`,
    label: `Semester ${semestreRomano(t as 1 | 3 | 5 | 7)}`,
  }));

  return (
    <LibroShell
      migas={[
        { label: "Inicio", href: "/" },
        { label: "Pilotín Naval", href: "/pn" },
        { label: `Semestre ${romano}` },
      ]}
      volverHref="/"
    >
      <h1 className={s.h1}>Pilotín Naval · Semestre {romano}</h1>
      <NavTomos tomos={tomos} actual={`/pn/${semestre}`} publicos={["/pn/s1"]} />
      {hayCurso ? (
        <>
          <p className={`${s.muted} ${p.intro}`}>
            Termina todas las lecciones de una semana para abrir la siguiente.
          </p>
          <ProgramaSemestre semanas={semanas} />
        </>
      ) : null}
      {libros.length > 0 ? (
        <section className={hayCurso ? c.seccionLibros : undefined} aria-labelledby="textbooks-title" lang="en">
          <h2 id="textbooks-title" className={s.h2}>
            Textbooks
          </h2>
          <p className={s.muted}>One book per subject. Each task of the subject is a chapter.</p>
          <ListaLibros libros={libros} destinoLogin={`/pn/${semestre}`} />
        </section>
      ) : null}
    </LibroShell>
  );
}

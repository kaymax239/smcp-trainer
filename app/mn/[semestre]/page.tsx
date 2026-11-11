import { notFound } from "next/navigation";
import { LibroShell } from "@/components/libro/LibroShell";
import s from "@/components/libro/libro.module.css";
import { ListaLibros } from "@/components/libro/capitulo/ListaLibros";
import { NavTomos } from "@/components/libro/capitulo/NavTomos";
import { getLibros, romano, semestreDeSegmentoLibro, semestresConLibros } from "@/lib/libro/tareas";

// Maquinista Naval: un tomo por semestre con un libro por materia (Fase 3B).
export function generateStaticParams() {
  return semestresConLibros("mn").map((n) => ({ semestre: `s${n}` }));
}

export const dynamicParams = false;

interface Props {
  params: Promise<{ semestre: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { semestre } = await params;
  const n = semestreDeSegmentoLibro(semestre);
  return { title: n ? `Marine Engineer — Semester ${romano(n)}` : "Marine Engineer" };
}

export default async function SemestreMnPage({ params }: Props) {
  const { semestre } = await params;
  const n = semestreDeSegmentoLibro(semestre);
  if (!n) notFound();
  const libros = getLibros("mn", n).map((l) => ({
    href: l.href,
    codigo: l.codigo,
    titulo: l.titulo,
    capitulos: l.capitulos.length,
  }));
  if (libros.length === 0) notFound();
  const tomos = semestresConLibros("mn").map((t) => ({ href: `/mn/s${t}`, label: `Semester ${romano(t)}` }));

  return (
    <LibroShell
      idioma="en"
      migas={[{ label: "Home", href: "/" }, { label: "Marine Engineer (MN)", href: "/mn" }, { label: `Semester ${romano(n)}` }]}
      volverHref="/"
    >
      <h1 className={s.h1}>Marine Engineer · Semester {romano(n)}</h1>
      <NavTomos tomos={tomos} actual={`/mn/${semestre}`} />
      <h2 className={s.h2}>Textbooks</h2>
      <p className={s.muted}>One book per subject. Each task of the subject is a chapter.</p>
      <ListaLibros libros={libros} destinoLogin={`/mn/${semestre}`} />
    </LibroShell>
  );
}

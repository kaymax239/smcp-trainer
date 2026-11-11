import { notFound } from "next/navigation";
import { LibroShell } from "@/components/libro/LibroShell";
import s from "@/components/libro/libro.module.css";
import p from "@/components/libro/programa/programa.module.css";
import { ProgramaSemestre, type SemanaTarjeta } from "@/components/libro/programa/ProgramaSemestre";
import { semestreDeSegmento, semestreRomano } from "@/components/libro/programa/semestre";
import { getSemanas } from "@/lib/content/loader";

// Por ahora solo el Semestre I tiene libro.
export function generateStaticParams() {
  return [{ semestre: "s1" }];
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
      <p className={`${s.muted} ${p.intro}`}>
        Termina todas las lecciones de una semana para abrir la siguiente.
      </p>
      <ProgramaSemestre semanas={semanas} />
    </LibroShell>
  );
}

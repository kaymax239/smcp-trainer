import { notFound } from "next/navigation";
import { LibroShell } from "@/components/libro/LibroShell";
import s from "@/components/libro/libro.module.css";
import { SemanaDetalle, type SemanaAnterior } from "@/components/libro/programa/SemanaDetalle";
import { semestreDeSegmento, semestreRomano } from "@/components/libro/programa/semestre";
import { getSemana, numeroDeSegmento, paramsSemanas } from "@/lib/content/loader";

export function generateStaticParams() {
  return paramsSemanas("pn", 1);
}

export const dynamicParams = false;

interface Props {
  params: Promise<{ semestre: string; semana: string }>;
}

function cargar(semestreSeg: string, semanaSeg: string) {
  const semestre = semestreDeSegmento(semestreSeg);
  const numero = numeroDeSegmento(semanaSeg);
  if (!semestre || !numero) return null;
  const semana = getSemana("pn", semestre, numero);
  if (!semana || !semana.tieneContenido) return null;
  return { semestre, semana };
}

export async function generateMetadata({ params }: Props) {
  const { semestre, semana } = await params;
  const datos = cargar(semestre, semana);
  return {
    title: datos
      ? `Semana ${datos.semana.numero} — Pilotín Naval, Semestre ${semestreRomano(datos.semestre)}`
      : "Pilotín Naval",
  };
}

export default async function SemanaPage({ params }: Props) {
  const { semestre: semestreSeg, semana: semanaSeg } = await params;
  const datos = cargar(semestreSeg, semanaSeg);
  if (!datos) notFound();
  const { semestre, semana } = datos;

  const programaHref = `/pn/${semestreSeg}`;
  const previa = semana.numero > 1 ? getSemana("pn", semestre, semana.numero - 1) : null;
  // Si falta el _semana.json de la anterior, se toma como sin contenido (bloquea).
  const anterior: SemanaAnterior | null =
    semana.numero > 1
      ? {
          numero: semana.numero - 1,
          key: previa?.key ?? `pn/${semestreSeg}/semana-${String(semana.numero - 1).padStart(2, "0")}`,
          tieneContenido: previa?.tieneContenido ?? false,
          leccionKeys: previa?.lecciones.map((l) => l.key) ?? [],
        }
      : null;

  return (
    <LibroShell
      migas={[
        { label: "Inicio", href: "/" },
        { label: "Pilotín Naval", href: "/pn" },
        { label: `Semestre ${semestreRomano(semestre)}`, href: programaHref },
        { label: `Semana ${semana.numero}` },
      ]}
      volverHref={programaHref}
    >
      <p className={s.muted}>Semana {semana.numero}</p>
      <h1 className={s.h1} lang="en">
        {semana.titulo}
      </h1>
      <SemanaDetalle
        numero={semana.numero}
        programaHref={programaHref}
        insignia={semana.insignia}
        lecciones={semana.lecciones}
        anterior={anterior}
      />
    </LibroShell>
  );
}

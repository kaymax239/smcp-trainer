import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LibroIndiceRuta, metadataLibro } from "@/components/libro/rutas/LibroRutas";
import { SemanaRuta, esSegmentoSemana, metadataSemana, paramsSemanasRuta } from "@/components/libro/rutas/SemanaRuta";
import { paramsLibros } from "@/lib/libro/tareas";

// /pn/[semestre]/[seccion]: "semana-NN" = semana del curso de Inglés Marítimo;
// cualquier otro segmento = libro de una materia (p. ej. "tmo101").
export function generateStaticParams() {
  return [...paramsSemanasRuta(), ...paramsLibros("pn")];
}

export const dynamicParams = false;

interface Props {
  params: Promise<{ semestre: string; seccion: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { semestre, seccion } = await params;
  return esSegmentoSemana(seccion) ? metadataSemana(semestre, seccion) : metadataLibro("pn", semestre, seccion);
}

export default async function SeccionPage({ params }: Props) {
  const { semestre, seccion } = await params;
  const pagina = esSegmentoSemana(seccion)
    ? SemanaRuta({ semestreSeg: semestre, semanaSeg: seccion })
    : LibroIndiceRuta({ carrera: "pn", semestreSeg: semestre, slug: seccion });
  if (!pagina) notFound();
  return pagina;
}

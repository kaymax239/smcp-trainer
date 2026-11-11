import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CapituloRuta, metadataCapitulo } from "@/components/libro/rutas/LibroRutas";
import { LeccionRuta, metadataLeccion, paramsLeccionesRuta } from "@/components/libro/rutas/LeccionRuta";
import { esSegmentoSemana } from "@/components/libro/rutas/SemanaRuta";
import { paramsCapitulos } from "@/lib/libro/tareas";

// /pn/[semestre]/[seccion]/[item]: lección (si seccion es "semana-NN") o
// capítulo de un libro por materia (item = taskId).
export function generateStaticParams() {
  return [...paramsLeccionesRuta(), ...paramsCapitulos("pn")];
}

export const dynamicParams = false;

type Params = { semestre: string; seccion: string; item: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { semestre, seccion, item } = await params;
  return esSegmentoSemana(seccion)
    ? metadataLeccion(semestre, seccion, item)
    : metadataCapitulo("pn", semestre, seccion, item);
}

export default async function ItemPage({ params }: { params: Promise<Params> }) {
  const { semestre, seccion, item } = await params;
  const pagina = esSegmentoSemana(seccion)
    ? LeccionRuta({ semestre, semana: seccion, leccion: item })
    : CapituloRuta({ carrera: "pn", semestreSeg: semestre, slug: seccion, taskId: item });
  if (!pagina) notFound();
  return pagina;
}

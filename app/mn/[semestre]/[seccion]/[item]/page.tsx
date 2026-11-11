import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CapituloRuta, metadataCapitulo } from "@/components/libro/rutas/LibroRutas";
import { paramsCapitulos } from "@/lib/libro/tareas";

// /mn/[semestre]/[seccion]/[item]: capítulo (item = taskId).
export function generateStaticParams() {
  return paramsCapitulos("mn");
}

export const dynamicParams = false;

type Params = { semestre: string; seccion: string; item: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { semestre, seccion, item } = await params;
  return metadataCapitulo("mn", semestre, seccion, item);
}

export default async function CapituloMnPage({ params }: { params: Promise<Params> }) {
  const { semestre, seccion, item } = await params;
  const pagina = CapituloRuta({ carrera: "mn", semestreSeg: semestre, slug: seccion, taskId: item });
  if (!pagina) notFound();
  return pagina;
}

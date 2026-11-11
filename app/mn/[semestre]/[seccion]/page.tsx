import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LibroIndiceRuta, metadataLibro } from "@/components/libro/rutas/LibroRutas";
import { paramsLibros } from "@/lib/libro/tareas";

// /mn/[semestre]/[seccion]: libro de una materia de Maquinista Naval.
export function generateStaticParams() {
  return paramsLibros("mn");
}

export const dynamicParams = false;

interface Props {
  params: Promise<{ semestre: string; seccion: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { semestre, seccion } = await params;
  return metadataLibro("mn", semestre, seccion);
}

export default async function LibroMnPage({ params }: Props) {
  const { semestre, seccion } = await params;
  const pagina = LibroIndiceRuta({ carrera: "mn", semestreSeg: semestre, slug: seccion });
  if (!pagina) notFound();
  return pagina;
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LibroShell } from "@/components/libro/LibroShell";
import { LeccionView } from "@/components/libro/leccion/LeccionView";
import { getLeccion, numeroDeSegmento, paramsLecciones } from "@/lib/content/loader";

// Por ahora solo existe el libro de PN, semestre I.
const CARRERA = "pn" as const;
const SEMESTRE = 1 as const;
const ROMANO: Record<number, string> = { 1: "I", 3: "III", 5: "V", 7: "VII" };

type Params = { semestre: string; semana: string; leccion: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return paramsLecciones(CARRERA, SEMESTRE);
}

function cargar({ semestre, semana, leccion }: Params) {
  if (semestre !== `s${SEMESTRE}`) return null;
  const numero = numeroDeSegmento(semana);
  if (numero === null) return null;
  return getLeccion(CARRERA, SEMESTRE, numero, leccion);
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const datos = cargar(await params);
  if (!datos) return {};
  return {
    title: `${datos.leccion.titulo} · Semana ${datos.semana.numero} · Pilotín Naval`,
    description: datos.leccion.objetivo,
  };
}

export default async function LeccionPage({ params }: { params: Promise<Params> }) {
  const datos = cargar(await params);
  if (!datos) notFound();

  const semestreHref = `/${CARRERA}/s${SEMESTRE}`;
  return (
    <LibroShell
      volverHref={datos.semana.href}
      migas={[
        { label: "Inicio", href: "/" },
        { label: "Pilotín Naval", href: "/pn" },
        { label: `Semestre ${ROMANO[SEMESTRE]}`, href: semestreHref },
        { label: `Semana ${datos.semana.numero}`, href: datos.semana.href },
        { label: datos.leccion.titulo },
      ]}
    >
      <LeccionView datos={datos} />
    </LibroShell>
  );
}

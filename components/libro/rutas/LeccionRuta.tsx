import type { Metadata } from "next";
import { LibroShell } from "@/components/libro/LibroShell";
import { LeccionView } from "@/components/libro/leccion/LeccionView";
import { getLeccion, numeroDeSegmento, paramsLecciones } from "@/lib/content/loader";

// Lección del curso de Inglés Marítimo (Fase 3): /pn/s1/semana-NN/<leccion>.
// Antes era app/pn/[semestre]/[semana]/[leccion]/page.tsx; ahora la ruta
// [seccion]/[item] también sirve los capítulos y despacha aquí.

// Por ahora solo existe el curso de PN, semestre I.
const CARRERA = "pn" as const;
const SEMESTRE = 1 as const;
const ROMANO: Record<number, string> = { 1: "I", 3: "III", 5: "V", 7: "VII" };

export function paramsLeccionesRuta() {
  return paramsLecciones(CARRERA, SEMESTRE).map((p) => ({
    semestre: p.semestre,
    seccion: p.semana,
    item: p.leccion,
  }));
}

function cargar(semestre: string, semana: string, leccion: string) {
  if (semestre !== `s${SEMESTRE}`) return null;
  const numero = numeroDeSegmento(semana);
  if (numero === null) return null;
  return getLeccion(CARRERA, SEMESTRE, numero, leccion);
}

export function metadataLeccion(semestre: string, semana: string, leccion: string): Metadata {
  const datos = cargar(semestre, semana, leccion);
  if (!datos) return {};
  return {
    title: `${datos.leccion.titulo} · Semana ${datos.semana.numero} · Piloto Naval (PN)`,
    description: datos.leccion.objetivo,
  };
}

/** null si la lección no existe (la página llama a notFound). */
export function LeccionRuta({ semestre, semana, leccion }: { semestre: string; semana: string; leccion: string }) {
  const datos = cargar(semestre, semana, leccion);
  if (!datos) return null;

  const semestreHref = `/${CARRERA}/s${SEMESTRE}`;
  return (
    <LibroShell
      volverHref={datos.semana.href}
      migas={[
        { label: "Inicio", href: "/" },
        { label: "Piloto Naval (PN)", href: "/pn" },
        { label: `Semestre ${ROMANO[SEMESTRE]}`, href: semestreHref },
        { label: `Semana ${datos.semana.numero}`, href: datos.semana.href },
        { label: datos.leccion.titulo },
      ]}
    >
      <LeccionView datos={datos} />
    </LibroShell>
  );
}

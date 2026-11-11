import { LibroShell } from "@/components/libro/LibroShell";
import s from "@/components/libro/libro.module.css";
import { SemanaDetalle, type SemanaAnterior } from "@/components/libro/programa/SemanaDetalle";
import { semestreDeSegmento, semestreRomano } from "@/components/libro/programa/semestre";
import { getSemana, numeroDeSegmento, paramsSemanas } from "@/lib/content/loader";

// Semana del curso de Inglés Marítimo (Fase 3): /pn/[semestre]/semana-NN.
// Antes era app/pn/[semestre]/[semana]/page.tsx; ahora la ruta [seccion]
// también sirve los libros por materia y despacha aquí.

/** Params de las semanas para [seccion] (por ahora solo PN, Semestre I). */
export function paramsSemanasRuta() {
  return paramsSemanas("pn", 1).map((p) => ({ semestre: p.semestre, seccion: p.semana }));
}

export function esSegmentoSemana(seg: string): boolean {
  return numeroDeSegmento(seg) !== null;
}

function cargar(semestreSeg: string, semanaSeg: string) {
  const semestre = semestreDeSegmento(semestreSeg);
  const numero = numeroDeSegmento(semanaSeg);
  if (!semestre || !numero) return null;
  const semana = getSemana("pn", semestre, numero);
  if (!semana || !semana.tieneContenido) return null;
  return { semestre, semana };
}

export function metadataSemana(semestreSeg: string, semanaSeg: string) {
  const datos = cargar(semestreSeg, semanaSeg);
  return {
    title: datos
      ? `Semana ${datos.semana.numero} — Piloto Naval (PN), Semestre ${semestreRomano(datos.semestre)}`
      : "Piloto Naval (PN)",
  };
}

/** null si la semana no existe o no tiene contenido (la página llama a notFound). */
export function SemanaRuta({ semestreSeg, semanaSeg }: { semestreSeg: string; semanaSeg: string }) {
  const datos = cargar(semestreSeg, semanaSeg);
  if (!datos) return null;
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
        { label: "Piloto Naval (PN)", href: "/pn" },
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

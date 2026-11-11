import type { Metadata } from "next";
import { LibroShell } from "@/components/libro/LibroShell";
import s from "@/components/libro/libro.module.css";
import { CapituloView, type DatosCapitulo } from "@/components/libro/capitulo/CapituloView";
import { IndiceLibro } from "@/components/libro/capitulo/IndiceLibro";
import c from "@/components/libro/capitulo/capitulo.module.css";
import { estadoLecturaPublica } from "@/lib/libro/lecturas";
import {
  NOMBRE_CARRERA_EN,
  capitulosPorSemana,
  getCapitulo,
  getLibro,
  romano,
  semestreDeSegmentoLibro,
  type CarreraLibro,
} from "@/lib/libro/tareas";

// Libros por materia (Fase 3B). Interfaz en inglés.
//   /<carrera>/s<N>/<materia>            → LibroIndiceRuta
//   /<carrera>/s<N>/<materia>/<taskId>   → CapituloRuta

function migasBase(carrera: CarreraLibro, semestre: 1 | 3 | 5 | 7) {
  return [
    { label: "Home", href: "/" },
    { label: NOMBRE_CARRERA_EN[carrera], href: `/${carrera}` },
    { label: `Semester ${romano(semestre)}`, href: `/${carrera}/s${semestre}` },
  ];
}

function cargarLibro(carrera: CarreraLibro, semestreSeg: string, slug: string) {
  const semestre = semestreDeSegmentoLibro(semestreSeg);
  return semestre ? getLibro(carrera, semestre, slug) : null;
}

function cargarCapitulo(carrera: CarreraLibro, semestreSeg: string, slug: string, taskId: string) {
  const semestre = semestreDeSegmentoLibro(semestreSeg);
  return semestre ? getCapitulo(carrera, semestre, slug, taskId) : null;
}

export function metadataLibro(carrera: CarreraLibro, semestreSeg: string, slug: string): Metadata {
  const libro = cargarLibro(carrera, semestreSeg, slug);
  return libro ? { title: `${libro.codigo} ${libro.titulo} — Semester ${romano(libro.semestre)}` } : {};
}

export function metadataCapitulo(carrera: CarreraLibro, semestreSeg: string, slug: string, taskId: string): Metadata {
  const d = cargarCapitulo(carrera, semestreSeg, slug, taskId);
  return d ? { title: `${d.capitulo.titulo} · ${d.libro.codigo}` } : {};
}

/** null si el libro no existe. */
export function LibroIndiceRuta({ carrera, semestreSeg, slug }: { carrera: CarreraLibro; semestreSeg: string; slug: string }) {
  const libro = cargarLibro(carrera, semestreSeg, slug);
  if (!libro) return null;
  const semanas = capitulosPorSemana(libro).map(({ semana, capitulos }) => ({
    semana,
    capitulos: capitulos.map((cap) => ({
      numero: cap.numero,
      titulo: cap.titulo,
      unidad: cap.unidad,
      tema: cap.tema,
      href: cap.href,
      key: cap.key,
    })),
  }));

  return (
    <LibroShell
      idioma="en"
      migas={[...migasBase(carrera, libro.semestre), { label: libro.codigo }]}
      volverHref={`/${carrera}/s${libro.semestre}`}
    >
      <p className={`${s.muted} ${c.libroCodigo}`}>
        {libro.codigo} · Semester {romano(libro.semestre)}
      </p>
      <h1 className={s.h1} lang="es">
        {libro.titulo}
      </h1>
      <p className={s.muted}>
        {libro.capitulos.length} chapters. Each chapter has a reading and an exercise.
      </p>
      <IndiceLibro semanas={semanas} />
    </LibroShell>
  );
}

/** null si el capítulo no existe. */
export function CapituloRuta({
  carrera,
  semestreSeg,
  slug,
  taskId,
}: {
  carrera: CarreraLibro;
  semestreSeg: string;
  slug: string;
  taskId: string;
}) {
  const d = cargarCapitulo(carrera, semestreSeg, slug, taskId);
  if (!d) return null;
  const { libro, capitulo, tarea } = d;

  const datos: DatosCapitulo = {
    numero: capitulo.numero,
    total: libro.capitulos.length,
    titulo: capitulo.titulo,
    unidad: capitulo.unidad,
    tema: capitulo.tema,
    semana: capitulo.semana,
    key: capitulo.key,
    xp: tarea.xp,
    tiempo: tarea.estimatedTime,
    dificultad: tarea.difficulty,
    escenario: tarea.scenario,
    instrucciones: tarea.instructions,
    entregable: tarea.deliverable,
    criterios: tarea.assessmentCriteria,
    actividadHref: capitulo.actividadHref,
    libroHref: libro.href,
    siguienteHref: d.siguiente?.href ?? null,
    consulta: { carrera, semestre: `s${libro.semestre}`, materia: libro.slug, taskId },
    lectura: estadoLecturaPublica(d),
  };

  return (
    <LibroShell
      idioma="en"
      migas={[
        ...migasBase(carrera, libro.semestre),
        { label: libro.codigo, href: libro.href },
        { label: `Chapter ${capitulo.numero}` },
      ]}
      volverHref={libro.href}
    >
      <CapituloView datos={datos} />
    </LibroShell>
  );
}

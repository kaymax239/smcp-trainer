// ============================================================
// Libro por materias (Fase 3B) — adaptador de solo lectura
// ------------------------------------------------------------
// Convierte las tareas existentes en libros:
//   Carrera → Semestre (tomo) → Materia (libro) → Capítulo (una tarea).
// NO modifica nada de data/academic: solo lee academicMissionTasks y
// academicSubjects. Quedan fuera del libro:
//   - los juegos de English Levels: englishLevelTaskIds y también los de
//     subjectCode "Inglés por Niveles" que no están en esa lista (L1, L2,
//     L7, L8). Siguen existiendo en /tasks/<taskId>;
//   - las tareas generadas en el panel admin (generated-tasks.json), que
//     no están validadas.
//
// Rutas:
//   /<carrera>/s<N>/<materia>            índice del libro
//   /<carrera>/s<N>/<materia>/<taskId>   capítulo
// <materia> = clave oficial de la asignatura en minúsculas ("tmo101"),
// tomada de subjects.officialArea ("TMO101 / Transporte Marítimo").
// ============================================================

import { englishLevelTaskIds } from "@/data/academic/english-levels";
import { academicMissionTasks, type AcademicMissionTask } from "@/data/academic/mission-tasks";
import { academicSubjects } from "@/data/academic/subjects";
import tareasGeneradas from "@/data/academic/generated-tasks.json";

const SUBJECT_ENGLISH_LEVELS = "Inglés por Niveles";
const IDS_GENERADAS = new Set((tareasGeneradas as { taskId: string }[]).map((t) => t.taskId));

/** true si la tarea NO entra al libro (juegos de English Levels o tarea generada sin validar). */
export function excluidaDelLibro(t: AcademicMissionTask): boolean {
  return englishLevelTaskIds.has(t.taskId) || t.subjectCode === SUBJECT_ENGLISH_LEVELS || IDS_GENERADAS.has(t.taskId);
}

export type CarreraLibro = "pn" | "mn";
export type SemestreLibro = 1 | 3 | 5 | 7;

export const CARRERAS_LIBRO: readonly CarreraLibro[] = ["pn", "mn"];
export const SEMESTRES_LIBRO: readonly SemestreLibro[] = [1, 3, 5, 7];

const ROMANO_A_NUM: Record<string, SemestreLibro> = { I: 1, III: 3, V: 5, VII: 7 };
const NUM_A_ROMANO: Record<SemestreLibro, string> = { 1: "I", 3: "III", 5: "V", 7: "VII" };

export function romano(n: SemestreLibro): string {
  return NUM_A_ROMANO[n];
}

/** "s1" → 1; null si no es un semestre del libro. */
export function semestreDeSegmentoLibro(seg: string): SemestreLibro | null {
  const m = /^s(\d)$/.exec(seg);
  const n = m ? Number(m[1]) : NaN;
  return (SEMESTRES_LIBRO as readonly number[]).includes(n) ? (n as SemestreLibro) : null;
}

/** Nombre de la carrera en inglés (interfaz del libro). */
export const NOMBRE_CARRERA_EN: Record<CarreraLibro, string> = {
  pn: "Piloto Naval (PN)",
  mn: "Maquinista Naval (MN)",
};

export interface Capitulo {
  taskId: string;
  /** 1, 2, 3… dentro del libro, en orden de semana. */
  numero: number;
  titulo: string;
  unidad: string;
  tema: string;
  semana: number;
  xp: number;
  tiempo: string;
  dificultad: AcademicMissionTask["difficulty"];
  href: string;
  /** Clave de progreso (lib/progress/store.ts). */
  key: string;
  /** Ruta de la actividad interactiva existente (juego), o null. */
  actividadHref: string | null;
}

export interface Libro {
  carrera: CarreraLibro;
  semestre: SemestreLibro;
  slug: string;
  codigo: string;
  titulo: string;
  subjectId: string;
  href: string;
  capitulos: Capitulo[];
}

export interface CapituloCompleto {
  libro: Libro;
  capitulo: Capitulo;
  tarea: AcademicMissionTask;
  anterior: Capitulo | null;
  siguiente: Capitulo | null;
}

function codigoDeMateria(officialArea: string): string {
  return officialArea.split("/")[0].trim();
}

let cache: { libros: Libro[]; tareas: Map<string, AcademicMissionTask> } | null = null;

function construir() {
  if (cache) return cache;
  const materias = new Map(academicSubjects.map((s) => [s.id, s]));
  const grupos = new Map<string, AcademicMissionTask[]>();
  const tareas = new Map<string, AcademicMissionTask>();

  for (const t of academicMissionTasks) {
    if (excluidaDelLibro(t)) continue;
    tareas.set(t.taskId, t);
    const lista = grupos.get(t.subjectId) ?? [];
    lista.push(t);
    grupos.set(t.subjectId, lista);
  }

  const libros: Libro[] = [];
  const vistos = new Set<string>();
  for (const [subjectId, lista] of grupos) {
    const materia = materias.get(subjectId);
    const primera = lista[0];
    const carrera = primera.career.toLowerCase() as CarreraLibro;
    const semestre = ROMANO_A_NUM[primera.semester.replace(/^Semester\s+/, "")];
    if (!semestre || !CARRERAS_LIBRO.includes(carrera)) continue;
    const mezclada = lista.find((t) => t.career !== primera.career || t.semester !== primera.semester);
    if (mezclada) {
      throw new Error(`La materia ${subjectId} mezcla carreras o semestres (tarea ${mezclada.taskId})`);
    }

    const codigo = materia ? codigoDeMateria(materia.officialArea) : primera.subjectCode;
    const slug = codigo.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const clave = `${carrera}/${semestre}/${slug}`;
    if (vistos.has(clave)) throw new Error(`Libro repetido: ${clave}`);
    vistos.add(clave);

    const href = `/${carrera}/s${semestre}/${slug}`;
    // Orden de semana; dentro de la misma semana, el orden original de los datos.
    const ordenadas = lista
      .map((t, i) => ({ t, i }))
      .sort((a, b) => (a.t.week ?? 99) - (b.t.week ?? 99) || a.i - b.i)
      .map(({ t }) => t);

    libros.push({
      carrera,
      semestre,
      slug,
      codigo,
      titulo: materia?.title ?? primera.subjectName,
      subjectId,
      href,
      capitulos: ordenadas.map((t, i) => ({
        taskId: t.taskId,
        numero: i + 1,
        titulo: t.taskTitle,
        unidad: t.unit,
        tema: t.topic,
        semana: t.week ?? 0,
        xp: t.xp,
        tiempo: t.estimatedTime,
        dificultad: t.difficulty,
        href: `${href}/${t.taskId}`,
        key: `capitulo/${carrera}/s${semestre}/${slug}/${t.taskId}`,
        actividadHref: t.game ? `/tasks/${t.taskId}` : null,
      })),
    });
  }

  libros.sort((a, b) => a.carrera.localeCompare(b.carrera) || a.semestre - b.semestre);
  cache = { libros, tareas };
  return cache;
}

/** Libros (materias con al menos un capítulo) de una carrera y semestre, en el orden de los datos. */
export function getLibros(carrera: CarreraLibro, semestre: SemestreLibro): Libro[] {
  return construir().libros.filter((l) => l.carrera === carrera && l.semestre === semestre);
}

export function getLibro(carrera: CarreraLibro, semestre: SemestreLibro, slug: string): Libro | null {
  return getLibros(carrera, semestre).find((l) => l.slug === slug) ?? null;
}

export function getCapitulo(
  carrera: CarreraLibro,
  semestre: SemestreLibro,
  slug: string,
  taskId: string,
): CapituloCompleto | null {
  const libro = getLibro(carrera, semestre, slug);
  if (!libro) return null;
  const i = libro.capitulos.findIndex((c) => c.taskId === taskId);
  if (i === -1) return null;
  const tarea = construir().tareas.get(taskId);
  if (!tarea) return null;
  return {
    libro,
    capitulo: libro.capitulos[i],
    tarea,
    anterior: libro.capitulos[i - 1] ?? null,
    siguiente: libro.capitulos[i + 1] ?? null,
  };
}

/** Semestres que tienen al menos un libro. */
export function semestresConLibros(carrera: CarreraLibro): SemestreLibro[] {
  return SEMESTRES_LIBRO.filter((s) => getLibros(carrera, s).length > 0);
}

export function paramsLibros(carrera: CarreraLibro) {
  return construir()
    .libros.filter((l) => l.carrera === carrera)
    .map((l) => ({ semestre: `s${l.semestre}`, seccion: l.slug }));
}

export function paramsCapitulos(carrera: CarreraLibro) {
  return construir()
    .libros.filter((l) => l.carrera === carrera)
    .flatMap((l) => l.capitulos.map((c) => ({ semestre: `s${l.semestre}`, seccion: l.slug, item: c.taskId })));
}

/** Capítulos agrupados por semana, en orden. */
export function capitulosPorSemana(libro: Libro): { semana: number; capitulos: Capitulo[] }[] {
  const grupos = new Map<number, Capitulo[]>();
  for (const c of libro.capitulos) {
    const lista = grupos.get(c.semana) ?? [];
    lista.push(c);
    grupos.set(c.semana, lista);
  }
  return [...grupos].sort((a, b) => a[0] - b[0]).map(([semana, capitulos]) => ({ semana, capitulos }));
}

import Link from "next/link";
import { LibroShell } from "@/components/libro/LibroShell";
import s from "@/components/libro/libro.module.css";
import p from "@/components/libro/programa/programa.module.css";

export const metadata = {
  title: "Herramientas — Inglés Marítimo",
};

interface Herramienta {
  href: string;
  titulo: string;
  descripcion: string;
}

// Cada ruta existe como app/<ruta>/page.tsx. Las URLs no cambian.
const HERRAMIENTAS: Herramienta[] = [
  {
    href: "/herramientas/tareas",
    titulo: "Tareas por semestre",
    descripcion: "El panel anterior: tareas por carrera y semestre, con sus misiones.",
  },
  {
    href: "/english-levels",
    titulo: "English Levels",
    descripcion: "Tareas organizadas por nivel de inglés marítimo.",
  },
  {
    href: "/admin/generate-tasks",
    titulo: "Generador de tareas IA",
    descripcion: "Crea tareas nuevas con inteligencia artificial.",
  },
  {
    href: "/generated-tasks",
    titulo: "Tareas generadas",
    descripcion: "Consulta las tareas que ya creó el generador.",
  },
  {
    href: "/vhf",
    titulo: "Simulador VHF",
    descripcion: "Practica comunicaciones por radio VHF con frases SMCP.",
  },
  {
    href: "/voice-settings",
    titulo: "Ajustes de voz",
    descripcion: "Elige el acento con que se leen las frases en voz alta.",
  },
  {
    href: "/traffic",
    titulo: "Tráfico en vivo",
    descripcion: "Buques cerca de Tampico y Altamira en tiempo real.",
  },
  {
    href: "/engine-room",
    titulo: "Sala de máquinas",
    descripcion: "Simulador de guardia en la sala de máquinas.",
  },
  {
    href: "/mission-1-1",
    titulo: "Misión 1.1",
    descripcion: "Preséntate con el jefe de máquinas.",
  },
  {
    href: "/mission-1-2",
    titulo: "Misión 1.2",
    descripcion: "Repórtate con el oficial de guardia.",
  },
  {
    href: "/mission-1-3",
    titulo: "Misión 1.3",
    descripcion: "Verifica los puntos de familiarización de la sala de máquinas.",
  },
  {
    href: "/mission-1-4",
    titulo: "Misión 1.4",
    descripcion: "Transmite por radio la identidad de la tripulación.",
  },
];

export default function HerramientasPage() {
  return (
    <LibroShell migas={[{ label: "Inicio", href: "/" }, { label: "Herramientas" }]} volverHref="/">
      <h1 className={s.h1}>Herramientas</h1>
      <p className={`${s.muted} ${p.intro}`}>
        Simuladores, tareas y ajustes que ya existían en la app.
      </p>

      <ul className={`${p.lista} ${p.listaDos}`}>
        {HERRAMIENTAS.map((h) => (
          <li key={h.href}>
            <Link href={h.href} className={s.card}>
              <span className={p.cardBody}>
                <span className={p.cardTitulo}>{h.titulo}</span>
                <span className={`${p.cardTexto} ${s.muted}`}>{h.descripcion}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </LibroShell>
  );
}

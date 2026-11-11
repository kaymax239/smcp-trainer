import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { getLecturaCapitulo } from "@/lib/libro/lecturas";
import { getCapitulo, semestreDeSegmentoLibro, type CarreraLibro } from "@/lib/libro/tareas";

// ============================================================
// Libro — lectura de un capítulo en BORRADOR, solo para docentes
// ------------------------------------------------------------
// Las lecturas validadas ya van en el HTML estático del capítulo.
// Los borradores no: el alumno ve "Reading coming soon" y el
// docente las pide aquí. proxy.ts ya exige sesión para /api/*;
// además se exige rol docente (session.user.rol, auth.ts).
// La ruta del archivo sale del adaptador (getCapitulo), nunca del
// texto de la petición.
// ============================================================

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Sign in required." }, { status: 401 });
  if (session.user.rol !== "docente") return NextResponse.json({ error: "Teachers only." }, { status: 403 });

  const q = req.nextUrl.searchParams;
  const carrera = q.get("carrera");
  const semestre = semestreDeSegmentoLibro(q.get("semestre") ?? "");
  const materia = q.get("materia") ?? "";
  const taskId = q.get("taskId") ?? "";
  if ((carrera !== "pn" && carrera !== "mn") || !semestre) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }
  const datos = getCapitulo(carrera as CarreraLibro, semestre, materia, taskId);
  const lectura = datos ? getLecturaCapitulo(datos) : null;
  if (!lectura) return NextResponse.json({ error: "Not found." }, { status: 404 });

  return NextResponse.json({ lectura }, { headers: { "Cache-Control": "private, no-store" } });
}

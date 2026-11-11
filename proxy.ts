import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { esRutaLibroPublica } from "@/lib/acceso/rutas-publicas";

const PUBLIC_PATHS = new Set(["/login", "/preview"]);

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isLoggedIn = Boolean(req.auth?.user);
  const isAuthApi = pathname.startsWith("/api/auth");
  // Demo pública del libro: lista exacta en lib/acceso/rutas-publicas.ts.
  const isPublic = PUBLIC_PATHS.has(pathname) || esRutaLibroPublica(pathname);

  if (isAuthApi) return NextResponse.next();

  // /api/tts sigue cerrado (cuida la cuota de Gemini). Sin sesión responde 401
  // en vez de redirigir al HTML del login: así speakWithAccent ve !res.ok y
  // usa la voz del navegador una sola vez.
  if (!isLoggedIn && pathname === "/api/tts") {
    return NextResponse.json({ error: "Inicia sesión para usar la voz de la estación." }, { status: 401 });
  }

  if (!isLoggedIn && !isPublic) {
    const loginUrl = new URL("/login", req.nextUrl.origin);
    loginUrl.searchParams.set("callbackUrl", pathname + req.nextUrl.search);
    return NextResponse.redirect(loginUrl);
  }

  if (isLoggedIn && pathname === "/login") {
    return NextResponse.redirect(new URL("/", req.nextUrl.origin));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)",
  ],
};

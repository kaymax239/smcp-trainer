import { auth } from "@/auth";
import { NextResponse } from "next/server";

// Gatekeeper global: todo requiere sesión salvo el endpoint de auth y /login.
export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isLoggedIn = Boolean(req.auth?.user);
  const isAuthApi = pathname.startsWith("/api/auth");
  const isLoginPage = pathname === "/login";

  // El flujo OAuth (/api/auth/*) debe quedar siempre público o se bloquea a sí mismo.
  if (isAuthApi) return NextResponse.next();

  // Sin sesión y fuera del login → al login, recordando a dónde iba.
  if (!isLoggedIn && !isLoginPage) {
    const loginUrl = new URL("/login", req.nextUrl.origin);
    loginUrl.searchParams.set("callbackUrl", pathname + req.nextUrl.search);
    return NextResponse.redirect(loginUrl);
  }

  // Ya logueado pero pidiendo /login → mándalo al home.
  if (isLoggedIn && isLoginPage) {
    return NextResponse.redirect(new URL("/", req.nextUrl.origin));
  }

  return NextResponse.next();
});

// Excluye assets estáticos y _next para no cobrar auth en cada recurso.
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)",
  ],
};

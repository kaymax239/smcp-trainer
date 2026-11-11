// ============================================================
// Demo pública del libro — rutas que se ven sin iniciar sesión
// ------------------------------------------------------------
// Única fuente de verdad: la usan proxy.ts (para dejar pasar) y
// las páginas del libro (para mostrar "Inicia sesión para
// continuar" en vez de un enlace que mandaría al login).
// Comparación exacta de la ruta: nada de prefijos.
// ============================================================

/** Páginas del libro abiertas al público (demo). */
export const RUTAS_LIBRO_PUBLICAS = [
  "/",
  "/pn",
  "/pn/s1",
  "/pn/s1/semana-01",
  "/pn/s1/semana-01/01-what-is-maritime-english",
] as const;

const PUBLICAS = new Set<string>(RUTAS_LIBRO_PUBLICAS);

/** true si la ruta (sin query ni barra final) es parte de la demo pública. */
export function esRutaLibroPublica(pathname: string): boolean {
  const limpia = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return PUBLICAS.has(limpia);
}

/** Enlace al login que regresa a `destino` al terminar. */
export function hrefLogin(destino: string): string {
  return `/login?callbackUrl=${encodeURIComponent(destino)}`;
}

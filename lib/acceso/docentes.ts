// ============================================================
// Acceso — lista de docentes permitidos (DOCENTE_ALLOWLIST)
// ------------------------------------------------------------
// Env DOCENTE_ALLOWLIST: correos separados por comas. Se normaliza
// (trim + minúsculas) y se compara con igualdad estricta.
// Si la env no existe o está vacía, la lista queda vacía y todo
// funciona como antes.
// NUNCA imprimir ni registrar en logs el contenido de la lista.
// Solo servidor (lo usa auth.ts).
// ============================================================

export type Rol = "docente" | "cadete";

function docenteAllowlist(): Set<string> {
  const crudo = process.env.DOCENTE_ALLOWLIST;
  if (!crudo) return new Set();
  return new Set(
    crudo
      .split(",")
      .map((e) => e.trim().toLowerCase())
      .filter((e) => e.length > 0),
  );
}

/** true si el correo está en DOCENTE_ALLOWLIST (igualdad exacta tras normalizar). */
export function isDocenteAllowlisted(email: string | null | undefined): boolean {
  if (!email) return false;
  return docenteAllowlist().has(email.trim().toLowerCase());
}

/**
 * Rol de la sesión: docente si está en la allowlist o es del dominio
 * fidena.edu.mx; todo lo demás (alumnos @es.fidena.edu.mx, invitados) es cadete.
 */
export function rolDe(email: string | null | undefined): Rol {
  if (isDocenteAllowlisted(email)) return "docente";
  const parts = (email ?? "").toLowerCase().split("@");
  return parts.length === 2 && parts[1] === "fidena.edu.mx" ? "docente" : "cadete";
}

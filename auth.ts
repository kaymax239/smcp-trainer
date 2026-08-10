import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

// Dominios institucionales permitidos. Lista explícita, comparación exacta
// del dominio COMPLETO tras el @ (nada de endsWith, que dejaría pasar
// "no-fidena.edu.mx"). fidena.edu.mx = docentes, es.fidena.edu.mx = alumnos.
const ALLOWED_DOMAINS = ["fidena.edu.mx", "es.fidena.edu.mx"];

// Invitados externos con acceso temporal. NO tocar la lógica de dominios.
const GUEST_ALLOWLIST: { email: string; role: "cadete"; expiresAt: string }[] = [
  { email: "maxmtzrey@gmail.com", role: "cadete", expiresAt: "2026-09-10T23:59:59-06:00" },
];

// Busca al invitado por correo (vigente o no). Comparación exacta en minúsculas.
function findGuest(email: string | null | undefined) {
  if (!email) return undefined;
  const target = email.toLowerCase();
  return GUEST_ALLOWLIST.find((g) => g.email.toLowerCase() === target);
}

// Invitado válido = está en la lista y su fecha de expiración aún no pasa.
function isActiveGuest(email: string) {
  const guest = findGuest(email);
  if (!guest) return false;
  const expires = Date.parse(guest.expiresAt);
  // Fecha mal escrita → no se concede acceso (falla cerrado).
  if (Number.isNaN(expires)) return false;
  return Date.now() <= expires;
}

// Invitado caducado. Para cuentas de dominio siempre es false: no las toca.
function isExpiredGuest(email: string | null | undefined) {
  const guest = findGuest(email);
  return Boolean(guest) && !isActiveGuest(guest!.email);
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  // AUTH_GOOGLE_ID y AUTH_GOOGLE_SECRET se leen automáticamente del entorno.
  providers: [Google],
  pages: {
    // Página de login propia y pantalla de error (dominio no permitido, etc.).
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    // Puerta de dominio: solo pasan cuentas verificadas de un dominio permitido.
    signIn({ profile }) {
      const email = profile?.email;
      // Rechaza email ausente o no verificado por Google.
      if (!email || profile?.email_verified === false) return false;
      // Debe haber exactamente una "@"; el dominio es lo que va después.
      const parts = email.toLowerCase().split("@");
      if (parts.length !== 2) return false;
      const domain = parts[1];
      // Igualdad estricta contra la lista blanca.
      if (ALLOWED_DOMAINS.includes(domain)) return true;
      // Puerta aparte para invitados externos con vigencia.
      return isActiveGuest(parts[0] + "@" + domain);
    },
    // Corte duro por fecha, revalidado en CADA lectura de sesión. Devolver null
    // aquí hace que @auth/core no emita sesión y limpie la cookie: el invitado
    // caducado queda deslogueado aunque su JWT siguiera vivo. Las cuentas de
    // dominio nunca entran a esta rama.
    jwt({ token }) {
      if (isExpiredGuest(token.email)) return null;
      return token;
    },
    // El middleware lee esto para decidir si la petición está autenticada.
    authorized({ auth }) {
      return Boolean(auth?.user);
    },
  },
});

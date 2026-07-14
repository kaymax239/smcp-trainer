import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

// Dominios institucionales permitidos. Lista explícita, comparación exacta
// del dominio COMPLETO tras el @ (nada de endsWith, que dejaría pasar
// "no-fidena.edu.mx"). fidena.edu.mx = docentes, es.fidena.edu.mx = alumnos.
const ALLOWED_DOMAINS = ["fidena.edu.mx", "es.fidena.edu.mx"];

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
      return ALLOWED_DOMAINS.includes(domain);
    },
    // El middleware lee esto para decidir si la petición está autenticada.
    authorized({ auth }) {
      return Boolean(auth?.user);
    },
  },
});

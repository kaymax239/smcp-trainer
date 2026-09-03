import { signIn } from "@/auth";
import Link from "next/link";

export const metadata = {
  title: "Acceso — SMCP Digital Academy",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string; error?: string }>;
}) {
  const { callbackUrl, error } = await searchParams;
  const domainRejected = error === "AccessDenied";

  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "grid",
        placeItems: "center",
        padding: "24px",
        background: "#0b1622",
        color: "#e6eef7",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "520px",
          background: "#101f30",
          border: "1px solid #1d3350",
          borderRadius: "16px",
          padding: "36px 32px",
          textAlign: "center",
          boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
        }}
      >
        <p style={{ letterSpacing: "0.18em", fontSize: "11px", opacity: 0.7, margin: 0 }}>
          FIDENA · KAYMAX · SMCP DIGITAL ACADEMY
        </p>
        <h1 style={{ fontSize: "26px", margin: "10px 0 8px" }}>Inglés marítimo institucional</h1>
        <p style={{ opacity: 0.8, margin: "0 0 22px", fontSize: "14px", lineHeight: 1.55 }}>
          Entrenador SMCP para cadetes de Pilotin Naval y Máquinas Navales.
          El campus completo pide cuenta institucional de FIDENA.
        </p>

        {error ? (
          <p
            style={{
              background: "#3a1420",
              border: "1px solid #7a2438",
              color: "#ffc9d3",
              borderRadius: "10px",
              padding: "12px 14px",
              fontSize: "13px",
              margin: "0 0 20px",
            }}
          >
            {domainRejected
              ? "Esa cuenta no es institucional. Usa @fidena.edu.mx (docentes) o @es.fidena.edu.mx (alumnos)."
              : "No se pudo iniciar sesión. Inténtalo de nuevo."}
          </p>
        ) : null}

        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: callbackUrl || "/" });
          }}
        >
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px 18px",
              fontSize: "15px",
              fontWeight: 600,
              color: "#0b1622",
              background: "#ffffff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Entrar con Google FIDENA
          </button>
        </form>

        <p style={{ margin: "16px 0 0", fontSize: "13px", opacity: 0.7 }}>
          Docentes: <strong>@fidena.edu.mx</strong>
          <br />
          Cadetes: <strong>@es.fidena.edu.mx</strong>
        </p>

        <p style={{ margin: "22px 0 0" }}>
          <Link href="/preview" style={{ color: "#f2b84b", fontWeight: 700, textDecoration: "none" }}>
            Ver demostración pública →
          </Link>
        </p>
        <p style={{ margin: "10px 0 0", fontSize: "13px" }}>
          <a
            href="https://smcp-frases-trainer.vercel.app"
            style={{ color: "#8fe0da", textDecoration: "none" }}
          >
            Practicar 100 frases SMCP (sin login)
          </a>
        </p>
      </section>
    </main>
  );
}

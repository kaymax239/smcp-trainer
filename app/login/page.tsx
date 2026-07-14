import { signIn } from "@/auth";

export const metadata = {
  title: "Acceso — SMCP Trainer",
};

// Página pública de acceso. El middleware manda aquí a quien no tiene sesión.
export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string; error?: string }>;
}) {
  const { callbackUrl, error } = await searchParams;
  // AccessDenied = la puerta de dominio rechazó la cuenta (no es @fidena.edu.mx).
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
          maxWidth: "420px",
          background: "#101f30",
          border: "1px solid #1d3350",
          borderRadius: "16px",
          padding: "40px 32px",
          textAlign: "center",
          boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
        }}
      >
        <p style={{ letterSpacing: "0.18em", fontSize: "12px", opacity: 0.7, margin: 0 }}>
          SMCP DIGITAL ACADEMY
        </p>
        <h1 style={{ fontSize: "26px", margin: "8px 0 4px" }}>Acceso institucional</h1>
        <p style={{ opacity: 0.75, margin: "0 0 28px", fontSize: "14px" }}>
          Entra con tu cuenta <strong>@fidena.edu.mx</strong> para continuar.
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
              ? "Esa cuenta no pertenece al dominio @fidena.edu.mx. Usa tu correo institucional."
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
            Entrar con Google
          </button>
        </form>
      </section>
    </main>
  );
}

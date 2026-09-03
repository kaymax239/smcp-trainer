import Link from "next/link";
import type { CSSProperties } from "react";

export const metadata = {
  title: "Demostración — SMCP Digital Academy",
};

export default function PreviewPage() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        padding: "32px 20px 64px",
        background: "#07111f",
        color: "#eef4f8",
      }}
    >
      <section style={{ width: "min(860px, 100%)", margin: "0 auto" }}>
        <p style={{ letterSpacing: "0.16em", fontSize: "12px", color: "#f2b84b", margin: 0 }}>
          FIDENA · KAYMAX · DEMO PÚBLICA
        </p>
        <h1 style={{ fontSize: "clamp(32px, 6vw, 52px)", lineHeight: 1.05, margin: "10px 0 12px" }}>
          SMCP Digital Academy
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.6, color: "#c7d5e1", maxWidth: "640px" }}>
          Inglés marítimo por escenarios para cadetes hispanohablantes.
          El campus con misiones, XP y programas PN/MN sigue protegido con
          cuenta <strong>@fidena.edu.mx</strong> / <strong>@es.fidena.edu.mx</strong>.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "14px",
            marginTop: "28px",
          }}
        >
          <article style={cardStyle}>
            <span style={labelStyle}>PN</span>
            <strong style={titleStyle}>Pilotin Naval</strong>
            <p style={textStyle}>Puente, navegación, VHF, COLREGS y seguridad de cubierta.</p>
          </article>
          <article style={cardStyle}>
            <span style={labelStyle}>MN</span>
            <strong style={titleStyle}>Máquinas Navales</strong>
            <p style={textStyle}>Cuarto de máquinas, guardia, órdenes puente-máquina y emergencias.</p>
          </article>
          <article style={cardStyle}>
            <span style={labelStyle}>STCW / SMCP</span>
            <strong style={titleStyle}>Frases de trabajo</strong>
            <p style={textStyle}>Órdenes exactas de radio, puente y máquinas. No es inglés de turismo.</p>
          </article>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "28px" }}>
          <a href="https://smcp-frases-trainer.vercel.app" style={primaryBtn}>
            Probar 100 frases ahora
          </a>
          <Link href="/login" style={secondaryBtn}>
            Entrar como FIDENA
          </Link>
        </div>

        <p style={{ marginTop: "28px", fontSize: "14px", color: "#9fb0bf" }}>
          Las misiones del campus (report to chief engineer, VHF, familiarización)
          no se abren aquí: son del programa institucional.
        </p>
      </section>
    </main>
  );
}

const cardStyle: CSSProperties = {
  padding: "18px",
  border: "1px solid rgba(255,255,255,0.16)",
  borderRadius: "10px",
  background: "rgba(15, 33, 51, 0.92)",
};

const labelStyle: CSSProperties = {
  color: "#f2b84b",
  fontSize: "12px",
  fontWeight: 800,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
};

const titleStyle: CSSProperties = {
  display: "block",
  marginTop: "10px",
  fontSize: "22px",
};

const textStyle: CSSProperties = {
  margin: "10px 0 0",
  color: "#c7d5e1",
  lineHeight: 1.5,
};

const primaryBtn: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  minHeight: "48px",
  padding: "12px 16px",
  borderRadius: "8px",
  background: "#f2b84b",
  color: "#172331",
  fontWeight: 800,
  textDecoration: "none",
};

const secondaryBtn: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  minHeight: "48px",
  padding: "12px 16px",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.2)",
  color: "#ffffff",
  fontWeight: 800,
  textDecoration: "none",
};

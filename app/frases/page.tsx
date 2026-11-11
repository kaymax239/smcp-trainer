import type { Metadata } from "next";
import { LibroShell } from "@/components/libro/LibroShell";
import { BancoFrases } from "@/components/libro/frases/BancoFrases";
import { getCategoriasFrases, getFrases } from "@/lib/content/loader";

export const metadata: Metadata = {
  title: "Banco de frases SMCP",
  description: "Las 100 frases SMCP con traducción al español y audio.",
};

export default function FrasesPage() {
  const frases = getFrases();
  const categorias = getCategoriasFrases();

  return (
    <LibroShell migas={[{ label: "Inicio", href: "/" }, { label: "Banco de frases" }]} volverHref="/">
      <BancoFrases frases={frases} categorias={categorias} />
    </LibroShell>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SMCP Trainer",
  description: "Professional maritime simulator for STCW and IMO SMCP competency training"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // La API de borradores del libro lee content/lecturas en tiempo de ejecución.
  outputFileTracingIncludes: {
    "/api/libro/lectura": ["./content/lecturas/**/*"],
  },
};

export default nextConfig;

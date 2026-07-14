"use client";

import { SessionProvider } from "next-auth/react";

// Expone la sesión a los client components (useSession / signOut) en todo el árbol.
export function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

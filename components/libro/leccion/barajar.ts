// ============================================================
// Libro interactivo — revolver opciones en el cliente
// ------------------------------------------------------------
// Las permutaciones se calculan DESPUÉS de montar (useEffect)
// para que el HTML del servidor y la primera pintura del cliente
// coincidan y no haya errores de hidratación.
// ============================================================

import { useEffect, useState } from "react";

/** Copia revuelta de `items` (Fisher–Yates). No modifica el original. */
export function barajar<T>(items: readonly T[], aleatorio: () => number = Math.random): T[] {
  const copia = [...items];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(aleatorio() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

/**
 * Permutación revuelta de 0..n-1. Con `evitarIdentidad`, si salió el orden
 * original (y hay ≥ 2 elementos) se rota una posición para que no lo sea.
 */
export function permutacion(n: number, evitarIdentidad = false): number[] {
  const base = Array.from({ length: n }, (_, i) => i);
  if (n < 2) return base;
  let p = barajar(base);
  if (evitarIdentidad && p.every((v, i) => v === i)) {
    p = [...p.slice(1), p[0]];
  }
  return p;
}

/**
 * Permutación revuelta calculada al montar. Devuelve null en el servidor y
 * en la primera pintura (el componente debe esperar antes de mostrar el orden).
 * Para volver a revolver, remonta el componente (cambia su `key`).
 */
export function usePermutacion(n: number, evitarIdentidad = false): number[] | null {
  const [p, setP] = useState<number[] | null>(null);
  useEffect(() => {
    setP(permutacion(n, evitarIdentidad));
  }, [n, evitarIdentidad]);
  return p;
}

"use client";

import dynamic from "next/dynamic";

// Leaflet accede a `window`, así que el mapa solo puede renderizarse en cliente.
// `ssr: false` solo se permite dentro de un Client Component.
const TrafficMap = dynamic(() => import("../components/TrafficMap"), {
  ssr: false,
  loading: () => <p style={{ padding: 16 }}>Cargando mapa…</p>,
});

export default function TrafficMapLoader() {
  return <TrafficMap />;
}

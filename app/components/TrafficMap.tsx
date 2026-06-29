"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type Vessel = {
  mmsi: number | string;
  name: string;
  lat: number;
  lon: number;
  sog?: number;
  cog?: number;
  heading?: number;
  navStatus?: number;
  timestamp?: string;
};

type TrafficResponse = {
  area: string;
  count: number;
  vessels: Vessel[];
};

// Centro aproximado del área de Tampico / Altamira
const CENTER: [number, number] = [22.35, -97.6];

// Un buque se considera "en movimiento" si su velocidad sobre el fondo supera 0.5 nudos.
const MOVING_SOG_THRESHOLD = 0.5;

export default function TrafficMap() {
  const [data, setData] = useState<TrafficResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  async function load() {
    try {
      setLoading(true);
      const res = await fetch("/api/traffic", { cache: "no-store" });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? `HTTP ${res.status}`);
      }
      const json: TrafficResponse = await res.json();
      setData(json);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    const id = setInterval(load, 300_000); // refresco AIS cada 5 min (cuota del plan)
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ position: "relative", height: "100%", width: "100%" }}>
      <div
        style={{
          position: "absolute",
          top: 8,
          left: 8,
          zIndex: 1000,
          background: "rgba(0,0,0,0.7)",
          color: "white",
          padding: "6px 10px",
          borderRadius: 6,
          fontSize: 13,
          fontFamily: "monospace",
        }}
      >
        {error
          ? `Error: ${error}`
          : loading && !data
            ? "Cargando tráfico…"
            : `${data?.area ?? ""} — ${data?.count ?? 0} buques`}
      </div>

      <MapContainer
        center={CENTER}
        zoom={10}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {data?.vessels.map((v) => {
          const moving = (v.sog ?? 0) > MOVING_SOG_THRESHOLD;
          return (
            <CircleMarker
              key={v.mmsi}
              center={[v.lat, v.lon]}
              radius={6}
              pathOptions={{
                color: moving ? "#22c55e" : "#f59e0b",
                fillColor: moving ? "#22c55e" : "#f59e0b",
                fillOpacity: 0.8,
              }}
            >
              <Popup>
                <strong>{v.name}</strong>
                <br />
                MMSI: {v.mmsi}
                <br />
                SOG: {v.sog ?? "—"} kn · COG: {v.cog ?? "—"}°
                <br />
                Rumbo: {v.heading ?? "—"}° · NavStatus: {v.navStatus ?? "—"}
                <br />
                {v.timestamp ?? ""}
              </Popup>
            </CircleMarker>
          );
        })}
      </MapContainer>
    </div>
  );
}

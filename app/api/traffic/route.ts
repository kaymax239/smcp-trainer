import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";

// Área de Tampico / Altamira (puerto, fondeadero exterior y aproximaciones)
const TAMPICO_AREA = {
  latBottom: 22.0,
  latTop: 22.7,
  lonLeft: -97.9,
  lonRight: -97.3,
};

const VESSELAPI_BASE = "https://api.vesselapi.com/v1/location/vessels/bounding-box";

// Escenario capturado que sirve de respaldo si falta la key o la API falla,
// para que la demo nunca se rompa aunque se acabe la cuota.
const SCENARIO_FILE = path.join(process.cwd(), "data", "scenarios", "tampico-watch-01.json");

type VesselApiRecord = {
  mmsi?: number | string;
  vessel_name?: string;
  latitude?: number;
  longitude?: number;
  sog?: number;
  cog?: number;
  heading?: number;
  nav_status?: number;
  timestamp?: string;
  processed_timestamp?: string;
};

type SimplifiedVessel = {
  mmsi?: number | string;
  name: string;
  lat?: number;
  lon?: number;
  sog?: number;
  cog?: number;
  heading?: number;
  navStatus?: number;
  timestamp?: string;
};

// Lee el snapshot local y lo devuelve con el mismo shape que la respuesta en vivo.
// `reason` explica por qué se cayó al respaldo (para diagnóstico en el header del mapa).
async function snapshotResponse(reason: string) {
  try {
    const raw = await readFile(SCENARIO_FILE, "utf8");
    const snapshot = JSON.parse(raw);
    const vessels: SimplifiedVessel[] = Array.isArray(snapshot.vessels) ? snapshot.vessels : [];
    return NextResponse.json({
      area: snapshot.area ?? "Tampico / Altamira",
      count: vessels.length,
      vessels,
      source: "snapshot",
      capturedAt: snapshot.capturedAt ?? null,
      fallbackReason: reason,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "No hay datos en vivo ni escenario de respaldo disponible.", detail: String(err) },
      { status: 502 }
    );
  }
}

export async function GET() {
  const apiKey = process.env.VESSELAPI_KEY;

  // Sin key no intentamos la llamada: vamos directo al escenario capturado.
  if (!apiKey) {
    return snapshotResponse("Falta VESSELAPI_KEY en el entorno del servidor.");
  }

  const params = new URLSearchParams({
    "filter.latBottom": String(TAMPICO_AREA.latBottom),
    "filter.latTop": String(TAMPICO_AREA.latTop),
    "filter.lonLeft": String(TAMPICO_AREA.lonLeft),
    "filter.lonRight": String(TAMPICO_AREA.lonRight),
  });

  try {
    const res = await fetch(`${VESSELAPI_BASE}?${params.toString()}`, {
      headers: { Authorization: `Bearer ${apiKey}` },
      cache: "no-store",
    });

    if (!res.ok) {
      const text = await res.text();
      return snapshotResponse(`VesselAPI respondió ${res.status}: ${text.slice(0, 120)}`);
    }

    const json = await res.json();
    const vessels: VesselApiRecord[] = Array.isArray(json.vessels) ? json.vessels : [];

    // VesselAPI devuelve varios registros por buque; nos quedamos con el más reciente por MMSI.
    const latestByMmsi = new Map<string, VesselApiRecord>();
    for (const v of vessels) {
      const key = String(v.mmsi);
      const current = latestByMmsi.get(key);
      const stamp = v.processed_timestamp ?? v.timestamp ?? "";
      const currentStamp = current?.processed_timestamp ?? current?.timestamp ?? "";
      if (!current || stamp > currentStamp) {
        latestByMmsi.set(key, v);
      }
    }

    const simplified = Array.from(latestByMmsi.values()).map((v) => ({
      mmsi: v.mmsi,
      name: v.vessel_name ?? "DESCONOCIDO",
      lat: v.latitude,
      lon: v.longitude,
      sog: v.sog,
      cog: v.cog,
      heading: v.heading,
      navStatus: v.nav_status,
      timestamp: v.timestamp,
    }));

    // Si la API respondió OK pero sin buques (cuota agotada, hueco de cobertura),
    // preferimos el escenario capturado antes que mostrar un mapa vacío en la demo.
    if (simplified.length === 0) {
      return snapshotResponse("VesselAPI no devolvió buques.");
    }

    return NextResponse.json({
      area: "Tampico / Altamira",
      count: simplified.length,
      vessels: simplified,
      source: "live",
    });
  } catch (err) {
    return snapshotResponse(`No se pudo consultar VesselAPI: ${String(err)}`);
  }
}

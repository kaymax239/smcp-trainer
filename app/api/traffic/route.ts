import { NextResponse } from "next/server";

// Área de Tampico / Altamira (puerto, fondeadero exterior y aproximaciones)
const TAMPICO_AREA = {
  latBottom: 22.0,
  latTop: 22.7,
  lonLeft: -97.9,
  lonRight: -97.3,
};

const VESSELAPI_BASE = "https://api.vesselapi.com/v1/location/vessels/bounding-box";

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

export async function GET() {
  const apiKey = process.env.VESSELAPI_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Falta VESSELAPI_KEY en el entorno del servidor." },
      { status: 500 }
    );
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
      return NextResponse.json(
        { error: `VesselAPI respondió ${res.status}`, detail: text.slice(0, 300) },
        { status: res.status }
      );
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

    return NextResponse.json({
      area: "Tampico / Altamira",
      count: simplified.length,
      vessels: simplified,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "No se pudo consultar VesselAPI", detail: String(err) },
      { status: 502 }
    );
  }
}

// Captura UNA sola foto del tráfico AIS de Tampico/Altamira y la guarda como
// escenario reutilizable, para alimentar tareas sin gastar cuota de VesselAPI.
//
// Uso: node scripts/capture-scenario.mjs

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const BOUNDING_BOX = {
  latBottom: 22.0,
  latTop: 22.7,
  lonLeft: -97.9,
  lonRight: -97.3,
};

const VESSELAPI_BASE =
  "https://api.vesselapi.com/v1/location/vessels/bounding-box";

const OUTPUT_PATH = join(ROOT, "data", "scenarios", "tampico-watch-01.json");

// Lee una variable de .env.local tolerando BOM y CRLF. Devuelve solo el valor
// tras el primer '=', sin espacios ni '\r' finales.
async function readEnvValue(name) {
  const raw = await readFile(join(ROOT, ".env.local"), "utf8");
  const text = raw.replace(/^﻿/, ""); // quita BOM si existe
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    if (key === name) {
      return trimmed
        .slice(eq + 1)
        .trim()
        .replace(/\r$/, "");
    }
  }
  return undefined;
}

async function main() {
  const apiKey = await readEnvValue("VESSELAPI_KEY");
  if (!apiKey) {
    console.error("Falta VESSELAPI_KEY en .env.local");
    process.exit(1);
  }

  const params = new URLSearchParams({
    "filter.latBottom": String(BOUNDING_BOX.latBottom),
    "filter.latTop": String(BOUNDING_BOX.latTop),
    "filter.lonLeft": String(BOUNDING_BOX.lonLeft),
    "filter.lonRight": String(BOUNDING_BOX.lonRight),
  });

  const res = await fetch(`${VESSELAPI_BASE}?${params.toString()}`, {
    headers: { Authorization: `Bearer ${apiKey}` },
  });

  if (!res.ok) {
    const body = await res.text();
    console.error(`VesselAPI respondió ${res.status}`);
    console.error(body.slice(0, 400));
    process.exit(1);
  }

  const json = await res.json();
  const records = Array.isArray(json.vessels) ? json.vessels : [];

  // Deduplica por MMSI quedándose con el registro más reciente (misma lógica
  // que el route handler en app/api/traffic).
  const latestByMmsi = new Map();
  for (const v of records) {
    const key = String(v.mmsi);
    const current = latestByMmsi.get(key);
    const stamp = v.processed_timestamp ?? v.timestamp ?? "";
    const currentStamp =
      current?.processed_timestamp ?? current?.timestamp ?? "";
    if (!current || stamp > currentStamp) {
      latestByMmsi.set(key, v);
    }
  }

  const vessels = Array.from(latestByMmsi.values()).map((v) => ({
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

  const scenario = {
    capturedAt: new Date().toISOString(),
    area: "Tampico / Altamira",
    boundingBox: BOUNDING_BOX,
    vessels,
  };

  await mkdir(dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(OUTPUT_PATH, JSON.stringify(scenario, null, 2) + "\n", "utf8");

  console.log(`Buques capturados: ${vessels.length}`);
  console.log(`Archivo: ${OUTPUT_PATH}`);
}

main().catch((err) => {
  console.error("Error capturando escenario:", err);
  process.exit(1);
});

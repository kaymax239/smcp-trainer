import TrafficMapLoader from "./TrafficMapLoader";

export const metadata = {
  title: "Tráfico en vivo — Tampico / Altamira",
};

export default function TrafficPage() {
  return (
    <main style={{ height: "100dvh", width: "100%" }}>
      <TrafficMapLoader />
    </main>
  );
}

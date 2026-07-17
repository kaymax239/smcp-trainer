import VHFRadioSimulator from "./VHFRadioSimulator";

export const metadata = {
  title: "VHF Radio Simulator — SMCP Trainer",
};

export default function VhfPage() {
  return (
    <main className="academyShell">
      <VHFRadioSimulator />
    </main>
  );
}

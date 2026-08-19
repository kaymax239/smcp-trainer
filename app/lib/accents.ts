// ============================================================
// SMCP Trainer — Registro de acentos para la voz de la estación
// ------------------------------------------------------------
// Módulo COMPARTIDO (cliente + servidor). NO contiene secretos:
//   - La pestaña /voice-settings lo usa para pintar las tarjetas.
//   - /api/tts lo usa para construir el prompt de estilo de Gemini.
//
// El "acento" NO viene de la voz base de Gemini (voiceName), sino de
// styleInstruction: una indicación en lenguaje natural que se antepone
// al texto. Por eso podemos ofrecer Southern y Cajún, que ninguna voz
// de navegador (Web Speech API) trae.
// ============================================================

export interface Accent {
  /** id estable — se guarda en localStorage y viaja al API. */
  id: string;
  /** Bandera para la tarjeta. */
  flag: string;
  /** Nombre visible (en español, como el resto de la UI del dashboard). */
  label: string;
  /** Descripción corta para la tarjeta. */
  description: string;
  /**
   * Indicación de estilo que se antepone al texto en el prompt de Gemini
   * TTS. En inglés porque el modelo la sigue mejor y el audio es en inglés.
   */
  styleInstruction: string;
  /** Voz base prefabricada de Gemini (el timbre; el acento va en el prompt). */
  voiceName: string;
}

export const ACCENTS: Accent[] = [
  {
    id: "filipino",
    flag: "🇵🇭",
    label: "Filipino",
    description:
      "Inglés filipino claro — el acento más común en la marina mercante real.",
    styleInstruction:
      "Speak in clear Filipino English (Philippine accent), calm and steady like a merchant-navy radio operator on a VHF channel.",
    voiceName: "Charon",
  },
  {
    id: "australiano",
    flag: "🇦🇺",
    label: "Australiano",
    description: "Inglés australiano amplio, tono de operador de estación costera.",
    styleInstruction:
      "Speak in a natural broad Australian English accent, calm and clear like a coast radio station operator on a VHF channel.",
    voiceName: "Orus",
  },
  {
    id: "irlandes",
    flag: "🇮🇪",
    label: "Irlandés",
    description: "Inglés irlandés cálido, firme como un operador de guardacostas.",
    styleInstruction:
      "Speak in a warm Irish English accent, clear and steady like a coastguard radio operator on a VHF channel.",
    voiceName: "Iapetus",
  },
  {
    id: "southern-us",
    flag: "🇺🇸",
    label: "Americano sureño",
    description: "Inglés del sur de EE. UU. (drawl tejano / Deep South).",
    styleInstruction:
      "Speak in a Southern United States English accent, a gentle Texan / Deep South drawl, clear like a radio operator on a VHF channel.",
    voiceName: "Algenib",
  },
  {
    id: "cajun",
    flag: "⚜️",
    label: "Cajún",
    description: "Inglés cajún de Luisiana — el más exótico, calidad variable.",
    styleInstruction:
      "Speak in a Louisiana Cajun English accent, clear like a radio operator on a VHF channel.",
    voiceName: "Rasalgethi",
  },
];

/** Acento por defecto si el usuario nunca eligió (filipino, el más realista). */
export const DEFAULT_ACCENT_ID = "filipino";

export function getAccentById(id: string | null | undefined): Accent {
  return ACCENTS.find((a) => a.id === id) ?? ACCENTS[0];
}

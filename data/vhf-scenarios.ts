// ============================================================
// SMCP Trainer — VHF Radio Simulator: Scenario Definitions
// Fase 2 · Práctica de voz con radio VHF simulada
// ------------------------------------------------------------
// NOTA PARA INTEGRACIÓN (Claude Code):
// - Colocar junto a mission-tasks.ts (misma carpeta de data).
// - Los IDs siguen el patrón VHF-XXX para no chocar con
//   los códigos de asignaturas existentes.
// ============================================================

export type VhfScenarioCategory = 'routine' | 'urgency' | 'distress' | 'safety';

export interface VhfCriterion {
  id: string;
  label: string;          // Se muestra al estudiante en el feedback
  description: string;    // Lo que Gemini debe verificar
}

export interface VhfScenario {
  id: string;
  category: VhfScenarioCategory;
  title: string;
  channel: number;                 // Canal VHF correcto para el escenario
  semesterMin: number;             // Semestre mínimo recomendado (1-7)
  briefing: string;                // Situación presentada al cadete (en inglés)
  studentVessel: {
    name: string;
    callSign: string;
    position: string;
    persons: number;
  };
  coastStation: string;            // Estación que responderá (rol de la IA)
  expectedOpening: string;         // Referencia interna para Gemini (no mostrar)
  criteria: VhfCriterion[];        // Criterios de evaluación SMCP
  maxExchanges: number;            // Turnos de radio antes de evaluar
}

// ------------------------------------------------------------
// Criterios comunes reutilizables
// ------------------------------------------------------------
const COMMON_CRITERIA: Record<string, VhfCriterion> = {
  callProcedure: {
    id: 'call-procedure',
    label: 'Calling procedure',
    description:
      'Station called first (up to 3x), then "THIS IS" + own vessel name and call sign. No contracted forms.',
  },
  phoneticAlphabet: {
    id: 'phonetic-alphabet',
    label: 'NATO phonetic alphabet',
    description:
      'Call sign and any spelling given using the NATO phonetic alphabet (Alfa, Bravo, Charlie...).',
  },
  position: {
    id: 'position',
    label: 'Position report',
    description:
      'Position given clearly: latitude/longitude or true bearing and distance FROM a named landmark, per IMO SMCP.',
  },
  smcpStructure: {
    id: 'smcp-structure',
    label: 'SMCP phrase structure',
    description:
      'Uses standard SMCP message markers where appropriate (QUESTION, ANSWER, REQUEST, INFORMATION, INTENTION, WARNING, ADVICE, INSTRUCTION). Avoids synonyms and conversational filler.',
  },
  closing: {
    id: 'closing',
    label: 'Ending the exchange',
    description: 'Ends transmissions correctly with OVER, and the exchange with OUT.',
  },
};

// ------------------------------------------------------------
// Escenarios v1 — 4 escenarios (1 rutina + 3 emergencia)
// ------------------------------------------------------------
export const VHF_SCENARIOS: VhfScenario[] = [
  {
    id: 'VHF-001',
    category: 'routine',
    title: 'Radio check with Tampico Port Control',
    channel: 16,
    semesterMin: 1,
    briefing:
      'You are departing the Port of Tampico on a clear morning. Before leaving the breakwater, ' +
      'you must carry out a radio check with Tampico Port Control to confirm your VHF is working. ' +
      'Press the PTT button and make the call.',
    studentVessel: {
      name: 'MV Golfo Azul',
      callSign: 'XCGA7',
      position: 'Tampico inner harbour, approaching the breakwater',
      persons: 14,
    },
    coastStation: 'Tampico Port Control',
    expectedOpening:
      'Tampico Port Control, Tampico Port Control, this is Motor Vessel Golfo Azul, ' +
      'call sign X-ray Charlie Golf Alfa Seven. Radio check. Over.',
    criteria: [
      COMMON_CRITERIA.callProcedure,
      COMMON_CRITERIA.phoneticAlphabet,
      {
        id: 'radio-check-request',
        label: 'Radio check request',
        description: 'Explicitly requests a radio check and acknowledges the readability report (e.g. "read you loud and clear").',
      },
      COMMON_CRITERIA.closing,
    ],
    maxExchanges: 3,
  },
  {
    id: 'VHF-002',
    category: 'distress',
    title: 'MAYDAY — Fire on board',
    channel: 16,
    semesterMin: 3,
    briefing:
      'A fire has broken out in the engine room of your vessel and is out of control. ' +
      'You are 12 nautical miles east of Tampico sea buoy. The crew is preparing to abandon ship. ' +
      'Transmit a MAYDAY distress call and message on channel 16.',
    studentVessel: {
      name: 'MV Golfo Azul',
      callSign: 'XCGA7',
      position: '12 nautical miles east of Tampico sea buoy (approx. 22°15\u2032N 097°35\u2032W)',
      persons: 14,
    },
    coastStation: 'Tampico Radio (coast station)',
    expectedOpening:
      'MAYDAY MAYDAY MAYDAY. This is Golfo Azul, Golfo Azul, Golfo Azul, call sign X-ray Charlie Golf Alfa Seven. ' +
      'MAYDAY, Golfo Azul. Position one two miles east of Tampico sea buoy. Fire in engine room, out of control. ' +
      'One four persons on board. Abandoning ship. Require immediate assistance. Over.',
    criteria: [
      {
        id: 'distress-format',
        label: 'MAYDAY format',
        description:
          'MAYDAY spoken three times, vessel name three times, then MAYDAY + name once before the message.',
      },
      COMMON_CRITERIA.position,
      {
        id: 'nature-of-distress',
        label: 'Nature of distress',
        description: 'States the nature of distress (fire), persons on board, and assistance required.',
      },
      COMMON_CRITERIA.smcpStructure,
      COMMON_CRITERIA.closing,
    ],
    maxExchanges: 4,
  },
  {
    id: 'VHF-003',
    category: 'urgency',
    title: 'PAN-PAN — Medical emergency',
    channel: 16,
    semesterMin: 3,
    briefing:
      'A crew member has fallen from a ladder and has a suspected broken leg with heavy bleeding. ' +
      'The vessel is not in danger. You are 8 nautical miles north of Altamira. ' +
      'Transmit a PAN-PAN urgency call requesting medical advice / evacuation.',
    studentVessel: {
      name: 'MV Costa Esmeralda',
      callSign: 'XCCE4',
      position: '8 nautical miles north of Altamira breakwater',
      persons: 18,
    },
    coastStation: 'Tampico Radio (coast station)',
    expectedOpening:
      'PAN-PAN PAN-PAN PAN-PAN. All stations, all stations, all stations. This is Costa Esmeralda, ' +
      'call sign X-ray Charlie Charlie Echo Four. Position eight miles north of Altamira breakwater. ' +
      'I require medical assistance: crew member injured, suspected broken leg, heavy bleeding. Over.',
    criteria: [
      {
        id: 'urgency-format',
        label: 'PAN-PAN format',
        description: 'PAN-PAN spoken three times, correct addressing (all stations or coast station), identification.',
      },
      COMMON_CRITERIA.position,
      {
        id: 'medical-info',
        label: 'Medical information',
        description: 'Describes the injury clearly and states the assistance required (medical advice or evacuation).',
      },
      COMMON_CRITERIA.smcpStructure,
      COMMON_CRITERIA.closing,
    ],
    maxExchanges: 4,
  },
  {
    id: 'VHF-004',
    category: 'safety',
    title: 'S\u00c9CURIT\u00c9 — Drifting container',
    channel: 16,
    semesterMin: 5,
    briefing:
      'While on watch, you sight a partially submerged container drifting in the traffic lane, ' +
      '5 nautical miles south-east of Tampico sea buoy. It is a danger to navigation. ' +
      'Broadcast a S\u00c9CURIT\u00c9 safety message to all stations.',
    studentVessel: {
      name: 'MV Sierra Madre',
      callSign: 'XCSM9',
      position: '5 nautical miles south-east of Tampico sea buoy',
      persons: 22,
    },
    coastStation: 'All stations (Tampico Radio will acknowledge)',
    expectedOpening:
      'S\u00c9CURIT\u00c9 S\u00c9CURIT\u00c9 S\u00c9CURIT\u00c9. All stations, all stations, all stations. This is Sierra Madre, ' +
      'call sign X-ray Charlie Sierra Mike Niner. Navigational warning: partially submerged container adrift, ' +
      'position five miles south-east of Tampico sea buoy. Danger to navigation. Vessels are advised to keep sharp lookout. Out.',
    criteria: [
      {
        id: 'safety-format',
        label: 'S\u00c9CURIT\u00c9 format',
        description: 'S\u00c9CURIT\u00c9 spoken three times, addressed to all stations, identification given.',
      },
      COMMON_CRITERIA.position,
      {
        id: 'warning-content',
        label: 'WARNING message',
        description: 'Uses the WARNING message marker style: states the hazard and advice to other vessels.',
      },
      COMMON_CRITERIA.smcpStructure,
      COMMON_CRITERIA.closing,
    ],
    maxExchanges: 2,
  },
];

export function getScenarioById(id: string): VhfScenario | undefined {
  return VHF_SCENARIOS.find((s) => s.id === id);
}

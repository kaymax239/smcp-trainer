'use client';

// ============================================================
// SMCP Trainer — VHF Radio Simulator (componente principal)
// Ruta sugerida: components/vhf/VHFRadioSimulator.tsx
// ------------------------------------------------------------
// Fase 2 · Opción A: Web Speech API (gratis, sin claves nuevas)
//   - SpeechRecognition  -> voz del cadete a texto
//   - fetch /api/vhf     -> Gemini responde como estación costera
//   - SpeechSynthesis    -> la respuesta se "escucha" por la radio
//
// NOTA PARA INTEGRACIÓN (Claude Code):
// - Requiere Tailwind (clases estándar). Ajustar paleta a la del
//   proyecto si difiere (se usó slate/amber/red genéricos).
// - Ajustar el import de vhf-scenarios a la ruta real del repo.
// - Web Speech API funciona en Chrome/Edge. En navegadores sin
//   soporte se muestra un aviso y un textarea de respaldo.
// ============================================================

import { useCallback, useEffect, useRef, useState } from 'react';
import { useSession } from 'next-auth/react';
import { VHF_SCENARIOS, VhfScenario } from '@/data/vhf-scenarios'; // Ajustar ruta

/* Rol por dominio del email de sesión (mismo patrón validado que
   engine-room/EngineRoomSim.tsx). Split estricto por "@" — un
   endsWith clasificaría MAL "es.fidena.edu.mx". Default restrictivo:
   sin email legible = no docente. Se usa SOLO para mostrar el panel
   de diagnóstico del micrófono a docentes (no a alumnos). */
function isDocente(email: string | null | undefined): boolean {
  if (!email) return false;
  const parts = email.toLowerCase().split('@');
  if (parts.length !== 2) return false;
  return parts[1] === 'fidena.edu.mx';
}

// Marcador que se muestra/envía cuando el micro captó sonido pero el
// reconocedor no produjo texto legible. Así el alumno SIEMPRE ve algo
// en la ventana ("incluyendo si no se entiende") y la estación puede
// pedir "say again".
const UNINTELLIGIBLE = '(unintelligible — say again)';

// ---- Tipos mínimos para Web Speech API (evita errores de TS) ----
interface SpeechRecognitionLike {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  start: () => void;
  stop: () => void;
  onresult: ((event: any) => void) | null;
  onerror: ((event: any) => void) | null;
  onend: (() => void) | null;
}

interface RadioExchange {
  speaker: 'student' | 'coast';
  text: string;
}

interface Evaluation {
  passed: boolean;
  criteria: { id: string; label: string; met: boolean; feedback: string }[];
  overallFeedback: string;
}

type SimStatus = 'idle' | 'listening' | 'processing' | 'coast-speaking' | 'evaluated';

function getRecognition(): SpeechRecognitionLike | null {
  if (typeof window === 'undefined') return null;
  const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  if (!SR) return null;
  const rec: SpeechRecognitionLike = new SR();
  rec.lang = 'en-US';
  rec.continuous = true;      // El cadete mantiene presionado el PTT
  rec.interimResults = true;
  return rec;
}

function speakAsCoastStation(text: string, onEnd: () => void) {
  const synth = window.speechSynthesis;
  synth.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'en-US';
  utter.rate = 0.92;   // Ligeramente pausado, como procedimiento de radio
  utter.pitch = 0.9;
  // Preferir una voz en inglés si está disponible
  const voice =
    synth.getVoices().find((v) => v.lang.startsWith('en-GB')) ||
    synth.getVoices().find((v) => v.lang.startsWith('en-US'));
  if (voice) utter.voice = voice;
  utter.onend = onEnd;
  synth.speak(utter);
}

export default function VHFRadioSimulator() {
  const { data: session } = useSession();
  const showDiag = isDocente(session?.user?.email); // panel de micro solo a docentes
  const [scenario, setScenario] = useState<VhfScenario | null>(null);
  const [status, setStatus] = useState<SimStatus>('idle');
  const [exchanges, setExchanges] = useState<RadioExchange[]>([]);
  const [interim, setInterim] = useState('');
  const [evaluation, setEvaluation] = useState<Evaluation | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [speechSupported, setSpeechSupported] = useState(true);
  const [fallbackText, setFallbackText] = useState('');
  const [debug, setDebug] = useState<string[]>([]);

  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const finalTranscriptRef = useRef('');
  // Última hipótesis parcial (interim). Se guarda en ref para poder leerla
  // dentro del closure de onend sin depender del estado de React.
  const interimRef = useRef('');

  // Diagnóstico temporal: rastrea el ciclo de vida del micro para distinguir
  // "reconexión rota" de "dispositivo de entrada mudo". Quitar tras la prueba.
  const dbg = useCallback((m: string) => setDebug((d) => [...d.slice(-11), m]), []);

  useEffect(() => {
    setSpeechSupported(!!getRecognition());
  }, []);

  // ---------- PTT: mantener presionado para hablar ----------
  const startListening = useCallback(() => {
    if (!scenario || status === 'processing' || status === 'coast-speaking') return;
    setError(null);
    const rec = getRecognition();
    if (!rec) return;
    finalTranscriptRef.current = '';
    interimRef.current = '';
    setInterim('');
    setDebug([]);
    const r = rec as any;
    r.onstart = () => dbg('recognition start');
    r.onaudiostart = () => dbg('audio captured (mic open)');
    r.onsoundstart = () => dbg('sound detected');
    r.onspeechstart = () => dbg('SPEECH detected ✓');
    r.onspeechend = () => dbg('speech end');
    r.onnomatch = () => {
      dbg('no match (heard but not understood)');
      // Se oyó algo pero no se entendió: mostrar el marcador en vivo.
      interimRef.current = UNINTELLIGIBLE;
      setInterim(UNINTELLIGIBLE);
    };
    rec.onresult = (event: any) => {
      dbg('result received');
      let interimText = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const chunk = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscriptRef.current += chunk + ' ';
        else interimText += chunk;
      }
      // La ventana "teclea" en vivo: mostramos lo definitivo acumulado + lo parcial.
      const liveText = (finalTranscriptRef.current + interimText).trim();
      interimRef.current = liveText;
      setInterim(liveText);
    };
    rec.onerror = (e: any) => {
      // Antes solo se reportaba 'not-allowed' y el resto de fallos quedaban
      // mudos (el clásico "no pasa nada al hablar"). Mapear cada código para
      // que el cadete vea el motivo real — típico con audífonos sin micro.
      const code = e?.error as string | undefined;
      dbg(`ERROR: ${code ?? 'unknown'}`);
      // 'aborted' / 'no-speech' NO son errores duros: el alumno soltó el PTT
      // o hizo una pausa. Dejamos que onend decida con el texto capturado en
      // vez de tirar un error rojo y borrar el flujo.
      if (code === 'aborted' || code === 'no-speech') return;
      const messages: Record<string, string> = {
        'not-allowed': 'Microphone permission denied. Please allow microphone access.',
        'service-not-allowed': 'Microphone permission denied. Please allow microphone access.',
        'audio-capture':
          'No microphone detected. If you are on headphones without a mic, switch the input device (Chrome ⋮ → site settings) or unplug them.',
        network:
          'Speech service unreachable. Voice recognition needs an internet connection — check your network.',
      };
      setError(messages[code ?? ''] ?? `Voice recognition error${code ? ` (${code})` : ''}. Try again.`);
      setStatus('idle');
    };
    recognitionRef.current = rec;
    try {
      rec.start();
      setStatus('listening');
    } catch (err: any) {
      dbg(`start() threw: ${err?.message ?? err}`);
      setError('Could not start voice recognition. Release and press PTT again.');
      setStatus('idle');
    }
  }, [scenario, status]);

  const stopListeningAndSend = useCallback(() => {
    const rec = recognitionRef.current;
    if (!rec) return;
    rec.onend = () => {
      // Prioridad: texto definitivo. Si el alumno soltó el PTT antes de que el
      // reconocedor "finalizara" (el caso "no sale nada"), caemos a la última
      // hipótesis parcial para no perder lo dicho. Si tampoco hay nada legible,
      // enviamos el marcador para que igual quede registrado en la ventana.
      const finalT = finalTranscriptRef.current.trim();
      const partialT = interimRef.current.trim();
      const transcript = finalT || partialT || UNINTELLIGIBLE;
      setInterim('');
      void sendTransmission(transcript, false);
    };
    rec.stop();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ---------- Envío al API y respuesta de la estación ----------
  async function sendTransmission(transcript: string, finalize: boolean) {
    if (!scenario) return;
    setStatus('processing');
    const newExchanges: RadioExchange[] = transcript
      ? [...exchanges, { speaker: 'student', text: transcript }]
      : exchanges;
    setExchanges(newExchanges);

    try {
      const res = await fetch('/api/vhf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scenarioId: scenario.id,
          transcript,
          history: exchanges,
          finalize,
        }),
      });
      if (!res.ok) throw new Error(`API ${res.status}`);
      const data = await res.json();

      if (data.evaluation) {
        setEvaluation(data.evaluation);
        setStatus('evaluated');
        return;
      }

      if (data.coastReply) {
        setExchanges((prev) => [...prev, { speaker: 'coast', text: data.coastReply }]);
        setStatus('coast-speaking');
        speakAsCoastStation(data.coastReply, () => setStatus('idle'));
      } else {
        setStatus('idle');
      }
    } catch (e) {
      console.error(e);
      setError('Radio link failed. Please try again.');
      setStatus('idle');
    }
  }

  function selectScenario(s: VhfScenario) {
    window.speechSynthesis?.cancel();
    setScenario(s);
    setExchanges([]);
    setEvaluation(null);
    setError(null);
    setStatus('idle');
  }

  function resetAll() {
    window.speechSynthesis?.cancel();
    setScenario(null);
    setExchanges([]);
    setEvaluation(null);
    setError(null);
    setStatus('idle');
  }

  // ============================================================
  // Render
  // ============================================================
  if (!scenario) {
    return (
      <div className="mx-auto max-w-3xl p-6">
        <h1 className="mb-1 text-2xl font-bold text-[var(--mist)]">VHF Radio Simulator</h1>
        <p className="mb-6 text-sm text-[var(--muted)]">
          Choose a scenario, press and hold the PTT button, and speak your transmission in English.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {VHF_SCENARIOS.map((s) => (
            <button
              key={s.id}
              onClick={() => selectScenario(s)}
              className="rounded-xl border border-[var(--line)] bg-[var(--panel)] p-4 text-left text-[var(--mist)] shadow-sm transition hover:border-[var(--signal)] hover:shadow"
            >
              <span
                className={
                  'mb-2 inline-block rounded-full px-2 py-0.5 text-xs font-semibold uppercase tracking-wide ' +
                  (s.category === 'distress'
                    ? 'bg-red-100 text-red-700'
                    : s.category === 'urgency'
                    ? 'bg-amber-100 text-amber-700'
                    : s.category === 'safety'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-slate-100 text-slate-600')
                }
              >
                {s.category}
              </span>
              <h2 className="font-semibold">{s.title}</h2>
              <p className="mt-1 text-xs text-[var(--muted)]">
                CH {s.channel} · Semester {s.semesterMin}+
              </p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl p-6">
      {/* Encabezado del escenario */}
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-[var(--mist)]">{scenario.title}</h1>
          <p className="text-sm text-[var(--muted)]">
            {scenario.studentVessel.name} · Call sign {scenario.studentVessel.callSign} · Channel {scenario.channel}
          </p>
        </div>
        <button onClick={resetAll} className="text-sm text-[var(--muted)] underline hover:text-[var(--mist)]">
          Change scenario
        </button>
      </div>

      {/* Briefing */}
      <div className="mb-4 rounded-lg border border-[var(--line)] bg-[var(--panel)] p-4 text-sm leading-relaxed text-[var(--steel)]">
        {scenario.briefing}
      </div>

      {!speechSupported && (
        <p className="mb-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
          Your browser does not support voice input. Please use Chrome or Edge — or type your transmission below.
        </p>
      )}
      {error && <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}

      {/* Panel de diagnóstico del micrófono — visible SOLO a docentes.
          Permite seguir validando la voz en producción sin exponerlo a alumnos. */}
      {showDiag && debug.length > 0 && (
        <div className="mb-4 rounded-lg border border-[var(--line)] bg-[var(--midnight)] p-3 font-mono text-xs text-[var(--muted)]">
          <p className="mb-1 font-bold text-[var(--signal)]">MIC DIAGNOSTIC</p>
          {debug.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      )}

      {/* Registro de radio */}
      <div className="mb-4 min-h-[10rem] space-y-2 rounded-lg border border-[var(--line)] bg-[var(--ink)] p-4 font-mono text-sm">
        {exchanges.length === 0 && status !== 'listening' && (
          <p className="text-slate-500">— Channel {scenario.channel} open. Awaiting your transmission —</p>
        )}
        {exchanges.map((e, i) => (
          <p key={i} className={e.speaker === 'student' ? 'text-emerald-300' : 'text-sky-300'}>
            <span className="mr-2 font-bold">{e.speaker === 'student' ? 'YOU:' : 'STN:'}</span>
            {e.text}
          </p>
        ))}
        {/* Transcripción EN VIVO: la ventana teclea lo que se va oyendo,
            incluso una hipótesis parcial o "(unintelligible)". */}
        {status === 'listening' && (
          <p className="italic text-emerald-200/70">
            <span className="mr-2 font-bold not-italic text-emerald-300">YOU:</span>
            {interim || 'listening…'}
            <span className="ml-0.5 animate-pulse">▋</span>
          </p>
        )}
        {status === 'processing' && <p className="animate-pulse text-slate-400">▮▮ transmitting…</p>}
        {status === 'coast-speaking' && <p className="animate-pulse text-sky-400">📻 incoming transmission…</p>}
      </div>

      {/* Controles */}
      {!evaluation && (
        <div className="flex flex-col items-center gap-3">
          {speechSupported ? (
            <button
              // PTT robusto: pointer events + captura del puntero. Con un botón
              // redondo, onMouseLeave disparaba stop() en cuanto el cursor salía
              // del círculo (movimiento mínimo al mantener) → 'aborted' antes de
              // captar audio. setPointerCapture mantiene el pointerup en este
              // elemento aunque el cursor se salga; así el hold no se corta.
              onPointerDown={(e) => {
                e.preventDefault();
                (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
                startListening();
              }}
              onPointerUp={(e) => {
                (e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
                stopListeningAndSend();
              }}
              disabled={status === 'processing' || status === 'coast-speaking'}
              className={
                'h-28 w-28 touch-none select-none rounded-full text-sm font-bold uppercase tracking-wider text-white shadow-lg transition ' +
                (status === 'listening'
                  ? 'scale-110 bg-red-600 ring-4 ring-red-300'
                  : 'bg-slate-700 hover:bg-slate-600 disabled:opacity-40')
              }
            >
              {status === 'listening' ? 'ON AIR' : 'PTT — hold to talk'}
            </button>
          ) : (
            <div className="w-full">
              <textarea
                value={fallbackText}
                onChange={(e) => setFallbackText(e.target.value)}
                rows={3}
                className="w-full rounded-lg border border-[var(--line)] bg-[var(--ink)] p-3 text-sm text-[var(--mist)] placeholder:text-[var(--muted)]"
                placeholder="Type your transmission…"
              />
              <button
                onClick={() => {
                  if (fallbackText.trim()) {
                    void sendTransmission(fallbackText.trim(), false);
                    setFallbackText('');
                  }
                }}
                className="mt-2 rounded-lg bg-slate-700 px-4 py-2 text-sm font-semibold text-white"
              >
                Transmit
              </button>
            </div>
          )}

          {exchanges.some((e) => e.speaker === 'student') && (
            <button
              onClick={() => void sendTransmission('', true)}
              disabled={status === 'processing' || status === 'coast-speaking'}
              className="rounded-lg border border-amber-500 px-4 py-2 text-sm font-semibold text-amber-600 hover:bg-amber-50 disabled:opacity-40"
            >
              End exchange &amp; get instructor feedback
            </button>
          )}
        </div>
      )}

      {/* Evaluación */}
      {evaluation && (
        <div className="rounded-xl border border-[var(--line)] bg-[var(--panel)] p-5 shadow-sm">
          <p
            className={
              'mb-3 inline-block rounded-full px-3 py-1 text-sm font-bold ' +
              (evaluation.passed ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700')
            }
          >
            {evaluation.passed ? 'PASSED' : 'NOT PASSED'}
          </p>
          <ul className="mb-4 space-y-2">
            {evaluation.criteria.map((c) => (
              <li key={c.id} className="flex gap-2 text-sm">
                <span>{c.met ? '✅' : '❌'}</span>
                <span>
                  <span className="font-semibold">{c.label}: </span>
                  {c.feedback}
                </span>
              </li>
            ))}
          </ul>
          <p className="border-t border-[var(--line)] pt-3 text-sm italic text-[var(--muted)]">{evaluation.overallFeedback}</p>
          <div className="mt-4 flex gap-3">
            <button
              onClick={() => selectScenario(scenario)}
              className="rounded-lg bg-slate-700 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-600"
            >
              Try again
            </button>
            <button
              onClick={resetAll}
              className="rounded-lg border border-[var(--line)] px-4 py-2 text-sm font-semibold text-[var(--mist)] hover:bg-[var(--panel-strong)]"
            >
              Other scenarios
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

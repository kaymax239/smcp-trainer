"use client";

import React, { useMemo, useState } from "react";
import { AlertCircle, CheckCircle2, Edit2, Loader2, RefreshCw, Save } from "lucide-react";
import { academicSubjects } from "@/data/academic/subjects";
import {
  academicPrograms,
  academicSemesters,
  type AcademicProgramCode,
} from "@/data/academic/semesters";
import type { AcademicMissionTask } from "@/data/academic/mission-tasks";
import {
  DIFFICULTIES,
  DIFFICULTY_PRESETS,
  GENERATION_DISABLED_MESSAGE,
  IS_GENERATION_ENABLED,
  MARITIME_CONTEXTS,
  MAX_WEEK,
  MIN_WEEK,
  type Difficulty,
} from "@/data/academic/generation-options";

/** Punto de partida del formulario: primera carrera, su primer semestre y materia. */
const INITIAL_CAREER: AcademicProgramCode = academicPrograms[0].code;
const INITIAL_SEMESTER = academicSemesters.find((s) => s.program === INITIAL_CAREER)!;
const INITIAL_SUBJECT = academicSubjects.find((s) => s.semesterId === INITIAL_SEMESTER.id)!;

/** Une un array en textarea y lo vuelve a partir: una línea = un elemento. */
const linesToArray = (value: string) =>
  value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

export default function GenerateTasksPage() {
  const [formData, setFormData] = useState({
    career: INITIAL_CAREER,
    semesterId: INITIAL_SEMESTER.id,
    subjectId: INITIAL_SUBJECT.id,
    unit: INITIAL_SUBJECT.units[0] ?? "",
    topic: INITIAL_SUBJECT.topics[0] ?? "",
    week: "1",
    difficulty: "Standard" as Difficulty,
    maritimeContext: MARITIME_CONTEXTS[0] as string,
    cadetAction: "",
  });

  const [generatedTask, setGeneratedTask] = useState<AcademicMissionTask | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Cascada: la carrera filtra los semestres, y el semestre filtra las materias.
  const semestersForCareer = useMemo(
    () => academicSemesters.filter((s) => s.program === formData.career),
    [formData.career],
  );

  const subjectsForSemester = useMemo(
    () => academicSubjects.filter((s) => s.semesterId === formData.semesterId),
    [formData.semesterId],
  );

  const selectedSubject = useMemo(
    () => academicSubjects.find((s) => s.id === formData.subjectId) ?? INITIAL_SUBJECT,
    [formData.subjectId],
  );

  // Cada cambio arrastra los niveles inferiores: sin esto quedaría, por ejemplo,
  // una materia de PN seleccionada con la carrera MN.
  const handleCareerChange = (career: AcademicProgramCode) => {
    const semester = academicSemesters.find((s) => s.program === career);
    if (!semester) return;
    const subject = academicSubjects.find((s) => s.semesterId === semester.id);
    if (!subject) return;
    setFormData((prev) => ({
      ...prev,
      career,
      semesterId: semester.id,
      subjectId: subject.id,
      unit: subject.units[0] ?? "",
      topic: subject.topics[0] ?? "",
    }));
  };

  const handleSemesterChange = (semesterId: string) => {
    const subject = academicSubjects.find((s) => s.semesterId === semesterId);
    if (!subject) return;
    setFormData((prev) => ({
      ...prev,
      semesterId,
      subjectId: subject.id,
      unit: subject.units[0] ?? "",
      topic: subject.topics[0] ?? "",
    }));
  };

  const handleSubjectChange = (subjectId: string) => {
    const subject = academicSubjects.find((s) => s.id === subjectId);
    if (!subject) return;
    setFormData((prev) => ({
      ...prev,
      subjectId,
      unit: subject.units[0] ?? "",
      topic: subject.topics[0] ?? "",
    }));
  };

  const generateTask = async () => {
    if (formData.cadetAction.trim().length < 10) {
      setError("Describe la acción del cadete (mínimo 10 caracteres).");
      return;
    }

    setLoading(true);
    setError("");
    setNotice("");

    try {
      // Solo campos estructurados: el prompt lo construye el servidor.
      const response = await fetch("/api/generate-task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subjectId: formData.subjectId,
          unit: formData.unit,
          topic: formData.topic,
          week: Number(formData.week),
          difficulty: formData.difficulty,
          maritimeContext: formData.maritimeContext,
          cadetAction: formData.cadetAction,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data?.error ?? "No se pudo generar la tarea.");

      setGeneratedTask(data.task as AcademicMissionTask);
      setIsEditing(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido al generar.");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!generatedTask) return;

    setSaving(true);
    setError("");
    setNotice("");

    try {
      const response = await fetch("/api/save-task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: generatedTask }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data?.error ?? "No se pudo guardar la tarea.");

      setNotice(`Tarea guardada como "${data.taskId}". Total generadas: ${data.total}.`);
      setGeneratedTask(null);
      setFormData((prev) => ({ ...prev, cadetAction: "" }));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al guardar.");
    } finally {
      setSaving(false);
    }
  };

  const updateTaskField = <K extends keyof AcademicMissionTask>(
    field: K,
    value: AcademicMissionTask[K],
  ) => {
    setGeneratedTask((prev) => (prev ? { ...prev, [field]: value } : prev));
  };

  // En producción no se muestra el formulario: guardar escribiría en disco y el
  // FS de Vercel es de solo lectura. Se explica el flujo en vez de dejar que el
  // profesor genere una tarea que después no puede guardar.
  if (!IS_GENERATION_ENABLED) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-2">⚡ Generar tareas con IA</h1>
          <p className="text-blue-200 mb-8">Panel de administración</p>

          <div className="bg-slate-800 rounded-lg border border-amber-500 p-6">
            <div className="flex items-start gap-3 mb-4">
              <AlertCircle className="text-amber-400 flex-shrink-0 mt-1" size={24} />
              <h2 className="text-2xl font-bold text-white">La generación se hace en local</h2>
            </div>

            <p className="text-slate-300 mb-6">{GENERATION_DISABLED_MESSAGE}</p>

            <div className="bg-slate-900 rounded border border-slate-700 p-4 mb-6">
              <p className="text-blue-300 font-semibold text-sm mb-3">Flujo para publicar tareas</p>
              <ol className="text-slate-300 text-sm space-y-2 list-decimal list-inside">
                <li>
                  Arranca el proyecto en local con <code className="text-cyan-400">npm run dev</code>.
                </li>
                <li>
                  Genera y guarda la tarea desde{" "}
                  <code className="text-cyan-400">/admin/generate-tasks</code>.
                </li>
                <li>
                  Haz commit de{" "}
                  <code className="text-cyan-400">data/academic/generated-tasks.json</code>.
                </li>
                <li>
                  <code className="text-cyan-400">git push</code> a <strong>main</strong>: Vercel
                  despliega solo desde esa rama.
                </li>
              </ol>
            </div>

            <a
              href="/generated-tasks"
              className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-3 px-6 rounded-lg"
            >
              Ver tareas publicadas
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">⚡ Generar tareas con IA</h1>
          <p className="text-blue-200">
            Crea tareas marítimas operativas con Claude, revísalas y guárdalas en el catálogo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ---------------- Formulario ---------------- */}
          <div className="bg-slate-800 rounded-lg border border-blue-500 p-6">
            <h2 className="text-2xl font-bold text-white mb-6">📝 Formulario</h2>

            {error && (
              <div className="mb-4 p-4 bg-red-900/20 border border-red-500 rounded-lg flex items-start gap-3">
                <AlertCircle className="text-red-400 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-red-200">{error}</p>
              </div>
            )}

            {notice && (
              <div className="mb-4 p-4 bg-green-900/20 border border-green-500 rounded-lg flex items-start gap-3">
                <CheckCircle2 className="text-green-400 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-green-200">{notice}</p>
              </div>
            )}

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-blue-300 font-semibold mb-2">🎖️ Carrera</label>
                  <select
                    value={formData.career}
                    onChange={(e) => handleCareerChange(e.target.value as AcademicProgramCode)}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:outline-none"
                    disabled={loading}
                  >
                    {academicPrograms.map((p) => (
                      <option key={p.code} value={p.code}>
                        {p.code} — {p.code === "PN" ? "Pilotín Naval" : "Máquinas Navales"}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-blue-300 font-semibold mb-2">🗓️ Semestre</label>
                  <select
                    value={formData.semesterId}
                    onChange={(e) => handleSemesterChange(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:outline-none"
                    disabled={loading}
                  >
                    {semestersForCareer.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-blue-300 font-semibold mb-2">📚 Materia</label>
                <select
                  value={formData.subjectId}
                  onChange={(e) => handleSubjectChange(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:outline-none"
                  disabled={loading}
                >
                  {subjectsForSemester.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.officialArea}
                    </option>
                  ))}
                </select>
                <p className="text-slate-400 text-sm mt-1">{selectedSubject.stcwAlignment}</p>
              </div>

              <div>
                <label className="block text-blue-300 font-semibold mb-2">📂 Unidad</label>
                <select
                  value={formData.unit}
                  onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:outline-none"
                  disabled={loading}
                >
                  {selectedSubject.units.map((u) => (
                    <option key={u} value={u}>
                      {u}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-blue-300 font-semibold mb-2">🎓 Tema</label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:outline-none"
                  disabled={loading}
                >
                  {selectedSubject.topics.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-blue-300 font-semibold mb-2">📅 Semana</label>
                  <input
                    type="number"
                    min={MIN_WEEK}
                    max={MAX_WEEK}
                    value={formData.week}
                    onChange={(e) => setFormData({ ...formData, week: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:outline-none"
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="block text-blue-300 font-semibold mb-2">⭐ Dificultad</label>
                  <select
                    value={formData.difficulty}
                    onChange={(e) =>
                      setFormData({ ...formData, difficulty: e.target.value as Difficulty })
                    }
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:outline-none"
                    disabled={loading}
                  >
                    {DIFFICULTIES.map((d) => (
                      <option key={d} value={d}>
                        {d} ({DIFFICULTY_PRESETS[d].xp} XP · {DIFFICULTY_PRESETS[d].estimatedTime})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-blue-300 font-semibold mb-2">🚢 Contexto marítimo</label>
                <select
                  value={formData.maritimeContext}
                  onChange={(e) => setFormData({ ...formData, maritimeContext: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:outline-none"
                  disabled={loading}
                >
                  {MARITIME_CONTEXTS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-blue-300 font-semibold mb-2">🎯 Acción del cadete</label>
                <textarea
                  value={formData.cadetAction}
                  onChange={(e) => setFormData({ ...formData, cadetAction: e.target.value })}
                  placeholder="Ej: Verificar el equipo de navegación (ECDIS, radar) y reportar la posición al oficial de guardia..."
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:outline-none min-h-24 resize-none"
                  disabled={loading}
                />
                <p className="text-slate-400 text-sm mt-1">
                  Describe lo que el cadete debe hacer operativamente.
                </p>
              </div>

              <button
                onClick={generateTask}
                disabled={loading}
                className="w-full mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:from-slate-600 disabled:to-slate-600 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Generando...
                  </>
                ) : (
                  <>
                    <span>⚡</span>
                    Generar con IA
                  </>
                )}
              </button>
            </div>
          </div>

          {/* ---------------- Vista previa ---------------- */}
          <div className="bg-slate-800 rounded-lg border border-green-500 p-6 h-fit">
            <h2 className="text-2xl font-bold text-white mb-6">📋 Vista previa</h2>

            {!generatedTask ? (
              <div className="text-center py-12">
                <p className="text-slate-400">Genera una tarea para verla aquí.</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[32rem] overflow-y-auto pr-1">
                {isEditing ? (
                  <input
                    type="text"
                    value={generatedTask.taskTitle}
                    onChange={(e) => updateTaskField("taskTitle", e.target.value)}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white"
                  />
                ) : (
                  <p className="text-cyan-400 font-semibold text-lg">{generatedTask.taskTitle}</p>
                )}

                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {generatedTask.xp} XP
                  </span>
                  <span
                    className={`text-white px-3 py-1 rounded-full text-sm font-semibold ${
                      generatedTask.difficulty === "Foundation"
                        ? "bg-blue-600"
                        : generatedTask.difficulty === "Standard"
                          ? "bg-amber-600"
                          : "bg-red-600"
                    }`}
                  >
                    {generatedTask.difficulty}
                  </span>
                  <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm">
                    {generatedTask.estimatedTime}
                  </span>
                  <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm">
                    {generatedTask.career} · {generatedTask.semester} · Semana {generatedTask.week}
                  </span>
                </div>

                <p className="text-slate-400 text-xs font-mono break-all">{generatedTask.taskId}</p>

                <PreviewField label="Task Order">
                  {isEditing ? (
                    <textarea
                      value={generatedTask.scenario}
                      onChange={(e) => updateTaskField("scenario", e.target.value)}
                      className="w-full px-2 py-1 bg-slate-700 border border-slate-600 rounded text-white text-xs"
                      rows={4}
                    />
                  ) : (
                    <p className="text-slate-300 text-xs">{generatedTask.scenario}</p>
                  )}
                </PreviewField>

                <PreviewField label={`Cadet Action (${generatedTask.instructions.length})`}>
                  {isEditing ? (
                    <textarea
                      value={generatedTask.instructions.join("\n")}
                      onChange={(e) => updateTaskField("instructions", linesToArray(e.target.value))}
                      className="w-full px-2 py-1 bg-slate-700 border border-slate-600 rounded text-white text-xs"
                      rows={6}
                    />
                  ) : (
                    <ul className="text-slate-300 text-xs space-y-1 list-disc list-inside">
                      {generatedTask.instructions.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ul>
                  )}
                </PreviewField>

                <PreviewField label="Deliverable">
                  {isEditing ? (
                    <textarea
                      value={generatedTask.deliverable}
                      onChange={(e) => updateTaskField("deliverable", e.target.value)}
                      className="w-full px-2 py-1 bg-slate-700 border border-slate-600 rounded text-white text-xs"
                      rows={2}
                    />
                  ) : (
                    <p className="text-slate-300 text-xs">{generatedTask.deliverable}</p>
                  )}
                </PreviewField>

                <PreviewField
                  label={`Performance Check (${generatedTask.assessmentCriteria.length})`}
                >
                  {isEditing ? (
                    <textarea
                      value={generatedTask.assessmentCriteria.join("\n")}
                      onChange={(e) =>
                        updateTaskField("assessmentCriteria", linesToArray(e.target.value))
                      }
                      className="w-full px-2 py-1 bg-slate-700 border border-slate-600 rounded text-white text-xs"
                      rows={5}
                    />
                  ) : (
                    <ul className="text-slate-300 text-xs space-y-1 list-disc list-inside">
                      {generatedTask.assessmentCriteria.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  )}
                </PreviewField>

                <PreviewField label={`Vocabulary (${generatedTask.vocabulary?.length ?? 0})`}>
                  {isEditing ? (
                    <textarea
                      value={(generatedTask.vocabulary ?? []).join("\n")}
                      onChange={(e) => updateTaskField("vocabulary", linesToArray(e.target.value))}
                      className="w-full px-2 py-1 bg-slate-700 border border-slate-600 rounded text-white text-xs"
                      rows={5}
                    />
                  ) : (
                    <p className="text-slate-300 text-xs">
                      {(generatedTask.vocabulary ?? []).join(", ")}
                    </p>
                  )}
                </PreviewField>

                <PreviewField label={`SMCP Phrases (${generatedTask.smcpPhrases?.length ?? 0})`}>
                  {isEditing ? (
                    <textarea
                      value={(generatedTask.smcpPhrases ?? []).join("\n")}
                      onChange={(e) => updateTaskField("smcpPhrases", linesToArray(e.target.value))}
                      className="w-full px-2 py-1 bg-slate-700 border border-slate-600 rounded text-white text-xs"
                      rows={5}
                    />
                  ) : (
                    <ul className="text-slate-300 text-xs space-y-1">
                      {(generatedTask.smcpPhrases ?? []).map((phrase, i) => (
                        <li key={i} className="italic">
                          &ldquo;{phrase}&rdquo;
                        </li>
                      ))}
                    </ul>
                  )}
                </PreviewField>

                <div className="flex gap-2 mt-4 pt-4 border-t border-slate-700">
                  <button
                    onClick={() => setIsEditing((v) => !v)}
                    disabled={saving}
                    className="flex-1 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 text-white py-2 px-3 rounded flex items-center justify-center gap-2 text-sm font-semibold"
                  >
                    {isEditing ? (
                      <>
                        <CheckCircle2 size={16} /> Listo
                      </>
                    ) : (
                      <>
                        <Edit2 size={16} /> Editar
                      </>
                    )}
                  </button>
                  <button
                    onClick={generateTask}
                    disabled={loading || saving}
                    className="flex-1 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 text-white py-2 px-3 rounded flex items-center justify-center gap-2 text-sm font-semibold"
                  >
                    <RefreshCw size={16} className={loading ? "animate-spin" : ""} /> Regenerar
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="flex-1 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white py-2 px-3 rounded flex items-center justify-center gap-2 text-sm font-semibold"
                  >
                    {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
                    Guardar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function PreviewField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-blue-300 font-semibold text-sm mb-1">✓ {label}</p>
      {children}
    </div>
  );
}

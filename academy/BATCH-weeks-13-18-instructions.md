# BATCH 3: Weeks 13–18 — Complete the 18-week program

**Goal:** Add weeks 13, 14, 15, 16, 17, 18 (one task each = 6 new tasks per
subject) to every academic subject in the 8 odd-semester files, taking each
subject from 12 to the full **18 weeks** of the official FIDENA program.

**This is NOT an English course.** SMCP Trainer is a Digital Maritime Academy.
English is the operating language of the bridge / engine room, never a separate
subject. Follow `academy/task-standard-v2.md`. Every task makes the cadet *perform
an operational action*, reported in maritime English / SMCP.

Weeks 13–18 are the **final third of the semester**: they must be the most
**integrative, capstone-style** tasks. By week 12 most subjects have already used
all their program topics, so weeks 13–18 do NOT introduce invented topics — they
**combine and apply topics already covered** into higher-order operational
missions (full operations, emergency response, voyage planning, compliance audits,
end-of-semester integration). Difficulty is weighted to **Advanced**, and weeks
17–18 are the subject's capstones.

---

## Files to process (per-semester arrays)

```
data/academic/mission-tasks/pn-semester-i.ts     -> pnSemesterITasks
data/academic/mission-tasks/mn-semester-i.ts     -> mnSemesterITasks
data/academic/mission-tasks/pn-semester-iii.ts   -> pnSemesterIiiTasks
data/academic/mission-tasks/mn-semester-iii.ts   -> mnSemesterIiiTasks
data/academic/mission-tasks/pn-semester-v.ts     -> pnSemesterVTasks
data/academic/mission-tasks/mn-semester-v.ts     -> mnSemesterVTasks
data/academic/mission-tasks/pn-semester-vii.ts   -> pnSemesterViiTasks
data/academic/mission-tasks/mn-semester-vii.ts   -> mnSemesterViiTasks
```

Task shape: `data/academic/mission-tasks/types.ts` (`AcademicMissionTask`). Insert
the 6 new objects for each subject right after that subject's existing week-12
task, keeping objects grouped by subject. Preserve each file's line endings (LF).

## Source of truth for topics

`data/academic/subjects.ts` — each subject's `units[]` / `topics[]`. For weeks
13–18, read the subject's topics AND its existing weeks 1–12, then build 6
**integrative** tasks that combine two or more already-covered topics into a
realistic end-of-semester operation. If a subject still has unused program
subtopics, those may seed a task, but the emphasis is integration, not new theory.
**Never invent a topic outside the official program.**

## Hard exclusions — DO NOT generate for these

- **`Inglés por Niveles`** (subjectName "Sentence Builder", and any task with a
  `game:` field). It is a self-paced level ladder (Levels 1–8 + 2 Vocabulary
  Match, weeks 3–12), already complete. Leave it at 10 tasks. Skip.
- **`SMV747`** (PN VII Simulador de Navegación) — handled by `watch-sim-tasks.ts`.
  If it is not present in the file, nothing to do. Do not add academic tasks.

(There are no blocked subjects anymore — REF746 and AUT747 are unblocked and at 12
weeks; they receive weeks 13–18 like every other subject.)

## Field rules — MATCH THE CURRENT HOUSE STYLE

- `career`, `semester`, `subjectCode`, `subjectName`, `subjectId` — copy verbatim
  from that subject's existing tasks in the same file.
- **`unit`, `topic` — CORRECT ACCENTED SPANISH.** The files were normalized to
  proper Spanish accents (á é í ó ú ñ). Match that: e.g. "Operación", "Navegación",
  "estabilidad", "Meteorología". English grammar terms inside English subjects
  stay in English (do not accent them).
- `week` — 13, 14, 15, 16, 17, 18.
- `taskId` — unique, lowercase: `<career-lower>-<subjectcode-lower>-w13-<slug>` …
  `-w18-<slug>`. Verify no duplicate `taskId` anywhere in the repo.
- `taskTitle` — mission-style, action verb, Title Case, capstone flavour (e.g.
  "Draft The Full Cargo Loading Plan For Departure"). Never "Practice 1.1".
- `scenario` — a specific, realistic end-of-semester operation. NOT a template
  with the topic swapped. Integrate multiple prior topics.
- `instructions` — 4 operational steps; the last is always report / communicate in
  correct maritime / deck-watch / engine-room / SMCP English.
- `deliverable` — a concrete professional output (operation plan, emergency report,
  passage plan, compliance statement, handover brief).
- `assessmentCriteria` — 4 criteria judging PERFORMANCE first, English as the
  final vehicle criterion.
- `xp` — 25 rising to 30 for the week 17–18 capstones. Keep it simple.
- `estimatedTime` — "40 min" to "45 min".
- `difficulty` — weighted Advanced. Typical pattern: 13 Standard/Advanced, 14–16
  Advanced, 17–18 Advanced capstones. Weeks 13–18 are the hardest of the subject.

## Anchor to simulators / live resources where the topic fits

- Navigation / watchkeeping / COLREGS -> AIS traffic, Tampico/Altamira approaches
  (`app/traffic`, `data/scenarios/`).
- Communications / radiotelephony / SMCP -> VHF simulator (`app/vhf`), GMDSS/VTS.
- Engine / machinery / auxiliaries (MN) -> engine-room simulator (`app/engine-room`).
- Weather / heavy weather / stability-in-a-seaway -> weather / sea-state (oleaje).

## Per-file procedure (repeat for each of the 8 files)

1. List distinct subjects (by `subjectId`), excluding the hard exclusions.
2. For each subject: read its weeks 1–12 to avoid repetition, then build 6
   integrative weeks 13–18.
3. Insert grouped after that subject's week-12 task.
4. Preserve line endings (LF) and formatting.
5. Verify `npx tsc --noEmit` = 0 errors.
6. Verify each processed subject now has weeks 1–18, no duplicate `taskId`.
7. Commit that file as one lote:
   `git commit -m "feat(tasks): <PN|MN> Semester <n> weeks 13-18 capstone tasks"`

## Guardrails

- **Do NOT `git push`. Do NOT `git merge`. Stay on `main`.** Victor reviews and
  pushes manually.
- One commit per file (per lote).
- If a subject's program is truly exhausted before 6 quality integrative tasks can
  be written, STOP on it, leave a `// TODO(weeks 13-18): ...` note, and record it
  in the final report instead of inventing content.

## Final report

- Subjects completed (weeks 13–18 added) per file, with counts.
- Subjects skipped and why (Inglés por Niveles, SMV747, any TODO).
- Total new tasks added, and `npx tsc --noEmit` status.
- Confirmation that each processed subject now spans weeks 1–18.

---

## GOLD STANDARD — copy this quality bar exactly

Approved reference: PN Sem I / TMO101 (Transporte Marítimo), weeks 13–18. These are
integrative capstones that combine topics already taught in weeks 1–12 (cargo
classification, stowage, stability, load lines, anchoring, ballast, hull stress,
SOLAS/MARPOL/STCW). Note the ACCENTED Spanish in `unit`/`topic`.

```ts
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Marítimo",
    subjectId: "pn-s1-transporte-maritimo",
    unit: "Operación integrada de carga",
    topic: "Plan de carga integrando estiba, estabilidad y líneas de carga",
    week: 13,
    taskId: "pn-tmo101-w13-draft-full-loading-plan",
    taskTitle: "Draft The Full Cargo Loading Plan For Departure",
    scenario: "The vessel loads a mixed cargo in Tampico for departure. The master asks the deck cadet to draft a single loading plan that keeps the ship stable, correctly stowed, and within its load line.",
    instructions: [
      "Set out the loading sequence for the mixed cargo, applying correct stowage and segregation.",
      "Check that the plan keeps GM positive and respects free-surface effects.",
      "Confirm the final draft stays within the applicable load line for the voyage.",
      "Report the loading plan to the master in clear maritime English."
    ],
    deliverable: "An integrated cargo loading plan in English: sequence, stowage/segregation, a stability check, and load line compliance.",
    assessmentCriteria: [
      "The loading sequence and segregation are correct.",
      "The stability check (GM, free surface) is sound.",
      "The load line compliance is verified for the voyage.",
      "The plan is clear, professional, and in correct maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Marítimo",
    subjectId: "pn-s1-transporte-maritimo",
    unit: "Operación integrada de carga",
    topic: "Preparación del buque y la carga para mar gruesa",
    week: 14,
    taskId: "pn-tmo101-w14-prepare-heavy-weather-passage",
    taskTitle: "Prepare The Vessel And Cargo For A Heavy-Weather Passage",
    scenario: "A heavy-weather warning is in force for the passage out of Tampico. The officer asks the cadet to prepare the ship and cargo, drawing on hull stress, structural reinforcement and cargo securing.",
    instructions: [
      "Identify the hull stresses (hogging/sagging, panting) expected in the forecast sea state.",
      "State the cargo securing and lashing checks to make before heavy weather.",
      "Recommend one deck-watch action to reduce loads (speed/course).",
      "Report the heavy-weather preparation in clear deck-watch English."
    ],
    deliverable: "A heavy-weather preparation report in English integrating hull stress, cargo securing, and a deck-watch action.",
    assessmentCriteria: [
      "The expected hull stresses are identified correctly.",
      "The cargo securing checks are appropriate.",
      "The deck-watch action is valid for the sea state.",
      "The report is clear and in correct deck-watch English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Marítimo",
    subjectId: "pn-s1-transporte-maritimo",
    unit: "Operación integrada de puerto",
    topic: "Secuencia de arribo integrando fondeo, amarre y lastre",
    week: 15,
    taskId: "pn-tmo101-w15-direct-arrival-sequence",
    taskTitle: "Direct The Arrival Sequence Into Tampico",
    scenario: "The vessel is arriving at Tampico and must anchor to await a berth, then shift alongside. The master asks the cadet to plan the arrival, integrating anchoring, ballast for berthing, and mooring.",
    instructions: [
      "Plan the anchoring in the outer anchorage: cable scope and forecastle orders.",
      "State the ballast adjustment needed to trim the ship for berthing.",
      "Give the mooring plan alongside: lines and order of making fast.",
      "Report the arrival sequence in clear bridge-to-forecastle English."
    ],
    deliverable: "An arrival plan in English integrating anchoring, ballast for berthing, and the mooring sequence.",
    assessmentCriteria: [
      "The anchoring plan and cable scope are correct.",
      "The ballast/trim reasoning fits berthing.",
      "The mooring sequence is correct and safe.",
      "The plan is clear and in correct SMCP-style English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Marítimo",
    subjectId: "pn-s1-transporte-maritimo",
    unit: "Respuesta a emergencias de carga",
    topic: "Corrimiento de carga y pérdida de estabilidad",
    week: 16,
    taskId: "pn-tmo101-w16-respond-cargo-shift",
    taskTitle: "Respond To A Cargo Shift And Loss Of Stability",
    scenario: "In a seaway the cargo shifts and the vessel takes a list. The officer asks the cadet to assess the stability situation and recommend immediate action.",
    instructions: [
      "Explain how the cargo shift and any free surface reduce stability and cause the list.",
      "State the immediate actions to stop the situation worsening.",
      "Recommend how to restore a safe condition (ballast, course/speed, securing).",
      "Report the emergency assessment and actions in clear maritime English."
    ],
    deliverable: "An emergency stability report in English: cause of the list, immediate actions, and how to restore a safe condition.",
    assessmentCriteria: [
      "The stability/free-surface reasoning is correct.",
      "The immediate actions are appropriate and safe.",
      "The recovery recommendation is sound.",
      "The report is clear and in correct maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Marítimo",
    subjectId: "pn-s1-transporte-maritimo",
    unit: "Cumplimiento normativo integrado",
    topic: "Verificación de SOLAS, MARPOL y líneas de carga para el viaje",
    week: 17,
    taskId: "pn-tmo101-w17-verify-voyage-compliance",
    taskTitle: "Verify Full Regulatory Compliance For The Voyage",
    scenario: "As an end-of-semester capstone, before departure the master asks the cadet to run a full compliance check for the intended voyage across SOLAS, MARPOL and load line requirements.",
    instructions: [
      "Check the cargo and operation against the relevant SOLAS requirements.",
      "Check the operation against the relevant MARPOL requirements (e.g. ballast, garbage, oil).",
      "Confirm load line and seasonal zone compliance for the route.",
      "Report the compliance verdict to the master in clear maritime English, flagging any corrective action."
    ],
    deliverable: "A voyage compliance statement in English covering SOLAS, MARPOL and load line, with a clear compliant/not-compliant verdict.",
    assessmentCriteria: [
      "The SOLAS check is relevant and correct.",
      "The MARPOL check is relevant and correct.",
      "The load line/zone compliance is correct.",
      "The statement is clear, professional, and in correct maritime English."
    ],
    xp: 30,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Marítimo",
    subjectId: "pn-s1-transporte-maritimo",
    unit: "Integración final de la asignatura",
    topic: "Informe de alistamiento del buque para el viaje",
    week: 18,
    taskId: "pn-tmo101-w18-voyage-readiness-brief",
    taskTitle: "Deliver The Voyage Readiness Brief To The Master",
    scenario: "As the closing capstone of the subject, the master asks the cadet to deliver a full voyage readiness brief that pulls together everything learned this semester: the ship, its cargo, its stability, and its compliance.",
    instructions: [
      "Summarise the vessel and cargo condition: loading, stowage and stability status.",
      "Confirm structural and heavy-weather readiness for the intended passage.",
      "State the regulatory compliance status for the voyage.",
      "Deliver the readiness brief to the master in clear, professional maritime English."
    ],
    deliverable: "A voyage readiness brief in English integrating cargo/stability status, structural/heavy-weather readiness, and regulatory compliance.",
    assessmentCriteria: [
      "The cargo and stability summary is accurate.",
      "The structural/heavy-weather readiness is sound.",
      "The compliance status is correct.",
      "The brief is clear, professional, and in correct maritime English."
    ],
    xp: 30,
    estimatedTime: "45 min",
    difficulty: "Advanced"
  },
```

**Note:** the TMO101 objects above are approved. Claude Code should INSERT them into
`pn-semester-i.ts` (weeks 13–18 for TMO101) as the first lote, then generate the
remaining subjects to the same integrative-capstone standard.

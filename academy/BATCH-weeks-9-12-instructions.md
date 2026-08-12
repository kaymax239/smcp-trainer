# BATCH: Weeks 9–12 for every odd-semester subject

**Goal:** Add 4 new weekly mission tasks (weeks 9, 10, 11, 12 — one task each) to
every subject in the 8 mission-task files, extending each subject from 8 to 12
weeks. This is autonomous batch work: generate, verify, and commit per file.

**This is NOT an English course.** SMCP Trainer is a Digital Maritime Academy.
English is the operating language of the bridge / engine room, never a separate
subject. Follow `academy/task-standard-v2.md` exactly. Every task must make the
cadet *perform an operational action*, reported in maritime English/SMCP.

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

The task shape is defined in `data/academic/mission-tasks/types.ts`
(`AcademicMissionTask`). Insert the 4 new objects for each subject immediately
after that subject's existing week-8 task (or before the closing `];` of the
array), keeping objects grouped by subject.

## Source of truth for topics

`data/academic/subjects.ts` — each subject has `units[]` and `topics[]` from the
official PN/MN program. For each subject:

1. Read its `units[]` / `topics[]` in `subjects.ts`.
2. Read which units/topics weeks 1–8 already used in the mission-task file.
3. Generate weeks 9–12 from **program areas not yet covered**. If a subject has
   fewer than 4 uncovered topics, DEEPEN or INTEGRATE already-covered topics
   into a higher-order operational task (e.g. combine two topics into one
   decision/procedure). **Never invent a topic that is not in the program.**

## Hard exclusions — DO NOT generate for these

- **MN VII `REF746` (Refrigeración II)** and **`AUT747` (Automática)** — BLOCKED
  (empty units/topics; content not yet recovered). Skip entirely.
- **`SMV747` (PN VII Simulador de Navegación)** — watch-sim only. Do NOT add
  academic text tasks; it is handled by `watch-sim-tasks.ts`.
- **English-by-levels game carriers** (subjectName "Inglés por Niveles" /
  English Levels, and any task with a `game:` field). Skip these — they need
  game data, not prose tasks. Flag them in the final report for manual handling.

## Field rules (match the existing house style exactly)

- `career`, `semester`, `subjectCode`, `subjectName`, `subjectId` — copy verbatim
  from that subject's existing tasks in the same file.
- `unit`, `topic` — **ASCII, no accents** (match existing weeks 1–8 style, e.g.
  "Transporte Maritimo", "navegacion"). Draw wording from the program.
- `week` — 9, 10, 11, 12.
- `taskId` — unique, lowercase, pattern:
  `<career-lower>-<subjectcode-lower>-w09-<slug>` ... `-w12-<slug>`.
  Verify no duplicate `taskId` exists anywhere in the repo.
- `taskTitle` — mission-style, action verb, Title Case (e.g.
  "Plan An Anchoring Operation In The Outer Anchorage"). Never "Practice 1.1".
- `scenario` — a specific onboard/port situation. NOT a reusable template with
  only the topic swapped. Give real maritime context.
- `instructions` — 4 operational steps; the last one is always report/communicate
  in correct maritime/deck-watch/SMCP English.
- `deliverable` — the concrete professional output (brief, report, plan, log
  entry, calculation note, compliance statement).
- `assessmentCriteria` — 4 criteria that judge PERFORMANCE first, with English
  quality as the final vehicle criterion.
- `xp` — 15 (Foundation/Standard) rising to 20–25 (Advanced). Keep it simple.
- `estimatedTime` — "30 min" to "40 min".
- `difficulty` — escalate across the 4 weeks: typically Standard, Standard,
  Advanced, Advanced. Weeks 9–12 are the end of the semester; make them the
  hardest, most integrative tasks for that subject.

## Anchor to simulators / live resources where the topic fits

The academy has real simulators and data feeds. When a subject's topic maps
naturally, write the scenario around them (do not force it):

- **Navigation / watchkeeping / COLREGS topics** -> the AIS traffic picture and
  the Tampico / Altamira approaches (`app/traffic`, `data/scenarios/`).
- **Communications / radiotelephony / SMCP topics** -> the VHF radio simulator
  (`app/vhf`), GMDSS/VTS reporting.
- **Engine / machinery / auxiliary topics (MN)** -> the engine-room simulator
  (`app/engine-room`).
- **Weather / heavy weather / stability-in-a-seaway topics** -> the weather /
  sea-state (oleaje) picture; heavy-weather deck actions.

## Per-file procedure (repeat for each of the 8 files)

1. List the distinct subjects in the file (by `subjectId`), excluding the hard
   exclusions above.
2. For each subject: build weeks 9–12 (4 tasks) per the rules.
3. Insert the tasks in the file, grouped after that subject's week-8 task.
4. Preserve the file's existing line endings (CRLF vs LF) and formatting.
5. Verify: `npx tsc --noEmit` must pass with zero errors.
6. Verify: each processed subject now has weeks 1–12 with no duplicate `taskId`.
7. Commit that file as one lote:
   `git add data/academic/mission-tasks/<file>.ts`
   `git commit -m "feat(tasks): <PN|MN> Semester <n> weeks 9-12 immersion tasks"`

## Guardrails

- **Do NOT `git push`. Do NOT `git merge`. Do NOT switch to `main`.** Stay on the
  current working branch. Victor merges manually near the Aug 3 launch.
- One commit per file (per lote), so progress is reviewable.
- If a subject is ambiguous or its program topics are exhausted before 4 quality
  tasks can be written, STOP on that subject, leave a `// TODO(weeks 9-12): ...`
  note, and record it in the final report instead of inventing content.

## Final report (print at the end)

- Subjects completed (weeks 9–12 added) per file, with counts.
- Subjects skipped and why (REF746, AUT747, SMV747, English-levels, TODOs).
- Total new tasks added and `tsc` status.

---

## GOLD STANDARD — copy this quality bar exactly

These 4 objects are the approved reference (PN Sem I / TMO101, weeks 9–12).
Match this structure, tone, escalation, and immersion level for every subject.

```ts
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Maritimo",
    subjectId: "pn-s1-transporte-maritimo",
    unit: "Equipo de maniobra",
    topic: "Equipo de fondeo y maniobra: anclas, molinete, cadena y frenos",
    week: 9,
    taskId: "pn-tmo101-plan-anchoring-operation",
    taskTitle: "Plan An Anchoring Operation In The Outer Anchorage",
    scenario:
      "The vessel is inbound to Tampico and ordered to anchor in the outer anchorage to await a berth. The master tells the deck cadet to prepare the forecastle team and brief the anchoring plan before stations.",
    instructions: [
      "Name the main anchoring equipment: anchor, cable, windlass, brake, and chain stopper, and state the function of each.",
      "Explain how the officer decides the amount of cable to pay out for the charted depth in the anchorage.",
      "Give the sequence of orders from 'stand by the anchor' to 'brought up', in correct SMCP-style bridge-to-forecastle English.",
      "State two safety checks the forecastle team reports back before and after letting go."
    ],
    deliverable:
      "A forecastle anchoring brief: equipment named with functions, cable scope reasoning, and the ordered sequence of commands and reports in maritime English.",
    assessmentCriteria: [
      "Anchoring equipment is named correctly with its function.",
      "Cable scope reasoning is sound for the charted depth.",
      "Order sequence follows correct anchoring procedure.",
      "Bridge-to-forecastle communication is clear and in correct SMCP-style English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Maritimo",
    subjectId: "pn-s1-transporte-maritimo",
    unit: "Refuerzos de Proa y Popa",
    topic: "Refuerzos estructurales de proa y popa frente a esfuerzos y mar gruesa",
    week: 10,
    taskId: "pn-tmo101-bow-stern-reinforcement-heavy-weather",
    taskTitle: "Brief Bow And Stern Reinforcement Against Heavy-Weather Stresses",
    scenario:
      "A heavy-weather warning is in force for the passage north of Tampico with a rising swell. The deck officer asks the cadet to explain why the bow and stern are specially reinforced and how the sea state affects those structures.",
    instructions: [
      "Identify the structural reinforcements at the bow and stern (e.g. panting arrangements, breasthooks, transom framing) and what each resists.",
      "Using the heavy-weather / sea-state picture, explain how pitching in a head swell loads the bow structure.",
      "Connect the reinforcement to one deck-watch action taken in heavy weather (e.g. reducing speed, altering course to ease pounding).",
      "Report the brief in clear deck-watch English."
    ],
    deliverable:
      "A heavy-weather structural brief linking bow/stern reinforcement to the sea-state loads and to a deck-watch action.",
    assessmentCriteria: [
      "Bow and stern reinforcements are named correctly with what they resist.",
      "The link between swell/pitching and structural load is sound.",
      "A relevant heavy-weather deck action is identified.",
      "The brief is clear and in correct deck-watch English."
    ],
    xp: 20,
    estimatedTime: "35 min",
    difficulty: "Standard"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Maritimo",
    subjectId: "pn-s1-transporte-maritimo",
    unit: "Tanques de lastre, agua dulce y combustible",
    topic: "Operacion de lastre y su efecto en calado, asiento y estabilidad",
    week: 11,
    taskId: "pn-tmo101-direct-ballast-operation",
    taskTitle: "Direct A Ballast Operation For Departure Trim",
    scenario:
      "Before departure the vessel is light on cargo forward and the master wants an even keel with a small stern trim. The cadet must plan and communicate a simple ballast operation with the duty engineer.",
    instructions: [
      "Explain what ballast water is for and how filling or emptying tanks changes draft and trim.",
      "Decide, in general terms, which tanks to adjust to correct a bow-down condition to a small stern trim.",
      "Write the request to the engine room to transfer/adjust ballast, using clear operational English.",
      "State one MARPOL-related precaution when handling ballast water."
    ],
    deliverable:
      "A ballast operation plan with the deck-to-engine request in maritime English and the expected effect on draft and trim.",
    assessmentCriteria: [
      "Effect of ballast on draft and trim is explained correctly.",
      "Tank-adjustment reasoning matches the desired trim.",
      "The deck-to-engine request is clear and professional in English.",
      "A valid MARPOL ballast precaution is stated."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
  {
    career: "PN",
    semester: "Semester I",
    subjectCode: "TMO101",
    subjectName: "Transporte Maritimo",
    subjectId: "pn-s1-transporte-maritimo",
    unit: "Lineas de Carga y Marca de calados",
    topic: "Zonas y periodos estacionales de las lineas de carga y francobordo",
    week: 12,
    taskId: "pn-tmo101-verify-load-line-compliance",
    taskTitle: "Verify Load Line Compliance For A Loaded Departure",
    scenario:
      "The vessel is fully loaded and about to depart Tampico bound for a port across a seasonal load line zone boundary. The master asks the cadet to verify the ship is not overloaded for the zone it will transit.",
    instructions: [
      "Identify the load line marks (S, W, T, F, TF) and what each represents.",
      "Explain how the applicable mark changes with the seasonal zone and season of the voyage.",
      "Read the departure draft against the applicable load line and state whether the vessel complies.",
      "Report the compliance check as a written statement in maritime English, flagging any corrective action if overloaded."
    ],
    deliverable:
      "A load line compliance statement for the intended voyage, showing the applicable mark, the draft read, and a clear compliant / not-compliant verdict.",
    assessmentCriteria: [
      "Load line marks are identified correctly.",
      "The applicable mark matches the seasonal zone of the voyage.",
      "Draft-to-mark comparison and verdict are correct.",
      "The statement is clear, professional, and in correct maritime English."
    ],
    xp: 25,
    estimatedTime: "40 min",
    difficulty: "Advanced"
  },
```

**Note:** the TMO101 objects above are already approved. Claude Code should
INSERT them into `pn-semester-i.ts` (weeks 9–12 for TMO101) as the first lote,
then generate the remaining subjects to the same standard.

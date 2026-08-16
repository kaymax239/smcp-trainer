# SMCP Trainer — Project Brief for the Council

Read this file before convening the Council on any question about SMCP Trainer.
It exists so the personas argue about *this* project, not a generic ed-tech app.

Keep it current: when the product, stack, or constraints change materially,
update this file. A stale brief produces confidently wrong verdicts.

---

## What the project is

SMCP Trainer is a **Digital Maritime Academy** for cadets at the Escuela Náutica
Mercante de Tampico (FIDENA), covering two career tracks:

- **PN — Pilotaje Naval** (deck officers)
- **MN — Maquinistas Navales** (marine engineers)

It converts official academic programs into operational training:

```
Program -> Unit -> Topic -> Task Order -> Cadet Action -> Performance Check -> XP
```

Cadets start as *Cadet Recruit* and advance in rank through XP earned by
demonstrated competence.

## The core doctrine (do not let the Council quietly violate it)

From `academy/PROJECT_VISION.md`:

- English is the **operational language**, not the academic objective. Ships run
  on English for reporting, coordination, safety, and procedure.
- Cadets **learn by performing maritime duties**, not by studying grammar.
- Every academic topic must become an **operational task**
  (Mathematics -> calculate cargo storage capacity; Physics -> determine vessel
  speed; Maritime English -> report to the Chief Engineer).
- The product is explicitly **NOT**: an ESL platform, a grammar course, a
  vocabulary trainer, a digital textbook, a quiz website, Moodle, or
  "Duolingo for Maritime English."

Any Council proposal that drifts toward generic language-learning mechanics is
proposing a different product. Say so out loud rather than smuggling it in.

## Stack and architecture

- **Next.js (App Router) + React + TypeScript + Tailwind**, deployed on Vercel.
- **Auth**: Auth.js / NextAuth v5 with Google OAuth, restricted to
  `@fidena.edu.mx` accounts (`auth.ts`).
- **AI task generator** (`/admin/generate-tasks`, `app/lib/task-generation.ts`):
  Anthropic Claude writes only the *creative* part of a task (title, scenario,
  prompts); everything structural — career, semester, subject, XP, duration —
  is filled server-side from the real academic catalog. Model output is
  validated with **zod** before it becomes a task.
- **Grader**: Google Gemini (`/api/feedback`).
- **Live traffic**: VesselAPI AIS feed with a local snapshot fallback
  (`/api/traffic`, `data/scenarios/tampico-watch-01.json`), rendered with
  Leaflet.
- **Content store**: hand-written tasks in `data/academic/mission-tasks/*.ts`;
  AI-generated tasks accumulate in a single JSON imported statically.

## Known constraints — the Engineer and the Adversary should hold these

1. **No backend, no database.** State and content live in the repo. Persistent
   XP is not implemented, so any feature premised on tracking a cadet over a
   semester is a *new system*, not a tweak.
2. **The generator is local-only by design.** It writes to the project
   filesystem; Vercel's filesystem is read-only, so generation is disabled in
   production. The authoring flow is: generate -> save -> commit the JSON.
   "Let teachers generate tasks in production" requires real storage
   (Blob / Postgres) first.
3. **API keys are per-service and personal.** Anthropic, Gemini, and VesselAPI
   keys are held by one person; per-cadet AI usage has a real cost owner.
4. **STCW mapping is not fully implemented** — a gap that matters for
   institutional credibility, not just completeness.
5. **Institutional reality**: this is a maritime academy with fixed academic
   programs, official planning documents (F-32 / F-51), and a real chain of
   approval. Features that require changing the official program are slow;
   features that serve the existing program are fast.

## Content scale

From `academy/PROJECT_STATUS.md`: 94 program PDFs processed, 83 unique subjects,
654 units, **2,370 topics**. Missions 1.1–1.4 are built and reachable from the
dashboard. The bottleneck is not ideas — it is turning thousands of topics into
quality task orders and verifying them.

## The three question types this setup is for

| Question type | What the user usually means | Personas to push hardest |
|---|---|---|
| **Strategy** | Roadmap, scope, institutional adoption, what to build next, whether to keep going | Strategist, Adversary, Philosopher, Mariner |
| **Features** | A specific mechanic, screen, or system (XP persistence, rank ladder, AIS drills, generator UX) | Engineer, Adversary, Visionary, Scientist |
| **Pedagogy** | Does this actually train competence? Assessment validity, difficulty, feedback quality, cadet motivation | Scientist, Humanist, Mariner, Philosopher |

## Standing instructions for the Council on this project

- **Cost of content is the real currency.** Any proposal that multiplies the
  number of hand-authored artifacts must say who writes them and when.
- **One maintainer.** Estimate in evenings and weekends, not sprints. A proposal
  that needs a team is a proposal to hire a team.
- **Cadet safety framing is not decoration.** Bad maritime procedure taught
  convincingly is worse than no training. The Adversary should treat
  hallucinated or subtly wrong SMCP phraseology as a first-class risk, not a
  QA footnote.
- **Assessment validity over engagement metrics.** XP that rewards completion
  rather than competence quietly turns this into the quiz website the vision
  rejects.

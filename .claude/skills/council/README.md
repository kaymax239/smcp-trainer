# The Council — installed for SMCP Trainer

Seven expert personas debate a decision and converge on a verdict with a
confidence score, three critical risks, five next steps, and a minority report
from the strongest dissenter.

Installed from [itshussainsprojects/Claude-Council-Skill](https://github.com/itshussainsprojects/Claude-Council-Skill)
(MIT, see `LICENSE`), pinned at upstream commit `f41cbcb`, plus a project layer
for this repository.

## How to use it

Ask in a Claude Code session inside this repo. The skill triggers on its own for
decision-shaped questions; `convene the Council` forces it.

```
Convene the Council: should I build persistent XP with a database next,
or generate 50 more task orders for the missions I already have?

Council — is the AI task generator worth keeping local-only, or should
teachers be able to generate tasks in production?

Council: do my VHF missions actually train competence, or just recognition?
```

Follow-up questions after a session are answered conversationally — the Council
does not re-convene unless you ask it to.

## What was added on top of upstream

| File | Why |
|---|---|
| `references/smcp-trainer-context.md` | Product doctrine, stack, and hard constraints, so the personas debate this project rather than a generic ed-tech app. **Keep this current.** |
| `personas/mariner.md` | ⚓ The Mariner — an eighth persona (deck officer turned instructor) who sits only on maritime-training questions and holds the Council to competence, phraseology fidelity, and instructor load. |
| `SKILL.md` | Step 1b (read the brief, seat the Mariner), calibration rows for strategy / feature / pedagogy questions, and standing constraints for verdicts. |
| `templates/debate-format.md` | The Mariner's block, marked optional. |

Upstream's seven personas and verdict format are unmodified, so the Council
behaves normally on questions unrelated to the project.

## Maintenance

The brief is the part that rots. When the stack, the constraints, or the roadmap
move — a database lands, XP persists, the generator ships to production — update
`references/smcp-trainer-context.md` in the same commit. A stale brief produces
confident, wrong verdicts.

To pull upstream changes later, re-clone the source repo and diff its `council/`
directory against this one; the project layer is confined to the files in the
table above.

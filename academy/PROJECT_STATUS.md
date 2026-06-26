# Project

SMCP Trainer is a Digital Maritime Academy for cadets preparing to operate in real shipboard contexts. The current product direction is an operational learning system where academic maritime content is transformed into missions, task orders, cadet actions, performance checks, and XP progression.

The academy is centered on maritime practice: bridge, deck, engine room, safety, operations, communication, and professional shipboard behavior. English is treated as an operational tool inside maritime tasks, not as the product itself.

# Project Goal

SMCP Trainer is a Digital Maritime Academy, not an English course. The goal is to train cadets to understand, execute, communicate, and verify real maritime duties through structured operational tasks.

The Task Order philosophy is the core instructional model. A cadet does not passively study a topic; the cadet receives an order, performs a concrete maritime action, checks performance against operational criteria, and earns XP for demonstrated competence. This keeps every lesson grounded in duty, procedure, communication, and assessment.

# Current Academic Status

* PDFs processed: 94
* Subjects: 83 unique subjects
* Units: 654
* Topics: 2370
* Unread PDFs: 0

The current academic base includes the completed academic inventory and academic map. The inventory extracts the source program structure from the processed PDFs, and the map organizes that material into academy-ready subject, unit, and topic relationships.

# Current Architecture

Program
-> Unit
-> Topic
-> Task Order
-> Cadet Action
-> Performance Check
-> XP

# Completed Work

* Academic inventory
* Academic map
* Task Standard v2
* Task Generation Pilot v2
* Mission Player MVP
* Mission Order redesign
* Dashboard integration
* Operational Task Order model
* Mission 1.1 task order page
* Mission 1.2 task order page
* Mission 1.3 task order page
* Mission 1.4 task order page
* Shared TaskOrderMissionPage component for mission pages 1.2-1.4
* Dashboard routing to missions 1.1-1.4

# Current Git Status

* Current branch: `codex/institutional-demo-mission-fix`
* Latest commit: `692fd64 feat: add task order pages for missions 1.2 to 1.4`
* Repository clean: NO

Note: the repository was clean before creating this status summary. It is now not clean because `academy/PROJECT_STATUS.md` was created as requested.

# Current Working Features

* `/`
* `/mission-1-1`
* `/mission-1-2`
* `/mission-1-3`
* `/mission-1-4`
* Missions 1.1-1.4 are connected from the dashboard.
* Missions 1.2-1.4 use the shared operational Task Order mission page model.
* Mission pages present task order, cadet action, performance check, and XP structure.
* Build status: passes in the current development record; build was not rerun for this summary to avoid generating or modifying additional files.

# Current Limitations

* STCW mapping is not fully implemented.
* Persistent XP is not implemented.
* Backend is not implemented.
* Database is not implemented.
* Authentication is not implemented.
* User accounts are not implemented.
* Progress persistence is not implemented.
* Assessment scoring is not yet connected to a durable system.
* Remaining missions are not yet generated as full app routes.
* Full academic program expansion is not yet connected to the dashboard.

# Next Development Priority

Missions 1.1 through 1.4 now exist and are connected from the dashboard.

The next development priority is to review and refine Missions 1.2, 1.3, and 1.4 so they match the approved Task Order model and feel like operational cadet duties, not ESL lessons.

After Missions 1.1-1.4 are demonstration-quality, expand the same architecture to the remaining Maritime English I missions.

Do not expand to all 47 missions until the Task Order experience is validated.

# Long-Term Goal

The long-term goal is the August 3 demonstration of SMCP Trainer as a working Digital Maritime Academy. The demo should show a cadet entering from the dashboard, selecting operational missions, receiving clear task orders, completing cadet actions, seeing performance checks, and earning XP.

The August 3 version should demonstrate the institutional vision: a maritime academy platform that converts official academic program material into structured operational training for cadets.


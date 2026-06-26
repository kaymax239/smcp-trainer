# Project

SMCP Trainer is a Digital Maritime Academy.

It transforms official academic programs into operational cadet training. The platform takes institutional maritime subjects, units, and topics and turns them into duties a cadet can perform, verify, and improve through structured practice.

English is the operational language of the academy. English is not the academic objective. Cadets use English because ships use English for reporting, coordination, safety, and procedure, but the product does not exist to teach grammar. It exists to train maritime competence.

Cadets learn by performing maritime duties, not by studying grammar.

# Project Goal

The goal of SMCP Trainer is to convert every official academic topic into an operational learning path:

Program
-> Unit
-> Topic
-> Task Order
-> Cadet Action
-> Performance Check
-> XP

The cadet receives a Task Order, performs a maritime action, checks performance against clear criteria, and earns XP for demonstrated competence.

The cadet does not simply complete exercises. The cadet demonstrates readiness to act, communicate, calculate, identify, inspect, report, verify, navigate, and operate in maritime contexts.

# Core Learning Philosophy

Cadets do not learn from lessons. Cadets learn from operational task execution.

Every academic topic must become an operational task.

Mathematics
-> Calculate cargo storage capacity.

Physics
-> Determine vessel speed.

Navigation
-> Plot vessel position.

Engineering Drawing
-> Identify machinery component.

Maritime English
-> Report to the Chief Engineer.

The platform teaches through immersion, decision-making, communication, and performance. It never teaches through isolated grammar instruction.

# What SMCP Trainer IS NOT

SMCP Trainer is NOT:

* an ESL platform
* a grammar course
* a vocabulary trainer
* a digital textbook
* a quiz website
* Moodle
* Duolingo for Maritime English

# What SMCP Trainer IS

SMCP Trainer IS:

* a Digital Maritime Academy
* an operational task engine
* a competency-based learning system
* an immersive cadet simulator
* a performance-oriented training platform

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
* Latest commit: `aa11553 docs: update SMCP Trainer project status`
* Repository clean: YES before this master revision

# Current Working Features

* `/`
* `/mission-1-1`
* `/mission-1-2`
* `/mission-1-3`
* `/mission-1-4`
* Missions 1.1-1.4 are connected from the dashboard.
* Missions 1.2-1.4 use the shared operational Task Order mission page model.
* Mission pages present task order, cadet action, performance check, and XP structure.

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

The long-term goal is the August 3 demonstration of SMCP Trainer as a working Digital Maritime Academy.

The Director should experience:

Dashboard
-> Select Subject
-> Receive Operational Task Order
-> Complete Cadet Duty
-> Performance Check
-> XP

The demonstration must feel like academy training, not classroom software. It should show that official academic program material can become structured operational training where cadets act, decide, communicate, and prove competence.

# Golden Rule

Every screen in SMCP Trainer must answer one question:

"What would a real cadet do next?"

If the answer is:

Read grammar
Practice vocabulary
Answer quiz

The design is wrong.

If the answer is:

Report
Inspect
Calculate
Identify
Communicate
Verify
Navigate
Operate

Then the design is correct.

# Development Principle

Future development must always prioritize:

Operational immersion
over
Language explanation.

Performance
over
Theory.

Decision making
over
Memorization.

Task execution
over
Lessons.

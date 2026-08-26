# Agent: PerformanceAgent

Zweck

Der PerformanceAgent ist ein leichter Orchestrator, der den wind-performance Skill benutzt, um:

- Live die zur Einhaltung einer ETA nötige Geschwindigkeit abzuschätzen,
- Empfehlungen für Zielgeschwindigkeiten bei gegebenem Kurs auszugeben,
- ggf. historische Telemetrie zur Kalibrierung (nicht Teil des ersten POCs).

Eingaben

- wind (siehe skill)
- course_deg_true
- optional: desired_eta / distance -> compute required speed via eta-calculation skill

Ausgabe

- { recommended_speed_kn, estimated_speed_kn, twa_deg, rationale }

Integration mit PWA

- Liest window.lastGps, window.buoys, planState() zur Bestimmung aktueller Situation
- Zur Anwendung: Agent ruft skill.estimateBoatSpeed(...) und kombiniert das Ergebnis mit eta-calculation

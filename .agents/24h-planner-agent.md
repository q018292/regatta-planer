# Agent: 24h-RegattaPlannerAgent

Zweck

Dieser Agent orchestriert den 24h-Regatta-Planungs-Skill. Er nimmt die aktuelle geplante Route (planState()), liest eine 24h-Wettervorhersage (forecast) und liefert einen empfohlenen Startzeitpunkt plus Timing pro Leg.

Eingaben

- regatta: payload() oder planState()
- forecast: Array von ForecastPoints (siehe skill)

Ablauf

- Normalisiere planState() in das Regatta-Shape
- Reiche regatta + forecast an skills/24h-regatta-planner.plan24h()
- Gib die beste Startzeit + alternatives als JSON zurück

Integration

- Kann von der PWA via fetch/HTTP (lokaler Adapter) oder per CLI aufgerufen werden
- Achtet auf finalisierte/gesperrte Pläne (Änderungen nur mit Nutzer-Interaktion)

# Skill: 24h-regatta-planner

Zweck

Dieser Skill plant über ein 24‑Stunden‑Fenster eine Regatta bzw. ein optimiertes Zeitfenster, indem er Wettervorhersagen (Windstärke/-richtung) über 24h nutzt, um:

- Startzeitpunkt und segmentweise Geschwindigkeiten zu optimieren,
- zu erwartende Fahrzeit für eine gegebene Route zu schätzen,
- Alternativen zu generieren (z. B. Start 09:00 vs. Start 14:00).

Eingaben

- regatta: { plan: planState().states (mit legs, distances) }
- forecast: Array<{ timestamp: ISO, wind_kn: number, wind_dir_deg: number }> — zeitlich geordnete Vorhersage für 24h
- constraints: { earliest_start?: ISO, latest_start?: ISO, max_start_window_hours?: number }

Ausgaben

- { best_start: ISO, best_total_time_hours: number, alternatives: [{start_iso, estimated_time_hours, explanation}], route_timing: [{leg_index, start_iso, eta_iso, estimated_speed_kn}] }

Algorithmus (vereinfachte erste Version)

1. Für jeden Kandidaten-Startzeitpunkt im vorgegebenen Fenster (z. B. jede 15 Minuten):
   a) Iteriere über die Legs in der Reihenfolge; für jede Leg bestimme die Leg-Kurs (bearingDeg aus PWA) und die erwartete Windbedingungen zur geschätzten Leg-Zeit anhand der Forecast-Zeitreihe.
   b) Benutze wind-performance, um die erwartete Geschwindigkeit auf der Leg zu schätzen.
   c) Summiere die Zeiten (distance / speed) und erhalte eine Gesamtfahrzeit.
2. Wähle Startzeit mit minimaler geschätzter Gesamtfahrzeit.

Hinweis

- Diese Version ist heuristisch und schnell; spätere Verbesserungen: feinere Zeitauflösung, Berücksichtigung von Tide/Strömung/Windvorhersage-Unsicherheit, Monte‑Carlo und Nutzung historischer Telemetrie zur Kalibration.

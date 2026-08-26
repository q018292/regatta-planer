# Skill: wind-performance

Zweck

Dieser Skill schätzt die zu erwartende Bootsgeschwindigkeit (kn) anhand von Windstärke (kn), Windrichtung (true, °) und Kurs/Heading (true, °). Er ist gedacht als kleine, getestete Berechnungsbibliothek (VPP-lite) für Agents, die ETA, Route-Optimierung oder Live-Navigation machen.

Eingaben

- wind: { speed_kn: number, direction_deg_true: number, timestamp?: ISO }
- course_deg_true: number  // gewollte Fahrtrichtung bzw. Schlagrichtung (true)
- optional: polarCurve: Array<{twa_deg: number, speed_factor: number}> // Referenz-Polardiagramm
- optional: hullMultiplier: number // Faktor zur Anpassung an Bootsverhalten (z. B. 0.95 conservative)

Ausgaben

- { estimated_speed_kn: number, twa_deg: number, notes?: string }

Algorithmus (Kurz)

1. Berechne TWA (true wind angle) = minimierter Winkel zwischen Windrichtung und Kurs (0–180°). Für Segeln relevante TWA ist typischerweise 30°–160°.
2. Verwende ein einfaches Polar (Standardkurve) als Lookup/Interpolations-Funktion, um einen speed_factor für die gegebene TWA zu bekommen (0..1). Beispielwerte sind konservativ und empirisch.
3. estimated_speed_kn = hullMultiplier * windSpeedKn * speed_factor

Hinweis

- Dies ist kein hochpräziser VPP; es ist eine robuste, erklärbare Näherung, die in der App als Basis für Empfehlungen und Vergleiche gut funktioniert.
- Für genauere Aussagen kann man historische Telemetrie (gpsLogbook) zur Kalibration nutzen.

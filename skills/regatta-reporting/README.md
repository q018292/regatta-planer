# Skill: regatta-reporting (grounded)

Purpose

Produce human-friendly reports comparing planned vs actual sailing, in JSON and Markdown/HTML.

Inputs

- planned: planState()
- gps: window.gpsLogbook
- analysis: actual-vs-planned outputs

Example report sections

- Overview: planned time, actual time, delta
- Per-leg stats: avg SOG, max SOG, largest deviation
- Visual: polyline for planned route, polyline for actual GPS track (they are already drawn via renderRouteOverlay() and renderGpsTrack())

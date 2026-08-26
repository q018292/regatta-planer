# RegattaPlaner Agents & Skills (grounded)

This update replaces placeholders with concrete fields, globals and function hooks discovered in index.html so Agents and Skills can interoperate with the existing PWA runtime.

Key runtime globals and functions (from index.html)

- Globals exposed in runtime:
  - window.routes — array of available route definitions (objects with {start, end, distance, max, id, cleanFinish?})
  - window.buoys — array of buoy objects: {id?, name, lat, lon, type}
  - window.routeMap — Map keyed by rid(from,to) -> route object
  - window.mapObj — Leaflet map instance
  - window.lastGps — last geolocation Position-like object (pos.coords.latitude, pos.coords.longitude, coords.speed, coords.heading, coords.accuracy)
  - window.gpsWatchId — numeric watch id or null
  - window.gpsLogbook — array of GPS log records, persisted under localStorage key 'regattaGpsLogV27'

- Important functions/hooks the Agents can call or observe:
  - planState() — returns the current plan state object {states: [...], counts: {...}, total: number, lastEta: 'HH:MM', ...}
  - payload() — returns a full serializable snapshot of the current app state (used by export/archiving)
  - importJson(file) — (if present) import JSON plan payload into the app
  - render(), renderRegatta(), renderBuoyMap(), renderRouteOverlay() — UI render hooks
  - updateGpsInfo(pos) — update GPS state in the app (pos is Position-like {coords:{latitude,longitude,speed,heading,accuracy}})
  - startGpsWatch(), stopGpsWatch(), startSimulation(), stopSimulation()
  - addGpsLogPoint(pos), renderGpsTrack(), exportGpsLogCsv(), exportGpsLogGpx()
  - previewBearingForLeg(from,to), previewEtaForLeg(distance,speed)
  - haversineNm(aLat,aLon,bLat,bLon) and bearingDeg(aLat,aLon,bLat,bLon)

Canonical data shapes (observed)

- Buoy
  - { name: string, lat: number, lon: number, type: string }
  - Example: { name: 'WV15', lat: 53.10000, lon: 10.20000, type: 'Bojen' }

- Route definition (routes[] / routeMap value)
  - { start: 'WV12', end: 'WV15', distance: 2.7160, max: 1, id: 'WV12|WV15', cleanFinish?: true }

- Plan/Leg state (planState().states entries)
  - { row: number, von: 'WV12', nach: 'WV15', route: { distance: number, max: number, id: string }, tr: HTMLElementRef?, speed: string/number, eta?: 'HH:MM' }

- GPS log record (gpsLogbook entries)
  - { time: 'DD.MM.YYYY, HH:mm:ss', lat: number, lon: number, sog: number|null, cog: number|null, accuracy: number|null, type?: string }

Where agents should integrate

- Read-only integrations
  - Call planState() to obtain the canonical plan and per-row ETA/state
  - Read window.buoys and window.routes/routeMap for buoy and route metadata
  - Read gpsLogbook and call renderGpsTrack() to visualize

- Writable / action integrations (must respect write-locks)
  - Use importJson(...) to load a new plan payload or payload() -> produce an export
  - Respect the finalization/lock mechanism: localStorage keys like 'regattaV2906Finalized', 'regattaV2913PlanLocked' and UI classes 'plan-locked' / 'regatta-finalized' indicate plan is locked

Next recommended steps (I will perform these unless you object)

1. Add concrete skill README examples that use the exact functions and field names above (I will update skills/* READMEs in the branch).
2. Add an agents/RegattaPlanerAgent.md showing the recommended call graph and the exact function names it should call into the PWA (e.g., planState(), payload(), importJson(), updateGpsInfo()).
3. Add a small TypeScript proof-of-concept agent that runs locally (node script) that can read a downloaded payload JSON (from payload()) and run route-validation and eta-calculation using the same field names.

If that's fine I'll now commit the grounded READMEs and agent docs to feature/add-skills-and-agents.
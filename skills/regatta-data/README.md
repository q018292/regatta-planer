# Skill: regatta-data (grounded)

Purpose

Provide canonical serialization/deserialization between the PWA runtime and Agents/Skills. This skill is the adapter between the app's DOM/runtime globals and the AI layer.

Runtime hooks (from index.html)

- Read:
  - planState() -> { states: [...], counts: {...}, total: number, lastEta: 'HH:MM' }
  - window.buoys -> Array<{name,lat,lon,type}>
  - window.routes -> Array<{start,end,distance,max,id,cleanFinish?}>
  - window.routeMap -> Map keyed by rid(from,to)
  - window.gpsLogbook -> Array of GPS records (persisted under 'regattaGpsLogV27')
  - payload() -> full snapshot used for archive/export

- Write / Actions:
  - importJson(file) -> import a saved payload into the PWA
  - downloadJson(snapshot) / exportJson() -> trigger app export (the UI provides helpers)

Canonical JSON shape produced by this skill (example)

{
  "regatta": {
    "id": "<generated>",
    "name": "Regatta 2026-08-26",
    "status": "DRAFT|ACTIVE|CLOSED|ARCHIVED",
    "startTime": "14:00",
    "startBuoy": "WV19",
    "buoys": [ {"name":"WV12","lat":...,"lon":...,"type":"..."}, ... ],
    "routes": [ {"id":"WV12|WV15","start":"WV12","end":"WV15","distance":2.7160,"max":1}, ... ],
    "plan": [ {"row":1,"von":"WV19","nach":"WV12","speed":5.5,"eta":"14:23"}, ... ],
    "gpsLogbookKey": "regattaGpsLogV27",
    "gpsLogbook": [ {"time":"26.08.2026, 13:55:01","lat":..,"lon":..,"sog":5.1,"cog":92,"accuracy":8}, ... ]
  }
}

Notes for implementers

- planState() is the authoritative plan representation inside the PWA — prefer it over scraping the DOM directly.
- The app uses functions previewEtaForLeg(distanceNm,speedKn) and previewBearingForLeg(from,to) which can be used for quick estimates.
- Respect write-protection flags: localStorage keys 'regattaV2906Finalized', 'regattaV2913PlanLocked' and UI state classes 'plan-locked' / 'regatta-finalized' mean the user intends the plan to be immutable.

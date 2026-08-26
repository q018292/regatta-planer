# Skill: route-planning (grounded)

Purpose

Create a valid plan (sequence of legs) from a start buoy and a set of ordered buoys, using the PWA routing table (routes/routeMap).

Runtime helpers

- window.routeMap.get(rid(from,to)) -> route object with .distance
- previewBearingForLeg(from,to)
- previewEtaForLeg(distanceNm,speedKn)
- Use regatta-data skill to canonicalize buoys and planState()

Expected output

- planned_route: { legs:[{row,from,to,distance_nm,bearing_deg,expected_duration_min,eta}], total_distance_nm, estimated_time }

Validation

- Pass result to route-validation skill and then optionally to eta-calculation for per-leg ETA

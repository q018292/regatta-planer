# Skill: actual-vs-planned (grounded)

Purpose

Compare planned route (planState()) with gpsLogbook (window.gpsLogbook) and compute deviations per leg.

Approach

- Use planState().states to get sequence of legs with their route.distance
- Use gpsLogbook (time-ordered) and haversine to detect passage times near buoys (maybe using gpsWaypointRadius from logSettings())
- Compute per-leg actual ETA, planned ETA, delta_seconds and lateral_offset_sm

Example summary output

{
  overall: { planned_time: '06:35:00', actual_time: '06:42:18', delta: 438 },
  per_leg: [ { from:'WV15', to:'WV19', planned_eta:'13:10', actual_eta:'13:14', delta_seconds:240, lateral_offset_sm:0.42 }, ... ]
}

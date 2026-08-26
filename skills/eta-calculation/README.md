# Skill: eta-calculation (grounded)

Purpose

Calculate ETA given distances and speeds, or compute required speed for a target ETA.

PWA helpers

- previewEtaForLeg(distanceNm, speedKn) uses the app's start time baseline.
- calculatedEtas() function uses startTime input and per-leg distances to compute ETA chain.

Formulas

- time_hours = distance_nm / speed_kn
- eta = start_time + time_hours
- required_speed_kn = distance_nm / desired_time_hours

Integration

- Use planState() to obtain startTime and per-leg distances.
- The app also stores manual ETA overrides in localStorage key 'regattaV2901EtaOverrides'

# Skill: gps-analysis (grounded)

Purpose

Analyze gpsLogbook entries and the live GPS (window.lastGps) to compute statistics and deviations.

Runtime sources

- window.gpsLogbook (persisted under 'regattaGpsLogV27') — array of records {time,lat,lon,sog,cog,accuracy}
- window.lastGps — latest Position-like object

Useful utility functions in app

- haversineNm(lat1,lon1,lat2,lon2) — distance in NM
- bearingDeg(lat1,lon1,lat2,lon2)

Outputs

- stats { avg_sog, max_sog, total_distance_nm }
- smoothed track, lateral offsets relative to planned legs

# Skill: buoy-management (grounded)

Purpose

Resolve buoy identifiers and work with buoy metadata present in the running PWA.

Runtime data

- window.buoys: Array of buoy objects with at least { name, lat, lon, type }
- Helper functions:
  - buoy(name) / routeOverlayBuoy(name) — lookup by buoy name
  - renderBuoyMap() — redraws map layer
  - document.dispatchEvent('regattaBuoyNamesToggle') — toggles label display

Common operations

- resolveBuoy(name) -> { name, lat, lon, type }
- listBuoys() -> window.buoys
- findNearestBuoys(lat, lon, radiusNm)

Example integration snippet (pseudo)

const b = window.buoys.find(x => x.name === 'WV15');
if (b) console.log(b.lat, b.lon);

Notes

- Buoy objects may be incomplete; guard against non-finite lat/lon.

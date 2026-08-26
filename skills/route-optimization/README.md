# Skill: route-optimization (grounded)

Purpose

Generate alternative routes considering already-implemented rules (route.max, allowed(from,used[])), distances and ETA impact.

Integration hints

- Use window.routes and window.routeMap to enumerate available options
- The app provides allowed(from, prevIds) to compute permitted next legs
- For ETA impact computation, call eta-calculation and use gps-analysis outputs where needed

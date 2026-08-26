# Skill: route-validation (grounded)

Purpose

Check a plan (planned_route or planState().states) for rule violations using the app's business rules.

Checks implemented in the PWA that the skill mirrors

- FINISH rules: FINISH allowed only where a special route exists (routeMap contains id 'WV19|FINISH' or route.cleanFinish)
- Duplicated legs: the app uses route.max and counts usages against routes
- Missing start data: startTime, startBuoy must be present
- Logical inconsistencies: repeated buoy with no intervening change

Inputs

- planState().states or a planned_route from route-planning

Output

- { valid: boolean, errors: [ { code, message, path } ] }

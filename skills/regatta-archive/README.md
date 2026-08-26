# Skill: regatta-archive (grounded)

Purpose

Read and interpret archived regatta payloads saved by the PWA. The app stores archives in localStorage key 'regattaV2913PlanArchive' and optionally fetches a GitHub directory at
https://api.github.com/repos/q018292/regatta-planer/contents/_RoutenArchiv?ref=main

Operations

- listLocalArchives() -> reads localStorage ARCHIVE key
- fetchGithubArchive() -> GET the API above (note: CORS and rate limits)
- parse archived payloads using the same regatta-data schema

# Skill: excel-import-export (grounded)

Purpose

The PWA already uses SheetJS (XLSX) to import/export regatta data. This skill maps XLSX worksheets to the canonical regatta-data schema.

Runtime entrypoints

- readXlsx(file) — present in index.html and uses XLSX.read to parse uploaded .xlsx data
- The imported rows feed into parseRakken(rows) which produces routes

Implementation notes

- Reuse readXlsx(file) behavior where possible (or call it via an automated browser integration). Map sheet names expected by the app (e.g., "Startrakken") to the regatta-data model.

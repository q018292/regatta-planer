Fix v16: Importierte Rakken werden strikt gerichtet behandelt.

Geändert:
- RouteID ist jetzt Start|Eind, nicht mehr alphabetisch/ungerichtet.
- Vorschläge zeigen nur Routen aus der ersten Spalte zur zweiten Spalte.
- Gegenrichtungen werden nicht mehr angeboten.
- Alte lokale App-Stände werden mit neuer STATE-Version ignoriert.
- sw.js leert alte Caches, damit die PWA nicht die alte Version aus dem Cache lädt.

Teste nach Deploy bitte mit hartem Refresh oder PWA neu öffnen.

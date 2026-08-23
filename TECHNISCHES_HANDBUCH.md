# Technisches Handbuch RegattaPlaner v30.0.0

## 1. Zweck und Geltungsbereich

Aktueller Programmstand: `v30.0.56`.

Dieses Handbuch beschreibt die gebündelte Release-Version im Verzeichnis `v30.0.0`. Die Anwendung ist eine browserbasierte PWA für die Planung und Begleitung einer 24-Stunden-Regatta.

Der aktuelle Stand ist eine stabilisierte Ein-Datei-Anwendung. `v30.0.0` bezeichnet die Release-Struktur und nicht bereits eine vollständig in Module aufgeteilte Codebasis. Die laufende Programmversion innerhalb dieses Releases ist aktuell `v30.0.56`.

## 2. Verzeichnisstruktur

```text
v30.0.0/
  index.html
  manifest.webmanifest
  sw.js
  icons/
    icon.svg
  CHANGELOG.md
  CHANGELOG_v29.1.5.md
  TECHNISCHES_HANDBUCH.md
  github-uploader.html
```

`index.html` enthält HTML, CSS, Beispieldaten, Kernlogik und nachgelagerte Runtime-Erweiterungen. `manifest.webmanifest` beschreibt die installierbare PWA. `sw.js` verwaltet den App-Shell-Cache.
  - Die Routensimulation verwendet standardmäßig 120 Sekunden pro Simulationsschritt.
  - GPS-Regattasteuerung steht als erste Gruppe unter `App`; nur die GPS-Simulation und `Routen-Simulation` stehen unter `App-Test`.
  - Die Routensimulations-Start-/Stopp-Steuerung bleibt unter `App` verfügbar.
  - Simulationsgruppen nutzen transparente Statusflächen mit grünen An/Aus-Schaltern nach dem GPS-Muster.
  - Die Importgruppe wird unter `App` als `Import` angezeigt; der Reset-Button ist optisch dem Update-Button angeglichen.
## 3a. GitHub-Uploader

Der Tabellenimport bietet die Quellen `Lokale Dateien` und `GitHub`. Für GitHub werden `rakken_11-08-2026.xlsx` und `boeien_11-08-2026.xlsx` aus dem Root des Repositories `q018292/regatta-planer` verwendet. Die Dateinamen werden vor dem Import angezeigt.

`github-uploader.html` ist ein lokales Upload-Werkzeug für das Repository `q018292/regatta-planer`. Nach Auswahl des Release-Ordners werden die fünf benötigten Dateien mit einem Klick über die GitHub-Contents-API hochgeladen. Der GitHub-Token wird nicht gespeichert und bleibt nach dem Schließen der Seite verworfen.

Voraussetzungen:

- Fine-grained GitHub-Token mit `Contents: Read and write` für das Zielrepository.
- Schreibzugriff auf den gewählten Branch, standardmäßig `main`.
- Der Ordner muss `index.html`, `layout.css`, `manifest.webmanifest`, `sw.js` und `icons/icon.svg` enthalten.

Der URL-Parameter `?v=...` ändert keine Dateien. Nach dem Upload muss die GitHub-Pages-Bereitstellung abgeschlossen sein; anschließend den App-Aktualisieren-Button verwenden.

## 3. Laufzeitarchitektur

Die Anwendung arbeitet ohne Build-System:

1. Der Browser lädt `index.html`.
2. Leaflet, SheetJS und die Kartenkacheln werden bei bestehender Netzwerkverbindung geladen.
3. Die Kernlogik erzeugt aus Routen- und Bojendaten den Plan.
4. Nachgelagerte Runtime-Blöcke ergänzen GPS, Logbuch, Simulation, ETA, Benachrichtigungen, Archiv und FINISH-Verhalten.
5. Der letzte Planstand wird im `localStorage` gespeichert.
6. Der Service Worker cached die lokale App-Shell.

Die Erweiterungen verwenden teilweise historische Funktions- und Schlüsselbezeichnungen. Bei Änderungen muss deshalb geprüft werden, ob eine Funktion später im Dokument erneut überschrieben wird.

## 4. Zentrale Datenstrukturen

Die Kernlogik verwendet unter anderem:


Die Sonderroute `WV19|FINISH` wird bei Bedarf automatisch ergänzt. FINISH darf ausschließlich von WV19 und nur einmal geplant werden.

## 5. Persistenz

Die Anwendung nutzt browserlokales `localStorage`. Wichtige Schlüssel sind unter anderem:


Beim Zurücksetzen werden RegattaPlaner-Schlüssel mit dem Präfix `regatta` entfernt. Browserdaten außerhalb dieses Präfixes bleiben erhalten.

## 6. GPS-Lifecycle

Der GPS-Ablauf besteht aus:

1. `startGpsWatch()` fordert die Browserberechtigung an.
2. `navigator.geolocation.watchPosition()` liefert Positionen.
3. `updateGpsInfo()` aktualisiert Status, Geschwindigkeit, Distanz, Peilung und Karte.
4. Das Logbuch filtert Trackpunkte nach Mindestabstand, Mindestzeit, Kursänderung und Heartbeat.
5. `stopGpsWatch()` beendet den Watch und gibt den Wake Lock frei.

Die Stabilitäts-Runtime verhindert einen zweiten GPS-Watch, wenn bereits einer aktiv ist. GPS-Berechtigungen werden vom Browser und Betriebssystem verwaltet und können nicht durch die Anwendung erzwungen werden.

## 7. Import und Export

### XLSX-Import

Der Import erwartet zwei Dateien:


SheetJS liest jeweils das erste Tabellenblatt. Routen werden über `start|end` identifiziert. Bojen werden anhand der bekannten Typen `Startboei`, `Markeerboei` und `Finishboei` erkannt.

### JSON-Backup

Der JSON-Export enthält den aktuellen Importbestand, Startdaten, Planzeilen, Nachtmodus und Spalteneinstellungen. Vor einem größeren Import sollte immer ein Backup exportiert werden.

### GPS-Export

Das GPS-Logbuch kann als CSV und GPX exportiert werden. Die GPX-Datei enthält Trackpunkte und erkannte Bojenrundungen.

## 8. PWA und Cache

`manifest.webmanifest` definiert Name, Startseite, Darstellung und Icon.

`sw.js` verwendet den Cache-Namen `regatta-planer-v30-0-56`. Beim Aktivieren werden ältere Caches entfernt. Die lokale App-Shell besteht aus:


Der Service Worker funktioniert nur in einem sicheren Kontext, typischerweise über HTTPS oder `localhost`. Das direkte Öffnen über `file://` aktiviert keine zuverlässige PWA-Funktion.

Nach Änderungen am Service Worker muss die Versionskonstante `CACHE_NAME` geändert werden. Zusätzlich sollte der alte Service Worker im Browser kontrolliert beendet werden.

## 9. Update-, ETA- und Sperrlogik ab v30.0.44

- ETA wird über getrennte Stunden- und Minuten-Dropdowns im Format `HH:MM` geändert; die Änderung berechnet den betroffenen Speed zurück und aktualisiert Folge-ETAs.
- Planzeilen besitzen eine sichtbare Löschaktion. Beim Löschen werden nachfolgende Schläge nach vorne verschoben.
- Die Karte zeigt Bojen einmalig sowie alle möglichen Routen als dünne Linien. Der Routenlayer kann über `routeOverlayToggle` geschaltet werden.
- Die Planansicht zeigt letzte Boje oder aktuelle GPS-Position mit einem kleinen Segelboot-Symbol.
- Die Karte zeigt das Segelboot an der GPS-/Simulationsposition oder ohne Positionssignal an der letzten geplanten Boje.
- Planzeilen nach FINISH werden ausgeblendet; die FINISH-Zeile bleibt sichtbar.
- GPS-Regattasteuerung steht ganz oben unter `App`; GPS-Simulation und `Routen-Simulation` stehen gemeinsam unter `App-Test`.
- Die Routensimulation verwendet standardmäßig 120 Sekunden pro Simulationsschritt.
- Die Routensimulations-Start-/Stopp-Steuerung steht unter `App`.
- Simulationsschalter sind grün; Detail- und Statusbereiche bleiben transparent und folgen dem GPS-Layout.
- Die GPS-Regattasteuerung liegt separat unter `App`; `App-Test` enthält ausschließlich die GPS- und Routensimulation.
- Die Routensimulation wird dort als `Routen-Simulation` angezeigt und verwendet dieselbe kompakte Statusdarstellung wie GPS.


## 10. Wartung und Änderungsregeln

Bei Änderungen an `index.html`:

1. Zuerst die zuständige Funktion suchen.
2. Prüfen, ob sie später erneut definiert oder überschrieben wird.
3. Keine neuen parallelen Timer oder globalen Patch-Funktionen hinzufügen, wenn eine bestehende Funktion erweitert werden kann.
4. Änderungen an `localStorage`-Schlüsseln dokumentieren.
5. JSON-Importe mit fehlerhaften und unvollständigen Daten testen.
6. Nach jeder Änderung die Inline-JavaScript-Syntax prüfen.
7. Danach mindestens Start, Reload, Import, GPS-Simulation und Reset testen.

Bei neuen Versionen:


## 11. Bekannte technische Risiken


## 12. Empfohlene nächste Entwicklungsstufe

Für eine echte langfristige v30-Architektur sollten folgende Bereiche in Module ausgelagert werden:


Bis dahin sollte `index.html` als kontrollierte Release-Datei behandelt und nur gezielt geändert werden.

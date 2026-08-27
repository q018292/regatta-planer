# RegattaPlaner v31.0.0

## v31.0.0 - 2026-08-26

### Anpassung

- Hauptversion auf `v31.0.0` angehoben; Funktionsumfang entspricht `v30.7.0`.
- Service-Worker-Cache auf `regatta-planer-v31-0-0` erhöht.

## v30.7.0 - 2026-08-26

### Anforderung

- Die Ansicht „Hilfe“ ist neu aufgebaut und enthält ein gegliedertes Anwenderhandbuch zu allen Ansichten, Schaltflächen und Funktionen.
- Kurzinfo hinter „Manuell speichern“ und beim Feld „Speicherstatus“ ergänzt.
- Service-Worker-Cache auf `regatta-planer-v30-7-0` erhöht.

### Fix

- Der Menüpunkt „Hilfe“ führte bisher auf eine leere Seite, weil die Ansicht fehlte.

## v30.6.1 - 2026-08-26

### Fix

- Das Feld „Erkennungsradius“ nutzt jetzt dieselbe Darstellung wie die GPS-Statusfelder.
- Service-Worker-Cache auf `regatta-planer-v30-6-1` erhöht.

## v30.6.0 - 2026-08-26

### Anforderung

- Im GPS-Untermenü schaltet ein Schalter die automatische Bojenerkennung ein oder aus.
- Der Erkennungsradius in NM ist dort frei eingebbar und wird gespeichert.
- Die Regatta-Ansicht zeigt den Status der Bojenerkennung mit Zielboje und Abstand.
- Die Erkennung arbeitet unabhängig vom Logbuch.
- Service-Worker-Cache auf `regatta-planer-v30-6-0` erhöht.

## v30.5.0 - 2026-08-26

### Anpassung

- Die Infozeile flackert nicht mehr; alle Laufzeitblöcke schreiben denselben Text.
- Das Menü „App aktualisieren“ zeigt dauerhaft die aktuelle Programmversion.
- Fehlerhafte Service-Worker-Anweisung entfernt, die einen Seitenfehler auslöste.
- Service-Worker-Cache auf `regatta-planer-v30-5-0` erhöht.

## v30.4.0 - 2026-08-24

### Anpassung

- Logbuch ist beim App-Start ausgeschaltet und lässt sich nur nach Sicherheitswarnung aktivieren.
- Logbuch bleibt als Untermenü unter „App-Test“ eingeordnet.
- Kartenzoom verwendet feinere Zoomstufen von 0,5.
- Service-Worker-Cache auf `regatta-planer-v30-4-0` erhöht.

## v30.3.3 - 2026-08-24

### Fix

- „Route“ und „verfügbare Routen“ werden unabhängig voneinander ein- und ausgeblendet.
- Service-Worker-Cache auf `regatta-planer-v30-3-3` erhöht.

## v30.3.2 - 2026-08-24

### Fix

- Versionsanzeige und App-Aktualisierung verwenden jetzt konsistent `v30.3.2`.
- Service-Worker-Cache auf `regatta-planer-v30-3-2` erhöht.

## v30.3.1 - 2026-08-24

### Fix

- Routensimulation verwendet nur noch ein Segelschiff an der aktuellen Position.
- „Route“ und „verfügbare Routen“ werden bidirektional synchronisiert.
- Service-Worker-Cache auf `regatta-planer-v30-3-1` erhöht.

## v30.3.0 - 2026-08-24

### Fix

- GPS- und GPS-Simulationsposition werden wieder als kleines Segelschiff auf der Karte dargestellt.
- GPS, GPS-Simulation und Routensimulation können nicht mehr gleichzeitig aktiviert werden; beim Wechsel wird nachgefragt.
- Service-Worker-Cache auf `regatta-planer-v30-3-0` erhöht.

## v30.2.2 - 2026-08-24

### Fix

- Verfügbare Routen werden beim Öffnen der Karte automatisch gezeichnet.
- Der Schalter „Route“ aktiviert und aktualisiert die Ebene verfügbarer Routen.
- Service-Worker-Cache auf `regatta-planer-v30-2-2` erhöht.

## v30.2.1 - 2026-08-24

### Fix

- Verfügbare Routen werden beim Öffnen der Karte in einer eigenen Leaflet-Ebene gezeichnet.
- Der Schalter „Verfügbare Routen“ steuert diese Ebene direkt.
- Service-Worker-Cache auf `regatta-planer-v30-2-1` erhöht.

## v30.2.0 - 2026-08-24

### Anpassung

- XLSX-Import kann zwischen lokalen Dateien und GitHub online wählen.
- Import ist als eigenes Untermenü im Bereich „App“ bei „Tool zurücksetzen“ eingeordnet.
- Die mobile Importoberfläche verwendet ein responsives Layout.

## v30.1.16 - 2026-08-24

### Fix

- ETA-Felder verwenden auf Mobilgeräten die native Zeitauswahl (`type=time`).
- Manuelle ETA-Änderungen bleiben mit der Rückrechnung des Speed-Wertes gekoppelt.
- Service-Worker-Cache auf `regatta-planer-v30-1-16` erhöht.

## v30.1.15 - 2026-08-24

### Fix

- ETA-Eingabefelder im Plan sichtbar gemacht; die historische CSS-Ausblendung wird gezielt überschrieben.
- Die bestehende Speed-/ETA-Abhängigkeit bleibt unverändert aktiv.
- Service-Worker-Cache auf `regatta-planer-v30-1-15` erhöht.

## v30.1.14 - 2026-08-24

### Fix

- ETA-Eingaben bleiben nach jeder Plan- und Speed-Berechnung sichtbar.
- Die bestehende Abhängigkeit zwischen Speed, ETA und Folge-ETAs bleibt erhalten.
- Service-Worker-Cache auf `regatta-planer-v30-1-14` erhöht.

## v30.1.13 - 2026-08-24

### Fix

- Historische Untermenü-Vorschautitel per CSS dauerhaft ausgeblendet.
- Service-Worker-Cache auf `regatta-planer-v30-1-13` erhöht.

## v30.1.12 - 2026-08-24

### Fix

- Automatische Aktualisierung vollständig aus dem Startablauf entfernt.
- Untermenü-Titel werden nach dem Aufbau einmalig bereinigt und nicht mehr dauerhaft überwacht.
- Service-Worker-Cache auf `regatta-planer-v30-1-12` erhöht.

## v30.1.11 - 2026-08-24

### Fix

- Automatische Update-Navigation beim App-Start deaktiviert.
- Aktualisierung erfolgt ausschließlich über den manuellen Button, damit keine laufenden UI-Neuaufbauten und kein Flackern entstehen.
- Service-Worker-Cache auf `regatta-planer-v30-1-11` erhöht.

## v30.1.10 - 2026-08-24

### Fix

- Periodischen Komplett-Refresh der Oberfläche entfernt, der alle 1,2 Sekunden Tabellen-, Karten- und Settings-Elemente neu bearbeitete.
- Aktualisierungen bleiben ereignisbezogen; dadurch wird das Flackern im Browser reduziert.
- Service-Worker-Cache auf `regatta-planer-v30-1-10` erhöht.

## v30.1.9 - 2026-08-24

### Fix

- Historische v30.0.52- und v30.1.x-Versionsschreiber aus dem aktiven Runtime-Code entfernt.
- Verhindert, dass GitHub Pages nach dem Laden wieder eine alte sichtbare Programmversion anzeigt.
- Service-Worker-Cache auf `regatta-planer-v30-1-9` erhöht.

## v30.1.8 - 2026-08-24

### Fix

- Neue stabile Programmversion auf Basis des geprüften v30.1.5-Stands erstellt.
- Versionsabgleich idempotent ausgeführt; keine globale `MutationObserver`-Schleife und kein zusätzlicher 250-ms-Dauer-Guard.
- Service-Worker-Cache auf `regatta-planer-v30-1-8` erhöht.
- Die defekte, vermischte v30.1.6/v30.1.7-Version wird nicht als Grundlage verwendet.

## v30.1.5 - 2026-08-24

### Fix

- Aktualisierung verwendet im Reload-Link jetzt die aktuelle Programmversion statt des alten v29.1.4-Werts.
- Sichtbare Versionsanzeige, Service-Worker-Cache und Asset-Cache-Buster auf v30.1.5 vereinheitlicht.
- Zeichencodierung der aktiven Anwendung korrigiert, damit Umlaute und Symbole wieder lesbar sind.
- Alte mobile Fixed-Navigation überschrieben, damit sie nicht mehr über dem Inhalt flackert oder diesen verdeckt.
- Vorhandenes Backup der v30.1.4 geprüft unter `Archiv/v30.1.4_2026-08-24_07-18-38`.

## v30.1.4 - 2026-08-23

### Fix

- Aktualisierung verwendet keine `document.write`-Neuladung mehr und verhindert damit doppelte globale Skriptdeklarationen.
- Service-Worker-Cache auf `regatta-planer-v30-1-4` erhöht.

## v30.1.3 - 2026-08-23

### Fix

- Aktualisieren lädt die aktuelle `index.html` mit Cache-Buster direkt und ersetzt das bestehende Dokument erst nach erfolgreicher Versionsprüfung.
- Service-Worker-Cache auf `regatta-planer-v30-1-3` erhöht.

## v30.1.2 - 2026-08-23

### Fix

- Aktualisieren registriert einen versionierten Service-Worker-Pfad, damit ein alter kontrollierender Worker sicher abgelöst wird.
- Service-Worker-Cache auf `regatta-planer-v30-1-2` erhöht.

## v30.1.1 - 2026-08-23

### Fix

- App-Einstieg und Service Worker werden bei vorhandener Verbindung netzwerkbasiert geladen, damit eine alte `index.html` nicht dauerhaft aus dem Cache kommt.
- Service-Worker-Cache auf `regatta-planer-v30-1-1` erhöht.

## v30.1.0 - 2026-08-23

### Anpassung

- Versionsschema dokumentiert und auf den neuen Anforderungsstand angewendet.
- Mittlere Versionszahl markiert die Umsetzung neuer Anforderungen; die letzte Zahl bleibt für Fixes reserviert.
- Service-Worker-Cache auf `regatta-planer-v30-1-0` erhöht.

## v30.0.59 - 2026-08-23

### Anpassung

- `App zurücksetzen` als Eintrag im App-Menü unterhalb von `Import` angeordnet, nicht innerhalb des Import-Menüs.
- Trennkante zwischen `App aktualisieren` und `Import` entfernt.
- Service-Worker-Cache auf `regatta-planer-v30-0-59` erhöht.

## v30.0.58 - 2026-08-23

### Anpassung

- Untermenü-Texte aus den Menüreitern entfernt.
- Service-Worker-Cache auf `regatta-planer-v30-0-58` erhöht.

## v30.0.57 - 2026-08-23

### Anpassung

- App-Aktualisierung meldet alte Service Worker vor dem Cache-Löschen ab und verwendet den aktuellen Versionsparameter.
- Versionsanzeige im Untermenü `App aktualisieren` bleibt bei v30.0.57 und wird nicht mehr von älteren Runtime-Schichten überschrieben.
- Service-Worker-Cache auf `regatta-planer-v30-0-57` erhöht.

## v30.0.56 - 2026-08-23

### Anpassung

- Untermenü-Vorschauzeilen unter den Menütiteln zurückgenommen.
- Service-Worker-Cache auf `regatta-planer-v30-0-56` erhöht.
- Der Uploader prüft die ausgewählte Version beim Klick auf `Aktualisieren` erneut.

## v30.0.55 - 2026-08-23

### Anpassungen

- `App zurücksetzen` unter das Untermenü `Import` verschoben.
- Trennlinie am GPS-Untermenü entfernt.
- Untermenü-Titel werden als kleine Vorschauzeile unter den Menütiteln angezeigt.
- Service-Worker-Cache auf `regatta-planer-v30-0-55` erhöht.

## v30.0.54 - 2026-08-23

### Anpassungen

- Untermenü `Routen-Simulation`: Hinweistext auf genau einen klaren Infotext reduziert.
- Navigationssymbol für `Info` von Diagramm auf kleine Boje (`🛟`) geändert.
- Service-Worker-Cache auf `regatta-planer-v30-0-54` erhöht.

## v30.0.53 - 2026-08-23

### Anpassungen

- Kartenansicht: roter GPS-Punkt unter dem Segelboot entfernt; Legende auf Segelboot-Position angepasst.
- Kartenansicht: neuer Schalter `Verfügbare Routen` ergänzt, um die dünnen Routenlinien ein- und auszublenden.
- Einstellungen: `App zurücksetzen` unter das Untermenü `Import` einsortiert.
- Einstellungen: doppelten Info-Text im Untermenü `Routen-Simulation` bereinigt.
- Kartenansicht: Simulationssteuerung (`Route simulieren` / `Simulation stoppen`) wieder in der Karte verankert.
- Service-Worker-Cache auf `regatta-planer-v30-0-53` erhöht.

## v30.0.52 - 2026-08-22

### Fehlerbehebung

- DOM-Guard für `insertBefore` ergänzt, damit der Legacy-Importpfad keinen `NotFoundError` mehr auslöst.
- Versionstitel, Badge, Release-Hinweis und Programmanzeige auf `v30.0.52` vereinheitlicht.
- Legacy-Import-UI aus den alten Runtime-Blöcken wird nachgelagert entfernt, damit nur die reparierte Importansicht aktiv bleibt.
- Service-Worker-Cache auf `regatta-planer-v30-0-52` erhöht.

## v30.0.51 - 2026-08-22

### Fehlerbehebung

- Importoberfläche ohne fehlerhafte DOM-Einfügeanker neu initialisiert.
- Lokale Dateiauswahl wird bei `Lokale Dateien` sichtbar angezeigt.
- GitHub-Import zeigt die Tabellen-Dateinamen vor dem Import.
- Service-Worker-Cache auf `regatta-planer-v30-0-51` erhöht.

## v30.0.50 - 2026-08-22

### Import

- Lokale Rakken-/Bojen-Dateiauswahl wird bei Auswahl `Lokale Dateien` sichtbar eingeblendet.
- Bei Auswahl `GitHub` werden die lokalen Felder ausgeblendet; die Dateinamen-Vorschau bleibt aktiv.
- Service-Worker-Cache auf `regatta-planer-v30-0-50` erhöht.
- Vorabarchiv angelegt unter `Archiv/v30.0.49_2026-08-22_23-30-00`.

## v30.0.49 - 2026-08-22

### Import

- DOM-Fehler beim Initialisieren der Importauswahl behoben.
- Lokaler/GitHub-Import und Verschieben der automatischen Aktualisierung laufen auch nach der historischen Setup-Umordnung weiter.
- Service-Worker-Cache auf `regatta-planer-v30-0-49` erhöht.
- Vorabarchiv angelegt unter `Archiv/v30.0.48_2026-08-22_23-00-00`.

## v30.0.48 - 2026-08-22

### Import

- Automatische Aktualisierung in das Untermenü `App aktualisieren` verschoben.
- Importquelle `Lokal` oder `GitHub` ergänzt.
- GitHub-Import nutzt `q018292/regatta-planer` im Branch `main` mit `rakken_11-08-2026.xlsx` und `boeien_11-08-2026.xlsx`.
- Dateinamen werden vor dem Import angezeigt.
- Service-Worker-Cache auf `regatta-planer-v30-0-48` erhöht.
- Vorabarchiv angelegt unter `Archiv/v30.0.47_2026-08-22_22-00-00`.

## v30.0.47 - 2026-08-22

### App-Einstellungen

- Spätere transparente CSS-Regel für das Untermenü `App aktualisieren` überschrieben.
- Update-Untermenü erhält wieder eine klar sichtbare Einstellungsfläche.
- Service-Worker-Cache auf `regatta-planer-v30-0-47` erhöht.
- Vorabarchiv angelegt unter `Archiv/v30.0.46_2026-08-22_21-00-00`.

## v30.0.46 - 2026-08-22

### App-Einstellungen

- Untermenü `App aktualisieren` erhält eine sichtbare Karten-/Menüfläche statt transparenter Darstellung.
- Redundante Überschrift `App` über dem Update-Untermenü wird entfernt.
- `App zurücksetzen` verwendet dieselben Maße, Schrift, Rundungen und grüne Farbe wie `App aktualisieren`.
- Service-Worker-Cache auf `regatta-planer-v30-0-46` erhöht.
- Vorabarchiv angelegt unter `Archiv/v30.0.45_2026-08-22_20-30-00`.

## v30.0.45 - 2026-08-22

### App-Einstellungen

- `App aktualisieren` in ein eigenes Untermenü innerhalb von `App` verschoben.
- `Tool zurücksetzen` in `App zurücksetzen` umbenannt und optisch an `App aktualisieren` angeglichen.
- Service-Worker-Cache auf `regatta-planer-v30-0-45` erhöht.

## v30.0.44 - 2026-08-22

### Fehlerbehebung

- Mehrere konkurrierende Setup-Verschiebungen werden durch eine letzte Normalisierung übersteuert.
- GPS-Regattasteuerung bleibt unter `App`; GPS-Simulation und `Routen-Simulation` stehen unter `App-Test`.
- `Import` bleibt unter `App`; Routensimulationssteuerung bleibt unter `App`.
- Service-Worker-Cache auf `regatta-planer-v30-0-44` erhöht.

## v30.0.43 - 2026-08-22

### Setup

- GPS bleibt als eigene Gruppe unter `App`.
- `Import` wird unter `App` eingeordnet.
- GPS-Simulation und `Routen-Simulation` werden ausschließlich unter `App-Test` geführt.
- Routensimulationssteuerung bleibt unter `App`.
- Service-Worker-Cache auf `regatta-planer-v30-0-43` erhöht.

## v30.0.42 - 2026-08-22

### App-Einstellungen

- `Import und Datensicherung` heißt jetzt `Import` und wird unter `App` angezeigt.
- `Tool zurücksetzen` verwendet dieselbe grüne Buttondarstellung wie `App aktualisieren`.
- Service-Worker-Cache auf `regatta-planer-v30-0-42` erhöht.

## v30.0.41 - 2026-08-22

### Setup

- GPS-Regattasteuerung steht separat ganz oben unter `App`.
- GPS-Simulation und `Routen-Simulation` liegen unter `App-Test`.
- Die Routensimulations-Start-/Stopp-Steuerung steht unter `App`.
- Simulationsschalter und Statusflächen optisch an das GPS-Panel angeglichen.
- Service-Worker-Cache auf `regatta-planer-v30-0-41` erhöht.

## v30.0.40 - 2026-08-22

### Setup

- GPS-Regattasteuerung wird als erste Gruppe unter `App` angezeigt.
- GPS-Simulation und `Routen-Simulation` werden gemeinsam unter `App-Test` angezeigt.
- Routensimulations-Start-/Stopp-Steuerung bleibt im Bereich `App`.
- Simulationsgruppen verwenden transparente Statusflächen und grüne Hauptschalter nach dem GPS-Muster.
- Service-Worker-Cache auf `regatta-planer-v30-0-40` erhöht.

## v30.0.39 - 2026-08-22

### Setup

- GPS-Regattasteuerung aus der Testgruppe herausgelöst und als eigene `GPS`-Gruppe unter `App` eingeordnet.
- `App-Test` enthält ausschließlich GPS-Simulation, Routensimulation und deren Steuerung.
- Routensimulation in `Routen-Simulation` umbenannt.
- Einheitliche Statusflächen für GPS und Simulation ergänzt.
- Service-Worker-Cache auf `regatta-planer-v30-0-39` erhöht.

## v30.0.38 - 2026-08-22

### Setup

- GPS-Simulation und Routensimulation über die tatsächlich aktiven Runtime-Gruppen in `App-Test` verschoben.
- `App-Test` wird direkt nach `App` eingefügt und enthält auch die Routensimulationssteuerung.
- Service-Worker-Cache auf `regatta-planer-v30-0-38` erhöht.

## v30.0.37 - 2026-08-22

### Karte und App-Test

- GPS- und Routensimulation in den gemeinsamen Bereich `App-Test` verschoben.
- Standardwert für den Routensimulationsschritt auf 120 Sekunden gesetzt.
- Doppelte Simulationsmarker und alte Routenlinien werden vor der aktiven Kartenanzeige bereinigt.
- Ein Segelbootmarker folgt GPS oder Simulation auf der Karte.

## v30.0.37 - 2026-08-22

### Karte und App-Test

- GPS-Simulation und Routensimulation in den gemeinsamen Setup-Bereich `App-Test` verschoben.
- Standardschritt der Routensimulation auf 120 Sekunden gesetzt.
- Doppelte Simulationsboote und alte Routenlinien vor dem aktiven Kartenlayer entfernt.
- Ein Kartenboot zeigt GPS-, Simulations- oder letzte geplante Position.
- Service-Worker-Cache auf `regatta-planer-v30-0-37` erhöht.

## v30.0.36 - 2026-08-22

### Karte und Plan

- Kleines Segelboot zeigt auf der Karte die aktuelle GPS-/Simulationsposition oder ohne GPS die letzte geplante Boje.
- Planzeilen nach der FINISH-Zeile werden ausgeblendet; FINISH bleibt als letzte sichtbare Zeile erhalten.
- Service-Worker-Cache auf `regatta-planer-v30-0-36` erhöht.
- Vorabarchiv angelegt unter `Archiv/v30.0.35_2026-08-22_15-30-00`.

## v30.0.35 - 2026-08-22

### Fehlerbehebung

- Plan-Löschbuttons bleiben trotz Spaltenfilterung sichtbar.
- Service-Worker-Cache auf `regatta-planer-v30-0-35` erhöht.

## v30.0.34 - 2026-08-22

### Oberfläche und Bedienung

- Versionshinweis, Versionsbadge und Updateanzeige konsolidiert.
- ETA-Bearbeitung um Stunden- und Minuten-Dropdowns ergänzt.
- Schläge können im Plan gelöscht werden; nachfolgende Schläge rücken nach.
- Erste Planzeile und FINISH-Zeile farblich hervorgehoben.
- Doppelte Kartenmarker bereinigt und alle möglichen Routen mit dünnen Linien sowie Schalter ergänzt.
- Planansicht zeigt letzte Boje beziehungsweise aktuelle GPS-Position mit kleinem Segelboot.
- Service-Worker-Cache auf `regatta-planer-v30-0-34` erhöht.

## v30.0.33 - 2026-08-22

### Fehlerbehebung

- Alte Anzeige-Runtime auf die aktuelle Versionskonstante synchronisiert.
- Versionsbadge, Release-Hinweis und Updatepfad zeigen jetzt denselben Stand.
- Service-Worker-Cache auf `regatta-planer-v30-0-33` erhöht.

## v30.0.32 - 2026-08-22

### Fehlerbehebung

- Die aktive v29.0.5e-ETA-Engine lädt ihren Speicher vor jeder Berechnung neu.
- Bestätigte ETA-Werte bleiben dadurch nach nachfolgenden Legacy-Render-Aufrufen erhalten.
- Service-Worker-Cache auf `regatta-planer-v30-0-32` erhöht.

## Uploader 1.0.0 - 2026-08-22

### Werkzeug

- `github-uploader.html` ergänzt: One-Click-Upload der fünf benötigten PWA-Dateien über die GitHub-Contents-API.
- Bestehende Dateien werden mit ihrer aktuellen SHA aktualisiert; der Token wird nicht gespeichert.

## v30.0.31 - 2026-08-22

### Fehlerbehebung

- ETA-Änderungen werden vor den historischen Change-Handlern abgefangen.
- ETA- und Speed-Rückrechnung verwenden eine gemeinsame Logik und synchronisieren beide bestehenden ETA-Speicher.
- Service-Worker-Cache auf `regatta-planer-v30-0-31` erhöht.
- Vorabarchiv angelegt unter `Archiv/v30.0.30_2026-08-22_10-25-00`.
- Die aktive v29.0.5e-ETA-Engine erzeugt nun das feste deutsche `HH:MM`-Feld und berechnet beim Bestätigen den Speed der geänderten Zeile zurück.

## v30.0.30 - 2026-08-22

### Fehlerbehebung

- ETA-Änderungen rufen die Speed-Rückrechnung jetzt direkt aus dem ursprünglichen ETA-Editor auf.
- Uhrzeitformatierung wird als deutsches 24-Stunden-Format mit zweistelligen Stunden und Minuten erzwungen.
- Service-Worker-Cache auf `regatta-planer-v30-0-30` erhöht.
- Vorabarchiv angelegt unter `Archiv/v30.0.29_2026-08-22_10-02-00`.

## v30.0.29 - 2026-08-22

### Oberfläche

- ETA-Uhrzeitfelder verwenden wieder ein festes deutsches 24-Stunden-Format `HH:MM`, unabhängig von der Browser-Region.
- Service-Worker-Cache auf `regatta-planer-v30-0-29` erhöht.
- Vorabarchiv angelegt unter `Archiv/v30.0.28_2026-08-22_09-55-00`.

## v30.0.28 - 2026-08-22

### Oberfläche

- ETA-zu-Speed-Rückrechnung am ETA-Feld zusätzlich über einen direkten Change-Handler stabilisiert.
- ETA-Bestätigung berechnet den Speed der betroffenen Zeile robust neu und stößt die Folge-Neuberechnung erneut an.
- Runtime-ID, sichtbare Versionshinweise und In-App-News auf `v30.0.28` aktualisiert.
- Service-Worker-Cache auf `regatta-planer-v30-0-28` erhöht.
- Vorabarchiv erstellt unter `Archiv/v30.0.27_2026-08-22_09-51-08`.

## v30.0.27 - 2026-08-22

### Oberfläche

- ETA-zu-Speed-Rückrechnung auf den aktiven `planState()`-Pfad umgestellt.
- ETA-Änderungen greifen dadurch wieder zuverlässig auf die korrekte Route der betroffenen Zeile.
- Folge-Neuberechnung bleibt aktiv und wurde im Live-Test erneut geprüft.
- Vorabarchiv erstellt unter `Archiv/v30.0.26_2026-08-22_09-47-07`.

## v30.0.26 - 2026-08-22

### Oberfläche

- ETA-/Speed-Kopplung in der aktiven ETA-Engine korrigiert.
- ETA-Änderung schreibt wieder kompatible ETA-Overrides mit Signatur und berechnet den erforderlichen Speed zurück.
- Speed-Änderung entfernt ETA-Overrides ab der betroffenen Zeile, damit folgende ETAs zuverlässig neu berechnet werden.
- Vorabarchiv erstellt unter `Archiv/v30.0.25_2026-08-22_09-36-11`.

## v30.0.25 - 2026-08-22

### Oberfläche

- Einheitlicher Updatepfad für `regattaRunAppUpdate` und `regattaForceAppUpdate` ergänzt.
- ETA-/Speed-Kopplung erweitert: ETA-Änderung berechnet den erforderlichen Speed der Zeile zurück.
- Bei Speed-Änderung wird der ETA-Override der Zeile entfernt und der Folgeplan neu berechnet.
- Gespeicherte und aus dem Archiv geladene Pläne werden automatisch schreibgeschützt.
- In-App-Handbuch auf `v30.0.25` aktualisiert.
- Service-Worker-Cache auf `regatta-planer-v30-0-25` erhöht.
- Vorabarchiv erstellt unter `Archiv/v30.0.24_2026-08-22_09-11-56`.

## v30.0.24 - 2026-08-22

### Oberfläche

- Reload des Apps-Updates verwendet die sichtbare aktuelle Versionsnummer und nicht mehr den historischen Versionswert `v29.1.4`.
- CSS-Cacheparameter auf `v30.0.24` aktualisiert, damit die mobile Ansicht die aktuelle `layout.css` lädt.
- Startbereich bleibt zweispaltig mit unveränderten Stunden- und Minuten-Dropdowns.
- Vorabarchiv erstellt unter `Archiv/v30.0.23_2026-08-22_08-38-50`.

## v30.0.23 - 2026-08-22

### Oberfläche

- Statische und dynamische News in der kurz eingeblendeten Titelzeile auf `v30.0.23` vereinheitlicht.
- Kurze Versions-News zur stabilisierten Update-Funktion ergänzt.
- Vorabarchiv erstellt unter `Archiv/v30.0.22_2026-08-22_08-28-57`.

## v30.0.22 - 2026-08-22

### Oberfläche

- Startzeit und Regatta-Ende direkt nebeneinander angeordnet.
- Start- und Zielfelder jeweils in zwei Feldern pro Zeile angeordnet.
- Startzeit-Dropdowns unverändert beibehalten.
- Alte interne Versionsquelle `APP_VERSION` mit der aktuellen Programmversion synchronisiert.
- Vorabarchiv erstellt unter `Archiv/v30.0.21_2026-08-22_07-33-45`.

## v30.0.21 - 2026-08-21

### Update

- `layout.css` in die Service-Worker-App-Shell aufgenommen.
- Manuelle und automatische Aktualisierung auf einen gemeinsamen überprüfbaren Ablauf umgestellt.
- Service-Worker-Updatefehler werden nicht mehr verschluckt.
- Automatische Aktualisierung wird erst nach erfolgreichem Ablauf als erledigt markiert.
- Vorabarchiv erstellt unter `Archiv/v30.0.20_2026-08-21_15-50-35`.

## v30.0.20 - 2026-08-21

### Oberfläche

- Startbereich wieder auf die vorherige zweispaltige Darstellung zurückgestellt.
- Schlagfelder im Bereich „Nächster Schlag“ wieder zweispaltig angeordnet.
- Alter oberer Planbereich bleibt entfernt; der untere Fixierbereich wird bei geplantem FINISH weiterhin angezeigt.
- Vorabarchiv erstellt unter `Archiv/v30.0.19_2026-08-21_15-36-54`.

## v30.0.19 - 2026-08-21

### Oberfläche

- Hinweis „Keine erlaubten nächsten Bojen verfügbar.“ einzeilig dargestellt.
- Doppelten oberen Plan-Info-Bereich entfernt; der Fixierbereich bleibt erhalten.
- Gespeicherte Pläne erhalten Dateinamen im Format `regatta-plan-YYYY-MM-DD_HH-mm.json`.
- Vorabarchiv erstellt unter `Archiv/v30.0.18_2026-08-21_15-31-54`.

## v30.0.18 - 2026-08-21

### Oberfläche

- Startfelder in `START | Startnummer 1/2` umbenannt.
- Zielfelder in `ZIEL | Startnummer 1/2` umbenannt.
- Feldnummern bleiben erhalten.
- Fehlerhafte Zwischenänderung im CSS-Block bereinigt.
- Vorabarchiv erstellt unter `Archiv/v30.0.17_2026-08-21_15-15-08`.

## v30.0.17 - 2026-08-21

### Oberfläche

- CSS-Konflikt mit der alten zweispaltigen Regatta-Grid-Regel behoben.
- „Nächster Schlag“ und „Zuletzt geplant“ stehen nun nachweislich untereinander.
- Layout-CSS erhält einen Versionsparameter gegen veraltete Browser-Caches.
- Vorabarchiv erstellt unter `Archiv/v30.0.15_2026-08-21_15-07-22`.

## v30.0.16 - 2026-08-21

### Oberfläche

- Ältere Grid-Regel für „Nächster Schlag“ und „Zuletzt geplant“ eindeutig überschrieben.
- Layout-CSS mit Versionsparameter geladen, damit alte Browser-Caches die Korrektur nicht verdecken.

## v30.0.15 - 2026-08-21

### Oberfläche

- Bereich „Zuletzt geplant“ wieder unter „Nächster Schlag“ angeordnet.
- Verlaufstabelle erhält eine eigene horizontale Scrollfläche und darf breiter als das Display sein.
- Oberer Regatta-Bereich für Mobiltelefone einspaltig und vollbreit optimiert.
- Vorabarchiv erstellt unter `Archiv/v30.0.14_2026-08-21_15-02-11`.

## v30.0.14 - 2026-08-21

### Oberfläche

- Tabellen- und Feldbreiten für Plan, Info, GPS-Logbuch und Einstellungen vereinheitlicht.
- Unleserliches Abschneiden durch Mindestbreiten und kontrolliertes horizontales Scrollen verhindert.
- Mobile Einstellungsgruppen auf einspaltige Darstellung angepasst.
- Vorabarchiv erstellt unter `Archiv/v30.0.13_2026-08-21_14-58-27`.

## v30.0.13 - 2026-08-21

### Struktur

- Zentralen `regattaOnReady`-Helfer eingeführt.
- Drei kleine UI-Runtime-Wrapper auf den gemeinsamen Helfer migriert.
- GPS-, Logbuch-, Simulations- und Archiv-Initialisierungen bewusst unverändert gelassen.
- Vorabarchiv erstellt unter `Archiv/v30.0.12_2026-08-21_14-51-58`.

## v30.0.12 - 2026-08-21

### Struktur

- Zwei kleine DOM-Initialisierungen für Nachtansicht und Startzeitmenüs zu einem gemeinsamen `regatta-ui-bootstrap` zusammengeführt.
- Vorabarchiv erstellt unter `Archiv/v30.0.11_2026-08-21_14-49-43`.

## v30.0.11 - 2026-08-21

### Struktur

- Responsive Layoutregeln aus `index.html` in die separate Datei `layout.css` ausgelagert.
- Keine Funktionslogik verändert.
- Vorabarchiv erstellt unter `Archiv/v30.0.10_2026-08-21_14-47-16`.

## v30.0.10 - 2026-08-21

### Oberfläche

- Zurückgenommene Startnummern-Anpassung entfernt; ursprüngliche Feldbezeichnungen und das ursprüngliche Vier-Spalten-Layout wiederhergestellt.
- Responsive und allgemeine Layoutverbesserungen aus `v30.0.9` beibehalten.
- Vorabarchiv erstellt unter `Archiv/v30.0.9_2026-08-21_14-42-09`.

## v30.0.9 - 2026-08-21

### Oberfläche

- Einheitliche Abstände, Feldhöhen, Buttongrößen und Karten für die verschiedenen Ansichten ergänzt.
- Kartenansicht mit geordneten GPS-Status-, Steuerungs- und Legendenbereichen aufgeräumt.
- Responsive Skalierung für Mobilgeräte sowie Tablet-Querformat ergänzt.
- Vorabarchiv erstellt unter `Archiv/v30.0.8_2026-08-21_14-36-13`.

## v30.0.8 - 2026-08-21

### Entwicklung

- Button „Nachtansicht“ in der Regatta-Ansicht platzsparend an den oberen Rand verschoben.
- Vorabarchiv erstellt unter `Archiv/v30.0.7_2026-08-21_14-28-50`.

## v30.0.7 - 2026-08-21

### Entwicklung

- Feldbezeichnungen auf `START | Startnummer 1/2` und `ZIEL | Startnummer 1/2` geändert.
- Start- und Zielfelder jeweils in einer eigenen Zweierzeile angeordnet.
- Vorabarchiv erstellt unter `Archiv/v30.0.6_2026-08-21_14-20-10`.

## v30.0.6 - 2026-08-21

### Entwicklung

- Stunden- und Minuten-Dropdown im Bereich „Start“ deutlich verkleinert und als einzeilige Zeit `22:00` gestaltet.
- Vorabarchiv erstellt unter `Archiv/v30.0.5_2026-08-21_14-16-07`.

## v30.0.5 - 2026-08-21

### Entwicklung

- Startzeit in der Regatta-Ansicht auf Auswahlmenüs für Stunde und Minute umgestellt.
- Interner Speicherwert bleibt im Format `HH:MM` erhalten.
- Vorabarchiv erstellt unter `Archiv/v30.0.4_2026-08-21_14-11-13`.

## v30.0.4 - 2026-08-21

### Entwicklung

- AM/PM-Darstellung des Startzeitfelds im integrierten Browser durch ein deutsches 24-Stunden-Feld `HH:MM` ersetzt.
- Service-Worker-Cache auf `v30.0.4` aktualisiert.
- Vorabarchiv erstellt unter `Archiv/v30.0.3_2026-08-21_13-07-55`.

## v30.0.3 - 2026-08-21

### Entwicklung

- Verbindlichen Ablauf für Archivierung, Prüfung und anschließende Erstellung neuer Versionen in den Repository-Anweisungen ergänzt.
- Aktuelle v30.0.2 vor dieser Änderung archiviert unter `Archiv/v30.0.2_2026-08-21_12-55-20`.
- Klargestellt, dass Archiv und neue Programmversion nur bei Änderungen an Programmdateien erforderlich sind.
- Deutsche Datums- und Zeitformatierung für GPS-Logzeiten eingeführt; vorhandene ISO-Zeitstempel bleiben lesbar.

## v30.0.2 - 2026-08-21

### Entwicklung

- Neue Version auf Basis der v30.0.1 erstellt.
- Programmversion in Titelzeile, Einstellungen und Service-Worker auf `v30.0.2` aktualisiert.
- Archivstruktur vor der Änderung bereinigt; die vollständige Ausgangssicherung liegt unter `Archiv/v30.0.1_2026-08-21_12-53-40`.

## v30.0.3 - 2026-08-21

### Entwicklung

- Archiv `v30.0.2_2026-08-21_12-45-24` geprüft und korrekt in `v30.0.1_2026-08-21_12-45-24` umbenannt, da es die Programmversion `v30.0.1` enthält.
- Das Archiv `v29.1.5_2026-08-21_12-39-11` enthält nach Prüfung weiterhin die Programmversion `v29.1.5`.

## v30.0.2 - 2026-08-21

### Entwicklung

- Archiv `v30.0.1_2026-08-21_12-39-11` anhand seines tatsächlichen Inhalts korrekt in `v29.1.5_2026-08-21_12-39-11` umbenannt.
- Archivierungsanweisungen um verbindliche Versionsprüfung und Namensabgleich ergänzt.

## v30.0.1 - 2026-08-21

### Entwicklung

- Verbindliche Archivierung aller Dateien vor Änderungen in versionierten Unterverzeichnissen des Verzeichnisses `Archiv` dokumentiert.
- Programmversion `v30.0.1` wird in der Titelzeile und dauerhaft in den Einstellungen angezeigt.
- Service-Worker-Cache auf `v30.0.1` angehoben.

## Einordnung

`v30.0.0` ist das neue, übersichtlich gebündelte Release-Verzeichnis. Die enthaltene Anwendung basiert funktional auf der stabilisierten v29.1.5-Codebasis. Die Verzeichnisversion dient zunächst der klaren Release-Struktur; eine vollständige modulare Neuentwicklung ist noch nicht enthalten.

## Änderungen

### Release-Struktur

- Aktive Anwendung, PWA-Dateien, Icon und Dokumentation in einem eigenen Verzeichnis zusammengeführt.
- Historische v29-Dateien und `_Archiv-L-MeJo` außerhalb des Releases belassen.
- Relative Pfade für Manifest, Service Worker und Icon auf die neue Verzeichnisstruktur abgestimmt.

### Stabilität

- Versionierter Service Worker mit App-Shell-Cache ergänzt.
- Lokales Manifest und lokales App-Icon ergänzt.
- GPS-Start gegen mehrfach aktive `watchPosition`-Watches abgesichert.
- Karten-, GPS- und Archiv-Patches erhalten synchronisierte Runtime-Zustände.
- Reset entfernt RegattaPlaner-Daten aus dem lokalen Speicher einschließlich alter Lock-, ETA-, Archiv- und GPS-Daten.

### Dokumentation

- Technisches Handbuch ergänzt.
- Bekannte Einschränkungen und Release-Prüfungen dokumentiert.

## Bekannte Einschränkungen

- Die Anwendung bleibt eine große, eingebettete `index.html` mit mehreren historischen Runtime-Blöcken.
- Einige interne CSS- und Runtime-Namen verweisen weiterhin auf v29.x.
- Leaflet, SheetJS und Kartenkacheln werden extern geladen.
- Ein produktiver GPS-, Offline- und Mobilgerätetest muss auf dem Zielgerät durchgeführt werden.
- Für maximale Kompatibilität, insbesondere bei iOS, sollte später zusätzlich ein PNG-Icon bereitgestellt werden.

## Prüfung vor dem Einsatz

1. `v30.0.0/index.html` über HTTPS oder einen lokalen Webserver öffnen.
2. App einmal laden und danach ohne Netzwerkverbindung öffnen.
3. JSON-Backup exportieren und wieder importieren.
4. GPS-Simulation und echten GPS-Start getrennt prüfen.
5. FINISH-Regel, Archivierung und Reset testen.
6. Service-Worker-Cache nach einem Versionswechsel kontrollieren.

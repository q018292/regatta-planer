# Copilot Instructions

Diese Hinweise gelten für dieses Repository.

## Allgemein
- Erstelle eine Versionsnummer für jede Änderung nach diesem Schema: `Hauptversion.Anforderungsstand.Fixstand`.
- Erhöhe die letzte Zahl (`Fixstand`) bei reinen Fehlerkorrekturen, technischen Korrekturen oder kleinen Anpassungen ohne neue Anforderung.
- Erhöhe die mittlere Zahl (`Anforderungsstand`) bei der Umsetzung einer neuen fachlichen oder funktionalen Anforderung und setze den Fixstand dabei auf `0`.
- Beispiel: `v30.0.59` wird bei einem Fix zu `v30.0.60`; für eine neue Anforderung wird daraus `v30.1.0`.
- Antworte und kommentiere standardmäßig auf Deutsch.
- Bevorzuge kleine, sichere Änderungen statt großer Refactorings.
- Halte bestehenden Stil und Namenskonventionen im Projekt ein.
- Verändere keine Dateien außerhalb der definierten Arbeitsbereiche.

## Archivierung vor Änderungen
- Verwende im aktuellen Release-Verzeichnis das Archiv-Verzeichnis `Archiv`.
- Dieser Ablauf ist verbindlich, sobald Programmdateien geändert werden: Erst archivieren und prüfen, danach Originaldateien ändern.
- Programmdateien sind insbesondere `index.html`, `sw.js`, `manifest.webmanifest`, Dateien unter `icons/` sowie weitere Dateien, die das Verhalten oder die Oberfläche der Anwendung bestimmen.
- Bei Änderungen ausschließlich an Anweisungen, Changelogs oder sonstiger Dokumentation ist kein Programmarchiv und keine neue Programmversion erforderlich.
- Ermittle vor Änderungen an Programmdateien die tatsächliche aktuelle Programmversion aus der aktiven Anwendung, dem Changelog und gegebenenfalls dem Service Worker.
- Erstelle vor Änderungen an Programmdateien ein neues Unterverzeichnis mit dem Format `Archiv/<aktuelle-Programmversion>_<YYYY-MM-DD_HH-mm-ss>`.
- Kopiere vor Änderungen an Programmdateien alle Dateien und Unterverzeichnisse der aktuellen Version vollständig in dieses Unterverzeichnis, einschließlich versteckter Dateien und des Verzeichnisses `.github`.
- Das Archiv-Verzeichnis selbst wird nicht in seine eigene Sicherung kopiert.
- Die Archivkopie ist unverändert zu lassen und darf nicht überschrieben werden.
- Ein angelegter, aber leerer oder unvollständiger Archivordner ist kein Backup. In diesem Fall darf keine Programmdatei geändert werden.
- Prüfe vor Änderungen an Programmdateien verbindlich, dass der Archivordner existiert, mindestens die erwarteten Laufzeitdateien sowie `.github` und `icons/` enthält und die rekursive Dateianzahl mit der Quelle plausibel übereinstimmt.
- Prüfe zusätzlich, dass die zentralen Versionsangaben aus `index.html`, `sw.js` und gegebenenfalls dem Changelog mit der Version im Archivnamen übereinstimmen.
- Dokumentiere vor dem ersten Edit den Archivpfad, die rekursive Dateianzahl der Quelle und der Kopie sowie das Ergebnis der Versionsprüfung.
- Wenn eine Kopie oder Prüfung technisch nicht ausgeführt oder nicht bestätigt werden kann, stoppe die Änderung und melde den konkreten Grund. Das bloße Anlegen des Archivordners reicht nicht aus.
- Nach jeder Programmänderung prüfe erneut, dass die aktive Version, der Service-Worker-Cache und die Archivkopie unverändert beziehungsweise korrekt sind.
- Wenn ein vorhandenes Archiv falsch benannt ist, korrigiere zuerst den Archivnamen und prüfe den Inhalt erneut.
- Erst nach erfolgreicher Archivprüfung darf eine neue Programmversion auf Basis der archivierten aktuellen Version erstellt werden.
- Nach Änderungen an Programmdateien sind Versionsangaben, Changelog und relevante Tests erneut zu prüfen.
- Nach reinen Dokumentations- oder Anweisungsänderungen sind nur die betroffenen Dokumente zu prüfen; die Programmversion bleibt unverändert.

## Aufgabe des Tools
ich brauche ein Tool, um bei einer Segelregatta einen optimalen Kurz zu fahren.
Ziel der Regatta ist es, innerhalb von 24 Stunden, möglichst viele Meilen zurückzulegen. Die Entfernung wird über den Abstand der Bojen, die man als Wendemarken nutzt, untereinander gemessen.

Dafür gibt es zwei Excel-Tabellen.
In der Tabelle "rakken" stehen die Bojen mit den Entfernungen untereinander. In der Spalte "Max Aantal" steht die Anzahl, wie oft die Strecken zwischen den Bojen genutzt werden darf.
In der Tabelle "Bojen*" sind die einzelnen Bojen direkt beschrieben. Es gibt Startbojen, Finishbojen und Bojen, um die gewendet werden muss (Markeerboei).
Achte besonders auf die Tabelle "rakken*". Diese Tabelle hat untereinander zwei Tabellen mit Etwas Abstand. Die Tabellenstruktur ist gleich, aber es sind Leerzeichen und Spaltenbeschriftungen dazwischen.

Gestartet wird die Regatta zu einer bestimmten Uhrzeit, an einer bestimmten Startboje.
Die Startboje soll aus einem DropDown Feld ausgewählt und mit der Startzeit hinterlegt werden. Als nächste Boje soll, wieder über ein DropDown Feld, die nächste erreichbare Boje ausgewählt werden. Achte auf die erlaubten Kurse aus der Tabelle "racken*". 

Zusätzlich muss pro Kurs noch die aktuelle durschnittliche Geschwindigkeit in Knoten eingetragen werden.
Aus diesen Werten soll folgenden Werte berechnet und/oder angezeigt werden.
Die Entfernung zur nächsten Bojen, die benötigte Zeit und die zu erwartende Ankunftszeit.
In der Tabelle "racken*" staht auch die Information,  wie oft die ausgewählte Strecke genutzt werden darf. Die maximale Anzahl darf nicht überschritten werden.



Ich möchte das Tool auf dem PC und auf dem Tablet nutzen.
Die Exceltabellen werden jedes Jahr aktualisiert. Eine Importfunktion wäre daher sinnvoll, um die aktuellsten Informationen im Tool zu hinterlegen.
Eine Ansicht für den Tag und für die Nacht wäre auch schön.

## Codequalität
- Schreibe klaren, wartbaren Code mit sprechenden Namen.
- Ergänze kurze Kommentare nur dort, wo Logik nicht offensichtlich ist.
- Vermeide Duplikate; extrahiere wiederverwendbare Logik in Funktionen.

## Tests & Validierung
- Wenn Code geändert wird, führe passende, schnelle Checks/Tests aus.
- Behebe neu eingeführte Fehler direkt.
- Gib kurz an, was geprüft wurde und mit welchem Ergebnis.
- Teste die neue Version selbstständig nach dem Upload auf GitHub Pages, um sicherzustellen, dass die Anwendung wie erwartet funktioniert.
Aktualisiere die App über den "App-Aktualisieren-Button" und prüfe, dass die aktuelle Version geladen wird. Aktualisiere, mit etwas Abstand (ca. 15 Sekunden) mehrfach erneut, wenn die erwartete Version noch nicht geladen wurde.
- Wenn die erwartete Version nach einem Upload noch nicht sichtbar ist, führe mindestens 3 direkte Folgeprüfungen mit Cache-Bypass durch (z. B. unterschiedliche `?t=`-Werte in URL für App und `sw.js`) und dokumentiere jeden Prüfdurchlauf kurz.
- Primäre Rollout-Kriterien sind: sichtbare App-Version und Service-Worker-Cache-Version.
- Nur wenn Changelog-Dateien Teil des Uploads sind, zusätzlich Changelog-URL prüfen; andernfalls ist ein 404 für Changelog/Handbücher kein Rollout-Fehler.
URL:  https://q018292.github.io/regatta-planer/?v=v29.1.4&t=1787402822611

## Sicherheit
- Keine Secrets, Tokens oder Passwörter in Code/Logs/Antworten ausgeben.
- Keine riskanten Operationen ohne klaren Bedarf (z. B. Löschen/Überschreiben vieler Dateien).

## Dokumentation
- Erstelle eine CHANGELOG.md, wenn sie nicht existiert
- Erstelle bei Änderungen einen kurzen Changelog-Eintrag in CHANGELOG.md mit Versionsnummer und kurzer Beschreibung der Änderung ergänzen.
- Bei Änderungen: relevante Annahmen und Grenzen knapp dokumentieren.
- aktualisiere immer das TECHNISCHES_HANDBUCH.md und das Handbuch in der App, wenn sich die Verzeichnisstruktur oder die Laufzeitarchitektur ändert.

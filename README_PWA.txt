# Regatta-Routenplaner 24h PWA

Diese Version enthält eine installierbare Progressive Web App.

## Dateien
- index.html: App
- manifest.webmanifest: PWA-Manifest
- sw.js: Service Worker für Offline-Cache
- icons/: App-Icons

## Test
Für Installation und GPS bitte über HTTPS oder localhost bereitstellen. Lokales Öffnen per file:// reicht in vielen mobilen Browsern nicht für PWA/GPS.

Beispiel lokal am PC im entpackten Ordner:
python -m http.server 8000
Dann im Browser öffnen: http://localhost:8000

Auf dem Mobilgerät am besten über einen HTTPS-Webspace, OneDrive/SharePoint-Webhosting, GitHub Pages oder einen kleinen lokalen HTTPS-Server testen.

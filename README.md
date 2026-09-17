# Persönliche Website — David Wichmann

Statische Website für GitHub Pages: Startseite, Vorlesungen, Forschung und Abschlussarbeiten.

Nach dem ersten Deploy ist die Seite unter

`https://david-wichmann-123.github.io/personal_website/`

erreichbar.

## Lokal anschauen

Im Projektordner einen lokalen Server starten:

```powershell
python -m http.server 8000
```

Danach im Browser öffnen: [http://localhost:8000](http://localhost:8000)

## Online stellen

1. Änderungen committen und nach `main` pushen, oder einen Pull Request nach `main` mergen.
2. Einmalig in GitHub: **Settings → Pages → Source: GitHub Actions**.
3. Der Workflow `.github/workflows/deploy-pages.yml` baut die Seite und veröffentlicht sie.
4. Pull Requests nach `main` prüfen nur, ob die Dateien vollständig sind. Erst der Merge (oder ein direkter Push auf `main`) aktualisiert die Website.

## Inhalte ergänzen

- Portrait: `assets/portrait.svg` ersetzen oder in `index.html` auf ein eigenes Bild zeigen.
- Texte auf der Startseite und der Vorlesungsseite direkt in den HTML-Dateien anpassen.
- Weitere Vorlesungs-Kacheln in `vorlesungen.html` ergänzen und jeweils eine neue HTML-Datei unter `vorlesungen/` anlegen.

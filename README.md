# Persönliche Website — David Wichmann

Statische Website für GitHub Pages.

Adresse nach dem ersten Deploy:

`https://david-wichmann-123.github.io/personal_website/`

## Lokal anschauen

```powershell
python -m http.server 8000
```

Danach: [http://localhost:8000](http://localhost:8000)

## Online stellen

Die Seite liegt fertig als HTML/CSS/JS im Repo. GitHub Pages kann sie direkt aus dem Branch `main` ausliefern — ohne Actions-Workflow.

1. Code nach `main` pushen.
2. Einmalig im Repo: **Settings → Pages**
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
   - Save
3. Nach ein bis zwei Minuten ist die Seite unter der Adresse oben erreichbar.

Spätere Änderungen: wieder nach `main` pushen oder einen Pull Request nach `main` mergen. GitHub aktualisiert die Website dann von selbst.

## Inhalte ergänzen

- Portrait: `assets/portrait.jpg`
- Texte direkt in den HTML-Dateien anpassen
- Weitere Vorlesungen: Eintrag in `vorlesungen.html` plus neue Datei unter `vorlesungen/`

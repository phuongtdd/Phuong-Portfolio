# Phuong — Portfolio

Personal portfolio built with **Vite + React**. Live at https://phuongtdd.github.io/Phuong-Portfolio/

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # output in dist/
```

## Updating content (no code needed)

All text, awards, education, experience, skills, projects and services live in
[`src/content/*.json`](src/content). Two ways to edit them:

1. **Pages CMS (form UI)** — sign in at https://app.pagescms.org with GitHub, open this repo,
   and edit through forms. Images/CV upload to `public/images` and `public/cv`.
   The form layout is defined in [`.pages.yml`](.pages.yml).
2. **GitHub web editor** — open a JSON file on github.com, click ✏️, commit.

Every commit to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes it to GitHub Pages (~1 minute).

## Structure

```
src/
  content/      ← editable data (JSON)
  components/   ← one component per section
  styles/       ← design tokens + styles
public/
  images/       ← portrait, about photo, project screenshots
  cv/           ← CV PDF
```

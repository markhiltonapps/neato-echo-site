# Neato Echo website

Live at https://echo.neatoventures.com/ (DigitalOcean App Platform, redeploys on every push to `main`; the app URL https://coral-app-aex7i.ondigitalocean.app/ also works).

Static marketing and download site for [Neato Echo](https://github.com/markhiltonapps/neato-echo), a Neato Ventures product.

- `index.html` — landing page (hero, how it works, privacy ledger, install steps, pricing teaser, latest builds)
- `changelog.html` — every release, rendered live from GitHub Releases
- `styles.css`, `site.js` — the whole site; no build step
- `assets/` — icons and the app screenshots under `assets/shots/`
- `.do/app.yaml` — DigitalOcean App Platform spec (static site, free tier)

## Deploy

1. Push this repository to GitHub as `markhiltonapps/neato-echo-site`.
2. In DigitalOcean, create an App from that repository (or import `.do/app.yaml`). Choose the **Static Site** component; there is no build command and the output directory is `/`.
3. Every push to `main` redeploys.

The Download buttons and the changelog read `https://api.github.com/repos/markhiltonapps/neato-echo/releases` in the browser. Publishing a GitHub release with the Windows installer attached is all it takes to update the site.

## Screenshots

Drop real app captures into `assets/shots/` with these names; the frames show an empty state until the file exists:

- `hero.png` — the Home view
- `dictation.png` — the dictation pill with text landing in another app
- `meeting.png` — the "meeting detected" card and a live transcript
- `summary.png` — the "Summarize this recording?" picker

## Local preview

Any static server works, for example:

```bash
python -m http.server 8765
```

## Manual (docs)

The manual lives in `docs-src/**.md` (Markdown with a few Mintlify-style components: `<Steps>`, `<Note>`, `<Warning>`, `<Tip>`, `<Accordion>`, `<Card>`, `<Tabs>`). `npm run build:docs` (run inside `scripts/`, where the tooling lives so the repo root stays a plain static site for DigitalOcean) renders it into `docs/**.html` plus `docs/search-index.json`; the generated HTML is committed because the DigitalOcean app serves the repo as-is. Page order and grouping are set in `scripts/build-docs.mjs` (`NAV`). Add a page by writing the Markdown file and adding its slug to `NAV`, then rebuild and commit both.

# Omnium Cargo Bike Mod & Sizing Guide

A modern, responsive single-page app built with **HTML + Tailwind CSS + TypeScript** for cargo bike fit exploration.

## What the page includes

- **Dark premium design** tuned for bike-messenger/cargo culture
- **Cockpit Reach Calculator** with inputs for:
  - Stem Length (mm)
  - Stem Angle (°)
  - Head Tube Angle (°), default `72`
- Live outputs for:
  - True angle to ground
  - Horizontal reach change
  - Vertical rise change
- **My Omnium Setup** gallery/spec placeholders
- **Media & YouTube** section with video placeholder and CTA button
- Footer license statement: **CC BY-NC-ND 4.0**

## Project layout

- `/index.html` – Single-page UI and Tailwind CDN usage
- `/src/main.ts` – TypeScript calculator logic
- `/tsconfig.json` – TypeScript compiler configuration
- `/package.json` – Build script and dependencies
- `/.github/workflows/deploy.yml` – GitHub Pages build+deploy workflow
- `/LICENSE` – License text

## Calculator model

The app calculates ground-referenced cockpit movement using:

- `effectiveAngle = (90 - headTubeAngle) + stemAngle`
- `horizontal = stemLength * cos(effectiveAngle)`
- `vertical = stemLength * sin(effectiveAngle)`

(All trigonometric operations use radians internally.)

## Local usage

```bash
npm install
npm run build
```

Build output is generated in `/dist`:

- `dist/index.html`
- `dist/assets/main.js`

You can serve `/dist` with any static web server.

## GitHub Pages deployment pipeline

The workflow in `.github/workflows/deploy.yml` runs on pushes to `main` and on manual dispatch:

1. Checks out the repository
2. Sets up Node.js 20 with npm cache
3. Runs `npm ci`
4. Runs `npm run build` (compiles TypeScript and prepares static files in `dist`)
5. Uploads `/dist` as Pages artifact
6. Deploys artifact via `actions/deploy-pages`

This keeps the repository source-first (TypeScript in `src`) while publishing static HTML/JS to GitHub Pages automatically.

## License

This project is licensed under the **Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)** license.

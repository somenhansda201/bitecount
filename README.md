# BiteCount — AI Nutrition Intelligence

A React + Vite frontend, converted from a single-file CDN/Babel prototype into a proper buildable project so it deploys cleanly on Vercel.

## Local development

```bash
npm install
npm run dev
```

Visit the local URL Vite prints (usually http://localhost:5173).

## Build

```bash
npm run build
```

Output goes to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Deploy to Vercel

**Option A — Vercel CLI**
```bash
npm i -g vercel
vercel
```

**Option B — Git import**
1. Push this folder to a GitHub/GitLab/Bitbucket repo.
2. In the Vercel dashboard, click "New Project" and import the repo.
3. Framework preset: Vite (auto-detected). Build command: `npm run build`. Output directory: `dist`.
4. Deploy.

`vercel.json` is already included with an SPA rewrite rule so client-side page state works correctly on refresh/direct links.

## Project structure

```
.
├── index.html        # Vite entry HTML
├── src/
│   ├── main.jsx       # React mount point
│   ├── App.jsx        # All app components, pages, mock data (from original prototype)
│   └── index.css      # Global styles
├── vite.config.js
├── vercel.json
└── package.json
```

## Notes

This app currently runs entirely on mock/static data (nutrition logs, deficiencies, food database, AI recommendations) defined at the top of `src/App.jsx`. There is no backend wired up — swap those constants or fetch calls in for a real API when ready.

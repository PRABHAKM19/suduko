# Mini Logic — 6x6 Sudoku

A self-contained, single-file 6x6 Sudoku game (`index.html` — no external
assets, all CSS/JS inline).

## Deploying on Render

You have two options:

### Option A — Static Site (simplest, recommended)
1. On Render, create a **Static Site** (not a Web Service).
2. Connect this repo.
3. Build command: leave blank.
4. Publish directory: `.`
5. Deploy. Render serves `index.html` directly — no Node.js needed at all.

### Option B — Web Service (uses the included Express server)
This repo also includes a minimal `server.js` + `package.json` so it can run
as a standard Node Web Service if you'd rather keep that service type:
1. Build command: `npm install`
2. Start command: `npm start`
3. Render will run `server.js`, which serves `index.html` on `$PORT`.

## Local development
```bash
npm install
npm start
# open http://localhost:3000
```

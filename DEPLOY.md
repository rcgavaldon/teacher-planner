# Deploy Teacher Planner to GitHub Pages

This `dist/` folder is the **complete, self-contained app**. It works fully **offline** — the math
(KaTeX) and PDF (html2canvas, jsPDF) libraries are bundled in `vendor/`, so it runs on locked-down
school wifi with no CDN, no build step, no server code.

**Keep the whole folder together** — `index.html` loads everything else by relative path.

---

## Option A — its own repo (simplest, recommended)

1. On github.com → **New repository** → name it `teacher-planner` → Public → Create.
2. Upload the **entire contents of this `dist/` folder**, including the `vendor/` folder and the
   hidden `.nojekyll` file → Commit. (Drag-and-drop keeps folder structure; if it flattens, use the
   git steps below instead.)
3. Repo **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main` / `(root)` → Save.
4. ~1 minute later it's live at: **`https://rcgavaldon.github.io/teacher-planner/`**

### Or via git (preserves the vendor/ folder cleanly)

```bash
cd dist
git init && git add -A && git commit -m "Teacher Planner v1.0.0"
git branch -M main
git remote add origin https://github.com/rcgavaldon/teacher-planner.git
git push -u origin main
```
…then flip on Pages as in step 3.

## Option B — a folder in your existing `rcgavaldon.github.io` site

Drop these files into a `teacher-planner/` folder in that repo. Live at the same URL (Pages already on).

---

## Hand it to a teacher

Give them the link. They need **nothing** — no account, no API key, no credit card. Generation routes
through their own **free claude.ai** (copy-paste). First run shows a 6-step tour; their first day is
already built and printable. Their work auto-backs-up to their Downloads.

If something breaks, they open **Setup → "report a problem"** and send you the copied report — that's
your feedback loop until the Firebase dashboard is in.

---

## What's in the folder

- `index.html` — the whole app
- `vendor/` — KaTeX + fonts, html2canvas, jsPDF (offline math + PDF)
- `*-data.js` — courses, TEKS, CK-12 pacing, example days, week-1 soft start
- `ata-precal.js` — the Pre-Calculus day-by-day curriculum map
- `deck-plot.js` — slide-deck graph renderer
- `.nojekyll` — tells GitHub to serve files as-is (keep it)

To update later: replace the changed file(s) and push again. Live in ~1 min.

---

## Later — your admin dashboard (needs you, then me)

Multi-teacher backend (see every teacher, custom links, error/usage watcher) runs on **Firebase**:

1. Create a free project at <https://console.firebase.google.com> → add a **Web app** → enable
   **Google sign-in** (Authentication) and **Firestore**. Add `rcgavaldon.github.io` as an authorized
   domain.
2. Send me the `firebaseConfig` object it gives you.

Then sign-in, per-teacher storage, roles, and the auto-flushing usage/error dashboard get wired in.

---

## Version

**v1.0.0** — shown in-app under Setup. Bump it there each release so a teacher's problem report tells
you exactly what they're running.

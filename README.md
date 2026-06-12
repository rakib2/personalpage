# Mission Control — Rakib Hasan

A personal site that grows into a Jarvis-style command center. Built with Next.js 16 (App Router), React 19, Tailwind v4. Sci-fi HUD aesthetic.

## The 3-layer plan

| Layer | Status | Lives in | What it is |
| --- | --- | --- | --- |
| **1 · Public site** | ✅ built | `app/(public)/` | Profile, branding, research log, video transmissions, contact. Fully static. |
| **2 · Private dashboard** | 🔜 next | `app/(app)/` | Login, chat, daily activity, progress, analytics. |
| **3 · OpenClaw agent** | 🛰️ later | `app/api/agent/` | Your agent in the cloud — tool connectors, cron, memory. |

Route groups keep the three layers isolated in one codebase. The public site never imports private/agent code, so each layer ships independently.

## Edit your content

**Everything you'd want to change lives in one file:** [`content/profile.ts`](content/profile.ts).
Name, roles, tagline, bio, social links, papers, and videos. No component edits needed.

- **Add a paper** → push an entry onto the `papers` array.
- **Link a YouTube video** → add the id (the part after `watch?v=`) to `videos`.
- **Change the vibe** → tweak the color tokens at the top of [`app/globals.css`](app/globals.css) (`--accent` is the Jarvis cyan, `--amber` the arc-reactor highlight).

## Run it

```bash
npm run dev      # http://localhost:3000
npm run build    # production build (static)
npm start        # serve the build
```

## Structure

```
app/
  layout.tsx            root layout, fonts, metadata (reads profile.ts)
  globals.css           HUD design system: tokens, glow, scanlines, animations
  (public)/page.tsx     the landing page — assembles the sections below
components/
  hud/                  reusable HUD primitives (Panel, StatusBar, Clock)
  sections/             Hero, MetricsStrip, About, Papers, Videos, Contact, Footer
content/profile.ts      ← your single source of truth
lib/utils.ts            tiny helpers
```

## Deploy

Push to GitHub, import the repo at [vercel.com/new](https://vercel.com/new). Zero config — Vercel detects Next.js. Free tier is plenty for the public site.

## Roadmap — next moves

**Layer 2 (dashboard):**
- Auth: NextAuth / Clerk → gate `app/(app)/`.
- DB: Postgres (Neon/Supabase) for activity + progress.
- Chat UI streaming from `app/api/agent/`.
- Analytics widgets reusing the `Panel` + `MetricsStrip` HUD primitives.

**Layer 3 (OpenClaw agent):**
- `app/api/agent/` route streaming from the Claude API (`@anthropic-ai/sdk`, model `claude-opus-4-8`).
- Tool connectors (Gmail, Calendar, Drive, GitHub) behind your auth.
- Scheduled runs (cron) writing a daily brief to the dashboard.
- Per-tool config screens — the "configurability" layer.

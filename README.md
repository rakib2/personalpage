# Field Notes — Rakib Hasan

A personal **publication** that doubles as mission control. The home page highlights essays anyone can learn from (starting with building **OpenClaw**, an AI command center in the cloud); the profile and — eventually — the private dashboard and agent live behind the menu.

Built with Next.js 16 (App Router), React 19, Tailwind v4. Sci-fi HUD aesthetic.

## Pages

| Route | What it is |
| --- | --- |
| `/` | **Publication** — featured + all essays. The main page. |
| `/essays/[slug]` | An essay, rendered from markdown. |
| `/profile` | Personal HUD profile (photo, trajectory, videos, contact). |
| `/dashboard` | 🔜 Layer 2 scaffold — the private OpenClaw command center. |
| `/api/agent` | 🛰️ Layer 3 scaffold — the agent endpoint. |

## Add an essay (the main way you'll grow this)

Drop a markdown file into [`content/essays/`](content/essays/). That's it — it appears on the home page automatically.

```markdown
---
title: "Your essay title"
date: "2026-06-15"
summary: "One or two sentences shown in the list and on the page."
tags: ["agents", "notes"]
featured: false   # set true to pin it to the top
draft: false      # true = hidden from the site
---

Your essay body in **markdown**. Headings, lists, `code`, and code blocks
are all styled to match the HUD.
```

Reading time is computed automatically. Newest date sorts first.

## Edit everything else

One file: [`content/profile.ts`](content/profile.ts) — publication name/tagline, your name, photo, roles, bio, social links, trajectory (experience), videos, metrics. Swap `/public/rakib.jpg` to change the photo. Color tokens live at the top of [`app/globals.css`](app/globals.css) (`--accent` cyan, `--amber`).

## The 3-layer plan

| Layer | Status | Lives in |
| --- | --- | --- |
| **1 · Public site + publication** | ✅ built | `app/(public)/` |
| **2 · Private dashboard** | 🔜 scaffolded | `app/(app)/dashboard/` |
| **3 · OpenClaw agent** | 🛰️ scaffolded | `app/api/agent/` |

Route groups keep the layers isolated; the public site never imports private/agent code.

## Run it

```bash
npm run dev      # http://localhost:3000
npm run build    # production build
npm start
```

## Structure

```
app/
  layout.tsx                 root layout, fonts, metadata
  globals.css                HUD design system + essay prose styles
  (public)/
    layout.tsx               shared StatusBar + Footer
    page.tsx                 home = publication
    profile/page.tsx         personal profile
    essays/[slug]/page.tsx   essay reader (SSG)
  (app)/dashboard/page.tsx   Layer 2 stub
  api/agent/route.ts         Layer 3 stub
components/
  hud/                       Panel, StatusBar, Clock
  publication/               Masthead, EssayCard
  essay/                     EssayBody (markdown → HUD prose)
  sections/                  Hero, Trajectory, About, Videos, Contact, ...
content/
  profile.ts                 ← site config
  essays/*.md                ← your writing
lib/essays.ts                reads + parses the markdown
```

## Deploy

Push to GitHub, import at [vercel.com/new](https://vercel.com/new). Zero config.

## Next moves toward OpenClaw

**Layer 2:** add auth (Clerk/NextAuth) to gate `app/(app)/`, a Postgres DB (Neon/Supabase) for activity + progress, and a chat panel that streams from `/api/agent`.

**Layer 3:** in `app/api/agent/route.ts`, run the Claude tool-use loop (`@anthropic-ai/sdk`, model `claude-opus-4-8`) with tool connectors (Calendar first, then Gmail/Drive/GitHub). Add scheduled runs that write a daily brief to the dashboard. Document each step as a new essay.

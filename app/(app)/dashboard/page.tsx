import Link from "next/link";
import { profile } from "@/content/profile";

/**
 * LAYER 2 — Private dashboard (OpenClaw command center).
 *
 * This is a scaffold. It is NOT yet behind auth and NOT linked publicly.
 * Next steps to make it real:
 *   1. Add auth (Clerk or NextAuth) and gate this route group.
 *   2. Add a DB (Neon/Supabase Postgres) for activity + progress.
 *   3. Wire the chat panel to /api/agent (Layer 3).
 *   4. Add tool connectors (Calendar first) and render them as panels.
 */
export default function DashboardPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4 py-16 sm:px-6">
      <div className="mb-8 flex items-center gap-3">
        <span className="inline-block h-2 w-2 rounded-full bg-amber animate-pulse-dot" />
        <span className="label text-amber/90">openclaw // standby</span>
        <Link href="/" className="ml-auto label text-fg-dim hover:text-accent">
          ← exit
        </Link>
      </div>

      <h1 className="text-4xl font-semibold tracking-tight glow-text sm:text-6xl">
        Command Center
      </h1>
      <p className="mt-4 max-w-xl text-fg-dim">
        Layer 2 scaffold. Login, daily brief, chat, and analytics land here. Right now it&apos;s a
        placeholder so the architecture has a home.
      </p>

      {/* Skeleton of the future dashboard grid */}
      <div className="mt-10 grid gap-px border border-[var(--panel-border)] bg-[var(--panel-border)] sm:grid-cols-3">
        {[
          { k: "DAILY BRIEF", v: "awaiting connectors" },
          { k: "CHAT", v: "agent offline" },
          { k: "PROGRESS", v: "no data yet" },
        ].map((c) => (
          <div key={c.k} className="bg-bg-soft p-5">
            <div className="label text-fg-faint">{c.k}</div>
            <div className="mt-2 font-mono text-sm text-fg-dim">{c.v}</div>
          </div>
        ))}
      </div>

      <p className="mt-10 font-mono text-xs text-fg-faint">
        signed-in as: {profile.name.toLowerCase().replace(/\s+/g, ".")} (stub)
      </p>
    </main>
  );
}

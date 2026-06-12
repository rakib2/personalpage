import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content/profile";
import { Panel } from "@/components/hud/Panel";
import { Clock } from "@/components/hud/Clock";
import { logout } from "@/app/login/actions";

export const metadata: Metadata = {
  title: "Command Center — OpenClaw",
  robots: { index: false, follow: false },
};

/**
 * LAYER 2 — Private dashboard (OpenClaw command center).
 * Reachable only with a valid session (see middleware.ts).
 * This is the shell; connectors + agent fill it in Layers 2/3.
 */
export default function DashboardPage() {
  const firstName = profile.name.split(" ")[0];

  const brief = [
    { source: "calendar", line: "Connect Google Calendar to see today's schedule." },
    { source: "inbox", line: "Connect Gmail to triage what needs a reply." },
    { source: "focus", line: "Set today's focus — the one thing that matters." },
  ];

  const systems = [
    { name: "Calendar", status: "offline" },
    { name: "Gmail", status: "offline" },
    { name: "Drive", status: "offline" },
    { name: "GitHub", status: "offline" },
    { name: "Agent", status: "offline" },
  ];

  return (
    <div className="min-h-screen">
      {/* command bar */}
      <header className="sticky top-0 z-40 border-b border-[var(--panel-border)] bg-[rgba(5,8,13,0.72)] backdrop-blur-md">
        <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
            <span className="label text-fg glow-text">{profile.callsign}</span>
            <span className="hidden font-mono text-[0.6rem] tracking-widest text-fg-faint sm:inline">
              // openclaw command center
            </span>
          </div>
          <div className="flex items-center gap-5">
            <Clock />
            <Link href="/" className="label text-fg-dim hover:text-accent">
              SITE
            </Link>
            <form action={logout}>
              <button type="submit" className="label text-fg-dim hover:text-amber">
                LOGOUT
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <p className="label text-accent/90">mission control</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight glow-text sm:text-5xl">
          Welcome back, {firstName}.
        </h1>
        <p className="mt-3 max-w-xl text-fg-dim">
          Your command center is online. Connectors and the agent come next — this is the
          shell they plug into.
        </p>

        {/* top metric row */}
        <div className="mt-10 grid grid-cols-2 gap-px border border-[var(--panel-border)] bg-[var(--panel-border)] sm:grid-cols-4">
          {[
            { k: "TODAY", v: "—", note: "tasks" },
            { k: "STREAK", v: "0", note: "days" },
            { k: "AGENT", v: "OFF", note: "layer 3" },
            { k: "TOOLS", v: "0/5", note: "connected" },
          ].map((m) => (
            <div key={m.k} className="bg-bg-soft p-5">
              <div className="label text-fg-faint">{m.k}</div>
              <div className="mt-2 font-mono text-2xl text-fg glow-text">{m.v}</div>
              <div className="mt-1 font-mono text-[0.65rem] text-fg-faint">{m.note}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          {/* daily brief */}
          <Panel label="// daily brief">
            <ul className="space-y-4">
              {brief.map((b) => (
                <li key={b.source} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-fg-faint" />
                  <div>
                    <span className="label text-fg-faint">{b.source}</span>
                    <p className="mt-1 text-sm text-fg-dim">{b.line}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-xs text-fg-faint">
              Once connectors are live, the agent writes this brief for you each morning.
            </p>
          </Panel>

          {/* systems */}
          <Panel label="// systems">
            <ul className="space-y-3 font-mono text-sm">
              {systems.map((s) => (
                <li
                  key={s.name}
                  className="flex items-center justify-between border-b border-[var(--panel-border)] pb-2"
                >
                  <span className="text-fg-dim">{s.name}</span>
                  <span className="flex items-center gap-2 text-fg-faint">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-fg-faint" />
                    {s.status}
                  </span>
                </li>
              ))}
            </ul>
          </Panel>
        </div>

        {/* chat */}
        <Panel label="// chat — openclaw" className="mt-8">
          <div className="flex min-h-32 items-center justify-center border border-dashed border-[var(--panel-border)] py-10">
            <p className="font-mono text-xs text-fg-faint">
              agent offline — wire /api/agent (Layer 3) to bring chat online
            </p>
          </div>
          <div className="mt-4 flex gap-2">
            <input
              disabled
              placeholder="Ask OpenClaw anything…"
              className="flex-1 cursor-not-allowed border border-[var(--panel-border)] bg-bg-soft px-3 py-2.5 font-mono text-sm text-fg-dim opacity-60 outline-none"
            />
            <button
              disabled
              className="cursor-not-allowed border border-[var(--panel-border)] px-5 py-2.5 font-mono text-sm text-fg-faint opacity-60"
            >
              send
            </button>
          </div>
        </Panel>
      </main>
    </div>
  );
}

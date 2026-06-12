import Link from "next/link";
import { profile } from "@/content/profile";
import { Clock } from "./Clock";

/** Fixed top heads-up bar: callsign, live status, nav, clock. */
export function StatusBar() {
  const nav = [
    { label: "ABOUT", href: "#about" },
    { label: "PAPERS", href: "#papers" },
    { label: "VIDEOS", href: "#videos" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--panel-border)] bg-[rgba(5,8,13,0.72)] backdrop-blur-md">
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="relative inline-block h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
          <Link href="/" className="label text-fg glow-text hover:text-accent">
            {profile.callsign}
          </Link>
          <span className="hidden font-mono text-[0.6rem] tracking-widest text-fg-faint sm:inline">
            // {profile.status}
          </span>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="label text-fg-dim hover:text-accent"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <Clock />
      </div>
    </header>
  );
}

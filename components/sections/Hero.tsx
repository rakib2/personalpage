"use client";

import { useEffect, useState } from "react";
import { profile } from "@/content/profile";

const BOOT_LINES = [
  "initializing core...",
  "loading profile :: " + profile.callsign,
  "mounting tool interfaces...",
  "status :: " + profile.status.toLowerCase() + " — " + profile.statusDetail,
];

export function Hero() {
  const [bootDone, setBootDone] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);
  const [roleIdx, setRoleIdx] = useState(0);

  // Boot log: reveal one line at a time, then finish. Plays once per tab.
  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("booted")) {
      setVisibleLines(BOOT_LINES.length);
      setBootDone(true);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setVisibleLines(i);
      if (i >= BOOT_LINES.length) {
        clearInterval(id);
        setTimeout(() => {
          setBootDone(true);
          try {
            sessionStorage.setItem("booted", "1");
          } catch {}
        }, 450);
      }
    }, 360);
    return () => clearInterval(id);
  }, []);

  // Rotate roles
  useEffect(() => {
    if (!bootDone) return;
    const id = setInterval(() => {
      setRoleIdx((r) => (r + 1) % profile.roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, [bootDone]);

  return (
    <section className="relative pt-16 pb-14 sm:pt-24 sm:pb-20">
      {/* boot log */}
      <div className="mb-8 min-h-[5.5rem] font-mono text-xs leading-relaxed text-fg-dim">
        {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="animate-rise">
            <span className="text-accent">›</span> {line}
            {i === visibleLines - 1 && !bootDone && (
              <span className="ml-1 inline-block h-3 w-1.5 translate-y-0.5 bg-accent animate-blink" />
            )}
          </div>
        ))}
      </div>

      <div
        className={
          bootDone ? "animate-rise" : "pointer-events-none opacity-0"
        }
      >
        <p className="label mb-4 text-accent/90">{profile.location} · personal mission control</p>

        <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
          <span className="glow-text">{profile.name}</span>
        </h1>

        <div className="mt-4 flex h-8 items-center gap-3 font-mono text-lg text-amber sm:text-2xl">
          <span className="text-fg-faint">{">"}</span>
          <span key={roleIdx} className="animate-rise glow-amber">
            {profile.roles[roleIdx]}
          </span>
          <span className="inline-block h-5 w-2 bg-amber animate-blink" />
        </div>

        <p className="mt-7 max-w-2xl text-base leading-relaxed text-fg-dim sm:text-lg">
          {profile.tagline}
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#papers"
            className="group border border-[var(--panel-border-strong)] bg-[rgba(56,225,216,0.06)] px-5 py-2.5 font-mono text-sm text-accent hover:bg-[rgba(56,225,216,0.14)]"
          >
            view research <span className="opacity-60 group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#contact"
            className="border border-[var(--panel-border)] px-5 py-2.5 font-mono text-sm text-fg-dim hover:border-[var(--panel-border-strong)] hover:text-fg"
          >
            establish link
          </a>
        </div>
      </div>
    </section>
  );
}

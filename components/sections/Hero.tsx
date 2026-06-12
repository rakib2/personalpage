"use client";

import Image from "next/image";
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
          bootDone
            ? "grid animate-rise items-center gap-10 lg:grid-cols-[1.4fr_minmax(0,340px)]"
            : "pointer-events-none opacity-0"
        }
      >
        {/* left: identity */}
        <div>
          <p className="label mb-4 text-accent/90">
            {profile.location} · personal mission control
          </p>

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
              href="#trajectory"
              className="group border border-[var(--panel-border-strong)] bg-[rgba(56,225,216,0.06)] px-5 py-2.5 font-mono text-sm text-accent hover:bg-[rgba(56,225,216,0.14)]"
            >
              view trajectory <span className="opacity-60 group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#contact"
              className="border border-[var(--panel-border)] px-5 py-2.5 font-mono text-sm text-fg-dim hover:border-[var(--panel-border-strong)] hover:text-fg"
            >
              establish link
            </a>
          </div>
        </div>

        {/* right: photo as an ID readout */}
        <div className="panel order-first p-3 lg:order-none">
          <div className="mb-2 flex items-center justify-between px-1">
            <span className="label text-accent/90">// operator</span>
            <span className="label text-fg-faint">id::{profile.callsign}</span>
          </div>
          <div className="relative aspect-[552/310] overflow-hidden border border-[var(--panel-border)]">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 340px"
              className="object-cover"
            />
            <div className="scanlines pointer-events-none absolute inset-0 opacity-60" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_120%,rgba(5,8,13,0.7),transparent_60%)]" />
            <div className="absolute left-2 top-2 flex items-center gap-1.5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
              <span className="label text-accent/90">live</span>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-between px-1 font-mono text-[0.6rem] text-fg-faint">
            <span>{profile.status}</span>
            <span>{profile.statusDetail}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

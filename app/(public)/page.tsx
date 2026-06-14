import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { getAllEssays, formatDate } from "@/lib/essays";

export const metadata: Metadata = {
  title: `${profile.name} — Software Engineer & Founder`,
  description: profile.tagline,
};

export default function Home() {
  const essays = getAllEssays();

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-5 sm:px-6 py-14 sm:py-20 space-y-16">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section id="about" className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
        <div className="shrink-0">
          <div className="relative h-24 w-24 overflow-hidden rounded-full border border-[var(--panel-border)]">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              priority
              sizes="96px"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-semibold text-fg sm:text-3xl">{profile.name}</h1>
          <p className="mt-0.5 font-mono text-sm text-accent">
            Founder, Flowlakes · Software Engineer · ITSM Consultant
          </p>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-fg-dim">{profile.tagline}</p>

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-fg-dim">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="hover:text-accent"
              >
                {s.handle ?? s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────── */}
      <section className="space-y-4">
        {profile.bio.split("\n\n").map((para, i) => (
          <p key={i} className="text-[0.95rem] leading-relaxed text-fg-dim">{para}</p>
        ))}
      </section>

      {/* ── Building ─────────────────────────────────────────── */}
      <section>
        <h2 className="section-label mb-5">Building</h2>
        <div className="border-l-2 border-[var(--panel-border-strong)] pl-5 space-y-1">
          <div className="flex items-center gap-2">
            <a
              href="https://flowlakes.com"
              target="_blank"
              rel="noreferrer"
              className="text-lg font-semibold text-fg hover:text-accent"
            >
              Flowlakes
            </a>
            <span className="font-mono text-[0.6rem] tracking-widest uppercase border border-accent/40 text-accent px-1.5 py-0.5">
              Now
            </span>
          </div>
          <p className="text-[0.95rem] text-fg-dim leading-relaxed">
            A service-management and workflow platform for teams that need governed, auditable
            business processes without a six-figure implementation cycle. Incident management,
            asset tracking, approvals, onboarding, and custom workflows — with audit trails,
            permissions, integrations, and AI-agent support built into the foundation.
          </p>
        </div>

        <div className="mt-6 border-l-2 border-[var(--panel-border)] pl-5 space-y-1">
          <a
            href="https://grammarflow.io"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-fg hover:text-accent"
          >
            Grammarflow
          </a>
          <p className="text-sm text-fg-dim leading-relaxed">
            An open-source language-learning coach focused on German. Built with input from a
            language tutor and used by expat colleagues for a more personal way to practice.
          </p>
        </div>
      </section>

      {/* ── Experience ───────────────────────────────────────── */}
      <section id="experience">
        <h2 className="section-label mb-5">Experience</h2>
        <ol className="space-y-7">
          {profile.experience.map((e, i) => (
            <li key={i}>
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <span className="font-medium text-fg text-sm">{e.role}</span>
                <span className="text-fg-faint text-xs">·</span>
                {e.href ? (
                  <a
                    href={e.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent text-sm hover:underline"
                  >
                    {e.org}
                  </a>
                ) : (
                  <span className="text-accent text-sm">{e.org}</span>
                )}
                <span className="ml-auto font-mono text-xs text-fg-faint">{e.period}</span>
              </div>
              <p className="mt-1 text-sm text-fg-dim leading-relaxed">{e.blurb}</p>
            </li>
          ))}
          <li>
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
              <span className="font-medium text-fg text-sm">B.Sc. Computer Software Engineering</span>
              <span className="text-fg-faint text-xs">·</span>
              <span className="text-accent text-sm">Universität Duisburg-Essen</span>
              <span className="ml-auto font-mono text-xs text-fg-faint">2013 — 2019</span>
            </div>
          </li>
        </ol>
      </section>

      {/* ── Writing ──────────────────────────────────────────── */}
      {essays.length > 0 && (
        <section id="writing">
          <h2 className="section-label mb-5">Writing</h2>
          <div className="space-y-5">
            {essays.map((e) => (
              <Link
                key={e.slug}
                href={`/essays/${e.slug}`}
                className="group block"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-sm font-medium text-fg group-hover:text-accent">
                    {e.title}
                  </span>
                  <span className="font-mono text-xs text-fg-faint shrink-0">
                    {formatDate(e.date)}
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-fg-dim">{e.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── Contact ──────────────────────────────────────────── */}
      <section id="contact">
        <h2 className="section-label mb-3">Contact</h2>
        <p className="text-[0.95rem] text-fg-dim">
          If you&apos;re working on ITSM, enterprise workflow, service operations, or AI agents in
          production, I&apos;d like to hear from you.{" "}
          <a href="mailto:rakib@flowlakes.com" className="text-accent hover:underline">
            rakib@flowlakes.com
          </a>
        </p>
      </section>

    </main>
  );
}

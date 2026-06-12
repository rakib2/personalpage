import Link from "next/link";
import { profile } from "@/content/profile";

/** Publication header for the home page. */
export function Masthead() {
  const { publication } = profile;
  return (
    <section className="border-b border-[var(--panel-border)] pb-10 pt-16 sm:pt-24">
      <div className="mb-5 flex items-center gap-3">
        <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
        <span className="label text-accent/90">{publication.kicker}</span>
        <span className="font-mono text-[0.6rem] tracking-widest text-fg-faint">
          by {profile.name}
        </span>
      </div>

      <h1 className="text-5xl font-semibold tracking-tight glow-text sm:text-7xl">
        {publication.name}
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg-dim sm:text-lg">
        {publication.tagline}
      </p>

      <p className="mt-5 font-mono text-xs text-fg-faint">
        Here for me, not the writing?{" "}
        <Link href="/profile" className="text-accent underline underline-offset-2">
          open my profile →
        </Link>
      </p>
    </section>
  );
}

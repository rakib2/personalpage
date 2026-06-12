import Link from "next/link";
import type { EssayMeta } from "@/lib/essays";
import { formatDate } from "@/lib/essays";

export function EssayCard({
  essay,
  featured = false,
}: {
  essay: EssayMeta;
  featured?: boolean;
}) {
  const Meta = (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-fg-faint">
      <span>{formatDate(essay.date)}</span>
      <span>·</span>
      <span>{essay.readingMinutes} min read</span>
      {featured && (
        <span className="label flex items-center gap-1.5 text-amber/90">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber" />
          featured
        </span>
      )}
    </div>
  );

  if (featured) {
    return (
      <Link href={`/essays/${essay.slug}`} className="panel group block p-6 sm:p-8">
        {Meta}
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-fg group-hover:text-accent sm:text-3xl">
          {essay.title}
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-fg-dim">{essay.summary}</p>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {essay.tags.map((t) => (
            <span
              key={t}
              className="border border-[var(--panel-border)] px-2 py-0.5 font-mono text-[0.65rem] text-fg-dim"
            >
              {t}
            </span>
          ))}
          <span className="ml-auto font-mono text-xs text-fg-faint group-hover:text-accent">
            read →
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/essays/${essay.slug}`}
      className="group block border-b border-[var(--panel-border)] py-6"
    >
      {Meta}
      <h3 className="mt-2 text-xl font-medium text-fg group-hover:text-accent">
        {essay.title}
      </h3>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fg-dim">{essay.summary}</p>
    </Link>
  );
}

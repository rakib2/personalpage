import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getEssay, getEssaySlugs, formatDate } from "@/lib/essays";
import { EssayBody } from "@/components/essay/EssayBody";
import { profile } from "@/content/profile";

export function generateStaticParams() {
  return getEssaySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const essay = getEssay(slug);
  if (!essay) return { title: "Not found" };
  return {
    title: `${essay.title} — ${profile.publication.name}`,
    description: essay.summary,
    openGraph: { title: essay.title, description: essay.summary, type: "article" },
  };
}

export default async function EssayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const essay = getEssay(slug);
  if (!essay) notFound();

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 sm:px-6">
      <div className="pt-12 sm:pt-16">
        <Link
          href="/#writing"
          className="label text-fg-dim hover:text-accent"
        >
          ← {profile.publication.name}
        </Link>
      </div>

      <article className="py-10">
        <header className="border-b border-[var(--panel-border)] pb-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-fg-faint">
            <span>{formatDate(essay.date)}</span>
            <span>·</span>
            <span>{essay.readingMinutes} min read</span>
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight glow-text sm:text-5xl">
            {essay.title}
          </h1>
          {essay.summary && (
            <p className="mt-4 text-lg leading-relaxed text-fg-dim">{essay.summary}</p>
          )}
          {essay.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {essay.tags.map((t) => (
                <span
                  key={t}
                  className="border border-[var(--panel-border)] px-2 py-0.5 font-mono text-[0.65rem] text-fg-dim"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="mt-10">
          <EssayBody content={essay.content} />
        </div>
      </article>

      <div className="border-t border-[var(--panel-border)] py-8">
        <Link href="/#writing" className="label text-accent hover:underline">
          ← back to all essays
        </Link>
      </div>
    </main>
  );
}

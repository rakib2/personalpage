import { Masthead } from "@/components/publication/Masthead";
import { EssayCard } from "@/components/publication/EssayCard";
import { getAllEssays, getFeaturedEssay } from "@/lib/essays";

export default function Home() {
  const all = getAllEssays();
  const featured = getFeaturedEssay();
  const rest = all.filter((e) => e.slug !== featured?.slug);

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 sm:px-6">
      <Masthead />

      {featured && (
        <div className="mt-10">
          <EssayCard essay={featured} featured />
        </div>
      )}

      <section className="mt-12">
        <div className="mb-2 flex items-center gap-3">
          <span className="label text-accent/90">// all essays</span>
          <span className="h-px flex-1 bg-[var(--panel-border)]" />
          <span className="font-mono text-xs text-fg-faint">{all.length} total</span>
        </div>

        {rest.length === 0 && !featured ? (
          <p className="py-10 font-mono text-sm text-fg-faint">
            No essays yet — add a markdown file to content/essays/.
          </p>
        ) : (
          <div>
            {rest.map((essay) => (
              <EssayCard key={essay.slug} essay={essay} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

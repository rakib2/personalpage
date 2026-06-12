import { profile } from "@/content/profile";
import { Panel } from "@/components/hud/Panel";

export function Papers() {
  return (
    <Panel id="papers" label="// research log" className="animate-rise">
      {profile.papers.length === 0 ? (
        <p className="font-mono text-sm text-fg-faint">no entries yet — add to content/profile.ts</p>
      ) : (
        <ul className="divide-y divide-[var(--panel-border)]">
          {profile.papers.map((p, i) => (
            <li key={i} className="group py-5 first:pt-0 last:pb-0">
              <a href={p.href} target="_blank" rel="noreferrer" className="block">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-accent/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-fg group-hover:text-accent">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-fg-dim">{p.authors}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                      <span className="label text-amber/90">{p.venue}</span>
                      <span className="font-mono text-xs text-fg-faint">{p.year}</span>
                      {p.tags?.map((t) => (
                        <span
                          key={t}
                          className="border border-[var(--panel-border)] px-2 py-0.5 font-mono text-[0.65rem] text-fg-dim"
                        >
                          {t}
                        </span>
                      ))}
                      <span className="ml-auto font-mono text-xs text-fg-faint group-hover:text-accent">
                        read ↗
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </Panel>
  );
}

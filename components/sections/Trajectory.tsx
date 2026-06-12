import { profile } from "@/content/profile";
import { Panel } from "@/components/hud/Panel";

export function Trajectory() {
  return (
    <Panel id="trajectory" label="// trajectory" className="animate-rise">
      {profile.experience.length === 0 ? (
        <p className="font-mono text-sm text-fg-faint">no entries yet — add to content/profile.ts</p>
      ) : (
        <ol className="relative ml-2 border-l border-[var(--panel-border)]">
          {profile.experience.map((e, i) => {
            const inner = (
              <>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg font-medium text-fg group-hover:text-accent">
                    {e.role}
                  </h3>
                  <span className="text-fg-faint">·</span>
                  <span className="font-mono text-sm text-amber/90">{e.org}</span>
                  {e.current && (
                    <span className="label flex items-center gap-1.5 text-accent">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
                      active
                    </span>
                  )}
                  <span className="ml-auto font-mono text-xs text-fg-faint">{e.period}</span>
                </div>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fg-dim">{e.blurb}</p>
                {e.tags && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {e.tags.map((t) => (
                      <span
                        key={t}
                        className="border border-[var(--panel-border)] px-2 py-0.5 font-mono text-[0.65rem] text-fg-dim"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </>
            );

            return (
              <li key={i} className="group relative py-5 pl-6 first:pt-0 last:pb-0">
                <span className="absolute -left-[5px] top-6 h-2.5 w-2.5 border border-accent bg-bg first:top-1" />
                {e.href ? (
                  <a href={e.href} target="_blank" rel="noreferrer" className="block">
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </li>
            );
          })}
        </ol>
      )}
    </Panel>
  );
}

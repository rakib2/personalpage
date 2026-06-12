import { profile } from "@/content/profile";
import { Panel } from "@/components/hud/Panel";

export function Videos() {
  return (
    <Panel id="videos" label="// transmissions" className="animate-rise">
      {profile.videos.length === 0 ? (
        <p className="font-mono text-sm text-fg-faint">no transmissions yet — add to content/profile.ts</p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2">
          {profile.videos.map((v) => (
            <a
              key={v.youtubeId}
              href={`https://www.youtube.com/watch?v=${v.youtubeId}`}
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <div className="relative aspect-video overflow-hidden border border-[var(--panel-border)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`}
                  alt={v.title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-80 transition group-hover:scale-[1.03] group-hover:opacity-100"
                />
                <div className="scanlines pointer-events-none absolute inset-0" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/60 bg-[rgba(5,8,13,0.55)] text-accent backdrop-blur-sm transition group-hover:scale-110 group-hover:bg-[rgba(56,225,216,0.15)]">
                    ▶
                  </span>
                </div>
                <span className="absolute left-2 top-2 label bg-[rgba(5,8,13,0.7)] px-2 py-1 text-accent/90">
                  REC
                </span>
              </div>
              <div className="mt-3 flex items-baseline justify-between gap-3">
                <h3 className="text-sm font-medium text-fg group-hover:text-accent">{v.title}</h3>
                {v.date && <span className="font-mono text-xs text-fg-faint">{v.date}</span>}
              </div>
            </a>
          ))}
        </div>
      )}
    </Panel>
  );
}

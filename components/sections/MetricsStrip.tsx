import { profile } from "@/content/profile";

/** Row of HUD readouts. PAPERS/VIDEOS auto-fill from your content. */
export function MetricsStrip() {
  const metrics = profile.metrics.map((m) => {
    if (m.label === "VIDEOS") return { ...m, value: String(profile.videos.length) };
    return m;
  });

  return (
    <div className="grid grid-cols-2 gap-px border border-[var(--panel-border)] bg-[var(--panel-border)] sm:grid-cols-4">
      {metrics.map((m) => (
        <div key={m.label} className="bg-bg-soft p-4 sm:p-5">
          <div className="label text-fg-faint">{m.label}</div>
          <div className="mt-2 font-mono text-2xl text-fg glow-text">{m.value}</div>
          {typeof m.progress === "number" && (
            <div className="bar-track mt-3 h-1 w-full">
              <div className="bar-fill h-full" style={{ width: `${m.progress}%` }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

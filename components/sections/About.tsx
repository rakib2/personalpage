import { profile } from "@/content/profile";
import { Panel } from "@/components/hud/Panel";

export function About() {
  return (
    <Panel id="about" label="// about" className="animate-rise">
      <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
        <p className="text-lg leading-relaxed text-fg sm:text-xl">{profile.bio}</p>

        <div className="space-y-3 font-mono text-sm">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center justify-between border-b border-[var(--panel-border)] pb-2 text-fg-dim hover:text-accent"
            >
              <span className="label text-fg-faint group-hover:text-accent/80">
                {s.label}
              </span>
              <span className="truncate pl-4">{s.handle ?? "open"} ↗</span>
            </a>
          ))}
        </div>
      </div>
    </Panel>
  );
}

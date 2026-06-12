import { profile } from "@/content/profile";
import { Panel } from "@/components/hud/Panel";

export function Contact() {
  const email = profile.socials.find((s) => s.label === "Email");

  return (
    <Panel id="contact" label="// establish link" className="animate-rise">
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-fg sm:text-3xl glow-text">
            Open a channel.
          </h2>
          <p className="mt-2 max-w-md text-fg-dim">
            Research collaborations, builds, or just to compare notes — I read everything.
          </p>
        </div>
        {email && (
          <a
            href={email.href}
            className="shrink-0 border border-[var(--panel-border-strong)] bg-[rgba(56,225,216,0.06)] px-6 py-3 font-mono text-sm text-accent hover:bg-[rgba(56,225,216,0.14)]"
          >
            {email.handle} →
          </a>
        )}
      </div>
    </Panel>
  );
}

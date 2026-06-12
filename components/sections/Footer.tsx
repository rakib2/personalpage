import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--panel-border)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 font-mono text-xs text-fg-faint sm:flex-row sm:px-6">
        <span>
          © {profile.name} · built as mission control
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
          {profile.status} · v0.1
        </span>
      </div>
    </footer>
  );
}

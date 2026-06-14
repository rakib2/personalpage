import Link from "next/link";
import { profile } from "@/content/profile";

export function StatusBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--panel-border)] bg-[rgba(5,8,13,0.85)] backdrop-blur-md">
      <div className="mx-auto flex h-11 max-w-2xl items-center justify-between px-5 sm:px-6">
        <Link href="/" className="font-mono text-sm text-fg hover:text-accent">
          {profile.name}
        </Link>

        <nav className="flex items-center gap-6 font-mono text-xs text-fg-dim">
          <a href="/#writing" className="hover:text-accent">Writing</a>
          <a href="/#experience" className="hover:text-accent">Experience</a>
          <a href="mailto:rakib@flowlakes.com" className="hover:text-accent">Contact</a>
        </nav>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { useActionState } from "react";
import { profile } from "@/content/profile";
import { login, type LoginState } from "./actions";

const initial: LoginState = { error: null };

export function LoginForm({ next }: { next: string }) {
  const [state, formAction, pending] = useActionState(login, initial);

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
          <span className="label text-accent/90">openclaw // secure</span>
        </div>

        <form action={formAction} className="panel p-7">
          <input type="hidden" name="next" value={next} />

          <h1 className="text-2xl font-semibold tracking-tight glow-text">
            Authenticate
          </h1>
          <p className="mt-2 text-sm text-fg-dim">
            Restricted area. Enter the passphrase to reach mission control.
          </p>

          <label className="label mt-7 block text-fg-faint" htmlFor="password">
            passphrase
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoFocus
            autoComplete="current-password"
            className="mt-2 w-full border border-[var(--panel-border)] bg-bg-soft px-3 py-2.5 font-mono text-sm text-fg outline-none focus:border-[var(--panel-border-strong)]"
            placeholder="••••••••••"
          />

          {state.error && (
            <p className="mt-3 font-mono text-xs text-amber glow-amber">⚠ {state.error}</p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="mt-6 w-full border border-[var(--panel-border-strong)] bg-[rgba(56,225,216,0.08)] px-5 py-2.5 font-mono text-sm text-accent hover:bg-[rgba(56,225,216,0.16)] disabled:opacity-50"
          >
            {pending ? "verifying…" : "unlock →"}
          </button>
        </form>

        <Link
          href="/"
          className="mt-5 inline-block font-mono text-xs text-fg-faint hover:text-accent"
        >
          ← back to {profile.publication.name}
        </Link>
      </div>
    </main>
  );
}

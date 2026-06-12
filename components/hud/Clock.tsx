"use client";

import { useEffect, useState } from "react";

/** Live UTC clock for the status bar. Renders nothing until mounted to avoid hydration mismatch. */
export function Clock() {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const hh = String(d.getUTCHours()).padStart(2, "0");
      const mm = String(d.getUTCMinutes()).padStart(2, "0");
      const ss = String(d.getUTCSeconds()).padStart(2, "0");
      setNow(`${hh}:${mm}:${ss} UTC`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="font-mono text-xs tabular-nums text-fg-dim" suppressHydrationWarning>
      {now ?? "--:--:-- UTC"}
    </span>
  );
}

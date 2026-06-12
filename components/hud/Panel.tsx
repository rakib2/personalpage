import { cn } from "@/lib/utils";

/**
 * A corner-bracketed HUD panel. Optional `label` renders a small
 * monospace tab in the top-left, like a readout on a heads-up display.
 */
export function Panel({
  label,
  className,
  children,
  id,
}: {
  label?: string;
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={cn("panel p-6 sm:p-8", className)}>
      {label && (
        <div className="mb-5 flex items-center gap-3">
          <span className="label text-accent/90">{label}</span>
          <span className="h-px flex-1 bg-[var(--panel-border)]" />
        </div>
      )}
      {children}
    </section>
  );
}

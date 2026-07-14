import { cn } from "@/lib/utils";

interface SectionLabelProps {
  number: string;
  label: string;
  className?: string;
}

export function SectionLabel({ number, label, className }: SectionLabelProps) {
  return (
    <div className={cn("mb-8 flex items-center gap-4", className)}>
      <span className="section-label">{number}</span>
      <div className="h-px flex-1 bg-border" />
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        {label}
      </span>
    </div>
  );
}

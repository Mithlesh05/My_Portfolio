import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function GlassCard({
  className,
  hover = true,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 md:p-8",
        hover && "transition-all duration-500 hover:bg-white/[0.06] hover:border-white/[0.15]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

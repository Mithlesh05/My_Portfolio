"use client";

import { cn } from "@/lib/utils";
import { useMagnetic } from "@/hooks/useMagnetic";
import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from "react";

type MagneticButtonProps = (
  | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
) & {
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
};

const variants = {
  primary:
    "bg-accent text-white hover:bg-accent/90 shadow-[0_0_40px_rgba(220,38,38,0.35)]",
  secondary:
    "glass text-text hover:bg-white/[0.08] hover:border-accent/30",
  ghost: "text-muted hover:text-accent",
};

export const MagneticButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  MagneticButtonProps
>(function MagneticButton(
  { variant = "primary", className, children, href, type, ...props },
  forwardedRef
) {
  const magneticRef = useMagnetic<HTMLButtonElement | HTMLAnchorElement>(0.25);
  const classes = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-mono text-sm font-medium transition-colors duration-300",
    variants[variant],
    className
  );

  if (href) {
    return (
      <a
        ref={(node) => {
          (magneticRef as React.MutableRefObject<HTMLAnchorElement | null>).current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) forwardedRef.current = node;
        }}
        href={href}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={(node) => {
        (magneticRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
        if (typeof forwardedRef === "function") forwardedRef(node);
        else if (forwardedRef) forwardedRef.current = node;
      }}
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      type={(type as ButtonHTMLAttributes<HTMLButtonElement>["type"]) ?? "button"}
    >
      {children}
    </button>
  );
});

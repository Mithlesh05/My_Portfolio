"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  splitBy?: "char" | "word";
}

export function TextReveal({
  text,
  className,
  as: Tag = "span",
  delay = 0,
  splitBy = "char",
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGSAP();
    const el = ref.current;
    if (!el) return;

    const units =
      splitBy === "word"
        ? text.split(" ").map((w) => w + "\u00A0")
        : text.split("");

    el.innerHTML = units
      .map(
        (unit) =>
          `<span class="inline-block overflow-hidden"><span class="reveal-unit inline-block translate-y-full">${unit === " " ? "&nbsp;" : unit}</span></span>`
      )
      .join(splitBy === "word" ? "" : "");

    const units_el = el.querySelectorAll(".reveal-unit");
    gsap.to(units_el, {
      y: 0,
      duration: 0.8,
      stagger: splitBy === "word" ? 0.06 : 0.03,
      delay,
      ease: "power3.out",
    });
  }, [text, delay, splitBy]);

  return (
    <Tag ref={ref as React.RefObject<HTMLHeadingElement>} className={cn(className)}>
      {text}
    </Tag>
  );
}

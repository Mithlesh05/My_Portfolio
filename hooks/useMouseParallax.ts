"use client";

import { useEffect, useRef } from "react";
import { lerp } from "@/lib/utils";

interface MouseParallaxOptions {
  intensity?: number;
  enabled?: boolean;
}

export function useMouseParallax<T extends HTMLElement>(
  options: MouseParallaxOptions = {}
) {
  const { intensity = 20, enabled = true } = options;
  const ref = useRef<T>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      target.current.x = ((e.clientX - cx) / rect.width) * intensity;
      target.current.y = ((e.clientY - cy) / rect.height) * intensity;
    };

    const animate = () => {
      current.current.x = lerp(current.current.x, target.current.x, 0.08);
      current.current.y = lerp(current.current.y, target.current.y, 0.08);
      el.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId.current);
    };
  }, [enabled, intensity]);

  return ref;
}

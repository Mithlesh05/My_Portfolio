"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGSAP } from "@/lib/gsap";
import { introLines } from "@/lib/data/content";

export function IntroStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    registerGSAP();
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${introLines.length * 90}%`,
          pin: container,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      linesRef.current.forEach((line, i) => {
        if (!line) return;
        if (i === 0) {
          gsap.set(line, { opacity: 1, y: 0 });
        } else {
          gsap.set(line, { opacity: 0, y: 50 });
        }
        if (i > 0) {
          tl.to(linesRef.current[i - 1], { opacity: 0, y: -30, duration: 0.4 }, i).to(
            line,
            { opacity: 1, y: 0, duration: 0.4 },
            i + 0.1
          );
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="intro"
      className="relative overflow-hidden bg-void"
      aria-label="Philosophy"
    >
      {/* Animated wave / grid at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-crimson/5 to-transparent" />
        <svg
          className="absolute bottom-0 w-full opacity-30"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7f1d1d" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#dc2626" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#9f1239" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGrad)"
            d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,186.7C672,192,768,160,864,144C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(220,38,38,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div
        ref={containerRef}
        className="relative flex min-h-screen items-center justify-center px-5"
      >
        <div className="relative mx-auto max-w-4xl text-center">
          {introLines.map((line, i) => (
            <p
              key={line}
              ref={(el) => {
                linesRef.current[i] = el;
              }}
              className={`absolute inset-x-0 font-display text-[clamp(1.75rem,5vw,3.75rem)] font-bold leading-tight tracking-tight ${
                i === introLines.length - 1 ? "text-gradient" : "text-white"
              }`}
              style={{ top: "50%", transform: "translateY(-50%)" }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

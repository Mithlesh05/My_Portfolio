"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGSAP } from "@/lib/gsap";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { achievements } from "@/lib/data/content";

const icons = ["◈", "♥", "◉", "✦"];

export function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGSAP();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stat-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="relative overflow-hidden section-padding"
      aria-label="Achievements"
    >
      <span
        className="section-number right-0 top-4 text-[10rem] md:text-[16rem]"
        aria-hidden
      >
        06
      </span>
      <div className="red-glow left-1/3 top-0 h-[300px] w-[300px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent-bright">
            Achievements
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-tight">
            Numbers That{" "}
            <span className="text-gradient">Define Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {achievements.map((item, i) => (
            <div
              key={item.id}
              className="stat-card glass group rounded-2xl p-6 text-center transition-all duration-300 hover:border-accent/30 hover:shadow-glow md:p-8"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-xl text-accent-bright shadow-glow-sm">
                {icons[i]}
              </div>
              <p className="mb-2 font-display text-3xl font-bold md:text-4xl lg:text-5xl">
                <AnimatedCounter value={item.value} suffix={item.suffix} />
              </p>
              <p className="text-xs font-medium uppercase tracking-wider text-muted group-hover:text-accent-bright md:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

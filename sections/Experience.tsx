"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGSAP } from "@/lib/gsap";
import { experience } from "@/lib/data/experience";

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
            end: "bottom 40%",
            scrub: 1,
          },
        }
      );

      gsap.utils.toArray<HTMLElement>(".exp-card").forEach((card) => {
        gsap.fromTo(
          card,
          { x: 40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative overflow-hidden section-padding"
      aria-label="Experience"
    >
      <span
        className="section-number -left-4 top-8 text-[10rem] md:text-[16rem]"
        aria-hidden
      >
        05
      </span>

      <div className="relative mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent-bright">
            Experience
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-tight">
            My Journey{" "}
            <span className="text-gradient">So Far</span>
          </h2>
        </div>

        <div className="relative pl-8 md:pl-14">
          <div
            ref={lineRef}
            className="absolute left-3 top-0 h-full w-0.5 bg-gradient-to-b from-accent via-violet to-blue md:left-5"
          />

          <div className="space-y-10">
            {experience.map((entry) => (
              <div key={entry.id} className="exp-card relative">
                <div className="absolute -left-[1.4rem] top-6 h-3.5 w-3.5 rounded-full border-2 border-accent bg-void shadow-glow-sm md:-left-[2.35rem] md:h-4 md:w-4" />

                <div className="glass rounded-2xl p-6 md:p-8">
                  <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-bold md:text-2xl">
                      {entry.role}
                    </h3>
                    <span className="text-xs font-medium text-accent-bright">
                      {entry.period}
                    </span>
                  </div>
                  <p className="mb-4 text-sm font-semibold text-violet">
                    {entry.company}
                  </p>
                  <p className="leading-relaxed text-muted">{entry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

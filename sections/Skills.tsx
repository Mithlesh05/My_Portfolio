"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap, registerGSAP } from "@/lib/gsap";
import { skillTabs } from "@/lib/data/skills";
import { cn } from "@/lib/utils";

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(skillTabs[0].id);
  const current = skillTabs.find((t) => t.id === active) ?? skillTabs[0];

  useEffect(() => {
    registerGSAP();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skills-header",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
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
      id="skills"
      className="relative overflow-hidden section-padding"
      aria-label="Skills"
    >
      <span
        className="section-number -left-2 top-8 text-[10rem] md:text-[16rem]"
        aria-hidden
      >
        03
      </span>
      <div className="red-glow right-0 top-1/4 h-[350px] w-[350px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="skills-header mb-12 text-center md:mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent-bright">
            Skills
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-tight">
            Technologies I{" "}
            <span className="text-gradient">Work With</span>
          </h2>
        </div>

        {/* Tab bar */}
        <div
          className="mb-10 flex flex-wrap justify-center gap-2 md:gap-3"
          role="tablist"
          aria-label="Skill categories"
        >
          {skillTabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={active === tab.id}
              onClick={() => setActive(tab.id)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
                active === tab.id
                  ? "bg-gradient-red text-white shadow-glow-sm"
                  : "glass text-muted hover:text-white"
              )}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Skill cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            role="tabpanel"
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            {current.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                className="glass group rounded-2xl p-6 text-center transition-all duration-300 hover:border-accent/40 hover:shadow-glow-sm md:p-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-2xl text-accent-bright shadow-glow-sm transition-all group-hover:bg-accent/20">
                  {skill.icon}
                </div>
                <h3 className="font-display text-base font-semibold md:text-lg">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

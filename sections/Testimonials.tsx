"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data/content";

const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const visible = [
    testimonials[index % testimonials.length],
    testimonials[(index + 1) % testimonials.length],
    testimonials[(index + 2) % testimonials.length],
  ];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden section-padding"
      aria-label="Testimonials"
    >
      <span
        className="section-number -left-2 top-6 text-[10rem] md:text-[16rem]"
        aria-hidden
      >
        07
      </span>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent-bright">
            Testimonials
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-tight">
            What People Say{" "}
            <span className="text-gradient">About Me</span>
          </h2>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              {visible.map((t, i) => {
                const avatarIdx =
                  (index + i) % avatars.length;
                return (
                  <div
                    key={`${t.id}-${i}`}
                    className="glass rounded-2xl p-6 md:p-8"
                  >
                    <p className="mb-8 text-base leading-relaxed text-white/80">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="relative h-11 w-11 overflow-hidden rounded-full border border-accent/30">
                        <Image
                          src={avatars[avatarIdx]}
                          alt={t.author}
                          fill
                          className="object-cover"
                          sizes="44px"
                        />
                      </div>
                      <div>
                        <p className="font-display text-sm font-semibold">
                          {t.author}
                        </p>
                        <p className="text-xs text-muted">
                          {t.role}, {t.company}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex justify-center gap-3">
            <button
              onClick={prev}
              className="glass flex h-11 w-11 items-center justify-center rounded-full text-white transition-all hover:border-accent/40 hover:shadow-glow-sm"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              onClick={next}
              className="glass flex h-11 w-11 items-center justify-center rounded-full text-white transition-all hover:border-accent/40 hover:shadow-glow-sm"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

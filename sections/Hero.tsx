"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap, registerGSAP } from "@/lib/gsap";
import { socialLinks } from "@/lib/data/content";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-line",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          delay: 0.2,
          ease: "power3.out",
        }
      );

      gsap.to(".hero-bg-img", {
        y: 120,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Hero banner — portrait with left space for copy */}
      <div className="hero-bg-img absolute inset-0 scale-110">
        <Image
          src="/images/hero-banner.png"
          alt="Mithlesh Singh"
          fill
          priority
          className="object-cover object-[70%_center] md:object-right"
          sizes="100vw"
        />
        {/* Dark overlays for readable text on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        {/* Shift purple/blue accents toward dark red */}
        <div className="absolute inset-0 bg-accent/20 mix-blend-color" />
        <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
      </div>

      {/* Red ambient glow */}
      <div className="red-glow left-1/4 top-1/3 h-[400px] w-[400px]" />

      {/* Large section number — left side, clear of the face */}
      <span
        className="section-number left-2 top-[58%] -translate-y-1/2 text-[7rem] opacity-45 md:left-6 md:text-[11rem] lg:left-8 lg:text-[13rem]"
        aria-hidden
      >
        01
      </span>

      <div
        ref={contentRef}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 py-32 md:px-10 lg:px-16"
      >
        <p className="hero-line mb-4 text-sm font-medium tracking-wide text-white/70 md:text-base">
          Hi, I&apos;m
        </p>

        <h1 className="hero-line mb-4 font-display text-[clamp(2.5rem,8vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight text-white">
          MITHLESH SINGH
        </h1>

        <p className="hero-line mb-6 text-lg font-semibold text-accent-bright md:text-xl">
          Full Stack Developer
        </p>

        <p className="hero-line mb-10 max-w-md text-base leading-relaxed text-white/60 md:text-lg">
          I build scalable digital experiences that blend engineering excellence
          with cinematic design.
        </p>

        <div className="hero-line flex flex-wrap gap-4">
          <a href="#work" className="btn-primary">
            View My Work
          </a>
          <a
            href="/resume.pdf"
            download="Mithlesh_Kumar_Singh_CV.pdf"
            className="btn-outline"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Vertical social sidebar */}
      <div className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-5 md:right-8 md:flex lg:right-12">
        <div className="h-12 w-px bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            {...(link.href.startsWith("mailto:")
              ? {}
              : { target: "_blank", rel: "noopener noreferrer" })}
            className="text-[10px] font-medium uppercase tracking-widest text-white/40 transition-colors hover:text-accent-bright [writing-mode:vertical-rl]"
            aria-label={link.label}
          >
            {link.label}
          </a>
        ))}
        <div className="h-12 w-px bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        aria-hidden
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
          Scroll Down
        </span>
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/25 p-1">
          <motion.div
            className="h-1.5 w-1.5 rounded-full bg-accent-bright"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

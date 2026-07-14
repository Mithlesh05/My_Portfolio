"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, registerGSAP } from "@/lib/gsap";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGSAP();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-content > *",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".about-portrait",
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
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
      id="about"
      className="relative overflow-hidden section-padding"
      aria-label="About"
    >
      <span
        className="section-number -right-4 top-10 text-[10rem] md:text-[16rem]"
        aria-hidden
      >
        02
      </span>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="about-content">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent-bright">
            About Me
          </p>
          <h2 className="mb-6 font-display text-[clamp(2rem,4vw,3.25rem)] font-bold leading-tight tracking-tight">
            From Curiosity to{" "}
            <span className="text-gradient">Creation</span>
          </h2>
          <div className="mb-8 text-base leading-relaxed text-muted md:text-lg">
            <p>
              I&apos;m Mithlesh Singh, a Full Stack Developer passionate about
              building modern and scalable web applications. I combine clean
              design with powerful functionality to create fast, user-friendly,
              and reliable digital experiences.
            </p>
          </div>
          <a href="#contact" className="btn-primary">
            Know More About Me
          </a>
        </div>

        <div className="about-portrait relative mx-auto w-full max-w-md">
          {/* Purple circular glow */}
          <div className="absolute -inset-8 rounded-full bg-accent/25 blur-[80px]" />
          <div className="absolute -inset-4 rounded-full border border-accent/20" />
          <div
            className="absolute -inset-12 rounded-full opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(220,38,38,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.4) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              maskImage: "radial-gradient(circle, black 40%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(circle, black 40%, transparent 70%)",
            }}
          />

          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 shadow-glow-lg">
            <Image
              src="/images/mithlesh-portrait.png"
              alt="Mithlesh Singh"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
            {/* Soft red wash to match dark-red theme over purple rim light */}
            <div className="absolute inset-0 bg-accent/15 mix-blend-color" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, registerGSAP } from "@/lib/gsap";
import { projects } from "@/lib/data/projects";

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGSAP();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.2,
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
      id="work"
      className="relative overflow-hidden section-padding"
      aria-label="Projects"
    >
      <span
        className="section-number right-0 top-6 text-[10rem] md:text-[16rem]"
        aria-hidden
      >
        04
      </span>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent-bright">
              Projects
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-tight">
              Things I&apos;ve{" "}
              <span className="text-gradient">Built</span>
            </h2>
          </div>
          <a href="#work" className="btn-outline !px-5 !py-2.5 text-xs">
            View All Projects →
          </a>
        </div>

        <div className="space-y-10 md:space-y-14">
          {projects.map((project, i) => {
            const reverse = i % 2 === 1;

            return (
              <article
                key={project.id}
                className={[
                  "project-card group glass relative grid overflow-hidden rounded-3xl",
                  "grid-cols-1 md:grid-cols-2",
                  reverse ? "md:[&>.project-copy]:order-2" : "",
                ].join(" ")}
              >
                {/* Text */}
                <div className="project-copy flex flex-col justify-center p-6 md:p-10 lg:p-12">
                  <span className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent-bright">
                    {project.year}
                  </span>
                  <h3 className="mb-4 font-display text-2xl font-bold md:text-3xl lg:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mb-6 max-w-lg text-sm leading-relaxed text-muted md:text-base">
                    {project.description}
                  </p>
                  <div className="mb-8 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary !px-5 !py-2.5 text-xs"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline !px-5 !py-2.5 text-xs"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Image — stretches full column height like other cards */}
                <div className="relative min-h-[280px] w-full md:min-h-[420px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={i === 0}
                    className="object-cover"
                    style={{
                      objectPosition: project.imagePosition ?? "center top",
                    }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:bg-gradient-to-r md:from-black/25 md:via-transparent md:to-transparent" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

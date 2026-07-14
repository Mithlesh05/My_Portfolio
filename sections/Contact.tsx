"use client";

import { useState, useEffect, useRef } from "react";
import { gsap, registerGSAP } from "@/lib/gsap";
import { socialLinks, contactInfo } from "@/lib/data/content";

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    registerGSAP();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-reveal",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden section-padding"
      aria-label="Contact"
    >
      <span
        className="section-number right-0 top-4 text-[10rem] md:text-[16rem]"
        aria-hidden
      >
        06
      </span>

      {/* Nebula / planet glow */}
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-[280px] w-[280px] rounded-full border border-accent/20 bg-accent/5" />

      <div className="relative mx-auto max-w-7xl">
        <div className="contact-reveal mb-14 text-center md:text-left">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent-bright">
            Contact
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-tight tracking-tight">
            Let&apos;s Build Something{" "}
            <span className="text-gradient">Extraordinary</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — contact details */}
          <div className="contact-reveal space-y-8">
            <p className="max-w-md text-muted">
              Ready to bring your vision to life? Drop a message and let&apos;s
              create something that turns heads.
            </p>

            <div className="space-y-5">
              {[
                { label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
                { label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, "")}` },
                { label: "Location", value: contactInfo.location, href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm text-accent-bright">
                    {item.label[0]}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white transition-colors hover:text-accent-bright"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.href.startsWith("mailto:")
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                  className="glass flex h-11 w-11 items-center justify-center rounded-full text-xs font-medium text-muted transition-all hover:border-accent/40 hover:text-accent-bright hover:shadow-glow-sm"
                  aria-label={link.label}
                >
                  {link.label.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form
            onSubmit={handleSubmit}
            className="contact-reveal glass rounded-3xl p-7 md:p-10"
          >
            {(["name", "email", "message"] as const).map((field) => (
              <div key={field} className="relative mb-7">
                <label
                  htmlFor={`contact-${field}`}
                  className={`absolute left-0 text-xs transition-all duration-300 ${
                    focused === field || formState[field]
                      ? "-top-4 text-accent-bright"
                      : "top-3 text-muted"
                  }`}
                >
                  {field === "message"
                    ? "Your Message"
                    : field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {field === "message" ? (
                  <textarea
                    id={`contact-${field}`}
                    rows={4}
                    value={formState[field]}
                    onChange={(e) =>
                      setFormState({ ...formState, [field]: e.target.value })
                    }
                    onFocus={() => setFocused(field)}
                    onBlur={() => setFocused(null)}
                    className="w-full resize-none border-b border-white/10 bg-transparent pt-4 pb-2 text-white outline-none transition-colors focus:border-accent"
                    required
                  />
                ) : (
                  <input
                    id={`contact-${field}`}
                    type={field === "email" ? "email" : "text"}
                    value={formState[field]}
                    onChange={(e) =>
                      setFormState({ ...formState, [field]: e.target.value })
                    }
                    onFocus={() => setFocused(field)}
                    onBlur={() => setFocused(null)}
                    className="w-full border-b border-white/10 bg-transparent pt-4 pb-2 text-white outline-none transition-colors focus:border-accent"
                    required
                  />
                )}
              </div>
            ))}

            <button type="submit" className="btn-primary w-full">
              {submitted ? "Message Sent ✓" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

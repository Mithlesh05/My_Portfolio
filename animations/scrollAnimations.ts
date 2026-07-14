import { gsap, ScrollTrigger } from "@/lib/gsap";

export function createPinnedTimeline(
  trigger: gsap.DOMTarget,
  config: {
    start?: string;
    end?: string;
    pin?: boolean;
    scrub?: number | boolean;
    onUpdate?: (self: ScrollTrigger) => void;
  } = {}
) {
  return ScrollTrigger.create({
    trigger,
    start: config.start ?? "top top",
    end: config.end ?? "+=100%",
    pin: config.pin ?? true,
    scrub: config.scrub ?? 1,
    anticipatePin: 1,
    onUpdate: config.onUpdate,
  });
}

export function parallaxLayer(
  element: gsap.DOMTarget,
  speed: number,
  trigger: gsap.DOMTarget
) {
  return gsap.to(element, {
    y: () => speed * 100,
    ease: "none",
    scrollTrigger: {
      trigger,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
}

export function revealOnScroll(
  elements: gsap.TweenTarget,
  trigger: gsap.DOMTarget,
  options?: { stagger?: number; start?: string }
) {
  return gsap.fromTo(
    elements,
    { y: 80, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: options?.stagger ?? 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger,
        start: options?.start ?? "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );
}

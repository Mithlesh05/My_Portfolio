import { gsap } from "@/lib/gsap";

export function revealText(
  elements: gsap.TweenTarget,
  options?: { stagger?: number; delay?: number }
) {
  return gsap.fromTo(
    elements,
    {
      y: 80,
      opacity: 0,
      rotateX: -40,
    },
    {
      y: 0,
      opacity: 1,
      rotateX: 0,
      duration: 1,
      stagger: options?.stagger ?? 0.08,
      delay: options?.delay ?? 0,
      ease: "power3.out",
    }
  );
}

export function maskReveal(
  elements: gsap.TweenTarget,
  options?: { stagger?: number; delay?: number }
) {
  return gsap.fromTo(
    elements,
    {
      clipPath: "inset(0 100% 0 0)",
      opacity: 0,
    },
    {
      clipPath: "inset(0 0% 0 0)",
      opacity: 1,
      duration: 1.2,
      stagger: options?.stagger ?? 0.1,
      delay: options?.delay ?? 0,
      ease: "power4.inOut",
    }
  );
}

export function fadeUp(
  elements: gsap.TweenTarget,
  options?: { stagger?: number; delay?: number; y?: number }
) {
  return gsap.fromTo(
    elements,
    { y: options?.y ?? 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.9,
      stagger: options?.stagger ?? 0.12,
      delay: options?.delay ?? 0,
      ease: "power3.out",
    }
  );
}

export function scaleIn(elements: gsap.TweenTarget, delay = 0) {
  return gsap.fromTo(
    elements,
    { scale: 0.8, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      delay,
      ease: "power3.out",
    }
  );
}

"use client";

import { useEffect, useRef } from "react";
import { loadGsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !ref.current) return;
    const { gsap } = loadGsap();
    const el = ref.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [reducedMotion]);

  return ref;
}

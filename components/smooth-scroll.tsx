"use client";

import { useEffect, useState, type ReactNode } from "react";
import Lenis from "lenis";
import { loadGsap } from "@/lib/gsap";
import { LenisContext } from "@/lib/lenis-context";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const { gsap, ScrollTrigger } = loadGsap();
    const instance = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    instance.on("scroll", ScrollTrigger.update);

    const onTick = (time: number) => {
      instance.raf(time * 1000);
    };
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    // Exposes the instance to descendants (Nav's anchor scrolling) via
    // context; there's no way to hand off an imperatively created external
    // instance without a render.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLenis(instance);

    return () => {
      gsap.ticker.remove(onTick);
      instance.destroy();
      setLenis(null);
    };
  }, [reducedMotion]);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}

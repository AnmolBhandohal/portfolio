"use client";

import { useEffect, useRef } from "react";
import { loadGsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function SignalRail() {
  const progRef = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !progRef.current) return;
    const { gsap, ScrollTrigger } = loadGsap();
    const el = progRef.current;

    const ctx = gsap.context(() => {
      gsap.set(el, { scaleY: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });
      tl.to(el, { scaleY: 1, ease: "none" });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [reducedMotion]);

  return (
    <div className="rail" aria-hidden="true">
      <span className="rail-line" />
      <span className="rail-prog" ref={progRef} />
      <svg className="rail-gnd" width="26" height="18" viewBox="0 0 26 18">
        <path
          d="M13 0v4M4 6h18M8 10h10M11 14h4"
          stroke="#20242B"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

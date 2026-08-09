"use client";

import { useEffect, useRef } from "react";
import { loadGsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function Via({
  label,
  sectionId,
  kind = "via",
}: {
  label: string;
  sectionId: string;
  kind?: "pad" | "via";
}) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !wrapRef.current) return;
    const { ScrollTrigger } = loadGsap();
    const section = document.getElementById(sectionId);
    if (!section) return;
    const el = wrapRef.current;

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top 70%",
      end: "bottom 30%",
      onEnter: () => el.classList.add("is-energized"),
      onEnterBack: () => el.classList.add("is-energized"),
      onLeave: () => el.classList.remove("is-energized"),
      onLeaveBack: () => el.classList.remove("is-energized"),
    });

    return () => trigger.kill();
  }, [reducedMotion, sectionId]);

  return (
    <span className="via" ref={wrapRef}>
      <svg className="tap" width="72" height="24" viewBox="0 0 72 24" aria-hidden="true">
        {kind === "pad" ? (
          <>
            <rect x="30" y="6" width="12" height="12" fill="#B06A2E" />
            <path d="M42 12h30" stroke="#20242B" strokeWidth="2" />
          </>
        ) : (
          <>
            <circle cx="36" cy="12" r="5.5" fill="#F6F5EF" stroke="#B06A2E" strokeWidth="2.5" />
            <path d="M42 12h30" stroke="#20242B" strokeWidth="2" />
          </>
        )}
      </svg>
      <span className="tp">{label}</span>
    </span>
  );
}

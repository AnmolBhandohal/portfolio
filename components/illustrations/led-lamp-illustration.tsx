"use client";

import { useEffect, useRef } from "react";
import { loadGsap } from "@/lib/gsap";
import { primeDraw } from "@/lib/draw-path";

export function LedLampIllustration() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const { gsap } = loadGsap();
    const root = svgRef.current;
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const feedback = root.querySelector<SVGPathElement>("#ll-feedback")!;
      const arrow = root.querySelector<SVGPathElement>("#ll-feedback-arrow")!;

      primeDraw(feedback);
      gsap.set(arrow, { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: root, start: "top 85%", once: true },
      });
      tl.to(feedback, {
        strokeDashoffset: 0,
        duration: 0.9,
        ease: "power1.inOut",
      }).to(arrow, { opacity: 1, duration: 0.25 }, ">");
    });

    return () => mm.revert();
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 360 250"
      role="img"
      aria-label="Control loop block diagram: setpoint into a summing junction, PWM driver, LED, light sensed by a photoresistor and fed back to close the loop"
    >
      {/* setpoint */}
      <rect className="d" x="16" y="44" width="80" height="32" />
      <text className="lbl" x="26" y="64" fill="#20242B">
        Setpoint
      </text>
      <path className="d" d="M96 60h20" />
      <path d="M116 60l-8-4v8z" fill="#20242B" />
      {/* summing junction */}
      <circle className="d" cx="132" cy="60" r="14" />
      <text className="lbl" x="127" y="65" fill="#20242B" fontSize="12">
        Σ
      </text>
      <text className="lbl" x="104" y="50">
        +
      </text>
      <text className="lbl" x="138" y="92">
        −
      </text>
      {/* error → pwm */}
      <path className="d" d="M146 60h22" />
      <path d="M168 60l-8-4v8z" fill="#20242B" />
      <text className="lbl" x="144" y="46">
        err
      </text>
      <rect className="d" x="168" y="44" width="86" height="32" />
      <text className="lbl" x="178" y="64" fill="#20242B">
        PWM 5 kHz
      </text>
      {/* pwm → LED */}
      <path className="d" d="M254 60h30" />
      <path d="M284 60l-8-4v8z" fill="#20242B" />
      {/* LED symbol */}
      <path className="d" d="M284 44v32M284 60l26-16v32z" />
      <path className="d" d="M310 44v32" />
      <path className="d-thin" d="M304 36l10-10M314 42l10-10" />
      <path d="M314 26l-2 7 6-1zM324 32l-2 7 6-1z" fill="#5D6470" />
      <text className="lbl" x="296" y="94">
        LED
      </text>
      {/* light path down to LDR */}
      <path className="d-thin dash" d="M300 84c0 40-20 56-52 62" />
      {/* LDR */}
      <rect className="d" x="152" y="138" width="96" height="34" />
      <text className="lbl" x="164" y="159" fill="#20242B">
        Photoresistor
      </text>
      <path className="d-thin" d="M232 132l8-10M220 132l8-10" />
      <path d="M232 132l6-2-3-5z" fill="#5D6470" />
      <path d="M220 132l6-2-3-5z" fill="#5D6470" />
      {/* feedback (copper) */}
      <path id="ll-feedback" className="cu" d="M152 155H132V78" />
      <path id="ll-feedback-arrow" d="M132 78l-4 8h8z" fill="#B06A2E" />
      <text className="lbl lbl-cu" x="80" y="150">
        feedback
      </text>
      <text className="lbl lbl-cu" x="86" y="163">
        ±7 lux
      </text>
      {/* footer note */}
      <path className="d-thin" d="M16 210h328" strokeDasharray="1 5" />
      <text className="lbl lbl-prose" x="16" y="232">
        Loop holds brightness against ambient drift
      </text>
    </svg>
  );
}

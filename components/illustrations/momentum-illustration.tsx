"use client";

import { useEffect, useRef } from "react";
import { loadGsap } from "@/lib/gsap";
import { primeDraw } from "@/lib/draw-path";

export function MomentumIllustration() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const { gsap } = loadGsap();
    const root = svgRef.current;
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const pomodoro = root.querySelector<SVGPathElement>("#mo-pomodoro")!;
      const hyperfocus = root.querySelector<SVGPathElement>("#mo-hyperfocus")!;
      const orbs = Array.from(root.querySelectorAll<SVGCircleElement>(".cu-fill"));

      primeDraw(pomodoro);
      primeDraw(hyperfocus);
      gsap.set(orbs, { opacity: 0, scale: 0, transformOrigin: "50% 50%" });

      const POMODORO_DUR = 0.7;
      const HYPERFOCUS_DUR = 1.0;
      // hyperfocus path "M92 172v-32h216v32h24" = 4 axis-aligned segments,
      // total length 304; orbs sit on the h216 run at cumulative length
      // 32 + (cx - 92). Fractions below map each orb's position on the
      // path to a fraction of the hyperfocus tween's duration so the pop
      // lands exactly when the drawn trace passes it.
      const orbFractions = [72 / 304, 120 / 304, 168 / 304, 216 / 304];

      const tl = gsap.timeline({
        scrollTrigger: { trigger: root, start: "top 85%", once: true },
      });

      tl.to(pomodoro, {
        strokeDashoffset: 0,
        duration: POMODORO_DUR,
        ease: "power1.inOut",
      }).to(
        hyperfocus,
        { strokeDashoffset: 0, duration: HYPERFOCUS_DUR, ease: "none" },
        ">"
      );

      orbs.forEach((orb, i) => {
        tl.to(
          orb,
          { opacity: 1, scale: 1, duration: 0.25, ease: "back.out(2)" },
          POMODORO_DUR + orbFractions[i] * HYPERFOCUS_DUR
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 360 250"
      role="img"
      aria-label="Timing diagram comparing a chopped Pomodoro focus signal against one long unbroken hyperfocus block marked with streak points"
    >
      <text className="lbl" x="16" y="30" fill="#20242B">
        Focus — logic view
      </text>
      {/* pomodoro trace */}
      <text className="lbl" x="16" y="76">
        Pomodoro
      </text>
      <path
        id="mo-pomodoro"
        className="d-thin"
        d="M92 88V56h36v32h12V56h36v32h12V56h36v32h12V56h36v32h12V56h24"
        fill="none"
        stroke="#20242B"
        strokeWidth="1.6"
      />
      {/* forced break markers */}
      <path
        className="d-thin dash"
        d="M134 50v52M182 50v52M230 50v52M278 50v52"
        stroke="#5D6470"
      />
      <text className="lbl" x="238" y="118">
        Forced breaks ✕
      </text>
      {/* hyperfocus trace */}
      <text className="lbl lbl-cu" x="16" y="160">
        Hyperfocus
      </text>
      <path
        id="mo-hyperfocus"
        className="cu"
        d="M92 172v-32h216v32h24"
        strokeWidth="2.4"
        fill="none"
      />
      {/* streak orbs on the high segment */}
      <circle className="cu-fill" cx="132" cy="140" r="4" />
      <circle className="cu-fill" cx="180" cy="140" r="4" />
      <circle className="cu-fill" cx="228" cy="140" r="4" />
      <circle className="cu-fill" cx="276" cy="140" r="4" />
      <text className="lbl lbl-cu" x="120" y="128">
        streaks scored, flow unbroken
      </text>
      {/* axis */}
      <path className="d-thin" d="M92 206h248" />
      <g stroke="#5D6470" strokeWidth="1">
        <path d="M92 203v6M140 203v6M188 203v6M236 203v6M284 203v6M332 203v6" />
      </g>
      <text className="lbl" x="88" y="224">
        0
      </text>
      <text className="lbl" x="308" y="224">
        t (min)
      </text>
    </svg>
  );
}

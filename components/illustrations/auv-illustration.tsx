"use client";

import { useEffect, useRef } from "react";
import { loadGsap } from "@/lib/gsap";
import { primeDraw } from "@/lib/draw-path";

const CALLOUTS = [
  { line: "av-cal-pcb-line", label: "av-cal-pcb-label" },
  { line: "av-cal-hull-line", label: "av-cal-hull-label" },
  { line: "av-cal-thruster-line", label: "av-cal-thruster-label" },
];

export function AuvIllustration() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const { gsap } = loadGsap();
    const root = svgRef.current;
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root, start: "top 85%", once: true },
      });

      CALLOUTS.forEach(({ line, label }, i) => {
        const lineEl = root.querySelector<SVGPathElement>(`#${line}`)!;
        const labelEl = root.querySelector<SVGTextElement>(`#${label}`)!;
        primeDraw(lineEl);
        gsap.set(labelEl, { opacity: 0 });

        tl.to(
          lineEl,
          { strokeDashoffset: 0, duration: 0.5, ease: "power1.inOut" },
          i === 0 ? 0 : ">0.15"
        ).to(labelEl, { opacity: 1, duration: 0.25 });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 360 250"
      role="img"
      aria-label="Line drawing of an autonomous underwater vehicle with labelled pressure hull, power distribution board, sensor mast and thrusters"
    >
      {/* waterline */}
      <path className="d-thin dash" d="M20 38h320" />
      <path className="d-thin" d="M40 38l-6 8h12z" fill="none" />
      <text className="lbl" x="56" y="34">
        WL
      </text>
      {/* sensor mast */}
      <rect className="d" x="166" y="66" width="10" height="26" />
      <circle className="cu" cx="171" cy="60" r="5" />
      {/* hull */}
      <rect className="d" x="70" y="92" width="210" height="58" rx="29" />
      <path className="d-thin" d="M252 94v54" />
      <path className="d-thin" d="M96 94v54" />
      {/* power PCB */}
      <rect className="cu dash" x="150" y="106" width="66" height="30" />
      {/* thruster struts + props */}
      <path className="d" d="M112 150v14M228 150v14" />
      <circle className="d" cx="112" cy="178" r="14" />
      <path className="d-thin" d="M103 169l18 18M121 169l-18 18" />
      <circle className="d" cx="228" cy="178" r="14" />
      <path className="d-thin" d="M219 169l18 18M237 169l-18 18" />
      {/* callouts */}
      <circle className="cu-fill" cx="183" cy="112" r="2.4" />
      <path id="av-cal-pcb-line" className="d-thin" d="M183 112l30-32h56" />
      <text id="av-cal-pcb-label" className="lbl lbl-cu" x="216" y="74">
        Power dist PCB
      </text>
      <circle cx="84" cy="104" r="2.4" fill="#5D6470" />
      <path id="av-cal-hull-line" className="d-thin" d="M84 104L58 78H24" />
      <text id="av-cal-hull-label" className="lbl" x="10" y="72">
        Pressure hull
      </text>
      <circle cx="100" cy="184" r="2.4" fill="#5D6470" />
      <path id="av-cal-thruster-line" className="d-thin" d="M100 184l-30 22" />
      <text id="av-cal-thruster-label" className="lbl" x="20" y="216">
        Thruster array
      </text>
      <circle cx="171" cy="60" r="0" fill="none" />
      <path className="d-thin" d="M176 58h64" />
      <text className="lbl" x="244" y="61">
        Sensor mast
      </text>
      {/* dimension line */}
      <path className="d-thin" d="M70 216v10M280 216v10M70 221h210" />
      <path d="M70 221l8-3v6zM280 221l-8-3v6z" fill="#5D6470" />
      <text className="lbl" x="152" y="238">
        L (REF)
      </text>
    </svg>
  );
}

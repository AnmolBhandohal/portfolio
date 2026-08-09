"use client";

import { useEffect, useRef } from "react";
import { loadGsap } from "@/lib/gsap";
import { primeDraw } from "@/lib/draw-path";

export function Esp32Illustration() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const { gsap } = loadGsap();
    const root = svgRef.current;
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const wifi = ["esp-wifi-1", "esp-wifi-2", "esp-wifi-3"].map(
        (id) => root.querySelector<SVGPathElement>(`#${id}`)!
      );
      const sparkline = root.querySelector<SVGPolylineElement>("#esp-sparkline")!;

      wifi.forEach(primeDraw);
      primeDraw(sparkline);

      const tl = gsap.timeline({
        scrollTrigger: { trigger: root, start: "top 85%", once: true },
      });
      tl.to(wifi, {
        strokeDashoffset: 0,
        duration: 0.5,
        ease: "power1.inOut",
        stagger: 0.18,
      }).to(
        sparkline,
        { strokeDashoffset: 0, duration: 0.7, ease: "power1.inOut" },
        ">0.1"
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 360 250"
      role="img"
      aria-label="ESP32 module with antenna transmitting to a live web dashboard, with a connected sensor array for temperature, humidity and air quality"
    >
      {/* module */}
      <rect className="d" x="40" y="62" width="112" height="126" rx="3" />
      {/* castellations */}
      <g fill="#F6F5EF" stroke="#20242B" strokeWidth="1.4">
        <circle cx="40" cy="80" r="4" />
        <circle cx="40" cy="98" r="4" />
        <circle cx="40" cy="116" r="4" />
        <circle cx="40" cy="134" r="4" />
        <circle cx="40" cy="152" r="4" />
        <circle cx="40" cy="170" r="4" />
      </g>
      {/* antenna */}
      <path className="cu" d="M52 76h12l8-8h12l8 8h12l8-8h12l8 8h8" />
      {/* shield */}
      <rect className="d" x="58" y="96" width="80" height="66" />
      <text className="lbl" x="76" y="126" fill="#20242B">
        ESP32
      </text>
      <text className="lbl" x="66" y="140">
        Wi-Fi · C/C++
      </text>
      {/* wifi arcs */}
      <path id="esp-wifi-1" className="cu" d="M160 78a26 26 0 0 1 22 22" fill="none" />
      <path id="esp-wifi-2" className="cu" d="M160 62a42 42 0 0 1 38 38" fill="none" />
      <path id="esp-wifi-3" className="cu" d="M160 46a58 58 0 0 1 54 54" fill="none" />
      {/* dashboard */}
      <rect className="d" x="232" y="52" width="112" height="84" />
      <path className="d-thin" d="M232 68h112" />
      <circle cx="240" cy="60" r="2" fill="#5D6470" />
      <circle cx="248" cy="60" r="2" fill="#5D6470" />
      <circle cx="256" cy="60" r="2" fill="#5D6470" />
      <path className="d-thin" d="M244 124V78M244 124h90" />
      <polyline
        id="esp-sparkline"
        className="cu"
        points="248,112 262,104 274,110 288,92 300,98 314,84 330,90"
      />
      <text className="lbl" x="238" y="150">
        Live dashboard
      </text>
      {/* link arcs→dash */}
      <path className="d-thin dash" d="M216 96h12" />
      <path d="M230 96l-7-3.5v7z" fill="#5D6470" />
      {/* sensor array */}
      <g className="d">
        <rect x="208" y="188" width="30" height="30" />
        <rect x="252" y="188" width="30" height="30" />
        <rect x="296" y="188" width="30" height="30" />
      </g>
      <text className="lbl" x="219" y="207" fill="#20242B">
        T
      </text>
      <text className="lbl" x="259" y="207" fill="#20242B">
        RH
      </text>
      <text className="lbl" x="303" y="207" fill="#20242B">
        AQ
      </text>
      {/* sensor bus with 45° bends */}
      <path
        className="d"
        d="M152 150h20l16 16v37h20M238 203h14M282 203h14"
        fill="none"
      />
      <text className="lbl" x="150" y="238">
        Sensor bus
      </text>
      {/* uptime note */}
      <text className="lbl" x="40" y="230">
        Runs unattended — weeks
      </text>
      <text className="lbl" x="40" y="242">
        Auto-reconnect · low draw
      </text>
    </svg>
  );
}

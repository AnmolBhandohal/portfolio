"use client";

import { useEffect, useRef, useState } from "react";
import { pins } from "@/lib/profile";
import { useReducedMotion } from "@/lib/use-reduced-motion";

/* FIG. 1 — the person, drawn as the part. DIP-16, pin 1 top-left,
   counter-clockwise. Idle state "probes" pins in sequence; hover or
   focus takes over. Reduced motion: static on pin 1. */

const TOP = 46;
const PITCH = 38;
const BODY_X = 128;
const BODY_W = 124;

function pinY(n: number) {
  return n <= 8 ? TOP + (n - 1) * PITCH : TOP + (16 - n) * PITCH;
}

export function Pinout() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(1);
  const [held, setHeld] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (reduced || held) return;
    timer.current = setInterval(() => setActive((a) => (a % 16) + 1), 2200);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [reduced, held]);

  const pin = pins[active - 1];
  const bodyTop = TOP - 24;
  const bodyH = PITCH * 7 + 48;

  return (
    <figure className="pinout" onMouseLeave={() => setHeld(false)}>
      <svg
        viewBox="0 0 380 336"
        role="group"
        aria-label="Pin configuration diagram: sixteen capabilities drawn as the pins of an integrated circuit"
      >
        {/* body */}
        <rect className="d" x={BODY_X} y={bodyTop} width={BODY_W} height={bodyH} />
        <path className="d" d={`M${BODY_X + BODY_W / 2 - 12} ${bodyTop}a12 12 0 0 0 24 0`} />
        <circle className="pin1-mark" cx={BODY_X + 14} cy={bodyTop + 14} r="3.2" />
        <text className="ic-name" x={BODY_X + BODY_W / 2} y={bodyTop + bodyH / 2 - 6} textAnchor="middle">
          AB-2029
        </text>
        <text className="lbl" x={BODY_X + BODY_W / 2} y={bodyTop + bodyH / 2 + 12} textAnchor="middle">
          U of A · EE
        </text>

        {pins.map((p) => {
          const left = p.n <= 8;
          const y = pinY(p.n);
          const on = p.n === active;
          const px = left ? BODY_X - 22 : BODY_X + BODY_W;
          return (
            <g
              key={p.n}
              className={`pin${on ? " on" : ""}`}
              tabIndex={0}
              role="button"
              aria-pressed={on}
              aria-label={`Pin ${p.n}, ${p.name}: ${p.desc}`}
              onMouseEnter={() => {
                setHeld(true);
                setActive(p.n);
              }}
              onFocus={() => {
                setHeld(true);
                setActive(p.n);
              }}
              onClick={() => {
                setHeld(true);
                setActive(p.n);
              }}
            >
              {/* generous invisible hit target */}
              <rect
                x={left ? 0 : BODY_X + BODY_W}
                y={y - PITCH / 2}
                width={BODY_X}
                height={PITCH}
                fill="transparent"
              />
              <rect className="lead" x={px} y={y - 5} width="22" height="10" />
              <text
                className="pin-n"
                x={left ? BODY_X + 10 : BODY_X + BODY_W - 10}
                y={y + 3.5}
                textAnchor={left ? "start" : "end"}
              >
                {p.n}
              </text>
              <text
                className="pin-name"
                x={left ? BODY_X - 30 : BODY_X + BODY_W + 30}
                y={y + 4}
                textAnchor={left ? "end" : "start"}
              >
                {p.name}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="probe" aria-live="polite">
        <div className="probe-head">
          <span>PIN {String(active).padStart(2, "0")}</span>
          <b>{pin.name}</b>
          <span className="probe-grp">{pin.group}</span>
        </div>
        <p>{pin.desc}</p>
      </div>
      <figcaption>FIG. 1 — PIN CONFIGURATION, TOP VIEW. Hover a pin to probe it.</figcaption>
    </figure>
  );
}

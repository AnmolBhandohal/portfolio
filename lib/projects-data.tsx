import type { ComponentType } from "react";
import { AuvIllustration } from "@/components/illustrations/auv-illustration";
import { LedLampIllustration } from "@/components/illustrations/led-lamp-illustration";
import { Esp32Illustration } from "@/components/illustrations/esp32-illustration";
import { MomentumIllustration } from "@/components/illustrations/momentum-illustration";

/* ═══════════════════════════════════════════════════════════════
   projects-data.tsx — project cards.
   INTEGRITY: every number here must exist in career/experience.json
   as verified. Unbuilt work is status "dev" and quotes DESIGN TARGETS,
   labelled as such — never measured results.
   To add a photo: drop public/figs/<id>.jpg — it appears automatically.
   ═══════════════════════════════════════════════════════════════ */

export interface ProjectSpec {
  th: string;
  td: string;
}

export interface Project {
  id: string;
  title: string;
  rev: string;
  period: string;
  status: "active" | "shipped" | "dev";
  statusLabel: string;
  illustration: ComponentType;
  /** the one number a skimming reader should leave with */
  proof: { value: string; unit: string; label: string };
  why: string;
  specs: ProjectSpec[];
  /** what's next — shown for live / in-development work */
  next?: string;
  figCaption: string;
}

export const projects: Project[] = [
  {
    id: "auv",
    title: "ARVP — Autonomous Underwater Vehicle",
    rev: "REV C",
    period: "Sept 2025 — present",
    status: "active",
    statusLabel: "Active",
    illustration: AuvIllustration,
    proof: { value: "0", unit: "violations", label: "4-layer stackup, full DRC" },
    why: "Electrical subsystem on the University of Alberta's autonomous sub. Once the hull is sealed there is no reaching back in, so the work is about taking failure modes out on the bench — keyed connectors that physically can't be plugged in backwards, and a board that passes DRC before it ever gets fabricated.",
    specs: [
      { th: "Comms Hub", td: "Revised in Altium — keyed shrouded connectors, CAN transceivers brought up" },
      { th: "Stackup", td: "4-layer · signal / GND / power planes · DRC clean" },
      { th: "Filter", td: "Active op-amp LPF · 1 kHz signal vs 15 kHz noise · LTspice" },
      { th: "Test", td: "On-site fault diagnosis during in-water trials" },
    ],
    figCaption: "FIG. 2 — VEHICLE ASSEMBLY, REV C",
  },
  {
    id: "esp32",
    title: "ESP32 Environmental Monitor",
    rev: "REV A",
    period: "Fall 2025",
    status: "shipped",
    statusLabel: "Built",
    illustration: Esp32Illustration,
    proof: { value: "720", unit: "points", label: "Rolling buffer = 6 h capture" },
    why: "A logger meant for comparing rooms, not taking one reading. Four sensors share one I²C bus. The buffer is sized for a full six-hour capture, and each run is labelled from the dashboard, so two rooms get compared on equal terms instead of from memory.",
    specs: [
      { th: "Sensing", td: "Temperature · humidity · pressure · ambient light — I²C" },
      { th: "Firmware", td: "C++ · 720-point rolling buffer" },
      { th: "Interface", td: "Live dashboard · REST / JSON · CSV export" },
      { th: "Sessions", td: "/setroom endpoint tags and resets each capture run" },
    ],
    next: "Next: the multi-room trial itself, with the plots published here.",
    figCaption: "FIG. 3 — ASSEMBLED MODULE, REV A",
  },
  {
    id: "led-lamp",
    title: "Adaptive Closed-Loop LED Lamp",
    rev: "REV A",
    period: "In development",
    status: "dev",
    statusLabel: "In development",
    illustration: LedLampIllustration,
    proof: { value: "5", unit: "kHz", label: "PWM target — above flicker, below switching loss" },
    why: "Normal dimmable lamps set their output, not how bright the desk actually is, so the brightness drifts whenever the room changes. This one measures the light at the desk and corrects for it. The design problem is picking a PWM frequency: too low and the light flickers, too high and the MOSFET wastes power every time it switches.",
    specs: [
      { th: "Drive", td: "Low-side MOSFET · gate resistor + pulldown · 12 V strip" },
      { th: "Control", td: "ESP32 · closed-loop on measured lux" },
      { th: "Board", td: "2-layer carrier in Altium · full ground plane" },
      { th: "Status", td: "Breadboard proven → PCB in layout" },
    ],
    next: "Next: step-response test. Settling time and overshoot will be published here once they've actually been measured.",
    figCaption: "FIG. 4 — CONTROL LOOP, REV A",
  },
  {
    id: "momentum",
    title: "Momentum",
    rev: "REV D",
    period: "2026",
    status: "active",
    statusLabel: "Active",
    illustration: MomentumIllustration,
    proof: { value: "0", unit: "forced breaks", label: "Streaks reward finishing a block" },
    why: "A focus app built because Pomodoro timers don't survive contact with an ADHD brain mid-hyperfocus. Interrupting flow every 25 minutes is the failure mode, not the feature — so Momentum scores streaks of blocks you set yourself, and rewards finishing over obeying a clock.",
    specs: [
      { th: "Stack", td: "React · local storage" },
      { th: "Core loop", td: "Session modes · per-block timers" },
      { th: "System", td: "Streak progression · daily scoring" },
    ],
    figCaption: "FIG. 5 — TIMING DIAGRAM, REV D",
  },
];

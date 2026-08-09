import type { ComponentType } from "react";
import { AuvIllustration } from "@/components/illustrations/auv-illustration";
import { LedLampIllustration } from "@/components/illustrations/led-lamp-illustration";
import { Esp32Illustration } from "@/components/illustrations/esp32-illustration";
import { MomentumIllustration } from "@/components/illustrations/momentum-illustration";

export interface ProjectSpec {
  th: string;
  td: string;
}

export interface Project {
  id: string;
  title: string;
  rev: string;
  status: "active" | "shipped";
  statusLabel: string;
  illustration: ComponentType;
  why: string;
  specs: ProjectSpec[];
  figCaption: string;
}

export const projects: Project[] = [
  {
    id: "auv",
    title: "ARVP — Autonomous Underwater Vehicle",
    rev: "REV C",
    status: "active",
    statusLabel: "Active",
    illustration: AuvIllustration,
    why: "Electrical subsystem work on UAlberta's autonomous underwater vehicle — power distribution and sensor wiring on a system with zero tolerance for a bad connection. Once the hull is sealed and the vehicle is underwater, there is no reaching back in: every joint gets tested twice before launch, because rework doesn't exist at depth.",
    specs: [
      { th: "Role", td: "Electrical subsystem engineer" },
      { th: "Scope", td: "Power distribution · sensor wiring · integration testing" },
      { th: "Team", td: "ARVP — multidisciplinary student design team" },
    ],
    figCaption: "FIG. 2 — VEHICLE ASSEMBLY, REV C",
  },
  {
    id: "led-lamp",
    title: "Adaptive Closed-Loop LED Lamp",
    rev: "REV B",
    status: "shipped",
    statusLabel: "Shipped",
    illustration: LedLampIllustration,
    why: "Holds a target brightness no matter what the room is doing — photoresistor feedback closes the loop to within ±7 lux of setpoint. The hard part wasn't the loop; it was pushing PWM frequency high enough to kill visible flicker without cooking the driver stage. Custom board, drawn in Altium.",
    specs: [
      { th: "PCB", td: "Custom board — Altium Designer" },
      { th: "Control", td: "Closed-loop feedback · ±7 lux accuracy" },
      { th: "Drive", td: "5 kHz PWM dimming" },
    ],
    figCaption: "FIG. 2 — ASSEMBLED BOARD, REV B",
  },
  {
    id: "esp32",
    title: "ESP32 Environmental Monitor",
    rev: "REV A",
    status: "shipped",
    statusLabel: "Shipped",
    illustration: Esp32Illustration,
    why: "A standalone IoT logger streaming temperature, humidity, and air quality to a live web dashboard. The goal was to run unattended for weeks, which means the interesting problems were reconnect logic and power draw — not reading a sensor once. Anyone can get one reading; the project is the other 40 days.",
    specs: [
      { th: "Hardware", td: "ESP32 · environmental sensor array" },
      { th: "Firmware", td: "C/C++ · Wi-Fi telemetry" },
      { th: "Dashboard", td: "Web-based live data view" },
    ],
    figCaption: "FIG. 2 — ASSEMBLED MODULE, REV A",
  },
  {
    id: "momentum",
    title: "Momentum",
    rev: "REV D",
    status: "active",
    statusLabel: "Active",
    illustration: MomentumIllustration,
    why: "A productivity app built because Pomodoro timers don't survive contact with an ADHD brain mid-hyperfocus. Interrupting flow every 25 minutes is the failure mode, not the feature — so Momentum tracks streaks instead of forcing breaks, and its scoring rewards finishing a block over obeying a clock.",
    specs: [
      { th: "Stack", td: "React" },
      { th: "Core loop", td: "Session modes · per-block timers" },
      { th: "System", td: "Streak orb progression · daily scoring" },
    ],
    figCaption: "FIG. 2 — APP SCREENSHOT, REV D",
  },
];

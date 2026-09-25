/* ═══════════════════════════════════════════════════════════════
   profile.ts — everything about Anmol that isn't a project card.
   Source of truth upstream: C:/Users/Anmol/career/experience.json
   RULE: nothing goes here that isn't in experience.json as verified.
   ═══════════════════════════════════════════════════════════════ */

export const identity = {
  name: "Anmol Bhandohal",
  partNo: "AB-2029",
  rev: "5.0",
  revDate: "2026-09",
  email: "bhandoha@ualberta.ca",
  github: "https://github.com/xrutizx-star",
  linkedin: "https://www.linkedin.com/in/anmol-bhandohal-904789305/",
  resume: "/resume.pdf",
  availability: "Jan – Aug 2027",
  availabilityLong: "January – August 2027 · 8 months, or two 4-month terms",
};

/* Datasheet page one: FEATURES */
export const features: { k: string; v: string }[] = [
  { k: "Availability", v: "Jan – Aug 2027 — one 8-month term or two 4-month terms" },
  { k: "Field", v: "Seven construction sites in one term, 347 V and 120/208 V" },
  { k: "Fire alarm", v: "Programmed an addressable panel, including elevator recall logic" },
  { k: "PCB", v: "4-layer stackup in Altium, cleared full DRC with zero violations" },
  { k: "Firmware", v: "C/C++ on ESP32 — I²C, SPI, UART, CAN" },
];

export const applications = [
  "Hardware & PCB design",
  "Embedded firmware",
  "Power, controls & industrial",
  "Test & validation",
];

/* FIG. 1 pin configuration + pin-function table.
   DIP-16: pins 1–8 run down the left, 9–16 run up the right. */
export interface Pin {
  n: number;
  name: string;
  group: string;
  desc: string;
}
export const pins: Pin[] = [
  { n: 1, name: "ALTIUM", group: "Design", desc: "2- and 4-layer layout. Revised ARVP's Comms Hub; 4-layer stackup cleared DRC with zero violations." },
  { n: 2, name: "LTSPICE", group: "Design", desc: "Active op-amp low-pass filter pulling a 1 kHz signal out of 15 kHz noise, verified in simulation before build." },
  { n: 3, name: "CAD", group: "Design", desc: "Fusion 360 for mechanical parts, enclosures and 3D-printed fixtures." },
  { n: 4, name: "C/C++", group: "Firmware", desc: "ESP32 firmware — I²C sampling, a 720-point rolling buffer, HTTP server and REST endpoints." },
  { n: 5, name: "BUS", group: "Firmware", desc: "I²C, SPI, UART, CAN. Brought up CAN transceivers on the ARVP Comms Hub." },
  { n: 6, name: "HDL", group: "Digital", desc: "VHDL on the Zybo Z7 FPGA." },
  { n: 7, name: "PY/MAT", group: "Software", desc: "Python and MATLAB for analysis and tooling. React for Momentum." },
  { n: 8, name: "GND", group: "Bench", desc: "The reference everything is measured against: oscilloscope, multimeter, through-hole and SMD soldering, rework." },
  { n: 9, name: "TEAM", group: "Team", desc: "ARVP electrical subsystem. GeoWall: first place against 4th-year civil teams, plus Best Presentation." },
  { n: 10, name: "CTRL", group: "Controls", desc: "Relay logic for elevator recall. PI feedback loop design for the LED lamp (in development)." },
  { n: 11, name: "DEBUG", group: "Field", desc: "Half-split fault isolation — found a ground fault on a live fire alarm loop without pulling new cable." },
  { n: 12, name: "PRINTS", group: "Field", desc: "Single-lines, panel schedules and device layouts across three levels; set crew install sequence from them." },
  { n: 13, name: "FACP", group: "Field", desc: "Mircom FX-3500 addressable fire alarm programming. Verification walk per CAN/ULC-S537." },
  { n: 14, name: "CEC", group: "Field", desc: "Canadian Electrical Code — conduit, feeders, BX and TECK, terminations." },
  { n: 15, name: "3PH", group: "Power", desc: "Three-phase distribution, disconnects and multi-meter stacks; live work." },
  { n: 16, name: "VCC", group: "Power", desc: "347 V and 120/208 V commercial services. The supply rail, literally." },
];

/* §1 FIELD RECORD — electrical characteristics table */
export const fieldRole = {
  title: "Electrical Apprentice",
  org: "Powerworks",
  where: "Edmonton, AB",
  when: "Summer 2026",
  scope: "Commercial & residential construction",
};

export const fieldChars: { param: string; cond: string; val: string; unit: string }[] = [
  { param: "Sites completed", cond: "one summer term", val: "7", unit: "sites" },
  { param: "Commercial / residential", cond: "retail, daycare, arena, multi-family", val: "3 / 4", unit: "sites" },
  { param: "Service voltage", cond: "lighting / general loads", val: "347 · 120/208", unit: "V" },
  { param: "Fire alarm panel", cond: "addressable, three storeys", val: "FX-3500", unit: "Mircom" },
  { param: "Building value", cond: "fire alarm install", val: "9.6", unit: "$M" },
  { param: "Acceptance", cond: "walked with consulting engineer", val: "S537", unit: "CAN/ULC" },
];

export const appNotes: { id: string; h: string; p: string }[] = [
  {
    id: "AN-1",
    h: "Elevator recall logic",
    p: "Mapped pull stations and smoke and heat detectors to relay outputs so that on alarm the elevator returns to a safe floor and holds there — and goes to an alternate floor if the alarm starts on the primary one.",
  },
  {
    id: "AN-2",
    h: "Finding a ground fault by halving the circuit",
    p: "An intermittent ground fault on a live fire alarm circuit. I pulled the panel's pluggable terminal blocks to split the circuit in half, measured each half, and kept halving until only one segment was left. The fix didn't need any new cable.",
  },
  {
    id: "AN-3",
    h: "Reading the prints, running the crew",
    p: "Worked from multi-page commercial drawings — single-lines, panel schedules, device layouts across three levels — and set the install order and circuit routing for the crew from them.",
  },
  {
    id: "AN-4",
    h: "Verification & acceptance",
    p: "Walked the finished building with the consulting engineer, confirmed each device operated as designed, and cleared deficiencies before sign-off.",
  },
];

/* §4 ABOUT — recommended operating conditions */
export const operating: { k: string; v: string }[] = [
  { k: "Program", v: "BSc EE Co-op · U of Alberta · 5 of 8 terms" },
  { k: "Location", v: "Edmonton, AB · willing to relocate" },
  { k: "Available", v: "Jan – Aug 2027" },
  { k: "Licence", v: "Class 5" },
  { k: "Ambient", v: "−40 °C to +30 °C (Edmonton-rated)" },
];

export const honours: { k: string; v: string }[] = [
  { k: "Feb 2025", v: "GeoWall Design Competition — 1st place against 4th-year civil teams; Best Presentation" },
  { k: "Standing", v: "First Class Standing" },
  { k: "Cert", v: "EECERT Lab Certification — circuit design, PCB layout" },
];

export const revisions: { rev: string; date: string; desc: string }[] = [
  { rev: "5.0", date: "2026-09", desc: "Datasheet page one. Field record added. Every figure re-checked against source records; unmeasured claims removed." },
  { rev: "4.0", date: "2026-08", desc: "Ported to Next.js. Motion system added." },
];

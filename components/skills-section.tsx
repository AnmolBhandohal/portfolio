"use client";

import { SectionHead } from "@/components/section-head";
import { useReveal } from "@/lib/use-reveal";

const groups = [
  {
    id: "3.1",
    title: "Hardware",
    tags: ["Altium Designer", "PCB design", "Oscilloscope / DMM", "Panel wiring", "Three-phase systems"],
  },
  {
    id: "3.2",
    title: "Embedded / Firmware",
    tags: ["ESP32", "C / C++", "PWM control", "Sensor integration"],
  },
  {
    id: "3.3",
    title: "Software",
    tags: ["React", "Python", "JavaScript"],
  },
  {
    id: "3.4",
    title: "Fabrication",
    tags: ["Fusion 360", "CNC machining", "DaVinci Resolve"],
  },
];

export function SkillsSection() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="sec sec-skills" id="skills">
      <SectionHead sectionId="skills" tapLabel="TP3" no="§3" title="Capabilities" />
      <div className="skill-groups rv" ref={ref}>
        {groups.map((group) => (
          <div className="sg" key={group.id}>
            <h3>
              {group.id} <span>—</span> {group.title}
            </h3>
            <ul className="tags">
              {group.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

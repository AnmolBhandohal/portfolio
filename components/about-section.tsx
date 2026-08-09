"use client";

import { SectionHead } from "@/components/section-head";
import { useReveal } from "@/lib/use-reveal";

export function AboutSection() {
  const bioRef = useReveal<HTMLDivElement>();
  const factsRef = useReveal<HTMLDivElement>();

  return (
    <section className="sec sec-about" id="about">
      <SectionHead sectionId="about" tapLabel="TP2" no="§2" title="About" />
      <div className="about-grid">
        <div className="bio rv" ref={bioRef}>
          <p>
            Third-year electrical engineering student at the University of Alberta,
            currently splitting the week between coursework and an electrical
            apprenticeship — panel schedules, three-phase distribution, fire alarm
            circuits. The trade side teaches what the textbook skips: why the code
            says what it says, what actually fails in the field, and what a clean
            install looks like up close.
          </p>
          <p>
            The same habit runs through everything here. On site or on a personal
            project, the goal is the reasoning, not just the procedure — understand
            why the circuit is built that way before touching it, then build
            accordingly.
          </p>
        </div>
        <div className="facts rv" ref={factsRef}>
          <header>Reference data</header>
          <dl>
            <div className="row">
              <dt>Location</dt>
              <dd>Edmonton, AB</dd>
            </div>
            <div className="row">
              <dt>Program</dt>
              <dd>BSc EE, Co-op — Class of 2029</dd>
            </div>
            <div className="row">
              <dt>Current</dt>
              <dd>Electrical apprenticeship — commercial / industrial</dd>
            </div>
            <div className="row">
              <dt>Club</dt>
              <dd>ARVP — autonomous underwater vehicle</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

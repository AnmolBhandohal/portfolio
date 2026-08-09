"use client";

import { SectionHead } from "@/components/section-head";
import { useReveal } from "@/lib/use-reveal";

export function ContactSection() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="sec sec-contact" id="contact">
      <SectionHead sectionId="contact" tapLabel="TP4" no="§4" title="Contact" />
      <div className="order rv" ref={ref}>
        <div className="ebar">
          <h3>Ordering information</h3>
          <span className="st st-active">In stock — 1 unit</span>
        </div>
        <div className="order-body">
          <p>
            Looking for a co-op student who can read the schematic <strong>and</strong>{" "}
            pull the wire? The résumé has the details — the projects above have the
            proof.
          </p>
          <div className="actions">
            <a className="btn btn-pri" href="/resume.pdf" download>
              Download résumé · PDF
            </a>
            <div className="sec-links">
              <a href="https://github.com/xrutizx-star" target="_blank" rel="noopener">
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/anmol-bhandohal-904789305/"
                target="_blank"
                rel="noopener"
              >
                LinkedIn
              </a>
              <a href="mailto:bhandoha@ualberta.ca">Email</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

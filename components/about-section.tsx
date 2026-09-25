"use client";

import { SectionHead } from "@/components/section-head";
import { useReveal } from "@/lib/use-reveal";
import { honours, operating } from "@/lib/profile";

export function AboutSection() {
  const bioRef = useReveal<HTMLDivElement>();
  const factsRef = useReveal<HTMLDivElement>();

  return (
    <section className="sec sec-about" id="about">
      <SectionHead sectionId="about" tapLabel="TP4" no="§4" title="About" />
      <div className="about-grid">
        <div className="bio rv" ref={bioRef}>
          <p>
            I split my time between two versions of electrical work. At school it&rsquo;s op-amp
            filters, VHDL and PCB stackups. On site it&rsquo;s conduit, feeders and a fire alarm
            panel that has to pass inspection. Most students only get the first; I think the
            second made me better at it.
          </p>
          <p>
            A site teaches you things a lab never does. A connector that&rsquo;s easy to crimp
            can still be impossible to reach in the finished install. A ground fault only shows
            up once the circuit is live. And a drawing is a promise the building then has to
            keep. That&rsquo;s why I key connectors on the AUV so they can&rsquo;t go in
            backwards, and why I size a data buffer for the whole test instead of the demo.
          </p>
          <p>
            The rule this site follows: <strong>nothing on it I haven&rsquo;t actually done.</strong>{" "}
            The lamp is still in development, so it shows the numbers I&rsquo;m designing for,
            clearly marked. Measured results go up once they&rsquo;ve been measured.
          </p>
        </div>

        <div className="facts rv" ref={factsRef}>
          <header>Recommended operating conditions</header>
          <dl>
            {operating.map((o) => (
              <div className="row" key={o.k}>
                <dt>{o.k}</dt>
                <dd>{o.v}</dd>
              </div>
            ))}
          </dl>
          <header>Qualifications</header>
          <dl>
            {honours.map((o) => (
              <div className="row" key={o.k}>
                <dt>{o.k}</dt>
                <dd className="dd-prose">{o.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

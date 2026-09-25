"use client";

import { SectionHead } from "@/components/section-head";
import { useReveal } from "@/lib/use-reveal";
import { identity } from "@/lib/profile";

export function ContactSection() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="sec sec-contact" id="contact">
      <SectionHead sectionId="contact" tapLabel="TP5" no="§5" title="Ordering information" />
      <div className="order rv" ref={ref}>
        <div className="tscroll">
          <table className="orderable">
            <thead>
              <tr>
                <th scope="col">Orderable part</th>
                <th scope="col">Status</th>
                <th scope="col">Term</th>
                <th scope="col">Lead time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{identity.partNo}-8M</td>
                <td><span className="live">Active</span></td>
                <td>Jan – Aug 2027</td>
                <td>Interviewing this fall</td>
              </tr>
              <tr>
                <td>{identity.partNo}-4M</td>
                <td><span className="live">Active</span></td>
                <td>Jan – Apr or May – Aug 2027</td>
                <td>Interviewing this fall</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="order-body">
          <p>
            Need a co-op student who can read the schematic <strong>and</strong> pull the wire?
            The résumé has every detail, and email is the fastest way to reach me.
          </p>
          <div className="actions">
            <a className="btn btn-pri" href={identity.resume} download>
              Download résumé · PDF
            </a>
            <a className="mail" href={`mailto:${identity.email}`}>
              {identity.email}
            </a>
            <div className="sec-links">
              <a href={identity.linkedin} target="_blank" rel="noopener">LinkedIn</a>
              <a href={identity.github} target="_blank" rel="noopener">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { SectionHead } from "@/components/section-head";
import { useReveal } from "@/lib/use-reveal";
import { pins } from "@/lib/profile";

/* §3 — the full pin-function table. Same data as FIG. 1, in the form
   a reader who skipped the diagram can scan. */
export function SkillsSection() {
  const ref = useReveal<HTMLDivElement>();
  const cols = [pins.slice(0, 8), pins.slice(8)];

  return (
    <section className="sec sec-skills" id="skills">
      <SectionHead sectionId="skills" tapLabel="TP3" no="§3" title="Pin functions" />
      <div className="pinfn rv" ref={ref}>
        {cols.map((col, i) => (
          <table className="pft" key={i}>
            <thead>
              <tr>
                <th scope="col">Pin</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {col.map((p) => (
                <tr key={p.n}>
                  <td className="pft-n">{p.n}</td>
                  <td className="pft-name">{p.name}</td>
                  <td>{p.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    </section>
  );
}

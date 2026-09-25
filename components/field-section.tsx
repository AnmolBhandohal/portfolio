"use client";

import { SectionHead } from "@/components/section-head";
import { useReveal } from "@/lib/use-reveal";
import { appNotes, fieldChars, fieldRole } from "@/lib/profile";

export function FieldSection() {
  const tableRef = useReveal<HTMLDivElement>();
  const notesRef = useReveal<HTMLDivElement>();

  return (
    <section className="sec sec-field" id="field">
      <SectionHead sectionId="field" tapLabel="TP1" no="§1" title="Field record" />

      <div className="field-role rv" ref={tableRef}>
        <div className="fr-id">
          <p className="fr-title">{fieldRole.title}</p>
          <p className="fr-org">
            {fieldRole.org} · {fieldRole.where}
          </p>
          <p className="fr-when">
            {fieldRole.when} — {fieldRole.scope}
          </p>
        </div>

        <table className="chars">
          <caption>Electrical characteristics · over one summer term</caption>
          <thead>
            <tr>
              <th scope="col">Parameter</th>
              <th scope="col">Test conditions</th>
              <th scope="col" className="num">
                Value
              </th>
              <th scope="col">Unit</th>
            </tr>
          </thead>
          <tbody>
            {fieldChars.map((c) => (
              <tr key={c.param}>
                <th scope="row">{c.param}</th>
                <td className="cond">{c.cond}</td>
                <td className="num">{c.val}</td>
                <td className="unit">{c.unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="notes rv" ref={notesRef}>
        {appNotes.map((n) => (
          <article className="note" key={n.id}>
            <span className="note-id">{n.id}</span>
            <h3>{n.h}</h3>
            <p>{n.p}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

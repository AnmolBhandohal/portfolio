import { identity, revisions } from "@/lib/profile";

export function Footer() {
  return (
    <footer>
      <div className="revhist">
        <p className="revhist-h">Revision history</p>
        <table>
          <tbody>
            {revisions.map((r) => (
              <tr key={r.rev}>
                <td className="rh-rev">{r.rev}</td>
                <td className="rh-date">{r.date}</td>
                <td>{r.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <dl className="tblock">
        <div>
          <dt>Title</dt>
          <dd>{identity.name} — Electrical Engineering</dd>
        </div>
        <div>
          <dt>Doc no</dt>
          <dd>{identity.partNo}</dd>
        </div>
        <div>
          <dt>Rev</dt>
          <dd>{identity.rev}</dd>
        </div>
        <div>
          <dt>Sheet</dt>
          <dd>1 of 1</dd>
        </div>
      </dl>
      <p className="foot-note">
        Drawn by hand in Next.js. Not to scale. Specifications subject to change as the part
        gains experience.
      </p>
    </footer>
  );
}

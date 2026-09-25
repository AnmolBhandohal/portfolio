import { Via } from "@/components/via";
import { Pinout } from "@/components/pinout";
import { applications, features, identity } from "@/lib/profile";

export function Hero() {
  return (
    <section className="sec hero" id="top" aria-label="Introduction">
      <div className="ds-head">
        <Via sectionId="top" label="VIN" kind="pad" />
        <span>{identity.partNo}</span>
        <span>Electrical Engineering · Co-op</span>
        <span>
          Rev {identity.rev} · {identity.revDate}
        </span>
      </div>

      <p className="status">
        <span className="dot" aria-hidden="true" />
        Available {identity.availability} · 8 months
      </p>

      <h1>
        Anmol
        <br />
        Bhandohal
      </h1>
      <p className="subtitle">
        Electrical engineering student who has also pulled the wire — PCB layout on one
        side, 347&nbsp;V services and fire alarm panels on the other.
      </p>

      <div className="page-one">
        <div className="p1-text">
          <section className="p1-block">
            <h2 className="p1-h">
              <span>1</span>Features
            </h2>
            <ul className="features">
              {features.map((f) => (
                <li key={f.k}>
                  <b>{f.k}</b>
                  {f.v}
                </li>
              ))}
            </ul>
          </section>

          <section className="p1-block">
            <h2 className="p1-h">
              <span>2</span>Applications
            </h2>
            <ul className="apps">
              {applications.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </section>

          <section className="p1-block">
            <h2 className="p1-h">
              <span>3</span>Description
            </h2>
            <p className="desc">
              Third-year EE at the University of Alberta, back in class after a summer as an
              electrical apprentice. That summer covered seven sites, an addressable fire alarm
              panel I programmed, and a ground fault I found by halving the circuit until only
              one segment was left. The schematic says what a circuit should do; the site shows
              what it actually does — I want to work where both matter.
            </p>
            <table className="devinfo">
              <caption>Device information</caption>
              <thead>
                <tr>
                  <th>Part number</th>
                  <th>Package</th>
                  <th>Body size (nom)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{identity.partNo}</td>
                  <td>BSc EE Co-op, U of A</td>
                  <td>5 of 8 terms</td>
                </tr>
              </tbody>
            </table>
            <p className="devinfo-note">
              For availability and ordering, see{" "}
              <a href="#contact">Ordering information</a>.
            </p>
          </section>
        </div>

        <Pinout />
      </div>
    </section>
  );
}

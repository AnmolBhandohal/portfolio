import { Via } from "@/components/via";

export function Hero() {
  return (
    <section className="sec hero" id="top" aria-label="Introduction">
      <Via sectionId="top" label="VIN" kind="pad" />
      <p className="doc-line">Datasheet · DS-2029 · Edmonton, AB</p>
      <p className="status">
        <span className="dot" aria-hidden="true" />
        Open to summer co-op roles
      </p>
      <h1>
        Anmol
        <br />
        Bhandohal
      </h1>
      <p className="lot">U of Alberta · Electrical Eng · Lot 2029</p>
      <p className="pos">
        Electrical engineering student who follows the reasoning all the way down —{" "}
        <em>from the schematic, through the firmware, to the panel it lands in.</em>
      </p>
      <dl className="meta">
        <div>
          <dt>Program</dt>
          <dd>EE — Class of 2029</dd>
        </div>
        <div>
          <dt>Focus</dt>
          <dd>Power · Embedded · PCB</dd>
        </div>
        <div>
          <dt>Availability</dt>
          <dd>Summer co-op</dd>
        </div>
      </dl>
    </section>
  );
}

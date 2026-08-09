"use client";

import { Via } from "@/components/via";
import { useReveal } from "@/lib/use-reveal";

export function SectionHead({
  sectionId,
  tapLabel,
  no,
  title,
}: {
  sectionId: string;
  tapLabel: string;
  no: string;
  title: string;
}) {
  const ref = useReveal<HTMLElement>();

  return (
    <header className="sec-head rv" ref={ref}>
      <Via sectionId={sectionId} label={tapLabel} kind="via" />
      <span className="no">{no}</span>
      <h2>{title}</h2>
      <span className="rule" />
    </header>
  );
}

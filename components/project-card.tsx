"use client";

import { useState } from "react";
import { projects } from "@/lib/projects-data";
import { useReveal } from "@/lib/use-reveal";

export function ProjectCard({ projectId }: { projectId: string }) {
  const project = projects.find((p) => p.id === projectId);
  const [hovered, setHovered] = useState(false);
  const ref = useReveal<HTMLElement>();
  if (!project) return null;
  const Illustration = project.illustration;

  return (
    <article
      ref={ref}
      className={`entry rv${hovered ? " is-hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <i className="ck ck-tl" />
      <i className="ck ck-tr" />
      <i className="ck ck-bl" />
      <i className="ck ck-br" />
      <div className="ebar">
        <h3>{project.title}</h3>
        <span className="rev">{project.rev}</span>
        <span className={`st st-${project.status === "active" ? "active" : "ship"}`}>
          {project.statusLabel}
        </span>
      </div>
      <div className="ebody">
        <div className="efig">
          <Illustration />
        </div>
        <div className="etext">
          <p className="why-label">Why it exists</p>
          <p>{project.why}</p>
          <table className="spec">
            <caption>Characteristics</caption>
            <tbody>
              {project.specs.map((spec) => (
                <tr key={spec.th}>
                  <th>{spec.th}</th>
                  <td>{spec.td}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}

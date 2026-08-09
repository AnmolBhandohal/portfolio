"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/projects-data";
import { useReveal } from "@/lib/use-reveal";

export function ProjectCard({
  projectId,
  figSrc,
}: {
  projectId: string;
  figSrc: string | null;
}) {
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
          {figSrc && (
            <>
              <div className="efig-photo">
                <Image
                  src={figSrc}
                  alt={project.figCaption}
                  fill
                  sizes="(max-width: 720px) 100vw, 340px"
                />
              </div>
              <p className="efig-cap">{project.figCaption}</p>
            </>
          )}
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

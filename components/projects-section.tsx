import { SectionHead } from "@/components/section-head";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects-data";

export function ProjectsSection() {
  return (
    <section className="sec sec-projects" id="projects">
      <SectionHead sectionId="projects" tapLabel="TP1" no="§1" title="Projects" />
      {projects.map((project) => (
        <ProjectCard key={project.id} projectId={project.id} />
      ))}
    </section>
  );
}

import { SectionHead } from "@/components/section-head";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects-data";
import { getFigSrc } from "@/lib/figs";

export function ProjectsSection() {
  return (
    <section className="sec sec-projects" id="projects">
      <SectionHead sectionId="projects" tapLabel="TP2" no="§2" title="Projects" />
      {projects.map((project) => (
        <ProjectCard key={project.id} projectId={project.id} figSrc={getFigSrc(project.id)} />
      ))}
    </section>
  );
}

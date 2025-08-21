import { useMemo } from "react";
import { ProjectCard } from "~/components/cards/project/project-card";
import { ProjectType } from "~/types/models/project-type";

type ProjectsContentProps = {
  projects: ProjectType[];
  activeFilter: string;
};

export const ProjectsContent = ({
  projects,
  activeFilter,
}: ProjectsContentProps) => {
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;

    return projects.filter((project) => project.category === activeFilter);
  }, [projects, activeFilter]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects.map((project) => (
        <ProjectCard key={project.slug} {...project} />
      ))}
    </div>
  );
};

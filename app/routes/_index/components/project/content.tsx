import { HomeLoaderData } from "../../types/loader-data";
import { ProjectCard } from "../../../../components/cards/project-card";
import { useLoaderData } from "@remix-run/react";

export const ProjectsContent = () => {
  const { projectsResponse } = useLoaderData<HomeLoaderData>();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {projectsResponse.data!.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

import { ProjectCard } from "~/components/cards/project/project-card";
import { HomeLoaderData } from "../../types/loader-data";
import { useLoaderData } from "@remix-run/react";

export const ProjectsContent = () => {
  const { projectsResponse } = useLoaderData<HomeLoaderData>();

  return (
    <div className="mb-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectsResponse.data!.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

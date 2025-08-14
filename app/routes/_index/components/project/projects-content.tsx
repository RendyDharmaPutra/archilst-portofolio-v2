import { ProjectCard } from "./card/project-card";
import { useLoaderData } from "@remix-run/react";
import { HomeDataType } from "~/home/types/home-data-type";

export const ProjectsContent = () => {
  const { projects } = useLoaderData<HomeDataType>();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {projects.data!.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

import { ErrorBoundary } from "~/components/boundaries/error-boundary";
import { ProjectsContent } from "./projects-content";
import { EmptyBoundary } from "~/components/boundaries/empty-boundary";
import { useLoaderData } from "@remix-run/react";
import { ProjectsLoaderData } from "../types/loader-data";
import { FileX } from "lucide-react";

type ProjectsSectionProps = {
  activeFilter: string;
};

export const ProjectsSection = ({ activeFilter }: ProjectsSectionProps) => {
  const { projectsResponse } = useLoaderData<ProjectsLoaderData>();

  return (
    <section>
      {/* Showing Boundary on certain conditions */}
      {!projectsResponse.success ? (
        <ErrorBoundary description="An error occurred while accessing the projects data. Please try again in a moment." />
      ) : projectsResponse.data!.length < 1 ? (
        <EmptyBoundary
          title="EMPTY PROJECTS"
          description="All projects are currently under development. Stay tuned for the latest updates!"
          icon={FileX}
        />
      ) : (
        <>
          <ProjectsContent
            projects={projectsResponse.data!}
            activeFilter={activeFilter}
          />
        </>
      )}
    </section>
  );
};

import { useLoaderData } from "@remix-run/react";
import { SectionHeader } from "../section-header";
import { ProjectsContent } from "./content";
import { EmptyBoundary } from "~/components/boundaries/empty-boundary";
import { FileX } from "lucide-react";
import { ErrorBoundary } from "~/components/boundaries/error-boundary";
import { HomeLoaderData } from "../../types/loader-data";
import { SectionFooter } from "../section-footer";

export const ProjectsSection = () => {
  const { projectsResponse } = useLoaderData<HomeLoaderData>();

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-primary-background/70 dark:bg-primary-background-dark/50 animate"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="PROJECT HIGHLIGHT" />

        {/* Showing Boundary on certain conditions */}
        {!projectsResponse.success ? (
          <ErrorBoundary description="An error occurred while accessing the projects data. Please try again in a moment." />
        ) : projectsResponse.data!.length < 1 ? (
          <EmptyBoundary
            title="EMPTY PROJECTS"
            description="Exciting projects are currently under development. Stay tuned for the latest updates!"
            icon={FileX}
          />
        ) : (
          <>
            <ProjectsContent />
            <SectionFooter
              label="See All Projects"
              route="/projects"
              variant="filled"
            />
          </>
        )}
      </div>
    </section>
  );
};

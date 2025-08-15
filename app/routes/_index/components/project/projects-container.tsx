import { useLoaderData } from "@remix-run/react";
import { SectionHeader } from "../section-header";
import { ProjectsContent } from "./projects-content";
import { ProjectsFooter } from "./projects-footer";
import { EmptyBoundary } from "~/components/boundaries/empty-boundary";
import { FileX } from "lucide-react";
import { ErrorBoundary } from "~/components/boundaries/error-boundary";
import { HomeDataType } from "../../types/home-data-type";

export const ProjectsContainer = () => {
  const { projects } = useLoaderData<HomeDataType>();

  return (
    <section
      id="projek"
      className="py-20 px-4 bg-bg/70 dark:bg-bg-dark/50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="PROJECT HIGHLIGHT" />

        {/* Showing Boundary on certain conditions */}
        {!projects.success ? (
          <ErrorBoundary description="An error occurred while accessing the projects data. Please try again in a moment." />
        ) : projects.data!.length < 1 ? (
          <EmptyBoundary
            title="EMPTY PROJECTS"
            description="Exciting projects are currently under development. Stay tuned for the latest updates!"
            icon={FileX}
          />
        ) : (
          <>
            <ProjectsContent />
            <ProjectsFooter />
          </>
        )}
      </div>
    </section>
  );
};

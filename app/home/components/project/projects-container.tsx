import { ProjectsContent } from "./projects-content";
import { ProjectsFooter } from "./projects-footer";
import { ProjectsHeader } from "./projects-header";

export const ProjectsContainer = () => {
  return (
    <section
      id="projek"
      className="py-20 px-4 bg-bg/70 dark:bg-bg-dark/50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <ProjectsHeader />

        <ProjectsContent />

        <ProjectsFooter />
      </div>
    </section>
  );
};

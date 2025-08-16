import { ProjectCardContent } from "./content";
import { ProjectCardHeader } from "./header";
import { ProjectCardProps } from "./type";

export const ProjectCard: React.FC<ProjectCardProps> = ({ ...props }) => {
  return (
    <div
      className={`group rounded-lg border border-primary-accent/20 dark:border-primary-accent-dark/30 hover:border-primary-accent dark:hover:border-primary-accent-dark bg-primary-background dark:bg-primary-background-dark shadow-lg hover:shadow-[0_0_20px_rgba(0,128,255,0.15)] dark:hover:shadow-[0_0_20px_rgba(0,102,204,0.1)] overflow-hidden animate`}
    >
      <ProjectCardHeader {...props} />

      {/* Card Content */}
      <ProjectCardContent {...props} />
    </div>
  );
};

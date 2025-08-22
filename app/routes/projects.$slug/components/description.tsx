import { ProjectType } from "~/types/models/project-type";

type ProjectDescriptionProps = Pick<ProjectType, "description"> & {};

export const ProjectDescription = ({
  description,
}: ProjectDescriptionProps) => {
  return (
    <section className="-mb-4 flex flex-col gap-6 ">
      <h2 className="font-bold text-3xl text-primary-accent dark:text-primary-accent-dark animate">
        Project Overview
      </h2>
      <div className="max-w-4xl">
        <p className="text-lg leading-relaxed text-secondary-text dark:text-secondary-text-dark animate">
          {description}
        </p>
      </div>
    </section>
  );
};

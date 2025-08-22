import { ProjectType } from "~/types/models/project-type";

type ProjectBannerProps = Pick<ProjectType, "title" | "thumbnail_url"> & {};

export const ProjectBanner = ({ title, thumbnail_url }: ProjectBannerProps) => {
  return (
    <section className="-mb-4">
      <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-tertiary-background dark:border-tertiary-background-dark animate">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>
    </section>
  );
};

import { Link } from "@remix-run/react";
import { ExternalLink, Eye } from "lucide-react";
import React from "react";
import { formatDate } from "~/utils/formatter/date-formatter";
import { ProjectType } from "~/types/models/project-type";

type ProjectCardProps = ProjectType;

export const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  slug,
  title,
  description,
  thumbnail_url,
  demo_url,
  category,
  publish_date,
}) => {
  return (
    <div
      key={id}
      className={`group rounded-lg border border-primary-accent/20 dark:border-primary-accent-dark/30 hover:border-primary-accent dark:hover:border-primary-accent-dark bg-primary-background dark:bg-primary-background-dark shadow-lg hover:shadow-[0_0_20px_rgba(0,128,255,0.15)] dark:hover:shadow-[0_0_20px_rgba(0,102,204,0.1)] overflow-hidden animate`}
    >
      <ProjectCardHeader
        title={title}
        thumbnail_url={thumbnail_url}
        category={category}
      />

      {/* Card Content */}
      <ProjectCardContent
        title={title}
        slug={slug}
        description={description}
        demo_url={demo_url}
        publish_date={publish_date}
      />
    </div>
  );
};

const ProjectCardHeader = ({
  title,
  thumbnail_url,
  category,
}: Pick<ProjectCardProps, "title" | "thumbnail_url" | "category">) => {
  return (
    <div className="relative overflow-hidden">
      {/* Thumbnail */}
      <img
        src={thumbnail_url || "/placeholder.svg"}
        alt={title}
        className="w-full h-48 object-cover animate group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 animate" />

      {/* Badge Kategori */}
      <div
        className={`absolute top-3 right-3 px-3 py-0.5 text-xs rounded-full ${
          category === "Public"
            ? "bg-primary-accent dark:bg-primary-accent-dark text-white"
            : category === "Private"
            ? "bg-primary-text/20 text-primary-text dark:bg-primary-text-dark/20 dark:text-primary-text-dark"
            : "border border-primary-accent dark:border-primary-accent-dark text-primary-accent dark:text-primary-accent-dark bg-black/20"
        } animate`}
      >
        {category}
      </div>
    </div>
  );
};

const ProjectCardContent = ({
  title,
  slug,
  description,
  demo_url,
  publish_date,
}: Omit<ProjectCardProps, "id" | "thumbnail_url" | "category">) => {
  return (
    <div className="p-6 flex flex-col justify-between">
      <div className="mb-4">
        <h3
          className={`mb-2 font-bold text-xl text-primary-text dark:text-primary-text-dark group-hover:text-primary-accent dark:group-hover:text-primary-accent-dark animate`}
        >
          {title}
        </h3>
        <p
          className={`mb-3 text-sm text-tertiary-text dark:text-tertiary-text-dark animate`}
        >
          {formatDate(publish_date)}
        </p>
      </div>

      <p
        className={`mb-6 leading-relaxed text-tertiary-text dark:text-tertiary-text-dark animate`}
      >
        {description}
      </p>

      {/* Tombol Akses */}
      <div className="flex gap-3">
        <Link
          to={`/projects/${slug}`} // Ganti dengan slug atau ID jika perlu
          className="flex-1 px-4 py-2 flex items-center justify-center gap-2 font-medium text-sm text-primary-accent dark:text-primary-accent-dark hover:text-white dark:hover:text-white rounded-md border border-primary-accent dark:border-primary-accent-dark bg-transparent hover:bg-primary-accent dark:hover:bg-primary-accent-dark animate"
        >
          <Eye className="h-4 w-4" />
          Detail
        </Link>

        {demo_url && (
          <Link
            to={demo_url} // Ganti dengan target URL jika eksternal, gunakan <a> jika href eksternal
            target="_blank"
            rel="noreferrer"
            className="flex-1 px-4 py-2 flex items-center justify-center gap-2 font-medium text-sm rounded-md bg-primary-accent hover:bg-primary-accent/80 dark:bg-primary-accent-dark dark:hover:bg-primary-accent-dark/80 text-white hover:shadow-[0_0_15px_rgba(0,128,255,0.4)] dark:hover:shadow-[0_0_15px_rgba(0,102,204,0.4)] animate"
          >
            <ExternalLink className="h-4 w-4" />
            Visit
          </Link>
        )}
      </div>
    </div>
  );
};

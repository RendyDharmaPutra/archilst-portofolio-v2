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
      className={`rounded-lg overflow-hidden bg-card dark:bg-card-dark border border-accent/20 dark:border-accent/30 hover:border-accent dark:hover:border-accent transition-all duration-300 dark:hover:shadow-[0_0_20px_rgba(0,128,255,0.1)] hover:shadow-[0_0_20px_rgba(0,128,255,0.15)] shadow-lg group`}
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
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Badge Kategori */}
      <div
        className={`absolute top-3 right-3 text-xs px-3 py-0.5 rounded-full  transition-colors duration-300 ${
          category === "Public"
            ? "bg-accent text-white"
            : category === "Private"
            ? "bg-text/20 text-text-dark dark:bg-text-dark/20 dark:text-text-dark"
            : "border border-accent text-accent bg-black/20"
        }`}
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
          className={`text-xl font-bold text-text dark:text-text-dark group-hover:text-accent transition-colors mb-2`}
        >
          {title}
        </h3>
        <p className={`text-sm text-text-muted dark:text-text-dark mb-3`}>
          {formatDate(publish_date)}
        </p>
      </div>

      <p className={`text-text-muted dark:text-text-dark mb-6 leading-relaxed`}>
        {description}
      </p>

      {/* Tombol Akses */}
      <div className="flex gap-3">
        <Link
          to={`/projects/${slug}`} // Ganti dengan slug atau ID jika perlu
          className="flex-1 border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 bg-transparent px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2"
        >
          <Eye className="h-4 w-4" />
          Detail
        </Link>

        {demo_url && (
          <Link
            to={demo_url} // Ganti dengan target URL jika eksternal, gunakan <a> jika href eksternal
            target="_blank"
            rel="noreferrer"
            className="flex-1 bg-accent hover:bg-accent/80 text-white hover:shadow-[0_0_15px_rgba(0,128,255,0.4)] transition-all duration-300 px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            Visit
          </Link>
        )}
      </div>
    </div>
  );
};

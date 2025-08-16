import { ArrowRight, Calendar } from "lucide-react";
import { ProjectCardProps } from "./type";
import { formatDate } from "~/utils/formatter/date-formatter";
import { Link } from "@remix-run/react";

export const ProjectCardContent = ({
  title,
  slug,
  description,
  publish_date,
}: Omit<
  ProjectCardProps,
  "id" | "thumbnail_url" | "category" | "demo_url"
>) => {
  return (
    <div className="p-6 flex flex-col justify-between gap-6 ">
      <div className="flex flex-col gap-2 ">
        <h3
          className={`  font-bold text-xl text-primary-text dark:text-primary-text-dark group-hover:text-primary-accent dark:group-hover:text-primary-accent-dark animate`}
        >
          {title}
        </h3>
        <p
          className={`  flex flex-row items-center gap-2 text-sm text-tertiary-text dark:text-tertiary-text-dark animate`}
        >
          <Calendar className="w-4 h-4 text-primary-accent dark:text-primary-accent-dark animate" />{" "}
          {formatDate(publish_date)}
        </p>
      </div>

      <p
        className={` leading-relaxed line-clamp-3 text-tertiary-text dark:text-tertiary-text-dark animate`}
      >
        {description}
      </p>

      <Link
        to={`/projects/${slug}`} // Ganti dengan slug atau ID jika perlu
        className="group/btn flex-1 px-4 py-3 flex items-center justify-center gap-2 font-medium text-sm text-white rounded-md bg-primary-accent dark:bg-primary-accent-dark hover:bg-primary-accent/80 dark:hover:bg-primary-accent-dark/80 animate"
      >
        View Detail
        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 animate" />
      </Link>
    </div>
  );
};

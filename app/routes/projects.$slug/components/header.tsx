import { Calendar, ExternalLink, Github } from "lucide-react";
import { ActionBtn } from "./action-btn";
import { useVariantStyle } from "~/hooks/use-variant-style";
import { ProjectType } from "~/types/models/project-type";
import { formatDate } from "~/utils/formatter/date-formatter";

type ProjectHeaderProps = Pick<
  ProjectType,
  "title" | "category" | "publish_date" | "repo_url" | "demo_url"
> & {};

export const ProjectHeader = ({
  title,
  category,
  publish_date,
  demo_url,
  repo_url,
}: ProjectHeaderProps) => {
  const { bg, border, text } = useVariantStyle("outline");

  return (
    <section className="mb-4">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-6">
        {/* Project Headline */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="font-bold text-4xl lg:text-5xl text-transparent bg-gradient-to-r from-primary-background-dark dark:from-primary-background via-primary-accent dark:via-primary-accent-dark to-primary-background-dark dark:to-primary-background bg-clip-text animate">
            {title}
          </h1>

          <div className="flex flex-wrap items-center gap-4">
            <div
              className={`px-4 py-2 font-semibold text-sm border rounded-xl ${text} ${bg} ${border} animate`}
            >
              {category}
            </div>

            <div className="flex items-center gap-2 text-secondary-text dark:text-secondary-text-dark animate">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(publish_date)}</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3">
          {demo_url && (
            <ActionBtn
              label="Live Demo"
              Icon={ExternalLink}
              route={demo_url}
              variant="filled"
            />
          )}
          {repo_url && (
            <ActionBtn
              label="Repository"
              Icon={Github}
              route={repo_url}
              variant="outline"
            />
          )}
        </div>
      </div>
    </section>
  );
};

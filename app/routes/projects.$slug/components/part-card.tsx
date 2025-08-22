import { Github } from "lucide-react";
import { ActionBtn } from "./action-btn";
import { useVariantStyle } from "~/hooks/use-variant-style";
import { ProjectPartStacksType } from "~/types/models/project-part-stacks";

type PartCardProps = ProjectPartStacksType & {};

export const PartCard = ({
  title,
  type,
  description,
  repo_url,
  stacks,
}: PartCardProps) => {
  const { text, border, bg } = useVariantStyle("outline");

  return (
    <div
      className={`rounded-xl border border-primary-background/20 dark:border-primary-background-dark/30 hover:border-primary-accent dark:hover:border-primary-accent-dark bg-tertiary-background dark:bg-tertiary-background-dark shadow-lg hover:shadow-[0_0_20px_rgba(0,128,255,0.15)] dark:hover:shadow-[0_0_20px_rgba(0,102,204,0.1)] animate`}
    >
      <div className="p-6 flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <div className="flex-1 flex flex-row items-center gap-3">
            <h3 className="font-semibold text-xl">{title}</h3>
            <div
              className={`px-2 py-1 rounded-md text-xs font-semibold border flex items-center gap-1 ${text} ${border} ${bg} animate`}
            >
              <span>{type}</span>
            </div>
          </div>

          {repo_url && (
            <ActionBtn Icon={Github} route={repo_url} variant="outline" />
          )}
        </div>

        <p
          className={`mb-1 leading-relaxed text-secondary-text dark:text-secondary-text-dark animate`}
        >
          {description ?? (
            <span className="italic">Deskripsi tidak tersedia</span>
          )}
        </p>

        <div className="flex flex-wrap gap-2">
          {stacks.map((stack, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 inline-flex items-center gap-1 font-medium text-xs ${text} rounded-full ${border} ${bg} animate`}
            >
              {stack.stack.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

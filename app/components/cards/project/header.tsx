import { Badge } from "~/components/ui/badge";
import { ProjectCardProps } from "./type";
import { ExternalLink, Github } from "lucide-react";
import { ProjectCardAction } from "./action";

export const ProjectCardHeader = ({
  title,
  thumbnail_url,
  category,
  repo_url,
  demo_url,
}: Pick<
  ProjectCardProps,
  "title" | "thumbnail_url" | "category" | "repo_url" | "demo_url"
>) => {
  const badgeVariant =
    category === "Public"
      ? "filled"
      : category === "Private"
      ? "muted"
      : "outline";

  return (
    <div className="relative overflow-hidden">
      {/* Thumbnail */}
      <img
        src={thumbnail_url || "/placeholder.svg"}
        alt={title}
        className="w-full h-60 object-cover animate group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 animate" />

      <Badge label={category} variant={badgeVariant} />

      {/* Quick Actions */}
      <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {repo_url && <ProjectCardAction route={repo_url} Icon={Github} />}
        {demo_url && <ProjectCardAction route={demo_url} Icon={ExternalLink} />}
      </div>
    </div>
  );
};

import { Link } from "@remix-run/react";
import { LucideIcon } from "lucide-react";

type ProjectCardActionProps = {
  route: string;
  Icon: LucideIcon;
};

export const ProjectCardAction = ({ route, Icon }: ProjectCardActionProps) => {
  return (
    <Link
      to={route}
      target="_blank"
      className="p-2 text-white rounded-full bg-black/50  hover:bg-primary-accent dark:hover:bg-primary-accent-dark backdrop-blur-sm animate"
    >
      <Icon className="h-4 w-4" />
    </Link>
  );
};

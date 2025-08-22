import { Link } from "@remix-run/react";
import { LucideIcon } from "lucide-react";
import { useVariantStyle, VariantType } from "~/hooks/use-variant-style";

type ActionBtnProps = {
  label?: string;
  Icon: LucideIcon;
  route: string;
  variant: VariantType;
};

export const ActionBtn = ({ label, Icon, route, variant }: ActionBtnProps) => {
  const { border, bg, text, hoverState } = useVariantStyle(variant);

  return (
    <Link
      to={route}
      target="_blank"
      className={`px-4 py-2 flex flex-row justify-center items-center gap-2 rounded-xl ${text} ${border} ${
        variant !== "outline" && bg
      } ${hoverState} animate`}
    >
      <Icon className="h-4 w-4" />
      {label}
    </Link>
  );
};

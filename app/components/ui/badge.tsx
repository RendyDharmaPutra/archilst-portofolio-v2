import { useVariantStyle, VariantType } from "~/hooks/use-variant-style";

type BadgeProps = {
  label: string;
  variant?: VariantType;
  className?: string;
};

export const Badge = ({
  label,
  variant = "filled",
  className = "absolute top-3 right-3 ",
}: BadgeProps) => {
  const { text, border, bg } = useVariantStyle(variant);

  return (
    <div
      className={`px-3 py-0.5 ${className} text-xs rounded-full ${text} ${border} ${bg} animate`}
    >
      {label}
    </div>
  );
};

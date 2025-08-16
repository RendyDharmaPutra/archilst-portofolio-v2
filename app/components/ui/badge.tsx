type BadgeProps = {
  label: string;
  variant?: "filled" | "outline" | "muted";
};

export const Badge = ({ label, variant = "filled" }: BadgeProps) => {
  const variantStyle =
    variant === "filled"
      ? "text-white bg-primary-accent dark:bg-primary-accent-dark"
      : variant === "muted"
      ? " text-primary-text dark:text-primary-text-dark bg-primary-text/20 dark:bg-primary-text-dark/20"
      : "text-primary-accent dark:text-primary-accent-dark border border-primary-accent dark:border-primary-accent-dark bg-primary-accent/20 dark:bg-primary-accent-dark/20";

  return (
    <div
      className={`absolute top-3 right-3 px-3 py-0.5 text-xs rounded-full ${variantStyle} animate`}
    >
      {label}
    </div>
  );
};

import { Link } from "@remix-run/react";

type SectionFooterProps = {
  label: string;
  route: "/projects" | "/photographs";
  variant?: "outline" | "filled";
};

export const SectionFooter = ({
  label,
  route,
  variant = "filled",
}: SectionFooterProps) => {
  const variantStyle =
    variant === "filled"
      ? "bg-primary-accent dark:bg-primary-accent-dark hover:bg-primary-accent/80 dark:hover:bg-primary-accent-dark/80 text-white hover:shadow-[0_0_20px_rgba(0,128,255,0.5)] dark:hover:shadow-[0_0_20px_rgba(0,102,209,0.5)"
      : "border-2 border-primary-accent dark:border-primary-accent-dark text-primary-accent dark:text-primary-accent-dark hover:bg-primary-accent dark:hover:bg-primary-accent-dark bg-transparent hover:text-white dark:hover:text-white hover:shadow-[0_0_20px_rgba(0,128,255,0.3)] dark:hover:shadow-[0_0_20px_rgba(0,102,209,0.3)]";

  return (
    <div className="text-center">
      <Link
        to={route}
        className={`px-8 py-3 font-semibold text-base rounded-md ${variantStyle} animate`}
      >
        {label}
      </Link>
    </div>
  );
};

export type VariantType = "filled" | "outline" | "muted";

export const variantStyleMap: Record<
  VariantType,
  { text: string; border: string; bg: string; hoverState: string }
> = {
  filled: {
    text: "text-white",
    bg: "bg-primary-accent dark:bg-primary-accent-dark",
    border: "",
    hoverState:
      "hover:bg-primary-accent/80 dark:hover:bg-primary-accent-dark/80 hover:shadow-[0_0_15px_rgba(0,128,255,0.4)] dark:hover:shadow-[0_0_15px_rgba(0,102,204,0.4)]",
  },
  outline: {
    text: "text-primary-accent dark:text-primary-accent-dark",
    bg: "bg-primary-accent/10 dark:bg-primary-accent-dark/10",
    border: "border border-primary-accent dark:border-primary-accent-dark",
    hoverState:
      "hover:text-white dark:hover:text-white hover:bg-primary-accent dark:hover:bg-primary-accent-dark",
  },
  muted: {
    text: "text-primary-text dark:text-primary-text-dark",
    bg: "bg-primary-text/20 dark:bg-primary-text-dark/20",
    border: "",
    hoverState:
      "hover:text-white dark:hover:text-white hover:bg-primary-accent dark:hover:bg-primary-accent-dark",
  },
};

export const useVariantStyle = (variant: VariantType) => {
  return variantStyleMap[variant];
};

import { BaseBoundary, BaseBoundaryProps } from "./base-boundary";

export const EmptyBoundary = (props: Omit<BaseBoundaryProps, "variant">) => {
  return <BaseBoundary {...props} variant="empty" />;
};

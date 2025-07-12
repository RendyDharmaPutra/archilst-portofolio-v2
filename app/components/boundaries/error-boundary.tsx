import { AlertTriangle } from "lucide-react";
import { BaseBoundary, BaseBoundaryProps } from "./base-boundary";

export const ErrorBoundary = (
  props: Pick<BaseBoundaryProps, "description">
) => {
  return (
    <BaseBoundary
      title="SOMETHING WENT WRONG"
      variant="error"
      icon={AlertTriangle}
      {...props}
    />
  );
};

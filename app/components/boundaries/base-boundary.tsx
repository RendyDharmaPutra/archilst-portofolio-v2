import { useNavigation } from "@remix-run/react";
import { LucideProps, RefreshCw } from "lucide-react";
import React from "react";

export type BaseBoundaryProps = {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
  variant: "empty" | "error";
};

export const BaseBoundary = (props: BaseBoundaryProps) => {
  const isEmptyVariant = props.variant === "empty";

  return (
    <div className="px-4 flex items-center justify-center min-h-[400px]">
      <div
        className={`max-w-md w-full rounded-lg border ${
          isEmptyVariant
            ? "border-primary-accent/20 dark:border-primary-accent-dark/30 hover:border-primary-accent dark:hover:border-primary-accent-dark hover:shadow-[0_0_20px_rgba(0,128,255,0.1)] dark:hover:shadow-[0_0_20px_rgba(0,102,204,0.1)]"
            : "border-danger/20 dark:border-danger/30 hover:border-danger dark:hover:border-danger-dark hover:shadow-[0_0_20px_rgba(220,38,38,0.1)] dark:hover:shadow-[0_0_20px_rgba(239,68,68,0.1)]"
        } 
            bg-primary-background dark:bg-primary-background-dark 
          shadow-md dark:shadow-none overflow-hidden animate`}
      >
        <div className="p-8 text-center text-primary-text dark:text-primary-text-dark animate">
          {/* Illustration */}
          <BaseBoundaryHeader {...props} isEmptyVariant={isEmptyVariant}>
            {isEmptyVariant && (
              <>
                <div
                  className={`absolute -top-2 -right-2 w-3 h-3 rounded-full bg-primary-accent/60 dark:bg-primary-accent-dark/60 animate animate-bounce delay-300`}
                />
                <div
                  className={`absolute -bottom-2 -left-2 w-2 h-2 rounded-full bg-primary-accent/40 dark:bg-primary-accent-dark/40 animate animate-bounce delay-700`}
                />
              </>
            )}
          </BaseBoundaryHeader>

          {/* Content */}
          <BaseBoundaryContent {...props} />

          {/* Action Buttons */}
          <BaseBoundaryFooter isEmptyVariant={isEmptyVariant} />
        </div>
      </div>
    </div>
  );
};

const BaseBoundaryHeader = (
  props: Pick<BaseBoundaryProps, "icon"> & {
    children?: React.ReactNode;
    isEmptyVariant: boolean;
  }
) => {
  return (
    <section className="mb-6 flex justify-center">
      <div className="relative">
        <div
          className={`absolute inset-0 rounded-full ${
            props.isEmptyVariant
              ? "bg-primary-accent/10 dark:bg-primary-accent-dark/10"
              : "bg-danger/10 dark:bg-danger-dark/10"
          } blur-xl animate-pulse animate`}
        />
        <div className="relative">
          <props.icon
            className={`h-16 w-16 ${
              props.isEmptyVariant
                ? "text-primary-accent dark:text-primary-accent-dark"
                : "text-danger dark:text-danger-dark"
            } animate`}
          />
        </div>
        {props.children}
      </div>
    </section>
  );
};

const BaseBoundaryContent = ({
  title,
  description,
}: Omit<BaseBoundaryProps, "icon">) => {
  return (
    <>
      {/* Title */}
      <h3 className="mb-4 font-bold text-2xl tracking-wide text-primary-text dark:text-primary-text-dark animate">
        {title}
      </h3>

      {/* Message */}
      <p className="mb-8 leading-relaxed text-secondary-text dark:text-secondary-text-dark animate">
        {description}
      </p>
    </>
  );
};

const BaseBoundaryFooter = ({
  isEmptyVariant,
}: {
  isEmptyVariant: boolean;
}) => {
  return (
    <section className="flex flex-col sm:flex-row gap-3">
      <button
        onClick={() => window.location.reload()}
        className={`px-4 py-2 flex-1 flex items-center justify-center gap-2 font-medium text-sm rounded-md text-white ${
          isEmptyVariant
            ? "bg-primary-accent dark:bg-primary-accent-dark hover:bg-primary-accent/80 dark:hover:bg-primary-accent-dark/80 hover:shadow-[0_0_15px_rgba(0,128,255,0.1)] dark:hover:shadow-[0_0_15px_rgba(0,102,204,0.1)]"
            : "bg-danger dark:bg-danger-dark hover:bg-danger/80 dark:hover:bg-danger-dark/80 hover:shadow-[0_0_15px_rgba(220,38,38,0.1)] dark:hover:shadow-[0_0_15px_rgba(239,68,68,0.1)]"
        } animate`}
      >
        <RefreshCw className="mr-2 h-4 w-4" />
        Refresh
      </button>
    </section>
  );
};

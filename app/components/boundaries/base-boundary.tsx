import { LucideProps, RefreshCw } from "lucide-react";
import React from "react";

export type BaseBoundaryProps = {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
  variant: "empty" | "error";
};

export const BaseBoundary = (props: BaseBoundaryProps) => {
  const color = props.variant === "empty" ? "accent" : "danger";

  return (
    <div className="flex items-center justify-center min-h-[400px] px-4">
      <div
        className={`bg-bg dark:bg-bg-dark border border-${color}/20 dark:border-${color}/30 
          max-w-md w-full rounded-lg hover:border-${color} dark:hover:border-${color} transition-all duration-300 
          shadow-md dark:shadow-none hover:shadow-[0_0_20px_rgba(0,128,255,0.1)] dark:hover:shadow-[0_0_20px_rgba(0,128,255,0.1)] overflow-hidden`}
      >
        <div className="p-8 text-center text-text dark:text-text-dark">
          {/* Illustration */}
          <BaseBoundaryHeader {...props} color={color}>
            {props.variant === "empty" && (
              <>
                <div
                  className={`absolute -top-2 -right-2 w-3 h-3 bg-${color}/60 rounded-full animate-bounce delay-300`}
                />
                <div
                  className={`absolute -bottom-2 -left-2 w-2 h-2 bg-${color}/40 rounded-full animate-bounce delay-700`}
                />
              </>
            )}
          </BaseBoundaryHeader>

          {/* Content */}
          <BaseBoundaryContent {...props} />

          {/* Action Buttons */}
          <BaseBoundaryFooter color={color} />
        </div>
      </div>
    </div>
  );
};

const BaseBoundaryHeader = (
  props: Pick<BaseBoundaryProps, "icon"> & {
    children?: React.ReactNode;
    color: "accent" | "danger";
  }
) => {
  return (
    <section className="mb-6 flex justify-center">
      <div className="relative">
        <div
          className={`absolute inset-0 bg-${props.color}/10 rounded-full blur-xl animate-pulse`}
        />
        <div className="relative">
          <props.icon className={`h-16 w-16 text-${props.color}`} />
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
      <h3 className="text-2xl font-bold mb-4 tracking-wide text-text dark:text-text-dark">
        {title}
      </h3>

      {/* Message */}
      <p className="text-text-secondary dark:text-text-secondary-dark mb-8 leading-relaxed">
        {description}
      </p>
    </>
  );
};

const BaseBoundaryFooter = ({ color }: { color: "accent" | "danger" }) => {
  return (
    <section className="flex flex-col sm:flex-row gap-3">
      <button
        onClick={() => {}}
        className={`flex-1 bg-${color} text-white hover:bg-${color}/80 dark:hover:bg-${color}/80 hover:shadow-[0_0_15px_rgba(0,128,255,0.4)] dark:hover:shadow-[0_0_15px_rgba(0,128,255,0.4)] transition-all duration-300 px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2`}
      >
        <RefreshCw className="mr-2 h-4 w-4" />
        Refresh
      </button>
    </section>
  );
};

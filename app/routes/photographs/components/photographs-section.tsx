import { useLoaderData } from "@remix-run/react";
import { Image } from "lucide-react";
import { EmptyBoundary } from "~/components/boundaries/empty-boundary";
import { ErrorBoundary } from "~/components/boundaries/error-boundary";
import { PhotographsLoaderData } from "../type/loader-data";
import { PhotographsContent } from "./photographs-content";

export const PhotographsSection = () => {
  const { photographsResponse } = useLoaderData<PhotographsLoaderData>();

  return (
    <section>
      {/* Showing Boundary on certain conditions */}
      {!photographsResponse.success ? (
        <ErrorBoundary description="An error occurred while accessing the projects data. Please try again in a moment." />
      ) : photographsResponse.data!.length < 1 ? (
        <EmptyBoundary
          title="EMPTY PROJECTS"
          description="All projects are currently under development. Stay tuned for the latest updates!"
          icon={Image}
        />
      ) : (
        <PhotographsContent photographs={photographsResponse.data!} />
      )}
    </section>
  );
};

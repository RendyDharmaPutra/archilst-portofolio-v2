import { ProjectBanner } from "./components/banner";
import { ProjectDescription } from "./components/description";
import { ProjectHeader } from "./components/header";
import { ProjectParts } from "./components/parts";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { readProjectDetailService } from "./services/read-project-detail";
import { useLoaderData } from "@remix-run/react";
import { ProjectDetailLoaderData } from "./types/loader-data";
import { ErrorBoundary } from "~/components/boundaries/error-boundary";

export async function loader({ params }: LoaderFunctionArgs) {
  const projectSlug = (params as { slug: string }).slug;

  const projectResponse = await readProjectDetailService(projectSlug);

  return {
    projectResponse,
  };
}

export default function ProjectDetailPage() {
  const { projectResponse } = useLoaderData<ProjectDetailLoaderData>();

  return (
    <main className="mx-auto px-4 py-28 flex flex-col gap-16 max-w-7xl ">
      {!projectResponse.success ? (
        <ErrorBoundary description={projectResponse.message} />
      ) : (
        <>
          <ProjectHeader {...projectResponse.data!} />
          <ProjectBanner {...projectResponse.data!} />
          <ProjectDescription {...projectResponse.data!} />
          <ProjectParts {...projectResponse.data!} />
        </>
      )}
    </main>
  );
}

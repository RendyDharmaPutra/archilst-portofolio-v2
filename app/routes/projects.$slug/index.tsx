import { ProjectBanner } from "./components/banner";
import { ProjectDescription } from "./components/description";
import { ProjectHeader } from "./components/header";
import { ProjectParts } from "./components/parts";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { readProjectDetailService } from "./services/read-project-detail";
import { useLoaderData } from "@remix-run/react";
import { ProjectDetailLoaderData } from "./types/loader-data";
import { ErrorBoundary } from "~/components/boundaries/error-boundary";
import { createMeta } from "~/utils/seo";

export async function loader({ params }: LoaderFunctionArgs) {
  const projectSlug = (params as { slug: string }).slug;

  const projectResponse = await readProjectDetailService(projectSlug);

  return {
    projectResponse,
  };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data)
    return createMeta({
      title: "Project Not Found",
      description: "Proyek tidak ditemukan di portofolio Archilst.",
    });

  return createMeta({
    title: data.projectResponse.data!.title,
    description: data.projectResponse.data!.description,
    image: data.projectResponse.data!.thumbnail_url,
    type: "article",
    url: `https://archilst.my.id/projects/${data.projectResponse.data!.slug}`,
  });
};

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

import { HeroSection } from "./components/hero/hero-section";
import { AboutSection } from "./components/about/about-section";
import { ProjectsSection } from "./components/project/projects-section";
import { PhotosSection } from "./components/photo/photos-section";
import { readHighlightPhotosService } from "./services/read-highlight-photos";
import { readHighlightProjectsService } from "./services/read-highlight-projects";
import { HomeLoaderData } from "./types/loader-data";
import { MetaFunction } from "@remix-run/node";
import { createMeta } from "~/utils/seo";

export async function loader(): Promise<HomeLoaderData> {
  const [projectsResponse, photosResponse] = await Promise.all([
    readHighlightProjectsService(),
    readHighlightPhotosService(),
  ]);

  return {
    projectsResponse,
    photosResponse,
  };
}

export const meta: MetaFunction = () =>
  createMeta({
    title: "Home",
    description:
      "Software Developer yang berkembang ke arah Software Engineer dan Engineer secara menyeluruh. Membangun solusi melalui teknologi, desain sistem, dan eksplorasi kreatif dalam software maupun perangkat keras. Software Developer yang berkembang ke arah Software Engineer dan Engineer secara menyeluruh. Membangun solusi melalui teknologi, desain sistem, dan eksplorasi kreatif dalam software maupun perangkat keras.",
    isHome: true,
  });

export default function Index() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <PhotosSection />
    </>
  );
}

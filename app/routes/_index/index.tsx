import { AboutContainer } from "./components/about/about-container";
import { HeroContainer } from "./components/hero/hero-container";
import { PhotosContainer } from "./components/photo/photos-container";
import { ProjectsContainer } from "./components/project/projects-container";
import { readHighlightPhotosService } from "./services/read-highlight-photos";
import { readHighlightProjectsService } from "./services/read-highlight-projects";
import { HomeLoaderData } from "./types/loader-data";

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

export default function Index() {
  return (
    <>
      <HeroContainer />
      <AboutContainer />
      <ProjectsContainer />
      <PhotosContainer />
    </>
  );
}

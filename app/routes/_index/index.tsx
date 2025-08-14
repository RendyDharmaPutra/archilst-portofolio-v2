import { AboutContainer } from "./components/about/about-container";
import { HeroContainer } from "./components/hero/hero-container";
import { PhotosContainer } from "./components/photo/photos-container";
import { ProjectsContainer } from "./components/project/projects-container";
import { HomeDataType } from "./types/home-data-type";
import { getPhotos } from "./utils/get-photos";
import { getProjects } from "./utils/get-projects";

export async function loader(): Promise<HomeDataType> {
  const [projects, photos] = await Promise.all([getProjects(), getPhotos()]);

  return {
    projects,
    photos,
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

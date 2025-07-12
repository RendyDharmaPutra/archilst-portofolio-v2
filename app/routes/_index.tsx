import { AboutContainer } from "~/home/components/about/about-container";
import { HeroContainer } from "~/home/components/hero/hero-container";
import { PhotosContainer } from "~/home/components/photo/photos-container";
import { ProjectsContainer } from "~/home/components/project/projects-container";
import { HomeDataType } from "~/home/types/home-data-type";
import { getPhotos } from "~/home/utils/getPhotos";
import { getProjects } from "~/home/utils/getProjects";

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

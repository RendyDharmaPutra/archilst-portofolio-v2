import { AboutContainer } from "~/home/components/about/about-container";
import { HeroContainer } from "~/home/components/hero/hero-container";
import { ProjectsContainer } from "~/home/components/project/projects-container";

export default function Index() {
  return (
    <>
      <HeroContainer />
      <AboutContainer />
      <ProjectsContainer />
    </>
  );
}

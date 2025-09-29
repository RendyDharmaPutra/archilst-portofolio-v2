import { useState } from "react";
import { PageHeadline } from "../../components/ui/page-headline";
import { FilterTabs } from "./components/filter-tabs";
import { ProjectsSection } from "./components/projects-section";
import { readProjectsService } from "./services/read-projects";

export async function loader() {
  const projectsResponse = await readProjectsService();

  return {
    projectsResponse,
  };
}

export default function ProjectsPage() {
  const categories = ["All", "Public", "Private", "Experimental"];
  const [activeFilter, setActiveFilter] = useState(categories[0]);

  return (
    <main className="mx-auto px-4 py-32 flex flex-col gap-16 max-w-7xl">
      <PageHeadline />

      <FilterTabs
        categories={categories}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <ProjectsSection activeFilter={activeFilter} />
    </main>
  );
}

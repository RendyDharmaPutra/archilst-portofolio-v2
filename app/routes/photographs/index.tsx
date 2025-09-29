import { PageHeadline } from "../../components/ui/page-headline";
import { PhotographsSection } from "./components/photographs-section";
import { readPhotographsService } from "./services/read-photographs";

export async function loader() {
  const photographsResponse = await readPhotographsService();

  return {
    photographsResponse,
  };
}

export default function PhotographsPage() {
  return (
    <main className="mx-auto px-4 py-32 flex flex-col gap-16 max-w-7xl">
      <PageHeadline
        title="PHOTOGRAPHY"
        description="A collection of photographs capturing moments, emotions, and perspectives from various angles."
      />

      <PhotographsSection />
    </main>
  );
}

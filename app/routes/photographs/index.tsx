import { MetaFunction } from "@remix-run/node";
import { PageHeadline } from "../../components/ui/page-headline";
import { PhotographsSection } from "./components/photographs-section";
import { readPhotographsService } from "./services/read-photographs";
import { createMeta } from "~/utils/seo";

export async function loader() {
  const photographsResponse = await readPhotographsService();

  return {
    photographsResponse,
  };
}

export const meta: MetaFunction = () =>
  createMeta({
    title: "Photographs",
    description:
      "A collection of photographs capturing moments, emotions, and perspectives from various angles.",
    url: "https://archilst.my.id/photographs",
  });

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

import { PageHeadline } from "../../components/ui/page-headline";

export async function loader() {
  return null;
}

export default function PhotographsPage() {
  return (
    <main className="mx-auto px-4 py-32 flex flex-col gap-16 max-w-7xl">
      <PageHeadline
        title="PHOTOGRAPHY"
        description="A collection of photographs capturing moments, emotions, and perspectives from various angles."
      />
    </main>
  );
}

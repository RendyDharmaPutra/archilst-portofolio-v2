import { useLoaderData } from "@remix-run/react";
import { SectionHeader } from "../section-header";
import { PhotosContent } from "./photos-content";
import { PhotosFooter } from "./photos-footer";
import { HomeDataType } from "~/home/types/home-data-type";
import { ErrorBoundary } from "~/components/boundaries/error-boundary";
import { EmptyBoundary } from "~/components/boundaries/empty-boundary";
import { Image } from "lucide-react";

export const PhotosContainer = () => {
  const { photos } = useLoaderData<HomeDataType>();

  return (
    <section id="fotografi" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Judul Section */}
        <SectionHeader title="PHOTOGRAPH HIGHLIGHT" />

        {!photos.success ? (
          <ErrorBoundary description="An error occurred while accessing the projects data. Please try again in a moment." />
        ) : photos.data!.length < 1 ? (
          <EmptyBoundary
            title="EMPTY GALERIES"
            description="A photography collection is under construction. Come back soon to see the latest work!"
            icon={Image}
          />
        ) : (
          <>
            {/* Galeri Foto */}
            <PhotosContent />

            {/* Tombol Aksi */}
            <PhotosFooter />
          </>
        )}
      </div>
    </section>
  );
};

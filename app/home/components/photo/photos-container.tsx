import { SectionHeader } from "../section-header";
import { PhotosContent } from "./photos-content";
import { PhotosFooter } from "./photos-footer";

export const PhotosContainer = () => {
  return (
    <section id="fotografi" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Judul Section */}
        <SectionHeader title="PHOTOGRAPH HIGHLIGHT" />

        {/* Galeri Foto */}
        <PhotosContent />

        {/* Tombol Aksi */}
        <PhotosFooter />
      </div>
    </section>
  );
};

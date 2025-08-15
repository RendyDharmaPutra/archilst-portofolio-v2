import { useLoaderData } from "@remix-run/react";
import { PhotoCard } from "./photo-card";
import { HomeLoaderData } from "../../types/loader-data";

export const PhotosContent = () => {
  const { photos } = useLoaderData<HomeLoaderData>();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
      {/* Menampilkan semua data foto */}
      {photos.data!.map((photo, index) => (
        <PhotoCard key={index} idx={index} photo={photo} />
      ))}
    </div>
  );
};

import { useLoaderData } from "@remix-run/react";
import { PhotoCard } from "../../../../components/cards/photo-card";
import { HomeLoaderData } from "../../types/loader-data";

export const PhotosContent = () => {
  const { photosResponse } = useLoaderData<HomeLoaderData>();

  return (
    <div className="mb-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* Menampilkan semua data foto */}
      {photosResponse.data!.map((photo, index) => (
        <PhotoCard key={index} idx={index} photo={photo} />
      ))}
    </div>
  );
};

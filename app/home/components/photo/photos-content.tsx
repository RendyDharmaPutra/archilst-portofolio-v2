import { PhotoCard } from "./photo-card";

export const PhotosContent = () => {
  // Dummy data
  const photos: string[] = [
    "https://images.unsplash.com/photo-1519682337058-a94d519337bc", // landscape
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e", // portrait
    "https://images.unsplash.com/photo-1504198453319-5ce911bafcde", // nature
    "https://images.unsplash.com/photo-1503264116251-35a269479413", // mountain
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb", // forest
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330", // woman
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", // beach
    "https://images.unsplash.com/photo-1531177071270-15f3c0d2c5b5", // architecture
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
      {/* Menampilkan semua data foto */}
      {photos.map((photo, index) => (
        <PhotoCard key={index} idx={index} photo={photo} />
      ))}
    </div>
  );
};

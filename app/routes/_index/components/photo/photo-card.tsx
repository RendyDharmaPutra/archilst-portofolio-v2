import { Eye } from "lucide-react";

export const PhotoCard = ({ idx, photo }: { idx: number; photo: string }) => {
  return (
    <div
      className={`relative group cursor-pointer overflow-hidden rounded-lg border-2 border-accent/20 dark:border-accent/30 hover:border-accent dark:hover:border-accent transition-all duration-300`}
    >
      {/* Photo */}
      <img
        src={photo || "/placeholder.svg"}
        loading="lazy"
        alt={`Photography ${idx + 1}`}
        className="w-full h-48 object-cover transition-transform transform-gpu duration-300 group-hover:scale-110 will-change-transform"
      />

      {/* Eye Icon */}
      <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center will-change-opacity">
        <Eye className="h-8 w-8 text-white" />
      </div>
    </div>
  );
};

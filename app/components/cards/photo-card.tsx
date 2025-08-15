import { Eye } from "lucide-react";

export const PhotoCard = ({ idx, photo }: { idx: number; photo: string }) => {
  return (
    <div
      className={`relative group cursor-pointer rounded-lg border-2 border-primary-accent/20 dark:border-primary-accent-dark/30 hover:border-primary-accent dark:hover:border-primary-accent-dark overflow-hidden animate`}
    >
      {/* Photo */}
      <img
        src={photo || "/placeholder.svg"}
        loading="lazy"
        alt={`Photography ${idx + 1}`}
        className="w-full h-48 object-cover group-hover:scale-110 transform-gpu will-change-transform animate"
      />

      {/* Eye Icon */}
      <div className="absolute inset-0 flex items-center justify-center bg-primary-accent/20 dark:bg-primary-accent-dark/20 opacity-0 group-hover:opacity-100 will-change-opacity animate">
        <Eye className="h-8 w-8 text-white" />
      </div>
    </div>
  );
};

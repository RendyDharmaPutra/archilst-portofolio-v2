import { PhotoCard } from "./photo-card";

type PhotographsContentProps = {
  photographs: string[];
};

export const PhotographsContent = ({
  photographs,
}: PhotographsContentProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {photographs.map((photograph, idx) => (
        <PhotoCard key={idx} idx={idx} photo={photograph} />
      ))}
    </div>
  );
};

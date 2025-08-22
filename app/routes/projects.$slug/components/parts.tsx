import { EmptyBoundary } from "~/components/boundaries/empty-boundary";
import { ProjectDetailType } from "../types/project-detail-type";
import { PartCard } from "./part-card";
import { FileX } from "lucide-react";

type ProjectPartsProps = Pick<ProjectDetailType, "parts"> & {};

export const ProjectParts = ({ parts }: ProjectPartsProps) => {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="font-bold text-3xl text-primary-accent dark:text-primary-accent-dark animate">
        Project Parts
      </h2>

      {parts.length < 1 ? (
        <EmptyBoundary
          title="No Parts Available"
          description="This project currently has no documented parts."
          icon={FileX}
        />
      ) : (
        <div className="grid md:grid-cols-2 gap-6 ">
          {parts.map((part, idx) => (
            <PartCard key={idx} {...part} />
          ))}
        </div>
      )}
    </section>
  );
};

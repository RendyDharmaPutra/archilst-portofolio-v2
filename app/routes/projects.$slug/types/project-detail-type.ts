import { ProjectPartStacksType } from "~/types/models/project-part-stacks";
import { ProjectType } from "~/types/models/project-type";

export type ProjectDetailType = ProjectType & {
  parts: ProjectPartStacksType[];
};

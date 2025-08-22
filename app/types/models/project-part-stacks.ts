import { ProjectPartType } from "./project-part-type";
import { StackType } from "./stack-type";

export type ProjectPartStacksType = ProjectPartType & {
  stacks: {
    id: number;
    stack: StackType;
  }[];
};

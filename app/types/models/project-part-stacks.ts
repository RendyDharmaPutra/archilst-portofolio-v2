import { ProjectPartType } from "./project-part-type";
import { StackType } from "./stack-type";

export type ProjectPartStacks = ProjectPartType & {
  stacks: {
    id: number;
    stack: StackType;
  }[];
};

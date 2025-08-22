import { ServerResponseType } from "~/types/server-response-type";
import { ProjectDetailType } from "./project-detail-type";

export type ProjectDetailLoaderData = {
  projectResponse: ServerResponseType<ProjectDetailType, string>;
};

import { PostgrestError } from "@supabase/supabase-js";
import { ServerResponseType } from "~/types/server-response-type";
import { ProjectType } from "~/types/models/project-type";

export type HomeLoaderData = {
  projectsResponse: ServerResponseType<ProjectType[], PostgrestError>;
  photosResponse: ServerResponseType<string[], string>;
};

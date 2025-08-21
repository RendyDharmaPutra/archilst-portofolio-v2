import { PostgrestError } from "@supabase/supabase-js";
import { ProjectType } from "~/types/models/project-type";
import { ServerResponseType } from "~/types/server-response-type";

export type ProjectsLoaderData = {
  projectsResponse: ServerResponseType<ProjectType[], PostgrestError>;
};

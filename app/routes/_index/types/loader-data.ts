import { PostgrestError } from "@supabase/supabase-js";
import { ServerResponseType } from "~/types/server-response-type";
import { ProjectType } from "~/types/models/project-type";

export type HomeLoaderData = {
  projects: ServerResponseType<ProjectType[], PostgrestError>;
  photos: ServerResponseType<string[], string>;
};

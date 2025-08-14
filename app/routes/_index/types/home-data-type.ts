import { PostgrestError } from "@supabase/supabase-js";
import { GetDataType } from "~/types/get-data-type";
import { ProjectType } from "~/types/project-type";

export type HomeDataType = {
  projects: GetDataType<ProjectType[], PostgrestError>;
  photos: GetDataType<string[], string>;
};

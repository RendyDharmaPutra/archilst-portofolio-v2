import { supabase } from "~/lib/supabase";
import { ServerResponseType } from "~/types/server-response-type";
import { ProjectDetailType } from "../types/project-detail-type";

export const readProjectDetailService = async (
  slug: string
): Promise<ServerResponseType<ProjectDetailType, string>> => {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select(
        `
        id,
        slug,
        title,
        description,
        category,
        thumbnail_url,
        demo_url,
        repo_url,
        publish_date,
        parts:project_parts (
          id,
          title,
          description,
          repo_url,
          project_id,
          type,
          stacks:project_part_stacks (
            id,
            stack:stacks (
              id,
              name
            )
          )
        )
      `
      )
      .eq("slug", slug)
      .single<ProjectDetailType>();

    if (error)
      return {
        success: false,
        message: error.message,
        data: null,
      };

    return {
      success: true,
      message: "Berhasil mendapatkan data Projek",
      data,
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Terjadi kesalahan tidak diketahui",
      data: null,
    };
  }
};

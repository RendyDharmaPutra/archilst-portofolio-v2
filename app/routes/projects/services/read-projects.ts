import { PostgrestError } from "@supabase/supabase-js";
import { supabase } from "~/lib/supabase";
import { ProjectType } from "~/types/models/project-type";
import { ServerResponseType } from "~/types/server-response-type";

export const readProjectsService = async (): Promise<
  ServerResponseType<ProjectType[], PostgrestError>
> => {
  try {
    const { data, error } = await supabase.from("projects").select("*");

    if (error)
      return {
        success: false,
        message: error,
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

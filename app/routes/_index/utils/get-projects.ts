import { PostgrestError } from "@supabase/supabase-js";
import { GetDataType } from "~/types/get-data-type";
import { ProjectType } from "~/types/project-type";
import { supabase } from "~/lib/supabase";

export const getProjects = async (): Promise<
  GetDataType<ProjectType[], PostgrestError>
> => {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .limit(6);

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

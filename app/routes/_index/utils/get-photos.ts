import { GetDataType } from "~/types/get-data-type";
import { supabase } from "~/lib/supabase";

export const getPhotos = async (): Promise<GetDataType<string[], string>> => {
  try {
    const { data, error } = await supabase.storage
      .from("photographs")
      .list("", { limit: 100 });

    if (error) {
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }

    const photos = data.map((file) => {
      return supabase.storage.from("photographs").getPublicUrl(file.name).data
        .publicUrl;
    });

    return {
      success: true,
      message: "Berhasil mendapatkan data Fotografi",
      data: photos,
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

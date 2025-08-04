import type { Database } from "../types/database.types";
import supabase, { supabaseUrl } from "./supabase";

type Villa = Database["public"]["Tables"]["villa"]["Row"];

export async function getVillas(): Promise<Villa[]> {
  const { data, error } = await supabase.from("villa").select("*");

  if (error) {
    console.log(error);
    throw new Error("data not loaded");
  }
  return data ?? [];
}

export async function deleteVilla(id: number): Promise<Villa[]> {
  const { data, error } = await supabase.from("villa").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("data not loaded");
  }

  return data ?? [];
}

export async function insertVilla(newVilla): Promise<Villa[]> {
  const imageName = `${Math.random()}-${newVilla.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/villa-images/${imageName}`;
  //https://ttpaxypnlgpojmtnkzir.supabase.co/storage/v1/object/public/villa-images/cabin-001.jpg
  const { data, error } = await supabase
    .from("villa")
    .insert([{ ...newVilla, image: imagePath }]);

  if (error) {
    console.log(error);
    throw new Error("data not loaded");
  }

  //upload image
  const { error: storageError } = await supabase.storage
    .from("villa-images")
    .upload(imageName, newVilla.image);

  if (storageError) {
    console.error("خطا در آپلود تصویر:", storageError.message);
    throw new Error("آپلود تصویر ناموفق بود");
  }

  return data ?? [];
}

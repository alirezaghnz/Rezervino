import supabase, { supabaseUrl } from "./supabase";

export async function getVillas(): Promise<any[]> {
  const { data, error } = await supabase.from("villa").select("*");

  if (error) {
    console.log(error);
    throw new Error("data not loaded");
  }
  return data ?? [];
}

export async function deleteVilla(id: number): Promise<any[]> {
  const { data, error } = await supabase.from("villa").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("data not deleted");
  }

  return data ?? [];
}

//insert and update
export async function insertVilla(newVilla: any, id: any): Promise<any[]> {
  if (!newVilla) throw new Error("newVilla is undefined");

  const hasImage = newVilla.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newVilla.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImage
    ? newVilla.image
    : `${supabaseUrl}/storage/v1/object/public/villa-images/${imageName}`;
  //https://ttpaxypnlgpojmtnkzir.supabase.co/storage/v1/object/public/villa-images/cabin-001.jpg

  //create and edit villa
  let data, error;
  if (!id) {
    // Insert: do not call .select() after .insert()
    const insertResult = await supabase
      .from("villa")
      .insert([{ ...newVilla, image: imagePath }]);
    data = insertResult.data;
    error = insertResult.error;
  } else {
    // Edit: use .update().select().single()
    const updateResult = await supabase
      .from("villa")
      .update({ ...newVilla, image: imagePath })
      .eq("id", id)
      .select()
      .single();
    data = updateResult.data;
    error = updateResult.error;
  }

  if (error) {
    console.log(error);
    throw new Error("data not loaded");
  }

  //upload image
  if (hasImage) return data;
  const { error: storageError } = await supabase.storage
    .from("villa-images")
    .upload(imageName, newVilla.image);

  if (storageError) {
    console.error("خطا در آپلود تصویر:", storageError.message);
    throw new Error("آپلود تصویر ناموفق بود");
  }

  return data ?? [];
}

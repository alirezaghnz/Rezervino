import supabase from "./supabase";

export async function getVillas() {
  const { data, error } = await supabase.from("villa").select("*");
  if (error) {
    console.log(error);
    throw new Error("data not loaded");
  }
  return data;
}

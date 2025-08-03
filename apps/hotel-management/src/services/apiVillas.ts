import type { Database } from "../types/database.types";
import supabase from "./supabase";

type Villa = Database["public"]["Tables"]["villa"]["Row"];

export async function getVillas(): Promise<Villa[]> {
  const { data, error } = await supabase.from("villa").select("*");

  if (error) {
    console.log(error);
    throw new Error("data not loaded");
  }
  return data ?? [];
}

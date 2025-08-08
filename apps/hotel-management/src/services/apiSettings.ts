import type { Database } from "../types/database.types";
import supabase from "./supabase";

type settings = Database["public"]["Tables"]["settings"]["Row"];
export async function getSettings(): Promise<settings[]> {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    console.error(error);
    throw new Error("دیتا تنظیمات لود نمی شود.");
  }
  return data ?? [];
}

// We expect a newSetting object that looks like {setting: newValue}
export async function updateSetting(newSetting) {
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)
    // there is only one row of settings, and it has the id = 1, and so this is the updated one
    .eq("id", 1)
    .single();

  if (error) {
    console.error(error);
    throw new Error("تنظیمات ویرایش نشد");
  }
  return data;
}

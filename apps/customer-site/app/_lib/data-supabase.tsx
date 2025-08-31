import { notFound } from "next/navigation";
import { supabase } from "./supabase";

export async function getVilla(id: any) {
  const { data, error } = await supabase
    .from("villa")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

export async function getVillas() {
  const { data, error } = await supabase
    .from("villa")
    .select("id, name, maxCapacity, regularPrice, discount, image")
    .order("name");

  if (error) {
    console.error(error);
    throw new Error("داده مورد نیاز ویلاها پیدا نشد.");
  }

  return data;
}

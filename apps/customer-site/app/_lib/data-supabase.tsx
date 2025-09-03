import { notFound } from "next/navigation";
import { supabase } from "./supabase";
import { eachDayOfInterval } from "date-fns";

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

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();
  if (error) {
    console.error(error);
    throw new Error("تنظیمات مورد نظر پیدا نشد");
  }
  return data;
}

export async function getRezervedByVillaId(villaId: any) {
  let today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("villaId", villaId)
    .gte("startDate", today.toISOString());
  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  const RezervDate = data
    .map((rezerv: any) => {
      const start = new Date(rezerv.startDate);
      const end = new Date(rezerv.endDate);

      return eachDayOfInterval({ start, end });
    })
    .flat();

  return RezervDate;
}

export async function getGuest(email: any) {
  const { data } = await supabase
    .from("guests")
    .select("*")
    .eq("email", email)
    .single();

  return data;
}

export async function createGuest(newUser: any) {
  const { data, error } = await supabase.from("guests").insert([newUser]);

  if (error) {
    console.error(error);
    throw new Error("اکانت کاربر ساخته نشد");
  }

  return data;
}

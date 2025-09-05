"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}
export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
export async function updateProf(formData: any) {
  // console.log(formData);
  const session = await auth();
  if (!session) throw new Error("لطفا به حساب کاربری ورود کنید");
  const nationalID = formData.get("nationalID");
  const nationality = formData.get("nationality");
  //regex for Code Melli, only 10 cahrc for CodeMelli iran
  if (!/^[A-Za-z0-9]{10}$/.test(nationalID)) {
    throw new Error("لطفا کد ملی را به درستی وارد کنید");
  }
  const udpateData = { nationalID, nationality };
  //console.log(udpateData);
  //update guest in supabase server
  const { error } = await supabase
    .from("guests")
    .update(udpateData)
    .eq("id", session.user.guestId);

  if (error) {
    throw new Error("اطلاعات کاربر با موفقیت اپدیت نشد");
  }
  revalidatePath("/account/profile");
}

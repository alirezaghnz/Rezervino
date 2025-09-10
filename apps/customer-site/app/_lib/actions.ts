"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getRezerved } from "./data-supabase";
import { redirect } from "next/navigation";

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
    .eq("id", (session.user as { guestId?: string })?.guestId);

  if (error) {
    throw new Error("اطلاعات کاربر با موفقیت اپدیت نشد");
  }
  revalidatePath("/account/profile");
}

export async function delelteRezerv(rezervId: any) {
  const session = await auth();
  if (!session) throw new Error("لطفا به حساب کاربری ورود کنید");

  // need to be fixed
  const guestRezerv = await getRezerved(
    (session.user as { guestId?: string })?.guestId
  );
  const guestRezervId = guestRezerv.map((r) => r.id);

  if (!guestRezervId.includes(rezervId))
    throw new Error("You not allowed to remove rezerved :)");

  const { error } = await supabase.from("bookings").delete().eq("id", rezervId);
  if (error) throw new Error("رزرو با موفقیت حذف نشد");

  revalidatePath("/account/rezerv");
}

export async function editRezerv(formData: FormData) {
  const session = await auth();
  if (!session) throw new Error("لطفا به حساب کاربری ورود کنید");

  const numGuests = Number(formData.get("numGuests"));
  const observation = formData.get("observation");

  const editRezerv = { numGuests, observation };

  const rezervId = Number(formData.get("rezervId"));

  const { error } = await supabase
    .from("bookings")
    .update(editRezerv)
    .eq("id", rezervId)
    .select()
    .single();

  if (error) throw new Error("ویرایش انجام نشد");

  redirect("/account/rezerv");
}

export async function createRezerv(rezervData: any, formData: FormData | any) {
  const session = await auth();
  if (!session) throw new Error("لطفا به حساب کاربری ورود کنید");

  const newRezervs = {
    ...rezervData,
    guestId: (session.user as { guestId?: string })?.guestId,
    numGuests: Number(formData.get("numGuests")),
    observation: formData.get("observation").slice(0, 500),
    totalPrice: rezervData.villaPrice,
    extraPrice: 0,
    isPaid: false,
    hasBreakfast: false,
    status: "در انتظار تایید",
  };
  //console.log(newRezervs);

  // insert new rezerv to supabase
  const { error } = await supabase.from("bookings").insert([newRezervs]);

  if (error) {
    console.error(error);
    throw new Error("رزرو با موفقیت انجام نشد");
  }

  // for update rezerv date in villa page imidiately
  revalidatePath("/account/" + rezervData.villaId);
  //after rezerv succesfuly we redirect user to another page
  redirect("/villas/thankyourezerved");
}

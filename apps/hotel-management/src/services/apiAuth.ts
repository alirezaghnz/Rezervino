import supabase from "./supabase";

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  if (!email || !password) throw new Error("ایمیل و پسورد وارد کنید");
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.error(error);
    throw new Error(error.message || "problem with get auth user");
  }

  console.log(data);
  return data;
}

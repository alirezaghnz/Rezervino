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

// Current user in session
export async function getUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error(error);
    throw new Error(error.message || "problem with get auth user");
  }

  console.log(data);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error(error);
    throw new Error(error.message || "problem with sign out user(logout)");
  }
}

export async function signup({
  email,
  password,
  fullName,
  pic,
}: {
  email: string;
  password: string;
  fullName: string;
  pic: string;
}) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        pic,
      },
    },
  });

  if (error) {
    console.error(error);
    throw new Error(error.message || "user not created");
  }

  return data;
}

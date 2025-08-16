import supabase from "./supabase";
type AuthArgs = {
  email: string;
  password: string;
  fullName?: string;
  pic?: File | null;
};

export async function login({ email, password }: AuthArgs) {
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

export async function signup({ email, password, fullName }: AuthArgs) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        pic: "",
      },
    },
  });

  if (error) {
    console.error(error);
    throw new Error(error.message || "user not created");
  }

  return data;
}

export async function updateUser({ password, fullName, pic }: AuthArgs) {
  // we need update password or fullName , we cant update both at the same time(bcuse we have two forms). so we nneed conditional
  let updateData: any = null;
  if (password && fullName) {
    throw new Error("همزمان نمی توان تغییر ایجاد کرد");
  }
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateData ?? {});
  if (error) throw new Error(error.message);

  if (!pic) return data;

  //upload pic
  const fileName = `pic-${data.user.id}-${Date.now()}`;
  const { error: errorStorage } = await supabase.storage
    .from("pics")
    //add upsert for re-upload dont failed
    .update(fileName, pic, { upsert: true });

  if (errorStorage) throw new Error(errorStorage.message);

  //update pic
  const { data: updatePic, error: errorPic } = await supabase.auth.updateUser({
    data: {
      pic: `https://ttpaxypnlgpojmtnkzir.supabase.co/storage/v1/object/public/pics/${fileName}`,
    },
  });
  if (errorPic) throw new Error(errorPic.message);

  return updatePic;
}

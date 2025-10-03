import SelectCity from "@/app/_components/SelectCity";
import UpdateForm from "@/app/_components/UpdateForm";
import { auth } from "@/app/_lib/auth";
import { getGuest } from "@/app/_lib/data-supabase";

export const metadata = {
  title: "ویرایش پروفایل",
};
export default async function Page() {
  const session = await auth();
  const dataUser = await getGuest(session?.user?.email);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-neutral-500 mb-3">
        ویرایش حساب کاربری
      </h2>
      <UpdateForm dataUser={dataUser}>
        <SelectCity
          id="nationality"
          defaultCity={dataUser.nationality}
          name="nationality"
          className="px-1 py-1 lg:px-4 lg:py-1 rounded-lg text-neutral-800 w-full bg-neutral-200"
        />
      </UpdateForm>
    </div>
  );
}

import { auth } from "../_lib/auth";

export const metadata = {
  title: "اکانت مهمان",
};
export default async function Page() {
  const getUser = await auth();
  //console.log(getUser);

  return (
    <div className="flex gap-2  text-xl text-primary-900  border-b border-primary-400">
      <span>اکانت کاربری</span>
      <h1 className="text-accent-600">{getUser?.user.name}</h1>
    </div>
  );
}

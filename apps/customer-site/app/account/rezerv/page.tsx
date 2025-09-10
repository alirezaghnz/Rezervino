import RezervCard from "@/app/_components/RezervCard";
import { auth } from "@/app/_lib/auth";
import { getRezerved } from "@/app/_lib/data-supabase";
import Link from "next/link";

type User = {
  guestId: string;
};
export default async function Page() {
  const session = await auth();
  //for type guestId
  const guestId = (session?.user as User)?.guestId;
  const rezervs = await getRezerved(guestId);
  return (
    <>
      <div>
        <h2 className="font-semibold text-2xl text-accent-900 mb-7">
          رزرو های شما
        </h2>

        {rezervs.length === 0 ? (
          <p className="text-lg text-neutral-900">
            شما ویلایی رزرو نکرده اید، لطفا یک{" "}
            <Link className="underline text-accent-500" href="/villas">
              ویلا اضافه کنید
            </Link>
          </p>
        ) : (
          <ul className="space-y-6">
            {rezervs.map((rezerv) => (
              <RezervCard rezerv={rezerv} key={rezerv.id} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

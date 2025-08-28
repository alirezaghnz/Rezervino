import RezervCard from "@/app/_components/RezervCard";
import Link from "next/link";

export default function Page() {
  const rezervs = [];
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
              <RezervCard booking={rezerv} key={rezerv.id} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

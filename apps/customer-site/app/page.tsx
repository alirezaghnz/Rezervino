import Image from "next/image";
import bg from "@/public/Maz2.jpg";
import Link from "next/link";

export default function Page() {
  return (
    <main className="mt-24">
      <Image src={bg} fill alt="رزرو بهترین ویلاهای شمال کشور در خزرشهر" />
      <div className="relative z-10 text-center">
        <h1 className="text-6xl text-primary-200 mb-10 font-normal tracking-tight">
          به رزروینو خوش آمدید
        </h1>
        <Link
          href="/villas"
          className="bg-[#00B4D8] px-10 py-3 text-primary-100 text-lg font-semibold rounded-sm"
        >
          رزرو ویلا در شمال ایران
        </Link>
      </div>
    </main>
  );
}

import Image from "next/image";
import bg from "@/public/Maz2.jpg";
import Link from "next/link";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        className="object-cover"
        placeholder="blur"
        src={bg}
        quality={80}
        fill
        alt="رزرو بهترین ویلاهای شمال کشور در خزرشهر"
      />
      <div className="relative z-10 text-center">
        <h1 className="text-6xl text-primary-200 mb-10 font-normal tracking-tight">
          به رزروینو خوش آمدید
        </h1>
        <Link
          href="/villas"
          className="inline-block rounded-sm px-10 py-3
                 bg-[#00B4D8] text-primary-100 text-lg font-semibold
                 transition-transform duration-300 ease-in-out
                 hover:scale-105 hover:shadow-lg"
        >
          رزرو ویلا در شمال ایران
        </Link>
      </div>
    </main>
  );
}

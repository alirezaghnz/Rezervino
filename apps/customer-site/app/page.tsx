import Image from "next/image";
import bg from "@/public/Maz2.jpg";
import Link from "next/link";
import HomeList from "./_components/HomeList";

export default async function Page() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <Image
          src={bg}
          fill
          priority
          className="object-cover"
          alt="رزرو ویلا"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 max-w-4xl text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            رزرو بهترین ویلاهای شمال ایران
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200">
            از ویلاهای ساحلی تا کلبه‌های جنگلی، اقامتگاه مناسب خود را پیدا کنید.
          </p>

          <Link
            href="/villas"
            className="inline-block mt-8 px-8 py-4 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-600 transition"
          >
            مشاهده ویلاها
          </Link>
        </div>
      </section>
      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="font-bold text-xl">رزرو آنلاین</h3>
            <p className="mt-2 text-gray-600">رزرو سریع و بدون تماس تلفنی</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="font-bold text-xl">قیمت شفاف</h3>
            <p className="mt-2 text-gray-600">بدون هزینه پنهان</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="font-bold text-xl">پشتیبانی</h3>
            <p className="mt-2 text-gray-600">پاسخگویی در تمام روزهای هفته</p>
          </div>
        </div>
      </section>
      <HomeList />
      <section className="bg-slate-100 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold">+500</h3>
            <p>اقامتگاه</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">+10K</h3>
            <p>رزرو موفق</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">+50</h3>
            <p>شهر تحت پوشش</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">4.9★</h3>
            <p>رضایت کاربران</p>
          </div>
        </div>
      </section>
    </>
  );
}

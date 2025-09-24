import Image from "next/image";

export const metadata = {
  title: "درباره ما",
};

export default function Page() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 text-right">
        <h1 className="text-4xl font-bold mb-6 text-cyan-800">
          درباره رزروینو
        </h1>
        <p className="text-lg leading-8 text-gray-600 mb-4">
          رزروینو یک پلتفرم آنلاین برای رزرو ویلا و اقامتگاه در شمال کشور ایران
          است که با هدف ساده‌تر کردن تجربه سفر شما ساخته شده. تیم ما تلاش می‌کند
          بهترین امکانات و گزینه‌ها را برای سفرهای راحت و به‌یادماندنی در اختیار
          شما قرار دهد.
        </p>
        <p className="text-lg leading-8 text-gray-600 mb-6">
          با رزروینو می‌توانید با خیال راحت ویلا، سوییت یا اقامتگاه مورد نظر خود
          را به صورت آنلاین پیدا کنید و رزرو کنید.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            تماس با ما
          </a>
          <span className="text-sm text-gray-500">پشتیبانی ۲۴ ساعته</span>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <Image
          src="/about.jpg"
          alt="درباره رزروینو"
          width={500}
          height={400}
          className="object-contain rounded-lg"
        />
      </div>
    </section>
  );
}

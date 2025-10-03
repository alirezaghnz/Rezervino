import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const metadata = {
  title: "ثبت رزرو",
};

export default function SuccessPage() {
  return (
    <div className="flex items-center justify-center w-full min-h-[70vh] text-center ">
      <div className="w-[auto] h-auto lg:w-[800px] lg:h-[500px] flex flex-col bg-slate-300 rounded-md items-center justify-center">
        <CheckCircleIcon className="h-20 w-20  text-green-500 mb-6" />
        <h1 className="text-2xl font-bold text-gray-800 mb-3">
          رزرو با موفقیت ثبت شد
        </h1>
        <p className="text-gray-500 mb-6">
          می توانید وضعیت رزرو را در بخش رزرو های من پیگیری کنید
        </p>
        <Link
          href="/account/rezerv"
          className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg shadow-md transition"
        >
          مشاهده رزرو های من
        </Link>
      </div>
    </div>
  );
}

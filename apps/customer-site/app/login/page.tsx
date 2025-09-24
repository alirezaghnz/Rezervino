import Image from "next/image";
import SignInButton from "../_components/signInButton";

export const metadata = {
  title: "صفحه ورود",
};

export default function Page() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full items-center">
        {/* Login Card */}
        <div className="bg-white  rounded-2xl shadow-lg p-10 px-1 lg:p-10 flex flex-col h-[400px] lg:h-[500px] items-center text-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-300 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-cyan-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2l4-4"
              />
            </svg>
          </div>
          <h2 className="text-xl lg:text-2xl font-bold mb-10 text-cyan-400">
            خوش آمدید به رزروینو!
          </h2>
          <p className="text-gray-500 mt-6 mb-3 ">
            ورود سریع و امن با حساب گوگل
          </p>

          <SignInButton />
        </div>

        {/* Illustration */}
        <div className="hidden md:flex justify-center">
          <Image
            src="/login.png"
            alt="Login pic"
            width={500}
            height={500}
            className="h-auto w-auto max-w-xs md:max-w-sm lg:max-w-md"
            priority
          />
        </div>
      </div>
    </main>
  );
}

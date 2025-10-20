import Link from "next/link";

export default function LoginM() {
  return (
    <div className="grid bg-primary-700 py-10">
      <p className="text-center text-md lg:text-xl self-center">
        برای اطلاعات رزرو با گوگل اکانت خود وارد شوید
      </p>
      <Link href="/login" className="text-xl text-center pt-10 text-accent-900">
        <span className="px-6  rounded-sm bg-accent-400 py-1">
          {" "}
          ورود به حساب کاربری
        </span>
      </Link>
    </div>
  );
}

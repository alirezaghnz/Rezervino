import Link from "next/link";

export default function LoginM() {
  return (
    <div className="grid bg-primary-800">
      <p className="text-center text-xl self-center">
        برای اطلاعات رزرو با گوگل اکانت خود وارد شوید
      </p>
      <Link href="/login" className=" text-xl text-center text-accent-900">
        <span className="px-5 rounded-sm bg-accent-400 py-1">
          {" "}
          ورود به حساب کاربری
        </span>
      </Link>
    </div>
  );
}

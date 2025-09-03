import Link from "next/link";

export default function LoginM() {
  return (
    <div className="grid bg-primary-800">
      <p className="text-center text-xl py-5 self-center">
        لطفا با گوگل اکانت خود وارد شوید
      </p>
      <Link
        href="/login"
        className="underline text-xl text-center text-accent-900"
      >
        ورود
      </Link>
    </div>
  );
}

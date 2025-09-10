import Link from "next/link";

export default function TankYouForRezerved() {
  return (
    <div className="flex flex-col text-primary-600 items-center justify-center gap-5">
      <p>با موفقیت رزرو ثبت شد.</p>
      <Link href="/account/rezerv">برای دیدن اطلاعات بیشتر رزرو کلیک کنید</Link>
    </div>
  );
}

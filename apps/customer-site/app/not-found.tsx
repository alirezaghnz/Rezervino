import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold text-primary-700">
        صفحه درخواستی پیدا نشد. به صفحه اصلی برگردید
      </h1>
      <Link
        href="/"
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg rounded-sm"
      >
        رزروینگ
      </Link>
    </main>
  );
}

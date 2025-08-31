import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold text-primary-700">
        ویلا مورد نظر پیدا نشد. برای بازگشت به لیست ویلا دکمه زیر را کلیک
        نمایید.
      </h1>
      <Link
        href="/villas"
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg rounded-sm"
      >
        رزروینگ
      </Link>
    </main>
  );
}

"use client";
//for error bounderis
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="flex justify-center items-center flex-col gap-6 text-primary-800">
      <h1 className="text-3xl font-semibold">
        خطایی رخ داده است. لطفا بررسی کنید
      </h1>
      <p className="text-lg text-red-600">{error.message}</p>
      <button
        className="inline-block bg-accent-600 rounded-sm text-primary-800 px-6 py-3 text-lg"
        onClick={reset}
      >
        دوباره تلاش کنید
      </button>
    </main>
  );
}

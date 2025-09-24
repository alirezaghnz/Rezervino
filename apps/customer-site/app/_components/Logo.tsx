import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <span className="text-xl font-semibold text-primary-100 hidden lg:block">
        رزروینو
      </span>
    </Link>
  );
}

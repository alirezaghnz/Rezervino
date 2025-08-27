import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/villas"
            className="hover:text-accent-400 transition-colors"
          >
            لیست ویلا
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors"
          >
            اکانت
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            درباره ما
          </Link>
        </li>
      </ul>
    </nav>
  );
}

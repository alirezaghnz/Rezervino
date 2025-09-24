import Link from "next/link";
import { auth } from "../_lib/auth";
import Image from "next/image";
import { UserIcon } from "@heroicons/react/24/solid";

export default async function Navigation() {
  const dataUser = await auth();

  //console.log(dataUser);

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

        <li className="hidden lg:block">
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            درباره ما
          </Link>
        </li>
        <li>
          {dataUser?.user?.image ? (
            <Link
              href="/account"
              className="flex items-center gap-2 hover:text-accent-400 transition-colors"
            >
              <span className="text-sm">{dataUser.user.name}</span>
              <div className="relative w-6 h-6">
                <Image
                  className="rounded-full"
                  fill
                  src={dataUser.user.image}
                  alt={"عکس کاربر"}
                />
              </div>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              <UserIcon className="w-6 h-6 border rounded-full" />
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

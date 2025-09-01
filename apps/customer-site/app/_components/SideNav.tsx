"use client";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/20/solid";

export default function SideNav() {
  //use pathName hook for Active element
  const pathname = usePathname();

  const nLink = [
    { name: "حساب", href: "/account", icon: <HomeIcon className="h-6 w-6" /> },
    {
      name: "رزرو",
      href: "/account/rezerv",
      icon: <CalendarDaysIcon className="h-6 w-6" />,
    },
    {
      name: "پروفایل",
      href: "/account/profile",
      icon: <UserIcon className="h-6 w-6" />,
    },
  ];
  return (
    <nav className="border-l border-primary-950 bg-primary-700">
      <ul className="flex flex-col gap-2 h-full text-lg">
        {nLink.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li
              key={link.name}
              className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 
             ${isActive ? "bg-primary-900" : " "}`}
            >
              <Link href={link.href}>
                {link.icon} <span>{link.name}</span>
              </Link>
            </li>
          );
        })}

        <li className="mt-auto">
          <button className="py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full">
            <ArrowRightOnRectangleIcon className="h-5 w-5 text-primary-600" />
            <span> خروج حساب کاربری</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

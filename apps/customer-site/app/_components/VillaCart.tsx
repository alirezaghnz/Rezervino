import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function VillaCart({ villa }: any) {
  const { id, name, regularPrice, discount, image, maxCapacity } = villa;
  return (
    <div className="flex border-primary-800 border rounded-lg">
      <div className="flex-1 relative ">
        <Image
          src={image}
          fill
          alt={`ویلا ${name}`}
          className="object-cover border-r border-primary-800 rounded-s-lg"
        />
      </div>

      <div className="flex-grow">
        <div className="pt-5 pb-4 px-7 bg-primary-950">
          <h3 className="text-accent-500 font-semibold text-2xl mb-3">
            ویلا {name}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <p className="text-lg text-primary-200">
              برای <span className="font-bold">{maxCapacity}</span> مهمان
            </p>
          </div>

          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-xl font-[350]">
                  {regularPrice - discount} تومان
                </span>
                <span className="line-through font-semibold text-primary-600">
                  {regularPrice} تومان
                </span>
              </>
            ) : (
              <span className="text-1xl font-[350]">{regularPrice} تومان</span>
            )}
            <span className="text-primary-200">/ برای هر شب</span>
          </p>
        </div>

        <div className="bg-primary-950 border-t border-t-primary-800 text-right ">
          <Link
            href={`/villas/${id}`}
            className="border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900"
          >
            جزئیات و رزرو
          </Link>
        </div>
      </div>
    </div>
  );
}

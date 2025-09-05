import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";

import Link from "next/link";
import { TrashIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

export const formatDistanceFromNow = (dateStr: any) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

export default function RezervCard({ rezerv }: any) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    villa: { name, image } = {},
  } = rezerv;

  return (
    <div className="flex  bg-primary-700 rounded-xl">
      <div className="relative h-32 aspect-square">
        <Image
          src={image}
          fill
          alt={`villa ${name ?? "نامشخص"}`}
          className="object-cover"
        />
      </div>

      <div className="flex-grow px-6 py-3 flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold rounded-md  bg-accent-300 px-2">
            {numNights} شب ویلای {name ?? "نامشخص"}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="bg-yellow-800 text-yellow-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              تمام شد
            </span>
          ) : (
            <span className="bg-green-800 text-green-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              رزرو شده
            </span>
          )}
        </div>

        <p className="text-lg text-primary-300">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="flex gap-5 mt-auto items-baseline">
          <p className="text-xl font-semibold text-accent-400">
            {totalPrice} تومان
          </p>
          <p className="text-primary-300">&bull;</p>
          <p className="text-lg text-primary-300">تعداد: {numGuests} مهمان</p>
          <p className="ml-auto text-sm text-primary-400">
            رزرو در تاریخ {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      <div className="flex flex-col w-[100px]">
        <Link
          href={`/account/rezerv/edit/${id}`}
          className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 border-b border-primary-800 flex-grow px-3 hover:bg-primary-900 transition-colors hover:text-primary-100 hover:rounded-xl"
        >
          <PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
          <span className="mt-1">ویرایش</span>
        </Link>

        <button className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-primary-900 transition-colors hover:text-primary-100 hover:rounded-xl">
          <TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
          <span className="mt-1">حذف</span>
        </button>
      </div>
    </div>
  );
}

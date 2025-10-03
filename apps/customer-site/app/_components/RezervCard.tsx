import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";

import Link from "next/link";
import Image from "next/image";
import DeleteRezerv from "./DeleteRezerv";

export const formatDistanceFromNow = (dateStr: any) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

export default function RezervCard({ rezerv }: any) {
  const {
    id,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    created_at,
    villa: { name, image } = {},
  } = rezerv;

  return (
    <div className="flex flex-col lg:flex-row bg-primary-700 rounded-xl overflow-hidden ">
      {/* Image: top on mobile (full width), left on desktop */}
      <div className="relative w-full h-44 lg:h-32 lg:w-32 flex-shrink-0">
        <Image
          src={image}
          fill
          alt={`villa ${name ?? "نامشخص"}`}
          className="object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-grow px-4 py-4 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-md lg:text-xl font-semibold bg-primary-900 px-2 rounded">
            {numNights} شب در ویلای {name ?? "نامشخص"}
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

        <p className="text-sm lg:text-base text-primary-300">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="flex flex-wrap items-center gap-3 mt-auto">
          <p className="text-lg lg:text-xl font-semibold text-accent-400">
            {totalPrice} تومان
          </p>
          <span className="text-primary-300">&bull;</span>
          <p className="text-sm lg:text-lg text-primary-300">
            تعداد: {numGuests} مهمان
          </p>
          <p className="ml-auto text-xs lg:text-sm text-primary-400">
            رزرو در تاریخ {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      <div className="mt-3 lg:mt-2 lg:w-[200px] flex lg:flex-col items-stretch gap-2 px-4 py-3 border-t lg:border-t-0 lg:border-l border-primary-800 bg-primary-700">
        <Link
          href={`/account/rezerv/edit/${id}`}
          className="flex-1 lg:flex-none flex items-center justify-center gap-2 uppercase text-xs font-bold text-primary-300 bg-transparent hover:bg-primary-900 px-3 py-2 rounded transition-colors"
        >
          <PencilSquareIcon className="h-5 w-5 text-primary-600" />
          <span className="mt-1">ویرایش</span>
        </Link>

        <div className="flex-1 lg:flex-none">
          <DeleteRezerv rezervId={id} />
        </div>
      </div>
    </div>
  );
}

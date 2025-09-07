"use client";
import { differenceInDays } from "date-fns";
import { useRezervation } from "../_context/RezervationContext";
import { createRezerv } from "../_lib/actions";

export default function RezervForm({ villa, dataUser }: any) {
  const { range, resetRange } = useRezervation();
  const { maxCapacity, regularPrice, discount, id } = villa;
  const startDate = range.from;
  const endDate = range.to;
  const numNights = differenceInDays(endDate, startDate);
  const villaPrice = numNights * (regularPrice - discount);
  const rezervData = {
    villaId: id,
    startDate,
    endDate,
    numNights,
    villaPrice,
  };

  const crreateRezervWithData = createRezerv.bind(null, rezervData);
  return (
    <div className="scale-[1.01]">
      <div className="bg-primary-800 text-primary-300 px-16 py-2 flex items-center gap-3">
        <p>کاربر </p>

        <div className="flex gap-4 items-center">
          <p>{dataUser.name}</p>
        </div>
      </div>

      <form
        action={(formData) =>
          crreateRezervWithData(formData).then(resetRange())
        }
        className="bg-primary-900 py-10 px-16 text-lg flex gap-5 flex-col"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests"> مهمانان</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              تعداد مهمانان را انتخاب کنید
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "مهمان" : "مهمانان"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observation">
            توضیحات راجع به تحویل ویلا و رزرو و روز مسافرت.
          </label>
          <textarea
            name="observation"
            id="observation"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="همراه داشتن حیوانات خانگی، درخواست از میزبان و ..."
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <p className="text-primary-300 text-base">برای شروع مسافرت</p>

          <button className="bg-accent-500 px-8 py-2 rounded-md text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
            رزرو کنید
          </button>
        </div>
      </form>
    </div>
  );
}

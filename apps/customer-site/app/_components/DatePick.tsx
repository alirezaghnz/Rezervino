"use client";
import { isWithinInterval } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useRezervation } from "../_context/RezervationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DatePicker({ settings }: any) {
  const { range, setRange, resetRange } = useRezervation();
  const regularPrice = 23;
  const discount = 23;
  const numNights = 23;
  const villaPrice = 23;

  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className="flex flex-col justify-between bg-primary-600 ">
      <DayPicker
        className={`pt-6 place-self-center bg-white rounded-lg text-primary-900 mt-7 `}
        mode="range"
        animate
        navLayout="around"
        onSelect={(newRange) => {
          setRange(newRange || { from: undefined, to: undefined });
        }}
        selected={range}
        minDuration={minBookingLength + 1}
        maxDuration={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={2}
      />
      <div className="flex items-center justify-between px-8 bg-accent-600 text-primary-900 h-[72px] rounded-lg">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-1xl">تومان{regularPrice - discount}</span>
                <span className="line-through font-semibold text-primary-700">
                  تومان{regularPrice}
                </span>
              </>
            ) : (
              <span className="text-1xl">{regularPrice}</span>
            )}
            <span className="">/شب</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-1xl">
                <span>&times;</span> <span>{numNights}مهمانان</span>
              </p>
              <p>
                <span className="text-xs font-bold uppercase">کل قیمت:</span>{" "}
                <span className="text-1xl font-semibold">
                  تومان{villaPrice}
                </span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={() => resetRange()}
          >
            حذف
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DatePicker;

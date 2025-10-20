"use client";
import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useRezervation } from "../_context/RezervationContext";
import { useEffect, useState } from "react";

function isAlreadyRezerv(range: any, datesArr: Date[]) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DatePicker({ settings, villa, rezervedDates }: any) {
  const { range, setRange, resetRange } = useRezervation();

  // for repsonsive number of month: mobil = 1 , desk = 2
  const [numberOfMonth, setNumberOfMonth] = useState<number>(1);
  useEffect(() => {
    const update = () => setNumberOfMonth(window.innerWidth >= 1024 ? 2 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  });

  const displayRange = isAlreadyRezerv(range, rezervedDates)
    ? undefined
    : range;
  const { regularPrice, discount } = villa;

  const numNights = differenceInDays(displayRange.to, displayRange.from);

  const villaPriceCalculated = numNights * (regularPrice - discount);
  const { minBookingLength, maxBookingLength } = settings;
  return (
    <div className="flex flex-col justify-between backdrop-blur-md bg-primary-900/30 ">
      <DayPicker
        className={`pt-6 place-self-center bg-white rounded-sm shadow-sm text-primary-900 mt-7 `}
        mode="range"
        animate
        navLayout="around"
        onSelect={(newRange) => {
          setRange(newRange || { from: undefined, to: undefined });
        }}
        selected={displayRange}
        // @ts-ignore
        minDuration={minBookingLength + 1}
        maxDuration={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={numberOfMonth}
        disabled={(curentDate) =>
          isPast(curentDate) ||
          rezervedDates.some((date: any) => isSameDay(date, curentDate))
        }
      />
      <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between px-4 sm:px-8 bg-accent-600 text-primary-900 gap-3 py-4 mt-1">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="text-sm sm:text-base">
            {discount > 0 ? (
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <span className="text-base sm:text-lg">
                  قیمت هر شب: {regularPrice - discount} تومان
                </span>
                <span className="line-through font-semibold text-primary-700">
                  {regularPrice} تومان
                </span>
              </div>
            ) : (
              <span className="text-base sm:text-lg">{regularPrice} تومان</span>
            )}
          </div>

          {numNights ? (
            <div className="flex items-center gap-3">
              <span className="bg-accent-700 px-3 py-1 rounded text-sm">
                {numNights} شب
              </span>
              <div>
                <div className="text-xs font-bold uppercase">کل قیمت:</div>
                <div className="text-lg font-semibold">
                  {villaPriceCalculated} تومان
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div className="w-full sm:w-auto flex sm:items-center">
          {range.from || range.to ? (
            <button
              className="w-full sm:w-auto border border-primary-800 py-2 px-4 text-sm font-semibold rounded"
              onClick={() => resetRange()}
            >
              حذف
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default DatePicker;

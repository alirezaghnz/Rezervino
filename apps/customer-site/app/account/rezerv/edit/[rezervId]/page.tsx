import { editRezerv } from "@/app/_lib/actions";
import { getRezerv, getVilla } from "@/app/_lib/data-supabase";

export default async function Page({ params }) {
  const { rezervId } = params;
  const { numGuests, observation, villaId } = await getRezerv(rezervId);
  const { maxCapacity } = await getVilla(villaId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        ویرایش رزرو #{rezervId}
      </h2>

      <form
        action={editRezerv}
        className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
      >
        <input type="hidden" value={rezervId} name="rezervId" />
        <div className="space-y-2">
          <label htmlFor="numGuests">تعداد مهمانان</label>
          <select
            name="numGuests"
            id="numGuests"
            defaultValue={numGuests}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              انتخاب تعداد مهمانان
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observation">توضیحات راجع به سفر :</label>
          <textarea
            name="observation"
            defaultValue={observation}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <button className="bg-accent-500 rounded-xl px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
            ویرایش رزرو #{rezervId}
          </button>
        </div>
      </form>
    </div>
  );
}

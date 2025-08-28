import SelectCity from "@/app/_components/SelectCity";

export default function Page() {
  return (
    <>
      <h2 className="font-semibold text-2xl text-neutral-500 mb-3">
        ویرایش حساب کاربری
      </h2>

      <form className="bg-secondary-600 px-12 py-8 text-lg flex gap-6 flex-col rounded-lg">
        <div className="space-y-2">
          <label>نام و نام خانوادگی</label>
          <input
            disabled
            className="rounded-lg px-4 py-1 w-full shadow-sm disabled:cursor-not-allowed disabled:bg-gray-500  disabled:text-gray-400"
          />
        </div>
        <div className="space-y-2">
          <label>آدرس ایمیل</label>
          <input
            disabled
            className="rounded-lg px-4 py-1 w-full shadow-sm disabled:cursor-not-allowed disabled:bg-gray-500  disabled:text-gray-400"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="nationality">از کدام استان سفر کرده اید</label>
          </div>
          <SelectCity className="px-6 py-2 rounded-lg text-neutral-800 w-full bg-neutral-200" />
        </div>
        <div className="space-y-2">
          <label htmlFor="nationalID">کد ملی</label>
          <input
            name="nationalID"
            className="px-4 py-1 bg-neutral-200 text-neutral-800 w-full shadow-sm rounded-lg"
          />
        </div>
        <div className="flex justify-end items-center gap-6">
          <button className="bg-primary-600 rounded-sm px-6 py-2 text-neutral-200 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
            ویرایش کاربر
          </button>
        </div>
      </form>
    </>
  );
}

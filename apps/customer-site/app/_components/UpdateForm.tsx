"use client";
import { updateProf } from "../_lib/actions";
import { SubmitUpdateForm } from "./SubmitUpdateForm";

export default function UpdateForm({ dataUser, children }: any) {
  const { fullName, email, nationalID } = dataUser;

  return (
    <form
      action={updateProf}
      className="bg-secondary-600 px-12 py-8 text-lg flex gap-6 flex-col rounded-lg"
    >
      <div className="space-y-2">
        <label>نام و نام خانوادگی</label>
        <input
          disabled
          name="fullName"
          defaultValue={fullName}
          className="rounded-lg px-4 py-1 w-full shadow-sm disabled:cursor-not-allowed disabled:bg-gray-500  disabled:text-gray-400"
        />
      </div>
      <div className="space-y-2">
        <label>آدرس ایمیل</label>
        <input
          disabled
          name="email"
          defaultValue={email}
          className="rounded-lg px-4 py-1 w-full shadow-sm disabled:cursor-not-allowed disabled:bg-gray-500  disabled:text-gray-400"
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">از کدام استان سفر کرده اید</label>
        </div>
        {children}
      </div>
      <div className="space-y-2">
        <label htmlFor="nationalID">کد ملی</label>
        <input
          name="nationalID"
          defaultValue={nationalID}
          className="px-4 py-1 bg-neutral-200 text-neutral-800 w-full shadow-sm rounded-lg"
        />
      </div>
      <div className="flex justify-end items-center gap-6">
        <SubmitUpdateForm pendingLabel="ویرایش ...">
          ویرایش پروفایل
        </SubmitUpdateForm>
      </div>
    </form>
  );
}

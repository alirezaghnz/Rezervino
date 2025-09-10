"use client";
import { TrashIcon } from "@heroicons/react/24/solid";
import { delelteRezerv } from "../_lib/actions";
import { useTransition } from "react";

export default function DeleteRezerv({ rezervId }: { rezervId: string }) {
  const [isPending, startTransition] = useTransition();
  const handleDelete = () => {
    startTransition(() => delelteRezerv(rezervId));
  };
  return (
    <button
      onClick={handleDelete}
      className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-primary-900 transition-colors hover:text-primary-100 hover:rounded-xl"
    >
      {!isPending ? (
        <>
          <TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
          <span className="mt-1">لغو</span>
        </>
      ) : (
        <span className="mx-auto ">...</span>
      )}
    </button>
  );
}

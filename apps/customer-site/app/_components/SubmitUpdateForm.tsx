"use client";
import { useFormStatus } from "react-dom";

export function SubmitUpdateForm({
  children,
  pendingLabel,
}: {
  children: React.ReactNode;
  pendingLabel: string;
}) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="bg-primary-600 rounded-sm px-6 py-2 text-neutral-200 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      {pending ? pendingLabel : children}
    </button>
  );
}

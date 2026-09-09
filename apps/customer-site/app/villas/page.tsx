import { Suspense } from "react";
import VillaList from "../_components/VillaList";
import Loading from "./loading";
import Filter from "../_components/Filter";

export const metadata = {
  title: "ویلا",
};

type VillaFilter = "all" | "small" | "medium" | "large";

function isVillaFilter(value: any): value is VillaFilter {
  return ["all", "small", "medium", "large"].includes(value);
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ capacity?: string }>;
}) {
  const params = await searchParams;

  const filterParams = params?.capacity;

  const filter: VillaFilter = isVillaFilter(filterParams)
    ? filterParams
    : "all";

  return (
    <main className="min-h-full bg-slate-50">
      {" "}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          {" "}
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            ویلاهای موجود در مازندران{" "}
          </h1>
          <p className="mt-3 max-w-2xl text-slate-500">
            از میان ویلاهای موجود، اقامتگاه مناسب خود را بر اساس ظرفیت انتخاب
            کنید.
          </p>
        </div>
        {/* Filter */}
        <div className="mb-8">
          <Filter />
        </div>
        {/* Villas */}
        <Suspense fallback={<Loading />}>
          <VillaList filter={filter} key={filter} />
        </Suspense>
      </section>
    </main>
  );
}

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
  //console.log(searchParams);
  const filterParams = params?.capacity;
  const filter: VillaFilter = isVillaFilter(filterParams)
    ? filterParams
    : "all";
  return (
    <div>
      <h1 className="text-3xl mb-5 text-primary-900">
        ویلاهای موجود در مازندران
      </h1>

      <div className="flex justify-start mb-1 rounded-lg">
        <Filter />
      </div>

      <Suspense fallback={<Loading />}>
        <VillaList filter={filter} key={filter} />
      </Suspense>
    </div>
  );
}

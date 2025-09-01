import { Suspense } from "react";
import VillaList from "../_components/VillaList";

import Loading from "./loading";
import Filter from "../_components/Filter";

export const metadata = {
  title: "ویلا",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ capacity?: string }>;
}) {
  const params = await searchParams;
  console.log(searchParams);
  const filter = params?.capacity ?? "all";
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

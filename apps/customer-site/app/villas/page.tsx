import { Suspense } from "react";
import VillaList from "../_components/VillaList";

import Loading from "./loading";

export const metadata = {
  title: "ویلا",
};

export default async function Page() {
  return (
    <div>
      <h1 className="text-3xl mb-5 text-primary-900">
        ویلاهای موجود در مازندران
      </h1>

      <Suspense fallback={<Loading />}>
        <VillaList />
      </Suspense>
    </div>
  );
}

"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams(); // get current query params (read-only)
  const router = useRouter(); // router  to control navigation
  const pathname = usePathname(); // current page path like /villa (without query params)

  const activeFilter = searchParams.get("capacity") ?? "all";

  const handleFilter = (filter: any) => {
    //console.log(filter);
    // clone search params because the hook result is immutable
    const params = new URLSearchParams(searchParams);
    // update or add or delete the "capacity" query parameter
    params.set("capacity", filter);

    // replace the current URL with the updated query string
    // does not reload the page
    // keeps scroll position
    router.replace(`${pathname}?${params.toString()} `, { scroll: false });
  };
  return (
    <div className="flex border border-primary-300 text-primary-900 rounded-lg ">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        همه
      </Button>
      <Button
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        2 ظرفیت
      </Button>
      <Button
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        5 ظرفیت
      </Button>
      <Button
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        بالای 5 ظرفیت
      </Button>
    </div>
  );
}

// need to be add new component fot that for reusability, but later i fix that
function Button({ filter, activeFilter, handleFilter, children }: any) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-400 rounded-lg ${
        filter === activeFilter ? "bg-primary-600 text-neutral-200" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

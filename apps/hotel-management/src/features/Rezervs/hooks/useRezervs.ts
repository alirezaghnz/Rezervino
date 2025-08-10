import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getRezervs } from "../../../services/apiRezervs";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../../utils/constantist";

export function useRezervs() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  // work with filtering with ReactQuery and react router
  const filteredValue = searchParams.get("status");
  const filter =
    !filteredValue || filteredValue === "all"
      ? null
      : { field: "status", value: filteredValue };

  //sortBy
  const sortByRaw = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  //pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { isLoading, data: { data: rezervs, count } = {} } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getRezervs({ filter, sortBy, page }),
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);

  //Prefetching with ReactQuery in Pagination
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1],
      queryFn: () => getRezervs({ filter, sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1],
      queryFn: () => getRezervs({ filter, sortBy, page: page - 1 }),
    });

  return { isLoading, rezervs, count };
}

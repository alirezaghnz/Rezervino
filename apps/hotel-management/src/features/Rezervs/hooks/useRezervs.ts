import { useQuery } from "@tanstack/react-query";
import { getRezervs } from "../../../services/apiRezervs";
import { useSearchParams } from "react-router-dom";

export function useRezervs() {
  const [searchParams] = useSearchParams();
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

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { isLoading, data: { data: rezervs, count } = {} } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getRezervs({ filter, sortBy, page }),
  });
  return { isLoading, rezervs, count };
}

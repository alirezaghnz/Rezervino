import { useQuery } from "@tanstack/react-query";
import { getRezerv } from "../../../services/apiRezervs";
import { useParams } from "react-router-dom";

export function useRezerv() {
  const { bookingId } = useParams();
  const {
    isLoading,
    data: rezerv,
    error,
  } = useQuery({
    queryKey: ["bookings", bookingId],
    queryFn: () => getRezerv(bookingId),
    retry: false,
  });

  return { isLoading, rezerv, error };
}

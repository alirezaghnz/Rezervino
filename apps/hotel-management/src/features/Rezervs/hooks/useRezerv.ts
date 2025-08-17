import { useQuery } from "@tanstack/react-query";
import { getRezerv } from "../../../services/apiRezervs";
import { useParams } from "react-router-dom";

export function useRezerv() {
  const { bookingId } = useParams<{ bookingId: string }>();
  const rezervId = bookingId ? Number(bookingId) : undefined;
  const {
    isLoading,
    data: rezerv,
    error,
  } = useQuery({
    queryKey: ["bookings", rezervId],
    queryFn: () => getRezerv(rezervId as number),
    retry: false,
  });

  return { isLoading, rezerv, error };
}

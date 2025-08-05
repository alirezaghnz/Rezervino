import { useQuery } from "@tanstack/react-query";
import { getVillas } from "../../../services/apiVillas";

export function useVillas() {
  const { isLoading, data: villa } = useQuery({
    queryKey: ["villa"],
    queryFn: getVillas,
  });
  return { isLoading, villa };
}

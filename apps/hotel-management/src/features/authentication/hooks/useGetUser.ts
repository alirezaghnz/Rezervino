import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../../services/apiAuth";

export function useGetUser() {
  const { isLoading: loadingUser, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  return { loadingUser, user };
}

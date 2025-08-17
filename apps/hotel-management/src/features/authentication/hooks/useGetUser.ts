import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../../services/apiAuth";

export function useGetUser(): any {
  const { isLoading: loadingUser, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  // get user role for if user authenticated or not
  return { loadingUser, user, isAuthenticated: user?.role === "authenticated" };
}

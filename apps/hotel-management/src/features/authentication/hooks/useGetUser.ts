import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../../services/apiAuth";

type User = { email: string; user_metadata: { fullName: string } };

export function useGetUser(): { user: User } {
  const { isLoading: loadingUser, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  // get user role for if user authenticated or not
  return { loadingUser, user, isAuthenticated: user?.role === "authenticated" };
}

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutA } from "../../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutA,
    onSuccess: () => {
      //add removeQueries for delete session and catch
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });
  return { logout, isPending };
}

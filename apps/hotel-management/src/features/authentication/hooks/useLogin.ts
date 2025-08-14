import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginSupabase } from "../../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoadingLogin } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      loginSupabase({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      //replace for back button on the browser
      navigate("/dashboard", { replace: true });
    },
    onError: () => {
      toast.error("ایمیل یا پسورد اشتباه وارد شد.");
    },
  });

  return { login, isLoadingLogin };
}

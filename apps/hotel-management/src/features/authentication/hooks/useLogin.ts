import { useMutation } from "@tanstack/react-query";
import { login as loginSupabase } from "../../../services/apiAuth";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isPending: isLoadingLogin } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      loginSupabase({ email, password }),
    onSuccess: () => {
      navigate("/");
    },
    onError: () => {
      toast.error("ایمیل یا پسورد اشتباه وارد شد.");
    },
  });

  return { login, isLoadingLogin };
}

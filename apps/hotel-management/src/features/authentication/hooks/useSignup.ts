import { useMutation } from "@tanstack/react-query";
import { signup as signupA } from "../../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupA,
    onSuccess: (user) => {
      toast.success("کاربر با موفقیت ایجاد شد، لطفا ایمیل خود را تایید کنید.");
      console.log(user);
    },
  });

  return { signup, isLoading };
}

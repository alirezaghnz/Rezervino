import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser as updateCurrentUser } from "../../../services/apiAuth";
import toast from "react-hot-toast";
import type { UseMutationResult } from "@tanstack/react-query";

export default function useUpdateUser() {
  const queryClient = useQueryClient();
  const {
    mutate: updateUsers,
    isPending: isUpdateUserLoading,
  }: UseMutationResult<any, Error, any> = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success("اطلاعات کاربر با موفقیت تغییر پیدا کرد");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error: Error) => toast.error(error.message),
  });

  return { updateUsers, isUpdateUserLoading };
}

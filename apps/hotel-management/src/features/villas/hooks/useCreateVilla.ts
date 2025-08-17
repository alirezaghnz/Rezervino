import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  insertVilla,
  type InsertOrEditVillaArgs,
} from "../../../services/apiVillas";
import toast from "react-hot-toast";

export function useCreateVilla() {
  const queryClient = useQueryClient();
  const { isPending: isCreating, mutate: createVilla } = useMutation<
    unknown,
    Error,
    InsertOrEditVillaArgs
  >({
    mutationFn: insertVilla,
    onSuccess: () => {
      toast.success("ویلا جدید اضافه شد");
      queryClient.invalidateQueries({ queryKey: ["villa"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isCreating, createVilla };
}

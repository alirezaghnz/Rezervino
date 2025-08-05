import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteVilla as deleteVillaApi } from "../../../services/apiVillas";
import toast from "react-hot-toast";

export function useDeleteVilla() {
  const queryClient = useQueryClient();
  const { isPending: deleteLoading, mutate: deleteVilla } = useMutation({
    mutationFn: deleteVillaApi,
    onSuccess: () => {
      toast.success("ویلا با موفقیت حذف شد");
      queryClient.invalidateQueries({ queryKey: ["villa"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { deleteVilla, deleteLoading };
}

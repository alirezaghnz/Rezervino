import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteRezerv as deleteRezervA } from "../../../services/apiRezervs";
import toast from "react-hot-toast";

export function useDeleteRezerv() {
  const queryClient = useQueryClient();
  const { mutate: deleteRezerv, isPending: isDeleteRerzerv } = useMutation({
    mutationFn: deleteRezervA,
    onSuccess: () => {
      toast.success("رزرو با موفقیت حذف شد");
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: (error) => toast.error(error.message),
  });
  return { deleteRezerv, isDeleteRerzerv };
}

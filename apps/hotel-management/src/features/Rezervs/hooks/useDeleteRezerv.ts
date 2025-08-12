import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteRezerv as deleteRezervA } from "../../../services/apiRezervs";
import toast from "react-hot-toast";

export function useDeleteRezerv() {
  const queryClient = useQueryClient();
  const { mutate: deleteRezerv, isPending: isDeleteRerzerv } = useMutation({
    mutationFn: (rezervId) => deleteRezervA(rezervId),
    onSuccess: (data) => {
      toast.success(`رزرو با ایدی ${data.id} با موفقیت حذف شد`);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: (error) => toast.error(error.message),
  });
  return { deleteRezerv, isDeleteRerzerv };
}

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateRezerv } from "../../../services/apiRezervs";
import toast from "react-hot-toast";

export function useCheckinOut() {
  const queryClient = useQueryClient();

  //for update rezerving database(supabase)
  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (rezervId) =>
      updateRezerv(rezervId, {
        status: "اتمام رزرو",
      }),
    onSuccess: (data) => {
      toast.success(`اتمام رزرو با ایدی ${data.id} انجام شد `);
      // with type: active all queries so they refetch and show updated data > ReactQuery 4/5
      queryClient.invalidateQueries({ type: "active" });
    },
  });
  return { checkout, isCheckingOut };
}

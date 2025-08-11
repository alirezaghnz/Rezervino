import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateRezerv } from "../../../services/apiRezervs";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  //for update rezerving database(supabase)
  const { mutate: checkin, isLoading: isChecking } = useMutation({
    mutationFn: (rezervId) =>
      updateRezerv(rezervId, {
        status: "تایید رزرو",
        isPaid: true,
      }),
    onSuccess: (data) => {
      toast.success(`رزرو با ایدی ${data.id} تایید شد`);
      // with active:all all queries so they refetch and show updated data > ReactQuery 4/5
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },
  });
  return { checkin, isChecking };
}

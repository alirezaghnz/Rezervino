import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateRezerv } from "../../../services/apiRezervs";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  //for update rezerving database(supabase)
  const { mutate: checkin, isPending: isChecking } = useMutation({
    mutationFn: ({
      rezervId,
      breakfast,
    }: {
      rezervId: number;
      breakfast: any;
    }) =>
      updateRezerv(rezervId, {
        status: "تایید رزرو",
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      toast.success(`رزرو با ایدی ${data.id} تایید شد`);
      // with type: active all queries so they refetch and show updated data > ReactQuery 4/5
      queryClient.invalidateQueries({ type: "active" });
      navigate("/");
    },
  });
  return { checkin, isChecking };
}

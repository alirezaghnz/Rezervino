import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting } from "../../../services/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSetting() {
  const query = useQueryClient();
  const { isPending, mutate: editSetting } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success("تنظیمات ثبت شد");
      query.invalidateQueries({ queryKey: ["setting"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isPending, editSetting };
}

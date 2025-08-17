import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertVilla } from "../../../services/apiVillas";
import toast from "react-hot-toast";

export function useUpdateVilla() {
  const query = useQueryClient();
  const { isPending: isEditing, mutate: editVilla } = useMutation({
    mutationFn: ({ newVillaData, id }: any) => insertVilla(newVillaData, id),
    onSuccess: () => {
      toast.success("ویلا با موفقیت ویرایش شد");
      query.invalidateQueries({ queryKey: ["villa"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, editVilla };
}

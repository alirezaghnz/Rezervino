import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../../services/apiSettings";

export function useSetting() {
  const { error, data: settings } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });
  return { settings, error };
}

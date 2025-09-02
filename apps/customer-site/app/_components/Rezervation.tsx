import { getRezervedByVillaId, getSettings } from "../_lib/data-supabase";
import DatePicker from "./DatePick";
import RezervForm from "./RezervForm";

export default async function Rezervation({ villa }: any) {
  const [settings, rezervById] = await Promise.all([
    getSettings(),
    getRezervedByVillaId(villa.id),
  ]);
  return (
    <div className="grid grid-cols-2 min-h-[400px] border border-primary-600">
      <DatePicker settings={settings} rezervById={rezervById} villa={villa} />
      <RezervForm villa={villa} />
    </div>
  );
}

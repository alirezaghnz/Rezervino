import { auth } from "../_lib/auth";
import { getRezervedByVillaId, getSettings } from "../_lib/data-supabase";
import DatePicker from "./DatePick";
import LoginM from "./LoginM";
import RezervForm from "./RezervForm";

export default async function Rezervation({ villa }: any) {
  const [settings, rezervedDates] = await Promise.all([
    getSettings(),
    getRezervedByVillaId(villa.id),
  ]);
  const dataUser = await auth();
  return (
    <div className="grid grid-cols-1 gap-4 min-h-[400px] border-primary-600 lg:grid-cols-2 ">
      <DatePicker
        settings={settings}
        rezervedDates={rezervedDates}
        villa={villa}
      />

      {dataUser?.user ? (
        <RezervForm villa={villa} dataUser={dataUser.user} />
      ) : (
        <LoginM />
      )}
    </div>
  );
}

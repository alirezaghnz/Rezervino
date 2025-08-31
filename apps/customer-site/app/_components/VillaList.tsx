import { getVillas } from "../_lib/data-supabase";
import VillaCart from "./VillaCart";

async function VillaList() {
  const villas = await getVillas();
  //console.log(villas);
  if (villas.length === 0) return null;
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {villas.map((villa) => (
        <VillaCart key={villa.id} villa={villa} />
      ))}
    </div>
  );
}
export default VillaList;

import { getVillas } from "../_lib/data-supabase";
import VillaCart from "./VillaCart";

type VillaListProps = {
  filter: "all" | "small" | "medium" | "large";
};

async function VillaList({ filter }: VillaListProps) {
  const villas = await getVillas();
  //console.log(villas);

  // filter on the server side and need to intraction with client with params on URL
  let displayVilla: any;
  if (filter === "all") {
    displayVilla = villas.filter((villa) => villa.maxCapacity);
  }
  if (filter === "small") {
    displayVilla = villas.filter((villa) => villa.maxCapacity < 3);
  }
  if (filter === "medium") {
    displayVilla = villas.filter(
      (villa) => villa.maxCapacity < 3 && villa.maxCapacity >= 5
    );
  }
  if (filter === "large") {
    displayVilla = villas.filter((villa) => villa.maxCapacity >= 7);
  }

  if (villas.length === 0) return null;
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayVilla.map((villa: any) => (
        <VillaCart key={villa.id} villa={villa} />
      ))}
    </div>
  );
}
export default VillaList;

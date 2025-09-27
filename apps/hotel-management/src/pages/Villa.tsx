import AddVilla from "../features/villas/AddVilla";
import VillaTableOp from "../features/villas/VillaTableOp";
import VillaTable from "../features/villas/VillaTables";
import Heading from "../ui/Heading";

export default function Villa() {
  return (
    <>
      <Heading as="h1">لیست ویلا</Heading>
      <VillaTableOp />

      <VillaTable />
      <AddVilla />
    </>
  );
}

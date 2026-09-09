import VillaTableOp from "../features/villas/VillaTableOp";
import VillaTable from "../features/villas/VillaTables";
import Heading from "../ui/Heading";

export default function Villa() {
  return (
    <div>
      <div className="mb-8">
        <Heading as="h2">مدیریت ویلاها</Heading>

        <p className="text-slate-500 mt-2">
          مشاهده، ویرایش و مدیریت اقامتگاه‌ها
        </p>
      </div>

      <div className="mb-6">
        <VillaTableOp />
      </div>

      <VillaTable />
    </div>
  );
}

import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOp from "../../ui/TableOp";

export default function VillaTableOp() {
  return (
    <TableOp>
      <Filter
        filterFiled="discount"
        options={[
          { value: "all", label: "همه" },
          { value: "discount", label: "تخفیف" },
          { value: "no-discount", label: "بدون تخفیف" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "به ترتیب الفبا" },
          { value: "name-desc", label: "به ترتیب الفبا(برعکس)" },
          { value: "regularPrice-asc", label: "ارزانترین" },
          { value: "regularPrice-desc", label: "گرانترین" },
          { value: "maxCapacity-asc", label: "ظرفیت(کمترین)" },
          { value: "maxCapacity-desc", label: "ظرفیت(بیشترین)" },
        ]}
      />
    </TableOp>
  );
}

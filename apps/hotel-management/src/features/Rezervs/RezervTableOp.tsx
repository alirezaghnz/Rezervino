import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOp from "../../ui/TableOp";

export default function RezervTabelOp() {
  return (
    <TableOp>
      <Filter
        filterFiled="status"
        options={[
          { value: "all", label: "همه" },
          { value: "در انتظار", label: "در انتظار تایید" },
          { value: "تایید رزرو", label: "رزرو های تایید شده" },
          { value: "اتمام رزرو", label: "اتمام رزرو" },
        ]}
      />
      <SortBy
        options={[
          { value: "startDate-desc", label: "ترتیب زمان(زودترین)" },
          { value: "startDate-asc", label: "(قدیمی ترین)ترتیب زمان" },
          { value: "totalPrice-desc", label: "کل قیمت(کمترین)" },
          { value: "totalPrice-asc", label: "کل قیمت(بیشترین)" },
        ]}
      />
    </TableOp>
  );
}

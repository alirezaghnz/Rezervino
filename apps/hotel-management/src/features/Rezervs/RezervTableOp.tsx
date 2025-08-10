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
          { value: "وارد شده", label: "تحویل گرفته شده" },
          { value: "تایید نشده", label: "تایید نشده" },
          { value: "خارج شده", label: "اتمام اقامت" },
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

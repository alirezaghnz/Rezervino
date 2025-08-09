import { useVillas } from "./hooks/useVillas";
import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";
import VillaRows from "./VillaRows";

export default function VillaTable() {
  const { isLoading, villa } = useVillas();
  //console.log(villa);
  if (isLoading) return <Spinner />;
  return (
    <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header role="row">
        <div></div>
        <div>ویلا</div>
        <div>ظرفیت</div>
        <div>قیمت</div>
        <div>تخفیف</div>
      </Table.Header>
      {/*  we use render prop to render each villa Body instead of compound components */}
      <Table.Body data={villa} render={(v) => <VillaRows key={v.id} v={v} />} />
    </Table>
  );
}

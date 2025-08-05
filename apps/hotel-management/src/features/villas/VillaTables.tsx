import { useVillas } from "./hooks/useVillas";

import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import VillaRows from "./VillaRows";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

export default function VillaTable() {
  const { isLoading, villa } = useVillas();
  //console.log(villa);
  if (isLoading) return <Spinner />;
  return (
    <Table role="table">
      <TableHeader role="row">
        <div></div>
        <div>ویلا</div>
        <div>ظرفیت</div>
        <div>قیمت</div>
        <div>تخفیف</div>
      </TableHeader>
      {villa?.map((v) => (
        <VillaRows key={v.id} v={v} />
      ))}
    </Table>
  );
}

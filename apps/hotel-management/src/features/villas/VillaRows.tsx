import styled from "styled-components";
import type { VillaRowsProps } from "../../types/database.types";

import { useState } from "react";
import { CreateVilla } from "./CreateVilla";
import { useDeleteVilla } from "./hooks/useDeleteVilla";
import { useCreateVilla } from "./hooks/useCreateVilla";

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Villa = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

export default function VillaRows({ v }: VillaRowsProps) {
  const [showForm, setShowForm] = useState(false);
  const { deleteLoading, deleteVilla } = useDeleteVilla();
  const { id: villaId, name, maxCapacity, regularPrice, discount, image } = v;
  const { createVilla } = useCreateVilla();

  function handleDup() {
    createVilla({
      name: `کپی از ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
    });
  }

  return (
    <>
      <TableRow>
        <Img src={image} />
        <Villa>{name}</Villa>
        <div>برای {maxCapacity} ظرفیت داده شد</div>
        <Price>{regularPrice}</Price>
        {discount === 0 ? "__" : <Discount>{discount}</Discount>}
        <div>
          <button onClick={handleDup}>کپی</button>
          <button onClick={() => setShowForm((show) => !show)}>ویرایش</button>
          <button onClick={() => deleteVilla(villaId)} disabled={deleteLoading}>
            حذف
          </button>
        </div>
      </TableRow>
      {showForm && <CreateVilla villaEdit={v} />}
    </>
  );
}

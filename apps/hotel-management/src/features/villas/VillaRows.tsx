import { CreateVilla } from "./CreateVilla";
import { useDeleteVilla } from "./hooks/useDeleteVilla";

import { Modal } from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";

import styled from "styled-components";
import { formatToman } from "../../utils/persianFormat";

import { HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";

const Img = styled.img`
  width: 8rem;
  height: 6rem;

  border-radius: 12px;

  object-fit: cover;

  border: 1px solid var(--color-grey-200);

  @media (max-width: 768px) {
    display: none;
  }
`;

const Villa = styled.div`
  min-width: 0;

  font-size: 1.5rem;
  font-weight: 700;

  color: var(--color-grey-700);

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Capacity = styled.div`
  color: var(--color-grey-600);
  font-size: 1.3rem;
`;

const Price = styled.div`
  font-size: 1.3rem;
  font-weight: 700;

  color: var(--color-grey-700);

  white-space: nowrap;
`;

const Discount = styled.div`
  font-size: 1.3rem;
  font-weight: 700;

  color: var(--color-green-700);

  white-space: nowrap;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 0.8rem;
`;

const ActionButton = styled.button<{
  $variant: "edit" | "delete";
}>`
  width: 3.8rem;
  height: 3.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  border: 1px solid
    ${(props) =>
      props.$variant === "edit"
        ? "var(--color-action-border)"
        : "var(--color-danger-border)"};

  background-color: ${(props) =>
    props.$variant === "edit"
      ? "var(--color-action-bg)"
      : "var(--color-danger-bg)"};

  color: ${(props) =>
    props.$variant === "edit"
      ? "var(--color-action-text)"
      : "var(--color-danger-text)"};

  cursor: pointer;

  transition:
    background-color 0.2s,
    border-color 0.2s,
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-1px);

    background-color: ${(props) =>
      props.$variant === "edit"
        ? "var(--color-action-hover)"
        : "var(--color-danger-hover)"};

    box-shadow: var(--shadow-sm);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid var(--color-brand-500);
    outline-offset: 2px;
  }

  svg {
    width: 1.8rem;
    height: 1.8rem;
  }

  @media (max-width: 1024px) {
    width: 4rem;
    height: 4rem;
  }
`;

export default function VillaRows({ v }: any) {
  const { deleteLoading, deleteVilla } = useDeleteVilla();

  const { id: villaId, name, maxCapacity, regularPrice, discount, image } = v;

  return (
    <Table.Row {...({ role: "row" } as any)}>
      <Img src={image} alt={name} />

      <Villa title={name}>{name}</Villa>

      <Capacity>{maxCapacity} نفر</Capacity>

      <Price>{formatToman(regularPrice)}</Price>

      <Discount>{discount > 0 ? formatToman(discount) : "بدون تخفیف"}</Discount>

      <Actions>
        <Modal>
          {/* EDIT */}
          <Modal.Open opens="edit-villa">
            <ActionButton
              type="button"
              $variant="edit"
              aria-label={`ویرایش ${name}`}
              title="ویرایش ویلا"
            >
              <HiOutlinePencilSquare />
            </ActionButton>
          </Modal.Open>

          <Modal.Window name="edit-villa" size="large">
            <CreateVilla villaEdit={v} />
          </Modal.Window>

          {/* DELETE */}
          <Modal.Open opens="delete-villa">
            <ActionButton
              type="button"
              $variant="delete"
              aria-label={`حذف ${name}`}
              title="حذف ویلا"
            >
              <HiOutlineTrash />
            </ActionButton>
          </Modal.Open>

          <Modal.Window name="delete-villa" size="small">
            <ConfirmDelete
              resourceName="ویلا"
              disabled={deleteLoading}
              onConfirm={() => deleteVilla(villaId)}
            />
          </Modal.Window>
        </Modal>
      </Actions>
    </Table.Row>
  );
}

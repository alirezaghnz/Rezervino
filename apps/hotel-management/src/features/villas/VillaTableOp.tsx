import { HiOutlinePlus } from "react-icons/hi2";
import styled from "styled-components";

import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOp from "../../ui/TableOp";
import { Modal } from "../../ui/Modal";

import { CreateVilla } from "./CreateVilla";

const Operations = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  gap: 1.2rem;

  @media (max-width: 640px) {
    flex-direction: column-reverse;
    align-items: stretch;
  }
`;

const Filters = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  @media (max-width: 640px) {
    width: 100%;

    & > * {
      flex: 1;
    }
  }
`;

const AddButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;

  flex-shrink: 0;

  padding: 1rem 1.5rem;

  border: none;
  border-radius: 10px;

  background-color: var(--color-brand-600);
  color: var(--color-grey-0);

  font-size: 1.4rem;
  font-weight: 600;

  box-shadow: var(--shadow-sm);

  transition:
    background-color 0.2s,
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    background-color: var(--color-brand-700);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
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

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export default function VillaTableOp() {
  return (
    <TableOp>
      <Operations>
        <Filters>
          <Filter
            filterFiled="discount"
            options={[
              { value: "all", label: "همه" },
              { value: "discount", label: "تخفیف‌دار" },
              { value: "no-discount", label: "بدون تخفیف" },
            ]}
          />

          <SortBy
            options={[
              { value: "name-asc", label: "نام: الف تا ی" },
              { value: "name-desc", label: "نام: ی تا الف" },
              { value: "regularPrice-asc", label: "ارزان‌ترین" },
              { value: "regularPrice-desc", label: "گران‌ترین" },
              { value: "maxCapacity-asc", label: "ظرفیت: کمترین" },
              { value: "maxCapacity-desc", label: "ظرفیت: بیشترین" },
            ]}
          />
        </Filters>

        <Modal>
          <Modal.Open opens="villa-form">
            <AddButton type="button">
              <HiOutlinePlus />
              <span>افزودن ویلا</span>
            </AddButton>
          </Modal.Open>

          <Modal.Window name="villa-form" size="large">
            <CreateVilla />
          </Modal.Window>
        </Modal>
      </Operations>
    </TableOp>
  );
}

import styled from "styled-components";
import { Modal } from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { CreateVilla } from "./CreateVilla";
import { useDeleteVilla } from "./hooks/useDeleteVilla";
import { formatToman } from "../../utils/persianFormat";

const Card = styled.div`
  background: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Body = styled.div`
  padding: 1.6rem;
  color: var(--color-grey-700);
`;

const Name = styled.h3`
  font-size: 1.7rem;
  font-weight: 700;
  color: var(--color-grey-800);
  margin-bottom: 1rem;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  color: var(--color-grey-600);
`;

const Label = styled.span`
  font-weight: 600;
  color: var(--color-grey-700);
`;

const Value = styled.span`
  font-weight: 500;
  color: var(--color-grey-800);
`;

const Actions = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 1.5rem;
`;

const EditButton = styled.button`
  flex: 1;
  border: none;
  border-radius: 12px;
  padding: 1rem;

  background: var(--color-brand-600);
  color: white;
  font-weight: 600;
  &:hover {
    background: var(--color-brand-700);
  }
`;

const DeleteButton = styled.button`
  flex: 1;
  border: none;
  border-radius: 12px;
  padding: 1rem;
  background: var(--color-red-700);
  color: white;
  font-weight: 600;
  &:hover {
    background: var(--color-red-800);
  }
`;
export default function VillaMobileCard({ villa }) {
  const { deleteLoading, deleteVilla } = useDeleteVilla();

  const { id, name, maxCapacity, regularPrice, discount, image } = villa;

  return (
    <Card>
      <Image src={image} alt={name} />

      <Body>
        <Name>{name}</Name>

        <InfoRow>
          <Label>ظرفیت</Label>
          <Value>{maxCapacity} نفر</Value>
        </InfoRow>

        <InfoRow>
          <Label>قیمت</Label>
          <Value>{formatToman(regularPrice)}</Value>
        </InfoRow>

        <InfoRow>
          <Label>تخفیف</Label>
          <Value>{discount > 0 ? formatToman(discount) : "بدون تخفیف"}</Value>
        </InfoRow>

        <Modal>
          <Actions>
            <Modal.Open opens="edit-villa">
              <EditButton>ویرایش</EditButton>
            </Modal.Open>

            <Modal.Open opens="delete-villa">
              <DeleteButton>حذف</DeleteButton>
            </Modal.Open>
          </Actions>

          <Modal.Window name="edit-villa">
            <CreateVilla villaEdit={villa} />
          </Modal.Window>

          <Modal.Window name="delete-villa">
            <ConfirmDelete
              resourceName="ویلا"
              disabled={deleteLoading}
              onConfirm={() => deleteVilla(id)}
            />
          </Modal.Window>
        </Modal>
      </Body>
    </Card>
  );
}

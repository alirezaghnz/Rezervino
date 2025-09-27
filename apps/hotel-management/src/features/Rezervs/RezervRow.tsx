import styled from "styled-components";
import { format, isToday } from "date-fns-jalali";
import Table from "../../ui/Table";
import Tag from "../../ui/Tag";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import {
  formatJalali,
  formatToman,
  toPersianDigits,
} from "../../utils/persianFormat";
import { useCheckinOut } from "../check-in-out/hooks/useCheckinOut";

import { useDeleteRezerv } from "./hooks/useDeleteRezerv";
import { Modal } from "../../ui/Modal";
import Menus from "../../ui/Menus";
import ConfirmDelete from "../../ui/ConfirmDelete";

const Villa = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
    @media (max-width: 768px) {
      display: none;
    }
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  @media (max-width: 768px) {
    display: none;
  }
`;

export default function RezervRow({
  rezerving: {
    id: rezervId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    villa: { name: villaName },
  },
}: any) {
  const navigate = useNavigate();
  // need to add loading
  const { checkout } = useCheckinOut();
  const { deleteRezerv } = useDeleteRezerv();

  const statusToTagName = {
    "در انتظار": "blue",
    "تایید رزرو": "green",
    "اتمام رزرو": "silver",
  } as any;

  return (
    <Table.Row>
      <Villa>{villaName}</Villa>

      <Stacked>
        <span>{guestName}</span>
        <span>{email}</span>
      </Stacked>

      <Stacked>
        <span>
          {isToday(new Date(startDate)) ? "امروز" : formatJalali(startDate)}
          &rarr;
          {numNights} شب میماند
        </span>
        <span>
          {toPersianDigits(format(new Date(startDate), "yyyy/MM/dd"))}
          &mdash;
          {toPersianDigits(format(new Date(endDate), "yyyy/MM/dd"))}
        </span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{status}</Tag>

      <Amount>{formatToman(totalPrice)}</Amount>

      <Modal>
        <Menus>
          <Menus.Menu>
            <Menus.Toggle id={rezervId} />
            <Menus.List id={rezervId}>
              <Menus.Button
                icon={<HiEye />}
                onClick={() => navigate(`/rezervs/${rezervId}`)}
              >
                نمایش جزئیات
              </Menus.Button>
              {status === "در انتظار" && (
                <Menus.Button
                  icon={<HiArrowDownOnSquare />}
                  onClick={() => navigate(`/checkin/${rezervId}`)}
                >
                  تایید رزرو
                </Menus.Button>
              )}

              {status === "تایید رزرو" && (
                <Menus.Button
                  icon={<HiArrowUpOnSquare />}
                  onClick={() => checkout(rezervId)}
                >
                  اتمام رزرو
                </Menus.Button>
              )}

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>حذف رزرو</Menus.Button>
              </Modal.Open>
            </Menus.List>
          </Menus.Menu>
        </Menus>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="رزرو"
            onConfirm={() => deleteRezerv(rezervId)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

import styled from "styled-components";
import { isToday } from "date-fns-jalali";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

import Table from "../../ui/Table";
import Tag from "../../ui/Tag";
import { Modal } from "../../ui/Modal";
import Menus from "../../ui/Menus";
import ConfirmDelete from "../../ui/ConfirmDelete";

import {
  formatJalali,
  formatToman,
  toPersianDigits,
} from "../../utils/persianFormat";

import { useCheckinOut } from "../check-in-out/hooks/useCheckinOut";
import { useDeleteRezerv } from "./hooks/useDeleteRezerv";

const Villa = styled.div`
  min-width: 0;

  font-size: 1.4rem;
  font-weight: 650;
  color: var(--color-grey-700);

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Stacked = styled.div`
  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  span:first-child {
    color: var(--color-grey-700);
    font-size: 1.3rem;
    font-weight: 600;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span:last-child {
    color: var(--color-grey-500);
    font-size: 1.1rem;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const Amount = styled.div`
  color: var(--color-grey-700);

  font-family: "Sono";
  font-size: 1.2rem;
  font-weight: 600;

  white-space: nowrap;
`;

const DateCell = styled(Stacked)`
  span:first-child {
    display: flex;
    align-items: center;
    gap: 0.4rem;
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

  const { checkout, isCheckingOut } = useCheckinOut();
  const { deleteRezerv, isDeleteRerzerv } = useDeleteRezerv();

  const statusToTagName = {
    "در انتظار": "blue",
    "تایید رزرو": "green",
    "اتمام رزرو": "silver",
  } as const;

  return (
    <Table.Row>
      <Villa title={villaName}>{villaName}</Villa>

      <Stacked>
        <span>{guestName}</span>
        <span>{email}</span>
      </Stacked>

      <DateCell>
        <span>
          {isToday(new Date(startDate)) ? "امروز" : formatJalali(startDate)}
          <span>←</span>
          {numNights} شب
        </span>

        <span>
          {toPersianDigits(formatJalali(new Date(startDate), "yyyy/MM/dd"))}
          {" — "}
          {toPersianDigits(formatJalali(new Date(endDate), "yyyy/MM/dd"))}
        </span>
      </DateCell>

      <Tag type={statusToTagName[status as keyof typeof statusToTagName]}>
        {status}
      </Tag>

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
                  disabled={isCheckingOut}
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
            disabled={isDeleteRerzerv}
            onConfirm={() => deleteRezerv(rezervId)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

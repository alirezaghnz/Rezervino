import styled from "styled-components";
import { format, isToday } from "date-fns-jalali";
import Table from "../../ui/Table";
import Tag from "../../ui/Tag";
import { HiArrowDownOnSquare, HiArrowUpOnSquare, HiEye } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import {
  formatJalali,
  formatToman,
  toPersianDigits,
} from "../../utils/persianFormat";
import { useCheckinOut } from "../check-in-out/hooks/useCheckinOut";
import { HiFolderRemove } from "react-icons/hi";
import { useDeleteRezerv } from "./hooks/useDeleteRezerv";

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
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
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

      <HiEye onClick={() => navigate(`/rezervs/${rezervId}`)} />
      {status === "در انتظار" && (
        <HiArrowDownOnSquare onClick={() => navigate(`/checkin/${rezervId}`)} />
      )}
      {status === "تایید رزرو" && (
        <HiArrowUpOnSquare onClick={() => checkout(rezervId)} />
      )}
      <HiFolderRemove onClick={() => deleteRezerv(rezervId)} />
    </Table.Row>
  );
}

import styled from "styled-components";
import { format, isToday } from "date-fns-jalali";
import Table from "../../ui/Table";
import Tag from "../../ui/Tag";

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
  booking: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    villa: { name: villaName },
  },
}) {
  const statusToTagName = {
    "تایید نشده": "blue",
    "وارد شده": "green",
    "خارج شده": "silver",
  };

  function toPersianDigits(str) {
    return str.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  }
  function formatJalali(date, fmt = "yyyy/MM/dd") {
    return toPersianDigits(format(new Date(date), fmt));
  }

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

      <Amount>{totalPrice}</Amount>
    </Table.Row>
  );
}

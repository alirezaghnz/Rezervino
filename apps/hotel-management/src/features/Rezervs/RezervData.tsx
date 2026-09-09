import styled from "styled-components";
import { isToday } from "date-fns";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
  HiOutlineCalendarDays,
  HiOutlineUserGroup,
} from "react-icons/hi2";

import DataItem from "../../ui/DataItem";

import {
  formatJalali,
  formatToman,
  toPersianDigits,
} from "../../utils/persianFormat";

const StyledBookingDataBox = styled.section`
  overflow: hidden;

  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: 1.4rem;
  box-shadow: var(--shadow-sm);
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 2rem;

  padding: 2rem 3rem;

  background: linear-gradient(
    135deg,
    var(--color-brand-600),
    var(--color-brand-500)
  );

  color: white;

  @media (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;

    padding: 1.5rem;
  }
`;

const HeaderMain = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  min-width: 0;

  svg {
    flex-shrink: 0;

    width: 3rem;
    height: 3rem;
  }
`;

const HeaderTitle = styled.p`
  margin: 0;

  font-size: 1.65rem;
  font-weight: 650;
  line-height: 1.7;

  span {
    font-weight: 800;
  }

  @media (max-width: 768px) {
    font-size: 1.45rem;
  }
`;

const DateBox = styled.div`
  color: var(--color-brand-50);

  font-size: 1.2rem;
  text-align: left;
  line-height: 1.8;

  @media (max-width: 768px) {
    width: 100%;

    padding-top: 0.8rem;

    border-top: 1px solid rgba(255, 255, 255, 0.2);

    text-align: right;
  }
`;

const Section = styled.section`
  padding: 2.5rem 3rem 1rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Guest = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 0.2rem 1rem;

  margin-bottom: 2rem;
  padding: 1.2rem;

  background-color: var(--color-grey-50);
  border: 1px solid var(--color-grey-100);
  border-radius: 1rem;

  svg {
    grid-row: span 2;

    width: 2.2rem;
    height: 2.2rem;

    color: var(--color-brand-600);
  }

  p {
    margin: 0;
  }

  p:first-of-type {
    color: var(--color-grey-800);
    font-size: 1.3rem;
    font-weight: 650;
  }

  p:last-of-type {
    color: var(--color-grey-500);
    font-size: 1.15rem;
  }
`;

const DataGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ItemWrapper = styled.div`
  min-width: 0;

  padding: 0.3rem 0;
`;

const Price = styled.div<{ $isPaid: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1.5rem;

  margin-top: 1.5rem;
  padding: 1.5rem;

  border-radius: 1rem;

  background-color: ${(props) =>
    props.$isPaid ? "var(--color-green-50)" : "var(--color-yellow-50)"};

  border: 1px solid
    ${(props) =>
      props.$isPaid ? "var(--color-green-100)" : "var(--color-yellow-100)"};

  color: ${(props) =>
    props.$isPaid ? "var(--color-green-700)" : "var(--color-yellow-700)"};

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const PriceMain = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  min-width: 0;

  svg {
    flex-shrink: 0;

    width: 2.5rem;
    height: 2.5rem;
  }

  p {
    margin: 0;

    font-size: 1.25rem;
    font-weight: 600;
  }

  span {
    display: block;
    margin-top: 0.3rem;

    font-family: "Sono";
    font-size: 1.35rem;
    font-weight: 700;
  }
`;

const PaymentStatus = styled.p`
  margin: 0;

  font-size: 1.15rem;
  font-weight: 600;
  text-align: left;

  @media (max-width: 600px) {
    padding-top: 1rem;

    border-top: 1px solid currentColor;

    text-align: right;
  }
`;

const Footer = styled.footer`
  padding: 1.5rem 3rem;

  color: var(--color-grey-500);
  font-size: 1.1rem;

  border-top: 1px solid var(--color-grey-100);

  @media (max-width: 768px) {
    padding: 1.2rem 1.5rem;
  }
`;

function RezervData({ rezerv }: any) {
  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    villaPrice,
    extraPrice,
    totalPrice,
    hasBreakfast,
    observation,
    isPaid,
    guests: { fullName: guestName, email, nationalID },
    villa: { name: villa },
  } = rezerv;

  return (
    <StyledBookingDataBox>
      <Header>
        <HeaderMain>
          <HiOutlineHomeModern />

          <HeaderTitle>
            {numNights} شب در ویلا <span>{villa}</span>
          </HeaderTitle>
        </HeaderMain>

        <DateBox>
          {formatJalali(new Date(startDate), "EEE, MMM dd yyyy")}

          {" — "}

          {formatJalali(new Date(endDate), "EEE, MMM dd yyyy")}

          <br />

          {isToday(new Date(startDate))
            ? "امروز"
            : toPersianDigits(formatJalali(new Date(startDate), "yyyy/MM/dd"))}
        </DateBox>
      </Header>

      <Section>
        <Guest>
          <HiOutlineUserGroup />

          <p>
            {guestName}

            {numGuests > 1 ? ` به همراه ${numGuests - 1} مهمان` : ""}
          </p>

          <p>
            {email} • کد ملی: {nationalID}
          </p>
        </Guest>

        <DataGrid>
          {observation && (
            <ItemWrapper>
              <DataItem
                icon={<HiOutlineChatBubbleBottomCenterText />}
                label="توضیحات"
              >
                {observation}
              </DataItem>
            </ItemWrapper>
          )}

          <ItemWrapper>
            <DataItem icon={<HiOutlineCheckCircle />} label="درخواست صبحانه؟">
              {hasBreakfast ? "بله" : "خیر"}
            </DataItem>
          </ItemWrapper>

          <ItemWrapper>
            <DataItem icon={<HiOutlineCalendarDays />} label="تاریخ ورود">
              {toPersianDigits(formatJalali(new Date(startDate), "yyyy/MM/dd"))}
            </DataItem>
          </ItemWrapper>

          <ItemWrapper>
            <DataItem icon={<HiOutlineCalendarDays />} label="تاریخ خروج">
              {toPersianDigits(formatJalali(new Date(endDate), "yyyy/MM/dd"))}
            </DataItem>
          </ItemWrapper>
        </DataGrid>

        <Price $isPaid={isPaid}>
          <PriceMain>
            <HiOutlineCurrencyDollar />

            <div>
              <p>جمع کل پرداخت</p>

              <span>{formatToman(totalPrice)}</span>
            </div>
          </PriceMain>

          <PaymentStatus>
            {isPaid ? "پرداخت شده" : "پرداخت در زمان تحویل ویلا انجام می‌شود."}
          </PaymentStatus>
        </Price>
      </Section>

      <Footer>
        رزرو شده در تاریخ{" "}
        {toPersianDigits(
          formatJalali(new Date(created_at), "EEE, MMM dd yyyy, p"),
        )}
      </Footer>
    </StyledBookingDataBox>
  );
}

export default RezervData;

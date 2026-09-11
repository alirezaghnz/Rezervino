import styled from "styled-components";
import { isToday } from "date-fns-jalali";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
  HiCalendarDays,
  HiHomeModern,
  HiUserGroup,
  HiCurrencyDollar,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

import Tag from "../../ui/Tag";
import { Modal } from "../../ui/Modal";
import Menus from "../../ui/Menus";
import ConfirmDelete from "../../ui/ConfirmDelete";

import { useCheckinOut } from "../check-in-out/hooks/useCheckinOut";
import { useDeleteRezerv } from "./hooks/useDeleteRezerv";

import {
  formatJalali,
  formatToman,
  toPersianDigits,
} from "../../utils/persianFormat";

const Card = styled.article`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: 1.4rem;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
`;

const Top = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.2rem;
  padding: 1.5rem 1.5rem 1.2rem;

  border-bottom: 1px solid var(--color-grey-100);
`;

const VillaInfo = styled.div`
  min-width: 0;
`;

const VillaName = styled.h3`
  margin: 0;

  color: var(--color-grey-800);
  font-size: 1.6rem;
  font-weight: 700;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ReservationId = styled.span`
  display: block;
  margin-top: 0.35rem;

  color: var(--color-grey-500);
  font-size: 1.15rem;
  font-weight: 500;
`;

const Content = styled.div`
  padding: 1.4rem 1.5rem;
`;

const Guest = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  margin-bottom: 1.4rem;
  padding-bottom: 1.4rem;

  border-bottom: 1px solid var(--color-grey-100);
`;

const GuestIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3.6rem;
  height: 3.6rem;

  flex-shrink: 0;

  border-radius: 50%;

  background-color: var(--color-brand-50);
  color: var(--color-brand-600);

  svg {
    width: 1.9rem;
    height: 1.9rem;
  }
`;

const GuestInfo = styled.div`
  min-width: 0;
`;

const GuestName = styled.p`
  margin: 0;

  color: var(--color-grey-800);
  font-size: 1.4rem;
  font-weight: 600;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const GuestEmail = styled.p`
  margin: 0.25rem 0 0;

  color: var(--color-grey-500);
  font-size: 1.15rem;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.9rem;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  min-width: 0;

  padding: 1rem;

  background-color: var(--color-grey-50);
  border: 1px solid var(--color-grey-100);
  border-radius: 1rem;
`;

const InfoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  color: var(--color-grey-500);

  svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

const InfoText = styled.div`
  min-width: 0;
`;

const InfoLabel = styled.span`
  display: block;

  color: var(--color-grey-500);
  font-size: 1.05rem;
`;

const InfoValue = styled.span`
  display: block;
  margin-top: 0.2rem;

  color: var(--color-grey-700);
  font-size: 1.25rem;
  font-weight: 600;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const PriceBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;

  margin-top: 1rem;
  padding: 1.2rem;

  background-color: var(--color-green-50);
  border: 1px solid var(--color-green-100);
  border-radius: 1rem;
`;

const PriceLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  color: var(--color-green-700);
  font-size: 1.2rem;
  font-weight: 500;

  svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

const Price = styled.span`
  color: var(--color-green-700);
  font-size: 1.35rem;
  font-weight: 700;
  white-space: nowrap;
`;

const Actions = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1.6rem;

  border-top: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-50);
`;

const MainButton = styled.button`
  flex: 1;

  min-height: 4.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  border: 1px solid var(--color-brand-600);
  border-radius: 0.9rem;

  background-color: var(--color-brand-600);
  color: white;

  font-family: inherit;
  font-size: 1.25rem;
  font-weight: 600;

  cursor: pointer;

  transition:
    background-color 0.2s,
    transform 0.2s;

  &:hover {
    background-color: var(--color-brand-700);
  }

  &:active {
    transform: scale(0.98);
  }

  svg {
    width: 1.7rem;
    height: 1.7rem;
  }
`;

const DateText = styled.span`
  direction: rtl;
`;

export default function RezervMobileCard({ rezerv }: any) {
  const navigate = useNavigate();

  const { checkout, isCheckingOut } = useCheckinOut();
  const { deleteRezerv, isDeleteRerzerv } = useDeleteRezerv();

  const {
    id: rezervId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    villa: { name: villaName },
  } = rezerv;

  const statusToTagName = {
    "در انتظار": "blue",
    "تایید رزرو": "green",
    "اتمام رزرو": "silver",
  } as const;

  const handleCheckout = () => {
    checkout(rezervId);
  };

  return (
    <Card>
      <Top>
        <VillaInfo>
          <VillaName>{villaName}</VillaName>
          <ReservationId>رزرو {rezervId}</ReservationId>
        </VillaInfo>

        <Tag type={statusToTagName[status as keyof typeof statusToTagName]}>
          {status}
        </Tag>
      </Top>

      <Content>
        <Guest>
          <GuestIcon>
            <HiUserGroup />
          </GuestIcon>

          <GuestInfo>
            <GuestName>{guestName}</GuestName>
            <GuestEmail>{email}</GuestEmail>
          </GuestInfo>
        </Guest>

        <InfoGrid>
          <InfoItem>
            <InfoIcon>
              <HiCalendarDays />
            </InfoIcon>

            <InfoText>
              <InfoLabel>تاریخ ورود</InfoLabel>
              <InfoValue>
                <DateText>
                  {isToday(new Date(startDate))
                    ? "امروز"
                    : toPersianDigits(
                        formatJalali(new Date(startDate), "yyyy/MM/dd"),
                      )}
                </DateText>
              </InfoValue>
            </InfoText>
          </InfoItem>

          <InfoItem>
            <InfoIcon>
              <HiCalendarDays />
            </InfoIcon>

            <InfoText>
              <InfoLabel>تاریخ خروج</InfoLabel>
              <InfoValue>
                <DateText>
                  {toPersianDigits(
                    formatJalali(new Date(endDate), "yyyy/MM/dd"),
                  )}
                </DateText>
              </InfoValue>
            </InfoText>
          </InfoItem>

          <InfoItem>
            <InfoIcon>
              <HiHomeModern />
            </InfoIcon>

            <InfoText>
              <InfoLabel>مدت اقامت</InfoLabel>
              <InfoValue>{numNights} شب</InfoValue>
            </InfoText>
          </InfoItem>

          <InfoItem>
            <InfoIcon>
              <HiCurrencyDollar />
            </InfoIcon>

            <InfoText>
              <InfoLabel>مبلغ پرداختی</InfoLabel>
              <InfoValue>{formatToman(totalPrice)}</InfoValue>
            </InfoText>
          </InfoItem>
        </InfoGrid>

        <PriceBox>
          <PriceLabel>
            <HiCurrencyDollar />
            مبلغ کل
          </PriceLabel>

          <Price>{formatToman(totalPrice)}</Price>
        </PriceBox>
      </Content>

      <Actions>
        <MainButton onClick={() => navigate(`/rezervs/${rezervId}`)}>
          <HiEye />
          مشاهده جزئیات
        </MainButton>

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
      </Actions>
    </Card>
  );
}

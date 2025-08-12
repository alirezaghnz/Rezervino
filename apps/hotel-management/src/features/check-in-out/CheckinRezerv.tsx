import styled from "styled-components";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";

import { useMoveBack } from "../../hooks/useBack";
import RezervData from "../Rezervs/RezervData";
import { useRezerv } from "../Rezervs/hooks/useRezerv";
import Spinner from "../../ui/Spinner";
import Checkbox from "../../ui/Checkbox";
import { useEffect, useState } from "react";
import { useCheckin } from "./hooks/useCheckin";
import { useSetting } from "../settings/hooks/useSetting";
import { formatToman } from "../../utils/persianFormat";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinRezerv() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);

  const { isLoading, rezerv } = useRezerv();
  const { settings, isLoading: isSettingLoading } = useSetting();

  useEffect(() => {
    setConfirmPaid(rezerv?.isPaid ?? false);
  }, [rezerv]);

  const moveBack = useMoveBack();
  const { isChecking, checkin } = useCheckin();

  if (isLoading) return <Spinner />;
  const {
    id: rezervId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = rezerv;

  const breakfastP = settings.breakfastPrice;

  const niazBeBreakfast = breakfastP * numNights * numGuests;

  function handleCheckin() {
    if (!confirmPaid) return;

    if (addBreakfast) {
      checkin({
        rezervId,
        breakfast: {
          hasBreakfast: true,
          extraPrice: niazBeBreakfast,
          totalPrice: totalPrice + breakfastP,
        },
      });
    } else {
      checkin({ rezervId, breakfast: {} });
    }
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">رزرو #{rezervId}</Heading>
      </Row>
      <RezervData rezerv={rezerv} />

      {!hasBreakfast && (
        <Box>
          <Checkbox
            id="breakfast"
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((a) => !a);
              setConfirmPaid(false);
            }}
          >
            اضافه کردن صبحانه با قیمت {formatToman(breakfastP)}
          </Checkbox>
        </Box>
      )}
      <Box>
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          disabled={confirmPaid || isChecking}
          id="confirm"
        >
          من می پذیرم کاربر {guests.fullName} با ایدی #{rezervId} مبلغ را پرداخت
          کرده. مبلغ کل(
          {!addBreakfast
            ? formatToman(totalPrice)
            : formatToman(niazBeBreakfast + totalPrice)}
          )
        </Checkbox>
      </Box>
      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirmPaid || isChecking}>
          تایید رزرو با ایدی #{rezervId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          بازگشت
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinRezerv;

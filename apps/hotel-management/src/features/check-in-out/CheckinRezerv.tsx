import styled from "styled-components";

import { useEffect, useState } from "react";
import { useCheckin } from "./hooks/useCheckin";
import { useSetting } from "../settings/hooks/useSetting";
import { formatToman } from "../../utils/persianFormat";
import { useMoveBack } from "../../hooks/useBack";
import { useRezerv } from "../Rezervs/hooks/useRezerv";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import RezervData from "../Rezervs/RezervData";
import Spinner from "../../ui/Spinner";
import Checkbox from "../../ui/Checkbox";

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
  const { settings } = useSetting() as any;

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

  //we need fix that

  const niazBeBreakfast = settings.breakfastPrice * numNights * numGuests;

  function handleCheckin() {
    if (!confirmPaid) return;

    if (addBreakfast) {
      checkin({
        rezervId,
        breakfast: {
          hasBreakfast: true,
          extraPrice: niazBeBreakfast,
          totalPrice: totalPrice + niazBeBreakfast,
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
            اضافه کردن صبحانه با قیمت {formatToman(niazBeBreakfast)}
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
        <Button
          size="medium"
          variation="primary"
          onClick={handleCheckin}
          disabled={!confirmPaid || isChecking}
        >
          تایید رزرو با ایدی #{rezervId}
        </Button>
        <Button size="medium" variation="secondary" onClick={moveBack}>
          بازگشت
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinRezerv;

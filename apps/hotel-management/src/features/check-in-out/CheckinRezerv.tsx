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

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinRezerv() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const { isLoading, rezerv } = useRezerv();

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

  function handleCheckin() {
    if (!confirmPaid) return;
    checkin(rezervId);
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">رزرو #{rezervId}</Heading>
      </Row>
      <RezervData rezerv={rezerv} />
      <Box>
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          disabled={confirmPaid || isChecking}
          id="confirm"
        >
          من قبول می کنم که کاربر {guests.fullName} با ایدی #{rezervId} مبلغ را
          پرداخت کرده.
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

import styled from "styled-components";
import { useMoveBack } from "../../hooks/useBack";
import { useRezerv } from "./hooks/useRezerv";
import { useNavigate } from "react-router-dom";
import { useCheckinOut } from "../check-in-out/hooks/useCheckinOut";
import { Modal } from "../../ui/Modal";
import { useDeleteRezerv } from "./hooks/useDeleteRezerv";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import Button from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";
import Spinner from "../../ui/Spinner";
import RezervData from "./RezervData";
import ConfirmDelete from "../../ui/ConfirmDelete";

const HeadingGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  min-width: 0;

  @media (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.7rem;
  }
`;

const PageHeader = styled(Row)`
  @media (max-width: 600px) {
    margin-bottom: 1.5rem;
  }
`;

const Actions = styled(ButtonGroup)`
  flex-wrap: wrap;
  gap: 0.8rem;

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    width: 100%;

    & > * {
      width: 100%;
    }
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

function RezervDetail() {
  const navigate = useNavigate();

  const { rezerv, isLoading } = useRezerv();

  const { checkout, isCheckingOut } = useCheckinOut();

  const { deleteRezerv, isDeleteRerzerv } = useDeleteRezerv();

  const moveBack = useMoveBack();

  if (isLoading) return <Spinner />;

  type Status = "در انتظار" | "تایید رزرو" | "اتمام رزرو";

  type TagColor = "blue" | "green" | "silver";

  const statusToTagName: Record<Status, TagColor> = {
    "در انتظار": "blue",
    "تایید رزرو": "green",
    "اتمام رزرو": "silver",
  };

  const { status, id: rezervId } = rezerv as {
    status: Status;
    id: number;
  };

  return (
    <>
      <PageHeader type="horizontal">
        <HeadingGroup>
          <Heading as="h1">رزرو #{rezervId}</Heading>

          <Tag type={statusToTagName[status]}>{status}</Tag>
        </HeadingGroup>
      </PageHeader>

      <RezervData rezerv={rezerv} />

      <Actions>
        {status === "در انتظار" && (
          <Button
            variation="primary"
            size="medium"
            onClick={() => navigate(`/checkin/${rezervId}`)}
          >
            تایید رزرو
          </Button>
        )}

        {status === "تایید رزرو" && (
          <Button
            size="medium"
            variation="primary"
            onClick={() => checkout(rezervId)}
            disabled={isCheckingOut}
          >
            {isCheckingOut ? "در حال اتمام..." : "اتمام رزرو"}
          </Button>
        )}

        <Button size="medium" variation="secondary" onClick={moveBack}>
          بازگشت
        </Button>

        <Modal>
          <Modal.Open opens="delete-rezerv">
            <Button size="medium" variation="danger">
              حذف رزرو
            </Button>
          </Modal.Open>

          <Modal.Window name="delete-rezerv">
            <ConfirmDelete
              resourceName="رزرو"
              disabled={isDeleteRerzerv}
              onConfirm={() =>
                deleteRezerv(rezervId, {
                  onSettled: () => navigate(-1),
                })
              }
            />
          </Modal.Window>
        </Modal>
      </Actions>
    </>
  );
}

export default RezervDetail;

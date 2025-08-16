import styled from "styled-components";
import { useMoveBack } from "../../hooks/useBack";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";

import Button from "../../ui/Button";

import ButtonGroup from "../../ui/ButtonGroup";
import { useRezerv } from "./hooks/useRezerv";
import Spinner from "../../ui/Spinner";
import RezervData from "./RezervData";
import { useNavigate } from "react-router-dom";
import { useCheckinOut } from "../check-in-out/hooks/useCheckinOut";
import { Modal } from "../../ui/Modal";
import { useDeleteRezerv } from "./hooks/useDeleteRezerv";
import ConfirmDelete from "../../ui/ConfirmDelete";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function RezervDetail() {
  const navigate = useNavigate();
  const { rezerv, isLoading } = useRezerv();
  const { checkout, isCheckingOut } = useCheckinOut();
  const { deleteRezerv, isDeleteRezerv } = useDeleteRezerv();
  const moveBack = useMoveBack();

  if (isLoading) return <Spinner />;

  const { status, id: rezervId } = rezerv;

  const statusToTagName = {
    "در انتظار": "blue",
    "تایید رزرو": "green",
    "اتمام رزرو": "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">رزرو #{rezervId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
      </Row>

      <RezervData rezerv={rezerv} />

      <ButtonGroup>
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
            اتمام رزرو
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
              disabled={isDeleteRezerv}
              onConfirm={() =>
                deleteRezerv(rezervId, {
                  onSettled: () => navigate(-1),
                })
              }
            />
          </Modal.Window>
        </Modal>
      </ButtonGroup>
    </>
  );
}

export default RezervDetail;

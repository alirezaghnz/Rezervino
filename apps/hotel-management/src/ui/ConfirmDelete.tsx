import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  @media (max-width: 768px) {
    width: 25rem;
  }
  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmDelete({
  resourceName,
  onConfirm,
  disabled,
  onCloseModal,
}: any) {
  return (
    <StyledConfirmDelete>
      <Heading as="h3">حذف {resourceName}</Heading>
      <p>
        مطمئن هستید که می خواید {resourceName} را حذف کنید؟ این عمل قابل بازگشت
        نیست.
      </p>

      <div>
        <Button
          variation="secondary"
          size="medium"
          disabled={disabled}
          onClick={onCloseModal}
        >
          بازگشت
        </Button>
        <Button
          variation="danger"
          size="medium"
          disabled={disabled}
          onClick={onConfirm}
        >
          حذف
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;

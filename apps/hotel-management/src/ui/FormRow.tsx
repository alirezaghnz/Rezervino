import styled from "styled-components";

const StyledFormRow = styled.div`
  display: grid;

  grid-template-columns: 180px 1fr;

  gap: 1.6rem;

  align-items: center;

  padding: 1rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    gap: 0.6rem;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;
const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

export default function FormRow({ label, error, children }: any) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

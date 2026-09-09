import styled from "styled-components";

const Input = styled.input`
  width: 100%;

  padding: 1.2rem 1.4rem;

  border-radius: 12px;

  border: 1px solid var(--color-grey-300);

  background: var(--color-grey-0);

  &:focus {
    border-color: var(--color-brand-600);
  }
`;
export default Input;

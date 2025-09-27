import styled from "styled-components";

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  padding: 1rem 5rem;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  @media (max-width: 768px) {
    padding: 0.1rem 2rem;
  }
`;
export default Input;

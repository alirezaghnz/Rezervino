import styled from "styled-components";

type FormProps = {
  type?: "modal" | string;
};

const Form = styled.form<FormProps>`
  width: 100%;
  padding: 2rem;
  background: var(--color-grey-0);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 6px;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export default Form;

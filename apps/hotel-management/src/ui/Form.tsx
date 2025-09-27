import styled, { css } from "styled-components";

type FormProps = {
  type?: "modal" | string;
};

const Form = styled.form<FormProps>`
  ${(props) =>
    props.type !== "modal" &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;

      @media (max-width: 768px) {
        width: 100%;
        max-width: 100%;
        padding: 1.6rem;
        box-sizing: border-box;
      }
    `}

  @media (max-width:768px) {
    width: 350px;
  }
  overflow: hidden;
  font-size: 1.4rem;
`;

export default Form;

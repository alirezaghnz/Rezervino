import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 2rem;
      font-weight: 300;
      margin-bottom: 1rem;
      @media (max-width: 768px) {
        display: none;
      }
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1rem;

      @media (max-width: 768px) {
        display: block;
        font-size: 2.2rem;
      }
    `}
      ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
      @media (max-width: 768px) {
        display: none;
      }
    `}
`;

export default Heading;

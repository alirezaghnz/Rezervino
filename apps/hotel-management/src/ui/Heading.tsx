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
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 1rem;
      @media (max-width: 768px) {
        display: none;
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

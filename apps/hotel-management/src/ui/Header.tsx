import styled from "styled-components";
import HeaderData from "./HeaderData";
import UserData from "../features/authentication/UserData";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 3.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  @media (max-width: 768px) {
    padding: 1.6rem 2.4rem;
  }
`;
export default function Header() {
  return (
    <StyledHeader>
      <UserData />
      <HeaderData />
    </StyledHeader>
  );
}

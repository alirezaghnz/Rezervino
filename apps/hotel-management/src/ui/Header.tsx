import styled from "styled-components";
import HeaderData from "./HeaderData";
import UserData from "../features/authentication/UserData";

const StyledHeader = styled.header`
  transition: all 0.3s ease;
  background-color: var(--color-grey-0);
  padding: 1.8rem 3.8rem;
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

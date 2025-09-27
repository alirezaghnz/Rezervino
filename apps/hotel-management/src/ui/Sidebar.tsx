import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-left: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;

  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media (max-width: 768px) {
    height: auto;
    z-index: 1000;
    overflow-y: auto;
    order: 3;
    position: fixed;
    grid-row: auto;
    grid-column: auto;
    bottom: 0;
    left: 0;
    right: 0;

    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    padding: 1rem 0;
    border-left: none;
    border-top: 1px solid var(--color-grey-100);

    /* چون لوگو بالای صفحه لازمه، تو موبایل مخفیش کن */
    & > :first-child {
      display: none;
    }
  }
`;

export default function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

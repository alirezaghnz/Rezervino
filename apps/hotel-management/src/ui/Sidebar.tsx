import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside<{ $collapsed?: boolean }>`
  background-color: var(--color-grey-0);
  padding: 2rem 2.4rem;
  border-left: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  & > :first-child {
    display: ${(props) => (props.$collapsed ? "none" : "block")};
  }

  button {
    display: flex;
    justify-content: end;
    border: none;
    padding: 7px 7px 7px 7px;
    align-items: center;
    background: transparent;
    border-bottom: 1px solid var(--color-grey-300);
    //for removing focus ring
    &:focus {
      outline: none;
      box-shadow: none;
    }
    & svg {
      color: #3838dd;
      width: 2.4rem;
      height: 2.4rem;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    height: auto;
    position: fixed;
    grid-row: auto;
    grid-column: auto;
    bottom: 0;
    left: 0;
    right: 0;

    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    padding: 0.1rem 0;
    border-left: none;
    border-top: 1px solid var(--color-grey-100);

    & > :first-child {
      display: none;
    }
  }
`;

export default function Sidebar({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: any;
}) {
  return (
    <StyledSidebar $collapsed={collapsed}>
      <Logo />
      <button onClick={() => setCollapsed(!collapsed)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="3" x2="16" y2="21" />
        </svg>
      </button>
      <MainNav collapsed={collapsed} />
    </StyledSidebar>
  );
}

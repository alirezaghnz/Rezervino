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

  z-index: 1000;

  & > :first-child {
    display: ${(props) => (props.$collapsed ? "none" : "block")};
  }

  button {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    border: none;
    padding: 7px;

    background: transparent;
    border-bottom: 1px solid var(--color-grey-300);

    &:focus {
      outline: none;
      box-shadow: none;
    }

    & svg {
      color: var(--color-brand-600);
      width: 2.4rem;
      height: 2.4rem;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    position: fixed;

    left: 0;
    right: 0;
    bottom: 0;

    width: 100%;
    height: 7rem;

    padding: 0.6rem 1rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: var(--color-grey-0);

    border: none;
    border-top: 1px solid var(--color-grey-200);

    box-shadow: 0 -0.6rem 2rem rgba(0, 0, 0, 0.08);

    z-index: 9999;

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

      <button
        type="button"
        onClick={() => setCollapsed(!collapsed)}
        aria-label="باز و بسته کردن منو"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="16" y1="3" x2="16" y2="21" />
        </svg>
      </button>

      <MainNav collapsed={collapsed} />
    </StyledSidebar>
  );
}

import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineCalendar, HiOutlineUsers } from "react-icons/hi";
import { HiOutlineCog6Tooth, HiOutlineHomeModern } from "react-icons/hi2";

import { MdDashboard } from "react-icons/md";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    gap: 0;
  }
`;

const StyledNavLink = styled(NavLink)<{ $collapsed?: boolean }>`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 0.7rem 2.4rem;
    transition: all 0.3s;

    @media (max-width: 768px) {
      flex-direction: column;
      font-size: 1.2rem;
      padding: 0.2rem;
    }
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    /* when collapsed we want the background to be transparent */
    background-color: ${(props) =>
      props.$collapsed ? "transparent" : "var(--color-yellow-500)"};
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

interface MainNavProps {
  collapsed?: boolean;
}

export default function MainNav({ collapsed }: MainNavProps) {
  return (
    <NavList>
      <li>
        <StyledNavLink to="/villa" $collapsed={collapsed}>
          <span>
            <HiOutlineHomeModern />
          </span>

          {!collapsed && <span>ایجاد ویلا</span>}
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/users" $collapsed={collapsed}>
          <span>
            <HiOutlineUsers />
          </span>
          {!collapsed && <span>ایجاد ادمین</span>}
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/rezervs" $collapsed={collapsed}>
          <span>
            <HiOutlineCalendar />
          </span>
          {!collapsed && <span>رزرو</span>}
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/settings" $collapsed={collapsed}>
          <span>
            <HiOutlineCog6Tooth />
          </span>
          {!collapsed && <span>تنظیمات</span>}
        </StyledNavLink>
      </li>

      <li>
        <StyledNavLink to="/dashboard" $collapsed={collapsed}>
          <span>
            <MdDashboard />
          </span>

          {!collapsed && <span>داشبورد</span>}
        </StyledNavLink>
      </li>
    </NavList>
  );
}

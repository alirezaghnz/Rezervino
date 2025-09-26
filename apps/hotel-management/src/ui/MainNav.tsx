import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HiHome, HiOutlineCalendar, HiOutlineUsers } from "react-icons/hi";
import { HiOutlineCog6Tooth, HiOutlineHomeModern } from "react-icons/hi2";
import { GrDashboard } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-yellow-500);
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

export default function MainNav() {
  return (
    <NavList>
      <li>
        <StyledNavLink to="/villa">
          <HiOutlineHomeModern />
          <span>ایجاد ویلا</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/users">
          <HiOutlineUsers />
          <span>ایجاد کاربر</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/rezervs">
          <HiOutlineCalendar />
          <span>رزرو</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/settings">
          <HiOutlineCog6Tooth />
          <span>تنظیمات</span>
        </StyledNavLink>
      </li>

      <li>
        <StyledNavLink to="/dashboard">
          <MdDashboard />
          <span>داشبورد</span>
        </StyledNavLink>
      </li>
    </NavList>
  );
}

import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import DarkMode from "./DarkMode";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const StyledHeaderData = styled.ul`
  display: flex;
  gap: 0.6rem;
`;

export default function HeaderData() {
  const navigate = useNavigate();
  return (
    <StyledHeaderData>
      <li>
        <Logout />
      </li>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkMode />
      </li>
    </StyledHeaderData>
  );
}

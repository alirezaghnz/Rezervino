import styled from "styled-components";
import { useGetUser } from "./hooks/useGetUser";

const StyledUserData = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
  margin-bottom: 10px;
`;

const Pic = styled.img`
  display: block;
  width: 3.2rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 5px solid var(--color-grey-100);
`;
export default function UserData() {
  const { user } = useGetUser();
  const { fullName, avatar } = user.user_metadata;
  return (
    <StyledUserData>
      <Pic src={avatar || "default.jpg"} alt={`عکس کاربر ${fullName}`} />
      <span>{fullName}</span>
    </StyledUserData>
  );
}

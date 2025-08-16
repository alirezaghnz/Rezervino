import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./hooks/useLogout";

type UseLogout = { logout: () => void; isPending: boolean };

export default function Logout() {
  const { logout, isPending } = useLogout() as UseLogout;
  return (
    <ButtonIcon disabled={isPending} onClick={logout}>
      <HiArrowRightOnRectangle />
    </ButtonIcon>
  );
}

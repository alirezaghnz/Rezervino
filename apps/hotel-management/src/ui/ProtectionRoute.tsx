import styled from "styled-components";
import { useGetUser } from "../features/authentication/hooks/useGetUser";
import Spinner from "./Spinner";

const LoadingPage = styled.div`
  min-height: 100vh;
  background-color: var(--color-grey-50);
  align-items: center;
  justify-content: center;
`;
export default function ProtectionRoute({ children }) {
  const { user, loadingUser } = useGetUser();

  if (loadingUser)
    return (
      <LoadingPage>
        <Spinner />
      </LoadingPage>
    );

  return children;
}

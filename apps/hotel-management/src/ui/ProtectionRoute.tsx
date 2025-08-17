import styled from "styled-components";
import { useGetUser } from "../features/authentication/hooks/useGetUser";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoadingPage = styled.div`
  min-height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default function ProtectionRoute({ children }: any) {
  const { isAuthenticated, loadingUser } = useGetUser();

  const navigate = useNavigate();

  // user not authenticated = redirect to login page
  useEffect(() => {
    if (!isAuthenticated && !loadingUser) navigate("/login");
  }, [isAuthenticated, loadingUser, navigate]);

  if (loadingUser)
    return (
      <LoadingPage>
        <Spinner />
      </LoadingPage>
    );

  if (isAuthenticated) return children;
}

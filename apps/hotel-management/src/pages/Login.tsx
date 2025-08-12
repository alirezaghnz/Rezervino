import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 2rem;
  background-color: var(--color-grey-200);
`;
export default function Login() {
  return (
    <LoginLayout>
      <LoginForm />
    </LoginLayout>
  );
}

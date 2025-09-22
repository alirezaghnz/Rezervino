import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";

const LoginLayout = styled.main`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-700);
`;
const Card = styled.div`
  display: flex;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  max-width: 1000px;
  width: 100%;
  height: 600px;
`;
const Left = styled.div`
  flex: 1;
  background: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  img {
    max-width: 100%;
    height: auto;
  }
`;
const Right = styled.div`
  flex: 1;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  color: #8a3232;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export default function Login() {
  return (
    <LoginLayout>
      <Card>
        <Left>
          <img src="./public/login.png" />
        </Left>
        <Right>
          <Title>ورود به حساب کاربری</Title>
          <LoginForm />
        </Right>
      </Card>
    </LoginLayout>
  );
}

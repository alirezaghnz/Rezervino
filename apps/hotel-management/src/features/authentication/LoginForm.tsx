import { useState } from "react";

import Form from "../../ui/Form";

import { useLogin } from "./hooks/useLogin";
import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  padding: 0.9rem;
  background: #1f2730;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 2rem;

  &:hover {
    background: #357ab8;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1.1rem;
  margin-bottom: 1rem;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 1.2rem;

  &:focus {
    border-color: #4a90e2;
    outline: none;
  }
`;

export default function LoginForm() {
  const { login, isLoadingLogin } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      // for clear email and password if something went wrong
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <label>ایمیل آدرس</label>
      <Input
        type="email"
        id="email"
        placeholder="ایمیل خود را وارد نمایید"
        // for password managers
        autoComplete="username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoadingLogin}
      />

      <label>رمز عبور</label>
      <Input
        type="password"
        id="password"
        placeholder="رمز عبور خود را وارد نمایید."
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoadingLogin}
      />
      <Button>ورود</Button>
    </Form>
  );
}

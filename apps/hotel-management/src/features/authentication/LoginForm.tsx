import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";

import { useLogin } from "./hooks/useLogin";

export default function LoginForm() {
  const { login, isLoadingLogin } = useLogin();
  const [email, setEmail] = useState("alireza@gmail.com");
  const [password, setPassword] = useState("Alireza1378");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    login({ email, password });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="آدرس ایمیل">
        <Input
          type="email"
          id="email"
          // for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoadingLogin}
        />
      </FormRowVertical>
      <FormRowVertical label="پسورد">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoadingLogin}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large">ورود</Button>
      </FormRowVertical>
    </Form>
  );
}

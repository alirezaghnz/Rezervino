import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { useGetUser } from "./hooks/useGetUser";
import useUpdateUser from "./hooks/useUpdateUser";

import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

export default function UpdateUser() {
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useGetUser();

  const { updateUsers, isUpdateUserLoading } = useUpdateUser();
  const [fullName, setFullName] = useState<string>(currentFullName);
  const [pic, setPic] = useState(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    updateUsers({ fullName, pic });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="ایمیل آدرس">
        <Input value={email} disabled />
      </FormRow>
      <FormRow label="نام و نام خانوادگی">
        <Input
          type="text"
          value={fullName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFullName(e.target.value)
          }
          id="fullName"
          disabled={isUpdateUserLoading}
        />
      </FormRow>
      <FormRow label="عکس کاربر">
        <FileInput
          id="pic"
          accept="image/*"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPic(e.target.files[0])
          }
          disabled={isUpdateUserLoading}
        />
      </FormRow>
      <FormRow>
        <Button
          type="reset"
          variation="secondary"
          disabled={isUpdateUserLoading}
        >
          بازگشت
        </Button>
        <Button disabled={isUpdateUserLoading}>ویرایش کاربر</Button>
      </FormRow>
    </Form>
  );
}

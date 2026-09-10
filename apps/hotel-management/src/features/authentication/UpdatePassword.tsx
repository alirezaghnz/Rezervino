import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import useUpdateUser from "./hooks/useUpdateUser";
import styled from "styled-components";

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;

    button {
      width: 100%;
    }
  }
`;
export default function UpdatePassword() {
  //for control our form with useForm
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;
  const { updateUsers, isUpdateUserLoading } = useUpdateUser();

  function onSubmit({ password }: { password: string }) {
    updateUsers({ password }, { onSuccess: reset });
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit as any)}>
      <FormRow
        label="رمز عبور (حداقل 8 کراکتر)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdateUserLoading}
          {...register("password", {
            required: "این فیلد اجباری است",
            minLength: {
              value: 8,
              message: "رمز عبور حداقل باید 8 کراکتر داشته باشد",
            },
          })}
        />
      </FormRow>

      <FormRow label="تکرار رمز عبور" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdateUserLoading}
          {...register("passwordConfirm", {
            required: "این فیلد اجباری است",
            validate: (value) =>
              getValues().password === value || "رمز عبور یکسان نیست.",
          })}
        />
      </FormRow>
      <Actions>
        <Button onClick={reset} type="reset" size="small" variation="secondary">
          بازگشت
        </Button>
        <Button variation="primary" size="small" disabled={isUpdateUserLoading}>
          تغییر رمز عبور
        </Button>
      </Actions>
    </Form>
  );
}

import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./hooks/useSignup";

export default function SignupForm() {
  // add useForm for control Form better
  const { signup, isLoading } = useSignup();
  const { register, getValues, handleSubmit, formState, reset } = useForm();

  const { errors } = formState;

  const onSubmit = ({ fullName, email, password }) => {
    signup(
      { fullName, email, password, reset },
      {
        onSettled: reset,
      }
    );
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="نام و نام خانوادگی" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          {...register("fullName", { required: "فیلد  پر کنید" })}
        />
      </FormRow>

      <FormRow label="ایمیل آدرس" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "فیلد ایمیل را پر کنید",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "لطفا ایمیل معتبر وارد کنید.",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="رمز عبور( حداقل 8 کراکتر)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: "فیلد پسورد را پر کنید",
            minLength: {
              value: 8,
              message: "پسورد حداقل باید 8 کراکتر داشته باشد.",
            },
          })}
        />
      </FormRow>

      <FormRow label="تکرار رمز عبور" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          {...register("password", {
            required: "فیلد پسورد را پر کنید",
            validate: (value) =>
              value === getValues().password || "پسورد یکسان وارد کنید",
          })}
        />
      </FormRow>

      <FormRow>
        <Button size="medium" variation="secondary" type="reset">
          بازگشت
        </Button>
        <Button size="medium" variation="primary">
          ایجاد کاربر
        </Button>
      </FormRow>
    </Form>
  );
}

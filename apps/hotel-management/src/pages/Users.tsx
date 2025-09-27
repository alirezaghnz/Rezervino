import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";

export default function Users() {
  return (
    <>
      <Heading as="h1">ایجاد ادمین جدید</Heading>
      <SignupForm />
    </>
  );
}

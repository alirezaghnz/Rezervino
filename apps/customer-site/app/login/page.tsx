import SignInButton from "../_components/signInButton";

export const metadata = {
  title: "صفحه ورود",
};

export default function Page() {
  return (
    <div className="grid justify-center items-center">
      <p className="text-primary-800 mb-10 text-3xl text-center">
        ورود به اکانت
      </p>
      <SignInButton />
    </div>
  );
}

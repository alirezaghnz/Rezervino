import { signInAction } from "../_lib/actions";

export default function SignInButton() {
  return (
    <form action={signInAction}>
      <button
        className="flex text-primary-950 rounded-lg items-center gap-6 text-lg
     border border-primary-700 px-10 py-5 font-medium"
      >
        <span>ورود با Google Account</span>
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
      </button>
    </form>
  );
}

import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="border-b bg-primary-500 border-primary-100 px-6 lg:px-8 py-5 ">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

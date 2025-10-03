import SideNav from "../_components/SideNav";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[16rem_1fr] h-full gap-12 ">
      <div className="order-2 lg:order-1 ">
        <SideNav />
      </div>
      <div className="order-1 lg:order-1 py-1 z-0">{children}</div>
    </div>
  );
}

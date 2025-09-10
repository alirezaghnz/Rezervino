import SideNav from "../_components/SideNav";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNav />
      <div className="py-1">{children}</div>
    </div>
  );
}

import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-80">
      <Spinner />
    </div>
  );
}

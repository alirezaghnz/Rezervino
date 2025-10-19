import { getVillas } from "../_lib/data-supabase";
import HomeCart from "./HomeCart";

export default async function HomeList() {
  const villa = await getVillas();

  const sliceVilla = villa.slice(0, 4);
  return (
    <>
      <div className="relative z-10 backdrop-blur-md rounded-md bg-white/10 px-2 py-5 text-center mt-10 flex flex-col gap-2 justify-center items-center ">
        <h1 className="text-3xl">پر رزرو ترین اقامتگاها</h1>
        <div className="border w-[300px]"></div>

        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
          {sliceVilla.map((villa: any) => (
            <HomeCart villa={villa} key={villa.id} />
          ))}
        </div>
      </div>
    </>
  );
}

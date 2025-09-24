import Rezervation from "@/app/_components/Rezervation";
import ShowMore from "@/app/_components/ShowMore";
import Spinner from "@/app/_components/Spinner";
import { getVilla, getVillas } from "@/app/_lib/data-supabase";
import { EyeSlashIcon, MapIcon, UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Suspense } from "react";

//for generate dynamic metaData title
export async function generateMetadata({ params }: any) {
  const { name } = await getVilla(params.villaId);
  return { title: `ویلا ${name}` };
}
// static villaId route for better performance
export async function generateStaticParams() {
  const villas = getVillas();
  const id = (await villas).map((villa) => ({
    villaId: String(villa.id),
  }));
  console.log(id);
  return id;
}

export default async function Page({ params }: any) {
  const villa = await getVilla(params.villaId);

  const { name, maxCapacity, image, description } = villa;
  return (
    <div>
      <div className="max-w-6xl mx-auto mt-8 bg-primary-800 rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_4fr] gap-8 lg:gap-20 py-3 px-4 lg:py-3 lg:px-10 mb-8 lg:mb-24">
          <div className="relative w-full h-48 lg:h-auto lg:scale-[1.2] lg:-translate-x-3">
            <Image
              src={image}
              fill
              className="object-cover rounded-lg "
              alt={`ویلا ${name}`}
            />
          </div>
          <div className="px-2 lg:px-0">
            <h3 className="text-accent-600 font-black text-2xl mb-5 bg-primary-800 p-4 rounded lg:translate-x-[284px] lg:w-[150%] lg:p-4 lg:pb-2">
              ویلا {name}
            </h3>
            <p className="text-xl text-primary-200 mb-10">
              {" "}
              <ShowMore>{description}</ShowMore>
            </p>
            <ul className="flex flex-col gap-4 mb-7">
              <li className="flex gap-3 items-center">
                <UserIcon className="h-5 w-5 text-primary-100" />
                <span className="text-lg">
                  برای حداکثر <span className="font-bold">{maxCapacity}</span>{" "}
                  مهمان
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <MapIcon className="h-5 w-5 text-primary-100" />
                <span className="text-xl">
                  موقعیت مکانی در دل <span className="font-bold">{name}</span>{" "}
                  مازندران
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <EyeSlashIcon className="h-5 w-5 text-primary-100" />
                <span className="text-lg"> به همراه بیمه 100% مهمانان</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-5xl text-center text-primary-500 mb-4 rounded-lg py-3">
          رزرو ویلا
        </h2>
        <Suspense fallback={<Spinner />}>
          <Rezervation villa={villa} />
        </Suspense>
      </div>
    </div>
  );
}

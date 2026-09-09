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
      <section className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_4fr] gap-8 lg:gap-20 py-3 px-4 lg:py-3 lg:px-10 mb-8 lg:mb-24">
          <div className="relative h-[200px] lg:h-[500px]">
            <Image
              src={image}
              fill
              alt={`ویلا ${name}`}
              className="object-cover"
            />
          </div>
          <div className="px-2 lg:px-0">
            <h1 className="text-4xl font-extrabold text-slate-900">
              ویلا {name}
            </h1>
            <div className="mt-8 prose prose-slate max-w-none">
              <ShowMore>{description}</ShowMore>
            </div>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              <li className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <UserIcon className="h-5 w-5 text-sky-500" />
                <span className="text-lg">
                  برای حداکثر <span className="font-bold">{maxCapacity}</span>{" "}
                  مهمان
                </span>
              </li>
              <li className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <MapIcon className="h-5 w-5 text-sky-500" />
                <span className="text-xl">
                  موقعیت مکانی در دل <span className="font-bold">{name}</span>{" "}
                  مازندران
                </span>
              </li>
              <li className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <EyeSlashIcon className="h-5 w-5 text-sky-500" />
                <span className="text-lg"> به همراه بیمه 100% مهمانان</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
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

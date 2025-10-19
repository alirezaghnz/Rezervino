import Image from "next/image";
import Link from "next/link";

export default function HomeCart({ villa }) {
  const { id, name, regularPrice, maxCapacity, image } = villa;
  return (
    <div
      className="grid px-10 text-primary-950 rounded-md py-3  gap-2 "
      key={villa.id}
    >
      <Image
        src={image}
        height={200}
        width={300}
        alt={name}
        className="rounded-sm object-cover"
      />
      <div className="flex flex-col  gap-[2px] border-black h-[55px]">
        <span className="text-primary-100 py-1 bg-black text-xl rounded-r-sm translate-x-8 translate-y-[-280px]  lg:translate-y-[-355px] ">
          نام ویلا: {name}
        </span>
        <span className="bg-accent-500 py-[2px] text-primary-100 text-md rounded-r-sm translate-x-8 translate-y-[-278px] lg:translate-y-[-355px]">
          ظرفیت : حداکثر {maxCapacity} مهمان
        </span>
        <p className=" bg-black  text-primary-50 text-sm py-1 translate-y-[-100px] ">
          {regularPrice} تومان / برای هر شب
        </p>
        <Link
          href={`/villas/${id}`}
          className=" py-2 mt-2 bg-primary-950 text-primary-50 rounded-sm translate-y-[-95px]"
        >
          جزئیات بیشتر/ رزرو
        </Link>
      </div>
    </div>
  );
}

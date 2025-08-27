import type { Metadata } from "next";

import "@/app/_styles/globals.css";

import { Vazirmatn } from "@next/font/google";
import Header from "./_components/Header";

const vazir = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
});

//console.log(vazir);

export const metadata: Metadata = {
  title: { template: "%s | رزروینو", default: "خوش آمدید | رزروینو" },
  description: "رزرو ویلا در بهترین شهرهای ایران",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa">
      <body
        className={`${vazir.className} bg-primary-700 text-primary-100 min-h-screen flex flex-col antialiased`}
      >
        <Header />
        <div className="flex-1 px-5 py-7">
          <main className="max-w-xl mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}

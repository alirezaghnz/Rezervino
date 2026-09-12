import type { Metadata } from "next";

import "@/app/_styles/globals.css";

import { Vazirmatn } from "next/font/google";
import Header from "./_components/Header";
import { RezervationProvider } from "./_context/RezervationContext";

const vazir = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | رزروینو",
    default: "خوش آمدید | رزروینو",
  },
  description: "رزرو ویلا در بهترین شهرهای ایران",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa">
      <body
        className={`           ${vazir.className}
          min-h-screen
          bg-slate-50
          text-slate-900
          antialiased
        `}
      >
        {" "}
        <Header />
        <div className="flex-1 px-8 py-12 ">
          <main className="w-full">
            <RezervationProvider>{children}</RezervationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}

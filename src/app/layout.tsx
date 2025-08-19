import type { Metadata } from "next";
import "./globals.css";
import { Vazirmatn } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const vazir = Vazirmatn({ subsets: ["arabic"], weight: ["400","600","800"] });

export const metadata: Metadata = {
  title: "Darolid | دارولید",
  description: "فروش آنلاین محصولات سلامت (غیردارویی) با ارسال سریع و مشاوره داروساز.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazir.className}>
        <Header />
        <main className="mx-auto max-w-6xl p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

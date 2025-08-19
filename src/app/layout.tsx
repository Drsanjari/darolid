import type { Metadata } from "next";
import "./globals.css";
import { Vazirmatn } from "next/font/google";

const vazir = Vazirmatn({ subsets: ["arabic"], weight: ["400","600","800"] });

export const metadata: Metadata = {
  title: "Darolid | دارولید",
  description: "دارولید - فروش آنلاین محصولات سلامت (غیردارویی) با تحویل سریع.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazir.className}>{children}</body>
    </html>
  );
}

"use client";
import { useEffect, useState } from "react";

const slides = [
  { id: 1, title: "ارسال سریع شهری", desc: "تحویل در همان روز برای سفارش‌های تایید‌شده.", bg: "from-[#00B8D9]/15 to-[#27AE60]/15" },
  { id: 2, title: "محصولات اصل", desc: "اصالت کالا با ضمانت بازگشت.", bg: "from-[#27AE60]/15 to-[#00B8D9]/15" },
  { id: 3, title: "مشاوره داروساز", desc: "پرسش و پاسخ قبل از خرید.", bg: "from-[#00B8D9]/15 to-transparent" },
];

export default function HeroCarousel() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 3500);
    return () => clearInterval(t);
  }, []);
  const s = slides[idx];

  return (
    <section className={`section p-8 bg-gradient-to-br ${s.bg} flex items-center justify-between gap-6`}>
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">{s.title}</h1>
        <p className="text-slate-600">{s.desc}</p>
      </div>
      <div className="hidden md:block text-6xl">🌿</div>
    </section>
  );
}

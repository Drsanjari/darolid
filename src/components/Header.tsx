// src/components/Header.tsx
"use client";

import Link from "next/link";
import MegaMenu from "./MegaMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <nav className="container py-3 flex items-center gap-4">
        {/* لوگو و برند */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Darolid" className="h-8 w-auto" />
          <span className="text-lg font-extrabold text-slate-900 hidden sm:inline">
            دارولید
          </span>
        </Link>

        {/* مگا‌منو (دسکتاپ) + منوی کشویی (موبایل) */}
        <div className="flex-1">
          <MegaMenu />
        </div>

        {/* جستجو (دسکتاپ) */}
        <div className="relative hidden md:block">
          <input
            className="input pl-9 pr-3 py-2"
            placeholder="جستجو (مثلاً: ملاتونین)"
            aria-label="جستجو"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
            🔎
          </span>
        </div>

        {/* تماس/CTA */}
        <Link href="/contact" className="btn btn-outline">
          تماس
        </Link>
      </nav>
    </header>
  );
}

"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NAV } from "@/data/nav";

export default function MegaMenu() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpenIndex(null);
    };
    document.addEventListener("mousemove", onDoc);
    return () => document.removeEventListener("mousemove", onDoc);
  }, []);

  return (
    <div ref={ref} className="w-full">
      {/* دسکتاپ */}
      <div className="hidden md:flex items-center gap-5">
        {NAV.map((item, i) => {
          const hasMega = !!item.cols?.length;
          return (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() => setOpenIndex(hasMega ? i : null)}
              onMouseLeave={() => setOpenIndex((prev) => (prev === i ? null : prev))}
            >
              <Link href={item.href || "#"} className="text-sm text-slate-700 hover:text-slate-900 py-2 inline-block">
                {item.title}
              </Link>

              {hasMega && openIndex === i && (
                <div className="absolute right-0 mt-2 w-[820px] rounded-2xl border border-slate-200 bg-white shadow-xl p-5 grid grid-cols-3 gap-5 z-40">
                  {item.cols!.map((col) => (
                    <div key={col.title} className="space-y-2">
                      <div className="text-[13px] font-bold text-slate-900">{col.title}</div>
                      <ul className="space-y-1">
                        {col.links.map((l) => (
                          <li key={l.href}>
                            <Link href={l.href} className="text-[13px] text-slate-600 hover:text-brand-primary">{l.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* موبایل */}
      <div className="md:hidden">
        <button className="btn btn-outline text-sm" onClick={() => setMobileOpen((s) => !s)}>
          منو
        </button>
        {mobileOpen && (
          <div className="mt-3 rounded-2xl border bg-white p-3 shadow-soft space-y-2">
            {NAV.map((item) => (
              <details key={item.title} className="border rounded-xl p-2">
                <summary className="cursor-pointer text-sm">{item.title}</summary>
                <div className="pt-2">
                  {item.cols ? item.cols.map((c) => (
                    <div key={c.title} className="mb-2">
                      <div className="text-xs font-bold text-slate-900">{c.title}</div>
                      <ul className="pl-3">
                        {c.links.map((l) => (
                          <li key={l.href} className="text-xs py-0.5">
                            <Link href={l.href} className="text-slate-600 hover:text-brand-primary">{l.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )) : <Link href={item.href || "#"} className="text-sm">مشاهده</Link>}
                </div>
              </details>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

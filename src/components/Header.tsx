import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
      <nav className="mx-auto max-w-6xl p-3 flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Darolid" className="h-8 w-auto" />
          <span className="text-lg font-extrabold text-brand-dark hidden sm:inline">دارولید</span>
        </Link>

        <Link href="/categories" className="text-sm hover:text-brand-dark">دسته‌ها</Link>
        <Link href="/bestsellers" className="text-sm hover:text-brand-dark">پرفروش‌ها</Link>
        <Link href="/consult" className="text-sm hover:text-brand-dark">رزرو نسخه/مشاوره</Link>

        <div className="ml-auto relative w-64 hidden md:block">
          <input
            className="w-full rounded-xl2 border px-3 py-2 pr-9 focus:outline-none focus:ring-2 focus:ring-brand-primary"
            placeholder="جستجو (مثلاً: ملاتونین)"
          />
          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-brand-dark/60">🔎</span>
        </div>

        <Link href="/contact" className="text-sm hover:text-brand-dark">تماس</Link>
      </nav>
    </header>
  );
}

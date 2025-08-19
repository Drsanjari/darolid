export default function Home() {
  return (
    <main className="mx-auto max-w-6xl p-4 space-y-6">
      <header className="flex items-center justify-between gap-3">
        <div className="text-2xl font-extrabold">دارولید</div>
        <input
          className="border rounded px-3 py-2 w-72"
          placeholder="جستجوی محصول (مثلاً: ملاتونین)"
        />
      </header>

      <section className="rounded border p-5">
        <h2 className="text-xl font-semibold mb-3">دسته‌های محبوب</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          <li className="border rounded p-3">مکمل‌ها</li>
          <li className="border rounded p-3">آرایشی و بهداشتی</li>
          <li className="border rounded p-3">بهداشت فردی</li>
          <li className="border rounded p-3">تجهیزات پزشکی سبک</li>
        </ul>
      </section>

      <section className="rounded border p-5">
        <h2 className="text-xl font-semibold mb-2">ارسال سریع (پیک شهری)</h2>
        <p className="text-sm text-gray-600">
          سفارش‌های داخل شهر با پیک موتوری دارولید ارسال می‌شود. امروز ۳ بازه زمانی فعال است.
        </p>
      </section>

      <section className="rounded border p-5">
        <h2 className="text-xl font-semibold mb-2">مجله سلامت</h2>
        <ul className="list-disc pr-5 text-sm">
          <li>راهنمای خرید ملاتونین: دوز و نکات ایمنی</li>
          <li>امگا-۳: مزایا و روش مصرف</li>
          <li>زینک برای پوست و مو</li>
        </ul>
      </section>

      <footer className="text-xs text-gray-500">
        © {new Date().getFullYear()} دارولید — فروش فقط اقلام غیردارویی مجاز. برای دارو: رزرو نسخه/مشاوره.
      </footer>
    </main>
  );
}

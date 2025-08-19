type FAQ = { q: string; a: string };
const faqs: FAQ[] = [
  { q: "ملاتونین چیست؟", a: "هورمونی است که به تنظیم چرخه خواب کمک می‌کند و به صورت مکمل هم عرضه می‌شود." },
  { q: "دوز رایج چقدر است؟", a: "معمولاً 1 تا 3 میلی‌گرم قبل خواب؛ شروع با دوز کم و افزایش تدریجی." },
  { q: "چه کسانی نباید مصرف کنند؟", a: "زنان باردار/شیرده و افراد با بیماری‌های خاص باید قبل از مصرف با پزشک مشورت کنند." },
];

export default function MelatoninLanding() {
  const products = [
    { title: "ملاتونین 3mg", price: 185000, brand: "X" },
    { title: "ملاتونین 5mg", price: 215000, brand: "Y" },
    { title: "ملاتونین + B6", price: 245000, brand: "Z" },
  ];
  return (
    <main className="mx-auto max-w-6xl p-4 space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-extrabold">ملاتونین: راهنمای خرید و مصرف</h1>
        <p className="text-sm text-gray-600">
          خلاصه‌ای از کاربرد، دوز متداول و نکات ایمنی—به‌همراه محصولات منتخب.
        </p>
      </header>

      <section className="grid md:grid-cols-3 gap-4">
        {products.map((p) => (
          <div key={p.title} className="border rounded p-4 space-y-2">
            <div className="h-32 bg-gray-100 rounded" />
            <div className="font-semibold">{p.title}</div>
            <div className="text-sm text-gray-500">{p.brand}</div>
            <div className="font-bold">{p.price.toLocaleString("fa-IR")} تومان</div>
            <button className="w-full rounded px-3 py-2 border">افزودن به سبد</button>
          </div>
        ))}
      </section>

      <section className="rounded border p-4">
        <h2 className="text-xl font-semibold mb-3">پرسش‌های پرتکرار</h2>
        <div className="space-y-2">
          {faqs.map((f) => (
            <details key={f.q} className="border rounded p-3">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="text-sm text-gray-700 mt-2">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <aside className="text-xs text-gray-500">
        هشدار: اطلاعات فوق جایگزین توصیهٔ پزشک/داروساز نیست. پیش از مصرف با داروساز مشورت کنید.
      </aside>
    </main>
  );
}

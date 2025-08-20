export default function MelatoninLanding() {
  const products = [
    { title: "ملاتونین 3mg", price: 185000, brand: "SleepWell" },
    { title: "ملاتونین 5mg", price: 215000, brand: "CalmNight" },
    { title: "ملاتونین + B6", price: 245000, brand: "NeuroRest" },
  ];
  const faqs = [
    { q: "ملاتونین چیست؟", a: "هورمونی برای تنظیم خواب؛ به‌صورت مکمل هم عرضه می‌شود." },
    { q: "دوز رایج چقدر است؟", a: "معمولاً 1 تا 3 میلی‌گرم قبل خواب؛ از کم شروع کنید." },
    { q: "چه کسانی نباید مصرف کنند؟", a: "بارداری/شیردهی یا بیماری خاص → با پزشک/داروساز مشورت شود." },
  ];

  return (
    <main className="container my-8 space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">ملاتونین: راهنمای خرید و مصرف</h1>
        <p className="text-slate-600">خلاصه‌ی کاربرد، دوز و نکات ایمنی—به‌همراه محصولات منتخب.</p>
      </header>

      <section className="grid md:grid-cols-3 gap-5">
        {products.map(p => (
          <article key={p.title} className="card p-4">
            <div className="h-32 bg-slate-100 rounded-xl2 mb-3" />
            <div className="text-sm text-slate-500">{p.brand}</div>
            <h3 className="font-semibold">{p.title}</h3>
            <div className="font-bold mt-1">{p.price.toLocaleString("fa-IR")} تومان</div>
            <a className="btn btn-primary mt-3 w-full">افزودن به سبد</a>
          </article>
        ))}
      </section>

      <section className="section p-5">
        <h2 className="text-xl font-bold mb-3">پرسش‌های پرتکرار</h2>
        <div className="space-y-2">
          {faqs.map(f => (
            <details key={f.q} className="border rounded-xl2 p-3">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="text-sm text-slate-700 mt-2">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="text-[11px] text-slate-500 mt-4">
          هشدار: اطلاعات فوق جایگزین توصیهٔ پزشک/داروساز نیست.
        </p>
      </section>
    </main>
  );
}

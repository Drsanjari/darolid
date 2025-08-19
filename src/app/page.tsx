import Button from "@/components/ui/Button";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const bestsellers = [
    { title: "ملاتونین 3mg", price: 185000, brand: "X", tags: ["خواب بهتر"] },
    { title: "امگا-۳ 1000mg", price: 320000, brand: "Y", tags: ["قلب و عروق"] },
    { title: "زینک 25mg", price: 210000, brand: "Z", tags: ["پوست و مو"] },
  ];

  const cats = [
    { title: "مکمل‌ها", href: "/categories" },
    { title: "آرایشی و بهداشتی", href: "/categories" },
    { title: "بهداشت فردی", href: "/categories" },
    { title: "تجهیزات پزشکی سبک", href: "/categories" },
  ];

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="rounded-xl2 border bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 space-y-3">
          <h1 className="text-2xl md:text-3xl font-extrabold text-brand-dark">
            دارولید — همراه مطمئن سلامت شما
          </h1>
          <p className="text-gray-600">
            سفارش آنلاین محصولات سلامت (غیردارویی) با ارسال سریع پیکی و مشاورهٔ داروساز.
          </p>
          <div className="flex gap-3">
            <Button size="lg">مشاهده پرفروش‌ها</Button>
            <Button size="lg" variant="outline">رزرو نسخه/مشاوره</Button>
          </div>
        </div>
        <img src="/logo.svg" alt="Darolid" className="w-28 h-auto md:w-36" />
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-xl font-bold mb-3">دسته‌های محبوب</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {cats.map((c) => (
            <a key={c.title} href={c.href} className="rounded-xl2 border p-4 text-center hover:shadow-soft">
              {c.title}
            </a>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-bold">پرفروش‌های این هفته</h2>
          <a className="text-sm text-brand-dark hover:underline" href="/bestsellers">مشاهده همه</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {bestsellers.map((p) => <ProductCard key={p.title} {...p} />)}
        </div>
      </section>

      {/* Consult CTA */}
      <section className="rounded-xl2 border p-6 flex flex-col md:flex-row items-center gap-4">
        <div className="flex-1">
          <h3 className="font-semibold text-lg">رزرو نسخه یا مشاوره داروساز</h3>
          <p className="text-sm text-gray-600 mt-1">
            تصویر نسخه یا کد نسخه الکترونیک را ارسال کنید؛ داروساز با شما تماس می‌گیرد.
          </p>
        </div>
        <a href="/consult">
          <Button size="lg">شروع رزرو نسخه</Button>
        </a>
      </section>

      {/* Blog preview (placeholder) */}
      <section>
        <h2 className="text-xl font-bold mb-3">مجله سلامت</h2>
        <ul className="grid md:grid-cols-3 gap-3 text-sm">
          <li className="rounded-xl2 border p-4 hover:shadow-soft">راهنمای خرید ملاتونین</li>
          <li className="rounded-xl2 border p-4 hover:shadow-soft">امگا-۳ و سلامت قلب</li>
          <li className="rounded-xl2 border p-4 hover:shadow-soft">زینک و تقویت مو</li>
        </ul>
      </section>
    </div>
  );
}

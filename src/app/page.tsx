import Button from "@/components/ui/Button";
import ProductCard from "@/components/ProductCard";
import HeroCarousel from "@/components/HeroCarousel";
// ...
<div className="space-y-12">
  <HeroCarousel />
  
<div className="h-14 bg-brand-primary text-white flex items-center justify-center rounded-xl2">
  تست Tailwind
</div>
export default function Home() {
  const bestsellers = [
    { title: "ملاتونین 3mg", price: 185000, brand: "SleepWell", rating: 4, badge: "پرفروش" },
    { title: "امگا-۳ 1000mg", price: 320000, brand: "CardioX", rating: 5 },
    { title: "زینک 25mg", price: 210000, brand: "DermaPlus", rating: 4 },
  ];

  const cats = [
    { title: "مکمل‌ها", href: "/categories" },
    { title: "آرایشی و بهداشتی", href: "/categories" },
    { title: "بهداشت فردی", href: "/categories" },
    { title: "تجهیزات پزشکی سبک", href: "/categories" },
  ];

  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-grad pointer-events-none"></div>
        <div className="container relative py-10 md:py-16 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              دارولید — همراه مطمئن سلامت شما
            </h1>
            <p className="text-slate-600 max-w-xl">
              سفارش آنلاین محصولات سلامت (غیردارویی) با ارسال سریع پیکی و مشاوره داروساز. همین حالا شروع کنید.
            </p>
            <div className="flex gap-3">
              <a href="/bestsellers" className="btn btn-primary">مشاهده پرفروش‌ها</a>
              <a href="/consult" className="btn btn-outline">رزرو نسخه/مشاوره</a>
            </div>
          </div>
          <div className="flex-1">
            <div className="section p-6 text-center">
              <img src="/logo.svg" alt="Darolid" className="w-36 h-auto mx-auto" />
              <p className="mt-3 text-sm text-slate-600">
                ارسال سریع شهری • محصولات اصل • مشاوره تخصصی داروساز
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container">
        <h2 className="h-title mb-4">دسته‌های محبوب</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cats.map((c) => (
            <a key={c.title} href={c.href}
               className="section p-4 text-center hover:shadow-card transition">
              <div className="text-2xl mb-2">🩺</div>
              <div className="font-medium">{c.title}</div>
            </a>
          ))}
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="container">
        <div className="flex items-center justify-between mb-4">
          <h2 className="h-title">پرفروش‌های این هفته</h2>
          <a className="text-sm" href="/bestsellers">مشاهده همه</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {bestsellers.map((p) => (
            <ProductCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      {/* CONSULT CTA */}
      <section className="container">
        <div className="section p-6 md:p-8 flex flex-col md:flex-row items-center gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-900">رزرو نسخه یا مشاوره داروساز</h3>
            <p className="text-sm text-slate-600 mt-1">
              تصویر نسخه یا کد نسخه الکترونیک را ارسال کنید؛ داروساز با شما تماس می‌گیرد.
            </p>
          </div>
          <a href="/consult" className="btn btn-primary">شروع رزرو نسخه</a>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="container">
        <h2 className="h-title mb-4">مجله سلامت</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {["راهنمای خرید ملاتونین", "امگا-۳ و سلامت قلب", "زینک و تقویت مو"].map(t => (
            <article key={t} className="section p-4 hover:shadow-card transition">
              <h4 className="font-semibold text-slate-900">{t}</h4>
              <p className="text-sm text-slate-600 mt-1">
                خلاصه‌ای کوتاه از مطلب برای جذب کاربر و بهبود سئو...
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

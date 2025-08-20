type Product = { id: number; title: string; brand: string; price: number };

const mock: Product[] = [
  { id: 1, title: "امگا-۳ 1000mg", brand: "CardioX", price: 320000 },
  { id: 2, title: "ملاتونین 3mg", brand: "SleepWell", price: 185000 },
  { id: 3, title: "زینک 25mg", brand: "DermaPlus", price: 210000 },
];

export default function CategoryPage({ params }: { params: { slug: string[] } }) {
  const title = (params.slug || []).join(" / ") || "دسته‌بندی";
  return (
    <main className="container my-8 space-y-5">
      <h1 className="h-title">{title}</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {mock.map(p => (
          <article key={p.id} className="card p-4">
            <div className="h-32 bg-slate-100 rounded-xl2 mb-3" />
            <div className="text-xs text-slate-500">{p.brand}</div>
            <h3 className="font-semibold">{p.title}</h3>
            <div className="font-bold mt-1">{p.price.toLocaleString("fa-IR")} تومان</div>
            <a className="btn btn-primary mt-3 w-full">افزودن به سبد</a>
          </article>
        ))}
      </div>
    </main>
  );
}

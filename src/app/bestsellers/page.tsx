import ProductCard from "@/components/ProductCard";

export default function Bestsellers() {
  const items = [
    { title: "ملاتونین 3mg", price: 185000, brand: "X" },
    { title: "امگا-۳ 1000mg", price: 320000, brand: "Y" },
    { title: "زینک 25mg", price: 210000, brand: "Z" },
  ];
  return (
    <main className="mx-auto max-w-6xl p-4">
      <h1 className="text-2xl font-bold mb-4">پرفروش‌های دارولید</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {items.map((it) => <ProductCard key={it.title} {...it} />)}
      </div>
    </main>
  );
}

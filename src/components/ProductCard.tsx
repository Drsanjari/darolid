type Props = { title: string; price: number; brand?: string; };
export default function ProductCard({ title, price, brand }: Props) {
  return (
    <div className="border rounded p-4 space-y-2">
      <div className="h-32 bg-gray-100 rounded" />
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-gray-500">{brand ?? "بدون برند"}</div>
      <div className="font-bold">{price.toLocaleString("fa-IR")} تومان</div>
      <button className="w-full rounded px-3 py-2 border">افزودن به سبد</button>
    </div>
  );
}

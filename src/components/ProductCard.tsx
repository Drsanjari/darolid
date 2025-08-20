import Button from "./ui/Button";

type Props = {
  title: string;
  price: number;
  brand?: string;
  imgUrl?: string;
  rating?: number; // 0..5
  badge?: string;  // مثل: تخفیف، پرفروش
};

function Stars({ n = 0 }: { n?: number }) {
  const full = Math.round(n);
  return (
    <div className="text-amber-500 text-sm" aria-label={`امتیاز ${full} از 5`}>
      {"★★★★★".slice(0, full)}<span className="text-slate-300">{"★★★★★".slice(full)}</span>
    </div>
  );
}

export default function ProductCard({ title, price, brand, imgUrl, rating = 4, badge }: Props) {
  return (
    <article className="card overflow-hidden hover:-translate-y-0.5 transition">
      <div className="relative aspect-[4/3] w-full bg-slate-100">
        {imgUrl ? <img src={imgUrl} alt={title} className="w-full h-full object-cover" /> : null}
        {badge && (
          <span className="absolute top-3 left-3 rounded-full bg-brand-primary/90 text-white text-[11px] px-2 py-1 shadow-soft">
            {badge}
          </span>
        )}
      </div>
      <div className="p-4 space-y-2">
        <div className="text-xs text-slate-500">{brand ?? "بدون برند"}</div>
        <h3 className="font-semibold text-slate-900 leading-6">{title}</h3>
        <Stars n={rating} />
        <div className="flex items-center justify-between pt-2">
          <div className="font-bold text-slate-900">
            {price.toLocaleString("fa-IR")} <span className="text-xs font-normal text-slate-500">تومان</span>
          </div>
          <Button size="sm">افزودن به سبد</Button>
        </div>
      </div>
    </article>
  );
}

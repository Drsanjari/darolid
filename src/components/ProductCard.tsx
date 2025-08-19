import Button from "./ui/Button";
import Badge from "./ui/Badge";

type Props = {
  title: string;
  price: number;
  brand?: string;
  tags?: string[];
  imgUrl?: string;
};

export default function ProductCard({ title, price, brand, tags = [], imgUrl }: Props) {
  return (
    <article className="rounded-xl2 border bg-white p-4 shadow-soft hover:shadow-md transition">
      <div className="aspect-[4/3] w-full overflow-hidden rounded-xl2 bg-gray-100">
        {imgUrl ? <img src={imgUrl} alt={title} className="w-full h-full object-cover" /> : null}
      </div>
      <div className="mt-3 space-y-1">
        <div className="text-sm text-gray-500">{brand ?? "بدون برند"}</div>
        <h3 className="font-semibold leading-6">{title}</h3>
        <div className="flex gap-1 flex-wrap">
          {tags.map((t) => <Badge key={t}>{t}</Badge>)}
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="font-bold text-brand-dark">
            {price.toLocaleString("fa-IR")} <span className="text-xs font-normal">تومان</span>
          </div>
          <Button size="sm">افزودن به سبد</Button>
        </div>
      </div>
    </article>
  );
}

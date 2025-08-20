export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white">
      <div className="container py-6 text-xs text-slate-600 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} دارولید — فروش فقط اقلام غیردارویی مجاز. برای دارو: رزرو نسخه/مشاوره.</p>
        <p className="flex gap-4">
          <a href="/policies">قوانین</a>
          <a href="/about">درباره ما</a>
          <a href="/contact">تماس</a>
        </p>
      </div>
    </footer>
  );
}

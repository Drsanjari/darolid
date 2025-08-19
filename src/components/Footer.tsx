export default function Footer() {
  return (
    <footer className="mt-10 border-t">
      <div className="mx-auto max-w-6xl p-4 text-xs text-gray-500 space-y-2">
        <p>© {new Date().getFullYear()} دارولید — فروش فقط اقلام غیردارویی مجاز. برای دارو: رزرو نسخه/مشاوره.</p>
        <p className="flex gap-4">
          <a className="hover:text-brand-dark" href="/policies">قوانین و مقررات</a>
          <a className="hover:text-brand-dark" href="/about">درباره ما</a>
          <a className="hover:text-brand-dark" href="/contact">تماس با ما</a>
        </p>
      </div>
    </footer>
  );
}

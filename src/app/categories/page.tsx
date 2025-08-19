export default function Categories() {
  const cats = ["مکمل‌ها","آرایشی و بهداشتی","بهداشت فردی","تجهیزات پزشکی سبک","مادر و کودک"];
  return (
    <main className="mx-auto max-w-6xl p-4">
      <h1 className="text-2xl font-bold mb-4">دسته‌بندی‌ها</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {cats.map((c) => (
          <div key={c} className="border rounded p-4">{c}</div>
        ))}
      </div>
    </main>
  );
}

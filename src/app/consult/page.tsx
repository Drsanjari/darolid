export default function Consult() {
  return (
    <main className="mx-auto max-w-3xl p-4 space-y-4">
      <h1 className="text-2xl font-bold">رزرو نسخه / مشاوره داروساز</h1>
      <p className="text-sm text-gray-600">
        لطفاً تصویر نسخه یا کد نسخه الکترونیک را بارگذاری کنید. داروساز با شما تماس می‌گیرد.
      </p>
      <form className="space-y-3">
        <input type="file" className="block border rounded p-2 w-full" />
        <input type="text" placeholder="شماره تماس" className="border rounded p-2 w-full" />
        <select className="border rounded p-2 w-full">
          <option>بازه تماس امروز (10-12)</option>
          <option>بازه تماس امروز (16-18)</option>
          <option>بازه تماس فردا (10-12)</option>
        </select>
        <button className="rounded px-4 py-2 bg-black text-white">ارسال درخواست</button>
      </form>
      <p className="text-xs text-gray-500">
        یادآوری: فروش آنلاین دارو انجام نمی‌شود؛ صرفاً مشاوره و تحویل قانونی/حضوری.
      </p>
    </main>
  );
}

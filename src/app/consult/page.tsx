"use client";
import { useState } from "react";

export default function Consult() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true); setOk(null); setErr(null);

    const form = e.currentTarget;
    const fd = new FormData(form);

    try {
      const res = await fetch("/api/consult", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "خطای نامشخص");
      setOk("درخواست شما ثبت شد. داروساز با شما تماس می‌گیرد.");
      form.reset();
    } catch (e:any) {
      setErr(e.message || "ارسال ناموفق بود");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container max-w-2xl my-8 space-y-4">
      <h1 className="text-2xl font-extrabold text-slate-900">رزرو نسخه / مشاوره داروساز</h1>
      <p className="text-sm text-slate-600">تصویر نسخه یا کُد نسخه الکترونیک را بارگذاری کنید.</p>

      <form onSubmit={onSubmit} className="section p-5 space-y-4">
        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className="text-xs text-slate-600">نام و نام خانوادگی</label>
            <input name="name" required className="input mt-1 px-3 py-2" />
          </div>
          <div>
            <label className="text-xs text-slate-600">شماره تماس</label>
            <input name="phone" required className="input mt-1 px-3 py-2" placeholder="09xxxxxxxxx" />
          </div>
        </div>

        <div>
          <label className="text-xs text-slate-600">کُد نسخه الکترونیک (اختیاری)</label>
          <input name="rxcode" className="input mt-1 px-3 py-2" />
        </div>

        <div>
          <label className="text-xs text-slate-600">بارگذاری تصویر نسخه (jpg/png/pdf)</label>
          <input name="file" type="file" accept=".jpg,.jpeg,.png,.pdf" className="mt-2" />
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className="text-xs text-slate-600">زمان تماس ترجیحی</label>
            <select name="slot" className="input mt-1 px-3 py-2">
              <option>امروز 10-12</option>
              <option>امروز 16-18</option>
              <option>فردا 10-12</option>
            </select>
          </div>
          <div>
            <label className="text-xs text-slate-600">توضیحات (اختیاری)</label>
            <input name="note" className="input mt-1 px-3 py-2" placeholder="حساسیت، داروهای مصرفی..." />
          </div>
        </div>

        <button disabled={loading} className="btn btn-primary w-full">
          {loading ? "در حال ارسال..." : "ارسال درخواست"}
        </button>

        {ok && <p className="text-green-600 text-sm">{ok}</p>}
        {err && <p className="text-red-600 text-sm">{err}</p>}

        <p className="text-[11px] text-slate-500">
          فروش آنلاین دارو انجام نمی‌شود؛ صرفاً مشاوره و تحویل قانونی/حضوری.
        </p>
      </form>
    </main>
  );
}

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const name  = String(form.get("name")  || "");
    const phone = String(form.get("phone") || "");
    const rxcode= String(form.get("rxcode")|| "");
    const slot  = String(form.get("slot")  || "");
    const note  = String(form.get("note")  || "");
    const file  = form.get("file") as File | null;

    if (!name || !phone) {
      return NextResponse.json({ error: "نام و شماره تماس الزامی است" }, { status: 400 });
    }

    console.log("[CONSULT]", { name, phone, rxcode, slot, note, file: file?.name });
    return NextResponse.json({ ok: true });
  } catch (e:any) {
    return NextResponse.json({ error: e?.message || "Server error" }, { status: 500 });
  }
}

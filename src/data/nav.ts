export type NavItem = {
  title: string;
  href?: string;
  cols?: { title: string; links: { label: string; href: string }[] }[];
};

export const NAV: NavItem[] = [
  {
    title: "مکمل‌ها",
    href: "/categories/supplements",
    cols: [
      { title: "عمومی", links: [
        { label: "مولتی‌ویتامین آقایان", href: "/categories/supplements/mvm-men" },
        { label: "مولتی‌ویتامین بانوان", href: "/categories/supplements/mvm-women" },
        { label: "امگا-۳", href: "/categories/supplements/omega-3" },
        { label: "کلسیم + D", href: "/categories/supplements/calcium-d" },
      ]},
      { title: "عملکردی", links: [
        { label: "خواب و آرامش (ملاتونین)", href: "/categories/supplements/melatonin" },
        { label: "پوست و مو (بیوتین/زینک)", href: "/categories/supplements/skin-hair" },
        { label: "ایمنی (Vit C/روی)", href: "/categories/supplements/immunity" },
        { label: "ورزشی", href: "/categories/supplements/sport" },
      ]},
      { title: "گروه‌های ویژه", links: [
        { label: "بارداری/شیردهی", href: "/categories/supplements/prenatal" },
        { label: "کودکان", href: "/categories/supplements/kids" },
        { label: "سالمندان", href: "/categories/supplements/seniors" },
      ]},
    ],
  },
  {
    title: "آرایشی و بهداشتی",
    href: "/categories/beauty",
    cols: [
      { title: "پوست", links: [
        { label: "ضدآفتاب", href: "/categories/beauty/sunscreen" },
        { label: "مرطوب‌کننده", href: "/categories/beauty/moisturizer" },
        { label: "ضدجوش/لک", href: "/categories/beauty/acne-spot" },
      ]},
      { title: "مو", links: [
        { label: "شامپو تخصصی", href: "/categories/beauty/shampoo" },
        { label: "تقویت رشد مو", href: "/categories/beauty/hair-growth" },
      ]},
    ],
  },
  {
    title: "بهداشت فردی",
    href: "/categories/personal-care",
    cols: [
      { title: "دهان و دندان", links: [
        { label: "مسواک/نخ دندان", href: "/categories/personal-care/oral" },
        { label: "خمیر دندان", href: "/categories/personal-care/toothpaste" },
      ]},
      { title: "عمومی", links: [
        { label: "آنتی‌باکتریال/ضدعفونی", href: "/categories/personal-care/sanitizer" },
        { label: "ضدتعریق", href: "/categories/personal-care/deo" },
      ]},
    ],
  },
  {
    title: "تجهیزات پزشکی سبک",
    href: "/categories/devices",
    cols: [
      { title: "پرکاربرد", links: [
        { label: "تب‌سنج", href: "/categories/devices/thermometer" },
        { label: "فشارسنج", href: "/categories/devices/bp" },
        { label: "پالس‌اکسیمتر", href: "/categories/devices/pulse-ox" },
      ]},
    ],
  },
  { title: "مجله سلامت", href: "/blog" },
];

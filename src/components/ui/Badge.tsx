export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#00B8D9]/10 text-[#003F5C] text-xs px-2.5 py-1">
      {children}
    </span>
  );
}

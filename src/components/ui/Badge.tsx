export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-brand-primary/10 text-brand-dark text-xs px-2.5 py-1">
      {children}
    </span>
  );
}

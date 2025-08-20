import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2",
  lg: "px-5 py-3 text-base",
};

export default function Button({ variant="primary", size="md", className="", ...props }: Props) {
  const base = "rounded-xl2 transition shadow-soft disabled:opacity-60";
  const styles = {
    primary: "bg-brand-dark text-white hover:opacity-90",
    outline: "border border-brand-dark text-brand-dark bg-white hover:bg-brand-dark/5",
  }[variant];

  return <button className={`${base} ${styles} ${sizes[size]} ${className}`} {...props} />;
}

import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-bravo-navy text-white hover:bg-bravo-blue shadow-sm",
  secondary:
    "bg-[#2eb9c1] text-white hover:bg-bravo-teal shadow-sm",
  light: "bg-white text-bravo-navy hover:bg-off-white",
  gray: "bg-[#b8c1ca] text-bravo-navy hover:bg-[#aab4be]",
  outline:
    "border-2 border-current bg-transparent hover:bg-white/10",
} as const;

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-2xl px-6 py-3.5 text-[0.95rem] font-semibold tracking-tight transition-colors disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}

import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-sage-700 text-white hover:bg-sage-800 active:bg-sage-900",
  secondary:
    "bg-brand-500 text-white hover:bg-brand-600 active:bg-brand-700",
  outline:
    "border-2 border-sage-700 text-sage-700 hover:bg-sage-700 hover:text-white",
  ghost:
    "text-sage-700 hover:bg-sage-50 active:bg-sage-100",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-body font-medium rounded-lg transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const styles = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={styles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

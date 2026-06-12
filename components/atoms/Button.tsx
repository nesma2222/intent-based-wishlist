// components/atoms/Button.tsx
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
}

export default function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-teal-500 text-white hover:bg-teal-600"
      : "bg-teal-50 text-teal-700 hover:bg-teal-100";

  return (
    <button
      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${styles} ${className}`}
      {...props}
    />
  );
}
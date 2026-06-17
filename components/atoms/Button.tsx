import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
}

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const styles = {
    primary: "bg-teal-500 text-white hover:bg-teal-600",
    ghost: "bg-teal-50 text-teal-700 hover:bg-teal-100",
    outline: "border border-teal-500 text-teal-600 hover:bg-teal-50",
  };

  return (
    <button
      className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${styles[variant]} ${className}`}
      {...props}
    />
  );
}
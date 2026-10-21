import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors";

  const variants = {
    default:
      "bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-zinc-700",
    accent:
      "bg-emerald-950/60 text-emerald-300 border border-emerald-800/60",
    outline:
      "bg-transparent text-zinc-400 border border-zinc-800",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

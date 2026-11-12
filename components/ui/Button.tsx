"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children" | "onClick"> {
  variant?: "primary" | "secondary" | "glass" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  href?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "right",
      children,
      href,
      download,
      target,
      rel,
      onClick,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "px-3.5 py-1.5 text-xs font-medium gap-1.5 rounded-lg",
      md: "px-5 py-2.5 text-sm font-medium gap-2 rounded-xl",
      lg: "px-7 py-3.5 text-base font-semibold gap-2.5 rounded-xl",
    };

    const variantClasses = {
      primary:
        "bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white shadow-neon-indigo hover:shadow-[0_0_30px_-2px_rgba(99,102,241,0.6)] border border-indigo-400/30",
      secondary:
        "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-glass-sm hover:shadow-[0_0_25px_-2px_rgba(139,92,246,0.5)] border border-purple-400/30",
      glass:
        "bg-white/[0.06] hover:bg-white/[0.12] text-slate-100 border border-white/10 hover:border-white/20 backdrop-blur-md shadow-glass-sm",
      outline:
        "bg-transparent hover:bg-indigo-500/10 text-indigo-300 hover:text-white border border-indigo-500/40 hover:border-indigo-400",
      ghost: "bg-transparent hover:bg-white/5 text-slate-300 hover:text-white",
    };

    const content = (
      <>
        {icon && iconPosition === "left" && <span className="inline-flex shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="inline-flex shrink-0">{icon}</span>}
      </>
    );

    const baseClasses = cn(
      "inline-flex items-center justify-center transition-all duration-200 outline-none select-none active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1120]",
      sizeClasses[size],
      variantClasses[variant],
      className
    );

    if (href) {
      return (
        <motion.a
          href={href}
          download={download}
          target={target}
          rel={rel}
          onClick={onClick}
          className={baseClasses}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={baseClasses}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        {...props}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

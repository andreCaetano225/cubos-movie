import React from "react";
import { cn } from "../lib/utils";

interface ButtonAppProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
}

export const ButtonApp = ({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}: ButtonAppProps) => {
  {
    const baseStyle =
      "transition p-2 px-4 rounded-[3px] cursor-pointer  text-white";

    const variants: Record<typeof variant, string> = {
      primary: "bg-primary hover:bg-primary-hover",
      secondary: "bg-secondary hover:bg-secondary-hover",
      danger: "bg-red-600 hover:bg-red-700",
    };

    return (
      <button
        type={type}
        className={cn(baseStyle, variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
};

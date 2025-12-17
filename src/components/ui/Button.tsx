import * as React from "react";
import { cn } from "./utils";

type ButtonVariant =
  | "default"
  | "secondary"
  | "outline"
  | "ghost"
  | "destructive";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({
  variant = "default",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center h-10 gap-2 cursor-pointer px-2.5 py-1.5 rounded-(--radius)  hover:shadow-2xs text-sm font-medium transition-all duration-500 ease-in-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "disabled:pointer-events-none disabled:opacity-50",

        variant === "default" &&
          "bg-linear-to-br from-primary to-secondary text-primary-foreground hover:from-primary/10 hover:to-secondary/10 hover:text-primary hover:border-primary/30 border-2",

        variant === "secondary" &&
          "bg-primary/70 text-primary-foreground hover:bg-primary/80 border-2 hover:border-primary/30",

        variant === "ghost" && "hover:bg-muted hover:text-foreground",

        variant === "outline" &&
          "hover:bg-muted hover:text-foreground border border-border",

        variant === "destructive" &&
          "bg-destructive/10 text-destructive hover:bg-destructive/15 border-destructive/30 border",

        className
      )}
      {...props}
    />
  );
}

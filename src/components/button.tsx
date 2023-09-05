import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "outline" | "ghost";
}

const button = tv({
  base: "rounded-lg transition-colors disabled:opacity-50 disabled:hover:bg-background disabled:cursor-not-allowed",
  variants: {
    variant: {
      outline: "border hover:bg-muted",
      ghost: "hover:bg-muted hover:bg-muted",
    },
  },
});

export function Button({ variant, className, ...props }: ButtonProps) {
  return (
    <button className={twMerge(button({ variant }), className)} {...props}>
      {props.children}
    </button>
  );
}

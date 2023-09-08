import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: "rounded-lg transition-colors disabled:opacity-50 disabled:hover:bg-background disabled:cursor-not-allowed",
  variants: {
    variant: {
      outline: "border hover:bg-muted",
      ghost: "hover:bg-muted hover:bg-muted",
      filled:
        "transition-all text-sm py-2.5 px-[1rem] bg-[#D9EAB8] disabled:bg-[#C3D1A6] dark:text-background hover:opacity-70 disabled:hover:bg-[#C3D1A6]",
    },
  },
});

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof button>;

export function Button({ variant, className, ...props }: ButtonProps) {
  return (
    <button className={twMerge(button({ variant }), className)} {...props}>
      {props.children}
    </button>
  );
}

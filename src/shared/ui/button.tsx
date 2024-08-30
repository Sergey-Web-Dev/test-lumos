import clsx from "clsx";
import React, { ButtonHTMLAttributes, FC } from "react";

type ButtonVariants = "primary" | "secondary" | "outline";

export type ButtonProps = {
  variant: ButtonVariants;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ className, variant, ...props }) => {
  return (
    <button
      className={clsx(
        className,
        "cursor-pointer flex gap-2 items-center justify-center transition  duration-500 p-4",
        {
          primary:
            "text-white bg-[#3177F2] hover:bg-teal-600 disabled:opacity-50 shadow shadow-teal-500/30 rounded-3xl px-8",
          secondary:
            "text-white bg-[#FF5D17] px-32 rounded-xl hover:bg-rose-600 disabled:opacity-50 shadow shadow-rose-500/30",
          outline:
            "hover:text-white border border-slate-300 hover:bg-blue-300 hover:border-blue-500   disabled:opacity-50",
        }[variant]
      )}
      {...props}
    />
  );
};

export default Button;

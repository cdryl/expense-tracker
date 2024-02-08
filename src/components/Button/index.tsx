import clsx from "clsx";
import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

const Button: FC<
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ children, className, disabled, ...rest }) => (
  <button
    disabled={disabled}
    className={clsx(
      className,
      "flex items-center justify-center bg-green-800 text-white p-4 w-full rounded-full transition-colors hover:bg-green-600",
      {
        "bg-gray-400": disabled,
      }
    )}
    {...rest}
  >
    {children}
  </button>
);

export default Button;

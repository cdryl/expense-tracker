import clsx from "clsx";
import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import { ButtonProps, ButtonSize } from "./types";

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  disabled,
  size,
  ...rest
}) => (
  <button
    disabled={disabled}
    className={clsx(
      className,
      "text-center bg-pink text-white p-4 rounded-full transition-colors hover:bg-pink-dark",
      {
        "bg-gray-400": disabled,
        "p-4": size === ButtonSize.medium,
        "py-2 px-4 text-sm": size === ButtonSize.small,
      }
    )}
    {...rest}
  >
    {children}
  </button>
);

export default Button;

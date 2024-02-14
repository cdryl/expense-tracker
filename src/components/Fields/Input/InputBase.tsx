import { FC } from "react";
import { InputBaseProps } from "./types";
import clsx from "clsx";

const InputBase: FC<InputBaseProps> = ({
  label,
  isError,
  className,
  ...rest
}) => (
  <div className="w-full flex flex-col">
    <label className="text-xs text-white mb-1">{label}</label>
    <input
      className={clsx(
        className,
        "border border-pink  bg-purple-light text-white p-3 text-sm rounded-lg focus:outline-pink [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
        {
          "border-pink": isError,
        }
      )}
      {...rest}
    />
  </div>
);

export default InputBase;

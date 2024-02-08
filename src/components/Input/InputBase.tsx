import { FC } from "react";
import { InputBaseProps } from "./types";
import clsx from "clsx";

const InputBase: FC<InputBaseProps> = ({ label, isError, className, ...rest }) => {
  console.log(isError, 'asd')
  return (
    <div className="w-full flex flex-col">
      <label className="text-xs text-gray-600 mb-1">{label}</label>
      <input
        className={clsx(className, "border border-gray-400 p-3 text-sm rounded-lg focus:outline-green-700", {
          "border-red-400": isError,
        })}
        {...rest}
      />
    </div>
  )
};

export default InputBase;

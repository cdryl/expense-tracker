import clsx from "clsx";
import { FC } from "react";
import { TextareaBaseProps } from "./types";

const TextareaBase: FC<TextareaBaseProps> = ({
  label,
  className,
  isError,
  ...rest
}) => (
  <div className="w-full flex flex-col">
    <label className="text-xs text-white mb-1">{label}</label>
    <textarea
      rows={4}
      className={clsx(
        className,
        "border border-pink  bg-purple-light text-white p-3 text-sm rounded-lg focus:outline-pink resize-none",
        {
          "border-pink": isError,
        }
      )}
      {...rest}
    />
  </div>
);

export default TextareaBase;

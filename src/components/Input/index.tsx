import { FC } from "react";
import { InputProps } from "./types";
import { useController } from "react-hook-form";
import InputBase from "./InputBase";

const Input: FC<InputProps> = ({
  name,
  defaultValue,
  type,
  ...rest
}) => {
  const {
    field: { onChange, value, onBlur },
    fieldState: { invalid, error },
  } = useController({
    defaultValue,
    name,
  });

  return (
    <InputBase
      {...rest}
      type={type}
      onBlur={onBlur}
      value={value?.toString() || ""}
      onChange={(event) => {
        const { value: inputValue, valueAsNumber } = event.target;

        if (type === "number") {
          onChange(Number.isNaN(valueAsNumber) ? 0 : valueAsNumber);
        } else {
          onChange(inputValue);
        }
      }}
      isError={invalid || !!error}
    />
  );
};

export default Input;

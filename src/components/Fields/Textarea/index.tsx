import { FC } from "react";
import { TextareaProps } from "./types";
import { useController } from "react-hook-form";
import TextareaBase from "./TextareaBase";

const Textarea: FC<TextareaProps> = ({ name, defaultValue, ...rest }) => {
  const {
    field: { onChange, value, onBlur },
    fieldState: { invalid, error },
  } = useController({
    defaultValue,
    name,
  });

  return (
    <TextareaBase
      {...rest}
      onBlur={onBlur}
      value={value?.toString() || ""}
      onChange={onChange}
      isError={invalid || !!error}
    />
  );
};

export default Textarea;

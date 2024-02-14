import React, { FC } from "react";
import { useController } from "react-hook-form";
import SelectBase from "./SelectBase";
import { SelectProps } from "./types";

const Select: FC<SelectProps> = ({ name, options, ...rest }) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
  });

  const selectedOption = options.find((option) => option.value === value);
  const updatedOptions = options.filter(
    (option) =>
      option.label !== selectedOption?.label ||
      option.value !== selectedOption?.value
  );

  return (
    <SelectBase
      onChange={onChange}
      selectedOption={selectedOption?.label || options?.[0].label}
      options={updatedOptions}
      {...rest}
    />
  );
};

export default Select;

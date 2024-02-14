export interface SelectBaseItem {
  value: string;
  label: string;
}

export interface SelectBaseProps {
  options: SelectBaseItem[];
  label?: React.ReactNode;
  onChange: (value: string) => void;
  selectedOption?: string;
}

export interface SelectProps extends Omit<SelectBaseProps, "onChange"> {
  name: string;
}

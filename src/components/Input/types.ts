import { InputHTMLAttributes } from "react";

export interface InputBaseProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  className?: string;
  label?: React.ReactNode;
  isError?: boolean;
}

export interface InputProps
  extends Omit<InputBaseProps, "onChange" | "state" | "value"> {
  name: string;
}

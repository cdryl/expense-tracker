import { InputHTMLAttributes } from "react";

export interface InputBaseProps
  extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: React.ReactNode;
  isError?: boolean;
}

export interface InputProps
  extends Omit<InputBaseProps, "onChange" | "state" | "value"> {
  name: string;
}

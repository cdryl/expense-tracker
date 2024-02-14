import { TextareaHTMLAttributes } from "react";

export interface TextareaBaseProps extends TextareaHTMLAttributes<HTMLTextAreaElement>  {
  className?: string;
  label?: React.ReactNode;
  isError?: boolean;
}

export interface TextareaProps extends Omit<TextareaBaseProps, "onChange" | "state" | "value"> {
  name: string;
}

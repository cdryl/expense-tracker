import { ButtonHTMLAttributes } from "react";

export enum ButtonSize {
  small = "small",
  medium = "medium",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: ButtonSize;
}

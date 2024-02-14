import { FC, PropsWithChildren } from "react";
import { InnerProps } from "./types";
import clsx from "clsx";

const Inner: FC<PropsWithChildren<InnerProps>> = ({
  children,
  className,
  isWide,
}) => (
  <div
    className={clsx(className, "px-6 w-full mx-auto", {
      "max-w-[77.375rem]": !isWide,
      "max-w-[90rem]": isWide,
    })}
  >
    {children}
  </div>
);

export default Inner;

import { FC, PropsWithChildren } from "react";

const Inner: FC<PropsWithChildren> = ({ children }) => (
  <div className="px-6 w-full max-w-[77.375rem] mx-auto">{children}</div>
);

export default Inner;

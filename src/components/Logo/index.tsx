import { FC } from "react";
import { LogoProps } from "./types";
import { Link } from "react-router-dom";
import { CurrencyCircleDollar } from "@phosphor-icons/react";
import clsx from "clsx";

const Logo: FC<LogoProps> = ({ withoutName, className }) => (
  <Link to="/" className={clsx(className, "flex items-center gap-2")}>
    <span className="flex items-center justify-center w-8 h-8 bg-pink text-white rounded-full">
      <CurrencyCircleDollar size={24} />
    </span>
    {!withoutName && (
      <span className="text-lg font-medium text-white">Spend<span className="text-pink">Wise</span></span>
    )}
  </Link>
);

export default Logo;

import { FC, useEffect, useRef, useState } from "react";
import Inner from "../Inner";
import Logo from "../Logo";
import clsx from "clsx";

const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = headerRef.current?.clientHeight || 0;
      const scrolled = window.scrollY > headerHeight;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Inner
      isWide
      className={clsx(
        "fixed top-0 left-0 right-0 flex items-center justify-center py-4 transition-all duration-300",
        {
          "bg-purple shadow-md": isScrolled,
        }
      )}
    >
      <Logo />
    </Inner>
  );
};

export default Header;

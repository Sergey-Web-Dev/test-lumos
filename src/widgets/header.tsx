import { ROUTES } from "@/shared/constants/routes";
import LinkUI from "@/shared/ui/link";
import Logo from "@/shared/ui/logo";
import clsx from "clsx";
import React, { ReactNode } from "react";

const Header = ({
  onLogoClick,
  className,
  navbar,
  cartBlock,
}: {
  onLogoClick: () => void;
  className?: string;
  navbar?: ReactNode;
  cartBlock?: ReactNode;
}) => {
  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full shadow-md z-50 drop-shadow-xl mx-auto px-4 py-5 mb-4  flex justify-between items-center bg-white",
        className
      )}
    >
      <LinkUI href={ROUTES.HOME}>
        <Logo onLogoClick={onLogoClick} />
      </LinkUI>
      {navbar}
      {cartBlock}
    </header>
  );
};

export default Header;

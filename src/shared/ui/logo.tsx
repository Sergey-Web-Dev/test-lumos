import clsx from "clsx";
import React from "react";

const Logo = ({
  className,
  onLogoClick,
}: {
  className?: string;
  onLogoClick: () => void;
}) => {
  return (
    <div
      className={clsx(
        className,
        "flex justify-between items-center gap-2 text-xl"
      )}
      onClick={onLogoClick}
    >
      <VpnLogo />
      <span>VPN</span>
    </div>
  );
};

export const VpnLogo = () => (
  <img src="/logo.png" alt="logo.png" width={50} height={50} />
);

export default Logo;

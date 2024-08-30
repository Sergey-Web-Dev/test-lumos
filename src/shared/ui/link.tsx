import clsx from "clsx";
import Link from "next/link";
import React, { FC } from "react";

export type LinkProps = {} & Parameters<typeof Link>[0];

const LinkUI: FC<LinkProps> = ({ className, ...props }) => {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        "p-1 transition-all text-black hover:text-teal-600 cursor-pointer "
      )}
    />
  );
};

export default LinkUI;

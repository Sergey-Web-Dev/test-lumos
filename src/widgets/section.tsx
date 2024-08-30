import clsx from "clsx";
import React, { ReactElement } from "react";

const SectionText = ({
  text,
  className,
  children,
}: {
  text?: string;
  className?: string;
  children: ReactElement;
}) => {
  return (
    <section className={clsx(className, "flex justify-center items-center ")}>
      {text && text}
      {children}
    </section>
  );
};

export default SectionText;

import clsx from "clsx";
import React, { FC, ReactNode } from "react";

interface TwoSections {
  sectionOne: ReactNode;
  sectionTwo: ReactNode;
  border: ReactNode;
  className?: string;
  classNameFirstBlock?: string;
  classNameSecondBlock?: string;
}

const TwoSections: FC<TwoSections> = ({
  sectionOne,
  sectionTwo,
  border,
  className,
  classNameFirstBlock,
  classNameSecondBlock,
}) => {
  return (
    <section
      className={clsx(
        className,
        "rounded-3xl p-6 shadow-custom-shadow flex justify-evenly items-center  my-12"
      )}
    >
      <div className={classNameFirstBlock}>{sectionOne}</div>
      {border && <img src="/separator.png" alt="separator.png" />}
      <div className={classNameSecondBlock}>{sectionTwo}</div>
    </section>
  );
};

export default TwoSections;
